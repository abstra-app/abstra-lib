var f=Object.defineProperty;var g=(t,e,o)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var _=(t,e,o)=>(g(t,typeof e!="symbol"?e+"":e,o),o);import{d as y,r as w,o as E,c as v,w as b,a as P,b as I,u as R,A as T,e as k,f as A,_ as a,g as V,h as D,T as C,i as O,P as L,C as S,M as j,s as W,j as l,k as x,l as q,m as U,n as B}from"./vue-router.533386a6.js";import{r as M,g as H,s as N,c as F}from"./router.dfbafa89.js";import"./workspaces.7659717a.js";import{a as J}from"./asyncComputed.22731ea9.js";import"./runnerData.54c47fb4.js";import"./url.33208fe7.js";import"./record.0ee4a3cd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a3979387-4c63-4081-8892-421d70718e66",t._sentryDebugIdIdentifier="sentry-dbid-a3979387-4c63-4081-8892-421d70718e66")}catch{}})();const z={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},G=y({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056"}};return(o,s)=>{const r=w("router-view");return E(),v(R(T),{theme:e,"page-header":{ghost:!1}},{default:b(()=>[P("div",z,[I(r)])]),_:1})}}});const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;_(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(e){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=J(()=>u.get())),c._asyncComputed}loginUrl(e){return"https://cloud.abstra.io/api-key"+(e?"?"+new URLSearchParams(e):"")}};let p=c;_(p,"_asyncComputed",null);const u=new p,K=M.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),m=k({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.ff80fa11.js"),["assets/Home.ff80fa11.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.299bd58b.js"),["assets/Workspace.299bd58b.js","assets/BaseLayout.755dc3c6.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.79db79c8.js","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/router.dfbafa89.js","assets/CloseCircleOutlined.ae53d3fb.js","assets/index.bd735f39.js","assets/index.7074a5a2.js","assets/popupNotifcation.391b3e15.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/PhChats.vue.c9198078.js","assets/NavbarControls.18438df3.css","assets/PhIdentificationBadge.vue.42871409.js","assets/PhCaretRight.vue.a877d5ae.js","assets/PhFlowArrow.vue.71fd68c0.js","assets/PhKanban.vue.1b093731.js","assets/index.a04df0d1.js","assets/index.67f066ec.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.8a4da7c0.js"),["assets/Stages.8a4da7c0.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.26b5744f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.9e576f10.js","assets/router.2d8344be.js","assets/gateway.29f2bbc7.js","assets/popupNotifcation.391b3e15.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/url.33208fe7.js","assets/index.baee835d.js","assets/index.7074a5a2.js","assets/CrudView.a8b105cf.css","assets/ant-design.a713de5e.js","assets/asyncComputed.22731ea9.js","assets/string.ae704d9e.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/workspaces.7659717a.js","assets/runnerData.54c47fb4.js","assets/record.0ee4a3cd.js","assets/forms.825c2ba7.js","assets/jobs.4a4037e4.js","assets/scripts.a555adb0.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/validations.be6328c6.js","assets/index.bd735f39.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.3af00358.js"),["assets/WorkflowEditor.3af00358.js","assets/LoadingContainer.fa27a3bc.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/model.3708ce1a.js","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/validations.be6328c6.js","assets/string.ae704d9e.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/metadata.2f069082.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhKanban.vue.1b093731.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/index.adf537b8.js","assets/Badge.2dd47434.js","assets/isNumeric.75337b1e.js","assets/index.7074a5a2.js","assets/index.bd735f39.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/api.36286ddf.js","assets/fetch.9cf92ad6.js","assets/uuid.22f36956.js","assets/model.f4a37ee0.css","assets/index.260eb814.js","assets/WorkflowEditor.df9d3258.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.d1f4cfc5.js"),["assets/WorkflowThreads.d1f4cfc5.js","assets/ContentLayout.26b5744f.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.7b4cf4d3.js","assets/fetch.9cf92ad6.js","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/scripts.a555adb0.js","assets/api.36286ddf.js","assets/metadata.2f069082.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhKanban.vue.1b093731.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/ant-design.a713de5e.js","assets/index.7074a5a2.js","assets/index.baee835d.js","assets/index.b3c06596.js","assets/index.668b8413.js","assets/CollapsePanel.6590ee99.js","assets/index.260eb814.js","assets/index.1271f936.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.f0826dde.js","assets/model.3708ce1a.js","assets/validations.be6328c6.js","assets/string.ae704d9e.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/index.adf537b8.js","assets/Badge.2dd47434.js","assets/index.bd735f39.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/uuid.22f36956.js","assets/model.f4a37ee0.css","assets/LoadingOutlined.4da7d4e0.js","assets/DeleteOutlined.f4b22322.js","assets/PhDownloadSimple.vue.a91a6af3.js","assets/utils.698deaa2.js","assets/WorkflowView.cbdef581.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.177e3eb2.js"),["assets/StyleEditor.177e3eb2.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/PlayerNavbar.d1c385d3.js","assets/router.dfbafa89.js","assets/metadata.2f069082.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhKanban.vue.1b093731.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/PhSignOut.vue.19be2349.js","assets/api.2db90f53.js","assets/index.67f066ec.js","assets/PlayerNavbar.7299386a.css","assets/Home.db8aa9a1.js","assets/Watermark.1ea7ebe6.js","assets/Watermark.f2e1adbe.css","assets/WidgetsFrame.6b9a74b3.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowSquareOut.vue.80e72303.js","assets/index.e69fe74e.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/Home.30eed429.css","assets/ContentLayout.26b5744f.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.fa27a3bc.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/index.70cdf667.js","assets/StyleEditor.4d0f11d9.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.cc232d2e.js"),["assets/RequirementsEditor.cc232d2e.js","assets/ContentLayout.26b5744f.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/CrudView.9e576f10.js","assets/router.2d8344be.js","assets/gateway.29f2bbc7.js","assets/popupNotifcation.391b3e15.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/url.33208fe7.js","assets/index.baee835d.js","assets/index.7074a5a2.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.22731ea9.js","assets/workspaces.7659717a.js","assets/runnerData.54c47fb4.js","assets/record.0ee4a3cd.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.b78a0e55.js"),["assets/EnvVarsEditor.b78a0e55.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/ContentLayout.26b5744f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.9e576f10.js","assets/router.2d8344be.js","assets/gateway.29f2bbc7.js","assets/popupNotifcation.391b3e15.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/index.baee835d.js","assets/index.7074a5a2.js","assets/CrudView.a8b105cf.css","assets/index.bd735f39.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.c42992fa.js"),["assets/VSCodeConnection.c42992fa.js","assets/ContentLayout.26b5744f.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/index.7074a5a2.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.9aa6efc0.js"),["assets/AccessControlEditor.9aa6efc0.js","assets/ContentLayout.26b5744f.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/fetch.9cf92ad6.js","assets/record.0ee4a3cd.js","assets/repository.6270fd19.js","assets/gateway.29f2bbc7.js","assets/popupNotifcation.391b3e15.js","assets/asyncComputed.22731ea9.js","assets/workspaces.7659717a.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/PhGlobe.vue.4bded85f.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/index.260eb814.js","assets/metadata.2f069082.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhKanban.vue.1b093731.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/index.baee835d.js","assets/index.bd735f39.js","assets/router.dfbafa89.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.c8720d80.js"),["assets/FormEditor.c8720d80.js","assets/PlayerNavbar.d1c385d3.js","assets/router.dfbafa89.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/metadata.2f069082.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhKanban.vue.1b093731.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/asyncComputed.22731ea9.js","assets/PhSignOut.vue.19be2349.js","assets/api.2db90f53.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/index.67f066ec.js","assets/PlayerNavbar.7299386a.css","assets/BaseLayout.755dc3c6.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.4b32d54e.js","assets/uuid.22f36956.js","assets/PhCaretRight.vue.a877d5ae.js","assets/workspaces.7659717a.js","assets/record.0ee4a3cd.js","assets/PhCopySimple.vue.7735fc1d.js","assets/LoadingOutlined.4da7d4e0.js","assets/jobs.4a4037e4.js","assets/scripts.a555adb0.js","assets/validations.be6328c6.js","assets/string.ae704d9e.js","assets/PhPencil.vue.dea95a45.js","assets/toggleHighContrast.ca2a483d.js","assets/toggleHighContrast.30d77c87.css","assets/index.bd735f39.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/SourceCode.110772df.css","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/FormRunner.58036680.js","assets/Login.vue_vue_type_script_setup_true_lang.ebe0dfce.js","assets/CircularLoading.d6b70cf6.js","assets/CircularLoading.e156a2b0.css","assets/Login.5e28eae2.css","assets/WidgetsFrame.6b9a74b3.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.823e7e39.js","assets/Steps.4a8d55e8.css","assets/Watermark.1ea7ebe6.js","assets/Watermark.f2e1adbe.css","assets/FormRunner.60c4be6b.css","assets/api.36286ddf.js","assets/fetch.9cf92ad6.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/PhFlowArrow.vue.71fd68c0.js","assets/forms.825c2ba7.js","assets/ThreadSelector.59e2d704.js","assets/index.b3c06596.js","assets/index.260eb814.js","assets/ThreadSelector.087a85c2.css","assets/index.65b87741.js","assets/index.7074a5a2.js","assets/NavbarControls.79db79c8.js","assets/CloseCircleOutlined.ae53d3fb.js","assets/popupNotifcation.391b3e15.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/PhChats.vue.c9198078.js","assets/NavbarControls.18438df3.css","assets/index.a04df0d1.js","assets/Badge.2dd47434.js","assets/isNumeric.75337b1e.js","assets/FormEditor.1abb2c29.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.47d182f6.js"),["assets/JobEditor.47d182f6.js","assets/BaseLayout.755dc3c6.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.4b32d54e.js","assets/uuid.22f36956.js","assets/PhCaretRight.vue.a877d5ae.js","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhCopySimple.vue.7735fc1d.js","assets/LoadingOutlined.4da7d4e0.js","assets/jobs.4a4037e4.js","assets/scripts.a555adb0.js","assets/validations.be6328c6.js","assets/string.ae704d9e.js","assets/PhPencil.vue.dea95a45.js","assets/toggleHighContrast.ca2a483d.js","assets/toggleHighContrast.30d77c87.css","assets/index.bd735f39.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/SourceCode.110772df.css","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/dayjs.c1d168c3.js","assets/index.e3077dca.js","assets/index.baee835d.js","assets/index.9e4160ae.js","assets/index.7074a5a2.js","assets/RunButton.vue_vue_type_script_setup_true_lang.fa2b349f.js","assets/NavbarControls.79db79c8.js","assets/router.dfbafa89.js","assets/CloseCircleOutlined.ae53d3fb.js","assets/popupNotifcation.391b3e15.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/PhChats.vue.c9198078.js","assets/NavbarControls.18438df3.css","assets/index.a04df0d1.js","assets/index.67f066ec.js","assets/index.65b87741.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.26d3deef.js"),["assets/HookEditor.26d3deef.js","assets/BaseLayout.755dc3c6.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.4b32d54e.js","assets/uuid.22f36956.js","assets/PhCaretRight.vue.a877d5ae.js","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhCopySimple.vue.7735fc1d.js","assets/LoadingOutlined.4da7d4e0.js","assets/jobs.4a4037e4.js","assets/scripts.a555adb0.js","assets/validations.be6328c6.js","assets/string.ae704d9e.js","assets/PhPencil.vue.dea95a45.js","assets/toggleHighContrast.ca2a483d.js","assets/toggleHighContrast.30d77c87.css","assets/index.bd735f39.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/SourceCode.110772df.css","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fa2b349f.js","assets/api.36286ddf.js","assets/fetch.9cf92ad6.js","assets/metadata.2f069082.js","assets/PhKanban.vue.1b093731.js","assets/PhScroll.vue.d3d1603d.js","assets/PhWebhooksLogo.vue.2c17458f.js","assets/ThreadSelector.59e2d704.js","assets/index.b3c06596.js","assets/index.260eb814.js","assets/ThreadSelector.087a85c2.css","assets/index.4cfff9f5.js","assets/CollapsePanel.6590ee99.js","assets/index.7074a5a2.js","assets/Badge.2dd47434.js","assets/isNumeric.75337b1e.js","assets/index.baee835d.js","assets/NavbarControls.79db79c8.js","assets/router.dfbafa89.js","assets/CloseCircleOutlined.ae53d3fb.js","assets/popupNotifcation.391b3e15.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/PhChats.vue.c9198078.js","assets/NavbarControls.18438df3.css","assets/index.a04df0d1.js","assets/index.67f066ec.js","assets/index.65b87741.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.a68f8b7d.js"),["assets/ScriptEditor.a68f8b7d.js","assets/BaseLayout.755dc3c6.js","assets/vue-router.533386a6.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.4b32d54e.js","assets/uuid.22f36956.js","assets/PhCaretRight.vue.a877d5ae.js","assets/workspaces.7659717a.js","assets/asyncComputed.22731ea9.js","assets/runnerData.54c47fb4.js","assets/url.33208fe7.js","assets/record.0ee4a3cd.js","assets/PhCheckCircle.vue.0f70fa03.js","assets/PhCopySimple.vue.7735fc1d.js","assets/LoadingOutlined.4da7d4e0.js","assets/jobs.4a4037e4.js","assets/scripts.a555adb0.js","assets/validations.be6328c6.js","assets/string.ae704d9e.js","assets/PhPencil.vue.dea95a45.js","assets/toggleHighContrast.ca2a483d.js","assets/toggleHighContrast.30d77c87.css","assets/index.bd735f39.js","assets/Card.e7f1ac45.js","assets/TabPane.c0f09200.js","assets/SourceCode.110772df.css","assets/SaveButton.8b975a36.js","assets/ExclamationCircleOutlined.0e8884fd.js","assets/SaveButton.eebb7701.css","assets/ThreadSelector.59e2d704.js","assets/index.b3c06596.js","assets/index.260eb814.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fa2b349f.js","assets/NavbarControls.79db79c8.js","assets/router.dfbafa89.js","assets/CloseCircleOutlined.ae53d3fb.js","assets/index.7074a5a2.js","assets/popupNotifcation.391b3e15.js","assets/PhArrowSquareOut.vue.80e72303.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.26ba9f12.js","assets/BookOutlined.c9562e4f.js","assets/PhChats.vue.c9198078.js","assets/NavbarControls.18438df3.css","assets/index.a04df0d1.js","assets/index.67f066ec.js","assets/index.65b87741.js","assets/CollapsePanel.6590ee99.js","assets/Badge.2dd47434.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...K],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),Q=H(m);m.beforeEach(async(t,e)=>{var o;if(t.meta.playerRoute)return Q(t,e);if(V(t,e),t.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=t.query,h={redirect:location.origin+t.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await N();const t=F(),e=D({render:()=>x(G)});C.init(),O(e,m),e.use(m),e.use(L),e.use(t),e.mount("#app"),e.component("VSelect",S),e.component("Markdown",j),e.component("Message",W),l(e,q),l(e,U),l(e,B)})();export{u as l};
//# sourceMappingURL=editor.ba60aacd.js.map
