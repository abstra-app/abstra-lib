import{u as n}from"./index.5bbf94f8.js";import"./outputWidgets.825b0b2c.js";import{r as s,w as a}from"./runnerData.865a7185.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ff00c331-368f-4fa3-af20-eb22bc8422ec",e._sentryDebugIdIdentifier="sentry-dbid-ff00c331-368f-4fa3-af20-eb22bc8422ec")}catch{}})();async function c(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return a({});const t=await e.json();return a(t)}export{c as f,i as g};
//# sourceMappingURL=api.97dc5c07.js.map
