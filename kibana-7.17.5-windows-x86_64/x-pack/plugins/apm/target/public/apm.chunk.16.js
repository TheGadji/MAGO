/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.apm_bundle_jsonpfunction=window.apm_bundle_jsonpfunction||[]).push([[16],{459:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(0),i=a(1),o=a.n(i),s=a(25),c=a.n(s),r=a(78),d=a(178);const u=l.i18n.translate("xpack.apm.tutorial.agent_config.defaultStandaloneConfig",{defaultMessage:"Default Standalone configuration"});var p=a(21);function f({options:e,selectedOption:t,onChange:a,fleetLink:i}){const{fleetAgents:s,standalone:c}=Object(p.groupBy)(e,"type"),r=(null==c?void 0:c.map((({key:e,label:t})=>({key:e,label:t}))))||[],d=null!=s&&s.length?[{key:"fleet_policies",label:l.i18n.translate("xpack.apm.tutorial.agent_config.fleetPoliciesLabel",{defaultMessage:"Fleet policies"}),options:s.map((({key:e,label:t})=>({key:e,label:t})))}]:[];return o.a.createElement(n.EuiFormRow,{label:l.i18n.translate("xpack.apm.tutorial.agent_config.choosePolicyLabel",{defaultMessage:"Choose policy"}),labelAppend:i&&o.a.createElement(n.EuiText,{size:"xs"},o.a.createElement(n.EuiLink,{href:i.href},i.label)),helpText:l.i18n.translate("xpack.apm.tutorial.agent_config.choosePolicy.helper",{defaultMessage:"Adds the selected policy configuration to the snippet below."})},o.a.createElement(n.EuiComboBox,{"data-test-subj":`policySelector_${null==t?void 0:t.key}`,isClearable:!1,singleSelection:{asPlainText:!0},options:[...r,...d],selectedOptions:t?[{key:t.key,label:t.label}]:[],onChange:t=>{const n=e.find((({key:e})=>e===t[0].key));a(n)}}))}const g=c.a.div.withConfig({displayName:"CentralizedContainer",componentId:"sc-e43dnk-0"})(["display:flex;justify-content:center;align-items:center;"]),b=l.i18n.translate("xpack.apm.tutorial.agent_config.manageFleetPolicies",{defaultMessage:"Manage fleet policies"}),m=l.i18n.translate("xpack.apm.tutorial.agent_config.getStartedWithFleet",{defaultMessage:"Get started with fleet"}),h={fleetAgents:[],cloudStandaloneSetup:void 0,isFleetEnabled:!1};function k({isFleetEnabled:e,hasFleetAgents:t,basePath:a}){if(e)return t?{label:b,href:`${a}/app/fleet#/policies`}:{label:m,href:`${a}/app/integrations#/detail/apm-${r.b}/overview`}}t.default=function({variantId:e,http:t,basePath:a,isCloudEnabled:l}){const[s,c]=Object(i.useState)(h),[p,b]=Object(i.useState)(!0),[m,y]=Object(i.useState)();Object(i.useEffect)((()=>{!async function(){b(!0);try{const e=await t.get("/internal/apm/fleet/agents");e&&c(e)}catch(e){b(!1),console.error("Error while fetching fleet agents.",e)}}()}),[t]);const S=Object(i.useMemo)((()=>{const e=function({isCloudEnabled:e,data:t}){var a,n,l;const i=!(!e||null===(a=t.cloudStandaloneSetup)||void 0===a||!a.apmServerUrl),o=t.fleetAgents.map((e=>({key:e.id,type:"fleetAgents",label:e.name,apmServerUrl:e.apmServerUrl,secretToken:e.secretToken,isVisible:!0,isSelected:e.id===r.a}))),s=o.some((({isSelected:e})=>e));return[{key:"cloud",type:"standalone",label:u,apmServerUrl:null===(n=t.cloudStandaloneSetup)||void 0===n?void 0:n.apmServerUrl,secretToken:null===(l=t.cloudStandaloneSetup)||void 0===l?void 0:l.secretToken,isVisible:i&&!s,isSelected:!s},{key:"onPrem",type:"standalone",label:u,apmServerUrl:"http://localhost:8200",secretToken:"",isVisible:!i&&!s,isSelected:!s},...o].filter((({isVisible:e})=>e))}({isCloudEnabled:l,data:s}),t=e.find((({isSelected:e})=>e));return y(t),b(!1),e}),[s,l]);if(p)return o.a.createElement(g,{"data-test-subj":"loading"},o.a.createElement(n.EuiLoadingSpinner,null));const v=Object(d.a)({variantId:e,policyDetails:{apmServerUrl:null==m?void 0:m.apmServerUrl,secretToken:null==m?void 0:m.secretToken}}),E=!!s.fleetAgents.length;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{options:S,selectedOption:m,onChange:e=>y(e),fleetLink:k({isFleetEnabled:s.isFleetEnabled,hasFleetAgents:E,basePath:a})}),o.a.createElement(n.EuiSpacer,null),o.a.createElement(n.EuiCodeBlock,{isCopyable:!0,language:"bash","data-test-subj":"commands"},v))}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));const n="policy-elastic-agent-on-cloud",l="7.16.0"}}]);