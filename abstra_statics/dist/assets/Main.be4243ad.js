import{P as _}from"./PlayerNavbar.b44f97ad.js";import{u as m,i as l}from"./workspaceStore.d0f6c244.js";import{d as f,eq as h,ed as r,f as g,r as y,X as b,u as a,c as k,R as v,a as w,b as L,o as s,$ as I}from"./vue-router.a96f3cd6.js";import"./metadata.f4cc1916.js";import"./PhBug.vue.a57f4e37.js";import"./PhCheckCircle.vue.c634b33c.js";import"./PhKanban.vue.8058b214.js";import"./PhWebhooksLogo.vue.54435b43.js";import"./PhSignOut.vue.72ca7ce1.js";import"./index.2f1f7ec2.js";import"./Avatar.56ec0cd9.js";import"./url.885ffd7b.js";import"./colorHelpers.cdab56d6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4f84a92e-b51a-4c1f-8ac5-0af090933bd0",t._sentryDebugIdIdentifier="sentry-dbid-4f84a92e-b51a-4c1f-8ac5-0af090933bd0")}catch{}})();const N={class:"main-container"},C={class:"content"},R=f({__name:"Main",setup(t){const e=h(),o=m(),i=r().path,c=({path:n})=>{e.push({path:`/${n}`})},p=()=>{e.push({name:"playerLogin"})},d=g(()=>!!r().meta.hideLogin);return l(()=>e.push({name:"playerLogin"})),(n,V)=>{const u=y("RouterView");return s(),b("div",N,[a(o).state.workspace?(s(),k(_,{key:0,"current-path":a(i),"hide-login":d.value,"runner-data":a(o).state.workspace,onNavigate:c,onLoginClick:p},null,8,["current-path","hide-login","runner-data"])):v("",!0),w("section",C,[L(u)])])}}});const A=I(R,[["__scopeId","data-v-aeaee359"]]);export{A as default};
//# sourceMappingURL=Main.be4243ad.js.map
