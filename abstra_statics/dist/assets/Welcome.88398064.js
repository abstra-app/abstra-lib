import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.f39a82bc.js";import{C as h}from"./ContentLayout.137b31cd.js";import{l as w}from"./fetch.ea61e13e.js";import{d as b,eo as g,ea as k,e as v,o as r,c as d,w as n,b as f,a as C,u as c,db as p,aG as _,a0 as x}from"./index.0ca8e457.js";import{u as I,E as T}from"./editor.529d571a.js";import{C as D}from"./Card.8a645a68.js";import"./Logo.84d7af60.js";import"./workspaceStore.65789def.js";import"./url.849b8e5d.js";import"./colorHelpers.1d0b8981.js";import"./linters.7a44c00b.js";import"./asyncComputed.36bb51d1.js";import"./TabPane.b6c6c5be.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="651d877d-1c11-460a-8fe4-d447f184d6e9",e._sentryDebugIdIdentifier="sentry-dbid-651d877d-1c11-460a-8fe4-d447f184d6e9")}catch{}})();const L={class:"card-content"},N=b({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await w("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),d(h,null,{default:n(()=>[f(c(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[f(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),d(c(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),d(c(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.88398064.js.map
