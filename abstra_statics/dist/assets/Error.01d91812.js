import{P as h}from"./PlayerNavbar.bd2d3945.js";import{g as b}from"./api.4dc25e0c.js";import{a as d}from"./asyncComputed.a36cff4c.js";import{W as v}from"./WidgetsFrame.aa6af0eb.js";import{d as w,r as k,I,eI as D,eA as x,b as p,eu as C,e as o,f as E,u as a,c as N,w as P,ew as V,eD as f,v as A}from"./outputWidgets.aa08cfde.js";import{u as n}from"./index.b7b45f1b.js";import"./PhKanban.vue.e1d5fdb2.js";import"./PhSignOut.vue.8aa62604.js";import"./Text.ac966cfe.js";import"./index.c5248c8e.js";import"./Link.53723f90.js";import"./Paragraph.f7753824.js";import"./Title.ecd0d227.js";import"./index.0d81ab52.js";import"./runnerData.64001e3e.js";import"./url.4fede55a.js";import"./pubsub.6d169ac1.js";import"./fetch.fad2a96a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new q().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="4b906acc-cd0d-41a4-8013-ca45e6ac08a4",t._sentryDebugIdIdentifier="sentry-dbid-4b906acc-cd0d-41a4-8013-ca45e6ac08a4")}catch{}})();const B={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(t){const r=k(n.getUser()),{result:i,refetch:_}=d(async()=>(await n.allow("kanban")).status==="ALLOWED");I(r,()=>_());const c=D(),g=({path:e})=>{c.push({name:"form",query:u.query,params:{path:e.split("/")}})},u=x(),{result:s}=d(b),y=()=>{n.removeUser(),c.push({name:"playerHome"})},m=()=>{const{status:e}=u.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,F)=>{var l;return p(),C("div",null,[o("div",B,[E(h,{"user-email":(l=r.value)==null?void 0:l.claims.email,"is-kanban-visible":a(i)||!1,"runner-data":a(s),onNavigate:g,onLogout:y},null,8,["user-email","is-kanban-visible","runner-data"]),a(s)?(p(),N(v,{key:0,"main-color":a(s).mainColor,theme:a(s).theme,"font-family":a(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,f(m().status),1),o("p",null,f(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const q=A(W,[["__scopeId","data-v-98d8191f"]]);export{q as default};
//# sourceMappingURL=Error.01d91812.js.map
