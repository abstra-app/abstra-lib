import{d as b,eI as g,r as y,I as v,b as h,eu as k,f as m,u as r,v as w}from"./outputWidgets.b1051bf6.js";import{g as I}from"./api.6003120e.js";import{a as p}from"./asyncComputed.024639a6.js";import{P as H}from"./PlayerNavbar.7d5fd66f.js";import{H as D}from"./HomeContent.e3db1aba.js";import{u as s}from"./index.b4d54b24.js";import"./runnerData.7a40fb9f.js";import"./url.e0198aad.js";import"./PhKanban.vue.cda71e2f.js";import"./PhSignOut.vue.a485b179.js";import"./Text.e1e330eb.js";import"./index.56934e1a.js";import"./Link.e4483d43.js";import"./Paragraph.c55dfd35.js";import"./Title.52ce837c.js";import"./index.c2fb932a.js";import"./PhArrowSquareOut.vue.5bd662e2.js";import"./index.3b743065.js";import"./Card.b4dc062a.js";import"./index.09dabf56.js";import"./TabPane.c18c03ef.js";import"./hasIn.7a5dc2c1.js";import"./index.f9829772.js";import"./pubsub.ebca5b2d.js";import"./fetch.329e38e1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="fa7f60f8-e6d7-4253-bd94-674bb6e32d5b",o._sentryDebugIdIdentifier="sentry-dbid-fa7f60f8-e6d7-4253-bd94-674bb6e32d5b")}catch{}})();const x={class:"page"},C=b({__name:"Home",setup(o){const e=g(),a=y(s.getUser()),{result:c,refetch:u}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");v(a,()=>u());const d=({path:t})=>{e.push({name:"form",params:{path:t.split("/")}})},{result:n,loading:l}=p(I),f=t=>{e.push({path:`/${t}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(t,L)=>{var i;return h(),k("div",x,[m(H,{"runner-data":r(n),"is-kanban-visible":r(c)||!1,"user-email":(i=a.value)==null?void 0:i.claims.email,onNavigate:d,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(D,{workspace:r(n),loading:r(l),onFormClick:f},null,8,["workspace","loading"])])}}});const ee=w(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.ca100d96.js.map
