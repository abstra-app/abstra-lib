import{P as r}from"./Passwordless.16ef3609.js";import{d as a,ex as i,b as d,c,e as s,eq as _,t as m}from"./registerWidgets.741285ec.js";import{M as p}from"./member.00d664f8.js";import{W as f}from"./WidgetsFrame.1fc48b45.js";import"./CircularLoading.44168101.js";import"./lottie.328c76bf.js";import"./icons.ed9d50ce.js";import"./passwordlessManager.4e0d9cdd.js";import"./pubsub.39950b93.js";import"./storage.78bb442d.js";import"./gateway.67005156.js";import"./activeRecord.e8c62713.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="185a584a-2b29-487d-99b0-b5809c6f5c99",e._sentryDebugIdIdentifier="sentry-dbid-185a584a-2b29-487d-99b0-b5809c6f5c99")}catch{}})();const l={class:"login"},u=a({__name:"Login",setup(e){const o=i();async function t(n){await p.login(),o.push({name:"home"})}return(n,b)=>(d(),c("div",l,[s(f,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(r,{class:"passwordless",onDone:t})]),_:1})]))}});const C=m(u,[["__scopeId","data-v-0e3dc783"]]);export{C as default};
//# sourceMappingURL=Login.756d7131.js.map
