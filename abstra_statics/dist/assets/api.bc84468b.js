import{u as n}from"./router.bfb0225d.js";import{r as o,w as s}from"./runnerData.97d8aa21.js";import"./vue-router.70e693dc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f0708a7b-5fd9-4956-a017-e0d6596751ce",e._sentryDebugIdIdentifier="sentry-dbid-f0708a7b-5fd9-4956-a017-e0d6596751ce")}catch{}})();async function i(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function c(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return s({});const r=await t.json();return s(r)}export{i as f,c as g};
//# sourceMappingURL=api.bc84468b.js.map
