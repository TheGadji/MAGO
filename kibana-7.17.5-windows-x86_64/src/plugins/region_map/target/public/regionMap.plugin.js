!function(e){function t(t){for(var n,i,a=t[0],o=t[1],s=0,l=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"regionMap.chunk."+e+".js"}(e);var c=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.regionMap_bundle_jsonpfunction=window.regionMap_bundle_jsonpfunction||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=o;i(i.s=13)}([function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"m",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"n",(function(){return _})),n.d(t,"g",(function(){return v})),n.d(t,"o",(function(){return y}));var r=n(2);const[i,a]=Object(r.createGetterSetter)("Core"),[o,s]=Object(r.createGetterSetter)("data.fieldFormats"),[c,l]=Object(r.createGetterSetter)("Notifications"),[u,p]=Object(r.createGetterSetter)("Query"),[d,g]=Object(r.createGetterSetter)("Share"),[f,m]=Object(r.createGetterSetter)("KibanaLegacy"),[b,_]=Object(r.createGetterSetter)("TmsLayers"),[v,y]=Object(r.createGetterSetter)("VectorLayers")},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/mapsEms/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/mapsLegacy/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){e.exports=n(10)(1074)},function(e,t,n){e.exports=n(10)(1075)},function(e,t,n){n(14),__kbnBundles__.define("plugin/regionMap/public",n,15)},function(e,t,n){n.p=window.__kbnPublicPath__.regionMap},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return M}));var r=n(11),i=n.n(r),a=n(1);const o=()=>({name:"regionmap",type:"render",context:{types:["datatable"]},help:a.i18n.translate("regionMap.function.help",{defaultMessage:"Regionmap visualization"}),args:{visConfig:{types:["string","null"],default:'"{}"',help:""}},fn(e,t,n){var r;const i=t.visConfig&&JSON.parse(t.visConfig);return null!=n&&null!==(r=n.inspectorAdapters)&&void 0!==r&&r.tables&&n.inspectorAdapters.tables.logDatatable("default",e),{type:"render",as:"region_map_vis",value:{visData:e,visType:"region_map",visConfig:i}}}});var s=n(6),c=n(5),l=n(0),u=n(9),p=n(3);function d(e,t){if("string"==typeof e)return e;const n=t.split(".");return 2===n.length?n[1]:void 0}function g(e){const t=a.i18n.translate("regionMap.mapVis.regionMapTitle",{defaultMessage:"Region Map"});return Object(p.jsx)(u.LegacyMapDeprecationMessage,{isMapsAvailable:!!Object(l.e)().url.locators.get("MAPS_APP_REGION_MAP_LOCATOR"),onClick:async function(n){var r,i,a,o,s,c;n.preventDefault();const u=Object(l.e)().url.locators.get("MAPS_APP_REGION_MAP_LOCATOR");if(!u)return;const p=Object(l.d)(),g={label:e.title?e.title:t,emsLayerId:e.params.selectedLayer.isEMS?d(e.params.selectedLayer.id,e.params.selectedLayer.layerId):void 0,leftFieldName:e.params.selectedLayer.isEMS?e.params.selectedJoinField.name:void 0,colorSchema:e.params.colorSchema,indexPatternId:null===(r=e.data.indexPattern)||void 0===r?void 0:r.id,indexPatternTitle:null===(i=e.data.indexPattern)||void 0===i?void 0:i.title,metricAgg:"count",filters:p.filterManager.getFilters(),query:p.queryString.getQuery(),timeRange:p.timefilter.timefilter.getTime()},f=null===(a=e.data)||void 0===a||null===(o=a.aggs)||void 0===o?void 0:o.byType("buckets");var m;null!=f&&f.length&&"terms"===f[0].type.dslName&&(g.termsFieldName=null===(m=f[0].getField())||void 0===m?void 0:m.name,g.termsSize=f[0].getParam("size"));const b=null===(s=e.data)||void 0===s||null===(c=s.aggs)||void 0===c?void 0:c.byType("metrics");var _;null!=b&&b.length&&(g.metricAgg=b[0].type.dslName,g.metricFieldName=null===(_=b[0].getField())||void 0===_?void 0:_.name),u.navigate(g)},visualizationLabel:t})}var f=n(12),m=n.n(f);const b=Object(c.lazy)((()=>n.e(3).then(n.bind(null,35)))),_=e=>t=>Object(p.jsx)(b,m()({},t,{getServiceSettings:e}));var v=n(4),y=n(7);const O=(e,t)=>{const n=Object(v.buildExpressionFunction)("esaggs",{index:Object(v.buildExpression)([Object(v.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:!1,partialRows:!1,aggs:e.data.aggs.aggs.map((e=>Object(v.buildExpression)(e.toExpressionAst())))}),r=Object(y.getVisSchemas)(e,t),i={...e.params,metric:r.metric[0]};r.segment&&(i.bucket=r.segment[0]);const a=Object(v.buildExpressionFunction)("regionmap",{visConfig:JSON.stringify(i)});return Object(v.buildExpression)([n,a]).toAst()},h=(e,t)=>({...t,layerId:`${e}.${t.name}`,isEMS:s.ORIGIN.EMS===e});var j=n(8);const S=Object(c.lazy)((()=>n.e(1).then(n.bind(null,37))));class plugin_RegionMapPlugin{constructor(e){i()(this,"_initializerContext",void 0),this._initializerContext=e}setup(e,{expressions:t,visualizations:n,mapsLegacy:r,mapsEms:i}){const c={...this._initializerContext.config.get(),...i.config.regionmap},u={uiSettings:e.uiSettings,regionmapsConfig:c,getServiceSettings:i.getServiceSettings,BaseMapsVisualization:r.getBaseMapsVis()};var d;return t.registerFunction(o),t.registerRenderer((d=u,{name:"region_map_vis",reuseDomNode:!0,render:async(e,{visConfig:t,visData:n},r)=>{r.onDestroy((()=>{Object(j.unmountComponentAtNode)(e)})),Object(j.render)(Object(p.jsx)(y.VisualizationContainer,{handlers:r},Object(p.jsx)(S,{deps:d,handlers:r,visConfig:t,visData:n})),e)}})),n.createBaseVisualization(function({uiSettings:e,regionmapsConfig:t,getServiceSettings:n}){return{name:"region_map",getInfoMessage:g,title:a.i18n.translate("regionMap.mapVis.regionMapTitle",{defaultMessage:"Region Map"}),description:a.i18n.translate("regionMap.mapVis.regionMapDescription",{defaultMessage:"Show metrics on a thematic map. Use one of the provided base maps, or add your own. Darker colors represent higher values."}),icon:"visMapRegion",visConfig:{defaults:{legendPosition:"bottomright",addTooltip:!0,colorSchema:"Yellow to Red",emsHotLink:"",isDisplayWarning:!0,wms:e.get("visualization:tileMap:WMSdefaults"),mapZoom:2,mapCenter:[0,0],outlineWeight:1,showAllShapes:!0}},editorConfig:{optionsTemplate:_(n),schemas:[{group:"metrics",name:"metric",title:a.i18n.translate("regionMap.mapVis.regionMapEditorConfig.schemas.metricTitle",{defaultMessage:"Value"}),min:1,max:1,aggFilter:["count","avg","sum","min","max","cardinality","top_hits","sum_bucket","min_bucket","max_bucket","avg_bucket"],defaults:[{schema:"metric",type:"count"}]},{group:"buckets",name:"segment",title:a.i18n.translate("regionMap.mapVis.regionMapEditorConfig.schemas.segmentTitle",{defaultMessage:"Shape field"}),min:1,max:1,aggFilter:["terms"]}]},toExpressionAst:O,setup:async e=>{const r=await n(),i=await r.getTMSServices();Object(l.n)(i),Object(l.o)([]),!e.params.wms.selectedTmsLayer&&i.length&&(e.params.wms.selectedTmsLayer=i[0]);const a=t.layers.map(h.bind(null,s.ORIGIN.KIBANA_YML));let o=a[0],c=o?o.fields[0]:void 0;if(t.includeElasticMapsService){const t=(await r.getFileLayers()).map(h.bind(null,s.ORIGIN.EMS)).filter((e=>!a.some((t=>t.layerId===e.layerId))));t.forEach((e=>{"geojson"===e.format&&(e.format={type:"geojson"})}));const n=[...a,...t];Object(l.o)(n),[o]=n,c=o?o.fields[0]:void 0,o&&!e.params.selectedLayer&&o.isEMS&&(e.params.emsHotLink=await r.getEMSHotLink(o))}return e.params.selectedLayer||(e.params.selectedLayer=o,e.params.selectedJoinField=c),e},requiresSearch:!0}}(u)),{}}start(e,t){return Object(l.h)(e),Object(l.i)(t.data.fieldFormats),Object(l.l)(t.data.query),Object(l.k)(e.notifications),Object(l.j)(t.kibanaLegacy),Object(l.m)(t.share),{}}}function M(e){return new plugin_RegionMapPlugin(e)}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Jquery}]);