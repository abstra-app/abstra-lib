var b=Object.defineProperty;var _=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(_(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as w,g as y,h as g,_ as s,i as E}from"./outputWidgets.24d715aa.js";import{P as T}from"./pubsub.d6a14665.js";import{l as I}from"./fetch.27e19fea.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="df7bb0f4-c8b7-4965-8e7c-cd1ff8c847d7",e._sentryDebugIdIdentifier="sentry-dbid-df7bb0f4-c8b7-4965-8e7c-cd1ff8c847d7")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=w(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,k=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.30450709.js"),["assets/Home.30450709.js","assets/outputWidgets.24d715aa.js","assets/outputWidgets.e406c4a0.css","assets/api.d79000fe.js","assets/runnerData.e9246bba.js","assets/url.7c45b197.js","assets/asyncComputed.a572f2b3.js","assets/PlayerNavbar.cd30d16e.js","assets/PhKanban.vue.c5913462.js","assets/PhSignOut.vue.af90e9a7.js","assets/Text.a3d7b61b.js","assets/index.103a8b3e.js","assets/Link.20d99be1.js","assets/Paragraph.876679f3.js","assets/Title.0a3b50b2.js","assets/index.f48e2d77.js","assets/PlayerNavbar.bb4bfb7b.css","assets/HomeContent.570ad520.js","assets/PhArrowSquareOut.vue.1a18478c.js","assets/index.8cdda484.js","assets/Card.5d68954f.js","assets/index.79d15ce1.js","assets/TabPane.30431eb8.js","assets/hasIn.27500da0.js","assets/index.89036478.js","assets/HomeContent.43c54c8b.css","assets/pubsub.d6a14665.js","assets/fetch.27e19fea.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>s(()=>import("./Kanban.02492236.js"),["assets/Kanban.02492236.js","assets/outputWidgets.24d715aa.js","assets/outputWidgets.e406c4a0.css","assets/api.d79000fe.js","assets/runnerData.e9246bba.js","assets/url.7c45b197.js","assets/repository.2b9a8002.js","assets/asyncComputed.a572f2b3.js","assets/workspaces.b5457d8f.js","assets/record.578a1ea0.js","assets/pubsub.d6a14665.js","assets/scripts.318982b2.js","assets/envVars.2e44d61b.js","assets/api.ad8d00b7.js","assets/index.cf4c23b9.js","assets/metadata.f952be97.js","assets/PhCheckCircle.vue.a1aa7f79.js","assets/PhScroll.vue.6280fb26.js","assets/PhWebhooksLogo.vue.5ca7da22.js","assets/ant-design.0626d571.js","assets/index.c559b995.js","assets/Modal.4c3e5718.js","assets/Text.a3d7b61b.js","assets/index.89036478.js","assets/index.aa9d3c06.js","assets/index.f6371444.js","assets/Paragraph.876679f3.js","assets/index.103a8b3e.js","assets/Link.20d99be1.js","assets/Title.0a3b50b2.js","assets/index.4dbf9613.js","assets/CollapsePanel.abab8f6d.js","assets/index.13d0fd32.js","assets/index.3db07a56.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.a6d62f78.js","assets/Card.5d68954f.js","assets/index.79d15ce1.js","assets/TabPane.30431eb8.js","assets/hasIn.27500da0.js","assets/vuedraggable.umd.989a3b8f.js","assets/index.b04babad.js","assets/Form.6c56759c.js","assets/fetch.27e19fea.js","assets/repository.06463f50.css","assets/PlayerNavbar.cd30d16e.js","assets/PhKanban.vue.c5913462.js","assets/PhSignOut.vue.af90e9a7.js","assets/index.f48e2d77.js","assets/PlayerNavbar.bb4bfb7b.css"]),meta:{title:"Kanban - Abstra",cb:()=>"kanban"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.d65cefb7.js"),["assets/Login.d65cefb7.js","assets/api.d79000fe.js","assets/outputWidgets.24d715aa.js","assets/outputWidgets.e406c4a0.css","assets/runnerData.e9246bba.js","assets/url.7c45b197.js","assets/Passwordless.0304ac49.js","assets/index.d988ec0e.js","assets/PhArrowClockwise.vue.c1a5ef99.js","assets/CircularLoading.f881097d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.a572f2b3.js","assets/WidgetsFrame.8934aefe.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.d6a14665.js","assets/fetch.27e19fea.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.34d4d149.js"),["assets/Error.34d4d149.js","assets/PlayerNavbar.cd30d16e.js","assets/outputWidgets.24d715aa.js","assets/outputWidgets.e406c4a0.css","assets/PhKanban.vue.c5913462.js","assets/PhSignOut.vue.af90e9a7.js","assets/Text.a3d7b61b.js","assets/index.103a8b3e.js","assets/Link.20d99be1.js","assets/Paragraph.876679f3.js","assets/Title.0a3b50b2.js","assets/index.f48e2d77.js","assets/PlayerNavbar.bb4bfb7b.css","assets/api.d79000fe.js","assets/runnerData.e9246bba.js","assets/url.7c45b197.js","assets/asyncComputed.a572f2b3.js","assets/WidgetsFrame.8934aefe.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.d6a14665.js","assets/fetch.27e19fea.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.a41b0234.js"),["assets/Form.a41b0234.js","assets/outputWidgets.24d715aa.js","assets/outputWidgets.e406c4a0.css","assets/FormRunner.e808243c.js","assets/url.7c45b197.js","assets/Passwordless.0304ac49.js","assets/index.d988ec0e.js","assets/PhArrowClockwise.vue.c1a5ef99.js","assets/CircularLoading.f881097d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.cd30d16e.js","assets/PhKanban.vue.c5913462.js","assets/PhSignOut.vue.af90e9a7.js","assets/Text.a3d7b61b.js","assets/index.103a8b3e.js","assets/Link.20d99be1.js","assets/Paragraph.876679f3.js","assets/Title.0a3b50b2.js","assets/index.f48e2d77.js","assets/PlayerNavbar.bb4bfb7b.css","assets/WidgetsFrame.8934aefe.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.174e3a36.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.5b6120cc.js","assets/Card.5d68954f.js","assets/index.79d15ce1.js","assets/TabPane.30431eb8.js","assets/hasIn.27500da0.js","assets/FormRunner.af6becff.css","assets/asyncComputed.a572f2b3.js","assets/uuid.1b5489f1.js","assets/api.d79000fe.js","assets/runnerData.e9246bba.js","assets/pubsub.d6a14665.js","assets/fetch.27e19fea.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=y({history:g("/"),routes:k,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),d=await A.allow(p),{redirect:m,...f}=t.query;switch(d.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:m||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(v(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,v as g,k as r,O as s,A as u};
//# sourceMappingURL=index.2bfaad95.js.map
