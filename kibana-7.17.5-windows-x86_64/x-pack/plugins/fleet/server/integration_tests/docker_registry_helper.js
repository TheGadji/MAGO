"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDockerRegistry = useDockerRegistry;

var _child_process = require("child_process");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const DOCKER_START_TIMEOUT = 5 * 60 * 1000; // 5 minutes

function useDockerRegistry() {
  const packageRegistryPort = process.env.FLEET_PACKAGE_REGISTRY_PORT || '8081';

  if (!packageRegistryPort.match(/^[0-9]{4}/)) {
    throw new Error('Invalid FLEET_PACKAGE_REGISTRY_PORT');
  }

  let dockerProcess;

  async function startDockerRegistryServer() {
    const dockerImage = `docker.elastic.co/package-registry/distribution@sha256:de952debe048d903fc73e8a4472bb48bb95028d440cba852f21b863d47020c61`;
    const args = ['run', '--rm', '-p', `${packageRegistryPort}:8080`, dockerImage];
    dockerProcess = (0, _child_process.spawn)('docker', args, {
      stdio: 'inherit'
    });
    let isExited = dockerProcess.exitCode !== null;
    dockerProcess.once('exit', () => {
      isExited = true;
    });
    const startedAt = Date.now();

    while (!isExited && Date.now() - startedAt <= DOCKER_START_TIMEOUT) {
      try {
        const res = await (0, _nodeFetch.default)(`http://localhost:${packageRegistryPort}/`);

        if (res.status === 200) {
          return;
        }
      } catch (err) {// swallow errors
      }

      await delay(3000);
    }

    dockerProcess.kill();
    throw new Error('Unable to setup docker registry');
  }

  async function cleanupDockerRegistryServer() {
    if (dockerProcess && !dockerProcess.killed) {
      dockerProcess.kill();
    }
  }

  beforeAll(async () => {
    jest.setTimeout(5 * 60 * 1000); // 5 minutes timeout

    await startDockerRegistryServer();
  });
  afterAll(async () => {
    await cleanupDockerRegistryServer();
  });
  return `http://localhost:${packageRegistryPort}`;
}