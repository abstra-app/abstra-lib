import{P as y}from"./PlayerNavbar.5b1b11e8.js";import{g as v}from"./api.2deae15f.js";import{u as o}from"./index.24ac0521.js";import{d as h,eK as w,r as k,K as I,a as L,b as n,ew as r,f as i,u as c,x}from"./outputWidgets.08b42066.js";import{a as d}from"./asyncComputed.ea2ee994.js";import{L as D}from"./CircularLoading.ccb6b6b5.js";import"./PhKanban.vue.bf02a6ab.js";import"./PhSignOut.vue.ae0dbcba.js";import"./index.de491520.js";import"./Text.8cbfb15b.js";import"./Base.c4ee6843.js";import"./runnerData.015773ec.js";import"./url.cc277faf.js";import"./fetch.def76c12.js";import"./pubsub.1c93332b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="df8438f9-3c5f-476f-b094-286a2fb8c421",e._sentryDebugIdIdentifier="sentry-dbid-df8438f9-3c5f-476f-b094-286a2fb8c421")}catch{}})();const K={class:"main-container"},M={key:0,class:"centered"},C={key:1,class:"content"},E=h({__name:"Main",setup(e){const a=w(),s=k(o.getUser());o.pubsub.subscribe("authenticated",t=>{s.value=t});const{result:p,refetch:m}=d(async()=>(await o.allow("kanban")).status==="ALLOWED");I(s,()=>m());const l=({path:t})=>{a.push({name:"form",params:{path:t.split("/")}})},{result:f,loading:_}=d(v),b=()=>{o.removeUser(),a.push({name:"playerHome"})};return(t,N)=>{var u;const g=L("router-view");return n(),r("div",K,[i(y,{"runner-data":c(f),"is-kanban-visible":c(p)||!1,"user-email":(u=s.value)==null?void 0:u.claims.email,onNavigate:l,onLogout:b},null,8,["runner-data","is-kanban-visible","user-email"]),c(_)?(n(),r("div",M,[i(D)])):(n(),r("section",C,[i(g)]))])}}});const Q=x(E,[["__scopeId","data-v-020a5948"]]);export{Q as default};
//# sourceMappingURL=Main.7266ee49.js.map
