import{E as a,a as o}from"./authorManager.f240882c.js";import"./outputWidgets.ec1b7422.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="91e6bc94-6c02-4224-a43d-8ef3daf60aae",n._sentryDebugIdIdentifier="sentry-dbid-91e6bc94-6c02-4224-a43d-8ef3daf60aae")}catch{}})();class r extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new r(e,t.status)}}class l{static async get(t){const s=await(await fetch(`${a.cloudApi}/console/${t}`,{headers:{...o.headers}})).text();return s?JSON.parse(s):null}static async getBlob(t){return await(await fetch(`${a.cloudApi}/console/${t}`,{headers:{...o.headers}})).blob()}static async post(t,e,s){const c=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${a.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...o.headers,...s},body:c?e:JSON.stringify(e)});if(!i.ok)throw await r.fromResponse(i);const p=await i.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${a.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...o.headers},body:JSON.stringify(e)});if(!s.ok)throw await r.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async delete(t){const e=await fetch(`${a.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...o.headers}});if(!e.ok)throw await r.fromResponse(e)}}export{l as C};
//# sourceMappingURL=gateway.7a02c698.js.map
