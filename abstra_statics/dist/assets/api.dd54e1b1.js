import{u as n}from"./index.6eea3de6.js";import"./outputWidgets.bff33647.js";import{r as s,w as a}from"./runnerData.e179cd6d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="db84f460-c223-4731-9202-c15268d5ff35",t._sentryDebugIdIdentifier="sentry-dbid-db84f460-c223-4731-9202-c15268d5ff35")}catch{}})();async function d(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status===404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return r?s(r):null}async function i(){const t=await fetch("/_workspace",{headers:n.authHeaders()});if(t.status!=200)return a({});const e=await t.json();return a(e)}export{d as f,i as g};
//# sourceMappingURL=api.dd54e1b1.js.map
