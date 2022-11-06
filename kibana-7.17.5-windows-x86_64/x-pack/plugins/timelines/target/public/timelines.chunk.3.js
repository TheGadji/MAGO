/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.timelines_bundle_jsonpfunction=window.timelines_bundle_jsonpfunction||[]).push([[3],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2),l=n(3),i=n(0),o=n.n(i);const s=l.i18n.translate("xpack.timelines.hoverActions.tooltipWithKeyboardShortcut.pressTooltipLabel",{defaultMessage:"Press"}),u=({additionalScreenReaderOnlyContext:e="",content:t,shortcut:n,showShortcut:l})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-test-subj":"content"},t),""!==e&&o.a.createElement(a.EuiScreenReaderOnly,{"data-test-subj":"additionalScreenReaderOnlyContext"},o.a.createElement("p",null,e)),l&&o.a.createElement(a.EuiText,{color:"subdued","data-test-subj":"shortcut",size:"s",textAlign:"center"},o.a.createElement("span",null,s)," ",o.a.createElement("span",{className:"euiBadge euiBadge--hollow"},n))),r=o.a.memo(u);r.displayName="TooltipWithKeyboardShortcut"},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}));const a=({field:e,value:t})=>null==t?e:Array.isArray(t)?`${e} ${t.join(" ")}`:`${e} ${t}`,l=(e,t,n=!1)=>{const a=null!=t?Array.isArray(t)?t[0]:t:null;return null!=a?{meta:{alias:null,negate:n,disabled:!1,type:"phrase",key:e,value:a,params:{query:a}},query:{match:{[e]:{query:a,type:"phrase"}}}}:{exists:{field:e},meta:{alias:null,disabled:!1,key:e,negate:void 0===t,type:"exists",value:"exists"}}}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"COLUMN_TOGGLE",(function(){return m})),n.d(t,"NESTED_COLUMN",(function(){return b})),n.d(t,"COLUMN_TOGGLE_KEYBOARD_SHORTCUT",(function(){return f})),n.d(t,"default",(function(){return p}));var a=n(0),l=n.n(a),i=n(2),o=n(3),s=n(19),u=n(139),r=n(140),c=n(23),d=n(11);const m=e=>o.i18n.translate("xpack.timelines.hoverActions.columnToggleLabel",{values:{field:e},defaultMessage:"Toggle {field} column in table"}),b=e=>o.i18n.translate("xpack.timelines.hoverActions.nestedColumnToggleLabel",{values:{field:e},defaultMessage:"The {field} field is an object, and is broken down into nested fields which can be added as columns"}),f="i",p=l.a.memo((({Component:e,defaultFocusedButtonRef:t,field:n,isDisabled:o,isObjectArray:p,keyboardEvent:y,ownFocus:h,onClick:g,showTooltip:E=!1,toggleColumn:T,value:v})=>{const O=p?b(n):m(n),j=Object(a.useCallback)((()=>{T({columnHeaderType:c.b,id:n,initialWidth:d.b}),null!=g&&g()}),[g,n,T]);Object(a.useEffect)((()=>{h&&(null==y?void 0:y.key)===f&&(Object(s.stopPropagationAndPreventDefault)(y),j())}),[j,y,h]);const A=Object(a.useMemo)((()=>e?l.a.createElement(e,{"aria-label":O,"data-test-subj":`toggle-field-${n}`,icon:"listAdd",iconType:"listAdd",onClick:j,title:O},O):l.a.createElement(i.EuiButtonIcon,{"aria-label":O,buttonRef:t,className:"timelines__hoverActionButton","data-test-subj":`toggle-field-${n}`,"data-colindex":1,disabled:o,id:n,iconSize:"s",iconType:"listAdd",onClick:j})),[e,t,n,j,o,O]);return E?l.a.createElement(i.EuiToolTip,{content:l.a.createElement(u.a,{additionalScreenReaderOnlyContext:Object(r.b)({field:n,value:v}),content:O,shortcut:f,showShortcut:h})},A):A}));p.displayName="ColumnToggleButton"}}]);