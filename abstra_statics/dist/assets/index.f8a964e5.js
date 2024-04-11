var _=Object.defineProperty;var w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(w(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as y,g,h as b,_ as s,i as E}from"./outputWidgets.91aca867.js";import{P as T}from"./pubsub.2f955133.js";import{l as I}from"./fetch.5d68180f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="834f7d7d-9508-445e-baa4-1bc21f4a840d",e._sentryDebugIdIdentifier="sentry-dbid-834f7d7d-9508-445e-baa4-1bc21f4a840d")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=y(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,v=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.ccc749b0.js"),["assets/Home.ccc749b0.js","assets/outputWidgets.91aca867.js","assets/outputWidgets.04a49a2c.css","assets/api.b7d38f46.js","assets/runnerData.c2cad114.js","assets/url.3b332905.js","assets/asyncComputed.80b8543d.js","assets/PlayerNavbar.9328e780.js","assets/PhKanban.vue.4b902100.js","assets/PhSignOut.vue.022294d9.js","assets/Text.d00fec7b.js","assets/index.ab4f665c.js","assets/Link.83b6000f.js","assets/Paragraph.2776a16b.js","assets/Title.41f0d9c2.js","assets/index.66efdde9.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.18bf0f82.js","assets/PhArrowSquareOut.vue.1b7e9202.js","assets/index.f1c9eeb9.js","assets/Card.2a112445.js","assets/index.0a71b950.js","assets/TabPane.ab2cb2ae.js","assets/hasIn.08cb52ef.js","assets/index.84324f75.js","assets/HomeContent.43c54c8b.css","assets/pubsub.2f955133.js","assets/fetch.5d68180f.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.5071bdb2.js"),["assets/Threads.5071bdb2.js","assets/outputWidgets.91aca867.js","assets/outputWidgets.04a49a2c.css","assets/PlayerNavbar.9328e780.js","assets/PhKanban.vue.4b902100.js","assets/PhSignOut.vue.022294d9.js","assets/Text.d00fec7b.js","assets/index.ab4f665c.js","assets/Link.83b6000f.js","assets/Paragraph.2776a16b.js","assets/Title.41f0d9c2.js","assets/index.66efdde9.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.1edeb9f6.js","assets/fetch.5d68180f.js","assets/vuedraggable.umd.8672d74d.js","assets/workspaces.b684e9c7.js","assets/runnerData.c2cad114.js","assets/url.3b332905.js","assets/record.7dd868d1.js","assets/pubsub.2f955133.js","assets/asyncComputed.80b8543d.js","assets/scripts.1cf47fa7.js","assets/envVars.d24694f8.js","assets/api.e355ad37.js","assets/index.cf4c23b9.js","assets/metadata.e2ee71e9.js","assets/PhCheckCircle.vue.6efdaab1.js","assets/PhScroll.vue.c8f5adf3.js","assets/PhWebhooksLogo.vue.8cd10d6b.js","assets/ant-design.ce2e5733.js","assets/index.55d5ee8d.js","assets/Modal.b8d6e40f.js","assets/index.84324f75.js","assets/index.2e28589d.js","assets/index.9157158f.js","assets/index.4c554ada.js","assets/CollapsePanel.37d3a891.js","assets/index.52968246.js","assets/index.e8d738ab.js","assets/isNumeric.75337b1e.js","assets/Card.2a112445.js","assets/index.0a71b950.js","assets/TabPane.ab2cb2ae.js","assets/hasIn.08cb52ef.js","assets/LoadingOutlined.082fae67.js","assets/index.d7de6dce.js","assets/Form.b05efde0.js","assets/string.94c295a9.js","assets/TableView.5d9e33eb.css","assets/api.b7d38f46.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.712c6eed.js"),["assets/Login.712c6eed.js","assets/api.b7d38f46.js","assets/outputWidgets.91aca867.js","assets/outputWidgets.04a49a2c.css","assets/runnerData.c2cad114.js","assets/url.3b332905.js","assets/Passwordless.13cf71be.js","assets/index.c13e1cae.js","assets/CircularLoading.d9257178.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.80b8543d.js","assets/WidgetsFrame.234e3074.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.2f955133.js","assets/fetch.5d68180f.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.80f0606a.js"),["assets/Error.80f0606a.js","assets/PlayerNavbar.9328e780.js","assets/outputWidgets.91aca867.js","assets/outputWidgets.04a49a2c.css","assets/PhKanban.vue.4b902100.js","assets/PhSignOut.vue.022294d9.js","assets/Text.d00fec7b.js","assets/index.ab4f665c.js","assets/Link.83b6000f.js","assets/Paragraph.2776a16b.js","assets/Title.41f0d9c2.js","assets/index.66efdde9.js","assets/PlayerNavbar.16fb646d.css","assets/api.b7d38f46.js","assets/runnerData.c2cad114.js","assets/url.3b332905.js","assets/asyncComputed.80b8543d.js","assets/WidgetsFrame.234e3074.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.2f955133.js","assets/fetch.5d68180f.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.59427551.js"),["assets/Form.59427551.js","assets/outputWidgets.91aca867.js","assets/outputWidgets.04a49a2c.css","assets/FormRunner.24ce6156.js","assets/url.3b332905.js","assets/Passwordless.13cf71be.js","assets/index.c13e1cae.js","assets/CircularLoading.d9257178.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.9328e780.js","assets/PhKanban.vue.4b902100.js","assets/PhSignOut.vue.022294d9.js","assets/Text.d00fec7b.js","assets/index.ab4f665c.js","assets/Link.83b6000f.js","assets/Paragraph.2776a16b.js","assets/Title.41f0d9c2.js","assets/index.66efdde9.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.234e3074.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.d14a4f56.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.8c262ebb.js","assets/Card.2a112445.js","assets/index.0a71b950.js","assets/TabPane.ab2cb2ae.js","assets/hasIn.08cb52ef.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.80b8543d.js","assets/uuid.b5bf790d.js","assets/api.b7d38f46.js","assets/runnerData.c2cad114.js","assets/pubsub.2f955133.js","assets/fetch.5d68180f.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=g({history:b("/"),routes:v,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),D=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),d=await A.allow(p),{redirect:m,...f}=t.query;switch(d.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:m||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(D(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,D as g,v as r,O as s,A as u};
//# sourceMappingURL=index.f8a964e5.js.map
