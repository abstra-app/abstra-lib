import{d as b,eI as g,r as y,I as v,b as h,eu as k,f as m,u as r,v as w}from"./outputWidgets.0008e1ad.js";import{g as I}from"./api.c752ec9b.js";import{a as p}from"./asyncComputed.50daf957.js";import{P as H}from"./PlayerNavbar.5edbbd30.js";import{H as D}from"./HomeContent.adba9f48.js";import{u as s}from"./index.53ba43a4.js";import"./runnerData.77c54a3a.js";import"./url.634a3ddb.js";import"./PhKanban.vue.b7c91f14.js";import"./PhSignOut.vue.50b2817d.js";import"./Text.4e90dd2c.js";import"./index.bb025ee3.js";import"./Link.e38c8a5b.js";import"./Paragraph.58e8ec62.js";import"./Title.d0cdf670.js";import"./index.079907a3.js";import"./PhArrowSquareOut.vue.2fb423fc.js";import"./index.e8512a8f.js";import"./Card.f16e786a.js";import"./index.0bf0137f.js";import"./TabPane.0e1c18c0.js";import"./hasIn.4fa9394c.js";import"./index.6ed5e473.js";import"./pubsub.ea758a0e.js";import"./fetch.564f2c90.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="95140f21-f8bd-4ede-918d-001e483ef4b8",o._sentryDebugIdIdentifier="sentry-dbid-95140f21-f8bd-4ede-918d-001e483ef4b8")}catch{}})();const x={class:"page"},C=b({__name:"Home",setup(o){const e=g(),a=y(s.getUser()),{result:c,refetch:u}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");v(a,()=>u());const d=({path:t})=>{e.push({name:"form",params:{path:t.split("/")}})},{result:n,loading:l}=p(I),f=t=>{e.push({path:`/${t}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(t,L)=>{var i;return h(),k("div",x,[m(H,{"runner-data":r(n),"is-kanban-visible":r(c)||!1,"user-email":(i=a.value)==null?void 0:i.claims.email,onNavigate:d,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(D,{workspace:r(n),loading:r(l),onFormClick:f},null,8,["workspace","loading"])])}}});const ee=w(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.86d94eb3.js.map
