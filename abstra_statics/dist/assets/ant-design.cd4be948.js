import{R as n,cu as b}from"./vue-router.fbddf5a3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="85ffea5a-22d6-40e9-ab77-b0809860efdd",e._sentryDebugIdIdentifier="sentry-dbid-85ffea5a-22d6-40e9-ab77-b0809860efdd")}catch{}})();function u(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const f=t?`'${t}': ${u(e)}`:u(e);if(n.exports.isArray(e)){const i=o(e);return[{title:f,key:[...r,i].join("/"),children:e.flatMap((s,l)=>c(s,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:f,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,l])=>c(l,[...r,i,s],s))}]}else return[{title:f,key:r.join("/"),children:[]}]}function x(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{x as a,c as t};
//# sourceMappingURL=ant-design.cd4be948.js.map
