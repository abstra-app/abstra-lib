import{_ as b}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.95adbf15.js";import{C as y}from"./ContentLayout.d08fae26.js";import{l as h}from"./fetch.223a1647.js";import{d as w,eF as g,ec as k,e as v,o as r,c as d,w as n,b as p,a as C,u as c,d9 as f,aG as _,a0 as x}from"./index.97914b50.js";import{u as I,E as T}from"./editor.e84f7036.js";import{C as D}from"./Card.8bdef8a0.js";import"./Logo.6a7a7f34.js";import"./workspaceStore.6144f2aa.js";import"./url.9121ac6e.js";import"./colorHelpers.7fae6e3b.js";import"./linters.188b2aea.js";import"./asyncComputed.d84da1aa.js";import"./TabPane.0573791a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="74d2e1b7-d27a-40a2-8270-bb5bfde04be3",e._sentryDebugIdIdentifier="sentry-dbid-74d2e1b7-d27a-40a2-8270-bb5bfde04be3")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:i}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=i.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),d(y,null,{default:n(()=>[p(c(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(b,{style:{"margin-bottom":"10px"}}),l.value?(r(),d(c(f),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),d(c(f),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.789508ca.js.map
