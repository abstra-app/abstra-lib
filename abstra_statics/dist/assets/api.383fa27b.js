import{u as n}from"./router.8594d5f6.js";import{r as o,w as s}from"./runnerData.6f8d0232.js";import"./vue-router.4490dbb9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5b43d8cd-a3c6-4280-b0c3-fe27943a540f",t._sentryDebugIdIdentifier="sentry-dbid-5b43d8cd-a3c6-4280-b0c3-fe27943a540f")}catch{}})();async function d(t){const e=n(),r=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function i(){const t=n(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return s({});const r=await e.json();return s(r)}export{d as f,i as g};
//# sourceMappingURL=api.383fa27b.js.map
