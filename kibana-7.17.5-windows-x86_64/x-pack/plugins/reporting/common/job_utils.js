"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJobV2Params = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// TODO: Remove this code once everyone is using the new PDF format, then we can also remove the legacy
// export type entirely

const isJobV2Params = ({
  sharingData
}) => sharingData.locatorParams != null;

exports.isJobV2Params = isJobV2Params;