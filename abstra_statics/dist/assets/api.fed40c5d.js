import{u as n}from"./router.142fcc1c.js";import{r as o,w as s}from"./runnerData.5c6d9896.js";import"./vue-router.67809441.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="be9a62c0-8a34-485d-98fe-b5a0cffbdcca",e._sentryDebugIdIdentifier="sentry-dbid-be9a62c0-8a34-485d-98fe-b5a0cffbdcca")}catch{}})();async function d(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function i(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return s({});const r=await t.json();return s(r)}export{d as f,i as g};
//# sourceMappingURL=api.fed40c5d.js.map
