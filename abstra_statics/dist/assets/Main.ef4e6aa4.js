import{P as m}from"./PlayerNavbar.f1d9205e.js";import{u as f,i as g}from"./workspaceStore.f24e9a7b.js";import{d as h,eo as y,ea as c,e as v,f as k,r as w,o as i,X as b,u as n,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.d93c72db.js";import"./metadata.7b1155be.js";import"./PhBug.vue.2cdd0af8.js";import"./PhCheckCircle.vue.68babecd.js";import"./PhKanban.vue.04c2aadb.js";import"./PhWebhooksLogo.vue.ea2526db.js";import"./LoadingOutlined.e222117b.js";import"./PhSignOut.vue.33fd1944.js";import"./index.5dabdfbc.js";import"./Avatar.0cc5fd49.js";import"./url.8e8c3899.js";import"./colorHelpers.24f5763b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="80af54c1-114e-4967-9ea1-00d6203c8c8f",t._sentryDebugIdIdentifier="sentry-dbid-80af54c1-114e-4967-9ea1-00d6203c8c8f")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),u=c().path,a=v(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=k(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=w("RouterView");return i(),b("div",V,[n(o).state.workspace?(i(),L(m,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:p,onLoginClick:d},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-09fccc95"]]);export{H as default};
//# sourceMappingURL=Main.ef4e6aa4.js.map
