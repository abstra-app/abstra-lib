import{P as f}from"./PlayerNavbar.ff4f9967.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.49752f8d.js";import{u as V}from"./workspaceStore.b41aa4eb.js";import"./metadata.7dc469f6.js";import"./PhWebhooksLogo.vue.7e7d43cc.js";import"./LoadingOutlined.4f4945a1.js";import"./PhSignOut.vue.0f127e5c.js";import"./index.ff4bf8d7.js";import"./Avatar.a7b06716.js";import"./url.d64127c8.js";import"./colorHelpers.d13d6327.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="549439ed-fa01-46da-b203-9ce7a0249ba4",o._sentryDebugIdIdentifier="sentry-dbid-549439ed-fa01-46da-b203-9ce7a0249ba4")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=y(null),u=async({path:s,id:r})=>{a.value=r,await e.push({path:`/${s}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(s,r)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.7bf4d7a0.js.map
