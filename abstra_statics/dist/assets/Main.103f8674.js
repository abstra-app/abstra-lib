import{P as m}from"./PlayerNavbar.0874e58b.js";import{d as g,eA as h,ea as i,e as y,f as k,r as v,o as c,Y as b,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.5e2c2a8a.js";import{u as V}from"./workspaceStore.fce60b26.js";import"./metadata.a17c06d5.js";import"./PhRobot.vue.d907514a.js";import"./PhWebhooksLogo.vue.91d8001f.js";import"./LoadingOutlined.5faf96a0.js";import"./PhSignOut.vue.37e847bf.js";import"./index.8ea4b672.js";import"./Avatar.4fc89934.js";import"./url.44371966.js";import"./colorHelpers.535e2fed.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="7c58a0f3-58f8-4a06-86ae-6048f1e37f25",o._sentryDebugIdIdentifier="sentry-dbid-7c58a0f3-58f8-4a06-86ae-6048f1e37f25")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),u=i().path,a=y(null),d=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},l=()=>{e.push({name:"playerLogin"})},p=()=>{e.push({name:"playerLogin"})},_=k(()=>!!i().meta.hideLogin);return(r,s)=>{const f=v("RouterView");return c(),b("div",x,[n(t).state.workspace?(c(),w(m,{key:0,"current-path":n(u),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:d,onLoginClick:p,onLogoutClick:l},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(f)])])}}});const F=N(D,[["__scopeId","data-v-f095bece"]]);export{F as default};
//# sourceMappingURL=Main.103f8674.js.map
