import{P as r}from"./Passwordless.387d64d8.js";import{d as a,ex as d,b as i,er as c,f as s,w as _,v as f}from"./registerWidgets.53633c61.js";import{M as m}from"./member.9476e546.js";import{W as p}from"./WidgetsFrame.058a32b1.js";import"./CircularLoading.4275dc3f.js";import"./icons.ac8576ed.js";import"./passwordlessManager.dc3e2d25.js";import"./pubsub.fed97ffe.js";import"./storage.72bab494.js";import"./gateway.40633b6e.js";import"./activeRecord.0d1f1b92.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2aeb34df-4a2d-457c-bfe1-e0901074e9c6",e._sentryDebugIdIdentifier="sentry-dbid-2aeb34df-4a2d-457c-bfe1-e0901074e9c6")}catch{}})();const l={class:"login"},u=a({__name:"Login",setup(e){const o=d();async function t(n){await m.login(),o.push({name:"home"})}return(n,b)=>(i(),c("div",l,[s(p,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(r,{class:"passwordless",onDone:t})]),_:1})]))}});const B=f(u,[["__scopeId","data-v-0e3dc783"]]);export{B as default};
//# sourceMappingURL=Login.1c8b95b7.js.map
