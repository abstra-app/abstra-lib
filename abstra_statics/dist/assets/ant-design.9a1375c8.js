import{em as n,cH as b}from"./vue-router.5f743299.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7002d9d2-db41-4a1a-b418-4d9f84eaa57c",e._sentryDebugIdIdentifier="sentry-dbid-7002d9d2-db41-4a1a-b418-4d9f84eaa57c")}catch{}})();function u(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function c(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function o(e,r=[],t){const l=t?`'${t}': ${u(e)}`:u(e);if(n.exports.isArray(e)){const i=c(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,f)=>o(s,[...r,i,`${f}`]))}]}else if(n.exports.isObject(e)){const i=c(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,f])=>o(f,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function d(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{d as a,o as t};
//# sourceMappingURL=ant-design.9a1375c8.js.map
