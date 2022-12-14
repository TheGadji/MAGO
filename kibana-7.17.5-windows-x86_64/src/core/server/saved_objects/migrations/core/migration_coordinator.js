"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordinateMigration = coordinateMigration;

var _lodash = _interopRequireDefault(require("lodash"));

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/*
 * This provides a mechanism for preventing multiple Kibana instances from
 * simultaneously running migrations on the same index. It synchronizes this
 * by handling index creation conflicts, and putting this instance into a
 * poll loop that periodically checks to see if the index is migrated.
 *
 * The reason we have to coordinate this, rather than letting each Kibana instance
 * perform duplicate work, is that if we allowed each Kibana to simply run migrations in
 * parallel, they would each try to reindex and each try to create the destination index.
 * If those indices already exist, it may be due to contention between multiple Kibana
 * instances (which is safe to ignore), but it may be due to a partially completed migration,
 * or someone tampering with the Kibana alias. In these cases, it's not clear that we should
 * just migrate data into an existing index. Such an action could result in data loss. Instead,
 * we should probably fail, and the Kibana sys-admin should clean things up before relaunching
 * Kibana.
 */
const DEFAULT_POLL_INTERVAL = 15000;

/**
 * Runs the migration specified by opts. If the migration fails due to an index
 * creation conflict, this falls into a polling loop, checking every pollInterval
 * milliseconds if the index is migrated.
 *
 * @export
 * @param {Opts} opts
 * @prop {Migration} runMigration - A function that runs the index migration
 * @prop {IsMigrated} isMigrated - A function which checks if the index is already migrated
 * @prop {Logger} log - The migration logger
 * @prop {number} pollInterval - How often, in ms, to check that the index is migrated
 * @returns
 */
async function coordinateMigration(opts) {
  try {
    return await opts.runMigration();
  } catch (error) {
    const waitingIndex = handleIndexExists(error, opts.log);

    if (waitingIndex) {
      opts.setStatus({
        status: 'waiting_for_other_nodes',
        waitingIndex
      });
      await waitForMigration(opts.isMigrated, opts.pollInterval);
      return {
        status: 'skipped'
      };
    }

    throw error;
  }
}
/**
 * If the specified error is an index exists error, this logs a warning,
 * and is the cue for us to fall into a polling loop, waiting for some
 * other Kibana instance to complete the migration.
 */


function handleIndexExists(error, log) {
  const isIndexExistsError = _lodash.default.get(error, 'body.error.type') === 'resource_already_exists_exception';

  if (!isIndexExistsError) {
    return undefined;
  }

  const index = _lodash.default.get(error, 'body.error.index');

  log.warning(`Another Kibana instance appears to be migrating the index. Waiting for ` + `that migration to complete. If no other Kibana instance is attempting ` + `migrations, you can get past this message by deleting index ${index} and ` + `restarting Kibana.`);
  return index;
}
/**
 * Polls isMigrated every pollInterval milliseconds until it returns true.
 */


async function waitForMigration(isMigrated, pollInterval = DEFAULT_POLL_INTERVAL) {
  while (true) {
    if (await isMigrated()) {
      return;
    }

    await sleep(pollInterval);
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}