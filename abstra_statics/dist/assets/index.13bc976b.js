var _=Object.defineProperty;var w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(w(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as y,g,h as b,_ as s,i as E}from"./outputWidgets.b653f677.js";import{P as T}from"./pubsub.3a188a06.js";import{l as I}from"./fetch.cb37bfb0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3f92a031-3011-428f-9221-55560c0457c6",e._sentryDebugIdIdentifier="sentry-dbid-3f92a031-3011-428f-9221-55560c0457c6")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=y(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,k=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.1e2a5c6f.js"),["assets/Home.1e2a5c6f.js","assets/outputWidgets.b653f677.js","assets/outputWidgets.25fe30e4.css","assets/api.ca3225d6.js","assets/runnerData.6febd8a5.js","assets/url.efd243d8.js","assets/asyncComputed.32b8217e.js","assets/PlayerNavbar.57fff3a8.js","assets/PhKanban.vue.876a5e10.js","assets/PhSignOut.vue.340a98d7.js","assets/Text.5459f482.js","assets/index.74986df3.js","assets/Link.254c3c75.js","assets/Paragraph.eaf9b6ce.js","assets/Title.1f5f1931.js","assets/index.37c0d891.js","assets/PlayerNavbar.bb4bfb7b.css","assets/HomeContent.b111516a.js","assets/PhArrowSquareOut.vue.f2f2dded.js","assets/index.04508b04.js","assets/Card.15d03122.js","assets/index.63a47c31.js","assets/TabPane.65183e45.js","assets/hasIn.8e632b5d.js","assets/index.fc939c6b.js","assets/HomeContent.43c54c8b.css","assets/pubsub.3a188a06.js","assets/fetch.cb37bfb0.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>s(()=>import("./Kanban.0ab09f33.js"),["assets/Kanban.0ab09f33.js","assets/outputWidgets.b653f677.js","assets/outputWidgets.25fe30e4.css","assets/api.ca3225d6.js","assets/runnerData.6febd8a5.js","assets/url.efd243d8.js","assets/repository.09b74fb3.js","assets/asyncComputed.32b8217e.js","assets/workspaces.91c2a9df.js","assets/record.2804a818.js","assets/pubsub.3a188a06.js","assets/scripts.8e0a044e.js","assets/envVars.8229e354.js","assets/api.588dd97b.js","assets/index.cf4c23b9.js","assets/metadata.2dc29168.js","assets/PhCheckCircle.vue.06bc3e0d.js","assets/PhScroll.vue.58d87158.js","assets/PhWebhooksLogo.vue.a59ef422.js","assets/ant-design.68d351ea.js","assets/index.6dbede52.js","assets/Modal.ea6c45c4.js","assets/Text.5459f482.js","assets/index.fc939c6b.js","assets/index.b3a1024a.js","assets/index.73d62920.js","assets/Paragraph.eaf9b6ce.js","assets/index.74986df3.js","assets/Link.254c3c75.js","assets/Title.1f5f1931.js","assets/index.61e28d3a.js","assets/CollapsePanel.8da25d04.js","assets/index.c20e26d1.js","assets/index.7dcfc40c.js","assets/isNumeric.75337b1e.js","assets/Card.15d03122.js","assets/index.63a47c31.js","assets/TabPane.65183e45.js","assets/hasIn.8e632b5d.js","assets/vuedraggable.umd.02f42947.js","assets/index.744bc5a6.js","assets/Form.c9d93d90.js","assets/fetch.cb37bfb0.js","assets/repository.06463f50.css","assets/PlayerNavbar.57fff3a8.js","assets/PhKanban.vue.876a5e10.js","assets/PhSignOut.vue.340a98d7.js","assets/index.37c0d891.js","assets/PlayerNavbar.bb4bfb7b.css"]),meta:{title:"Kanban - Abstra",cb:()=>"kanban"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.480d524f.js"),["assets/Login.480d524f.js","assets/api.ca3225d6.js","assets/outputWidgets.b653f677.js","assets/outputWidgets.25fe30e4.css","assets/runnerData.6febd8a5.js","assets/url.efd243d8.js","assets/Passwordless.be6a5515.js","assets/index.58a7800f.js","assets/PhArrowClockwise.vue.13162c82.js","assets/CircularLoading.c11cb651.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.32b8217e.js","assets/WidgetsFrame.0c6b3a1f.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.3a188a06.js","assets/fetch.cb37bfb0.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.3541f48b.js"),["assets/Error.3541f48b.js","assets/PlayerNavbar.57fff3a8.js","assets/outputWidgets.b653f677.js","assets/outputWidgets.25fe30e4.css","assets/PhKanban.vue.876a5e10.js","assets/PhSignOut.vue.340a98d7.js","assets/Text.5459f482.js","assets/index.74986df3.js","assets/Link.254c3c75.js","assets/Paragraph.eaf9b6ce.js","assets/Title.1f5f1931.js","assets/index.37c0d891.js","assets/PlayerNavbar.bb4bfb7b.css","assets/api.ca3225d6.js","assets/runnerData.6febd8a5.js","assets/url.efd243d8.js","assets/asyncComputed.32b8217e.js","assets/WidgetsFrame.0c6b3a1f.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.3a188a06.js","assets/fetch.cb37bfb0.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.e3ee78aa.js"),["assets/Form.e3ee78aa.js","assets/outputWidgets.b653f677.js","assets/outputWidgets.25fe30e4.css","assets/FormRunner.23ff6a1e.js","assets/url.efd243d8.js","assets/Passwordless.be6a5515.js","assets/index.58a7800f.js","assets/PhArrowClockwise.vue.13162c82.js","assets/CircularLoading.c11cb651.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.57fff3a8.js","assets/PhKanban.vue.876a5e10.js","assets/PhSignOut.vue.340a98d7.js","assets/Text.5459f482.js","assets/index.74986df3.js","assets/Link.254c3c75.js","assets/Paragraph.eaf9b6ce.js","assets/Title.1f5f1931.js","assets/index.37c0d891.js","assets/PlayerNavbar.bb4bfb7b.css","assets/WidgetsFrame.0c6b3a1f.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.963e6ca6.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.d2c08c80.js","assets/Card.15d03122.js","assets/index.63a47c31.js","assets/TabPane.65183e45.js","assets/hasIn.8e632b5d.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.32b8217e.js","assets/uuid.17d3f0a7.js","assets/api.ca3225d6.js","assets/runnerData.6febd8a5.js","assets/pubsub.3a188a06.js","assets/fetch.cb37bfb0.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=g({history:b("/"),routes:k,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),m=await A.allow(p),{redirect:d,...f}=t.query;switch(m.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:d||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(v(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,v as g,k as r,O as s,A as u};
//# sourceMappingURL=index.13bc976b.js.map
