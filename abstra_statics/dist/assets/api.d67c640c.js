import{r,w as a}from"./runnerData.c27de2b9.js";import"./outputWidgets.6a7b2974.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0644762a-023d-4e57-8224-1dba0341cdda",t._sentryDebugIdIdentifier="sentry-dbid-0644762a-023d-4e57-8224-1dba0341cdda")}catch{}})();async function d(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?r(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{d as f,u as g};
//# sourceMappingURL=api.d67c640c.js.map
