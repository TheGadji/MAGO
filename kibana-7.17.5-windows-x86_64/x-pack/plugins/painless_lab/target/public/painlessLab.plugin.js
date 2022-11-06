/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function n(n){for(var t,i,r=n[0],o=n[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(l&&l(n);c.length;)c.shift()()}var t={},a={0:0};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,i){t=a[e]=[n,i]}));n.push(t[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"painlessLab.chunk."+e+".js"}(e);var l=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(c);var t=a[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,t[1](l)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var r=window.painlessLab_bundle_jsonpfunction=window.painlessLab_bundle_jsonpfunction||[],o=r.push.bind(r);r.push=n,r=r.slice();for(var s=0;s<r.length;s++)n(r[s]);var l=o;i(i.s=9)}([function(e,n){e.exports=__kbnSharedDeps__.KbnI18n},function(e,n){e.exports=__kbnSharedDeps__.EmotionReact},function(e,n){e.exports=__kbnSharedDeps__.ElasticEui},function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function s(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},a=[],i=0;i<e.length;i++){var r=e[i],l=n.base?r[0]+n.base:r[0],c=t[l]||0,p="".concat(l," ").concat(c);t[l]=c+1;var u=s(p),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(d)):o.push({identifier:p,updater:g(d,n),references:1}),a.push(p)}return a}function c(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var p,u=(p=[],function(e,n){return p[e]=n,p.filter(Boolean).join("\n")});function d(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var r=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function h(e,n,t){var a=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var b=null,f=0;function g(e,n){var t,a,i;if(n.singleton){var r=f++;t=b||(b=c(n)),a=d.bind(null,t,r,!1),i=d.bind(null,t,r,!0)}else t=c(n),a=h.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=s(t[a]);o[i].references--}for(var r=l(e,n),c=0;c<t.length;c++){var p=s(t[c]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}t=r}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var i=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([i]).join("\n")}var o,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));const a={id:"painlessLab",minimumLicenseType:"basic"},i="/api/painless_lab"},function(e,n){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,n,t){t.r(n);var a=__kbnBundles__.get("plugin/home/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(a))},function(e,n){e.exports=__kbnSharedDeps__.React},function(e,n,t){t(10),__kbnBundles__.define("plugin/painlessLab/public",t,20)},function(e,n,t){t.p=window.__kbnPublicPath__.painlessLab},function(e,n,t){switch(window.__kbnThemeTag__){case"v7dark":return t(12);case"v7light":return t(14);case"v8dark":return t(16);case"v8light":return t(18)}},function(e,n,t){var a=t(3),i=t(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".painlessLabBottomBarPlaceholder{height:48px}.painlessLabLeftPane{padding-top:12px;background-color:#16171c}.painlessLabRightPane{background-color:#1D1E24;padding:8px;border-left:1px solid #343741;height:100%}.painlessLabRightPane__tabs{display:flex;flex-direction:column;height:100%}.painlessLabRightPane__tabs [role='tabpanel']{height:100%;overflow-y:auto}.painlessLab__betaLabelContainer{line-height:0}.painlessLabMainContainer{height:calc(100vh - 195px)}.kbnBody--chromeHidden .painlessLabMainContainer{height:calc(100vh - 97px)}.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 227px)}.kbnBody--chromeHidden.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 129px)}.painlessLabPanelsContainer{height:100%}\n",""]),e.exports=n},function(e,n,t){var a=t(3),i=t(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".painlessLabBottomBarPlaceholder{height:48px}.painlessLabLeftPane{padding-top:12px;background-color:#fbfcfd}.painlessLabRightPane{background-color:#fff;padding:8px;border-left:1px solid #D3DAE6;height:100%}.painlessLabRightPane__tabs{display:flex;flex-direction:column;height:100%}.painlessLabRightPane__tabs [role='tabpanel']{height:100%;overflow-y:auto}.painlessLab__betaLabelContainer{line-height:0}.painlessLabMainContainer{height:calc(100vh - 195px)}.kbnBody--chromeHidden .painlessLabMainContainer{height:calc(100vh - 97px)}.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 227px)}.kbnBody--chromeHidden.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 129px)}.painlessLabPanelsContainer{height:100%}\n",""]),e.exports=n},function(e,n,t){var a=t(3),i=t(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".painlessLabBottomBarPlaceholder{height:48px}.painlessLabLeftPane{padding-top:12px;background-color:#16171c}.painlessLabRightPane{background-color:#1D1E24;padding:8px;border-left:1px solid #343741;height:100%}.painlessLabRightPane__tabs{display:flex;flex-direction:column;height:100%}.painlessLabRightPane__tabs [role='tabpanel']{height:100%;overflow-y:auto}.painlessLab__betaLabelContainer{line-height:0}.painlessLabMainContainer{height:calc(100vh - 192px)}.kbnBody--chromeHidden .painlessLabMainContainer{height:calc(100vh - 96px)}.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 224px)}.kbnBody--chromeHidden.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 128px)}.painlessLabPanelsContainer{height:100%}\n",""]),e.exports=n},function(e,n,t){var a=t(3),i=t(19);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,".painlessLabBottomBarPlaceholder{height:48px}.painlessLabLeftPane{padding-top:12px;background-color:#fbfcfd}.painlessLabRightPane{background-color:#fff;padding:8px;border-left:1px solid #D3DAE6;height:100%}.painlessLabRightPane__tabs{display:flex;flex-direction:column;height:100%}.painlessLabRightPane__tabs [role='tabpanel']{height:100%;overflow-y:auto}.painlessLab__betaLabelContainer{line-height:0}.painlessLabMainContainer{height:calc(100vh - 192px)}.kbnBody--chromeHidden .painlessLabMainContainer{height:calc(100vh - 96px)}.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 224px)}.kbnBody--chromeHidden.kbnBody--hasHeaderBanner .painlessLabMainContainer{height:calc(100vh - 128px)}.painlessLabPanelsContainer{height:100%}\n",""]),e.exports=n},function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return u}));t(11),t(8);var a=t(6),i=t(2),r=t(0),o=t(7),s=t(5);const l=({links:e})=>Object.freeze({painlessExecuteAPI:e.apis.painlessExecute,painlessExecuteAPIContexts:e.apis.painlessExecuteAPIContexts,painlessAPIReference:e.scriptedFields.painlessApi,painlessWalkthrough:e.scriptedFields.painlessWalkthrough,painlessLangSpec:e.scriptedFields.painlessLangSpec,esQueryDSL:e.query.queryDsl,modulesScriptingPreferParams:e.elasticsearch.scriptParameters});var c=t(1);const p=e=>{const{state:n,message:t}=e.check(s.b.id,s.b.minimumLicenseType);return"valid"===n?{valid:!0}:{valid:!1,message:t}};class plugin_PainlessLabUIPlugin{setup({http:e,getStartServices:n,uiSettings:u},{devTools:d,home:h,licensing:b}){h.featureCatalogue.register({id:s.b.id,title:r.i18n.translate("xpack.painlessLab.registryProviderTitle",{defaultMessage:"Painless Lab (beta)"}),description:r.i18n.translate("xpack.painlessLab.registryProviderDescription",{defaultMessage:"Simulate and debug painless code."}),icon:"empty",path:"/app/dev_tools#/painless_lab",showOnHomePage:!1,category:o.FeatureCatalogueCategory.ADMIN});const f=d.register({id:"painless_lab",order:7,title:Object(c.jsx)(i.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},Object(c.jsx)(i.EuiFlexItem,{grow:!1},r.i18n.translate("xpack.painlessLab.displayName",{defaultMessage:"Painless Lab"})),Object(c.jsx)(i.EuiFlexItem,{grow:!1,className:"painlessLab__betaLabelContainer"},Object(c.jsx)(i.EuiBetaBadge,{label:r.i18n.translate("xpack.painlessLab.displayNameBetaLabel",{defaultMessage:"Beta"}),tooltipContent:r.i18n.translate("xpack.painlessLab.displayNameBetaTooltipText",{defaultMessage:"This feature might change drastically in future releases"})}))),enableRouting:!1,disabled:!1,mount:async({element:i})=>{const[r]=await n(),{i18n:{Context:o},notifications:s,docLinks:c,chrome:d}=r,h=await b.license$.pipe(Object(a.first)()).toPromise(),f=p(h);if(!f.valid)return s.toasts.addDanger(f.message),window.location.hash="/dev_tools",()=>{};const{renderApp:g}=await t.e(1).then(t.bind(null,26)),v=g(i,{I18nContext:o,http:e,uiSettings:u,links:l(c),chrome:d});return()=>{v()}}});b.license$.subscribe((e=>{p(e).valid||f.isDisabled()?f.isDisabled()&&f.enable():f.disable()}))}start(){}stop(){}}function u(){return new plugin_PainlessLabUIPlugin}},function(e,n,t){t.r(n);var a=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(a))},function(e,n){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,n){e.exports=__kbnSharedDeps__.ReactDom},function(e,n){e.exports=__kbnSharedDeps__.Lodash},function(e,n){e.exports=__kbnSharedDeps__.KbnMonaco}]);