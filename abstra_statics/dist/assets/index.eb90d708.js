var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as b,_ as r}from"./outputWidgets.0d6c71c4.js";import{P as g}from"./pubsub.a3cc160d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4b0d0b2f-fd79-4971-93a3-b78526006679",t._sentryDebugIdIdentifier="sentry-dbid-4b0d0b2f-fd79-4971-93a3-b78526006679")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new g,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.d2257b5a.js"),["assets/Home.d2257b5a.js","assets/api.c7af8111.js","assets/runnerData.87fb3f80.js","assets/url.54f51be3.js","assets/outputWidgets.0d6c71c4.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.27df476d.js","assets/icons.3c0b1217.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.4365bc40.js","assets/PlayerNavbar.387187c9.css","assets/index.29ca308b.js","assets/Base.027fcad1.js","assets/Typography.a1d2ddc8.js","assets/Link.e223ba21.js","assets/Paragraph.fa27bd72.js","assets/Text.5f5581ee.js","assets/Title.773b1396.js","assets/index.1d57612b.js","assets/Card.a3c31f89.js","assets/TabPane.e1ce12d2.js","assets/hasIn.e6aa186e.js","assets/index.79a50c9a.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.07a8b7f9.js"),["assets/Kanban.07a8b7f9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.5e7db0d0.js","assets/outputWidgets.0d6c71c4.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.27df476d.js","assets/Text.5f5581ee.js","assets/Base.027fcad1.js","assets/Typography.a1d2ddc8.js","assets/index.29ca308b.js","assets/Link.e223ba21.js","assets/Paragraph.fa27bd72.js","assets/Title.773b1396.js","assets/index.376aa484.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.d1ef102b.js","assets/api.9f249171.js","assets/index.cf4c23b9.js","assets/icons.3c0b1217.js","assets/index.79a50c9a.js","assets/ant-design.ebf753ed.js","assets/index.e9940846.js","assets/Modal.2b3bb1b6.js","assets/index.c2096d22.js","assets/index.50610a1d.js","assets/index.50148df6.js","assets/CollapsePanel.1ecb774a.js","assets/Form.4c2d0255.js","assets/hasIn.e6aa186e.js","assets/Timeline.36f3e515.js","assets/index.ba757ee2.js","assets/index.5f8393fd.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.8f994acd.js","assets/workspaces.3b8771ae.js","assets/runnerData.87fb3f80.js","assets/url.54f51be3.js","assets/record.19c12a45.js","assets/pubsub.a3cc160d.js","assets/scripts.4f33c921.js","assets/envVars.57685009.js","assets/ExpandOutlined.a7117b34.js","assets/Card.a3c31f89.js","assets/TabPane.e1ce12d2.js","assets/repository.8e89c80c.css","assets/api.c7af8111.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.554e1afe.js"),["assets/Login.554e1afe.js","assets/api.c7af8111.js","assets/runnerData.87fb3f80.js","assets/url.54f51be3.js","assets/outputWidgets.0d6c71c4.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.a1471c5d.js","assets/icons.3c0b1217.js","assets/CircularLoading.b19db7e2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.27df476d.js","assets/WidgetsFrame.4401e6d3.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.a3cc160d.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.01625e5b.js"),["assets/Error.01625e5b.js","assets/Navbar.vue_vue_type_script_setup_true_lang.5e7db0d0.js","assets/outputWidgets.0d6c71c4.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.27df476d.js","assets/Text.5f5581ee.js","assets/Base.027fcad1.js","assets/Typography.a1d2ddc8.js","assets/index.29ca308b.js","assets/Link.e223ba21.js","assets/Paragraph.fa27bd72.js","assets/Title.773b1396.js","assets/index.376aa484.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.c7af8111.js","assets/runnerData.87fb3f80.js","assets/url.54f51be3.js","assets/WidgetsFrame.4401e6d3.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.a3cc160d.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.1a31c977.js"),["assets/Form.1a31c977.js","assets/outputWidgets.0d6c71c4.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.f945f3da.js","assets/url.54f51be3.js","assets/Passwordless.a1471c5d.js","assets/icons.3c0b1217.js","assets/CircularLoading.b19db7e2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.4365bc40.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.4401e6d3.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.fadda43d.js","assets/Steps.4a8d55e8.css","assets/Card.a3c31f89.js","assets/TabPane.e1ce12d2.js","assets/hasIn.e6aa186e.js","assets/Typography.a1d2ddc8.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.27df476d.js","assets/uuid.5df7b0a9.js","assets/api.c7af8111.js","assets/runnerData.87fb3f80.js","assets/pubsub.a3cc160d.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{b(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.eb90d708.js.map
