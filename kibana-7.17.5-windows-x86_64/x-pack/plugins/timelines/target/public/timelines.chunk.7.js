/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.timelines_bundle_jsonpfunction=window.timelines_bundle_jsonpfunction||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"AddToCaseActionButton",(function(){return b}));var a=n(0),i=n.n(a),o=n(2),s=n(64),l=n(17),c=n(11);const d=({width:e=c.a,dataTestSubj:t,content:n,ariaLabel:a,iconType:s="",isDisabled:d=!1,onClick:u,children:r})=>i.a.createElement("div",null,i.a.createElement(l.e,{textAlign:"center",width:e},null!=r?r:i.a.createElement(o.EuiToolTip,{"data-test-subj":`${t}-tool-tip`,content:n},i.a.createElement(o.EuiButtonIcon,{"aria-label":a,"data-test-subj":`${t}-button`,iconType:s,isDisabled:d,onClick:u}))));d.displayName="ActionIconItemComponent";const u=i.a.memo(d);var r=n(38);const m=({ariaLabel:e=r.c,event:t,useInsertTimeline:n,casePermissions:l,appId:c,onClose:d})=>{const{addNewCaseClick:m,addExistingCaseClick:b,isDisabled:p,userCanCrud:E,isEventSupported:C,openPopover:T,closePopover:j,isPopoverOpen:v}=Object(s.b)({event:t,useInsertTimeline:n,casePermissions:l,appId:c,onClose:d}),P=E?C?r.d:r.i:r.h,w=Object(a.useMemo)((()=>[i.a.createElement(o.EuiContextMenuItem,{key:"add-new-case-menu-item",onClick:m,"aria-label":r.b,"data-test-subj":"add-new-case-item",disabled:p},i.a.createElement(o.EuiText,{size:"m"},r.b)),i.a.createElement(o.EuiContextMenuItem,{key:"add-existing-case-menu-item",onClick:b,"aria-label":r.a,"data-test-subj":"add-existing-case-menu-item",disabled:p},i.a.createElement(o.EuiText,{size:"m"},r.a))]),[b,m,p]),I=Object(a.useMemo)((()=>i.a.createElement(o.EuiToolTip,{"data-test-subj":"attach-alert-to-case-tooltip",content:P},i.a.createElement(o.EuiButtonIcon,{"aria-label":e,"data-test-subj":"attach-alert-to-case-button",size:"s",iconType:"folderClosed",onClick:T,isDisabled:p}))),[e,p,T,P]);return i.a.createElement(i.a.Fragment,null,E&&i.a.createElement(u,null,i.a.createElement(o.EuiPopover,{id:"attachAlertToCasePanel",button:I,isOpen:v,closePopover:j,panelPaddingSize:"none",anchorPosition:"downLeft",repositionOnScroll:!0},i.a.createElement(o.EuiContextMenuPanel,{items:w}))))},b=Object(a.memo)(m);t.default=b}}]);