/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,i,o=t[0],a=t[1],s=0,c=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={12:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"ml.chunk."+e+".js"}(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=a;i(i.s=38)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r="ML_APP_LOCATOR",i={ANOMALY_DETECTION_JOBS_MANAGE:"jobs",ANOMALY_EXPLORER:"explorer",SINGLE_METRIC_VIEWER:"timeseriesexplorer",DATA_FRAME_ANALYTICS_JOBS_MANAGE:"data_frame_analytics",DATA_FRAME_ANALYTICS_CREATE_JOB:"data_frame_analytics/new_job",DATA_FRAME_ANALYTICS_MODELS_MANAGE:"data_frame_analytics/models",DATA_FRAME_ANALYTICS_EXPLORATION:"data_frame_analytics/exploration",DATA_FRAME_ANALYTICS_MAP:"data_frame_analytics/map",DATA_VISUALIZER:"datavisualizer",DATA_VISUALIZER_INDEX_SELECT:"datavisualizer_index_select",DATA_VISUALIZER_FILE:"filedatavisualizer",DATA_VISUALIZER_INDEX_VIEWER:"jobs/new_job/datavisualizer",ANOMALY_DETECTION_CREATE_JOB:"jobs/new_job",ANOMALY_DETECTION_CREATE_JOB_ADVANCED:"jobs/new_job/advanced",ANOMALY_DETECTION_CREATE_JOB_SELECT_TYPE:"jobs/new_job/step/job_type",ANOMALY_DETECTION_CREATE_JOB_SELECT_INDEX:"jobs/new_job/step/index_or_search",SETTINGS:"settings",CALENDARS_MANAGE:"settings/calendars_list",CALENDARS_NEW:"settings/calendars_list/new_calendar",CALENDARS_EDIT:"settings/calendars_list/edit_calendar",FILTER_LISTS_MANAGE:"settings/filter_lists",FILTER_LISTS_NEW:"settings/filter_lists/new_filter_list",FILTER_LISTS_EDIT:"settings/filter_lists/edit_filter_list",ACCESS_DENIED:"access-denied",OVERVIEW:"overview"}},function(e,t,n){"use strict";let r,i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return c})),function(e){e.CRITICAL="critical",e.MAJOR="major",e.MINOR="minor",e.WARNING="warning",e.LOW="low",e.UNKNOWN="unknown"}(r||(r={})),function(e){e[e.CRITICAL=75]="CRITICAL",e[e.MAJOR=50]="MAJOR",e[e.MINOR=25]="MINOR",e[e.WARNING=3]="WARNING",e[e.LOW=0]="LOW"}(i||(i={}));const o={CRITICAL:"#fe5050",MAJOR:"#fba740",MINOR:"#fdec25",WARNING:"#8bc8fb",LOW:"#d2e9f7",BLANK:"#ffffff"},a={BUCKET:"bucket",RECORD:"record",INFLUENCER:"influencer"},s=["partition_field","over_field","by_field"],u="job_id",c="partition_field_value"},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){e.exports=n(20)(1074)},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r=(e,t=[])=>"object"==typeof e&&null!==e&&Object.keys(e).length>0&&(0===t.length||t.every((t=>({}.hasOwnProperty.call(e,t))))),i=e=>{if(r(e)){const t=Object.keys(e);return t.length>0?t[0]:void 0}}},function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(2);const i="ml",o="machineLearningApp",a="logoKibana",s=r.i18n.translate("xpack.ml.navMenu.mlAppNameText",{defaultMessage:"Machine Learning"}),u="/api/ml"},function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return A})),n.d(t,"j",(function(){return E})),n.d(t,"h",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"n",(function(){return y})),n.d(t,"o",(function(){return I})),n.d(t,"m",(function(){return T})),n.d(t,"c",(function(){return L}));var r=n(2),i=n(29),o=n(13),a=n(1);let s;!function(e){e.BY="by",e.OVER="over",e.PARTITON="partition"}(s||(s={}));const u={ADD:"+",REMOVE:"-"},c=["count","distinct_count","lat_long","mean","max","min","sum","median","varp","info_content","time"],l=["count","distinct_count","lat_long","mean","max","min","sum","median","varp","info_content","time"];let d;function _(){return d||(d={critical:{id:a.b.CRITICAL,label:r.i18n.translate("xpack.ml.anomalyUtils.severity.criticalLabel",{defaultMessage:"critical"})},major:{id:a.b.MAJOR,label:r.i18n.translate("xpack.ml.anomalyUtils.severity.majorLabel",{defaultMessage:"major"})},minor:{id:a.b.MINOR,label:r.i18n.translate("xpack.ml.anomalyUtils.severity.minorLabel",{defaultMessage:"minor"})},warning:{id:a.b.WARNING,label:r.i18n.translate("xpack.ml.anomalyUtils.severity.warningLabel",{defaultMessage:"warning"})},unknown:{id:a.b.UNKNOWN,label:r.i18n.translate("xpack.ml.anomalyUtils.severity.unknownLabel",{defaultMessage:"unknown"})},low:{id:a.b.LOW,label:r.i18n.translate("xpack.ml.anomalyUtils.severityWithLow.lowLabel",{defaultMessage:"low"})}})}function f(e){return e<1?"< 1":String(parseInt(String(e),10))}function b(e){const t=_();return e>=a.c.CRITICAL?t.critical:e>=a.c.MAJOR?t.major:e>=a.c.MINOR?t.minor:e>=a.c.LOW?t.warning:t.unknown}function p(e){return e>=75?a.b.CRITICAL:e>=50?a.b.MAJOR:e>=25?a.b.MINOR:e>=3?a.b.WARNING:e>=0?a.b.LOW:a.b.UNKNOWN}function A(e){const t=_();return e>=a.c.CRITICAL?t.critical:e>=a.c.MAJOR?t.major:e>=a.c.MINOR?t.minor:e>=a.c.WARNING?t.warning:e>=a.c.LOW?t.low:t.unknown}function E(e){return e>=a.c.CRITICAL?a.g.CRITICAL:e>=a.c.MAJOR?a.g.MAJOR:e>=a.c.MINOR?a.g.MINOR:e>=a.c.WARNING?a.g.WARNING:e>=a.c.LOW?a.g.LOW:a.g.BLANK}function m(e){return e>=o.a.HIGH?r.i18n.translate("xpack.ml.anomalyUtils.multiBucketImpact.highLabel",{defaultMessage:"high"}):e>=o.a.MEDIUM?r.i18n.translate("xpack.ml.anomalyUtils.multiBucketImpact.mediumLabel",{defaultMessage:"medium"}):e>=o.a.LOW?r.i18n.translate("xpack.ml.anomalyUtils.multiBucketImpact.lowLabel",{defaultMessage:"low"}):r.i18n.translate("xpack.ml.anomalyUtils.multiBucketImpact.noneLabel",{defaultMessage:"none"})}function g(e){return void 0!==e.by_field_name&&void 0!==e.by_field_value?e.by_field_name:void 0!==e.over_field_name?e.over_field_name:void 0!==e.partition_field_name?e.partition_field_name:void 0}function O(e){return void 0!==e.by_field_value?e.by_field_value:void 0!==e.over_field_value?e.over_field_value:void 0!==e.partition_field_value?e.partition_field_value:void 0}function h(e){const t=[];return void 0!==e.partition_field_name&&t.push({fieldName:e.partition_field_name,fieldValue:e.partition_field_value,fieldType:s.PARTITON}),void 0!==e.over_field_name&&t.push({fieldName:e.over_field_name,fieldValue:e.over_field_value,fieldType:s.OVER}),void 0!==e.by_field_name&&void 0===e.over_field_name&&t.push({fieldName:e.by_field_name,fieldValue:e.by_field_value,fieldType:s.BY}),t}function y(e){return c.indexOf(e)>-1}function I(e){return l.indexOf(e)>-1}function T(e){return-1===i.c.indexOf(e.function)||void 0!==g(e)}const L={toES(e){let t=e;return"mean"===t?t="avg":"distinct_count"===t?t="cardinality":"median"===t&&(t="percentiles"),t},toML(e){let t=e;return"avg"===t?t="mean":"cardinality"===t?t="distinct_count":"percentiles"===t&&(t="median"),t}}},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(8),i=n(3);function o(e,t,n){let o=`${e}/${t}`;if(n){const{globalState:e,appState:t,index:a,savedSearchId:s,...u}=n;void 0!==a&&void 0===s&&(o=`${o}?index=${a}`),void 0===a&&void 0!==s&&(o=`${o}?savedSearchId=${s}`),Object(r.isEmpty)(u)||Object.keys(u).forEach((e=>{o=Object(i.setStateToKbnUrl)(e,u[e],{useHash:!1,storeInHashQuery:!1},o)})),e&&(o=Object(i.setStateToKbnUrl)("_g",e,{useHash:!1,storeInHashQuery:!1},o)),t&&(o=Object(i.setStateToKbnUrl)("_a",t,{useHash:!1,storeInHashQuery:!1},o))}return o}},function(e,t,n){"use strict";function r(e,t){const n=e.match(/{{(.*?)}}/g);return Array.isArray(n)&&void 0!==t&&n.forEach((n=>{e=e.replace(n,t[n.replace(/{{|}}/g,"")])})),e}function i(e){let t=0,n=0;if(0===e.length)return t;for(let r=0;r<e.length;r++)n=e.charCodeAt(r),t=(t<<5)-t+n,t|=0;return t<0?-2*t:t}function o(e){return`groups:(${e.join(" or ")})`}function a(e){return Array.isArray(e)?`id:(${e.join(" OR ")})`:`id:${e}`}n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(5);const r={EQ:"eq",GTE:"gte"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={HIGH:3,MEDIUM:2,LOW:1,NONE:-5}},function(e,t,n){"use strict";n.d(t,"a",(function(){return ml_license_MlLicense})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(4),i=n.n(r),o=n(6);const a="basic";class ml_license_MlLicense{constructor(){i()(this,"_licenseSubscription",null),i()(this,"_license",null),i()(this,"_isSecurityEnabled",!1),i()(this,"_hasLicenseExpired",!1),i()(this,"_isMlEnabled",!1),i()(this,"_isMinimumLicense",!1),i()(this,"_isFullLicense",!1),i()(this,"_initialized",!1)}setup(e,t){this._licenseSubscription=e.subscribe((async e=>{const{isEnabled:n}=e.getFeature("security");this._license=e,this._isSecurityEnabled=n,this._hasLicenseExpired="expired"===this._license.status,this._isMlEnabled=this._license.getFeature(o.e).isEnabled,this._isMinimumLicense=function(e){return"valid"===e.check(o.e,a).state}(this._license),this._isFullLicense=s(this._license),!1===this._initialized&&void 0!==t&&t.forEach((e=>e(this))),this._initialized=!0}))}unsubscribe(){null!==this._licenseSubscription&&this._licenseSubscription.unsubscribe()}isSecurityEnabled(){return this._isSecurityEnabled}hasLicenseExpired(){return this._hasLicenseExpired}isMlEnabled(){return this._isMlEnabled}isMinimumLicense(){return this._isMinimumLicense}isFullLicense(){return this._isFullLicense}}function s(e){return"valid"===e.check(o.e,"platinum").state}function u(e){return e.getFeature(o.e).isEnabled}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){"use strict";n.r(t);var r=n(12);n.d(t,"ES_CLIENT_TOTAL_HITS_RELATION",(function(){return r.a}));var i=n(1);n.d(t,"ANOMALY_SEVERITY",(function(){return i.b})),n.d(t,"ANOMALY_THRESHOLD",(function(){return i.c})),n.d(t,"SEVERITY_COLORS",(function(){return i.g}));var o=n(7);n.d(t,"getSeverityColor",(function(){return o.j})),n.d(t,"getSeverityType",(function(){return o.k}));var a=n(5);n.d(t,"isPopulatedObject",(function(){return a.b}));var s=n(17);n.d(t,"composeValidators",(function(){return s.a})),n.d(t,"patternValidator",(function(){return s.e}));var u=n(18);n.d(t,"isRuntimeMappings",(function(){return u.b})),n.d(t,"isRuntimeField",(function(){return u.a}));var c=n(24);n.d(t,"extractErrorMessage",(function(){return c.b}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return _}));var r=n(27),i=n(26),o=n(5);function a(e){return t=>t&&t.length>e?{maxLength:{requiredLength:e,actualLength:t.length}}:null}function s(e){return t=>e.test(t)?null:{pattern:{matchPattern:e.toString()}}}function u(...e){return t=>{const n=e.reduce(((e,n)=>({...e,...n(t)||{}})),{});return Object.keys(n).length>0?n:null}}function c(){return e=>""===e||null==e?{required:!0}:null}function l(e=r.a){return t=>{if("string"!=typeof t||""===t)return null;return new RegExp(`\\d+(${e.join("|")})$`,"i").test(t.trim())?null:{invalidUnits:{allowedUnits:e.join(", ")}}}}function d(){return e=>{if(""===e)return null;return null===Object(i.a)(e)?{invalidTimeInterval:!0}:null}}function _(e){if(void 0!==(null==e?void 0:e.min)&&void 0!==e.max&&e.min>e.max)throw new Error("Invalid validator conditions");return t=>{const n={};return void 0!==(null==e?void 0:e.min)&&t<e.min&&(n.min=!0),void 0!==(null==e?void 0:e.max)&&t>e.max&&(n.max=!0),Object(o.b)(n)?n:null}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(5),i=n(28);function o(e){return(Object(r.b)(e,["type"])&&1===Object.keys(e).length||Object(r.b)(e,["type","script"])&&("string"==typeof e.script||Object(r.b)(e.script,["source"])&&"string"==typeof e.script.source||Object(r.b)(e.script,["id"])&&"string"==typeof e.script.id))&&i.RUNTIME_FIELD_TYPES.includes(e.type)}function a(e){return Object(r.b)(e)&&Object.values(e).every((e=>o(e)))}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"j",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"k",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"l",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return _})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return A}));const r={timefilter:null,config:null,indexPatterns:null,chrome:null,docLinks:null,toastNotifications:null,overlays:null,recentlyAccessed:null,fieldFormats:null,autocomplete:null,basePath:null,savedObjectsClient:null,application:null,http:null,security:null,i18n:null,urlGenerators:null,maps:null,dataVisualizer:null,dataViews:null};function i(e){r.timefilter=e.timefilter||null,r.config=e.config||null,r.chrome=e.chrome||null,r.indexPatterns=e.indexPatterns||null,r.docLinks=e.docLinks||null,r.toastNotifications=e.toastNotifications||null,r.overlays=e.overlays||null,r.recentlyAccessed=e.recentlyAccessed||null,r.fieldFormats=e.fieldFormats||null,r.autocomplete=e.autocomplete||null,r.basePath=e.basePath||null,r.savedObjectsClient=e.savedObjectsClient||null,r.application=e.application||null,r.http=e.http||null,r.security=e.security||null,r.i18n=e.i18n||null,r.urlGenerators=e.urlGenerators||null,r.dataVisualizer=e.dataVisualizer||null,r.dataViews=e.dataViews||null}function o(){if(null===r.timefilter)throw new Error("timefilter hasn't been initialized");return r.timefilter.timefilter}function a(){if(null===r.docLinks)throw new Error("docLinks hasn't been initialized");return r.docLinks}function s(){if(null===r.toastNotifications)throw new Error("toast notifications haven't been initialized");return r.toastNotifications}function u(){if(null===r.overlays)throw new Error("overlays haven't been initialized");return r.overlays}function c(){if(null===r.config)throw new Error("uiSettings hasn't been initialized");return r.config}function l(){if(null===r.recentlyAccessed)throw new Error("recentlyAccessed hasn't been initialized");return r.recentlyAccessed}function d(){if(null===r.fieldFormats)throw new Error("fieldFormats hasn't been initialized");return r.fieldFormats}function _(){if(null===r.savedObjectsClient)throw new Error("savedObjectsClient hasn't been initialized");return r.savedObjectsClient}function f(){if(null===r.http)throw new Error("http hasn't been initialized");return r.http}function b(){if(null===r.urlGenerators)throw new Error("urlGenerators hasn't been initialized");return r.urlGenerators.getUrlGenerator}function p(){if(null===r.dataViews)throw new Error("dataViews hasn't been initialized");return r.dataViews}function A(){Object.keys(r).forEach((e=>{r[e]=null}))}},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t,n){"use strict";n.d(t,"a",(function(){return MLRequestFailure})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return o}));class MLRequestFailure extends Error{constructor(e,t){if(super(e.message),Object.setPrototypeOf(this,new.target.prototype),"string"!=typeof t&&void 0!==t)if("body"in t)this.stack=JSON.stringify(t.body,null,2);else try{this.stack=JSON.stringify(t,null,2)}catch(e){}}}function r(e){var t;return e&&void 0!==(null===(t=e.error)||void 0===t?void 0:t.reason)}function i(e){return"string"==typeof e}function o(e){return"object"==typeof e.body&&"message"in e.body}function a(e){return!0===(null==e?void 0:e.isBoom)}var s=n(5);const u=e=>{if(r(e))return{message:e.error.reason,statusCode:e.status,fullError:e};if(i(e))return{message:e};if(a(e))return{message:e.output.payload.message,statusCode:e.output.payload.statusCode};if(void 0===(null==e?void 0:e.body)&&(null==e||!e.message))return{message:""};if("string"==typeof e.body)return{message:e.body};if(o(e)){var t,n;if("object"==typeof e.body.attributes&&"string"==typeof(null===(t=e.body.attributes.body)||void 0===t||null===(n=t.error)||void 0===n?void 0:n.reason)){var u,c,l;const t={message:e.body.attributes.body.error.reason,statusCode:e.body.statusCode,fullError:e.body.attributes.body};var d,_,f;if("object"==typeof e.body.attributes.body.error.caused_by&&("string"==typeof(null===(u=e.body.attributes.body.error.caused_by)||void 0===u?void 0:u.reason)||"string"==typeof(null===(c=e.body.attributes.body.error.caused_by)||void 0===c||null===(l=c.caused_by)||void 0===l?void 0:l.reason)))t.causedBy=(null===(d=e.body.attributes.body.error.caused_by)||void 0===d||null===(_=d.caused_by)||void 0===_?void 0:_.reason)||(null===(f=e.body.attributes.body.error.caused_by)||void 0===f?void 0:f.reason);return Array.isArray(e.body.attributes.body.error.root_cause)&&"object"==typeof e.body.attributes.body.error.root_cause[0]&&Object(s.b)(e.body.attributes.body.error.root_cause[0],["script"])&&(t.causedBy=e.body.attributes.body.error.root_cause[0].script,t.message+=`: '${e.body.attributes.body.error.root_cause[0].script}'`),t}return{message:e.body.message,statusCode:e.body.statusCode}}return function(e){return e&&void 0!==e.message&&"string"==typeof e.message}(e)?{message:e.message}:{message:""}},c=e=>u(e).message},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(21),i=n(31);const o=new RegExp("^([0-9]*)\\s*("+n.n(i).a.units.join("|")+")$"),a=["ms","s","m","h"],s=["ms","s","m","h","d"];function u(e,t=!1){const n=String(e).trim().match(o);if(!Array.isArray(n)||n.length<3)return null;try{const e=parseInt(n[1],10),i=n[2];return isNaN(e)||e<1&&-1===a.indexOf(i)||!0===t&&-1===s.indexOf(i)?null:Object(r.duration)(e,i)}catch(e){return null}}},function(e,t,n){"use strict";let r;n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),function(e){e.ERROR="error",e.INFO="info",e.SUCCESS="success",e.WARNING="warning"}(r||(r={}));const i=["B","KB","MB","GB","TB","PB"],o=64},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/data/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";let r,i,o,a;n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),function(e){e.SKIP_MODEL_UPDATE="skip_model_update",e.SKIP_RESULT="skip_result"}(r||(r={})),function(e){e.EXCLUDE="exclude",e.INCLUDE="include"}(i||(i={})),function(e){e.ACTUAL="actual",e.DIFF_FROM_TYPICAL="diff_from_typical",e.TYPICAL="typical"}(o||(o={})),function(e){e.LESS_THAN="lt",e.LESS_THAN_OR_EQUAL="lte",e.GREATER_THAN="gt",e.GREATER_THAN_OR_EQUAL="gte"}(a||(a={}));const s=["freq_rare","lat_long","metric","rare"]},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="ml_anomaly_swimlane",i="ml_anomaly_charts"},function(e,t,n){e.exports=n(20)(114)},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="anomaly-swim-lane",i="anomaly-charts"},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(15),i=n.n(r),o=n(11);const a=i.a.lazy((()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,753)))),s=({jobIds:e})=>Object(o.jsx)(i.a.Suspense,{fallback:Object(o.jsx)("div",null)},Object(o.jsx)(a,{jobIds:e}))},function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return _}));var r=n(8),i=n(0),o=n(9),a=n(3),s=n(10);function u(e,t){let n=`${e}/${i.b.ANOMALY_DETECTION_JOBS_MANAGE}`;if(!t||Object(r.isEmpty)(t))return n;const{jobId:o,groupIds:u,globalState:c}=t;if(o||u){const e=[];o&&e.push(Object(s.b)(o)),u&&e.push(Object(s.a)(u));const t={...e.length>0?{queryText:e.join(" ")}:{}},r={[i.b.ANOMALY_DETECTION_JOBS_MANAGE]:t};n=Object(a.setStateToKbnUrl)("_a",r,{useHash:!1,storeInHashQuery:!1},n)}return c&&(n=Object(a.setStateToKbnUrl)("_g",c,{useHash:!1,storeInHashQuery:!1},n)),n}function c(e,t){return Object(o.a)(e,i.b.ANOMALY_DETECTION_CREATE_JOB_SELECT_TYPE,t)}function l(e,t){return Object(o.a)(e,i.b.ANOMALY_DETECTION_CREATE_JOB_SELECT_INDEX,t)}function d(e,t){let n=`${e}/${i.b.ANOMALY_EXPLORER}`;if(!t)return n;const{refreshInterval:r,timeRange:o,jobIds:s,query:u,mlExplorerSwimlane:c={},mlExplorerFilter:l={},globalState:d}=t,_={mlExplorerSwimlane:c,mlExplorerFilter:l};let f={};return d&&(f=d),u&&(_.query=u),s&&(f.ml={jobIds:s}),r&&(f.refreshInterval=r),o&&(f.time=o),n=Object(a.setStateToKbnUrl)("_g",f,{useHash:!1,storeInHashQuery:!1},n),n=Object(a.setStateToKbnUrl)("_a",{[i.b.ANOMALY_EXPLORER]:_},{useHash:!1,storeInHashQuery:!1},n),n}function _(e,t){let n=`${e}/${i.b.SINGLE_METRIC_VIEWER}`;if(!t)return n;const{timeRange:r,jobIds:o,refreshInterval:s,query:u,detectorIndex:c,forecastId:l,entities:d,globalState:_,functionDescription:f,zoom:b}=t;let p={};_&&(p=_),o&&(p.ml={jobIds:o}),s&&(p.refreshInterval=s),r&&(p.time=r);const A={},E={};return void 0!==l&&(E.forecastId=l),void 0!==c&&(E.detectorIndex=c),void 0!==d&&(E.entities=d),void 0!==f&&(E.functionDescription=f),void 0!==b&&(E.zoom=b),A.mlTimeSeriesExplorer=E,u&&(A.query={query_string:u}),n=Object(a.setStateToKbnUrl)("_g",p,{useHash:!1,storeInHashQuery:!1},n),n=Object(a.setStateToKbnUrl)("_a",{[i.b.SINGLE_METRIC_VIEWER]:A},{useHash:!1,storeInHashQuery:!1},n),n}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2);function i(e,t,i){return e.sections.section.insightsAndAlerting.registerApp({id:"jobsListLink",title:r.i18n.translate("xpack.ml.management.jobsListTitle",{defaultMessage:"Machine Learning Jobs"}),order:2,async mount(e){const{mountApp:r}=await Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(4),n.e(3),n.e(6),n.e(7),n.e(8),n.e(13)]).then(n.bind(null,65));return r(t,e,i)}})}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/home/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return v})),n.d(t,"ANOMALY_SWIMLANE_EMBEDDABLE_TYPE",(function(){return h.b})),n.d(t,"CONTROLLED_BY_SWIM_LANE_FILTER",(function(){return y.b})),n.d(t,"getSeverityColor",(function(){return I.j})),n.d(t,"getSeverityType",(function(){return I.k})),n.d(t,"getFormattedSeverityScore",(function(){return I.g})),n.d(t,"getSeverity",(function(){return I.i})),n.d(t,"ES_CLIENT_TOTAL_HITS_RELATION",(function(){return T.a})),n.d(t,"ANOMALY_SEVERITY",(function(){return L.ANOMALY_SEVERITY})),n.d(t,"useMlHref",(function(){return g})),n.d(t,"ML_PAGES",(function(){return f.b})),n.d(t,"MlLocatorDefinition",(function(){return ml_locator_MlLocatorDefinition})),n.d(t,"getMlSharedImports",(function(){return N})),n.d(t,"MLJobsAwaitingNodeWarning",(function(){return S.a}));var r=n(4),i=n.n(r),o=n(2),a=n(23),s=n(25),u=n(19),c=n(6),l=n(14),d=n(22),_=n(36);var f=n(0),b=n(9),p=n(34),A=n(8),E=n(3),m=n(10);class ml_locator_MlLocatorDefinition{constructor(){i()(this,"id",f.a),i()(this,"getLocation",(async e=>{let t="";switch(e.page){case f.b.ANOMALY_DETECTION_JOBS_MANAGE:t=Object(p.c)("",e.pageState);break;case f.b.ANOMALY_EXPLORER:t=Object(p.d)("",e.pageState);break;case f.b.ANOMALY_DETECTION_CREATE_JOB_SELECT_TYPE:t=Object(p.b)("",e.pageState);break;case f.b.ANOMALY_DETECTION_CREATE_JOB_SELECT_INDEX:t=Object(p.a)("",e.pageState);break;case f.b.SINGLE_METRIC_VIEWER:t=Object(p.e)("",e.pageState);break;case f.b.DATA_FRAME_ANALYTICS_JOBS_MANAGE:t=function(e,t){let n=`${e}/${f.b.DATA_FRAME_ANALYTICS_JOBS_MANAGE}`;if(t){const{jobId:e,groupIds:r,globalState:i}=t;if(e||r){const t=[];e&&t.push(Object(m.b)(e)),r&&t.push(Object(m.a)(r));const i={...t.length>0?{queryText:t.join(" ")}:{}},o={[f.b.DATA_FRAME_ANALYTICS_JOBS_MANAGE]:i};n=Object(E.setStateToKbnUrl)("_a",o,{useHash:!1,storeInHashQuery:!1},n)}i&&(n=Object(E.setStateToKbnUrl)("_g",i,{useHash:!1,storeInHashQuery:!1},n))}return n}("",e.pageState);break;case f.b.DATA_FRAME_ANALYTICS_CREATE_JOB:n="",r=e.pageState,t=Object(b.a)(n,f.b.DATA_FRAME_ANALYTICS_CREATE_JOB,r);break;case f.b.DATA_FRAME_ANALYTICS_MAP:t=function(e,t){let n=`${e}/${f.b.DATA_FRAME_ANALYTICS_MAP}`;if(t){const{jobId:e,modelId:r,analysisType:i,globalState:o,queryText:a}=t,s={ml:{jobId:e,modelId:r,analysisType:i},...o},u={[f.b.DATA_FRAME_ANALYTICS_MAP]:{...a?{queryText:a}:{}}};Object(A.isEmpty)(u[f.b.DATA_FRAME_ANALYTICS_MAP])||(n=Object(E.setStateToKbnUrl)("_a",u,{useHash:!1,storeInHashQuery:!1},n)),n=Object(E.setStateToKbnUrl)("_g",s,{useHash:!1,storeInHashQuery:!1},n)}return n}("",e.pageState);break;case f.b.DATA_FRAME_ANALYTICS_EXPLORATION:t=function(e,t){let n=`${e}/${f.b.DATA_FRAME_ANALYTICS_EXPLORATION}`;if(t){const{jobId:e,analysisType:r,queryText:i,globalState:o}=t,a={ml:{jobId:e,analysisType:r},...o},s={[f.b.DATA_FRAME_ANALYTICS_EXPLORATION]:{...i?{queryText:i}:{}}};Object(A.isEmpty)(s[f.b.DATA_FRAME_ANALYTICS_EXPLORATION])||(n=Object(E.setStateToKbnUrl)("_a",s,{useHash:!1,storeInHashQuery:!1},n)),n=Object(E.setStateToKbnUrl)("_g",a,{useHash:!1,storeInHashQuery:!1},n)}return n}("",e.pageState);break;case f.b.ANOMALY_DETECTION_CREATE_JOB:case f.b.ANOMALY_DETECTION_CREATE_JOB_ADVANCED:case f.b.DATA_VISUALIZER:case f.b.DATA_VISUALIZER_FILE:case f.b.DATA_VISUALIZER_INDEX_VIEWER:case f.b.DATA_VISUALIZER_INDEX_SELECT:case f.b.OVERVIEW:case f.b.SETTINGS:case f.b.FILTER_LISTS_MANAGE:case f.b.FILTER_LISTS_NEW:case f.b.CALENDARS_MANAGE:case f.b.CALENDARS_NEW:case f.b.ACCESS_DENIED:t=Object(b.a)("",e.page,e.pageState);break;case f.b.FILTER_LISTS_EDIT:t=function(e,t){let n=`${e}/${f.b.FILTER_LISTS_EDIT}`;if(t){const{globalState:e,filterId:r}=t;void 0!==r&&(n=`${n}/${r}`),e&&(n=Object(E.setStateToKbnUrl)("_g",e,{useHash:!1,storeInHashQuery:!1},n))}return n}("",e.pageState);break;case f.b.CALENDARS_EDIT:t=function(e,t){let n=`${e}/${f.b.CALENDARS_EDIT}`;if(t){const{globalState:e,calendarId:r}=t;void 0!==r&&(n=`${n}/${r}`),e&&(n=Object(E.setStateToKbnUrl)("_g",e,{useHash:!1,storeInHashQuery:!1},n))}return n}("",e.pageState);break;default:throw new Error("Page type is not provided or unknown")}var n,r;return{app:"ml",path:t,state:{}}}))}}const g=(e,t,n)=>e&&e.locator?e.locator.useUrl(n):void 0!==t?`${t}/app/ml/${n.page}`:"";var O=n(35);class plugin_MlPlugin{constructor(e){i()(this,"appUpdater$",new a.BehaviorSubject((()=>({})))),i()(this,"locator",void 0),this.initializerContext=e}setup(e,t){e.application.register({id:c.e,title:o.i18n.translate("xpack.ml.plugin.title",{defaultMessage:"Machine Learning"}),order:5e3,euiIconType:c.d,appRoute:"/app/ml",category:u.DEFAULT_APP_CATEGORIES.kibana,updater$:this.appUpdater$,mount:async r=>{const[i,o]=await e.getStartServices(),a=this.initializerContext.env.packageInfo.version,{renderApp:s}=await Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(4),n.e(3),n.e(6),n.e(7),n.e(8)]).then(n.bind(null,247));return s(i,{data:o.data,share:o.share,kibanaLegacy:o.kibanaLegacy,security:t.security,licensing:t.licensing,management:t.management,licenseManagement:t.licenseManagement,home:t.home,embeddable:{...t.embeddable,...o.embeddable},maps:o.maps,uiActions:o.uiActions,kibanaVersion:a,triggersActionsUi:o.triggersActionsUi,dataVisualizer:o.dataVisualizer,usageCollection:t.usageCollection},r)}}),t.share&&(this.locator=t.share.url.locators.create(new ml_locator_MlLocatorDefinition)),t.management&&Object(O.a)(t.management,e,{usageCollection:t.usageCollection}).enable();return t.licensing.license$.pipe(Object(s.take)(1)).subscribe((async r=>{const[i]=await e.getStartServices(),{capabilities:a}=i.application;Object(l.c)(r)?t.home&&t.home.featureCatalogue.register({id:c.e,title:o.i18n.translate("xpack.ml.machineLearningTitle",{defaultMessage:"Machine Learning"}),subtitle:o.i18n.translate("xpack.ml.machineLearningSubtitle",{defaultMessage:"Model, predict, and detect."}),description:o.i18n.translate("xpack.ml.machineLearningDescription",{defaultMessage:"Automatically model the normal behavior of your time series data to detect anomalies."}),icon:"machineLearningApp",path:"/app/ml",showOnHomePage:!1,category:_.FeatureCatalogueCategory.DATA,solutionId:"kibana",order:500}):this.appUpdater$.next((()=>({status:u.AppStatus.inaccessible})));const{registerEmbeddables:s,registerMlUiActions:d,registerSearchLinks:f,registerMlAlerts:b}=await Promise.all([n.e(7),n.e(8),n.e(20)]).then(n.bind(null,758)),p=Object(l.c)(r),A=Object(l.b)(r);if(p&&(f(this.appUpdater$,A),A)){var E;s(t.embeddable,e),d(t.uiActions,e);const n=null===(E=a.ml)||void 0===E?void 0:E.canUseMlAlerts;t.triggersActionsUi&&n&&b(t.triggersActionsUi,t.alerting)}})),{locator:this.locator}}start(e,t){return Object(d.m)({docLinks:e.docLinks,basePath:e.http.basePath,http:e.http,i18n:e.i18n}),{locator:this.locator}}stop(){}}var h=n(30),y=n(32),I=n(7),T=n(12),L=n(16),S=n(33);const v=e=>new plugin_MlPlugin(e),N=async()=>await Promise.all([n.e(0),n.e(2),n.e(5),n.e(7),n.e(25)]).then(n.bind(null,756))},function(e,t,n){n(39),__kbnBundles__.define("plugin/ml/public",n,37),__kbnBundles__.define("plugin/ml/common",n,16)},function(e,t,n){n.p=window.__kbnPublicPath__.ml},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.TsLib},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/uiActions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Theme},function(e,t){e.exports=__kbnSharedDeps__.ElasticNumeral},function(e,t){e.exports=__kbnSharedDeps__.RisonNode},function(e,t){e.exports=__kbnSharedDeps__.ElasticEuiLibServices},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/dashboard/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/savedObjects/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/maps/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/fieldFormats/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Jquery},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t){e.exports=__kbnSharedDeps__.ElasticEuiLibServicesFormat},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/usageCollection/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}]);