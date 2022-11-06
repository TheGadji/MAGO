(window.discover_bundle_jsonpfunction=window.discover_bundle_jsonpfunction||[]).push([[3],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"MAX_LINES_CLASSIC_TABLE",(function(){return g})),n.d(t,"MARGIN_BOTTOM",(function(){return h})),n.d(t,"SourceViewer",(function(){return v}));n(89);var o=n(5),i=n(24),r=n(12),s=n(2),a=n(59),c=n(3),u=n(9),d=n(54),l=n(68),f=n(30);var p=n(6);const g=500,h=25,v=({id:e,index:t,indexPattern:n,width:v,hasLineNumbers:b})=>{const[x,m]=Object(o.useState)(),[j,y]=Object(o.useState)(""),_=!Object(c.e)().uiSettings.get(u.SEARCH_FIELDS_FROM_SOURCE),w=!Object(c.e)().uiSettings.get(u.DOC_TABLE_LEGACY),[O,E,S]=Object(l.a)({id:e,index:t,indexPattern:n,requestSource:_});Object(o.useEffect)((()=>{O===d.a.Found&&E&&y(JSON.stringify(E,void 0,2))}),[O,E]),Object(o.useEffect)((()=>{if(!x)return;const e=x.getDomNode();if(!e)return;const t=function(e,t){const n=null==e?void 0:e.getDomNode();if(!n)return 0;let o;if(t){const e=n.getBoundingClientRect();o=window.innerHeight-e.top-h}else{var i;const t=e.getOption(f.monaco.editor.EditorOption.lineHeight),n=(null===(i=e.getModel())||void 0===i?void 0:i.getLineCount())||1,r=n>g?g:n;o=e.getTopForLineNumber(r+1)+t}return o>0?o:0}(x,w);0!==t&&(e.style.height=j&&""!==j?`${t}px`:"0px",x.layout())}),[x,j,w]);const C=Object(p.jsx)("div",{className:"sourceViewer__loading"},Object(p.jsx)(r.EuiLoadingSpinner,{className:"sourceViewer__loadingSpinner"}),Object(p.jsx)(r.EuiText,{size:"xs",color:"subdued"},Object(p.jsx)(i.FormattedMessage,{id:"discover.loadingJSON",defaultMessage:"Loading JSON"}))),M=Object(p.jsx)("h2",null,s.i18n.translate("discover.sourceViewer.errorMessageTitle",{defaultMessage:"An Error Occurred"})),N=Object(p.jsx)("div",null,s.i18n.translate("discover.sourceViewer.errorMessage",{defaultMessage:"Could not fetch data at this time. Refresh the tab to try again."}),Object(p.jsx)(r.EuiSpacer,{size:"s"}),Object(p.jsx)(r.EuiButton,{iconType:"refresh",onClick:S},s.i18n.translate("discover.sourceViewer.refresh",{defaultMessage:"Refresh"}))),L=Object(p.jsx)(r.EuiEmptyPrompt,{iconType:"alert",title:M,body:N});return O===d.a.Error||O===d.a.NotFound?L:O===d.a.Loading||""===j?C:Object(p.jsx)(a.a,{jsonValue:j,width:v,hasLineNumbers:b,onEditorDidMount:e=>m(e)})};t.default=v},46:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],u=n[c]||0,d="".concat(c," ").concat(u);n[c]=u+1;var l=a(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(s[l].references++,s[l].updater(f)):s.push({identifier:d,updater:v(f,t),references:1}),o.push(d)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,h=0;function v(e,t){var n,o,i;if(t.singleton){var r=h++;n=g||(g=u(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=u(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);s[i].references--}for(var r=c(e,t),u=0;u<n.length;u++){var d=a(n[u]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},47:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},54:function(e,t,n){"use strict";let o;n.d(t,"a",(function(){return o})),function(e){e[e.Loading=0]="Loading",e[e.NotFound=1]="NotFound",e[e.Found=2]="Found",e[e.Error=3]="Error",e[e.NotFoundIndexPattern=4]="NotFoundIndexPattern"}(o||(o={}))},57:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(60);case"v7light":return n(62);case"v8dark":return n(64);case"v8light":return n(66)}},59:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));n(57);var o=n(5),i=n.n(o),r=n(2),s=n(30),a=n(12),c=n(26),u=n(6);const d=r.i18n.translate("discover.json.codeEditorAriaLabel",{defaultMessage:"Read only JSON view of an elasticsearch document"}),l=r.i18n.translate("discover.json.copyToClipboardLabel",{defaultMessage:"Copy to clipboard"}),f=({jsonValue:e,width:t,hasLineNumbers:n,onEditorDidMount:o})=>""===e?null:Object(u.jsx)(a.EuiFlexGroup,{className:"dscJsonCodeEditor",direction:"column",gutterSize:"s"},Object(u.jsx)(a.EuiFlexItem,null,Object(u.jsx)(a.EuiSpacer,{size:"s"}),Object(u.jsx)("div",{className:"eui-textRight"},Object(u.jsx)(a.EuiCopy,{textToCopy:e},(e=>Object(u.jsx)(a.EuiButtonEmpty,{size:"xs",flush:"right",iconType:"copyClipboard",onClick:e},l))))),Object(u.jsx)(a.EuiFlexItem,null,Object(u.jsx)(c.CodeEditor,{languageId:s.XJsonLang.ID,width:t,value:e||"",editorDidMount:o,"aria-label":d,options:{automaticLayout:!0,fontSize:12,lineNumbers:n?"on":"off",minimap:{enabled:!1},overviewRulerBorder:!1,readOnly:!0,scrollbar:{alwaysConsumeMouseWheel:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent"}}))),p=i.a.memo((e=>Object(u.jsx)(f,e)))},60:function(e,t,n){var o=n(46),i=n(61);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},61:function(e,t,n){(t=n(47)(!1)).push([e.i,".dscJsonCodeEditor{width:100%}\n",""]),e.exports=t},62:function(e,t,n){var o=n(46),i=n(63);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},63:function(e,t,n){(t=n(47)(!1)).push([e.i,".dscJsonCodeEditor{width:100%}\n",""]),e.exports=t},64:function(e,t,n){var o=n(46),i=n(65);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},65:function(e,t,n){(t=n(47)(!1)).push([e.i,".dscJsonCodeEditor{width:100%}\n",""]),e.exports=t},66:function(e,t,n){var o=n(46),i=n(67);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},67:function(e,t,n){(t=n(47)(!1)).push([e.i,".dscJsonCodeEditor{width:100%}\n",""]),e.exports=t},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(5),i=n(54),r=n(3),s=n(9);function a(e,t,n,o){var i;const r=t.getComputedFields(),s=r.runtimeFields,a={body:{query:{ids:{values:[e]}},stored_fields:r.storedFields,script_fields:r.scriptFields,version:!0}};if(a.body)return n?(a.body.fields=[{field:"*",include_unmapped:"true"}],a.body.runtime_mappings=s||{},o&&(a.body._source=!0)):a.body._source=!0,a.body.fields=[...(null===(i=a.body)||void 0===i?void 0:i.fields)||[],...r.docvalueFields||[]],a}function c({id:e,index:t,indexPattern:n,requestSource:c}){const[u,d]=Object(o.useState)(i.a.Loading),[l,f]=Object(o.useState)(null),{data:p,uiSettings:g}=Object(o.useMemo)((()=>Object(r.e)()),[]),h=Object(o.useMemo)((()=>!g.get(s.SEARCH_FIELDS_FROM_SOURCE)),[g]),v=Object(o.useCallback)((async()=>{try{var o,r;const{rawResponse:s}=await p.search.search({params:{index:t,body:null===(o=a(e,n,h,c))||void 0===o?void 0:o.body}}).toPromise(),u=s.hits;null!=u&&null!==(r=u.hits)&&void 0!==r&&r[0]?(d(i.a.Found),f(u.hits[0])):d(i.a.NotFound)}catch(e){e.savedObjectId?d(i.a.NotFoundIndexPattern):404===e.status?d(i.a.NotFound):d(i.a.Error)}}),[e,t,n,p.search,h,c]);return Object(o.useEffect)((()=>{v()}),[v]),[u,l,v]}},89:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(90);case"v7light":return n(92);case"v8dark":return n(94);case"v8light":return n(96)}},90:function(e,t,n){var o=n(46),i=n(91);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},91:function(e,t,n){(t=n(47)(!1)).push([e.i,".sourceViewer__loading{display:flex;flex-direction:row;justify-content:left;flex:1 0 100%;text-align:center;height:100%;width:100%;margin-top:8px}.sourceViewer__loadingSpinner{margin-right:8px}\n",""]),e.exports=t},92:function(e,t,n){var o=n(46),i=n(93);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},93:function(e,t,n){(t=n(47)(!1)).push([e.i,".sourceViewer__loading{display:flex;flex-direction:row;justify-content:left;flex:1 0 100%;text-align:center;height:100%;width:100%;margin-top:8px}.sourceViewer__loadingSpinner{margin-right:8px}\n",""]),e.exports=t},94:function(e,t,n){var o=n(46),i=n(95);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},95:function(e,t,n){(t=n(47)(!1)).push([e.i,".sourceViewer__loading{display:flex;flex-direction:row;justify-content:left;flex:1 0 100%;text-align:center;height:100%;width:100%;margin-top:8px}.sourceViewer__loadingSpinner{margin-right:8px}\n",""]),e.exports=t},96:function(e,t,n){var o=n(46),i=n(97);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},97:function(e,t,n){(t=n(47)(!1)).push([e.i,".sourceViewer__loading{display:flex;flex-direction:row;justify-content:left;flex:1 0 100%;text-align:center;height:100%;width:100%;margin-top:8px}.sourceViewer__loadingSpinner{margin-right:8px}\n",""]),e.exports=t}}]);