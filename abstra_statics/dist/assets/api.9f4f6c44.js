import{u as n}from"./router.911a72b8.js";import{r as o,w as s}from"./runnerData.be2ae27a.js";import"./vue-router.dc261a27.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="681abae7-eab6-442a-893c-a620429c3845",e._sentryDebugIdIdentifier="sentry-dbid-681abae7-eab6-442a-893c-a620429c3845")}catch{}})();async function i(e){const t=n(),r=await fetch(`/_pages/${e}`,{headers:t.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:a}=await r.json();return a?o(a):null}async function d(){const e=n(),t=await fetch("/_workspace",{headers:e.authHeaders});if(t.status!=200)return s({});const r=await t.json();return s(r)}export{i as f,d as g};
//# sourceMappingURL=api.9f4f6c44.js.map
