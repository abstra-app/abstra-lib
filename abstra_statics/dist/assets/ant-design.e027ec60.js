import{eL as n}from"./outputWidgets.f2ae36a0.js";import"./index.60f2d2be.js";import{M as b}from"./Title.1747a412.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d9001ddb-7bab-4ecf-9843-eb8bb122beff",e._sentryDebugIdIdentifier="sentry-dbid-d9001ddb-7bab-4ecf-9843-eb8bb122beff")}catch{}})();function o(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function u(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function c(e,r=[],t){const f=t?`'${t}': ${o(e)}`:o(e);if(n.exports.isArray(e)){const i=u(e);return[{title:f,key:[...r,i].join("/"),children:e.flatMap((s,l)=>c(s,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=u(e);return[{title:f,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,l])=>c(l,[...r,i,s],s))}]}else return[{title:f,key:r.join("/"),children:[]}]}function j(e,r){return new Promise(t=>{b.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{j as a,c as t};
//# sourceMappingURL=ant-design.e027ec60.js.map
