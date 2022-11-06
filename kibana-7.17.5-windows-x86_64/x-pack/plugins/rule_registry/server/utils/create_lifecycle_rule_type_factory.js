"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLifecycleRuleTypeFactory = void 0;

var _create_lifecycle_executor = require("./create_lifecycle_executor");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createLifecycleRuleTypeFactory = ({
  logger,
  ruleDataClient
}) => type => {
  const createBoundLifecycleExecutor = (0, _create_lifecycle_executor.createLifecycleExecutor)(logger, ruleDataClient);
  const executor = createBoundLifecycleExecutor(type.executor);
  return { ...type,
    executor: executor
  };
};

exports.createLifecycleRuleTypeFactory = createLifecycleRuleTypeFactory;