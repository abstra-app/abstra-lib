import{P as f}from"./PlayerNavbar.bedc4279.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.500f2857.js";import{u as V}from"./workspaceStore.25615b88.js";import"./metadata.5b28286a.js";import"./PhRobot.vue.85e9c5ed.js";import"./PhWebhooksLogo.vue.c002567b.js";import"./LoadingOutlined.2ea466a4.js";import"./PhSignOut.vue.de57ccde.js";import"./index.c7f2f30c.js";import"./Avatar.b26c5edd.js";import"./url.65e5c778.js";import"./colorHelpers.57e523fd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="4292ae73-18b1-4c7d-99d2-41bfce0fa53a",o._sentryDebugIdIdentifier="sentry-dbid-4292ae73-18b1-4c7d-99d2-41bfce0fa53a")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=y(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.6aad9bfe.js.map
