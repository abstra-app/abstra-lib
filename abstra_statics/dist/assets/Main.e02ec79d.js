import{P as f}from"./PlayerNavbar.09eecbee.js";import{d as g,eo as h,ea as c,e as b,f as y,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.58989c26.js";import{u as V}from"./workspaceStore.582086b5.js";import"./metadata.2865db5a.js";import"./PhWebhooksLogo.vue.50c26abb.js";import"./LoadingOutlined.430e2775.js";import"./PhSignOut.vue.a3fbf49a.js";import"./index.3c737cc5.js";import"./Avatar.5f776cfe.js";import"./url.48b24761.js";import"./colorHelpers.6d2eabe1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="6be2756e-c34c-4af9-bd2a-1295839b405f",o._sentryDebugIdIdentifier="sentry-dbid-6be2756e-c34c-4af9-bd2a-1295839b405f")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=c().path,a=b(null),d=async({path:s,id:r})=>{a.value=r,await e.push({path:`/${s}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!c().meta.hideLogin);return(s,r)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(u),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.e02ec79d.js.map
