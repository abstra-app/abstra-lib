import{u as n}from"./index.98d02c55.js";import"./outputWidgets.a6a6ef30.js";import{r as s,w as r}from"./runnerData.09340835.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ae118e70-1c3a-4276-a188-1213a5148224",e._sentryDebugIdIdentifier="sentry-dbid-ae118e70-1c3a-4276-a188-1213a5148224")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:a}=await t.json();return a?s(a):null}async function c(){const e=await fetch("/_workspace",{headers:n.authHeaders()});if(e.status!=200)return r({});const t=await e.json();return r(t)}export{i as f,c as g};
//# sourceMappingURL=api.734f41cc.js.map
