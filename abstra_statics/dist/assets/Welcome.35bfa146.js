import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.5f0d7dd4.js";import{C as h}from"./ContentLayout.6fdbd531.js";import{l as w}from"./fetch.2ca01292.js";import{d as b,eo as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as d,db as f,aG as _,a0 as x}from"./index.313443c9.js";import{u as I,E as T}from"./editor.7088a491.js";import{C as D}from"./Card.20d58c73.js";import"./Logo.4dd4184b.js";import"./workspaceStore.eeb9615a.js";import"./url.c713496d.js";import"./colorHelpers.9971b176.js";import"./linters.92d8ccde.js";import"./asyncComputed.b9262f9a.js";import"./TabPane.95a0dceb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="005516c0-5589-4044-9f6c-852211d25cd0",e._sentryDebugIdIdentifier="sentry-dbid-005516c0-5589-4044-9f6c-852211d25cd0")}catch{}})();const L={class:"card-content"},N=b({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await w("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(h,null,{default:n(()=>[p(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(f),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(f),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.35bfa146.js.map
