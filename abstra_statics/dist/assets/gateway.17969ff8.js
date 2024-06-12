var f=Object.defineProperty;var w=(o,t,e)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(w(o,typeof t!="symbol"?t+"":t,e),e);import{c$ as p,L as y,z as g,t as b}from"./outputWidgets.816c4ca1.js";import{p as E}from"./popupNotifcation.9a6282dc.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="78c2975d-531e-4ea3-9410-4aba0a4e96ea",o._sentryDebugIdIdentifier="sentry-dbid-78c2975d-531e-4ea3-9410-4aba0a4e96ea")}catch{}})();const m=()=>window.location.host.includes(".abstra.io"),A={"cloud-api":"/api/cloud-api"},T={"cloud-api":"https://cloud-api.abstra.cloud"},R=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"ad1fff3bbe590535726d42a566bd3d8f902d3621",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(m()?A[o]:T[o])},i={cloudApi:R("cloud-api")};class ${constructor(){h(this,"storage");this.storage=new y(g.string(),"auth:jwt")}async authenticate(t){try{return await d.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await d.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new $;class u extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new u(e,t.status)}}class d{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,l])=>l!=null)),n=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",a=await fetch(`${i.cloudApi}/console/${t}${n}`,{headers:{...c.headers}});if(a.status===403){E("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await a.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${i.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const n=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",a=await fetch(`${i.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:n?e:JSON.stringify(e)});if(!a.ok)throw await u.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async patch(t,e){const s=await fetch(`${i.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await u.fromResponse(s);const n=await s.text();return n?JSON.parse(n):null}static async delete(t){const e=await fetch(`${i.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await u.fromResponse(e)}}export{d as C,c as a};
//# sourceMappingURL=gateway.17969ff8.js.map
