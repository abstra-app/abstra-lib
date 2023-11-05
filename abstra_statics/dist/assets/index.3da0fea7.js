var d=Object.defineProperty;var f=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(f(r,typeof t!="symbol"?t+"":t,e),e);import{g as y,h as l,_ as p,S as c,q as b}from"./outputWidgets.1739e6b5.js";import{P as g}from"./pubsub.e4395938.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="769f094c-b276-44a6-906c-8839d6c72bd3",r._sentryDebugIdIdentifier="sentry-dbid-769f094c-b276-44a6-906c-8839d6c72bd3")}catch{}})();const w=[{path:"/:path(.*)*",name:"player",component:()=>p(()=>import("./Player.6967362f.js"),["assets/Player.6967362f.js","assets/outputWidgets.1739e6b5.js","assets/outputWidgets.e8fba759.css","assets/index.92715e30.js","assets/executeJs.3af85407.js","assets/runnerData.f7d9251a.js","assets/url.8bddfe76.js","assets/icons.1c3e2bde.js","assets/CircularLoading.67a69d9a.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.9236d56f.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.bfd262de.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/uuid.5051bed8.js","assets/FormRunner.c57e1a19.js","assets/WidgetsFrame.88941503.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.56b61238.js","assets/FormRunner.49d66771.css","assets/index.341bb3d6.js","assets/geometryUtils.aedc4dba.js","assets/pubsub.e4395938.js","assets/index.b0953bcd.css","assets/asyncComputed.b4d87a94.js","assets/Player.77337a17.css"])}],T=y({history:l("/"),routes:w,scrollBehavior(r){if(r.hash)return{el:r.hash}}}),i=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){i.instance=new i(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const u=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!u.ok)return null;const h=await u.json();return this.userManager.saveJWT(h.jwt),this.userManager.getUser()}};let n=i;o(n,"instance",null);const s=class{constructor(t=new g){this.pubsub=t}saveJWT(t){c.set(s.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return c.get(s.key)}getUser(){const t=this.getJWT();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}};let a=s;o(a,"key","abstra:auth:jwt");const v=new a;async function _(){const r=await fetch("/_auth/config");if(!r.ok)throw new Error(await r.text());const t=await r.json();await n.init(t,v)}export{n as A,T as a,v as b,w as r,_ as u};
//# sourceMappingURL=index.3da0fea7.js.map
