"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZOOM_LEVELS = exports.WORKPAD_CANVAS_BUFFER = exports.VALID_IMAGE_TYPES = exports.TEMPLATE_TYPE = exports.SESSIONSTORAGE_LASTPATH = exports.MIN_ZOOM_LEVEL = exports.MAX_ZOOM_LEVEL = exports.LOCALSTORAGE_PREFIX = exports.LOCALSTORAGE_CLIPBOARD = exports.LAUNCHED_FULLSCREEN_AUTOPLAY = exports.LAUNCHED_FULLSCREEN = exports.HEADER_BANNER_HEIGHT = exports.FETCH_TIMEOUT = exports.ESSQL_SEARCH_STRATEGY = exports.ELEMENT_SHIFT_OFFSET = exports.ELEMENT_NUDGE_OFFSET = exports.DEFAULT_WORKPAD_CSS = exports.DEFAULT_ELEMENT_CSS = exports.DATATABLE_COLUMN_TYPES = exports.CUSTOM_ELEMENT_TYPE = exports.CONTEXT_MENU_TOP_BORDER_CLASSNAME = exports.CANVAS_TYPE = exports.CANVAS_LAYOUT_STAGE_CONTENT_SELECTOR = exports.CANVAS_EMBEDDABLE_CLASSNAME = exports.CANVAS_APP = exports.ASSET_MAX_SIZE = exports.APP_ROUTE_WORKPAD = exports.APP_ROUTE = exports.API_ROUTE_WORKPAD_STRUCTURES = exports.API_ROUTE_WORKPAD_ASSETS = exports.API_ROUTE_WORKPAD = exports.API_ROUTE_TEMPLATES = exports.API_ROUTE_SHAREABLE_ZIP = exports.API_ROUTE_SHAREABLE_RUNTIME_DOWNLOAD = exports.API_ROUTE_SHAREABLE_RUNTIME = exports.API_ROUTE_SHAREABLE_BASE = exports.API_ROUTE_FUNCTIONS = exports.API_ROUTE_CUSTOM_ELEMENT = exports.API_ROUTE = void 0;

var _constants_static = require("../../shareable_runtime/constants_static");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const CANVAS_TYPE = 'canvas-workpad';
exports.CANVAS_TYPE = CANVAS_TYPE;
const CUSTOM_ELEMENT_TYPE = 'canvas-element';
exports.CUSTOM_ELEMENT_TYPE = CUSTOM_ELEMENT_TYPE;
const TEMPLATE_TYPE = `${CANVAS_TYPE}-template`;
exports.TEMPLATE_TYPE = TEMPLATE_TYPE;
const CANVAS_APP = 'canvas';
exports.CANVAS_APP = CANVAS_APP;
const APP_ROUTE = '/app/canvas';
exports.APP_ROUTE = APP_ROUTE;
const APP_ROUTE_WORKPAD = `${APP_ROUTE}#/workpad`;
exports.APP_ROUTE_WORKPAD = APP_ROUTE_WORKPAD;
const API_ROUTE = '/api/canvas';
exports.API_ROUTE = API_ROUTE;
const API_ROUTE_WORKPAD = `${API_ROUTE}/workpad`;
exports.API_ROUTE_WORKPAD = API_ROUTE_WORKPAD;
const API_ROUTE_WORKPAD_ASSETS = `${API_ROUTE}/workpad-assets`;
exports.API_ROUTE_WORKPAD_ASSETS = API_ROUTE_WORKPAD_ASSETS;
const API_ROUTE_WORKPAD_STRUCTURES = `${API_ROUTE}/workpad-structures`;
exports.API_ROUTE_WORKPAD_STRUCTURES = API_ROUTE_WORKPAD_STRUCTURES;
const API_ROUTE_CUSTOM_ELEMENT = `${API_ROUTE}/custom-element`;
exports.API_ROUTE_CUSTOM_ELEMENT = API_ROUTE_CUSTOM_ELEMENT;
const API_ROUTE_TEMPLATES = `${API_ROUTE}/templates`;
exports.API_ROUTE_TEMPLATES = API_ROUTE_TEMPLATES;
const LOCALSTORAGE_PREFIX = `kibana.canvas`;
exports.LOCALSTORAGE_PREFIX = LOCALSTORAGE_PREFIX;
const LOCALSTORAGE_CLIPBOARD = `${LOCALSTORAGE_PREFIX}.clipboard`;
exports.LOCALSTORAGE_CLIPBOARD = LOCALSTORAGE_CLIPBOARD;
const SESSIONSTORAGE_LASTPATH = 'lastPath:canvas';
exports.SESSIONSTORAGE_LASTPATH = SESSIONSTORAGE_LASTPATH;
const FETCH_TIMEOUT = 30000; // 30 seconds

exports.FETCH_TIMEOUT = FETCH_TIMEOUT;
const DEFAULT_WORKPAD_CSS = '.canvasPage {\n\n}';
exports.DEFAULT_WORKPAD_CSS = DEFAULT_WORKPAD_CSS;
const DEFAULT_ELEMENT_CSS = '.canvasRenderEl{\n\n}';
exports.DEFAULT_ELEMENT_CSS = DEFAULT_ELEMENT_CSS;
const VALID_IMAGE_TYPES = ['gif', 'jpeg', 'png', 'svg+xml'];
exports.VALID_IMAGE_TYPES = VALID_IMAGE_TYPES;
const ASSET_MAX_SIZE = 25000;
exports.ASSET_MAX_SIZE = ASSET_MAX_SIZE;
const ELEMENT_SHIFT_OFFSET = 10;
exports.ELEMENT_SHIFT_OFFSET = ELEMENT_SHIFT_OFFSET;
const ELEMENT_NUDGE_OFFSET = 1;
exports.ELEMENT_NUDGE_OFFSET = ELEMENT_NUDGE_OFFSET;
const ZOOM_LEVELS = [0.25, 0.33, 0.5, 0.67, 0.75, 1, 1.25, 1.5, 1.75, 2, 3, 4].sort();
exports.ZOOM_LEVELS = ZOOM_LEVELS;
const MIN_ZOOM_LEVEL = ZOOM_LEVELS[0];
exports.MIN_ZOOM_LEVEL = MIN_ZOOM_LEVEL;
const MAX_ZOOM_LEVEL = ZOOM_LEVELS[ZOOM_LEVELS.length - 1];
exports.MAX_ZOOM_LEVEL = MAX_ZOOM_LEVEL;
const WORKPAD_CANVAS_BUFFER = 32; // 32px padding around the workpad

exports.WORKPAD_CANVAS_BUFFER = WORKPAD_CANVAS_BUFFER;
const CANVAS_LAYOUT_STAGE_CONTENT_SELECTOR = `canvasLayout__stageContent`;
exports.CANVAS_LAYOUT_STAGE_CONTENT_SELECTOR = CANVAS_LAYOUT_STAGE_CONTENT_SELECTOR;
const DATATABLE_COLUMN_TYPES = ['string', 'number', 'null', 'boolean', 'date'];
exports.DATATABLE_COLUMN_TYPES = DATATABLE_COLUMN_TYPES;
const LAUNCHED_FULLSCREEN = 'workpad-full-screen-launch';
exports.LAUNCHED_FULLSCREEN = LAUNCHED_FULLSCREEN;
const LAUNCHED_FULLSCREEN_AUTOPLAY = 'workpad-full-screen-launch-with-autoplay';
exports.LAUNCHED_FULLSCREEN_AUTOPLAY = LAUNCHED_FULLSCREEN_AUTOPLAY;
const API_ROUTE_SHAREABLE_BASE = '/public/canvas';
exports.API_ROUTE_SHAREABLE_BASE = API_ROUTE_SHAREABLE_BASE;
const API_ROUTE_SHAREABLE_ZIP = '/public/canvas/zip';
exports.API_ROUTE_SHAREABLE_ZIP = API_ROUTE_SHAREABLE_ZIP;
const API_ROUTE_SHAREABLE_RUNTIME = '/public/canvas/runtime';
exports.API_ROUTE_SHAREABLE_RUNTIME = API_ROUTE_SHAREABLE_RUNTIME;
const API_ROUTE_SHAREABLE_RUNTIME_DOWNLOAD = `/public/canvas/${_constants_static.SHAREABLE_RUNTIME_NAME}.js`;
exports.API_ROUTE_SHAREABLE_RUNTIME_DOWNLOAD = API_ROUTE_SHAREABLE_RUNTIME_DOWNLOAD;
const CANVAS_EMBEDDABLE_CLASSNAME = `canvasEmbeddable`;
exports.CANVAS_EMBEDDABLE_CLASSNAME = CANVAS_EMBEDDABLE_CLASSNAME;
const CONTEXT_MENU_TOP_BORDER_CLASSNAME = 'canvasContextMenu--topBorder';
exports.CONTEXT_MENU_TOP_BORDER_CLASSNAME = CONTEXT_MENU_TOP_BORDER_CLASSNAME;
const API_ROUTE_FUNCTIONS = `${API_ROUTE}/fns`;
exports.API_ROUTE_FUNCTIONS = API_ROUTE_FUNCTIONS;
const ESSQL_SEARCH_STRATEGY = 'essql';
exports.ESSQL_SEARCH_STRATEGY = ESSQL_SEARCH_STRATEGY;
const HEADER_BANNER_HEIGHT = 32; // This value is also declared in `/src/core/public/_variables.scss`

exports.HEADER_BANNER_HEIGHT = HEADER_BANNER_HEIGHT;