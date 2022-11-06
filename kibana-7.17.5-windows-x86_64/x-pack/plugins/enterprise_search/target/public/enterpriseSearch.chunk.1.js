/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.enterpriseSearch_bundle_jsonpfunction=window.enterpriseSearch_bundle_jsonpfunction||[]).push([[1],{161:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var i=n(10),s=n.n(i),a=n(24),r=n(12),o=n(36),u=n(1),c=n(13),d=n(5),l=n(11);const p=({productName:e,cloudDeploymentLink:t})=>Object(l.jsx)(r.EuiPageContent,null,Object(l.jsx)(r.EuiSteps,{headingElement:"h2",steps:[{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step1.title",{defaultMessage:"Edit your deployment’s configuration"}),children:Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step1.instruction1",defaultMessage:"Visit the Elastic Cloud console to {editDeploymentLink}.",values:{editDeploymentLink:t?Object(l.jsx)(r.EuiLink,{href:t+"/edit",target:"_blank"},u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step1.instruction1LinkText",{defaultMessage:"edit your deployment"})):u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step1.instruction1LinkText",{defaultMessage:"edit your deployment"})}})))},{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step2.title",{defaultMessage:"Enable Enterprise Search for your deployment"}),children:Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step2.instruction1",defaultMessage:"Once you're within your deployment's “Edit deployment” screen, scroll to the Enterprise Search configuration and select “Enable”."})))},{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step3.title",{defaultMessage:"Configure your Enterprise Search instance"}),children:Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step3.instruction1",defaultMessage:"After enabling Enterprise Search for your instance you can customize the instance, including fault tolerance, RAM, and other {optionsLink}.",values:{optionsLink:Object(l.jsx)(r.EuiLink,{href:`${d.a.enterpriseSearchBase}/configuration.html`,target:"_blank"},u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step3.instruction1LinkText",{defaultMessage:"configurable options"}))}})))},{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step4.title",{defaultMessage:"Save your deployment configuration"}),children:Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step4.instruction1",defaultMessage:"Once you click “Save”, you'll see a confirmation dialog summarizing the changes being made to your deployment. Once you confirm, your deployment will process the configuration change, which should only take a few moments."})))},{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step5.title",{defaultMessage:"{productName} is now available to use",values:{productName:e}}),children:Object(l.jsx)(r.EuiCallOut,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step5.instruction1",defaultMessage:"For {productName} indices that contain time-series statistical data, you may want to {configurePolicyLink}, so as to ensure optimal performance and cost-effective storage in the long run.",values:{productName:e,configurePolicyLink:Object(l.jsx)(r.EuiLink,{href:`${d.a.cloudBase}/ec-configure-index-management.html`,target:"_blank"},u.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step5.instruction1LinkText",{defaultMessage:"configure an index lifecycle policy"}))}})))}]})),h=u.i18n.translate("xpack.enterpriseSearch.setupGuide.title",{defaultMessage:"Setup Guide"}),x=({productName:e,standardAuthLink:t,elasticsearchNativeAuthLink:n})=>Object(l.jsx)(r.EuiPageContent,null,Object(l.jsx)(r.EuiSteps,{headingElement:"h2",steps:[{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.step1.title",{defaultMessage:"Add your {productName} host URL to your Kibana configuration",values:{productName:e}}),children:Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.step1.instruction1",defaultMessage:"In your {configFile} file, set {configSetting} to the URL of your {productName} instance. For example:",values:{productName:e,configFile:Object(l.jsx)(r.EuiCode,null,"config/kibana.yml"),configSetting:Object(l.jsx)(r.EuiCode,null,"enterpriseSearch.host")}})),Object(l.jsx)(r.EuiCodeBlock,{language:"yml"},"enterpriseSearch.host: 'http://localhost:3002'"))},{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.step2.title",{defaultMessage:"Reload your Kibana instance"}),children:Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.step2.instruction1",defaultMessage:"Restart Kibana to pick up the configuration changes from the previous step."})),Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.step2.instruction2",defaultMessage:"If you’re using {elasticsearchNativeAuthLink} in {productName}, you’re all set. Your users can now access {productName} in Kibana with their current {productName} access and permissions.",values:{productName:e,elasticsearchNativeAuthLink:n?Object(l.jsx)(r.EuiLink,{href:n,target:"_blank"},"Elasticsearch Native Auth"):"Elasticsearch Native Auth"}})))},{title:u.i18n.translate("xpack.enterpriseSearch.setupGuide.step3.title",{defaultMessage:"Troubleshooting issues"}),children:Object(l.jsx)(s.a.Fragment,null,Object(l.jsx)(r.EuiAccordion,{buttonContent:u.i18n.translate("xpack.enterpriseSearch.troubleshooting.differentEsClusters.title",{defaultMessage:"{productName} and Kibana are on different Elasticsearch clusters",values:{productName:e}}),id:"differentEsClusters",paddingSize:"s"},Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.troubleshooting.differentEsClusters.description",defaultMessage:"This plugin does not currently support {productName} and Kibana running on different clusters.",values:{productName:e}})))),Object(l.jsx)(r.EuiSpacer,null),Object(l.jsx)(r.EuiAccordion,{buttonContent:u.i18n.translate("xpack.enterpriseSearch.troubleshooting.differentAuth.title",{defaultMessage:"{productName} and Kibana are on different authentication methods",values:{productName:e}}),id:"differentAuth",paddingSize:"s"},Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.troubleshooting.differentAuth.description",defaultMessage:"This plugin does not currently support {productName} and Kibana operating on different authentication methods, for example, {productName} using a different SAML provider than Kibana.",values:{productName:e}})))),Object(l.jsx)(r.EuiSpacer,null),Object(l.jsx)(r.EuiAccordion,{buttonContent:u.i18n.translate("xpack.enterpriseSearch.troubleshooting.standardAuth.title",{defaultMessage:"{productName} on Standard authentication is not supported",values:{productName:e}}),id:"standardAuth",paddingSize:"s"},Object(l.jsx)(r.EuiText,null,Object(l.jsx)("p",null,Object(l.jsx)(c.FormattedMessage,{id:"xpack.enterpriseSearch.troubleshooting.standardAuth.description",defaultMessage:"This plugin does not fully support {productName} on {standardAuthLink}. Users created in {productName} must have Kibana access. Users created in Kibana will not see {productName} in the navigation menu.",values:{productName:e,standardAuthLink:t?Object(l.jsx)(r.EuiLink,{href:t,target:"_blank"},"Standard Auth"):"Standard Auth"}})))))}]}));n(293);const b=({children:e,productName:t,productEuiIcon:n,standardAuthLink:i,elasticsearchNativeAuthLink:s})=>{const{cloud:u}=Object(a.useValues)(o.a),c=Boolean(u.isCloudEnabled),d=u.deploymentUrl||"";return Object(l.jsx)(r.EuiPage,{className:"setupGuide","data-test-subj":"setupGuide"},Object(l.jsx)(r.EuiPageSideBar,{className:"setupGuide__sidebar"},Object(l.jsx)(r.EuiText,{color:"subdued",size:"s"},Object(l.jsx)("strong",null,h)),Object(l.jsx)(r.EuiSpacer,{size:"s"}),Object(l.jsx)(r.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},Object(l.jsx)(r.EuiFlexItem,{grow:!1},Object(l.jsx)(r.EuiIcon,{type:n,size:"l"})),Object(l.jsx)(r.EuiFlexItem,null,Object(l.jsx)(r.EuiTitle,{size:"m"},Object(l.jsx)("h1",null,t)))),e),Object(l.jsx)(r.EuiPageBody,{className:"setupGuide__body"},c?Object(l.jsx)(p,{productName:t,cloudDeploymentLink:d}):Object(l.jsx)(x,{productName:t,standardAuthLink:i,elasticsearchNativeAuthLink:s})))}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(10),s=n.n(i),a=n(24),r=n(12),o=n(13),u=n(36),c=n(34),d=(n(273),n(11));const l=()=>{const{config:e}=Object(a.useValues)(u.a);return Object(d.jsx)(r.EuiEmptyPrompt,{iconType:"alert",iconColor:"danger",title:Object(d.jsx)("h2",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.title",defaultMessage:"Unable to connect"})),titleSize:"l",body:Object(d.jsx)(s.a.Fragment,null,Object(d.jsx)("p",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description1",defaultMessage:"We can’t establish a connection to Enterprise Search at the host URL: {enterpriseSearchUrl}",values:{enterpriseSearchUrl:Object(d.jsx)(r.EuiCode,null,e.host)}})),Object(d.jsx)("ol",{className:"troubleshootingSteps"},Object(d.jsx)("li",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description2",defaultMessage:"Ensure the host URL is configured correctly in {configFile}.",values:{configFile:Object(d.jsx)(r.EuiCode,null,"config/kibana.yml")}})),Object(d.jsx)("li",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description3",defaultMessage:"Confirm that the Enterprise Search server is responsive."})),Object(d.jsx)("li",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.troubleshootAuth",defaultMessage:"Check your user authentication:"}),Object(d.jsx)("ul",null,Object(d.jsx)("li",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.troubleshootAuthNative",defaultMessage:"You must authenticate using Elasticsearch Native auth, SSO/SAML, or OpenID Connect."})),Object(d.jsx)("li",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.troubleshootAuthSAML",defaultMessage:"If using an external SSO provider, such as SAML or OpenID Connect, your SAML/OIDC realm must also be set up on Enterprise Search."})))),Object(d.jsx)("li",null,Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description4",defaultMessage:"Review the Setup guide or check your server log for {pluginLog} log messages.",values:{pluginLog:Object(d.jsx)(r.EuiCode,null,"[enterpriseSearch][plugins]")}})))),actions:[Object(d.jsx)(c.b,{iconType:"help",fill:!0,to:"/setup_guide"},Object(d.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.setupGuideCta",defaultMessage:"Review setup guide"}))]})}},177:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));const i=e=>e&&e.endsWith("/")?e.slice(0,-1):e,s=e=>e&&e.startsWith("/")?e.substring(1):e},25:function(e,t,n){"use strict";var i,s=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function o(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},i=[],s=0;s<e.length;s++){var a=e[s],u=t.base?a[0]+t.base:a[0],c=n[u]||0,d="".concat(u," ").concat(c);n[u]=c+1;var l=o(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(r[l].references++,r[l].updater(p)):r.push({identifier:d,updater:m(p,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,s);else{var a=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function h(e,t,n){var i=n.css,s=n.media,a=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var x=null,b=0;function m(e,t){var n,i,s;if(t.singleton){var a=b++;n=x||(x=c(t)),i=p.bind(null,n,a,!1),s=p.bind(null,n,a,!0)}else n=c(t),i=h.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var s=o(n[i]);r[s].references--}for(var a=u(e,t),c=0;c<n.length;c++){var d=o(n[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=a}}}},26:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var s=(r=i,o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(u," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([s]).join("\n")}var r,o,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(s[r]=!0)}for(var o=0;o<e.length;o++){var u=[].concat(e[o]);i&&s[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},273:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(274);case"v7light":return n(276);case"v8dark":return n(278);case"v8light":return n(280)}},274:function(e,t,n){var i=n(25),s=n(275);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},275:function(e,t,n){(t=n(26)(!1)).push([e.i,".troubleshootingSteps{text-align:left}.troubleshootingSteps li{margin:8px auto}.troubleshootingSteps ul,.troubleshootingSteps ol{margin-bottom:0}\n",""]),e.exports=t},276:function(e,t,n){var i=n(25),s=n(277);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},277:function(e,t,n){(t=n(26)(!1)).push([e.i,".troubleshootingSteps{text-align:left}.troubleshootingSteps li{margin:8px auto}.troubleshootingSteps ul,.troubleshootingSteps ol{margin-bottom:0}\n",""]),e.exports=t},278:function(e,t,n){var i=n(25),s=n(279);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},279:function(e,t,n){(t=n(26)(!1)).push([e.i,".troubleshootingSteps{text-align:left}.troubleshootingSteps li{margin:8px auto}.troubleshootingSteps ul,.troubleshootingSteps ol{margin-bottom:0}\n",""]),e.exports=t},280:function(e,t,n){var i=n(25),s=n(281);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},281:function(e,t,n){(t=n(26)(!1)).push([e.i,".troubleshootingSteps{text-align:left}.troubleshootingSteps li{margin:8px auto}.troubleshootingSteps ul,.troubleshootingSteps ol{margin-bottom:0}\n",""]),e.exports=t},293:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(294);case"v7light":return n(296);case"v8dark":return n(298);case"v8light":return n(300)}},294:function(e,t,n){var i=n(25),s=n(295);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},295:function(e,t,n){(t=n(26)(!1)).push([e.i,".setupGuide{padding:0;min-height:100vh}.setupGuide__sidebar{flex-basis:300px;flex-shrink:0;padding:24px;margin-right:0;background-color:#25262E;border-color:#343741;border-style:solid;border-width:0 0 1px 0}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{flex-basis:500px}}.setupGuide__body{align-self:start;padding:24px}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__body{padding:40px 50px}}.setupGuide__thumbnail{display:block;max-width:100%;height:auto;margin:24px auto}\n",""]),e.exports=t},296:function(e,t,n){var i=n(25),s=n(297);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},297:function(e,t,n){(t=n(26)(!1)).push([e.i,".setupGuide{padding:0;min-height:100vh}.setupGuide__sidebar{flex-basis:300px;flex-shrink:0;padding:24px;margin-right:0;background-color:#F5F7FA;border-color:#D3DAE6;border-style:solid;border-width:0 0 1px 0}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{flex-basis:500px}}.setupGuide__body{align-self:start;padding:24px}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__body{padding:40px 50px}}.setupGuide__thumbnail{display:block;max-width:100%;height:auto;margin:24px auto}\n",""]),e.exports=t},298:function(e,t,n){var i=n(25),s=n(299);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},299:function(e,t,n){(t=n(26)(!1)).push([e.i,".setupGuide{padding:0;min-height:100vh}.setupGuide__sidebar{flex-basis:300px;flex-shrink:0;padding:24px;margin-right:0;background-color:#25262E;border-color:#343741;border-style:solid;border-width:0 0 1px 0}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{flex-basis:500px}}.setupGuide__body{align-self:start;padding:24px}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__body{padding:40px 50px}}.setupGuide__thumbnail{display:block;max-width:100%;height:auto;margin:24px auto}\n",""]),e.exports=t},300:function(e,t,n){var i=n(25),s=n(301);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};i(s,a);e.exports=s.locals||{}},301:function(e,t,n){(t=n(26)(!1)).push([e.i,".setupGuide{padding:0;min-height:100vh}.setupGuide__sidebar{flex-basis:300px;flex-shrink:0;padding:24px;margin-right:0;background-color:#F5F7FA;border-color:#D3DAE6;border-style:solid;border-width:0 0 1px 0}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{flex-basis:500px}}.setupGuide__body{align-self:start;padding:24px}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__body{padding:40px 50px}}.setupGuide__thumbnail{display:block;max-width:100%;height:auto;margin:24px auto}\n",""]),e.exports=t},42:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return d}));var i=n(24),s=n(0),a=n(31);const r=Object(i.kea)({path:["enterprise_search","telemetry_logic"],actions:{sendTelemetry:({action:e,metric:t,product:n})=>({action:e,metric:t,product:n}),sendEnterpriseSearchTelemetry:({action:e,metric:t})=>({action:e,metric:t}),sendAppSearchTelemetry:({action:e,metric:t})=>({action:e,metric:t}),sendWorkplaceSearchTelemetry:({action:e,metric:t})=>({action:e,metric:t})},listeners:({actions:e})=>({sendTelemetry:async({action:e,metric:t,product:n})=>{const{http:i}=a.a.values;try{const a=JSON.stringify({product:n,action:e,metric:t});await i.put("/internal/enterprise_search/stats",{headers:s.d,body:a})}catch(e){throw new Error("Unable to send telemetry")}},sendEnterpriseSearchTelemetry:({action:t,metric:n})=>e.sendTelemetry({action:t,metric:n,product:"enterprise_search"}),sendAppSearchTelemetry:({action:t,metric:n})=>e.sendTelemetry({action:t,metric:n,product:"app_search"}),sendWorkplaceSearchTelemetry:({action:t,metric:n})=>e.sendTelemetry({action:t,metric:n,product:"workplace_search"})})});var o=n(10);const u=({action:e,metric:t})=>{const{sendTelemetry:n}=Object(i.useActions)(r);return Object(o.useEffect)((()=>{n({action:e,metric:t,product:"enterprise_search"})}),[e,t]),null},c=({action:e,metric:t})=>{const{sendTelemetry:n}=Object(i.useActions)(r);return Object(o.useEffect)((()=>{n({action:e,metric:t,product:"app_search"})}),[e,t]),null},d=({action:e,metric:t})=>{const{sendTelemetry:n}=Object(i.useActions)(r);return Object(o.useEffect)((()=>{n({action:e,metric:t,product:"workplace_search"})}),[e,t]),null}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return b}));var i=n(10),s=n(24),a=n(36),r=n(0),o=n(177),u=n(31),c=n(34);const d=e=>{const{history:t}=Object(s.useValues)(a.a),n=Object(o.a)(t.location.pathname).split("/");return e.map(((e,t)=>({text:e,path:n[t]?"/"+n.slice(0,t+1).join("/"):void 0})))},l=(e=[])=>(e=>{const{navigateToUrl:t,history:n}=Object(s.useValues)(a.a),{http:i}=Object(s.useValues)(u.a);return e.map((({text:s,path:a,shouldNotCreateHref:r},o)=>{const u={text:s},d=o===e.length-1;return a&&!d&&(u.href=Object(c.g)(a,{history:n,http:i},{shouldNotCreateHref:r}),u.onClick=e=>{Object(c.i)(e)||(e.preventDefault(),t(a,{shouldNotCreateHref:r}))}),u}))})([{text:r.b.NAME,path:r.b.URL,shouldNotCreateHref:!0},...e]),p=e=>e.join(" - "),h=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(s.useValues)(a.a),o=((e=[])=>p([...e,r.b.NAME]))(m(e)),u=d(e),c=l(u);return Object(i.useEffect)((()=>{t(c),n(o)}),[e]),null},x=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(s.useValues)(a.a),o=((e=[])=>p([...e,r.a.NAME]))(m(e)),u=((e=[])=>l([{text:r.a.NAME,path:"/"},...e]))(d(e));return Object(i.useEffect)((()=>{t(u),n(o)}),[e]),null},b=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(s.useValues)(a.a),o=((e=[])=>p([...e,r.h.NAME]))(m(e)),u=((e=[])=>l([{text:r.h.NAME,path:"/"},...e]))(d(e));return Object(i.useEffect)((()=>{t(u),n(o)}),[e]),null},m=e=>e.slice().reverse()}}]);