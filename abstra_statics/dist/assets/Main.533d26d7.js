import{P as f}from"./PlayerNavbar.972c94a3.js";import{d as g,eo as h,ea as i,e as y,f as b,r as k,o as c,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.4b0f7fd1.js";import{u as V}from"./workspaceStore.61a51d51.js";import"./metadata.546e1919.js";import"./PhBug.vue.0d847423.js";import"./PhCheckCircle.vue.5870f868.js";import"./PhKanban.vue.c16c635b.js";import"./PhWebhooksLogo.vue.d243ca9d.js";import"./LoadingOutlined.877053a0.js";import"./PhSignOut.vue.8d5017f2.js";import"./index.f06ef9f1.js";import"./Avatar.b4bb5f21.js";import"./url.95376bbe.js";import"./colorHelpers.3dbabab9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="74bf793d-29a3-4236-84ae-ef63015826dd",o._sentryDebugIdIdentifier="sentry-dbid-74bf793d-29a3-4236-84ae-ef63015826dd")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=i().path,a=y(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=()=>{e.push({name:"playerLogin"})},_=b(()=>!!i().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return c(),v("div",x,[n(t).state.workspace?(c(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:l,onLogoutClick:p},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const H=N(D,[["__scopeId","data-v-f095bece"]]);export{H as default};
//# sourceMappingURL=Main.533d26d7.js.map
