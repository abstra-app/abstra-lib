import{u as n}from"./index.f6d662ae.js";import"./outputWidgets.c3ecc2b1.js";import{r as s,w as a}from"./runnerData.cce2cc97.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d02efee8-8d3d-4e42-9bd6-322a737399e8",e._sentryDebugIdIdentifier="sentry-dbid-d02efee8-8d3d-4e42-9bd6-322a737399e8")}catch{}})();async function f(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return a({});const t=await e.json();return a(t)}export{f,i as g};
//# sourceMappingURL=api.c4ba2031.js.map
