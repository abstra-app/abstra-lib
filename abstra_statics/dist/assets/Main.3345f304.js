import{P as b}from"./PlayerNavbar.7a964000.js";import{g as y}from"./api.f41e6bdd.js";import{u as r}from"./index.0da17e95.js";import{d as v,f8 as w,r as k,f3 as I,G as L,a as x,b as n,eX as s,f as c,u as i,at as D}from"./outputWidgets.9a494812.js";import{a as M}from"./asyncComputed.63db5c85.js";import{L as C}from"./CircularLoading.000efbc6.js";import"./metadata.dfd3ef3b.js";import"./PhCheckCircle.vue.2183a9d8.js";import"./PhKanban.vue.8ec3a977.js";import"./PhScroll.vue.d464d64e.js";import"./PhWebhooksLogo.vue.a5f4d00f.js";import"./PhSignOut.vue.8ea59e19.js";import"./index.813c513a.js";import"./runnerData.7c980e32.js";import"./url.5e44ba49.js";import"./fetch.23cd0b1e.js";import"./pubsub.97e68a0d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="97059a6a-ca9e-4607-956f-2dcf6774dca4",t._sentryDebugIdIdentifier="sentry-dbid-97059a6a-ca9e-4607-956f-2dcf6774dca4")}catch{}})();const N={class:"main-container"},P={key:0,class:"centered"},B={key:1,class:"content"},E=v({__name:"Main",setup(t){const e=w(),o=k(r.getUser()),p=I().path;r.pubsub.subscribe("authenticated",a=>{o.value=a});const d=({path:a})=>{e.push({path:`/${a}`})},m=()=>{e.push({name:"playerLogin"})},{result:_,loading:f,refetch:l}=M(y);L(o,l);const g=()=>{r.removeUser(),e.push({name:"playerHome"})};return(a,R)=>{var u;const h=x("router-view");return n(),s("div",N,[c(b,{"current-path":i(p),"runner-data":i(_),"user-email":(u=o.value)==null?void 0:u.claims.email,onNavigate:d,onLogout:g,onLogin:m},null,8,["current-path","runner-data","user-email"]),i(f)?(n(),s("div",P,[c(C)])):(n(),s("section",B,[c(h)]))])}}});const T=D(E,[["__scopeId","data-v-059bb8cc"]]);export{T as default};
//# sourceMappingURL=Main.3345f304.js.map
