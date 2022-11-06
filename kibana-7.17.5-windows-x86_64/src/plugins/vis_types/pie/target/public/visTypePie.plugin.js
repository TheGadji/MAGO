!function(e){function t(t){for(var i,s,a=t[0],l=t[1],o=0,p=[];o<a.length;o++)s=a[o],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(r&&r(t);p.length;)p.shift()()}var i={},n={0:0};function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],i=n[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,s){i=n[e]=[t,s]}));t.push(i[2]=a);var l,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=function(e){return s.p+"visTypePie.chunk."+e+".js"}(e);var r=new Error;l=function(t){o.onerror=o.onload=null,clearTimeout(p);var i=n[e];if(0!==i){if(i){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",r.name="ChunkLoadError",r.type=s,r.request=a,i[1](r)}n[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:o})}),12e4);o.onerror=o.onload=l,document.head.appendChild(o)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var a=window.visTypePie_bundle_jsonpfunction=window.visTypePie_bundle_jsonpfunction||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var r=l;s(s.s=12)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,i){"use strict";i.r(t),i.d(t,"DEFAULT_PERCENT_DECIMALS",(function(){return n})),i.d(t,"LEGACY_PIE_CHARTS_LIBRARY",(function(){return s}));const n=2,s="visualization:visualize:legacyPieChartsLibrary"},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){"use strict";let n,s;i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),function(e){e.INSIDE="inside",e.DEFAULT="default"}(n||(n={})),function(e){e.PERCENT="percent",e.VALUE="value"}(s||(s={}))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,i){e.exports=i(14)(1075)},function(e,t,i){i(13),__kbnBundles__.define("plugin/visTypePie/public",i,15),__kbnBundles__.define("plugin/visTypePie/common/index",i,4)},function(e,t,i){i.p=window.__kbnPublicPath__.visTypePie},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,i){"use strict";i.r(t),i.d(t,"pieVisType",(function(){return O})),i.d(t,"plugin",(function(){return E}));var n=i(4),s=i(0);const a=()=>({name:"pielabels",help:s.i18n.translate("visTypePie.function.pieLabels.help",{defaultMessage:"Generates the pie labels object"}),type:"pie_labels",args:{show:{types:["boolean"],help:s.i18n.translate("visTypePie.function.pieLabels.show.help",{defaultMessage:"Displays the pie labels"}),required:!0},position:{types:["string"],default:"default",help:s.i18n.translate("visTypePie.function.pieLabels.position.help",{defaultMessage:"Defines the label position"})},values:{types:["boolean"],help:s.i18n.translate("visTypePie.function.pieLabels.values.help",{defaultMessage:"Displays the values inside the slices"}),default:!0},percentDecimals:{types:["number"],help:s.i18n.translate("visTypePie.function.pieLabels.percentDecimals.help",{defaultMessage:"Defines the number of decimals that will appear on the values as percent"}),default:2},lastLevel:{types:["boolean"],help:s.i18n.translate("visTypePie.function.pieLabels.lastLevel.help",{defaultMessage:"Show top level labels only"}),default:!0},truncate:{types:["number","null"],help:s.i18n.translate("visTypePie.function.pieLabels.truncate.help",{defaultMessage:"Defines the number of characters that the slice value will display"}),default:null},valuesFormat:{types:["string"],default:"percent",help:s.i18n.translate("visTypePie.function.pieLabels.valuesFormat.help",{defaultMessage:"Defines the format of the values"})}},fn:(e,t)=>({type:"pie_labels",show:t.show,position:t.position,percentDecimals:t.percentDecimals,values:t.values,truncate:t.truncate,valuesFormat:t.valuesFormat,last_level:t.lastLevel})});var l=i(2);const o="pie_vis",r=()=>({name:o,type:"render",inputTypes:["datatable"],help:s.i18n.translate("visTypePie.functions.help",{defaultMessage:"Pie visualization"}),args:{metric:{types:["vis_dimension"],help:s.i18n.translate("visTypePie.function.args.metricHelpText",{defaultMessage:"Metric dimensions config"}),required:!0},buckets:{types:["vis_dimension"],help:s.i18n.translate("visTypePie.function.args.bucketsHelpText",{defaultMessage:"Buckets dimensions config"}),multi:!0},splitColumn:{types:["vis_dimension"],help:s.i18n.translate("visTypePie.function.args.splitColumnHelpText",{defaultMessage:"Split by column dimension config"}),multi:!0},splitRow:{types:["vis_dimension"],help:s.i18n.translate("visTypePie.function.args.splitRowHelpText",{defaultMessage:"Split by row dimension config"}),multi:!0},addTooltip:{types:["boolean"],help:s.i18n.translate("visTypePie.function.args.addTooltipHelpText",{defaultMessage:"Show tooltip on slice hover"}),default:!0},addLegend:{types:["boolean"],help:s.i18n.translate("visTypePie.function.args.addLegendHelpText",{defaultMessage:"Show legend chart legend"})},legendPosition:{types:["string"],help:s.i18n.translate("visTypePie.function.args.legendPositionHelpText",{defaultMessage:"Position the legend on top, bottom, left, right of the chart"})},nestedLegend:{types:["boolean"],help:s.i18n.translate("visTypePie.function.args.nestedLegendHelpText",{defaultMessage:"Show a more detailed legend"}),default:!1},truncateLegend:{types:["boolean"],help:s.i18n.translate("visTypePie.function.args.truncateLegendHelpText",{defaultMessage:"Defines if the legend items will be truncated or not"}),default:!0},maxLegendLines:{types:["number"],help:s.i18n.translate("visTypePie.function.args.maxLegendLinesHelpText",{defaultMessage:"Defines the number of lines per legend item"})},distinctColors:{types:["boolean"],help:s.i18n.translate("visTypePie.function.args.distinctColorsHelpText",{defaultMessage:"Maps different color per slice. Slices with the same value have the same color"}),default:!1},isDonut:{types:["boolean"],help:s.i18n.translate("visTypePie.function.args.isDonutHelpText",{defaultMessage:"Displays the pie chart as donut"}),default:!1},palette:{types:["string"],help:s.i18n.translate("visTypePie.function.args.paletteHelpText",{defaultMessage:"Defines the chart palette name"}),default:"default"},labels:{types:["pie_labels"],help:s.i18n.translate("visTypePie.function.args.labelsHelpText",{defaultMessage:"Pie labels config"})}},fn(e,t,i){var n,a,r;const p={...t,palette:{type:"palette",name:t.palette},dimensions:{metric:t.metric,buckets:t.buckets,splitColumn:t.splitColumn,splitRow:t.splitRow}};if(null!=i&&null!==(n=i.inspectorAdapters)&&void 0!==n&&n.tables){const n=Object(l.prepareLogTable)(e,[[[t.metric],s.i18n.translate("visTypePie.function.dimension.metric",{defaultMessage:"Slice size"})],[t.buckets,s.i18n.translate("visTypePie.function.adimension.buckets",{defaultMessage:"Slice"})],[t.splitColumn,s.i18n.translate("visTypePie.function.dimension.splitcolumn",{defaultMessage:"Column split"})],[t.splitRow,s.i18n.translate("visTypePie.function.dimension.splitrow",{defaultMessage:"Row split"})]]);i.inspectorAdapters.tables.logDatatable("default",n)}return{type:"render",as:o,value:{visData:e,visConfig:p,syncColors:null!==(a=null==i||null===(r=i.isSyncColorsEnabled)||void 0===r?void 0:r.call(i))&&void 0!==a&&a,visType:"pie",params:{listenOnChange:!0}}}}});var p=i(5),u=i(8),c=i(10),d=i(3);const f=Object(p.lazy)((()=>i.e(1).then(i.bind(null,41))));const g=({theme:e,palettes:t,getStartDeps:i})=>({name:o,displayName:"Pie visualization",reuseDomNode:!0,render:async(n,{visConfig:s,visData:a,syncColors:o},r)=>{const p=function(e){const t=null==e?void 0:e.rows,i=0===(null==e?void 0:e.hits)||t&&!t.length;return Boolean(i)}(a);r.onDestroy((()=>{Object(u.unmountComponentAtNode)(n)}));const g=await i(),m=await t.getPalettes();Object(u.render)(Object(d.jsx)(c.I18nProvider,null,Object(d.jsx)(l.VisualizationContainer,{handlers:r,showNoResult:p},Object(d.jsx)(f,{chartsThemeService:e,palettesRegistry:m,visParams:s,visData:a,renderComplete:r.done,fireEvent:r.event,uiState:r.uiState,services:g.data,syncColors:o}))),n)}});var m=i(9),v=i(6),b=i(7),h=i(1);function y(e){return Object(h.buildExpressionFunction)("esaggs",{index:Object(h.buildExpression)([Object(h.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:e.isHierarchical(),partialRows:!1,aggs:e.data.aggs.aggs.map((e=>Object(h.buildExpression)(e.toExpressionAst())))})}const _=e=>{const t=Object(h.buildExpressionFunction)("visdimension",{accessor:e.accessor});return e.format&&(t.addArgument("format",e.format.id),t.addArgument("formatParams",JSON.stringify(e.format.params))),Object(h.buildExpression)([t])},P=e=>{const t=Object(h.buildExpressionFunction)("pielabels",{show:e.show,lastLevel:e.last_level,values:e.values,truncate:e.truncate});return e.position&&t.addArgument("position",e.position),e.valuesFormat&&t.addArgument("valuesFormat",e.valuesFormat),null!=e.percentDecimals&&t.addArgument("percentDecimals",e.percentDecimals),Object(h.buildExpression)([t])},T=async(e,t)=>{var i,n,s,a,r,p,u;const c=Object(l.getVisSchemas)(e,t),d={addTooltip:e.params.addTooltip,addLegend:e.params.addLegend,legendPosition:e.params.legendPosition,nestedLegend:null===(i=e.params)||void 0===i?void 0:i.nestedLegend,truncateLegend:e.params.truncateLegend,maxLegendLines:e.params.maxLegendLines,distinctColors:null===(n=e.params)||void 0===n?void 0:n.distinctColors,isDonut:e.params.isDonut,palette:null===(s=e.params)||void 0===s||null===(a=s.palette)||void 0===a?void 0:a.name,labels:P(e.params.labels),metric:c.metric.map(_),buckets:null===(r=c.segment)||void 0===r?void 0:r.map(_),splitColumn:null===(p=c.split_column)||void 0===p?void 0:p.map(_),splitRow:null===(u=c.split_row)||void 0===u?void 0:u.map(_)},f=Object(h.buildExpressionFunction)(o,d);return Object(h.buildExpression)([y(e),f]).toAst()};var x=i(11),D=i.n(x);const L=Object(p.lazy)((()=>i.e(2).then(i.bind(null,42)))),w=({showElasticChartsOptions:e,palettes:t,trackUiMetric:i})=>n=>Object(d.jsx)(L,D()({},n,{palettes:t,showElasticChartsOptions:e,trackUiMetric:i})),O=e=>(({showElasticChartsOptions:e=!1,palettes:t,trackUiMetric:i})=>({name:"pie",title:s.i18n.translate("visTypePie.pie.pieTitle",{defaultMessage:"Pie"}),icon:"visPie",description:s.i18n.translate("visTypePie.pie.pieDescription",{defaultMessage:"Compare data in proportion to a whole."}),toExpressionAst:T,getSupportedTriggers:()=>[l.VIS_EVENT_TO_TRIGGER.filter],visConfig:{defaults:{type:"pie",addTooltip:!0,addLegend:!e,legendPosition:m.Position.Right,nestedLegend:!1,truncateLegend:!0,maxLegendLines:1,distinctColors:!1,isDonut:!0,palette:{type:"palette",name:"default"},labels:{show:!0,last_level:!e,values:!0,valuesFormat:b.b.PERCENT,percentDecimals:n.DEFAULT_PERCENT_DECIMALS,truncate:100,position:b.a.DEFAULT}}},editorConfig:{optionsTemplate:w({showElasticChartsOptions:e,palettes:t,trackUiMetric:i}),schemas:[{group:v.AggGroupNames.Metrics,name:"metric",title:s.i18n.translate("visTypePie.pie.metricTitle",{defaultMessage:"Slice size"}),min:1,max:1,aggFilter:["sum","count","cardinality","top_hits"],defaults:[{schema:"metric",type:"count"}]},{group:v.AggGroupNames.Buckets,name:"segment",title:s.i18n.translate("visTypePie.pie.segmentTitle",{defaultMessage:"Split slices"}),min:0,max:1/0,aggFilter:["!geohash_grid","!geotile_grid","!filter"]},{group:v.AggGroupNames.Buckets,name:"split",title:s.i18n.translate("visTypePie.pie.splitTitle",{defaultMessage:"Split chart"}),mustBeFirst:!0,min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]}]},hierarchicalData:!0,requiresSearch:!0}))(e);class plugin_VisTypePiePlugin{setup(e,{expressions:t,visualizations:i,charts:s,usageCollection:l}){if(!e.uiSettings.get(n.LEGACY_PIE_CHARTS_LIBRARY,!1)){const n=async()=>{const[t,i]=await e.getStartServices();return{data:i.data,docLinks:t.docLinks}},o=null==l?void 0:l.reportUiCounter.bind(l,"vis_type_pie");t.registerFunction(r),t.registerRenderer(g({theme:s.theme,palettes:s.palettes,getStartDeps:n})),t.registerFunction(a),i.createBaseVisualization(O({showElasticChartsOptions:!0,palettes:s.palettes,trackUiMetric:o}))}return{}}start(){}}const E=()=>new plugin_VisTypePiePlugin},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))}]);