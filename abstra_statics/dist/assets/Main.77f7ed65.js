import{P as f}from"./PlayerNavbar.efe20908.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.c4f9f025.js";import{u as V}from"./workspaceStore.66fb9534.js";import"./metadata.b87c17bd.js";import"./PhRobot.vue.b193469b.js";import"./PhWebhooksLogo.vue.81b8f671.js";import"./LoadingOutlined.7c61f089.js";import"./PhSignOut.vue.51e0aaec.js";import"./index.fc2acfdf.js";import"./Avatar.9bb6d17c.js";import"./url.b319ee4d.js";import"./colorHelpers.4725e4d8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="3a5babcf-7595-4c5e-a2fd-d0978ece7090",o._sentryDebugIdIdentifier="sentry-dbid-3a5babcf-7595-4c5e-a2fd-d0978ece7090")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=y(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.77f7ed65.js.map
