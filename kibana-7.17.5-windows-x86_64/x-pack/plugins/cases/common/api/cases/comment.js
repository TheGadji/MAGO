"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindQueryParamsRt = exports.ContextTypeUserRt = exports.CommentsResponseRt = exports.CommentType = exports.CommentResponseTypeAlertsRt = exports.CommentResponseTypeActionsRt = exports.CommentResponseRt = exports.CommentRequestRt = exports.CommentPatchRequestRt = exports.CommentPatchAttributesRt = exports.CommentAttributesBasicRt = exports.AssociationType = exports.AllCommentsResponseRt = exports.AllCommentsResponseRT = exports.AlertCommentRequestRt = exports.ActionsCommentRequestRt = void 0;

var rt = _interopRequireWildcard(require("io-ts"));

var _saved_object = require("../saved_object");

var _user = require("../user");

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

/**
 * this is used to differentiate between an alert attached to a top-level case and a group of alerts that should only
 * be attached to a sub case. The reason we need this is because an alert group comment will have references to both a case and
 * sub case when it is created. For us to be able to filter out alert groups in a top-level case we need a field to
 * use as a filter.
 */


let AssociationType;
exports.AssociationType = AssociationType;

(function (AssociationType) {
  AssociationType["case"] = "case";
  AssociationType["subCase"] = "sub_case";
})(AssociationType || (exports.AssociationType = AssociationType = {}));

const CommentAttributesBasicRt = rt.type({
  associationType: rt.union([rt.literal(AssociationType.case), rt.literal(AssociationType.subCase)]),
  created_at: rt.string,
  created_by: _user.UserRT,
  owner: rt.string,
  pushed_at: rt.union([rt.string, rt.null]),
  pushed_by: rt.union([_user.UserRT, rt.null]),
  updated_at: rt.union([rt.string, rt.null]),
  updated_by: rt.union([_user.UserRT, rt.null])
});
exports.CommentAttributesBasicRt = CommentAttributesBasicRt;
let CommentType;
exports.CommentType = CommentType;

(function (CommentType) {
  CommentType["user"] = "user";
  CommentType["alert"] = "alert";
  CommentType["generatedAlert"] = "generated_alert";
  CommentType["actions"] = "actions";
})(CommentType || (exports.CommentType = CommentType = {}));

const ContextTypeUserRt = rt.type({
  comment: rt.string,
  type: rt.literal(CommentType.user),
  owner: rt.string
});
/**
 * This defines the structure of how alerts (generated or user attached) are stored in saved objects documents. It also
 * represents of an alert after it has been transformed. A generated alert will be transformed by the connector so that
 * it matches this structure. User attached alerts do not need to be transformed.
 */

exports.ContextTypeUserRt = ContextTypeUserRt;
const AlertCommentRequestRt = rt.type({
  type: rt.union([rt.literal(CommentType.generatedAlert), rt.literal(CommentType.alert)]),
  alertId: rt.union([rt.array(rt.string), rt.string]),
  index: rt.union([rt.array(rt.string), rt.string]),
  rule: rt.type({
    id: rt.union([rt.string, rt.null]),
    name: rt.union([rt.string, rt.null])
  }),
  owner: rt.string
});
exports.AlertCommentRequestRt = AlertCommentRequestRt;
const ActionsCommentRequestRt = rt.type({
  type: rt.literal(CommentType.actions),
  comment: rt.string,
  actions: rt.type({
    targets: rt.array(rt.type({
      hostname: rt.string,
      endpointId: rt.string
    })),
    type: rt.string
  }),
  owner: rt.string
});
exports.ActionsCommentRequestRt = ActionsCommentRequestRt;
const AttributesTypeUserRt = rt.intersection([ContextTypeUserRt, CommentAttributesBasicRt]);
const AttributesTypeAlertsRt = rt.intersection([AlertCommentRequestRt, CommentAttributesBasicRt]);
const AttributesTypeActionsRt = rt.intersection([ActionsCommentRequestRt, CommentAttributesBasicRt]);
const CommentAttributesRt = rt.union([AttributesTypeUserRt, AttributesTypeAlertsRt, AttributesTypeActionsRt]);
const CommentRequestRt = rt.union([ContextTypeUserRt, AlertCommentRequestRt, ActionsCommentRequestRt]);
exports.CommentRequestRt = CommentRequestRt;
const CommentResponseRt = rt.intersection([CommentAttributesRt, rt.type({
  id: rt.string,
  version: rt.string
})]);
exports.CommentResponseRt = CommentResponseRt;
const CommentResponseTypeAlertsRt = rt.intersection([AttributesTypeAlertsRt, rt.type({
  id: rt.string,
  version: rt.string
})]);
exports.CommentResponseTypeAlertsRt = CommentResponseTypeAlertsRt;
const CommentResponseTypeActionsRt = rt.intersection([AttributesTypeActionsRt, rt.type({
  id: rt.string,
  version: rt.string
})]);
exports.CommentResponseTypeActionsRt = CommentResponseTypeActionsRt;
const AllCommentsResponseRT = rt.array(CommentResponseRt);
exports.AllCommentsResponseRT = AllCommentsResponseRT;
const CommentPatchRequestRt = rt.intersection([
/**
 * Partial updates are not allowed.
 * We want to prevent the user for changing the type without removing invalid fields.
 */
CommentRequestRt, rt.type({
  id: rt.string,
  version: rt.string
})]);
/**
 * This type is used by the CaseService.
 * Because the type for the attributes of savedObjectClient update function is Partial<T>
 * we need to make all of our attributes partial too.
 * We ensure that partial updates of CommentContext is not going to happen inside the patch comment route.
 */

exports.CommentPatchRequestRt = CommentPatchRequestRt;
const CommentPatchAttributesRt = rt.intersection([rt.union([rt.partial(CommentAttributesBasicRt.props), rt.partial(AlertCommentRequestRt.props)]), rt.partial(CommentAttributesBasicRt.props)]);
exports.CommentPatchAttributesRt = CommentPatchAttributesRt;
const CommentsResponseRt = rt.type({
  comments: rt.array(CommentResponseRt),
  page: rt.number,
  per_page: rt.number,
  total: rt.number
});
exports.CommentsResponseRt = CommentsResponseRt;
const AllCommentsResponseRt = rt.array(CommentResponseRt);
exports.AllCommentsResponseRt = AllCommentsResponseRt;
const FindQueryParamsRt = rt.partial({ ..._saved_object.SavedObjectFindOptionsRt.props,

  /**
   * If specified the attachments found will be associated to a sub case instead of a case object
   */
  subCaseId: rt.string
});
exports.FindQueryParamsRt = FindQueryParamsRt;