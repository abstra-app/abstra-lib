import{u as n}from"./router.f3f6518e.js";import{r as o,w as s}from"./runnerData.a1a56293.js";import"./vue-router.0a57dcef.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a51f5956-9b5c-4a3a-8cea-526a085f323a",t._sentryDebugIdIdentifier="sentry-dbid-a51f5956-9b5c-4a3a-8cea-526a085f323a")}catch{}})();async function i(t){const e=n(),a=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(a.status===404)return null;if(!a.ok)throw new Error(await a.text());const{form:r}=await a.json();return r?o(r):null}async function d(){const t=n(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return s({});const a=await e.json();return s(a)}export{i as f,d as g};
//# sourceMappingURL=api.bf358ec5.js.map
