import{u as n}from"./index.e31b8cfa.js";import"./outputWidgets.44b55c7f.js";import{r as s,w as a}from"./runnerData.b16c844c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="dfbc91dd-7100-498e-b495-724f2b3a9b28",t._sentryDebugIdIdentifier="sentry-dbid-dfbc91dd-7100-498e-b495-724f2b3a9b28")}catch{}})();async function d(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status===404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return r?s(r):null}async function i(){const t=await fetch("/_workspace",{headers:n.authHeaders()});if(t.status!=200)return a({});const e=await t.json();return a(e)}export{d as f,i as g};
//# sourceMappingURL=api.0fdee24b.js.map
