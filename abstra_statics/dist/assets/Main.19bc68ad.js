import{P as f}from"./PlayerNavbar.e5278ad1.js";import{d as g,eo as h,ea as c,e as y,f as k,r as v,o as i,Y as b,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.273a97ee.js";import{u as V}from"./workspaceStore.5db32fee.js";import"./metadata.938b5ba3.js";import"./PhWebhooksLogo.vue.08fe732f.js";import"./LoadingOutlined.e22edcdc.js";import"./PhSignOut.vue.3d2731c7.js";import"./index.dfe75084.js";import"./Avatar.d71ccc48.js";import"./url.8f14ca0e.js";import"./colorHelpers.3901cb8b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="91473de7-22a7-4801-a1c3-e4f7728850ea",o._sentryDebugIdIdentifier="sentry-dbid-91473de7-22a7-4801-a1c3-e4f7728850ea")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=c().path,a=y(null),d=async({path:s,id:r})=>{a.value=r,await e.push({path:`/${s}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=k(()=>!!c().meta.hideLogin);return(s,r)=>{const m=v("RouterView");return i(),b("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(u),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.19bc68ad.js.map
