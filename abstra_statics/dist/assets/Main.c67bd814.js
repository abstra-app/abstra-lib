import{P as h}from"./PlayerNavbar.71baf0c5.js";import{g as y}from"./api.7b72d88f.js";import{u as a}from"./index.5c7a3128.js";import{d as v,f7 as w,r as k,f1 as I,O as L,a as x,b as n,eV as s,f as c,u as i,E as D}from"./outputWidgets.f4cec438.js";import{a as M}from"./asyncComputed.2d627b56.js";import{L as C}from"./CircularLoading.adab601e.js";import"./metadata.fb0b168a.js";import"./PhCheckCircle.vue.9adf6e0f.js";import"./PhKanban.vue.535241c0.js";import"./PhScroll.vue.7f7577ca.js";import"./PhWebhooksLogo.vue.9cbfc408.js";import"./PhSignOut.vue.a9ba31cf.js";import"./index.964f3828.js";import"./runnerData.3dc06059.js";import"./url.4035cbd8.js";import"./fetch.179ea359.js";import"./pubsub.d177beea.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a2ff3c06-c93b-4893-9436-b1b217c3f5ed",t._sentryDebugIdIdentifier="sentry-dbid-a2ff3c06-c93b-4893-9436-b1b217c3f5ed")}catch{}})();const E={class:"main-container"},N={key:0,class:"centered"},P={key:1,class:"content"},B=v({__name:"Main",setup(t){const e=w(),o=k(a.getUser()),p=I().path;a.pubsub.subscribe("authenticated",r=>{o.value=r});const d=({path:r})=>{e.push({path:`/${r}`})},m=()=>{e.push({name:"playerLogin"})},{result:_,loading:f,refetch:l}=M(y);L(o,l);const b=()=>{a.removeUser(),e.push({name:"playerHome"})};return(r,R)=>{var u;const g=x("router-view");return n(),s("div",E,[c(h,{"current-path":i(p),"runner-data":i(_),"user-email":(u=o.value)==null?void 0:u.claims.email,onNavigate:d,onLogout:b,onLogin:m},null,8,["current-path","runner-data","user-email"]),i(f)?(n(),s("div",N,[c(C)])):(n(),s("section",P,[c(g)]))])}}});const X=D(B,[["__scopeId","data-v-059bb8cc"]]);export{X as default};
//# sourceMappingURL=Main.c67bd814.js.map
