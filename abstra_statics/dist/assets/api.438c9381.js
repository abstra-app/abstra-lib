import{u as n}from"./index.5f78fdbd.js";import"./outputWidgets.0bd4d0d9.js";import{r as s,w as a}from"./runnerData.445399e4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7409542c-7d96-46ae-8699-fdd7282ec29f",e._sentryDebugIdIdentifier="sentry-dbid-7409542c-7d96-46ae-8699-fdd7282ec29f")}catch{}})();async function d(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function i(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return a({});const t=await e.json();return a(t)}export{d as f,i as g};
//# sourceMappingURL=api.438c9381.js.map
