"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requests = void 0;

var _get_certs = require("./get_certs");

var _get_index_pattern = require("./get_index_pattern");

var _get_latest_monitor = require("./get_latest_monitor");

var _get_monitor_availability = require("./get_monitor_availability");

var _get_monitor_duration = require("./get_monitor_duration");

var _get_monitor_details = require("./get_monitor_details");

var _get_monitor_locations = require("./get_monitor_locations");

var _get_monitor_states = require("./get_monitor_states");

var _get_monitor_status = require("./get_monitor_status");

var _get_pings = require("./get_pings");

var _get_ping_histogram = require("./get_ping_histogram");

var _get_snapshot_counts = require("./get_snapshot_counts");

var _get_index_status = require("./get_index_status");

var _get_journey_steps = require("./get_journey_steps");

var _get_journey_screenshot = require("./get_journey_screenshot");

var _get_journey_details = require("./get_journey_details");

var _get_network_events = require("./get_network_events");

var _get_journey_failed_steps = require("./get_journey_failed_steps");

var _get_last_successful_step = require("./get_last_successful_step");

var _get_journey_screenshot_blocks = require("./get_journey_screenshot_blocks");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const requests = {
  getCerts: _get_certs.getCerts,
  getIndexPattern: _get_index_pattern.getUptimeIndexPattern,
  getLatestMonitor: _get_latest_monitor.getLatestMonitor,
  getMonitorAvailability: _get_monitor_availability.getMonitorAvailability,
  getMonitorDurationChart: _get_monitor_duration.getMonitorDurationChart,
  getMonitorDetails: _get_monitor_details.getMonitorDetails,
  getMonitorLocations: _get_monitor_locations.getMonitorLocations,
  getMonitorStates: _get_monitor_states.getMonitorStates,
  getMonitorStatus: _get_monitor_status.getMonitorStatus,
  getPings: _get_pings.getPings,
  getPingHistogram: _get_ping_histogram.getPingHistogram,
  getSnapshotCount: _get_snapshot_counts.getSnapshotCount,
  getIndexStatus: _get_index_status.getIndexStatus,
  getJourneySteps: _get_journey_steps.getJourneySteps,
  getJourneyFailedSteps: _get_journey_failed_steps.getJourneyFailedSteps,
  getStepLastSuccessfulStep: _get_last_successful_step.getStepLastSuccessfulStep,
  getJourneyScreenshot: _get_journey_screenshot.getJourneyScreenshot,
  getJourneyScreenshotBlocks: _get_journey_screenshot_blocks.getJourneyScreenshotBlocks,
  getJourneyDetails: _get_journey_details.getJourneyDetails,
  getNetworkEvents: _get_network_events.getNetworkEvents
};
exports.requests = requests;