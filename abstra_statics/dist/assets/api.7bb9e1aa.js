import{u as n}from"./index.3b5830df.js";import"./outputWidgets.6fa937e8.js";import{r as s,w as a}from"./runnerData.846199eb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="525e3140-43d8-48ab-9808-29c0e595b80c",t._sentryDebugIdIdentifier="sentry-dbid-525e3140-43d8-48ab-9808-29c0e595b80c")}catch{}})();async function i(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return r?s(r):null}async function c(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{i as f,c as g};
//# sourceMappingURL=api.7bb9e1aa.js.map
