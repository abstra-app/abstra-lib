import{r,w as a}from"./runnerData.aee30097.js";import"./outputWidgets.3188a019.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1f523728-9faf-4876-a998-864cc34afee0",t._sentryDebugIdIdentifier="sentry-dbid-1f523728-9faf-4876-a998-864cc34afee0")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?r(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{f,u as g};
//# sourceMappingURL=api.06c020ac.js.map
