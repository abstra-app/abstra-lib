import{P as f}from"./PlayerNavbar.8e419fbd.js";import{d as g,eo as h,ea as i,e as y,f as b,r as k,o as c,Y as v,u as n,c as w,S as L,a as C,b as I,a0 as N}from"./index.d0f12294.js";import{u as V}from"./workspaceStore.e47060bf.js";import"./metadata.bc77f4b9.js";import"./PhBug.vue.33662d9e.js";import"./PhCheckCircle.vue.e567d5b0.js";import"./PhKanban.vue.fc0591cb.js";import"./PhWebhooksLogo.vue.15a28437.js";import"./LoadingOutlined.bcfc8c20.js";import"./PhSignOut.vue.6dacf893.js";import"./index.3e715bc1.js";import"./Avatar.f6415f7c.js";import"./url.121c9984.js";import"./colorHelpers.b079bb04.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="72412e87-809a-4d31-8aed-3bb1352f7239",o._sentryDebugIdIdentifier="sentry-dbid-72412e87-809a-4d31-8aed-3bb1352f7239")}catch{}})();const x={class:"main-container"},B={class:"content"},D=g({__name:"Main",setup(o){const e=h(),t=V(),d=i().path,a=y(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=()=>{e.push({name:"playerLogin"})},_=b(()=>!!i().meta.hideLogin);return(r,s)=>{const m=k("RouterView");return c(),v("div",x,[n(t).state.workspace?(c(),w(f,{key:0,"current-path":n(d),"hide-login":_.value,"runner-data":n(t).state.workspace,loading:a.value,onNavigate:u,onLoginClick:l,onLogoutClick:p},null,8,["current-path","hide-login","runner-data","loading"])):L("",!0),C("section",B,[I(m)])])}}});const H=N(D,[["__scopeId","data-v-f095bece"]]);export{H as default};
//# sourceMappingURL=Main.7dbcdec0.js.map
