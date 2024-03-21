var d=Object.defineProperty;var f=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.6a7b2974.js";import{P as b}from"./pubsub.3404ccf7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c4130a8b-9efc-4950-98e8-28c554f7d7f8",t._sentryDebugIdIdentifier="sentry-dbid-c4130a8b-9efc-4950-98e8-28c554f7d7f8")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.487df5b5.js"),["assets/Home.487df5b5.js","assets/outputWidgets.6a7b2974.js","assets/outputWidgets.a254438e.css","assets/api.d67c640c.js","assets/runnerData.c27de2b9.js","assets/url.92c351c8.js","assets/asyncComputed.6e38050b.js","assets/PlayerNavbar.b15e5b87.js","assets/icons.34e94217.js","assets/repository.815d0ecd.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.0b8ed9d0.css","assets/index.8eba1aee.js","assets/Base.4341e4c5.js","assets/Typography.458c99d3.js","assets/Link.31711ecd.js","assets/Paragraph.2c25a714.js","assets/Text.5b6cbf92.js","assets/Title.f00d10e1.js","assets/index.5fa1e478.js","assets/Card.f5545305.js","assets/TabPane.6e6902e6.js","assets/hasIn.cf56167b.js","assets/index.03375962.js","assets/pubsub.3404ccf7.js","assets/Home.d111b4f7.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.409ab78e.js"),["assets/Kanban.409ab78e.js","assets/outputWidgets.6a7b2974.js","assets/outputWidgets.a254438e.css","assets/api.d67c640c.js","assets/runnerData.c27de2b9.js","assets/url.92c351c8.js","assets/repository.606a3086.js","assets/asyncComputed.6e38050b.js","assets/workspaces.902940e5.js","assets/record.ed1b75ef.js","assets/pubsub.3404ccf7.js","assets/scripts.035ffdf3.js","assets/envVars.7c8cc0e5.js","assets/api.5a715c2e.js","assets/index.cf4c23b9.js","assets/icons.34e94217.js","assets/contracts.generated.5bf1e1b3.js","assets/index.03375962.js","assets/ant-design.68403e57.js","assets/index.1c341367.js","assets/Modal.37b8aaa7.js","assets/Text.5b6cbf92.js","assets/Base.4341e4c5.js","assets/Typography.458c99d3.js","assets/index.8eba1aee.js","assets/Link.31711ecd.js","assets/Paragraph.2c25a714.js","assets/Title.f00d10e1.js","assets/index.059d6d27.js","assets/index.7d0c23ad.js","assets/index.686a6cf4.js","assets/CollapsePanel.dd756a24.js","assets/Timeline.e9f877e1.js","assets/index.16912dce.js","assets/index.2f19896f.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.56091afb.js","assets/Card.f5545305.js","assets/TabPane.6e6902e6.js","assets/hasIn.cf56167b.js","assets/DownOutlined.e1d042f9.js","assets/index.bf8aadf2.js","assets/Form.0c6aa3e7.js","assets/repository.9c90f918.css","assets/Navbar.vue_vue_type_script_setup_true_lang.f1326c1a.js","assets/index.60a7ae8a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.815d0ecd.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.3e7ac272.js"),["assets/Login.3e7ac272.js","assets/api.d67c640c.js","assets/runnerData.c27de2b9.js","assets/url.92c351c8.js","assets/outputWidgets.6a7b2974.js","assets/outputWidgets.a254438e.css","assets/Passwordless.30a710d3.js","assets/index.5e95d28d.js","assets/icons.34e94217.js","assets/CircularLoading.e792190f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.6e38050b.js","assets/WidgetsFrame.9a539275.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.3404ccf7.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.25a02c62.js"),["assets/Error.25a02c62.js","assets/Navbar.vue_vue_type_script_setup_true_lang.f1326c1a.js","assets/outputWidgets.6a7b2974.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.6e38050b.js","assets/index.60a7ae8a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.4341e4c5.js","assets/Typography.458c99d3.js","assets/Text.5b6cbf92.js","assets/Navbar.928c534f.css","assets/api.d67c640c.js","assets/runnerData.c27de2b9.js","assets/url.92c351c8.js","assets/WidgetsFrame.9a539275.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.3404ccf7.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.1a46fdfe.js"),["assets/Form.1a46fdfe.js","assets/outputWidgets.6a7b2974.js","assets/outputWidgets.a254438e.css","assets/FormRunner.3639a0ab.js","assets/url.92c351c8.js","assets/Passwordless.30a710d3.js","assets/index.5e95d28d.js","assets/icons.34e94217.js","assets/CircularLoading.e792190f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.b15e5b87.js","assets/repository.815d0ecd.js","assets/asyncComputed.6e38050b.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.0b8ed9d0.css","assets/WidgetsFrame.9a539275.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.23e87c86.js","assets/Steps.4a8d55e8.css","assets/Card.f5545305.js","assets/TabPane.6e6902e6.js","assets/hasIn.cf56167b.js","assets/Typography.458c99d3.js","assets/FormRunner.b93f6da7.css","assets/uuid.aa77d0d7.js","assets/api.d67c640c.js","assets/runnerData.c27de2b9.js","assets/pubsub.3404ccf7.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.5f7169f9.js.map
