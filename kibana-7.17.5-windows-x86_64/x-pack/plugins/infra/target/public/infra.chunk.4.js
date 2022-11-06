/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.infra_bundle_jsonpfunction=window.infra_bundle_jsonpfunction||[]).push([[4],{102:function(t,n,r){"use strict";r.d(n,"d",(function(){return u})),r.d(n,"p",(function(){return o})),r.d(n,"q",(function(){return c})),r.d(n,"e",(function(){return d})),r.d(n,"r",(function(){return y})),r.d(n,"s",(function(){return l})),r.d(n,"a",(function(){return p})),r.d(n,"j",(function(){return m})),r.d(n,"k",(function(){return b})),r.d(n,"f",(function(){return v})),r.d(n,"t",(function(){return h})),r.d(n,"u",(function(){return x})),r.d(n,"g",(function(){return T})),r.d(n,"v",(function(){return I})),r.d(n,"w",(function(){return C})),r.d(n,"c",(function(){return S})),r.d(n,"o",(function(){return j})),r.d(n,"n",(function(){return w})),r.d(n,"b",(function(){return R})),r.d(n,"l",(function(){return A})),r.d(n,"m",(function(){return z})),r.d(n,"h",(function(){return E})),r.d(n,"x",(function(){return O})),r.d(n,"y",(function(){return D})),r.d(n,"i",(function(){return F})),r.d(n,"A",(function(){return U})),r.d(n,"z",(function(){return q})),r.d(n,"B",(function(){return M}));var e=r(0),i=r(4),a=r(82);const u="/api/infra/log_analysis/results/log_entry_categories",s=e.type({id:e.string,timeRange:i.d,bucketCount:e.number}),o=e.type({data:e.intersection([e.type({categoryCount:e.number,sourceId:e.string,timeRange:i.d,histograms:e.array(s),sort:a.e}),e.partial({datasets:e.array(e.string)})])}),c=e.intersection([e.type({data:e.type({categories:e.array(a.u)})}),e.partial({timing:i.c})]),d=(e.union([c,i.a,i.b]),"/api/infra/log_analysis/results/log_entry_category_datasets"),y=e.type({data:e.type({sourceId:e.string,timeRange:i.d})}),l=e.intersection([e.type({data:e.type({datasets:e.array(e.string)})}),e.partial({timing:i.c})]),p=(e.union([l,i.a,i.b]),"/api/infra/log_analysis/results/latest_log_entry_category_datasets_stats"),g=e.keyof({ok:null,warn:null}),m=e.type({data:e.type({jobIds:e.array(e.string),timeRange:i.d,includeCategorizerStatuses:e.array(g)})}),f=e.type({categorization_status:g,categorized_doc_count:e.number,dataset:e.string,dead_category_count:e.number,failed_category_count:e.number,frequent_category_count:e.number,job_id:e.string,log_time:e.number,rare_category_count:e.number,total_category_count:e.number}),b=e.intersection([e.type({data:e.type({datasetStats:e.array(f)})}),e.partial({timing:i.c})]);var _=r(124);const v="/api/infra/log_analysis/results/log_entry_category_examples",h=e.type({data:e.type({categoryId:e.number,exampleCount:e.number,sourceId:e.string,timeRange:i.d})}),k=e.type({id:e.string,dataset:e.string,message:e.string,timestamp:e.number,tiebreaker:e.number,context:_.c}),x=e.intersection([e.type({data:e.type({examples:e.array(k)})}),e.partial({timing:i.c})]),T=(e.union([x,i.a,i.b]),"/api/infra/log_analysis/results/log_entry_examples"),I=e.type({data:e.intersection([e.type({dataset:e.string,exampleCount:e.number,sourceId:e.string,timeRange:i.d}),e.partial({categoryId:e.string})])}),C=e.intersection([e.type({data:e.type({examples:e.array(a.v)})}),e.partial({timing:i.c})]),S=(e.union([C,i.a,i.b]),"/api/infra/log_analysis/results/log_entry_anomalies"),j=e.intersection([e.type({data:e.intersection([e.type({anomalies:e.array(a.s),hasMoreEntries:e.boolean}),e.partial({paginationCursors:e.type({previousPageCursor:a.x,nextPageCursor:a.x})})])}),e.partial({timing:i.c})]),w=e.type({data:e.intersection([e.type({sourceId:e.string,timeRange:i.d}),e.partial({pagination:a.y,sort:a.b,datasets:a.r})])}),R="/api/infra/log_analysis/results/log_entry_anomalies_datasets",A=e.type({data:e.type({sourceId:e.string,timeRange:i.d})}),z=e.intersection([e.type({data:e.type({datasets:e.array(e.string)})}),e.partial({timing:i.c})]),E=(e.union([z,i.a,i.b]),"/api/infra/log_analysis/validation/log_entry_datasets"),O=e.type({data:e.type({indices:e.array(e.string),timestampField:e.string,startTime:e.number,endTime:e.number,runtimeMappings:e.UnknownRecord})}),P=e.strict({indexName:e.string,datasets:e.array(e.string)}),D=e.type({data:e.type({datasets:e.array(P)})}),F="/api/infra/log_analysis/validation/log_entry_rate_indices",N=e.type({name:e.string,validTypes:e.array(e.string)}),U=e.type({data:e.type({fields:e.array(N),indices:e.array(e.string),runtimeMappings:e.UnknownRecord})}),q=e.union([e.type({error:e.literal("INDEX_NOT_FOUND"),index:e.string}),e.type({error:e.literal("FIELD_NOT_FOUND"),index:e.string,field:e.string}),e.type({error:e.literal("FIELD_NOT_VALID"),index:e.string,field:e.string})]),M=e.type({data:e.type({errors:e.array(q)})})},142:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return a})),r.d(n,"i",(function(){return u})),r.d(n,"g",(function(){return s})),r.d(n,"f",(function(){return o})),r.d(n,"e",(function(){return c})),r.d(n,"h",(function(){return l})),r.d(n,"c",(function(){return p})),r.d(n,"d",(function(){return g}));var e=r(0);const i=9e5,a="message",u="event.dataset",s=(t,n)=>`kibana-logs-ui-${t}-${n}-`,o=(t,n,r)=>`${s(t,n)}${r}`,c=(t,n,r)=>`datafeed-${o(t,n,r)}`,d=e.union([e.strict({type:e.literal("includeAll")}),e.strict({type:e.literal("includeSome"),datasets:e.array(e.string)})]),y=e.partial({indexPattern:e.string,timestampField:e.string,bucketSpan:e.number,datasetFilter:d}),l=e.partial({job_revision:e.number,logs_source_config:y}),p=(t,n)=>{if("includeAll"===t.type&&"includeAll"===n.type)return{type:"includeAll"};return{type:"includeSome",datasets:[...new Set([..."includeSome"===t.type?t.datasets:[],..."includeSome"===n.type?n.datasets:[]])]}},g=(t,n)=>{if("includeAll"===t.type)return t;{const r=t.datasets.filter(n);return r.length>0?{type:"includeSome",datasets:r}:{type:"includeAll"}}}},159:function(t,n,r){"use strict";r.d(n,"b",(function(){return c})),r.d(n,"a",(function(){return d}));var e=r(0),i=r(29),a=r(20),u=r(21),s=r(99);const o="sourceId",c=()=>Object(s.b)({defaultState:"default",decodeUrlState:p,encodeUrlState:l,urlStateKey:o}),d=t=>Object(s.a)(o,t),y=e.union([e.string,e[void 0]]),l=y.encode,p=t=>Object(i.pipe)(y.decode(t),Object(a.fold)(Object(u.constant)(void 0),u.identity))},164:function(t,n,r){"use strict";r.d(n,"a",(function(){return b}));var e=r(0),i=r(88);e.type({nodeId:e.string,nodeType:i.c,sourceId:e.string,timeRange:e.type({from:e.number,to:e.number})});const a=e.type({name:e.string,source:e.string}),u=e.partial({codename:e.string,family:e.string,kernel:e.string,name:e.string,platform:e.string,version:e.string,build:e.string}),s=e.partial({name:e.string,hostname:e.string,id:e.string,ip:e.array(e.string),mac:e.array(e.string),os:u,architecture:e.string,containerized:e.boolean}),o=e.partial({id:e.string,name:e.string}),c=e.partial({id:e.string,name:e.string}),d=e.partial({id:e.string}),y=e.partial({interface:e.string,type:e.string}),l=e.partial({instance:o,provider:e.string,account:c,availability_zone:e.string,project:d,machine:y,region:e.string}),p=e.partial({id:e.string,version:e.string,policy:e.string}),g=e.partial({cloud:l,host:s,agent:p}),m=e.type({id:e.string,name:e.string,features:e.array(a)}),f=e.partial({info:g}),b=e.intersection([m,f])},186:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"d",(function(){return c})),r.d(n,"b",(function(){return d})),r.d(n,"c",(function(){return y}));var e=r(0),i=r(7);const a="/api/infra/log_alerts/chart_preview_data",u=e.type({timestamp:e.number,value:e.number}),s=e.type({id:e.string,points:e.array(u)}),o=e.array(s),c=e.type({data:e.type({series:o})}),d=e.intersection([e.type({criteria:i.e,count:e.intersection([e.type({comparator:i.d.props.comparator}),e.partial({value:i.d.props.value})]),timeUnit:i.l,timeSize:i.k}),e.partial({groupBy:i.h})]),y=e.type({data:e.type({sourceId:e.string,alertParams:d,buckets:e.number})})},195:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(68),i=r(2),a=e.__importDefault(r(245));n.default=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=[]);var e=a.default(t,n),u=e[0],s=e[1],o=e[2];return i.useEffect(o,r),[u,s]}},245:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(2);n.default=function(t,n){void 0===n&&(n=0);var r=e.useRef(!1),i=e.useRef(),a=e.useRef(t),u=e.useCallback((function(){return r.current}),[]),s=e.useCallback((function(){r.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout((function(){r.current=!0,a.current()}),n)}),[n]),o=e.useCallback((function(){r.current=null,i.current&&clearTimeout(i.current)}),[]);return e.useEffect((function(){a.current=t}),[t]),e.useEffect((function(){return s(),o}),[n]),[u,o,s]}},82:function(t,n,r){"use strict";r.d(n,"p",(function(){return e})),r.d(n,"o",(function(){return a})),r.d(n,"a",(function(){return y})),r.d(n,"m",(function(){return l})),r.d(n,"h",(function(){return p})),r.d(n,"j",(function(){return g})),r.d(n,"x",(function(){return b})),r.d(n,"y",(function(){return h})),r.d(n,"w",(function(){return k})),r.d(n,"t",(function(){return x})),r.d(n,"u",(function(){return S})),r.d(n,"e",(function(){return j})),r.d(n,"c",(function(){return w.a})),r.d(n,"d",(function(){return w.b})),r.d(n,"z",(function(){return w.i})),r.d(n,"l",(function(){return w.g})),r.d(n,"k",(function(){return w.f})),r.d(n,"i",(function(){return w.e})),r.d(n,"q",(function(){return w.h})),r.d(n,"f",(function(){return w.c})),r.d(n,"g",(function(){return w.d})),r.d(n,"s",(function(){return O})),r.d(n,"r",(function(){return P})),r.d(n,"n",(function(){return D})),r.d(n,"b",(function(){return F})),r.d(n,"v",(function(){return N}));const e=t=>["started","starting","finished","stopped","failed"].includes(t),i=["kibana_sample_data_logs*"],a=t=>i.includes(t);var u=r(0);const s=3,o=25,c=50,d=75,y={critical:"rgb(228, 72, 72)",major:"rgb(229, 113, 0)",minor:"rgb(255, 221, 0)",warning:"rgb(125, 180, 226)"},l=t=>t>=d?"critical":t>=c?"major":t>=o?"minor":t>=s?"warning":void 0,p=t=>Math.round(10*t)/10,g=t=>""!==t?t:"unknown",m=u.keyof({asc:null,desc:null}),f=t=>u.type({field:t,direction:m}),b=u.tuple([u.union([u.string,u.number]),u.union([u.string,u.number])]),_=u.type({searchBefore:b}),v=u.type({searchAfter:b}),h=u.intersection([u.type({pageSize:u.number}),u.partial({cursor:u.union([_,v])})]),k=(u.keyof({"log-entry-rate":null}),["log-entry-rate"]),x=(u.keyof({"log-entry-categories-count":null}),["log-entry-categories-count"]),T=u.type({name:u.string,maximumAnomalyScore:u.number}),I=u.type({startTime:u.number,bucketDuration:u.number,logEntryCount:u.number}),C=u.type({histogramId:u.string,buckets:u.array(I)}),S=u.type({categoryId:u.number,datasets:u.array(T),histograms:u.array(C),logEntryCount:u.number,maximumAnomalyScore:u.number,regularExpression:u.string}),j=f(u.keyof({maximumAnomalyScore:null,logEntryCount:null}));var w=r(142);const R=u.keyof({logRate:null,logCategory:null}),A=u.type({id:u.string,anomalyScore:u.number,dataset:u.string,typical:u.number,actual:u.number,type:R,duration:u.number,startTime:u.number,jobId:u.string}),z=A,E=u.intersection([A,u.type({categoryId:u.string,categoryRegex:u.string,categoryTerms:u.string})]),O=u.union([z,E]),P=u.array(u.string),D=t=>"logCategory"===t.type,F=f(u.keyof({anomalyScore:null,dataset:null,startTime:null})),N=u.type({id:u.string,dataset:u.string,message:u.string,timestamp:u.number,tiebreaker:u.number})},97:function(t,n,r){"use strict";r.d(n,"b",(function(){return e.a})),r.d(n,"j",(function(){return e.j})),r.d(n,"k",(function(){return e.k})),r.d(n,"c",(function(){return e.h})),r.d(n,"t",(function(){return e.x})),r.d(n,"u",(function(){return e.y})),r.d(n,"d",(function(){return e.i})),r.d(n,"w",(function(){return e.A})),r.d(n,"v",(function(){return e.z})),r.d(n,"x",(function(){return e.B})),r.d(n,"e",(function(){return s})),r.d(n,"n",(function(){return l})),r.d(n,"o",(function(){return p})),r.d(n,"g",(function(){return g})),r.d(n,"r",(function(){return m})),r.d(n,"s",(function(){return b})),r.d(n,"f",(function(){return _})),r.d(n,"p",(function(){return v})),r.d(n,"q",(function(){return k})),r.d(n,"a",(function(){return T.a})),r.d(n,"m",(function(){return T.d})),r.d(n,"l",(function(){return T.c})),r.d(n,"i",(function(){return C})),r.d(n,"h",(function(){return S}));var e=r(102),i=(r(164),r(0)),a=r(124),u=r(10);const s="/api/log_entries/highlights",o=i.intersection([i.type({sourceId:i.string,startTimestamp:i.number,endTimestamp:i.number,highlightTerms:i.array(i.string)}),i.partial({query:i.union([i.string,i.null]),size:i.number,columns:i.array(u.d)})]),c=i.intersection([o,i.type({before:i.union([a.d,i.literal("last")])})]),d=i.intersection([o,i.type({after:i.union([a.d,i.literal("first")])})]),y=i.intersection([o,i.type({center:a.d})]),l=i.union([o,c,d,y]),p=i.type({data:i.array(i.union([i.type({topCursor:i.null,bottomCursor:i.null,entries:i.array(a.f)}),i.type({topCursor:a.d,bottomCursor:a.d,entries:i.array(a.f)})]))}),g="/api/log_entries/summary",m=i.type({sourceId:i.string,startTimestamp:i.number,endTimestamp:i.number,bucketSize:i.number,query:i.union([i.string,i[void 0],i.null])}),f=i.type({start:i.number,end:i.number,entriesCount:i.number}),b=i.type({data:i.type({start:i.number,end:i.number,buckets:i.array(f)})}),_="/api/log_entries/summary_highlights",v=i.intersection([m,i.type({highlightTerms:i.array(i.string)})]),h=i.intersection([f,i.type({representativeKey:a.d})]),k=i.type({data:i.array(i.type({start:i.number,end:i.number,buckets:i.array(h)}))});r(98);var x=r(115),T=r(186);r(93);const I=i.type({value:i.number}),C=(i.type({hostTerm:i.record(i.string,i.string),timefield:i.string,indexPattern:i.string,to:i.number,sortBy:i.type({name:i.string,isAscending:i.boolean}),searchFilter:i.array(i.record(i.string,i.record(i.string,i.unknown)))}),i.type({summaryEvent:i.type({summary:i.type({hits:i.type({hits:i.array(i.type({_source:i.type({system:i.type({process:i.type({summary:i.record(i.string,i.number)})})})}))})})}),processes:i.type({filteredProcs:i.type({buckets:i.array(i.type({key:i.string,cpu:I,memory:I,startTime:i.type({value_as_string:i.string}),meta:i.type({hits:i.type({hits:i.array(i.type({_source:i.type({process:i.type({pid:i.number}),system:i.type({process:i.type({state:i.string})}),user:i.type({name:i.string})})}))})})}))})})}),i.type({processList:i.array(i.type({cpu:i.number,memory:i.number,startTime:i.number,pid:i.number,state:i.string,user:i.string,command:i.string})),summary:i.record(i.string,i.number)})),S=(i.type({hostTerm:i.record(i.string,i.string),timefield:i.string,indexPattern:i.string,to:i.number,command:i.string}),i.type({process:i.type({filteredProc:i.type({buckets:i.array(i.type({timeseries:i.type({buckets:i.array(i.type({key:i.number,memory:I,cpu:I}))})}))})})}),i.type({cpu:x.a,memory:x.a}))}}]);