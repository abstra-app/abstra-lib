import{P as g}from"./PlayerNavbar.2f29c76b.js";import{g as h}from"./api.a52ba6ec.js";import{a as l}from"./asyncComputed.af5dc7e5.js";import{W as v}from"./WidgetsFrame.a484c132.js";import{d as w,r as k,K as D,eK as I,eE as x,b as p,ew as E,e as o,f as C,u as t,c as N,w as P,ey as V,eH as f,x as B}from"./outputWidgets.899c2ba6.js";import{u as n}from"./index.8e4fec01.js";import"./PhKanban.vue.b4b31b6b.js";import"./PhSignOut.vue.3deb34fb.js";import"./Text.b13957eb.js";import"./Base.ddd59c02.js";import"./index.a9b59819.js";import"./Link.16820cf2.js";import"./Paragraph.9297eb2d.js";import"./Title.170ebf83.js";import"./index.fde9dc0c.js";import"./runnerData.ce8e1422.js";import"./url.89e8212d.js";import"./fetch.2c64dbc0.js";import"./pubsub.ccef1214.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new A().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="9d59e2b2-6784-4804-ba5f-729bedac7fdb",a._sentryDebugIdIdentifier="sentry-dbid-9d59e2b2-6784-4804-ba5f-729bedac7fdb")}catch{}})();const K={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(a){const r=k(n.getUser()),{result:i,refetch:_}=l(async()=>(await n.allow("kanban")).status==="ALLOWED");D(r,()=>_());const u=I(),y=({path:e})=>{u.push({name:"form",query:c.query,params:{path:e.split("/")}})},c=x(),{result:s}=l(h),b=()=>{n.removeUser(),u.push({name:"playerHome"})},m=()=>{const{status:e}=c.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,q)=>{var d;return p(),E("div",null,[o("div",K,[C(g,{"user-email":(d=r.value)==null?void 0:d.claims.email,"is-kanban-visible":t(i)||!1,"runner-data":t(s),onNavigate:y,onLogout:b},null,8,["user-email","is-kanban-visible","runner-data"]),t(s)?(p(),N(v,{key:0,"main-color":t(s).mainColor,theme:t(s).theme,"font-family":t(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,f(m().status),1),o("p",null,f(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const A=B(W,[["__scopeId","data-v-98d8191f"]]);export{A as default};
//# sourceMappingURL=Error.ca953b35.js.map
