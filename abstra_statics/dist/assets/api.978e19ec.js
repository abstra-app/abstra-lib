import{u as n}from"./index.0d56c0e2.js";import"./outputWidgets.dba3bb2c.js";import{r as s,w as r}from"./runnerData.6a3a6a06.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3cfd6401-8165-4a88-aa0e-0edfdf74c52b",t._sentryDebugIdIdentifier="sentry-dbid-3cfd6401-8165-4a88-aa0e-0edfdf74c52b")}catch{}})();async function d(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:a}=await e.json();return a?s(a):null}async function i(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{d as f,i as g};
//# sourceMappingURL=api.978e19ec.js.map
