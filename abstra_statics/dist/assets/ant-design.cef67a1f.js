import{eL as n}from"./outputWidgets.16ea2802.js";import"./index.1d0a03a3.js";import{M as b}from"./Modal.cc91ab2e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="5a4d1c18-e86b-426c-ba6e-94e6d4dccbc9",e._sentryDebugIdIdentifier="sentry-dbid-5a4d1c18-e86b-426c-ba6e-94e6d4dccbc9")}catch{}})();function f(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function u(e,r=[],t){const l=t?`'${t}': ${f(e)}`:f(e);if(n.exports.isArray(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,c)=>u(s,[...r,i,`${c}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,c])=>u(c,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,u as t};
//# sourceMappingURL=ant-design.cef67a1f.js.map
