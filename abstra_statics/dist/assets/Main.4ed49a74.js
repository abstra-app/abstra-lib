import{P as f}from"./PlayerNavbar.0057fea2.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.b1cce20c.js";import{u as V}from"./workspaceStore.7a8db3e6.js";import"./metadata.45d83432.js";import"./PhRobot.vue.947242d1.js";import"./PhWebhooksLogo.vue.0eb04fce.js";import"./LoadingOutlined.80cc6c9b.js";import"./PhSignOut.vue.60c7bedb.js";import"./index.5287f15c.js";import"./Avatar.ea954f3d.js";import"./url.404c5188.js";import"./colorHelpers.eb4d13e2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="0cd0f044-b926-4c6a-8345-a3af648893c8",o._sentryDebugIdIdentifier="sentry-dbid-0cd0f044-b926-4c6a-8345-a3af648893c8")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=c().path,a=y(null),d=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(f,{key:0,"current-path":n(u),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.4ed49a74.js.map
