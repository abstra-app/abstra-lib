import{P as f}from"./PlayerNavbar.66546f09.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.de630575.js";import{u as V}from"./workspaceStore.2c5bd77e.js";import"./metadata.d53bd6fe.js";import"./PhWebhooksLogo.vue.7a4272d5.js";import"./LoadingOutlined.66ecf645.js";import"./PhSignOut.vue.07fba41f.js";import"./index.e53f1303.js";import"./Avatar.4a61f3cb.js";import"./url.703596b7.js";import"./colorHelpers.bcbc7437.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="f46d2885-e776-4b08-8e2e-073c38911610",o._sentryDebugIdIdentifier="sentry-dbid-f46d2885-e776-4b08-8e2e-073c38911610")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=c().path,n=y(null),d=async({path:s,id:r})=>{n.value=r,await e.push({path:`/${s}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(s,r)=>{const m=k("RouterView");return i(),v("div",x,[a(t).state.workspace?(i(),w(f,{key:0,"current-path":a(u),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.9869fdb8.js.map
