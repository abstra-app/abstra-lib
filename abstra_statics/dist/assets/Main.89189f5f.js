import{P as m}from"./PlayerNavbar.16eb6fdb.js";import{u as f,i as g}from"./workspaceStore.5a174a51.js";import{d as h,eq as y,ed as i,e as v,f as b,r as k,X as w,u as n,c as L,R as I,a as N,b as C,o as c,$ as R}from"./vue-router.fd306bcf.js";import"./metadata.b4de0c7a.js";import"./PhBug.vue.b848c348.js";import"./PhCheckCircle.vue.90ff7fd7.js";import"./PhKanban.vue.5102282e.js";import"./PhWebhooksLogo.vue.120fbf27.js";import"./LoadingOutlined.8eaf0403.js";import"./PhSignOut.vue.425368e1.js";import"./index.b414b5fc.js";import"./Avatar.a6606fa4.js";import"./url.d1d1d40b.js";import"./colorHelpers.e820faff.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3f2d6c53-4449-4e75-8ae6-0b55bedace10",t._sentryDebugIdIdentifier="sentry-dbid-3f2d6c53-4449-4e75-8ae6-0b55bedace10")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=f(),d=i().path,a=v(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=b(()=>!!i().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return c(),w("div",V,[n(o).state.workspace?(c(),L(m,{key:0,"current-path":n(d),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-f6aef10c"]]);export{H as default};
//# sourceMappingURL=Main.89189f5f.js.map
