import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.2cdeccc3.js";import{C as b}from"./ContentLayout.3c8c0a09.js";import{l as h}from"./fetch.2d933923.js";import{d as w,eA as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as d,d9 as f,aG as _,a0 as x}from"./index.4e5c0e37.js";import{u as I,E as T}from"./editor.7d59add1.js";import{C as A}from"./Card.0d725ec0.js";import"./Logo.f315482c.js";import"./workspaceStore.8275e343.js";import"./url.e0198863.js";import"./colorHelpers.3ecfa2a5.js";import"./linters.12a9a0a2.js";import"./asyncComputed.ec3cc1aa.js";import"./TabPane.dc4c20a6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="7c595520-5ce1-488c-b5fe-565867577d2d",e._sentryDebugIdIdentifier="sentry-dbid-7c595520-5ce1-488c-b5fe-565867577d2d")}catch{}})();const D={class:"card-content"},L=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[p(d(A),{bordered:!1,class:"card"},{default:n(()=>[C("div",D,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(f),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(f),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(L,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.58a0ae08.js.map
