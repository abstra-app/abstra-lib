import{d as g,eK as b,r as y,K as h,b as v,ew as w,f as m,u as a,x as k}from"./outputWidgets.90bea826.js";import{g as H}from"./api.11022cbf.js";import{a as p}from"./asyncComputed.49586886.js";import{P as I}from"./PlayerNavbar.9ab799c1.js";import{H as x}from"./HomeContent.b8b3b7b7.js";import{u as s}from"./index.c32bd4e1.js";import"./runnerData.3e639e3f.js";import"./url.730e166b.js";import"./PhKanban.vue.8d08f5eb.js";import"./PhSignOut.vue.f7aeaf40.js";import"./Text.1739e9f1.js";import"./Base.f7101ed8.js";import"./index.4be29bb4.js";import"./Link.5f421869.js";import"./Paragraph.adfb7fbd.js";import"./Title.359f569d.js";import"./index.ddd3e42e.js";import"./PhArrowSquareOut.vue.cdb9d970.js";import"./index.962beaa3.js";import"./Card.58ecbe23.js";import"./TabPane.8611683f.js";import"./hasIn.82c95578.js";import"./index.bf27fab4.js";import"./fetch.c885714b.js";import"./pubsub.fa46f282.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="6d0569a0-0ddc-4a73-91e4-0b8920d87f75",o._sentryDebugIdIdentifier="sentry-dbid-6d0569a0-0ddc-4a73-91e4-0b8920d87f75")}catch{}})();const D={class:"page"},C=g({__name:"Home",setup(o){const e=b(),r=y(s.getUser()),{result:c,refetch:d}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");h(r,()=>d());const u=({path:t})=>{e.push({name:"form",params:{path:t.split("/")}})},{result:n,loading:l}=p(H),f=t=>{e.push({path:`/${t}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(t,K)=>{var i;return v(),w("div",D,[m(I,{"runner-data":a(n),"is-kanban-visible":a(c)||!1,"user-email":(i=r.value)==null?void 0:i.claims.email,onNavigate:u,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(x,{workspace:a(n),loading:a(l),onFormClick:f},null,8,["workspace","loading"])])}}});const ee=k(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.8ae5d59a.js.map
