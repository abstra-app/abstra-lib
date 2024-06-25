var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.049ac64d.js";import{r as N,g as F,s as J}from"./index.5b8dff4d.js";import"./workspaces.3ec329b9.js";import{a as G}from"./asyncComputed.ea730548.js";import"./fetch.869cbc1f.js";import"./pubsub.0c3367ed.js";import"./runnerData.ea577873.js";import"./url.bfc1d6a1.js";import"./record.5a9ec5fd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a460690f-598d-4440-8f5f-05b354409873",e._sentryDebugIdIdentifier="sentry-dbid-a460690f-598d-4440-8f5f-05b354409873")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.30838b7e.js"),["assets/Home.30838b7e.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.a28ca8e9.js"),["assets/Workspace.a28ca8e9.js","assets/BaseLayout.e2fa8c35.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.41462d3b.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/index.5b8dff4d.js","assets/fetch.869cbc1f.js","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.2e2641ec.js","assets/index.c1842d07.js","assets/popupNotifcation.836c9a92.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/PhChats.vue.935beeaf.js","assets/NavbarControls.ccf0ba15.css","assets/PhIdentificationBadge.vue.a3fe602b.js","assets/PhCaretRight.vue.2fa7e2ca.js","assets/PhFlowArrow.vue.ae3e9f0e.js","assets/PhKanban.vue.b5adf1c2.js","assets/index.ce736879.js","assets/index.ed3586a8.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.bdbe0303.js"),["assets/Stages.bdbe0303.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/ContentLayout.2a376971.js","assets/ContentLayout.ee57a545.css","assets/CrudView.ea10c7da.js","assets/router.2632e2a3.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/gateway.c0f62b43.js","assets/popupNotifcation.836c9a92.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/url.bfc1d6a1.js","assets/Modal.dcfdf87a.js","assets/index.dae82177.js","assets/CrudView.a8b105cf.css","assets/ant-design.2529b071.js","assets/index.2e524e3e.js","assets/asyncComputed.ea730548.js","assets/string.3fb102a6.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/workspaces.3ec329b9.js","assets/runnerData.ea577873.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/forms.5ad80837.js","assets/jobs.7a06f2e1.js","assets/scripts.4e373b2f.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/validations.c2904803.js","assets/index.c1842d07.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.10700f1a.js"),["assets/WorkflowEditor.10700f1a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.08b0207b.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/LoadingContainer.17a55082.js","assets/LoadingContainer.8bd9cc72.css","assets/model.e4cca9e4.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/validations.c2904803.js","assets/string.3fb102a6.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/metadata.68579fd9.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhKanban.vue.b5adf1c2.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/index.7422ae93.js","assets/Badge.75599d10.js","assets/isNumeric.75337b1e.js","assets/index.c1842d07.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/Modal.dcfdf87a.js","assets/api.491f7a89.js","assets/fetch.869cbc1f.js","assets/uuid.52af8294.js","assets/model.f4a37ee0.css","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.eef1a417.js","assets/WorkflowEditor.46cbf7cc.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.69fd3441.js"),["assets/WorkflowThreads.69fd3441.js","assets/ContentLayout.2a376971.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.259170ef.js","assets/fetch.869cbc1f.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/scripts.4e373b2f.js","assets/api.491f7a89.js","assets/metadata.68579fd9.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhKanban.vue.b5adf1c2.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/ant-design.2529b071.js","assets/index.2e524e3e.js","assets/Modal.dcfdf87a.js","assets/index.dae82177.js","assets/index.d8b3526b.js","assets/index.d2b809bc.js","assets/CollapsePanel.199023f7.js","assets/index.eef1a417.js","assets/index.6ed091bb.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.6f4dc9dd.js","assets/model.e4cca9e4.js","assets/validations.c2904803.js","assets/string.3fb102a6.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/index.7422ae93.js","assets/Badge.75599d10.js","assets/index.c1842d07.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/uuid.52af8294.js","assets/model.f4a37ee0.css","assets/LoadingOutlined.27a2404f.js","assets/DeleteOutlined.3a9e4a51.js","assets/DeleteOutlined.f8ba9770.js","assets/index.a3797c8d.js","assets/PhDownloadSimple.vue.ebace4e1.js","assets/utils.daf9d554.js","assets/WorkflowView.7ec4e2f6.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.34da307c.js"),["assets/StyleEditor.34da307c.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/PlayerNavbar.4780a87a.js","assets/metadata.68579fd9.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhKanban.vue.b5adf1c2.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/PhSignOut.vue.eb011732.js","assets/index.ed3586a8.js","assets/PlayerNavbar.77c5318b.css","assets/Home.26e68e13.js","assets/api.9106a1be.js","assets/index.5b8dff4d.js","assets/fetch.869cbc1f.js","assets/Watermark.13acfc81.js","assets/Watermark.f2e1adbe.css","assets/WidgetsFrame.c05aa68e.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.3f754e86.js","assets/index.7ac7350d.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/hasIn.8c8d3925.js","assets/Home.1be385c2.css","assets/ContentLayout.2a376971.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.17a55082.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.8d97bd19.js","assets/StyleEditor.4c57e5df.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.3853fff7.js"),["assets/RequirementsEditor.3853fff7.js","assets/ContentLayout.2a376971.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/ContentLayout.ee57a545.css","assets/CrudView.ea10c7da.js","assets/router.2632e2a3.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/gateway.c0f62b43.js","assets/popupNotifcation.836c9a92.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/url.bfc1d6a1.js","assets/Modal.dcfdf87a.js","assets/index.dae82177.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.ea730548.js","assets/workspaces.3ec329b9.js","assets/runnerData.ea577873.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.47f62568.js"),["assets/EnvVarsEditor.47f62568.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/ContentLayout.2a376971.js","assets/ContentLayout.ee57a545.css","assets/CrudView.ea10c7da.js","assets/router.2632e2a3.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/gateway.c0f62b43.js","assets/popupNotifcation.836c9a92.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/Modal.dcfdf87a.js","assets/index.dae82177.js","assets/CrudView.a8b105cf.css","assets/index.c1842d07.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.b5c1d3d2.js"),["assets/VSCodeConnection.b5c1d3d2.js","assets/ContentLayout.2a376971.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/ContentLayout.ee57a545.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.b61073bb.js"),["assets/AccessControlEditor.b61073bb.js","assets/ContentLayout.2a376971.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/ContentLayout.ee57a545.css","assets/fetch.869cbc1f.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/repository.b6c78798.js","assets/gateway.c0f62b43.js","assets/popupNotifcation.836c9a92.js","assets/asyncComputed.ea730548.js","assets/workspaces.3ec329b9.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.10eb4390.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/index.eef1a417.js","assets/metadata.68579fd9.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhKanban.vue.b5adf1c2.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/index.dae82177.js","assets/index.c1842d07.js","assets/index.5b8dff4d.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.abac4ca3.js"),["assets/FormEditor.abac4ca3.js","assets/PlayerNavbar.4780a87a.js","assets/metadata.68579fd9.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/PhCheckCircle.vue.7af99e00.js","assets/PhKanban.vue.b5adf1c2.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/PhSignOut.vue.eb011732.js","assets/index.ed3586a8.js","assets/PlayerNavbar.77c5318b.css","assets/index.5b8dff4d.js","assets/fetch.869cbc1f.js","assets/pubsub.0c3367ed.js","assets/BaseLayout.e2fa8c35.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.0347f588.js","assets/uuid.52af8294.js","assets/PhCaretRight.vue.2fa7e2ca.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/PhCopySimple.vue.b72c5791.js","assets/LoadingOutlined.27a2404f.js","assets/jobs.7a06f2e1.js","assets/scripts.4e373b2f.js","assets/validations.c2904803.js","assets/string.3fb102a6.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/PhPencil.vue.1e5902a9.js","assets/toggleHighContrast.0a0c20be.js","assets/toggleHighContrast.30d77c87.css","assets/index.c1842d07.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/SourceCode.69a1b288.css","assets/FormRunner.53b27dc5.js","assets/Login.vue_vue_type_script_setup_true_lang.545ba93c.js","assets/CircularLoading.8dcc9668.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.fd29a69e.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.c05aa68e.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.52000ab5.js","assets/Steps.4a8d55e8.css","assets/Watermark.13acfc81.js","assets/Watermark.f2e1adbe.css","assets/FormRunner.825d7e27.css","assets/api.491f7a89.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/PhFlowArrow.vue.ae3e9f0e.js","assets/forms.5ad80837.js","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.ad706719.js","assets/index.d8b3526b.js","assets/index.eef1a417.js","assets/ThreadSelector.087a85c2.css","assets/index.892e68e0.js","assets/NavbarControls.41462d3b.js","assets/CloseCircleOutlined.2e2641ec.js","assets/popupNotifcation.836c9a92.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/PhChats.vue.935beeaf.js","assets/NavbarControls.ccf0ba15.css","assets/index.ce736879.js","assets/Badge.75599d10.js","assets/isNumeric.75337b1e.js","assets/FormEditor.0e1b5bda.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.66da0ede.js"),["assets/JobEditor.66da0ede.js","assets/BaseLayout.e2fa8c35.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.0347f588.js","assets/uuid.52af8294.js","assets/PhCaretRight.vue.2fa7e2ca.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhCopySimple.vue.b72c5791.js","assets/LoadingOutlined.27a2404f.js","assets/jobs.7a06f2e1.js","assets/scripts.4e373b2f.js","assets/validations.c2904803.js","assets/string.3fb102a6.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/PhPencil.vue.1e5902a9.js","assets/toggleHighContrast.0a0c20be.js","assets/toggleHighContrast.30d77c87.css","assets/index.c1842d07.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/SourceCode.69a1b288.css","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.4f131008.js","assets/index.d29eaffa.js","assets/index.dae82177.js","assets/index.45a882ef.js","assets/RunButton.vue_vue_type_script_setup_true_lang.66ce24ec.js","assets/NavbarControls.41462d3b.js","assets/index.5b8dff4d.js","assets/fetch.869cbc1f.js","assets/CloseCircleOutlined.2e2641ec.js","assets/popupNotifcation.836c9a92.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/PhChats.vue.935beeaf.js","assets/NavbarControls.ccf0ba15.css","assets/index.ce736879.js","assets/index.ed3586a8.js","assets/index.892e68e0.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.1bec89b4.js"),["assets/HookEditor.1bec89b4.js","assets/BaseLayout.e2fa8c35.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.0347f588.js","assets/uuid.52af8294.js","assets/PhCaretRight.vue.2fa7e2ca.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhCopySimple.vue.b72c5791.js","assets/LoadingOutlined.27a2404f.js","assets/jobs.7a06f2e1.js","assets/scripts.4e373b2f.js","assets/validations.c2904803.js","assets/string.3fb102a6.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/PhPencil.vue.1e5902a9.js","assets/toggleHighContrast.0a0c20be.js","assets/toggleHighContrast.30d77c87.css","assets/index.c1842d07.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/SourceCode.69a1b288.css","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.66ce24ec.js","assets/api.491f7a89.js","assets/fetch.869cbc1f.js","assets/metadata.68579fd9.js","assets/PhKanban.vue.b5adf1c2.js","assets/PhScroll.vue.6c7ddf10.js","assets/PhWebhooksLogo.vue.d32b627f.js","assets/ThreadSelector.ad706719.js","assets/index.d8b3526b.js","assets/index.eef1a417.js","assets/ThreadSelector.087a85c2.css","assets/index.d7d76fa9.js","assets/CollapsePanel.199023f7.js","assets/Badge.75599d10.js","assets/isNumeric.75337b1e.js","assets/index.dae82177.js","assets/NavbarControls.41462d3b.js","assets/index.5b8dff4d.js","assets/CloseCircleOutlined.2e2641ec.js","assets/popupNotifcation.836c9a92.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/PhChats.vue.935beeaf.js","assets/NavbarControls.ccf0ba15.css","assets/index.ce736879.js","assets/index.ed3586a8.js","assets/index.892e68e0.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.2f160869.js"),["assets/ScriptEditor.2f160869.js","assets/BaseLayout.e2fa8c35.js","assets/outputWidgets.049ac64d.js","assets/outputWidgets.e787bf64.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.0347f588.js","assets/uuid.52af8294.js","assets/PhCaretRight.vue.2fa7e2ca.js","assets/workspaces.3ec329b9.js","assets/asyncComputed.ea730548.js","assets/runnerData.ea577873.js","assets/url.bfc1d6a1.js","assets/record.5a9ec5fd.js","assets/pubsub.0c3367ed.js","assets/PhCheckCircle.vue.7af99e00.js","assets/PhCopySimple.vue.b72c5791.js","assets/LoadingOutlined.27a2404f.js","assets/jobs.7a06f2e1.js","assets/scripts.4e373b2f.js","assets/validations.c2904803.js","assets/string.3fb102a6.js","assets/Form.8d97bd19.js","assets/hasIn.8c8d3925.js","assets/PhPencil.vue.1e5902a9.js","assets/toggleHighContrast.0a0c20be.js","assets/toggleHighContrast.30d77c87.css","assets/index.c1842d07.js","assets/Card.6629bb68.js","assets/TabPane.223e6cb6.js","assets/SourceCode.69a1b288.css","assets/SaveButton.25e59cb4.js","assets/UnsavedChangesHandler.ec55a733.js","assets/ExclamationCircleOutlined.741abbbe.js","assets/Modal.dcfdf87a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.ad706719.js","assets/index.d8b3526b.js","assets/index.eef1a417.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.66ce24ec.js","assets/NavbarControls.41462d3b.js","assets/index.5b8dff4d.js","assets/fetch.869cbc1f.js","assets/CloseCircleOutlined.2e2641ec.js","assets/popupNotifcation.836c9a92.js","assets/PhArrowSquareOut.vue.3f754e86.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.07720f16.js","assets/BookOutlined.d451bbc7.js","assets/PhChats.vue.935beeaf.js","assets/NavbarControls.ccf0ba15.css","assets/index.ce736879.js","assets/index.ed3586a8.js","assets/index.892e68e0.js","assets/CollapsePanel.199023f7.js","assets/Badge.75599d10.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.36c8c910.js.map
