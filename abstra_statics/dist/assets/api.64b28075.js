import{s as a}from"./schema.0f54a7b2.js";import"./outputWidgets.e46e0ded.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="16211f2e-c18f-46f1-8ec4-9ab94eefa748",t._sentryDebugIdIdentifier="sentry-dbid-16211f2e-c18f-46f1-8ec4-9ab94eefa748")}catch{}})();const s={"Content-Type":"application/json"},f="abstra-run-id";class d{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const o=await e.json();return a.parse(o)}else throw new Error("Failed to fetch initial data")}async update(e){const o=await fetch("/_editor/api/workflows",{method:"PUT",headers:s,body:JSON.stringify(e)});if(o.ok){const n=await o.json();return a.parse(n)}else throw new Error("Failed to update workflow")}}export{f as A,d as W};
//# sourceMappingURL=api.64b28075.js.map
