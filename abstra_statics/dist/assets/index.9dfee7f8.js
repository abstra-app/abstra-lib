var m=Object.defineProperty;var f=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>(f(e,typeof t!="symbol"?t+"":t,a),a);import{L as g,z as _,t as w,g as b,h as y,_ as s,i as E}from"./outputWidgets.65744ed0.js";import{l as T}from"./fetch.9a8b11d0.js";import{P as I}from"./pubsub.4ac834a7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6fba4607-bf33-416c-8316-f0602ebfe9e9",e._sentryDebugIdIdentifier="sentry-dbid-6fba4607-bf33-416c-8316-f0602ebfe9e9")}catch{}})();class u{constructor(t=new I,a=T){r(this,"storage");this.pubsub=t,this.fetch=a,this.storage=new g(_.string(),"auth:jwt")}saveJWT(t){this.storage.set(t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return this.storage.get()}getUser(){const t=this.getJWT();if(t)try{const a=w(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),this.storage.remove()}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}}r(u,"key","abstra:auth:jwt");const A=new u,L=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.b3d57305.js"),["assets/Home.b3d57305.js","assets/outputWidgets.65744ed0.js","assets/outputWidgets.04a49a2c.css","assets/api.de5aceaf.js","assets/runnerData.c53e86f5.js","assets/url.873dab98.js","assets/asyncComputed.150ba6d4.js","assets/PlayerNavbar.bfe79870.js","assets/PhKanban.vue.74b52af5.js","assets/PhSignOut.vue.544d02cb.js","assets/Text.9e44794c.js","assets/index.704d0f2d.js","assets/Link.753f99db.js","assets/Paragraph.5e52f285.js","assets/Title.9a138151.js","assets/index.a0a8111e.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.f8fa2342.js","assets/PhArrowSquareOut.vue.b5e3ebde.js","assets/index.f3d944ca.js","assets/Card.f6aa9f3f.js","assets/index.fd17f104.js","assets/TabPane.5671881e.js","assets/hasIn.5464a049.js","assets/index.b4ca7d1c.js","assets/HomeContent.43c54c8b.css","assets/fetch.9a8b11d0.js","assets/pubsub.4ac834a7.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.f3d31cd7.js"),["assets/Threads.f3d31cd7.js","assets/outputWidgets.65744ed0.js","assets/outputWidgets.04a49a2c.css","assets/PlayerNavbar.bfe79870.js","assets/PhKanban.vue.74b52af5.js","assets/PhSignOut.vue.544d02cb.js","assets/Text.9e44794c.js","assets/index.704d0f2d.js","assets/Link.753f99db.js","assets/Paragraph.5e52f285.js","assets/Title.9a138151.js","assets/index.a0a8111e.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.e6404268.js","assets/fetch.9a8b11d0.js","assets/vuedraggable.umd.5d237e2a.js","assets/workspaces.6fcbf77a.js","assets/runnerData.c53e86f5.js","assets/url.873dab98.js","assets/record.172839ee.js","assets/pubsub.4ac834a7.js","assets/asyncComputed.150ba6d4.js","assets/scripts.9a1c384c.js","assets/envVars.5bcb7ef3.js","assets/api.81d380f4.js","assets/metadata.eb66080e.js","assets/PhCheckCircle.vue.64ffc497.js","assets/PhScroll.vue.e3448424.js","assets/PhWebhooksLogo.vue.2f521185.js","assets/ant-design.53ee33ec.js","assets/index.b1c83b36.js","assets/Modal.b5c448c3.js","assets/index.b4ca7d1c.js","assets/index.85c0a5fd.js","assets/index.e127f092.js","assets/index.3710c01a.js","assets/CollapsePanel.3c245a6e.js","assets/index.8c2cba5e.js","assets/index.4e4f027e.js","assets/isNumeric.75337b1e.js","assets/Card.f6aa9f3f.js","assets/index.fd17f104.js","assets/TabPane.5671881e.js","assets/hasIn.5464a049.js","assets/LoadingOutlined.c3850390.js","assets/index.03d957dd.js","assets/Form.fec6ea0c.js","assets/string.7a1c719f.js","assets/TableView.ef665d95.css","assets/api.de5aceaf.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.68638924.js"),["assets/Login.68638924.js","assets/api.de5aceaf.js","assets/outputWidgets.65744ed0.js","assets/outputWidgets.04a49a2c.css","assets/runnerData.c53e86f5.js","assets/url.873dab98.js","assets/Passwordless.c1d598bf.js","assets/index.df838a51.js","assets/CircularLoading.d2ee0463.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.150ba6d4.js","assets/WidgetsFrame.7e52d976.js","assets/WidgetsFrame.13b291ee.css","assets/fetch.9a8b11d0.js","assets/pubsub.4ac834a7.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.bc6ec8d0.js"),["assets/Error.bc6ec8d0.js","assets/PlayerNavbar.bfe79870.js","assets/outputWidgets.65744ed0.js","assets/outputWidgets.04a49a2c.css","assets/PhKanban.vue.74b52af5.js","assets/PhSignOut.vue.544d02cb.js","assets/Text.9e44794c.js","assets/index.704d0f2d.js","assets/Link.753f99db.js","assets/Paragraph.5e52f285.js","assets/Title.9a138151.js","assets/index.a0a8111e.js","assets/PlayerNavbar.16fb646d.css","assets/api.de5aceaf.js","assets/runnerData.c53e86f5.js","assets/url.873dab98.js","assets/asyncComputed.150ba6d4.js","assets/WidgetsFrame.7e52d976.js","assets/WidgetsFrame.13b291ee.css","assets/fetch.9a8b11d0.js","assets/pubsub.4ac834a7.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.ba80e21b.js"),["assets/Form.ba80e21b.js","assets/outputWidgets.65744ed0.js","assets/outputWidgets.04a49a2c.css","assets/FormRunner.77026a65.js","assets/url.873dab98.js","assets/Passwordless.c1d598bf.js","assets/index.df838a51.js","assets/CircularLoading.d2ee0463.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.bfe79870.js","assets/PhKanban.vue.74b52af5.js","assets/PhSignOut.vue.544d02cb.js","assets/Text.9e44794c.js","assets/index.704d0f2d.js","assets/Link.753f99db.js","assets/Paragraph.5e52f285.js","assets/Title.9a138151.js","assets/index.a0a8111e.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.7e52d976.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.128b6562.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.67fe4156.js","assets/Card.f6aa9f3f.js","assets/index.fd17f104.js","assets/TabPane.5671881e.js","assets/hasIn.5464a049.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.150ba6d4.js","assets/uuid.788c6509.js","assets/api.de5aceaf.js","assets/runnerData.c53e86f5.js","assets/fetch.9a8b11d0.js","assets/pubsub.4ac834a7.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],c=b({history:y("/"),routes:L,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const i=t.meta;if(i.allowUnauthenticated)return;const h=i.cb(t),l=await A.allow(h),{redirect:p,...d}=t.query;switch(l.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...d,redirect:p||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};c.beforeEach(v(c));async function H(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await n.init(t)}const o=class{constructor(t){this.config=t}static async init(t){o.instance=new o(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let n=o;r(n,"instance",null);export{n as S,c as a,v as g,L as r,H as s,A as u};
//# sourceMappingURL=index.9dfee7f8.js.map
