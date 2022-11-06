!function(e){function t(t){for(var n,i,s=t[0],r=t[1],o=0,p=[];o<s.length;o++)i=s[o],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(c&&c(t);p.length;)p.shift()()}var n={},a={0:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,i){n=a[e]=[t,i]}));t.push(n[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"management.chunk."+e+".js"}(e);var c=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}a[e]=void 0}};var p=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window.management_bundle_jsonpfunction=window.management_bundle_jsonpfunction||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var c=r;i(i.s=7)}([function(e,t,n){e.exports=n(9)(1074)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return management_app_ManagementApp})),n.d(t,"c",(function(){return management_section_ManagementSection}));const a={text:n(1).i18n.translate("management.breadcrumb",{defaultMessage:"Stack Management"}),href:"/"};var i=n(0),s=n.n(i);class management_item_ManagementItem{constructor({id:e,title:t,tip:n,order:a=100,euiIconType:i,icon:r}){s()(this,"id",""),s()(this,"title",void 0),s()(this,"tip",void 0),s()(this,"order",void 0),s()(this,"euiIconType",void 0),s()(this,"icon",void 0),s()(this,"enabled",!0),this.id=e,this.title=t,this.tip=n,this.order=a,this.euiIconType=i,this.icon=r}disable(){this.enabled=!1}enable(){this.enabled=!0}}class management_app_ManagementApp extends management_item_ManagementItem{constructor(e){super(e),s()(this,"mount",void 0),s()(this,"basePath",void 0),s()(this,"keywords",void 0),this.mount=e.mount,this.basePath=e.basePath,this.keywords=e.keywords||[]}}class management_section_ManagementSection extends management_item_ManagementItem{constructor(e){super(e),s()(this,"apps",[])}registerApp(e){if(this.getApp(e.id))throw new Error(`Management app already registered - id: ${e.id}, title: ${e.title}`);const t=new management_app_ManagementApp({...e,basePath:`/${this.id}/${e.id}`});return this.apps.push(t),t}getApp(e){return this.apps.find((t=>t.id===e))}getAppsEnabled(){return this.apps.filter((e=>e.enabled))}}},function(e,t,n){n.r(t);var a=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/home/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n(8),__kbnBundles__.define("plugin/management/public",n,10)},function(e,t,n){n.p=window.__kbnPublicPath__.management},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return I})),n.d(t,"ManagementSection",(function(){return d.c})),n.d(t,"ManagementApp",(function(){return d.b})),n.d(t,"MANAGEMENT_APP_ID",(function(){return p}));var a=n(0),i=n.n(a),s=n(1),r=n(4),o=n(5),c=n(3);const p="management";class locator_ManagementAppLocatorDefinition{constructor(){i()(this,"id","MANAGEMENT_APP_LOCATOR"),i()(this,"getLocation",(async e=>{const t=`/${e.sectionId}${e.appId?"/"+e.appId:""}`;return{app:p,path:t,state:{}}}))}}var d=n(2);let u;!function(e){e.Ingest="ingest",e.Data="data",e.InsightsAndAlerting="insightsAndAlerting",e.Security="security",e.Kibana="kibana",e.Stack="stack"}(u||(u={}));const l=s.i18n.translate("management.sections.ingestTitle",{defaultMessage:"Ingest"}),g=s.i18n.translate("management.sections.ingestTip",{defaultMessage:"Manage how to transform data and load it into the cluster"}),m=s.i18n.translate("management.sections.dataTitle",{defaultMessage:"Data"}),h=s.i18n.translate("management.sections.dataTip",{defaultMessage:"Manage your cluster data and backups"}),f=s.i18n.translate("management.sections.insightsAndAlertingTitle",{defaultMessage:"Alerts and Insights"}),_=s.i18n.translate("management.sections.insightsAndAlertingTip",{defaultMessage:"Manage how to detect changes in your data"}),b=s.i18n.translate("management.sections.section.title",{defaultMessage:"Security"}),S=s.i18n.translate("management.sections.section.tip",{defaultMessage:"Control access to features and data"}),y=s.i18n.translate("management.sections.kibanaTitle",{defaultMessage:"Kibana"}),k=s.i18n.translate("management.sections.kibanaTip",{defaultMessage:"Customize Kibana and manage saved objects"}),M=s.i18n.translate("management.sections.stackTitle",{defaultMessage:"Stack"}),v=s.i18n.translate("management.sections.stackTip",{defaultMessage:"Manage your license and upgrade the Stack"}),A={id:u.Ingest,title:l,tip:g,order:0},w={id:u.Data,title:m,tip:h,order:1},P={id:u.InsightsAndAlerting,title:f,tip:_,order:2},O={id:"security",title:b,tip:S,order:3},E={id:u.Kibana,title:y,tip:k,order:4},D={id:u.Stack,title:M,tip:v,order:4};var j=n(6);const[x,T]=Object(j.createGetterSetter)("SectionsServiceStartPrivate");class management_sections_service_ManagementSectionsService{constructor(){i()(this,"definedSections",void 0),i()(this,"sections",new Map),i()(this,"getAllSections",(()=>[...this.sections.values()])),i()(this,"registerSection",(e=>{if(this.sections.has(e.id))throw Error(`ManagementSection '${e.id}' already registered`);const t=new d.c(e);return this.sections.set(e.id,t),t})),this.definedSections={ingest:this.registerSection(A),data:this.registerSection(w),insightsAndAlerting:this.registerSection(P),security:this.registerSection(O),kibana:this.registerSection(E),stack:this.registerSection(D)}}setup(){return{register:this.registerSection,section:{...this.definedSections}}}start({capabilities:e}){return this.getAllSections().forEach((t=>{if(e.management.hasOwnProperty(t.id)){const n=e.management[t.id];t.apps.forEach((e=>{n.hasOwnProperty(e.id)&&!0!==n[e.id]&&e.disable()}))}})),T({getSectionsEnabled:()=>this.getAllSections().filter((e=>e.enabled))}),{}}}class plugin_ManagementPlugin{constructor(e){i()(this,"managementSections",new management_sections_service_ManagementSectionsService),i()(this,"appUpdater",new r.BehaviorSubject((()=>({deepLinks:Object.values(this.managementSections.definedSections).map((e=>({id:e.id,title:e.title,deepLinks:e.getAppsEnabled().map((e=>({id:e.id,title:e.title,path:e.basePath,keywords:e.keywords})))})))})))),i()(this,"hasAnyEnabledApps",!0),this.initializerContext=e}setup(e,{home:t,share:a}){const i=this.initializerContext.env.packageInfo.version,r=a.url.locators.create(new locator_ManagementAppLocatorDefinition);return t&&t.featureCatalogue.register({id:"stack-management",title:s.i18n.translate("management.stackManagement.managementLabel",{defaultMessage:"Stack Management"}),description:s.i18n.translate("management.stackManagement.managementDescription",{defaultMessage:"Your center console for managing the Elastic Stack."}),icon:"managementApp",path:"/app/management",showOnHomePage:!1,category:o.FeatureCatalogueCategory.ADMIN,visible:()=>this.hasAnyEnabledApps}),e.application.register({id:p,title:s.i18n.translate("management.stackManagement.title",{defaultMessage:"Stack Management"}),order:9040,euiIconType:"logoElastic",category:c.DEFAULT_APP_CATEGORIES.management,updater$:this.appUpdater,async mount(t){const{renderApp:a}=await n.e(1).then(n.bind(null,31)),[s]=await e.getStartServices();return a(t,{sections:x(),kibanaVersion:i,setBreadcrumbs:s.chrome.setBreadcrumbs})}}),{sections:this.managementSections.setup(),locator:r}}start(e,t){return this.managementSections.start({capabilities:e.application.capabilities}),this.hasAnyEnabledApps=x().getSectionsEnabled().some((e=>e.getAppsEnabled().length>0)),this.hasAnyEnabledApps||this.appUpdater.next((()=>({status:c.AppStatus.inaccessible,navLinkStatus:c.AppNavLinkStatus.hidden}))),{}}}function I(e){return new plugin_ManagementPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t){e.exports=__kbnSharedDeps__.Lodash}]);