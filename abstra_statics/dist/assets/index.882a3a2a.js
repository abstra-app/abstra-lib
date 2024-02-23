var m=Object.defineProperty;var w=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(w(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as _,g as f,h as y,i as b,_ as r}from"./outputWidgets.f4f8fd75.js";import{P as g}from"./pubsub.db1a1016.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="75e162bd-94fd-47b1-8b58-7e127d96a83d",t._sentryDebugIdIdentifier="sentry-dbid-75e162bd-94fd-47b1-8b58-7e127d96a83d")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new g,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=_(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const d=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.d1f5757e.js"),["assets/Home.d1f5757e.js","assets/api.cf42fe2f.js","assets/runnerData.d72452cb.js","assets/url.a6a9b3e6.js","assets/outputWidgets.f4f8fd75.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.28d6a0e8.js","assets/icons.2ffdeb1d.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.0205b66f.js","assets/PlayerNavbar.387187c9.css","assets/index.29ae103c.js","assets/Base.7f327c7e.js","assets/Typography.049c59ac.js","assets/Link.79451ab0.js","assets/Paragraph.0ac0a61c.js","assets/Text.010cf31d.js","assets/Title.e836aa1c.js","assets/index.769535bb.js","assets/Card.78c95692.js","assets/TabPane.95ea4f73.js","assets/hasIn.641a4d68.js","assets/index.aba92d88.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.427af5e3.js"),["assets/Kanban.427af5e3.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2fa3e563.js","assets/outputWidgets.f4f8fd75.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.28d6a0e8.js","assets/Text.010cf31d.js","assets/Base.7f327c7e.js","assets/Typography.049c59ac.js","assets/index.29ae103c.js","assets/Link.79451ab0.js","assets/Paragraph.0ac0a61c.js","assets/Title.e836aa1c.js","assets/index.ae8f6171.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.9c70c26e.js","assets/api.e87280bd.js","assets/index.cf4c23b9.js","assets/icons.2ffdeb1d.js","assets/index.aba92d88.js","assets/ant-design.85b9f073.js","assets/index.f034acca.js","assets/Modal.cbed1604.js","assets/index.06a0d44e.js","assets/index.d1ce4a22.js","assets/index.21842e98.js","assets/CollapsePanel.9746147a.js","assets/Form.cbefc663.js","assets/hasIn.641a4d68.js","assets/Timeline.6c02cd46.js","assets/index.7eedeee7.js","assets/index.0f96d0f5.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.cc108e3d.js","assets/workspaces.893594d4.js","assets/runnerData.d72452cb.js","assets/url.a6a9b3e6.js","assets/record.7a0af46e.js","assets/pubsub.db1a1016.js","assets/scripts.85dbb2a4.js","assets/envVars.b5bde394.js","assets/ExpandOutlined.95d79b2b.js","assets/Card.78c95692.js","assets/TabPane.95ea4f73.js","assets/repository.8e89c80c.css","assets/api.cf42fe2f.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.a6919966.js"),["assets/Login.a6919966.js","assets/api.cf42fe2f.js","assets/runnerData.d72452cb.js","assets/url.a6a9b3e6.js","assets/outputWidgets.f4f8fd75.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.8ae84fa7.js","assets/icons.2ffdeb1d.js","assets/CircularLoading.eba39d16.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.28d6a0e8.js","assets/WidgetsFrame.ce2640e0.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.db1a1016.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.3c42f937.js"),["assets/Error.3c42f937.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2fa3e563.js","assets/outputWidgets.f4f8fd75.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.28d6a0e8.js","assets/Text.010cf31d.js","assets/Base.7f327c7e.js","assets/Typography.049c59ac.js","assets/index.29ae103c.js","assets/Link.79451ab0.js","assets/Paragraph.0ac0a61c.js","assets/Title.e836aa1c.js","assets/index.ae8f6171.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.cf42fe2f.js","assets/runnerData.d72452cb.js","assets/url.a6a9b3e6.js","assets/WidgetsFrame.ce2640e0.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.db1a1016.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.03bf16da.js"),["assets/Form.03bf16da.js","assets/outputWidgets.f4f8fd75.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.10184f0d.js","assets/url.a6a9b3e6.js","assets/Passwordless.8ae84fa7.js","assets/icons.2ffdeb1d.js","assets/CircularLoading.eba39d16.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.0205b66f.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.ce2640e0.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.84a7234e.js","assets/Steps.4a8d55e8.css","assets/Card.78c95692.js","assets/TabPane.95ea4f73.js","assets/hasIn.641a4d68.js","assets/Typography.049c59ac.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.28d6a0e8.js","assets/uuid.39e545d1.js","assets/api.cf42fe2f.js","assets/runnerData.d72452cb.js","assets/pubsub.db1a1016.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=f({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{b(t,e);const a=d.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...p}=t.query;await l.push({name:"playerLogin",query:{...p,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await d.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,d as u};
//# sourceMappingURL=index.882a3a2a.js.map
