import{D as n}from"./outputWidgets.548e4895.js";import"./index.4394d7cf.js";import{M as y}from"./Modal.be37308b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="001b01dc-8485-4dc7-8441-7c038811eddd",e._sentryDebugIdIdentifier="sentry-dbid-001b01dc-8485-4dc7-8441-7c038811eddd")}catch{}})();function f(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function u(e,r=[],t){const l=t?`'${t}': ${f(e)}`:f(e);if(n.exports.isArray(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,c)=>u(s,[...r,i,`${c}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,c])=>u(c,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,u as t};
//# sourceMappingURL=ant-design.69147d61.js.map
