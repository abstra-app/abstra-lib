import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.392fd850.js";import{C as b}from"./ContentLayout.c205942c.js";import{l as h}from"./fetch.bff8e5df.js";import{d as w,eo as g,ea as k,e as v,o as r,c as d,w as n,b as p,a as C,u as c,d9 as _,aG as f,a0 as x}from"./index.5ea97cf1.js";import{u as I,E as T}from"./editor.047f3fba.js";import{C as D}from"./Card.feb869e9.js";import"./Logo.309ea5a3.js";import"./workspaceStore.37fc691c.js";import"./url.68c2ef84.js";import"./colorHelpers.9bfe96cd.js";import"./linters.98c440df.js";import"./asyncComputed.d0c00c96.js";import"./TabPane.dfa81262.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b869b9b7-68dd-4801-83ad-a64ab072d7e7",e._sentryDebugIdIdentifier="sentry-dbid-b869b9b7-68dd-4801-83ad-a64ab072d7e7")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),d(b,null,{default:n(()=>[p(c(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),d(c(_),{key:0},{default:n(()=>[f("Loading...")]),_:1})):(r(),d(c(_),{key:1},{default:n(()=>[f("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.8180ba56.js.map
