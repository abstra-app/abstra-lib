var _=Object.defineProperty;var w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(w(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as y,g as b,h as g,_ as s,i as E}from"./outputWidgets.bcc55d62.js";import{P as T}from"./pubsub.bfb62ff6.js";import{l as I}from"./fetch.0f8b36e0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="26dc152f-35cd-4014-a30e-473f1bbbc351",e._sentryDebugIdIdentifier="sentry-dbid-26dc152f-35cd-4014-a30e-473f1bbbc351")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=y(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,v=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.a758e485.js"),["assets/Home.a758e485.js","assets/outputWidgets.bcc55d62.js","assets/outputWidgets.04a49a2c.css","assets/api.5fedeb74.js","assets/runnerData.99c1ee19.js","assets/url.6f9e45fc.js","assets/asyncComputed.522271b4.js","assets/PlayerNavbar.196f6ee9.js","assets/PhKanban.vue.57fe917f.js","assets/PhSignOut.vue.530e91ac.js","assets/Text.2f2beebe.js","assets/index.d82fae28.js","assets/Link.2d746099.js","assets/Paragraph.061ecf6b.js","assets/Title.cba782a2.js","assets/index.f8230431.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.cd3c36d1.js","assets/PhArrowSquareOut.vue.26e95615.js","assets/index.b8f9b15f.js","assets/Card.6799d6a6.js","assets/index.fdec5cef.js","assets/TabPane.6e1193bb.js","assets/hasIn.4a295b04.js","assets/index.89bdf6a2.js","assets/HomeContent.43c54c8b.css","assets/pubsub.bfb62ff6.js","assets/fetch.0f8b36e0.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.d7dc053f.js"),["assets/Threads.d7dc053f.js","assets/outputWidgets.bcc55d62.js","assets/outputWidgets.04a49a2c.css","assets/PlayerNavbar.196f6ee9.js","assets/PhKanban.vue.57fe917f.js","assets/PhSignOut.vue.530e91ac.js","assets/Text.2f2beebe.js","assets/index.d82fae28.js","assets/Link.2d746099.js","assets/Paragraph.061ecf6b.js","assets/Title.cba782a2.js","assets/index.f8230431.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.8ee060e3.js","assets/fetch.0f8b36e0.js","assets/vuedraggable.umd.e093454e.js","assets/workspaces.276d86a9.js","assets/runnerData.99c1ee19.js","assets/url.6f9e45fc.js","assets/record.a263f53d.js","assets/pubsub.bfb62ff6.js","assets/asyncComputed.522271b4.js","assets/scripts.84a44973.js","assets/envVars.0f14f4ce.js","assets/api.036056ae.js","assets/index.cf4c23b9.js","assets/metadata.f9a31949.js","assets/PhCheckCircle.vue.47c5abf1.js","assets/PhScroll.vue.ccf967ff.js","assets/PhWebhooksLogo.vue.d2a81fc2.js","assets/ant-design.37022b14.js","assets/index.e6fdef6e.js","assets/Modal.c1568b18.js","assets/index.89bdf6a2.js","assets/index.af620851.js","assets/index.853bad44.js","assets/index.2027458f.js","assets/CollapsePanel.b592cf74.js","assets/index.53feb1c7.js","assets/index.f24cc4fc.js","assets/isNumeric.75337b1e.js","assets/Card.6799d6a6.js","assets/index.fdec5cef.js","assets/TabPane.6e1193bb.js","assets/hasIn.4a295b04.js","assets/LoadingOutlined.4cfcc803.js","assets/index.26862f61.js","assets/Form.9642dc84.js","assets/string.5def618a.js","assets/TableView.5d9e33eb.css","assets/api.5fedeb74.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.85382478.js"),["assets/Login.85382478.js","assets/api.5fedeb74.js","assets/outputWidgets.bcc55d62.js","assets/outputWidgets.04a49a2c.css","assets/runnerData.99c1ee19.js","assets/url.6f9e45fc.js","assets/Passwordless.ea26baf1.js","assets/index.308173f4.js","assets/PhArrowClockwise.vue.9c775c68.js","assets/CircularLoading.f74fb19d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.522271b4.js","assets/WidgetsFrame.fb64769e.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.bfb62ff6.js","assets/fetch.0f8b36e0.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.74b927bc.js"),["assets/Error.74b927bc.js","assets/PlayerNavbar.196f6ee9.js","assets/outputWidgets.bcc55d62.js","assets/outputWidgets.04a49a2c.css","assets/PhKanban.vue.57fe917f.js","assets/PhSignOut.vue.530e91ac.js","assets/Text.2f2beebe.js","assets/index.d82fae28.js","assets/Link.2d746099.js","assets/Paragraph.061ecf6b.js","assets/Title.cba782a2.js","assets/index.f8230431.js","assets/PlayerNavbar.16fb646d.css","assets/api.5fedeb74.js","assets/runnerData.99c1ee19.js","assets/url.6f9e45fc.js","assets/asyncComputed.522271b4.js","assets/WidgetsFrame.fb64769e.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.bfb62ff6.js","assets/fetch.0f8b36e0.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.76e0c78f.js"),["assets/Form.76e0c78f.js","assets/outputWidgets.bcc55d62.js","assets/outputWidgets.04a49a2c.css","assets/FormRunner.93831201.js","assets/url.6f9e45fc.js","assets/Passwordless.ea26baf1.js","assets/index.308173f4.js","assets/PhArrowClockwise.vue.9c775c68.js","assets/CircularLoading.f74fb19d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.196f6ee9.js","assets/PhKanban.vue.57fe917f.js","assets/PhSignOut.vue.530e91ac.js","assets/Text.2f2beebe.js","assets/index.d82fae28.js","assets/Link.2d746099.js","assets/Paragraph.061ecf6b.js","assets/Title.cba782a2.js","assets/index.f8230431.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.fb64769e.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.948b2cdb.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.c0ae6f77.js","assets/Card.6799d6a6.js","assets/index.fdec5cef.js","assets/TabPane.6e1193bb.js","assets/hasIn.4a295b04.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.522271b4.js","assets/uuid.00b19db8.js","assets/api.5fedeb74.js","assets/runnerData.99c1ee19.js","assets/pubsub.bfb62ff6.js","assets/fetch.0f8b36e0.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=b({history:g("/"),routes:v,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),D=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),d=await A.allow(p),{redirect:m,...f}=t.query;switch(d.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:m||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(D(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,D as g,v as r,O as s,A as u};
//# sourceMappingURL=index.db8e7d03.js.map
