import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.d43924af.js";import{C as b}from"./ContentLayout.4fbf4d64.js";import{l as h}from"./fetch.9133f11d.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as f,a as C,u as d,d9 as p,aG as _,a0 as x}from"./index.c5058c37.js";import{u as I,E as T}from"./editor.b49abfde.js";import{C as D}from"./Card.ba7fe2e3.js";import"./Logo.fece7aaf.js";import"./workspaceStore.2be67a19.js";import"./url.289eb328.js";import"./colorHelpers.612ac470.js";import"./linters.2ff1f089.js";import"./asyncComputed.8437af24.js";import"./TabPane.a3d5e99d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="36ed0894-014f-41b8-a780-460feea88a07",e._sentryDebugIdIdentifier="sentry-dbid-36ed0894-014f-41b8-a780-460feea88a07")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[f(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[f(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.26f6e82b.js.map
