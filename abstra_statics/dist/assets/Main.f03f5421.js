import{P as f}from"./PlayerNavbar.c4f6eb1a.js";import{u as m,i as g}from"./workspaceStore.6c4423eb.js";import{d as h,eq as y,ed as c,e as v,f as b,r as k,X as w,u as n,c as L,R as I,a as N,b as C,o as i,$ as R}from"./vue-router.fe0bc544.js";import"./metadata.03cda157.js";import"./PhBug.vue.c45a1709.js";import"./PhCheckCircle.vue.e4495885.js";import"./PhKanban.vue.ea04d74a.js";import"./PhWebhooksLogo.vue.22db5aab.js";import"./LoadingOutlined.ce1eefe7.js";import"./PhSignOut.vue.b1447093.js";import"./index.fac79d13.js";import"./Avatar.dd9a704d.js";import"./url.f2182192.js";import"./colorHelpers.83400745.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cffd5026-7463-493b-9566-1fccc302eb2d",t._sentryDebugIdIdentifier="sentry-dbid-cffd5026-7463-493b-9566-1fccc302eb2d")}catch{}})();const V={class:"main-container"},x={class:"content"},B=h({__name:"Main",setup(t){const e=y(),o=m(),d=c().path,a=v(null),u=async({path:r,id:s})=>{a.value=s,await e.push({path:`/${r}`}),a.value=null},p=()=>{e.push({name:"playerLogin"})},l=b(()=>!!c().meta.hideLogin);return g(()=>e.push({name:"playerLogin"})),(r,s)=>{const _=k("RouterView");return i(),w("div",V,[n(o).state.workspace?(i(),L(f,{key:0,"current-path":n(d),"hide-login":l.value,"runner-data":n(o).state.workspace,loading:a.value,onNavigate:u,onLoginClick:p},null,8,["current-path","hide-login","runner-data","loading"])):I("",!0),N("section",x,[C(_)])])}}});const H=R(B,[["__scopeId","data-v-f6aef10c"]]);export{H as default};
//# sourceMappingURL=Main.f03f5421.js.map
