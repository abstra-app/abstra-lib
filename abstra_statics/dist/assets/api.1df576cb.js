import{u as n}from"./index.ff51506b.js";import"./outputWidgets.c3ee551f.js";import{r as s,w as r}from"./runnerData.26baf049.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b4a58623-eeb5-4034-b81e-5a6abb4e8667",e._sentryDebugIdIdentifier="sentry-dbid-b4a58623-eeb5-4034-b81e-5a6abb4e8667")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:a}=await t.json();return a?s(a):null}async function c(){const e=await fetch("/_workspace");if(e.status!=200)return r({});const t=await e.json();return r(t)}export{i as f,c as g};
//# sourceMappingURL=api.1df576cb.js.map
