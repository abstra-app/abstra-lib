import{u as n}from"./index.fa664677.js";import"./outputWidgets.52066b3d.js";import{r as s,w as r}from"./runnerData.f5f26da4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9bf83e02-a715-4a97-9503-6b7911e27fa8",e._sentryDebugIdIdentifier="sentry-dbid-9bf83e02-a715-4a97-9503-6b7911e27fa8")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:a}=await t.json();return a?s(a):null}async function d(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return r({});const t=await e.json();return r(t)}export{i as f,d as g};
//# sourceMappingURL=api.11ebb995.js.map
