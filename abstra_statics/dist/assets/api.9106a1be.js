import{u as n}from"./index.5b8dff4d.js";import"./outputWidgets.049ac64d.js";import{r as s,w as r}from"./runnerData.ea577873.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a0f41b67-89d3-40e7-a317-607ea2956806",e._sentryDebugIdIdentifier="sentry-dbid-a0f41b67-89d3-40e7-a317-607ea2956806")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:a}=await t.json();return a?s(a):null}async function d(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return r({});const t=await e.json();return r(t)}export{i as f,d as g};
//# sourceMappingURL=api.9106a1be.js.map
