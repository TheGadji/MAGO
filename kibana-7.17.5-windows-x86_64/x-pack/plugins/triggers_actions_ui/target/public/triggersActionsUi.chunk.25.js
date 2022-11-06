/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[25,14],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(1),i=n.n(a),s=n(0),r=n(13),o=n(74),l=n(77),c=n(7),u=n(84);var d=n(81);const b=({http:e,actionConnector:t,toastNotifications:n})=>{const[i,s]=Object(a.useState)(!0),[r,o]=Object(a.useState)([]),l=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>{let a=!1;return l.current.abort(),(async()=>{if(t){l.current=new AbortController,s(!0);try{const b=await async function({http:e,signal:t,connectorId:n}){const a=await e.post(`${c.a}/connector/${encodeURIComponent(n)}/_execute`,{body:JSON.stringify({params:{subAction:"issueTypes",subActionParams:{}}}),signal:t});return Object(u.a)(a)}({http:e,signal:l.current.signal,connectorId:t.id});var i,r;if(!a)if(s(!1),o(null!==(i=b.data)&&void 0!==i?i:[]),b.status&&"error"===b.status)n.addDanger({title:d.ISSUE_TYPES_API_ERROR,text:`${null!==(r=b.serviceMessage)&&void 0!==r?r:b.message}`})}catch(e){a||(s(!1),n.addDanger({title:d.ISSUE_TYPES_API_ERROR,text:e.message}))}}else s(!1)})(),()=>{a=!0,s(!1),l.current.abort()}}),[e,t,n]),{issueTypes:r,isLoading:i}},p=({http:e,toastNotifications:t,actionConnector:n,issueType:i})=>{const[s,r]=Object(a.useState)(!0),[o,l]=Object(a.useState)({}),b=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>{let a=!1;return b.current.abort(),(async()=>{if(n&&i){b.current=new AbortController,r(!0);try{const p=await async function({http:e,signal:t,connectorId:n,id:a}){const i=await e.post(`${c.a}/connector/${encodeURIComponent(n)}/_execute`,{body:JSON.stringify({params:{subAction:"fieldsByIssueType",subActionParams:{id:a}}}),signal:t});return Object(u.a)(i)}({http:e,signal:b.current.signal,connectorId:n.id,id:i});var s,o;if(!a)if(l(null!==(s=p.data)&&void 0!==s?s:{}),r(!1),p.status&&"error"===p.status)t.addDanger({title:d.FIELDS_API_ERROR,text:`${null!==(o=p.serviceMessage)&&void 0!==o?o:p.message}`})}catch(e){a||(r(!1),t.addDanger({title:d.FIELDS_API_ERROR,text:e.message}))}}else r(!1)})(),()=>{a=!0,r(!1),b.current.abort()}}),[e,n,i,t]),{isLoading:s,fields:o}};var g=n(48);const m=({http:e,actionConnector:t,toastNotifications:n,query:i})=>{const[s,r]=Object(a.useState)(!1),[o,l]=Object(a.useState)([]),b=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>{let a=!1;const s=Object(g.debounce)(500,(async()=>{if(t&&!Object(g.isEmpty)(i)){b.current=new AbortController,r(!0);try{const p=await async function({http:e,signal:t,connectorId:n,title:a}){const i=await e.post(`${c.a}/connector/${encodeURIComponent(n)}/_execute`,{body:JSON.stringify({params:{subAction:"issues",subActionParams:{title:a}}}),signal:t});return Object(u.a)(i)}({http:e,signal:b.current.signal,connectorId:t.id,title:null!=i?i:""});var s,o;if(!a)if(r(!1),l(null!==(s=p.data)&&void 0!==s?s:[]),p.status&&"error"===p.status)n.addDanger({title:d.ISSUES_API_ERROR,text:`${null!==(o=p.serviceMessage)&&void 0!==o?o:p.message}`})}catch(e){a||(r(!1),n.addDanger({title:d.ISSUES_API_ERROR,text:e.message}))}}else r(!1)}));return b.current.abort(),s(),()=>{a=!0,r(!1),b.current.abort()}}),[e,t,n,i]),{issues:o,isLoading:s}},f=({http:e,toastNotifications:t,actionConnector:n,id:i})=>{const[s,r]=Object(a.useState)(!1),[o,l]=Object(a.useState)(null),b=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>{let a=!1;return b.current.abort(),(async()=>{if(n&&i){b.current=new AbortController,r(!0);try{const p=await async function({http:e,signal:t,connectorId:n,id:a}){const i=await e.post(`${c.a}/connector/${encodeURIComponent(n)}/_execute`,{body:JSON.stringify({params:{subAction:"issue",subActionParams:{id:a}}}),signal:t});return Object(u.a)(i)}({http:e,signal:b.current.signal,connectorId:n.id,id:i});var s,o;if(!a)if(r(!1),l(null!==(s=p.data)&&void 0!==s?s:null),p.status&&"error"===p.status)t.addDanger({title:d.GET_ISSUE_API_ERROR(i),text:`${null!==(o=p.serviceMessage)&&void 0!==o?o:p.message}`})}catch(e){a||(r(!1),t.addDanger({title:d.GET_ISSUE_API_ERROR(i),text:e.message}))}}else r(!1)})(),()=>{a=!0,r(!1),b.current.abort()}}),[e,n,i,t]),{isLoading:s,issue:o}};var x=n(5);const j=({selectedValue:e,http:t,toastNotifications:n,actionConnector:i,onChange:s})=>{const[o,l]=Object(a.useState)(null),[c,u]=Object(a.useState)([]),[b,p]=Object(a.useState)([]),{isLoading:g,issues:j}=m({http:t,toastNotifications:n,actionConnector:i,query:o}),{isLoading:h,issue:A}=f({http:t,toastNotifications:n,actionConnector:i,id:e});Object(a.useEffect)((()=>p(j.map((e=>({label:e.title,value:e.key}))))),[j]),Object(a.useEffect)((()=>{if(h||null==A)return;const e=[{label:A.title,value:A.key}];p(e),u(e)}),[A,h]);const v=Object(a.useCallback)((e=>{l(e)}),[]),y=Object(a.useCallback)((e=>{u(e),s(e[0].value)}),[s]),I=Object(a.useMemo)((()=>g||h?d.SEARCH_ISSUES_LOADING:d.SEARCH_ISSUES_PLACEHOLDER),[g,h]);return Object(x.jsx)(r.EuiComboBox,{singleSelection:!0,fullWidth:!0,placeholder:I,"data-test-sub":"search-parent-issues","aria-label":d.SEARCH_ISSUES_COMBO_BOX_ARIA_LABEL,options:b,isLoading:g||h,onSearchChange:v,selectedOptions:c,onChange:y})},h=Object(a.memo)(j);var A=n(59);const v=({actionConnector:e,actionParams:t,editAction:n,errors:c,index:u,messageVariables:d})=>{var g,m,f,j,v,y;const{http:I,notifications:{toasts:O}}=Object(A.b)().services,{incident:E,comments:P}=Object(a.useMemo)((()=>{var e;return null!==(e=t.subActionParams)&&void 0!==e?e:{incident:{},comments:[]}}),[t.subActionParams]),S=Object(a.useRef)(null!==(g=null==e?void 0:e.id)&&void 0!==g?g:""),{isLoading:T,issueTypes:_}=b({http:I,toastNotifications:O,actionConnector:e}),{isLoading:R,fields:k}=p({http:I,toastNotifications:O,actionConnector:e,issueType:null!==(m=E.issueType)&&void 0!==m?m:""}),w=Object(a.useCallback)(((e,t)=>n("subActionParams","issueType"===e?{incident:{issueType:t},comments:P}:"comments"===e?{incident:E,comments:t}:{incident:{...E,[e]:t},comments:P},u)),[P,n,E,u]),U=Object(a.useCallback)(((e,t)=>{t.length>0&&w(e,[{commentId:"1",comment:t}])}),[w]),{hasLabels:M,hasDescription:C,hasPriority:L,hasParent:V}=Object(a.useMemo)((()=>null!=k?{hasLabels:Object.prototype.hasOwnProperty.call(k,"labels"),hasDescription:Object.prototype.hasOwnProperty.call(k,"description"),hasPriority:Object.prototype.hasOwnProperty.call(k,"priority"),hasParent:Object.prototype.hasOwnProperty.call(k,"parent")}:{hasLabels:!1,hasDescription:!1,hasPriority:!1,hasParent:!1}),[k]),F=Object(a.useMemo)((()=>{const e=null==E.issueType||!_.length||_.some((e=>e.id===E.issueType));var t;E.issueType&&e||!(_.length>0)||w("issueType",null!==(t=_[0].id)&&void 0!==t?t:"");return _.map((e=>{var t,n;return{value:null!==(t=e.id)&&void 0!==t?t:"",text:null!==(n=e.name)&&void 0!==n?n:""}}))}),[w,E,_]),D=Object(a.useMemo)((()=>{if(null!=E.issueType&&null!=k){const t=null!=k.priority?k.priority.allowedValues:[],n=t.some((e=>e.name===E.priority));var e;if((!E.priority||!n)&&t.length>0)w("priority",null!==(e=t[0].name)&&void 0!==e?e:"");return t.map((e=>({value:e.name,text:e.name})))}return[]}),[w,k,E.issueType,E.priority]);Object(a.useEffect)((()=>{R||L||null==E.priority||w("priority",null)}),[L,R]);const N=Object(a.useMemo)((()=>E.labels?E.labels.map((e=>({label:e}))):[]),[E.labels]);Object(a.useEffect)((()=>{null!=e&&S.current!==e.id&&(S.current=e.id,n("subActionParams",{incident:{},comments:[]},u))}),[e]),Object(a.useEffect)((()=>{t.subAction||n("subAction","pushToService",u),t.subActionParams||n("subActionParams",{incident:{},comments:[]},u)}),[t]);const B=null!=c["subActionParams.incident.labels"]&&void 0!==c["subActionParams.incident.labels"]&&c["subActionParams.incident.labels"].length>0&&void 0!==E.labels;return Object(x.jsx)(i.a.Fragment,null,Object(x.jsx)(i.a.Fragment,null,Object(x.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.urgencySelectFieldLabel",{defaultMessage:"Issue type"})},Object(x.jsx)(r.EuiSelect,{fullWidth:!0,isLoading:T,disabled:T||R,"data-test-subj":"issueTypeSelect",options:F,value:null!==(f=E.issueType)&&void 0!==f?f:void 0,onChange:e=>w("issueType",e.target.value)})),Object(x.jsx)(r.EuiHorizontalRule,null),V&&Object(x.jsx)(i.a.Fragment,null,Object(x.jsx)(r.EuiFlexGroup,null,Object(x.jsx)(r.EuiFlexItem,null,Object(x.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.parentIssueSearchLabel",{defaultMessage:"Parent issue"})},Object(x.jsx)(h,{"data-test-subj":"parent-search",selectedValue:E.parent,http:I,toastNotifications:O,actionConnector:e,onChange:e=>{w("parent",e)}})))),Object(x.jsx)(r.EuiSpacer,{size:"m"})),Object(x.jsx)(i.a.Fragment,null,L&&Object(x.jsx)(i.a.Fragment,null,Object(x.jsx)(r.EuiFlexGroup,null,Object(x.jsx)(r.EuiFlexItem,null,Object(x.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.severitySelectFieldLabel",{defaultMessage:"Priority"})},Object(x.jsx)(r.EuiSelect,{fullWidth:!0,isLoading:R,disabled:T||R,"data-test-subj":"prioritySelect",options:D,value:null!==(j=E.priority)&&void 0!==j?j:void 0,onChange:e=>{w("priority",e.target.value)}})))),Object(x.jsx)(r.EuiSpacer,{size:"m"})),Object(x.jsx)(r.EuiFormRow,{"data-test-subj":"summary-row",fullWidth:!0,error:c["subActionParams.incident.summary"],isInvalid:void 0!==c["subActionParams.incident.summary"]&&c["subActionParams.incident.summary"].length>0&&void 0!==E.summary,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.summaryFieldLabel",{defaultMessage:"Summary (required)"})},Object(x.jsx)(l.a,{index:u,editAction:w,messageVariables:d,paramsProperty:"summary",inputTargetValue:null!==(v=E.summary)&&void 0!==v?v:void 0,errors:c["subActionParams.incident.summary"]})),Object(x.jsx)(r.EuiSpacer,{size:"m"}),M&&Object(x.jsx)(i.a.Fragment,null,Object(x.jsx)(r.EuiFlexGroup,null,Object(x.jsx)(r.EuiFlexItem,null,Object(x.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.impactSelectFieldLabel",{defaultMessage:"Labels"}),error:c["subActionParams.incident.labels"],isInvalid:B},Object(x.jsx)(r.EuiComboBox,{noSuggestions:!0,fullWidth:!0,isLoading:R,isDisabled:T||R,selectedOptions:N,onCreateOption:e=>{const t=[...N,{label:e}];w("labels",t.map((e=>e.label)))},onChange:e=>{w("labels",e.map((e=>e.label)))},onBlur:()=>{E.labels||w("labels",[])},isClearable:!0,"data-test-subj":"labelsComboBox",isInvalid:B})))),Object(x.jsx)(r.EuiSpacer,{size:"m"})),C&&Object(x.jsx)(o.a,{index:u,editAction:w,messageVariables:d,paramsProperty:"description",inputTargetValue:null!==(y=E.description)&&void 0!==y?y:void 0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.descriptionTextAreaFieldLabel",{defaultMessage:"Description"})}),Object(x.jsx)(o.a,{index:u,editAction:U,messageVariables:d,paramsProperty:"comments",inputTargetValue:P&&P.length>0?P[0].comment:void 0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.commentsTextAreaFieldLabel",{defaultMessage:"Additional comments"})}))))}},57:function(e,t,n){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function o(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},a=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=o(u),b={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(b)):r.push({identifier:u,updater:f(b,t),references:1}),a.push(u)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function b(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function p(e,t,n){var a=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var g=null,m=0;function f(e,t){var n,a,i;if(t.singleton){var s=m++;n=g||(g=c(t)),a=b.bind(null,n,s,!1),i=b.bind(null,n,s,!0)}else n=c(t),a=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=o(n[a]);r[i].references--}for(var s=l(e,t),c=0;c<n.length;c++){var u=o(n[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}n=s}}}},58:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(r=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}var r,o,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);a&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.KibanaContextProvider})),n.d(t,"b",(function(){return i}));var a=n(35);const i=()=>Object(a.useKibana)()},60:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(64);case"v7light":return n(66);case"v8dark":return n(68);case"v8light":return n(70)}},61:function(e,t,n){"use strict";function a(e){return e.useWithTripleBracesInTemplates?`{{{${e.name}}}}`:`{{${e.name}}}`}n.d(t,"a",(function(){return a}))},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),i=n.n(a),s=n(0),r=n(13),o=(n(60),n(61)),l=n(5);const c=({messageVariables:e,paramsProperty:t,onSelectEventHandler:n})=>{var c;const[u,d]=Object(a.useState)(!1),b=s.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)?Object(l.jsx)(i.a.Fragment,null):Object(l.jsx)(r.EuiPopover,{button:Object(l.jsx)(r.EuiButtonIcon,{id:`${t}AddVariableButton`,"data-test-subj":`${t}AddVariableButton`,title:b,onClick:()=>d(!0),iconType:"indexOpen","aria-label":s.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:u,closePopover:()=>d(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},Object(l.jsx)(r.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==e?void 0:e.map(((e,t)=>Object(l.jsx)(r.EuiContextMenuItem,{key:e.name,"data-test-subj":`variableMenuButton-${e.name}`,icon:"empty",disabled:e.deprecated,onClick:()=>{n(e),d(!1)}},Object(l.jsx)(i.a.Fragment,null,Object(l.jsx)(r.EuiText,{size:"m","data-test-subj":`variableMenuButton-${t}-templated-name`},Object(o.a)(e)),Object(l.jsx)(r.EuiText,{size:"m",color:"subdued"},Object(l.jsx)("div",{className:"euiTextColor--subdued"},e.description))))))}))}},64:function(e,t,n){var a=n(57),i=n(65);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};a(i,s);e.exports=i.locals||{}},65:function(e,t,n){(t=n(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},66:function(e,t,n){var a=n(57),i=n(67);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};a(i,s);e.exports=i.locals||{}},67:function(e,t,n){(t=n(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},68:function(e,t,n){var a=n(57),i=n(69);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};a(i,s);e.exports=i.locals||{}},69:function(e,t,n){(t=n(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},70:function(e,t,n){var a=n(57),i=n(71);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};a(i,s);e.exports=i.locals||{}},71:function(e,t,n){(t=n(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1),i=n(13),s=(n(60),n(62)),r=n(61),o=n(5);const l=({messageVariables:e,paramsProperty:t,index:n,inputTargetValue:l,editAction:c,label:u,errors:d})=>{const[b,p]=Object(a.useState)(null);return Object(o.jsx)(i.EuiFormRow,{fullWidth:!0,error:d,isInvalid:d&&d.length>0&&void 0!==l,label:u,labelAppend:Object(o.jsx)(s.a,{messageVariables:e,onSelectEventHandler:e=>{var a,i;const s=Object(r.a)(e),o=null!==(a=null==b?void 0:b.selectionStart)&&void 0!==a?a:0,u=null!==(i=null==b?void 0:b.selectionEnd)&&void 0!==i?i:0,d=(null!=l?l:"").substring(0,o)+s+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(t,d,n)},paramsProperty:t})},Object(o.jsx)(i.EuiTextArea,{fullWidth:!0,isInvalid:d&&d.length>0&&void 0!==l,name:t,value:l||"","data-test-subj":`${t}TextArea`,onChange:e=>(e=>{c(t,e.target.value,n)})(e),onFocus:e=>{p(e.target)},onBlur:()=>{l||c(t,"",n)}}))}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1),i=n(13),s=(n(60),n(62)),r=n(61),o=n(5);const l=({messageVariables:e,paramsProperty:t,index:n,inputTargetValue:l,editAction:c,errors:u,defaultValue:d})=>{const[b,p]=Object(a.useState)(null);return Object(o.jsx)(i.EuiFieldText,{fullWidth:!0,name:t,id:`${t}Id`,isInvalid:u&&u.length>0&&void 0!==l,"data-test-subj":`${t}Input`,value:l||"",defaultValue:d,onChange:e=>(e=>{c(t,e.target.value,n)})(e),onFocus:e=>{p(e.target)},onBlur:e=>{l||c(t,"",n)},append:Object(o.jsx)(s.a,{messageVariables:e,onSelectEventHandler:e=>{var a,i;const s=Object(r.a)(e),o=null!==(a=null==b?void 0:b.selectionStart)&&void 0!==a?a:0,u=null!==(i=null==b?void 0:b.selectionEnd)&&void 0!==i?i:0,d=(null!=l?l:"").substring(0,o)+s+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(t,d,n)},paramsProperty:t})})}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"API_URL_LABEL",(function(){return i})),n.d(t,"API_URL_REQUIRED",(function(){return s})),n.d(t,"API_URL_INVALID",(function(){return r})),n.d(t,"API_URL_REQUIRE_HTTPS",(function(){return o})),n.d(t,"JIRA_PROJECT_KEY_LABEL",(function(){return l})),n.d(t,"JIRA_PROJECT_KEY_REQUIRED",(function(){return c})),n.d(t,"JIRA_AUTHENTICATION_LABEL",(function(){return u})),n.d(t,"JIRA_REENTER_VALUES_LABEL",(function(){return d})),n.d(t,"JIRA_EMAIL_LABEL",(function(){return b})),n.d(t,"JIRA_EMAIL_REQUIRED",(function(){return p})),n.d(t,"JIRA_API_TOKEN_LABEL",(function(){return g})),n.d(t,"JIRA_API_TOKEN_REQUIRED",(function(){return m})),n.d(t,"MAPPING_FIELD_SUMMARY",(function(){return f})),n.d(t,"DESCRIPTION_REQUIRED",(function(){return x})),n.d(t,"SUMMARY_REQUIRED",(function(){return j})),n.d(t,"MAPPING_FIELD_DESC",(function(){return h})),n.d(t,"MAPPING_FIELD_COMMENTS",(function(){return A})),n.d(t,"ISSUE_TYPES_API_ERROR",(function(){return v})),n.d(t,"FIELDS_API_ERROR",(function(){return y})),n.d(t,"ISSUES_API_ERROR",(function(){return I})),n.d(t,"GET_ISSUE_API_ERROR",(function(){return O})),n.d(t,"SEARCH_ISSUES_COMBO_BOX_ARIA_LABEL",(function(){return E})),n.d(t,"SEARCH_ISSUES_PLACEHOLDER",(function(){return P})),n.d(t,"SEARCH_ISSUES_LOADING",(function(){return S})),n.d(t,"LABELS_WHITE_SPACES",(function(){return T}));var a=n(0);const i=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.apiUrlTextFieldLabel",{defaultMessage:"URL"}),s=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requiredApiUrlTextField",{defaultMessage:"URL is required."}),r=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.invalidApiUrlTextField",{defaultMessage:"URL is invalid."}),o=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requireHttpsApiUrlTextField",{defaultMessage:"URL must start with https://."}),l=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.projectKey",{defaultMessage:"Project key"}),c=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requiredProjectKeyTextField",{defaultMessage:"Project key is required"}),u=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.authenticationLabel",{defaultMessage:"Authentication"}),d=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.reenterValuesLabel",{defaultMessage:"Authentication credentials are encrypted. Please reenter values for these fields."}),b=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.emailTextFieldLabel",{defaultMessage:"Email address"}),p=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requiredEmailTextField",{defaultMessage:"Email address is required"}),g=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.apiTokenTextFieldLabel",{defaultMessage:"API token"}),m=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requiredApiTokenTextField",{defaultMessage:"API token is required"}),f=a.i18n.translate("xpack.triggersActionsUI.cases.configureCases.mappingFieldSummary",{defaultMessage:"Summary"}),x=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requiredDescriptionTextField",{defaultMessage:"Description is required."}),j=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.requiredSummaryTextField",{defaultMessage:"Summary is required."}),h=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.mappingFieldDescription",{defaultMessage:"Description"}),A=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.mappingFieldComments",{defaultMessage:"Comments"}),v=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.unableToGetIssueTypesMessage",{defaultMessage:"Unable to get issue types"}),y=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.unableToGetFieldsMessage",{defaultMessage:"Unable to get fields"}),I=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.unableToGetIssuesMessage",{defaultMessage:"Unable to get issues"}),O=e=>a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.unableToGetIssueMessage",{defaultMessage:"Unable to get issue with id {id}",values:{id:e}}),E=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.searchIssuesComboBoxAriaLabel",{defaultMessage:"Type to search"}),P=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.searchIssuesComboBoxPlaceholder",{defaultMessage:"Type to search"}),S=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.searchIssuesLoading",{defaultMessage:"Loading..."}),T=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.labelsSpacesErrorMessage",{defaultMessage:"Labels cannot contain spaces."})},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=({connector_id:e,service_message:t,...n})=>({...n,actionId:e,...t&&{serviceMessage:t}})}}]);