// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).oneTo=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,d,"$1e"),n=p.call(n,b,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,h,"e-0$1"),e.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,A=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,a,l,c,s,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,N=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&X.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=G()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[q],r=z(e,q);try{e[q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[q]=t:delete e[q],n}:function(e){return Z.call(e)},H=Number,K=H.prototype.toString;var Q=G();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return W(e)||ee(e)}Y(re,"isPrimitive",W),Y(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return e<te&&e>ne&&oe(e)}function ue(e){return W(e)&&ae(e)}function fe(e){return ee(e)&&ae(e.valueOf())}function le(e){return ue(e)||fe(e)}function ce(e){return ue(e)&&e>=0}function se(e){return fe(e)&&e.valueOf()>=0}function pe(e){return ce(e)||se(e)}function ye(e){var r,t;if(r=[],e<=0)return r;for(t=1;t<e+1;t++)r.push(t);return r}Y(le,"isPrimitive",ue),Y(le,"isObject",fe),Y(pe,"isPrimitive",ce),Y(pe,"isObject",se);var he="function"==typeof Float64Array;var ge="function"==typeof Float64Array?Float64Array:null;var me="function"==typeof Float64Array?Float64Array:void 0;var we=function(){var e,r,t;if("function"!=typeof ge)return!1;try{r=new ge([1,3.14,-3.14,NaN]),t=r,e=(he&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?me:function(){throw new Error("not implemented")},be="function"==typeof Float32Array;var de="function"==typeof Float32Array?Float32Array:null;var ve="function"==typeof Float32Array?Float32Array:void 0;var Ee=function(){var e,r,t;if("function"!=typeof de)return!1;try{r=new de([1,3.14,-3.14,5e40]),t=r,e=(be&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?ve:function(){throw new Error("not implemented")},_e="function"==typeof Int16Array;var Te="function"==typeof Int16Array?Int16Array:null;var Ae="function"==typeof Int16Array?Int16Array:void 0;var xe=function(){var e,r,t;if("function"!=typeof Te)return!1;try{r=new Te([1,3.14,-3.14,32768]),t=r,e=(_e&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")},je="function"==typeof Int32Array;var Ve="function"==typeof Int32Array?Int32Array:null;var ke="function"==typeof Int32Array?Int32Array:void 0;var Le=function(){var e,r,t;if("function"!=typeof Ve)return!1;try{r=new Ve([1,3.14,-3.14,2147483648]),t=r,e=(je&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?ke:function(){throw new Error("not implemented")},Se="function"==typeof Int8Array;var Re="function"==typeof Int8Array?Int8Array:null;var Be="function"==typeof Int8Array?Int8Array:void 0;var Ie=function(){var e,r,t;if("function"!=typeof Re)return!1;try{r=new Re([1,3.14,-3.14,128]),t=r,e=(Se&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")},Ce="function"==typeof Uint16Array;var Fe="function"==typeof Uint16Array?Uint16Array:null;var Oe="function"==typeof Uint16Array?Uint16Array:void 0;var Me=function(){var e,r,t;if("function"!=typeof Fe)return!1;try{r=new Fe(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Ce&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Oe:function(){throw new Error("not implemented")},Ne="function"==typeof Uint32Array;var Ue="function"==typeof Uint32Array?Uint32Array:null;var Pe="function"==typeof Uint32Array?Uint32Array:void 0;var Ye=function(){var e,r,t;if("function"!=typeof Ue)return!1;try{r=new Ue(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Ne&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Pe:function(){throw new Error("not implemented")},We="function"==typeof Uint8Array;var $e="function"==typeof Uint8Array?Uint8Array:null;var Ge="function"==typeof Uint8Array?Uint8Array:void 0;var Ze=function(){var e,r,t;if("function"!=typeof $e)return!1;try{r=new $e(r=[1,3.14,-3.14,256,257]),t=r,e=(We&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ge:function(){throw new Error("not implemented")},Xe="function"==typeof Uint8ClampedArray;var ze="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Je="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var qe=function(){var e,r,t;if("function"!=typeof ze)return!1;try{r=new ze([-1,0,1,3.14,4.99,255,256]),t=r,e=(Xe&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Je:function(){throw new Error("not implemented")};function De(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=4294967295}function He(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ke="function"==typeof ArrayBuffer;function Qe(e){return Ke&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}var er=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function rr(e){return"object"==typeof e&&null!==e&&!er(e)}var tr=/./;function nr(e){return"boolean"==typeof e}var ir=Boolean,or=Boolean.prototype.toString;var ar=G();function ur(e){return"object"==typeof e&&(e instanceof ir||(ar?function(e){try{return or.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function fr(e){return nr(e)||ur(e)}function lr(){return new Function("return this;")()}Y(fr,"isPrimitive",nr),Y(fr,"isObject",ur);var cr="object"==typeof self?self:null,sr="object"==typeof window?window:null,pr="object"==typeof global?global:null,yr="object"==typeof globalThis?globalThis:null;var hr=function(e){if(arguments.length){if(!nr(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return lr()}if(yr)return yr;if(cr)return cr;if(sr)return sr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),gr=hr.document&&hr.document.childNodes,mr=Int8Array;function wr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;function dr(e){return null!==e&&"object"==typeof e}function vr(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=br.exec(n.toString()))return r[1]}return dr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Y(wr,"REGEXP",br),Y(dr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!er(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(dr));var Er="function"==typeof tr||"object"==typeof mr||"function"==typeof gr?function(e){return vr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?vr(e).toLowerCase():r};function _r(e){return"function"===Er(e)}function Tr(e,r){if(!(this instanceof Tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Tr,"BYTES_PER_ELEMENT",8),Y(Tr.prototype,"BYTES_PER_ELEMENT",8),Y(Tr.prototype,"byteLength",16),Y(Tr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Tr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ar="function"==typeof Math.fround?Math.fround:null,xr=new Ee(1);var jr="function"==typeof Ar?Ar:function(e){return xr[0]=e,xr[0]};function Vr(e,r){if(!(this instanceof Vr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:jr(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:jr(r)}),this}function kr(e){return e instanceof Tr||e instanceof Vr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Lr(e){return oe(e/2)}function Sr(){return"function"==typeof J&&"symbol"==typeof J("foo")&&z(J,"iterator")&&"symbol"==typeof J.iterator}Y(Vr,"BYTES_PER_ELEMENT",4),Y(Vr.prototype,"BYTES_PER_ELEMENT",4),Y(Vr.prototype,"byteLength",8),Y(Vr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Vr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Rr=Sr()?Symbol.iterator:null;function Br(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function Ir(e){return e.re}function Cr(e){return e.im}function Fr(e,r){return new Ee(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Or(e,r){return new we(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Mr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Nr(e){var r=Mr[e];return"function"==typeof r?r:Mr.default}var Ur={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Pr(e){var r=Ur[e];return"function"==typeof r?r:Ur.default}function Yr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(De(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Ir(n),Cr(n))}return r}function Wr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,De(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ir(o),Cr(o))}return n}function $r(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Ir(n),e[o+1]=Cr(n),o+=2}return e}var Gr=2*Ee.BYTES_PER_ELEMENT,Zr=Sr();function Xr(e){return e instanceof Dr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function zr(e){return e===Dr||"Complex128Array"===e.name}function Jr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Gr}function qr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Gr}function Dr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Dr))return 0===r?new Dr:1===r?new Dr(arguments[0]):2===r?new Dr(arguments[0],arguments[1]):new Dr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ee(0);else if(1===r)if(ce(arguments[0]))t=new Ee(2*arguments[0]);else if(He(arguments[0]))if((n=(t=arguments[0]).length)&&er(t)&&kr(t[0])){if(null===(t=$r(new Ee(2*n),t))){if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ee(arguments[0])}}else{if(Jr(t))t=Fr(t,0);else if(qr(t))t=Or(t,0);else if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ee(t)}else if(Qe(arguments[0])){if(!oe((t=arguments[0]).byteLength/Gr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Gr,t.byteLength));t=new Ee(t)}else{if(!rr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Zr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!_r(t[Rr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!_r((t=t[Rr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Yr(t))instanceof Error)throw t;t=new Ee(t)}else{if(!Qe(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/Gr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Gr,e));if(2===r){if(!oe((n=t.byteLength-e)/Gr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Gr,n));t=new Ee(t,e)}else{if(!ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Gr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Gr));t=new Ee(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Hr(e){return e.re}function Kr(e){return e.im}function Qr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(De(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Hr(n),Kr(n))}return r}function et(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,De(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Hr(o),Kr(o))}return n}function rt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Hr(n),e[o+1]=Kr(n),o+=2}return e}Y(Dr,"BYTES_PER_ELEMENT",Gr),Y(Dr,"name","Complex64Array"),Y(Dr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,p;if(!_r(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!_r(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Xr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,p=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[p]=Ir(c),o[p+1]=Cr(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(He(e)){if(n){for(f=e.length,u=e.get&&e.set?Pr("default"):Nr("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Lr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,p=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[p]=Ir(c),o[p+1]=Cr(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(rr(e)&&Zr&&_r(e[Rr])){if(!_r((o=e[Rr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Wr(o,n,r):Yr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Dr,"of",(function(){var e,r;if(!_r(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Br(Dr.prototype,"buffer",(function(){return this._buffer.buffer})),Br(Dr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Br(Dr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Dr.prototype,"BYTES_PER_ELEMENT",Dr.BYTES_PER_ELEMENT),Y(Dr.prototype,"copyWithin",(function(e,r){if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Dr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Vr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Rr&&Y(t,Rr,(function(){return r.entries()})),t})),Y(Dr.prototype,"get",(function(e){var r;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Vr((r=this._buffer)[e*=2],r[e+1])})),Br(Dr.prototype,"length",(function(){return this._length})),Y(Dr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ir(e),void(n[t+1]=Cr(e))}if(Xr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ee(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!He(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Lr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ee(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ir(u),n[t+1]=Cr(u),t+=2}}));var tt=2*we.BYTES_PER_ELEMENT,nt=Sr();function it(e){return e instanceof ft||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ot(e){return e===ft||"Complex64Array"===e.name}function at(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===tt/2}function ut(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===tt}function ft(){var e,r,t,n;if(r=arguments.length,!(this instanceof ft))return 0===r?new ft:1===r?new ft(arguments[0]):2===r?new ft(arguments[0],arguments[1]):new ft(arguments[0],arguments[1],arguments[2]);if(0===r)t=new we(0);else if(1===r)if(ce(arguments[0]))t=new we(2*arguments[0]);else if(He(arguments[0]))if((n=(t=arguments[0]).length)&&er(t)&&kr(t[0])){if(null===(t=rt(new we(2*n),t))){if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new we(arguments[0])}}else{if(at(t))t=Fr(t,0);else if(ut(t))t=Or(t,0);else if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new we(t)}else if(Qe(arguments[0])){if(!oe((t=arguments[0]).byteLength/tt))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",tt,t.byteLength));t=new we(t)}else{if(!rr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===nt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!_r(t[Rr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!_r((t=t[Rr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Qr(t))instanceof Error)throw t;t=new we(t)}else{if(!Qe(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/tt))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",tt,e));if(2===r){if(!oe((n=t.byteLength-e)/tt))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",tt,n));t=new we(t,e)}else{if(!ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*tt>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*tt));t=new we(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ft,"BYTES_PER_ELEMENT",tt),Y(ft,"name","Complex128Array"),Y(ft,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,p;if(!_r(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!_r(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(it(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,p=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[p]=Hr(c),o[p+1]=Kr(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(He(e)){if(n){for(f=e.length,u=e.get&&e.set?Pr("default"):Nr("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Lr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,p=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[p]=Hr(c),o[p+1]=Kr(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(e)}if(rr(e)&&nt&&_r(e[Rr])){if(!_r((o=e[Rr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?et(o,n,r):Qr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(ft,"of",(function(){var e,r;if(!_r(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Br(ft.prototype,"buffer",(function(){return this._buffer.buffer})),Br(ft.prototype,"byteLength",(function(){return this._buffer.byteLength})),Br(ft.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ft.prototype,"BYTES_PER_ELEMENT",ft.BYTES_PER_ELEMENT),Y(ft.prototype,"copyWithin",(function(e,r){if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(ft.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Tr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Rr&&Y(t,Rr,(function(){return r.entries()})),t})),Y(ft.prototype,"get",(function(e){var r;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Tr((r=this._buffer)[e*=2],r[e+1])})),Br(ft.prototype,"length",(function(){return this._length})),Y(ft.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Hr(e),void(n[t+1]=Kr(e))}if(it(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*tt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new we(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!He(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Lr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*tt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new we(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Hr(u),n[t+1]=Kr(u),t+=2}}));var lt={float64:we,float32:Ee,generic:Array,int16:xe,int32:Le,int8:Ie,uint16:Me,uint32:Ye,uint8:Ze,uint8c:qe,complex64:Dr,complex128:ft};function ct(e){return lt[e]||null}function st(e){return function(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}(0,e)}function pt(e){var r,t;if(!ce(e))throw new TypeError(B("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if("generic"===(r=arguments.length>1?arguments[1]:"float64"))return st(e);if(null===(t=ct(r)))throw new TypeError(B("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return new t(e)}function yt(){return{dtypes:{default:"float64",numeric:"float64",real:"float64",floating_point:"float64",real_floating_point:"float64",complex_floating_point:"complex128",integer:"int32",signed_integer:"int32",unsigned_integer:"uint32"}}}var ht={dtypes:{default:"float64",numeric:"float64",real:"float64",floating_point:"float64",real_floating_point:"float64",complex_floating_point:"complex128",integer:"int32",signed_integer:"int32",unsigned_integer:"uint32"}},gt={"dtypes.default":ht.dtypes.default,"dtypes.numeric":ht.dtypes.numeric,"dtypes.real":ht.dtypes.real,"dtypes.floating_point":ht.dtypes.floating_point,"dtypes.real_floating_point":ht.dtypes.real_floating_point,"dtypes.complex_floating_point":ht.dtypes.complex_floating_point,"dtypes.integer":ht.dtypes.integer,"dtypes.signed_integer":ht.dtypes.signed_integer,"dtypes.unsigned_integer":ht.dtypes.unsigned_integer};Y(yt,"get",(function(e){var r=gt[e];return void 0===r?null:r}));var mt=yt.get("dtypes.default");return function(e){var r;if(!ce(e))throw new TypeError(B("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>1){if("generic"===(r=arguments[1]))return ye(e)}else r=mt;return ye.assign(pt(e,r),1,0)}}));
//# sourceMappingURL=index.js.map
