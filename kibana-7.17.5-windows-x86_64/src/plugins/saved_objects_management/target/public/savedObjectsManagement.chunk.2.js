(window.savedObjectsManagement_bundle_jsonpfunction=window.savedObjectsManagement_bundle_jsonpfunction||[]).push([[2],{23:function(e,t,s){"use strict";const a=s(24),i=s(25),n=s(26);function r(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function c(e,t){return t.decode?i(e):e}function l(e){return Array.isArray(e)?e.sort():"object"==typeof e?l(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function j(e,t){r((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const s=function(e){let t;switch(e.arrayFormat){case"index":return(e,s,a)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=s):a[e]=s};case"bracket":return(e,s,a)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],s):a[e]=[s]:a[e]=s};case"comma":case"separator":return(t,s,a)=>{const i="string"==typeof s&&s.split("").indexOf(e.arrayFormatSeparator)>-1?s.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===s?s:c(s,e);a[t]=i};default:return(e,t,s)=>{void 0!==s[e]?s[e]=[].concat(s[e],t):s[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const i of e.split("&")){let[e,r]=n(t.decode?i.replace(/\+/g," "):i,"=");r=void 0===r?null:["comma","separator"].includes(t.arrayFormat)?r:c(r,t),s(c(e,t),r,a)}for(const e of Object.keys(a)){const s=a[e];if("object"==typeof s&&null!==s)for(const e of Object.keys(s))s[e]=b(s[e],t);else a[e]=b(s,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce(((e,t)=>{const s=a[t];return Boolean(s)&&"object"==typeof s&&!Array.isArray(s)?e[t]=l(s):e[t]=s,e}),Object.create(null))}t.extract=u,t.parse=j,t.stringify=(e,t)=>{if(!e)return"";r((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const s=s=>t.skipNull&&null==e[s]||t.skipEmptyString&&""===e[s],a=function(e){switch(e.arrayFormat){case"index":return t=>(s,a)=>{const i=s.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?s:null===a?[...s,[o(t,e),"[",i,"]"].join("")]:[...s,[o(t,e),"[",o(i,e),"]=",o(a,e)].join("")]};case"bracket":return t=>(s,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?s:null===a?[...s,[o(t,e),"[]"].join("")]:[...s,[o(t,e),"[]=",o(a,e)].join("")];case"comma":case"separator":return t=>(s,a)=>null==a||0===a.length?s:0===s.length?[[o(t,e),"=",o(a,e)].join("")]:[[s,o(a,e)].join(e.arrayFormatSeparator)];default:return t=>(s,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?s:null===a?[...s,o(t,e)]:[...s,[o(t,e),"=",o(a,e)].join("")]}}(t),i={};for(const t of Object.keys(e))s(t)||(i[t]=e[t]);const n=Object.keys(i);return!1!==t.sort&&n.sort(t.sort),n.map((s=>{const i=e[s];return void 0===i?"":null===i?o(s,t):Array.isArray(i)?i.reduce(a(s),[]).join("&"):o(s,t)+"="+o(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[s,a]=n(e,"#");return Object.assign({url:s.split("?")[0]||"",query:j(u(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:c(a,t)}:{})},t.stringifyUrl=(e,s)=>{s=Object.assign({encode:!0,strict:!0},s);const a=d(e.url).split("?")[0]||"",i=t.extract(e.url),n=t.parse(i,{sort:!1}),r=Object.assign(n,e.query);let c=t.stringify(r,s);c&&(c=`?${c}`);let l=function(e){let t="";const s=e.indexOf("#");return-1!==s&&(t=e.slice(s)),t}(e.url);return e.fragmentIdentifier&&(l=`#${o(e.fragmentIdentifier,s)}`),`${a}${c}${l}`}},24:function(e,t,s){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},25:function(e,t,s){"use strict";var a="%[a-f0-9]{2}",i=new RegExp(a,"gi"),n=new RegExp("("+a+")+","gi");function r(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var s=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],r(s),r(a))}function o(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(i),s=1;s<t.length;s++)t=(e=r(t,s).join("")).match(i);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},s=n.exec(e);s;){try{t[s[0]]=decodeURIComponent(s[0])}catch(e){var a=o(s[0]);a!==s[0]&&(t[s[0]]=a)}s=n.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),r=0;r<i.length;r++){var c=i[r];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},26:function(e,t,s){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const s=e.indexOf(t);return-1===s?[e]:[e.slice(0,s),e.slice(s+t.length)]}},40:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return x}));var a=s(6),i=s.n(a),n=s(16),r=s(23),o=s(1),c=s(17),l=s(0),d=s.n(l),u=s(14),b=s(15),j=s(3);const p=(e,t)=>e?Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.editItemTitle",defaultMessage:"Edit {title}",values:{title:t}}):Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.viewItemTitle",defaultMessage:"View {title}",values:{title:t}}),m=({canEdit:e,canDelete:t,canViewInApp:s,type:a,viewUrl:i,onDeleteClick:n})=>Object(j.jsx)(u.EuiPageHeader,{bottomBorder:!0,pageTitle:p(e,a),rightSideItems:[s&&Object(j.jsx)(u.EuiButton,{size:"s",href:i,iconType:"eye","data-test-subj":"savedObjectEditViewInApp"},Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.viewItemButtonLabel",defaultMessage:"View {title}",values:{title:a}})),t&&Object(j.jsx)(u.EuiButton,{color:"danger",size:"s",iconType:"trash",onClick:()=>n(),"data-test-subj":"savedObjectEditDelete"},Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.deleteItemButtonLabel",defaultMessage:"Delete {title}",values:{title:a}}))]}),v=({type:e})=>Object(j.jsx)(u.EuiCallOut,{title:Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.savedObjectProblemErrorMessage",defaultMessage:"There is a problem with this saved object"}),iconType:"alert",color:"danger"},Object(j.jsx)("div",null,(()=>{switch(e){case"search":return Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.savedSearchDoesNotExistErrorMessage",defaultMessage:"The saved search associated with this object no longer exists."});case"index-pattern":return Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.indexPatternDoesNotExistErrorMessage",defaultMessage:"The index pattern associated with this object no longer exists."});case"index-pattern-field":return Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.fieldDoesNotExistErrorMessage",defaultMessage:"A field associated with this object no longer exists in the index pattern."});default:return null}})()),Object(j.jsx)("div",null,Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.howToFixErrorDescription",defaultMessage:"If you know what this error means, go ahead and fix it — otherwise click the delete button above."}))),g=()=>Object(j.jsx)(u.EuiCallOut,{title:Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.howToModifyObjectTitle",defaultMessage:"Proceed with caution!"}),iconType:"alert",color:"warning"},Object(j.jsx)("div",null,Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.howToModifyObjectDescription",defaultMessage:"Modifying objects is for advanced users only. Object properties are not validated and invalid objects could cause errors, data loss, or worse. Unless someone with intimate knowledge of the code told you to be in here, you probably shouldn’t be."})));var f=s(19),h=s(2);class field_Field extends a.PureComponent{render(){const{name:e}=this.props;return Object(j.jsx)(u.EuiFormRow,{fullWidth:!0,label:e},this.renderField())}onCodeEditorChange(e){const{name:t,onChange:s}=this.props;let a=!1;try{JSON.parse(e)}catch(e){a=!0}s(t,{value:e,invalid:a})}onFieldChange(e){const{name:t,type:s,onChange:a}=this.props;let i=e,n=!1;if("number"===s)try{i=Number(i)}catch(e){n=!0}a(t,{value:i,invalid:n})}renderField(){var e;const{type:t,name:s,state:a,disabled:i}=this.props,n=null!==(e=null==a?void 0:a.value)&&void 0!==e?e:this.props.value;switch(t){case"number":return Object(j.jsx)(u.EuiFieldNumber,{name:s,id:this.fieldId,value:n,onChange:e=>this.onFieldChange(e.target.value),disabled:i,"data-test-subj":`savedObjects-editField-${s}`});case"boolean":return Object(j.jsx)(u.EuiSwitch,{name:s,id:this.fieldId,label:n?Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.field.onLabel",defaultMessage:"On"}):Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.field.offLabel",defaultMessage:"Off"}),checked:!!n,onChange:e=>this.onFieldChange(e.target.checked),disabled:i,"data-test-subj":`savedObjects-editField-${s}`});case"json":case"array":return Object(j.jsx)("div",{"data-test-subj":`savedObjects-editField-${s}`},Object(j.jsx)(u.EuiCodeEditor,{name:`savedObjects-editField-${s}-aceEditor`,mode:"json",theme:"textmate",value:n,onChange:e=>this.onCodeEditorChange(e),width:"100%",height:"auto",minLines:6,maxLines:30,isReadOnly:i,setOptions:{showLineNumbers:!0,tabSize:2,useSoftTabs:!0},editorProps:{$blockScrolling:1/0},showGutter:!0}));default:return Object(j.jsx)(u.EuiFieldText,{id:this.fieldId,name:s,value:n,onChange:e=>this.onFieldChange(e.target.value),disabled:i,"data-test-subj":`savedObjects-editField-${s}`})}}get fieldId(){const{name:e}=this.props;return`savedObjects-editField-${e}`}}var O=s(7);class form_Form extends a.Component{constructor(e){super(e),d()(this,"handleFieldChange",((e,t)=>{this.setState({fieldStates:{...this.state.fieldStates,[e]:t}})})),d()(this,"onCancel",(()=>{window.history.back()})),d()(this,"onSubmit",(async()=>{const{object:e,onSave:t}=this.props,{fields:s,fieldStates:a}=this.state;if(!this.isFormValid())return;this.setState({submitting:!0});const i=Object(h.cloneDeep)(e.attributes);s.forEach((e=>{var t,s;let n=null!==(t=null===(s=a[e.name])||void 0===s?void 0:s.value)&&void 0!==t?t:e.value;"array"===e.type&&"string"==typeof n&&(n=JSON.parse(n)),Object(f.set)(i,e.name,n)}));const{references:n,...r}=i;await t({attributes:r,references:n}),this.setState({submitting:!1})})),this.state={fields:[],fieldStates:{},submitting:!1}}componentDidMount(){const{object:e,service:t}=this.props,s=Object(O.createFieldList)(e,t);this.setState({fields:s})}render(){const{editionEnabled:e,service:t}=this.props,{fields:s,fieldStates:a,submitting:i}=this.state,n=this.isFormValid();return Object(j.jsx)(u.EuiForm,{"data-test-subj":"savedObjectEditForm",role:"form"},s.map((t=>Object(j.jsx)(field_Field,{key:`${t.type}-${t.name}`,type:t.type,name:t.name,value:t.value,state:a[t.name],disabled:!e,onChange:this.handleFieldChange}))),Object(j.jsx)(u.EuiSpacer,{size:"l"}),Object(j.jsx)(u.EuiFlexGroup,{responsive:!1,gutterSize:"m"},e&&Object(j.jsx)(u.EuiFlexItem,{grow:!1},Object(j.jsx)(u.EuiButton,{fill:!0,"aria-label":o.i18n.translate("savedObjectsManagement.view.saveButtonAriaLabel",{defaultMessage:"Save { title } object",values:{title:t.type}}),onClick:this.onSubmit,disabled:!n||i,"data-test-subj":"savedObjectEditSave"},Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.saveButtonLabel",defaultMessage:"Save { title } object",values:{title:t.type}}))),Object(j.jsx)(u.EuiFlexItem,{grow:!1},Object(j.jsx)(u.EuiButtonEmpty,{"aria-label":o.i18n.translate("savedObjectsManagement.view.cancelButtonAriaLabel",{defaultMessage:"Cancel"}),onClick:this.onCancel,"data-test-subj":"savedObjectEditCancel"},Object(j.jsx)(b.FormattedMessage,{id:"savedObjectsManagement.view.cancelButtonLabel",defaultMessage:"Cancel"})))))}isFormValid(){const{fieldStates:e}=this.state;return!Object.values(e).some((e=>!0===e.invalid))}}const y=o.i18n.translate("savedObjectsManagement.objectView.unableFindSavedObjectNotificationMessage",{defaultMessage:"Unable to find saved object"});class saved_object_view_SavedObjectEdition extends a.Component{constructor(e){super(e),d()(this,"saveChanges",(async({attributes:e,references:t})=>{const{savedObjectsClient:s,notifications:a}=this.props,{object:i,type:n}=this.state;await s.update(i.type,i.id,e,{references:t}),a.toasts.addSuccess(`Updated '${e.title}' ${n} object`),this.redirectToListing()}));const{serviceRegistry:t,serviceName:s}=e,a=t.get(s).service.type;this.state={object:void 0,type:a}}componentDidMount(){const{http:e,id:t,notifications:s}=this.props,{type:a}=this.state;Object(O.bulkGetObjects)(e,[{type:a,id:t}]).then((([e])=>{if(e.error){const{message:t}=e.error;s.toasts.addDanger({title:y,text:t})}else this.setState({object:e})})).catch((e=>{var t;s.toasts.addDanger({title:y,text:null!==(t=e.message)&&void 0!==t?t:"Unknown error"})}))}render(){var e,t;const{capabilities:s,notFoundType:a,serviceRegistry:n,http:r,serviceName:o,savedObjectsClient:c}=this.props,{type:l}=this.state,{object:d}=this.state,{edit:b,delete:p}=s.savedObjectsManagement,f=Object(O.canViewInApp)(s,l)&&Boolean(null==d||null===(e=d.meta.inAppUrl)||void 0===e?void 0:e.path),h=n.get(o).service;return Object(j.jsx)("div",{"data-test-subj":"savedObjectsEdit"},Object(j.jsx)(m,{canEdit:b,canDelete:p&&!(null!=d&&d.meta.hiddenType),canViewInApp:f,type:l,onDeleteClick:()=>this.delete(),viewUrl:r.basePath.prepend((null==d||null===(t=d.meta.inAppUrl)||void 0===t?void 0:t.path)||"")}),Object(j.jsx)(u.EuiSpacer,{size:"l"}),a&&Object(j.jsx)(i.a.Fragment,null,Object(j.jsx)(u.EuiSpacer,{size:"s"}),Object(j.jsx)(v,{type:a})),b&&Object(j.jsx)(i.a.Fragment,null,Object(j.jsx)(u.EuiSpacer,{size:"s"}),Object(j.jsx)(g,null)),d&&Object(j.jsx)(i.a.Fragment,null,Object(j.jsx)(u.EuiSpacer,{size:"m"}),Object(j.jsx)(form_Form,{object:d,savedObjectsClient:c,service:h,editionEnabled:b,onSave:this.saveChanges})))}async delete(){var e;const{id:t,savedObjectsClient:s,overlays:a,notifications:i}=this.props,{type:n,object:r}=this.state;await a.openConfirm(o.i18n.translate("savedObjectsManagement.deleteConfirm.modalDescription",{defaultMessage:"This action permanently removes the object from Kibana."}),{confirmButtonText:o.i18n.translate("savedObjectsManagement.deleteConfirm.modalDeleteButtonLabel",{defaultMessage:"Delete"}),title:o.i18n.translate("savedObjectsManagement.deleteConfirm.modalTitle",{defaultMessage:"Delete '{title}'?",values:{title:(null==r||null===(e=r.attributes)||void 0===e?void 0:e.title)||"saved Kibana object"}}),buttonColor:"danger"})&&(await s.delete(n,t),i.toasts.addSuccess(`Deleted '${r.attributes.title}' ${n} object`),this.redirectToListing())}redirectToListing(){this.props.history.push("/")}}const x=({coreStart:e,serviceRegistry:t,setBreadcrumbs:s,history:i})=>{const{service:l,id:d}=Object(n.useParams)(),u=e.application.capabilities,{search:b}=Object(n.useLocation)(),p=Object(r.parse)(b),m=t.get(l);return Object(a.useEffect)((()=>{var e;s([{text:o.i18n.translate("savedObjectsManagement.breadcrumb.index",{defaultMessage:"Saved objects"}),href:"/"},{text:o.i18n.translate("savedObjectsManagement.breadcrumb.edit",{defaultMessage:"Edit {savedObjectType}",values:{savedObjectType:null!==(e=null==m?void 0:m.service.type)&&void 0!==e?e:"object"}})}])}),[s,m]),Object(j.jsx)(c.RedirectAppLinks,{application:e.application},Object(j.jsx)(saved_object_view_SavedObjectEdition,{id:d,http:e.http,serviceName:l,serviceRegistry:t,savedObjectsClient:e.savedObjects.client,overlays:e.overlays,notifications:e.notifications,capabilities:u,notFoundType:p.notFound,history:i}))}}}]);