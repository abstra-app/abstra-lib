var y=Object.defineProperty;var m=(o,t,e)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(m(o,typeof t!="symbol"?t+"":t,e),e);import{cQ as f,S as d,q as b}from"./outputWidgets.43a10844.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="937ae28d-2fc6-4f13-b9e4-d3c059f1c257",o._sentryDebugIdIdentifier="sentry-dbid-937ae28d-2fc6-4f13-b9e4-d3c059f1c257")}catch{}})();class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(a=>a.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(a=>a.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const T=()=>window.location.host.includes(".abstra.io"),S={"cloud-api":"/api/cloud-api"},E={"cloud-api":"https://cloud-api.abstra.cloud"},k=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"dbf0463a24151ca2f66266bfed90128f6a3a63b9",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(T()?S[o]:E[o])},n={cloudApi:k("cloud-api")};class c extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new c(e,t.status)}}class w{static async get(t){const e=await fetch(`${n.cloudApi}/console/${t}`,{headers:{...r.headers}});e.status===403&&(window.location.href="/login");const s=await e.text();return s?JSON.parse(s):null}static async getBlob(t){return await(await fetch(`${n.cloudApi}/console/${t}`,{headers:{...r.headers}})).blob()}static async post(t,e,s){const a=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",u=await fetch(`${n.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...r.headers,...s},body:a?e:JSON.stringify(e)});if(!u.ok)throw await c.fromResponse(u);const l=await u.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${n.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...r.headers},body:JSON.stringify(e)});if(!s.ok)throw await c.fromResponse(s);const a=await s.text();return a?JSON.parse(a):null}static async delete(t){const e=await fetch(`${n.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...r.headers}});if(!e.ok)throw await c.fromResponse(e)}}const i=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await w.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){d.set(i.key,t)}getJWT(){return d.get(i.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){d.remove(i.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let p=i;h(p,"key","abstracloud:auth:jwt");const r=new p;export{w as C,g as T,r as a};
//# sourceMappingURL=authorManager.c51bb24c.js.map
