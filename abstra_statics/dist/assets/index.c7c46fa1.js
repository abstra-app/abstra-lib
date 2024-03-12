var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.930261a2.js";import{P as b}from"./pubsub.cb12d51c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f1aac69d-3427-43b5-9d3d-cc716d1e94fa",t._sentryDebugIdIdentifier="sentry-dbid-f1aac69d-3427-43b5-9d3d-cc716d1e94fa")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const d=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.5d5ce6ed.js"),["assets/Home.5d5ce6ed.js","assets/outputWidgets.930261a2.js","assets/outputWidgets.a254438e.css","assets/api.a46d439d.js","assets/runnerData.7e97e2bb.js","assets/url.7abd79b4.js","assets/asyncComputed.f393bf23.js","assets/PlayerNavbar.5261e13f.js","assets/icons.90446bd5.js","assets/PlayerNavbar.387187c9.css","assets/repository.6e340134.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.fdb2c145.js","assets/Base.bf1ea121.js","assets/Typography.4474700c.js","assets/Link.1c567eb9.js","assets/Paragraph.58a3d09a.js","assets/Text.6f904d4c.js","assets/Title.ed6ebfcb.js","assets/index.7d010531.js","assets/Card.4e641580.js","assets/TabPane.61c81103.js","assets/hasIn.b1eb2850.js","assets/index.d9cb8b61.js","assets/pubsub.cb12d51c.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.053783e3.js"),["assets/Kanban.053783e3.js","assets/outputWidgets.930261a2.js","assets/outputWidgets.a254438e.css","assets/api.a46d439d.js","assets/runnerData.7e97e2bb.js","assets/url.7abd79b4.js","assets/repository.266e92f2.js","assets/asyncComputed.f393bf23.js","assets/workspaces.95fd4183.js","assets/record.4a033fe0.js","assets/pubsub.cb12d51c.js","assets/scripts.1bd45231.js","assets/envVars.a1af7f51.js","assets/api.84a0c4e5.js","assets/index.cf4c23b9.js","assets/icons.90446bd5.js","assets/contracts.generated.d1fd2f04.js","assets/index.d9cb8b61.js","assets/ant-design.9c393711.js","assets/index.094f31b4.js","assets/Modal.b065759f.js","assets/Text.6f904d4c.js","assets/Base.bf1ea121.js","assets/Typography.4474700c.js","assets/index.fdb2c145.js","assets/Link.1c567eb9.js","assets/Paragraph.58a3d09a.js","assets/Title.ed6ebfcb.js","assets/index.f8674cfb.js","assets/index.a3f51e4f.js","assets/index.3f302393.js","assets/CollapsePanel.653c75f5.js","assets/Timeline.69317f64.js","assets/index.6ec68225.js","assets/index.cae7c295.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.d488e522.js","assets/Card.4e641580.js","assets/TabPane.61c81103.js","assets/hasIn.b1eb2850.js","assets/DownOutlined.76f97cd5.js","assets/index.029d0777.js","assets/Form.8b4ea5e9.js","assets/repository.b7a655ef.css","assets/Navbar.vue_vue_type_script_setup_true_lang.d6f657e0.js","assets/index.bfa1bae5.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.6e340134.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.59e3d46a.js"),["assets/Login.59e3d46a.js","assets/api.a46d439d.js","assets/runnerData.7e97e2bb.js","assets/url.7abd79b4.js","assets/outputWidgets.930261a2.js","assets/outputWidgets.a254438e.css","assets/Passwordless.176bd060.js","assets/index.c69863b4.js","assets/icons.90446bd5.js","assets/CircularLoading.9136d486.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.f393bf23.js","assets/WidgetsFrame.36c0c62a.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.cb12d51c.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.fce8bbbb.js"),["assets/Error.fce8bbbb.js","assets/Navbar.vue_vue_type_script_setup_true_lang.d6f657e0.js","assets/outputWidgets.930261a2.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f393bf23.js","assets/index.bfa1bae5.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.bf1ea121.js","assets/Typography.4474700c.js","assets/Text.6f904d4c.js","assets/Navbar.928c534f.css","assets/api.a46d439d.js","assets/runnerData.7e97e2bb.js","assets/url.7abd79b4.js","assets/WidgetsFrame.36c0c62a.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.cb12d51c.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.89ee8ff8.js"),["assets/Form.89ee8ff8.js","assets/outputWidgets.930261a2.js","assets/outputWidgets.a254438e.css","assets/FormRunner.9b6fa032.js","assets/url.7abd79b4.js","assets/Passwordless.176bd060.js","assets/index.c69863b4.js","assets/icons.90446bd5.js","assets/CircularLoading.9136d486.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.5261e13f.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.36c0c62a.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.8a3d49fc.js","assets/Steps.4a8d55e8.css","assets/Card.4e641580.js","assets/TabPane.61c81103.js","assets/hasIn.b1eb2850.js","assets/Typography.4474700c.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.f393bf23.js","assets/uuid.e32fed33.js","assets/api.a46d439d.js","assets/runnerData.7e97e2bb.js","assets/pubsub.cb12d51c.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=d.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...p}=t.query;await l.push({name:"playerLogin",query:{...p,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await d.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,d as u};
//# sourceMappingURL=index.c7c46fa1.js.map
