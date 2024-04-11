var m=Object.defineProperty;var g=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>(g(e,typeof t!="symbol"?t+"":t,a),a);import{L as _,z as w,t as f,g as b,h as y,_ as s,i as E}from"./outputWidgets.0b665cc7.js";import{l as T}from"./fetch.39c6091b.js";import{P as I}from"./pubsub.16b0f787.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6d1937fb-4a39-4d80-bb14-02c42131882a",e._sentryDebugIdIdentifier="sentry-dbid-6d1937fb-4a39-4d80-bb14-02c42131882a")}catch{}})();class u{constructor(t=new I,a=T){r(this,"storage");this.pubsub=t,this.fetch=a,this.storage=new _(w.string(),"auth:jwt")}saveJWT(t){this.storage.set(t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return this.storage.get()}getUser(){const t=this.getJWT();if(t)try{const a=f(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),this.storage.remove()}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}}r(u,"key","abstra:auth:jwt");const A=new u,L=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.65a383f6.js"),["assets/Home.65a383f6.js","assets/outputWidgets.0b665cc7.js","assets/outputWidgets.04a49a2c.css","assets/api.4c906e65.js","assets/runnerData.165cbed5.js","assets/url.8ba4c1e5.js","assets/asyncComputed.1d5bfff0.js","assets/PlayerNavbar.7f1df2fe.js","assets/PhKanban.vue.a8678a36.js","assets/PhSignOut.vue.63bbf18b.js","assets/Text.b24e4288.js","assets/index.a7f577c5.js","assets/Link.46c652a9.js","assets/Paragraph.f6e4bd5c.js","assets/Title.08b5828d.js","assets/index.82b8d939.js","assets/PlayerNavbar.16fb646d.css","assets/HomeContent.f4f1a3c9.js","assets/PhArrowSquareOut.vue.20ef1d61.js","assets/index.c95c543b.js","assets/Card.f9a9e371.js","assets/index.cde3856c.js","assets/TabPane.1e6beacb.js","assets/hasIn.8e8e9839.js","assets/index.f264fca2.js","assets/HomeContent.43c54c8b.css","assets/fetch.39c6091b.js","assets/pubsub.16b0f787.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/threads",name:"playerThreads",component:()=>s(()=>import("./Threads.adb78744.js"),["assets/Threads.adb78744.js","assets/outputWidgets.0b665cc7.js","assets/outputWidgets.04a49a2c.css","assets/PlayerNavbar.7f1df2fe.js","assets/PhKanban.vue.a8678a36.js","assets/PhSignOut.vue.63bbf18b.js","assets/Text.b24e4288.js","assets/index.a7f577c5.js","assets/Link.46c652a9.js","assets/Paragraph.f6e4bd5c.js","assets/Title.08b5828d.js","assets/index.82b8d939.js","assets/PlayerNavbar.16fb646d.css","assets/TableView.vue_vue_type_script_setup_true_lang.77389980.js","assets/fetch.39c6091b.js","assets/vuedraggable.umd.83509061.js","assets/workspaces.1f8a4760.js","assets/runnerData.165cbed5.js","assets/url.8ba4c1e5.js","assets/record.9fd09cc1.js","assets/pubsub.16b0f787.js","assets/asyncComputed.1d5bfff0.js","assets/scripts.87c04629.js","assets/envVars.6327c254.js","assets/api.1cbb3241.js","assets/metadata.e4c9b896.js","assets/PhCheckCircle.vue.0ea3a36f.js","assets/PhScroll.vue.c1cb774d.js","assets/PhWebhooksLogo.vue.781b947a.js","assets/ant-design.7b6715bc.js","assets/index.3d9cdc48.js","assets/Modal.3f688333.js","assets/index.f264fca2.js","assets/index.c642001c.js","assets/index.73d9991c.js","assets/index.e4cff134.js","assets/CollapsePanel.55d6f7bc.js","assets/index.3ed8313c.js","assets/index.4fbcd54b.js","assets/isNumeric.75337b1e.js","assets/Card.f9a9e371.js","assets/index.cde3856c.js","assets/TabPane.1e6beacb.js","assets/hasIn.8e8e9839.js","assets/LoadingOutlined.f7ec280b.js","assets/index.27183f20.js","assets/Form.ac4ccba7.js","assets/string.5eb5f33e.js","assets/TableView.cbe965a8.css","assets/api.4c906e65.js"]),meta:{title:"Threads - Abstra",cb:()=>"threads"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.9accba7f.js"),["assets/Login.9accba7f.js","assets/api.4c906e65.js","assets/outputWidgets.0b665cc7.js","assets/outputWidgets.04a49a2c.css","assets/runnerData.165cbed5.js","assets/url.8ba4c1e5.js","assets/Passwordless.f3c5cdde.js","assets/index.b033c4cc.js","assets/CircularLoading.c9a65aea.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.1d5bfff0.js","assets/WidgetsFrame.c5ee2c57.js","assets/WidgetsFrame.13b291ee.css","assets/fetch.39c6091b.js","assets/pubsub.16b0f787.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.c4f0aec4.js"),["assets/Error.c4f0aec4.js","assets/PlayerNavbar.7f1df2fe.js","assets/outputWidgets.0b665cc7.js","assets/outputWidgets.04a49a2c.css","assets/PhKanban.vue.a8678a36.js","assets/PhSignOut.vue.63bbf18b.js","assets/Text.b24e4288.js","assets/index.a7f577c5.js","assets/Link.46c652a9.js","assets/Paragraph.f6e4bd5c.js","assets/Title.08b5828d.js","assets/index.82b8d939.js","assets/PlayerNavbar.16fb646d.css","assets/api.4c906e65.js","assets/runnerData.165cbed5.js","assets/url.8ba4c1e5.js","assets/asyncComputed.1d5bfff0.js","assets/WidgetsFrame.c5ee2c57.js","assets/WidgetsFrame.13b291ee.css","assets/fetch.39c6091b.js","assets/pubsub.16b0f787.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.c7accb60.js"),["assets/Form.c7accb60.js","assets/outputWidgets.0b665cc7.js","assets/outputWidgets.04a49a2c.css","assets/FormRunner.66ca5cf5.js","assets/url.8ba4c1e5.js","assets/Passwordless.f3c5cdde.js","assets/index.b033c4cc.js","assets/CircularLoading.c9a65aea.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.7f1df2fe.js","assets/PhKanban.vue.a8678a36.js","assets/PhSignOut.vue.63bbf18b.js","assets/Text.b24e4288.js","assets/index.a7f577c5.js","assets/Link.46c652a9.js","assets/Paragraph.f6e4bd5c.js","assets/Title.08b5828d.js","assets/index.82b8d939.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.c5ee2c57.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.8250f46c.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.85edf251.js","assets/Card.f9a9e371.js","assets/index.cde3856c.js","assets/TabPane.1e6beacb.js","assets/hasIn.8e8e9839.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.1d5bfff0.js","assets/uuid.f89a6202.js","assets/api.4c906e65.js","assets/runnerData.165cbed5.js","assets/fetch.39c6091b.js","assets/pubsub.16b0f787.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],c=b({history:y("/"),routes:L,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const i=t.meta;if(i.allowUnauthenticated)return;const h=i.cb(t),l=await A.allow(h),{redirect:p,...d}=t.query;switch(l.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...d,redirect:p||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};c.beforeEach(v(c));async function H(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await n.init(t)}const o=class{constructor(t){this.config=t}static async init(t){o.instance=new o(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let n=o;r(n,"instance",null);export{n as S,c as a,v as g,L as r,H as s,A as u};
//# sourceMappingURL=index.99abcac0.js.map
