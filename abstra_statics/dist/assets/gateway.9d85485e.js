import{t as i,p as r}from"./passwordlessManager.23b0b62f.js";import"./registerWidgets.f19e2bf7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0aeabbf5-5d54-447f-87c9-a655c5a82ee6",t._sentryDebugIdIdentifier="sentry-dbid-0aeabbf5-5d54-447f-87c9-a655c5a82ee6")}catch{}})();const n=i("cloud-api");class p{static async get(e){const o=await(await fetch(`${n}/console/${e}`,{headers:{...r.getUserHeaders("Author-Authorization")}})).text();return o?JSON.parse(o):null}static async post(e,s){const a=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return a?JSON.parse(a):null}static async patch(e,s){const a=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return a?JSON.parse(a):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.9d85485e.js.map
