import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.8d0741f0.js";import{C as b}from"./ContentLayout.ada07fcb.js";import{l as h}from"./fetch.66791e50.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as i,d9 as _,aG as f,a0 as x}from"./index.2124e459.js";import{u as I,E as T}from"./editor.1f9d45f8.js";import{C as D}from"./Card.2208ee18.js";import"./Logo.9a25540a.js";import"./workspaceStore.1193ce80.js";import"./url.f69aa6a3.js";import"./colorHelpers.6986d5a5.js";import"./linters.304ff286.js";import"./asyncComputed.abd72052.js";import"./TabPane.ebfe6098.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8655ba04-ca49-4684-a4b8-65055ab4b707",e._sentryDebugIdIdentifier="sentry-dbid-8655ba04-ca49-4684-a4b8-65055ab4b707")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:d}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=d.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[p(i(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(i(_),{key:0},{default:n(()=>[f("Loading...")]),_:1})):(r(),c(i(_),{key:1},{default:n(()=>[f("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.2b6db966.js.map
