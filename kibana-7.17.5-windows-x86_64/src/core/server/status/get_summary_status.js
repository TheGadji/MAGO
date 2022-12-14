"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSummaryStatus = void 0;

var _types = require("./types");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Returns a single {@link ServiceStatus} that summarizes the most severe status level from a group of statuses.
 */
const getSummaryStatus = (statuses, {
  allAvailableSummary = `All services are available`,
  maxServices = 3
} = {}) => {
  const {
    highestLevel,
    highestStatuses
  } = highestLevelSummary(statuses);

  if (highestLevel === _types.ServiceStatusLevels.available) {
    return {
      level: _types.ServiceStatusLevels.available,
      summary: allAvailableSummary
    };
  } else {
    const affectedServices = highestStatuses.map(([serviceName]) => serviceName);
    return {
      level: highestLevel,
      summary: getSummaryContent(affectedServices, highestLevel, maxServices),
      // TODO: include URL to status page
      detail: `See the status page for more information`,
      meta: {
        affectedServices
      }
    };
  }
};

exports.getSummaryStatus = getSummaryStatus;

const getSummaryContent = (affectedServices, statusLevel, maxServices) => {
  const serviceCount = affectedServices.length;

  if (serviceCount === 1) {
    return `1 service is ${statusLevel.toString()}: ${affectedServices[0]}`;
  } else if (serviceCount > maxServices) {
    const exceedingCount = serviceCount - maxServices;
    return `${serviceCount} services are ${statusLevel.toString()}: ${affectedServices.slice(0, maxServices).join(', ')} and ${exceedingCount} other(s)`;
  } else {
    return `${serviceCount} services are ${statusLevel.toString()}: ${affectedServices.join(', ')}`;
  }
};

const highestLevelSummary = statuses => {
  let highestLevel = _types.ServiceStatusLevels.available;
  let highestStatuses = [];

  for (const pair of statuses) {
    if (pair[1].level === highestLevel) {
      highestStatuses.push(pair);
    } else if (pair[1].level > highestLevel) {
      highestLevel = pair[1].level;
      highestStatuses = [pair];
    }
  }

  return {
    highestLevel,
    highestStatuses
  };
};