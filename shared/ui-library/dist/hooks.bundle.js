!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t="object"==typeof exports?r(require("react")):r(e.react);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,(e=>(()=>{"use strict";var r={155:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};o.r(n),o.d(n,{useFormFields:()=>f});var a=o(155),i=function(){return i=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},i.apply(this,arguments)};const f=function(e){var r=(0,a.useState)(e),t=r[0],o=r[1];return{fields:t,handleFieldChange:function(e){var r=e.target,t=r.name,n=r.value;o((function(e){var r;return i(i({},e),((r={})[t]=n,r))}))},resetFormFields:function(){o(e)}}};return n})()));