var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.37f6afb9.js";import{P as b}from"./pubsub.6ac68cf0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="073a28a2-d1f8-4b20-9d9b-0c934fc51708",t._sentryDebugIdIdentifier="sentry-dbid-073a28a2-d1f8-4b20-9d9b-0c934fc51708")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.4f7d937f.js"),["assets/Home.4f7d937f.js","assets/api.33c4c65f.js","assets/runnerData.e309a389.js","assets/url.47579a16.js","assets/outputWidgets.37f6afb9.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.1b0ebb2f.js","assets/icons.49183eff.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.6c0a5577.js","assets/PlayerNavbar.387187c9.css","assets/index.889622fb.js","assets/Base.067483d1.js","assets/Typography.1a6183ac.js","assets/Link.1fba9881.js","assets/Paragraph.c5c6929c.js","assets/Text.9798d4a1.js","assets/Title.c307da82.js","assets/index.7560c47d.js","assets/Card.713207b1.js","assets/TabPane.1c30bc61.js","assets/hasIn.1fb16ad3.js","assets/index.8206ccd9.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.4a8c268d.js"),["assets/Kanban.4a8c268d.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8866173e.js","assets/outputWidgets.37f6afb9.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.1b0ebb2f.js","assets/Text.9798d4a1.js","assets/Base.067483d1.js","assets/Typography.1a6183ac.js","assets/index.889622fb.js","assets/Link.1fba9881.js","assets/Paragraph.c5c6929c.js","assets/Title.c307da82.js","assets/index.a7a488c7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.e7594cc8.js","assets/api.e3099b68.js","assets/index.cf4c23b9.js","assets/icons.49183eff.js","assets/index.8206ccd9.js","assets/ant-design.8d11ff0f.js","assets/index.713cffb3.js","assets/Modal.d5b5554a.js","assets/index.7808130f.js","assets/index.e306c28d.js","assets/index.c029227f.js","assets/CollapsePanel.cda9152d.js","assets/Form.e63f4928.js","assets/hasIn.1fb16ad3.js","assets/Timeline.5976d2da.js","assets/index.ffc2c9b0.js","assets/index.4b40be36.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.324bbb41.js","assets/workspaces.adeef84c.js","assets/runnerData.e309a389.js","assets/url.47579a16.js","assets/record.adcae6a4.js","assets/pubsub.6ac68cf0.js","assets/scripts.8b0c1a1c.js","assets/envVars.025e508c.js","assets/ExpandOutlined.169d728e.js","assets/Card.713207b1.js","assets/TabPane.1c30bc61.js","assets/repository.8e89c80c.css","assets/api.33c4c65f.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.fdb4923e.js"),["assets/Login.fdb4923e.js","assets/api.33c4c65f.js","assets/runnerData.e309a389.js","assets/url.47579a16.js","assets/outputWidgets.37f6afb9.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.b8be011f.js","assets/icons.49183eff.js","assets/CircularLoading.4819f029.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.1b0ebb2f.js","assets/WidgetsFrame.1041d350.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.6ac68cf0.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.c4f2b1ef.js"),["assets/Error.c4f2b1ef.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8866173e.js","assets/outputWidgets.37f6afb9.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.1b0ebb2f.js","assets/Text.9798d4a1.js","assets/Base.067483d1.js","assets/Typography.1a6183ac.js","assets/index.889622fb.js","assets/Link.1fba9881.js","assets/Paragraph.c5c6929c.js","assets/Title.c307da82.js","assets/index.a7a488c7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.33c4c65f.js","assets/runnerData.e309a389.js","assets/url.47579a16.js","assets/WidgetsFrame.1041d350.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.6ac68cf0.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.52230214.js"),["assets/Form.52230214.js","assets/outputWidgets.37f6afb9.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.b3d82174.js","assets/url.47579a16.js","assets/Passwordless.b8be011f.js","assets/icons.49183eff.js","assets/CircularLoading.4819f029.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.6c0a5577.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.1041d350.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.1e505b9e.js","assets/Steps.4a8d55e8.css","assets/Card.713207b1.js","assets/TabPane.1c30bc61.js","assets/hasIn.1fb16ad3.js","assets/Typography.1a6183ac.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.1b0ebb2f.js","assets/uuid.831a545e.js","assets/api.33c4c65f.js","assets/runnerData.e309a389.js","assets/pubsub.6ac68cf0.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.a11c83ad.js.map
