var d=Object.defineProperty;var f=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(f(r,typeof t!="symbol"?t+"":t,e),e);import{g as y,h as l,_ as p,S as c,q as b}from"./outputWidgets.7e22a81c.js";import{P as g}from"./pubsub.c7fb5d16.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="4585b0c9-5cf4-4ead-ad66-cbdf1a6b7944",r._sentryDebugIdIdentifier="sentry-dbid-4585b0c9-5cf4-4ead-ad66-cbdf1a6b7944")}catch{}})();const w=[{path:"/:path(.*)*",name:"player",component:()=>p(()=>import("./Player.b33f8e5b.js"),["assets/Player.b33f8e5b.js","assets/outputWidgets.7e22a81c.js","assets/outputWidgets.e8fba759.css","assets/index.3d760a92.js","assets/executeJs.21c713bd.js","assets/runnerData.cd0d15f2.js","assets/url.b9100446.js","assets/icons.34c7d70a.js","assets/CircularLoading.158d8c33.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.a7e2726b.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.788cb0c3.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/uuid.e8add79d.js","assets/FormRunner.7aa55b89.js","assets/WidgetsFrame.9c2f56e8.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.94f21780.js","assets/FormRunner.49d66771.css","assets/index.040e4ddb.js","assets/geometryUtils.8579bc34.js","assets/pubsub.c7fb5d16.js","assets/index.b0953bcd.css","assets/asyncComputed.4fd79706.js","assets/Player.77337a17.css"])}],T=y({history:l("/"),routes:w,scrollBehavior(r){if(r.hash)return{el:r.hash}}}),i=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){i.instance=new i(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const u=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!u.ok)return null;const h=await u.json();return this.userManager.saveJWT(h.jwt),this.userManager.getUser()}};let a=i;o(a,"instance",null);const s=class{constructor(t=new g){this.pubsub=t}saveJWT(t){c.set(s.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return c.get(s.key)}getUser(){const t=this.getJWT();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}};let n=s;o(n,"key","abstra:auth:jwt");const v=new n;async function _(){const r=await fetch("/_auth/config");if(!r.ok)throw new Error(await r.text());const t=await r.json();await a.init(t,v)}export{a as A,T as a,v as b,w as r,_ as u};
//# sourceMappingURL=index.b658ca32.js.map
