import{u as n}from"./index.7266a3b4.js";import"./outputWidgets.548e4895.js";import{r as s,w as r}from"./runnerData.e571f00b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="f949aa40-9171-4262-aa34-4a0db869bca8",a._sentryDebugIdIdentifier="sentry-dbid-f949aa40-9171-4262-aa34-4a0db869bca8")}catch{}})();async function i(a){const t=await fetch(`/_pages/${a}`,{headers:n.authHeaders()});if(t.status===404)return null;if(!t.ok)throw new Error(await t.text());const{form:e}=await t.json();return e?s(e):null}async function d(){const a=await fetch("/_workspace",{headers:n.authHeaders()});if(a.status!=200)return r({});const t=await a.json();return r(t)}export{i as f,d as g};
//# sourceMappingURL=api.33013f8f.js.map
