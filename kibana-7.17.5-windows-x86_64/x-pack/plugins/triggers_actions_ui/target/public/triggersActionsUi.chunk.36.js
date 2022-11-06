/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[36],{180:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(181);case"v7light":return n(183);case"v8dark":return n(185);case"v8light":return n(187)}},181:function(e,t,n){var o=n(57),i=n(182);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},182:function(e,t,n){(t=n(58)(!1)).push([e.i,".actOf__aggFieldContainer{width:464px}\n",""]),e.exports=t},183:function(e,t,n){var o=n(57),i=n(184);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},184:function(e,t,n){(t=n(58)(!1)).push([e.i,".actOf__aggFieldContainer{width:464px}\n",""]),e.exports=t},185:function(e,t,n){var o=n(57),i=n(186);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},186:function(e,t,n){(t=n(58)(!1)).push([e.i,".actOf__aggFieldContainer{width:464px}\n",""]),e.exports=t},187:function(e,t,n){var o=n(57),i=n(188);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},188:function(e,t,n){(t=n(58)(!1)).push([e.i,".actOf__aggFieldContainer{width:464px}\n",""]),e.exports=t},282:function(e,t,n){"use strict";n.r(t),n.d(t,"OfExpression",(function(){return u})),n.d(t,"default",(function(){return u}));var o=n(1),i=n(0),r=n(36),s=n(13),a=n(18),l=n(79),c=(n(180),n(5));const u=({aggType:e,aggField:t,errors:n,onChangeSelectedAggField:u,fields:d,display:f="inline",customAggTypesOptions:p,popupPosition:g,helpText:v})=>{const[h,m]=Object(o.useState)(!1),b={text:i.i18n.translate("xpack.triggersActionsUI.common.expressionItems.of.selectTimeFieldOptionLabel",{defaultMessage:"Select a field"}),value:""},x=null!=p?p:a.builtInAggregationTypes,j=d.reduce(((t,n)=>(x[e].validNormalizedTypes.includes(n.normalizedType)&&t.push({label:n.name}),t)),[]);return Object(c.jsx)(s.EuiPopover,{id:"aggFieldPopover",button:Object(c.jsx)(s.EuiExpression,{description:i.i18n.translate("xpack.triggersActionsUI.common.expressionItems.of.buttonLabel",{defaultMessage:"of"}),"data-test-subj":"ofExpressionPopover",display:"inline"===f?"inline":"columns",value:t||b.text,isActive:h||!t,onClick:()=>{m(!0)},isInvalid:!t}),isOpen:h,closePopover:()=>{m(!1)},display:"fullWidth"===f?"block":"inlineBlock",anchorPosition:null!=g?g:"downRight",zIndex:8e3,repositionOnScroll:!0},Object(c.jsx)("div",null,Object(c.jsx)(l.a,{onClose:()=>m(!1)},Object(c.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.common.expressionItems.of.popoverTitle",defaultMessage:"of"})),Object(c.jsx)(s.EuiFlexGroup,null,Object(c.jsx)(s.EuiFlexItem,{grow:!1,className:"actOf__aggFieldContainer"},Object(c.jsx)(s.EuiFormRow,{id:"ofField",fullWidth:!0,isInvalid:n.aggField.length>0&&void 0!==t,error:n.aggField,"data-test-subj":"availablefieldsOptionsFormRow",helpText:v},Object(c.jsx)(s.EuiComboBox,{fullWidth:!0,singleSelection:{asPlainText:!0},"data-test-subj":"availablefieldsOptionsComboBox",isInvalid:n.aggField.length>0&&void 0!==t,placeholder:b.text,options:j,noSuggestions:!j.length,selectedOptions:t?[{label:t}]:[],onChange:e=>{u(1===e.length?e[0].label:void 0),e.length>0&&m(!1)}}))))))}},57:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:h(f,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,v=0;function h(e,t){var n,o,i;if(t.singleton){var r=v++;n=g||(g=c(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=c(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);s[i].references--}for(var r=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=r}}}},58:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(1);var o=n(0),i=n(13),r=n(5);const s=({children:e,onClose:t})=>Object(r.jsx)(i.EuiPopoverTitle,null,Object(r.jsx)(i.EuiFlexGroup,{alignItems:"center",gutterSize:"s"},Object(r.jsx)(i.EuiFlexItem,null,e),Object(r.jsx)(i.EuiFlexItem,{grow:!1},Object(r.jsx)(i.EuiButtonIcon,{iconType:"cross",color:"danger","aria-label":o.i18n.translate("xpack.triggersActionsUI.common.expressionItems.components.closablePopoverTitle.closeLabel",{defaultMessage:"Close"}),onClick:()=>t()}))))}}]);