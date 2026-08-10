"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var a=u(function(d,i){
var n=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,t=require('@stdlib/array-base-one-to/dist'),g=require('@stdlib/array-zeros/dist'),v=require('@stdlib/array-defaults/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),m=v.get("dtypes.default");function f(r){var e;if(!n(r))throw new TypeError(o('1pD2d',r));if(arguments.length>1){if(e=arguments[1],e==="generic")return t(r)}else e=m;return t.assign(g(r,e),1,0)}i.exports=f
});var l=a();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
