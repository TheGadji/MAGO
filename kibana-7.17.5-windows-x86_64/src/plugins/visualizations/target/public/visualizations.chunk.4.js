(window.visualizations_bundle_jsonpfunction=window.visualizations_bundle_jsonpfunction||[]).push([[4],{46:function(t,e,i){"use strict";var n,s="object"==typeof Reflect?Reflect:null,r=s&&"function"==typeof s.apply?s.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)};n=s&&"function"==typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var a=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(i,n){function s(i){t.removeListener(e,r),n(i)}function r(){"function"==typeof t.removeListener&&t.removeListener("error",s),i([].slice.call(arguments))}y(t,e,r,{once:!0}),"error"!==e&&function(t,e,i){"function"==typeof t.on&&y(t,"error",e,i)}(t,s,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var h=10;function c(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function d(t,e,i,n){var s,r,a,o;if(c(i),void 0===(r=t._events)?(r=t._events=Object.create(null),t._eventsCount=0):(void 0!==r.newListener&&(t.emit("newListener",e,i.listener?i.listener:i),r=t._events),a=r[e]),void 0===a)a=r[e]=i,++t._eventsCount;else if("function"==typeof a?a=r[e]=n?[i,a]:[a,i]:n?a.unshift(i):a.push(i),(s=u(t))>0&&a.length>s&&!a.warned){a.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=a.length,o=h,console&&console.warn&&console.warn(o)}return t}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(t,e,i){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:i},s=l.bind(n);return s.listener=i,n.wrapFn=s,s}function p(t,e,i){var n=t._events;if(void 0===n)return[];var s=n[e];return void 0===s?[]:"function"==typeof s?i?[s.listener||s]:[s]:i?function(t){for(var e=new Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}(s):g(s,s.length)}function v(t){var e=this._events;if(void 0!==e){var i=e[t];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function g(t,e){for(var i=new Array(e),n=0;n<e;++n)i[n]=t[n];return i}function y(t,e,i,n){if("function"==typeof t.on)n.once?t.once(e,i):t.on(e,i);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function s(r){n.once&&t.removeEventListener(e,s),i(r)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");h=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var n="error"===t,s=this._events;if(void 0!==s)n=n&&void 0===s.error;else if(!n)return!1;if(n){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var h=s[t];if(void 0===h)return!1;if("function"==typeof h)r(h,this,e);else{var c=h.length,u=g(h,c);for(i=0;i<c;++i)r(u[i],this,e)}return!0},o.prototype.addListener=function(t,e){return d(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return d(this,t,e,!0)},o.prototype.once=function(t,e){return c(e),this.on(t,f(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return c(e),this.prependListener(t,f(this,t,e)),this},o.prototype.removeListener=function(t,e){var i,n,s,r,a;if(c(e),void 0===(n=this._events))return this;if(void 0===(i=n[t]))return this;if(i===e||i.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,i.listener||e));else if("function"!=typeof i){for(s=-1,r=i.length-1;r>=0;r--)if(i[r]===e||i[r].listener===e){a=i[r].listener,s=r;break}if(s<0)return this;0===s?i.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(i,s),1===i.length&&(n[t]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[t]),this;if(0===arguments.length){var s,r=Object.keys(i);for(n=0;n<r.length;++n)"removeListener"!==(s=r[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=i[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},o.prototype.listeners=function(t){return p(this,t,!0)},o.prototype.rawListeners=function(t){return p(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},o.prototype.listenerCount=v,o.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},87:function(t,e,i){"use strict";i.r(e),i.d(e,"Vis",(function(){return vis_Vis}));var n=i(0),s=i.n(n),r=i(5),a=i(4),o=i(46),h=i(24);function c(t,e,i){return void 0===e&&(Object(r.isPlainObject)(t)||i.length>0)&&(e=t,t=void 0),{value:Object(r.cloneDeep)(e),key:t}}class persisted_state_PersistedState extends o.EventEmitter{constructor(t,e){if(super(),s()(this,"_path",void 0),s()(this,"_initialized",void 0),s()(this,"_changedState",void 0),s()(this,"_defaultState",void 0),s()(this,"_mergedState",void 0),this._path=this.setPath(e),!this._path.length&&t&&!Object(r.isPlainObject)(t))throw new Error("State value must be a plain object");t=t||this.getDefault(),this.set(t),this._initialized=!0}get(t,e){return this.hasPath()||void 0!==t?Object(r.cloneDeep)(Object(r.get)(this._mergedState,this.getIndex(t||""),e)):this._mergedState}set(t,e){const i=c(t,e,this._path),n=this.setValue(i.key,i.value);return this.emit("set"),n}setSilent(t,e){const i=c(t,e,this._path);if(i.key||i.value)return this.setValue(i.key,i.value,!0)}clearAllKeys(){Object.getOwnPropertyNames(this._changedState).forEach((t=>{this.set(t,null)}))}reset(t){const e=this.getIndex(t),i=Object(r.get)(this._defaultState,e),n=Object(r.get)(this._mergedState,e);void 0===i?this.cleanPath(t,this._mergedState):Object(h.set)(this._mergedState,e,i),this.cleanPath(t,this._changedState),Object(r.isEqual)(n,i)||this.emit("change")}getChanges(){return Object(r.cloneDeep)(this._changedState)}toJSON(){return this.get()}toString(){return JSON.stringify(this.toJSON())}fromString(t){return this.set(JSON.parse(t))}getIndex(t){return void 0===t?this._path:[...this._path||[],...Object(r.toPath)(t)]}getPartialIndex(t){return this.getIndex(t).slice(this._path.length)}cleanPath(t,e){const i=this.getPartialIndex(t);let n=!0;if(Array.isArray(i))for(;i.length>0;){const t=i.splice(i.length-1,1)[0],s=[...this._path,i],a=s.length>0?Object(r.get)(e,s):e;if(!Object(r.isPlainObject)(a))return;n&&delete a[t],Object.keys(a).length>0&&(n=!1)}}getDefault(){return this.hasPath()?void 0:{}}setPath(t){return Array.isArray(t)?t:Object(r.isString)(t)?[...this.getIndex(t)]:[]}hasPath(){return this._path.length>0}setValue(t,e,i=!1){const n=this;let s=!1;const a=!this._initialized,o=this.getIndex(t),c=o.length>0;if(a&&(this._changedState={},this.hasPath()||void 0!==t?this._defaultState=Object(h.set)({},o,e):this._defaultState=e),!a)if(this.hasPath()||void 0!==t){const t=c?this.get(o):this._mergedState;s=!Object(r.isEqual)(t,e),Array.isArray(Object(r.get)(this._mergedState,o))&&(c?Object(h.set)(this._mergedState,o,void 0):this._mergedState=void 0),c?Object(h.set)(this._changedState,o,e):this._changedState=Object(r.isPlainObject)(e)?e:{}}else s=!Object(r.isEqual)(this._changedState,e),this._changedState=e,this._mergedState=Object(r.cloneDeep)(e);const u=this._mergedState||Object(r.cloneDeep)(this._defaultState),d=Object(r.merge)({},this._changedState);return this._mergedState=Object(r.mergeWith)(u,d,(function(t,e,i){if(!a&&Object(r.isEqual)(o,n.getIndex(i)))return void 0===e?t:e})),Object(r.isEqual)(this._mergedState,this._defaultState)&&(this._changedState={}),!i&&s&&this.emit("change",t),this}}var u=i(1),d=i(26);class vis_Vis{constructor(t,e={}){s()(this,"type",void 0),s()(this,"id",void 0),s()(this,"title",""),s()(this,"description",""),s()(this,"params",void 0),s()(this,"data",{}),s()(this,"uiState",void 0),this.type=this.getType(t),this.params=this.getParams(e.params),this.uiState=new persisted_state_PersistedState(e.uiState),this.id=e.id}getType(t){const e=Object(u.l)().get(t);if(!e){const e=a.i18n.translate("visualizations.visualizationTypeInvalidMessage",{defaultMessage:'Invalid visualization type "{visType}"',values:{visType:t}});throw new Error(e)}return e}getParams(t){var e,i;return Object(r.defaults)({},Object(r.cloneDeep)(null!=t?t:{}),Object(r.cloneDeep)(null!==(e=null===(i=this.type.visConfig)||void 0===i?void 0:i.defaults)&&void 0!==e?e:{}))}async setState(t){let e=!1;if(t.type&&this.type.name!==t.type&&(this.type=this.getType(t.type),e=!0),void 0!==t.title&&(this.title=t.title),void 0!==t.description&&(this.description=t.description),(t.params||e)&&(this.params=this.getParams(t.params)),t.data&&t.data.searchSource&&(this.data.searchSource=await Object(u.i)().searchSource.create(t.data.searchSource),this.data.indexPattern=this.data.searchSource.getField("index")),t.data&&t.data.savedSearchId&&(this.data.savedSearchId=t.data.savedSearchId,this.data.searchSource&&(this.data.searchSource=await(async(t,e)=>{if(e){const i=await Object(d.getSavedSearch)(e,{search:Object(u.i)(),savedObjectsClient:Object(u.h)().client,spaces:Object(u.j)()});await Object(d.throwErrorOnSavedSearchUrlConflict)(i),null!=i&&i.searchSource&&t.setParent(i.searchSource)}return t})(this.data.searchSource,this.data.savedSearchId),this.data.indexPattern=this.data.searchSource.getField("index"))),t.data&&(t.data.aggs||!this.data.aggs)){const e=t.data.aggs?Object(r.cloneDeep)(t.data.aggs):[],i=this.initializeDefaultsFromSchemas(e,this.type.schemas.all||[]);if(!this.data.indexPattern){if(e.length){const t=a.i18n.translate("visualizations.initializeWithoutIndexPatternErrorMessage",{defaultMessage:"Trying to initialize aggs without index pattern"});throw new Error(t)}return}this.data.aggs=Object(u.a)().createAggConfigs(this.data.indexPattern,i)}}clone(){const{data:t,...e}=this.serialize(),i=new vis_Vis(this.type.name,e);i.setState({...e,data:{}});const n=this.data.indexPattern?Object(u.a)().createAggConfigs(this.data.indexPattern,t.aggs):void 0;return i.data={...this.data,aggs:n},i}serialize(){const t=this.data.aggs?this.data.aggs.aggs.map((t=>t.toJSON())):[];return{id:this.id,title:this.title,description:this.description,type:this.type.name,params:Object(r.cloneDeep)(this.params),uiState:this.uiState.toJSON(),data:{aggs:t,searchSource:this.data.searchSource?this.data.searchSource.getSerializedFields():{},...this.data.savedSearchId?{savedSearchId:this.data.savedSearchId}:{}}}}isHierarchical(){return Object(r.isFunction)(this.type.hierarchicalData)?!!this.type.hierarchicalData(this):!!this.type.hierarchicalData}initializeDefaultsFromSchemas(t,e){const i=[...t];return e.filter((t=>Array.isArray(t.defaults)&&t.defaults.length>0)).filter((e=>!t.find((t=>t.schema&&t.schema===e.name)))).forEach((t=>{t.defaults.slice(0,t.max).forEach((t=>i.push(t)))})),i}}e.default=vis_Vis}}]);