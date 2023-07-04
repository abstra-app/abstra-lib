var f=Object.defineProperty;var g=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(g(r,typeof e!="symbol"?e+"":e,t),t);import{u as d}from"./registerWidgets.802bba2f.js";class s{static get(e){try{const t=localStorage.getItem(e);return t&&JSON.parse(t)}catch{return null}}static set(e,t){localStorage.setItem(e,JSON.stringify(t))}static pop(e){const t=s.get(e);return s.remove(e),t}static remove(e){localStorage.removeItem(e)}}function h(r){this.message=r}h.prototype=new Error,h.prototype.name="InvalidCharacterError";var w=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new h("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,o=0,a=0,p="";n=e.charAt(a++);~n&&(t=o%4?64*t+n:n,o++%4)?p+=String.fromCharCode(255&t>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return p};function y(r){var e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(w(t).replace(/(.)/g,function(n,o){var a=o.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}(e)}catch{return w(e)}}function l(r){this.message=r}function v(r,e){if(typeof r!="string")throw new l("Invalid token specified");var t=(e=e||{}).header===!0?0:1;try{return JSON.parse(y(r.split(".")[t]))}catch(n){throw new l("Invalid token specified: "+n.message)}}l.prototype=new Error,l.prototype.name="InvalidTokenError";const i=class{async authenticate(e){try{const t=await fetch(`${d("passwordless")}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok)throw new Error(await t.text());return null}catch(t){return t.message}}async verify(e,t){const n=await fetch(`${d("passwordless")}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:t})});if(!n.ok)throw new Error(await n.text());const o=await n.json();return this.saveJWT(o.jwt),this.getUser()}saveJWT(e){s.set(i.key,e)}getJWT(){return s.get(i.key)}getUser(){const e=this.getJWT();if(e)try{const t=v(e);if(t.exp&&t.exp>Date.now()/1e3)return{jwt:e,claims:t}}catch{console.warn("Invalid JWT")}return null}removeUser(){s.remove(i.key)}getUserHeaders(e="User-Authorization"){const t=this.getJWT();return t?{[e]:`Bearer ${t}`}:{}}};let c=i;u(c,"key","hackerforms:auth:jwt");const S=new c;export{S as p};
//# sourceMappingURL=passwordlessManager.d5134797.js.map
