import{P as h}from"./PlayerNavbar.107b022c.js";import{g as b}from"./api.f0ca54db.js";import{a as d}from"./asyncComputed.0ef8613f.js";import{W as v}from"./WidgetsFrame.09879805.js";import{d as w,r as k,I,eI as D,eA as x,b as p,eu as C,e as o,f as E,u as t,c as N,w as P,ew as V,eD as f,v as A}from"./outputWidgets.d1d919f2.js";import{u as n}from"./index.61dc5d31.js";import"./PhKanban.vue.9de9b9e4.js";import"./PhSignOut.vue.a06c854f.js";import"./Text.9e700145.js";import"./index.a9abb3e3.js";import"./Link.1f0f7fb0.js";import"./Paragraph.436f4863.js";import"./Title.7964b5fc.js";import"./index.45b12935.js";import"./runnerData.3cb32f2e.js";import"./url.b08a776e.js";import"./pubsub.ba5c0982.js";import"./fetch.3faada3e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new q().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="a89a9360-c149-4eb1-a6a7-ce4f28293ede",a._sentryDebugIdIdentifier="sentry-dbid-a89a9360-c149-4eb1-a6a7-ce4f28293ede")}catch{}})();const B={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(a){const r=k(n.getUser()),{result:i,refetch:_}=d(async()=>(await n.allow("kanban")).status==="ALLOWED");I(r,()=>_());const u=D(),g=({path:e})=>{u.push({name:"form",query:c.query,params:{path:e.split("/")}})},c=x(),{result:s}=d(b),y=()=>{n.removeUser(),u.push({name:"playerHome"})},m=()=>{const{status:e}=c.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,F)=>{var l;return p(),C("div",null,[o("div",B,[E(h,{"user-email":(l=r.value)==null?void 0:l.claims.email,"is-kanban-visible":t(i)||!1,"runner-data":t(s),onNavigate:g,onLogout:y},null,8,["user-email","is-kanban-visible","runner-data"]),t(s)?(p(),N(v,{key:0,"main-color":t(s).mainColor,theme:t(s).theme,"font-family":t(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,f(m().status),1),o("p",null,f(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const q=A(W,[["__scopeId","data-v-98d8191f"]]);export{q as default};
//# sourceMappingURL=Error.90ab1261.js.map
