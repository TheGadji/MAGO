/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.spaces_bundle_jsonpfunction=window.spaces_bundle_jsonpfunction||[]).push([[10],{166:function(e,s,t){"use strict";t.r(s),t.d(s,"SpaceListInternal",(function(){return j}));var a=t(2),c=t(1),i=t(3),n=t(10),o=t(6),l=t(5),u=t(12),p=t(0);const r=Object(c.lazy)((()=>Object(l.a)().then((e=>({default:e}))))),j=({namespaces:e,displayLimit:s=5,behaviorContext:t})=>{const{spacesDataPromise:l}=Object(u.b)(),[j,d]=Object(c.useState)(!1),[b,x]=Object(c.useState)();if(Object(c.useEffect)((()=>{l.then((e=>{x(e)}))}),[l]),!b)return null;const f=e.includes(o.a),O=e.filter((e=>e===o.f)).length;let h,g=null;if(f)h=[{id:o.a,name:i.i18n.translate("xpack.spaces.spaceList.allSpacesLabel",{defaultMessage:"* All spaces"}),initials:"*",color:"#D3DAE6"}];else{const c=e.filter((e=>e!==o.f)),i=[],l=[];c.forEach((e=>{const s=b.spacesMap.get(e);void 0===s?i.push({id:e,name:e}):"outside-space"!==t&&s.isActiveSpace||(s.isFeatureDisabled?l.push(s):i.push(s))}));const u=[...i,...l];h=j||!s?u:u.slice(0,s),s&&u.length>s&&(g=j?Object(p.jsx)(a.EuiButtonEmpty,{size:"xs",onClick:()=>d(!1)},Object(p.jsx)(n.FormattedMessage,{id:"xpack.spaces.spaceList.showLessSpacesLink",defaultMessage:"show less"})):Object(p.jsx)(a.EuiButtonEmpty,{size:"xs",onClick:()=>d(!0)},Object(p.jsx)(n.FormattedMessage,{id:"xpack.spaces.spaceList.showMoreSpacesLink",defaultMessage:"+{count} more",values:{count:u.length+O-h.length}})))}const m=!f&&(j||null===g)&&O>0?Object(p.jsx)(a.EuiFlexItem,{grow:!1},Object(p.jsx)(a.EuiToolTip,{content:Object(p.jsx)(n.FormattedMessage,{id:"xpack.spaces.spaceList.unauthorizedSpacesCountLabel",defaultMessage:"You don't have permission to view these spaces."})},Object(p.jsx)(a.EuiBadge,{color:"#DDD"},"+",O))):null;return Object(p.jsx)(c.Suspense,{fallback:Object(p.jsx)(a.EuiLoadingSpinner,null)},Object(p.jsx)(a.EuiFlexGroup,{wrap:!0,responsive:!1,gutterSize:"xs"},h.map((e=>{const s=e.isFeatureDisabled;return Object(p.jsx)(a.EuiFlexItem,{grow:!1,key:e.id},Object(p.jsx)(r,{space:e,isDisabled:s,size:"s"}))})),m,g))}}}]);