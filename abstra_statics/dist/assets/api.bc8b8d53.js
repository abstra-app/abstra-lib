import{u as n}from"./index.1a93e2de.js";import"./outputWidgets.abde7be7.js";import{r as s,w as r}from"./runnerData.ab456c17.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0a50077a-96c9-44b2-8163-7adb80d291ad",t._sentryDebugIdIdentifier="sentry-dbid-0a50077a-96c9-44b2-8163-7adb80d291ad")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status===404)return null;if(!e.ok)throw new Error(await e.text());const{form:a}=await e.json();return a?s(a):null}async function i(){const t=await fetch("/_workspace",{headers:n.authHeaders()});if(t.status!=200)return r({});const e=await t.json();return r(e)}export{f,i as g};
//# sourceMappingURL=api.bc8b8d53.js.map
