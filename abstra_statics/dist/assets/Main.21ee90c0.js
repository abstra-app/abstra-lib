import{P as m}from"./PlayerNavbar.3c3af33c.js";import{d as g,eH as b,ef as i,e as h,f as y,r as k,o as c,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.5b43fa5c.js";import{u as V}from"./workspaceStore.6279cd34.js";import"./metadata.6031fc75.js";import"./PhRobot.vue.45f83cde.js";import"./PhWebhooksLogo.vue.6fb47b84.js";import"./LoadingOutlined.c01ef500.js";import"./PhSignOut.vue.1a28d467.js";import"./index.3031c173.js";import"./Avatar.3079b66e.js";import"./url.014c36f4.js";import"./colorHelpers.65e4d662.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="db0f3e2b-de7e-4900-bfdd-7f760a3c599b",o._sentryDebugIdIdentifier="sentry-dbid-db0f3e2b-de7e-4900-bfdd-7f760a3c599b")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=b(),t=V(),d=i().path,n=h(null),u=async({path:r,id:s})=>{n.value=s,await e.push({path:`/${r}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!i().meta.hideLogin);return(r,s)=>{const f=k("RouterView");return c(),v("div",x,[a(t).state.workspace?(c(),w(m,{key:0,"current-path":a(d),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:u,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(f)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.21ee90c0.js.map
