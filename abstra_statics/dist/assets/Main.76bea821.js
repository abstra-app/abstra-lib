import{P as f}from"./PlayerNavbar.adbf390d.js";import{d as g,eo as b,ea as c,e as h,f as y,r as k,o as i,Y as v,u as a,c as w,S as L,a as C,b as I,a0 as N}from"./index.9ced0c12.js";import{u as V}from"./workspaceStore.113b2833.js";import"./metadata.d50b585f.js";import"./PhRobot.vue.69ec755e.js";import"./PhWebhooksLogo.vue.c46954dd.js";import"./LoadingOutlined.3fb88756.js";import"./PhSignOut.vue.7b45fa2c.js";import"./index.03fde607.js";import"./Avatar.fd25e1a5.js";import"./url.80ca4b9a.js";import"./colorHelpers.30247ef6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="d06ba553-cc83-4774-97bc-b8118e7b422c",o._sentryDebugIdIdentifier="sentry-dbid-d06ba553-cc83-4774-97bc-b8118e7b422c")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=b(),t=V(),u=c().path,n=h(null),d=async({path:r,id:s})=>{n.value=s,await e.push({path:`/${r}`}),n.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=y(()=>!!c().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return i(),v("div",x,[a(t).state.workspace?(i(),w(f,{key:0,"current-path":a(u),"hide-login":_.value,"runner-data":a(t).state.workspace,loading:n.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.76bea821.js.map
