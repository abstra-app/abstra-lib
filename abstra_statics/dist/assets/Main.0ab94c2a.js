import{P as f}from"./PlayerNavbar.383ddd94.js";import{d as g,eo as h,ea as c,e as b,f as y,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.ffa23369.js";import{u as V}from"./workspaceStore.a7ed46df.js";import"./metadata.2b17de8c.js";import"./PhWebhooksLogo.vue.04e8cd4e.js";import"./LoadingOutlined.246c0cc5.js";import"./PhSignOut.vue.0a0a4d4d.js";import"./index.5879ebbd.js";import"./Avatar.c3b19cd7.js";import"./url.ffbbef3d.js";import"./colorHelpers.1fe3924f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="f8b7b67b-a347-4e6d-ad57-1a0f86c91944",o._sentryDebugIdIdentifier="sentry-dbid-f8b7b67b-a347-4e6d-ad57-1a0f86c91944")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=b(null),u=async({path:s,id:r})=>{a.value=r,await e.push({path:`/${s}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!c().meta.hideLogin);return(s,r)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.0ab94c2a.js.map
