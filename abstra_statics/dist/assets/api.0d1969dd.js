import{u as n}from"./router.bd078570.js";import{r as o,w as s}from"./runnerData.be9fb2c2.js";import"./vue-router.6e0620f9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8295ae6a-876c-4f00-9bf3-3fa355e74c68",e._sentryDebugIdIdentifier="sentry-dbid-8295ae6a-876c-4f00-9bf3-3fa355e74c68")}catch{}})();async function i(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function d(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return s({});const r=await t.json();return s(r)}export{i as f,d as g};
//# sourceMappingURL=api.0d1969dd.js.map
