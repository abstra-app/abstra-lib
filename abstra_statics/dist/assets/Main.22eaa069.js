import{P as m}from"./PlayerNavbar.4a97bd19.js";import{u as f,i as g}from"./workspaceStore.70b622b5.js";import{d as b,eq as h,ed as i,e as y,f as v,r as k,X as w,u as n,c as L,R as I,a as N,b as C,o as c,$ as R}from"./vue-router.274d2c06.js";import"./metadata.cb35cd88.js";import"./PhBug.vue.24ca1200.js";import"./PhCheckCircle.vue.5514675d.js";import"./PhKanban.vue.5ce438df.js";import"./PhWebhooksLogo.vue.f914cc84.js";import"./LoadingOutlined.e55fa2a1.js";import"./PhSignOut.vue.c384e711.js";import"./index.ea738408.js";import"./Avatar.1f73d230.js";import"./url.2c737afd.js";import"./colorHelpers.ef44998e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4b2f9fbc-9710-4193-b642-bcb891a204e8",t._sentryDebugIdIdentifier="sentry-dbid-4b2f9fbc-9710-4193-b642-bcb891a204e8")}catch{}})();const V={class:"main-container"},x={class:"content"},B=b({__name:"Main",setup(t){const e=h(),o=f(),u=i().path,a=y(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=v(()=>!!i().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return c(),w("div",V,[n(o).state.workspace?(c(),L(m,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:p,onLoginClick:d},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-f6aef10c"]]);export{H as default};
//# sourceMappingURL=Main.22eaa069.js.map
