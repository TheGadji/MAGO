/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[21],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"AnomalyTimelineService",(function(){return AnomalyTimelineService}));var s=n(4),i=n.n(s),a=n(43),r=n(99),o=n(78),l=n(16);class AnomalyTimelineService{constructor(e,t,n){i()(this,"timeBuckets",void 0),i()(this,"_customTimeRange",void 0),this.timeFilter=e,this.mlResultsService=n,this.timeBuckets=new r.a({"histogram:maxBars":t.get(a.UI_SETTINGS.HISTOGRAM_MAX_BARS),"histogram:barTarget":t.get(a.UI_SETTINGS.HISTOGRAM_BAR_TARGET),dateFormat:t.get("dateFormat"),"dateFormat:scaled":t.get("dateFormat:scaled")}),this.timeFilter.enableTimeRangeSelector()}static isSwimlaneData(e){return Object(l.isPopulatedObject)(e,["interval","points","laneLabels"])}static isOverallSwimlaneData(e){return this.isSwimlaneData(e)&&Object(l.isPopulatedObject)(e,["earliest","latest"])&&1===e.laneLabels.length&&e.laneLabels[0]===o.g}setTimeRange(e){this._customTimeRange=e}getSwimlaneBucketInterval(e,t){const n=this.getTimeBounds();if(void 0===n)throw new Error("timeRangeSelectorEnabled has to be enabled");this.timeBuckets.setInterval("auto"),this.timeBuckets.setBounds(n);const s=this.timeBuckets.getInterval().asSeconds(),i=(n.max.valueOf()-n.min.valueOf())/1e3/s;Math.floor(t/i*100)/100<8&&this.timeBuckets.setInterval(2*s+"s");const a=e.reduce(((e,t)=>Math.max(e,t.bucketSpanSeconds)),0);return a>s&&(this.timeBuckets.setInterval(a+"s"),this.timeBuckets.setBounds(n)),this.timeBuckets.getInterval()}async loadOverallData(e,t,n,s){const i=null!=n?n:this.getSwimlaneBucketInterval(e,t);if(!e||!e.length)throw new Error("Explorer jobs collection is required");const a=this.getTimeBounds(),o=Object(r.b)(a,i,!1),l=e.map((e=>e.id)),u=Object(r.b)(a,i,!0),c=await this.mlResultsService.getOverallBucketScores(l,1,u.min.valueOf(),u.max.valueOf(),i.asSeconds()+"s",s);return this.processOverallResults(c.results,o,i.asSeconds())}async loadViewBySwimlane(e,t,n,s,i,a,l,u,c,m,h){const d=this.getTimeBounds();if(void 0===d)throw new Error("timeRangeSelectorEnabled has to be enabled");const f=null!=m?m:this.getSwimlaneBucketInterval(n,u),v=Object(r.b)(d,f,!1),g=n.map((e=>e.id)),S=f.asMilliseconds();let p;if(s===o.j){const t=void 0!==e&&e.length>0?e:g;p=await this.mlResultsService.getScoresByBucket(t,v.min.valueOf(),v.max.valueOf(),S,a,l,h)}else p=await this.mlResultsService.getInfluencerValueMaxScoreByTime(g,s,e,v.min.valueOf(),v.max.valueOf(),S,i,a,l,c,h);if(void 0===p)return;return this.processViewByResults(p.results,p.cardinality,e,t,s,f.asSeconds())}async loadViewByTopFieldValuesForSelectedTime(e,t,n,s,i,a,r,l,u,c){const m=n.map((e=>e.id));if(s!==o.j){const n=await this.mlResultsService.getTopInfluencers(m,e,t,i,a,r,u,c);if(void 0===n.influencers[s])return[];const o=[],l=n.influencers[s];return Array.isArray(l)&&l.forEach((e=>{e.maxAnomalyScore>0&&o.push(e.influencerFieldValue)})),o}{const s=await this.mlResultsService.getScoresByBucket(m,e,t,this.getSwimlaneBucketInterval(n,l).asMilliseconds(),a,r,i);return Object.keys(s.results)}}getTimeBounds(){return void 0!==this._customTimeRange?this.timeFilter.calculateBounds(this._customTimeRange):this.timeFilter.getBounds()}processOverallResults(e,t,n){const s=o.g,i={laneLabels:[s],points:[],interval:n,earliest:t.min.valueOf()/1e3,latest:t.max.valueOf()/1e3};return Object.entries(e).forEach((([e,t])=>{const n=+e/1e3;i.points.push({laneLabel:s,time:n,value:t}),i.earliest=Math.min(n,i.earliest),i.latest=Math.max(n+i.interval,i.latest)})),i}processViewByResults(e,t,n,s,i,a){const r={fieldName:i,points:[],laneLabels:[],interval:a,earliest:s.earliest,latest:s.latest,cardinality:t},o={};Object.entries(e).forEach((([e,t])=>{r.laneLabels.push(e),o[e]=0,Object.entries(t).forEach((([t,n])=>{const s=+t/1e3;r.points.push({laneLabel:e,time:s,value:n}),o[e]=Math.max(o[e],n)}))}));const l=n.length;return r.laneLabels=0===l?r.laneLabels.sort(((e,t)=>o[t]-o[e])):r.laneLabels.sort(((e,t)=>{let s=n.indexOf(e),i=n.indexOf(t);return s=s>-1?s:l,i=i>-1?i:l,s-i})),r}}},99:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return T}));var s=n(8),i=n(21),a=n.n(i),r=n(31),o=n.n(r);const{duration:l}=a.a;var u=n(26),c=n(22),m=n(43),h=n(60);const d=o.a.unitsDesc,f=d.indexOf("w"),v=function(){const e=[[l(500,"ms"),l(100,"ms")],[l(5,"second"),l(1,"second")],[l(10,"second"),l(5,"second")],[l(15,"second"),l(10,"second")],[l(30,"second"),l(15,"second")],[l(1,"minute"),l(30,"second")],[l(5,"minute"),l(1,"minute")],[l(10,"minute"),l(5,"minute")],[l(15,"minute"),l(10,"minute")],[l(30,"minute"),l(10,"minute")],[l(1,"hour"),l(30,"minute")],[l(2,"hour"),l(1,"hour")],[l(4,"hour"),l(2,"hour")],[l(6,"hour"),l(4,"hour")],[l(8,"hour"),l(6,"hour")],[l(12,"hour"),l(8,"hour")],[l(24,"hour"),l(12,"hour")],[l(2,"d"),l(1,"d")],[l(4,"d"),l(2,"d")],[l(1,"week"),l(4,"d")],[l(1,"month"),l(1,"week")],[l(1,"year"),l(1,"month")],[1/0,l(1,"year")]].slice(0).reverse();function t(e,t,n){return function(s,i){const r=function(s,i){const r=i/s;let o;for(let s=0;s<e.length;s++){const i=e[s],a=t(i[0],i[1],r);if(null==a){if(!n)continue;if(o)return o;break}if(!n)return a;o=a}const l=Math.max(Math.floor(r),1);return a.a.duration(l,"ms")}(s,i);if(r)return a.a.duration(r._data)}}return{near:t(e,(function(e,t,n){if(e>n){if(e===1/0)return t;const s=e.asMilliseconds(),i=t.asMilliseconds();return Math.abs(s-n)<=Math.abs(i)?e:t}}),!0),lessThan:t(e,(function(e,t,n){if(t<n)return e!==1/0?e:t})),atLeast:t(e,(function(e,t,n){if(t<=n)return t}))}}();function g(){const e=Object(c.l)();return new S({[m.UI_SETTINGS.HISTOGRAM_MAX_BARS]:e.get(m.UI_SETTINGS.HISTOGRAM_MAX_BARS),[m.UI_SETTINGS.HISTOGRAM_BAR_TARGET]:e.get(m.UI_SETTINGS.HISTOGRAM_BAR_TARGET),dateFormat:e.get("dateFormat"),"dateFormat:scaled":e.get("dateFormat:scaled")})}function S(e){this._timeBucketsConfig=e,this.barTarget=this._timeBucketsConfig[m.UI_SETTINGS.HISTOGRAM_BAR_TARGET],this.maxBars=this._timeBucketsConfig[m.UI_SETTINGS.HISTOGRAM_MAX_BARS]}function p(e,t){const n=function(e){for(let t=0;t<d.length;t++){const n=d[t],s=e.as(n);if(s>=1&&Math.floor(s)===s){if(t<=f)continue;return{value:s,unit:n,expression:s+n}}}const t=e.as("ms");return{value:t,unit:"ms",expression:t+"ms"}}(e);e.esValue=n.value,e.esUnit=n.unit,e.expression=n.expression,e.overflow=t>e&&a.a.duration(e-t);const s=a.a.normalizeUnits(n.unit);return 1===n.value?e.description=s:e.description=`${n.value} ${s}s`,e}function b(e){return e&&"isValid"in e&&e.isValid()}function T(e,t,n=!1){const s=t.asMilliseconds(),i=Math.floor(e.min.valueOf()/s)*s;let r=Math.ceil(e.max.valueOf()/s)*s;return!1===n&&(r-=1),{min:a()(i),max:a()(r)}}S.prototype.setBarTarget=function(e){this.barTarget=e},S.prototype.setMaxBars=function(e){this.maxBars=e},S.prototype.setBounds=function(e){if(!e)return this.clearBounds();let t;t=Object(s.isPlainObject)(e)?[e.min,e.max]:Array.isArray(e)?e:[];const n=Object(s.sortBy)(t.map(Object(s.ary)(a.a,1)),Number);if(!(2===n.length&&n.every(b)))throw this.clearBounds(),new Error("invalid bounds set: "+e);if(this._lb=n.shift(),this._ub=n.pop(),this.getDuration().asSeconds()<0)throw new TypeError("Intervals must be positive")},S.prototype.clearBounds=function(){this._lb=this._ub=null},S.prototype.hasBounds=function(){return b(this._ub)&&b(this._lb)},S.prototype.getBounds=function(){if(this.hasBounds())return{min:this._lb,max:this._ub}},S.prototype.getDuration=function(){if(this.hasBounds())return a.a.duration(this._ub-this._lb,"ms")},S.prototype.setInterval=function(e){this.originalInterval=e;let t=e;if(t&&"auto"!==t){if(Object(s.isString)(t)&&(e=t,t=Object(u.a)(t),0==+t&&(t=null)),!a.a.isDuration(t))throw new TypeError('"'+e+'" is not a valid interval.');this._i=t}else this._i="auto"},S.prototype.getInterval=function(){const e=this,t=e.getDuration();return p(function(n){if(!e.hasBounds())return n;const i=e.maxBars;let a;if(!(t/n>i))return n;a=v.lessThan(i,t);return+a==+n?n:(p(n,t),Object(s.assign)(a,{preScaled:n,scale:n/a,scaled:!0}))}(function(){const n=e._i;return a.a.isDuration(n)?n:v.near(e.barTarget,t)}()),t)},S.prototype.getIntervalToNearestMultiple=function(e){const t=this.getInterval(),n=t.asSeconds(),s=n%e;if(0===s)return t;let i=s>e/2?n+e-s:n-s;i=0===i?e:i;const r=a.a.duration(i,"seconds");p(r,this.getDuration());const o=t.preScaled;return void 0!==o&&o<r&&(r.preScaled=o,r.scale=o/r,r.scaled=!0),r},S.prototype.getScaledDateFormat=function(){const e=this.getInterval(),t=this._timeBucketsConfig["dateFormat:scaled"];for(let n=t.length-1;n>=0;n--){const s=t[n];if(!s[0]||e>=a.a.duration(s[0]))return s[1]}return this._timeBucketsConfig.dateFormat},S.prototype.getScaledDateFormatter=function(){return new(Object(c.d)().getType(h.FIELD_FORMAT_IDS.DATE))({pattern:this.getScaledDateFormat()},this._timeBucketsConfig)}}}]);