import{eL as n}from"./outputWidgets.0d464d45.js";import"./index.fb85b6ae.js";import{M as b}from"./Modal.db9a8f5e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7543e5ee-ebd8-41ed-adfb-d4901a315405",e._sentryDebugIdIdentifier="sentry-dbid-7543e5ee-ebd8-41ed-adfb-d4901a315405")}catch{}})();function o(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const l=t?`'${t}': ${o(e)}`:o(e);if(n.exports.isArray(e)){const i=u(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,f)=>c(s,[...r,i,`${f}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,f])=>c(f,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,c as t};
//# sourceMappingURL=ant-design.ef7c5754.js.map
