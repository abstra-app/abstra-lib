import{u as n}from"./index.ddadd07a.js";import"./outputWidgets.fc0873ad.js";import{r as s,w as a}from"./runnerData.6681fc07.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3512cb3c-4208-4d12-a9e3-f26551e460e1",e._sentryDebugIdIdentifier="sentry-dbid-3512cb3c-4208-4d12-a9e3-f26551e460e1")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function c(){const e=await fetch("/_workspace");if(e.status!=200)return a({});const t=await e.json();return a(t)}export{i as f,c as g};
//# sourceMappingURL=api.92a28a15.js.map
