import{d as b,eJ as g,r as y,J as v,b as h,ev as k,f as m,u as t,v as w}from"./outputWidgets.c813e1c0.js";import{g as H}from"./api.14f63e32.js";import{a as p}from"./asyncComputed.d544976a.js";import{P as I}from"./PlayerNavbar.24dc9ef1.js";import{H as D}from"./HomeContent.fbb6c402.js";import{u as s}from"./index.e76d7614.js";import"./runnerData.17b52d89.js";import"./url.f874f1d0.js";import"./PhKanban.vue.d7d81ae2.js";import"./PhSignOut.vue.8b47e2d9.js";import"./Text.11a46b63.js";import"./index.690756e5.js";import"./Link.fad7fffa.js";import"./Paragraph.4bf06d46.js";import"./Title.9ba346c5.js";import"./index.e6685eb1.js";import"./PhArrowSquareOut.vue.7fca856e.js";import"./index.7866fffb.js";import"./Card.bcdf295b.js";import"./TabPane.be860141.js";import"./hasIn.a85ca19a.js";import"./index.5910e014.js";import"./fetch.f5f70387.js";import"./pubsub.e4fdbaee.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="850abba2-609c-4fb8-9b5a-81dd63d56789",o._sentryDebugIdIdentifier="sentry-dbid-850abba2-609c-4fb8-9b5a-81dd63d56789")}catch{}})();const x={class:"page"},C=b({__name:"Home",setup(o){const e=g(),r=y(s.getUser()),{result:c,refetch:u}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");v(r,()=>u());const d=({path:a})=>{e.push({name:"form",params:{path:a.split("/")}})},{result:n,loading:l}=p(H),f=a=>{e.push({path:`/${a}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(a,L)=>{var i;return h(),k("div",x,[m(I,{"runner-data":t(n),"is-kanban-visible":t(c)||!1,"user-email":(i=r.value)==null?void 0:i.claims.email,onNavigate:d,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(D,{workspace:t(n),loading:t(l),onFormClick:f},null,8,["workspace","loading"])])}}});const Z=w(C,[["__scopeId","data-v-f12c98c4"]]);export{Z as default};
//# sourceMappingURL=Home.2768f5b6.js.map
