import{P as b}from"./PlayerNavbar.cd5e92eb.js";import{g as h}from"./api.92f08751.js";import{a as l}from"./asyncComputed.c41a75e8.js";import{W as v}from"./WidgetsFrame.16fc2683.js";import{d as w,r as k,I,eI as D,eA as x,b as p,eu as C,e as o,f as E,u as t,c as N,w as P,ew as V,eD as f,v as A}from"./outputWidgets.1dd42b15.js";import{u as n}from"./index.c955fffd.js";import"./PhKanban.vue.501794d1.js";import"./PhSignOut.vue.202c761c.js";import"./Text.8fb94fde.js";import"./index.d2129bcd.js";import"./Link.1392a8f2.js";import"./Paragraph.1e3fb99a.js";import"./Title.420c6950.js";import"./index.78cb6522.js";import"./runnerData.ceb735f0.js";import"./url.bb4945ed.js";import"./pubsub.0aa0d325.js";import"./fetch.2943a16c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new q().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="63eeeb15-6b25-4d17-8e99-0368a711d1d0",a._sentryDebugIdIdentifier="sentry-dbid-63eeeb15-6b25-4d17-8e99-0368a711d1d0")}catch{}})();const B={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(a){const r=k(n.getUser()),{result:i,refetch:_}=l(async()=>(await n.allow("kanban")).status==="ALLOWED");I(r,()=>_());const u=D(),g=({path:e})=>{u.push({name:"form",query:c.query,params:{path:e.split("/")}})},c=x(),{result:s}=l(h),y=()=>{n.removeUser(),u.push({name:"playerHome"})},m=()=>{const{status:e}=c.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,F)=>{var d;return p(),C("div",null,[o("div",B,[E(b,{"user-email":(d=r.value)==null?void 0:d.claims.email,"is-kanban-visible":t(i)||!1,"runner-data":t(s),onNavigate:g,onLogout:y},null,8,["user-email","is-kanban-visible","runner-data"]),t(s)?(p(),N(v,{key:0,"main-color":t(s).mainColor,theme:t(s).theme,"font-family":t(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,f(m().status),1),o("p",null,f(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const q=A(W,[["__scopeId","data-v-98d8191f"]]);export{q as default};
//# sourceMappingURL=Error.25a65d3e.js.map
