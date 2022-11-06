/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function n(n){for(var t,i,a=n[0],o=n[1],c=0,u=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(s&&s(n);u.length;)u.shift()()}var t={},r={0:0};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,i){t=r[e]=[n,i]}));n.push(t[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"licenseManagement.chunk."+e+".js"}(e);var s=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,t[1](s)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.licenseManagement_bundle_jsonpfunction=window.licenseManagement_bundle_jsonpfunction||[],o=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var s=o;i(i.s=7)}([function(e,n,t){"use strict";t.r(n),t.d(n,"PLUGIN",(function(){return r})),t.d(n,"MAJOR_VERSION",(function(){return i})),t.d(n,"API_BASE_PATH",(function(){return a})),t.d(n,"EXTERNAL_LINKS",(function(){return c})),t.d(n,"APP_PERMISSION",(function(){return s}));const r={title:t(2).i18n.translate("xpack.licenseMgmt.managementSectionDisplayName",{defaultMessage:"License Management"}),id:"license_management"},i="7.16.0",a="/api/license",o="https://www.elastic.co/",c={SUBSCRIPTIONS:`${o}subscriptions`,TRIAL_EXTENSION:`${o}trialextension`,TRIAL_LICENSE:`${o}legal/trial_license`},s="cluster:manage"},function(e,n,t){e.exports=t(6)(1074)},function(e,n){e.exports=__kbnSharedDeps__.KbnI18n},function(e,n,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function c(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var a=e[i],s=n.base?a[0]+n.base:a[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:l,updater:h(f,n),references:1}),r.push(l)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,_=0;function h(e,n){var t,r,i;if(n.singleton){var a=_++;t=m||(m=u(n)),r=f.bind(null,t,a,!1),i=f.bind(null,t,a,!0)}else t=u(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=c(t[r]);o[i].references--}for(var a=s(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=a}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}var o,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,n){e.exports=__kbnSharedDeps_npm__},function(e,n,t){t(8),__kbnBundles__.define("plugin/licenseManagement/public",t,18),__kbnBundles__.define("plugin/licenseManagement/common/constants",t,0)},function(e,n,t){t.p=window.__kbnPublicPath__.licenseManagement},function(e,n,t){switch(window.__kbnThemeTag__){case"v7dark":return t(10);case"v7light":return t(12);case"v8dark":return t(14);case"v8light":return t(16)}},function(e,n,t){var r=t(3),i=t(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".licFeature{flex-grow:1}.licManagement__modal{width:70vw}.licManagement__narrowText{width:240px}.licManagement__ieFlex{flex-shrink:0}\n",""]),e.exports=n},function(e,n,t){var r=t(3),i=t(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".licFeature{flex-grow:1}.licManagement__modal{width:70vw}.licManagement__narrowText{width:240px}.licManagement__ieFlex{flex-shrink:0}\n",""]),e.exports=n},function(e,n,t){var r=t(3),i=t(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".licFeature{flex-grow:1}.licManagement__modal{width:70vw}.licManagement__narrowText{width:240px}.licManagement__ieFlex{flex-shrink:0}\n",""]),e.exports=n},function(e,n,t){var r=t(3),i=t(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".licFeature{flex-grow:1}.licManagement__modal{width:70vw}.licManagement__narrowText{width:240px}.licManagement__ieFlex{flex-shrink:0}\n",""]),e.exports=n},function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return s}));var r=t(1),i=t.n(r),a=t(5),o=t(0),c=t(2);class breadcrumbs_BreadcrumbService{constructor(){i()(this,"breadcrumbs",{dashboard:[],upload:[]}),i()(this,"setBreadcrumbsHandler",void 0)}setup(e){this.setBreadcrumbsHandler=e,this.breadcrumbs.dashboard=[{text:c.i18n.translate("xpack.licenseMgmt.dashboard.breadcrumb",{defaultMessage:"License management"}),href:"/"}],this.breadcrumbs.upload=[...this.breadcrumbs.dashboard,{text:c.i18n.translate("xpack.licenseMgmt.upload.breadcrumb",{defaultMessage:"Upload"})}]}setBreadcrumbs(e){if(!this.setBreadcrumbsHandler)throw new Error("BreadcrumbService#setup() must be called first!");const n=this.breadcrumbs[e]?[...this.breadcrumbs[e]]:[...this.breadcrumbs.home],t=n.pop();n.push({...t,href:void 0}),this.setBreadcrumbsHandler(n)}}class plugin_LicenseManagementUIPlugin{constructor(e){i()(this,"breadcrumbService",new breadcrumbs_BreadcrumbService),this.initializerContext=e}setup(e,n){const r=this.initializerContext.config.get();if(!r.ui.enabled)return{enabled:!1};const{getStartServices:i}=e,{management:c,licensing:s}=n;return c.sections.section.stack.registerApp({id:o.PLUGIN.id,title:o.PLUGIN.title,order:0,mount:async({element:e,setBreadcrumbs:c,history:u})=>{const[l,{telemetry:d}]=await i(),f=await n.licensing.license$.pipe(Object(a.first)()).toPromise(),{docLinks:p,chrome:{docTitle:m}}=l,_={security:p.links.security.elasticsearchSettings};m.change(o.PLUGIN.title),this.breadcrumbService.setup(c);const h={core:l,config:r,plugins:{licensing:s,telemetry:d},services:{breadcrumbService:this.breadcrumbService,history:u},store:{initialLicense:f},docLinks:_},{renderApp:b}=await t.e(1).then(t.bind(null,101)),g=b(e,h);return()=>{m.reset(),g()}}}),{enabled:!0}}start(){}stop(){}}t(9);const s=e=>new plugin_LicenseManagementUIPlugin(e)},function(e,n){e.exports=__kbnSharedDeps__.React},function(e,n){e.exports=__kbnSharedDeps__.EmotionReact},function(e,n){e.exports=__kbnSharedDeps__.ElasticEui},function(e,n){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,n){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,n){e.exports=__kbnSharedDeps__.ReactDom},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps__.Lodash},function(e,n){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/telemetryManagementSection/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))}]);