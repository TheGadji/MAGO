"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playwrightRunTests = playwrightRunTests;

var _url = _interopRequireDefault(require("url"));

var _synthetics = require("@elastic/synthetics");

var _es_archiver = require("./tasks/es_archiver");

require("./journeys");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/* eslint-disable no-console */


function playwrightRunTests() {
  return async ({
    getService
  }) => {
    const results = await playwrightStart(getService);
    Object.entries(results).forEach(([_journey, result]) => {
      if (result.status !== 'succeeded') {
        throw new Error('Tests failed');
      }
    });
  };
}

async function playwrightStart(getService) {
  console.log('Loading esArchiver...');
  const esArchiver = getService('esArchiver');
  (0, _es_archiver.esArchiverLoad)('full_heartbeat');
  const config = getService('config');
  await esArchiver.loadIfNeeded('x-pack/test/functional/es_archives/ml/farequote');

  const kibanaUrl = _url.default.format({
    protocol: config.get('servers.kibana.protocol'),
    hostname: config.get('servers.kibana.hostname'),
    port: config.get('servers.kibana.port')
  });

  const res = await (0, _synthetics.run)({
    params: {
      kibanaUrl,
      getService
    },
    playwrightOptions: {
      headless: true,
      chromiumSandbox: false,
      timeout: 60 * 1000
    }
  });
  console.log('Removing esArchiver...');
  (0, _es_archiver.esArchiverUnload)('full_heartbeat');
  return res;
}