var w=Object.defineProperty;var y=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(y(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as f,g as b,h as g,_ as s,i as E}from"./outputWidgets.6fd5a5d8.js";import{P as T}from"./pubsub.7bd978fa.js";import{l as I}from"./fetch.85e7c98a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="66190091-9fbb-489c-9282-868409b5d400",e._sentryDebugIdIdentifier="sentry-dbid-66190091-9fbb-489c-9282-868409b5d400")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=f(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,v=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.1eec1bfd.js"),["assets/Home.1eec1bfd.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/api.58c75a9e.js","assets/runnerData.ffa20f2f.js","assets/url.1af9f50e.js","assets/asyncComputed.310b0a30.js","assets/PlayerNavbar.97864ca2.js","assets/PhKanban.vue.4957a8b8.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.9ed15a61.js","assets/Link.ae8e3018.js","assets/Paragraph.0504c9ed.js","assets/Title.c26fc29f.js","assets/index.07ac1480.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.cddad8f4.js","assets/PhArrowSquareOut.vue.446cfe14.js","assets/index.ce1185fb.js","assets/Card.88511f33.js","assets/index.557fb711.js","assets/TabPane.d460dc80.js","assets/hasIn.f935cc6f.js","assets/index.73f8e03d.js","assets/HomeContent.43c54c8b.css","assets/pubsub.7bd978fa.js","assets/fetch.85e7c98a.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.e59517fc.js"),["assets/Threads.e59517fc.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/PlayerNavbar.97864ca2.js","assets/PhKanban.vue.4957a8b8.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.9ed15a61.js","assets/Link.ae8e3018.js","assets/Paragraph.0504c9ed.js","assets/Title.c26fc29f.js","assets/index.07ac1480.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.63d52fdd.js","assets/fetch.85e7c98a.js","assets/vuedraggable.umd.974cc2c4.js","assets/workspaces.ef806cf2.js","assets/runnerData.ffa20f2f.js","assets/url.1af9f50e.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/asyncComputed.310b0a30.js","assets/scripts.b090f926.js","assets/envVars.808d27e6.js","assets/api.255d1640.js","assets/index.cf4c23b9.js","assets/metadata.6d91eb5d.js","assets/PhCheckCircle.vue.36088834.js","assets/PhScroll.vue.500293f2.js","assets/PhWebhooksLogo.vue.03b2906b.js","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/index.f6da9859.js","assets/index.76f2f5ad.js","assets/index.33a3a3dc.js","assets/CollapsePanel.198ded9a.js","assets/index.e1325c7f.js","assets/index.52f3c433.js","assets/isNumeric.75337b1e.js","assets/Card.88511f33.js","assets/index.557fb711.js","assets/TabPane.d460dc80.js","assets/hasIn.f935cc6f.js","assets/LoadingOutlined.976a3ea7.js","assets/index.e303bd1b.js","assets/Form.86ede2da.js","assets/string.f5b3f736.js","assets/TableView.5d9e33eb.css","assets/api.58c75a9e.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.17c79945.js"),["assets/Login.17c79945.js","assets/api.58c75a9e.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/runnerData.ffa20f2f.js","assets/url.1af9f50e.js","assets/Passwordless.940f1671.js","assets/index.a9b847fc.js","assets/CircularLoading.6414eaba.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.310b0a30.js","assets/WidgetsFrame.9a232f58.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.7bd978fa.js","assets/fetch.85e7c98a.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.5b814880.js"),["assets/Error.5b814880.js","assets/PlayerNavbar.97864ca2.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/PhKanban.vue.4957a8b8.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.9ed15a61.js","assets/Link.ae8e3018.js","assets/Paragraph.0504c9ed.js","assets/Title.c26fc29f.js","assets/index.07ac1480.js","assets/PlayerNavbar.16fb646d.css","assets/api.58c75a9e.js","assets/runnerData.ffa20f2f.js","assets/url.1af9f50e.js","assets/asyncComputed.310b0a30.js","assets/WidgetsFrame.9a232f58.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.7bd978fa.js","assets/fetch.85e7c98a.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.3fb12bfa.js"),["assets/Form.3fb12bfa.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/FormRunner.b23b7ab3.js","assets/url.1af9f50e.js","assets/Passwordless.940f1671.js","assets/index.a9b847fc.js","assets/CircularLoading.6414eaba.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.97864ca2.js","assets/PhKanban.vue.4957a8b8.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.9ed15a61.js","assets/Link.ae8e3018.js","assets/Paragraph.0504c9ed.js","assets/Title.c26fc29f.js","assets/index.07ac1480.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.9a232f58.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.3ccfac43.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.83b508d2.js","assets/Card.88511f33.js","assets/index.557fb711.js","assets/TabPane.d460dc80.js","assets/hasIn.f935cc6f.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.310b0a30.js","assets/uuid.1a1a396a.js","assets/api.58c75a9e.js","assets/runnerData.ffa20f2f.js","assets/pubsub.7bd978fa.js","assets/fetch.85e7c98a.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=b({history:g("/"),routes:v,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),D=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),d=await A.allow(p),{redirect:m,..._}=t.query;switch(d.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{..._,redirect:m||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(D(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,D as g,v as r,O as s,A as u};
//# sourceMappingURL=index.dc851ffd.js.map
