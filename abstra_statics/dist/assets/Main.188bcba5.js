import{P as f}from"./PlayerNavbar.d100b678.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.e04a0b6a.js";import{u as V}from"./workspaceStore.2c22fd37.js";import"./metadata.2456ac7f.js";import"./PhWebhooksLogo.vue.52820ec1.js";import"./LoadingOutlined.b11a77ea.js";import"./PhSignOut.vue.87a8154e.js";import"./index.e4b92f3c.js";import"./Avatar.805073b1.js";import"./url.7f5e7d75.js";import"./colorHelpers.62452735.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="aadc6c86-a716-4134-8a44-6b405b4d0f17",o._sentryDebugIdIdentifier="sentry-dbid-aadc6c86-a716-4134-8a44-6b405b4d0f17")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=y(null),u=async({path:s,id:r})=>{a.value=r,await e.push({path:`/${s}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(s,r)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.188bcba5.js.map
