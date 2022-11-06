(window.visTypeTimeseries_bundle_jsonpfunction=window.visTypeTimeseries_bundle_jsonpfunction||[]).push([[11],{105:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i(4),r=i(31),a=i.n(r);var n=i(65),l=i(9),o=i(43),c=i(76),d=i(1);function b(e){function t(t){const{model:i,visData:r,syncColors:b,palettesService:u,fieldFormatMap:m}=t,p=Object(s.useCallback)(((e,t,s)=>{const a={...i.series[0].palette,name:"kibana"===i.series[0].split_color_mode?"kibana_palette":i.series[0].split_color_mode||i.series[0].palette.name},n={seriesById:r[i.id].series,seriesName:e,seriesId:t,baseColor:s,seriesPalette:a,palettesRegistry:u,syncColors:b,fieldFormatMap:m};return Object(c.a)(n)||null}),[m,i.id,i.series,u,b,r]);if(!i||!r||!r[i.id])return Object(d.jsx)(e,t);if(r[i.id].series.every((e=>1===e.id.split(":").length)))return Object(d.jsx)(e,t);const h=r[i.id].series.reduce(((e,t)=>{const[s,r]=t.id.split(":"),a=i.series.find((e=>e.id===s));if(!a)return e;const n=t.splitByLabel;e[r]||(e[r]={series:[],label:t.label.toString(),labelFormatted:t.labelFormatted});const l=/{{\s*key\s*}}/.test(a.label),o=t.color||a.color,c="terms"===i.series[0].split_mode?p(n,t.id,o):o;return e[r].series.push({...t,id:s,color:c,label:a.label&&!l?a.label:n}),e}),{}),j=Object(l.first)(r[i.id].series.filter((e=>{const t=i.series.find((t=>t.id===e.id));return!!t&&["everything","filter"].includes(t.split_mode)}))),v=j?Object(l.findIndex)(i.series,(e=>e.id===j.id)):null,f=Object.keys(h).map((s=>{const r=h[s],{series:a,label:l,labelFormatted:c}=r;let b=l;c&&(b=Object(n.a)(c));const u=null!=v&&v>0?[...a,j]:[j,...a],m={[i.id]:{id:i.id,series:u||a}};return Object(d.jsx)("div",{key:s,className:"tvbSplitVis__split"},Object(d.jsx)(e,{model:i,visData:m,onBrush:t.onBrush,onFilterClick:t.onFilterClick,additionalLabel:Object(o.b)(b),backgroundColor:t.backgroundColor,getConfig:t.getConfig,fieldFormatMap:t.fieldFormatMap}))})),O=1===r[i.id].series.length;return Object(d.jsx)("div",{className:a()("tvbSplitVis",{"tvbSplitVis--one":O})},f)}var i;return t.displayName=`SplitVisComponent(${i=e,i.displayName||i.name||"Component"})`,t}},301:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return f}));var s=i(4),r=i(105),a=i(60),n=i(53),l=i(61),o=i(9),c=i.n(o),d=i(83),b=i.n(d),u=i(47),m=i(84),p=i(1);class metric_Metric extends s.Component{constructor(e){super(e),this.state={scale:1,left:0,top:0,translateX:1,translateY:1},this.handleResize=this.handleResize.bind(this)}UNSAFE_componentWillMount(){const e=()=>{this.timeout=setTimeout((()=>{const t=Object(m.a)(this.inner,this.resize,this.state);t&&this.state&&!c.a.isEqual(t,this.state)&&this.handleResize(),e()}),500)};e()}componentWillUnmount(){clearTimeout(this.timeout)}componentDidMount(){this.handleResize()}handleResize(){const e=Object(m.a)(this.inner,this.resize,this.state);this.setState(e)}render(){const{metric:e,secondary:t}=this.props,{scale:i,translateX:s,translateY:r}=this.state,a=(e&&(e.tickFormatter||e.formatter)||(e=>e))(Object(u.b)(null==e?void 0:e.data)),n=b()({default:{container:{},inner:{top:this.state.top||0,left:this.state.left||0,transform:`matrix(${i}, 0, 0, ${i}, ${s}, ${r})`},primary_value:{},secondary_value:{}},reversed:{primary_value:{},secondary_value:{}}},this.props);let l,o,c;if(this.props.backgroundColor&&(n.container.backgroundColor=this.props.backgroundColor),e&&e.color&&(n.primary_value.color=e.color),e&&e.label&&(l=Object(p.jsx)("div",{className:"tvbVisMetric__label--primary"},e.label)),t){const e=(t.formatter||(e=>e))(Object(u.b)(t.data));let i;t.color&&(n.secondary_value.color=t.color),t.label&&(i=Object(p.jsx)("div",{className:"tvbVisMetric__label--secondary"},t.label)),o=Object(p.jsx)("div",{className:"tvbVisMetric__secondary"},i,Object(p.jsx)("div",{style:n.secondary_value,className:"tvbVisMetric__value--secondary"},Object(p.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})))}this.props.additionalLabel&&(c=Object(p.jsx)("div",{className:"tvbVisMetric__label--additional"},this.props.additionalLabel));let d="tvbVisMetric";return n.container.backgroundColor||(d+=" tvbVisMetric--noBackground"),this.props.reversed&&(d+=" tvbVisMetric--reversed"),Object(p.jsx)("div",{className:d,style:n.container},Object(p.jsx)("div",{ref:e=>this.resize=e,className:"tvbVisMetric__resize"},Object(p.jsx)("div",{ref:e=>this.inner=e,className:"tvbVisMetric__inner",style:n.inner},Object(p.jsx)("div",{className:"tvbVisMetric__primary"},l,Object(p.jsx)("div",{style:n.primary_value,"data-test-subj":"tsvbMetricValue",className:"tvbVisMetric__value--primary"},Object(p.jsx)("span",{dangerouslySetInnerHTML:{__html:a}}))),o,c)))}}var h=i(2),j=i(77),v=i(69);const f=Object(r.a)((function(e){const{backgroundColor:t,model:i,visData:s,fieldFormatMap:r,getConfig:c}=e,d=function(e){const{model:t,visData:i}=e,s=Object(o.get)(i,`${t.id}.series`,[]).filter((e=>!Object(o.isUndefined)(e)));let r,a;return t.background_color_rules&&t.background_color_rules.forEach((e=>{if(e.operator){var t;const i=Object(u.b)(null===(t=s[0])||void 0===t?void 0:t.data);Object(v.c)(e,i)&&Object(v.b)(e.operator)(i,e.value)&&(a=e.background_color,r=e.color)}})),{color:r,background:a}}(e),b=Object(o.get)(s,`${i.id}.series`,[]).filter((e=>e)).map(((e,t)=>{const s=i.series.find((t=>Object(o.includes)(e.id,t.id))),b={};return s&&(b.formatter=s.formatter===h.b.DEFAULT?Object(l.a)(Object(a.a)(s.metrics),r,"html",d.color):Object(n.a)(s.formatter,s.value_template,c)),0===t&&d.color&&(b.color=d.color),Object(o.assign)({},Object(o.pick)(e,["label","data"]),b)})),m=d.background||t,f={backgroundColor:m},O={metric:b[0],additionalLabel:e.additionalLabel,reversed:Object(j.b)(m)};return b[1]&&(O.secondary=b[1]),Object(p.jsx)("div",{className:"tvbVis",style:f},Object(p.jsx)(metric_Metric,O))}))},54:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));const s=["#68BC00","#009CE0","#B0BC00","#16A5A5","#D33115","#E27300","#FCC400","#7B64FF","#FA28FF","#333333","#808080","#194D33","#0062B1","#808900","#0C797D","#9F0500","#C45100","#FB9E00","#653294","#AB149E","#0F1419","#666666"]},55:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i(56),r=i.n(s);const a=e=>{let t=new r.a(e);const i=t.hsl().object();return i.l-=100*t.luminosity(),t=r.a.hsl(i),t.rgb().toString()}},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var s=i(2),r=i(55),a=i(54),n=i(43);const l=({seriesById:e,seriesName:t,seriesId:i,baseColor:l,seriesPalette:o,palettesRegistry:c,syncColors:d})=>{if(!o)return null;const b=o.name===s.d.RAINBOW||o.name===s.d.GRADIENT?"custom":o.name,u=o.name===s.d.GRADIENT?{...o.params,colors:[l,Object(r.a)(l)],gradient:!0}:o.name===s.d.RAINBOW?{...o.params,colors:a.a}:o.params;return null==c?void 0:c.get(b||"default").getCategoricalColor([{name:Object(n.b)(t),rankAtDepth:e.findIndex((({id:e})=>e===i)),totalSeriesAtDepth:e.length}],{maxDepth:1,totalSeries:e.length,behindText:!1,syncColors:d},u)}},84:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i(5);function r(e,t){return[Math.floor(e.clientWidth*t),Math.floor(e.clientHeight*t)]}function a(e,t,i){const a=Object(s.findDOMNode)(e),n=Object(s.findDOMNode)(t);let l=i.scale;l=n.clientWidth-n.clientHeight<0?n.clientWidth/a.clientWidth:n.clientHeight/a.clientHeight;let[o,c]=r(a,l);o>n.clientWidth&&(l=n.clientWidth/a.clientWidth),c>n.clientHeight&&(l=n.clientHeight/a.clientHeight),[o,c]=r(a,l);const d=(o-a.clientWidth)/2,b=(c-a.clientHeight)/2;return{scale:l,top:Math.floor((n.clientHeight-c)/2),left:Math.floor((n.clientWidth-o)/2),translateY:b,translateX:d}}}}]);