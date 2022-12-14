"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskRunner = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var _lodash = require("lodash");

var _server = require("../../../spaces/server");

var _server2 = require("../../../../../src/core/server");

var _server3 = require("../../../task_manager/server");

var _create_execution_handler = require("./create_execution_handler");

var _alert_instance = require("../alert_instance");

var _lib = require("../lib");

var _types = require("../types");

var _result_type = require("../lib/result_type");

var _alert_task_instance = require("./alert_task_instance");

var _plugin = require("../plugin");

var _server4 = require("../../../event_log/server");

var _is_alert_not_found_error = require("../lib/is_alert_not_found_error");

var _saved_objects = require("../saved_objects");

var _errors = require("../lib/errors");

var _create_alert_event_log_record_object = require("../lib/create_alert_event_log_record_object");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const FALLBACK_RETRY_INTERVAL = '5m'; // 1,000,000 nanoseconds in 1 millisecond

const Millis2Nanos = 1000 * 1000;

class TaskRunner {
  constructor(alertType, taskInstance, context) {
    (0, _defineProperty2.default)(this, "context", void 0);
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "taskInstance", void 0);
    (0, _defineProperty2.default)(this, "alertType", void 0);
    (0, _defineProperty2.default)(this, "ruleTypeRegistry", void 0);
    this.context = context;
    this.logger = context.logger;
    this.alertType = alertType;
    this.taskInstance = (0, _alert_task_instance.taskInstanceToAlertTaskInstance)(taskInstance);
    this.ruleTypeRegistry = context.ruleTypeRegistry;
  }

  async getApiKeyForAlertPermissions(alertId, spaceId) {
    const namespace = this.context.spaceIdToNamespace(spaceId); // Only fetch encrypted attributes here, we'll create a saved objects client
    // scoped with the API key to fetch the remaining data.

    const {
      attributes: {
        apiKey
      }
    } = await this.context.encryptedSavedObjectsClient.getDecryptedAsInternalUser('alert', alertId, {
      namespace
    });
    return apiKey;
  }

  getFakeKibanaRequest(spaceId, apiKey) {
    const requestHeaders = {};

    if (apiKey) {
      requestHeaders.authorization = `ApiKey ${apiKey}`;
    }

    const path = (0, _server.addSpaceIdToPath)('/', spaceId);

    const fakeRequest = _server2.KibanaRequest.from({
      headers: requestHeaders,
      path: '/',
      route: {
        settings: {}
      },
      url: {
        href: '/'
      },
      raw: {
        req: {
          url: '/'
        }
      }
    });

    this.context.basePathService.set(fakeRequest, path);
    return fakeRequest;
  }

  getServicesWithSpaceLevelPermissions(spaceId, apiKey) {
    const request = this.getFakeKibanaRequest(spaceId, apiKey);
    return [this.context.getServices(request), this.context.getRulesClientWithRequest(request)];
  }

  getExecutionHandler(alertId, alertName, tags, spaceId, apiKey, kibanaBaseUrl, actions, alertParams) {
    return (0, _create_execution_handler.createExecutionHandler)({
      alertId,
      alertName,
      tags,
      logger: this.logger,
      actionsPlugin: this.context.actionsPlugin,
      apiKey,
      actions,
      spaceId,
      alertType: this.alertType,
      kibanaBaseUrl,
      eventLogger: this.context.eventLogger,
      request: this.getFakeKibanaRequest(spaceId, apiKey),
      alertParams,
      supportsEphemeralTasks: this.context.supportsEphemeralTasks,
      maxEphemeralActionsPerAlert: this.context.maxEphemeralActionsPerAlert
    });
  }

  async executeAlertInstance(alertInstanceId, alertInstance, executionHandler) {
    const {
      actionGroup,
      subgroup: actionSubgroup,
      context,
      state
    } = alertInstance.getScheduledActionOptions();
    alertInstance.updateLastScheduledActions(actionGroup, actionSubgroup);
    alertInstance.unscheduleActions();
    return executionHandler({
      actionGroup,
      actionSubgroup,
      context,
      state,
      alertInstanceId
    });
  }

  async executeAlertInstances(services, alert, params, executionHandler, spaceId, event) {
    const {
      alertTypeId,
      consumer,
      schedule,
      throttle,
      notifyWhen,
      muteAll,
      mutedInstanceIds,
      name,
      tags,
      createdBy,
      updatedBy,
      createdAt,
      updatedAt,
      enabled,
      actions
    } = alert;
    const {
      params: {
        alertId
      },
      state: {
        alertInstances: alertRawInstances = {},
        alertTypeState = {},
        previousStartedAt
      }
    } = this.taskInstance;
    const namespace = this.context.spaceIdToNamespace(spaceId);
    const alertType = this.ruleTypeRegistry.get(alertTypeId);
    const alertInstances = (0, _lodash.mapValues)(alertRawInstances, rawAlertInstance => new _alert_instance.AlertInstance(rawAlertInstance));
    const originalAlertInstances = (0, _lodash.cloneDeep)(alertInstances);
    const originalAlertInstanceIds = new Set(Object.keys(originalAlertInstances));
    const eventLogger = this.context.eventLogger;
    const alertLabel = `${this.alertType.id}:${alertId}: '${name}'`;
    let updatedAlertTypeState;

    try {
      const ctx = {
        type: 'alert',
        name: `execute ${alert.alertTypeId}`,
        id: alertId,
        description: `execute [${alert.alertTypeId}] with name [${name}] in [${namespace !== null && namespace !== void 0 ? namespace : 'default'}] namespace`
      };
      updatedAlertTypeState = await this.context.executionContext.withContext(ctx, () => this.alertType.executor({
        alertId,
        services: { ...services,
          alertInstanceFactory: (0, _alert_instance.createAlertInstanceFactory)(alertInstances)
        },
        params,
        state: alertTypeState,
        startedAt: this.taskInstance.startedAt,
        previousStartedAt: previousStartedAt ? new Date(previousStartedAt) : null,
        spaceId,
        namespace,
        name,
        tags,
        createdBy,
        updatedBy,
        rule: {
          name,
          tags,
          consumer,
          producer: alertType.producer,
          ruleTypeId: alert.alertTypeId,
          ruleTypeName: alertType.name,
          enabled,
          schedule,
          actions,
          createdBy,
          updatedBy,
          createdAt,
          updatedAt,
          throttle,
          notifyWhen
        }
      }));
    } catch (err) {
      event.message = `alert execution failure: ${alertLabel}`;
      event.error = event.error || {};
      event.error.message = err.message;
      event.event = event.event || {};
      event.event.outcome = 'failure';
      throw new _lib.ErrorWithReason(_types.AlertExecutionStatusErrorReasons.Execute, err);
    }

    event.message = `alert executed: ${alertLabel}`;
    event.event = event.event || {};
    event.event.outcome = 'success';
    event.rule = { ...event.rule,
      name: alert.name
    }; // Cleanup alert instances that are no longer scheduling actions to avoid over populating the alertInstances object

    const instancesWithScheduledActions = (0, _lodash.pickBy)(alertInstances, alertInstance => alertInstance.hasScheduledActions());
    const recoveredAlertInstances = (0, _lodash.pickBy)(alertInstances, (alertInstance, id) => !alertInstance.hasScheduledActions() && originalAlertInstanceIds.has(id));
    logActiveAndRecoveredInstances({
      logger: this.logger,
      activeAlertInstances: instancesWithScheduledActions,
      recoveredAlertInstances,
      alertLabel
    });
    trackAlertDurations({
      originalAlerts: originalAlertInstances,
      currentAlerts: instancesWithScheduledActions,
      recoveredAlerts: recoveredAlertInstances
    });
    generateNewAndRecoveredInstanceEvents({
      eventLogger,
      originalAlertInstances,
      currentAlertInstances: instancesWithScheduledActions,
      recoveredAlertInstances,
      alertId,
      alertLabel,
      namespace,
      ruleType: alertType,
      rule: alert
    });

    if (!muteAll) {
      const mutedInstanceIdsSet = new Set(mutedInstanceIds);
      scheduleActionsForRecoveredInstances({
        recoveryActionGroup: this.alertType.recoveryActionGroup,
        recoveredAlertInstances,
        executionHandler,
        mutedInstanceIdsSet,
        logger: this.logger,
        alertLabel
      });
      const instancesToExecute = Object.entries(instancesWithScheduledActions).filter(([alertName, alertInstance]) => {
        const throttled = alertInstance.isThrottled(throttle);
        const muted = mutedInstanceIdsSet.has(alertName);
        let shouldExecuteAction = true;

        if (throttled || muted) {
          shouldExecuteAction = false;
          this.logger.debug(`skipping scheduling of actions for '${alertName}' in alert ${alertLabel}: instance is ${muted ? 'muted' : 'throttled'}`);
        } else if (notifyWhen === 'onActionGroupChange' && !alertInstance.scheduledActionGroupOrSubgroupHasChanged()) {
          shouldExecuteAction = false;
          this.logger.debug(`skipping scheduling of actions for '${alertName}' in alert ${alertLabel}: alert is active but action group has not changed`);
        }

        return shouldExecuteAction;
      });
      await Promise.all(instancesToExecute.map(([id, alertInstance]) => this.executeAlertInstance(id, alertInstance, executionHandler)));
    } else {
      this.logger.debug(`no scheduling of actions for alert ${alertLabel}: alert is muted.`);
    }

    return {
      alertTypeState: updatedAlertTypeState || undefined,
      alertInstances: (0, _lodash.mapValues)(instancesWithScheduledActions, alertInstance => alertInstance.toRaw())
    };
  }

  async validateAndExecuteAlert(services, apiKey, alert, event) {
    var _this$alertType$valid;

    const {
      params: {
        alertId,
        spaceId
      }
    } = this.taskInstance; // Validate

    const validatedParams = (0, _lib.validateAlertTypeParams)(alert.params, (_this$alertType$valid = this.alertType.validate) === null || _this$alertType$valid === void 0 ? void 0 : _this$alertType$valid.params);
    const executionHandler = this.getExecutionHandler(alertId, alert.name, alert.tags, spaceId, apiKey, this.context.kibanaBaseUrl, alert.actions, alert.params);
    return this.executeAlertInstances(services, alert, validatedParams, executionHandler, spaceId, event);
  }

  async loadAlertAttributesAndRun(event) {
    const {
      params: {
        alertId,
        spaceId
      }
    } = this.taskInstance;
    let apiKey;

    try {
      apiKey = await this.getApiKeyForAlertPermissions(alertId, spaceId);
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.AlertExecutionStatusErrorReasons.Decrypt, err);
    }

    const [services, rulesClient] = this.getServicesWithSpaceLevelPermissions(spaceId, apiKey);
    let alert; // Ensure API key is still valid and user has access

    try {
      alert = await rulesClient.get({
        id: alertId
      });

      if (_elasticApmNode.default.currentTransaction) {
        _elasticApmNode.default.currentTransaction.name = `Execute Alerting Rule: "${alert.name}"`;

        _elasticApmNode.default.currentTransaction.addLabels({
          alerting_rule_consumer: alert.consumer,
          alerting_rule_name: alert.name,
          alerting_rule_tags: alert.tags.join(', '),
          alerting_rule_type_id: alert.alertTypeId,
          alerting_rule_params: JSON.stringify(alert.params)
        });
      }
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.AlertExecutionStatusErrorReasons.Read, err);
    }

    try {
      this.ruleTypeRegistry.ensureRuleTypeEnabled(alert.alertTypeId);
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.AlertExecutionStatusErrorReasons.License, err);
    }

    return {
      state: await (0, _result_type.promiseResult)(this.validateAndExecuteAlert(services, apiKey, alert, event)),
      schedule: (0, _result_type.asOk)( // fetch the alert again to ensure we return the correct schedule as it may have
      // cahnged during the task execution
      (await rulesClient.get({
        id: alertId
      })).schedule)
    };
  }

  async run() {
    var _event$event, _event$event2;

    const {
      params: {
        alertId,
        spaceId
      },
      startedAt,
      state: originalState,
      schedule: taskSchedule
    } = this.taskInstance;

    if (_elasticApmNode.default.currentTransaction) {
      _elasticApmNode.default.currentTransaction.name = `Execute Alerting Rule`;

      _elasticApmNode.default.currentTransaction.addLabels({
        alerting_rule_id: alertId
      });
    }

    const runDate = new Date();
    const runDateString = runDate.toISOString();
    this.logger.debug(`executing alert ${this.alertType.id}:${alertId} at ${runDateString}`);
    const namespace = this.context.spaceIdToNamespace(spaceId);
    const eventLogger = this.context.eventLogger;
    const scheduleDelay = runDate.getTime() - this.taskInstance.runAt.getTime();
    const event = (0, _create_alert_event_log_record_object.createAlertEventLogRecordObject)({
      timestamp: runDateString,
      ruleId: alertId,
      ruleType: this.alertType,
      action: _plugin.EVENT_LOG_ACTIONS.execute,
      namespace,
      task: {
        scheduled: this.taskInstance.runAt.toISOString(),
        scheduleDelay: Millis2Nanos * scheduleDelay
      },
      savedObjects: [{
        id: alertId,
        type: 'alert',
        typeId: this.alertType.id,
        relation: _server4.SAVED_OBJECT_REL_PRIMARY
      }]
    });
    eventLogger.startTiming(event);
    const startEvent = (0, _lodash.cloneDeep)({ ...event,
      event: { ...event.event,
        action: _plugin.EVENT_LOG_ACTIONS.executeStart
      },
      message: `alert execution start: "${alertId}"`
    });
    eventLogger.logEvent(startEvent);
    const {
      state,
      schedule
    } = await errorAsAlertTaskRunResult(this.loadAlertAttributesAndRun(event));
    const executionStatus = (0, _result_type.map)(state, alertTaskState => (0, _lib.executionStatusFromState)(alertTaskState), err => (0, _lib.executionStatusFromError)(err)); // set the executionStatus date to same as event, if it's set

    if ((_event$event = event.event) !== null && _event$event !== void 0 && _event$event.start) {
      executionStatus.lastExecutionDate = new Date(event.event.start);
    }

    if (_elasticApmNode.default.currentTransaction) {
      if (executionStatus.status === 'ok' || executionStatus.status === 'active') {
        _elasticApmNode.default.currentTransaction.setOutcome('success');
      } else if (executionStatus.status === 'error' || executionStatus.status === 'unknown') {
        _elasticApmNode.default.currentTransaction.setOutcome('failure');
      }
    }

    this.logger.debug(`alertExecutionStatus for ${this.alertType.id}:${alertId}: ${JSON.stringify(executionStatus)}`);
    eventLogger.stopTiming(event);
    event.kibana = event.kibana || {};
    event.kibana.alerting = event.kibana.alerting || {};
    event.kibana.alerting.status = executionStatus.status; // Copy duration into execution status if available

    if (null != ((_event$event2 = event.event) === null || _event$event2 === void 0 ? void 0 : _event$event2.duration)) {
      var _event$event3;

      executionStatus.lastDuration = Math.round(((_event$event3 = event.event) === null || _event$event3 === void 0 ? void 0 : _event$event3.duration) / Millis2Nanos);
    } // if executionStatus indicates an error, fill in fields in
    // event from it


    if (executionStatus.error) {
      var _executionStatus$erro;

      event.event = event.event || {};
      event.event.reason = ((_executionStatus$erro = executionStatus.error) === null || _executionStatus$erro === void 0 ? void 0 : _executionStatus$erro.reason) || 'unknown';
      event.event.outcome = 'failure';
      event.error = event.error || {};
      event.error.message = event.error.message || executionStatus.error.message;

      if (!event.message) {
        event.message = `${this.alertType.id}:${alertId}: execution failed`;
      }
    }

    eventLogger.logEvent(event);
    const client = this.context.internalSavedObjectsRepository;
    const attributes = {
      executionStatus: (0, _lib.alertExecutionStatusToRaw)(executionStatus)
    };

    try {
      await (0, _saved_objects.partiallyUpdateAlert)(client, alertId, attributes, {
        ignore404: true,
        namespace,
        refresh: false
      });
    } catch (err) {
      this.logger.error(`error updating alert execution status for ${this.alertType.id}:${alertId} ${err.message}`);
    }

    return {
      state: (0, _result_type.map)(state, stateUpdates => {
        return { ...stateUpdates,
          previousStartedAt: startedAt
        };
      }, err => {
        const message = `Executing Alert ${spaceId}:${this.alertType.id}:${alertId} has resulted in Error: ${(0, _errors.getEsErrorMessage)(err)}`;

        if ((0, _is_alert_not_found_error.isAlertSavedObjectNotFoundError)(err, alertId)) {
          this.logger.debug(message);
        } else {
          this.logger.error(message);
        }

        return originalState;
      }),
      schedule: (0, _result_type.resolveErr)(schedule, error => {
        var _taskSchedule$interva;

        if ((0, _is_alert_not_found_error.isAlertSavedObjectNotFoundError)(error, alertId)) {
          const spaceMessage = spaceId ? `in the "${spaceId}" space ` : '';
          this.logger.warn(`Unable to execute rule "${alertId}" ${spaceMessage}because ${error.message} - this rule will not be rescheduled. To restart rule execution, try disabling and re-enabling this rule.`);
          (0, _server3.throwUnrecoverableError)(error);
        }

        return {
          interval: (_taskSchedule$interva = taskSchedule === null || taskSchedule === void 0 ? void 0 : taskSchedule.interval) !== null && _taskSchedule$interva !== void 0 ? _taskSchedule$interva : FALLBACK_RETRY_INTERVAL
        };
      })
    };
  }

}

exports.TaskRunner = TaskRunner;

function trackAlertDurations(params) {
  const currentTime = new Date().toISOString();
  const {
    currentAlerts,
    originalAlerts,
    recoveredAlerts
  } = params;
  const originalAlertIds = Object.keys(originalAlerts);
  const currentAlertIds = Object.keys(currentAlerts);
  const recoveredAlertIds = Object.keys(recoveredAlerts);
  const newAlertIds = (0, _lodash.without)(currentAlertIds, ...originalAlertIds); // Inject start time into instance state of new instances

  for (const id of newAlertIds) {
    const state = currentAlerts[id].getState();
    currentAlerts[id].replaceState({ ...state,
      start: currentTime
    });
  } // Calculate duration to date for active instances


  for (const id of currentAlertIds) {
    const state = originalAlertIds.includes(id) ? originalAlerts[id].getState() : currentAlerts[id].getState();
    const duration = state.start ? (new Date(currentTime).valueOf() - new Date(state.start).valueOf()) * 1000 * 1000 // nanoseconds
    : undefined;
    currentAlerts[id].replaceState({ ...state,
      ...(state.start ? {
        start: state.start
      } : {}),
      ...(duration !== undefined ? {
        duration
      } : {})
    });
  } // Inject end time into instance state of recovered instances


  for (const id of recoveredAlertIds) {
    const state = recoveredAlerts[id].getState();
    const duration = state.start ? (new Date(currentTime).valueOf() - new Date(state.start).valueOf()) * 1000 * 1000 // nanoseconds
    : undefined;
    recoveredAlerts[id].replaceState({ ...state,
      ...(duration ? {
        duration
      } : {}),
      ...(state.start ? {
        end: currentTime
      } : {})
    });
  }
}

function generateNewAndRecoveredInstanceEvents(params) {
  const {
    eventLogger,
    alertId,
    namespace,
    currentAlertInstances,
    originalAlertInstances,
    recoveredAlertInstances,
    rule,
    ruleType
  } = params;
  const originalAlertInstanceIds = Object.keys(originalAlertInstances);
  const currentAlertInstanceIds = Object.keys(currentAlertInstances);
  const recoveredAlertInstanceIds = Object.keys(recoveredAlertInstances);
  const newIds = (0, _lodash.without)(currentAlertInstanceIds, ...originalAlertInstanceIds);

  if (_elasticApmNode.default.currentTransaction) {
    _elasticApmNode.default.currentTransaction.addLabels({
      alerting_new_alerts: newIds.length
    });
  }

  for (const id of recoveredAlertInstanceIds) {
    var _recoveredAlertInstan;

    const {
      group: actionGroup,
      subgroup: actionSubgroup
    } = (_recoveredAlertInstan = recoveredAlertInstances[id].getLastScheduledActions()) !== null && _recoveredAlertInstan !== void 0 ? _recoveredAlertInstan : {};
    const state = recoveredAlertInstances[id].getState();
    const message = `${params.alertLabel} instance '${id}' has recovered`;
    logInstanceEvent(id, _plugin.EVENT_LOG_ACTIONS.recoveredInstance, message, state, actionGroup, actionSubgroup);
  }

  for (const id of newIds) {
    var _currentAlertInstance;

    const {
      actionGroup,
      subgroup: actionSubgroup
    } = (_currentAlertInstance = currentAlertInstances[id].getScheduledActionOptions()) !== null && _currentAlertInstance !== void 0 ? _currentAlertInstance : {};
    const state = currentAlertInstances[id].getState();
    const message = `${params.alertLabel} created new instance: '${id}'`;
    logInstanceEvent(id, _plugin.EVENT_LOG_ACTIONS.newInstance, message, state, actionGroup, actionSubgroup);
  }

  for (const id of currentAlertInstanceIds) {
    var _currentAlertInstance2;

    const {
      actionGroup,
      subgroup: actionSubgroup
    } = (_currentAlertInstance2 = currentAlertInstances[id].getScheduledActionOptions()) !== null && _currentAlertInstance2 !== void 0 ? _currentAlertInstance2 : {};
    const state = currentAlertInstances[id].getState();
    const message = `${params.alertLabel} active instance: '${id}' in ${actionSubgroup ? `actionGroup(subgroup): '${actionGroup}(${actionSubgroup})'` : `actionGroup: '${actionGroup}'`}`;
    logInstanceEvent(id, _plugin.EVENT_LOG_ACTIONS.activeInstance, message, state, actionGroup, actionSubgroup);
  }

  function logInstanceEvent(instanceId, action, message, state, group, subgroup) {
    const event = {
      event: {
        action,
        kind: 'alert',
        category: [ruleType.producer],
        ...(state !== null && state !== void 0 && state.start ? {
          start: state.start
        } : {}),
        ...(state !== null && state !== void 0 && state.end ? {
          end: state.end
        } : {}),
        ...((state === null || state === void 0 ? void 0 : state.duration) !== undefined ? {
          duration: state.duration
        } : {})
      },
      kibana: {
        alerting: {
          instance_id: instanceId,
          ...(group ? {
            action_group_id: group
          } : {}),
          ...(subgroup ? {
            action_subgroup: subgroup
          } : {})
        },
        saved_objects: [{
          rel: _server4.SAVED_OBJECT_REL_PRIMARY,
          type: 'alert',
          id: alertId,
          type_id: ruleType.id,
          namespace
        }]
      },
      message,
      rule: {
        id: rule.id,
        license: ruleType.minimumLicenseRequired,
        category: ruleType.id,
        ruleset: ruleType.producer,
        name: rule.name
      }
    };
    eventLogger.logEvent(event);
  }
}

function scheduleActionsForRecoveredInstances(params) {
  const {
    logger,
    recoveryActionGroup,
    recoveredAlertInstances,
    executionHandler,
    mutedInstanceIdsSet,
    alertLabel
  } = params;
  const recoveredIds = Object.keys(recoveredAlertInstances);

  for (const id of recoveredIds) {
    if (mutedInstanceIdsSet.has(id)) {
      logger.debug(`skipping scheduling of actions for '${id}' in alert ${alertLabel}: instance is muted`);
    } else {
      const instance = recoveredAlertInstances[id];
      instance.updateLastScheduledActions(recoveryActionGroup.id);
      instance.unscheduleActions();
      executionHandler({
        actionGroup: recoveryActionGroup.id,
        context: {},
        state: {},
        alertInstanceId: id
      });
      instance.scheduleActions(recoveryActionGroup.id);
    }
  }
}

function logActiveAndRecoveredInstances(params) {
  const {
    logger,
    activeAlertInstances,
    recoveredAlertInstances,
    alertLabel
  } = params;
  const activeInstanceIds = Object.keys(activeAlertInstances);
  const recoveredInstanceIds = Object.keys(recoveredAlertInstances);

  if (_elasticApmNode.default.currentTransaction) {
    _elasticApmNode.default.currentTransaction.addLabels({
      alerting_active_alerts: activeInstanceIds.length,
      alerting_recovered_alerts: recoveredInstanceIds.length
    });
  }

  if (activeInstanceIds.length > 0) {
    logger.debug(`alert ${alertLabel} has ${activeInstanceIds.length} active alert instances: ${JSON.stringify(activeInstanceIds.map(instanceId => {
      var _activeAlertInstances;

      return {
        instanceId,
        actionGroup: (_activeAlertInstances = activeAlertInstances[instanceId].getScheduledActionOptions()) === null || _activeAlertInstances === void 0 ? void 0 : _activeAlertInstances.actionGroup
      };
    }))}`);
  }

  if (recoveredInstanceIds.length > 0) {
    logger.debug(`alert ${alertLabel} has ${recoveredInstanceIds.length} recovered alert instances: ${JSON.stringify(recoveredInstanceIds)}`);
  }
}
/**
 * If an error is thrown, wrap it in an AlertTaskRunResult
 * so that we can treat each field independantly
 */


async function errorAsAlertTaskRunResult(future) {
  try {
    return await future;
  } catch (e) {
    return {
      state: (0, _result_type.asErr)(e),
      schedule: (0, _result_type.asErr)(e)
    };
  }
}