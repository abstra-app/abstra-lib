import{P as f}from"./PlayerNavbar.cfd0283d.js";import{d as g,eo as b,ea as c,e as h,f as y,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.aadf004c.js";import{u as V}from"./workspaceStore.2562ebf3.js";import"./metadata.070f1b33.js";import"./PhRobot.vue.7f3e8ea3.js";import"./PhWebhooksLogo.vue.904da314.js";import"./LoadingOutlined.209b6322.js";import"./PhSignOut.vue.643b9b74.js";import"./index.41e8c148.js";import"./Avatar.f010bf78.js";import"./url.0f63a8d1.js";import"./colorHelpers.8c0442a7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="11c4204b-fcd4-41fa-8363-0e904b2bbda2",o._sentryDebugIdIdentifier="sentry-dbid-11c4204b-fcd4-41fa-8363-0e904b2bbda2")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=b(),t=V(),d=c().path,a=h(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.f6840e18.js.map
