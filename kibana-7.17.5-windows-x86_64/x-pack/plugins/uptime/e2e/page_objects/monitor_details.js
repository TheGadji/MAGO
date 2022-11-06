"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monitorDetailsPageProvider = monitorDetailsPageProvider;

var _synthetics = require("@elastic/synthetics");

var _utils = require("../journeys/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function monitorDetailsPageProvider({
  page,
  kibanaUrl
}) {
  const overview = `${kibanaUrl}/app/uptime`;
  return {
    async dismissSyntheticsCallout() {
      await page.click('[data-test-subj=uptimeDismissSyntheticsCallout]', {
        timeout: 60 * 1000
      });
    },

    async assertText({
      text
    }) {
      await page.waitForSelector(`text=${text}`);
      (0, _synthetics.expect)(await page.$(`text=${text}`)).toBeTruthy();
    },

    async fillByTestSubj(dataTestSubj, value) {
      await page.fill(`[data-test-subj=${dataTestSubj}]`, value);
    },

    async selectByTestSubj(dataTestSubj, value) {
      await page.selectOption(`[data-test-subj=${dataTestSubj}]`, value);
    },

    async checkByTestSubj(dataTestSubj, value) {
      await page.check(`[data-test-subj=${dataTestSubj}]`);
    },

    async clickByTestSubj(dataTestSubj) {
      await page.click(`[data-test-subj=${dataTestSubj}]`);
    },

    async findByTestSubj(dataTestSubj) {
      return await page.waitForSelector(`[data-test-subj=${dataTestSubj}]`);
    },

    async findByText(text) {
      return await page.waitForSelector(`text=${text}`);
    },

    async waitForLoadingToFinish() {
      while (true) {
        if ((await page.$((0, _utils.byTestId)('kbnLoadingMessage'))) === null) break;
        await page.waitForTimeout(5 * 1000);
      }
    },

    async loginToKibana() {
      await page.fill('[data-test-subj=loginUsername]', 'elastic', {
        timeout: 60 * 1000
      });
      await page.fill('[data-test-subj=loginPassword]', 'changeme');
      await page.click('[data-test-subj=loginSubmit]');
      await this.waitForLoadingToFinish();
    },

    async navigateToMonitorDetails(monitorId) {
      await page.click((0, _utils.byTestId)(`monitor-page-link-${monitorId}`));
    },

    async navigateToOverviewPage(options) {
      await page.goto(`${overview}${options ? `?${(0, _utils.getQuerystring)(options)}` : ''}`, {
        waitUntil: 'networkidle'
      });
    },

    async selectFilterItem(filterType, itemArg) {
      const itemList = Array.isArray(itemArg) ? itemArg : [itemArg];
      await page.click(`[aria-label="expands filter group for ${filterType} filter"]`);
      await this.clickFilterItems(itemList);
      return this.applyFilterItems(filterType);
    },

    async clickFilterItems(itemList) {
      for (const title of itemList) {
        await page.click(`li[title="${title}"]`);
      }
    },

    async applyFilterItems(filterType) {
      await page.click(`[aria-label="Apply the selected filters for ${filterType}"]`);
    },

    async setStatusFilterUp() {
      await page.click('[data-test-subj="xpack.uptime.filterBar.filterStatusUp"]');
    },

    async setStatusFilterDown() {
      await page.click('[data-test-subj="xpack.uptime.filterBar.filterStatusDown"]');
    },

    async refreshFromES() {
      await (0, _utils.byTestId)('superDatePickerApplyTimeButton');
    },

    async enableAnomalyDetection() {
      await page.click((0, _utils.byTestId)('uptimeEnableAnomalyBtn'));
    },

    async getMonitorRedirects() {
      return await page.textContent((0, _utils.byTestId)('uptimeMonitorRedirectInfo'));
    },

    async expandPingDetails() {
      await page.click((0, _utils.byTestId)('uptimePingListExpandBtn'));
    },

    async ensureAnomalyDetectionFlyoutIsOpen() {
      await page.waitForSelector((0, _utils.byTestId)('uptimeMLFlyout'));
    },

    async isMLMenuVisible() {
      return await page.isVisible((0, _utils.byTestId)('uptimeManageMLContextMenu'), {
        timeout: 3000
      });
    },

    async canCreateJob() {
      await this.ensureAnomalyDetectionFlyoutIsOpen();
      const createJobBtn = await page.$((0, _utils.byTestId)('uptimeMLCreateJobBtn'));
      return await createJobBtn.isEnabled();
    },

    async openAnomalyDetectionMenu() {
      const visible = await this.isMLMenuVisible();

      if (visible === false) {
        await page.click((0, _utils.byTestId)('uptimeManageMLJobBtn'), {
          timeout: 5000
        });
      }
    },

    async closeAnomalyDetectionMenu() {
      if ((await this.isMLMenuVisible()) === true) {
        await page.click((0, _utils.byTestId)('uptimeManageMLJobBtn'), {
          timeout: 5000
        });
      }
    },

    async waitAndRefresh(timeout) {
      await (0, _utils.delay)(timeout !== null && timeout !== void 0 ? timeout : 1000);
      await this.refreshFromES();
      await this.waitForLoadingToFinish();
    },

    async updateAlert({
      id,
      threshold
    }) {
      await this.fillByTestSubj('alertNameInput', id);
      await this.selectAlertThreshold(threshold);
    },

    async selectAlertThreshold(threshold) {
      await this.clickByTestSubj('uptimeAnomalySeverity');
      await this.clickByTestSubj('anomalySeveritySelect');
      await page.click(`text=${threshold}`);
    },

    async disableAnomalyDetection() {
      await this.openAnomalyDetectionMenu();
      await page.click((0, _utils.byTestId)('uptimeDeleteMLJobBtn'), {
        timeout: 10000
      });
      await page.click((0, _utils.byTestId)('confirmModalConfirmButton'));
      await page.waitForSelector('text=Job deleted');
      await this.closeAnomalyDetectionMenu();
    },

    async disableAnomalyDetectionAlert() {
      await this.openAnomalyDetectionMenu();
      await page.click((0, _utils.byTestId)('uptimeManageAnomalyAlertBtn'), {
        timeout: 10000
      });
      await page.click((0, _utils.byTestId)('uptimeDisableAnomalyAlertBtn'));
      await page.click((0, _utils.byTestId)('confirmModalConfirmButton'));
      await page.waitForSelector('text=Rule successfully disabled!');
      await this.closeAnomalyDetectionMenu();
    }

  };
}