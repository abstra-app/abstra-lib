import{t as i,p as a}from"./passwordlessManager.914ef4f9.js";import"./registerWidgets.dc0b6768.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c57f7911-e595-4940-805a-d395f5bf49a7",t._sentryDebugIdIdentifier="sentry-dbid-c57f7911-e595-4940-805a-d395f5bf49a7")}catch{}})();const n=i("cloud-api");class p{static async get(e){const r=await(await fetch(`${n}/console/${e}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.320dd104.js.map
