import{d as b,eI as g,r as y,I as v,b as h,eu as k,f as m,u as t,v as w}from"./outputWidgets.ee4d59e8.js";import{g as I}from"./api.d9eb8a17.js";import{a as p}from"./asyncComputed.91f1acd8.js";import{P as H}from"./PlayerNavbar.5dbfe537.js";import{H as D}from"./HomeContent.f49a65a8.js";import{u as s}from"./index.983a45a6.js";import"./runnerData.ccc8110f.js";import"./url.d4e01787.js";import"./PhKanban.vue.73a45ec8.js";import"./PhSignOut.vue.930e0447.js";import"./Text.3a9aa492.js";import"./index.016aedf3.js";import"./Link.f5306730.js";import"./Paragraph.bcb207b3.js";import"./Title.cb4ab3dd.js";import"./index.40226834.js";import"./PhArrowSquareOut.vue.57c85d41.js";import"./index.08a0c636.js";import"./Card.2a94653e.js";import"./index.8f4d61e3.js";import"./TabPane.12f3587d.js";import"./hasIn.d9dd4a59.js";import"./index.b55cc53a.js";import"./pubsub.adfb0dba.js";import"./fetch.52fd1a71.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="bd256db8-2242-49ce-bae7-3ce10ddacfab",o._sentryDebugIdIdentifier="sentry-dbid-bd256db8-2242-49ce-bae7-3ce10ddacfab")}catch{}})();const x={class:"page"},C=b({__name:"Home",setup(o){const e=g(),r=y(s.getUser()),{result:c,refetch:d}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");v(r,()=>d());const u=({path:a})=>{e.push({name:"form",params:{path:a.split("/")}})},{result:n,loading:l}=p(I),f=a=>{e.push({path:`/${a}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(a,L)=>{var i;return h(),k("div",x,[m(H,{"runner-data":t(n),"is-kanban-visible":t(c)||!1,"user-email":(i=r.value)==null?void 0:i.claims.email,onNavigate:u,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(D,{workspace:t(n),loading:t(l),onFormClick:f},null,8,["workspace","loading"])])}}});const ee=w(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.a3ba6227.js.map
