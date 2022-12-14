"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _eui = require("@elastic/eui");

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _constants = require("../constants");

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


const ActionList = ({
  onSelect
}) => {
  const [recordedActions, setRecordedActions] = (0, _react.useState)({});
  const [selectedAction, setSelectedAction] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    onSelect(selectedAction);
  }, [onSelect, selectedAction]);
  (0, _react.useEffect)(() => {
    const actionListener = newAction => {
      const id = (0, _v.default)();
      setRecordedActions({ ...recordedActions,
        [id]: { ...newAction,
          id
        }
      });
    };

    const resetListener = () => {
      setSelectedAction(null);
      setRecordedActions({});
    };

    const channel = _addons.default.getChannel();

    channel.addListener(_constants.EVENTS.ACTION, actionListener);
    channel.addListener(_constants.EVENTS.RESET, resetListener);
    return () => {
      channel.removeListener(_constants.EVENTS.ACTION, actionListener);
      channel.removeListener(_constants.EVENTS.RESET, resetListener);
    };
  });
  (0, _react.useEffect)(() => {
    const values = Object.values(recordedActions);

    if (values.length > 0) {
      setSelectedAction(values[values.length - 1]);
    }
  }, [recordedActions]);
  const options = Object.values(recordedActions).map(recordedAction => ({
    key: recordedAction.id,
    label: recordedAction.action.type,
    checked: recordedAction.id === (selectedAction === null || selectedAction === void 0 ? void 0 : selectedAction.id) ? 'on' : undefined
  }));

  const onChange = selectedOptions => {
    selectedOptions.forEach(option => {
      if (option && option.checked && option.key) {
        const selected = recordedActions[option.key];

        if (selected) {
          setSelectedAction(selected);
        }
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_eui.EuiSelectable, {
    singleSelection: true,
    onChange,
    options
  }, list => list);
};

exports.ActionList = ActionList;