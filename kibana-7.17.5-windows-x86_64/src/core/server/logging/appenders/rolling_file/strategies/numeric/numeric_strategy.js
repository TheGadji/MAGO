"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numericRollingStrategyConfigSchema = exports.NumericRollingStrategy = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = require("path");

var _configSchema = require("@kbn/config-schema");

var _rolling_tasks = require("./rolling_tasks");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const numericRollingStrategyConfigSchema = _configSchema.schema.object({
  type: _configSchema.schema.literal('numeric'),
  pattern: _configSchema.schema.string({
    defaultValue: '-%i',
    validate: pattern => {
      if (!pattern.includes('%i')) {
        return `pattern must include '%i'`;
      }
    }
  }),
  max: _configSchema.schema.number({
    min: 1,
    max: 100,
    defaultValue: 7
  })
});
/**
 * A rolling strategy that will suffix the file with a given pattern when rolling,
 * and will only retain a fixed amount of rolled files.
 *
 * @example
 * ```yaml
 * logging:
 *   appenders:
 *     rolling-file:
 *       type: rolling-file
 *       fileName: /kibana.log
 *       strategy:
 *         type: numeric
 *         pattern: "-%i"
 *         max: 2
 * ```
 * - During the first rollover kibana.log is renamed to kibana-1.log. A new kibana.log file is created and starts
 *   being written to.
 * - During the second rollover kibana-1.log is renamed to kibana-2.log and kibana.log is renamed to kibana-1.log.
 *   A new kibana.log file is created and starts being written to.
 * - During the third and subsequent rollovers, kibana-2.log is deleted, kibana-1.log is renamed to kibana-2.log and
 *   kibana.log is renamed to kibana-1.log. A new kibana.log file is created and starts being written to.
 *
 * See {@link NumericRollingStrategyConfig} for more details.
 */


exports.numericRollingStrategyConfigSchema = numericRollingStrategyConfigSchema;

class NumericRollingStrategy {
  constructor(config, context) {
    (0, _defineProperty2.default)(this, "logFilePath", void 0);
    (0, _defineProperty2.default)(this, "logFileBaseName", void 0);
    (0, _defineProperty2.default)(this, "logFileFolder", void 0);
    this.config = config;
    this.context = context;
    this.logFilePath = this.context.filePath;
    this.logFileBaseName = (0, _path.basename)(this.context.filePath);
    this.logFileFolder = (0, _path.dirname)(this.context.filePath);
  }

  async rollout() {
    const logFilePath = this.logFilePath;
    const logFileBaseName = this.logFileBaseName;
    const logFileFolder = this.logFileFolder;
    const pattern = this.config.pattern;

    if (await (0, _rolling_tasks.shouldSkipRollout)({
      logFilePath
    })) {
      return;
    } // get the files matching the pattern in the folder, and sort them by `%i` value


    const orderedFiles = await (0, _rolling_tasks.getOrderedRolledFiles)({
      logFileFolder,
      logFileBaseName,
      pattern
    });
    const filesToRoll = orderedFiles.slice(0, this.config.max - 1);
    const filesToDelete = orderedFiles.slice(filesToRoll.length, orderedFiles.length);

    if (filesToDelete.length > 0) {
      await (0, _rolling_tasks.deleteFiles)({
        logFileFolder,
        filesToDelete
      });
    }

    if (filesToRoll.length > 0) {
      await (0, _rolling_tasks.rollPreviousFilesInOrder)({
        filesToRoll,
        logFileFolder,
        logFileBaseName,
        pattern
      });
    }

    await (0, _rolling_tasks.rollCurrentFile)({
      pattern,
      logFileBaseName,
      logFileFolder
    }); // updates the context file info to mirror the new size and date
    // this is required for the time based policy, as the next time check
    // will be performed before the file manager updates the context itself by reopening
    // a writer to the new file.

    this.context.refreshFileInfo();
  }

}

exports.NumericRollingStrategy = NumericRollingStrategy;