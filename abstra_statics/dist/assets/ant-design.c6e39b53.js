import{as as n}from"./outputWidgets.e0cab0b1.js";import"./index.c677fa16.js";import{M as y}from"./Modal.04ca91b3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f9e4a726-6f81-452f-88f2-081dd7048fc7",e._sentryDebugIdIdentifier="sentry-dbid-f9e4a726-6f81-452f-88f2-081dd7048fc7")}catch{}})();function o(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const s=t?`'${t}': ${o(e)}`:o(e);if(n.exports.isArray(e)){const f=u(e);return[{title:s,key:[...r,f].join("/"),children:e.flatMap((i,l)=>c(i,[...r,f,`${l}`]))}]}else if(n.exports.isObject(e)){const f=u(e);return[{title:s,key:[...r,f].join("/"),children:Object.entries(e).flatMap(([i,l])=>c(l,[...r,f,i],i))}]}else return[{title:s,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,c as t};
//# sourceMappingURL=ant-design.c6e39b53.js.map
