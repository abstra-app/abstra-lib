import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.dc4740e9.js";import{C as b}from"./ContentLayout.de3d2273.js";import{l as h}from"./fetch.caf60c74.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as f,a as C,u as d,d5 as p,aF as _,$ as x}from"./vue-router.2dfeb709.js";import{u as I,E as T}from"./editor.6b540a61.js";import{C as D}from"./Card.c7f7e195.js";import"./Logo.dfb0fe50.js";import"./workspaceStore.5911dabd.js";import"./url.052bc6c8.js";import"./colorHelpers.8745f3a5.js";import"./asyncComputed.d236b901.js";import"./TabPane.890f9226.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d4c78897-28e2-4b52-8b76-08cb0fdd027c",e._sentryDebugIdIdentifier="sentry-dbid-d4c78897-28e2-4b52-8b76-08cb0fdd027c")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[f(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[f(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const q=x(N,[["__scopeId","data-v-a984ec04"]]);export{q as default};
//# sourceMappingURL=Welcome.0fa019b0.js.map
