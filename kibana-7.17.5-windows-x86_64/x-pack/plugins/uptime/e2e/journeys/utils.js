"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuerystring = exports.delay = exports.byTestId = exports.assertText = exports.assertNotText = void 0;
exports.loginToKibana = loginToKibana;
exports.waitForLoadingToFinish = waitForLoadingToFinish;

var _synthetics = require("@elastic/synthetics");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function waitForLoadingToFinish({
  page
}) {
  while (true) {
    if ((await page.$(byTestId('kbnLoadingMessage'))) === null) break;
    await page.waitForTimeout(5 * 1000);
  }
}

async function loginToKibana({
  page
}) {
  await page.fill('[data-test-subj=loginUsername]', 'elastic', {
    timeout: 60 * 1000
  });
  await page.fill('[data-test-subj=loginPassword]', 'changeme');
  await page.click('[data-test-subj=loginSubmit]');
  await waitForLoadingToFinish({
    page
  });
}

const byTestId = testId => {
  return `[data-test-subj=${testId}]`;
};

exports.byTestId = byTestId;

const assertText = async ({
  page,
  text
}) => {
  await page.waitForSelector(`text=${text}`, {
    timeout: 60 * 1000
  });
  (0, _synthetics.expect)(await page.$(`text=${text}`)).toBeTruthy();
};

exports.assertText = assertText;

const assertNotText = async ({
  page,
  text
}) => {
  (0, _synthetics.expect)(await page.$(`text=${text}`)).toBeFalsy();
};

exports.assertNotText = assertNotText;

const getQuerystring = params => {
  return Object.entries(params).map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&');
};

exports.getQuerystring = getQuerystring;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

exports.delay = delay;