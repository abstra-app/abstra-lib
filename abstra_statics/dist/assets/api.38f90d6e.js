import{u as n}from"./index.2bb2136b.js";import"./outputWidgets.7250f034.js";import{r as s,w as a}from"./runnerData.f81eee1f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fb3fe55c-8f30-4c23-ac28-ef284ea371ef",e._sentryDebugIdIdentifier="sentry-dbid-fb3fe55c-8f30-4c23-ac28-ef284ea371ef")}catch{}})();async function c(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace");if(e.status!=200)return a({});const t=await e.json();return a(t)}export{c as f,i as g};
//# sourceMappingURL=api.38f90d6e.js.map
