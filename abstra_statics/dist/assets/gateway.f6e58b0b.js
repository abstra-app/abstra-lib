import{t as i,p as a}from"./passwordlessManager.db68ed1a.js";import"./registerWidgets.fc9d5fd6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ef8ad0d0-7f9c-4c1f-950d-da0c352b324f",t._sentryDebugIdIdentifier="sentry-dbid-ef8ad0d0-7f9c-4c1f-950d-da0c352b324f")}catch{}})();const n=i("cloud-api");class f{static async get(e){const r=await(await fetch(`${n}/console/${e}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}})}}export{f as C};
//# sourceMappingURL=gateway.f6e58b0b.js.map
