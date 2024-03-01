var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.b4e7bc36.js";import{P as b}from"./pubsub.f377b08c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d2c3d293-75ce-4714-8a8f-7321468dbf64",t._sentryDebugIdIdentifier="sentry-dbid-d2c3d293-75ce-4714-8a8f-7321468dbf64")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.30354b8f.js"),["assets/Home.30354b8f.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/api.27fd699a.js","assets/runnerData.d0b2e6b8.js","assets/url.efacade2.js","assets/asyncComputed.63222e21.js","assets/PlayerNavbar.a4bea505.js","assets/icons.ed8a375d.js","assets/PlayerNavbar.387187c9.css","assets/repository.c3ab9784.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.6e2faa22.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Link.d885589e.js","assets/Paragraph.dc776558.js","assets/Text.480840c4.js","assets/Title.87d4b9b2.js","assets/index.770dc520.js","assets/Card.10f1cba9.js","assets/TabPane.030e32f8.js","assets/hasIn.068878da.js","assets/index.bc81c9a3.js","assets/pubsub.f377b08c.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.3b9a7338.js"),["assets/Kanban.3b9a7338.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/api.27fd699a.js","assets/runnerData.d0b2e6b8.js","assets/url.efacade2.js","assets/repository.2715c3a4.js","assets/asyncComputed.63222e21.js","assets/api.5879d0c8.js","assets/index.cf4c23b9.js","assets/icons.ed8a375d.js","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js","assets/Modal.0bce1eaa.js","assets/Text.480840c4.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.6e2faa22.js","assets/Link.d885589e.js","assets/Paragraph.dc776558.js","assets/Title.87d4b9b2.js","assets/index.bc81c9a3.js","assets/index.1b6f6e06.js","assets/index.f6d35815.js","assets/index.c21ce388.js","assets/CollapsePanel.d1e12e48.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Timeline.b093f673.js","assets/index.a317fc0b.js","assets/index.f64f6652.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.9de11de1.js","assets/workspaces.92281754.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/scripts.4d04a8bd.js","assets/envVars.cbdb8f8b.js","assets/ExpandOutlined.5dbdc890.js","assets/Card.10f1cba9.js","assets/TabPane.030e32f8.js","assets/repository.fef7f638.css","assets/Navbar.vue_vue_type_script_setup_true_lang.7b412ae4.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.c3ab9784.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.2092bcf3.js"),["assets/Login.2092bcf3.js","assets/api.27fd699a.js","assets/runnerData.d0b2e6b8.js","assets/url.efacade2.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/Passwordless.44cde670.js","assets/index.69712705.js","assets/icons.ed8a375d.js","assets/CircularLoading.23298a71.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.63222e21.js","assets/WidgetsFrame.35b648b9.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.f377b08c.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.d800d878.js"),["assets/Error.d800d878.js","assets/Navbar.vue_vue_type_script_setup_true_lang.7b412ae4.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.63222e21.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Text.480840c4.js","assets/Navbar.928c534f.css","assets/api.27fd699a.js","assets/runnerData.d0b2e6b8.js","assets/url.efacade2.js","assets/WidgetsFrame.35b648b9.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.f377b08c.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.8419eed6.js"),["assets/Form.8419eed6.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/FormRunner.fb6908bf.js","assets/url.efacade2.js","assets/Passwordless.44cde670.js","assets/index.69712705.js","assets/icons.ed8a375d.js","assets/CircularLoading.23298a71.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.a4bea505.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.35b648b9.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.bcc4c2d3.js","assets/Steps.4a8d55e8.css","assets/Card.10f1cba9.js","assets/TabPane.030e32f8.js","assets/hasIn.068878da.js","assets/Typography.a2975dec.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.63222e21.js","assets/uuid.d1fdbb28.js","assets/api.27fd699a.js","assets/runnerData.d0b2e6b8.js","assets/pubsub.f377b08c.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.1b37fc7a.js.map
