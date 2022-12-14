"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginsStatusService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _lodash = require("lodash");

var _util = require("util");

var _types = require("./types");

var _get_summary_status = require("./get_summary_status");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const STATUS_TIMEOUT_MS = 30 * 1000; // 30 seconds

const defaultStatus = {
  level: _types.ServiceStatusLevels.unavailable,
  summary: `Status check timed out after ${STATUS_TIMEOUT_MS / 1000}s`
};

class PluginsStatusService {
  // root plugins are those that do not have any dependencies
  constructor(deps, statusTimeoutMs = STATUS_TIMEOUT_MS) {
    (0, _defineProperty2.default)(this, "coreStatus", {
      elasticsearch: defaultStatus,
      savedObjects: defaultStatus
    });
    (0, _defineProperty2.default)(this, "pluginData", void 0);
    (0, _defineProperty2.default)(this, "rootPlugins", void 0);
    (0, _defineProperty2.default)(this, "orderedPluginNames", void 0);
    (0, _defineProperty2.default)(this, "pluginData$", new _rxjs.ReplaySubject(1));
    (0, _defineProperty2.default)(this, "pluginStatus", {});
    (0, _defineProperty2.default)(this, "pluginStatus$", new _rxjs.BehaviorSubject(this.pluginStatus));
    (0, _defineProperty2.default)(this, "reportedStatusSubscriptions", {});
    (0, _defineProperty2.default)(this, "isReportingStatus", {});
    (0, _defineProperty2.default)(this, "newRegistrationsAllowed", true);
    (0, _defineProperty2.default)(this, "coreSubscription", void 0);
    this.statusTimeoutMs = statusTimeoutMs;
    this.pluginData = this.initPluginData(deps.pluginDependencies);
    this.rootPlugins = this.getRootPlugins();
    this.orderedPluginNames = this.getOrderedPluginNames();
    this.coreSubscription = deps.core$.pipe((0, _operators.debounceTime)(10)).subscribe(coreStatus => {
      this.coreStatus = coreStatus;
      this.updateRootPluginsStatuses();
      this.updateDependantStatuses(this.rootPlugins);
      this.emitCurrentStatus();
    });
  }
  /**
   * Register a status Observable for a specific plugin
   * @param {PluginName} plugin The name of the plugin
   * @param {Observable<ServiceStatus>} status$ An external Observable that must be trusted as the source of truth for the status of the plugin
   * @throws An error if the status registrations are not allowed
   */


  set(plugin, status$) {
    var _this$reportedStatusS;

    if (!this.newRegistrationsAllowed) {
      throw new Error(`Custom statuses cannot be registered after setup, plugin [${plugin}] attempted`);
    }

    this.isReportingStatus[plugin] = true; // unsubscribe from any previous subscriptions. Ideally plugins should register a status Observable only once

    (_this$reportedStatusS = this.reportedStatusSubscriptions[plugin]) === null || _this$reportedStatusS === void 0 ? void 0 : _this$reportedStatusS.unsubscribe(); // delete any derived statuses calculated before the custom status Observable was registered

    delete this.pluginStatus[plugin];
    this.reportedStatusSubscriptions[plugin] = status$ // Set a timeout for externally-defined status Observables
    .pipe((0, _operators.timeoutWith)(this.statusTimeoutMs, status$.pipe((0, _operators.startWith)(defaultStatus))), (0, _operators.distinctUntilChanged)()).subscribe(status => {
      const levelChanged = this.updatePluginReportedStatus(plugin, status);

      if (levelChanged) {
        this.updateDependantStatuses([plugin]);
      }

      this.emitCurrentStatus();
    });
  }
  /**
   * Prevent plugins from registering status Observables
   */


  blockNewRegistrations() {
    this.newRegistrationsAllowed = false;
  }
  /**
   * Obtain an Observable of the status of all the plugins
   * @returns {Observable<Record<PluginName, ServiceStatus>>} An Observable that will yield the current status of all plugins
   */


  getAll$() {
    return this.pluginStatus$.asObservable().pipe( // do not emit until we have a status for all plugins
    (0, _operators.filter)(all => Object.keys(all).length === this.orderedPluginNames.length), (0, _operators.distinctUntilChanged)(_util.isDeepStrictEqual));
  }
  /**
   * Obtain an Observable of the status of the dependencies of the given plugin
   * @param {PluginName} plugin the name of the plugin whose dependencies' status must be retreived
   * @returns {Observable<Record<PluginName, ServiceStatus>>} An Observable that will yield the current status of the plugin's dependencies
   */


  getDependenciesStatus$(plugin) {
    const directDependencies = this.pluginData[plugin].dependencies;
    return this.getAll$().pipe((0, _operators.map)(allStatus => {
      const dependenciesStatus = {};
      directDependencies.forEach(dep => dependenciesStatus[dep] = allStatus[dep]);
      return dependenciesStatus;
    }), (0, _operators.debounceTime)(10));
  }
  /**
   * Obtain an Observable of the derived status of the given plugin
   * @param {PluginName} plugin the name of the plugin whose derived status must be retrieved
   * @returns {Observable<ServiceStatus>} An Observable that will yield the derived status of the plugin
   */


  getDerivedStatus$(plugin) {
    return this.pluginData$.asObservable().pipe((0, _operators.map)(pluginData => {
      var _pluginData$plugin;

      return (_pluginData$plugin = pluginData[plugin]) === null || _pluginData$plugin === void 0 ? void 0 : _pluginData$plugin.derivedStatus;
    }), (0, _operators.filter)(status => !!status), (0, _operators.distinctUntilChanged)(_util.isDeepStrictEqual));
  }
  /**
   * Hook to be called at the stop lifecycle event
   */


  stop() {
    // Cancel all active subscriptions
    this.coreSubscription.unsubscribe();
    Object.values(this.reportedStatusSubscriptions).forEach(subscription => {
      subscription.unsubscribe();
    });
  }
  /**
   * Initialize a convenience data structure
   * that maintain up-to-date information about the plugins and their statuses
   * @param {ReadonlyMap<PluginName, PluginName[]>} pluginDependencies Information about the different plugins and their dependencies
   * @returns {PluginData}
   */


  initPluginData(pluginDependencies) {
    const pluginData = {};

    if (pluginDependencies) {
      pluginDependencies.forEach((dependencies, name) => {
        pluginData[name] = {
          name,
          depth: 0,
          dependencies,
          reverseDependencies: [],
          derivedStatus: defaultStatus
        };
      });
      pluginDependencies.forEach((dependencies, name) => {
        dependencies.forEach(dependency => {
          pluginData[dependency].reverseDependencies.push(name);
        });
      });
    }

    return pluginData;
  }
  /**
   * Create a list with all the root plugins.
   * Root plugins are all those plugins that do not have any dependency.
   * @returns {PluginName[]} a list with all the root plugins present in the provided deps
   */


  getRootPlugins() {
    return Object.keys(this.pluginData).filter(plugin => this.pluginData[plugin].dependencies.length === 0);
  }
  /**
   * Obtain a list of plugins names, ordered by depth.
   * @see {calculateDepthRecursive}
   * @returns {PluginName[]} a list of plugins, ordered by depth + name
   */


  getOrderedPluginNames() {
    this.rootPlugins.forEach(plugin => {
      this.calculateDepthRecursive(plugin, 1);
    });
    return (0, _lodash.sortBy)(Object.values(this.pluginData), ['depth', 'name']).map(({
      name
    }) => name);
  }
  /**
   * Calculate the depth of the given plugin, knowing that it's has at least the specified depth
   * The depth of a plugin is determined by how many levels of dependencies the plugin has above it.
   * We define root plugins as depth = 1, plugins that only depend on root plugins will have depth = 2
   * and so on so forth
   * @param {PluginName} plugin the name of the plugin whose depth must be calculated
   * @param {number} depth the minimum depth that we know for sure this plugin has
   */


  calculateDepthRecursive(plugin, depth) {
    const pluginData = this.pluginData[plugin];
    pluginData.depth = Math.max(pluginData.depth, depth);
    const newDepth = depth + 1;
    pluginData.reverseDependencies.forEach(revDep => this.calculateDepthRecursive(revDep, newDepth));
  }
  /**
   * Updates the root plugins statuses according to the current core services status
   */


  updateRootPluginsStatuses() {
    const derivedStatus = (0, _get_summary_status.getSummaryStatus)(Object.entries(this.coreStatus), {
      allAvailableSummary: `All dependencies are available`
    }); // note that the derived status is the same for all root plugins

    this.rootPlugins.forEach(plugin => {
      this.pluginData[plugin].derivedStatus = derivedStatus;

      if (!this.isReportingStatus[plugin]) {
        // this root plugin has NOT registered any status Observable. Thus, its status is derived from core
        this.pluginStatus[plugin] = derivedStatus;
      }
    });
  }
  /**
   * Update the derived statuses of the specified plugins' dependant plugins,
   * If impacted plugins have not registered a custom status Observable, update their "current" status as well.
   * @param {PluginName[]} plugins The names of the plugins whose dependant plugins must be updated
   */


  updateDependantStatuses(plugins) {
    const toCheck = new Set();
    plugins.forEach(plugin => this.pluginData[plugin].reverseDependencies.forEach(revDep => toCheck.add(revDep))); // Note that we are updating the plugins in an ordered fashion.
    // This way, when updating plugin X (at depth = N),
    // all of its dependencies (at depth < N) have already been updated

    for (let i = 0; i < this.orderedPluginNames.length; ++i) {
      const current = this.orderedPluginNames[i];

      if (toCheck.has(current)) {
        // update the current plugin status
        this.updatePluginStatus(current); // flag all its reverse dependencies to be checked
        // TODO flag them only IF the status of this plugin has changed, seems to break some tests

        this.pluginData[current].reverseDependencies.forEach(revDep => toCheck.add(revDep));
      }
    }
  }
  /**
   * Determine the derived status of the specified plugin and update it on the pluginData structure
   * Optionally, if the plugin has not registered a custom status Observable, update its "current" status as well
   * @param {PluginName} plugin The name of the plugin to be updated
   */


  updatePluginStatus(plugin) {
    const newStatus = this.determinePluginStatus(plugin);
    this.pluginData[plugin].derivedStatus = newStatus;

    if (!this.isReportingStatus[plugin]) {
      // this plugin has NOT registered any status Observable.
      // Thus, its status is derived from its dependencies + core
      this.pluginStatus[plugin] = newStatus;
    }
  }
  /**
   * Deterime the current plugin status, taking into account its reported status, its derived status
   * and the status of the core services
   * @param {PluginName} plugin the name of the plugin whose status must be determined
   * @returns {ServiceStatus} The status of the plugin
   */


  determinePluginStatus(plugin) {
    const coreStatus = Object.entries(this.coreStatus);
    const newLocal = this.pluginData[plugin];
    let depsStatus = [];

    if (Object.keys(this.isReportingStatus).length) {
      // if at least one plugin has registered a status Observable... take into account plugin dependencies
      depsStatus = newLocal.dependencies.map(dependency => [dependency, this.pluginData[dependency].reportedStatus || this.pluginData[dependency].derivedStatus]);
    }

    const newStatus = (0, _get_summary_status.getSummaryStatus)([...coreStatus, ...depsStatus], {
      allAvailableSummary: `All dependencies are available`
    });
    return newStatus;
  }
  /**
   * Updates the reported status for the given plugin, along with the status of its dependencies tree.
   * @param {PluginName} plugin The name of the plugin whose reported status must be updated
   * @param {ServiceStatus} reportedStatus The newly reported status for that plugin
   * @return {boolean} true if the level of the reported status changed
   */


  updatePluginReportedStatus(plugin, reportedStatus) {
    const previousReportedStatus = this.pluginData[plugin].reportedStatus;
    this.pluginData[plugin].reportedStatus = reportedStatus;
    this.pluginStatus[plugin] = reportedStatus;
    return (previousReportedStatus === null || previousReportedStatus === void 0 ? void 0 : previousReportedStatus.level) !== reportedStatus.level;
  }
  /**
   * Emit the current status to internal Subjects, effectively propagating it to observers.
   */


  emitCurrentStatus() {
    this.pluginData$.next(this.pluginData); // we must clone the plugin status to prevent future modifications from updating current emission

    this.pluginStatus$.next({ ...this.pluginStatus
    });
  }

}

exports.PluginsStatusService = PluginsStatusService;