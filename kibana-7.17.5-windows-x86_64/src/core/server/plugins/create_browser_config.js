"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBrowserConfig = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const createBrowserConfig = (config, descriptor) => {
  if (!descriptor.exposeToBrowser) {
    return {
      browserConfig: {},
      exposedConfigKeys: {}
    };
  }

  return {
    browserConfig: recursiveCreateConfig(config, descriptor.exposeToBrowser),
    exposedConfigKeys: getExposedConfigKeys(descriptor)
  };
};

exports.createBrowserConfig = createBrowserConfig;

const recursiveCreateConfig = (config, descriptor = {}) => {
  return Object.entries(config || {}).reduce((browserConfig, [key, value]) => {
    const exposedConfig = descriptor[key];

    if (exposedConfig && typeof exposedConfig === 'object') {
      browserConfig[key] = recursiveCreateConfig(value, exposedConfig);
    }

    if (exposedConfig === true) {
      browserConfig[key] = value;
    }

    return browserConfig;
  }, {});
};
/**
 * Given a plugin descriptor, this function returns an object that contains a flattened list of exposed config keys. This is used for a CI
 * check to ensure that consumers don't accidentally expose more config settings to the browser than intended.
 */


function getExposedConfigKeys(descriptor) {
  const schemaStructure = descriptor.schema.getSchemaStructure();
  const flattenedConfigSchema = {};

  for (const {
    path,
    type
  } of schemaStructure) {
    if (checkIsPathExposed(path, descriptor.exposeToBrowser)) {
      flattenedConfigSchema[path.join('.')] = type;
    }
  }

  return flattenedConfigSchema;
}

function checkIsPathExposed(path, descriptor) {
  let isExposed = false;

  for (const key of path) {
    // Traverse the path to see if it is exposed or not
    const exposedConfig = descriptor[key];

    if (exposedConfig && typeof exposedConfig === 'object') {
      // @ts-expect-error Type 'undefined' is not assignable to type 'ExposedToBrowserDescriptor<T>'
      descriptor = exposedConfig;
      continue;
    }

    if (exposedConfig === true) {
      isExposed = true;
    }

    break;
  }

  return isExposed;
}