import{P as y}from"./PlayerNavbar.12d84e35.js";import{g as v}from"./api.307d3f9f.js";import{u as o}from"./index.a0d1bb89.js";import{d as h,eM as w,r as k,O as I,a as L,b as n,ey as r,f as i,u as c,E as D}from"./outputWidgets.b871b4c2.js";import{a as d}from"./asyncComputed.53a0782e.js";import{L as M}from"./CircularLoading.cfbd728b.js";import"./PhKanban.vue.9ec5a006.js";import"./PhSignOut.vue.6c8184b6.js";import"./index.9a3ab3be.js";import"./Text.48a7ca01.js";import"./Base.0bb5fa7a.js";import"./runnerData.e8eb4ed0.js";import"./url.15a5742f.js";import"./fetch.78181002.js";import"./pubsub.0f4910dc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="2350cfb4-af72-40d1-835a-bcdfcd9b5545",e._sentryDebugIdIdentifier="sentry-dbid-2350cfb4-af72-40d1-835a-bcdfcd9b5545")}catch{}})();const x={class:"main-container"},E={key:0,class:"centered"},C={key:1,class:"content"},N=h({__name:"Main",setup(e){const a=w(),s=k(o.getUser());o.pubsub.subscribe("authenticated",t=>{s.value=t});const{result:p,refetch:m}=d(async()=>(await o.allow("kanban")).status==="ALLOWED");I(s,()=>m());const l=({path:t})=>{a.push({name:"form",params:{path:t.split("/")}})},{result:_,loading:f}=d(v),b=()=>{o.removeUser(),a.push({name:"playerHome"})};return(t,V)=>{var u;const g=L("router-view");return n(),r("div",x,[i(y,{"runner-data":c(_),"is-kanban-visible":c(p)||!1,"user-email":(u=s.value)==null?void 0:u.claims.email,onNavigate:l,onLogout:b},null,8,["runner-data","is-kanban-visible","user-email"]),c(f)?(n(),r("div",E,[i(M)])):(n(),r("section",C,[i(g)]))])}}});const Q=D(N,[["__scopeId","data-v-020a5948"]]);export{Q as default};
//# sourceMappingURL=Main.6a9a913a.js.map
