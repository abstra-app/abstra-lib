import{P as f}from"./PlayerNavbar.61345cdf.js";import{d as g,eo as h,ea as c,e as b,f as y,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.9c81dd20.js";import{u as V}from"./workspaceStore.7f55f047.js";import"./metadata.673d69dd.js";import"./PhRobot.vue.1e8b75a2.js";import"./PhWebhooksLogo.vue.23677cae.js";import"./LoadingOutlined.0257aba8.js";import"./PhSignOut.vue.6a1fd0dc.js";import"./index.03734639.js";import"./Avatar.7f38c8e9.js";import"./url.308976bd.js";import"./colorHelpers.feb8987b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="26120a73-b1fc-45b9-b56d-c49c40d10a26",o._sentryDebugIdIdentifier="sentry-dbid-26120a73-b1fc-45b9-b56d-c49c40d10a26")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,a=b(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.2f53438f.js.map
