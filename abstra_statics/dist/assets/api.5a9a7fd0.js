import{u as a}from"./router.5c9037bf.js";import{r as o,w as n}from"./runnerData.a05d4a6e.js";import"./vue-router.77c5f93d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="18253ff5-dc52-4e3b-8165-683510487bdd",t._sentryDebugIdIdentifier="sentry-dbid-18253ff5-dc52-4e3b-8165-683510487bdd")}catch{}})();async function i(t){const e=a(),r=await fetch(`/_pages/${t}`,{headers:e.authHeaders});if(r.status===404)return null;if(!r.ok)throw new Error(await r.text());const{form:s}=await r.json();return s?o(s):null}async function c(){const t=a(),e=await fetch("/_workspace",{headers:t.authHeaders});if(e.status!=200)return n({});const r=await e.json();return n(r)}export{i as f,c as g};
//# sourceMappingURL=api.5a9a7fd0.js.map
