import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.b8e4b131.js";import{C as b}from"./ContentLayout.1094da81.js";import{l as h}from"./fetch.c366e1d8.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as d,d9 as _,aG as f,a0 as x}from"./index.7c703ad7.js";import{u as I,E as T}from"./editor.5711ccc3.js";import{C as D}from"./Card.3ccb420c.js";import"./Logo.407eff79.js";import"./workspaceStore.bb0f51e5.js";import"./url.a7a2be43.js";import"./colorHelpers.ccf2ca8f.js";import"./linters.d354c7f5.js";import"./asyncComputed.1ca3dd12.js";import"./TabPane.4a06eac3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="da9d4c35-7e77-47c3-9d74-c1dcbd6a6b82",e._sentryDebugIdIdentifier="sentry-dbid-da9d4c35-7e77-47c3-9d74-c1dcbd6a6b82")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[p(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(_),{key:0},{default:n(()=>[f("Loading...")]),_:1})):(r(),c(d(_),{key:1},{default:n(()=>[f("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.4ba4a2a1.js.map
