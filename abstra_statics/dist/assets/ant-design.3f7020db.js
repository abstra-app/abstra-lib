import{eO as n}from"./outputWidgets.7250f034.js";import"./index.c7b0e1b0.js";import{M as y}from"./Modal.67b47861.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f4c96ae4-b619-4778-993e-a035950c02e9",e._sentryDebugIdIdentifier="sentry-dbid-f4c96ae4-b619-4778-993e-a035950c02e9")}catch{}})();function o(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const l=t?`'${t}': ${o(e)}`:o(e);if(n.exports.isArray(e)){const i=u(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,f)=>c(s,[...r,i,`${f}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,f])=>c(f,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function k(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{k as a,c as t};
//# sourceMappingURL=ant-design.3f7020db.js.map
