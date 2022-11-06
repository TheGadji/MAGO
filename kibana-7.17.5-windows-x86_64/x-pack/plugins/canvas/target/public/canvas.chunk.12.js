/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.canvas_bundle_jsonpfunction=window.canvas_bundle_jsonpfunction||[]).push([[12],{388:function(e,t,l){"use strict";l.r(t),l.d(t,"argTypeSpecs",(function(){return ie}));var a=l(20),s=l(22),o=l(60),n=l(84),i=l(54),r=l(21);const{Color:c}=i.a,u=({onValueChange:e,argValue:t,workpad:l,typeInstance:a})=>Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s"},Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(n.a,{value:t,onChange:e,colors:l.colors,ariaLabel:`${a.displayName} ${c.getDisplayName()}`})));var p=l(69),b=l.n(p),j=l(61),g=l(7),d=l(71),x=l.n(d),m=l(132);const{set:O,del:y}=x.a,{SeriesStyle:S}=i.a,v=e=>{const{typeInstance:t,argValue:l,onValueChange:o,labels:i,workpad:c}=e,{name:u}=t,p=Object(g.get)(l,"chain.0",{}),b=Object(g.get)(p,"arguments",{}),j=Object(g.get)(b,"color.0",""),d=(e,t)=>{const a=(""===t?y:O)(l,`chain.0.arguments.${e}`,[t]);return o(a)};return Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s",alignItems:"center",className:"canvasArgSeries__colorPicker"},j&&0!==j.length?Object(r.jsx)(a.Fragment,null,Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)("label",{htmlFor:"series-style"},Object(r.jsx)(s.EuiText,{size:"xs"},S.getColorLabel()))),Object(r.jsx)(s.EuiFlexItem,{style:{fontSize:0}},Object(r.jsx)(n.a,{anchorPosition:"leftCenter",colors:c.colors,onChange:e=>d("color",e),value:j,ariaLabel:S.getColorLabel()})),Object(r.jsx)(s.EuiFlexItem,null,Object(r.jsx)(s.EuiButtonIcon,{iconType:"cross",color:"danger",onClick:()=>d("color",""),"aria-label":S.getRemoveAriaLabel()}))):Object(r.jsx)(a.Fragment,null,Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(s.EuiText,{size:"xs"},S.getColorLabel())),Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(s.EuiText,{size:"xs"},Object(r.jsx)(s.EuiLink,{"aria-label":`${S.getColorLabel()}: ${S.getColorValueDefault()}`,onClick:()=>d("color","#000000")},S.getColorValueDefault())))),"defaultStyle"!==u&&(!i||0===i.length)&&Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(m.b,{position:"left",icon:m.a.warning,content:S.getNoSeriesTooltip()})))};v.displayName="SeriesStyleArgSimpleInput";const{set:h,del:f}=x.a,{SeriesStyle:E}=i.a,C=e=>{const{typeInstance:t,onValueChange:l,labels:o,argValue:n}=e,i=Object(g.get)(n,"chain.0",{}),c=Object(g.get)(i,"arguments",{}),u=Object(g.get)(c,"label.0","");let p="";t&&(p=t.name);const b=Object(g.get)(t,"options.include",[]),j=b.some((e=>-1!==["lines","bars","points"].indexOf(e))),d=(e,t)=>{const a=(""===t.target.value?f:h)(n,`chain.0.arguments.${e}`,[t.target.value]);return l(a)},x=[{value:0,text:E.getNoneOption()},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],m=[{value:"",text:E.getSelectSeriesOption()}];return o.sort().forEach((e=>m.push({value:e,text:e}))),Object(r.jsx)("div",null,"defaultStyle"!==p&&Object(r.jsx)(a.Fragment,null,Object(r.jsx)(s.EuiFormRow,{label:E.getSeriesIdentifierLabel(),display:"columnCompressed"},Object(r.jsx)(s.EuiSelect,{compressed:!0,value:u,options:m,onChange:e=>d("label",e)})),Object(r.jsx)(s.EuiSpacer,{size:"s"})),j&&Object(r.jsx)(a.Fragment,null,Object(r.jsx)(s.EuiSpacer,{size:"s"}),Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s"},b.includes("lines")&&Object(r.jsx)(s.EuiFlexItem,null,Object(r.jsx)(s.EuiFormRow,{label:E.getLineLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiSelect,{value:Object(g.get)(c,"lines.0",0),options:x,compressed:!0,onChange:e=>d("lines",e)}))),b.includes("bars")&&Object(r.jsx)(s.EuiFlexItem,null,Object(r.jsx)(s.EuiFormRow,{label:E.getBarLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiSelect,{value:Object(g.get)(c,"bars.0",0),options:x,compressed:!0,onChange:e=>d("bars",e)}))),b.includes("points")&&Object(r.jsx)(s.EuiFlexItem,null,Object(r.jsx)(s.EuiFormRow,{label:E.getPointLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiSelect,{value:Object(g.get)(c,"points.0",0),options:x,compressed:!0,onChange:e=>d("points",e)}))))))};C.displayName="SeriesStyleArgAdvancedInput";const{SeriesStyle:w}=i.a,F=(e,t)=>("string"!=typeof e&&t.renderError(),`${w.getStyleLabel()}: ${e}`),I=Object(j.compose)(Object(j.lifecycle)({componentWillMount(){const e=Object(g.get)(this.props.argValue,"chain.0.arguments.label.0","");e&&this.props.setLabel(F(e,this.props))},componentDidUpdate(e){const t=Object(g.get)(this.props.argValue,"chain.0.arguments.label.0","");t&&e.label!==F(t,this.props)&&this.props.setLabel(F(t,this.props))}}))(C);I.propTypes={argValue:b.a.any.isRequired,setLabel:b.a.func.isRequired,label:b.a.string};const{ContainerStyle:N}=i.a,z=({getArgValue:e,setArgValue:t,workpad:l})=>Object(r.jsx)("div",{style:{fontSize:0}},Object(r.jsx)(n.a,{value:e("backgroundColor"),onChange:e=>t("backgroundColor",e),colors:l.colors,anchorPosition:"leftCenter",ariaLabel:N.getDisplayName()}));z.displayName="ContainerStyleArgSimpleInput";var k=l(66);const{ContainerStyle:L}=i.a,T=({value:e="",radius:t="",onChange:l,colors:a})=>{const[o="",i="",c=""]=e.split(" "),u=Object(k.isBorderStyle)(i)?i:k.BorderStyle.NONE,p=o?o.replace("px",""):"",b="string"==typeof t?t.replace("px",""):t,j=e=>t=>"borderWidth"===e?l("border",`${t}px ${i} ${c}`):"borderStyle"===e?l("border",""===t?"0px":`${o} ${t} ${c}`):"borderRadius"===e?l("borderRadius",""===t?"0px":`${t}px`):void l(e,t);return Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s"},Object(r.jsx)(s.EuiFlexItem,{grow:2},Object(r.jsx)(s.EuiFormRow,{label:L.getThicknessLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiFieldNumber,{compressed:!0,value:Number(p),onChange:e=>j("borderWidth")(Number(e.target.value))}))),Object(r.jsx)(s.EuiFlexItem,{grow:3},Object(r.jsx)(s.EuiFormRow,{label:L.getStyleLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiSuperSelect,{compressed:!0,valueOfSelected:u||"none",options:Object.values(k.BorderStyle).map((e=>({value:e,inputDisplay:Object(r.jsx)("div",{style:{height:16,border:`4px ${e}`}})}))),onChange:j("borderStyle")}))),Object(r.jsx)(s.EuiFlexItem,{grow:2},Object(r.jsx)(s.EuiFormRow,{label:L.getRadiusLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiFieldNumber,{compressed:!0,value:Number(b),onChange:e=>j("borderRadius")(e.target.value)}))),Object(r.jsx)(s.EuiFlexItem,{grow:1},Object(r.jsx)(s.EuiFormRow,{display:"rowCompressed",label:L.getColorLabel(),style:{fontSize:0}},Object(r.jsx)(n.a,{value:c,onChange:e=>l("border",`${o} ${i} ${e}`),colors:a,anchorPosition:"upCenter",ariaLabel:L.getBorderTitle()}))))},{ContainerStyle:V}=i.a,A=[{value:"hidden",text:V.getOverflowHiddenOption()},{value:"visible",text:V.getOverflowVisibleOption()}],$=[{value:1,text:"100%"},{value:.9,text:"90%"},{value:.7,text:"70%"},{value:.5,text:"50%"},{value:.3,text:"30%"},{value:.1,text:"10%"}],R=({padding:e="",opacity:t=1,overflow:l="hidden",onChange:a})=>{"string"==typeof e&&(e=e.replace("px",""));const o=e=>t=>{if("padding"===e)return a(e,`${t.target.value}px`);a(e,t.target.value)};return Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s","justify-content":"spaceBetween"},Object(r.jsx)(s.EuiFlexItem,{grow:2},Object(r.jsx)(s.EuiFormRow,{label:V.getPaddingLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiFieldNumber,{compressed:!0,value:Number(e),onChange:o("padding")}))),Object(r.jsx)(s.EuiFlexItem,{grow:3},Object(r.jsx)(s.EuiFormRow,{label:V.getOpacityLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiSelect,{compressed:!0,value:t,options:$,onChange:o("opacity")}))),Object(r.jsx)(s.EuiFlexItem,{grow:3},Object(r.jsx)(s.EuiFormRow,{label:V.getOverflowLabel(),display:"rowCompressed"},Object(r.jsx)(s.EuiSelect,{compressed:!0,value:l,options:A,onChange:o("overflow")}))))};R.defaultProps={opacity:1,overflow:"hidden"};const{ContainerStyle:P}=i.a,B=({getArgValue:e,setArgValue:t,workpad:l})=>Object(r.jsx)("div",null,Object(r.jsx)(s.EuiTitle,{size:"xxxs",textTransform:"uppercase"},Object(r.jsx)("h6",null,P.getAppearanceTitle())),Object(r.jsx)(s.EuiSpacer,{size:"xs"}),Object(r.jsx)(s.EuiSpacer,{size:"xs"}),Object(r.jsx)(R,{onChange:t,opacity:e("opacity"),overflow:e("overflow"),padding:e("padding")}),Object(r.jsx)(s.EuiSpacer,{size:"m"}),Object(r.jsx)(s.EuiTitle,{size:"xxxs",textTransform:"uppercase"},Object(r.jsx)("h6",null,P.getBorderTitle())),Object(r.jsx)(s.EuiSpacer,{size:"xs"}),Object(r.jsx)(s.EuiSpacer,{size:"xs"}),Object(r.jsx)(T,{colors:l.colors,onChange:t,radius:e("borderRadius"),value:e("border")}));B.displayName="ContainerStyleArgExtendedInput";const{set:D}=x.a,{ContainerStyle:G}=i.a,M=e=>Object(j.withHandlers)({getArgValue:({argValue:e})=>(t,l)=>{const a=Object(g.get)(e,"chain.0.arguments",{});return Object(g.get)(a,`${t}.0`,l)},setArgValue:({argValue:e,onValueChange:t})=>(l,a)=>{const s=D(e,`chain.0.arguments.${l}.0`,a);t(s)}})(e);var _=l(32),H=l(64),U=l(6);const W=({value:e,onSelect:t})=>{const l=H.fonts;if(e&&!H.fonts.find((t=>t.value===e))){const t=(e.indexOf(",")>=0?e.split(",")[0]:e).replace(/['"]/g,"");l.push({value:e,label:t}),l.sort(((e,t)=>e.label.localeCompare(t.label)))}return Object(r.jsx)(s.EuiSuperSelect,{compressed:!0,options:l.map((e=>({value:e.value,inputDisplay:Object(r.jsx)("div",{style:{fontFamily:e.value}},e.label)}))),valueOfSelected:e,onChange:e=>t&&t(e)})};W.displayName="FontPicker";const q=[0,6,7,8,9,10,11,12,14,16,18,24,30,36,48,60,72,96],J=()=>U.i18n.translate("xpack.canvas.textStylePicker.alignCenterOption",{defaultMessage:"Align center"}),K=()=>U.i18n.translate("xpack.canvas.textStylePicker.alignRightOption",{defaultMessage:"Align right"}),Q=()=>U.i18n.translate("xpack.canvas.textStylePicker.alignmentOptionsControl",{defaultMessage:"Alignment options"}),X=()=>U.i18n.translate("xpack.canvas.textStylePicker.fontColorLabel",{defaultMessage:"Font Color"}),Y=()=>U.i18n.translate("xpack.canvas.textStylePicker.styleBoldOption",{defaultMessage:"Bold"}),Z=()=>U.i18n.translate("xpack.canvas.textStylePicker.styleItalicOption",{defaultMessage:"Italic"}),ee=()=>U.i18n.translate("xpack.canvas.textStylePicker.styleUnderlineOption",{defaultMessage:"Underline"}),te=()=>U.i18n.translate("xpack.canvas.textStylePicker.styleOptionsControl",{defaultMessage:"Style options"}),le=[{id:"left",label:(()=>U.i18n.translate("xpack.canvas.textStylePicker.alignLeftOption",{defaultMessage:"Align left"}))(),iconType:"editorAlignLeft"},{id:"center",label:J(),iconType:"editorAlignCenter"},{id:"right",label:K(),iconType:"editorAlignRight"}],ae=[{id:"bold",label:Y(),iconType:"editorBold"},{id:"italic",label:Z(),iconType:"editorItalic"},{id:"underline",label:ee(),iconType:"editorUnderline"}],se=({align:e="left",color:t,colors:l,family:o,italic:i=!1,onChange:c,size:u=14,underline:p=!1,weight:b="normal"})=>{const[j,g]=Object(a.useState)({align:e,color:t,family:o,italic:i,size:u,underline:p,weight:b}),d={bold:"bold"===b,italic:Boolean(i),underline:Boolean(p)};isNaN(u)||-1!==q.indexOf(Number(u))||(q.push(Number(u)),q.sort(((e,t)=>e-t)));const x=(e,t)=>{const l={...j,[e]:t};g(l),c(l)};return Object(r.jsx)("div",{className:"canvasTextStylePicker"},Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s"},Object(r.jsx)(s.EuiFlexItem,null,o?Object(r.jsx)(W,{value:o,onSelect:e=>x("family",e)}):Object(r.jsx)(W,{onSelect:e=>x("family",e)})),Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(s.EuiSelect,{compressed:!0,value:u,onChange:e=>x("size",Number(e.target.value)),options:q.map((e=>({text:String(e),value:e}))),prepend:"Size"}))),Object(r.jsx)(s.EuiSpacer,{size:"s"}),Object(r.jsx)(s.EuiFlexGroup,{gutterSize:"s",alignItems:"center",justifyContent:"flexEnd"},Object(r.jsx)(s.EuiFlexItem,{grow:!1,style:{fontSize:0}},Object(r.jsx)(n.a,{value:t,onChange:e=>x("color",e),colors:l,ariaLabel:X()})),Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(s.EuiButtonGroup,{options:ae,buttonSize:"compressed",idToSelectedMap:d,onChange:e=>{let t,l;"bold"===e?(t="weight",l=d[e]?"normal":"bold"):(t=e,l=!d[t]),x(t,l)},type:"multi",isIconOnly:!0,className:"canvasSidebar__buttonGroup",legend:te()})),Object(r.jsx)(s.EuiFlexItem,{grow:!1},Object(r.jsx)(s.EuiButtonGroup,{options:le,buttonSize:"compressed",isIconOnly:!0,idSelected:e,onChange:e=>x("align",e),className:"canvasSidebar__buttonGroup",legend:Q()}))))};se.defaultProps={align:"left",size:14,weight:"normal"};const{Font:oe}=i.a,ne=e=>{const{onValueChange:t,argValue:l,workpad:a}=e,s=Object(g.get)(l,"chain.0",{}),o=Object(g.get)(s,"arguments",{}),n=Object(g.mapValues)(o,"[0]");return Object(r.jsx)(se,{family:n.family,color:n.color,size:n.size,align:n.align,weight:n.weight,underline:n.underline||!1,italic:n.italic||!1,onChange:function(e){const a=Object(_.set)(l,["chain",0,"arguments"],Object(g.mapValues)(e,(e=>[e])));return t(a)},colors:a.colors})};ne.displayName="FontArgInput";const ie=[()=>({name:"color",displayName:c.getDisplayName(),help:c.getHelp(),simpleTemplate:Object(o.a)(u),default:"#000000"}),()=>({name:"containerStyle",displayName:G.getDisplayName(),help:G.getHelp(),default:"{containerStyle}",simpleTemplate:Object(o.a)(M(z)),template:Object(o.a)(M(B))}),()=>({name:"font",displayName:oe.getDisplayName(),help:oe.getHelp(),template:Object(o.a)(ne),default:`{font size=14 family="${H.openSans.value}" color="#000000" align=left}`}),()=>({name:"seriesStyle",displayName:w.getDisplayName(),help:w.getHelp(),template:Object(o.a)(I),simpleTemplate:Object(o.a)(v),default:"{seriesStyle}"})]},60:function(e,t,l){"use strict";l.d(t,"a",(function(){return c}));var a=l(20),s=l.n(a),o=l(23),n=l(27),i=l(102),r=l(21);const c=e=>{const t=t=>Object(r.jsx)(i.a,null,(({error:l})=>l?(t.renderError(),null):Object(r.jsx)(n.I18nProvider,null,Object(r.jsx)(e,t))));return(e,l,a)=>{try{const n=s.a.createElement(t,l);Object(o.render)(n,e,(()=>{a.done()})),a.onDestroy((()=>{Object(o.unmountComponentAtNode)(e)}))}catch(e){a.done(),l.renderError()}}}}}]);