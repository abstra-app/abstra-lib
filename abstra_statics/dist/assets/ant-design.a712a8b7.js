import{ej as n,cL as y}from"./index.49752f8d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="af79f1e6-c875-4156-895c-50acacc90c77",e._sentryDebugIdIdentifier="sentry-dbid-af79f1e6-c875-4156-895c-50acacc90c77")}catch{}})();function f(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function o(e,r=[],t){const c=t?`'${t}': ${f(e)}`:f(e);if(n.exports.isArray(e)){const i=u(e);return[{title:c,key:[...r,i].join("/"),children:e.flatMap((s,l)=>o(s,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:c,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,l])=>o(l,[...r,i,s],s))}]}else return[{title:c,key:r.join("/"),children:[]}]}function x(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{x as a,o as t};
//# sourceMappingURL=ant-design.a712a8b7.js.map
