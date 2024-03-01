var m=Object.defineProperty;var w=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(w(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as _,g as f,h as y,i as g,_ as r}from"./outputWidgets.108432da.js";import{P as b}from"./pubsub.98ab975f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5213aecd-43b2-4671-ad0d-1fdd9e8398b0",t._sentryDebugIdIdentifier="sentry-dbid-5213aecd-43b2-4671-ad0d-1fdd9e8398b0")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=_(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const d=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.bcba1fa7.js"),["assets/Home.bcba1fa7.js","assets/outputWidgets.108432da.js","assets/outputWidgets.6d880e89.css","assets/api.4a5f481e.js","assets/runnerData.2d2c2e52.js","assets/url.42281f8e.js","assets/asyncComputed.9818a09a.js","assets/PlayerNavbar.f9b8cfdb.js","assets/icons.9db31d3d.js","assets/PlayerNavbar.387187c9.css","assets/repository.78d5d81f.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.b565aa80.js","assets/Base.f7c93d8e.js","assets/Typography.6afbacd7.js","assets/Link.7230a499.js","assets/Paragraph.d17409a8.js","assets/Text.1a62e50a.js","assets/Title.98d4c800.js","assets/index.4f7a9d1e.js","assets/Card.2be0ab03.js","assets/TabPane.c54962c7.js","assets/hasIn.7973e16b.js","assets/index.3d290fbb.js","assets/pubsub.98ab975f.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.895683d0.js"),["assets/Kanban.895683d0.js","assets/outputWidgets.108432da.js","assets/outputWidgets.6d880e89.css","assets/api.4a5f481e.js","assets/runnerData.2d2c2e52.js","assets/url.42281f8e.js","assets/repository.d5f93c0c.js","assets/asyncComputed.9818a09a.js","assets/api.405902d9.js","assets/index.cf4c23b9.js","assets/icons.9db31d3d.js","assets/ant-design.4dbd5b92.js","assets/index.a196927e.js","assets/Modal.efcd7ec2.js","assets/Text.1a62e50a.js","assets/Base.f7c93d8e.js","assets/Typography.6afbacd7.js","assets/index.b565aa80.js","assets/Link.7230a499.js","assets/Paragraph.d17409a8.js","assets/Title.98d4c800.js","assets/index.3d290fbb.js","assets/index.5578279a.js","assets/index.4c02e6d4.js","assets/index.a69ef063.js","assets/CollapsePanel.bcc98d2c.js","assets/Form.a76f1164.js","assets/hasIn.7973e16b.js","assets/Timeline.49e21f60.js","assets/index.ecee7129.js","assets/index.0672361b.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.428c81da.js","assets/workspaces.60095db4.js","assets/record.15041cf5.js","assets/pubsub.98ab975f.js","assets/scripts.3b10c996.js","assets/envVars.be0f1165.js","assets/ExpandOutlined.8cd5516d.js","assets/Card.2be0ab03.js","assets/TabPane.c54962c7.js","assets/repository.fef7f638.css","assets/Navbar.vue_vue_type_script_setup_true_lang.5c304164.js","assets/index.459c94be.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.78d5d81f.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.9b1e59ad.js"),["assets/Login.9b1e59ad.js","assets/api.4a5f481e.js","assets/runnerData.2d2c2e52.js","assets/url.42281f8e.js","assets/outputWidgets.108432da.js","assets/outputWidgets.6d880e89.css","assets/Passwordless.f5753ca0.js","assets/icons.9db31d3d.js","assets/CircularLoading.052ac0ae.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.9818a09a.js","assets/WidgetsFrame.9daf33a4.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.98ab975f.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.c1a88252.js"),["assets/Error.c1a88252.js","assets/Navbar.vue_vue_type_script_setup_true_lang.5c304164.js","assets/outputWidgets.108432da.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.9818a09a.js","assets/index.459c94be.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.f7c93d8e.js","assets/Typography.6afbacd7.js","assets/Text.1a62e50a.js","assets/Navbar.928c534f.css","assets/api.4a5f481e.js","assets/runnerData.2d2c2e52.js","assets/url.42281f8e.js","assets/WidgetsFrame.9daf33a4.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.98ab975f.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.5edc076a.js"),["assets/Form.5edc076a.js","assets/outputWidgets.108432da.js","assets/outputWidgets.6d880e89.css","assets/FormRunner.47bab070.js","assets/url.42281f8e.js","assets/Passwordless.f5753ca0.js","assets/icons.9db31d3d.js","assets/CircularLoading.052ac0ae.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.f9b8cfdb.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.9daf33a4.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.9e37464d.js","assets/Steps.4a8d55e8.css","assets/Card.2be0ab03.js","assets/TabPane.c54962c7.js","assets/hasIn.7973e16b.js","assets/Typography.6afbacd7.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.9818a09a.js","assets/uuid.4bed1e93.js","assets/api.4a5f481e.js","assets/runnerData.2d2c2e52.js","assets/pubsub.98ab975f.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=f({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=d.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...p}=t.query;await l.push({name:"playerLogin",query:{...p,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await d.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,d as u};
//# sourceMappingURL=index.dc3329a0.js.map
