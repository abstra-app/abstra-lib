import{d as g,eK as b,r as y,K as h,b as v,ew as w,f as c,u as t,x as k}from"./outputWidgets.412702ce.js";import{g as H}from"./api.b3745a38.js";import{a as m}from"./asyncComputed.629a2434.js";import{P as I}from"./PlayerNavbar.23b7673a.js";import{H as x}from"./HomeContent.6ee73294.js";import{u as s}from"./index.5412b6f4.js";import"./runnerData.4c02e902.js";import"./url.8fd534cf.js";import"./PhKanban.vue.2e20c8b7.js";import"./PhSignOut.vue.5b2be444.js";import"./Text.4bb22848.js";import"./Base.777d2f1b.js";import"./index.128c88a9.js";import"./Link.202c1b44.js";import"./Paragraph.3673fc63.js";import"./Title.154f8c19.js";import"./index.4c6678ae.js";import"./PhArrowSquareOut.vue.f48d4db5.js";import"./index.e7fe476d.js";import"./Card.57885c2a.js";import"./TabPane.e0f1a674.js";import"./hasIn.fd173989.js";import"./index.8a8c47e0.js";import"./fetch.3f91ba6d.js";import"./pubsub.822fc3e8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="64491bf2-52ca-44ca-87c8-15facc94a5ea",a._sentryDebugIdIdentifier="sentry-dbid-64491bf2-52ca-44ca-87c8-15facc94a5ea")}catch{}})();const D={class:"page"},C=g({__name:"Home",setup(a){const e=b(),r=y(s.getUser()),{result:p,refetch:u}=m(async()=>(await s.allow("kanban")).status==="ALLOWED");h(r,()=>u());const l=({path:o})=>{e.push({name:"form",params:{path:o.split("/")}})},{result:n,loading:d}=m(H),f=o=>{e.push({path:`/${o}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(o,K)=>{var i;return v(),w("div",D,[c(I,{"runner-data":t(n),"is-kanban-visible":t(p)||!1,"user-email":(i=r.value)==null?void 0:i.claims.email,onNavigate:l,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),c(x,{workspace:t(n),loading:t(d),onFormClick:f},null,8,["workspace","loading"])])}}});const ee=k(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.5d9d4603.js.map
