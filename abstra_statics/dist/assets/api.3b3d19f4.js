import{r,w as a}from"./runnerData.1b1074af.js";import"./outputWidgets.3cdd28c7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a79cde4c-19c5-4e2a-99e9-a1f2e8d87759",t._sentryDebugIdIdentifier="sentry-dbid-a79cde4c-19c5-4e2a-99e9-a1f2e8d87759")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?r(n):null}async function f(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{c as f,f as g};
//# sourceMappingURL=api.3b3d19f4.js.map
