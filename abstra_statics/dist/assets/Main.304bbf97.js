import{P as m}from"./PlayerNavbar.641ba123.js";import{u as f,i as g}from"./workspaceStore.1847e3fb.js";import{d as h,eo as y,ea as c,e as v,f as k,r as w,o as i,X as b,u as n,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.7d22a765.js";import"./metadata.9b52bd89.js";import"./PhBug.vue.fd83bab4.js";import"./PhCheckCircle.vue.912aee3f.js";import"./PhKanban.vue.76078103.js";import"./PhWebhooksLogo.vue.4693bfce.js";import"./LoadingOutlined.0a0dc718.js";import"./PhSignOut.vue.618d1f5c.js";import"./index.4c73e857.js";import"./Avatar.34816737.js";import"./url.396c837f.js";import"./colorHelpers.e5ec8c13.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7d77841e-3a9c-474d-a496-56a59f707ed6",t._sentryDebugIdIdentifier="sentry-dbid-7d77841e-3a9c-474d-a496-56a59f707ed6")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),d=c().path,a=v(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=k(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=w("RouterView");return i(),b("div",V,[n(o).state.workspace?(i(),L(m,{key:0,"current-path":n(d),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-09fccc95"]]);export{H as default};
//# sourceMappingURL=Main.304bbf97.js.map
