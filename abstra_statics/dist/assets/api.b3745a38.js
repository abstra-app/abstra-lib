import{u as n}from"./index.5412b6f4.js";import"./outputWidgets.412702ce.js";import{r as s,w as a}from"./runnerData.4c02e902.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="83526e58-feb4-4f10-898a-feea6fed08e9",e._sentryDebugIdIdentifier="sentry-dbid-83526e58-feb4-4f10-898a-feea6fed08e9")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function d(){const e=await fetch("/_workspace");if(e.status!=200)return a({});const t=await e.json();return a(t)}export{i as f,d as g};
//# sourceMappingURL=api.b3745a38.js.map
