var w=Object.defineProperty;var b=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var d=(o,t,e)=>(b(o,typeof t!="symbol"?t+"":t,e),e);import{l as h,L as g,N as y,O as E}from"./vue-router.53e7a74d.js";import{p as m}from"./popupNotifcation.49bd9371.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="dd45d341-1234-451c-b78b-e446332b700b",o._sentryDebugIdIdentifier="sentry-dbid-dd45d341-1234-451c-b78b-e446332b700b")}catch{}})();const A=()=>window.location.host.includes(".abstra.io"),T={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},R={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},l=o=>{const t="VITE_"+h.toUpper(h.snakeCase(o)),e={VITE_SENTRY_RELEASE:"46e3bf98517ee34b6f197ce9b47fe06516bf5ded",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(A()?T[o]:R[o])},i={cloudApi:l("cloud-api"),onboarding:l("onboarding")};class O{constructor(){d(this,"storage");this.storage=new g(y.string(),"auth:jwt")}async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await f.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=E(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new O;class u extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new u(e,t.status)}}class f{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,p])=>p!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await fetch(`${i.cloudApi}/console/${t}${s}`,{headers:{...c.headers}});if(a.status===403){m("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${i.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",a=await fetch(`${i.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:s?e:JSON.stringify(e)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,e){const n=await fetch(`${i.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await u.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${i.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await u.fromResponse(e)}}export{f as C,i as E,c as a};
//# sourceMappingURL=gateway.628e8e36.js.map
