import{ej as n,cH as y}from"./vue-router.5caac341.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c9951897-356e-43d7-b6ec-679a890c1113",e._sentryDebugIdIdentifier="sentry-dbid-c9951897-356e-43d7-b6ec-679a890c1113")}catch{}})();function f(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function o(e,r=[],t){const l=t?`'${t}': ${f(e)}`:f(e);if(n.exports.isArray(e)){const i=u(e);return[{title:l,key:[...r,i].join("/"),children:e.flatMap((s,c)=>o(s,[...r,i,`${c}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:l,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,c])=>o(c,[...r,i,s],s))}]}else return[{title:l,key:r.join("/"),children:[]}]}function x(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{x as a,o as t};
//# sourceMappingURL=ant-design.3646dc8b.js.map
