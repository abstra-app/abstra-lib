import{u as n}from"./index.eeefb8ff.js";import"./outputWidgets.0bd628c7.js";import{r as s,w as r}from"./runnerData.5d5e9aea.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9bdf237b-e6fc-4a7a-8e44-069e79a5050c",e._sentryDebugIdIdentifier="sentry-dbid-9bdf237b-e6fc-4a7a-8e44-069e79a5050c")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:a}=await t.json();return a?s(a):null}async function c(){const e=await fetch("/_workspace");if(e.status!=200)return r({});const t=await e.json();return r(t)}export{i as f,c as g};
//# sourceMappingURL=api.3b384f52.js.map
