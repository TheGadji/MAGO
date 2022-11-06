/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[19],{242:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(150);function c(e,t,a){const c=["kuery"===t.language?Object(n.f)(Object(n.d)(t.query)):Object(n.e)(t.query)],i=[];for(const t of e){if(t.meta.disabled||void 0!==a&&t.meta.controlledBy===a)continue;const{meta:{negate:e,type:n,key:o}}=t;let s=t.query;void 0===s&&"exists"===n&&(s={exists:{field:o}}),s&&(e?i.push(s):c.push(s))}return{bool:{must:c,must_not:i}}}},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(23),c=a(25),i=a(8),o=a(26);function s(e,t,a){return e.pipe(Object(c.pluck)("jobIds"),Object(c.distinctUntilChanged)(i.isEqual),Object(c.switchMap)((e=>t.getJobs$(e))),Object(c.map)((e=>e.map((e=>{const t=Object(o.a)(e.analysis_config.bucket_span);return{id:e.job_id,selected:!0,bucketSpanSeconds:t.asSeconds()}})))),Object(c.catchError)((e=>{var t;return a(null!==(t=e.body)&&void 0!==t?t:e),Object(n.of)(void 0)})))}},763:function(e,t,a){"use strict";a.r(t),a.d(t,"EmbeddableSwimLaneContainer",(function(){return g}));var n=a(15),c=a(40),i=a(41),o=a(23),s=a(25),r=a(99),b=a(78),l=a(43),d=a(152),u=a(45),j=a(242),O=a(37),m=a(243);var p=a(162),f=a(11);const g=({id:e,embeddableContext:t,embeddableInput:a,services:g,refresh:v,onInputChange:S,onOutputChange:w,onRenderComplete:y,onLoading:E,onError:h})=>{const[M,_]=Object(n.useState)(0),[T,x]=Object(n.useState)(1),[{},{uiActions:C}]=g,[I,L]=Object(n.useState)(),[R,k,A,P,B,F,D]=function(e,t,a,c,i,p,f){const[{uiSettings:g},,{anomalyTimelineService:v,anomalyDetectorService:S}]=c,[w,y]=Object(n.useState)(),[E,h]=Object(n.useState)(),[M,_]=Object(n.useState)(),[T,x]=Object(n.useState)(),[C,I]=Object(n.useState)(!1),L=Object(n.useMemo)((()=>new o.Subject),[]),R=Object(n.useMemo)((()=>Object(m.a)(e,S,_).pipe(Object(s.shareReplay)(1))),[]),k=Object(n.useMemo)((()=>Object(o.combineLatest)([R,L,e.pipe(Object(s.pluck)("timeRange"))]).pipe(Object(s.skipWhile)((([e,t])=>!Array.isArray(e)||!t)),Object(s.tap)((([,,e])=>{v.setTimeRange(e)})),Object(s.map)((([e,t])=>v.getSwimlaneBucketInterval(e,t))),Object(s.distinctUntilChanged)(((e,t)=>e.asSeconds()===t.asSeconds())))),[]),A=Object(n.useMemo)((()=>new o.Subject),[]),P=Object(n.useMemo)((()=>new o.Subject),[]),B=Object(n.useMemo)((()=>new r.a({"histogram:maxBars":g.get(l.UI_SETTINGS.HISTOGRAM_MAX_BARS),"histogram:barTarget":g.get(l.UI_SETTINGS.HISTOGRAM_BAR_TARGET),dateFormat:g.get("dateFormat"),"dateFormat:scaled":g.get("dateFormat:scaled")})),[]);return Object(n.useEffect)((()=>{const n=Object(o.combineLatest)([R,e,k,A,P.pipe(Object(s.startWith)(void 0),Object(s.distinctUntilChanged)(((e,t)=>void 0===e&&t===b.i))),a.pipe(Object(s.startWith)(null))]).pipe(Object(s.tap)(I.bind(null,!0)),Object(s.debounceTime)(500),Object(s.tap)((()=>{f.onLoading()})),Object(s.switchMap)((([e,a,n,c,i])=>{if(!e)return Object(o.of)(void 0);const{viewBy:r,swimlaneType:l,perPage:m,filters:p,query:f,viewMode:g}=a;let S;E||h(l);try{S=Object(j.a)(p,f,O.CONTROLLED_BY_SWIM_LANE_FILTER)}catch(e){return _(e),Object(o.of)(void 0)}return Object(o.from)(v.loadOverallData(e,void 0,n)).pipe(Object(s.switchMap)((a=>{const{earliest:j,latest:O}=a;var p;return a&&l===b.h.VIEW_BY?(void 0===i&&x(null!=m?m:b.i),g===u.ViewMode.EDIT&&i!==m&&t({perPage:i}),Object(o.from)(v.loadViewBySwimlane([],{earliest:j,latest:O},e,r,Object(d.c)(w)?w.cardinality:b.a,null!==(p=null!=i?i:m)&&void 0!==p?p:b.i,c,void 0,S,n)).pipe(Object(s.map)((e=>({...e,earliest:j,latest:O}))))):Object(o.of)(a)})))})),Object(s.catchError)((e=>(_(e.body),Object(o.of)(void 0))))).subscribe((e=>{void 0!==e&&(_(null),y(e),I(!1))}));return()=>{n.unsubscribe()}}),[]),Object(n.useEffect)((()=>{A.next(p)}),[p]),Object(n.useEffect)((()=>{void 0!==T&&P.next(T)}),[T]),Object(n.useEffect)((()=>{L.next(i)}),[i]),Object(n.useEffect)((()=>{M&&f.onError(M)}),[M]),Object(n.useEffect)((()=>{w&&f.onRenderComplete()}),[w]),[E,w,null!=T?T:b.i,x,B,C,M]}(a,S,v,g,M,T,{onRenderComplete:y,onError:h,onLoading:E});Object(n.useEffect)((()=>{w({perPage:A,fromPage:T,interval:null==k?void 0:k.interval})}),[A,T,k]);const W=Object(n.useCallback)((e=>{L(e),e&&C.getTrigger(p.a).exec({embeddable:t,data:e,updateCallback:L.bind(null,void 0)})}),[k,A,T,L]);return D?Object(f.jsx)(c.EuiCallOut,{title:Object(f.jsx)(i.FormattedMessage,{id:"xpack.ml.swimlaneEmbeddable.errorMessage",defaultMessage:"Unable to load the ML swim lane data"}),color:"danger",iconType:"alert",style:{width:"100%"}},Object(f.jsx)("p",null,D.message)):Object(f.jsx)("div",{style:{width:"100%",padding:"8px"},"data-test-subj":"mlAnomalySwimlaneEmbeddableWrapper"},Object(f.jsx)(d.b,{id:e,"data-test-subj":`mlSwimLaneEmbeddable_${t.id}`,timeBuckets:B,swimlaneData:k,swimlaneType:R,fromPage:T,perPage:A,swimlaneLimit:Object(d.c)(k)?k.cardinality:void 0,onResize:_,selection:I,onCellsSelection:W,onPaginationChange:e=>{e.fromPage&&x(e.fromPage),e.perPage&&(x(1),P(e.perPage))},isLoading:F,noDataWarning:Object(f.jsx)(i.FormattedMessage,{id:"xpack.ml.swimlaneEmbeddable.noDataFound",defaultMessage:"No anomalies found"})}))};t.default=g}}]);