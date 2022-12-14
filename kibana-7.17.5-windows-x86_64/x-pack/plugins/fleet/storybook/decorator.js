"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const decorator = (story, storybook) => {
  return /*#__PURE__*/_react.default.createElement(_context.StorybookContext, {
    storyContext: storybook
  }, story());
};

exports.decorator = decorator;