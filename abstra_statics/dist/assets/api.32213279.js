import{u as n}from"./router.7c1537a0.js";import{r as o,w as s}from"./runnerData.f0908242.js";import"./vue-router.53e7a74d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="213b2756-5d28-4520-af01-e25fa6df9560",t._sentryDebugIdIdentifier="sentry-dbid-213b2756-5d28-4520-af01-e25fa6df9560")}catch{}})();async function i(t){const e=n(),r=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function c(){const t=n(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return s({});const r=await e.json();return s(r)}export{i as f,c as g};
//# sourceMappingURL=api.32213279.js.map
