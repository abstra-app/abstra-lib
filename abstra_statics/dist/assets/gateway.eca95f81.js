var w=Object.defineProperty;var g=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var d=(o,t,e)=>(g(o,typeof t!="symbol"?t+"":t,e),e);import{p as y}from"./popupNotifcation.34028c2a.js";import{L as b,N as E,O as A,l as h}from"./vue-router.3ce6ce00.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="8aa79e70-d805-402b-ae90-cfdcb9b6fcfd",o._sentryDebugIdIdentifier="sentry-dbid-8aa79e70-d805-402b-ae90-cfdcb9b6fcfd")}catch{}})();class m{constructor(){d(this,"storage");this.storage=new b(E.string(),"auth:jwt")}async authenticate(t){f.post("authn/authenticate",{email:t})}async verify(t,e){const n=await f.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=A(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const i=new m,T=()=>window.location.host.includes(".abstra.io"),R={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},O={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},l=o=>{const t="VITE_"+h.toUpper(h.snakeCase(o)),e={VITE_SENTRY_RELEASE:"9e7c066e4e2560191ec1a69ac507ec58463863b7",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(T()?R[o]:O[o])},c={cloudApi:l("cloud-api"),onboarding:l("onboarding")};class u extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new u(e,t.status)}}class f{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,p])=>p!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await fetch(`${c.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(a.status===403){y("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${c.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",a=await fetch(`${c.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,e){const n=await fetch(`${c.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await u.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${c.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await u.fromResponse(e)}}export{f as C,c as E,i as a};
//# sourceMappingURL=gateway.eca95f81.js.map
