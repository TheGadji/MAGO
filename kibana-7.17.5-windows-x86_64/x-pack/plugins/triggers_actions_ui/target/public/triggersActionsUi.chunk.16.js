/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[16],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"API_URL_LABEL",(function(){return s})),n.d(t,"API_URL_REQUIRED",(function(){return r})),n.d(t,"API_URL_INVALID",(function(){return a})),n.d(t,"API_URL_REQUIRE_HTTPS",(function(){return o})),n.d(t,"ORG_ID_LABEL",(function(){return c})),n.d(t,"ORG_ID_REQUIRED",(function(){return l})),n.d(t,"API_KEY_LABEL",(function(){return u})),n.d(t,"REMEMBER_VALUES_LABEL",(function(){return p})),n.d(t,"REENTER_VALUES_LABEL",(function(){return d})),n.d(t,"API_KEY_ID_LABEL",(function(){return g})),n.d(t,"API_KEY_ID_REQUIRED",(function(){return A})),n.d(t,"API_KEY_SECRET_LABEL",(function(){return I})),n.d(t,"API_KEY_SECRET_REQUIRED",(function(){return E})),n.d(t,"MAPPING_FIELD_NAME",(function(){return _})),n.d(t,"MAPPING_FIELD_DESC",(function(){return f})),n.d(t,"MAPPING_FIELD_COMMENTS",(function(){return U})),n.d(t,"DESCRIPTION_REQUIRED",(function(){return T})),n.d(t,"NAME_REQUIRED",(function(){return R})),n.d(t,"INCIDENT_TYPES_API_ERROR",(function(){return m})),n.d(t,"SEVERITY_API_ERROR",(function(){return y}));var i=n(0);const s=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.apiUrlTextFieldLabel",{defaultMessage:"URL"}),r=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requiredApiUrlTextField",{defaultMessage:"URL is required."}),a=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.invalidApiUrlTextField",{defaultMessage:"URL is invalid."}),o=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requireHttpsApiUrlTextField",{defaultMessage:"URL must start with https://."}),c=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.orgId",{defaultMessage:"Organization ID"}),l=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requiredOrgIdTextField",{defaultMessage:"Organization ID is required"}),u=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.apiKey",{defaultMessage:"API key"}),p=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.rememberValuesLabel",{defaultMessage:"Remember these values. You must reenter them each time you edit the connector."}),d=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.reenterValuesLabel",{defaultMessage:"ID and secret are encrypted. Please reenter values for these fields."}),g=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.apiKeyId",{defaultMessage:"ID"}),A=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requiredApiKeyIdTextField",{defaultMessage:"ID is required"}),I=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.apiKeySecret",{defaultMessage:"Secret"}),E=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requiredApiKeySecretTextField",{defaultMessage:"Secret is required"}),_=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.mappingFieldShortDescription",{defaultMessage:"Name"}),f=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.mappingFieldDescription",{defaultMessage:"Description"}),U=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.mappingFieldComments",{defaultMessage:"Comments"}),T=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requiredDescriptionTextField",{defaultMessage:"Description is required."}),R=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.requiredNameTextField",{defaultMessage:"Name is required."}),m=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.unableToGetIncidentTypesMessage",{defaultMessage:"Unable to get incident types"}),y=i.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.resilient.unableToGetSeverityMessage",{defaultMessage:"Unable to get severity"})}}]);