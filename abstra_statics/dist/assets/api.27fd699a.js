import{r as a,w as r}from"./runnerData.d0b2e6b8.js";import"./outputWidgets.b4e7bc36.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="de83774c-50e4-42b7-b436-5f0d44a69595",t._sentryDebugIdIdentifier="sentry-dbid-de83774c-50e4-42b7-b436-5f0d44a69595")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{f,u as g};
//# sourceMappingURL=api.27fd699a.js.map
