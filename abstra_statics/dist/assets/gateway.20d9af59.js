import{t as i,p as n}from"./passwordlessManager.63c7fadc.js";import"./registerWidgets.92ed860b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4f4f2019-428d-46ed-906f-760c672f2dff",t._sentryDebugIdIdentifier="sentry-dbid-4f4f2019-428d-46ed-906f-760c672f2dff")}catch{}})();const a=i("cloud-api");class f{static async get(e){const r=await(await fetch(`${a}/console/${e}`,{headers:{...n.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${a}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${a}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${a}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")}})}}export{f as C};
//# sourceMappingURL=gateway.20d9af59.js.map
