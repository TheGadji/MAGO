"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fittingFunctionDefinitions = void 0;

var _i18n = require("@kbn/i18n");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const fittingFunctionDefinitions = [{
  id: 'None',
  title: _i18n.i18n.translate('xpack.lens.fittingFunctionsTitle.none', {
    defaultMessage: 'Hide'
  }),
  description: _i18n.i18n.translate('xpack.lens.fittingFunctionsDescription.none', {
    defaultMessage: 'Do not fill gaps'
  })
}, {
  id: 'Zero',
  title: _i18n.i18n.translate('xpack.lens.fittingFunctionsTitle.zero', {
    defaultMessage: 'Zero'
  }),
  description: _i18n.i18n.translate('xpack.lens.fittingFunctionsDescription.zero', {
    defaultMessage: 'Fill gaps with zeros'
  })
}, {
  id: 'Linear',
  title: _i18n.i18n.translate('xpack.lens.fittingFunctionsTitle.linear', {
    defaultMessage: 'Linear'
  }),
  description: _i18n.i18n.translate('xpack.lens.fittingFunctionsDescription.linear', {
    defaultMessage: 'Fill gaps with a line'
  })
}, {
  id: 'Carry',
  title: _i18n.i18n.translate('xpack.lens.fittingFunctionsTitle.carry', {
    defaultMessage: 'Last'
  }),
  description: _i18n.i18n.translate('xpack.lens.fittingFunctionsDescription.carry', {
    defaultMessage: 'Fill gaps with the last value'
  })
}, {
  id: 'Lookahead',
  title: _i18n.i18n.translate('xpack.lens.fittingFunctionsTitle.lookahead', {
    defaultMessage: 'Next'
  }),
  description: _i18n.i18n.translate('xpack.lens.fittingFunctionsDescription.lookahead', {
    defaultMessage: 'Fill gaps with the next value'
  })
}];
exports.fittingFunctionDefinitions = fittingFunctionDefinitions;