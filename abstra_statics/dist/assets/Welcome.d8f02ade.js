import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.01e384ac.js";import{C as b}from"./ContentLayout.f36ab983.js";import{l as h}from"./fetch.5d4b3827.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as f,a as C,u as d,d9 as p,aG as _,a0 as x}from"./index.5aecb583.js";import{u as I,E as T}from"./editor.bbb11be7.js";import{C as D}from"./Card.343e3a00.js";import"./Logo.d4f441cc.js";import"./workspaceStore.d4664f94.js";import"./url.d1aedda8.js";import"./colorHelpers.25ec075c.js";import"./linters.fe07d562.js";import"./asyncComputed.919e81fb.js";import"./TabPane.1c765b36.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6420b39b-6918-43ad-995e-799a1fab753f",e._sentryDebugIdIdentifier="sentry-dbid-6420b39b-6918-43ad-995e-799a1fab753f")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[f(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[f(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.d8f02ade.js.map
