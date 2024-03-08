var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as b,_ as r}from"./outputWidgets.9f45792a.js";import{P as g}from"./pubsub.ddd47211.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="77371541-4cf2-4620-b358-1d0bfda66db3",t._sentryDebugIdIdentifier="sentry-dbid-77371541-4cf2-4620-b358-1d0bfda66db3")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new g,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.ee76b98f.js"),["assets/Home.ee76b98f.js","assets/outputWidgets.9f45792a.js","assets/outputWidgets.ba69b022.css","assets/api.06048efe.js","assets/runnerData.8cb610b8.js","assets/url.a400cb60.js","assets/asyncComputed.27a9efae.js","assets/PlayerNavbar.d1333048.js","assets/icons.05c53404.js","assets/PlayerNavbar.387187c9.css","assets/repository.c27e4827.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.4548a45c.js","assets/Base.ec6a769a.js","assets/Typography.1abc4a78.js","assets/Link.35ca213b.js","assets/Paragraph.e49323db.js","assets/Text.6ead7dba.js","assets/Title.c0e3fd0e.js","assets/index.ffb7be24.js","assets/Card.a95dfadd.js","assets/TabPane.baa7b7d4.js","assets/hasIn.8671f52e.js","assets/index.8ce4fdd5.js","assets/pubsub.ddd47211.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.da734b34.js"),["assets/Kanban.da734b34.js","assets/outputWidgets.9f45792a.js","assets/outputWidgets.ba69b022.css","assets/api.06048efe.js","assets/runnerData.8cb610b8.js","assets/url.a400cb60.js","assets/repository.3ad33b2f.js","assets/asyncComputed.27a9efae.js","assets/workspaces.5626ae4b.js","assets/record.a2661231.js","assets/pubsub.ddd47211.js","assets/scripts.75318f9f.js","assets/envVars.8fe6c71b.js","assets/api.de10acfe.js","assets/index.cf4c23b9.js","assets/icons.05c53404.js","assets/contracts.generated.e2b433c4.js","assets/index.8ce4fdd5.js","assets/ant-design.bd9498eb.js","assets/index.493509fb.js","assets/Modal.09281532.js","assets/Text.6ead7dba.js","assets/Base.ec6a769a.js","assets/Typography.1abc4a78.js","assets/index.4548a45c.js","assets/Link.35ca213b.js","assets/Paragraph.e49323db.js","assets/Title.c0e3fd0e.js","assets/index.00e57a44.js","assets/index.4b923088.js","assets/index.73f1334c.js","assets/CollapsePanel.460bcf29.js","assets/Timeline.41848595.js","assets/index.5982d40f.js","assets/index.4c1449ff.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.a186d05c.js","assets/Card.a95dfadd.js","assets/TabPane.baa7b7d4.js","assets/hasIn.8671f52e.js","assets/DownOutlined.6adb1dd4.js","assets/index.bcc62179.js","assets/Form.13359a08.js","assets/repository.b7a655ef.css","assets/Navbar.vue_vue_type_script_setup_true_lang.9b2e74e3.js","assets/index.bf54e47f.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.c27e4827.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.31962149.js"),["assets/Login.31962149.js","assets/api.06048efe.js","assets/runnerData.8cb610b8.js","assets/url.a400cb60.js","assets/outputWidgets.9f45792a.js","assets/outputWidgets.ba69b022.css","assets/Passwordless.86c5ae06.js","assets/index.5d85959a.js","assets/icons.05c53404.js","assets/CircularLoading.5f769620.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.27a9efae.js","assets/WidgetsFrame.2c83b275.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.ddd47211.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.eb2be7b0.js"),["assets/Error.eb2be7b0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.9b2e74e3.js","assets/outputWidgets.9f45792a.js","assets/outputWidgets.ba69b022.css","assets/asyncComputed.27a9efae.js","assets/index.bf54e47f.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.ec6a769a.js","assets/Typography.1abc4a78.js","assets/Text.6ead7dba.js","assets/Navbar.928c534f.css","assets/api.06048efe.js","assets/runnerData.8cb610b8.js","assets/url.a400cb60.js","assets/WidgetsFrame.2c83b275.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.ddd47211.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.19a997ea.js"),["assets/Form.19a997ea.js","assets/outputWidgets.9f45792a.js","assets/outputWidgets.ba69b022.css","assets/FormRunner.e53adeb7.js","assets/url.a400cb60.js","assets/Passwordless.86c5ae06.js","assets/index.5d85959a.js","assets/icons.05c53404.js","assets/CircularLoading.5f769620.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.d1333048.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.2c83b275.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.70254695.js","assets/Steps.4a8d55e8.css","assets/Card.a95dfadd.js","assets/TabPane.baa7b7d4.js","assets/hasIn.8671f52e.js","assets/Typography.1abc4a78.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.27a9efae.js","assets/uuid.32cb24df.js","assets/api.06048efe.js","assets/runnerData.8cb610b8.js","assets/pubsub.ddd47211.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{b(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.be4e8d7c.js.map
