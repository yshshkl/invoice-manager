!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var n="object"==typeof exports?e(require("react")):e(t.react);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,(t=>(()=>{"use strict";var e={155:e=>{e.exports=t}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var c=n[t]={exports:{}};return e[t](c,c.exports,r),c.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};r.r(o),r.d(o,{useCustomerManager:()=>p,useFormFields:()=>u,useInvoiceManager:()=>O,useProductsManager:()=>b});var c=r(155),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};const u=function(t){var e=(0,c.useState)(t),n=e[0],r=e[1];return{fields:n,setFormsField:function(t){r((function(e){return i(i({},e),t)}))},handleFieldChange:function(t){var e=t.target,n=e.name,o=e.value,c=e.id;console.log("name - ",n),console.log("id - ",c),r((function(t){var e;return i(i({},t),((e={})[n||c]=o,e))}))},resetFormFields:function(){r(t)}}};var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},l=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function i(t){try{a(r.next(t))}catch(t){c(t)}}function u(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}a((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,o,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},f=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,c=e.length;o<c;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};const p=function(){var t=this,e=(0,c.useState)(!1),n=e[0];e[1],(0,c.useEffect)((function(){var t=localStorage.getItem("customers");if(t&&t.length>0)r();else{for(var e=[],n=0;n<20;n++)e.push({id:"".concat(n),name:"Name-".concat(n),email:"abcd@abc.abc".concat(n),phone:"99999999"});o(e)}}),[]);var r=function(){return l(t,void 0,void 0,(function(){var t;return s(this,(function(e){return(t=localStorage.getItem("customers"))&&t.length>0?[2,JSON.parse(t)]:[2,[]]}))}))},o=function(t){localStorage.setItem("customers",JSON.stringify(t))};return{getCustomers:r,isProcessing:n,addCustomer:function(e){return l(t,void 0,void 0,(function(){var t,n;return s(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=f(f([],t,!0),[a({id:"".concat(t.length)},e)],!1),o(n),[2]}}))}))},deleteCustomer:function(e){return l(t,void 0,void 0,(function(){var t,n;return s(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=t.filter((function(t){return t.id!==e})),o(n),[2]}}))}))},editCustomer:function(e){return l(t,void 0,void 0,(function(){var t,n;return s(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=t.map((function(t){return t.id===e.id?e:t})),o(n),[2]}}))}))}}};var d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)},v=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function i(t){try{a(r.next(t))}catch(t){c(t)}}function u(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}a((r=r.apply(t,e||[])).next())}))},h=function(t,e){var n,r,o,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},y=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,c=e.length;o<c;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};const b=function(){var t=this,e=(0,c.useState)(!1),n=e[0];e[1],(0,c.useEffect)((function(){var t=localStorage.getItem("products");if(t&&t.length>0)r();else{for(var e=[],n=0;n<20;n++)e.push({productId:"".concat(n),name:"Name-".concat(n),price:2*(n+1)});o(e)}}),[]);var r=function(){return v(t,void 0,void 0,(function(){var t;return h(this,(function(e){return(t=localStorage.getItem("products"))&&t.length>0?[2,JSON.parse(t)]:[2,[]]}))}))},o=function(t){localStorage.setItem("products",JSON.stringify(t))};return{getProducts:r,isProcessing:n,addProduct:function(e){return v(t,void 0,void 0,(function(){var t,n;return h(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=y(y([],t,!0),[d({id:"".concat(t.length)},e)],!1),o(n),[2]}}))}))},deleteProduct:function(e){return v(t,void 0,void 0,(function(){var t,n;return h(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=t.filter((function(t){return t.productId!==e})),o(n),[2]}}))}))},editProduct:function(e){return v(t,void 0,void 0,(function(){var t,n;return h(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=t.map((function(t){return t.productId===e.productId?e:t})),o(n),[2]}}))}))}}};var g=function(){return g=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},g.apply(this,arguments)},m=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function i(t){try{a(r.next(t))}catch(t){c(t)}}function u(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}a((r=r.apply(t,e||[])).next())}))},w=function(t,e){var n,r,o,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},S=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,c=e.length;o<c;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};const O=function(){var t=this,e=(0,c.useState)(!1),n=e[0];e[1],(0,c.useEffect)((function(){var t=localStorage.getItem("invoices");if(t&&t.length>0)r();else{for(var e=[],n=0;n<5;n++)e.push({id:"".concat(n),title:"Bill to name - ".concat(n),products:[{productId:"1",quantity:2,totalAmount:20},{productId:"2",quantity:7,totalAmount:100}],amount:120});o(e)}}),[]);var r=function(){return m(t,void 0,void 0,(function(){var t;return w(this,(function(e){return(t=localStorage.getItem("invoices"))&&t.length>0?[2,JSON.parse(t)]:[2,[]]}))}))},o=function(t){localStorage.setItem("invoices",JSON.stringify(t))};return{getInvoices:r,isProcessing:n,addInvoice:function(e){return m(t,void 0,void 0,(function(){var t,n;return w(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=S(S([],t,!0),[g({id:"".concat(t.length)},e)],!1),o(n),[2]}}))}))},deleteInvoice:function(e){return m(t,void 0,void 0,(function(){var t,n;return w(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=t.filter((function(t){return t.id!==e})),o(n),[2]}}))}))},editInvoice:function(e){return m(t,void 0,void 0,(function(){var t,n;return w(this,(function(c){switch(c.label){case 0:return[4,r()];case 1:return t=c.sent(),n=t.map((function(t){return t.id===e.id?e:t})),o(n),[2]}}))}))}}};return o})()));