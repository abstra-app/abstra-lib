import{P as m}from"./PlayerNavbar.0bdb1677.js";import{u as f,i as g}from"./workspaceStore.5977d9e8.js";import{d as h,eo as y,ea as c,e as v,f as b,r as k,o as i,X as w,u as n,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.324eaed2.js";import"./metadata.4c5c5434.js";import"./PhBug.vue.ac4a72e0.js";import"./PhCheckCircle.vue.b905d38f.js";import"./PhKanban.vue.e9ec854d.js";import"./PhWebhooksLogo.vue.96003388.js";import"./LoadingOutlined.09a06334.js";import"./PhSignOut.vue.d965d159.js";import"./index.ea51f4a9.js";import"./Avatar.4c029798.js";import"./url.1a1c4e74.js";import"./colorHelpers.78fae216.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c6be9f58-167c-4f94-8891-c47070228c5a",t._sentryDebugIdIdentifier="sentry-dbid-c6be9f58-167c-4f94-8891-c47070228c5a")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),u=c().path,a=v(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=b(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return i(),w("div",V,[n(o).state.workspace?(i(),L(m,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:p,onLoginClick:d},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-09fccc95"]]);export{H as default};
//# sourceMappingURL=Main.c78e8022.js.map
