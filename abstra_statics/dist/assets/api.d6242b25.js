import{u as n}from"./index.5ab35606.js";import"./outputWidgets.9c82af3f.js";import{r as s,w as r}from"./runnerData.a6942e85.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="24eac031-deec-424f-a5e2-1aea31830f28",e._sentryDebugIdIdentifier="sentry-dbid-24eac031-deec-424f-a5e2-1aea31830f28")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:a}=await t.json();return a?s(a):null}async function c(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return r({});const t=await e.json();return r(t)}export{i as f,c as g};
//# sourceMappingURL=api.d6242b25.js.map
