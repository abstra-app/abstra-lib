var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var h=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{p as y}from"./popupNotifcation.07100d88.js";import{L as b,N as E,O as A,l as d}from"./vue-router.0f0de372.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3aa3ec93-c50c-45aa-9aec-3dceca85719a",e._sentryDebugIdIdentifier="sentry-dbid-3aa3ec93-c50c-45aa-9aec-3dceca85719a")}catch{}})();class m{constructor(){h(this,"storage");this.storage=new b(E.string(),"auth:jwt")}async authenticate(t){f.post("authn/authenticate",{email:t})}async verify(t,o){const a=await f.post("authn/verify",{email:t,token:o});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const o=A(t);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:t,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new m,T=()=>window.location.host.includes(".abstra.io"),R={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},O={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},l=e=>{const t="VITE_"+d.toUpper(d.snakeCase(e)),o={VITE_SENTRY_RELEASE:"708d5a4835ee4bb74922d95730147393c4809135",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return o||(T()?R[e]:O[e])},i={cloudApi:l("cloud-api"),onboarding:l("onboarding")};class u extends Error{constructor(t,o){super(t),this.status=o}static async fromResponse(t){const o=await t.text();return new u(o,t.status)}}class f{static async get(t,o){const a=Object.fromEntries(Object.entries(o!=null?o:{}).filter(([,p])=>p!=null)),n=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${i.cloudApi}/console/${t}${n}`,{headers:{...c.headers}});if(s.status===403){y("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await s.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${i.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,o,a){const n=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${i.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...a},body:n?o:JSON.stringify(o)});if(!s.ok)throw await u.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async patch(t,o){const a=await fetch(`${i.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(o)});if(!a.ok)throw await u.fromResponse(a);const n=await a.text();return n?JSON.parse(n):null}static async delete(t){const o=await fetch(`${i.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!o.ok)throw await u.fromResponse(o)}}export{f as C,i as E,c as a};
//# sourceMappingURL=gateway.f14ba533.js.map
