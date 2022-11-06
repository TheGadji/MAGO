"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenshots$ = getScreenshots$;

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var Rx = _interopRequireWildcard(require("rxjs"));

var _operators = require("rxjs/operators");

var _schema_utils = require("../../../common/schema_utils");

var _constants = require("../../../common/constants");

var _observable_handler = require("./observable_handler");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getTimeouts = captureConfig => ({
  openUrl: {
    timeoutValue: (0, _schema_utils.durationToNumber)(captureConfig.timeouts.openUrl),
    configValue: `xpack.reporting.capture.timeouts.openUrl`,
    label: 'open URL'
  },
  waitForElements: {
    timeoutValue: (0, _schema_utils.durationToNumber)(captureConfig.timeouts.waitForElements),
    configValue: `xpack.reporting.capture.timeouts.waitForElements`,
    label: 'wait for elements'
  },
  renderComplete: {
    timeoutValue: (0, _schema_utils.durationToNumber)(captureConfig.timeouts.renderComplete),
    configValue: `xpack.reporting.capture.timeouts.renderComplete`,
    label: 'render complete'
  },
  loadDelay: (0, _schema_utils.durationToNumber)(captureConfig.loadDelay)
});

const DEFAULT_SETUP_RESULT = {
  elementsPositionAndAttributes: null,
  timeRange: null
};

function getScreenshots$(captureConfig, browserDriverFactory, options) {
  const apmTrans = _elasticApmNode.default.startTransaction('screenshot-pipeline', _constants.REPORTING_TRANSACTION_TYPE);

  const {
    layout
  } = options;
  const apmCreatePage = apmTrans === null || apmTrans === void 0 ? void 0 : apmTrans.startSpan('create-page', 'wait');
  const {
    browserTimezone,
    logger
  } = options;
  return browserDriverFactory.createPage({
    browserTimezone,
    // not provided in 7.17: openUrlTimeout
    defaultViewport: {
      width: layout.width
    }
  }, logger).pipe((0, _operators.mergeMap)(({
    driver,
    exit$
  }) => {
    apmCreatePage === null || apmCreatePage === void 0 ? void 0 : apmCreatePage.end();
    exit$.subscribe({
      error: () => apmTrans === null || apmTrans === void 0 ? void 0 : apmTrans.end()
    });
    const screen = new _observable_handler.ScreenshotObservableHandler(driver, options, getTimeouts(captureConfig));
    return Rx.from(options.urlsOrUrlLocatorTuples).pipe((0, _operators.concatMap)((urlOrUrlLocatorTuple, index) => screen.setupPage(index, urlOrUrlLocatorTuple, apmTrans).pipe((0, _operators.catchError)(err => {
      screen.checkPageIsOpen(); // this fails the job if the browser has closed

      logger.error(err);
      return Rx.of({ ...DEFAULT_SETUP_RESULT,
        error: err
      }); // allow failover screenshot capture
    }), (0, _operators.takeUntil)(exit$), screen.getScreenshots())), (0, _operators.take)(options.urlsOrUrlLocatorTuples.length), (0, _operators.toArray)());
  }), (0, _operators.first)());
}