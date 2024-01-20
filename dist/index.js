"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=s(function(q,i){
var u=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,t=require('@stdlib/array-base-one-to/dist'),n=require('@stdlib/array-zeros/dist'),g=require('@stdlib/array-defaults/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),o=g.get("dtypes.default");function m(r){var e;if(!u(r))throw new TypeError(v('null2d',r));if(arguments.length>1){if(e=arguments[1],e==="generic")return t(r)}else e=o;return t.assign(n(r,e),1,0)}i.exports=m
});var f=a();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
