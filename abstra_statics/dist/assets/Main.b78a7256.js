import{P as m}from"./PlayerNavbar.91eb42b7.js";import{u as f,i as g}from"./workspaceStore.721a53f6.js";import{d as h,eo as y,ea as i,e as v,f as b,r as k,o as c,X as w,u as n,c as L,R as I,a as N,b as C,$ as R}from"./vue-router.7caacf0a.js";import"./metadata.4b1a1151.js";import"./PhBug.vue.a16c9660.js";import"./PhCheckCircle.vue.f4a9a51b.js";import"./PhKanban.vue.cfa1a289.js";import"./PhWebhooksLogo.vue.d8d1d2b9.js";import"./LoadingOutlined.f9bef85b.js";import"./PhSignOut.vue.b4f6d577.js";import"./index.6bab67fd.js";import"./Avatar.5401c6df.js";import"./url.6080e1e1.js";import"./colorHelpers.cbd2e565.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e57373e8-f347-4425-8c78-89c20baa91f0",t._sentryDebugIdIdentifier="sentry-dbid-e57373e8-f347-4425-8c78-89c20baa91f0")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),u=i().path,a=v(null),p=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},d=()=>{e.push({name:"playerLogin"})},l=b(()=>!!i().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return c(),w("div",V,[n(o).state.workspace?(c(),L(m,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:p,onLoginClick:d},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-f6aef10c"]]);export{H as default};
//# sourceMappingURL=Main.b78a7256.js.map
