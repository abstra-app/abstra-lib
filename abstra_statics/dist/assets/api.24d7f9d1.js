import{r as a,w as r}from"./runnerData.6ec10891.js";import"./outputWidgets.b3823c49.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="db8d75ce-ccf8-4bb5-acf4-10059c6bef1b",t._sentryDebugIdIdentifier="sentry-dbid-db8d75ce-ccf8-4bb5-acf4-10059c6bef1b")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function f(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,f as g};
//# sourceMappingURL=api.24d7f9d1.js.map
