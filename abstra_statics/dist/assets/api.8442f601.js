import{u as n}from"./router.55b33832.js";import{r as o,w as s}from"./runnerData.0a90c23e.js";import"./vue-router.4fd4520f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d967b52e-3a09-41e4-bfa9-a17ba857855a",e._sentryDebugIdIdentifier="sentry-dbid-d967b52e-3a09-41e4-bfa9-a17ba857855a")}catch{}})();async function d(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function c(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return s({});const r=await t.json();return s(r)}export{d as f,c as g};
//# sourceMappingURL=api.8442f601.js.map
