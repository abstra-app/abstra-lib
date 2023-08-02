var g=Object.defineProperty;var y=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var p=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{u as f}from"./registerWidgets.1590c05e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="5da68697-40b9-4288-8e4e-f8b2f4a3b620",r._sentryDebugIdIdentifier="sentry-dbid-5da68697-40b9-4288-8e4e-f8b2f4a3b620")}catch{}})();const b=()=>window.location.host.includes(".abstra.io"),v={passwordless:"/api/passwordless","cloud-api":"/api/cloud-api"},m={passwordless:"https://passwordless.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},w=r=>{const e="VITE_"+f.toUpper(f.snakeCase(r)),t={VITE_SENTRY_RELEASE:"726a7a8ca50e47ea8f396e30d8de018d5090473c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||(b()?v[r]:m[r])};class s{static get(e){try{const t=localStorage.getItem(e);return t&&JSON.parse(t)}catch{return null}}static set(e,t){localStorage.setItem(e,JSON.stringify(t))}static pop(e){const t=s.get(e);return s.remove(e),t}static remove(e){localStorage.removeItem(e)}}function l(r){this.message=r}l.prototype=new Error,l.prototype.name="InvalidCharacterError";var h=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,o=0,a=0,u="";n=e.charAt(a++);~n&&(t=o%4?64*t+n:n,o++%4)?u+=String.fromCharCode(255&t>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return u};function I(r){var e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(h(t).replace(/(.)/g,function(n,o){var a=o.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}(e)}catch{return h(e)}}function d(r){this.message=r}function E(r,e){if(typeof r!="string")throw new d("Invalid token specified");var t=(e=e||{}).header===!0?0:1;try{return JSON.parse(I(r.split(".")[t]))}catch(n){throw new d("Invalid token specified: "+n.message)}}d.prototype=new Error,d.prototype.name="InvalidTokenError";const i=class{async authenticate(e){try{const t=await fetch(`${w("passwordless")}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok)throw new Error(await t.text());return null}catch(t){return t.message}}async verify(e,t){const n=await fetch(`${w("passwordless")}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:t})});if(!n.ok)throw new Error(await n.text());const o=await n.json();return this.saveJWT(o.jwt),this.getUser()}saveJWT(e){s.set(i.key,e)}getJWT(){return s.get(i.key)}getUser(){const e=this.getJWT();if(e)try{const t=E(e);if(t.exp&&t.exp>Date.now()/1e3)return{jwt:e,claims:t}}catch{console.warn("Invalid JWT")}return null}removeUser(){s.remove(i.key)}getUserHeaders(e="User-Authorization"){const t=this.getJWT();return t?{[e]:`Bearer ${t}`}:{}}};let c=i;p(c,"key","hackerforms:auth:jwt");const T=new c;export{T as p,w as t};
//# sourceMappingURL=passwordlessManager.e40e91a8.js.map
