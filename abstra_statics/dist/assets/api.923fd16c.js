import{u as n}from"./index.0ba64478.js";import"./outputWidgets.73ec338c.js";import{r as s,w as r}from"./runnerData.367c6059.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0c928474-fc0f-4c69-a1a5-44a169ebfc35",t._sentryDebugIdIdentifier="sentry-dbid-0c928474-fc0f-4c69-a1a5-44a169ebfc35")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status===404)return null;if(!e.ok)throw new Error(await e.text());const{form:a}=await e.json();return a?s(a):null}async function i(){const t=await fetch("/_workspace",{headers:n.authHeaders()});if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,i as g};
//# sourceMappingURL=api.923fd16c.js.map
