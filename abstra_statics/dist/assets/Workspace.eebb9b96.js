import{g as b}from"./api.b0ead48f.js";import{u as i}from"./index.c1798314.js";import{d as g,eK as h,r as v,K as k,a as w,b as r,ew as I,f as W,u as e,c,w as x,ey as C,x as L}from"./outputWidgets.f5ba2323.js";import{P as D}from"./PlayerNavbar.c72bb4d8.js";import{a as d}from"./asyncComputed.5f5ea003.js";import{L as K}from"./CircularLoading.3d4960bd.js";import{W as N}from"./WidgetsFrame.40aff834.js";import"./runnerData.fe0a075b.js";import"./url.8ace32ac.js";import"./fetch.1e22d668.js";import"./pubsub.de391e8b.js";import"./PhKanban.vue.4fa8aec2.js";import"./PhSignOut.vue.26e4067e.js";import"./index.d227c352.js";import"./Text.f641a2d6.js";import"./Base.2adca053.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="c1084ecd-9c27-4818-8e3e-22b4bc3084e4",a._sentryDebugIdIdentifier="sentry-dbid-c1084ecd-9c27-4818-8e3e-22b4bc3084e4")}catch{}})();const V={class:"page"},B=g({__name:"Workspace",setup(a){const t=h(),s=v(i.getUser()),{result:l,refetch:p}=d(async()=>(await i.allow("kanban")).status==="ALLOWED");k(s,()=>p());const u=({path:n})=>{t.push({name:"form",params:{path:n.split("/")}})},{result:o,loading:f}=d(b),_=()=>{i.removeUser(),t.push({name:"playerHome"})};return(n,E)=>{var m;const y=w("router-view");return r(),I("div",V,[W(D,{"runner-data":e(o),"is-kanban-visible":e(l)||!1,"user-email":(m=s.value)==null?void 0:m.claims.email,onNavigate:u,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),e(o)?(r(),c(N,{key:0,"main-color":e(o).mainColor,theme:e(o).theme,"font-family":e(o).fontFamily,style:{height:"100vh",width:"100%"}},{default:x(()=>[e(f)?(r(),c(K,{key:0})):(r(),c(y,{key:1}))]),_:1},8,["main-color","theme","font-family"])):C("",!0)])}}});const X=L(B,[["__scopeId","data-v-df3ff1d8"]]);export{X as default};
//# sourceMappingURL=Workspace.eebb9b96.js.map
