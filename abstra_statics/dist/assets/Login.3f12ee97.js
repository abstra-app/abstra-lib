import{P as r}from"./Passwordless.dec7e85f.js";import{d as a,ex as i,b as d,er as c,f as s,w as _,v as m}from"./registerWidgets.ca57da3e.js";import{M as p}from"./member.31e7d30e.js";import{W as f}from"./WidgetsFrame.7a78af2f.js";import"./CircularLoading.716a5772.js";import"./icons.1efe7950.js";import"./passwordlessManager.8d47b009.js";import"./pubsub.277d05a3.js";import"./storage.2a7aac1e.js";import"./gateway.b88d532a.js";import"./activeRecord.f8743cd4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="5455584a-3069-4271-9bc3-bd08e4061abb",e._sentryDebugIdIdentifier="sentry-dbid-5455584a-3069-4271-9bc3-bd08e4061abb")}catch{}})();const l={class:"login"},u=a({__name:"Login",setup(e){const o=i();async function t(n){await p.login(),o.push({name:"home"})}return(n,b)=>(d(),c("div",l,[s(f,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(r,{class:"passwordless",onDone:t})]),_:1})]))}});const B=m(u,[["__scopeId","data-v-0e3dc783"]]);export{B as default};
//# sourceMappingURL=Login.3f12ee97.js.map
