import{eL as n}from"./outputWidgets.bb2f46e4.js";import"./index.e2651b4f.js";import{M as y}from"./Modal.6f9d473d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="3a2c1f04-9376-4023-8299-83f06f6f7cd9",e._sentryDebugIdIdentifier="sentry-dbid-3a2c1f04-9376-4023-8299-83f06f6f7cd9")}catch{}})();function o(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const s=t?`'${t}': ${o(e)}`:o(e);if(n.exports.isArray(e)){const i=u(e);return[{title:s,key:[...r,i].join("/"),children:e.flatMap((f,l)=>c(f,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:s,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([f,l])=>c(l,[...r,i,f],f))}]}else return[{title:s,key:r.join("/"),children:[]}]}function k(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{k as a,c as t};
//# sourceMappingURL=ant-design.9ba9b232.js.map
