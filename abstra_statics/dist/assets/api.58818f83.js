import{u as n}from"./router.90fc05f0.js";import{r as o,w as a}from"./runnerData.b100387f.js";import"./vue-router.e2bf802b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dd60afde-7083-4cf9-9e20-ed2dee2e9452",e._sentryDebugIdIdentifier="sentry-dbid-dd60afde-7083-4cf9-9e20-ed2dee2e9452")}catch{}})();async function i(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:s}=await r.json();return s?o(s):null}async function c(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return a({});const r=await t.json();return a(r)}export{i as f,c as g};
//# sourceMappingURL=api.58818f83.js.map
