!function(e){function t(t){for(var n,r,a=t[0],o=t[1],s=0,l=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);l.length;)l.shift()()}var n={},i={0:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"tileMap.chunk."+e+".js"}(e);var c=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}i[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var a=window.tileMap_bundle_jsonpfunction=window.tileMap_bundle_jsonpfunction||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=o;r(r.s=13)}([function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"h",(function(){return g})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return m}));var i=n(3);const[r,a]=Object(i.createGetterSetter)("Core"),[o,s]=Object(i.createGetterSetter)("vislib data.fieldFormats"),[c,l]=Object(i.createGetterSetter)("Query"),[u,d]=Object(i.createGetterSetter)("Share"),[p,g]=Object(i.createGetterSetter)("KibanaLegacy"),[f,m]=Object(i.createGetterSetter)("TmsLayers")},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/mapsLegacy/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){e.exports=n(12)(1074)},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(14),__kbnBundles__.define("plugin/tileMap/public",n,15)},function(e,t,n){n.p=window.__kbnPublicPath__.tileMap},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return P}));var i=n(10),r=n.n(i),a=n(0),o=n(1);const s=()=>({name:"tilemap",type:"render",context:{types:["datatable"]},help:o.i18n.translate("tileMap.function.help",{defaultMessage:"Tilemap visualization"}),args:{visConfig:{types:["string","null"],default:'"{}"',help:""}},async fn(e,t,i){var r;const a=t.visConfig&&JSON.parse(t.visConfig),{geohash:o,metric:s,geocentroid:c}=a.dimensions,{convertToGeoJson:l}=await n.e(4).then(n.bind(null,25)),u=l(e,{geohash:o,metric:s,geocentroid:c});return null!=i&&null!==(r=i.inspectorAdapters)&&void 0!==r&&r.tables&&i.inspectorAdapters.tables.logDatatable("default",e),{type:"render",as:"tile_map_vis",value:{visData:u,visType:"tile_map",visConfig:a}}}});var c=n(8),l=n.n(c);const u=function(){const e=document.createElement("img"),t=["webkitFilter","mozFilter","msFilter","filter"],n="grayscale(1)";t.forEach((function(t){e.style[t]=n})),document.body.appendChild(e);const i=window.getComputedStyle(e),r=l()(i).pick(t).includes(n);return document.body.removeChild(e),r}();var d=n(5),p=n(2);const g=Object(d.lazy)((()=>n.e(3).then(n.bind(null,38)))),f=e=>Object(p.jsx)(g,e);var m=n(11),b=n(9);function _(e){const t=o.i18n.translate("tileMap.vis.mapTitle",{defaultMessage:"Coordinate Map"});return Object(p.jsx)(b.LegacyMapDeprecationMessage,{isMapsAvailable:!!Object(a.d)().url.locators.get("MAPS_APP_TILE_MAP_LOCATOR"),onClick:async function(n){var i,r,o,s,c;n.preventDefault();const l=Object(a.d)().url.locators.get("MAPS_APP_TILE_MAP_LOCATOR");if(!l)return;const u=Object(a.c)(),d={label:e.title?e.title:t,mapType:e.params.mapType,colorSchema:e.params.colorSchema,indexPatternId:null===(i=e.data.indexPattern)||void 0===i?void 0:i.id,metricAgg:"count",filters:u.filterManager.getFilters(),query:u.queryString.getQuery(),timeRange:u.timefilter.timefilter.getTime()},p=null===(r=e.data)||void 0===r||null===(o=r.aggs)||void 0===o?void 0:o.byType("buckets");var g;if(null!=p&&p.length&&"geohash_grid"===p[0].type.dslName)d.geoFieldName=null===(g=p[0].getField())||void 0===g?void 0:g.name;else if(e.data.indexPattern){const t=e.data.indexPattern.fields.find((e=>!m.indexPatterns.isNestedField(e)&&e.aggregatable&&"geo_point"===e.type));t&&(d.geoFieldName=t.name)}const f=null===(s=e.data)||void 0===s||null===(c=s.aggs)||void 0===c?void 0:c.byType("metrics");var b;null!=f&&f.length&&(d.metricAgg=f[0].type.dslName,d.metricFieldName=null===(b=f[0].getField())||void 0===b?void 0:b.name),l.navigate(d)},visualizationLabel:t})}var v=n(4),h=n(6);const y=(e,t)=>{const n=Object(v.buildExpressionFunction)("esaggs",{index:Object(v.buildExpression)([Object(v.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:!1,partialRows:!1,aggs:e.data.aggs.aggs.map((e=>Object(v.buildExpression)(e.toExpressionAst())))}),i=Object(h.getVisSchemas)(e,t),r={...e.params,dimensions:{metric:i.metric[0],geohash:i.segment?i.segment[0]:null,geocentroid:i.geo_centroid?i.geo_centroid[0]:null}},a=Object(v.buildExpressionFunction)("tilemap",{visConfig:JSON.stringify(r)});return Object(v.buildExpression)([n,a]).toAst()};var O=n(7);const j=Object(d.lazy)((()=>n.e(1).then(n.bind(null,37))));class plugin_TileMapPlugin{constructor(e){r()(this,"initializerContext",void 0),this.initializerContext=e}setup(e,{expressions:t,visualizations:n,mapsLegacy:i,mapsEms:r}){const{getZoomPrecision:c,getPrecision:l}=i,d={getZoomPrecision:c,getPrecision:l,BaseMapsVisualization:i.getBaseMapsVis(),uiSettings:e.uiSettings,getServiceSettings:r.getServiceSettings};var g;return t.registerFunction(s),t.registerRenderer((g=d,{name:"tile_map_vis",reuseDomNode:!0,render:async(e,{visConfig:t,visData:n},i)=>{i.onDestroy((()=>{Object(O.unmountComponentAtNode)(e)})),Object(O.render)(Object(p.jsx)(h.VisualizationContainer,{handlers:i},Object(p.jsx)(j,{deps:g,handlers:i,visData:n,visConfig:t})),e)}})),n.createBaseVisualization(function(e){const{uiSettings:t,getServiceSettings:n}=e;return{name:"tile_map",getInfoMessage:_,title:o.i18n.translate("tileMap.vis.mapTitle",{defaultMessage:"Coordinate Map"}),icon:"visMapCoordinate",description:o.i18n.translate("tileMap.vis.mapDescription",{defaultMessage:"Plot latitude and longitude coordinates on a map"}),visConfig:{canDesaturate:Boolean(u),defaults:{colorSchema:"Yellow to Red",mapType:"Scaled Circle Markers",isDesaturated:!0,addTooltip:!0,heatClusterSize:1.5,legendPosition:"bottomright",mapZoom:2,mapCenter:[0,0],wms:t.get("visualization:tileMap:WMSdefaults")}},toExpressionAst:y,editorConfig:{optionsTemplate:f,schemas:[{group:"metrics",name:"metric",title:o.i18n.translate("tileMap.vis.map.editorConfig.schemas.metricTitle",{defaultMessage:"Value"}),min:1,max:1,aggFilter:["count","avg","sum","min","max","cardinality","top_hits"],defaults:[{schema:"metric",type:"count"}]},{group:"buckets",name:"segment",title:o.i18n.translate("tileMap.vis.map.editorConfig.schemas.geoCoordinatesTitle",{defaultMessage:"Geo coordinates"}),aggFilter:["geohash_grid"],min:1,max:1}]},setup:async e=>{let t;try{const e=await n();t=await e.getTMSServices()}catch(t){return e}return Object(a.k)(t),!e.params.wms.selectedTmsLayer&&t.length&&(e.params.wms.selectedTmsLayer=t[0]),e},requiresSearch:!0}}(d)),{}}start(e,t){return Object(a.g)(t.data.fieldFormats),Object(a.i)(t.data.query),Object(a.h)(t.kibanaLegacy),Object(a.j)(t.share),Object(a.f)(e),{}}}function P(e){return new plugin_TileMapPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.Jquery}]);