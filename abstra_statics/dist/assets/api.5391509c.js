import{u as n}from"./router.05107b8f.js";import{r as o,w as s}from"./runnerData.ec0fc6c5.js";import"./vue-router.616f09b7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5f011067-59d2-4721-8923-5b3dd1da5a43",t._sentryDebugIdIdentifier="sentry-dbid-5f011067-59d2-4721-8923-5b3dd1da5a43")}catch{}})();async function i(t){const e=n(),r=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function c(){const t=n(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return s({});const r=await e.json();return s(r)}export{i as f,c as g};
//# sourceMappingURL=api.5391509c.js.map
