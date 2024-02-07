var m=Object.defineProperty;var w=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(w(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as f,g as y,h as _,i as b,_ as s}from"./outputWidgets.5c52fa87.js";import{P as g}from"./pubsub.5093c187.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a6cd15aa-8b6f-40aa-9c37-e85259b0b3c4",t._sentryDebugIdIdentifier="sentry-dbid-a6cd15aa-8b6f-40aa-9c37-e85259b0b3c4")}catch{}})();const E=(...t)=>window.fetch(...t),r=class{constructor(e=new g,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(r.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(r.key)}getUser(){const e=this.getJWT();if(e)try{const a=f(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(r.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=r;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/_player/kanban",name:"playerKanban",component:()=>s(()=>import("./Kanban.ca5aeae9.js"),["assets/Kanban.ca5aeae9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.9b1f1206.js","assets/outputWidgets.5c52fa87.js","assets/outputWidgets.27f987db.css","assets/asyncComputed.26d9bcc1.js","assets/Text.c9a398d0.js","assets/Base.6d1a6939.js","assets/index.6e14eff5.js","assets/Link.c6635c0a.js","assets/Paragraph.cff93cf2.js","assets/Title.91b6cec6.js","assets/index.96485183.js","assets/Navbar.928c534f.css","assets/repository.689a9c78.js","assets/ant-design.5e093646.js","assets/index.076f710c.js","assets/Modal.2c05a20d.js","assets/metadata.cf9eeb13.js","assets/icons.03282d1d.js","assets/index.0be66a31.js","assets/index.f2d17967.js","assets/index.2f763437.js","assets/index.e54eb3d0.js","assets/index.caf7d451.js","assets/Card.f3624547.js","assets/TabPane.78291069.js","assets/hasIn.f2c6482d.js","assets/CollapsePanel.22f449e1.js","assets/Form.17a01b6e.js","assets/FormItem.eb04c2fc.js","assets/Timeline.2345f6b9.js","assets/index.c170207f.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.65a0c9d8.js","assets/index.cf4c23b9.js","assets/scripts.7d1352d2.js","assets/record.eec0c608.js","assets/pubsub.5093c187.js","assets/workspaces.b84f9d3d.js","assets/runnerData.82f622be.js","assets/url.8bc1ece1.js","assets/ExpandOutlined.62f134a5.js","assets/repository.a6dad21c.css","assets/api.23d9b812.js"]),meta:{title:"Abstra - Kanban",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>s(()=>import("./Login.351aa227.js"),["assets/Login.351aa227.js","assets/api.23d9b812.js","assets/runnerData.82f622be.js","assets/url.8bc1ece1.js","assets/outputWidgets.5c52fa87.js","assets/outputWidgets.27f987db.css","assets/Passwordless.72ff327e.js","assets/icons.03282d1d.js","assets/CircularLoading.4d5881ae.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.26d9bcc1.js","assets/WidgetsFrame.3767f614.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.5093c187.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>s(()=>import("./Error.c4bbf039.js"),["assets/Error.c4bbf039.js","assets/Navbar.vue_vue_type_script_setup_true_lang.9b1f1206.js","assets/outputWidgets.5c52fa87.js","assets/outputWidgets.27f987db.css","assets/asyncComputed.26d9bcc1.js","assets/Text.c9a398d0.js","assets/Base.6d1a6939.js","assets/index.6e14eff5.js","assets/Link.c6635c0a.js","assets/Paragraph.cff93cf2.js","assets/Title.91b6cec6.js","assets/index.96485183.js","assets/Navbar.928c534f.css","assets/api.23d9b812.js","assets/runnerData.82f622be.js","assets/url.8bc1ece1.js","assets/WidgetsFrame.3767f614.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.5093c187.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"player",component:()=>s(()=>import("./Player.e2569b8e.js"),["assets/Player.e2569b8e.js","assets/FormRunner.7adf5098.js","assets/url.8bc1ece1.js","assets/outputWidgets.5c52fa87.js","assets/outputWidgets.27f987db.css","assets/Passwordless.72ff327e.js","assets/icons.03282d1d.js","assets/CircularLoading.4d5881ae.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.c90d2c39.js","assets/PlayerNavbar.ead94b03.css","assets/ActionButton.37faf678.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.3767f614.js","assets/WidgetsFrame.97ae601d.css","assets/index.6e14eff5.js","assets/Base.6d1a6939.js","assets/Link.c6635c0a.js","assets/Paragraph.cff93cf2.js","assets/Text.c9a398d0.js","assets/Title.91b6cec6.js","assets/Card.f3624547.js","assets/TabPane.78291069.js","assets/hasIn.f2c6482d.js","assets/FormRunner.09f8a51e.css","assets/uuid.3fa39a9b.js","assets/asyncComputed.26d9bcc1.js","assets/api.23d9b812.js","assets/runnerData.82f622be.js","assets/pubsub.5093c187.js","assets/Player.6fed9080.css"]),meta:{allowUnauthenticated:!0}}],l=y({history:_("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{b(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function k(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await i.init(e)}const o=class{constructor(e){this.config=e}static async init(e){o.instance=new o(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let i=o;u(i,"instance",null);export{i as S,l as a,E as l,R as r,k as s,p as u};
//# sourceMappingURL=index.de88781f.js.map
