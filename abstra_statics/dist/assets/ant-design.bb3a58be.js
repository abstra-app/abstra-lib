import{eL as n}from"./outputWidgets.ee4285cb.js";import"./index.5e4d1537.js";import{M as y}from"./Modal.8adb656c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c7a462cf-350c-45ae-90dc-ecc4e69ed670",e._sentryDebugIdIdentifier="sentry-dbid-c7a462cf-350c-45ae-90dc-ecc4e69ed670")}catch{}})();function f(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function u(e,r=[],t){const c=t?`'${t}': ${f(e)}`:f(e);if(n.exports.isArray(e)){const i=o(e);return[{title:c,key:[...r,i].join("/"),children:e.flatMap((s,l)=>u(s,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:c,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,l])=>u(l,[...r,i,s],s))}]}else return[{title:c,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,u as t};
//# sourceMappingURL=ant-design.bb3a58be.js.map
