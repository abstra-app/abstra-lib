import{P as m}from"./PlayerNavbar.7677b863.js";import{d as g,eo as b,ea as i,e as h,f as y,r as k,o as c,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.f9c74c49.js";import{u as V}from"./workspaceStore.485c2697.js";import"./metadata.ed9c62a5.js";import"./PhWebhooksLogo.vue.bdedc515.js";import"./LoadingOutlined.e03e73d1.js";import"./PhSignOut.vue.a5c882e1.js";import"./index.8c899bcd.js";import"./Avatar.ea149491.js";import"./url.5498c33d.js";import"./colorHelpers.5b704b9b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="850925f9-f732-49bb-b465-b78e42b997fe",o._sentryDebugIdIdentifier="sentry-dbid-850925f9-f732-49bb-b465-b78e42b997fe")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=b(),t=V(),u=i().path,n=h(null),d=async({path:s,id:r})=>{n.value=r,await e.push({path:`/${s}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!i().meta.hideLogin);return(s,r)=>{const f=k("RouterView");return c(),v("div",x,[a(t).state.workspace?(c(),w(m,{key:0,"current-path":a(u),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(f)])])}}});const A=N(D,[["__scopeId","data-v-f095bece"]]);export{A as default};
//# sourceMappingURL=Main.0f848880.js.map
