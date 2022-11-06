/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[9],{114:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(115);case"v7light":return n(117);case"v8dark":return n(119);case"v8light":return n(121)}},115:function(e,t,n){var s=n(57),o=n(116);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};s(o,c);e.exports=o.locals||{}},116:function(e,t,n){(t=n(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},117:function(e,t,n){var s=n(57),o=n(118);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};s(o,c);e.exports=o.locals||{}},118:function(e,t,n){(t=n(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},119:function(e,t,n){var s=n(57),o=n(120);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};s(o,c);e.exports=o.locals||{}},120:function(e,t,n){(t=n(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},121:function(e,t,n){var s=n(57),o=n(122);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};s(o,c);e.exports=o.locals||{}},122:function(e,t,n){(t=n(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},39:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var s=n(1),o=n.n(s),c=n(36),i=n(13),r=n(0),a=n(82),u=n(88),l=n(85),d=n(5);const g=({connector:e,executeEnabled:t,executionResult:n,actionParams:u,setActionParams:g,onExecutAction:p,isExecutingAction:f,actionTypeRegistry:m})=>{const[O,y]=Object(s.useState)({}),[E,C]=Object(s.useState)(!1),F=m.get(e.actionTypeId),T=F.actionParamsFields;Object(s.useEffect)((()=>{(async()=>{const e=(await(null==F?void 0:F.validateParams(u))).errors;y({...e}),C(!!Object.values(e).find((e=>e.length>0)))})()}),[F,u]);const v=[{title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.createActionHeader",{defaultMessage:"Create an action"}),children:T?Object(d.jsx)(i.EuiErrorBoundary,null,Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(i.EuiFlexGroup,{justifyContent:"center"},Object(d.jsx)(i.EuiFlexItem,{grow:!1},Object(d.jsx)(i.EuiLoadingSpinner,{size:"m"})))},Object(d.jsx)(T,{actionParams:u,index:0,errors:O,editAction:(e,t)=>g({...u,[e]:t}),messageVariables:[],actionConnector:e}))):Object(d.jsx)(i.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.testConnectorForm.noActionParametersRequiredText",defaultMessage:"This Connector does not require any Action Parameter."})))},{title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.runTestHeader",{defaultMessage:"Run the test"}),children:Object(d.jsx)(o.a.Fragment,null,t?null:Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(i.EuiCallOut,{iconType:"alert",color:"warning"},Object(d.jsx)("p",null,Object(d.jsx)(c.FormattedMessage,{defaultMessage:"Save your changes before testing the connector.",id:"xpack.triggersActionsUI.sections.testConnectorForm.executeTestDisabled"}))),Object(d.jsx)(i.EuiSpacer,{size:"s"})),Object(d.jsx)(i.EuiText,null,Object(d.jsx)(i.EuiButton,{iconType:"play",isLoading:f,isDisabled:!t||E||f,"data-test-subj":"executeActionButton",onClick:p},Object(d.jsx)(c.FormattedMessage,{defaultMessage:"Run",id:"xpack.triggersActionsUI.sections.testConnectorForm.executeTestButton"}))))},{title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.testResultsHeader",{defaultMessage:"Results"}),children:Object(l.pipe)(n,Object(a.map)((e=>"ok"===e.status?Object(d.jsx)(b,null):Object(d.jsx)(x,{executionResult:e}))),Object(a.getOrElse)((()=>Object(d.jsx)(j,null))))}];return Object(d.jsx)(i.EuiSteps,{steps:v})},j=()=>Object(d.jsx)(i.EuiCallOut,{"data-test-subj":"executionAwaiting"},Object(d.jsx)("p",null,Object(d.jsx)(c.FormattedMessage,{defaultMessage:"When you run the test, the results will show up here.",id:"xpack.triggersActionsUI.sections.testConnectorForm.awaitingExecutionDescription"}))),b=()=>Object(d.jsx)(i.EuiCallOut,{title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionSuccessfulTitle",{defaultMessage:"Test was successful",values:{}}),color:"success","data-test-subj":"executionSuccessfulResult",iconType:"check"},Object(d.jsx)("p",null,Object(d.jsx)(c.FormattedMessage,{defaultMessage:"Ensure the results are what you expect.",id:"xpack.triggersActionsUI.sections.testConnectorForm.executionSuccessfulDescription"}))),x=({executionResult:{message:e,serviceMessage:t}})=>{const n=[{title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureDescription",{defaultMessage:"The following error was found:"}),description:null!=e?e:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureUnknownReason",{defaultMessage:"Unknown reason"})}];return t&&n.push({title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureAdditionalDetails",{defaultMessage:"Details:"}),description:t}),Object(d.jsx)(i.EuiCallOut,{title:r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureTitle",{defaultMessage:"Test failed to run"}),"data-test-subj":"executionFailureResult",color:"danger",iconType:"alert"},Object(d.jsx)(i.EuiDescriptionList,{textStyle:"reverse",listItems:n}))};var p=n(14),f=n(89),m=n(76),O=n(63),y=n(6),E=(n(114),n(59)),C=n(4),F=n(22);const T=({initialConnector:e,onClose:t,tab:n=p.f.Configuration,reloadConnectors:l,consumer:j,actionTypeRegistry:b})=>{const[x,T]=Object(s.useState)(!0),{http:v,notifications:{toasts:k},docLinks:h,application:{capabilities:M}}=Object(E.b)().services,I=()=>({...e,secrets:{}}),A=Object(O.d)(M),S=Object(f.a)(),[{connector:w},U]=Object(s.useReducer)(S,{connector:I()}),[_,P]=Object(s.useState)(!1),[B,L]=Object(s.useState)({configErrors:{},connectorBaseErrors:{},connectorErrors:{},secretsErrors:{}}),R=b.get(w.actionTypeId);Object(s.useEffect)((()=>{(async()=>{P(!0);const e=await Object(u.b)(w,R);T(!!Object.keys(e.connectorErrors).find((t=>e.connectorErrors[t].length>=1))),P(!1),L({...e})})()}),[w,R]);const[N,z]=Object(s.useState)(!1),[D,$]=Object(s.useState)(n),[q,H]=Object(s.useState)(!1),W=e=>{U({command:{type:"setConnector"},payload:{key:"connector",value:e}})},[G,J]=Object(s.useState)({}),[K,V]=Object(s.useState)(a.none),[Q,X]=Object(s.useState)(!1),Y=Object(s.useCallback)((()=>$((e=>e===p.f.Configuration?p.f.Test:(K!==a.none&&V(a.none),p.f.Configuration)))),[K]),[Z,ee]=Object(s.useState)(null),te=Object(s.useCallback)((()=>{W(I()),H(!1),V(a.none),t()}),[t]),ne=w.isPreconfigured?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(i.EuiTitle,{size:"s"},Object(d.jsx)("h3",{id:"flyoutTitle"},Object(d.jsx)(c.FormattedMessage,{defaultMessage:"{connectorName}",id:"xpack.triggersActionsUI.sections.preconfiguredConnectorForm.flyoutTitle",values:{connectorName:e.name}})," ",Object(d.jsx)(i.EuiBetaBadge,{label:"Preconfigured","data-test-subj":"preconfiguredBadge",tooltipContent:r.i18n.translate("xpack.triggersActionsUI.sections.preconfiguredConnectorForm.tooltipContent",{defaultMessage:"This connector is preconfigured and cannot be edited"})}))),Object(d.jsx)(i.EuiText,{size:"s"},Object(d.jsx)(c.FormattedMessage,{defaultMessage:"{actionDescription}",id:"xpack.triggersActionsUI.sections.editConnectorForm.actionTypeDescription",values:{actionDescription:R.selectMessage}}))):Object(d.jsx)(i.EuiTitle,{size:"s"},Object(d.jsx)("h3",{id:"flyoutTitle"},Object(d.jsx)(c.FormattedMessage,{defaultMessage:"Edit connector",id:"xpack.triggersActionsUI.sections.editConnectorForm.flyoutPreconfiguredTitle"}))),se=async(e=!0)=>{if(x)return void W(Object(C.b)(w,B.configErrors,B.secretsErrors,B.connectorBaseErrors));z(!0);try{var t;await(null==Z||null===(t=Z.beforeActionConnectorSave)||void 0===t?void 0:t.call(Z))}catch(e){return void z(!1)}const n=await(async()=>await Object(m.f)({http:v,connector:w,id:w.id}).then((e=>(k.addSuccess(r.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.updateSuccessNotificationText",{defaultMessage:"Updated '{connectorName}'",values:{connectorName:e.name}})),e))).catch((e=>{var t,n;k.addDanger(null!==(t=null===(n=e.body)||void 0===n?void 0:n.message)&&void 0!==t?t:r.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.updateErrorNotificationText",{defaultMessage:"Cannot update a connector."}))})))();var s;(z(!1),n)&&(H(!1),await(null==Z||null===(s=Z.afterActionConnectorSave)||void 0===s?void 0:s.call(Z,n)),e&&te(),w.isMissingSecrets&&(w.isMissingSecrets=!1),l&&l())};return Object(d.jsx)(i.EuiFlyout,{onClose:te,"aria-labelledby":"flyoutActionEditTitle",size:"m"},Object(d.jsx)(i.EuiFlyoutHeader,{hasBorder:!0},Object(d.jsx)(i.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},R?Object(d.jsx)(i.EuiFlexItem,{grow:!1},Object(d.jsx)(i.EuiIcon,{type:R.iconClass,size:"m"})):null,Object(d.jsx)(i.EuiFlexItem,null,ne)),Object(d.jsx)(i.EuiTabs,{className:"connectorEditFlyoutTabs"},Object(d.jsx)(i.EuiTab,{onClick:Y,"data-test-subj":"configureConnectorTab",isSelected:p.f.Configuration===D},r.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.tabText",{defaultMessage:"Configuration"})),Object(d.jsx)(i.EuiTab,{onClick:Y,"data-test-subj":"testConnectorTab",isSelected:p.f.Test===D},r.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.tabText",{defaultMessage:"Test"})))),Object(d.jsx)(i.EuiFlyoutBody,null,D===p.f.Configuration?w.isPreconfigured?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(i.EuiText,null,r.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.descriptionText",{defaultMessage:"This connector is readonly."})),Object(d.jsx)(i.EuiLink,{href:h.links.alerting.preconfiguredConnectors,target:"_blank"},Object(d.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.preconfiguredHelpLabel",defaultMessage:"Learn more about preconfigured connectors."}))):Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(u.a,{connector:w,errors:B.connectorErrors,dispatch:e=>{H(!0),V(a.none),U(e)},actionTypeRegistry:b,consumer:j,setCallbacks:ee,isEdit:!0}),_?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(i.EuiSpacer,{size:"m"}),Object(d.jsx)(F.a,{size:"l"})," "):Object(d.jsx)(o.a.Fragment,null)):Object(d.jsx)(g,{connector:w,executeEnabled:!q,actionParams:G,setActionParams:J,onExecutAction:()=>(X(!0),Object(m.c)({id:w.id,params:G,http:v}).then((e=>(X(!1),V(Object(a.some)(e)),e))).catch((e=>{const t=Object(y.isActionTypeExecutorResult)(e)?e:{actionId:w.id,status:"error",message:e.message};return X(!1),V(Object(a.some)(t)),t}))),isExecutingAction:Q,executionResult:K,actionTypeRegistry:b})),Object(d.jsx)(i.EuiFlyoutFooter,null,Object(d.jsx)(i.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(d.jsx)(i.EuiFlexItem,{grow:!1},Object(d.jsx)(i.EuiButtonEmpty,{onClick:te,"data-test-subj":"cancelSaveEditedConnectorButton"},r.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.cancelButtonLabel",{defaultMessage:"Cancel"}))),Object(d.jsx)(i.EuiFlexItem,{grow:!1},Object(d.jsx)(i.EuiFlexGroup,{justifyContent:"spaceBetween"},A&&R&&!w.isPreconfigured?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(i.EuiFlexItem,{grow:!1},Object(d.jsx)(i.EuiButton,{color:"secondary","data-test-subj":"saveEditedActionButton",isLoading:N||Q,onClick:async()=>{await se(!1)}},Object(d.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.saveButtonLabel",defaultMessage:"Save"}))),Object(d.jsx)(i.EuiFlexItem,{grow:!1},Object(d.jsx)(i.EuiButton,{fill:!0,color:"secondary","data-test-subj":"saveAndCloseEditedActionButton",type:"submit",isLoading:N||Q,onClick:async()=>{await se()}},Object(d.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.saveAndCloseButtonLabel",defaultMessage:"Save & close"})))):null)))))}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return s.KibanaContextProvider})),n.d(t,"b",(function(){return o}));var s=n(35);const o=()=>Object(s.useKibana)()},76:function(e,t,n){"use strict";n.d(t,"d",(function(){return s.a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d}));var s=n(21),o=n(7);const c=({connector_type_id:e,is_preconfigured:t,referenced_by_count:n,is_missing_secrets:s,...o})=>({actionTypeId:e,isPreconfigured:t,referencedByCount:n,isMissingSecrets:s,...o});async function i({http:e}){const t=await e.get(`${o.a}/connectors`);return t.map((e=>c(e)))}const r=({actionTypeId:e,isPreconfigured:t,...n})=>({...n,connector_type_id:e,is_preconfigured:t});async function a({http:e,connector:t}){return(({connector_type_id:e,is_preconfigured:t,is_missing_secrets:n,...s})=>({...s,actionTypeId:e,isPreconfigured:t,isMissingSecrets:n}))(await e.post(`${o.a}/connector`,{body:JSON.stringify(r(t))}))}async function u({ids:e,http:t}){const n=[],s=[];return await Promise.all(e.map((e=>t.delete(`${o.a}/connector/${encodeURIComponent(e)}`)))).then((function(e){n.push(...e)}),(function(e){s.push(...e)})),{successes:n,errors:s}}async function l({id:e,params:t,http:n}){return(({connector_id:e,service_message:t,...n})=>({...n,actionId:e,serviceMessage:t}))(await n.post(`${o.a}/connector/${encodeURIComponent(e)}/_execute`,{body:JSON.stringify({params:t})}))}async function d({http:e,connector:t,id:n}){return(({connector_type_id:e,is_preconfigured:t,is_missing_secrets:n,...s})=>({...s,actionTypeId:e,isPreconfigured:t,isMissingSecrets:n}))(await e.put(`${o.a}/connector/${encodeURIComponent(n)}`,{body:JSON.stringify({name:t.name,config:t.config,secrets:t.secrets})}))}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var s=n(13),o=n(5);const c=({children:e})=>Object(o.jsx)(s.EuiEmptyPrompt,{title:Object(o.jsx)(s.EuiLoadingSpinner,{size:"xl"}),body:Object(o.jsx)(s.EuiText,{color:"subdued"},e),"data-test-subj":"sectionLoading"})},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return j}));var s=n(1),o=n.n(s),c=n(13),i=n(0),r=n(36),a=n(63),u=n(59),l=n(80),d=n(5);async function g(e,t){const n=await(null==t?void 0:t.validateConnector(e)),s=n.config?n.config.errors:{},o=n.secrets?n.secrets.errors:{},c=function(e){const t={errors:{}},n={name:new Array};return t.errors=n,e.name||n.name.push(i.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorForm.error.requiredNameText",{defaultMessage:"Name is required."})),t}(e).errors;return{configErrors:s,secretsErrors:o,connectorBaseErrors:c,connectorErrors:{...s,...o,...c}}}const j=({connector:e,dispatch:t,actionTypeName:n,serverError:g,errors:j,actionTypeRegistry:b,consumer:x,setCallbacks:p,isEdit:f})=>{const{docLinks:m,application:{capabilities:O}}=Object(u.b)().services,y=Object(a.d)(O),E=(e,n)=>{t({command:{type:"setProperty"},payload:{key:e,value:n}})},C=b.get(e.actionTypeId);if(!C)return Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiCallOut,{title:i.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorForm.actions.connectorTypeConfigurationWarningTitleText",{defaultMessage:"Connector type not registered"}),color:"warning",iconType:"help"},Object(d.jsx)(c.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.actions.connectorTypeConfigurationWarningDescriptionText",defaultMessage:"To create this connector, you must configure at least one {connectorType} account. {docLink}",values:{connectorType:null!=n?n:e.actionTypeId,docLink:Object(d.jsx)(c.EuiLink,{href:m.links.alerting.actionTypes,target:"_blank"},Object(d.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.actions.actionConfigurationWarningHelpLinkText",defaultMessage:"Learn more."}))}})))),Object(d.jsx)(c.EuiSpacer,null));const F=C.actionConnectorFields,T=void 0!==e.name&&void 0!==j.name&&j.name.length>0;return Object(d.jsx)(c.EuiForm,{isInvalid:!!g,error:null==g?void 0:g.body.message},Object(d.jsx)(c.EuiFormRow,{id:"actionName",fullWidth:!0,label:Object(d.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.actionNameLabel",defaultMessage:"Connector name"}),isInvalid:T,error:j.name},Object(d.jsx)(c.EuiFieldText,{fullWidth:!0,readOnly:!y,isInvalid:T,name:"name",placeholder:"Untitled","data-test-subj":"nameInput",value:e.name||"",onChange:e=>{E("name",e.target.value)},onBlur:()=>{e.name||E("name","")}})),Object(d.jsx)(c.EuiSpacer,{size:"m"}),null!==F?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiTitle,{size:"xxs"},Object(d.jsx)("h4",null,Object(d.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.connectorSettingsLabel",defaultMessage:"Connector settings"}))),Object(d.jsx)(c.EuiSpacer,{size:"s"}),Object(d.jsx)(c.EuiErrorBoundary,null,Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(l.a,null,Object(d.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.loadingConnectorSettingsDescription",defaultMessage:"Loading connector settings…"}))},Object(d.jsx)(F,{action:e,errors:j,readOnly:!y,editActionConfig:(e,n)=>{t({command:{type:"setConfigProperty"},payload:{key:e,value:n}})},editActionSecrets:(e,n)=>{t({command:{type:"setSecretsProperty"},payload:{key:e,value:n}})},consumer:x,setCallbacks:p,isEdit:f})))):null)}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(3);const o=()=>(e,t)=>{const{connector:n}=e;switch(t.command.type){case"setConnector":{const{key:n,value:s}=t.payload;return"connector"===n?{...e,connector:s}:e}case"setProperty":{const{key:o,value:c}=t.payload;return Object(s.isEqual)(n[o],c)?e:{...e,connector:{...n,[o]:c}}}case"setConfigProperty":{const{key:o,value:c}=t.payload;return Object(s.isEqual)(n.config[o],c)?e:{...e,connector:{...n,config:{...n.config,[o]:c}}}}case"setSecretsProperty":{const{key:o,value:c}=t.payload;return Object(s.isEqual)(n.secrets[o],c)?e:{...e,connector:{...n,secrets:{...n.secrets,[o]:c}}}}}}}}]);