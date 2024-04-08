var _=Object.defineProperty;var w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(w(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as y,g as b,h as g,_ as s,i as E}from"./outputWidgets.858eea56.js";import{P as T}from"./pubsub.798be8d6.js";import{l as I}from"./fetch.c05ae51d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="feeb3517-e16f-4201-936e-e85b309036c1",e._sentryDebugIdIdentifier="sentry-dbid-feeb3517-e16f-4201-936e-e85b309036c1")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=y(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,k=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.ba8be7c4.js"),["assets/Home.ba8be7c4.js","assets/outputWidgets.858eea56.js","assets/outputWidgets.25fe30e4.css","assets/api.bb92a680.js","assets/runnerData.b6d14fa3.js","assets/url.2222ff52.js","assets/asyncComputed.70931a32.js","assets/PlayerNavbar.1071b21e.js","assets/PhKanban.vue.8b7d9ae2.js","assets/PhSignOut.vue.4a7b869f.js","assets/Text.a93df176.js","assets/index.992df385.js","assets/Link.24b85989.js","assets/Paragraph.7812deec.js","assets/Title.74d15771.js","assets/index.57068d56.js","assets/PlayerNavbar.bb4bfb7b.css","assets/HomeContent.caede20a.js","assets/PhArrowSquareOut.vue.92b1d54f.js","assets/index.35965a04.js","assets/Card.706f2a33.js","assets/index.6bb6a793.js","assets/TabPane.6e4429b0.js","assets/hasIn.e31f565a.js","assets/index.d59eec09.js","assets/HomeContent.43c54c8b.css","assets/pubsub.798be8d6.js","assets/fetch.c05ae51d.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>s(()=>import("./Kanban.07551eec.js"),["assets/Kanban.07551eec.js","assets/outputWidgets.858eea56.js","assets/outputWidgets.25fe30e4.css","assets/api.bb92a680.js","assets/runnerData.b6d14fa3.js","assets/url.2222ff52.js","assets/repository.3611e650.js","assets/asyncComputed.70931a32.js","assets/workspaces.36c86de8.js","assets/record.466d46f5.js","assets/pubsub.798be8d6.js","assets/scripts.5c45fd60.js","assets/envVars.1ac2f252.js","assets/api.21e9fc5c.js","assets/index.cf4c23b9.js","assets/metadata.df1d507a.js","assets/PhCheckCircle.vue.ebf24b07.js","assets/PhScroll.vue.a5abda16.js","assets/PhWebhooksLogo.vue.663f57fb.js","assets/ant-design.e34031ec.js","assets/index.78a60ad7.js","assets/Modal.39b49774.js","assets/Text.a93df176.js","assets/index.d59eec09.js","assets/index.0a615130.js","assets/index.59265b06.js","assets/Paragraph.7812deec.js","assets/index.992df385.js","assets/Link.24b85989.js","assets/Title.74d15771.js","assets/index.8c4f0d21.js","assets/CollapsePanel.c2090783.js","assets/index.8956ca9f.js","assets/index.502ca63f.js","assets/isNumeric.75337b1e.js","assets/Card.706f2a33.js","assets/index.6bb6a793.js","assets/TabPane.6e4429b0.js","assets/hasIn.e31f565a.js","assets/vuedraggable.umd.7f56e1c7.js","assets/index.bdd35a3c.js","assets/Form.aa96588a.js","assets/fetch.c05ae51d.js","assets/repository.06463f50.css","assets/PlayerNavbar.1071b21e.js","assets/PhKanban.vue.8b7d9ae2.js","assets/PhSignOut.vue.4a7b869f.js","assets/index.57068d56.js","assets/PlayerNavbar.bb4bfb7b.css"]),meta:{title:"Kanban - Abstra",cb:()=>"kanban"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.6d33d33d.js"),["assets/Login.6d33d33d.js","assets/api.bb92a680.js","assets/outputWidgets.858eea56.js","assets/outputWidgets.25fe30e4.css","assets/runnerData.b6d14fa3.js","assets/url.2222ff52.js","assets/Passwordless.c45a42e1.js","assets/index.9a59066b.js","assets/PhArrowClockwise.vue.24d3d74d.js","assets/CircularLoading.4d25715f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.70931a32.js","assets/WidgetsFrame.312406ab.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.798be8d6.js","assets/fetch.c05ae51d.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.be64c447.js"),["assets/Error.be64c447.js","assets/PlayerNavbar.1071b21e.js","assets/outputWidgets.858eea56.js","assets/outputWidgets.25fe30e4.css","assets/PhKanban.vue.8b7d9ae2.js","assets/PhSignOut.vue.4a7b869f.js","assets/Text.a93df176.js","assets/index.992df385.js","assets/Link.24b85989.js","assets/Paragraph.7812deec.js","assets/Title.74d15771.js","assets/index.57068d56.js","assets/PlayerNavbar.bb4bfb7b.css","assets/api.bb92a680.js","assets/runnerData.b6d14fa3.js","assets/url.2222ff52.js","assets/asyncComputed.70931a32.js","assets/WidgetsFrame.312406ab.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.798be8d6.js","assets/fetch.c05ae51d.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.e9cc8cb3.js"),["assets/Form.e9cc8cb3.js","assets/outputWidgets.858eea56.js","assets/outputWidgets.25fe30e4.css","assets/FormRunner.d33bded0.js","assets/url.2222ff52.js","assets/Passwordless.c45a42e1.js","assets/index.9a59066b.js","assets/PhArrowClockwise.vue.24d3d74d.js","assets/CircularLoading.4d25715f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.1071b21e.js","assets/PhKanban.vue.8b7d9ae2.js","assets/PhSignOut.vue.4a7b869f.js","assets/Text.a93df176.js","assets/index.992df385.js","assets/Link.24b85989.js","assets/Paragraph.7812deec.js","assets/Title.74d15771.js","assets/index.57068d56.js","assets/PlayerNavbar.bb4bfb7b.css","assets/WidgetsFrame.312406ab.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.d7c4914a.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.e6f0a39e.js","assets/Card.706f2a33.js","assets/index.6bb6a793.js","assets/TabPane.6e4429b0.js","assets/hasIn.e31f565a.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.70931a32.js","assets/uuid.297f9e3a.js","assets/api.bb92a680.js","assets/runnerData.b6d14fa3.js","assets/pubsub.798be8d6.js","assets/fetch.c05ae51d.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=b({history:g("/"),routes:k,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),m=await A.allow(p),{redirect:d,...f}=t.query;switch(m.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:d||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(v(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,v as g,k as r,O as s,A as u};
//# sourceMappingURL=index.c7780fa0.js.map
