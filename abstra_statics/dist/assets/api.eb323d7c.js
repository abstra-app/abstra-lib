import{u as a}from"./index.5912e808.js";import"./outputWidgets.6e1c5425.js";import{r as s,w as n}from"./runnerData.dbd7d7cb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d1c75401-d710-489b-8280-b6609ed5c868",t._sentryDebugIdIdentifier="sentry-dbid-d1c75401-d710-489b-8280-b6609ed5c868")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`,{headers:a.authHeaders()});if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return r?s(r):null}async function i(){const t=await fetch("/_workspace");if(t.status!=200)return n({});const e=await t.json();return n(e)}export{f,i as g};
//# sourceMappingURL=api.eb323d7c.js.map
