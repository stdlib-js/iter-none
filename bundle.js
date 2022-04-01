// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterNone=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,a=Object.prototype,o=a.toString,u=a.__defineGetter__,c=a.__defineSetter__,f=a.__lookupGetter__,s=a.__lookupSetter__;var l=function(r,e,t){var n,i,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,i&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),p&&c&&c.call(r,e,t.set),r},p=i,v=l,g=n()?p:v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,E=y;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",x=_,O=T,V=y;var S=j,k=function(r){var e,t,n;if(null==r)return V.call(r);t=r[O],e=x(r,O);try{r[O]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[O]=t:delete r[O],n},I=w()?k:S,A=Boolean.prototype.toString;var R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=w();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?$(r):"[object Boolean]"===R(r)))},N=m,C=M;var B=h,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",m),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=e,ir=er,ar=tr;var or=function(){return"function"==typeof nr||"object"==typeof ar||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;h(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};h(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,hr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return hr(r)?"Buffer":t},br=mr;var wr=mr;var yr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return wr(r).toLowerCase()},jr=or()?Er:yr;var Pr=function(r){return"function"===jr(r)},_r=Pr;var Tr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)};var xr=function(r){return"string"==typeof r},Or=String.prototype.valueOf;var Vr=I,Sr=function(r){try{return Or.call(r),!0}catch(r){return!1}},kr=w();var Ir=function(r){return"object"==typeof r&&(r instanceof String||(kr?Sr(r):"[object String]"===Vr(r)))},Ar=xr,Rr=Ir;var $r=h,Fr=function(r){return Ar(r)||Rr(r)},Mr=Ir;$r(Fr,"isPrimitive",xr),$r(Fr,"isObject",Mr);var Nr=Fr,Cr=Math.floor;var Br=function(r){return Cr(r)===r},Gr=Br;var Lr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Gr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Zr=function(r){return"number"==typeof r},Wr=Number,Xr=Wr.prototype.toString;var zr=I,Ur=Wr,Yr=function(r){try{return Xr.call(r),!0}catch(r){return!1}},Dr=w();var qr=function(r){return"object"==typeof r&&(r instanceof Ur||(Dr?Yr(r):"[object Number]"===zr(r)))},Hr=Zr,Jr=qr;var Kr=h,Qr=function(r){return Hr(r)||Jr(r)},re=qr;Kr(Qr,"isPrimitive",Zr),Kr(Qr,"isObject",re);var ee=Qr,te=Number.POSITIVE_INFINITY,ne=Wr.NEGATIVE_INFINITY,ie=te,ae=ne,oe=Br;var ue=function(r){return r<ie&&r>ae&&oe(r)},ce=ee.isPrimitive,fe=ue;var se=function(r){return ce(r)&&fe(r)},le=ee.isObject,pe=ue;var ve=function(r){return le(r)&&pe(r.valueOf())},ge=se,de=ve;var he=h,me=function(r){return ge(r)||de(r)},be=ve;he(me,"isPrimitive",se),he(me,"isObject",be);var we=me;var ye=function(r){return r!=r},Ee=ee.isPrimitive,je=ye;var Pe=function(r){return Ee(r)&&je(r)},_e=ee.isObject,Te=ye;var xe=function(r){return _e(r)&&Te(r.valueOf())},Oe=Pe,Ve=xe;var Se=h,ke=function(r){return Oe(r)||Ve(r)},Ie=xe;Se(ke,"isPrimitive",Pe),Se(ke,"isObject",Ie);var Ae=Lr,Re=we.isPrimitive,$e=Nr.isPrimitive,Fe=ke.isPrimitive;var Me=function(r,e,t){var n,i,a;if(!Ae(r)&&!$e(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Re(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if($e(r)){if(!$e(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Fe(e)){for(a=i;a<n;a++)if(Fe(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Ne=Me,Ce=Nr.isPrimitive;var Be=function(r){if(!Ce(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ge=Nr.isPrimitive;var Le=function(r){if(!Ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ze=Be,We=Le,Xe=Nr.isPrimitive;var ze=function(r){return Xe(r)&&r===We(r)&&r!==Ze(r)},Ue=te,Ye=ne;var De=function(r){return r==r&&r>Ye&&r<Ue},qe=we.isPrimitive;var He=function(r){return qe(r)&&r>=0},Je=we.isObject;var Ke=function(r){return Je(r)&&r.valueOf()>=0},Qe=He,rt=Ke;var et=h,tt=function(r){return Qe(r)||rt(r)},nt=Ke;et(tt,"isPrimitive",He),et(tt,"isObject",nt);var it=tt.isPrimitive,at=Nr.isPrimitive;var ot=function(r,e){var t,n;if(!at(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!it(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ut=we.isPrimitive,ct=Nr.isPrimitive;var ft=function(r,e,t){var n,i;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ct(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ut(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},st=ot,lt=ft;var pt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(lt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+st("0",i):st("0",i)+r,n&&(r="-"+r)),r},vt=ze,gt=Le,dt=Be,ht=De,mt=ee.isPrimitive,bt=pt;var wt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ht(n)){if(!mt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=bt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=bt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=vt(r.specifier)?gt(t):dt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},yt=Nr.isPrimitive,Et=/[-\/\\^$*+?.()|[\]{}]/g;var jt=function(r){var e,t;if(!yt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Et,"\\$&"):(e=(e=r.substring(1,t)).replace(Et,"\\$&"),r=r[0]+e+r.substring(t))},Pt=RegExp.prototype.exec;var _t=I,Tt=function(r){try{return Pt.call(r),!0}catch(r){return!1}},xt=w();var Ot=jt,Vt=Pr,St=Nr.isPrimitive,kt=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?Tt(r):"[object RegExp]"===_t(r)))};var It=ze,At=Le,Rt=Be,$t=function(r,e,t){if(!St(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(St(e))e=Ot(e),e=new RegExp(e,"g");else if(!kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!St(t)&&!Vt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ft=De,Mt=ee.isPrimitive,Nt=function(r){return Math.abs(r)},Ct=/e\+(\d)$/,Bt=/e-(\d)$/,Gt=/^(\d+)$/,Lt=/^(\d+)e/,Zt=/\.0$/,Wt=/\.0*e/,Xt=/(\..*[^0])0*e/;var zt=function(r){var e,t,n=parseFloat(r.arg);if(!Ft(n)){if(!Mt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Nt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$t(t,Xt,"$1e"),t=$t(t,Wt,"e"),t=$t(t,Zt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$t(t,Ct,"e+0$1"),t=$t(t,Bt,"e-0$1"),r.alternate&&(t=$t(t,Gt,"$1."),t=$t(t,Lt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=It(r.specifier)?At(t):Rt(t)},Ut=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Yt=ot;var Dt=Nr.isPrimitive,qt=Ne,Ht=ye,Jt=wt,Kt=zt,Qt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Ut.exec(r);a;)(t=r.slice(e,Ut.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Ut.lastIndex,a=Ut.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},rn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Yt(" ",n):Yt(" ",n)+r},en=pt,tn=String.fromCharCode;var nn=function(r){var e,t,n,i,a,o,u,c,f;if(!Dt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Qt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Dt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ht(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ht(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Jt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ht(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ht(a)?String(n.arg):tn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Kt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=en(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=rn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},an=Tr,on=nn;return function(r){var e;if(!an(r))throw new TypeError(on("invalid argument. Must provide an iterator. Value: `%s`.",r));for(;;){if((e=r.next()).done)return!0;if(e.value)return!1}}}));
//# sourceMappingURL=bundle.js.map
