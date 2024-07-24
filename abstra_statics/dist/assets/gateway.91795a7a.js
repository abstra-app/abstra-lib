var w=Object.defineProperty;var g=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var p=(o,t,e)=>(g(o,typeof t!="symbol"?t+"":t,e),e);import{l as h,L as y,N as b,O as E}from"./vue-router.70fdc9ff.js";import{p as m}from"./popupNotifcation.7af83e7d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c3bfde43-3eed-4e2f-8cbd-f7942ed37c65",o._sentryDebugIdIdentifier="sentry-dbid-c3bfde43-3eed-4e2f-8cbd-f7942ed37c65")}catch{}})();const A=()=>window.location.host.includes(".abstra.io"),T={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},R={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},l=o=>{const t="VITE_"+h.toUpper(h.snakeCase(o)),e={VITE_SENTRY_RELEASE:"6d980437002c1fced02251347af085dc801621cd",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(A()?T[o]:R[o])},c={cloudApi:l("cloud-api"),onboarding:l("onboarding")};class O{constructor(){p(this,"storage");this.storage=new y(b.string(),"auth:jwt")}async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await f.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=E(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const i=new O;class u extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new u(e,t.status)}}class f{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,d])=>d!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await fetch(`${c.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(a.status===403){m("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${c.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",a=await fetch(`${c.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,e){const n=await fetch(`${c.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await u.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${c.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await u.fromResponse(e)}}export{f as C,c as E,i as a};
//# sourceMappingURL=gateway.91795a7a.js.map
