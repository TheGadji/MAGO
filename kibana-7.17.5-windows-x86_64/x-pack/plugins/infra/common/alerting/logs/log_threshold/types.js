"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeUnitRT = exports.timeSizeRT = exports.ratioCriteriaRT = exports.ratioAlertParamsRT = exports.partialRatioCriteriaRT = exports.partialRatioAlertParamsRT = exports.partialCriterionRT = exports.partialCriteriaRT = exports.partialCountCriteriaRT = exports.partialCountAlertParamsRT = exports.partialAlertParamsRT = exports.isRatioAlertParams = exports.isRatioAlert = exports.isOptimizedGroupedSearchQueryResponse = exports.isOptimizableGroupedThreshold = exports.hasGroupBy = exports.groupByRT = exports.getNumerator = exports.getDenominator = exports.criterionRT = exports.countCriteriaRT = exports.countAlertParamsRT = exports.alertParamsRT = exports.UnoptimizedGroupedSearchQueryResponseRT = exports.UngroupedSearchQueryResponseRT = exports.ThresholdRT = exports.OptimizedGroupedSearchQueryResponseRT = exports.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID = exports.GroupedSearchQueryResponseRT = exports.ComparatorToi18nMap = exports.Comparator = exports.AlertStates = void 0;

var _i18n = require("@kbn/i18n");

var rt = _interopRequireWildcard(require("io-ts"));

var _elasticsearch_runtime_types = require("../../../utils/elasticsearch_runtime_types");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const LOG_DOCUMENT_COUNT_ALERT_TYPE_ID = 'logs.alert.document.count';
exports.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID = LOG_DOCUMENT_COUNT_ALERT_TYPE_ID;
const ThresholdTypeRT = rt.keyof({
  count: null,
  ratio: null
}); // Comparators //

let Comparator;
exports.Comparator = Comparator;

(function (Comparator) {
  Comparator["GT"] = "more than";
  Comparator["GT_OR_EQ"] = "more than or equals";
  Comparator["LT"] = "less than";
  Comparator["LT_OR_EQ"] = "less than or equals";
  Comparator["EQ"] = "equals";
  Comparator["NOT_EQ"] = "does not equal";
  Comparator["MATCH"] = "matches";
  Comparator["NOT_MATCH"] = "does not match";
  Comparator["MATCH_PHRASE"] = "matches phrase";
  Comparator["NOT_MATCH_PHRASE"] = "does not match phrase";
})(Comparator || (exports.Comparator = Comparator = {}));

const ComparatorRT = rt.keyof({
  [Comparator.GT]: null,
  [Comparator.GT_OR_EQ]: null,
  [Comparator.LT]: null,
  [Comparator.LT_OR_EQ]: null,
  [Comparator.EQ]: null,
  [Comparator.NOT_EQ]: null,
  [Comparator.MATCH]: null,
  [Comparator.NOT_MATCH]: null,
  [Comparator.MATCH_PHRASE]: null,
  [Comparator.NOT_MATCH_PHRASE]: null
}); // Maps our comparators to i18n strings, some comparators have more specific wording
// depending on the field type the comparator is being used with.

const ComparatorToi18nMap = {
  [Comparator.GT]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.gt', {
    defaultMessage: 'more than'
  }),
  [Comparator.GT_OR_EQ]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.gtOrEq', {
    defaultMessage: 'more than or equals'
  }),
  [Comparator.LT]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.lt', {
    defaultMessage: 'less than'
  }),
  [Comparator.LT_OR_EQ]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.ltOrEq', {
    defaultMessage: 'less than or equals'
  }),
  [Comparator.EQ]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.eq', {
    defaultMessage: 'is'
  }),
  [Comparator.NOT_EQ]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.notEq', {
    defaultMessage: 'is not'
  }),
  [`${Comparator.EQ}:number`]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.eqNumber', {
    defaultMessage: 'equals'
  }),
  [`${Comparator.NOT_EQ}:number`]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.notEqNumber', {
    defaultMessage: 'does not equal'
  }),
  [Comparator.MATCH]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.match', {
    defaultMessage: 'matches'
  }),
  [Comparator.NOT_MATCH]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.notMatch', {
    defaultMessage: 'does not match'
  }),
  [Comparator.MATCH_PHRASE]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.matchPhrase', {
    defaultMessage: 'matches phrase'
  }),
  [Comparator.NOT_MATCH_PHRASE]: _i18n.i18n.translate('xpack.infra.logs.alerting.comparator.notMatchPhrase', {
    defaultMessage: 'does not match phrase'
  })
}; // Alert parameters //

exports.ComparatorToi18nMap = ComparatorToi18nMap;
let AlertStates;
exports.AlertStates = AlertStates;

(function (AlertStates) {
  AlertStates[AlertStates["OK"] = 0] = "OK";
  AlertStates[AlertStates["ALERT"] = 1] = "ALERT";
  AlertStates[AlertStates["NO_DATA"] = 2] = "NO_DATA";
  AlertStates[AlertStates["ERROR"] = 3] = "ERROR";
})(AlertStates || (exports.AlertStates = AlertStates = {}));

const ThresholdRT = rt.type({
  comparator: ComparatorRT,
  value: rt.number
});
exports.ThresholdRT = ThresholdRT;
const criterionRT = rt.type({
  field: rt.string,
  comparator: ComparatorRT,
  value: rt.union([rt.string, rt.number])
});
exports.criterionRT = criterionRT;
const partialCriterionRT = rt.partial(criterionRT.props);
exports.partialCriterionRT = partialCriterionRT;
const countCriteriaRT = rt.array(criterionRT);
exports.countCriteriaRT = countCriteriaRT;
const partialCountCriteriaRT = rt.array(partialCriterionRT);
exports.partialCountCriteriaRT = partialCountCriteriaRT;
const ratioCriteriaRT = rt.tuple([countCriteriaRT, countCriteriaRT]);
exports.ratioCriteriaRT = ratioCriteriaRT;
const partialRatioCriteriaRT = rt.tuple([partialCountCriteriaRT, partialCountCriteriaRT]);
exports.partialRatioCriteriaRT = partialRatioCriteriaRT;
const partialCriteriaRT = rt.union([partialCountCriteriaRT, partialRatioCriteriaRT]);
exports.partialCriteriaRT = partialCriteriaRT;
const timeUnitRT = rt.union([rt.literal('s'), rt.literal('m'), rt.literal('h'), rt.literal('d')]);
exports.timeUnitRT = timeUnitRT;
const timeSizeRT = rt.number;
exports.timeSizeRT = timeSizeRT;
const groupByRT = rt.array(rt.string);
exports.groupByRT = groupByRT;
const RequiredAlertParamsRT = rt.type({
  // NOTE: "count" would be better named as "threshold", but this would require a
  // migration of encrypted saved objects, so we'll keep "count" until it's problematic.
  count: ThresholdRT,
  timeUnit: timeUnitRT,
  timeSize: timeSizeRT
});
const partialRequiredAlertParamsRT = rt.partial(RequiredAlertParamsRT.props);
const OptionalAlertParamsRT = rt.partial({
  groupBy: groupByRT
});
const countAlertParamsRT = rt.intersection([rt.type({
  criteria: countCriteriaRT,
  ...RequiredAlertParamsRT.props
}), rt.partial({ ...OptionalAlertParamsRT.props
})]);
exports.countAlertParamsRT = countAlertParamsRT;
const partialCountAlertParamsRT = rt.intersection([rt.type({
  criteria: partialCountCriteriaRT,
  ...RequiredAlertParamsRT.props
}), rt.partial({ ...OptionalAlertParamsRT.props
})]);
exports.partialCountAlertParamsRT = partialCountAlertParamsRT;
const ratioAlertParamsRT = rt.intersection([rt.type({
  criteria: ratioCriteriaRT,
  ...RequiredAlertParamsRT.props
}), rt.partial({ ...OptionalAlertParamsRT.props
})]);
exports.ratioAlertParamsRT = ratioAlertParamsRT;
const partialRatioAlertParamsRT = rt.intersection([rt.type({
  criteria: partialRatioCriteriaRT,
  ...RequiredAlertParamsRT.props
}), rt.partial({ ...OptionalAlertParamsRT.props
})]);
exports.partialRatioAlertParamsRT = partialRatioAlertParamsRT;
const alertParamsRT = rt.union([countAlertParamsRT, ratioAlertParamsRT]);
exports.alertParamsRT = alertParamsRT;
const partialAlertParamsRT = rt.union([partialCountAlertParamsRT, partialRatioAlertParamsRT]);
exports.partialAlertParamsRT = partialAlertParamsRT;

const isRatioAlert = criteria => {
  return criteria.length > 0 && Array.isArray(criteria[0]) ? true : false;
};

exports.isRatioAlert = isRatioAlert;

const isRatioAlertParams = params => {
  return isRatioAlert(params.criteria);
};

exports.isRatioAlertParams = isRatioAlertParams;

const getNumerator = criteria => {
  return criteria[0];
};

exports.getNumerator = getNumerator;

const getDenominator = criteria => {
  return criteria[1];
};

exports.getDenominator = getDenominator;

const hasGroupBy = alertParams => {
  const {
    groupBy
  } = alertParams;
  return groupBy && groupBy.length > 0 ? true : false;
}; // Chart previews //


exports.hasGroupBy = hasGroupBy;
const chartPreviewHistogramBucket = rt.type({
  key: rt.number,
  doc_count: rt.number
});
const ChartPreviewBucketsRT = rt.partial({
  histogramBuckets: rt.type({
    buckets: rt.array(chartPreviewHistogramBucket)
  })
}); // ES query responses //

const hitsRT = rt.type({
  total: rt.type({
    value: rt.number
  })
});
const bucketFieldsRT = rt.type({
  key: rt.record(rt.string, rt.string),
  doc_count: rt.number
});
const afterKeyRT = rt.partial({
  after_key: rt.record(rt.string, rt.string)
});
const UngroupedSearchQueryResponseRT = rt.intersection([_elasticsearch_runtime_types.commonSearchSuccessResponseFieldsRT, rt.intersection([rt.type({
  hits: hitsRT
}), rt.partial({
  aggregations: ChartPreviewBucketsRT
})])]);
exports.UngroupedSearchQueryResponseRT = UngroupedSearchQueryResponseRT;
const UnoptimizedGroupedSearchQueryResponseRT = rt.intersection([_elasticsearch_runtime_types.commonSearchSuccessResponseFieldsRT, rt.type({
  aggregations: rt.type({
    groups: rt.intersection([rt.type({
      buckets: rt.array(rt.type({ ...bucketFieldsRT.props,
        filtered_results: rt.intersection([rt.type({
          doc_count: rt.number
        }), ChartPreviewBucketsRT])
      }))
    }), afterKeyRT])
  }),
  hits: hitsRT
})]);
exports.UnoptimizedGroupedSearchQueryResponseRT = UnoptimizedGroupedSearchQueryResponseRT;
const OptimizedGroupedSearchQueryResponseRT = rt.intersection([_elasticsearch_runtime_types.commonSearchSuccessResponseFieldsRT, rt.type({
  aggregations: rt.type({
    groups: rt.intersection([rt.type({
      buckets: rt.array(rt.intersection([bucketFieldsRT, ChartPreviewBucketsRT]))
    }), afterKeyRT])
  }),
  hits: hitsRT
})]);
exports.OptimizedGroupedSearchQueryResponseRT = OptimizedGroupedSearchQueryResponseRT;
const GroupedSearchQueryResponseRT = rt.union([UnoptimizedGroupedSearchQueryResponseRT, OptimizedGroupedSearchQueryResponseRT]);
exports.GroupedSearchQueryResponseRT = GroupedSearchQueryResponseRT;

const isOptimizedGroupedSearchQueryResponse = response => {
  const result = response[0];
  return result && !result.hasOwnProperty('filtered_results');
};

exports.isOptimizedGroupedSearchQueryResponse = isOptimizedGroupedSearchQueryResponse;

const isOptimizableGroupedThreshold = (selectedComparator, selectedValue) => {
  if (selectedComparator === Comparator.GT) {
    return true;
  } else if (typeof selectedValue === 'number' && selectedComparator === Comparator.GT_OR_EQ && selectedValue > 0) {
    return true;
  } else {
    return false;
  }
};

exports.isOptimizableGroupedThreshold = isOptimizableGroupedThreshold;