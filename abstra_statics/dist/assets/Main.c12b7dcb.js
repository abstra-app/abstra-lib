import{P as f}from"./PlayerNavbar.88c964c5.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.b89dc45f.js";import{u as V}from"./workspaceStore.5cb8f179.js";import"./metadata.7bf025a1.js";import"./PhRobot.vue.d19255ad.js";import"./PhWebhooksLogo.vue.073e87f4.js";import"./LoadingOutlined.874bd522.js";import"./PhSignOut.vue.4d3e6668.js";import"./index.70b09d30.js";import"./Avatar.ad537add.js";import"./url.8768f4d3.js";import"./colorHelpers.fed26893.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="8488ef22-8a0c-47eb-bd3a-a91a9dc2790c",o._sentryDebugIdIdentifier="sentry-dbid-8488ef22-8a0c-47eb-bd3a-a91a9dc2790c")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=y(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.c12b7dcb.js.map
