import{R as n,cu as b}from"./vue-router.3911c59e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="3e19f79b-bb85-4f34-9f12-abca7fdfc0f9",e._sentryDebugIdIdentifier="sentry-dbid-3e19f79b-bb85-4f34-9f12-abca7fdfc0f9")}catch{}})();function u(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function c(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function o(e,r=[],t){const s=t?`'${t}': ${u(e)}`:u(e);if(n.exports.isArray(e)){const f=c(e);return[{title:s,key:[...r,f].join("/"),children:e.flatMap((i,l)=>o(i,[...r,f,`${l}`]))}]}else if(n.exports.isObject(e)){const f=c(e);return[{title:s,key:[...r,f].join("/"),children:Object.entries(e).flatMap(([i,l])=>o(l,[...r,f,i],i))}]}else return[{title:s,key:r.join("/"),children:[]}]}function x(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{x as a,o as t};
//# sourceMappingURL=ant-design.321d52ab.js.map
