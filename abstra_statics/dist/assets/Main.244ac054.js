import{P as f}from"./PlayerNavbar.a5641652.js";import{d as g,eo as h,ea as c,e as y,f as b,r as k,o as i,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.5a533bac.js";import{u as V}from"./workspaceStore.89d51228.js";import"./metadata.b314988e.js";import"./PhWebhooksLogo.vue.35fd3fc0.js";import"./LoadingOutlined.8cbb5e31.js";import"./PhSignOut.vue.284fa498.js";import"./index.9d564f53.js";import"./Avatar.39a072aa.js";import"./url.9b965c48.js";import"./colorHelpers.640b32bd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="23d23f45-c8d6-459e-891e-e8e897e9b971",o._sentryDebugIdIdentifier="sentry-dbid-23d23f45-c8d6-459e-891e-e8e897e9b971")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=c().path,n=y(null),u=async({path:s,id:r})=>{n.value=r,await e.push({path:`/${s}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=b(()=>!!c().meta.hideLogin);return(s,r)=>{const m=k("RouterView");return i(),v("div",x,[a(t).state.workspace?(i(),w(f,{key:0,"current-path":a(d),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.244ac054.js.map
