(window.esUiShared_bundle_jsonpfunction=window.esUiShared_bundle_jsonpfunction||[]).push([[1],{47:function(t,e,i){t.exports=i(15)(1584)},48:function(t,e,i){switch(window.__kbnThemeTag__){case"v7dark":return i(49);case"v7light":return i(51);case"v8dark":return i(53);case"v8light":return i(55)}},49:function(t,e,i){var o=i(12),s=i(50);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},50:function(t,e,i){(e=i(13)(!1)).push([t.i,".euiCodeEditorWrapper{position:relative}.euiCodeEditorWrapper .ace_hidden-cursors{opacity:0}.euiCodeEditorWrapper.euiCodeEditorWrapper-isEditing .ace_hidden-cursors{opacity:1}.euiCodeEditorKeyboardHint{position:absolute;top:0;left:0;background:rgba(255,255,255,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;cursor:pointer;height:100%;width:100%}.euiCodeEditorKeyboardHint:focus{opacity:1;border:2px solid #1BA9F5;z-index:1000}.euiCodeEditorKeyboardHint.euiCodeEditorKeyboardHint-isInactive{display:none}\n",""]),t.exports=e},51:function(t,e,i){var o=i(12),s=i(52);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},52:function(t,e,i){(e=i(13)(!1)).push([t.i,".euiCodeEditorWrapper{position:relative}.euiCodeEditorWrapper .ace_hidden-cursors{opacity:0}.euiCodeEditorWrapper.euiCodeEditorWrapper-isEditing .ace_hidden-cursors{opacity:1}.euiCodeEditorKeyboardHint{position:absolute;top:0;left:0;background:rgba(255,255,255,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;cursor:pointer;height:100%;width:100%}.euiCodeEditorKeyboardHint:focus{opacity:1;border:2px solid #006BB4;z-index:1000}.euiCodeEditorKeyboardHint.euiCodeEditorKeyboardHint-isInactive{display:none}\n",""]),t.exports=e},53:function(t,e,i){var o=i(12),s=i(54);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},54:function(t,e,i){(e=i(13)(!1)).push([t.i,".euiCodeEditorWrapper{position:relative}.euiCodeEditorWrapper .ace_hidden-cursors{opacity:0}.euiCodeEditorWrapper.euiCodeEditorWrapper-isEditing .ace_hidden-cursors{opacity:1}.euiCodeEditorKeyboardHint{position:absolute;top:0;left:0;background:rgba(255,255,255,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;cursor:pointer;height:100%;width:100%}.euiCodeEditorKeyboardHint:focus{opacity:1;border:2px solid #36A2EF;z-index:1000}.euiCodeEditorKeyboardHint.euiCodeEditorKeyboardHint-isInactive{display:none}\n",""]),t.exports=e},55:function(t,e,i){var o=i(12),s=i(56);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},56:function(t,e,i){(e=i(13)(!1)).push([t.i,".euiCodeEditorWrapper{position:relative}.euiCodeEditorWrapper .ace_hidden-cursors{opacity:0}.euiCodeEditorWrapper.euiCodeEditorWrapper-isEditing .ace_hidden-cursors{opacity:1}.euiCodeEditorKeyboardHint{position:absolute;top:0;left:0;background:rgba(255,255,255,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;cursor:pointer;height:100%;width:100%}.euiCodeEditorKeyboardHint:focus{opacity:1;border:2px solid #07C;z-index:1000}.euiCodeEditorKeyboardHint.euiCodeEditorKeyboardHint-isInactive{display:none}\n",""]),t.exports=e},57:function(t,e,i){"use strict";i.r(e);var o=i(4),s=i.n(o),r=i(9),n=i.n(r),d=i(0),a=i(45),c=i.n(a),u=i(47),p=i.n(u),l=i(2),h=i(46),E=(i(48),i(1));const b="text",y="textmate";function g(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)}class EuiCodeEditor extends d.Component{constructor(t){super(t),n()(this,"state",{isHintActive:!0,isEditing:!1,name:Object(h.htmlIdGenerator)()()}),n()(this,"idGenerator",Object(h.htmlIdGenerator)()),n()(this,"aceEditor",null),n()(this,"editorHint",null),n()(this,"aceEditorRef",(t=>{if(t){this.aceEditor=t;const e=t.editor.textInput.getElement();e.tabIndex=-1,e.addEventListener("keydown",this.onKeydownAce),g(e,"aria-label",this.props["aria-label"]),g(e,"aria-labelledby",this.props["aria-labelledby"]),g(e,"aria-describedby",this.props["aria-describedby"])}})),n()(this,"onEscToExit",(()=>{this.stopEditing(),this.editorHint&&this.editorHint.focus()})),n()(this,"onKeydownAce",(t=>{t.key===h.keys.ESCAPE&&(t.preventDefault(),t.stopPropagation(),null!==this.aceEditor&&!this.aceEditor.editor.completer&&this.state.isEditing&&this.onEscToExit())})),n()(this,"onFocusAce",((t,e)=>{this.setState({isEditing:!0}),this.props.onFocus&&this.props.onFocus(t,e)})),n()(this,"onBlurAce",((t,e)=>{this.stopEditing(),this.props.onBlur&&this.props.onBlur(t,e)})),n()(this,"startEditing",(()=>{this.setState({isHintActive:!1}),null!==this.aceEditor&&this.aceEditor.editor.textInput.focus()}))}stopEditing(){this.setState({isHintActive:!0,isEditing:!1})}isCustomMode(){return"object"==typeof this.props.mode}setCustomMode(){null!==this.aceEditor&&this.aceEditor.editor.getSession().setMode(this.props.mode)}componentDidMount(){this.isCustomMode()&&this.setCustomMode();const{isReadOnly:t,id:e}=this.props,i={id:e,readOnly:t},o=document.getElementById(this.state.name);if(o){const t=o.querySelector("textarea");t&&(s=i,Object.keys(s)).forEach((e=>{i[e]&&t.setAttribute(`${e}`,i[e].toString())}))}var s}componentDidUpdate(t){this.props.mode!==t.mode&&this.isCustomMode()&&this.setCustomMode()}render(){const{width:t,height:e,onBlur:i,isReadOnly:o,setOptions:r,cursorStart:n,mode:d=b,"data-test-subj":a="codeEditorContainer",theme:u=y,commands:h=[],...g}=this.props,f=c()("euiCodeEditorWrapper",{"euiCodeEditorWrapper-isEditing":this.state.isEditing}),C=c()("euiCodeEditorKeyboardHint",{"euiCodeEditorKeyboardHint-isInactive":!this.state.isHintActive});let m;const x={...r};o?(m=-1,Object.assign(x,{readOnly:!0,highlightActiveLine:!1,highlightGutterLine:!1})):m=n;const j=Object(E.jsx)("button",{className:C,id:this.idGenerator("codeEditor"),ref:t=>{this.editorHint=t},onClick:this.startEditing,"data-test-subj":"codeEditorHint"},Object(E.jsx)("p",{className:"euiText"},o?Object(E.jsx)(l.EuiI18n,{token:"euiCodeEditor.startInteracting",default:"Press Enter to start interacting with the code."}):Object(E.jsx)(l.EuiI18n,{token:"euiCodeEditor.startEditing",default:"Press Enter to start editing."})),Object(E.jsx)("p",{className:"euiText"},o?Object(E.jsx)(l.EuiI18n,{token:"euiCodeEditor.stopInteracting",default:"When you're done, press Escape to stop interacting with the code."}):Object(E.jsx)(l.EuiI18n,{token:"euiCodeEditor.stopEditing",default:"When you're done, press Escape to stop editing."})));return Object(E.jsx)("div",{className:f,style:{width:t,height:e},"data-test-subj":a},j,Object(E.jsx)(p.a,s()({mode:this.isCustomMode()?b:d,name:this.state.name,theme:u,ref:this.aceEditorRef,width:t,height:e,onFocus:this.onFocusAce,onBlur:this.onBlurAce,setOptions:x,editorProps:{$blockScrolling:1/0},cursorStart:m,commands:[{name:"stopEditingOnEsc",bindKey:{win:"Esc",mac:"Esc"},exec:this.onEscToExit},...h]},g)))}}n()(EuiCodeEditor,"defaultProps",{setOptions:{showLineNumbers:!1,tabSize:2}}),e.default=EuiCodeEditor}}]);