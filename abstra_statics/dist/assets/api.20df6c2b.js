import{u as n}from"./index.c7ce6f1a.js";import"./outputWidgets.8e22ccc1.js";import{r as s,w as a}from"./runnerData.1d025816.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="382d7ae7-58ee-4333-890b-0b2d8b5f6a83",e._sentryDebugIdIdentifier="sentry-dbid-382d7ae7-58ee-4333-890b-0b2d8b5f6a83")}catch{}})();async function d(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return a({});const t=await e.json();return a(t)}export{d as f,i as g};
//# sourceMappingURL=api.20df6c2b.js.map
