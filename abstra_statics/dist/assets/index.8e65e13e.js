var m=Object.defineProperty;var _=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as f,h as y,i as g,_ as r}from"./outputWidgets.cdb991c0.js";import{P as b}from"./pubsub.83305973.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="65d74c54-a239-4653-8e04-283a8f777dcc",t._sentryDebugIdIdentifier="sentry-dbid-65d74c54-a239-4653-8e04-283a8f777dcc")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.3062b275.js"),["assets/Home.3062b275.js","assets/api.569e0d1c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/icons.6cfd480b.js","assets/index.6f9053ce.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Paragraph.0cc4d62c.js","assets/Text.b9fe0916.js","assets/Title.7c191db2.js","assets/index.8f2edd1b.js","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/index.a9cbb60d.js","assets/Home.d45e93a9.css"]),meta:{title:"Abstra - Home"}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.cf465e32.js"),["assets/Kanban.cf465e32.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b9bb26c8.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/Text.b9fe0916.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.6f9053ce.js","assets/Link.530be3b8.js","assets/Paragraph.0cc4d62c.js","assets/Title.7c191db2.js","assets/index.e784275f.js","assets/Navbar.928c534f.css","assets/repository.eb0d45d1.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/metadata.d3183e4c.js","assets/icons.6cfd480b.js","assets/index.a9cbb60d.js","assets/index.f5c37cf3.js","assets/index.216d7748.js","assets/index.5a5faaa3.js","assets/index.a1ab1438.js","assets/CollapsePanel.27924a08.js","assets/Form.b3aa2dbb.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Timeline.969823d9.js","assets/index.68d11e47.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.dedff81b.js","assets/index.cf4c23b9.js","assets/scripts.beead079.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/ExpandOutlined.85b1abd7.js","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/repository.a6dad21c.css","assets/api.569e0d1c.js"]),meta:{title:"Abstra - Kanban",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.b0c32a99.js"),["assets/Login.b0c32a99.js","assets/api.569e0d1c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/Passwordless.f1d73db0.js","assets/icons.6cfd480b.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.08afc622.js","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.83305973.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.0d5a22c5.js"),["assets/Error.0d5a22c5.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b9bb26c8.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/Text.b9fe0916.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.6f9053ce.js","assets/Link.530be3b8.js","assets/Paragraph.0cc4d62c.js","assets/Title.7c191db2.js","assets/index.e784275f.js","assets/Navbar.928c534f.css","assets/api.569e0d1c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.83305973.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"player",component:()=>r(()=>import("./Player.8e4bf41b.js"),["assets/Player.8e4bf41b.js","assets/FormRunner.a377a8d3.js","assets/url.89f36b88.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/Passwordless.f1d73db0.js","assets/icons.6cfd480b.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.092146f9.js","assets/PlayerNavbar.ead94b03.css","assets/ActionButton.386ea3be.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/Typography.bbe6290b.js","assets/FormRunner.09f8a51e.css","assets/uuid.befb7455.js","assets/asyncComputed.08afc622.js","assets/api.569e0d1c.js","assets/runnerData.00833d0d.js","assets/pubsub.83305973.js","assets/Player.6fed9080.css"]),meta:{allowUnauthenticated:!0}}],l=f({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.8e65e13e.js.map
