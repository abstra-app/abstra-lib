var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.a6a6ef30.js";import{r as N,g as F,s as J}from"./index.98d02c55.js";import"./workspaces.094fce8e.js";import{a as G}from"./asyncComputed.d67c847a.js";import"./fetch.2cdde52d.js";import"./pubsub.906f7e66.js";import"./runnerData.09340835.js";import"./url.00089ca9.js";import"./record.8f173599.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="33718aaa-f1d1-45af-94cf-e77318622432",e._sentryDebugIdIdentifier="sentry-dbid-33718aaa-f1d1-45af-94cf-e77318622432")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.07d19eb4.js"),["assets/Home.07d19eb4.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.72cd0549.js"),["assets/Workspace.72cd0549.js","assets/BaseLayout.a53cd915.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.a09451be.js","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/index.98d02c55.js","assets/fetch.2cdde52d.js","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.266919e9.js","assets/index.4934d790.js","assets/popupNotifcation.ce8f3816.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/PhChats.vue.7e946ba6.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.fa087aa8.js","assets/PhCaretRight.vue.b6f688a2.js","assets/PhFlowArrow.vue.c305af6b.js","assets/PhKanban.vue.632b31ab.js","assets/index.ae5b4ee6.js","assets/index.10c54efc.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.a6cacd97.js"),["assets/Stages.a6cacd97.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.543a86f4.js","assets/ContentLayout.6dd20759.css","assets/CrudView.f10a7446.js","assets/router.36169449.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/gateway.c2265f5e.js","assets/popupNotifcation.ce8f3816.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/url.00089ca9.js","assets/Modal.c1c6172f.js","assets/index.30ac913e.js","assets/CrudView.a8b105cf.css","assets/ant-design.4d8697aa.js","assets/index.43d7170a.js","assets/asyncComputed.d67c847a.js","assets/string.d812720a.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/workspaces.094fce8e.js","assets/runnerData.09340835.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/forms.511f8066.js","assets/jobs.cbfe2072.js","assets/scripts.a1fd592b.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/validations.74b66b66.js","assets/index.4934d790.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.2498f589.js"),["assets/WorkflowEditor.2498f589.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.690262f6.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/LoadingContainer.40e43dcc.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.74b66b66.js","assets/string.d812720a.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/metadata.5f7679a7.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhKanban.vue.632b31ab.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/index.a3180bc2.js","assets/Badge.311c2b36.js","assets/isNumeric.75337b1e.js","assets/index.4934d790.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/Modal.c1c6172f.js","assets/api.30b3d4ed.js","assets/uuid.5e5824ab.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.0090e71c.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.87d87f77.js"),["assets/WorkflowThreads.87d87f77.js","assets/ContentLayout.543a86f4.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.a5833ca9.js","assets/fetch.2cdde52d.js","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/scripts.a1fd592b.js","assets/api.30b3d4ed.js","assets/metadata.5f7679a7.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhKanban.vue.632b31ab.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/ant-design.4d8697aa.js","assets/index.43d7170a.js","assets/Modal.c1c6172f.js","assets/index.30ac913e.js","assets/index.317d632d.js","assets/index.e264d79a.js","assets/CollapsePanel.ceeb16c7.js","assets/index.0090e71c.js","assets/index.0f7f8bd9.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.3584ffb0.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/hasIn.b01cfd56.js","assets/LoadingOutlined.6e246522.js","assets/DeleteOutlined.7883c835.js","assets/DeleteOutlined.f8ba9770.js","assets/index.4bd50279.js","assets/Form.766fb35b.js","assets/string.d812720a.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.6a2b5711.js"),["assets/StyleEditor.6a2b5711.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/PlayerNavbar.c27c6bdf.js","assets/metadata.5f7679a7.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhKanban.vue.632b31ab.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/PhSignOut.vue.ae70df5d.js","assets/index.10c54efc.js","assets/PlayerNavbar.77c5318b.css","assets/Home.3e71c21a.js","assets/api.734f41cc.js","assets/index.98d02c55.js","assets/fetch.2cdde52d.js","assets/WidgetsFrame.68dc535a.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/index.eee1d288.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/hasIn.b01cfd56.js","assets/Home.0ab6fbd4.css","assets/ContentLayout.543a86f4.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.40e43dcc.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.766fb35b.js","assets/StyleEditor.25463ffb.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.662b1925.js"),["assets/RequirementsEditor.662b1925.js","assets/ContentLayout.543a86f4.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/CrudView.f10a7446.js","assets/router.36169449.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/gateway.c2265f5e.js","assets/popupNotifcation.ce8f3816.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/url.00089ca9.js","assets/Modal.c1c6172f.js","assets/index.30ac913e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.d67c847a.js","assets/workspaces.094fce8e.js","assets/runnerData.09340835.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.b1a242fd.js"),["assets/EnvVarsEditor.b1a242fd.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/ContentLayout.543a86f4.js","assets/ContentLayout.6dd20759.css","assets/CrudView.f10a7446.js","assets/router.36169449.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/gateway.c2265f5e.js","assets/popupNotifcation.ce8f3816.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/Modal.c1c6172f.js","assets/index.30ac913e.js","assets/CrudView.a8b105cf.css","assets/index.4934d790.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.0e03c9f6.js"),["assets/VSCodeConnection.0e03c9f6.js","assets/ContentLayout.543a86f4.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.62a97ef5.js"),["assets/AccessControlEditor.62a97ef5.js","assets/ContentLayout.543a86f4.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/fetch.2cdde52d.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/repository.fab5e6cf.js","assets/gateway.c2265f5e.js","assets/popupNotifcation.ce8f3816.js","assets/asyncComputed.d67c847a.js","assets/workspaces.094fce8e.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.73e258bd.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/index.0090e71c.js","assets/metadata.5f7679a7.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhKanban.vue.632b31ab.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/index.30ac913e.js","assets/index.4934d790.js","assets/index.98d02c55.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.1db89add.js"),["assets/FormEditor.1db89add.js","assets/PlayerNavbar.c27c6bdf.js","assets/metadata.5f7679a7.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhKanban.vue.632b31ab.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/PhSignOut.vue.ae70df5d.js","assets/index.10c54efc.js","assets/PlayerNavbar.77c5318b.css","assets/index.98d02c55.js","assets/fetch.2cdde52d.js","assets/pubsub.906f7e66.js","assets/BaseLayout.a53cd915.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.d6b41807.js","assets/uuid.5e5824ab.js","assets/PhCaretRight.vue.b6f688a2.js","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/PhCopySimple.vue.ee410e02.js","assets/LoadingOutlined.6e246522.js","assets/jobs.cbfe2072.js","assets/scripts.a1fd592b.js","assets/validations.74b66b66.js","assets/string.d812720a.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/PhPencil.vue.f664e61d.js","assets/toggleHighContrast.e8ea70ee.js","assets/toggleHighContrast.30d77c87.css","assets/index.4934d790.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/SourceCode.7f3825f5.css","assets/FormRunner.dd1f3c95.js","assets/Login.vue_vue_type_script_setup_true_lang.d8380f3d.js","assets/CircularLoading.39b4839a.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.50cc3f5c.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.68dc535a.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.049db4ae.js","assets/Steps.4a8d55e8.css","assets/FormRunner.58085244.css","assets/api.30b3d4ed.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/PhFlowArrow.vue.c305af6b.js","assets/forms.511f8066.js","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.58c89561.js","assets/index.317d632d.js","assets/index.0090e71c.js","assets/ThreadSelector.402458d4.css","assets/index.910bb4a4.js","assets/NavbarControls.a09451be.js","assets/CloseCircleOutlined.266919e9.js","assets/popupNotifcation.ce8f3816.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/PhChats.vue.7e946ba6.js","assets/NavbarControls.8ea605da.css","assets/index.ae5b4ee6.js","assets/Badge.311c2b36.js","assets/isNumeric.75337b1e.js","assets/FormEditor.0e1b5bda.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.567fdcab.js"),["assets/JobEditor.567fdcab.js","assets/BaseLayout.a53cd915.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.d6b41807.js","assets/uuid.5e5824ab.js","assets/PhCaretRight.vue.b6f688a2.js","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhCopySimple.vue.ee410e02.js","assets/LoadingOutlined.6e246522.js","assets/jobs.cbfe2072.js","assets/scripts.a1fd592b.js","assets/validations.74b66b66.js","assets/string.d812720a.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/PhPencil.vue.f664e61d.js","assets/toggleHighContrast.e8ea70ee.js","assets/toggleHighContrast.30d77c87.css","assets/index.4934d790.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.c782ac55.js","assets/index.47986cf4.js","assets/index.30ac913e.js","assets/index.2fd7d76d.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f1991f9f.js","assets/NavbarControls.a09451be.js","assets/index.98d02c55.js","assets/fetch.2cdde52d.js","assets/CloseCircleOutlined.266919e9.js","assets/popupNotifcation.ce8f3816.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/PhChats.vue.7e946ba6.js","assets/NavbarControls.8ea605da.css","assets/index.ae5b4ee6.js","assets/index.10c54efc.js","assets/index.910bb4a4.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.afb21807.js"),["assets/HookEditor.afb21807.js","assets/BaseLayout.a53cd915.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.d6b41807.js","assets/uuid.5e5824ab.js","assets/PhCaretRight.vue.b6f688a2.js","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhCopySimple.vue.ee410e02.js","assets/LoadingOutlined.6e246522.js","assets/jobs.cbfe2072.js","assets/scripts.a1fd592b.js","assets/validations.74b66b66.js","assets/string.d812720a.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/PhPencil.vue.f664e61d.js","assets/toggleHighContrast.e8ea70ee.js","assets/toggleHighContrast.30d77c87.css","assets/index.4934d790.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f1991f9f.js","assets/api.30b3d4ed.js","assets/metadata.5f7679a7.js","assets/PhKanban.vue.632b31ab.js","assets/PhScroll.vue.de2d980a.js","assets/PhWebhooksLogo.vue.e8266643.js","assets/ThreadSelector.58c89561.js","assets/index.317d632d.js","assets/index.0090e71c.js","assets/ThreadSelector.402458d4.css","assets/index.c060a991.js","assets/CollapsePanel.ceeb16c7.js","assets/Badge.311c2b36.js","assets/isNumeric.75337b1e.js","assets/index.30ac913e.js","assets/NavbarControls.a09451be.js","assets/index.98d02c55.js","assets/fetch.2cdde52d.js","assets/CloseCircleOutlined.266919e9.js","assets/popupNotifcation.ce8f3816.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/PhChats.vue.7e946ba6.js","assets/NavbarControls.8ea605da.css","assets/index.ae5b4ee6.js","assets/index.10c54efc.js","assets/index.910bb4a4.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.75217a55.js"),["assets/ScriptEditor.75217a55.js","assets/BaseLayout.a53cd915.js","assets/outputWidgets.a6a6ef30.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.d6b41807.js","assets/uuid.5e5824ab.js","assets/PhCaretRight.vue.b6f688a2.js","assets/workspaces.094fce8e.js","assets/asyncComputed.d67c847a.js","assets/runnerData.09340835.js","assets/url.00089ca9.js","assets/record.8f173599.js","assets/pubsub.906f7e66.js","assets/PhCheckCircle.vue.ef0ee05b.js","assets/PhCopySimple.vue.ee410e02.js","assets/LoadingOutlined.6e246522.js","assets/jobs.cbfe2072.js","assets/scripts.a1fd592b.js","assets/validations.74b66b66.js","assets/string.d812720a.js","assets/Form.766fb35b.js","assets/hasIn.b01cfd56.js","assets/PhPencil.vue.f664e61d.js","assets/toggleHighContrast.e8ea70ee.js","assets/toggleHighContrast.30d77c87.css","assets/index.4934d790.js","assets/Card.6a760f62.js","assets/TabPane.c81c1fb6.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.4551e4cb.js","assets/UnsavedChangesHandler.d0c2853c.js","assets/ExclamationCircleOutlined.cae6bd9b.js","assets/Modal.c1c6172f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.58c89561.js","assets/index.317d632d.js","assets/index.0090e71c.js","assets/ThreadSelector.402458d4.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f1991f9f.js","assets/NavbarControls.a09451be.js","assets/index.98d02c55.js","assets/fetch.2cdde52d.js","assets/CloseCircleOutlined.266919e9.js","assets/popupNotifcation.ce8f3816.js","assets/PhArrowSquareOut.vue.f025e0d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js","assets/BookOutlined.90e1581d.js","assets/PhChats.vue.7e946ba6.js","assets/NavbarControls.8ea605da.css","assets/index.ae5b4ee6.js","assets/index.10c54efc.js","assets/index.910bb4a4.js","assets/CollapsePanel.ceeb16c7.js","assets/Badge.311c2b36.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.56321252.js.map
