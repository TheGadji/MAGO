/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[24],{114:function(e,t,s){switch(window.__kbnThemeTag__){case"v7dark":return s(115);case"v7light":return s(117);case"v8dark":return s(119);case"v8light":return s(121)}},115:function(e,t,s){var n=s(57),o=s(116);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},116:function(e,t,s){(t=s(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},117:function(e,t,s){var n=s(57),o=s(118);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},118:function(e,t,s){(t=s(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},119:function(e,t,s){var n=s(57),o=s(120);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},120:function(e,t,s){(t=s(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},121:function(e,t,s){var n=s(57),o=s(122);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},122:function(e,t,s){(t=s(58)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},137:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(13),o=s(0),i=s(1),c=s(59),a=s(5);const r=({idsToDelete:e,apiDeleteCall:t,onDeleted:s,onCancel:r,onErrors:l,singleTitle:u,multipleTitle:d,setIsLoadingState:g})=>{const[b,p]=Object(i.useState)(!1);Object(i.useEffect)((()=>{p(e.length>0)}),[e]);const{http:j,notifications:{toasts:x}}=Object(c.b)().services,m=e.length;if(!b)return null;const f=o.i18n.translate("xpack.triggersActionsUI.deleteSelectedIdsConfirmModal.descriptionText",{defaultMessage:"You can't recover {numIdsToDelete, plural, one {a deleted {singleTitle}} other {deleted {multipleTitle}}}.",values:{numIdsToDelete:m,singleTitle:u,multipleTitle:d}}),C=o.i18n.translate("xpack.triggersActionsUI.deleteSelectedIdsConfirmModal.deleteButtonLabel",{defaultMessage:"Delete {numIdsToDelete, plural, one {{singleTitle}} other {# {multipleTitle}}} ",values:{numIdsToDelete:m,singleTitle:u,multipleTitle:d}}),O=o.i18n.translate("xpack.triggersActionsUI.deleteSelectedIdsConfirmModal.cancelButtonLabel",{defaultMessage:"Cancel"});return Object(a.jsx)(n.EuiConfirmModal,{buttonColor:"danger","data-test-subj":"deleteIdsConfirmation",title:C,onCancel:()=>{p(!1),r()},onConfirm:async()=>{p(!1),g(!0);const{successes:n,errors:i}=await t({ids:e,http:j});g(!1);const c=n.length,a=i.length;c>0&&x.addSuccess(o.i18n.translate("xpack.triggersActionsUI.components.deleteSelectedIdsSuccessNotification.descriptionText",{defaultMessage:"Deleted {numSuccesses, number} {numSuccesses, plural, one {{singleTitle}} other {{multipleTitle}}}",values:{numSuccesses:c,singleTitle:u,multipleTitle:d}})),a>0&&(x.addDanger(o.i18n.translate("xpack.triggersActionsUI.components.deleteSelectedIdsErrorNotification.descriptionText",{defaultMessage:"Failed to delete {numErrors, number} {numErrors, plural, one {{singleTitle}} other {{multipleTitle}}}",values:{numErrors:a,singleTitle:u,multipleTitle:d}})),await l()),await s(n)},cancelButtonText:O,confirmButtonText:C},f)}},199:function(e,t,s){switch(window.__kbnThemeTag__){case"v7dark":return s(200);case"v7light":return s(202);case"v8dark":return s(204);case"v8light":return s(206)}},200:function(e,t,s){var n=s(57),o=s(201);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},201:function(e,t,s){(t=s(58)(!1)).push([e.i,".actConnectorsList__tableRowDisabled{background-color:#25262E}.actConnectorsList__tableRowDisabled .actConnectorsList__tableCellDisabled{color:#98A2B3}.actConnectorsList__tableRowDisabled .euiLink+.euiToolTipAnchor{margin-left:4px}\n",""]),e.exports=t},202:function(e,t,s){var n=s(57),o=s(203);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},203:function(e,t,s){(t=s(58)(!1)).push([e.i,".actConnectorsList__tableRowDisabled{background-color:#F5F7FA}.actConnectorsList__tableRowDisabled .actConnectorsList__tableCellDisabled{color:#69707D}.actConnectorsList__tableRowDisabled .euiLink+.euiToolTipAnchor{margin-left:4px}\n",""]),e.exports=t},204:function(e,t,s){var n=s(57),o=s(205);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},205:function(e,t,s){(t=s(58)(!1)).push([e.i,".actConnectorsList__tableRowDisabled{background-color:#25262E}.actConnectorsList__tableRowDisabled .actConnectorsList__tableCellDisabled{color:#98A2B3}.actConnectorsList__tableRowDisabled .euiLink+.euiToolTipAnchor{margin-left:4px}\n",""]),e.exports=t},206:function(e,t,s){var n=s(57),o=s(207);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},207:function(e,t,s){(t=s(58)(!1)).push([e.i,".actConnectorsList__tableRowDisabled{background-color:#F5F7FA}.actConnectorsList__tableRowDisabled .actConnectorsList__tableCellDisabled{color:#69707D}.actConnectorsList__tableRowDisabled .euiLink+.euiToolTipAnchor{margin-left:4px}\n",""]),e.exports=t},208:function(e,t,s){switch(window.__kbnThemeTag__){case"v7dark":return s(209);case"v7light":return s(211);case"v8dark":return s(213);case"v8light":return s(215)}},209:function(e,t,s){var n=s(57),o=s(210);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},210:function(e,t,s){(t=s(58)(!1)).push([e.i,".actEmptyConnectorsPrompt__logo+.actEmptyConnectorsPrompt__logo{margin-left:16px}\n",""]),e.exports=t},211:function(e,t,s){var n=s(57),o=s(212);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},212:function(e,t,s){(t=s(58)(!1)).push([e.i,".actEmptyConnectorsPrompt__logo+.actEmptyConnectorsPrompt__logo{margin-left:16px}\n",""]),e.exports=t},213:function(e,t,s){var n=s(57),o=s(214);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},214:function(e,t,s){(t=s(58)(!1)).push([e.i,".actEmptyConnectorsPrompt__logo+.actEmptyConnectorsPrompt__logo{margin-left:16px}\n",""]),e.exports=t},215:function(e,t,s){var n=s(57),o=s(216);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},216:function(e,t,s){(t=s(58)(!1)).push([e.i,".actEmptyConnectorsPrompt__logo+.actEmptyConnectorsPrompt__logo{margin-left:16px}\n",""]),e.exports=t},246:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return E}));var n=s(5),o=s(1),i=s.n(o),c=s(13),a=s(0),r=s(3),l=s(36),u=s(40),d=s(76),g=s(63),b=s(137),p=s(93),j=(s(199),s(14));s(208);const x=({onCTAClicked:e})=>Object(n.jsx)(c.EuiEmptyPrompt,{"data-test-subj":"createFirstConnectorEmptyPrompt",title:Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)(c.EuiIcon,{type:"logoSlack",size:"xl",className:"actEmptyConnectorsPrompt__logo"}),Object(n.jsx)(c.EuiIcon,{type:"logoGmail",size:"xl",className:"actEmptyConnectorsPrompt__logo"}),Object(n.jsx)(c.EuiIcon,{type:"logoWebhook",size:"xl",className:"actEmptyConnectorsPrompt__logo"}),Object(n.jsx)(c.EuiSpacer,{size:"s"}),Object(n.jsx)(c.EuiTitle,{size:"m"},Object(n.jsx)("h2",null,Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.emptyConnectorsPrompt.addConnectorEmptyTitle",defaultMessage:"Create your first connector"})))),body:Object(n.jsx)("p",null,Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.emptyConnectorsPrompt.addConnectorEmptyBody",defaultMessage:"Configure email, Slack, Elasticsearch, and third-party services that Kibana runs."})),actions:Object(n.jsx)(c.EuiButton,{"data-test-subj":"createFirstActionButton",key:"create-action",fill:!0,iconType:"plusInCircle",iconSide:"left",onClick:e},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.emptyConnectorsPrompt.addConnectorButtonLabel",defaultMessage:"Create connector"}))});var m=s(59),f=s(31),C=s(22),O=s(39),T=s(43);const y=Object(u.withTheme)((({theme:e})=>Object(n.jsx)(n.ClassNames,null,(({css:t})=>Object(n.jsx)(c.EuiIconTip,{anchorClassName:t({marginLeft:e.eui.euiSizeS,marginBottom:"0 !important"}),"aria-label":"Warning",size:"m",type:"alert",color:"warning",content:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.isDeprecatedDescription",{defaultMessage:"This connector is deprecated. Update it, or create a new one."}),position:"right"}))))),E=()=>{const{http:e,notifications:{toasts:t},application:{capabilities:s},actionTypeRegistry:u}=Object(m.b)().services,E=Object(g.b)(s),A=Object(g.c)(s),v=Object(g.d)(s),[M,F]=Object(o.useState)(void 0),[L,D]=Object(o.useState)([]),[w,S]=Object(o.useState)(0),[U,B]=Object(o.useState)([]),[P,R]=Object(o.useState)(!1),[N,z]=Object(o.useState)(!1),[H,$]=Object(o.useState)(!1),[G,q]=Object(o.useState)({}),[W,Y]=Object(o.useState)([]);Object(o.useEffect)((()=>{J()}),[]),Object(o.useEffect)((()=>{(async()=>{try{R(!0);const t=await Object(d.d)({http:e}),s={};for(const e of t)s[e.id]=e;F(s)}catch(e){t.addDanger({title:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.unableToLoadConnectorTypesMessage",{defaultMessage:"Unable to load connector types"})})}finally{R(!1)}})()}),[]);const K=M?L.filter((e=>!f.DEFAULT_HIDDEN_ACTION_TYPES.includes(e.actionTypeId))).map((e=>({...e,actionType:M[e.actionTypeId]?M[e.actionTypeId].name:e.actionTypeId}))):[],V=M?Object.values(M).filter((e=>!f.DEFAULT_HIDDEN_ACTION_TYPES.includes(e.id))).map((e=>({value:e.id,name:`${e.name} (${h(L,e.id)})`}))).sort(((e,t)=>e.name.localeCompare(t.name))):[];async function J(){z(!0);try{const t=await Object(d.e)({http:e});D(t)}catch(e){t.addDanger({title:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.unableToLoadActionsMessage",{defaultMessage:"Unable to load connectors"})})}finally{z(!1)}}async function Q(e,t,s){q({initialConnector:e,tab:t,isFix:null!=s&&s})}const X=[{field:"name","data-test-subj":"connectorsTableCell-name",name:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.nameTitle",{defaultMessage:"Name"}),sortable:!1,truncateText:!0,render:(e,t)=>{var s;const o=Object(p.b)(M&&M[t.actionTypeId]),r=t.config,l=(".servicenow"===(null==t?void 0:t.actionTypeId)||".servicenow-sir"===(null==t?void 0:t.actionTypeId))&&(null==r?void 0:r.usesTableApi),u=Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)(c.EuiLink,{"data-test-subj":`edit${t.id}`,onClick:()=>Q(t,j.f.Configuration),key:t.id,disabled:!M||!(null!==(s=M[t.actionTypeId])&&void 0!==s&&s.enabled)},e),t.isMissingSecrets?Object(n.jsx)(c.EuiIconTip,{iconProps:{"data-test-subj":`missingSecrets_${t.id}`},type:"alert",color:"warning",content:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.missingSecretsDescription",{defaultMessage:"Sensitive information was not imported"}),position:"right"}):null,l&&Object(n.jsx)(y,null));return o.isEnabled?u:Object(n.jsx)(i.a.Fragment,null,u,Object(n.jsx)(c.EuiIconTip,{type:"questionInCircle",content:o.message,position:"right"}))}},{field:"actionType","data-test-subj":"connectorsTableCell-actionType",name:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actionTypeTitle",{defaultMessage:"Type"}),sortable:!1,truncateText:!0},{name:"",render:e=>{var t;return Object(n.jsx)(c.EuiFlexGroup,{justifyContent:"flexEnd",alignItems:"flexEnd"},Object(n.jsx)(I,{canDelete:E,item:e,onDelete:()=>Y([e.id])}),e.isMissingSecrets?Object(n.jsx)(i.a.Fragment,null,M&&null!==(t=M[e.actionTypeId])&&void 0!==t&&t.enabled?Object(n.jsx)(c.EuiFlexItem,{grow:!1,style:{marginLeft:4}},Object(n.jsx)(c.EuiToolTip,{content:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.fixActionDescription",{defaultMessage:"Fix connector configuration"})},Object(n.jsx)(c.EuiButtonEmpty,{size:"xs","data-test-subj":"fixConnectorButton",onClick:()=>Q(e,j.f.Configuration,!0)},a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.fixButtonLabel",{defaultMessage:"Fix"})))):null):Object(n.jsx)(k,{canExecute:A&&M&&M[e.actionTypeId],item:e,onRun:()=>Q(e,j.f.Test)}))}}],Z=Object(n.jsx)(c.EuiInMemoryTable,{loading:N||P,items:K,sorting:!0,itemId:"id",columns:X,rowProps:e=>{var t;return{className:M&&null!==(t=M[e.actionTypeId])&&void 0!==t&&t.enabled?"":"actConnectorsList__tableRowDisabled","data-test-subj":"connectors-row"}},cellProps:e=>{var t;return{"data-test-subj":"cell",className:M&&null!==(t=M[e.actionTypeId])&&void 0!==t&&t.enabled?"":"actConnectorsList__tableCellDisabled"}},"data-test-subj":"actionsTable",pagination:{initialPageIndex:0,pageIndex:w},onTableChange:({page:e})=>{e&&S(e.index)},selection:E?{onSelectionChange(e){B(e)},selectable:({isPreconfigured:e})=>!e}:void 0,search:{filters:[{type:"field_value_selection",field:"actionTypeId",name:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.filters.actionTypeIdName",{defaultMessage:"Type"}),multiSelect:"or",options:V}],toolsLeft:0!==U.length&&E?[Object(n.jsx)(c.EuiButton,{key:"delete",iconType:"trash",color:"danger","data-test-subj":"bulkDelete",onClick:()=>{Y(U.map((e=>e.id)))},title:E?void 0:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.buttons.deleteDisabledTitle",{defaultMessage:"Unable to delete connectors"})},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.buttons.deleteLabel",defaultMessage:"Delete {count}",values:{count:U.length}}))]:[],toolsRight:v?[Object(n.jsx)(c.EuiButton,{"data-test-subj":"createActionButton",key:"create-action",fill:!0,onClick:()=>$(!0)},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.addActionButtonLabel",defaultMessage:"Create connector"}))]:[]}});return Object(n.jsx)("section",{"data-test-subj":"actionsList"},Object(n.jsx)(b.a,{onDeleted:e=>{if(0===U.length||U.length===e.length){const e=L.filter((e=>e.id&&!W.includes(e.id)));D(e),B([])}Y([])},onErrors:async()=>{await J(),Y([])},onCancel:async()=>{Y([])},apiDeleteCall:d.b,idsToDelete:W,singleTitle:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.singleTitle",{defaultMessage:"connector"}),multipleTitle:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.multipleTitle",{defaultMessage:"connectors"}),setIsLoadingState:e=>R(e)}),Object(n.jsx)(c.EuiSpacer,{size:"m"}),(N||P)&&Object(n.jsx)(C.a,null),0!==K.length&&Z,0===K.length&&v&&!N&&!P&&Object(n.jsx)(x,{onCTAClicked:()=>$(!0)}),0===K.length&&!v&&Object(n.jsx)(_,null),H?Object(n.jsx)(T.default,{onClose:()=>{$(!1)},onTestConnector:e=>Q(e,j.f.Test),reloadConnectors:J,actionTypeRegistry:u}):null,G.initialConnector?Object(n.jsx)(O.default,{key:`${G.initialConnector.id}${G.tab?`:${G.tab}`:""}`,initialConnector:G.initialConnector,tab:G.tab,onClose:()=>{q(Object(r.omit)(G,"initialConnector"))},reloadConnectors:J,actionTypeRegistry:u}):null)};function h(e,t){return e.filter((e=>e.actionTypeId===t)).length}const I=({item:e,canDelete:t,onDelete:s})=>e.isPreconfigured?Object(n.jsx)(c.EuiFlexItem,{grow:!1},Object(n.jsx)(c.EuiBetaBadge,{"data-test-subj":"preConfiguredTitleMessage",label:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.preconfiguredTitleMessage",{defaultMessage:"Preconfigured"}),tooltipContent:"This connector can't be deleted."})):Object(n.jsx)(c.EuiFlexItem,{grow:!1},Object(n.jsx)(c.EuiToolTip,{content:t?a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.deleteActionDescription",{defaultMessage:"Delete this connector"}):a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.deleteActionDisabledDescription",{defaultMessage:"Unable to delete connectors"})},Object(n.jsx)(c.EuiButtonIcon,{isDisabled:!t,"data-test-subj":"deleteConnector","aria-label":a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.deleteActionName",{defaultMessage:"Delete"}),onClick:s,iconType:"trash"}))),k=({item:e,canExecute:t,onRun:s})=>Object(n.jsx)(c.EuiFlexItem,{grow:!1},Object(n.jsx)(c.EuiToolTip,{content:t?a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.runConnectorDescription",{defaultMessage:"Run this connector"}):a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.runConnectorDisabledDescription",{defaultMessage:"Unable to run connectors"})},Object(n.jsx)(c.EuiButtonIcon,{isDisabled:!t,"data-test-subj":"runConnector","aria-label":a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.runConnectorName",{defaultMessage:"Run"}),onClick:s,iconType:"play"}))),_=()=>Object(n.jsx)(c.EuiEmptyPrompt,{iconType:"securityApp",title:Object(n.jsx)("h1",null,Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.noPermissionToCreateTitle",defaultMessage:"No permissions to create connectors"})),body:Object(n.jsx)("p",{"data-test-subj":"permissionDeniedMessage"},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.noPermissionToCreateDescription",defaultMessage:"Contact your system administrator."}))})},39:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var n=s(1),o=s.n(n),i=s(36),c=s(13),a=s(0),r=s(82),l=s(88),u=s(85),d=s(5);const g=({connector:e,executeEnabled:t,executionResult:s,actionParams:l,setActionParams:g,onExecutAction:x,isExecutingAction:m,actionTypeRegistry:f})=>{const[C,O]=Object(n.useState)({}),[T,y]=Object(n.useState)(!1),E=f.get(e.actionTypeId),h=E.actionParamsFields;Object(n.useEffect)((()=>{(async()=>{const e=(await(null==E?void 0:E.validateParams(l))).errors;O({...e}),y(!!Object.values(e).find((e=>e.length>0)))})()}),[E,l]);const I=[{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.createActionHeader",{defaultMessage:"Create an action"}),children:h?Object(d.jsx)(c.EuiErrorBoundary,null,Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)(c.EuiFlexGroup,{justifyContent:"center"},Object(d.jsx)(c.EuiFlexItem,{grow:!1},Object(d.jsx)(c.EuiLoadingSpinner,{size:"m"})))},Object(d.jsx)(h,{actionParams:l,index:0,errors:C,editAction:(e,t)=>g({...l,[e]:t}),messageVariables:[],actionConnector:e}))):Object(d.jsx)(c.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.testConnectorForm.noActionParametersRequiredText",defaultMessage:"This Connector does not require any Action Parameter."})))},{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.runTestHeader",{defaultMessage:"Run the test"}),children:Object(d.jsx)(o.a.Fragment,null,t?null:Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiCallOut,{iconType:"alert",color:"warning"},Object(d.jsx)("p",null,Object(d.jsx)(i.FormattedMessage,{defaultMessage:"Save your changes before testing the connector.",id:"xpack.triggersActionsUI.sections.testConnectorForm.executeTestDisabled"}))),Object(d.jsx)(c.EuiSpacer,{size:"s"})),Object(d.jsx)(c.EuiText,null,Object(d.jsx)(c.EuiButton,{iconType:"play",isLoading:m,isDisabled:!t||T||m,"data-test-subj":"executeActionButton",onClick:x},Object(d.jsx)(i.FormattedMessage,{defaultMessage:"Run",id:"xpack.triggersActionsUI.sections.testConnectorForm.executeTestButton"}))))},{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.testResultsHeader",{defaultMessage:"Results"}),children:Object(u.pipe)(s,Object(r.map)((e=>"ok"===e.status?Object(d.jsx)(p,null):Object(d.jsx)(j,{executionResult:e}))),Object(r.getOrElse)((()=>Object(d.jsx)(b,null))))}];return Object(d.jsx)(c.EuiSteps,{steps:I})},b=()=>Object(d.jsx)(c.EuiCallOut,{"data-test-subj":"executionAwaiting"},Object(d.jsx)("p",null,Object(d.jsx)(i.FormattedMessage,{defaultMessage:"When you run the test, the results will show up here.",id:"xpack.triggersActionsUI.sections.testConnectorForm.awaitingExecutionDescription"}))),p=()=>Object(d.jsx)(c.EuiCallOut,{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionSuccessfulTitle",{defaultMessage:"Test was successful",values:{}}),color:"success","data-test-subj":"executionSuccessfulResult",iconType:"check"},Object(d.jsx)("p",null,Object(d.jsx)(i.FormattedMessage,{defaultMessage:"Ensure the results are what you expect.",id:"xpack.triggersActionsUI.sections.testConnectorForm.executionSuccessfulDescription"}))),j=({executionResult:{message:e,serviceMessage:t}})=>{const s=[{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureDescription",{defaultMessage:"The following error was found:"}),description:null!=e?e:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureUnknownReason",{defaultMessage:"Unknown reason"})}];return t&&s.push({title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureAdditionalDetails",{defaultMessage:"Details:"}),description:t}),Object(d.jsx)(c.EuiCallOut,{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureTitle",{defaultMessage:"Test failed to run"}),"data-test-subj":"executionFailureResult",color:"danger",iconType:"alert"},Object(d.jsx)(c.EuiDescriptionList,{textStyle:"reverse",listItems:s}))};var x=s(14),m=s(89),f=s(76),C=s(63),O=s(6),T=(s(114),s(59)),y=s(4),E=s(22);const h=({initialConnector:e,onClose:t,tab:s=x.f.Configuration,reloadConnectors:u,consumer:b,actionTypeRegistry:p})=>{const[j,h]=Object(n.useState)(!0),{http:I,notifications:{toasts:k},docLinks:_,application:{capabilities:A}}=Object(T.b)().services,v=()=>({...e,secrets:{}}),M=Object(C.d)(A),F=Object(m.a)(),[{connector:L},D]=Object(n.useReducer)(F,{connector:v()}),[w,S]=Object(n.useState)(!1),[U,B]=Object(n.useState)({configErrors:{},connectorBaseErrors:{},connectorErrors:{},secretsErrors:{}}),P=p.get(L.actionTypeId);Object(n.useEffect)((()=>{(async()=>{S(!0);const e=await Object(l.b)(L,P);h(!!Object.keys(e.connectorErrors).find((t=>e.connectorErrors[t].length>=1))),S(!1),B({...e})})()}),[L,P]);const[R,N]=Object(n.useState)(!1),[z,H]=Object(n.useState)(s),[$,G]=Object(n.useState)(!1),q=e=>{D({command:{type:"setConnector"},payload:{key:"connector",value:e}})},[W,Y]=Object(n.useState)({}),[K,V]=Object(n.useState)(r.none),[J,Q]=Object(n.useState)(!1),X=Object(n.useCallback)((()=>H((e=>e===x.f.Configuration?x.f.Test:(K!==r.none&&V(r.none),x.f.Configuration)))),[K]),[Z,ee]=Object(n.useState)(null),te=Object(n.useCallback)((()=>{q(v()),G(!1),V(r.none),t()}),[t]),se=L.isPreconfigured?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiTitle,{size:"s"},Object(d.jsx)("h3",{id:"flyoutTitle"},Object(d.jsx)(i.FormattedMessage,{defaultMessage:"{connectorName}",id:"xpack.triggersActionsUI.sections.preconfiguredConnectorForm.flyoutTitle",values:{connectorName:e.name}})," ",Object(d.jsx)(c.EuiBetaBadge,{label:"Preconfigured","data-test-subj":"preconfiguredBadge",tooltipContent:a.i18n.translate("xpack.triggersActionsUI.sections.preconfiguredConnectorForm.tooltipContent",{defaultMessage:"This connector is preconfigured and cannot be edited"})}))),Object(d.jsx)(c.EuiText,{size:"s"},Object(d.jsx)(i.FormattedMessage,{defaultMessage:"{actionDescription}",id:"xpack.triggersActionsUI.sections.editConnectorForm.actionTypeDescription",values:{actionDescription:P.selectMessage}}))):Object(d.jsx)(c.EuiTitle,{size:"s"},Object(d.jsx)("h3",{id:"flyoutTitle"},Object(d.jsx)(i.FormattedMessage,{defaultMessage:"Edit connector",id:"xpack.triggersActionsUI.sections.editConnectorForm.flyoutPreconfiguredTitle"}))),ne=async(e=!0)=>{if(j)return void q(Object(y.b)(L,U.configErrors,U.secretsErrors,U.connectorBaseErrors));N(!0);try{var t;await(null==Z||null===(t=Z.beforeActionConnectorSave)||void 0===t?void 0:t.call(Z))}catch(e){return void N(!1)}const s=await(async()=>await Object(f.f)({http:I,connector:L,id:L.id}).then((e=>(k.addSuccess(a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.updateSuccessNotificationText",{defaultMessage:"Updated '{connectorName}'",values:{connectorName:e.name}})),e))).catch((e=>{var t,s;k.addDanger(null!==(t=null===(s=e.body)||void 0===s?void 0:s.message)&&void 0!==t?t:a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.updateErrorNotificationText",{defaultMessage:"Cannot update a connector."}))})))();var n;(N(!1),s)&&(G(!1),await(null==Z||null===(n=Z.afterActionConnectorSave)||void 0===n?void 0:n.call(Z,s)),e&&te(),L.isMissingSecrets&&(L.isMissingSecrets=!1),u&&u())};return Object(d.jsx)(c.EuiFlyout,{onClose:te,"aria-labelledby":"flyoutActionEditTitle",size:"m"},Object(d.jsx)(c.EuiFlyoutHeader,{hasBorder:!0},Object(d.jsx)(c.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},P?Object(d.jsx)(c.EuiFlexItem,{grow:!1},Object(d.jsx)(c.EuiIcon,{type:P.iconClass,size:"m"})):null,Object(d.jsx)(c.EuiFlexItem,null,se)),Object(d.jsx)(c.EuiTabs,{className:"connectorEditFlyoutTabs"},Object(d.jsx)(c.EuiTab,{onClick:X,"data-test-subj":"configureConnectorTab",isSelected:x.f.Configuration===z},a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.tabText",{defaultMessage:"Configuration"})),Object(d.jsx)(c.EuiTab,{onClick:X,"data-test-subj":"testConnectorTab",isSelected:x.f.Test===z},a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.tabText",{defaultMessage:"Test"})))),Object(d.jsx)(c.EuiFlyoutBody,null,z===x.f.Configuration?L.isPreconfigured?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiText,null,a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.descriptionText",{defaultMessage:"This connector is readonly."})),Object(d.jsx)(c.EuiLink,{href:_.links.alerting.preconfiguredConnectors,target:"_blank"},Object(d.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.preconfiguredHelpLabel",defaultMessage:"Learn more about preconfigured connectors."}))):Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(l.a,{connector:L,errors:U.connectorErrors,dispatch:e=>{G(!0),V(r.none),D(e)},actionTypeRegistry:p,consumer:b,setCallbacks:ee,isEdit:!0}),w?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiSpacer,{size:"m"}),Object(d.jsx)(E.a,{size:"l"})," "):Object(d.jsx)(o.a.Fragment,null)):Object(d.jsx)(g,{connector:L,executeEnabled:!$,actionParams:W,setActionParams:Y,onExecutAction:()=>(Q(!0),Object(f.c)({id:L.id,params:W,http:I}).then((e=>(Q(!1),V(Object(r.some)(e)),e))).catch((e=>{const t=Object(O.isActionTypeExecutorResult)(e)?e:{actionId:L.id,status:"error",message:e.message};return Q(!1),V(Object(r.some)(t)),t}))),isExecutingAction:J,executionResult:K,actionTypeRegistry:p})),Object(d.jsx)(c.EuiFlyoutFooter,null,Object(d.jsx)(c.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(d.jsx)(c.EuiFlexItem,{grow:!1},Object(d.jsx)(c.EuiButtonEmpty,{onClick:te,"data-test-subj":"cancelSaveEditedConnectorButton"},a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.cancelButtonLabel",{defaultMessage:"Cancel"}))),Object(d.jsx)(c.EuiFlexItem,{grow:!1},Object(d.jsx)(c.EuiFlexGroup,{justifyContent:"spaceBetween"},M&&P&&!L.isPreconfigured?Object(d.jsx)(o.a.Fragment,null,Object(d.jsx)(c.EuiFlexItem,{grow:!1},Object(d.jsx)(c.EuiButton,{color:"secondary","data-test-subj":"saveEditedActionButton",isLoading:R||J,onClick:async()=>{await ne(!1)}},Object(d.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.saveButtonLabel",defaultMessage:"Save"}))),Object(d.jsx)(c.EuiFlexItem,{grow:!1},Object(d.jsx)(c.EuiButton,{fill:!0,color:"secondary","data-test-subj":"saveAndCloseEditedActionButton",type:"submit",isLoading:R||J,onClick:async()=>{await ne()}},Object(d.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.saveAndCloseButtonLabel",defaultMessage:"Save & close"})))):null)))))}}}]);