/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[0],{127:function(t,e,n){"use strict";n.d(e,"d",(function(){return E})),n.d(e,"f",(function(){return v})),n.d(e,"e",(function(){return T})),n.d(e,"g",(function(){return C})),n.d(e,"c",(function(){return errors_ToasterError})),n.d(e,"h",(function(){return w})),n.d(e,"b",(function(){return S})),n.d(e,"a",(function(){return _}));var r=n(55),o=n(19),a=n(9),c=n.n(a),i=n(56),u=n.n(i),s=n(2);const l=s.i18n.translate("xpack.securitySolution.modalAllErrors.seeAllErrors.button",{defaultMessage:"See the full error(s)"}),d=s.i18n.translate("xpack.securitySolution.modalAllErrors.title",{defaultMessage:"Your visualization has error(s)"}),f=s.i18n.translate("xpack.securitySolution.modalAllErrors.close.button",{defaultMessage:"Close"}),b=({isShowing:t,toast:e,toggle:n})=>{const o=Object(a.useCallback)((()=>n(e)),[n,e]);return t&&null!=e?c.a.createElement(r.EuiModal,{onClose:o},c.a.createElement(r.EuiModalHeader,null,c.a.createElement(r.EuiModalHeaderTitle,null,d)),c.a.createElement(r.EuiModalBody,null,c.a.createElement(r.EuiCallOut,{title:e.title,color:"danger",size:"s",iconType:"alert"}),c.a.createElement(r.EuiSpacer,{size:"s"}),Array.isArray(e.errors)&&e.errors.map(((t,n)=>c.a.createElement(r.EuiAccordion,{key:`${e.id}-${n}`,id:"accordion1",initialIsOpen:0===n,buttonContent:t.length>100?`${t.substring(0,100)} ...`:t,"data-test-subj":"modal-all-errors-accordion"},c.a.createElement(g,null,t))))),c.a.createElement(r.EuiModalFooter,null,c.a.createElement(r.EuiButton,{onClick:o,fill:!0,"data-test-subj":"modal-all-errors-close"},f))):null},p=c.a.memo(b),g=u()(r.EuiCodeBlock).withConfig({displayName:"MyEuiCodeBlock",componentId:"sc-1lr0hx6-0"})(["margin-top:4px;"]);g.displayName="MyEuiCodeBlock";var m=n(24),y=n.n(m),j=n(98),h=n(7),O=n.n(h);class errors_ToasterError extends Error{constructor(t){super(t[0]),O()(this,"messages",void 0),this.name="ToasterError",this.messages=t}}const E=(t,e,n,r=y.a.v4())=>{n({type:"addToaster",toast:{id:r,title:t,color:"danger",iconType:"alert",errors:e}})},v=(t,e,n=y.a.v4())=>{e({type:"addToaster",toast:{id:n,title:t,color:"warning",iconType:"help"}})},T=(t,e,n=y.a.v4())=>{e({type:"addToaster",toast:{id:n,title:t,color:"success",iconType:"check"}})},C=({id:t=y.a.v4(),title:e,error:n,color:r="danger",iconType:a="alert",dispatchToaster:c})=>{let i;i=(t=>t instanceof errors_ToasterError)(n)?{id:t,title:e,color:r,iconType:a,errors:n.messages}:Object(j.q)(n)?{id:t,title:e,color:r,iconType:a,errors:[n.body.message]}:Object(o.isError)(n)?{id:t,title:e,color:r,iconType:a,errors:[n.message]}:{id:t,title:e,color:r,iconType:a,errors:["Network Error"]},c({type:"addToaster",toast:i})},I={toasts:[]},k=Object(a.createContext)([I,()=>o.noop]),w=()=>Object(a.useContext)(k),S=({children:t})=>c.a.createElement(k.Provider,{value:Object(a.useReducer)(((t,e)=>{switch(e.type){case"addToaster":return{...t,toasts:[...t.toasts,e.toast]};case"deleteToaster":return{...t,toasts:t.toasts.filter((t=>t.id!==e.id))};default:return t}}),I)},t),x=u.a.div.withConfig({displayName:"GlobalToasterListContainer",componentId:"sc-fvmqid-0"})(["position:absolute;right:0;bottom:0;"]),_=({toastLifeTimeMs:t=5e3})=>{const[{toasts:e},n]=w(),[o,i]=Object(a.useState)(!1),[u,s]=Object(a.useState)(null),l=t=>{o?(n({type:"deleteToaster",id:t.id}),s(null)):s(t),i(!o)};return c.a.createElement(c.a.Fragment,null,e.length>0&&!o&&c.a.createElement(x,null,c.a.createElement(r.EuiGlobalToastList,{toasts:[A(e[0],l)],dismissToast:({id:t})=>{n({type:"deleteToaster",id:t})},toastLifeTimeMs:t})),null!=u&&c.a.createElement(p,{isShowing:o,toast:u,toggle:l}))},A=(t,e)=>(null!=t&&null!=t.errors&&t.errors.length>0&&(t.text=c.a.createElement(M,null,c.a.createElement(r.EuiButton,{"data-test-subj":"toaster-show-all-error-modal",size:"s",color:"danger",onClick:()=>null!=t&&e(t)},l))),t),M=u.a.div.withConfig({displayName:"ErrorToastContainer",componentId:"sc-fvmqid-1"})(["text-align:right;"]);M.displayName="ErrorToastContainer"},148:function(t,e,n){"use strict";n.d(e,"e",(function(){return f})),n.d(e,"j",(function(){return b})),n.d(e,"c",(function(){return p})),n.d(e,"k",(function(){return g})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"d",(function(){return h})),n.d(e,"f",(function(){return O})),n.d(e,"b",(function(){return E})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return T}));var r=n(75),o=n.n(r),a=n(9),c=n(2),i=n(58),u=n(81),s=n(3),l=n(127),d=n(424);const f=()=>Object(d.c)(s.C),b=()=>{const t=Object(d.c)(s.D);return"Browser"===t?o.a.tz.guess():t},p=()=>Object(d.b)().services.http.basePath.get(),g=()=>Object(d.b)().services.notifications.toasts,m=()=>Object(d.b)().services.http,y=t=>t.reduce(((t,e)=>Object(i.isArray)(e)?[...t,y(e)]:Object(i.isObject)(e)?[...t,j(e)]:[...t,e]),[]),j=t=>Object.entries(t).reduce(((t,[e,n])=>(Object(i.isArray)(n)?Object(u.set)(t,Object(i.camelCase)(e),y(n)):Object(i.isObject)(n)?Object(u.set)(t,Object(i.camelCase)(e),j(n)):Object(u.set)(t,Object(i.camelCase)(e),n),t)),{}),h=()=>{const t=Object(a.useRef)(!1),[e,n]=Object(a.useState)(null),[,r]=Object(l.h)(),{security:o}=Object(d.b)().services,i=Object(a.useCallback)((()=>{let e=!1;return(async()=>{try{if(null!=o){const r=await o.authc.getCurrentUser();if(!t.current)return;e||n(j(r))}else n({username:c.i18n.translate("xpack.securitySolution.getCurrentUser.unknownUser",{defaultMessage:"Unknown"}),email:"",fullName:"",roles:[],enabled:!1,authenticationRealm:{name:"",type:""},lookupRealm:{name:"",type:""},authenticationProvider:""})}catch(t){e||(Object(l.g)({title:c.i18n.translate("xpack.securitySolution.getCurrentUser.Error",{defaultMessage:"Error getting user"}),error:t.body&&t.body.message?new Error(t.body.message):t,dispatchToaster:r}),n(null))}})(),()=>{e=!0}}),[o]);return Object(a.useEffect)((()=>(t.current=!0,i(),()=>{t.current=!1})),[]),e},O=()=>{const[t,e]=Object(a.useState)(null),n=Object(d.b)().services.application.capabilities;return Object(a.useEffect)((()=>{const t="boolean"==typeof n.siem.crud_cases&&n.siem.crud_cases,r="boolean"==typeof n.siem.read_cases&&n.siem.read_cases;e({crud:t,read:r})}),[n]),t},E=()=>{const{getUrlForApp:t}=Object(d.b)().services.application;return{getAppUrl:Object(a.useCallback)((({appId:e=s.l,...n})=>t(e,n)),[t])}},v=()=>{const{navigateToApp:t,navigateToUrl:e}=Object(d.b)().services.application;return{navigateTo:Object(a.useCallback)((({url:n,appId:r=s.l,...o})=>{n?e(n):t(r,o)}),[t,e])}},T=()=>{const{navigateTo:t}=v(),{getAppUrl:e}=E();return{navigateTo:t,getAppUrl:e}}},424:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var r=n(63);n.d(e,"a",(function(){return r.KibanaContextProvider})),n.d(e,"c",(function(){return r.useUiSetting})),n.d(e,"d",(function(){return r.useUiSetting$}));const o=()=>Object(r.useKibana)()},90:function(t,e,n){"use strict";var r=n(148);n.d(e,"c",(function(){return r.a})),n.d(e,"d",(function(){return r.b})),n.d(e,"e",(function(){return r.c})),n.d(e,"f",(function(){return r.d})),n.d(e,"g",(function(){return r.e})),n.d(e,"h",(function(){return r.f})),n.d(e,"i",(function(){return r.g})),n.d(e,"k",(function(){return r.i})),n.d(e,"l",(function(){return r.j})),n.d(e,"m",(function(){return r.k}));var o=n(424);n.d(e,"a",(function(){return o.a})),n.d(e,"j",(function(){return o.b})),n.d(e,"n",(function(){return o.c})),n.d(e,"o",(function(){return o.d}));var a=n(37);n.d(e,"b",(function(){return a.a}))},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"r",(function(){return i})),n.d(e,"t",(function(){return u})),n.d(e,"q",(function(){return s})),n.d(e,"s",(function(){return l})),n.d(e,"h",(function(){return y})),n.d(e,"g",(function(){return j})),n.d(e,"l",(function(){return h})),n.d(e,"k",(function(){return O})),n.d(e,"p",(function(){return E})),n.d(e,"o",(function(){return v})),n.d(e,"m",(function(){return T})),n.d(e,"f",(function(){return C})),n.d(e,"n",(function(){return k})),n.d(e,"i",(function(){return w})),n.d(e,"u",(function(){return _})),n.d(e,"v",(function(){return A})),n.d(e,"j",(function(){return M})),n.d(e,"b",(function(){return U})),n.d(e,"e",(function(){return P}));var r="draggable-keyboard-wrapper",o="is-dragging",a="hover-actions-always-show",c=n(19),i=function(t){return Object(c.has)("message",t)&&Object(c.has)("body.message",t)&&Object(c.has)("body.statusCode",t)},u=function(t){return Object(c.has)("message",t)&&Object(c.has)("body.message",t)&&Object(c.has)("body.status_code",t)},s=function(t){return i(t)||u(t)},l=function(t){return i(t)&&404===t.body.statusCode||u(t)&&404===t.body.status_code},d="draggableId",f="droppableId",b="".concat(d,".content."),p="".concat(d,".timelineProviders."),g="".concat(d,".field."),m="".concat(f,".content."),y=("".concat(f,".field."),"".concat(f,".timelineProviders.")),j="".concat(f,".timelineColumns."),h=("".concat(f,".flyoutButton."),function(t){return"".concat(b).concat(t)}),O=function(t){var e=t.contextId,n=t.fieldId;return"".concat(g).concat(S(e),".").concat(x(n))},E=function(t){var e=t.groupIndex,n=t.timelineId;return"".concat(y).concat(n,".group.").concat(e)},v=function(t){var e=t.dataProviderId,n=t.groupIndex,r=t.timelineId;return"".concat(p).concat(r,".group.").concat(n,".").concat(e)},T=function(t){return"".concat(m).concat(t)},C=function(t){return t.draggableId.startsWith(g)},I=function(t){return"DROP"===t.reason},k=function(t){return t.draggableId.substring(t.draggableId.lastIndexOf(".")+1)},w=function(t){return t.replace(/\./g,"_")},S=function(t){return t.replace(/\./g,"_")},x=function(t){return t.replace(/\./g,"!!!DOT!!!")},_=function(t){return I(t)&&function(t){return t.draggableId.startsWith(b)}(t)&&function(t){return t.source.droppableId.startsWith(m)}(t)&&function(t){return null!=t.destination&&t.destination.droppableId.startsWith(y)}(t)},A=function(t){return I(t)&&function(t){var e=/^droppableId\.timelineProviders\.(\S+)\./,n=t.source.droppableId.match(e)||[],r=t.destination&&t.destination.droppableId.match(e)||[];return n.length>=2&&r.length>=2&&n[1]===r[1]}(t)},M=function(t){return I(t)&&C(t)&&function(t){return null!=t.destination&&t.destination.droppableId.startsWith(j)}(t)},U="drag-type-field",P="is-timeline-field-dragging"}}]);