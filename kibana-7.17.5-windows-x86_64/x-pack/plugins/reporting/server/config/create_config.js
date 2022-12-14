"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfig$ = createConfig$;

var _i18n = require("@kbn/i18n");

var _crypto = _interopRequireDefault(require("crypto"));

var _lodash = require("lodash");

var _operators = require("rxjs/operators");

var _default_chromium_sandbox_disabled = require("./default_chromium_sandbox_disabled");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * Set up dynamic config defaults
 * - xpack.capture.browser.chromium.disableSandbox
 * - xpack.kibanaServer
 * - xpack.reporting.encryptionKey
 */


function createConfig$(core, config$, parentLogger) {
  const logger = parentLogger.clone(['config']);
  return config$.pipe((0, _operators.map)(config => {
    // encryption key
    let encryptionKey = config.encryptionKey;

    if (encryptionKey === undefined) {
      logger.warn(_i18n.i18n.translate('xpack.reporting.serverConfig.randomEncryptionKey', {
        defaultMessage: 'Generating a random key for xpack.reporting.encryptionKey. To prevent sessions from being invalidated on ' + 'restart, please set xpack.reporting.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.'
      }));
      encryptionKey = _crypto.default.randomBytes(16).toString('hex');
    }

    const {
      kibanaServer: reportingServer
    } = config;
    const serverInfo = core.http.getServerInfo(); // kibanaServer.hostname, default to server.host, don't allow "0"

    let kibanaServerHostname = reportingServer.hostname ? reportingServer.hostname : serverInfo.hostname;

    if (kibanaServerHostname === '0') {
      logger.warn(_i18n.i18n.translate('xpack.reporting.serverConfig.invalidServerHostname', {
        defaultMessage: `Found 'server.host: "0"' in Kibana configuration. This is incompatible with Reporting. ` + `To enable Reporting to work, '{configKey}: 0.0.0.0' is being automatically to the configuration. ` + `You can change the setting to 'server.host: 0.0.0.0' or add '{configKey}: 0.0.0.0' in kibana.yml to prevent this message.`,
        values: {
          configKey: 'xpack.reporting.kibanaServer.hostname'
        }
      }));
      kibanaServerHostname = '0.0.0.0';
    } // kibanaServer.port, default to server.port


    const kibanaServerPort = reportingServer.port ? reportingServer.port : serverInfo.port; // prettier-ignore
    // kibanaServer.protocol, default to server.protocol

    const kibanaServerProtocol = reportingServer.protocol ? reportingServer.protocol : serverInfo.protocol;
    return { ...config,
      encryptionKey,
      kibanaServer: {
        hostname: kibanaServerHostname,
        port: kibanaServerPort,
        protocol: kibanaServerProtocol
      }
    };
  }), (0, _operators.mergeMap)(async config => {
    if (config.capture.browser.chromium.disableSandbox != null) {
      // disableSandbox was set by user
      return config;
    } // disableSandbox was not set by user, apply default for OS


    const {
      os,
      disableSandbox
    } = await (0, _default_chromium_sandbox_disabled.getDefaultChromiumSandboxDisabled)();
    const osName = [os.os, os.dist, os.release].filter(Boolean).map(_lodash.upperFirst).join(' ');
    logger.debug(_i18n.i18n.translate('xpack.reporting.serverConfig.osDetected', {
      defaultMessage: `Running on OS: '{osName}'`,
      values: {
        osName
      }
    }));

    if (disableSandbox === true) {
      logger.warn(_i18n.i18n.translate('xpack.reporting.serverConfig.autoSet.sandboxDisabled', {
        defaultMessage: `Chromium sandbox provides an additional layer of protection, but is not supported for {osName} OS. Automatically setting '{configKey}: true'.`,
        values: {
          configKey: 'xpack.reporting.capture.browser.chromium.disableSandbox',
          osName
        }
      }));
    } else {
      logger.info(_i18n.i18n.translate('xpack.reporting.serverConfig.autoSet.sandboxEnabled', {
        defaultMessage: `Chromium sandbox provides an additional layer of protection, and is supported for {osName} OS. Automatically enabling Chromium sandbox.`,
        values: {
          osName
        }
      }));
    }

    return { ...config,
      capture: { ...config.capture,
        browser: { ...config.capture.browser,
          chromium: { ...config.capture.browser.chromium,
            disableSandbox
          }
        }
      }
    };
  }));
}