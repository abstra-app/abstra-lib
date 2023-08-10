var b=Object.defineProperty;var g=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(g(r,typeof e!="symbol"?e+"":e,t),t);import{u as f}from"./registerWidgets.6b985ae3.js";import{P as y}from"./pubsub.f8c17d6a.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="9c94c808-2099-45fb-9099-478bbe6ee12c",r._sentryDebugIdIdentifier="sentry-dbid-9c94c808-2099-45fb-9099-478bbe6ee12c")}catch{}})();const v=()=>window.location.host.includes(".abstra.io"),m={passwordless:"/api/passwordless","cloud-api":"/api/cloud-api"},I={passwordless:"https://passwordless.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},h=r=>{const e="VITE_"+f.toUpper(f.snakeCase(r)),t={VITE_SENTRY_RELEASE:"82fbfd0b196911c3dc2c6ae30e5feed447c12582",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||(v()?m[r]:I[r])};class a{static get(e){try{const t=localStorage.getItem(e);return t&&JSON.parse(t)}catch{return null}}static set(e,t){localStorage.setItem(e,JSON.stringify(t))}static pop(e){const t=a.get(e);return a.remove(e),t}static remove(e){localStorage.removeItem(e)}}function l(r){this.message=r}l.prototype=new Error,l.prototype.name="InvalidCharacterError";var w=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,s=0,o=0,p="";n=e.charAt(o++);~n&&(t=s%4?64*t+n:n,s++%4)?p+=String.fromCharCode(255&t>>(-2*s&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return p};function E(r){var e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(w(t).replace(/(.)/g,function(n,s){var o=s.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(e)}catch{return w(e)}}function d(r){this.message=r}function S(r,e){if(typeof r!="string")throw new d("Invalid token specified");var t=(e=e||{}).header===!0?0:1;try{return JSON.parse(E(r.split(".")[t]))}catch(n){throw new d("Invalid token specified: "+n.message)}}d.prototype=new Error,d.prototype.name="InvalidTokenError";const i=class{constructor(){u(this,"pubsub");this.pubsub=new y}async authenticate(e){try{const t=await fetch(`${h("passwordless")}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok)throw new Error(await t.text());return null}catch(t){return t.message}}async verify(e,t){const n=await fetch(`${h("passwordless")}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:t})});if(!n.ok)throw new Error(await n.text());const s=await n.json();this.saveJWT(s.jwt);const o=this.getUser();return this.pubsub.publish("authenticated",o),o}saveJWT(e){a.set(i.key,e)}getJWT(){return a.get(i.key)}getUser(){const e=this.getJWT();if(e)try{const t=S(e);if(t.exp&&t.exp>Date.now()/1e3)return{jwt:e,claims:t}}catch{console.warn("Invalid JWT")}return null}removeUser(){a.remove(i.key)}getUserHeaders(e="User-Authorization"){const t=this.getJWT();return t?{[e]:`Bearer ${t}`}:{}}};let c=i;u(c,"key","hackerforms:auth:jwt");const J=new c;export{J as p,h as t};
//# sourceMappingURL=passwordlessManager.426afe51.js.map
