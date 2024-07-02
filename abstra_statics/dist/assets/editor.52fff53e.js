var w=Object.defineProperty;var g=(t,e,o)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(g(t,typeof e!="symbol"?e+"":e,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./vue-router.c084b0ce.js";import{r as N,g as F,s as J,c as G}from"./router.58599d95.js";import"./workspaces.7515c6cd.js";import{a as K}from"./asyncComputed.bc1d1b96.js";import"./runnerData.6859db82.js";import"./url.9d42bccf.js";import"./record.5074e0e9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e31a0432-03d4-4347-b71c-ecf3df3adb29",t._sentryDebugIdIdentifier="sentry-dbid-e31a0432-03d4-4347-b71c-ecf3df3adb29")}catch{}})();const f=y(!1),Q=()=>{window.innerWidth<780?f.value=!0:f.value=!1},X={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},Y=E({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",Q)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:e,"page-header":{ghost:!1}},{default:R(()=>[T("div",X,[k(r)])]),_:1})}}});const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(e){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=K(()=>u.get())),c._asyncComputed}loginUrl(e){return"https://cloud.abstra.io/api-key"+(e?"?"+new URLSearchParams(e):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Z=N.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.b07026eb.js"),["assets/Home.b07026eb.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.58f951c0.js"),["assets/Workspace.58f951c0.js","assets/BaseLayout.7214b325.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.86cd1e43.js","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/router.58599d95.js","assets/CloseCircleOutlined.478cd306.js","assets/index.5e7b4ef3.js","assets/index.93c4b6a1.js","assets/popupNotifcation.db6965f1.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/PhChats.vue.4674d705.js","assets/NavbarControls.18438df3.css","assets/PhIdentificationBadge.vue.747a3e63.js","assets/PhCaretRight.vue.8f95729b.js","assets/PhFlowArrow.vue.4cc2b8a8.js","assets/PhKanban.vue.f045ca12.js","assets/index.a59e4f44.js","assets/index.b0793bb0.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.77bb0029.js"),["assets/Stages.77bb0029.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/CrudView.2a7e11ba.js","assets/router.323ef752.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/ant-design.17cf12ad.js","assets/asyncComputed.bc1d1b96.js","assets/string.0b090da8.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/workspaces.7515c6cd.js","assets/runnerData.6859db82.js","assets/record.5074e0e9.js","assets/forms.21318270.js","assets/jobs.d591ecc2.js","assets/scripts.151ed69b.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/validations.e64ea5f3.js","assets/index.5e7b4ef3.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.0cd5efde.js"),["assets/WorkflowEditor.0cd5efde.js","assets/LoadingContainer.31ecbdc1.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/model.23c46ff3.js","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/validations.e64ea5f3.js","assets/string.0b090da8.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/metadata.7eb5f525.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhKanban.vue.f045ca12.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/index.5d07956a.js","assets/Badge.ea4702ca.js","assets/isNumeric.75337b1e.js","assets/index.93c4b6a1.js","assets/index.5e7b4ef3.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/api.6a7b0f35.js","assets/fetch.fc10da49.js","assets/uuid.0dec2121.js","assets/model.f4a37ee0.css","assets/index.0196f898.js","assets/WorkflowEditor.df9d3258.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.96de8c41.js"),["assets/WorkflowThreads.96de8c41.js","assets/ContentLayout.bf662838.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.ffa3708e.js","assets/fetch.fc10da49.js","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/scripts.151ed69b.js","assets/api.6a7b0f35.js","assets/metadata.7eb5f525.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhKanban.vue.f045ca12.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/ant-design.17cf12ad.js","assets/index.93c4b6a1.js","assets/index.7839f463.js","assets/index.3fae4e7c.js","assets/index.53162b6c.js","assets/CollapsePanel.f9707140.js","assets/index.0196f898.js","assets/index.746bd7e7.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.117b6a64.js","assets/model.23c46ff3.js","assets/validations.e64ea5f3.js","assets/string.0b090da8.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/index.5d07956a.js","assets/Badge.ea4702ca.js","assets/index.5e7b4ef3.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/uuid.0dec2121.js","assets/model.f4a37ee0.css","assets/LoadingOutlined.b055fcfb.js","assets/DeleteOutlined.9b6739f2.js","assets/PhDownloadSimple.vue.17e515cf.js","assets/utils.892b04e8.js","assets/WorkflowView.53959543.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.540cdb8e.js"),["assets/StyleEditor.540cdb8e.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/PlayerNavbar.e613fada.js","assets/router.58599d95.js","assets/metadata.7eb5f525.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhKanban.vue.f045ca12.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/PhSignOut.vue.d93ff533.js","assets/api.71c8ff0a.js","assets/index.b0793bb0.js","assets/PlayerNavbar.7299386a.css","assets/Home.22310212.js","assets/Watermark.46a5762b.js","assets/Watermark.f2e1adbe.css","assets/WidgetsFrame.3b21f771.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowSquareOut.vue.dab600ec.js","assets/index.4367ba6a.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/Home.30eed429.css","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.31ecbdc1.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/index.8b788f31.js","assets/StyleEditor.4d0f11d9.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.8592832d.js"),["assets/RequirementsEditor.8592832d.js","assets/ContentLayout.bf662838.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/CrudView.2a7e11ba.js","assets/router.323ef752.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.bc1d1b96.js","assets/workspaces.7515c6cd.js","assets/runnerData.6859db82.js","assets/record.5074e0e9.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.7b4a09aa.js"),["assets/EnvVarsEditor.7b4a09aa.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/CrudView.2a7e11ba.js","assets/router.323ef752.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/index.5e7b4ef3.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.60f31e8b.js"),["assets/VSCodeConnection.60f31e8b.js","assets/ContentLayout.bf662838.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/index.93c4b6a1.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.b23584e4.js"),["assets/AccessControlEditor.b23584e4.js","assets/ContentLayout.bf662838.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/fetch.fc10da49.js","assets/record.5074e0e9.js","assets/repository.1754560c.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/asyncComputed.bc1d1b96.js","assets/workspaces.7515c6cd.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/PhGlobe.vue.aae97aef.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/index.0196f898.js","assets/metadata.7eb5f525.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhKanban.vue.f045ca12.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/index.7839f463.js","assets/index.5e7b4ef3.js","assets/router.58599d95.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.e25f969a.js"),["assets/FormEditor.e25f969a.js","assets/PlayerNavbar.e613fada.js","assets/router.58599d95.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/metadata.7eb5f525.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhKanban.vue.f045ca12.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/asyncComputed.bc1d1b96.js","assets/PhSignOut.vue.d93ff533.js","assets/api.71c8ff0a.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/index.b0793bb0.js","assets/PlayerNavbar.7299386a.css","assets/BaseLayout.7214b325.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.01e10fed.js","assets/uuid.0dec2121.js","assets/PhCaretRight.vue.8f95729b.js","assets/workspaces.7515c6cd.js","assets/record.5074e0e9.js","assets/PhCopySimple.vue.a08b1bb4.js","assets/LoadingOutlined.b055fcfb.js","assets/jobs.d591ecc2.js","assets/scripts.151ed69b.js","assets/validations.e64ea5f3.js","assets/string.0b090da8.js","assets/PhPencil.vue.8a285fb8.js","assets/toggleHighContrast.b42dc17e.js","assets/toggleHighContrast.30d77c87.css","assets/index.5e7b4ef3.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/SourceCode.6630db20.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/FormRunner.d4f04da0.js","assets/Login.vue_vue_type_script_setup_true_lang.d24bcd8f.js","assets/CircularLoading.72c95b05.js","assets/CircularLoading.e156a2b0.css","assets/Login.a5c0ccf3.css","assets/WidgetsFrame.3b21f771.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.0f8a57cb.js","assets/Steps.4a8d55e8.css","assets/Watermark.46a5762b.js","assets/Watermark.f2e1adbe.css","assets/FormRunner.825d7e27.css","assets/api.6a7b0f35.js","assets/fetch.fc10da49.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/PhFlowArrow.vue.4cc2b8a8.js","assets/forms.21318270.js","assets/ThreadSelector.33cd7933.js","assets/index.3fae4e7c.js","assets/index.0196f898.js","assets/ThreadSelector.087a85c2.css","assets/index.6cdcea3b.js","assets/index.93c4b6a1.js","assets/NavbarControls.86cd1e43.js","assets/CloseCircleOutlined.478cd306.js","assets/popupNotifcation.db6965f1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/PhChats.vue.4674d705.js","assets/NavbarControls.18438df3.css","assets/index.a59e4f44.js","assets/Badge.ea4702ca.js","assets/isNumeric.75337b1e.js","assets/FormEditor.6d71e9eb.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.f5b20c81.js"),["assets/JobEditor.f5b20c81.js","assets/BaseLayout.7214b325.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.01e10fed.js","assets/uuid.0dec2121.js","assets/PhCaretRight.vue.8f95729b.js","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhCopySimple.vue.a08b1bb4.js","assets/LoadingOutlined.b055fcfb.js","assets/jobs.d591ecc2.js","assets/scripts.151ed69b.js","assets/validations.e64ea5f3.js","assets/string.0b090da8.js","assets/PhPencil.vue.8a285fb8.js","assets/toggleHighContrast.b42dc17e.js","assets/toggleHighContrast.30d77c87.css","assets/index.5e7b4ef3.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/SourceCode.6630db20.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/dayjs.789d2029.js","assets/index.0a4a6b93.js","assets/index.7839f463.js","assets/index.e7e94428.js","assets/index.93c4b6a1.js","assets/RunButton.vue_vue_type_script_setup_true_lang.3c3a0511.js","assets/NavbarControls.86cd1e43.js","assets/router.58599d95.js","assets/CloseCircleOutlined.478cd306.js","assets/popupNotifcation.db6965f1.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/PhChats.vue.4674d705.js","assets/NavbarControls.18438df3.css","assets/index.a59e4f44.js","assets/index.b0793bb0.js","assets/index.6cdcea3b.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f6e6aa4d.js"),["assets/HookEditor.f6e6aa4d.js","assets/BaseLayout.7214b325.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.01e10fed.js","assets/uuid.0dec2121.js","assets/PhCaretRight.vue.8f95729b.js","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhCopySimple.vue.a08b1bb4.js","assets/LoadingOutlined.b055fcfb.js","assets/jobs.d591ecc2.js","assets/scripts.151ed69b.js","assets/validations.e64ea5f3.js","assets/string.0b090da8.js","assets/PhPencil.vue.8a285fb8.js","assets/toggleHighContrast.b42dc17e.js","assets/toggleHighContrast.30d77c87.css","assets/index.5e7b4ef3.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/SourceCode.6630db20.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/RunButton.vue_vue_type_script_setup_true_lang.3c3a0511.js","assets/api.6a7b0f35.js","assets/fetch.fc10da49.js","assets/metadata.7eb5f525.js","assets/PhKanban.vue.f045ca12.js","assets/PhScroll.vue.46e811b7.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/ThreadSelector.33cd7933.js","assets/index.3fae4e7c.js","assets/index.0196f898.js","assets/ThreadSelector.087a85c2.css","assets/index.4ee7409a.js","assets/CollapsePanel.f9707140.js","assets/index.93c4b6a1.js","assets/Badge.ea4702ca.js","assets/isNumeric.75337b1e.js","assets/index.7839f463.js","assets/NavbarControls.86cd1e43.js","assets/router.58599d95.js","assets/CloseCircleOutlined.478cd306.js","assets/popupNotifcation.db6965f1.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/PhChats.vue.4674d705.js","assets/NavbarControls.18438df3.css","assets/index.a59e4f44.js","assets/index.b0793bb0.js","assets/index.6cdcea3b.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.e1a20e32.js"),["assets/ScriptEditor.e1a20e32.js","assets/BaseLayout.7214b325.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.01e10fed.js","assets/uuid.0dec2121.js","assets/PhCaretRight.vue.8f95729b.js","assets/workspaces.7515c6cd.js","assets/asyncComputed.bc1d1b96.js","assets/runnerData.6859db82.js","assets/url.9d42bccf.js","assets/record.5074e0e9.js","assets/PhCheckCircle.vue.c81476e4.js","assets/PhCopySimple.vue.a08b1bb4.js","assets/LoadingOutlined.b055fcfb.js","assets/jobs.d591ecc2.js","assets/scripts.151ed69b.js","assets/validations.e64ea5f3.js","assets/string.0b090da8.js","assets/PhPencil.vue.8a285fb8.js","assets/toggleHighContrast.b42dc17e.js","assets/toggleHighContrast.30d77c87.css","assets/index.5e7b4ef3.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/SourceCode.6630db20.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/ThreadSelector.33cd7933.js","assets/index.3fae4e7c.js","assets/index.0196f898.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.3c3a0511.js","assets/NavbarControls.86cd1e43.js","assets/router.58599d95.js","assets/CloseCircleOutlined.478cd306.js","assets/index.93c4b6a1.js","assets/popupNotifcation.db6965f1.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/PhChats.vue.4674d705.js","assets/NavbarControls.18438df3.css","assets/index.a59e4f44.js","assets/index.b0793bb0.js","assets/index.6cdcea3b.js","assets/CollapsePanel.f9707140.js","assets/Badge.ea4702ca.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Z],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),$=F(m);m.beforeEach(async(t,e)=>{var o;if(t.meta.playerRoute)return $(t,e);if(O(t,e),t.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=t.query,h={redirect:location.origin+t.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const t=G(),e=L({render:()=>U(Y)});S.init(),j(e,m),e.use(m),e.use(W),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.52fff53e.js.map
