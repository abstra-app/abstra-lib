import{_ as b}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.07ac4c7f.js";import{C as y}from"./ContentLayout.2e2e0640.js";import{l as h}from"./fetch.157f8b8f.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as f,a as C,u as d,d5 as p,aF as _,$ as x}from"./vue-router.318741b1.js";import{u as I,E as T}from"./editor.f8a74c28.js";import{C as D}from"./Card.25fedf11.js";import"./Logo.09312e96.js";import"./workspaceStore.3af65523.js";import"./url.8effdb46.js";import"./colorHelpers.8652455c.js";import"./asyncComputed.60cc3624.js";import"./TabPane.ce3f915b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="db5b9a6c-8b0e-42b5-b76d-f9eeb656ee2d",e._sentryDebugIdIdentifier="sentry-dbid-db5b9a6c-8b0e-42b5-b76d-f9eeb656ee2d")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(y,null,{default:n(()=>[f(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[f(b,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const q=x(N,[["__scopeId","data-v-a984ec04"]]);export{q as default};
//# sourceMappingURL=Welcome.347671f4.js.map
