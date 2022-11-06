(window.data_bundle_jsonpfunction=window.data_bundle_jsonpfunction||[]).push([[8],{122:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var r=t(4),s=t.n(r),n=t(16),l=t(13),i=t(22),o=t(28),d=t(0),c=t(112),u=t(113);function h(e){return["shard","index","node"].filter((a=>"number"==typeof e[a]||"string"==typeof e[a])).map((a=>({key:a,value:String(e[a])})))}function p(e,a){const t=e.reason.type,r="string"==typeof a?a:function(e){return h(e).map((({key:e,value:a})=>`${e}: ${a}`)).join(", ")}(e);return d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.failureHeader",{defaultMessage:"{failureName} at {failureDetails}",values:{failureName:t,failureDetails:r},description:'Summary of shard failures, e.g. "IllegalArgumentException at shard 0 node xyz"'})}function f(e){const a=h(e).map((e=>s.a.createElement("span",{className:"shardFailureModal__keyValueTitle",key:e.key},s.a.createElement(l.EuiCode,null,e.key)," ",e.value)));return s.a.createElement(l.EuiTitle,{size:"xs"},s.a.createElement("h2",null,p(e,""),a))}function m(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/[\._]/g," ")}function E(e,a){if("script"===a||"script_stack"===a){const a=Array.isArray(e)?e.join("\n"):String(e);return s.a.createElement(l.EuiCodeBlock,{language:"java",paddingSize:"s",isCopyable:!0},a)}return String(e)}function g(e){const a=Object(u.getFlattenedObject)(e.reason),t=Object.entries(a).map((([e,a])=>({title:m(e),description:E(a,e)})));return s.a.createElement("div",null,s.a.createElement(f,e),s.a.createElement(l.EuiSpacer,{size:"m"}),s.a.createElement(l.EuiDescriptionList,{listItems:t,type:"column",compressed:!0,className:"shardFailureModal__desc",titleProps:{className:"shardFailureModal__descTitle"},descriptionProps:{className:"shardFailureModal__descValue"}}))}function M({failures:e}){const a=e.map(((e,a)=>({id:String(a),...e}))),[t,n]=Object(r.useState)({}),i=[{align:c.RIGHT_ALIGNMENT,width:"40px",isExpander:!0,render:e=>{const a=p(e),r=d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tableRowCollapse",{defaultMessage:"Collapse {rowDescription}",description:"Collapse a row of a table with failures",values:{rowDescription:a}}),i=d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tableRowExpand",{defaultMessage:"Expand {rowDescription}",description:"Expand a row of a table with failures",values:{rowDescription:a}});return s.a.createElement(l.EuiButtonIcon,{onClick:()=>{const a=Object.assign({},t);a[e.id]?delete a[e.id]:a[e.id]=s.a.createElement(g,e),n(a)},"aria-label":t[e.id]?r:i,iconType:t[e.id]?"arrowUp":"arrowDown"})}},{field:"shard",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tableColShard",{defaultMessage:"Shard"}),sortable:!0,truncateText:!0,width:"80px"},{field:"index",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tableColIndex",{defaultMessage:"Index"}),sortable:!0,truncateText:!0},{field:"node",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tableColNode",{defaultMessage:"Node"}),sortable:!0,truncateText:!0},{field:"reason.type",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tableColReason",{defaultMessage:"Reason"}),truncateText:!0}];return s.a.createElement(l.EuiInMemoryTable,{itemId:"id",items:a,columns:i,pagination:!0,sorting:{sort:{field:"index",direction:"desc"}},itemIdToExpandedRowMap:t})}function b({request:e,response:a,title:t,onClose:r}){if(!(a&&a._shards&&Array.isArray(a._shards.failures)&&e))return s.a.createElement(l.EuiCallOut,{title:"Sorry, there was an error",color:"danger",iconType:"alert"},"The ShardFailureModal component received invalid properties");const i=a._shards.failures,o=JSON.stringify(e,null,2),c=JSON.stringify(a,null,2),u=[{id:"table",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tabHeaderShardFailures",{defaultMessage:"Shard failures",description:"Name of the tab displaying shard failures"}),content:s.a.createElement(M,{failures:i})},{id:"json-request",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tabHeaderRequest",{defaultMessage:"Request",description:"Name of the tab displaying the JSON request"}),content:s.a.createElement(l.EuiCodeBlock,{language:"json",isCopyable:!0},o)},{id:"json-response",name:d.i18n.translate("data.search.searchSource.fetch.shardsFailedModal.tabHeaderResponse",{defaultMessage:"Response",description:"Name of the tab displaying the JSON response"}),content:s.a.createElement(l.EuiCodeBlock,{language:"json",isCopyable:!0},c)}];return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.EuiModalHeader,null,s.a.createElement(l.EuiModalHeaderTitle,null,t)),s.a.createElement(l.EuiModalBody,null,s.a.createElement(l.EuiTabbedContent,{tabs:u,initialSelectedTab:u[0],autoFocus:"selected"})),s.a.createElement(l.EuiModalFooter,null,s.a.createElement(l.EuiCopy,{textToCopy:c},(e=>s.a.createElement(l.EuiButtonEmpty,{onClick:e},s.a.createElement(n.FormattedMessage,{id:"data.search.searchSource.fetch.shardsFailedModal.copyToClipboard",defaultMessage:"Copy response to clipboard"})))),s.a.createElement(l.EuiButton,{onClick:()=>r(),fill:!0,"data-test-sub":"closeShardFailureModal"},s.a.createElement(n.FormattedMessage,{id:"data.search.searchSource.fetch.shardsFailedModal.close",defaultMessage:"Close",description:"Closing the Modal"}))))}function y({request:e,response:a,title:t}){return s.a.createElement(l.EuiTextAlign,{textAlign:"right"},s.a.createElement(l.EuiButton,{color:"warning",size:"s",onClick:function(){const r=Object(i.c)().openModal(Object(o.toMountPoint)(s.a.createElement(b,{request:e,response:a,title:t,onClose:()=>r.close()})),{className:"shardFailureModal"})},"data-test-subj":"openShardFailureModalBtn"},s.a.createElement(n.FormattedMessage,{id:"data.search.searchSource.fetch.shardsFailedModal.showDetails",defaultMessage:"Show details",description:"Open the modal to show details"})))}}}]);