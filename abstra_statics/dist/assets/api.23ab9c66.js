import{u as n}from"./index.a2a47571.js";import"./outputWidgets.0136e717.js";import{r as s,w as a}from"./runnerData.dd2208a0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="33d875bf-f247-489f-beaa-e429c8b6e00e",e._sentryDebugIdIdentifier="sentry-dbid-33d875bf-f247-489f-beaa-e429c8b6e00e")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function c(){const e=await fetch("/_workspace");if(e.status!=200)return a({});const t=await e.json();return a(t)}export{i as f,c as g};
//# sourceMappingURL=api.23ab9c66.js.map
