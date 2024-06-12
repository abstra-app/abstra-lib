var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.4146fe55.js";import{r as N,g as F,s as J}from"./index.4f76cce5.js";import"./workspaces.b9f42c06.js";import{a as G}from"./asyncComputed.905ef636.js";import"./fetch.196cd5ed.js";import"./pubsub.93b3ca03.js";import"./runnerData.a85d252e.js";import"./url.4814cfa2.js";import"./record.7cb5a1b7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c284999d-e45f-4a0e-8d10-f9aefa234230",e._sentryDebugIdIdentifier="sentry-dbid-c284999d-e45f-4a0e-8d10-f9aefa234230")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.7fe0f0c7.js"),["assets/Home.7fe0f0c7.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.46f97909.js"),["assets/Workspace.46f97909.js","assets/BaseLayout.4ced968a.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.ecf9a29a.js","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/index.4f76cce5.js","assets/fetch.196cd5ed.js","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.5a95a813.js","assets/index.e935ab4c.js","assets/popupNotifcation.a0c2264e.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/PhChats.vue.20251e9f.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.bffbe9ce.js","assets/PhCaretRight.vue.88f0f0f4.js","assets/PhFlowArrow.vue.afee0ed6.js","assets/PhKanban.vue.c6d58121.js","assets/index.1d4d8ca5.js","assets/index.d45b1e50.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.b997654c.js"),["assets/Stages.b997654c.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.7a54d457.js","assets/ContentLayout.6dd20759.css","assets/CrudView.f1e88258.js","assets/router.ab4de720.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/gateway.70ae421b.js","assets/popupNotifcation.a0c2264e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/url.4814cfa2.js","assets/Modal.1c34dbf6.js","assets/index.4490cc25.js","assets/CrudView.a8b105cf.css","assets/ant-design.b87a9268.js","assets/index.d7947c1c.js","assets/asyncComputed.905ef636.js","assets/string.5f0312b3.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/workspaces.b9f42c06.js","assets/runnerData.a85d252e.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/forms.7d155057.js","assets/jobs.4586bb3f.js","assets/scripts.51b9682b.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/validations.a8311eb0.js","assets/index.e935ab4c.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.dfb72743.js"),["assets/WorkflowEditor.dfb72743.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d5c72880.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/LoadingContainer.019cbd4b.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.a8311eb0.js","assets/string.5f0312b3.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/metadata.9d02b937.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhKanban.vue.c6d58121.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/index.d3b4555f.js","assets/Badge.92e4b82b.js","assets/isNumeric.75337b1e.js","assets/index.e935ab4c.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/PlusOutlined.cf52d035.js","assets/Modal.1c34dbf6.js","assets/api.8b453592.js","assets/uuid.e15a7165.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.82dd18f4.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.b5c73a4a.js"),["assets/WorkflowThreads.b5c73a4a.js","assets/ContentLayout.7a54d457.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.2f92a708.js","assets/fetch.196cd5ed.js","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/scripts.51b9682b.js","assets/api.8b453592.js","assets/metadata.9d02b937.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhKanban.vue.c6d58121.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/ant-design.b87a9268.js","assets/index.d7947c1c.js","assets/Modal.1c34dbf6.js","assets/index.4490cc25.js","assets/index.7cdddc76.js","assets/index.19bea7a7.js","assets/CollapsePanel.04ecb52a.js","assets/index.82dd18f4.js","assets/index.342fe9ce.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.9b1d4e15.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/hasIn.65e75909.js","assets/PlusOutlined.cf52d035.js","assets/LoadingOutlined.be1284d1.js","assets/DeleteOutlined.0df64771.js","assets/DeleteOutlined.f8ba9770.js","assets/PlusOutlined.44447af8.js","assets/index.1c046528.js","assets/Form.9a8da619.js","assets/string.5f0312b3.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.b2742203.js"),["assets/StyleEditor.b2742203.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/PlayerNavbar.b8114ca5.js","assets/metadata.9d02b937.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhKanban.vue.c6d58121.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/PhSignOut.vue.529b394d.js","assets/index.d45b1e50.js","assets/PlayerNavbar.b2b106a9.css","assets/Home.0fec640e.js","assets/api.6c63e052.js","assets/index.4f76cce5.js","assets/fetch.196cd5ed.js","assets/WidgetsFrame.e54b6184.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/index.47fbfa70.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/hasIn.65e75909.js","assets/PlusOutlined.cf52d035.js","assets/Home.a0d79266.css","assets/ContentLayout.7a54d457.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.019cbd4b.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.9a8da619.js","assets/StyleEditor.25463ffb.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.ff8c0ee7.js"),["assets/RequirementsEditor.ff8c0ee7.js","assets/ContentLayout.7a54d457.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/CrudView.f1e88258.js","assets/router.ab4de720.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/gateway.70ae421b.js","assets/popupNotifcation.a0c2264e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/url.4814cfa2.js","assets/Modal.1c34dbf6.js","assets/index.4490cc25.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.905ef636.js","assets/workspaces.b9f42c06.js","assets/runnerData.a85d252e.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.139b26bf.js"),["assets/EnvVarsEditor.139b26bf.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/ContentLayout.7a54d457.js","assets/ContentLayout.6dd20759.css","assets/CrudView.f1e88258.js","assets/router.ab4de720.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/gateway.70ae421b.js","assets/popupNotifcation.a0c2264e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/Modal.1c34dbf6.js","assets/index.4490cc25.js","assets/CrudView.a8b105cf.css","assets/index.e935ab4c.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.2f9657ee.js"),["assets/VSCodeConnection.2f9657ee.js","assets/ContentLayout.7a54d457.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.523d28de.js"),["assets/AccessControlEditor.523d28de.js","assets/ContentLayout.7a54d457.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/fetch.196cd5ed.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/repository.fa9b4828.js","assets/gateway.70ae421b.js","assets/popupNotifcation.a0c2264e.js","assets/asyncComputed.905ef636.js","assets/workspaces.b9f42c06.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.c2783d36.js","assets/index.82dd18f4.js","assets/PlusOutlined.44447af8.js","assets/PlusOutlined.cf52d035.js","assets/metadata.9d02b937.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhKanban.vue.c6d58121.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/index.4490cc25.js","assets/index.e935ab4c.js","assets/index.4f76cce5.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.128b96fb.js"),["assets/FormEditor.128b96fb.js","assets/PlayerNavbar.b8114ca5.js","assets/metadata.9d02b937.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhKanban.vue.c6d58121.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/PhSignOut.vue.529b394d.js","assets/index.d45b1e50.js","assets/PlayerNavbar.b2b106a9.css","assets/index.4f76cce5.js","assets/fetch.196cd5ed.js","assets/pubsub.93b3ca03.js","assets/BaseLayout.4ced968a.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6c215e6e.js","assets/uuid.e15a7165.js","assets/PhCaretRight.vue.88f0f0f4.js","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/PhCopySimple.vue.55e7e971.js","assets/LoadingOutlined.be1284d1.js","assets/jobs.4586bb3f.js","assets/scripts.51b9682b.js","assets/validations.a8311eb0.js","assets/string.5f0312b3.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/PhPencil.vue.66d3189a.js","assets/toggleHighContrast.146fdcf5.js","assets/toggleHighContrast.30d77c87.css","assets/index.e935ab4c.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/FormRunner.6f6cbd21.js","assets/Login.vue_vue_type_script_setup_true_lang.1e354587.js","assets/CircularLoading.a1258b76.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.7269fb2f.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.e54b6184.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.871202ca.js","assets/Steps.4a8d55e8.css","assets/FormRunner.5c9588c5.css","assets/api.8b453592.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/PhFlowArrow.vue.afee0ed6.js","assets/forms.7d155057.js","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.6d48fbf5.js","assets/index.7cdddc76.js","assets/index.82dd18f4.js","assets/ThreadSelector.402458d4.css","assets/index.65284d3f.js","assets/NavbarControls.ecf9a29a.js","assets/CloseCircleOutlined.5a95a813.js","assets/popupNotifcation.a0c2264e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/PhChats.vue.20251e9f.js","assets/NavbarControls.8ea605da.css","assets/index.1d4d8ca5.js","assets/Badge.92e4b82b.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7e66ed9d.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.af48990f.js"),["assets/JobEditor.af48990f.js","assets/BaseLayout.4ced968a.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6c215e6e.js","assets/uuid.e15a7165.js","assets/PhCaretRight.vue.88f0f0f4.js","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhCopySimple.vue.55e7e971.js","assets/LoadingOutlined.be1284d1.js","assets/jobs.4586bb3f.js","assets/scripts.51b9682b.js","assets/validations.a8311eb0.js","assets/string.5f0312b3.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/PhPencil.vue.66d3189a.js","assets/toggleHighContrast.146fdcf5.js","assets/toggleHighContrast.30d77c87.css","assets/index.e935ab4c.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.0b33819b.js","assets/index.040c62b6.js","assets/index.4490cc25.js","assets/index.d6fea61e.js","assets/RunButton.vue_vue_type_script_setup_true_lang.785e61be.js","assets/NavbarControls.ecf9a29a.js","assets/index.4f76cce5.js","assets/fetch.196cd5ed.js","assets/CloseCircleOutlined.5a95a813.js","assets/popupNotifcation.a0c2264e.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/PhChats.vue.20251e9f.js","assets/NavbarControls.8ea605da.css","assets/index.1d4d8ca5.js","assets/index.d45b1e50.js","assets/index.65284d3f.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.fadf68b1.js"),["assets/HookEditor.fadf68b1.js","assets/BaseLayout.4ced968a.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6c215e6e.js","assets/uuid.e15a7165.js","assets/PhCaretRight.vue.88f0f0f4.js","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhCopySimple.vue.55e7e971.js","assets/LoadingOutlined.be1284d1.js","assets/jobs.4586bb3f.js","assets/scripts.51b9682b.js","assets/validations.a8311eb0.js","assets/string.5f0312b3.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/PhPencil.vue.66d3189a.js","assets/toggleHighContrast.146fdcf5.js","assets/toggleHighContrast.30d77c87.css","assets/index.e935ab4c.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.785e61be.js","assets/api.8b453592.js","assets/metadata.9d02b937.js","assets/PhKanban.vue.c6d58121.js","assets/PhScroll.vue.94f944fc.js","assets/PhWebhooksLogo.vue.77148bb9.js","assets/ThreadSelector.6d48fbf5.js","assets/index.7cdddc76.js","assets/index.82dd18f4.js","assets/ThreadSelector.402458d4.css","assets/index.019b9f96.js","assets/CollapsePanel.04ecb52a.js","assets/Badge.92e4b82b.js","assets/isNumeric.75337b1e.js","assets/index.4490cc25.js","assets/NavbarControls.ecf9a29a.js","assets/index.4f76cce5.js","assets/fetch.196cd5ed.js","assets/CloseCircleOutlined.5a95a813.js","assets/popupNotifcation.a0c2264e.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/PhChats.vue.20251e9f.js","assets/NavbarControls.8ea605da.css","assets/index.1d4d8ca5.js","assets/index.d45b1e50.js","assets/index.65284d3f.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.888c391f.js"),["assets/ScriptEditor.888c391f.js","assets/BaseLayout.4ced968a.js","assets/outputWidgets.4146fe55.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6c215e6e.js","assets/uuid.e15a7165.js","assets/PhCaretRight.vue.88f0f0f4.js","assets/workspaces.b9f42c06.js","assets/asyncComputed.905ef636.js","assets/runnerData.a85d252e.js","assets/url.4814cfa2.js","assets/record.7cb5a1b7.js","assets/pubsub.93b3ca03.js","assets/PhCheckCircle.vue.e77cdb1d.js","assets/PhCopySimple.vue.55e7e971.js","assets/LoadingOutlined.be1284d1.js","assets/jobs.4586bb3f.js","assets/scripts.51b9682b.js","assets/validations.a8311eb0.js","assets/string.5f0312b3.js","assets/Form.9a8da619.js","assets/hasIn.65e75909.js","assets/PhPencil.vue.66d3189a.js","assets/toggleHighContrast.146fdcf5.js","assets/toggleHighContrast.30d77c87.css","assets/index.e935ab4c.js","assets/Card.c7ef7f03.js","assets/TabPane.30c1c580.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.3be6d11f.js","assets/UnsavedChangesHandler.37e848b2.js","assets/ExclamationCircleOutlined.a2289dc2.js","assets/Modal.1c34dbf6.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.6d48fbf5.js","assets/index.7cdddc76.js","assets/index.82dd18f4.js","assets/ThreadSelector.402458d4.css","assets/RunButton.vue_vue_type_script_setup_true_lang.785e61be.js","assets/NavbarControls.ecf9a29a.js","assets/index.4f76cce5.js","assets/fetch.196cd5ed.js","assets/CloseCircleOutlined.5a95a813.js","assets/popupNotifcation.a0c2264e.js","assets/PhArrowSquareOut.vue.4ab1b480.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js","assets/BookOutlined.e8a400ca.js","assets/PhChats.vue.20251e9f.js","assets/NavbarControls.8ea605da.css","assets/index.1d4d8ca5.js","assets/index.d45b1e50.js","assets/index.65284d3f.js","assets/CollapsePanel.04ecb52a.js","assets/Badge.92e4b82b.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.283ab711.js.map
