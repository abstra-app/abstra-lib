import{P as m}from"./PlayerNavbar.ff254367.js";import{u as f,i as g}from"./workspaceStore.841b8d05.js";import{d as h,eq as y,ed as i,e as b,f as v,r as k,X as w,u as n,c as L,R as I,a as N,b as C,o as c,$ as R}from"./vue-router.8ff1f30b.js";import"./metadata.feaf0944.js";import"./PhBug.vue.ef6c1cdc.js";import"./PhCheckCircle.vue.48f66ba0.js";import"./PhKanban.vue.c8773411.js";import"./PhWebhooksLogo.vue.7478fc62.js";import"./LoadingOutlined.2704cd54.js";import"./PhSignOut.vue.4098ad31.js";import"./index.13a3d998.js";import"./Avatar.cd39528b.js";import"./url.aa0b3d22.js";import"./colorHelpers.900ac9ee.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="14ed33e2-af2b-40b5-9774-012d2e7ba7cf",t._sentryDebugIdIdentifier="sentry-dbid-14ed33e2-af2b-40b5-9774-012d2e7ba7cf")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),d=i().path,a=b(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=v(()=>!!i().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return c(),w("div",V,[n(o).state.workspace?(c(),L(m,{key:0,"current-path":n(d),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-f6aef10c"]]);export{H as default};
//# sourceMappingURL=Main.abf38bac.js.map
