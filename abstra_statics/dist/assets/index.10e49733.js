var y=Object.defineProperty;var l=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(l(s,typeof t!="symbol"?t+"":t,e),e);import{g as w,h as g,_ as p,S as h,q as b}from"./outputWidgets.4bfd26d4.js";import{P as v}from"./pubsub.1fff0dea.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="2dc4a958-cc6b-4fa3-8163-1fd26648e382",s._sentryDebugIdIdentifier="sentry-dbid-2dc4a958-cc6b-4fa3-8163-1fd26648e382")}catch{}})();const m=[{path:"/:path(.*)*",name:"player",component:()=>p(()=>import("./Player.9a5211d4.js"),["assets/Player.9a5211d4.js","assets/FormRunner.d6ab908b.js","assets/outputWidgets.4bfd26d4.js","assets/outputWidgets.cb6d1439.css","assets/url.8e2f7e6d.js","assets/icons.a2f3d017.js","assets/CircularLoading.9723796f.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.667b5ecc.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e9e0d2f3.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.987df201.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.2a727026.css","assets/uuid.46c04ed0.js","assets/asyncComputed.962039e2.js","assets/pubsub.1fff0dea.js","assets/Player.5013234b.css"])}],_=w({history:g("/"),routes:m,scrollBehavior(s){if(s.hash)return{el:s.hash}}}),c=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){c.instance=new c(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const f=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!f.ok)return null;const d=await f.json();return this.userManager.saveJWT(d.jwt),this.userManager.getUser()}};let a=c;n(a,"instance",null);const r=class{constructor(t=new v){this.pubsub=t}saveJWT(t){h.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return h.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),h.remove(r.key)}};let i=r;n(i,"key","abstra:auth:jwt");const k=new i;async function j(){const s=await fetch("/_auth/config");if(!s.ok)throw new Error(await s.text());const t=await s.json();await a.init(t,k)}async function S(){const s=await fetch("/_settings");if(!s.ok)throw new Error(await s.text());const t=await s.json();await o.init(t)}const u=class{constructor(t){this.config=t}static async init(t){u.instance=new u(t)}get showWatermark(){return this.config.show_watermark}get deployEnabled(){return{}.VITE_ABSTRA_RELEASE!=="staging"}};let o=u;n(o,"instance",null);export{a as A,o as S,_ as a,k as b,m as r,S as s,j as u};
//# sourceMappingURL=index.10e49733.js.map
