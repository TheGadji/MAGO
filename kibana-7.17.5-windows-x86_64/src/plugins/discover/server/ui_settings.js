"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUiSettings = void 0;

var _i18n = require("@kbn/i18n");

var _configSchema = require("@kbn/config-schema");

var _analytics = require("@kbn/analytics");

var _common = require("../common");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getUiSettings = () => ({
  [_common.DEFAULT_COLUMNS_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.defaultColumnsTitle', {
      defaultMessage: 'Default columns'
    }),
    value: [],
    description: _i18n.i18n.translate('discover.advancedSettings.defaultColumnsText', {
      defaultMessage: 'Columns displayed by default in the Discover app. If empty, a summary of the document will be displayed.'
    }),
    category: ['discover'],
    schema: _configSchema.schema.arrayOf(_configSchema.schema.string())
  },
  [_common.MAX_DOC_FIELDS_DISPLAYED]: {
    name: _i18n.i18n.translate('discover.advancedSettings.maxDocFieldsDisplayedTitle', {
      defaultMessage: 'Maximum document fields displayed'
    }),
    value: 200,
    description: _i18n.i18n.translate('discover.advancedSettings.maxDocFieldsDisplayedText', {
      defaultMessage: 'Maximum number of fields rendered in the document column'
    }),
    category: ['discover'],
    schema: _configSchema.schema.number()
  },
  [_common.SAMPLE_SIZE_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.sampleSizeTitle', {
      defaultMessage: 'Number of rows'
    }),
    value: 500,
    description: _i18n.i18n.translate('discover.advancedSettings.sampleSizeText', {
      defaultMessage: 'The number of rows to show in the table'
    }),
    category: ['discover'],
    schema: _configSchema.schema.number()
  },
  [_common.SORT_DEFAULT_ORDER_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.sortDefaultOrderTitle', {
      defaultMessage: 'Default sort direction'
    }),
    value: 'desc',
    options: ['desc', 'asc'],
    optionLabels: {
      desc: _i18n.i18n.translate('discover.advancedSettings.sortOrderDesc', {
        defaultMessage: 'Descending'
      }),
      asc: _i18n.i18n.translate('discover.advancedSettings.sortOrderAsc', {
        defaultMessage: 'Ascending'
      })
    },
    type: 'select',
    description: _i18n.i18n.translate('discover.advancedSettings.sortDefaultOrderText', {
      defaultMessage: 'Controls the default sort direction for time based index patterns in the Discover app.'
    }),
    category: ['discover'],
    schema: _configSchema.schema.oneOf([_configSchema.schema.literal('desc'), _configSchema.schema.literal('asc')])
  },
  [_common.SEARCH_ON_PAGE_LOAD_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.searchOnPageLoadTitle', {
      defaultMessage: 'Search on page load'
    }),
    value: true,
    type: 'boolean',
    description: _i18n.i18n.translate('discover.advancedSettings.searchOnPageLoadText', {
      defaultMessage: 'Controls whether a search is executed when Discover first loads. This setting does not ' + 'have an effect when loading a saved search.'
    }),
    category: ['discover'],
    schema: _configSchema.schema.boolean()
  },
  [_common.DOC_HIDE_TIME_COLUMN_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.docTableHideTimeColumnTitle', {
      defaultMessage: "Hide 'Time' column"
    }),
    value: false,
    description: _i18n.i18n.translate('discover.advancedSettings.docTableHideTimeColumnText', {
      defaultMessage: "Hide the 'Time' column in Discover and in all Saved Searches on Dashboards."
    }),
    category: ['discover'],
    schema: _configSchema.schema.boolean()
  },
  [_common.FIELDS_LIMIT_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.fieldsPopularLimitTitle', {
      defaultMessage: 'Popular fields limit'
    }),
    value: 10,
    description: _i18n.i18n.translate('discover.advancedSettings.fieldsPopularLimitText', {
      defaultMessage: 'The top N most popular fields to show'
    }),
    schema: _configSchema.schema.number()
  },
  [_common.CONTEXT_DEFAULT_SIZE_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.context.defaultSizeTitle', {
      defaultMessage: 'Context size'
    }),
    value: 5,
    description: _i18n.i18n.translate('discover.advancedSettings.context.defaultSizeText', {
      defaultMessage: 'The number of surrounding entries to show in the context view'
    }),
    category: ['discover'],
    schema: _configSchema.schema.number()
  },
  [_common.CONTEXT_STEP_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.context.sizeStepTitle', {
      defaultMessage: 'Context size step'
    }),
    value: 5,
    description: _i18n.i18n.translate('discover.advancedSettings.context.sizeStepText', {
      defaultMessage: 'The step size to increment or decrement the context size by'
    }),
    category: ['discover'],
    schema: _configSchema.schema.number()
  },
  [_common.CONTEXT_TIE_BREAKER_FIELDS_SETTING]: {
    name: _i18n.i18n.translate('discover.advancedSettings.context.tieBreakerFieldsTitle', {
      defaultMessage: 'Tie breaker fields'
    }),
    value: ['_doc'],
    description: _i18n.i18n.translate('discover.advancedSettings.context.tieBreakerFieldsText', {
      defaultMessage: 'A comma-separated list of fields to use for tie-breaking between documents that have the same timestamp value. ' + 'From this list the first field that is present and sortable in the current index pattern is used.'
    }),
    category: ['discover'],
    schema: _configSchema.schema.arrayOf(_configSchema.schema.string())
  },
  [_common.DOC_TABLE_LEGACY]: {
    name: _i18n.i18n.translate('discover.advancedSettings.disableDocumentExplorer', {
      defaultMessage: 'Document Explorer or classic view'
    }),
    value: true,
    description: _i18n.i18n.translate('discover.advancedSettings.disableDocumentExplorerDescription', {
      defaultMessage: 'To use the new Document Explorer instead of the classic view, turn off this option. ' + 'The Document Explorer offers better data sorting, resizable columns, and a full screen view.'
    }),
    category: ['discover'],
    schema: _configSchema.schema.boolean(),
    metric: {
      type: _analytics.METRIC_TYPE.CLICK,
      name: 'discover:useLegacyDataGrid'
    }
  },
  [_common.MODIFY_COLUMNS_ON_SWITCH]: {
    name: _i18n.i18n.translate('discover.advancedSettings.discover.modifyColumnsOnSwitchTitle', {
      defaultMessage: 'Modify columns when changing index patterns'
    }),
    value: true,
    description: _i18n.i18n.translate('discover.advancedSettings.discover.modifyColumnsOnSwitchText', {
      defaultMessage: 'Remove columns that are not available in the new index pattern.'
    }),
    category: ['discover'],
    schema: _configSchema.schema.boolean(),
    metric: {
      type: _analytics.METRIC_TYPE.CLICK,
      name: 'discover:modifyColumnsOnSwitchTitle'
    }
  },
  [_common.SEARCH_FIELDS_FROM_SOURCE]: {
    name: _i18n.i18n.translate('discover.advancedSettings.discover.readFieldsFromSource', {
      defaultMessage: 'Read fields from _source'
    }),
    description: _i18n.i18n.translate('discover.advancedSettings.discover.readFieldsFromSourceDescription', {
      defaultMessage: `When enabled will load documents directly from \`_source\`. This is soon going to be deprecated. When disabled, will retrieve fields via the new Fields API in the high-level search service.`
    }),
    value: false,
    category: ['discover'],
    schema: _configSchema.schema.boolean()
  },
  [_common.SHOW_MULTIFIELDS]: {
    name: _i18n.i18n.translate('discover.advancedSettings.discover.showMultifields', {
      defaultMessage: 'Show multi-fields'
    }),
    description: _i18n.i18n.translate('discover.advancedSettings.discover.showMultifieldsDescription', {
      defaultMessage: `Controls whether {multiFields} display in the expanded document view. In most cases, multi-fields are the same as the original field. This option is only available when \`searchFieldsFromSource\` is off.`,
      values: {
        multiFields: `<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/multi-fields.html"
            target="_blank" rel="noopener">` + _i18n.i18n.translate('discover.advancedSettings.discover.multiFieldsLinkText', {
          defaultMessage: 'multi-fields'
        }) + '</a>'
      }
    }),
    value: false,
    category: ['discover'],
    schema: _configSchema.schema.boolean()
  }
});

exports.getUiSettings = getUiSettings;