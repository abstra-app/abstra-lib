import{P as b}from"./PlayerNavbar.eeb66ae5.js";import{g as h}from"./api.bbe4582c.js";import{a as d}from"./asyncComputed.317e87c5.js";import{W as v}from"./WidgetsFrame.eeed42f0.js";import{d as w,r as k,I,eI as D,eA as x,b as p,eu as C,e as o,f as E,u as t,c as N,w as P,ew as V,eD as f,v as A}from"./outputWidgets.3681a2a5.js";import{u as n}from"./index.79a6117b.js";import"./PhKanban.vue.792b9c22.js";import"./PhSignOut.vue.3019c4e7.js";import"./Text.1bf2a6e4.js";import"./index.28b53c50.js";import"./Link.5ffe898a.js";import"./Paragraph.326f3875.js";import"./Title.142e78f1.js";import"./index.b62ed045.js";import"./runnerData.f97328a2.js";import"./url.ec571b6b.js";import"./pubsub.916b1e4d.js";import"./fetch.d0b5bb7a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new q().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="8491c2cc-68ea-4780-b555-8e3a3044b7d8",a._sentryDebugIdIdentifier="sentry-dbid-8491c2cc-68ea-4780-b555-8e3a3044b7d8")}catch{}})();const B={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(a){const r=k(n.getUser()),{result:i,refetch:_}=d(async()=>(await n.allow("kanban")).status==="ALLOWED");I(r,()=>_());const c=D(),g=({path:e})=>{c.push({name:"form",query:u.query,params:{path:e.split("/")}})},u=x(),{result:s}=d(h),y=()=>{n.removeUser(),c.push({name:"playerHome"})},m=()=>{const{status:e}=u.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,F)=>{var l;return p(),C("div",null,[o("div",B,[E(b,{"user-email":(l=r.value)==null?void 0:l.claims.email,"is-kanban-visible":t(i)||!1,"runner-data":t(s),onNavigate:g,onLogout:y},null,8,["user-email","is-kanban-visible","runner-data"]),t(s)?(p(),N(v,{key:0,"main-color":t(s).mainColor,theme:t(s).theme,"font-family":t(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,f(m().status),1),o("p",null,f(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const q=A(W,[["__scopeId","data-v-98d8191f"]]);export{q as default};
//# sourceMappingURL=Error.87ee154e.js.map
