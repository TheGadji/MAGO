/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(t){function e(e){for(var n,o,i=e[0],u=e[1],s=0,a=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&a.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);a.length;)a.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(t){return o.p+"remoteClusters.chunk."+t+".js"}(t);var c=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(a);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[t]=void 0}};var a=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.remoteClusters_bundle_jsonpfunction=window.remoteClusters_bundle_jsonpfunction||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;o(o.s=12)}([function(t,e){t.exports=__kbnSharedDeps__.KbnI18n},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return s}));var r=n(0);const o={minimumLicenseType:"basic",getI18nName:()=>r.i18n.translate("xpack.remoteClusters.appName",{defaultMessage:"Remote Clusters"})},i="/api/remote_clusters",u="sniff",s="proxy"},function(t,e,n){t.exports=n(11)(1074)},function(t,e){t.exports=__kbnSharedDeps__.KbnAnalytics},function(t,e,n){"use strict";let r,o,i,u,s;function c({links:t}){r=t.ccs.skippingDisconnectedClusters,o=t.elasticsearch.remoteClusters,i=t.elasticsearch.transportSettings,u=t.elasticsearch.remoteClustersProxy,s=t.elasticsearch.remoteClusersProxySettings}n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return c}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n(0);let o,i;function u(t){o=t,i={home:{text:r.i18n.translate("xpack.remoteClusters.listBreadcrumbTitle",{defaultMessage:"Remote Clusters"}),href:"/list"},add:{text:r.i18n.translate("xpack.remoteClusters.addBreadcrumbTitle",{defaultMessage:"Add"})},edit:{text:r.i18n.translate("xpack.remoteClusters.editBreadcrumbTitle",{defaultMessage:"Edit"})}}}function s(t,e){if(i[t])if("home"===t)o([i.home]);else{const n={text:i.home.text,href:`${i.home.href}${e}`};o([n,i[t]])}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c}));var r=n(3);n.d(e,"a",(function(){return r.METRIC_TYPE}));var o=n(8);let i;function u(t){i=t}function s(t,e){if(!i)return;const{reportUiCounter:n}=i;n(o.b,t,e)}function c(t,e){return t.then((t=>(s(r.METRIC_TYPE.COUNT,e),t)))}},function(t,e,n){"use strict";let r,o;function i(t,e){r=t,o=e}n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return a}));const r="remote_clusters",o="app_load",i="cluster_add",u="cluster_update",s="cluster_remove",c="cluster_remove_many",a="show_details_click"},function(t,e,n){"use strict";let r;function o(t){r=t}function i(t){r("management",{path:t})}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return l}));var r=n(1);let o;function i(t){o=t}function u(t){return t?`${r.a}/${t}`:r.a}function s(t,e){return o.post(u(t),{body:JSON.stringify(e)})}function c(t,{asSystemRequest:e}={}){return o.get(u(t),{asSystemRequest:e})}function a(t,e){return o.put(u(t),{body:JSON.stringify(e)})}function l(t){return o.delete(u(t))}},function(t,e){t.exports=__kbnSharedDeps_npm__},function(t,e,n){n(13),__kbnBundles__.define("plugin/remoteClusters/public",n,14)},function(t,e,n){n.p=window.__kbnPublicPath__.remoteClusters},function(t,e,n){"use strict";n.r(e),n.d(e,"plugin",(function(){return p}));var r=n(0),o=n(1),i=n(5),u=n(4),s=n(10),c=n(6),a=n(7),l=n(9),f=n(2),d=n.n(f);class locator_RemoteClustersLocatorDefinition{constructor(t){d()(this,"id","REMOTE_CLUSTERS_LOCATOR"),d()(this,"getLocation",(async t=>{const e=await this.deps.managementAppLocator.getLocation({sectionId:"data",appId:"remote_clusters"});if("remoteClusters"===t.page)return{...e,path:e.path}})),this.deps=t}}class plugin_RemoteClustersUIPlugin{constructor(t){this.initializerContext=t}setup({notifications:{toasts:t},http:e,getStartServices:l},{management:f,usageCollection:d,cloud:p,share:_}){const{ui:{enabled:m}}=this.initializerContext.config.get();if(m){f.sections.section.data.registerApp({id:"remote_clusters",title:r.i18n.translate("xpack.remoteClusters.appTitle",{defaultMessage:"Remote Clusters"}),order:7,mount:async({element:r,setBreadcrumbs:f,history:_})=>{var m;const[b]=await l(),{chrome:{docTitle:h},i18n:{Context:g},docLinks:y,fatalErrors:C}=b;h.change(o.b.getI18nName()),Object(i.a)(f),Object(u.a)(y),Object(c.b)(d),Object(a.b)(t,C),Object(s.a)(e);const v=Boolean(null==p?void 0:p.isCloudEnabled),x=null!==(m=null==p?void 0:p.baseUrl)&&void 0!==m?m:"",{renderApp:O}=await n.e(1).then(n.bind(null,68)),k=await O(r,g,{isCloudEnabled:v,cloudBaseUrl:x},_);return()=>{h.reset(),k()}}}),_.url.locators.create(new locator_RemoteClustersLocatorDefinition({managementAppLocator:f.locator}))}return{isUiEnabled:m}}start({application:t}){const{ui:{enabled:e}}=this.initializerContext.config.get();e&&Object(l.a)(t.navigateToApp)}stop(){}}const p=t=>new plugin_RemoteClustersUIPlugin(t)},function(t,e){t.exports=__kbnSharedDeps__.React},function(t,e){t.exports=__kbnSharedDeps__.EmotionReact},function(t,e){t.exports=__kbnSharedDeps__.KbnI18nReact},function(t,e){t.exports=__kbnSharedDeps__.ElasticEui},function(t,e,n){n.r(e);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))},function(t,e,n){n.r(e);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))},function(t,e){t.exports=__kbnSharedDeps__.ReactDom},function(t,e){t.exports=__kbnSharedDeps__.ReactRouterDom},function(t,e){t.exports=__kbnSharedDeps__.Lodash}]);