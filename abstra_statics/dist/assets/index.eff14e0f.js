var _=Object.defineProperty;var w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(w(e,typeof t!="symbol"?t+"":t,a),a);import{S as u,t as y,g as b,h as g,_ as s,i as E}from"./outputWidgets.ee4285cb.js";import{P as T}from"./pubsub.b41a6ead.js";import{l as I}from"./fetch.8d052b9a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ac59af6f-b2f3-432d-aed9-138c067ab4f0",e._sentryDebugIdIdentifier="sentry-dbid-ac59af6f-b2f3-432d-aed9-138c067ab4f0")}catch{}})();const r=class{constructor(t=new T,a=I){this.pubsub=t,this.fetch=a}saveJWT(t){u.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return u.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const a=y(t);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:t,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const t=this.getJWT();return t?{Authorization:`Bearer ${t}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}async signUp(){return(await this.fetch("/_user/sign-up",{method:"POST",headers:this.authHeaders()})).status===200}async allow(t){return(await this.fetch(`/_access-control/allow/${t}`,{headers:this.authHeaders()})).json()}};let n=r;c(n,"key","abstra:auth:jwt");const A=new n,k=[{path:"/",name:"playerHome",component:()=>s(()=>import("./Home.79e1d14b.js"),["assets/Home.79e1d14b.js","assets/outputWidgets.ee4285cb.js","assets/outputWidgets.25fe30e4.css","assets/api.5f84ce4d.js","assets/runnerData.dde95c73.js","assets/url.b1eca2cd.js","assets/asyncComputed.092d2b62.js","assets/PlayerNavbar.0dc83677.js","assets/PhKanban.vue.05028159.js","assets/PhSignOut.vue.a0de0697.js","assets/Text.a86ec181.js","assets/index.df8571d0.js","assets/Link.c624e368.js","assets/Paragraph.2423987a.js","assets/Title.4d7de464.js","assets/index.c811ba96.js","assets/PlayerNavbar.bb4bfb7b.css","assets/HomeContent.8df748f2.js","assets/PhArrowSquareOut.vue.6ed62cc5.js","assets/index.15ad8139.js","assets/Card.5cff9fcc.js","assets/index.5f463ece.js","assets/TabPane.db315ff0.js","assets/hasIn.b845201d.js","assets/index.f4840d98.js","assets/HomeContent.43c54c8b.css","assets/pubsub.b41a6ead.js","assets/fetch.8d052b9a.js","assets/Home.aa6a877e.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>s(()=>import("./Kanban.8e667b9c.js"),["assets/Kanban.8e667b9c.js","assets/outputWidgets.ee4285cb.js","assets/outputWidgets.25fe30e4.css","assets/api.5f84ce4d.js","assets/runnerData.dde95c73.js","assets/url.b1eca2cd.js","assets/repository.62f1df05.js","assets/asyncComputed.092d2b62.js","assets/workspaces.b3c39043.js","assets/record.523ec8a4.js","assets/pubsub.b41a6ead.js","assets/scripts.2d29246a.js","assets/envVars.c6422891.js","assets/api.73359232.js","assets/index.cf4c23b9.js","assets/metadata.b98a8fa2.js","assets/PhCheckCircle.vue.217350f6.js","assets/PhScroll.vue.d78f3e5c.js","assets/PhWebhooksLogo.vue.bd019722.js","assets/ant-design.bb3a58be.js","assets/index.5e4d1537.js","assets/Modal.8adb656c.js","assets/Text.a86ec181.js","assets/index.f4840d98.js","assets/index.6cac66ae.js","assets/index.e8ad39b1.js","assets/Paragraph.2423987a.js","assets/index.df8571d0.js","assets/Link.c624e368.js","assets/Title.4d7de464.js","assets/index.8e384b72.js","assets/CollapsePanel.c3e4c354.js","assets/index.dea88943.js","assets/index.aa50f96d.js","assets/isNumeric.75337b1e.js","assets/Card.5cff9fcc.js","assets/index.5f463ece.js","assets/TabPane.db315ff0.js","assets/hasIn.b845201d.js","assets/vuedraggable.umd.ad4a6429.js","assets/index.16cbd930.js","assets/Form.3f50e7fc.js","assets/fetch.8d052b9a.js","assets/repository.06463f50.css","assets/PlayerNavbar.0dc83677.js","assets/PhKanban.vue.05028159.js","assets/PhSignOut.vue.a0de0697.js","assets/index.c811ba96.js","assets/PlayerNavbar.bb4bfb7b.css"]),meta:{title:"Kanban - Abstra",cb:()=>"kanban"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.2c91ae48.js"),["assets/Login.2c91ae48.js","assets/api.5f84ce4d.js","assets/outputWidgets.ee4285cb.js","assets/outputWidgets.25fe30e4.css","assets/runnerData.dde95c73.js","assets/url.b1eca2cd.js","assets/Passwordless.c132909e.js","assets/index.906585f5.js","assets/PhArrowClockwise.vue.af96b521.js","assets/CircularLoading.315f22e5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.092d2b62.js","assets/WidgetsFrame.2593d3b1.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.b41a6ead.js","assets/fetch.8d052b9a.js","assets/Login.75d7f0c2.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.7ebd806a.js"),["assets/Error.7ebd806a.js","assets/PlayerNavbar.0dc83677.js","assets/outputWidgets.ee4285cb.js","assets/outputWidgets.25fe30e4.css","assets/PhKanban.vue.05028159.js","assets/PhSignOut.vue.a0de0697.js","assets/Text.a86ec181.js","assets/index.df8571d0.js","assets/Link.c624e368.js","assets/Paragraph.2423987a.js","assets/Title.4d7de464.js","assets/index.c811ba96.js","assets/PlayerNavbar.bb4bfb7b.css","assets/api.5f84ce4d.js","assets/runnerData.dde95c73.js","assets/url.b1eca2cd.js","assets/asyncComputed.092d2b62.js","assets/WidgetsFrame.2593d3b1.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.b41a6ead.js","assets/fetch.8d052b9a.js","assets/Error.075e1648.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>s(()=>import("./Form.76b209ed.js"),["assets/Form.76b209ed.js","assets/outputWidgets.ee4285cb.js","assets/outputWidgets.25fe30e4.css","assets/FormRunner.2e0c03b7.js","assets/url.b1eca2cd.js","assets/Passwordless.c132909e.js","assets/index.906585f5.js","assets/PhArrowClockwise.vue.af96b521.js","assets/CircularLoading.315f22e5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.0dc83677.js","assets/PhKanban.vue.05028159.js","assets/PhSignOut.vue.a0de0697.js","assets/Text.a86ec181.js","assets/index.df8571d0.js","assets/Link.c624e368.js","assets/Paragraph.2423987a.js","assets/Title.4d7de464.js","assets/index.c811ba96.js","assets/PlayerNavbar.bb4bfb7b.css","assets/WidgetsFrame.2593d3b1.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.9877b95a.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.5c75306d.js","assets/Card.5cff9fcc.js","assets/index.5f463ece.js","assets/TabPane.db315ff0.js","assets/hasIn.b845201d.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.092d2b62.js","assets/uuid.cda9ad6d.js","assets/api.5f84ce4d.js","assets/runnerData.dde95c73.js","assets/pubsub.b41a6ead.js","assets/fetch.8d052b9a.js","assets/Form.1e229486.css"]),meta:{cb:e=>e.params.path}}],l=b({history:g("/"),routes:k,scrollBehavior(e){if(e.hash)return{el:e.hash}}}),v=e=>async(t,a)=>{E(t,a);const h=t.meta;if(h.allowUnauthenticated)return;const p=h.cb(t),d=await A.allow(p),{redirect:m,...f}=t.query;switch(d.status){case"ALLOWED":break;case"UNAUTHORIZED":await e.push({name:"playerLogin",query:{...f,redirect:m||t.path},params:t.params});break;default:await e.push({name:"error",params:{status:"403"}})}};l.beforeEach(v(l));async function O(){const e=await fetch("/_settings");if(!e.ok)throw new Error(await e.text());const t=await e.json();await o.init(t)}const i=class{constructor(t){this.config=t}static async init(t){i.instance=new i(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,v as g,k as r,O as s,A as u};
//# sourceMappingURL=index.eff14e0f.js.map
