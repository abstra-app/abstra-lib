import{P as m}from"./PlayerNavbar.f4497920.js";import{d as g,eo as h,ea as c,e as b,f as y,r as k,o as i,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.a2b3ce50.js";import{u as V}from"./workspaceStore.6e0ac589.js";import"./metadata.1f0943f9.js";import"./PhBug.vue.1bd2995b.js";import"./PhCheckCircle.vue.4076f00d.js";import"./PhKanban.vue.6068e776.js";import"./PhWebhooksLogo.vue.fc580975.js";import"./LoadingOutlined.68bfcef8.js";import"./PhSignOut.vue.d4f1ba7b.js";import"./index.2572380b.js";import"./Avatar.a7221dea.js";import"./url.a6d37e80.js";import"./colorHelpers.1262a475.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="b10f97fc-c923-4ef4-8afa-0476b7fcb650",o._sentryDebugIdIdentifier="sentry-dbid-b10f97fc-c923-4ef4-8afa-0476b7fcb650")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=c().path,a=b(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=()=>{e.push({name:"playerLogin"})},f=y(()=>!!c().meta.hideLogin);return(r,s)=>{const _=k("RouterView");return i(),v("div",x,[n(t).state.workspace?(i(),w(m,{key:0,"current-path":n(u),"hide-login":f.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:p,onLoginClick:l,onLogoutClick:d},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(_)])])}}});const H=N(D,[["__scopeId","data-v-f095bece"]]);export{H as default};
//# sourceMappingURL=Main.8366f3f2.js.map
