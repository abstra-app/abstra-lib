import{P as f}from"./PlayerNavbar.3f9e8d05.js";import{u as m,i as g}from"./workspaceStore.207a808b.js";import{d as h,eq as y,ed as c,e as b,f as v,r as k,X as w,u as n,c as L,R as I,a as N,b as C,o as i,$ as R}from"./vue-router.2e54b11a.js";import"./metadata.7d4800f0.js";import"./PhBug.vue.7ab48454.js";import"./PhCheckCircle.vue.7f7e4115.js";import"./PhKanban.vue.49fa3d31.js";import"./PhWebhooksLogo.vue.9b715da8.js";import"./LoadingOutlined.9689482d.js";import"./PhSignOut.vue.34568330.js";import"./index.ceea7f6b.js";import"./Avatar.d437303e.js";import"./url.4dbbe1b8.js";import"./colorHelpers.46dff2f3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e7c5a7b1-3dce-48af-bcfe-f4422a9c22be",t._sentryDebugIdIdentifier="sentry-dbid-e7c5a7b1-3dce-48af-bcfe-f4422a9c22be")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=m(),u=c().path,a=b(null),d=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=v(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return i(),w("div",V,[n(o).state.workspace?(i(),L(f,{key:0,"current-path":n(u),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:d,onLoginClick:p},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-f6aef10c"]]);export{H as default};
//# sourceMappingURL=Main.b7e3503b.js.map
