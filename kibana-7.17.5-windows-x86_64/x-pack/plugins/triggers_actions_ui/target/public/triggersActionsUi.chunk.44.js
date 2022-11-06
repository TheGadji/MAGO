/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[44],{274:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return b}));var n=s(1),i=s.n(n),r=s(13),a=s(0),o=s(36),l=s(59),c=s(72),u=s(5);const b=({action:e,editActionSecrets:t,errors:s,readOnly:n})=>{var b;const{webhookUrl:d}=e.secrets,{docLinks:j}=Object(l.b)().services,g=void 0!==s.webhookUrl&&s.webhookUrl.length>0&&void 0!==d;return Object(u.jsx)(i.a.Fragment,null,Object(u.jsx)(r.EuiFormRow,{id:"webhookUrl",fullWidth:!0,helpText:Object(u.jsx)(r.EuiLink,{href:j.links.alerting.teamsAction,target:"_blank"},Object(u.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.teamsAction.webhookUrlHelpLabel",defaultMessage:"Create a Microsoft Teams Webhook URL"})),error:s.webhookUrl,isInvalid:g,label:a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.teamsAction.webhookUrlTextFieldLabel",{defaultMessage:"Webhook URL"})},Object(u.jsx)(i.a.Fragment,null,Object(c.a)(!e.id,1,null!==(b=e.isMissingSecrets)&&void 0!==b&&b,a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.teamsAction.reenterValueLabel",{defaultMessage:"This URL is encrypted. Please reenter a value for this field."})),Object(u.jsx)(r.EuiFieldText,{fullWidth:!0,isInvalid:g,name:"webhookUrl",readOnly:n,value:d||"","data-test-subj":"teamsWebhookUrlInput",onChange:e=>{t("webhookUrl",e.target.value)},onBlur:()=>{d||t("webhookUrl","")}}))))}},59:function(e,t,s){"use strict";s.d(t,"a",(function(){return n.KibanaContextProvider})),s.d(t,"b",(function(){return i}));var n=s(35);const i=()=>Object(n.useKibana)()},72:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s(13),i=s(0),r=s(1),a=s.n(r),o=s(36),l=s(5);const c=(e,t,s,r)=>s?Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)(n.EuiSpacer,{size:"m"}),Object(l.jsx)(n.EuiCallOut,{size:"s",color:"warning",iconType:"alert","data-test-subj":"missingSecretsMessage",title:i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.missingSecretsValuesLabel",{defaultMessage:"Sensitive information is not imported. Please enter value{encryptedFieldsLength, plural, one {} other {s}} for the following field{encryptedFieldsLength, plural, one {} other {s}}.",values:{encryptedFieldsLength:t}})}),Object(l.jsx)(n.EuiSpacer,{size:"m"})):e?Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)(n.EuiSpacer,{size:"s"}),Object(l.jsx)(n.EuiText,{size:"s","data-test-subj":"rememberValuesMessage"},Object(l.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.rememberValueLabel",defaultMessage:"Remember {encryptedFieldsLength, plural, one {this} other {these}} value. You must reenter {encryptedFieldsLength, plural, one {it} other {them}} each time you edit the connector.",values:{encryptedFieldsLength:t}})),Object(l.jsx)(n.EuiSpacer,{size:"s"})):Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)(n.EuiSpacer,{size:"s"}),Object(l.jsx)(n.EuiCallOut,{size:"s",iconType:"iInCircle","data-test-subj":"reenterValuesMessage",title:r}),Object(l.jsx)(n.EuiSpacer,{size:"m"}))}}]);