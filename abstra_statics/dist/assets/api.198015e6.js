import{u as n}from"./index.327660a7.js";import"./outputWidgets.4fd444bf.js";import{r as s,w as a}from"./runnerData.aa5f670f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c1c4f924-a810-46c4-8279-d50b41335405",t._sentryDebugIdIdentifier="sentry-dbid-c1c4f924-a810-46c4-8279-d50b41335405")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`,{headers:n.authHeaders()});if(e.status===404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return r?s(r):null}async function i(){const t=await fetch("/_workspace",{headers:n.authHeaders()});if(t.status!=200)return a({});const e=await t.json();return a(e)}export{c as f,i as g};
//# sourceMappingURL=api.198015e6.js.map
