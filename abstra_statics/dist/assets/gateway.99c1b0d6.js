var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var h=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{c$ as l,L as y,z as b,t as E}from"./outputWidgets.26554232.js";import{p as m}from"./popupNotifcation.ed054a9a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b3089fc0-0064-4a15-bf43-57da0a82aac1",e._sentryDebugIdIdentifier="sentry-dbid-b3089fc0-0064-4a15-bf43-57da0a82aac1")}catch{}})();const A=()=>window.location.host.includes(".abstra.io"),T={"cloud-api":"/api/cloud-api",onboarding:"https://onboarding.abstra.app"},R={"cloud-api":"https://cloud-api.abstra.cloud",onboarding:"https://onboarding.abstra.app"},d=e=>{const t="VITE_"+l.toUpper(l.snakeCase(e)),o={VITE_SENTRY_RELEASE:"b17df02555626f90f785265f480a2ce137608641",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return o||(A()?T[e]:R[e])},i={cloudApi:d("cloud-api"),onboarding:d("onboarding")};class ${constructor(){h(this,"storage");this.storage=new y(b.string(),"auth:jwt")}async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(o){return o.message}}async verify(t,o){const n=await f.post("authn/verify",{email:t,token:o});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const o=E(t);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:t,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new $;class u extends Error{constructor(t,o){super(t),this.status=o}static async fromResponse(t){const o=await t.text();return new u(o,t.status)}}class f{static async get(t,o){const n=Object.fromEntries(Object.entries(o!=null?o:{}).filter(([,p])=>p!=null)),a=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",s=await fetch(`${i.cloudApi}/console/${t}${a}`,{headers:{...c.headers}});if(s.status===403){m("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const r=await s.text();return r?JSON.parse(r):null}static async getBlob(t){return await(await fetch(`${i.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,o,n){const a=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",s=await fetch(`${i.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:a?o:JSON.stringify(o)});if(!s.ok)throw await u.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async patch(t,o){const n=await fetch(`${i.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(o)});if(!n.ok)throw await u.fromResponse(n);const a=await n.text();return a?JSON.parse(a):null}static async delete(t){const o=await fetch(`${i.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!o.ok)throw await u.fromResponse(o)}}export{f as C,i as E,c as a};
//# sourceMappingURL=gateway.99c1b0d6.js.map
