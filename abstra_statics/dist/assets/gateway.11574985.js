import{E as r,a as c}from"./console.ddba2fe3.js";import"./outputWidgets.9c7319a3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="8019e25c-7830-434c-9d16-cbce2042b27b",o._sentryDebugIdIdentifier="sentry-dbid-8019e25c-7830-434c-9d16-cbce2042b27b")}catch{}})();class a extends Error{constructor(e,t){super(e),this.status=t}static async fromResponse(e){const t=await e.text();return new a(t,e.status)}}class p{static async get(e){const s=await(await fetch(`${r.cloudApi}/console/${e}`,{headers:{...c.headers}})).text();return s?JSON.parse(s):null}static async post(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(t)});if(!s.ok)throw await a.fromResponse(s);const n=await s.text();return n?JSON.parse(n):null}static async patch(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(t)});if(!s.ok)throw await a.fromResponse(s);const n=await s.text();return n?JSON.parse(n):null}static async delete(e){const t=await fetch(`${r.cloudApi}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!t.ok)throw await a.fromResponse(t)}}export{p as C};
//# sourceMappingURL=gateway.11574985.js.map
