/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[0],{105:function(t,e,r){"use strict";var n=r(200),s=r(203);function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){s.isString(t)&&(t=b(t));return t instanceof o?t.format():o.prototype.format.call(t)},e.Url=o;var h=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(u),l=["%","/","?",";","#"].concat(c),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=r(204);function b(t,e,r){if(t&&s.isObject(t)&&t instanceof o)return t;var n=new o;return n.parse(t,e,r),n}o.prototype.parse=function(t,e,r){if(!s.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var o=t.indexOf("?"),a=-1!==o&&o<t.indexOf("#")?"?":"#",u=t.split(a);u[0]=u[0].replace(/\\/g,"/");var b=t=u.join(a);if(b=b.trim(),!r&&1===t.split("#").length){var j=i.exec(b);if(j)return this.path=b,this.href=b,this.pathname=j[1],j[2]?(this.search=j[2],this.query=e?y.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var O=h.exec(b);if(O){var x=(O=O[0]).toLowerCase();this.protocol=x,b=b.substr(O.length)}if(r||O||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var w="//"===b.substr(0,2);!w||O&&d[O]||(b=b.substr(2),this.slashes=!0)}if(!d[O]&&(w||O&&!g[O])){for(var A,C,q=-1,I=0;I<p.length;I++){-1!==(U=b.indexOf(p[I]))&&(-1===q||U<q)&&(q=U)}-1!==(C=-1===q?b.lastIndexOf("@"):b.lastIndexOf("@",q))&&(A=b.slice(0,C),b=b.slice(C+1),this.auth=decodeURIComponent(A)),q=-1;for(I=0;I<l.length;I++){var U;-1!==(U=b.indexOf(l[I]))&&(-1===q||U<q)&&(q=U)}-1===q&&(q=b.length),this.host=b.slice(0,q),b=b.slice(q),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var S=this.hostname.split(/\./),N=(I=0,S.length);I<N;I++){var $=S[I];if($&&!$.match(f)){for(var k="",_=0,E=$.length;_<E;_++)$.charCodeAt(_)>127?k+="x":k+=$[_];if(!k.match(f)){var F=S.slice(0,I),L=S.slice(I+1),z=$.match(m);z&&(F.push(z[1]),L.unshift(z[2])),L.length&&(b="/"+L.join(".")+b),this.hostname=F.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=n.toASCII(this.hostname));var P=this.port?":"+this.port:"",T=this.hostname||"";this.host=T+P,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!v[x])for(I=0,N=c.length;I<N;I++){var H=c[I];if(-1!==b.indexOf(H)){var K=encodeURIComponent(H);K===H&&(K=escape(H)),b=b.split(H).join(K)}}var W=b.indexOf("#");-1!==W&&(this.hash=b.substr(W),b=b.slice(0,W));var Z=b.indexOf("?");if(-1!==Z?(this.search=b.substr(Z),this.query=b.substr(Z+1),e&&(this.query=y.parse(this.query)),b=b.slice(0,Z)):e&&(this.search="",this.query={}),b&&(this.pathname=b),g[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){P=this.pathname||"";var M=this.search||"";this.path=P+M}return this.href=this.format(),this},o.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,h="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(h=y.stringify(this.query));var a=this.search||h&&"?"+h||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),e+o+(r=r.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(a=a.replace("#","%23"))+n},o.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},o.prototype.resolveObject=function(t){if(s.isString(t)){var e=new o;e.parse(t,!1,!0),t=e}for(var r=new o,n=Object.keys(this),h=0;h<n.length;h++){var a=n[h];r[a]=this[a]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),u=0;u<i.length;u++){var c=i[u];"protocol"!==c&&(r[c]=t[c])}return g[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!g[t.protocol]){for(var l=Object.keys(t),p=0;p<l.length;p++){var f=l[p];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||d[t.protocol])r.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),r.pathname=m.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var v=r.pathname||"",y=r.search||"";r.path=v+y}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),j=t.host||t.pathname&&"/"===t.pathname.charAt(0),O=j||b||r.host&&t.pathname,x=O,w=r.pathname&&r.pathname.split("/")||[],A=(m=t.pathname&&t.pathname.split("/")||[],r.protocol&&!g[r.protocol]);if(A&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),O=O&&(""===m[0]||""===w[0])),j)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=m;else if(m.length)w||(w=[]),w.pop(),w=w.concat(m),r.search=t.search,r.query=t.query;else if(!s.isNullOrUndefined(t.search)){if(A)r.hostname=r.host=w.shift(),(R=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=R.shift(),r.host=r.hostname=R.shift());return r.search=t.search,r.query=t.query,s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var C=w.slice(-1)[0],q=(r.host||t.host||w.length>1)&&("."===C||".."===C)||""===C,I=0,U=w.length;U>=0;U--)"."===(C=w[U])?w.splice(U,1):".."===C?(w.splice(U,1),I++):I&&(w.splice(U,1),I--);if(!O&&!x)for(;I--;I)w.unshift("..");!O||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),q&&"/"!==w.join("/").substr(-1)&&w.push("");var R,S=""===w[0]||w[0]&&"/"===w[0].charAt(0);A&&(r.hostname=r.host=S?"":w.length?w.shift():"",(R=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=R.shift(),r.host=r.hostname=R.shift()));return(O=O||r.host&&w.length)&&!S&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},o.prototype.parseHost=function(){var t=this.host,e=a.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},200:function(t,e,r){(function(t,n){var s;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(o){e&&e.nodeType,t&&t.nodeType;var h="object"==typeof n&&n;h.global!==h&&h.window!==h&&h.self;var a,i=2147483647,u=36,c=/^xn--/,l=/[^\x20-\x7E]/,p=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,v=String.fromCharCode;function d(t){throw new RangeError(f[t])}function g(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function y(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),n+g((t=t.replace(p,".")).split("."),e).join(".")}function b(t){for(var e,r,n=[],s=0,o=t.length;s<o;)(e=t.charCodeAt(s++))>=55296&&e<=56319&&s<o?56320==(64512&(r=t.charCodeAt(s++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),s--):n.push(e);return n}function j(t){return g(t,(function(t){var e="";return t>65535&&(e+=v((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=v(t)})).join("")}function O(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function x(t,e,r){var n=0;for(t=r?m(t/700):t>>1,t+=m(t/e);t>455;n+=u)t=m(t/35);return m(n+36*t/(t+38))}function w(t){var e,r,n,s,o,h,a,c,l,p,f,v=[],g=t.length,y=0,b=128,O=72;for((r=t.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&d("not-basic"),v.push(t.charCodeAt(n));for(s=r>0?r+1:0;s<g;){for(o=y,h=1,a=u;s>=g&&d("invalid-input"),((c=(f=t.charCodeAt(s++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:u)>=u||c>m((i-y)/h))&&d("overflow"),y+=c*h,!(c<(l=a<=O?1:a>=O+26?26:a-O));a+=u)h>m(i/(p=u-l))&&d("overflow"),h*=p;O=x(y-o,e=v.length+1,0==o),m(y/e)>i-b&&d("overflow"),b+=m(y/e),y%=e,v.splice(y++,0,b)}return j(v)}function A(t){var e,r,n,s,o,h,a,c,l,p,f,g,y,j,w,A=[];for(g=(t=b(t)).length,e=128,r=0,o=72,h=0;h<g;++h)(f=t[h])<128&&A.push(v(f));for(n=s=A.length,s&&A.push("-");n<g;){for(a=i,h=0;h<g;++h)(f=t[h])>=e&&f<a&&(a=f);for(a-e>m((i-r)/(y=n+1))&&d("overflow"),r+=(a-e)*y,e=a,h=0;h<g;++h)if((f=t[h])<e&&++r>i&&d("overflow"),f==e){for(c=r,l=u;!(c<(p=l<=o?1:l>=o+26?26:l-o));l+=u)w=c-p,j=u-p,A.push(v(O(p+w%j,0))),c=m(w/j);A.push(v(O(c,0))),o=x(r,y,n==s),r=0,++n}++r,++e}return A.join("")}a={version:"1.4.1",ucs2:{decode:b,encode:j},decode:w,encode:A,toASCII:function(t){return y(t,(function(t){return l.test(t)?"xn--"+A(t):t}))},toUnicode:function(t){return y(t,(function(t){return c.test(t)?w(t.slice(4).toLowerCase()):t}))}},void 0===(s=function(){return a}.call(e,r,e,t))||(t.exports=s)}()}).call(this,r(201)(t),r(202))},201:function(t,e,r){t.exports=r(23)(404)},202:function(t,e,r){t.exports=r(23)(105)},203:function(t,e,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},204:function(t,e,r){"use strict";e.decode=e.parse=r(205),e.encode=e.stringify=r(206)},205:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,o){e=e||"&",r=r||"=";var h={};if("string"!=typeof t||0===t.length)return h;var a=/\+/g;t=t.split(e);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var u=t.length;i>0&&u>i&&(u=i);for(var c=0;c<u;++c){var l,p,f,m,v=t[c].replace(a,"%20"),d=v.indexOf(r);d>=0?(l=v.substr(0,d),p=v.substr(d+1)):(l=v,p=""),f=decodeURIComponent(l),m=decodeURIComponent(p),n(h,f)?s(h[f])?h[f].push(m):h[f]=[h[f],m]:h[f]=m}return h};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},206:function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?o(h(t),(function(h){var a=encodeURIComponent(n(h))+r;return s(t[h])?o(t[h],(function(t){return a+encodeURIComponent(n(t))})).join(e):a+encodeURIComponent(n(t[h]))})).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var h=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},96:function(t,e,r){"use strict";r.r(e),r.d(e,"parseNext",(function(){return o}));var n=r(105),s=r(9);function o(t,e=""){const{query:r,hash:o}=Object(n.parse)(t,!0);let h=r[s.g];return h?(h=Array.isArray(h)&&h.length>0?h[0]:h,function(t,e=""){const{protocol:r,hostname:s,port:o,pathname:h}=Object(n.parse)(t,!1,!0);if(null!==r||null!==s||null!==o)return!1;if(e){const t=new URL(String(h),"https://localhost").pathname;return(null==h?void 0:h.startsWith("/"))&&(t===e||t.startsWith(`${e}/`))}return!0}(h,e)?h+(o||""):`${e}/`):`${e}/`}}}]);