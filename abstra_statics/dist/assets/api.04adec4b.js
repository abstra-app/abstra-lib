import{u as n}from"./index.cff85d26.js";import"./outputWidgets.012e2b35.js";import{r as s,w as a}from"./runnerData.fdfd757a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="465869b6-7256-497c-89ec-538958fcea25",e._sentryDebugIdIdentifier="sentry-dbid-465869b6-7256-497c-89ec-538958fcea25")}catch{}})();async function c(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return a({});const t=await e.json();return a(t)}export{c as f,i as g};
//# sourceMappingURL=api.04adec4b.js.map
