import{P as f}from"./PlayerNavbar.cead1b7c.js";import{d as g,eo as h,ea as i,e as y,f as k,r as v,o as c,Y as b,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.daa73337.js";import{u as V}from"./workspaceStore.7064e772.js";import"./metadata.c0707600.js";import"./PhRobot.vue.f20cb4c5.js";import"./PhWebhooksLogo.vue.80ff8de1.js";import"./LoadingOutlined.a1149163.js";import"./PhSignOut.vue.61529abc.js";import"./index.1d6a54e2.js";import"./Avatar.a7ca984b.js";import"./url.64947404.js";import"./colorHelpers.1985d759.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="74627680-9c98-49e0-8051-84ee4e5fa70e",o._sentryDebugIdIdentifier="sentry-dbid-74627680-9c98-49e0-8051-84ee4e5fa70e")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=i().path,n=y(null),d=async({path:r,id:s})=>{n.value=s,await e.push({path:`/${r}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=k(()=>!!i().meta.hideLogin);return(r,s)=>{const m=v("RouterView");return c(),b("div",x,[a(t).state.workspace?(c(),w(f,{key:0,"current-path":a(u),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.641eea9b.js.map
