import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.e7cb539f.js";import{C as b}from"./ContentLayout.a13479af.js";import{l as h}from"./fetch.3a23fbc1.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as d,d9 as f,aG as _,a0 as x}from"./index.3be38143.js";import{u as I,E as T}from"./editor.fa541252.js";import{C as D}from"./Card.496117e1.js";import"./Logo.c4930986.js";import"./workspaceStore.6ab53cd8.js";import"./url.2195d581.js";import"./colorHelpers.46b5948e.js";import"./linters.f8027f3b.js";import"./asyncComputed.b805ba3a.js";import"./TabPane.1bbb1f2a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ea38c916-4aad-45d5-8c36-ef38d7be40bc",e._sentryDebugIdIdentifier="sentry-dbid-ea38c916-4aad-45d5-8c36-ef38d7be40bc")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[p(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(f),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(f),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.3d007556.js.map
