var d=Object.defineProperty;var f=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.aff95ef3.js";import{P as b}from"./pubsub.3b8860eb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="85eb721b-58fa-4e70-a18a-80733911f872",t._sentryDebugIdIdentifier="sentry-dbid-85eb721b-58fa-4e70-a18a-80733911f872")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.13c3f9de.js"),["assets/Home.13c3f9de.js","assets/api.4ab33756.js","assets/runnerData.3ccad385.js","assets/url.644d7978.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/icons.9b000560.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.3c0f7f23.js","assets/PlayerNavbar.387187c9.css","assets/index.5c6d0063.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Link.756f024c.js","assets/Paragraph.645d5000.js","assets/Text.da7d6e49.js","assets/Title.6f043c8e.js","assets/index.f96c5e06.js","assets/Card.aee71dc0.js","assets/TabPane.85ea9e94.js","assets/hasIn.59f3ceea.js","assets/index.4cadba5d.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.93a16dba.js"),["assets/Kanban.93a16dba.js","assets/Navbar.vue_vue_type_script_setup_true_lang.4f2503c7.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/Text.da7d6e49.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.5c6d0063.js","assets/Link.756f024c.js","assets/Paragraph.645d5000.js","assets/Title.6f043c8e.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.a3546bac.js","assets/api.5094265e.js","assets/index.cf4c23b9.js","assets/icons.9b000560.js","assets/index.4cadba5d.js","assets/ant-design.86abae93.js","assets/index.72a4e529.js","assets/Modal.5729ac3b.js","assets/index.d203a4f6.js","assets/index.7417f6e6.js","assets/index.e60fe790.js","assets/CollapsePanel.6015b58b.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Timeline.0f378a3a.js","assets/index.575d7595.js","assets/index.7830cf80.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.ce029bf0.js","assets/workspaces.7bdf5f89.js","assets/runnerData.3ccad385.js","assets/url.644d7978.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/scripts.7e5ad38f.js","assets/envVars.ad1c1662.js","assets/ExpandOutlined.740722b7.js","assets/Card.aee71dc0.js","assets/TabPane.85ea9e94.js","assets/repository.fa37235a.css","assets/api.4ab33756.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.216a3dc3.js"),["assets/Login.216a3dc3.js","assets/api.4ab33756.js","assets/runnerData.3ccad385.js","assets/url.644d7978.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/Passwordless.75ba2e58.js","assets/icons.9b000560.js","assets/CircularLoading.cd15138d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.20ee3174.js","assets/WidgetsFrame.70c2a2d0.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.3b8860eb.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.c358a838.js"),["assets/Error.c358a838.js","assets/Navbar.vue_vue_type_script_setup_true_lang.4f2503c7.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/Text.da7d6e49.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.5c6d0063.js","assets/Link.756f024c.js","assets/Paragraph.645d5000.js","assets/Title.6f043c8e.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.4ab33756.js","assets/runnerData.3ccad385.js","assets/url.644d7978.js","assets/WidgetsFrame.70c2a2d0.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.3b8860eb.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.6e98fd6d.js"),["assets/Form.6e98fd6d.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/FormRunner.d5ae6fa1.js","assets/url.644d7978.js","assets/Passwordless.75ba2e58.js","assets/icons.9b000560.js","assets/CircularLoading.cd15138d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.3c0f7f23.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.70c2a2d0.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.bab4ef97.js","assets/Steps.4a8d55e8.css","assets/Card.aee71dc0.js","assets/TabPane.85ea9e94.js","assets/hasIn.59f3ceea.js","assets/Typography.60000f40.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.20ee3174.js","assets/uuid.99b569fe.js","assets/api.4ab33756.js","assets/runnerData.3ccad385.js","assets/pubsub.3b8860eb.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.4fa71473.js.map
