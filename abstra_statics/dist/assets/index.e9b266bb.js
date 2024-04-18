var m=Object.defineProperty;var g=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>(g(e,typeof t!="symbol"?t+"":t,a),a);import{L as _,z as w,t as f,g as y,h as b,_ as s,i as E}from"./outputWidgets.da1326db.js";import{l as T}from"./fetch.8ed5a2ac.js";import{P as I}from"./pubsub.073776b5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8b9c7e53-a783-4188-b227-1ec75d520957",e._sentryDebugIdIdentifier="sentry-dbid-8b9c7e53-a783-4188-b227-1ec75d520957")}catch{}})();class u{constructor(t=new I,a=T){r(this,"storage");this.pubsub=t,this.fetch=a,this.storage=new _(w.string(),"auth:jwt")}saveJWT(t){this.storage.set(t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return this.storage.get()}getUser(){const t=this.getJWT();if(t)try{const a=f(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),this.storage.remove()}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}}r(u,"key","abstra:auth:jwt");const A=new u,L=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.583e683f.js"),["assets/Home.583e683f.js","assets/outputWidgets.da1326db.js","assets/outputWidgets.19b8386f.css","assets/api.fd672433.js","assets/runnerData.49c1b91b.js","assets/url.74c945cd.js","assets/asyncComputed.aed43f77.js","assets/PlayerNavbar.a664fed9.js","assets/PhKanban.vue.336d2f98.js","assets/PhSignOut.vue.050618f3.js","assets/Text.77944bfa.js","assets/index.cbb67d79.js","assets/Link.c4c885e7.js","assets/Paragraph.c6be0287.js","assets/Title.74e861a2.js","assets/index.d9fdc6a1.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.194e51b9.js","assets/PhArrowSquareOut.vue.583b2288.js","assets/index.414f7ade.js","assets/Card.7036c4ef.js","assets/TabPane.fc810946.js","assets/hasIn.15ce65b3.js","assets/index.584a1fbb.js","assets/HomeContent.43c54c8b.css","assets/fetch.8ed5a2ac.js","assets/pubsub.073776b5.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.9998bd4d.js"),["assets/Threads.9998bd4d.js","assets/outputWidgets.da1326db.js","assets/outputWidgets.19b8386f.css","assets/PlayerNavbar.a664fed9.js","assets/PhKanban.vue.336d2f98.js","assets/PhSignOut.vue.050618f3.js","assets/Text.77944bfa.js","assets/index.cbb67d79.js","assets/Link.c4c885e7.js","assets/Paragraph.c6be0287.js","assets/Title.74e861a2.js","assets/index.d9fdc6a1.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.92b72ec7.js","assets/fetch.8ed5a2ac.js","assets/vuedraggable.umd.886a5fd0.js","assets/workspaces.3e1494d0.js","assets/runnerData.49c1b91b.js","assets/url.74c945cd.js","assets/record.c77dac89.js","assets/pubsub.073776b5.js","assets/asyncComputed.aed43f77.js","assets/scripts.72b575b6.js","assets/envVars.243ec4c0.js","assets/api.4e3c225a.js","assets/metadata.abc9e8b8.js","assets/PhCheckCircle.vue.85981ac8.js","assets/PhScroll.vue.0349f81f.js","assets/PhWebhooksLogo.vue.160160ce.js","assets/ant-design.2df60c81.js","assets/index.b6b739de.js","assets/Modal.b6280b8d.js","assets/index.584a1fbb.js","assets/index.94e17ee5.js","assets/index.315171d4.js","assets/index.8276bd00.js","assets/CollapsePanel.e374b0dc.js","assets/index.824a932c.js","assets/index.75e23fd3.js","assets/isNumeric.75337b1e.js","assets/Card.7036c4ef.js","assets/TabPane.fc810946.js","assets/hasIn.15ce65b3.js","assets/LoadingOutlined.3aca2285.js","assets/index.475bbe22.js","assets/Form.fab4ab7e.js","assets/string.d54ad420.js","assets/TableView.e3f9294c.css","assets/api.fd672433.js","assets/index.eb8279cf.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.3b444a95.js"),["assets/Login.3b444a95.js","assets/api.fd672433.js","assets/outputWidgets.da1326db.js","assets/outputWidgets.19b8386f.css","assets/runnerData.49c1b91b.js","assets/url.74c945cd.js","assets/Passwordless.0009cd1b.js","assets/index.14f8a683.js","assets/CircularLoading.6c4127b2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.aed43f77.js","assets/WidgetsFrame.ccecd91d.js","assets/WidgetsFrame.7eb9c981.css","assets/fetch.8ed5a2ac.js","assets/pubsub.073776b5.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.f14ae258.js"),["assets/Error.f14ae258.js","assets/PlayerNavbar.a664fed9.js","assets/outputWidgets.da1326db.js","assets/outputWidgets.19b8386f.css","assets/PhKanban.vue.336d2f98.js","assets/PhSignOut.vue.050618f3.js","assets/Text.77944bfa.js","assets/index.cbb67d79.js","assets/Link.c4c885e7.js","assets/Paragraph.c6be0287.js","assets/Title.74e861a2.js","assets/index.d9fdc6a1.js","assets/PlayerNavbar.16fb646d.css","assets/api.fd672433.js","assets/runnerData.49c1b91b.js","assets/url.74c945cd.js","assets/asyncComputed.aed43f77.js","assets/WidgetsFrame.ccecd91d.js","assets/WidgetsFrame.7eb9c981.css","assets/fetch.8ed5a2ac.js","assets/pubsub.073776b5.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.227ee565.js"),["assets/Form.227ee565.js","assets/outputWidgets.da1326db.js","assets/outputWidgets.19b8386f.css","assets/FormRunner.0fd40ebb.js","assets/url.74c945cd.js","assets/Passwordless.0009cd1b.js","assets/index.14f8a683.js","assets/CircularLoading.6c4127b2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.a664fed9.js","assets/PhKanban.vue.336d2f98.js","assets/PhSignOut.vue.050618f3.js","assets/Text.77944bfa.js","assets/index.cbb67d79.js","assets/Link.c4c885e7.js","assets/Paragraph.c6be0287.js","assets/Title.74e861a2.js","assets/index.d9fdc6a1.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.ccecd91d.js","assets/WidgetsFrame.7eb9c981.css","assets/Steps.b8facebf.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.f51efe17.js","assets/Card.7036c4ef.js","assets/TabPane.fc810946.js","assets/hasIn.15ce65b3.js","assets/FormRunner.c25f5f09.css","assets/asyncComputed.aed43f77.js","assets/uuid.d4c0f61b.js","assets/api.fd672433.js","assets/runnerData.49c1b91b.js","assets/fetch.8ed5a2ac.js","assets/pubsub.073776b5.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],c=y({history:b("/"),routes:L,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const i=t.meta;if(i.allowUnauthenticated)return;const h=i.cb(t),l=await A.allow(h),{redirect:p,...d}=t.query;switch(l.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...d,redirect:p||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};c.beforeEach(v(c));async function H(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await n.init(t)}const o=class{constructor(t){this.config=t}static async init(t){o.instance=new o(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let n=o;r(n,"instance",null);export{n as S,c as a,v as g,L as r,H as s,A as u};
//# sourceMappingURL=index.e9b266bb.js.map
