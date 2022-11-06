/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[10,3],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var i=n(6),s=n(7),r=n(73),o=n(84);async function c({http:e,signal:t,connectorId:n,fields:i}){const r=await e.post(`${s.a}/connector/${encodeURIComponent(n)}/_execute`,{body:JSON.stringify({params:{subAction:"getChoices",subActionParams:{fields:i}}}),signal:t});return Object(o.a)(r)}async function a({signal:e,apiUrl:t,username:n,password:s,actionTypeId:o}){var c;const a=t.endsWith("/")?t.slice(0,-1):t,l=i.snExternalServiceConfig[o],u=await fetch((d=a,p=null!==(c=l.appScope)&&void 0!==c?c:"",`${d}/api/${p}/elastic_api/health`),{method:"GET",signal:e,headers:{Authorization:"Basic "+btoa(n+":"+s)}});var d,p;if(!u.ok)throw new Error(Object(r.API_INFO_ERROR)(u.status));return{...(await u.json()).result}}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(1),s=n.n(i),r=n(13),o=n(73),c=n(95),a=n(96),l=n(5);const u=({action:e,errors:t,readOnly:n,isLoading:i,editActionSecrets:u,editActionConfig:d})=>Object(l.jsx)(s.a.Fragment,null,Object(l.jsx)(r.EuiFlexGroup,{direction:"column"},Object(l.jsx)(r.EuiFlexItem,null,Object(l.jsx)(r.EuiTitle,{size:"xxs"},Object(l.jsx)("h4",null,o.SN_INSTANCE_LABEL)),Object(l.jsx)(c.a,{action:e,errors:t,readOnly:n,isLoading:i,editActionConfig:d}))),Object(l.jsx)(r.EuiSpacer,{size:"m"}),Object(l.jsx)(r.EuiFlexGroup,null,Object(l.jsx)(r.EuiFlexItem,null,Object(l.jsx)(r.EuiTitle,{size:"xxs"},Object(l.jsx)("h4",null,o.AUTHENTICATION_LABEL)))),Object(l.jsx)(r.EuiFlexItem,null,Object(l.jsx)(a.a,{action:e,errors:t,readOnly:n,isLoading:i,editActionSecrets:u}))),d=Object(i.memo)(u)},285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var i=n(1),s=n.n(i),r=n(73),o=n(59),c=n(13),a=n(0),l=n(36),u=n(5);const d=({onMigrate:e})=>Object(u.jsx)(s.a.Fragment,null,Object(u.jsx)(c.EuiSpacer,{size:"s"}),Object(u.jsx)(c.EuiCallOut,{size:"m",iconType:"alert","data-test-subj":"snDeprecatedCallout",color:"warning",title:a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.deprecatedCalloutTitle",{defaultMessage:"This connector type is deprecated"})},Object(u.jsx)(l.FormattedMessage,{defaultMessage:"{update} {create} ",id:"xpack.triggersActionsUI.components.builtinActionTypes.servicenow.appInstallationInfo",values:{update:Object(u.jsx)(c.EuiLink,{onClick:e,"data-test-subj":"update-connector-btn"},a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.deprecatedCalloutMigrate",{defaultMessage:"Update this connector,"})),create:Object(u.jsx)("span",null,a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.deprecatedCalloutCreate",{defaultMessage:"or create a new one."}))}})),Object(u.jsx)(c.EuiSpacer,{size:"m"})),p=Object(i.memo)(d);var g=n(100);const b=e=>`https://store.servicenow.com/sn_appstore_store.do#!/store/application/${e}`,A=({color:e,appId:t})=>Object(u.jsx)(c.EuiButton,{href:b(t),color:e,iconSide:"right",iconType:"popout",target:"_blank"},r.VISIT_SN_STORE),f=Object(i.memo)(A),j=({appId:e})=>Object(u.jsx)(c.EuiLink,{href:b(e),target:"_blank"},r.VISIT_SN_STORE),m=Object(i.memo)(j),T=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.applicationRequiredCallout.content",{defaultMessage:"Please go to the ServiceNow app store and install the application"}),x=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.applicationRequiredCallout.errorMessage",{defaultMessage:"Error message"}),I=({appId:e,message:t})=>Object(u.jsx)(s.a.Fragment,null,Object(u.jsx)(c.EuiSpacer,{size:"s"}),Object(u.jsx)(c.EuiCallOut,{size:"m",iconType:"alert","data-test-subj":"snApplicationCallout",color:"danger",title:a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.applicationRequiredCallout",{defaultMessage:"Elastic ServiceNow App not installed"})},Object(u.jsx)("p",null,T),t&&Object(u.jsx)("p",null,x,": ",t),Object(u.jsx)(f,{color:"danger",appId:e})),Object(u.jsx)(c.EuiSpacer,{size:"m"})),E=Object(i.memo)(I);var O=n(78);const v=({appId:e})=>Object(u.jsx)(s.a.Fragment,null,Object(u.jsx)(c.EuiSpacer,{size:"s"}),Object(u.jsx)(c.EuiCallOut,{size:"m",iconType:"alert",color:"warning","data-test-subj":"snInstallationCallout",title:r.INSTALLATION_CALLOUT_TITLE},Object(u.jsx)(f,{color:"warning",appId:e})),Object(u.jsx)(c.EuiSpacer,{size:"m"})),y=Object(i.memo)(v);var U=n(95),w=n(96),S=n(6);const L=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.updateFormTitle",{defaultMessage:"Update ServiceNow connector"}),_=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.updateFormInstallTitle",{defaultMessage:"Install the Elastic ServiceNow app"}),C=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.updateFormUrlTitle",{defaultMessage:"Enter your ServiceNow instance URL"}),h=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.updateFormCredentialsTitle",{defaultMessage:"Provide authentication credentials"}),M=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.cancelButtonText",{defaultMessage:"Cancel"}),R=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.confirmButtonText",{defaultMessage:"Update"}),k=a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.serviceNow.warningMessage",{defaultMessage:"This updates all instances of this connector and cannot be reversed."}),N=({action:e,applicationInfoErrorMsg:t,errors:n,isLoading:i,readOnly:s,editActionSecrets:r,editActionConfig:o,onCancel:a,onConfirm:d})=>{var p,g;const{apiUrl:b}=e.config,{username:A,password:f}=e.secrets,j=void 0===b||void 0===A||void 0===f||Object(O.d)(b,n.apiUrl)||Object(O.d)(A,n.username)||Object(O.d)(f,n.password);return Object(u.jsx)(c.EuiFlyout,{ownFocus:!0,onClose:a,"data-test-subj":"updateConnectorForm"},Object(u.jsx)(c.EuiFlyoutHeader,{hasBorder:!0},Object(u.jsx)(c.EuiTitle,{size:"m"},Object(u.jsx)("h1",null,L))),Object(u.jsx)(c.EuiFlyoutBody,{banner:Object(u.jsx)(c.EuiCallOut,{size:"m",color:"danger",iconType:"alert","data-test-subj":"snUpdateInstallationCallout",title:k})},Object(u.jsx)(c.EuiFlexGroup,null,Object(u.jsx)(c.EuiSteps,{steps:[{title:_,children:Object(u.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.serviceNowAction.serviceNowAppRunning",defaultMessage:"The Elastic App from the ServiceNow app store must be installed prior to running the update. {visitLink} to install the app",values:{visitLink:Object(u.jsx)(m,{appId:null!==(p=S.snExternalServiceConfig[e.actionTypeId].appId)&&void 0!==p?p:""})}})},{title:C,children:Object(u.jsx)(U.a,{action:e,errors:n,readOnly:s,isLoading:i,editActionConfig:o})},{title:h,children:Object(u.jsx)(w.a,{action:e,errors:n,readOnly:s,isLoading:i,editActionSecrets:r})}]})),Object(u.jsx)(c.EuiFlexGroup,null,Object(u.jsx)(c.EuiFlexItem,null,t&&Object(u.jsx)(E,{message:t,appId:null!==(g=S.snExternalServiceConfig[e.actionTypeId].appId)&&void 0!==g?g:""})))),Object(u.jsx)(c.EuiFlyoutFooter,null,Object(u.jsx)(c.EuiFlexGroup,{justifyContent:"flexEnd"},Object(u.jsx)(c.EuiFlexItem,{grow:!1},Object(u.jsx)(c.EuiButtonEmpty,{"data-test-subj":"snUpdateInstallationCancel",onClick:a},M)),Object(u.jsx)(c.EuiFlexItem,{grow:!1},Object(u.jsx)(c.EuiButton,{"data-test-subj":"snUpdateInstallationSubmit",onClick:d,color:"danger",fill:!0,disabled:j,isLoading:i},R)))))},F=Object(i.memo)(N);var P=n(76),B=n(101);const D=({action:e,editActionSecrets:t,editActionConfig:n,errors:c,consumer:a,readOnly:l,setCallbacks:d,isEdit:b})=>{var A,f;const{http:j,notifications:{toasts:m}}=Object(o.b)().services,{apiUrl:T,usesTableApi:x}=e.config,{username:I,password:v}=e.secrets,U=!Object(O.c)(e),[w,L]=Object(i.useState)(!1),{fetchAppInfo:_,isLoading:C}=(({actionTypeId:e})=>{const[t,n]=Object(i.useState)(!1),s=Object(i.useRef)(!1),r=Object(i.useRef)(new AbortController),o=Object(i.useCallback)((async t=>{try{s.current=!1,r.current.abort(),r.current=new AbortController,n(!0);const i=await Object(g.a)({signal:r.current.signal,apiUrl:t.config.apiUrl,username:t.secrets.username,password:t.secrets.password,actionTypeId:e});return s.current||n(!1),i}catch(e){throw s.current||n(!1),e}}),[e]);return Object(i.useEffect)((()=>()=>{s.current=!0,r.current.abort(),n(!1)}),[]),{fetchAppInfo:o,isLoading:t}})({actionTypeId:e.actionTypeId}),[h,M]=Object(i.useState)(!1),[R,k]=Object(i.useState)(null),N=Object(i.useCallback)((async()=>{M(!1),k(null);try{const i=await _(e);var t,n;if(Object(O.e)(i))throw new Error(null!==(t=null===(n=i.error)||void 0===n?void 0:n.message)&&void 0!==t?t:r.UNKNOWN);return i}catch(e){throw M(!0),k(e.message),e}}),[e,_]),D=Object(i.useCallback)((async()=>{U&&await N()}),[N,U]);Object(i.useEffect)((()=>d({beforeActionConnectorSave:D})),[D,d]);const z=Object(i.useCallback)((()=>L(!0)),[]),V=Object(i.useCallback)((()=>L(!1)),[]),q=Object(i.useCallback)((async()=>{try{await N(),await Object(P.f)({http:j,connector:{name:e.name,config:{apiUrl:T,usesTableApi:!1},secrets:{username:I,password:v}},id:e.id}),n("usesTableApi",!1),L(!1),m.addSuccess({title:r.UPDATE_SUCCESS_TOAST_TITLE(e.name),text:r.UPDATE_SUCCESS_TOAST_TEXT})}catch(e){}}),[N,j,e.name,e.id,T,I,v,n,m]);return Object(i.useEffect)((()=>{null==x&&n("usesTableApi",!1)})),Object(u.jsx)(s.a.Fragment,null,w&&Object(u.jsx)(F,{action:e,applicationInfoErrorMsg:R,errors:c,readOnly:l,isLoading:C,editActionSecrets:t,editActionConfig:n,onConfirm:q,onCancel:V}),U&&Object(u.jsx)(y,{appId:null!==(A=S.snExternalServiceConfig[e.actionTypeId].appId)&&void 0!==A?A:""}),!U&&Object(u.jsx)(p,{onMigrate:z}),Object(u.jsx)(B.a,{action:e,errors:c,readOnly:l,isLoading:C,editActionSecrets:t,editActionConfig:n}),h&&U&&Object(u.jsx)(E,{message:R,appId:null!==(f=S.snExternalServiceConfig[e.actionTypeId].appId)&&void 0!==f?f:""}))}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return i.KibanaContextProvider})),n.d(t,"b",(function(){return s}));var i=n(35);const s=()=>Object(i.useKibana)()},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(13),s=n(0),r=n(1),o=n.n(r),c=n(36),a=n(5);const l=(e,t,n,r)=>n?Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(i.EuiSpacer,{size:"m"}),Object(a.jsx)(i.EuiCallOut,{size:"s",color:"warning",iconType:"alert","data-test-subj":"missingSecretsMessage",title:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.missingSecretsValuesLabel",{defaultMessage:"Sensitive information is not imported. Please enter value{encryptedFieldsLength, plural, one {} other {s}} for the following field{encryptedFieldsLength, plural, one {} other {s}}.",values:{encryptedFieldsLength:t}})}),Object(a.jsx)(i.EuiSpacer,{size:"m"})):e?Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(i.EuiSpacer,{size:"s"}),Object(a.jsx)(i.EuiText,{size:"s","data-test-subj":"rememberValuesMessage"},Object(a.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.rememberValueLabel",defaultMessage:"Remember {encryptedFieldsLength, plural, one {this} other {these}} value. You must reenter {encryptedFieldsLength, plural, one {it} other {them}} each time you edit the connector.",values:{encryptedFieldsLength:t}})),Object(a.jsx)(i.EuiSpacer,{size:"s"})):Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(i.EuiSpacer,{size:"s"}),Object(a.jsx)(i.EuiCallOut,{size:"s",iconType:"iInCircle","data-test-subj":"reenterValuesMessage",title:r}),Object(a.jsx)(i.EuiSpacer,{size:"m"}))},73:function(e,t,n){"use strict";n.r(t),n.d(t,"API_URL_LABEL",(function(){return s})),n.d(t,"API_URL_HELPTEXT",(function(){return r})),n.d(t,"API_URL_REQUIRED",(function(){return o})),n.d(t,"API_URL_INVALID",(function(){return c})),n.d(t,"API_URL_REQUIRE_HTTPS",(function(){return a})),n.d(t,"AUTHENTICATION_LABEL",(function(){return l})),n.d(t,"REMEMBER_VALUES_LABEL",(function(){return u})),n.d(t,"REENTER_VALUES_LABEL",(function(){return d})),n.d(t,"USERNAME_LABEL",(function(){return p})),n.d(t,"USERNAME_REQUIRED",(function(){return g})),n.d(t,"PASSWORD_LABEL",(function(){return b})),n.d(t,"PASSWORD_REQUIRED",(function(){return A})),n.d(t,"TITLE_REQUIRED",(function(){return f})),n.d(t,"INCIDENT",(function(){return j})),n.d(t,"SECURITY_INCIDENT",(function(){return m})),n.d(t,"SHORT_DESCRIPTION_LABEL",(function(){return T})),n.d(t,"DESCRIPTION_LABEL",(function(){return x})),n.d(t,"COMMENTS_LABEL",(function(){return I})),n.d(t,"CHOICES_API_ERROR",(function(){return E})),n.d(t,"CATEGORY_LABEL",(function(){return O})),n.d(t,"SUBCATEGORY_LABEL",(function(){return v})),n.d(t,"URGENCY_LABEL",(function(){return y})),n.d(t,"SEVERITY_LABEL",(function(){return U})),n.d(t,"IMPACT_LABEL",(function(){return w})),n.d(t,"PRIORITY_LABEL",(function(){return S})),n.d(t,"API_INFO_ERROR",(function(){return L})),n.d(t,"INSTALL",(function(){return _})),n.d(t,"INSTALLATION_CALLOUT_TITLE",(function(){return C})),n.d(t,"UPDATE_SUCCESS_TOAST_TITLE",(function(){return h})),n.d(t,"UPDATE_SUCCESS_TOAST_TEXT",(function(){return M})),n.d(t,"VISIT_SN_STORE",(function(){return R})),n.d(t,"SETUP_DEV_INSTANCE",(function(){return k})),n.d(t,"SN_INSTANCE_LABEL",(function(){return N})),n.d(t,"UNKNOWN",(function(){return F})),n.d(t,"CORRELATION_ID",(function(){return P})),n.d(t,"CORRELATION_DISPLAY",(function(){return B})),n.d(t,"EVENT",(function(){return D})),n.d(t,"SOURCE",(function(){return z})),n.d(t,"EVENT_CLASS",(function(){return V})),n.d(t,"RESOURCE",(function(){return q})),n.d(t,"NODE",(function(){return W})),n.d(t,"METRIC_NAME",(function(){return Y})),n.d(t,"TYPE",(function(){return $})),n.d(t,"MESSAGE_KEY",(function(){return G})),n.d(t,"SEVERITY_REQUIRED",(function(){return H})),n.d(t,"SEVERITY_REQUIRED_LABEL",(function(){return K}));var i=n(0);const s=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.apiUrlTextFieldLabel",{defaultMessage:"ServiceNow instance URL"}),r=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.apiUrlHelpText",{defaultMessage:"Include the full URL."}),o=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.requiredApiUrlTextField",{defaultMessage:"URL is required."}),c=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.invalidApiUrlTextField",{defaultMessage:"URL is invalid."}),a=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.requireHttpsApiUrlTextField",{defaultMessage:"URL must start with https://."}),l=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.authenticationLabel",{defaultMessage:"Authentication"}),u=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.rememberValuesLabel",{defaultMessage:"Remember these values. You must reenter them each time you edit the connector."}),d=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.reenterValuesLabel",{defaultMessage:"You must authenticate each time you edit the connector."}),p=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.usernameTextFieldLabel",{defaultMessage:"Username"}),g=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.requiredUsernameTextField",{defaultMessage:"Username is required."}),b=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.passwordTextFieldLabel",{defaultMessage:"Password"}),A=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.requiredPasswordTextField",{defaultMessage:"Password is required."}),f=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.common.requiredShortDescTextField",{defaultMessage:"Short description is required."}),j=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.title",{defaultMessage:"Incident"}),m=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenowSIR.title",{defaultMessage:"Security Incident"}),T=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.titleFieldLabel",{defaultMessage:"Short description (required)"}),x=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.descriptionTextAreaFieldLabel",{defaultMessage:"Description"}),I=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.commentsTextAreaFieldLabel",{defaultMessage:"Additional comments"}),E=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.unableToGetChoicesMessage",{defaultMessage:"Unable to get choices"}),O=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.categoryTitle",{defaultMessage:"Category"}),v=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.subcategoryTitle",{defaultMessage:"Subcategory"}),y=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.urgencySelectFieldLabel",{defaultMessage:"Urgency"}),U=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.severitySelectFieldLabel",{defaultMessage:"Severity"}),w=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.impactSelectFieldLabel",{defaultMessage:"Impact"}),S=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.prioritySelectFieldLabel",{defaultMessage:"Priority"}),L=e=>i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.apiInfoError",{values:{status:e},defaultMessage:"Received status: {status} when attempting to get application information"}),_=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.install",{defaultMessage:"install"}),C=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.installationCalloutTitle",{defaultMessage:"To use this connector, first install the Elastic app from the ServiceNow app store."}),h=e=>i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.updateSuccessToastTitle",{defaultMessage:"{connectorName} connector updated",values:{connectorName:e}}),M=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.updateCalloutText",{defaultMessage:"Connector has been updated."}),R=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.visitSNStore",{defaultMessage:"Visit ServiceNow app store"}),k=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.setupDevInstance",{defaultMessage:"setup a developer instance"}),N=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.snInstanceLabel",{defaultMessage:"ServiceNow instance"}),F=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.unknown",{defaultMessage:"UNKNOWN"}),P=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.correlationID",{defaultMessage:"Correlation ID (optional)"}),B=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.correlationDisplay",{defaultMessage:"Correlation display (optional)"}),D=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenowITOM.event",{defaultMessage:"Event"}),z=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.sourceTextAreaFieldLabel",{defaultMessage:"Source"}),V=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.eventClassTextAreaFieldLabel",{defaultMessage:"Source instance"}),q=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.resourceTextAreaFieldLabel",{defaultMessage:"Resource"}),W=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.nodeTextAreaFieldLabel",{defaultMessage:"Node"}),Y=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.metricNameTextAreaFieldLabel",{defaultMessage:"Metric name"}),$=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.typeTextAreaFieldLabel",{defaultMessage:"Type"}),G=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.messageKeyTextAreaFieldLabel",{defaultMessage:"Message key"}),H=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.requiredSeverityTextField",{defaultMessage:"Severity is required."}),K=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.servicenow.severityRequiredSelectFieldLabel",{defaultMessage:"Severity (required)"})},76:function(e,t,n){"use strict";n.d(t,"d",(function(){return i.a})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d}));var i=n(21),s=n(7);const r=({connector_type_id:e,is_preconfigured:t,referenced_by_count:n,is_missing_secrets:i,...s})=>({actionTypeId:e,isPreconfigured:t,referencedByCount:n,isMissingSecrets:i,...s});async function o({http:e}){const t=await e.get(`${s.a}/connectors`);return t.map((e=>r(e)))}const c=({actionTypeId:e,isPreconfigured:t,...n})=>({...n,connector_type_id:e,is_preconfigured:t});async function a({http:e,connector:t}){return(({connector_type_id:e,is_preconfigured:t,is_missing_secrets:n,...i})=>({...i,actionTypeId:e,isPreconfigured:t,isMissingSecrets:n}))(await e.post(`${s.a}/connector`,{body:JSON.stringify(c(t))}))}async function l({ids:e,http:t}){const n=[],i=[];return await Promise.all(e.map((e=>t.delete(`${s.a}/connector/${encodeURIComponent(e)}`)))).then((function(e){n.push(...e)}),(function(e){i.push(...e)})),{successes:n,errors:i}}async function u({id:e,params:t,http:n}){return(({connector_id:e,service_message:t,...n})=>({...n,actionId:e,serviceMessage:t}))(await n.post(`${s.a}/connector/${encodeURIComponent(e)}/_execute`,{body:JSON.stringify({params:t})}))}async function d({http:e,connector:t,id:n}){return(({connector_type_id:e,is_preconfigured:t,is_missing_secrets:n,...i})=>({...i,actionTypeId:e,isPreconfigured:t,isMissingSecrets:n}))(await e.put(`${s.a}/connector/${encodeURIComponent(n)}`,{body:JSON.stringify({name:t.name,config:t.config,secrets:t.secrets})}))}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return c}));const i="{{rule.id}}:{{alert.id}}",s=e=>e.map((e=>({value:e.value,text:e.label}))),r=e=>null!=e.error||"failure"===e.status,o=(e,t)=>void 0!==t&&t.length>0&&null!=e,c=e=>null!=e&&((".servicenow"===e.actionTypeId||".servicenow-sir"===e.actionTypeId)&&!!e.config.usesTableApi)},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=({connector_id:e,service_message:t,...n})=>({...n,actionId:e,...t&&{serviceMessage:t}})},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(1),s=n.n(i),r=n(36),o=n(13),c=n(59),a=n(73),l=n(78),u=n(5);const d=({action:e,errors:t,isLoading:n,readOnly:d,editActionConfig:p})=>{const{docLinks:g}=Object(c.b)().services,{apiUrl:b}=e.config,A=Object(l.d)(b,t.apiUrl),f=Object(i.useCallback)((e=>{var t;return p("apiUrl",null!==(t=null==e?void 0:e.target.value)&&void 0!==t?t:"")}),[p]);return Object(u.jsx)(s.a.Fragment,null,Object(u.jsx)(o.EuiFormRow,{fullWidth:!0},Object(u.jsx)("p",null,Object(u.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.serviceNowAction.apiUrlHelpLabel",defaultMessage:"Provide the full URL to the desired ServiceNow instance. If you don't have one, {instance}.",values:{instance:Object(u.jsx)(o.EuiLink,{href:g.links.alerting.serviceNowAction,target:"_blank"},a.SETUP_DEV_INSTANCE)}}))),Object(u.jsx)(o.EuiSpacer,{size:"l"}),Object(u.jsx)(o.EuiFormRow,{id:"apiUrl",fullWidth:!0,error:t.apiUrl,isInvalid:A,label:a.API_URL_LABEL,helpText:a.API_URL_HELPTEXT},Object(u.jsx)(o.EuiFieldText,{fullWidth:!0,isInvalid:A,name:"apiUrl",readOnly:d,value:b||"","data-test-subj":"credentialsApiUrlFromInput",onChange:f,onBlur:()=>{b||f()},disabled:n})))},p=Object(i.memo)(d)},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(1),s=n.n(i),r=n(13),o=n(73),c=n(78),a=n(72),l=n(5);const u=({action:e,errors:t,isLoading:n,readOnly:u,editActionSecrets:d})=>{var p;const{username:g,password:b}=e.secrets,A=Object(c.d)(g,t.username),f=Object(c.d)(b,t.password),j=Object(i.useCallback)((e=>{var t;return d("username",null!==(t=null==e?void 0:e.target.value)&&void 0!==t?t:"")}),[d]),m=Object(i.useCallback)((e=>{var t;return d("password",null!==(t=null==e?void 0:e.target.value)&&void 0!==t?t:"")}),[d]);return Object(l.jsx)(s.a.Fragment,null,Object(l.jsx)(r.EuiFormRow,{fullWidth:!0},Object(a.a)(!e.id,2,null!==(p=e.isMissingSecrets)&&void 0!==p&&p,o.REENTER_VALUES_LABEL)),Object(l.jsx)(r.EuiFormRow,{id:"connector-servicenow-username",fullWidth:!0,error:t.username,isInvalid:A,label:o.USERNAME_LABEL},Object(l.jsx)(r.EuiFieldText,{fullWidth:!0,isInvalid:A,readOnly:u,name:"connector-servicenow-username",value:g||"","data-test-subj":"connector-servicenow-username-form-input",onChange:j,onBlur:()=>{g||j()},disabled:n})),Object(l.jsx)(r.EuiFormRow,{id:"connector-servicenow-password",fullWidth:!0,error:t.password,isInvalid:f,label:o.PASSWORD_LABEL},Object(l.jsx)(r.EuiFieldPassword,{fullWidth:!0,readOnly:u,isInvalid:f,name:"connector-servicenow-password",value:b||"","data-test-subj":"connector-servicenow-password-form-input",onChange:m,onBlur:()=>{b||m()},disabled:n})))},d=Object(i.memo)(u)}}]);