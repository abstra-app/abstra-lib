import{eO as n}from"./outputWidgets.d69bf7b5.js";import"./index.8b72d41c.js";import{M as b}from"./Modal.b574ef26.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="ba8a4525-fe1f-4bfa-88f3-1971a8c9b5d7",e._sentryDebugIdIdentifier="sentry-dbid-ba8a4525-fe1f-4bfa-88f3-1971a8c9b5d7")}catch{}})();function o(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const s=t?`'${t}': ${o(e)}`:o(e);if(n.exports.isArray(e)){const i=u(e);return[{title:s,key:[...r,i].join("/"),children:e.flatMap((f,l)=>c(f,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:s,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([f,l])=>c(l,[...r,i,f],f))}]}else return[{title:s,key:r.join("/"),children:[]}]}function k(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{k as a,c as t};
//# sourceMappingURL=ant-design.8af9d5cd.js.map
