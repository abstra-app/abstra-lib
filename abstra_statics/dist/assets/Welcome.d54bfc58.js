import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.c44f781c.js";import{C as b}from"./ContentLayout.63bb3a6c.js";import{l as h}from"./fetch.3954c2c9.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as d,d9 as _,aG as f,a0 as x}from"./index.daa73337.js";import{u as I,E as T}from"./editor.5c4bf8b5.js";import{C as D}from"./Card.23616262.js";import"./Logo.f7a7ad20.js";import"./workspaceStore.7064e772.js";import"./url.64947404.js";import"./colorHelpers.1985d759.js";import"./linters.e0c24f65.js";import"./asyncComputed.7df4dce2.js";import"./TabPane.cfcc9b43.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="aee3b408-9aaa-4b03-916d-e8892a96aa49",e._sentryDebugIdIdentifier="sentry-dbid-aee3b408-9aaa-4b03-916d-e8892a96aa49")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const t=g(),{query:i}=k(),o=I();o.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var a;return window.location.replace(((a=o==null?void 0:o.links)==null?void 0:a.project)||T.consoleUrl)},5e3)};return(async()=>{const a=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:a}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await t.push({name:"workspace"})})(),(a,s)=>(r(),c(b,null,{default:n(()=>[p(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(_),{key:0},{default:n(()=>[f("Loading...")]),_:1})):(r(),c(d(_),{key:1},{default:n(()=>[f("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.d54bfc58.js.map
