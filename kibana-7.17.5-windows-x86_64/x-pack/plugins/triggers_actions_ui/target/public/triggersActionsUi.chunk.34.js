/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[34],{275:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var r=t(1),n=t(0),o=t(74),i=t(5);const s=({actionParams:e,editAction:a,index:t,errors:s,messageVariables:l,defaultMessage:c})=>{var u;const{message:b}=e;return Object(r.useEffect)((()=>{!b&&c&&c.length>0&&a("message",c,t)}),[]),Object(i.jsx)(o.a,{index:t,editAction:a,messageVariables:l,paramsProperty:"message",inputTargetValue:b,label:n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.teamsAction.messageTextAreaFieldLabel",{defaultMessage:"Message"}),errors:null!==(u=s.message)&&void 0!==u?u:[]})}},57:function(e,a,t){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(a){if(void 0===e[a]){var t=document.querySelector(a);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[a]=t}return e[a]}}(),i=[];function s(e){for(var a=-1,t=0;t<i.length;t++)if(i[t].identifier===e){a=t;break}return a}function l(e,a){for(var t={},r=[],n=0;n<e.length;n++){var o=e[n],l=a.base?o[0]+a.base:o[0],c=t[l]||0,u="".concat(l," ").concat(c);t[l]=c+1;var b=s(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==b?(i[b].references++,i[b].updater(d)):i.push({identifier:u,updater:f(d,a),references:1}),r.push(u)}return r}function c(e){var a=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=t.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){a.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(a);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}return a}var u,b=(u=[],function(e,a){return u[e]=a,u.filter(Boolean).join("\n")});function d(e,a,t,r){var n=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=b(a,n);else{var o=document.createTextNode(n),i=e.childNodes;i[a]&&e.removeChild(i[a]),i.length?e.insertBefore(o,i[a]):e.appendChild(o)}}function g(e,a,t){var r=t.css,n=t.media,o=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function f(e,a){var t,r,n;if(a.singleton){var o=m++;t=p||(p=c(a)),r=d.bind(null,t,o,!1),n=d.bind(null,t,o,!0)}else t=c(a),r=g.bind(null,t,a),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;r(e=a)}else n()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=n());var t=l(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var n=s(t[r]);i[n].references--}for(var o=l(e,a),c=0;c<t.length;c++){var u=s(t[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=o}}}},58:function(e,a,t){"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t=function(e,a){var t=e[1]||"",r=e[3];if(!r)return t;if(a&&"function"==typeof btoa){var n=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([n]).join("\n")}var i,s,l;return[t].join("\n")}(a,e);return a[2]?"@media ".concat(a[2]," {").concat(t,"}"):t})).join("")},a.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),a.push(l))}},a}},60:function(e,a,t){switch(window.__kbnThemeTag__){case"v7dark":return t(64);case"v7light":return t(66);case"v8dark":return t(68);case"v8light":return t(70)}},61:function(e,a,t){"use strict";function r(e){return e.useWithTripleBracesInTemplates?`{{{${e.name}}}}`:`{{${e.name}}}`}t.d(a,"a",(function(){return r}))},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(1),n=t.n(r),o=t(0),i=t(13),s=(t(60),t(61)),l=t(5);const c=({messageVariables:e,paramsProperty:a,onSelectEventHandler:t})=>{var c;const[u,b]=Object(r.useState)(!1),d=o.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)?Object(l.jsx)(n.a.Fragment,null):Object(l.jsx)(i.EuiPopover,{button:Object(l.jsx)(i.EuiButtonIcon,{id:`${a}AddVariableButton`,"data-test-subj":`${a}AddVariableButton`,title:d,onClick:()=>b(!0),iconType:"indexOpen","aria-label":o.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:u,closePopover:()=>b(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},Object(l.jsx)(i.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==e?void 0:e.map(((e,a)=>Object(l.jsx)(i.EuiContextMenuItem,{key:e.name,"data-test-subj":`variableMenuButton-${e.name}`,icon:"empty",disabled:e.deprecated,onClick:()=>{t(e),b(!1)}},Object(l.jsx)(n.a.Fragment,null,Object(l.jsx)(i.EuiText,{size:"m","data-test-subj":`variableMenuButton-${a}-templated-name`},Object(s.a)(e)),Object(l.jsx)(i.EuiText,{size:"m",color:"subdued"},Object(l.jsx)("div",{className:"euiTextColor--subdued"},e.description))))))}))}},64:function(e,a,t){var r=t(57),n=t(65);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},65:function(e,a,t){(a=t(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=a},66:function(e,a,t){var r=t(57),n=t(67);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},67:function(e,a,t){(a=t(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=a},68:function(e,a,t){var r=t(57),n=t(69);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},69:function(e,a,t){(a=t(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=a},70:function(e,a,t){var r=t(57),n=t(71);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},71:function(e,a,t){(a=t(58)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=a},74:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(1),n=t(13),o=(t(60),t(62)),i=t(61),s=t(5);const l=({messageVariables:e,paramsProperty:a,index:t,inputTargetValue:l,editAction:c,label:u,errors:b})=>{const[d,g]=Object(r.useState)(null);return Object(s.jsx)(n.EuiFormRow,{fullWidth:!0,error:b,isInvalid:b&&b.length>0&&void 0!==l,label:u,labelAppend:Object(s.jsx)(o.a,{messageVariables:e,onSelectEventHandler:e=>{var r,n;const o=Object(i.a)(e),s=null!==(r=null==d?void 0:d.selectionStart)&&void 0!==r?r:0,u=null!==(n=null==d?void 0:d.selectionEnd)&&void 0!==n?n:0,b=(null!=l?l:"").substring(0,s)+o+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(a,b,t)},paramsProperty:a})},Object(s.jsx)(n.EuiTextArea,{fullWidth:!0,isInvalid:b&&b.length>0&&void 0!==l,name:a,value:l||"","data-test-subj":`${a}TextArea`,onChange:e=>(e=>{c(a,e.target.value,t)})(e),onFocus:e=>{g(e.target)},onBlur:()=>{l||c(a,"",t)}}))}}}]);