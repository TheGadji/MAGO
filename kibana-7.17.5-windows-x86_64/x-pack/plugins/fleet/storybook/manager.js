"use strict";

var _addons = require("@storybook/addons");

var _theming = require("@storybook/theming");

var _addonActions = require("@storybook/addon-actions");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


_addons.addons.setConfig({
  theme: (0, _theming.create)({
    base: 'light',
    brandTitle: 'Kibana Fleet Storybook',
    brandUrl: 'https://github.com/elastic/kibana/tree/main/x-pack/plugins/fleet'
  }),
  showPanel: true.valueOf,
  selectedPanel: _addonActions.PANEL_ID
});