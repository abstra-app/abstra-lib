var _=Object.defineProperty;var w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(w(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as y,g as b,h as g,_ as s,i as E}from"./outputWidgets.ee4d59e8.js";import{P as T}from"./pubsub.adfb0dba.js";import{l as I}from"./fetch.52fd1a71.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f841544a-1df3-48d4-b2fc-7bd2f4b54d35",e._sentryDebugIdIdentifier="sentry-dbid-f841544a-1df3-48d4-b2fc-7bd2f4b54d35")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=y(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,v=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.a3ba6227.js"),["assets/Home.a3ba6227.js","assets/outputWidgets.ee4d59e8.js","assets/outputWidgets.04a49a2c.css","assets/api.d9eb8a17.js","assets/runnerData.ccc8110f.js","assets/url.d4e01787.js","assets/asyncComputed.91f1acd8.js","assets/PlayerNavbar.5dbfe537.js","assets/PhKanban.vue.73a45ec8.js","assets/PhSignOut.vue.930e0447.js","assets/Text.3a9aa492.js","assets/index.016aedf3.js","assets/Link.f5306730.js","assets/Paragraph.bcb207b3.js","assets/Title.cb4ab3dd.js","assets/index.40226834.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.f49a65a8.js","assets/PhArrowSquareOut.vue.57c85d41.js","assets/index.08a0c636.js","assets/Card.2a94653e.js","assets/index.8f4d61e3.js","assets/TabPane.12f3587d.js","assets/hasIn.d9dd4a59.js","assets/index.b55cc53a.js","assets/HomeContent.43c54c8b.css","assets/pubsub.adfb0dba.js","assets/fetch.52fd1a71.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.88e11cb6.js"),["assets/Threads.88e11cb6.js","assets/outputWidgets.ee4d59e8.js","assets/outputWidgets.04a49a2c.css","assets/PlayerNavbar.5dbfe537.js","assets/PhKanban.vue.73a45ec8.js","assets/PhSignOut.vue.930e0447.js","assets/Text.3a9aa492.js","assets/index.016aedf3.js","assets/Link.f5306730.js","assets/Paragraph.bcb207b3.js","assets/Title.cb4ab3dd.js","assets/index.40226834.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.2818aa64.js","assets/fetch.52fd1a71.js","assets/vuedraggable.umd.64c5b838.js","assets/workspaces.47a4e8f6.js","assets/runnerData.ccc8110f.js","assets/url.d4e01787.js","assets/record.1a9e3bc8.js","assets/pubsub.adfb0dba.js","assets/asyncComputed.91f1acd8.js","assets/scripts.e6a796b5.js","assets/envVars.e2c5f787.js","assets/api.b863e0bb.js","assets/index.cf4c23b9.js","assets/metadata.6bfdc564.js","assets/PhCheckCircle.vue.6af1070e.js","assets/PhScroll.vue.14b933b7.js","assets/PhWebhooksLogo.vue.777ce7c7.js","assets/ant-design.06b7cadb.js","assets/index.e57f597d.js","assets/Modal.fd0bc10a.js","assets/index.b55cc53a.js","assets/index.3641bef9.js","assets/index.839dc349.js","assets/index.0ec78416.js","assets/CollapsePanel.90293963.js","assets/index.5300413c.js","assets/index.0592ff6d.js","assets/isNumeric.75337b1e.js","assets/Card.2a94653e.js","assets/index.8f4d61e3.js","assets/TabPane.12f3587d.js","assets/hasIn.d9dd4a59.js","assets/LoadingOutlined.204944b2.js","assets/index.d472bda0.js","assets/Form.3996d2ce.js","assets/string.ab1b366c.js","assets/TableView.5d9e33eb.css","assets/api.d9eb8a17.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.78809aee.js"),["assets/Login.78809aee.js","assets/api.d9eb8a17.js","assets/outputWidgets.ee4d59e8.js","assets/outputWidgets.04a49a2c.css","assets/runnerData.ccc8110f.js","assets/url.d4e01787.js","assets/Passwordless.2650917d.js","assets/index.2db16418.js","assets/PhArrowClockwise.vue.290ab3b8.js","assets/CircularLoading.bc619429.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.91f1acd8.js","assets/WidgetsFrame.cc4273c6.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.adfb0dba.js","assets/fetch.52fd1a71.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.e7937bc4.js"),["assets/Error.e7937bc4.js","assets/PlayerNavbar.5dbfe537.js","assets/outputWidgets.ee4d59e8.js","assets/outputWidgets.04a49a2c.css","assets/PhKanban.vue.73a45ec8.js","assets/PhSignOut.vue.930e0447.js","assets/Text.3a9aa492.js","assets/index.016aedf3.js","assets/Link.f5306730.js","assets/Paragraph.bcb207b3.js","assets/Title.cb4ab3dd.js","assets/index.40226834.js","assets/PlayerNavbar.16fb646d.css","assets/api.d9eb8a17.js","assets/runnerData.ccc8110f.js","assets/url.d4e01787.js","assets/asyncComputed.91f1acd8.js","assets/WidgetsFrame.cc4273c6.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.adfb0dba.js","assets/fetch.52fd1a71.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.5d6196e4.js"),["assets/Form.5d6196e4.js","assets/outputWidgets.ee4d59e8.js","assets/outputWidgets.04a49a2c.css","assets/FormRunner.5f8bfc15.js","assets/url.d4e01787.js","assets/Passwordless.2650917d.js","assets/index.2db16418.js","assets/PhArrowClockwise.vue.290ab3b8.js","assets/CircularLoading.bc619429.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.5dbfe537.js","assets/PhKanban.vue.73a45ec8.js","assets/PhSignOut.vue.930e0447.js","assets/Text.3a9aa492.js","assets/index.016aedf3.js","assets/Link.f5306730.js","assets/Paragraph.bcb207b3.js","assets/Title.cb4ab3dd.js","assets/index.40226834.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.cc4273c6.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.3201c58f.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.c7c9725c.js","assets/Card.2a94653e.js","assets/index.8f4d61e3.js","assets/TabPane.12f3587d.js","assets/hasIn.d9dd4a59.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.91f1acd8.js","assets/uuid.172860d0.js","assets/api.d9eb8a17.js","assets/runnerData.ccc8110f.js","assets/pubsub.adfb0dba.js","assets/fetch.52fd1a71.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=b({history:g("/"),routes:v,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),D=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),d=await A.allow(p),{redirect:m,...f}=t.query;switch(d.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:m||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(D(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,D as g,v as r,O as s,A as u};
//# sourceMappingURL=index.983a45a6.js.map
