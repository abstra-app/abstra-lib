import{P as m}from"./PlayerNavbar.21f41878.js";import{u as f,i as g}from"./workspaceStore.6cf13822.js";import{d as h,eo as b,ea as c,e as y,f as v,r as k,o as i,X as w,u as a,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.cae69bd8.js";import"./metadata.11803be6.js";import"./PhBug.vue.642bb315.js";import"./PhCheckCircle.vue.80c5d693.js";import"./PhKanban.vue.7fb572fd.js";import"./PhWebhooksLogo.vue.4bbecd82.js";import"./LoadingOutlined.95432789.js";import"./PhSignOut.vue.233cd694.js";import"./index.9798bac5.js";import"./Avatar.17286514.js";import"./url.172d6188.js";import"./colorHelpers.b2cd7293.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="bf26c8cc-6bdc-4c7e-b815-9b905c712d10",t._sentryDebugIdIdentifier="sentry-dbid-bf26c8cc-6bdc-4c7e-b815-9b905c712d10")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=b(),o=f(),u=c().path,n=y(null),d=async({path:r,id:s})=>{n.value=s,await e.push({path:`/${r}`}),n.value=null},p=()=>{e.push({name:"playerLogin"})},l=v(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return i(),w("div",V,[a(o).state.workspace?(i(),L(m,{key:0,"current-path":a(u),"hide-login":l.value,"runner-data":a(o).state.workspace,loading:n.value,onNavigate:d,onLoginClick:p},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-09fccc95"]]);export{H as default};
//# sourceMappingURL=Main.565bd70b.js.map
