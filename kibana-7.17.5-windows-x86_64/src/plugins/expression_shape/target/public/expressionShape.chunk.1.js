(window.expressionShape_bundle_jsonpfunction=window.expressionShape_bundle_jsonpfunction||[]).push([[1],{24:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return h}));var s=r(8),n=r.n(s),o=r(2),i=r.n(o),a=r(11),u=r(7),c=r(4);function f(e){switch(e){case u.a.circle:return i.a.forwardRef(((e,t)=>Object(c.jsx)("circle",n()({},e,{ref:t}))));case u.a.rect:return i.a.forwardRef(((e,t)=>Object(c.jsx)("rect",n()({},e,{ref:t}))));case u.a.path:return i.a.forwardRef(((e,t)=>Object(c.jsx)("path",n()({},e,{ref:t}))));default:return i.a.forwardRef(((e,t)=>Object(c.jsx)("polygon",n()({},e,{ref:t}))))}}const h=e=>{return{Component:(t=e,function({shapeAttributes:e,shapeContentAttributes:r,children:s,textAttributes:o}){const{viewBox:u,shapeProps:h,textAttributes:l,shapeType:b}=t,g=null!=e&&e.viewBox?Object(a.d)(null==e?void 0:e.viewBox):Object(a.d)(u),O=f(b),j=o?i.a.forwardRef(((e,t)=>Object(c.jsx)("text",n()({},e,{ref:t})))):null;return Object(c.jsx)("svg",n()({xmlns:"http://www.w3.org/2000/svg"},e||{},{viewBox:g}),Object(c.jsx)(O,n()({},h,r||{})),s,j&&Object(c.jsx)(j,n()({},l||{},o||{}),null==o?void 0:o.textContent))}),data:e};var t}},28:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var s=r(2),n=r(23),o=r(24),i=r(9),a=r(17);const u=function(e,t,r=0,s=0,n=0){const o=[e,t,r,s,n],i=((e,t,r=0)=>{let{minX:s}=t;return e!==a.Progress.HORIZONTAL_BAR&&(s-=r/2),s})(...o),u=((e,t,r=0,s,n=0)=>{let{minY:o}=t;return e===a.Progress.SEMICIRCLE&&(o-=r/2),e!==a.Progress.SEMICIRCLE&&e!==a.Progress.VERTICAL_BAR&&(o-=r/2),e!==a.Progress.VERTICAL_BAR&&e!==a.Progress.VERTICAL_PILL||(o-=n),o})(...o),c=((e,t,r=0,s=0)=>{let{width:n}=t;return e!==a.Progress.HORIZONTAL_BAR&&(n+=r),e!==a.Progress.HORIZONTAL_BAR&&e!==a.Progress.HORIZONTAL_PILL||(n+=s),n})(...o),f=((e,t,r=0,s=0,n=0)=>{let{height:o}=t;return e===a.Progress.SEMICIRCLE&&(o+=r/2),e!==a.Progress.SEMICIRCLE&&e!==a.Progress.VERTICAL_BAR&&(o+=r),e!==a.Progress.VERTICAL_BAR&&e!==a.Progress.VERTICAL_PILL||(o+=n),o})(...o),[h,l]=((e,t,r,s)=>((e===a.Progress.VERTICAL_BAR||e===a.Progress.VERTICAL_PILL)&&t>s&&(r=-t/2,s=t),[r,s]))(e,s,i,c);return{minX:h,minY:u,width:l,height:f}};var c=r(11),f=r(10),h=r(16),l=r(4);const b=Object(i.withSuspense)(h.LazyProgressDrawer);function g({onLoaded:e,parentNode:t,shape:r,value:i,max:h,valueColor:g,barColor:O,valueWeight:j,barWeight:p,label:x,font:L}){const R=Object(n.useResizeObserver)(t),[d,A]=Object(s.useState)({width:t.offsetWidth,height:t.offsetHeight}),[I,P]=Object(s.useState)(Object(f.c)()),w=Object(s.useCallback)((e=>{null!==e&&P(e.getData())}),[]),[C,T]=Object(s.useState)(0);Object(s.useEffect)((()=>{A({width:t.offsetWidth,height:t.offsetHeight}),e()}),[e,t,R]);const v=Object(s.useRef)(null),_=Object(s.useRef)(null);Object(s.useEffect)((()=>{T(v.current?v.current.getTotalLength():0)}),[r,I,v]);const E=I.shapeType?Object(o.b)(I.shapeType):null,B={fill:"none",stroke:O,strokeWidth:`${p}px`},S=C*(1-i/h),m={...I.shapeProps,fill:"none",stroke:g,strokeWidth:`${j}px`,strokeDasharray:C,strokeDashoffset:Math.max(0,S)},{width:y,height:H}=_.current?_.current.getBBox():{width:0,height:0},N=Math.max(j,p),V=I.textAttributes?function(e,t,r=0,s=""){if(!s)return t;let{x:n,y:o,textContent:i}=t;return i=s?s.toString():"",e===a.Progress.HORIZONTAL_PILL&&(n=parseInt(String(n),10)+r/2),e===a.Progress.VERTICAL_PILL&&(o=parseInt(String(o),10)-r/2),e!==a.Progress.HORIZONTAL_BAR&&e!==a.Progress.HORIZONTAL_PILL||(n=parseInt(String(n),10)),{x:n,y:o,textContent:i}}(r,I.textAttributes,N,x):{},k={style:L.spec,...V},Z=u(r,I.viewBox,N,y,H),M={id:Object(c.b)("svg"),...d||{},viewBox:Z};return Object(l.jsx)("div",{className:"shapeAligner"},Object(l.jsx)(b,{shapeType:r,shapeContentAttributes:{...B,ref:v},shapeAttributes:M,textAttributes:{...k,ref:_},ref:w},E&&Object(l.jsx)(E,m)))}}}]);