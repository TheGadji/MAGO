!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){t.exports=e(1)(1074)},function(t,n){t.exports=__kbnSharedDeps_npm__},function(t,n,e){e.r(n);var r=__kbnBundles__.get("entry/core/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(t,n,e){t.exports=e(1)(1345)},function(t,n,e){e(5),__kbnBundles__.define("plugin/urlForwarding/public",e,6)},function(t,n,e){e.p=window.__kbnPublicPath__.urlForwarding},function(t,n,e){"use strict";e.r(n),e.d(n,"plugin",(function(){return u})),e.d(n,"UrlForwardingPlugin",(function(){return plugin_UrlForwardingPlugin}));var r=e(0),i=e.n(r);var a=e(2),o=e(3);const p=(t,n,e,r)=>{const i=function(t){return Object(o.normalize)(t).replace(/(\.?\.?\/?)*/,"/")}(t),a=n.find((t=>i.startsWith(`/${t.legacyAppId}`)));if(!a)return{navigated:!1};const p=a.rewritePath(i),u=a.newAppId;return r.navigateToApp(u,{path:p,replace:!0}),{navigated:!0}};class plugin_UrlForwardingPlugin{constructor(){i()(this,"forwardDefinitions",[]),i()(this,"currentAppId",void 0),i()(this,"currentAppIdSubscription",void 0)}setup(t){return t.application.register(((t,n)=>({id:"kibana",chromeless:!0,title:"Legacy URL migration",appRoute:"/app/kibana#/",navLinkStatus:a.AppNavLinkStatus.hidden,async mount(e){const r=e.history.location.hash.substr(1);if(!r){const[,,n]=await t.getStartServices();n.navigateToDefaultApp()}const[{application:i,http:{basePath:a}}]=await t.getStartServices();if(!(await p(r,n,0,i)).navigated){const[,,n]=await t.getStartServices();n.navigateToDefaultApp()}return()=>{}}}))(t,this.forwardDefinitions)),{forwardApp:(t,n,e)=>{this.forwardDefinitions.push({legacyAppId:t,newAppId:n,rewritePath:e||(n=>`#${n.replace(`/${t}`,"")||"/"}`)})}}}start({application:t,http:{basePath:n},uiSettings:e},{kibanaLegacy:r}){return this.currentAppIdSubscription=t.currentAppId$.subscribe((t=>{this.currentAppId=t})),{navigateToDefaultApp:({overwriteHash:n}={overwriteHash:!0})=>{!function(t,n,e,r,i,a){let o="kibana",p=`#/${t}`;const u=n.find((n=>t.startsWith(n.legacyAppId)));u&&(p=u.rewritePath(`/${t}`),o=u.newAppId),i!==o?e.navigateToApp(o,{path:p,replace:!0}):a&&(window.location.hash=p)}(r.config.defaultAppId,this.forwardDefinitions,t,0,this.currentAppId,n)},navigateToLegacyKibanaUrl:n=>p(n,this.forwardDefinitions,0,t),getForwards:()=>this.forwardDefinitions}}stop(){this.currentAppIdSubscription&&this.currentAppIdSubscription.unsubscribe()}}const u=()=>new plugin_UrlForwardingPlugin}]);