import{P as m}from"./PlayerNavbar.23f403a4.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.a701e366.js";import{u as V}from"./workspaceStore.5e67de65.js";import"./metadata.426f3118.js";import"./PhWebhooksLogo.vue.dad2c655.js";import"./LoadingOutlined.6522a139.js";import"./PhSignOut.vue.a5a46b59.js";import"./index.6a50e657.js";import"./Avatar.56ac0159.js";import"./url.f8ee3ffa.js";import"./colorHelpers.9b23d237.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="f51205ff-1d52-4ed1-b61e-5cc1e3374685",o._sentryDebugIdIdentifier="sentry-dbid-f51205ff-1d52-4ed1-b61e-5cc1e3374685")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,n=y(null),u=async({path:s,id:r})=>{n.value=r,await e.push({path:`/${s}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(s,r)=>{const f=k("RouterView");return i(),v("div",x,[a(t).state.workspace?(i(),w(m,{key:0,"current-path":a(d),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(f)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.a5b64c36.js.map
