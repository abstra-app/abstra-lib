import{P as a}from"./Passwordless.a8c200db.js";import{d as r,ex as i,b as d,er as c,f as s,w as _,v as m}from"./registerWidgets.3fe3e574.js";import{M as f}from"./member.6fccce1f.js";import{W as p}from"./WidgetsFrame.08f25a72.js";import"./CircularLoading.cc1808db.js";import"./icons.3f547329.js";import"./passwordlessManager.0b9af8aa.js";import"./pubsub.6dbde606.js";import"./storage.478cbdcc.js";import"./gateway.86056aac.js";import"./activeRecord.1c8420b0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="bb07ae20-0198-4195-a895-7fbb0e3aa7c5",e._sentryDebugIdIdentifier="sentry-dbid-bb07ae20-0198-4195-a895-7fbb0e3aa7c5")}catch{}})();const l={class:"login"},u=r({__name:"Login",setup(e){const o=i();async function t(n){await f.login(),o.push({name:"home"})}return(n,b)=>(d(),c("div",l,[s(p,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(a,{class:"passwordless",onDone:t})]),_:1})]))}});const B=m(u,[["__scopeId","data-v-0e3dc783"]]);export{B as default};
//# sourceMappingURL=Login.c278b885.js.map
