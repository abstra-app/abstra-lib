import{P as a}from"./Passwordless.b41a0b67.js";import{d as r,ex as d,b as i,er as c,f as s,w as _,v as f}from"./registerWidgets.ca9618c6.js";import{M as m}from"./member.57ce95dd.js";import{W as p}from"./WidgetsFrame.d97ae681.js";import"./CircularLoading.bb6bfe76.js";import"./icons.71da0300.js";import"./passwordlessManager.91e53713.js";import"./pubsub.197ceb4e.js";import"./storage.a502fdce.js";import"./gateway.f5df01e9.js";import"./activeRecord.fa727ba5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="db5d53cd-a1f9-4f85-9a6b-0c57a0557a69",e._sentryDebugIdIdentifier="sentry-dbid-db5d53cd-a1f9-4f85-9a6b-0c57a0557a69")}catch{}})();const l={class:"login"},u=r({__name:"Login",setup(e){const o=d();async function t(n){await m.login(),o.push({name:"home"})}return(n,b)=>(i(),c("div",l,[s(p,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(a,{class:"passwordless",onDone:t})]),_:1})]))}});const B=f(u,[["__scopeId","data-v-0e3dc783"]]);export{B as default};
//# sourceMappingURL=Login.841cfa74.js.map
