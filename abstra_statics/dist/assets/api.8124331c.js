import{u as n}from"./router.8989a2d9.js";import{r as o,w as s}from"./runnerData.07eb0d45.js";import"./vue-router.f5fbd672.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5a178b29-b1c6-42dc-a9e6-ffdb10cfcd74",t._sentryDebugIdIdentifier="sentry-dbid-5a178b29-b1c6-42dc-a9e6-ffdb10cfcd74")}catch{}})();async function d(t){const e=n(),r=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function i(){const t=n(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return s({});const r=await e.json();return s(r)}export{d as f,i as g};
//# sourceMappingURL=api.8124331c.js.map
