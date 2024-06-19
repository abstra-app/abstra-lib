var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.26554232.js";import{r as N,g as F,s as J}from"./index.3c8a591a.js";import"./workspaces.7c0e962f.js";import{a as G}from"./asyncComputed.3edc6789.js";import"./fetch.aa7a9983.js";import"./pubsub.8041ea49.js";import"./runnerData.ec914cd3.js";import"./url.b218ee84.js";import"./record.0fcb30c2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2f7ce75e-23dd-4933-a62d-ec8c07f403d9",e._sentryDebugIdIdentifier="sentry-dbid-2f7ce75e-23dd-4933-a62d-ec8c07f403d9")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.1812bf57.js"),["assets/Home.1812bf57.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.62464ee1.js"),["assets/Workspace.62464ee1.js","assets/BaseLayout.3b6aef9b.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.379593ee.js","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/index.3c8a591a.js","assets/fetch.aa7a9983.js","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.4b6c91f2.js","assets/index.fe2d6097.js","assets/popupNotifcation.ed054a9a.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/PhChats.vue.548eddc1.js","assets/NavbarControls.ccf0ba15.css","assets/PhIdentificationBadge.vue.c398d102.js","assets/PhCaretRight.vue.46d19763.js","assets/PhFlowArrow.vue.0f294214.js","assets/PhKanban.vue.b2a03835.js","assets/index.c4d7a0ae.js","assets/index.0659c551.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.3c3c8254.js"),["assets/Stages.3c3c8254.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/ContentLayout.ee2d5e62.js","assets/ContentLayout.6dd20759.css","assets/CrudView.b9199998.js","assets/router.649825a2.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/gateway.99c1b0d6.js","assets/popupNotifcation.ed054a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/url.b218ee84.js","assets/Modal.751847e1.js","assets/index.e5ce3cf3.js","assets/CrudView.a8b105cf.css","assets/ant-design.4653ff1c.js","assets/index.935932ac.js","assets/asyncComputed.3edc6789.js","assets/string.562bc688.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/workspaces.7c0e962f.js","assets/runnerData.ec914cd3.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/forms.086cbd1a.js","assets/jobs.db6b7b63.js","assets/scripts.3c394e48.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/validations.eebef2ad.js","assets/index.fe2d6097.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.5aa632e2.js"),["assets/WorkflowEditor.5aa632e2.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5a6e8804.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/LoadingContainer.d6bacdc8.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.eebef2ad.js","assets/string.562bc688.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/metadata.1a7df883.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhKanban.vue.b2a03835.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/index.33aa3888.js","assets/Badge.b6350969.js","assets/isNumeric.75337b1e.js","assets/index.fe2d6097.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/Modal.751847e1.js","assets/api.95f143d2.js","assets/uuid.589405b9.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.5e54fd66.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.7a7f482a.js"),["assets/WorkflowThreads.7a7f482a.js","assets/ContentLayout.ee2d5e62.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.0920b74b.js","assets/fetch.aa7a9983.js","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/scripts.3c394e48.js","assets/api.95f143d2.js","assets/metadata.1a7df883.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhKanban.vue.b2a03835.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/ant-design.4653ff1c.js","assets/index.935932ac.js","assets/Modal.751847e1.js","assets/index.e5ce3cf3.js","assets/index.b7a4d0aa.js","assets/index.6809c719.js","assets/CollapsePanel.ae1fe82d.js","assets/index.5e54fd66.js","assets/index.fe03ddd0.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.dcad9a5d.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/hasIn.f9908699.js","assets/LoadingOutlined.038ce047.js","assets/DeleteOutlined.2682bfcc.js","assets/DeleteOutlined.f8ba9770.js","assets/index.8f2bec21.js","assets/Form.a748f035.js","assets/string.562bc688.js","assets/PhDownloadSimple.vue.673a4243.js","assets/utils.40c3c03e.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.f3bd7c5d.js"),["assets/StyleEditor.f3bd7c5d.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/PlayerNavbar.6ea958a9.js","assets/metadata.1a7df883.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhKanban.vue.b2a03835.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/PhSignOut.vue.be04e7a9.js","assets/index.0659c551.js","assets/PlayerNavbar.77c5318b.css","assets/Home.7683abe0.js","assets/api.5ec786bd.js","assets/index.3c8a591a.js","assets/fetch.aa7a9983.js","assets/Watermark.cd0e363f.js","assets/Watermark.e3a0c137.css","assets/WidgetsFrame.c312ef55.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.5e295969.js","assets/index.85495ec3.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/hasIn.f9908699.js","assets/Home.c54aca19.css","assets/ContentLayout.ee2d5e62.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.d6bacdc8.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.a748f035.js","assets/StyleEditor.4c57e5df.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.97a0b67d.js"),["assets/RequirementsEditor.97a0b67d.js","assets/ContentLayout.ee2d5e62.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/ContentLayout.6dd20759.css","assets/CrudView.b9199998.js","assets/router.649825a2.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/gateway.99c1b0d6.js","assets/popupNotifcation.ed054a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/url.b218ee84.js","assets/Modal.751847e1.js","assets/index.e5ce3cf3.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.3edc6789.js","assets/workspaces.7c0e962f.js","assets/runnerData.ec914cd3.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.d472435f.js"),["assets/EnvVarsEditor.d472435f.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/ContentLayout.ee2d5e62.js","assets/ContentLayout.6dd20759.css","assets/CrudView.b9199998.js","assets/router.649825a2.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/gateway.99c1b0d6.js","assets/popupNotifcation.ed054a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/Modal.751847e1.js","assets/index.e5ce3cf3.js","assets/CrudView.a8b105cf.css","assets/index.fe2d6097.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.fac7d82a.js"),["assets/VSCodeConnection.fac7d82a.js","assets/ContentLayout.ee2d5e62.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.3b1d0bff.js"),["assets/AccessControlEditor.3b1d0bff.js","assets/ContentLayout.ee2d5e62.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/ContentLayout.6dd20759.css","assets/fetch.aa7a9983.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/repository.dd91a25e.js","assets/gateway.99c1b0d6.js","assets/popupNotifcation.ed054a9a.js","assets/asyncComputed.3edc6789.js","assets/workspaces.7c0e962f.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.b2dc659b.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/index.5e54fd66.js","assets/metadata.1a7df883.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhKanban.vue.b2a03835.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/index.e5ce3cf3.js","assets/index.fe2d6097.js","assets/index.3c8a591a.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.f96c80b3.js"),["assets/FormEditor.f96c80b3.js","assets/PlayerNavbar.6ea958a9.js","assets/metadata.1a7df883.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/PhCheckCircle.vue.5db83c41.js","assets/PhKanban.vue.b2a03835.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/PhSignOut.vue.be04e7a9.js","assets/index.0659c551.js","assets/PlayerNavbar.77c5318b.css","assets/index.3c8a591a.js","assets/fetch.aa7a9983.js","assets/pubsub.8041ea49.js","assets/BaseLayout.3b6aef9b.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.83581fbc.js","assets/uuid.589405b9.js","assets/PhCaretRight.vue.46d19763.js","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/PhCopySimple.vue.09d6c3cb.js","assets/LoadingOutlined.038ce047.js","assets/jobs.db6b7b63.js","assets/scripts.3c394e48.js","assets/validations.eebef2ad.js","assets/string.562bc688.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/PhPencil.vue.bc0031ea.js","assets/toggleHighContrast.0f9fb6c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.fe2d6097.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/SourceCode.a9a730ce.css","assets/FormRunner.a815cd27.js","assets/Login.vue_vue_type_script_setup_true_lang.431ef241.js","assets/CircularLoading.301a99cd.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.7e3fad57.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.c312ef55.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.eebedafb.js","assets/Steps.4a8d55e8.css","assets/Watermark.cd0e363f.js","assets/Watermark.e3a0c137.css","assets/FormRunner.825d7e27.css","assets/api.95f143d2.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/PhFlowArrow.vue.0f294214.js","assets/forms.086cbd1a.js","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.ccb43093.js","assets/index.b7a4d0aa.js","assets/index.5e54fd66.js","assets/ThreadSelector.087a85c2.css","assets/index.e8bd9459.js","assets/NavbarControls.379593ee.js","assets/CloseCircleOutlined.4b6c91f2.js","assets/popupNotifcation.ed054a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/PhChats.vue.548eddc1.js","assets/NavbarControls.ccf0ba15.css","assets/index.c4d7a0ae.js","assets/Badge.b6350969.js","assets/isNumeric.75337b1e.js","assets/FormEditor.0e1b5bda.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.af09113e.js"),["assets/JobEditor.af09113e.js","assets/BaseLayout.3b6aef9b.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.83581fbc.js","assets/uuid.589405b9.js","assets/PhCaretRight.vue.46d19763.js","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhCopySimple.vue.09d6c3cb.js","assets/LoadingOutlined.038ce047.js","assets/jobs.db6b7b63.js","assets/scripts.3c394e48.js","assets/validations.eebef2ad.js","assets/string.562bc688.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/PhPencil.vue.bc0031ea.js","assets/toggleHighContrast.0f9fb6c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.fe2d6097.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/SourceCode.a9a730ce.css","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.9fc4e43c.js","assets/index.0891db2b.js","assets/index.e5ce3cf3.js","assets/index.575a8a17.js","assets/RunButton.vue_vue_type_script_setup_true_lang.5c32dd2a.js","assets/NavbarControls.379593ee.js","assets/index.3c8a591a.js","assets/fetch.aa7a9983.js","assets/CloseCircleOutlined.4b6c91f2.js","assets/popupNotifcation.ed054a9a.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/PhChats.vue.548eddc1.js","assets/NavbarControls.ccf0ba15.css","assets/index.c4d7a0ae.js","assets/index.0659c551.js","assets/index.e8bd9459.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.ce937a74.js"),["assets/HookEditor.ce937a74.js","assets/BaseLayout.3b6aef9b.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.83581fbc.js","assets/uuid.589405b9.js","assets/PhCaretRight.vue.46d19763.js","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhCopySimple.vue.09d6c3cb.js","assets/LoadingOutlined.038ce047.js","assets/jobs.db6b7b63.js","assets/scripts.3c394e48.js","assets/validations.eebef2ad.js","assets/string.562bc688.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/PhPencil.vue.bc0031ea.js","assets/toggleHighContrast.0f9fb6c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.fe2d6097.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/SourceCode.a9a730ce.css","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.5c32dd2a.js","assets/api.95f143d2.js","assets/metadata.1a7df883.js","assets/PhKanban.vue.b2a03835.js","assets/PhScroll.vue.7d6f0483.js","assets/PhWebhooksLogo.vue.f886fcce.js","assets/ThreadSelector.ccb43093.js","assets/index.b7a4d0aa.js","assets/index.5e54fd66.js","assets/ThreadSelector.087a85c2.css","assets/index.81eac404.js","assets/CollapsePanel.ae1fe82d.js","assets/Badge.b6350969.js","assets/isNumeric.75337b1e.js","assets/index.e5ce3cf3.js","assets/NavbarControls.379593ee.js","assets/index.3c8a591a.js","assets/fetch.aa7a9983.js","assets/CloseCircleOutlined.4b6c91f2.js","assets/popupNotifcation.ed054a9a.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/PhChats.vue.548eddc1.js","assets/NavbarControls.ccf0ba15.css","assets/index.c4d7a0ae.js","assets/index.0659c551.js","assets/index.e8bd9459.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.2a2b27cc.js"),["assets/ScriptEditor.2a2b27cc.js","assets/BaseLayout.3b6aef9b.js","assets/outputWidgets.26554232.js","assets/outputWidgets.dd6a3ac2.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.83581fbc.js","assets/uuid.589405b9.js","assets/PhCaretRight.vue.46d19763.js","assets/workspaces.7c0e962f.js","assets/asyncComputed.3edc6789.js","assets/runnerData.ec914cd3.js","assets/url.b218ee84.js","assets/record.0fcb30c2.js","assets/pubsub.8041ea49.js","assets/PhCheckCircle.vue.5db83c41.js","assets/PhCopySimple.vue.09d6c3cb.js","assets/LoadingOutlined.038ce047.js","assets/jobs.db6b7b63.js","assets/scripts.3c394e48.js","assets/validations.eebef2ad.js","assets/string.562bc688.js","assets/Form.a748f035.js","assets/hasIn.f9908699.js","assets/PhPencil.vue.bc0031ea.js","assets/toggleHighContrast.0f9fb6c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.fe2d6097.js","assets/Card.acb944f1.js","assets/TabPane.04d793c1.js","assets/SourceCode.a9a730ce.css","assets/SaveButton.f8bd28cd.js","assets/UnsavedChangesHandler.0c8d5626.js","assets/ExclamationCircleOutlined.3c66f05a.js","assets/Modal.751847e1.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.ccb43093.js","assets/index.b7a4d0aa.js","assets/index.5e54fd66.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.5c32dd2a.js","assets/NavbarControls.379593ee.js","assets/index.3c8a591a.js","assets/fetch.aa7a9983.js","assets/CloseCircleOutlined.4b6c91f2.js","assets/popupNotifcation.ed054a9a.js","assets/PhArrowSquareOut.vue.5e295969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js","assets/BookOutlined.5bee2527.js","assets/PhChats.vue.548eddc1.js","assets/NavbarControls.ccf0ba15.css","assets/index.c4d7a0ae.js","assets/index.0659c551.js","assets/index.e8bd9459.js","assets/CollapsePanel.ae1fe82d.js","assets/Badge.b6350969.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.5c9504c8.js.map
