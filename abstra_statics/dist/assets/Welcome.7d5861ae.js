import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.3599734d.js";import{C as b}from"./ContentLayout.e3d22c69.js";import{l as h}from"./fetch.d4a649db.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as f,a as C,u as d,d9 as p,aG as _,a0 as x}from"./index.3dbef024.js";import{u as I,E as T}from"./editor.21453dc5.js";import{C as D}from"./Card.87058e16.js";import"./Logo.3bca39b2.js";import"./workspaceStore.650d40a8.js";import"./url.8865f002.js";import"./colorHelpers.0a559af6.js";import"./linters.58cbf1bd.js";import"./asyncComputed.66315728.js";import"./TabPane.5b682e58.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="cb67dca7-3e26-4bad-8840-39f2f0d13b5a",e._sentryDebugIdIdentifier="sentry-dbid-cb67dca7-3e26-4bad-8840-39f2f0d13b5a")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[f(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[f(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.7d5861ae.js.map
