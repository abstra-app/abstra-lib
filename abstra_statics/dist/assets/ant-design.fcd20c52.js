import{Q as n,ct as y}from"./vue-router.bd17b6ae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d4d5857a-31cd-4995-b327-a897a6ff5a74",e._sentryDebugIdIdentifier="sentry-dbid-d4d5857a-31cd-4995-b327-a897a6ff5a74")}catch{}})();function u(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function c(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function o(e,r=[],t){const l=t?`'${t}': ${u(e)}`:u(e);if(n.exports.isArray(e)){const i=c(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,f)=>o(s,[...r,i,`${f}`]))}]}else if(n.exports.isObject(e)){const i=c(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,f])=>o(f,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function x(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{x as a,o as t};
//# sourceMappingURL=ant-design.fcd20c52.js.map
