import{E as o,a}from"./authorManager.f943277e.js";import"./outputWidgets.e5a7a6db.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="1200e6f9-16bd-403c-992b-8c8f500dfb64",n._sentryDebugIdIdentifier="sentry-dbid-1200e6f9-16bd-403c-992b-8c8f500dfb64")}catch{}})();class r extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new r(e,t.status)}}class l{static async get(t){const s=await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).text();return s?JSON.parse(s):null}static async getBlob(t){return await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).blob()}static async post(t,e,s){const c=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${o.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...a.headers,...s},body:c?e:JSON.stringify(e)});if(!i.ok)throw await r.fromResponse(i);const p=await i.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${o.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.headers},body:JSON.stringify(e)});if(!s.ok)throw await r.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async delete(t){const e=await fetch(`${o.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.headers}});if(!e.ok)throw await r.fromResponse(e)}}export{l as C};
//# sourceMappingURL=gateway.33526140.js.map
