import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.6878cdce.js";import{C as b}from"./ContentLayout.78694c15.js";import{l as h}from"./fetch.14dcca06.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as u,a as C,u as d,d9 as p,aG as _,a0 as x}from"./index.8a3dbfec.js";import{u as I,E as T}from"./editor.ce4f3e79.js";import{C as D}from"./Card.a92efb22.js";import"./Logo.8149f387.js";import"./workspaceStore.afc5352b.js";import"./url.bcae2f8e.js";import"./colorHelpers.d77e373d.js";import"./linters.9ac9fe2b.js";import"./asyncComputed.272f4060.js";import"./TabPane.e7e62dfc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="04f1d9c1-4fb6-4fe4-9843-5bb8188285ff",e._sentryDebugIdIdentifier="sentry-dbid-04f1d9c1-4fb6-4fe4-9843-5bb8188285ff")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),f=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return f();const{ok:m}=await s.json();if(!m)return f();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[u(d(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[u(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(d(p),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(d(p),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.a88e1716.js.map
