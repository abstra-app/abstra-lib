import{P as m}from"./PlayerNavbar.645f2cbd.js";import{d as g,eo as h,ea as c,e as y,f as k,r as v,o as i,Y as b,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.d87350ae.js";import{u as V}from"./workspaceStore.8a8b241f.js";import"./metadata.9a0b8712.js";import"./PhWebhooksLogo.vue.8c223ae6.js";import"./LoadingOutlined.b0114820.js";import"./PhSignOut.vue.98e160ae.js";import"./index.460392d8.js";import"./Avatar.f0e1a0d5.js";import"./url.ce05fabc.js";import"./colorHelpers.d38e82ca.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="f22d79aa-09fa-48c2-a3e8-392ed6edf814",o._sentryDebugIdIdentifier="sentry-dbid-f22d79aa-09fa-48c2-a3e8-392ed6edf814")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=y(null),u=async({path:s,id:r})=>{a.value=r,await e.push({path:`/${s}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=k(()=>!!c().meta.hideLogin);return(s,r)=>{const f=v("RouterView");return i(),b("div",x,[n(t).state.workspace?(i(),w(m,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(f)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.b898e3b8.js.map
