import{u as n}from"./index.46734ac4.js";import"./outputWidgets.e8054ca7.js";import{r as s,w as a}from"./runnerData.cfe8cfe4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3225c703-41e6-4ff0-a752-8cce73f984af",t._sentryDebugIdIdentifier="sentry-dbid-3225c703-41e6-4ff0-a752-8cce73f984af")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return r?s(r):null}async function i(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{c as f,i as g};
//# sourceMappingURL=api.dd1ba22e.js.map
