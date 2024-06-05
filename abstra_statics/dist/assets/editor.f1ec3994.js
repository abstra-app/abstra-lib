var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.10f69f01.js";import{r as N,g as F,s as J}from"./index.62f2d8b8.js";import"./workspaces.db80a844.js";import{a as G}from"./asyncComputed.0122e572.js";import"./fetch.0223dea1.js";import"./pubsub.c11b4dac.js";import"./runnerData.e9165dd6.js";import"./url.4457f9d9.js";import"./record.0e750a6f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6fe82926-f525-4c46-81c0-cb93e6c89a99",e._sentryDebugIdIdentifier="sentry-dbid-6fe82926-f525-4c46-81c0-cb93e6c89a99")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.4b45e643.js"),["assets/Home.4b45e643.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.bd69104a.js"),["assets/Workspace.bd69104a.js","assets/BaseLayout.6abab34e.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.2ed900fe.js","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/index.62f2d8b8.js","assets/fetch.0223dea1.js","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.3072df35.js","assets/index.135dc961.js","assets/popupNotifcation.5e5c168d.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/PhChats.vue.28524abf.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.1eb27f56.js","assets/PhCaretRight.vue.9dcffee3.js","assets/PhFlowArrow.vue.077e6175.js","assets/PhKanban.vue.7bb3afff.js","assets/index.6d56def4.js","assets/index.2601edf6.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.729cfd0d.js"),["assets/Stages.729cfd0d.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.9f37319f.js","assets/ContentLayout.6dd20759.css","assets/CrudView.c20b3142.js","assets/router.e45536e1.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/gateway.b35810c4.js","assets/popupNotifcation.5e5c168d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/url.4457f9d9.js","assets/Modal.31b93de9.js","assets/index.c36dae20.js","assets/CrudView.a8b105cf.css","assets/ant-design.c3565c09.js","assets/index.76082376.js","assets/asyncComputed.0122e572.js","assets/string.378a34c2.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/workspaces.db80a844.js","assets/runnerData.e9165dd6.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/forms.2210f2ce.js","assets/jobs.f079db9e.js","assets/scripts.fa5cf49f.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/validations.2c8b6275.js","assets/index.135dc961.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.abc2d95a.js"),["assets/WorkflowEditor.abc2d95a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.8926d9df.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/LoadingContainer.95ad3eec.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.2c8b6275.js","assets/string.378a34c2.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/metadata.4d943e60.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhKanban.vue.7bb3afff.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/index.00905d0d.js","assets/Badge.f9e7cb9b.js","assets/isNumeric.75337b1e.js","assets/index.135dc961.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/PlusOutlined.cf52d035.js","assets/Modal.31b93de9.js","assets/api.aee25380.js","assets/uuid.1bfb56be.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.1563fc0f.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.e55c85c8.js"),["assets/WorkflowThreads.e55c85c8.js","assets/ContentLayout.9f37319f.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.45769a62.js","assets/fetch.0223dea1.js","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/scripts.fa5cf49f.js","assets/api.aee25380.js","assets/metadata.4d943e60.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhKanban.vue.7bb3afff.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/ant-design.c3565c09.js","assets/index.76082376.js","assets/Modal.31b93de9.js","assets/index.c36dae20.js","assets/index.56b8fe02.js","assets/index.108a6897.js","assets/CollapsePanel.d27ce279.js","assets/index.1563fc0f.js","assets/index.54dccbb0.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.864fec8b.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/hasIn.cc9d2586.js","assets/PlusOutlined.cf52d035.js","assets/LoadingOutlined.be55ea44.js","assets/index.8e47acd1.js","assets/Form.28151eee.js","assets/string.378a34c2.js","assets/TableView.89fe359a.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.1be155ba.js"),["assets/StyleEditor.1be155ba.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/PlayerNavbar.ef371283.js","assets/metadata.4d943e60.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhKanban.vue.7bb3afff.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/PhSignOut.vue.d98655f2.js","assets/index.2601edf6.js","assets/PlayerNavbar.6ea5acc6.css","assets/Home.0565cd88.js","assets/api.d530aad8.js","assets/index.62f2d8b8.js","assets/fetch.0223dea1.js","assets/WidgetsFrame.aedb644a.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowSquareOut.vue.f80aba34.js","assets/index.96c009e2.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/hasIn.cc9d2586.js","assets/PlusOutlined.cf52d035.js","assets/Home.7b93489a.css","assets/ContentLayout.9f37319f.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.95ad3eec.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.28151eee.js","assets/StyleEditor.448475ef.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.8b749588.js"),["assets/RequirementsEditor.8b749588.js","assets/ContentLayout.9f37319f.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css","assets/CrudView.c20b3142.js","assets/router.e45536e1.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/gateway.b35810c4.js","assets/popupNotifcation.5e5c168d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/url.4457f9d9.js","assets/Modal.31b93de9.js","assets/index.c36dae20.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.0122e572.js","assets/workspaces.db80a844.js","assets/runnerData.e9165dd6.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.aaf026f6.js"),["assets/EnvVarsEditor.aaf026f6.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/ContentLayout.9f37319f.js","assets/ContentLayout.6dd20759.css","assets/CrudView.c20b3142.js","assets/router.e45536e1.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/gateway.b35810c4.js","assets/popupNotifcation.5e5c168d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/Modal.31b93de9.js","assets/index.c36dae20.js","assets/CrudView.a8b105cf.css","assets/index.135dc961.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.617980ff.js"),["assets/VSCodeConnection.617980ff.js","assets/ContentLayout.9f37319f.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.b70cf149.js"),["assets/AccessControlEditor.b70cf149.js","assets/ContentLayout.9f37319f.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css","assets/fetch.0223dea1.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/repository.7ba5e44e.js","assets/gateway.b35810c4.js","assets/popupNotifcation.5e5c168d.js","assets/asyncComputed.0122e572.js","assets/workspaces.db80a844.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.0480285a.js","assets/PlusOutlined.cf52d035.js","assets/index.1563fc0f.js","assets/metadata.4d943e60.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhKanban.vue.7bb3afff.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/index.c36dae20.js","assets/index.135dc961.js","assets/index.62f2d8b8.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.b8268d42.js"),["assets/FormEditor.b8268d42.js","assets/PlayerNavbar.ef371283.js","assets/metadata.4d943e60.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/PhCheckCircle.vue.f314024e.js","assets/PhKanban.vue.7bb3afff.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/PhSignOut.vue.d98655f2.js","assets/index.2601edf6.js","assets/PlayerNavbar.6ea5acc6.css","assets/index.62f2d8b8.js","assets/fetch.0223dea1.js","assets/pubsub.c11b4dac.js","assets/BaseLayout.6abab34e.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.41b8359b.js","assets/uuid.1bfb56be.js","assets/PhCaretRight.vue.9dcffee3.js","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/PhCopySimple.vue.cecc96e5.js","assets/LoadingOutlined.be55ea44.js","assets/jobs.f079db9e.js","assets/scripts.fa5cf49f.js","assets/validations.2c8b6275.js","assets/string.378a34c2.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/PhPencil.vue.dc8e672b.js","assets/toggleHighContrast.a4c8e87c.js","assets/toggleHighContrast.30d77c87.css","assets/index.135dc961.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/FormRunner.e6fc7661.js","assets/Login.vue_vue_type_script_setup_true_lang.acf369f3.js","assets/CircularLoading.22952dc9.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.29525f71.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.aedb644a.js","assets/WidgetsFrame.c4d00f60.css","assets/Steps.f6dca4b9.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.5c157e69.js","assets/FormRunner.a26d57e3.css","assets/api.aee25380.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/PhFlowArrow.vue.077e6175.js","assets/forms.2210f2ce.js","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.83c21e5c.js","assets/index.56b8fe02.js","assets/index.1563fc0f.js","assets/ThreadSelector.8a6709c0.css","assets/index.c9f8917d.js","assets/NavbarControls.2ed900fe.js","assets/CloseCircleOutlined.3072df35.js","assets/popupNotifcation.5e5c168d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/PhChats.vue.28524abf.js","assets/NavbarControls.8ea605da.css","assets/index.6d56def4.js","assets/Badge.f9e7cb9b.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7a6b2bd9.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.25d4c680.js"),["assets/JobEditor.25d4c680.js","assets/BaseLayout.6abab34e.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.41b8359b.js","assets/uuid.1bfb56be.js","assets/PhCaretRight.vue.9dcffee3.js","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhCopySimple.vue.cecc96e5.js","assets/LoadingOutlined.be55ea44.js","assets/jobs.f079db9e.js","assets/scripts.fa5cf49f.js","assets/validations.2c8b6275.js","assets/string.378a34c2.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/PhPencil.vue.dc8e672b.js","assets/toggleHighContrast.a4c8e87c.js","assets/toggleHighContrast.30d77c87.css","assets/index.135dc961.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.e5071123.js","assets/index.a9d28ee5.js","assets/index.c36dae20.js","assets/index.b049f2d3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.9691f89f.js","assets/NavbarControls.2ed900fe.js","assets/index.62f2d8b8.js","assets/fetch.0223dea1.js","assets/CloseCircleOutlined.3072df35.js","assets/popupNotifcation.5e5c168d.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/PhChats.vue.28524abf.js","assets/NavbarControls.8ea605da.css","assets/index.6d56def4.js","assets/index.2601edf6.js","assets/index.c9f8917d.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.03dcc36a.js"),["assets/HookEditor.03dcc36a.js","assets/BaseLayout.6abab34e.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.41b8359b.js","assets/uuid.1bfb56be.js","assets/PhCaretRight.vue.9dcffee3.js","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhCopySimple.vue.cecc96e5.js","assets/LoadingOutlined.be55ea44.js","assets/jobs.f079db9e.js","assets/scripts.fa5cf49f.js","assets/validations.2c8b6275.js","assets/string.378a34c2.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/PhPencil.vue.dc8e672b.js","assets/toggleHighContrast.a4c8e87c.js","assets/toggleHighContrast.30d77c87.css","assets/index.135dc961.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.9691f89f.js","assets/api.aee25380.js","assets/metadata.4d943e60.js","assets/PhKanban.vue.7bb3afff.js","assets/PhScroll.vue.4397cec6.js","assets/PhWebhooksLogo.vue.e6bd95c3.js","assets/ThreadSelector.83c21e5c.js","assets/index.56b8fe02.js","assets/index.1563fc0f.js","assets/ThreadSelector.8a6709c0.css","assets/index.5146e004.js","assets/CollapsePanel.d27ce279.js","assets/Badge.f9e7cb9b.js","assets/isNumeric.75337b1e.js","assets/index.c36dae20.js","assets/NavbarControls.2ed900fe.js","assets/index.62f2d8b8.js","assets/fetch.0223dea1.js","assets/CloseCircleOutlined.3072df35.js","assets/popupNotifcation.5e5c168d.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/PhChats.vue.28524abf.js","assets/NavbarControls.8ea605da.css","assets/index.6d56def4.js","assets/index.2601edf6.js","assets/index.c9f8917d.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.0beeec8d.js"),["assets/ScriptEditor.0beeec8d.js","assets/BaseLayout.6abab34e.js","assets/outputWidgets.10f69f01.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.41b8359b.js","assets/uuid.1bfb56be.js","assets/PhCaretRight.vue.9dcffee3.js","assets/workspaces.db80a844.js","assets/asyncComputed.0122e572.js","assets/runnerData.e9165dd6.js","assets/url.4457f9d9.js","assets/record.0e750a6f.js","assets/pubsub.c11b4dac.js","assets/PhCheckCircle.vue.f314024e.js","assets/PhCopySimple.vue.cecc96e5.js","assets/LoadingOutlined.be55ea44.js","assets/jobs.f079db9e.js","assets/scripts.fa5cf49f.js","assets/validations.2c8b6275.js","assets/string.378a34c2.js","assets/Form.28151eee.js","assets/hasIn.cc9d2586.js","assets/PhPencil.vue.dc8e672b.js","assets/toggleHighContrast.a4c8e87c.js","assets/toggleHighContrast.30d77c87.css","assets/index.135dc961.js","assets/Card.ff0936e1.js","assets/TabPane.900c036e.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.dba90e0d.js","assets/UnsavedChangesHandler.f486b145.js","assets/ExclamationCircleOutlined.76fe9e85.js","assets/Modal.31b93de9.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.83c21e5c.js","assets/index.56b8fe02.js","assets/index.1563fc0f.js","assets/ThreadSelector.8a6709c0.css","assets/RunButton.vue_vue_type_script_setup_true_lang.9691f89f.js","assets/NavbarControls.2ed900fe.js","assets/index.62f2d8b8.js","assets/fetch.0223dea1.js","assets/CloseCircleOutlined.3072df35.js","assets/popupNotifcation.5e5c168d.js","assets/PhArrowSquareOut.vue.f80aba34.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.22071050.js","assets/BookOutlined.8f657703.js","assets/PhChats.vue.28524abf.js","assets/NavbarControls.8ea605da.css","assets/index.6d56def4.js","assets/index.2601edf6.js","assets/index.c9f8917d.js","assets/CollapsePanel.d27ce279.js","assets/Badge.f9e7cb9b.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.f1ec3994.js.map
