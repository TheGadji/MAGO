/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.apm_bundle_jsonpfunction=window.apm_bundle_jsonpfunction||[]).push([[9],{1038:function(e,t,a){"use strict";a.r(t),a.d(t,"TransactionDurationAnomalyAlertTrigger",(function(){return h}));var n=a(0),r=a(21),l=a(1),i=a.n(l),o=a(10),s=a(5),c=a(4),u=a(60),d=a(94),m=a(93),p=a(80),v=a(27),f=a(7),g=a(113),b=a(2);function E({type:e}){const t=b.b.find((t=>t.type===e));return i.a.createElement(f.EuiHealth,{color:Object(g.c)(t.threshold),style:{lineHeight:"inherit"}},t.label)}function y({onChange:e,value:t}){return i.a.createElement(f.EuiSuperSelect,{hasDividers:!0,style:{width:200},options:b.b.map((e=>({value:e.type,inputDisplay:i.a.createElement(E,{type:e.type}),dropdownDisplay:i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{type:e.type}),i.a.createElement(f.EuiSpacer,{size:"xs"}),i.a.createElement(f.EuiText,{size:"xs",color:"subdued"},i.a.createElement("p",{className:"euiTextColor--subdued","data-test-subj":"SelectAnomalySeverity option text"},i.a.createElement(v.FormattedMessage,{id:"xpack.apm.alerts.anomalySeverity.scoreDetailsDescription",defaultMessage:"score {value} {value, select, critical {} other {and above}}",values:{value:e.type}}))))}))),valueOfSelected:t,onChange:t=>{e(t)}})}function h(e){const{services:t}=Object(o.useKibana)(),{alertParams:a,metadata:v,setAlertParams:f,setAlertProperty:g}=e;Object(l.useEffect)((()=>{Object(u.createCallApmApi)(t)}),[t]);const b=Object(r.defaults)({...Object(r.omit)(v,["start","end"]),...a},{windowSize:15,windowUnit:"m",anomalySeverityType:c.a.CRITICAL,environment:s.a.value}),h=[i.a.createElement(d.c,{currentValue:b.serviceName,onChange:e=>f("serviceName",e)}),i.a.createElement(d.d,{currentValue:b.transactionType,onChange:e=>f("transactionType",e)}),i.a.createElement(d.a,{currentValue:b.environment,onChange:e=>f("environment",e)}),i.a.createElement(p.a,{value:i.a.createElement(E,{type:b.anomalySeverityType}),title:n.i18n.translate("xpack.apm.transactionDurationAnomalyAlertTrigger.anomalySeverity",{defaultMessage:"Has anomaly with severity"})},i.a.createElement(y,{value:b.anomalySeverityType,onChange:e=>{f("anomalySeverityType",e)}}))];return i.a.createElement(m.a,{fields:h,defaults:b,setAlertParams:f,setAlertProperty:g})}t.default=h},113:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(0),r=a(4),l=a(40);function i(e){return void 0===e?r.a.UNKNOWN:Object(l.getSeverityType)(e)}function o(e){return Object(l.getSeverityColor)(e)}const s={INVALID_LICENSE:n.i18n.translate("xpack.apm.anomaly_detection.error.invalid_license",{defaultMessage:"To use anomaly detection, you must be subscribed to an Elastic Platinum license. With it, you'll be able to monitor your services with the aid of machine learning."}),MISSING_READ_PRIVILEGES:n.i18n.translate("xpack.apm.anomaly_detection.error.missing_read_privileges",{defaultMessage:'You must have "read" privileges to Machine Learning and APM in order to view Anomaly Detection jobs'}),MISSING_WRITE_PRIVILEGES:n.i18n.translate("xpack.apm.anomaly_detection.error.missing_write_privileges",{defaultMessage:'You must have "write" privileges to Machine Learning and APM in order to create Anomaly Detection jobs'}),ML_NOT_AVAILABLE:n.i18n.translate("xpack.apm.anomaly_detection.error.not_available",{defaultMessage:"Machine learning is not available"}),ML_NOT_AVAILABLE_IN_SPACE:n.i18n.translate("xpack.apm.anomaly_detection.error.not_available_in_space",{defaultMessage:"Machine learning is not available in the selected space"})}},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a(1),l=a.n(r),i=a(10),o=a(83),s=a(60),c=a(8);let u;!function(e){e.LOADING="loading",e.SUCCESS="success",e.FAILURE="failure",e.NOT_INITIATED="not_initiated"}(u||(u={}));function d(e,t,a={}){const{notifications:d}=Object(i.useKibana)(),{preservePreviousData:m=!0,showToastOnError:p=!0}=a,[v,f]=Object(r.useState)({data:void 0,status:u.NOT_INITIATED}),[g,b]=Object(r.useState)(0),{timeRangeId:E}=Object(o.a)(),{addInspectorRequest:y}=Object(c.useInspectorContext)();return Object(r.useEffect)((()=>{let t=new AbortController;return async function(){t.abort(),t=new AbortController;const a=t.signal,r=e((e=>t=>Object(s.callApmApi)({...t,signal:e}))(a));if(r){f((e=>({data:m?e.data:void 0,status:u.LOADING,error:void 0})));try{const e=await r;a.aborted||f({data:e,status:u.SUCCESS,error:void 0})}catch(e){const t=e;if(!a.aborted){const a="response"in t?function(e){var t,a,r,i,o;const s=null!==(t=null===(a=e.body)||void 0===a?void 0:a.message)&&void 0!==t?t:null===(r=e.response)||void 0===r?void 0:r.statusText;return l.a.createElement(l.a.Fragment,null,s," (",null===(i=e.response)||void 0===i?void 0:i.status,")",l.a.createElement("h5",null,n.i18n.translate("xpack.apm.fetcher.error.url",{defaultMessage:"URL"})),null===(o=e.response)||void 0===o?void 0:o.url)}(t):t.message;p&&d.toasts.danger({title:n.i18n.translate("xpack.apm.fetcher.error.title",{defaultMessage:"Error while fetching resource"}),body:l.a.createElement("div",null,l.a.createElement("h5",null,n.i18n.translate("xpack.apm.fetcher.error.status",{defaultMessage:"Error"})),a)}),f({data:void 0,status:u.FAILURE,error:e})}}}}(),()=>{t.abort()}}),[g,m,E,p,...t]),Object(r.useEffect)((()=>{var e;v.error?y({...v,data:null===(e=v.error.body)||void 0===e?void 0:e.attributes}):y(v)}),[y,v]),Object(r.useMemo)((()=>({...v,refetch:()=>{b((e=>e+1))}})),[v])}},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a.n(n),l=a(7);function i(e){const{title:t,value:a,children:i}=e,[o,s]=Object(n.useState)(!1);return r.a.createElement(l.EuiPopover,{isOpen:o,anchorPosition:"downLeft",closePopover:()=>s(!1),button:r.a.createElement(l.EuiExpression,{description:t,value:a,isActive:o,onClick:()=>s(!0)}),repositionOnScroll:!0},i)}},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(96);function l(){return Object(n.useContext)(r.a)}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(7),r=a(1),l=a.n(r);function i(e){const{fields:t,setAlertParams:a,defaults:i,chartPreview:o}=e,s={...i};return Object(r.useEffect)((()=>{Object.keys(s).forEach((e=>{a(e,s[e])}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(n.EuiSpacer,{size:"l"}),l.a.createElement(n.EuiFlexGrid,{gutterSize:"l",direction:"row",columns:2},t.map(((e,t)=>l.a.createElement(n.EuiFlexItem,{grow:!1,key:t},e)))),o,l.a.createElement(n.EuiSpacer,{size:"m"}))}},94:function(e,t,a){"use strict";a.d(t,"c",(function(){return g})),a.d(t,"a",(function(){return b})),a.d(t,"d",(function(){return E})),a.d(t,"b",(function(){return y}));var n=a(7),r=a(0),l=a(1),i=a.n(l),o=a(9),s=a(5),c=a(21),u=a(48);function d({allOption:e,customOptionText:t,defaultValue:a,field:r,onChange:o,placeholder:s}){var d;let m;!!e&&!a&&(m=e),a&&(m={label:a,value:a});const[p,v]=Object(l.useState)(m?[m]:[]),[f,g]=Object(l.useState)(""),{data:b,status:E}=Object(u.b)((e=>e({endpoint:"GET /internal/apm/suggestions",params:{query:{field:r,string:f}}})),[r,f],{preservePreviousData:!1}),y=Object(l.useCallback)((e=>{v(e),1===e.length&&o(e[0].value?e[0].value.trim():e[0].value)}),[o]),h=Object(l.useCallback)((e=>{y([{label:e,value:e}])}),[y]),O=null!==(d=null==b?void 0:b.terms)&&void 0!==d?d:[],S=[...!e||""!==f&&f.toLowerCase()!==e.label.toLowerCase()?[]:[e],...O.map((e=>({label:e,value:e})))];return i.a.createElement(n.EuiComboBox,{async:!0,compressed:!0,customOptionText:t,isLoading:E===u.a.LOADING,onChange:y,onCreateOption:h,onSearchChange:Object(c.debounce)(g,500),options:S,placeholder:s,selectedOptions:p,singleSelection:{asPlainText:!0},style:{minWidth:"256px"}})}var m=a(80);const p=r.i18n.translate("xpack.apm.alerting.fields.allOption",{defaultMessage:"All"}),v={label:p,value:p},f={label:s.a.text,value:s.a.value};function g({allowAll:e=!0,currentValue:t,onChange:a}){return i.a.createElement(m.a,{value:t||v.value,title:r.i18n.translate("xpack.apm.alerting.fields.service",{defaultMessage:"Service"})},i.a.createElement(d,{allOption:e?v:void 0,customOptionText:r.i18n.translate("xpack.apm.serviceNamesSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new service name"}),defaultValue:t,field:o.w,onChange:a,placeholder:r.i18n.translate("xpack.apm.serviceNamesSelectPlaceholder",{defaultMessage:"Select service name"})}))}function b({currentValue:e,onChange:t}){return i.a.createElement(m.a,{value:Object(s.c)(e),title:r.i18n.translate("xpack.apm.alerting.fields.environment",{defaultMessage:"Environment"})},i.a.createElement(d,{allOption:f,customOptionText:r.i18n.translate("xpack.apm.environmentsSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new environment"}),defaultValue:Object(s.c)(e),field:o.v,onChange:t,placeholder:r.i18n.translate("xpack.apm.environmentsSelectPlaceholder",{defaultMessage:"Select environment"})}))}function E({currentValue:e,onChange:t}){const a=r.i18n.translate("xpack.apm.alerting.fields.type",{defaultMessage:"Type"});return i.a.createElement(m.a,{value:e||v.value,title:a},i.a.createElement(d,{allOption:v,customOptionText:r.i18n.translate("xpack.apm.transactionTypesSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new transaction type"}),defaultValue:e,field:o.K,onChange:t,placeholder:r.i18n.translate("xpack.apm.transactionTypesSelectPlaceholder",{defaultMessage:"Select transaction type"})}))}function y({value:e,unit:t,onChange:a,step:l}){return i.a.createElement(m.a,{value:e?`${e.toString()}${t}`:"",title:r.i18n.translate("xpack.apm.transactionErrorRateAlertTrigger.isAbove",{defaultMessage:"is above"})},i.a.createElement(n.EuiFieldNumber,{value:null!=e?e:"",onChange:e=>a(parseInt(e.target.value,10)),append:t,compressed:!0,step:l}))}},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(1),r=a.n(n);const l=Object(n.createContext)({incrementTimeRangeId:()=>{},timeRangeId:0});function i({children:e}){const[t,a]=Object(n.useState)(0),i=Object(n.useMemo)((()=>({incrementTimeRangeId:()=>a((e=>e+1)),timeRangeId:t})),[t,a]);return r.a.createElement(l.Provider,{value:i},e)}}}]);