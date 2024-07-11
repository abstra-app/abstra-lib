var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var d=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{l as h,L as y,N as b,O as E}from"./vue-router.02a7190d.js";import{p as m}from"./popupNotifcation.9941b185.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cf0cc39c-4c40-489b-a78c-3b046a6457c6",e._sentryDebugIdIdentifier="sentry-dbid-cf0cc39c-4c40-489b-a78c-3b046a6457c6")}catch{}})();const A=()=>window.location.host.includes(".abstra.io"),T={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},R={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},l=e=>{const t="VITE_"+h.toUpper(h.snakeCase(e)),o={VITE_SENTRY_RELEASE:"718d61d643937f7f5d55a3f4d76b8ec15ddcd2f3",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return o||(A()?T[e]:R[e])},c={cloudApi:l("cloud-api"),onboarding:l("onboarding")};class O{constructor(){d(this,"storage");this.storage=new y(b.string(),"auth:jwt")}async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(o){return o.message}}async verify(t,o){const n=await f.post("authn/verify",{email:t,token:o});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const o=E(t);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:t,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const i=new O;class u extends Error{constructor(t,o){super(t),this.status=o}static async fromResponse(t){const o=await t.text();return new u(o,t.status)}}class f{static async get(t,o){const n=Object.fromEntries(Object.entries(o!=null?o:{}).filter(([,p])=>p!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await fetch(`${c.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(a.status===403){m("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${c.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,o,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",a=await fetch(`${c.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?o:JSON.stringify(o)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,o){const n=await fetch(`${c.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(o)});if(!n.ok)throw await u.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const o=await fetch(`${c.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!o.ok)throw await u.fromResponse(o)}}export{f as C,c as E,i as a};
//# sourceMappingURL=gateway.54d9c77b.js.map
