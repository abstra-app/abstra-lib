var y=Object.defineProperty;var l=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(l(s,typeof t!="symbol"?t+"":t,e),e);import{g as w,h as b,_ as g,S as h,q as p}from"./outputWidgets.5836624b.js";import{P as v}from"./pubsub.a82123ee.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="657873bb-4b2a-4402-bc0a-1d25640ebf31",s._sentryDebugIdIdentifier="sentry-dbid-657873bb-4b2a-4402-bc0a-1d25640ebf31")}catch{}})();const m=[{path:"/:path(.*)*",name:"player",component:()=>g(()=>import("./Player.b293b005.js"),["assets/Player.b293b005.js","assets/FormRunner.7b5c6e80.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/url.3b0a0ce2.js","assets/icons.715dfb53.js","assets/CircularLoading.a026e34a.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.323a6d64.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.d0c2e445.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.615d8a9a.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.2a727026.css","assets/uuid.2f1ef93f.js","assets/asyncComputed.134d378f.js","assets/pubsub.a82123ee.js","assets/Player.8da60c29.css"])}],_=w({history:b("/"),routes:m,scrollBehavior(s){if(s.hash)return{el:s.hash}}}),c=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){c.instance=new c(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const f=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!f.ok)return null;const d=await f.json();return this.userManager.saveJWT(d.jwt),this.userManager.getUser()}};let a=c;n(a,"instance",null);const r=class{constructor(t=new v){this.pubsub=t}saveJWT(t){h.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return h.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const e=p(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),h.remove(r.key)}};let i=r;n(i,"key","abstra:auth:jwt");const k=new i;async function j(){const s=await fetch("/_auth/config");if(!s.ok)throw new Error(await s.text());const t=await s.json();await a.init(t,k)}async function S(){const s=await fetch("/_settings");if(!s.ok)throw new Error(await s.text());const t=await s.json();await o.init(t)}const u=class{constructor(t){this.config=t}static async init(t){u.instance=new u(t)}get showWatermark(){return this.config.show_watermark}get deployEnabled(){return{}.VITE_ABSTRA_RELEASE!=="staging"}};let o=u;n(o,"instance",null);export{a as A,o as S,_ as a,k as b,m as r,S as s,j as u};
//# sourceMappingURL=index.9dff36a8.js.map
