"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleDataInstaller = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _boom = require("@hapi/boom");

var _translate_timestamp = require("./lib/translate_timestamp");

var _create_index_name = require("./lib/create_index_name");

var _insert_data_into_index = require("./lib/insert_data_into_index");

var _errors = require("./errors");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Utility class in charge of installing and uninstalling sample datasets
 */
class SampleDataInstaller {
  constructor({
    esClient,
    soClient,
    sampleDatasets,
    logger
  }) {
    (0, _defineProperty2.default)(this, "esClient", void 0);
    (0, _defineProperty2.default)(this, "soClient", void 0);
    (0, _defineProperty2.default)(this, "sampleDatasets", void 0);
    (0, _defineProperty2.default)(this, "logger", void 0);
    this.esClient = esClient;
    this.soClient = soClient;
    this.sampleDatasets = sampleDatasets;
    this.logger = logger;
  }

  async install(datasetId, installDate = new Date()) {
    const sampleDataset = this.sampleDatasets.find(({
      id
    }) => id === datasetId);

    if (!sampleDataset) {
      throw new _errors.SampleDataInstallError(`Sample dataset ${datasetId} not found`, 404);
    }

    const nowReference = (0, _translate_timestamp.dateToIso8601IgnoringTime)(installDate);
    const createdDocsPerIndex = {};

    for (let i = 0; i < sampleDataset.dataIndices.length; i++) {
      const dataIndex = sampleDataset.dataIndices[i];
      const indexName = (0, _create_index_name.createIndexName)(sampleDataset.id, dataIndex.id); // clean up any old installation of dataset

      await this.uninstallDataIndex(sampleDataset, dataIndex);
      await this.installDataIndex(sampleDataset, dataIndex);
      const injectedCount = await (0, _insert_data_into_index.insertDataIntoIndex)({
        index: indexName,
        nowReference,
        logger: this.logger,
        esClient: this.esClient,
        dataIndexConfig: dataIndex
      });
      createdDocsPerIndex[indexName] = injectedCount;
    }

    const createdSavedObjects = await this.importSavedObjects(sampleDataset);
    return {
      createdDocsPerIndex,
      createdSavedObjects
    };
  }

  async uninstall(datasetId) {
    const sampleDataset = this.sampleDatasets.find(({
      id
    }) => id === datasetId);

    if (!sampleDataset) {
      throw new _errors.SampleDataInstallError(`Sample dataset ${datasetId} not found`, 404);
    }

    for (let i = 0; i < sampleDataset.dataIndices.length; i++) {
      const dataIndex = sampleDataset.dataIndices[i];
      await this.uninstallDataIndex(sampleDataset, dataIndex);
    }

    const deletedObjects = await this.deleteSavedObjects(sampleDataset);
    return {
      deletedSavedObjects: deletedObjects
    };
  }

  async uninstallDataIndex(dataset, dataIndex) {
    let index = (0, _create_index_name.createIndexName)(dataset.id, dataIndex.id);

    try {
      // if the sample data was reindexed using UA, the index name is actually an alias pointing to the reindexed
      // index. In that case, we need to get rid of the alias and to delete the underlying index
      const {
        body: response
      } = await this.esClient.asCurrentUser.indices.getAlias({
        name: index
      });
      const aliasName = index;
      index = Object.keys(response)[0];
      await this.esClient.asCurrentUser.indices.deleteAlias({
        name: aliasName,
        index
      });
    } catch (err) {// ignore errors from missing alias
    }

    try {
      await this.esClient.asCurrentUser.indices.delete({
        index
      });
    } catch (err) {// ignore delete errors
    }
  }

  async installDataIndex(dataset, dataIndex) {
    const index = (0, _create_index_name.createIndexName)(dataset.id, dataIndex.id);

    try {
      await this.esClient.asCurrentUser.indices.create({
        index,
        body: {
          settings: {
            index: {
              number_of_shards: 1,
              auto_expand_replicas: '0-1'
            }
          },
          mappings: {
            properties: dataIndex.fields
          }
        }
      });
    } catch (err) {
      const errMsg = `Unable to create sample data index "${index}", error: ${err.message}`;
      this.logger.warn(errMsg);
      throw new _errors.SampleDataInstallError(errMsg, err.status);
    }
  }

  async importSavedObjects(dataset) {
    let createResults;

    try {
      const savedObjects = dataset.savedObjects;
      createResults = await this.soClient.bulkCreate(savedObjects.map(({
        version,
        ...savedObject
      }) => savedObject), {
        overwrite: true
      });
    } catch (err) {
      const errMsg = `bulkCreate failed, error: ${err.message}`;
      throw new Error(errMsg);
    }

    const errors = createResults.saved_objects.filter(savedObjectCreateResult => {
      return Boolean(savedObjectCreateResult.error);
    });

    if (errors.length > 0) {
      const errMsg = `sample_data install errors while loading saved objects. Errors: ${JSON.stringify(errors)}`;
      this.logger.warn(errMsg);
      throw new _errors.SampleDataInstallError(errMsg, 403);
    }

    return dataset.savedObjects.length;
  }

  async deleteSavedObjects(dataset) {
    const objects = dataset.savedObjects.map(({
      type,
      id
    }) => ({
      type,
      id
    }));
    const deletePromises = objects.map(({
      type,
      id
    }) => this.soClient.delete(type, id).catch(err => {
      // if the object doesn't exist, ignore the error and proceed
      if ((0, _boom.isBoom)(err) && err.output.statusCode === 404) {
        return;
      }

      throw err;
    }));

    try {
      await Promise.all(deletePromises);
    } catch (err) {
      var _err$body$error$type, _err$body, _err$body$error, _err$body$status, _err$body2;

      throw new _errors.SampleDataInstallError(`Unable to delete sample dataset saved objects, error: ${(_err$body$error$type = (_err$body = err.body) === null || _err$body === void 0 ? void 0 : (_err$body$error = _err$body.error) === null || _err$body$error === void 0 ? void 0 : _err$body$error.type) !== null && _err$body$error$type !== void 0 ? _err$body$error$type : err.message}`, (_err$body$status = (_err$body2 = err.body) === null || _err$body2 === void 0 ? void 0 : _err$body2.status) !== null && _err$body$status !== void 0 ? _err$body$status : 500);
    }

    return objects.length;
  }

}

exports.SampleDataInstaller = SampleDataInstaller;