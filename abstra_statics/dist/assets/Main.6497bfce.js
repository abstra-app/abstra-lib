import{P as m}from"./PlayerNavbar.a6f15f3d.js";import{u as f,i as g}from"./workspaceStore.cfb8e97a.js";import{d as h,eo as y,ea as i,e as v,f as b,r as k,o as c,X as w,u as n,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.3d174294.js";import"./metadata.772f389d.js";import"./PhBug.vue.a6410da1.js";import"./PhCheckCircle.vue.87ff411c.js";import"./PhKanban.vue.3aea2274.js";import"./PhWebhooksLogo.vue.4a09a276.js";import"./LoadingOutlined.53ad20c9.js";import"./PhSignOut.vue.e2803390.js";import"./index.29863c17.js";import"./Avatar.afc24e0b.js";import"./url.1baea9af.js";import"./colorHelpers.a6e2199a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2a7eb457-07fd-4963-9043-ea19813eb9a7",t._sentryDebugIdIdentifier="sentry-dbid-2a7eb457-07fd-4963-9043-ea19813eb9a7")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),u=i().path,a=v(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=b(()=>!!i().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return c(),w("div",V,[n(o).state.workspace?(c(),L(m,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:p,onLoginClick:d},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-09fccc95"]]);export{H as default};
//# sourceMappingURL=Main.6497bfce.js.map
