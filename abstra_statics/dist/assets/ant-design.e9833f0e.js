import{eJ as n}from"./outputWidgets.427273b8.js";import"./index.631186a5.js";import{M as y}from"./Modal.05c87e5d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d7191625-6306-45a8-955a-ff7cc30ac68f",e._sentryDebugIdIdentifier="sentry-dbid-d7191625-6306-45a8-955a-ff7cc30ac68f")}catch{}})();function c(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function u(e,r=[],t){const f=t?`'${t}': ${c(e)}`:c(e);if(n.exports.isArray(e)){const i=o(e);return[{title:f,key:[...r,i].join("/"),children:e.flatMap((s,l)=>u(s,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:f,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,l])=>u(l,[...r,i,s],s))}]}else return[{title:f,key:r.join("/"),children:[]}]}function k(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{k as a,u as t};
//# sourceMappingURL=ant-design.e9833f0e.js.map
