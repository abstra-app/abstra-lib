import{_ as y}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.f76ef4ec.js";import{C as b}from"./ContentLayout.74552c6f.js";import{l as h}from"./fetch.89079ec3.js";import{d as w,eo as g,ea as k,e as v,o as r,c,w as n,b as p,a as C,u as i,d9 as f,aG as _,a0 as x}from"./index.75fa66b7.js";import{u as I,E as T}from"./editor.c7792685.js";import{C as D}from"./Card.8731ab74.js";import"./Logo.13444fcd.js";import"./workspaceStore.f83d33b7.js";import"./url.23bfa180.js";import"./colorHelpers.a2855692.js";import"./linters.9c608adc.js";import"./asyncComputed.87f980fa.js";import"./TabPane.4d80ad35.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="930ee16b-4fe6-44b1-9a86-2c3511661313",e._sentryDebugIdIdentifier="sentry-dbid-930ee16b-4fe6-44b1-9a86-2c3511661313")}catch{}})();const L={class:"card-content"},N=w({__name:"Welcome",setup(e){const o=g(),{query:d}=k(),a=I();a.loadLogin();const l=v(!0),u=async()=>{l.value=!1,setInterval(()=>{var t;return window.location.replace(((t=a==null?void 0:a.links)==null?void 0:t.project)||T.consoleUrl)},5e3)};return(async()=>{const t=d.token,s=await h("/_editor/web-editor/welcome",{method:"POST",body:JSON.stringify({token:t}),headers:{"Content-Type":"application/json"}});if(!s.ok)return u();const{ok:m}=await s.json();if(!m)return u();await o.push({name:"workspace"})})(),(t,s)=>(r(),c(b,null,{default:n(()=>[p(i(D),{bordered:!1,class:"card"},{default:n(()=>[C("div",L,[p(y,{style:{"margin-bottom":"10px"}}),l.value?(r(),c(i(f),{key:0},{default:n(()=>[_("Loading...")]),_:1})):(r(),c(i(f),{key:1},{default:n(()=>[_("Authentication failed. You are been redirected...")]),_:1}))])]),_:1})]),_:1}))}});const J=x(N,[["__scopeId","data-v-a984ec04"]]);export{J as default};
//# sourceMappingURL=Welcome.7fe00f5e.js.map
