/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t){n.exports=__kbnSharedDeps__.Lodash},function(n,t,e){"use strict";let r;e.r(t),e.d(t,"InvalidEmailReason",(function(){return r})),e.d(t,"isActionTypeExecutorResult",(function(){return u})),e.d(t,"ALERT_HISTORY_PREFIX",(function(){return a})),e.d(t,"AlertHistoryDefaultIndexName",(function(){return l})),e.d(t,"AlertHistoryEsIndexConnectorId",(function(){return s})),e.d(t,"buildAlertHistoryDocument",(function(){return c})),e.d(t,"AlertHistoryDocumentTemplate",(function(){return d})),e.d(t,"MustacheInEmailRegExp",(function(){return f})),e.d(t,"hasMustacheTemplate",(function(){return p})),e.d(t,"withoutMustacheTemplate",(function(){return m})),e.d(t,"validateEmailAddressesAsAlwaysValid",(function(){return _})),e.d(t,"validateEmailAddresses",(function(){return b})),e.d(t,"invalidEmailsAsMessage",(function(){return h})),e.d(t,"serviceNowITSMTable",(function(){return A})),e.d(t,"serviceNowSIRTable",(function(){return y})),e.d(t,"ServiceNowITSMActionTypeId",(function(){return x})),e.d(t,"ServiceNowSIRActionTypeId",(function(){return I})),e.d(t,"ServiceNowITOMActionTypeId",(function(){return S})),e.d(t,"snExternalServiceConfig",(function(){return w})),e.d(t,"FIELD_PREFIX",(function(){return E})),e.d(t,"DEFAULT_ALERTS_GROUPING_KEY",(function(){return T})),e.d(t,"BASE_ACTION_API_PATH",(function(){return O})),e.d(t,"INTERNAL_BASE_ACTION_API_PATH",(function(){return N})),e.d(t,"ACTIONS_FEATURE_ID",(function(){return j})),e.d(t,"AdditionalEmailServices",(function(){return P})),function(n){n.invalid="invalid",n.notAllowed="notAllowed"}(r||(r={}));const i=["ok","error"];function u(n){const t=n;return t&&"string"==typeof(null==t?void 0:t.actionId)&&i.includes(null==t?void 0:t.status)}var o=e(0);const a="kibana-alert-history-",l=`${a}default`,s="preconfigured-alert-history-es-index",c=n=>{const{date:t,alert:e,context:r,params:i,tags:u,rule:a}=n;if(!e||!a)return null;const{actionGroup:l,actionGroupName:s,id:c}=e,{id:d,name:f,spaceId:p,type:m}=a;if(!m)return null;const v=m.replace(/\./g,"__"),_={...d?{id:d}:{},...f?{name:f}:{},...Object(o.isEmpty)(i)?{}:{params:{[v]:i}},...p?{space:p}:{},...m?{type:m}:{}},b={...c?{id:c}:{},...Object(o.isEmpty)(r)?{}:{context:{[v]:r}},...l?{actionGroup:l}:{},...s?{actionGroupName:s}:{}},h={"@timestamp":t||(new Date).toISOString(),...u&&u.length>0?{tags:u}:{},...null!=r&&r.message?{message:r.message}:{},...Object(o.isEmpty)(_)?{}:{rule:_},...Object(o.isEmpty)(b)?{}:{kibana:{alert:b}}};return Object(o.isEmpty)(h)?null:{...h,event:{kind:"alert"}}},d=Object.freeze(c({rule:{id:"{{rule.id}}",name:"{{rule.name}}",type:"{{rule.type}}",spaceId:"{{rule.spaceId}}"},context:"{{context}}",params:"{{params}}",tags:"{{rule.tags}}",alert:{id:"{{alert.id}}",actionGroup:"{{alert.actionGroup}}",actionGroupName:"{{alert.actionGroupName}}"}})),f=/\{\{((.|\n)*)\}\}/;function p(n){return!!n.match(f)}function m(n){return n.filter((n=>!p(n)))}var v=e(3);function _(n){return n.map((n=>({address:n,valid:!0})))}function b(n,t,e={}){return null==n?_(t):t.map((t=>function(n,t,e){if(e.treatMustacheTemplatesAsValid&&p(t))return{address:t,valid:!0};try{return function(n,t){const e=Object(v.parseAddressList)(t);if(null==e)return{address:t,valid:!1,reason:r.invalid};const i=new Set(n);for(const n of e){let e=[];if("group"===n.type)e=n.addresses.map((n=>n.domain));else{if("mailbox"!==n.type)return{address:t,valid:!1,reason:r.invalid};e=[n.domain]}for(const n of e)if(!i.has(n))return{address:t,valid:!1,reason:r.notAllowed}}return{address:t,valid:!0}}(n,t)}catch(n){return{address:t,valid:!1,reason:r.invalid}}}(n,t,e)))}function h(n){const t=n.filter((n=>!n.valid&&n.reason===r.invalid)),e=n.filter((n=>!n.valid&&n.reason===r.notAllowed)),i=[];if(0!==t.length&&i.push(`not valid emails: ${g(t).join(", ")}`),0!==e.length&&i.push(`not allowed emails: ${g(e).join(", ")}`),0!==i.length)return i.join("; ")}function g(n){return n.map((n=>n.address))}const A="incident",y="sn_si_incident",x=".servicenow",I=".servicenow-sir",S=".servicenow-itom",w={".servicenow":{importSetTable:"x_elas2_inc_int_elastic_incident",appScope:"x_elas2_inc_int",table:"incident",useImportAPI:!0,commentFieldKey:"work_notes",appId:"7148dbc91bf1f450ced060a7234bcb88"},".servicenow-sir":{importSetTable:"x_elas2_sir_int_elastic_si_incident",appScope:"x_elas2_sir_int",table:"sn_si_incident",useImportAPI:!0,commentFieldKey:"work_notes",appId:"2f0746801baeb01019ae54e4604bcb0f"},".servicenow-itom":{importSetTable:"x_elas2_inc_int_elastic_incident",appScope:"x_elas2_inc_int",table:"em_event",useImportAPI:!1,commentFieldKey:"work_notes"}},E="u_",T="{{rule.id}}:{{alert.id}}",O="/api/actions",N="/internal/actions",j="actions";let P;!function(n){n.ELASTIC_CLOUD="elastic_cloud",n.EXCHANGE="exchange_server",n.OTHER="other"}(P||(P={}))},function(n,t,e){n.exports=e(6)(1074)},function(n,t,e){!function(t){"use strict";function e(n){function t(){return wn<En}function e(){return wn}function i(n){wn=n}function u(){wn=0,En=Sn.length}function o(n,t){return{name:n,tokens:t||"",semantic:t||"",children:[]}}function a(n,t){var e;return null===t?null:((e=o(n)).tokens=t.tokens,e.semantic=t.semantic,e.children.push(t),e)}function l(n,t){return null!==t&&(n.tokens+=t.tokens,n.semantic+=t.semantic),n.children.push(t),n}function s(n){var e;return t()&&n(e=Sn[wn])?(wn+=1,o("token",e)):null}function c(){return null}function d(n){return function(){return a("literal",s((function(t){return t===n})))}}function f(){var n=arguments;return function(){var t,r,u,a;for(a=e(),r=o("and"),t=0;t<n.length;t+=1){if(null===(u=n[t]()))return i(a),null;l(r,u)}return r}}function p(){var n=arguments;return function(){var t,r,u;for(u=e(),t=0;t<n.length;t+=1){if(null!==(r=n[t]()))return r;i(u)}return null}}function m(n){return function(){var t,r;return r=e(),null!==(t=n())?t:(i(r),o("opt"))}}function v(n){return function(){var t=n();return null!==t&&(t.semantic=""),t}}function _(n){return function(){var t=n();return null!==t&&t.semantic.length>0&&(t.semantic=" "),t}}function b(n,t){return function(){var r,u,a,s,c;for(s=e(),r=o("star"),a=0,c=void 0===t?0:t;null!==(u=n());)a+=1,l(r,u);return a>=c?r:(i(s),null)}}function h(n){return n.charCodeAt(0)>=128}function g(){return a("cr",d("\r")())}function A(){return a("crlf",f(g,I)())}function y(){return a("dquote",d('"')())}function x(){return a("htab",d("\t")())}function I(){return a("lf",d("\n")())}function S(){return a("sp",d(" ")())}function w(){return a("vchar",s((function(t){var e=t.charCodeAt(0),r=33<=e&&e<=126;return n.rfc6532&&(r=r||h(t)),r})))}function E(){return a("wsp",p(S,x)())}function T(){var n=a("quoted-pair",p(f(d("\\"),p(w,E)),un)());return null===n?null:(n.semantic=n.semantic[1],n)}function O(){return a("fws",p(an,f(m(f(b(E),v(A))),b(E,1)))())}function N(){return a("ctext",p((function(){return s((function(t){var e=t.charCodeAt(0),r=33<=e&&e<=39||42<=e&&e<=91||93<=e&&e<=126;return n.rfc6532&&(r=r||h(t)),r}))}),en)())}function j(){return a("ccontent",p(N,T,P)())}function P(){return a("comment",f(d("("),b(f(m(O),j)),m(O),d(")"))())}function D(){return a("cfws",p(f(b(f(m(O),P),1),m(O)),O)())}function R(){return a("atext",s((function(t){var e="a"<=t&&t<="z"||"A"<=t&&t<="Z"||"0"<=t&&t<="9"||["!","#","$","%","&","'","*","+","-","/","=","?","^","_","`","{","|","}","~"].indexOf(t)>=0;return n.rfc6532&&(e=e||h(t)),e})))}function k(){return a("atom",f(_(m(D)),b(R,1),_(m(D)))())}function C(){var n,t;return null===(n=a("dot-atom-text",b(R,1)()))||null!==(t=b(f(d("."),b(R,1)))())&&l(n,t),n}function L(){return a("dot-atom",f(v(m(D)),C,v(m(D)))())}function M(){return a("qtext",p((function(){return s((function(t){var e=t.charCodeAt(0),r=33===e||35<=e&&e<=91||93<=e&&e<=126;return n.rfc6532&&(r=r||h(t)),r}))}),rn)())}function G(){return a("qcontent",p(M,T)())}function F(){return a("quoted-string",f(v(m(D)),v(y),b(f(m(_(O)),G)),m(v(O)),v(y),v(m(D)))())}function H(){return a("word",p(k,F)())}function q(){return a("address",p($,U)())}function $(){return a("mailbox",p(B,nn)())}function B(){return a("name-addr",f(m(X),K)())}function K(){return a("angle-addr",p(f(v(m(D)),d("<"),nn,d(">"),v(m(D))),ln)())}function U(){return a("group",f(X,d(":"),m(W),d(";"),v(m(D)))())}function X(){return a("display-name",(null!==(n=a("phrase",p(on,b(H,1))()))&&(n.semantic=n.semantic.replace(/([ \t]|\r\n)+/g," ").replace(/^\s*/,"").replace(/\s*$/,"")),n));var n}function z(){return a("mailbox-list",p(f($,b(f(d(","),$))),dn)())}function V(){return a("address-list",p(f(q,b(f(d(n.addressListSeparator),q))),fn)())}function W(){return a("group-list",p(z,v(D),pn)())}function Y(){return a("local-part",p(mn,L,F)())}function Z(){return a("dtext",p((function(){return s((function(t){var e=t.charCodeAt(0),r=33<=e&&e<=90||94<=e&&e<=126;return n.rfc6532&&(r=r||h(t)),r}))}),_n)())}function J(){return a("domain-literal",f(v(m(D)),d("["),b(f(m(O),Z)),m(O),d("]"),v(m(D)))())}function Q(){return a("domain",(t=p(vn,L,J)(),n.rejectTLD&&t&&t.semantic&&t.semantic.indexOf(".")<0?null:(t&&(t.semantic=t.semantic.replace(/\s+/g,"")),t)));var t}function nn(){return a("addr-spec",f(Y,d("@"),Q)())}function tn(){return n.strict?null:a("obs-NO-WS-CTL",s((function(n){var t=n.charCodeAt(0);return 1<=t&&t<=8||11===t||12===t||14<=t&&t<=31||127===t})))}function en(){return n.strict?null:a("obs-ctext",tn())}function rn(){return n.strict?null:a("obs-qtext",tn())}function un(){return n.strict?null:a("obs-qp",f(d("\\"),p(d("\0"),tn,I,g))())}function on(){return n.strict?null:a("obs-phrase",f(H,b(p(H,d("."),n.atInDisplayName?d("@"):c,n.commaInDisplayName?d(","):c,_(D))))())}function an(){return n.strict?null:a("obs-FWS",b(f(v(m(A)),E),1)())}function ln(){return n.strict?null:a("obs-angle-addr",f(v(m(D)),d("<"),sn,nn,d(">"),v(m(D)))())}function sn(){return n.strict?null:a("obs-route",f(cn,d(":"))())}function cn(){return n.strict?null:a("obs-domain-list",f(b(p(v(D),d(","))),d("@"),Q,b(f(d(","),v(m(D)),m(f(d("@"),Q)))))())}function dn(){return n.strict?null:a("obs-mbox-list",f(b(f(v(m(D)),d(","))),$,b(f(d(","),m(f($,v(D))))))())}function fn(){return n.strict?null:a("obs-addr-list",f(b(f(v(m(D)),d(","))),q,b(f(d(","),m(f(q,v(D))))))())}function pn(){return n.strict?null:a("obs-group-list",f(b(f(v(m(D)),d(",")),1),v(m(D)))())}function mn(){return n.strict?null:a("obs-local-part",f(H,b(f(d("."),H)))())}function vn(){return n.strict?null:a("obs-domain",f(k,b(f(d("."),k)))())}function _n(){return n.strict?null:a("obs-dtext",p(tn,T)())}function bn(n,t){var e,r,i;if(null==t)return null;for(r=[t];r.length>0;){if((i=r.pop()).name===n)return i;for(e=i.children.length-1;e>=0;e-=1)r.push(i.children[e])}return null}function hn(n,t){var e,r,i,u,o;if(null==t)return null;for(r=[t],u=[],o={},e=0;e<n.length;e+=1)o[n[e]]=!0;for(;r.length>0;)if((i=r.pop()).name in o)u.push(i);else for(e=i.children.length-1;e>=0;e-=1)r.push(i.children[e]);return u}function gn(t){var e,r,i,u,o;if(null===t)return null;for(e=[],r=hn(["group","mailbox"],t),i=0;i<r.length;i+=1)"group"===(u=r[i]).name?e.push(An(u)):"mailbox"===u.name&&e.push(yn(u));return o={ast:t,addresses:e},n.simple&&(o=function(n){var t;if(n&&n.addresses)for(t=0;t<n.addresses.length;t+=1)delete n.addresses[t].node;return n}(o)),n.oneResult?function(t){if(!t)return null;if(!n.partial&&t.addresses.length>1)return null;return t.addresses&&t.addresses[0]}(o):n.simple?o&&o.addresses:o}function An(n){var t,e=bn("display-name",n),r=[],i=hn(["mailbox"],n);for(t=0;t<i.length;t+=1)r.push(yn(i[t]));return{node:n,parts:{name:e},type:n.name,name:xn(e),addresses:r}}function yn(n){var t=bn("display-name",n),e=bn("addr-spec",n),r=function(n,t){var e,r,i,u;if(null==t)return null;for(r=[t],u=[];r.length>0;)for((i=r.pop()).name===n&&u.push(i),e=i.children.length-1;e>=0;e-=1)r.push(i.children[e]);return u}("cfws",n),i=hn(["comment"],n),u=bn("local-part",e),o=bn("domain",e);return{node:n,parts:{name:t,address:e,local:u,domain:o,comments:r},type:n.name,name:xn(t),address:xn(e),local:xn(u),domain:xn(o),comments:In(i),groupName:xn(n.groupName)}}function xn(n){return null!=n?n.semantic:null}function In(n){var t="";if(n)for(var e=0;e<n.length;e+=1)t+=xn(n[e]);return t}var Sn,wn,En,Tn,On;if(null===(n=r(n,{})))return null;if(Sn=n.input,On={address:q,"address-list":V,"angle-addr":K,from:function(){return a("from",p(z,V)())},group:U,mailbox:$,"mailbox-list":z,"reply-to":function(){return a("reply-to",V())},sender:function(){return a("sender",p($,q)())}}[n.startAt]||V,!n.strict){if(u(),n.strict=!0,Tn=On(Sn),n.partial||!t())return gn(Tn);n.strict=!1}return u(),Tn=On(Sn),!n.partial&&t()?null:gn(Tn)}function r(n,t){function e(n){return"[object String]"===Object.prototype.toString.call(n)}function r(n){return null==n}var i,u;if(e(n))n={input:n};else if(!function(n){return n===Object(n)}(n))return null;if(!e(n.input))return null;if(!t)return null;for(u in i={oneResult:!1,partial:!1,rejectTLD:!1,rfc6532:!1,simple:!1,startAt:"address-list",strict:!1,atInDisplayName:!1,commaInDisplayName:!1,addressListSeparator:","})r(n[u])&&(n[u]=r(t[u])?i[u]:t[u]);return n}e.parseOneAddress=function(n){return e(r(n,{oneResult:!0,rfc6532:!0,simple:!0,startAt:"address-list"}))},e.parseAddressList=function(n){return e(r(n,{rfc6532:!0,simple:!0,startAt:"address-list"}))},e.parseFrom=function(n){return e(r(n,{rfc6532:!0,simple:!0,startAt:"from"}))},e.parseSender=function(n){return e(r(n,{oneResult:!0,rfc6532:!0,simple:!0,startAt:"sender"}))},e.parseReplyTo=function(n){return e(r(n,{rfc6532:!0,simple:!0,startAt:"reply-to"}))},void 0!==n.exports?n.exports=e:t.emailAddresses=e}(this)},function(n,t,e){e(5),__kbnBundles__.define("plugin/actions/public",e,7),__kbnBundles__.define("plugin/actions/common",e,1)},function(n,t,e){e.p=window.__kbnPublicPath__.actions},function(n,t){n.exports=__kbnSharedDeps_npm__},function(n,t,e){"use strict";e.r(t),e.d(t,"Plugin",(function(){return plugin_Plugin})),e.d(t,"plugin",(function(){return o}));var r=e(2),i=e.n(r),u=e(1);class plugin_Plugin{constructor(n){var t;i()(this,"allowedEmailDomains",null);const e=n.config.get();this.allowedEmailDomains=(null===(t=e.email)||void 0===t?void 0:t.domain_allowlist)||null}setup(){return{validateEmailAddresses:(n,t)=>Object(u.validateEmailAddresses)(this.allowedEmailDomains,n,t)}}start(){}}function o(n){return new plugin_Plugin(n)}}]);