import{E as r,a as i}from"./router.922aeec9.js";import"./outputWidgets.efa87d6e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="7346d726-e0a5-4c6e-8a0c-e3512eaa7878",a._sentryDebugIdIdentifier="sentry-dbid-7346d726-e0a5-4c6e-8a0c-e3512eaa7878")}catch{}})();class n extends Error{constructor(e,t){super(e),this.status=t}static async fromResponse(e){const t=await e.text();return new n(t,e.status)}}class p{static async get(e){const s=await(await fetch(`${r.cloudApi}/console/${e}`,{headers:{...i.headers}})).text();return s?JSON.parse(s):null}static async post(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const o=await s.text();return o?JSON.parse(o):null}static async patch(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const o=await s.text();return o?JSON.parse(o):null}static async delete(e){const t=await fetch(`${r.cloudApi}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!t.ok)throw await n.fromResponse(t)}}export{p as C};
//# sourceMappingURL=gateway.000b1710.js.map
