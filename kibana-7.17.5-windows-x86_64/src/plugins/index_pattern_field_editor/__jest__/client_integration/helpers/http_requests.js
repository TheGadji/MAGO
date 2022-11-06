"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _mocks = require("../../../../../../src/core/public/mocks");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const registerHttpRequestMockHelpers = httpSetup => {
  const setFieldPreviewResponse = (response, error, delayResponse = false) => {
    const body = error ? JSON.stringify(error.body) : response;
    httpSetup.post.mockImplementation(() => {
      if (delayResponse) {
        return new Promise(resolve => {
          setTimeout(() => resolve({
            data: body
          }), 1000);
        });
      } else {
        return Promise.resolve({
          data: body
        });
      }
    });
  };

  return {
    setFieldPreviewResponse
  };
};

const init = () => {
  const httpSetup = _mocks.httpServiceMock.createSetupContract();

  const httpRequestsMockHelpers = registerHttpRequestMockHelpers(httpSetup);
  return {
    httpSetup,
    httpRequestsMockHelpers
  };
};

exports.init = init;