import{P as f}from"./PlayerNavbar.a8e1c34b.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.2145b499.js";import{u as V}from"./workspaceStore.4e6449ee.js";import"./metadata.234e18c9.js";import"./PhRobot.vue.55d94084.js";import"./PhWebhooksLogo.vue.05511ca2.js";import"./LoadingOutlined.fccfb54a.js";import"./PhSignOut.vue.51a7c39c.js";import"./index.73264927.js";import"./Avatar.8464ecfd.js";import"./url.336652e3.js";import"./colorHelpers.a7874933.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="2c4c2213-d861-438a-90bc-302967354b19",o._sentryDebugIdIdentifier="sentry-dbid-2c4c2213-d861-438a-90bc-302967354b19")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=c().path,n=y(null),d=async({path:r,id:s})=>{n.value=s,await e.push({path:`/${r}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[a(t).state.workspace?(i(),w(f,{key:0,"current-path":a(u),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.5c52bcfb.js.map
