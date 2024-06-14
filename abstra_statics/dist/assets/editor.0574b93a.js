var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.d069b274.js";import{r as N,g as F,s as J}from"./index.de01de8c.js";import"./workspaces.658bc575.js";import{a as G}from"./asyncComputed.cca84642.js";import"./fetch.aaab9184.js";import"./pubsub.187ef80d.js";import"./runnerData.8e037fbb.js";import"./url.c639d726.js";import"./record.6e70f5af.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7556e5e6-d0e5-4515-a621-afa651df60a4",e._sentryDebugIdIdentifier="sentry-dbid-7556e5e6-d0e5-4515-a621-afa651df60a4")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.18135775.js"),["assets/Home.18135775.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.f9c61881.js"),["assets/Workspace.f9c61881.js","assets/BaseLayout.318b9837.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.f92a444e.js","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/index.de01de8c.js","assets/fetch.aaab9184.js","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.096de501.js","assets/index.51c0324b.js","assets/popupNotifcation.4620f556.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/PhChats.vue.61ee3b12.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.0e2d9467.js","assets/PhCaretRight.vue.f7c71e5d.js","assets/PhFlowArrow.vue.a4e36c5b.js","assets/PhKanban.vue.4ba7cb1f.js","assets/index.dd664b39.js","assets/index.e007cc51.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.79e7783d.js"),["assets/Stages.79e7783d.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.b7ec0fbc.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e81b3440.js","assets/router.2539c1bb.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/gateway.b0c92ad2.js","assets/popupNotifcation.4620f556.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/url.c639d726.js","assets/Modal.fa2ed5ae.js","assets/index.d6b76556.js","assets/CrudView.a8b105cf.css","assets/ant-design.076ea1a4.js","assets/index.5b660623.js","assets/asyncComputed.cca84642.js","assets/string.e8e7dddd.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/workspaces.658bc575.js","assets/runnerData.8e037fbb.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/forms.6861e68c.js","assets/jobs.197c10be.js","assets/scripts.b257036a.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/validations.0e52ab56.js","assets/index.51c0324b.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.f5814317.js"),["assets/WorkflowEditor.f5814317.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.898daf76.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/LoadingContainer.633abab5.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.0e52ab56.js","assets/string.e8e7dddd.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/metadata.365c3c5c.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhKanban.vue.4ba7cb1f.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/index.f84b2630.js","assets/Badge.7ebf4776.js","assets/isNumeric.75337b1e.js","assets/index.51c0324b.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/Modal.fa2ed5ae.js","assets/api.e7b221fd.js","assets/uuid.c3314bd0.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.05369d7f.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.5047e34c.js"),["assets/WorkflowThreads.5047e34c.js","assets/ContentLayout.b7ec0fbc.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.0de79b95.js","assets/fetch.aaab9184.js","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/scripts.b257036a.js","assets/api.e7b221fd.js","assets/metadata.365c3c5c.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhKanban.vue.4ba7cb1f.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/ant-design.076ea1a4.js","assets/index.5b660623.js","assets/Modal.fa2ed5ae.js","assets/index.d6b76556.js","assets/index.e3515dbf.js","assets/index.9fa7c1ca.js","assets/CollapsePanel.55f1cd53.js","assets/index.05369d7f.js","assets/index.03120065.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.04442efc.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/hasIn.bb21f304.js","assets/LoadingOutlined.c3580afa.js","assets/DeleteOutlined.2172ab87.js","assets/DeleteOutlined.f8ba9770.js","assets/index.309c6a3d.js","assets/Form.1070f244.js","assets/string.e8e7dddd.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.00e0b55c.js"),["assets/StyleEditor.00e0b55c.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/PlayerNavbar.79e22442.js","assets/metadata.365c3c5c.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhKanban.vue.4ba7cb1f.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/PhSignOut.vue.e7818316.js","assets/index.e007cc51.js","assets/PlayerNavbar.b2b106a9.css","assets/Home.c3a51ec5.js","assets/api.4bebbc68.js","assets/index.de01de8c.js","assets/fetch.aaab9184.js","assets/WidgetsFrame.677640a4.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.af4817ae.js","assets/index.660a6a96.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/hasIn.bb21f304.js","assets/Home.b18f7c4f.css","assets/ContentLayout.b7ec0fbc.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.633abab5.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.1070f244.js","assets/StyleEditor.25463ffb.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.52139b5f.js"),["assets/RequirementsEditor.52139b5f.js","assets/ContentLayout.b7ec0fbc.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/CrudView.e81b3440.js","assets/router.2539c1bb.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/gateway.b0c92ad2.js","assets/popupNotifcation.4620f556.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/url.c639d726.js","assets/Modal.fa2ed5ae.js","assets/index.d6b76556.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.cca84642.js","assets/workspaces.658bc575.js","assets/runnerData.8e037fbb.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.ba7a3fc4.js"),["assets/EnvVarsEditor.ba7a3fc4.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/ContentLayout.b7ec0fbc.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e81b3440.js","assets/router.2539c1bb.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/gateway.b0c92ad2.js","assets/popupNotifcation.4620f556.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/Modal.fa2ed5ae.js","assets/index.d6b76556.js","assets/CrudView.a8b105cf.css","assets/index.51c0324b.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.3aa78257.js"),["assets/VSCodeConnection.3aa78257.js","assets/ContentLayout.b7ec0fbc.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.95ffd926.js"),["assets/AccessControlEditor.95ffd926.js","assets/ContentLayout.b7ec0fbc.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/fetch.aaab9184.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/repository.37dd5787.js","assets/gateway.b0c92ad2.js","assets/popupNotifcation.4620f556.js","assets/asyncComputed.cca84642.js","assets/workspaces.658bc575.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.171462b5.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/index.05369d7f.js","assets/metadata.365c3c5c.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhKanban.vue.4ba7cb1f.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/index.d6b76556.js","assets/index.51c0324b.js","assets/index.de01de8c.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.833eeb44.js"),["assets/FormEditor.833eeb44.js","assets/PlayerNavbar.79e22442.js","assets/metadata.365c3c5c.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhKanban.vue.4ba7cb1f.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/PhSignOut.vue.e7818316.js","assets/index.e007cc51.js","assets/PlayerNavbar.b2b106a9.css","assets/index.de01de8c.js","assets/fetch.aaab9184.js","assets/pubsub.187ef80d.js","assets/BaseLayout.318b9837.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.e8ae0c13.js","assets/uuid.c3314bd0.js","assets/PhCaretRight.vue.f7c71e5d.js","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/PhCopySimple.vue.82e2e41a.js","assets/LoadingOutlined.c3580afa.js","assets/jobs.197c10be.js","assets/scripts.b257036a.js","assets/validations.0e52ab56.js","assets/string.e8e7dddd.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/PhPencil.vue.475afc90.js","assets/toggleHighContrast.7cdec671.js","assets/toggleHighContrast.30d77c87.css","assets/index.51c0324b.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/SourceCode.7f3825f5.css","assets/FormRunner.f39e40b4.js","assets/Login.vue_vue_type_script_setup_true_lang.e6f9430b.js","assets/CircularLoading.60d5e07d.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.d88e357e.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.677640a4.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.1acf3a24.js","assets/Steps.4a8d55e8.css","assets/FormRunner.5c9588c5.css","assets/api.e7b221fd.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/PhFlowArrow.vue.a4e36c5b.js","assets/forms.6861e68c.js","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.f20445cc.js","assets/index.e3515dbf.js","assets/index.05369d7f.js","assets/ThreadSelector.402458d4.css","assets/index.b842c4c6.js","assets/NavbarControls.f92a444e.js","assets/CloseCircleOutlined.096de501.js","assets/popupNotifcation.4620f556.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/PhChats.vue.61ee3b12.js","assets/NavbarControls.8ea605da.css","assets/index.dd664b39.js","assets/Badge.7ebf4776.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7e66ed9d.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.6d521512.js"),["assets/JobEditor.6d521512.js","assets/BaseLayout.318b9837.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.e8ae0c13.js","assets/uuid.c3314bd0.js","assets/PhCaretRight.vue.f7c71e5d.js","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhCopySimple.vue.82e2e41a.js","assets/LoadingOutlined.c3580afa.js","assets/jobs.197c10be.js","assets/scripts.b257036a.js","assets/validations.0e52ab56.js","assets/string.e8e7dddd.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/PhPencil.vue.475afc90.js","assets/toggleHighContrast.7cdec671.js","assets/toggleHighContrast.30d77c87.css","assets/index.51c0324b.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.4bad3558.js","assets/index.34ed2862.js","assets/index.d6b76556.js","assets/index.1a8e1e3a.js","assets/RunButton.vue_vue_type_script_setup_true_lang.7f40d13e.js","assets/NavbarControls.f92a444e.js","assets/index.de01de8c.js","assets/fetch.aaab9184.js","assets/CloseCircleOutlined.096de501.js","assets/popupNotifcation.4620f556.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/PhChats.vue.61ee3b12.js","assets/NavbarControls.8ea605da.css","assets/index.dd664b39.js","assets/index.e007cc51.js","assets/index.b842c4c6.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.148ed3d2.js"),["assets/HookEditor.148ed3d2.js","assets/BaseLayout.318b9837.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.e8ae0c13.js","assets/uuid.c3314bd0.js","assets/PhCaretRight.vue.f7c71e5d.js","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhCopySimple.vue.82e2e41a.js","assets/LoadingOutlined.c3580afa.js","assets/jobs.197c10be.js","assets/scripts.b257036a.js","assets/validations.0e52ab56.js","assets/string.e8e7dddd.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/PhPencil.vue.475afc90.js","assets/toggleHighContrast.7cdec671.js","assets/toggleHighContrast.30d77c87.css","assets/index.51c0324b.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7f40d13e.js","assets/api.e7b221fd.js","assets/metadata.365c3c5c.js","assets/PhKanban.vue.4ba7cb1f.js","assets/PhScroll.vue.a20831fb.js","assets/PhWebhooksLogo.vue.0d8f9d52.js","assets/ThreadSelector.f20445cc.js","assets/index.e3515dbf.js","assets/index.05369d7f.js","assets/ThreadSelector.402458d4.css","assets/index.1b1b70e2.js","assets/CollapsePanel.55f1cd53.js","assets/Badge.7ebf4776.js","assets/isNumeric.75337b1e.js","assets/index.d6b76556.js","assets/NavbarControls.f92a444e.js","assets/index.de01de8c.js","assets/fetch.aaab9184.js","assets/CloseCircleOutlined.096de501.js","assets/popupNotifcation.4620f556.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/PhChats.vue.61ee3b12.js","assets/NavbarControls.8ea605da.css","assets/index.dd664b39.js","assets/index.e007cc51.js","assets/index.b842c4c6.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.99b7d7ee.js"),["assets/ScriptEditor.99b7d7ee.js","assets/BaseLayout.318b9837.js","assets/outputWidgets.d069b274.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.e8ae0c13.js","assets/uuid.c3314bd0.js","assets/PhCaretRight.vue.f7c71e5d.js","assets/workspaces.658bc575.js","assets/asyncComputed.cca84642.js","assets/runnerData.8e037fbb.js","assets/url.c639d726.js","assets/record.6e70f5af.js","assets/pubsub.187ef80d.js","assets/PhCheckCircle.vue.d4da33ed.js","assets/PhCopySimple.vue.82e2e41a.js","assets/LoadingOutlined.c3580afa.js","assets/jobs.197c10be.js","assets/scripts.b257036a.js","assets/validations.0e52ab56.js","assets/string.e8e7dddd.js","assets/Form.1070f244.js","assets/hasIn.bb21f304.js","assets/PhPencil.vue.475afc90.js","assets/toggleHighContrast.7cdec671.js","assets/toggleHighContrast.30d77c87.css","assets/index.51c0324b.js","assets/Card.2bbed78b.js","assets/TabPane.c8ddc5c5.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.f9f3e5fb.js","assets/UnsavedChangesHandler.57043de9.js","assets/ExclamationCircleOutlined.bd3f4e75.js","assets/Modal.fa2ed5ae.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.f20445cc.js","assets/index.e3515dbf.js","assets/index.05369d7f.js","assets/ThreadSelector.402458d4.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7f40d13e.js","assets/NavbarControls.f92a444e.js","assets/index.de01de8c.js","assets/fetch.aaab9184.js","assets/CloseCircleOutlined.096de501.js","assets/popupNotifcation.4620f556.js","assets/PhArrowSquareOut.vue.af4817ae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.254810dc.js","assets/BookOutlined.0787b2a7.js","assets/PhChats.vue.61ee3b12.js","assets/NavbarControls.8ea605da.css","assets/index.dd664b39.js","assets/index.e007cc51.js","assets/index.b842c4c6.js","assets/CollapsePanel.55f1cd53.js","assets/Badge.7ebf4776.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.0574b93a.js.map
