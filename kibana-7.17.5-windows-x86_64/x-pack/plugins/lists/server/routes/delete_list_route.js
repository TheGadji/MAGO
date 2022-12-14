"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteListRoute = void 0;

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _securitysolutionIoTsListTypes = require("@kbn/securitysolution-io-ts-list-types");

var _securitysolutionListUtils = require("@kbn/securitysolution-list-utils");

var _securitysolutionListConstants = require("@kbn/securitysolution-list-constants");

var _escape_query = require("../services/utils/escape_query");

var _utils = require("./utils");

var _ = require(".");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const deleteListRoute = router => {
  router.delete({
    options: {
      tags: ['access:lists-all']
    },
    path: _securitysolutionListConstants.LIST_URL,
    validate: {
      query: (0, _utils.buildRouteValidation)(_securitysolutionIoTsListTypes.deleteListSchema)
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils.buildSiemResponse)(response);

    try {
      const lists = (0, _.getListClient)(context);
      const exceptionLists = (0, _.getExceptionListClient)(context);
      const {
        id,
        deleteReferences,
        ignoreReferences
      } = request.query;
      let deleteExceptionItemResponses; // ignoreReferences=true maintains pre-7.11 behavior of deleting value list without performing any additional checks

      if (!ignoreReferences) {
        var _referencedExceptionL;

        const referencedExceptionListItems = await exceptionLists.findValueListExceptionListItems({
          page: 1,
          perPage: 10000,
          sortField: undefined,
          sortOrder: undefined,
          valueListId: id
        });

        if (referencedExceptionListItems !== null && referencedExceptionListItems !== void 0 && (_referencedExceptionL = referencedExceptionListItems.data) !== null && _referencedExceptionL !== void 0 && _referencedExceptionL.length) {
          // deleteReferences=false to perform dry run and identify referenced exception lists/items
          if (deleteReferences) {
            // Delete referenced exception list items
            // TODO: Create deleteListItems to delete in batch
            deleteExceptionItemResponses = await Promise.all(referencedExceptionListItems.data.map(async listItem => {
              // Ensure only the single entry is deleted as there could be a separate value list referenced that is okay to keep // TODO: Add API to delete single entry
              // @ts-ignore inline way of verifying entry type is EntryList?
              const remainingEntries = listItem.entries.filter(e => {
                var _e$list;

                return (e === null || e === void 0 ? void 0 : (_e$list = e.list) === null || _e$list === void 0 ? void 0 : _e$list.id) !== id;
              });

              if (remainingEntries.length === 0) {
                // All entries reference value list specified in request, delete entire exception list item
                return deleteExceptionListItem(exceptionLists, listItem);
              } else {
                // Contains more entries than just value list specified in request , patch (doesn't exist yet :) exception list item to remove entry
                return updateExceptionListItems(exceptionLists, listItem, remainingEntries);
              }
            }));
          } else {
            const referencedExceptionLists = await getReferencedExceptionLists(exceptionLists, referencedExceptionListItems.data);
            const refError = `Value list '${id}' is referenced in existing exception list(s)`;
            const references = referencedExceptionListItems.data.map(item => ({
              exception_item: item,
              exception_list: referencedExceptionLists.data.find(l => l.list_id === item.list_id)
            }));
            return siemResponse.error({
              body: {
                error: {
                  message: refError,
                  references,
                  value_list_id: id
                }
              },
              statusCode: 409
            });
          }
        }
      }

      const deleted = await lists.deleteList({
        id
      });

      if (deleted == null) {
        return siemResponse.error({
          body: `list id: "${id}" was not found`,
          statusCode: 404
        });
      } else {
        const [validated, errors] = (0, _securitysolutionIoTsUtils.validate)(deleted, _securitysolutionIoTsListTypes.listSchema);

        if (errors != null) {
          return siemResponse.error({
            body: errors,
            statusCode: 500
          });
        } else {
          return response.ok({
            body: validated !== null && validated !== void 0 ? validated : {
              deleteItemResponses: deleteExceptionItemResponses
            }
          });
        }
      }
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};
/**
 * Fetches ExceptionLists for given ExceptionListItems
 * @param exceptionLists ExceptionListClient
 * @param exceptionListItems ExceptionListItemSchema[]
 */


exports.deleteListRoute = deleteListRoute;

const getReferencedExceptionLists = async (exceptionLists, exceptionListItems) => {
  const filter = exceptionListItems.map(item => `${(0, _securitysolutionListUtils.getSavedObjectType)({
    namespaceType: item.namespace_type
  })}.attributes.list_id: "${(0, _escape_query.escapeQuotes)(item.list_id)}"`).join(' OR ');
  return exceptionLists.findExceptionList({
    filter: `(${filter})`,
    namespaceType: ['agnostic', 'single'],
    page: 1,
    perPage: 10000,
    sortField: undefined,
    sortOrder: undefined
  });
};
/**
 * Adapted from deleteExceptionListItemRoute
 * @param exceptionLists ExceptionListClient
 * @param listItem ExceptionListItemSchema
 */


const deleteExceptionListItem = async (exceptionLists, listItem) => {
  const deletedExceptionListItem = await exceptionLists.deleteExceptionListItem({
    id: listItem.id,
    itemId: listItem.item_id,
    namespaceType: listItem.namespace_type
  });

  if (deletedExceptionListItem == null) {
    return {
      body: `list item with id: "${listItem.id}" not found`,
      statusCode: 404
    };
  } else {
    const [validated, errors] = (0, _securitysolutionIoTsUtils.validate)(deletedExceptionListItem, _securitysolutionIoTsListTypes.exceptionListItemSchema);

    if (errors != null) {
      return {
        body: errors,
        statusCode: 500
      };
    } else {
      return {
        body: validated !== null && validated !== void 0 ? validated : {}
      };
    }
  }
};
/**
 * Adapted from updateExceptionListItemRoute
 * @param exceptionLists ExceptionListClient
 * @param listItem ExceptionListItemSchema
 * @param remainingEntries EntriesArray
 */


const updateExceptionListItems = async (exceptionLists, listItem, remainingEntries) => {
  const updateExceptionListItem = await exceptionLists.updateExceptionListItem({
    _version: listItem._version,
    comments: listItem.comments,
    description: listItem.description,
    entries: remainingEntries,
    id: listItem.id,
    itemId: listItem.item_id,
    meta: listItem.meta,
    name: listItem.name,
    namespaceType: listItem.namespace_type,
    osTypes: listItem.os_types,
    tags: listItem.tags,
    type: listItem.type
  });

  if (updateExceptionListItem == null) {
    return {
      body: `exception list item id: "${listItem.item_id}" does not exist`,
      statusCode: 404
    };
  } else {
    const [validated, errors] = (0, _securitysolutionIoTsUtils.validate)(updateExceptionListItem, _securitysolutionIoTsListTypes.exceptionListItemSchema);

    if (errors != null) {
      return {
        body: errors,
        statusCode: 500
      };
    } else {
      return {
        body: validated !== null && validated !== void 0 ? validated : {}
      };
    }
  }
};