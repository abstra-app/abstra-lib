import{u as n}from"./router.257cf194.js";import{r as o,w as a}from"./runnerData.d87c52fb.js";import"./vue-router.c2ee0e91.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c1b6f82c-a967-4259-884f-414c42595771",t._sentryDebugIdIdentifier="sentry-dbid-c1b6f82c-a967-4259-884f-414c42595771")}catch{}})();async function i(t){const e=n(),r=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:s}=await r.json();return s?o(s):null}async function d(){const t=n(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return a({});const r=await e.json();return a(r)}export{i as f,d as g};
//# sourceMappingURL=api.b2714b60.js.map
