import{as as n}from"./outputWidgets.3f3d2696.js";import"./index.b32591eb.js";import{M as y}from"./Modal.1a6e3eab.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="0f6c2206-38ac-4fed-9092-9dc2c60d24b8",e._sentryDebugIdIdentifier="sentry-dbid-0f6c2206-38ac-4fed-9092-9dc2c60d24b8")}catch{}})();function c(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function u(e,r=[],t){const l=t?`'${t}': ${c(e)}`:c(e);if(n.exports.isArray(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,f)=>u(s,[...r,i,`${f}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,f])=>u(f,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,u as t};
//# sourceMappingURL=ant-design.640b3158.js.map
