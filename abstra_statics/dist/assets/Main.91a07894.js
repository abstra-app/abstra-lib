import{P as m}from"./PlayerNavbar.4eb02b03.js";import{u as f,i as g}from"./workspaceStore.dd5640ca.js";import{d as h,eo as y,ea as c,e as v,f as b,r as k,o as i,X as w,u as n,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.046672be.js";import"./metadata.e0895f09.js";import"./PhBug.vue.4ead5d84.js";import"./PhCheckCircle.vue.1ef95d1d.js";import"./PhKanban.vue.d678244b.js";import"./PhWebhooksLogo.vue.89cc7b36.js";import"./LoadingOutlined.cd52fa2b.js";import"./PhSignOut.vue.022ad9be.js";import"./index.e0d2d907.js";import"./Avatar.57b23935.js";import"./url.d0dec45a.js";import"./colorHelpers.42f86e47.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1431224f-42d6-4617-8744-4539aabfc369",t._sentryDebugIdIdentifier="sentry-dbid-1431224f-42d6-4617-8744-4539aabfc369")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),u=c().path,a=v(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=b(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return i(),w("div",V,[n(o).state.workspace?(i(),L(m,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:p,onLoginClick:d},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-09fccc95"]]);export{H as default};
//# sourceMappingURL=Main.91a07894.js.map
