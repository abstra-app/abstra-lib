import{d as b,eK as g,r as y,K as h,b as v,ew as w,f as m,u as t,x as k}from"./outputWidgets.01f76d85.js";import{g as H}from"./api.b64542c3.js";import{a as p}from"./asyncComputed.cebbba25.js";import{P as I}from"./PlayerNavbar.8e54e30d.js";import{H as x}from"./HomeContent.c67b7eec.js";import{u as s}from"./index.06c058db.js";import"./runnerData.e5ce1cad.js";import"./url.3a12ef55.js";import"./PhKanban.vue.8cfc4349.js";import"./PhSignOut.vue.8f07dcb2.js";import"./Text.d114b467.js";import"./Base.faac52bc.js";import"./index.b884dec3.js";import"./Link.23fc25e9.js";import"./Paragraph.81fa9c2a.js";import"./Title.626e0915.js";import"./index.dc525ea1.js";import"./PhArrowSquareOut.vue.d6c1afa4.js";import"./index.829a0f50.js";import"./Card.d35b1513.js";import"./TabPane.691b1b1a.js";import"./hasIn.70d8a538.js";import"./index.cc91905a.js";import"./fetch.5374b97d.js";import"./pubsub.158aeaab.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="ff0a77bc-1ae0-476f-b705-8adfedc364f0",o._sentryDebugIdIdentifier="sentry-dbid-ff0a77bc-1ae0-476f-b705-8adfedc364f0")}catch{}})();const D={class:"page"},C=b({__name:"Home",setup(o){const e=g(),r=y(s.getUser()),{result:c,refetch:u}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");h(r,()=>u());const f=({path:a})=>{e.push({name:"form",params:{path:a.split("/")}})},{result:n,loading:l}=p(H),d=a=>{e.push({path:`/${a}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(a,K)=>{var i;return v(),w("div",D,[m(I,{"runner-data":t(n),"is-kanban-visible":t(c)||!1,"user-email":(i=r.value)==null?void 0:i.claims.email,onNavigate:f,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(x,{workspace:t(n),loading:t(l),onFormClick:d},null,8,["workspace","loading"])])}}});const ee=k(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.67555d24.js.map
