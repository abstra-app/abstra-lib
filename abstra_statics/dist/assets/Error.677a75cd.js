import{P as h}from"./PlayerNavbar.8b9bed67.js";import{g as b}from"./api.e89b13cb.js";import{a as l}from"./asyncComputed.a04ee128.js";import{W as v}from"./WidgetsFrame.d4d8cba7.js";import{d as w,r as k,I,eI as D,eA as x,b as f,eu as C,e as o,f as E,u as t,c as N,w as P,ew as V,eD as p,v as A}from"./outputWidgets.509aefc1.js";import{u as n}from"./index.68014241.js";import"./PhKanban.vue.4a06cb27.js";import"./PhSignOut.vue.a24d2df8.js";import"./Text.7a28ccdb.js";import"./index.08e40d8a.js";import"./Link.df538565.js";import"./Paragraph.659511ee.js";import"./Title.ce197a93.js";import"./index.052dfb17.js";import"./runnerData.17a85edf.js";import"./url.f47056e6.js";import"./pubsub.71b5ab05.js";import"./fetch.cea7d9d9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new q().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="f60d04a4-59f3-4de9-90ed-6f66753d08bf",a._sentryDebugIdIdentifier="sentry-dbid-f60d04a4-59f3-4de9-90ed-6f66753d08bf")}catch{}})();const B={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(a){const r=k(n.getUser()),{result:i,refetch:_}=l(async()=>(await n.allow("kanban")).status==="ALLOWED");I(r,()=>_());const u=D(),g=({path:e})=>{u.push({name:"form",query:c.query,params:{path:e.split("/")}})},c=x(),{result:s}=l(b),y=()=>{n.removeUser(),u.push({name:"playerHome"})},m=()=>{const{status:e}=c.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,F)=>{var d;return f(),C("div",null,[o("div",B,[E(h,{"user-email":(d=r.value)==null?void 0:d.claims.email,"is-kanban-visible":t(i)||!1,"runner-data":t(s),onNavigate:g,onLogout:y},null,8,["user-email","is-kanban-visible","runner-data"]),t(s)?(f(),N(v,{key:0,"main-color":t(s).mainColor,theme:t(s).theme,"font-family":t(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,p(m().status),1),o("p",null,p(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const q=A(W,[["__scopeId","data-v-98d8191f"]]);export{q as default};
//# sourceMappingURL=Error.677a75cd.js.map
