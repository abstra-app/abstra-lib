import{u as n}from"./index.2fb6e5c9.js";import"./outputWidgets.5cb6b216.js";import{r as s,w as a}from"./runnerData.85c900be.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="094bd69f-2e8e-46e0-9cd1-830de159a797",e._sentryDebugIdIdentifier="sentry-dbid-094bd69f-2e8e-46e0-9cd1-830de159a797")}catch{}})();async function d(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace");if(e.status!=200)return a({});const t=await e.json();return a(t)}export{d as f,i as g};
//# sourceMappingURL=api.6e40a0a1.js.map
