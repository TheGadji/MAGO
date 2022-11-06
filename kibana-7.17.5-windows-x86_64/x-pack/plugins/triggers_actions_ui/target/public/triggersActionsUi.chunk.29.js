/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[29],{46:function(e,t,a){"use strict";a.r(t),a.d(t,"EmailParamsFields",(function(){return b})),a.d(t,"default",(function(){return b}));var n=a(1),r=a.n(n),i=a(36),s=a(13),o=a(0),l=a(77),c=a(74),u=a(5);const b=({actionParams:e,editAction:t,index:a,errors:b,messageVariables:d,defaultMessage:g})=>{var p,m;const{to:f,cc:x,bcc:h,subject:v,message:j}=e,k=f?f.map((e=>({label:e}))):[],w=x?x.map((e=>({label:e}))):[],O=h?h.map((e=>({label:e}))):[],[y,V]=Object(n.useState)(!1),[A,P]=Object(n.useState)(!1),[[T,E],C]=Object(n.useState)([!1,g]);Object(n.useEffect)((()=>{(null==e||!e.message||T&&(null==e?void 0:e.message)===E&&E!==g)&&(C([!0,g]),t("message",g,a))}),[g]);const I=void 0!==f&&void 0!==b.to&&b.to.length>0,M=void 0!==v&&void 0!==b.subject&&b.subject.length>0,B=void 0!==b.cc&&b.cc.length>0&&void 0!==x,S=void 0!==b.bcc&&b.bcc.length>0&&void 0!==h;return Object(u.jsx)(r.a.Fragment,null,Object(u.jsx)(s.EuiFormRow,{fullWidth:!0,error:b.to,isInvalid:I,label:o.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.recipientTextFieldLabel",{defaultMessage:"To"}),labelAppend:Object(u.jsx)(r.a.Fragment,null,Object(u.jsx)("span",null,y?null:Object(u.jsx)(s.EuiButtonEmpty,{size:"xs",onClick:()=>V(!0)},Object(u.jsx)(i.FormattedMessage,{defaultMessage:"Cc",id:"xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.addCcButton"})),A?null:Object(u.jsx)(s.EuiButtonEmpty,{size:"xs",onClick:()=>P(!0)},Object(u.jsx)(i.FormattedMessage,{defaultMessage:"Bcc",id:"xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.addBccButton"}))))},Object(u.jsx)(s.EuiComboBox,{noSuggestions:!0,isInvalid:I,fullWidth:!0,"data-test-subj":"toEmailAddressInput",selectedOptions:k,onCreateOption:e=>{const n=[...k,{label:e}];t("to",n.map((e=>e.label)),a)},onChange:e=>{t("to",e.map((e=>e.label)),a)},onBlur:()=>{f||t("to",[],a)}})),y?Object(u.jsx)(s.EuiFormRow,{fullWidth:!0,error:b.cc,isInvalid:B,label:o.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.recipientCopyTextFieldLabel",{defaultMessage:"Cc"})},Object(u.jsx)(s.EuiComboBox,{noSuggestions:!0,isInvalid:B,fullWidth:!0,"data-test-subj":"ccEmailAddressInput",selectedOptions:w,onCreateOption:e=>{const n=[...w,{label:e}];t("cc",n.map((e=>e.label)),a)},onChange:e=>{t("cc",e.map((e=>e.label)),a)},onBlur:()=>{x||t("cc",[],a)}})):null,A?Object(u.jsx)(s.EuiFormRow,{fullWidth:!0,error:b.bcc,isInvalid:S,label:o.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.recipientBccTextFieldLabel",{defaultMessage:"Bcc"})},Object(u.jsx)(s.EuiComboBox,{noSuggestions:!0,isInvalid:S,fullWidth:!0,"data-test-subj":"bccEmailAddressInput",selectedOptions:O,onCreateOption:e=>{const n=[...O,{label:e}];t("bcc",n.map((e=>e.label)),a)},onChange:e=>{t("bcc",e.map((e=>e.label)),a)},onBlur:()=>{h||t("bcc",[],a)}})):null,Object(u.jsx)(s.EuiFormRow,{fullWidth:!0,error:b.subject,isInvalid:M,label:o.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.subjectTextFieldLabel",{defaultMessage:"Subject"})},Object(u.jsx)(l.a,{index:a,editAction:t,messageVariables:d,paramsProperty:"subject",inputTargetValue:v,errors:null!==(p=b.subject)&&void 0!==p?p:[]})),Object(u.jsx)(c.a,{index:a,editAction:t,messageVariables:d,paramsProperty:"message",inputTargetValue:j,label:o.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.messageTextAreaFieldLabel",{defaultMessage:"Message"}),errors:null!==(m=b.message)&&void 0!==m?m:[]}))}},57:function(e,t,a){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),s=[];function o(e){for(var t=-1,a=0;a<s.length;a++)if(s[a].identifier===e){t=a;break}return t}function l(e,t){for(var a={},n=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var b=o(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==b?(s[b].references++,s[b].updater(d)):s.push({identifier:u,updater:f(d,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=a.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,b=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,a,n){var r=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function g(e,t,a){var n=a.css,r=a.media,i=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function f(e,t){var a,n,r;if(t.singleton){var i=m++;a=p||(p=c(t)),n=d.bind(null,a,i,!1),r=d.bind(null,a,i,!0)}else a=c(t),n=g.bind(null,a,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var a=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var r=o(a[n]);s[r].references--}for(var i=l(e,t),c=0;c<a.length;c++){var u=o(a[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}a=i}}}},58:function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=(s=n,o=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(i).concat([r]).join("\n")}var s,o,l;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);n&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},60:function(e,t,a){switch(window.__kbnThemeTag__){case"v7dark":return a(64);case"v7light":return a(66);case"v8dark":return a(68);case"v8light":return a(70)}},61:function(e,t,a){"use strict";function n(e){return e.useWithTripleBracesInTemplates?`{{{${e.name}}}}`:`{{${e.name}}}`}a.d(t,"a",(function(){return n}))},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(1),r=a.n(n),i=a(0),s=a(13),o=(a(60),a(61)),l=a(5);const c=({messageVariables:e,paramsProperty:t,onSelectEventHandler:a})=>{var c;const[u,b]=Object(n.useState)(!1),d=i.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)?Object(l.jsx)(r.a.Fragment,null):Object(l.jsx)(s.EuiPopover,{button:Object(l.jsx)(s.EuiButtonIcon,{id:`${t}AddVariableButton`,"data-test-subj":`${t}AddVariableButton`,title:d,onClick:()=>b(!0),iconType:"indexOpen","aria-label":i.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:u,closePopover:()=>b(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},Object(l.jsx)(s.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==e?void 0:e.map(((e,t)=>Object(l.jsx)(s.EuiContextMenuItem,{key:e.name,"data-test-subj":`variableMenuButton-${e.name}`,icon:"empty",disabled:e.deprecated,onClick:()=>{a(e),b(!1)}},Object(l.jsx)(r.a.Fragment,null,Object(l.jsx)(s.EuiText,{size:"m","data-test-subj":`variableMenuButton-${t}-templated-name`},Object(o.a)(e)),Object(l.jsx)(s.EuiText,{size:"m",color:"subdued"},Object(l.jsx)("div",{className:"euiTextColor--subdued"},e.description))))))}))}},64:function(e,t,a){var n=a(57),r=a(65);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},65:function(e,t,a){(t=a(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},66:function(e,t,a){var n=a(57),r=a(67);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},67:function(e,t,a){(t=a(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},68:function(e,t,a){var n=a(57),r=a(69);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},69:function(e,t,a){(t=a(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},70:function(e,t,a){var n=a(57),r=a(71);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},71:function(e,t,a){(t=a(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(13),i=(a(60),a(62)),s=a(61),o=a(5);const l=({messageVariables:e,paramsProperty:t,index:a,inputTargetValue:l,editAction:c,label:u,errors:b})=>{const[d,g]=Object(n.useState)(null);return Object(o.jsx)(r.EuiFormRow,{fullWidth:!0,error:b,isInvalid:b&&b.length>0&&void 0!==l,label:u,labelAppend:Object(o.jsx)(i.a,{messageVariables:e,onSelectEventHandler:e=>{var n,r;const i=Object(s.a)(e),o=null!==(n=null==d?void 0:d.selectionStart)&&void 0!==n?n:0,u=null!==(r=null==d?void 0:d.selectionEnd)&&void 0!==r?r:0,b=(null!=l?l:"").substring(0,o)+i+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(t,b,a)},paramsProperty:t})},Object(o.jsx)(r.EuiTextArea,{fullWidth:!0,isInvalid:b&&b.length>0&&void 0!==l,name:t,value:l||"","data-test-subj":`${t}TextArea`,onChange:e=>(e=>{c(t,e.target.value,a)})(e),onFocus:e=>{g(e.target)},onBlur:()=>{l||c(t,"",a)}}))}},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(13),i=(a(60),a(62)),s=a(61),o=a(5);const l=({messageVariables:e,paramsProperty:t,index:a,inputTargetValue:l,editAction:c,errors:u,defaultValue:b})=>{const[d,g]=Object(n.useState)(null);return Object(o.jsx)(r.EuiFieldText,{fullWidth:!0,name:t,id:`${t}Id`,isInvalid:u&&u.length>0&&void 0!==l,"data-test-subj":`${t}Input`,value:l||"",defaultValue:b,onChange:e=>(e=>{c(t,e.target.value,a)})(e),onFocus:e=>{g(e.target)},onBlur:e=>{l||c(t,"",a)},append:Object(o.jsx)(i.a,{messageVariables:e,onSelectEventHandler:e=>{var n,r;const i=Object(s.a)(e),o=null!==(n=null==d?void 0:d.selectionStart)&&void 0!==n?n:0,u=null!==(r=null==d?void 0:d.selectionEnd)&&void 0!==r?r:0,b=(null!=l?l:"").substring(0,o)+i+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(t,b,a)},paramsProperty:t})})}}}]);