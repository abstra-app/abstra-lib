var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.e52c8f8e.js";import{r as N,g as F,s as J}from"./index.eb1f3aff.js";import"./workspaces.28371e0b.js";import{a as G}from"./asyncComputed.03b34de5.js";import"./fetch.eb1cfe3f.js";import"./pubsub.ed297c6d.js";import"./runnerData.cc926795.js";import"./url.f1f726ac.js";import"./record.bf175fd9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8f369199-4895-4750-94e3-58e1c6808258",e._sentryDebugIdIdentifier="sentry-dbid-8f369199-4895-4750-94e3-58e1c6808258")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.e74ec291.js"),["assets/Home.e74ec291.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.00dd7bbc.js"),["assets/Workspace.00dd7bbc.js","assets/BaseLayout.57877a30.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.ef273c99.js","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/index.eb1f3aff.js","assets/fetch.eb1cfe3f.js","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.e709aa0c.js","assets/index.a87e51fe.js","assets/popupNotifcation.6764b61c.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/PhChats.vue.d4de8c88.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.df8599bb.js","assets/PhCaretRight.vue.fea0503e.js","assets/PhFlowArrow.vue.a406d1e7.js","assets/PhKanban.vue.3938c016.js","assets/index.b1fd0839.js","assets/index.fb7a9293.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.a08e9fd2.js"),["assets/Stages.a08e9fd2.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.906d5562.js","assets/ContentLayout.6dd20759.css","assets/CrudView.7eb2dcba.js","assets/router.f5e4c36a.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/gateway.d26ba6ae.js","assets/popupNotifcation.6764b61c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/url.f1f726ac.js","assets/Modal.50e05da8.js","assets/index.d4c277ce.js","assets/CrudView.a8b105cf.css","assets/ant-design.d570e246.js","assets/index.b1935cc2.js","assets/asyncComputed.03b34de5.js","assets/string.41e4f2ae.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/workspaces.28371e0b.js","assets/runnerData.cc926795.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/forms.3b22c9bc.js","assets/jobs.b912c31a.js","assets/scripts.55eccc22.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/validations.fcad18a7.js","assets/index.a87e51fe.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.84ab40f5.js"),["assets/WorkflowEditor.84ab40f5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ff260f6a.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/LoadingContainer.ed9f0a4a.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.fcad18a7.js","assets/string.41e4f2ae.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/metadata.a402c23a.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhKanban.vue.3938c016.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/index.e26a5c9d.js","assets/Badge.582a42d9.js","assets/isNumeric.75337b1e.js","assets/index.a87e51fe.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/Modal.50e05da8.js","assets/api.3af40908.js","assets/uuid.ce741bd3.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.69a0d061.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.0eb1d7f3.js"),["assets/WorkflowThreads.0eb1d7f3.js","assets/ContentLayout.906d5562.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.a5386d15.js","assets/fetch.eb1cfe3f.js","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/scripts.55eccc22.js","assets/api.3af40908.js","assets/metadata.a402c23a.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhKanban.vue.3938c016.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/ant-design.d570e246.js","assets/index.b1935cc2.js","assets/Modal.50e05da8.js","assets/index.d4c277ce.js","assets/index.34a2578c.js","assets/index.88e756ea.js","assets/CollapsePanel.94cefff6.js","assets/index.69a0d061.js","assets/index.9a0c2ce8.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.bbaad238.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/hasIn.dc404c28.js","assets/LoadingOutlined.87533d7d.js","assets/DeleteOutlined.220a1e92.js","assets/DeleteOutlined.f8ba9770.js","assets/index.c163f8e9.js","assets/Form.3eddbd1f.js","assets/string.41e4f2ae.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.e8038c85.js"),["assets/StyleEditor.e8038c85.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/PlayerNavbar.5f89b45b.js","assets/metadata.a402c23a.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhKanban.vue.3938c016.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/PhSignOut.vue.3492cb33.js","assets/index.fb7a9293.js","assets/PlayerNavbar.b2b106a9.css","assets/Home.4cd98ae9.js","assets/api.649e7906.js","assets/index.eb1f3aff.js","assets/fetch.eb1cfe3f.js","assets/WidgetsFrame.69b2b8c5.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/index.2312267e.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/hasIn.dc404c28.js","assets/Home.b18f7c4f.css","assets/ContentLayout.906d5562.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.ed9f0a4a.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.3eddbd1f.js","assets/StyleEditor.25463ffb.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.24875395.js"),["assets/RequirementsEditor.24875395.js","assets/ContentLayout.906d5562.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/CrudView.7eb2dcba.js","assets/router.f5e4c36a.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/gateway.d26ba6ae.js","assets/popupNotifcation.6764b61c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/url.f1f726ac.js","assets/Modal.50e05da8.js","assets/index.d4c277ce.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.03b34de5.js","assets/workspaces.28371e0b.js","assets/runnerData.cc926795.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.caff2ff2.js"),["assets/EnvVarsEditor.caff2ff2.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/ContentLayout.906d5562.js","assets/ContentLayout.6dd20759.css","assets/CrudView.7eb2dcba.js","assets/router.f5e4c36a.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/gateway.d26ba6ae.js","assets/popupNotifcation.6764b61c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/Modal.50e05da8.js","assets/index.d4c277ce.js","assets/CrudView.a8b105cf.css","assets/index.a87e51fe.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.023d436a.js"),["assets/VSCodeConnection.023d436a.js","assets/ContentLayout.906d5562.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.3eba2f26.js"),["assets/AccessControlEditor.3eba2f26.js","assets/ContentLayout.906d5562.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/fetch.eb1cfe3f.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/repository.eb23820e.js","assets/gateway.d26ba6ae.js","assets/popupNotifcation.6764b61c.js","assets/asyncComputed.03b34de5.js","assets/workspaces.28371e0b.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.fc759392.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/index.69a0d061.js","assets/metadata.a402c23a.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhKanban.vue.3938c016.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/index.d4c277ce.js","assets/index.a87e51fe.js","assets/index.eb1f3aff.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.da797c6d.js"),["assets/FormEditor.da797c6d.js","assets/PlayerNavbar.5f89b45b.js","assets/metadata.a402c23a.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhKanban.vue.3938c016.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/PhSignOut.vue.3492cb33.js","assets/index.fb7a9293.js","assets/PlayerNavbar.b2b106a9.css","assets/index.eb1f3aff.js","assets/fetch.eb1cfe3f.js","assets/pubsub.ed297c6d.js","assets/BaseLayout.57877a30.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.835f27fd.js","assets/uuid.ce741bd3.js","assets/PhCaretRight.vue.fea0503e.js","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/PhCopySimple.vue.a35cded9.js","assets/LoadingOutlined.87533d7d.js","assets/jobs.b912c31a.js","assets/scripts.55eccc22.js","assets/validations.fcad18a7.js","assets/string.41e4f2ae.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/PhPencil.vue.780f28a2.js","assets/toggleHighContrast.b47c1b57.js","assets/toggleHighContrast.30d77c87.css","assets/index.a87e51fe.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/SourceCode.7f3825f5.css","assets/FormRunner.7c20aa18.js","assets/Login.vue_vue_type_script_setup_true_lang.0524a387.js","assets/CircularLoading.9e00a938.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.926a1c7f.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.69b2b8c5.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.1ba5ea9f.js","assets/Steps.4a8d55e8.css","assets/FormRunner.5c9588c5.css","assets/api.3af40908.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/PhFlowArrow.vue.a406d1e7.js","assets/forms.3b22c9bc.js","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.2540b45c.js","assets/index.34a2578c.js","assets/index.69a0d061.js","assets/ThreadSelector.402458d4.css","assets/index.7bf2f1fa.js","assets/NavbarControls.ef273c99.js","assets/CloseCircleOutlined.e709aa0c.js","assets/popupNotifcation.6764b61c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/PhChats.vue.d4de8c88.js","assets/NavbarControls.8ea605da.css","assets/index.b1fd0839.js","assets/Badge.582a42d9.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7e66ed9d.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.65061b80.js"),["assets/JobEditor.65061b80.js","assets/BaseLayout.57877a30.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.835f27fd.js","assets/uuid.ce741bd3.js","assets/PhCaretRight.vue.fea0503e.js","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhCopySimple.vue.a35cded9.js","assets/LoadingOutlined.87533d7d.js","assets/jobs.b912c31a.js","assets/scripts.55eccc22.js","assets/validations.fcad18a7.js","assets/string.41e4f2ae.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/PhPencil.vue.780f28a2.js","assets/toggleHighContrast.b47c1b57.js","assets/toggleHighContrast.30d77c87.css","assets/index.a87e51fe.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.2cf55d7d.js","assets/index.d7ab7b88.js","assets/index.d4c277ce.js","assets/index.10bb3c6e.js","assets/RunButton.vue_vue_type_script_setup_true_lang.01e1d7ed.js","assets/NavbarControls.ef273c99.js","assets/index.eb1f3aff.js","assets/fetch.eb1cfe3f.js","assets/CloseCircleOutlined.e709aa0c.js","assets/popupNotifcation.6764b61c.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/PhChats.vue.d4de8c88.js","assets/NavbarControls.8ea605da.css","assets/index.b1fd0839.js","assets/index.fb7a9293.js","assets/index.7bf2f1fa.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.78c1fd30.js"),["assets/HookEditor.78c1fd30.js","assets/BaseLayout.57877a30.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.835f27fd.js","assets/uuid.ce741bd3.js","assets/PhCaretRight.vue.fea0503e.js","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhCopySimple.vue.a35cded9.js","assets/LoadingOutlined.87533d7d.js","assets/jobs.b912c31a.js","assets/scripts.55eccc22.js","assets/validations.fcad18a7.js","assets/string.41e4f2ae.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/PhPencil.vue.780f28a2.js","assets/toggleHighContrast.b47c1b57.js","assets/toggleHighContrast.30d77c87.css","assets/index.a87e51fe.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.01e1d7ed.js","assets/api.3af40908.js","assets/metadata.a402c23a.js","assets/PhKanban.vue.3938c016.js","assets/PhScroll.vue.31b8a0ff.js","assets/PhWebhooksLogo.vue.efb406f2.js","assets/ThreadSelector.2540b45c.js","assets/index.34a2578c.js","assets/index.69a0d061.js","assets/ThreadSelector.402458d4.css","assets/index.37fa50d3.js","assets/CollapsePanel.94cefff6.js","assets/Badge.582a42d9.js","assets/isNumeric.75337b1e.js","assets/index.d4c277ce.js","assets/NavbarControls.ef273c99.js","assets/index.eb1f3aff.js","assets/fetch.eb1cfe3f.js","assets/CloseCircleOutlined.e709aa0c.js","assets/popupNotifcation.6764b61c.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/PhChats.vue.d4de8c88.js","assets/NavbarControls.8ea605da.css","assets/index.b1fd0839.js","assets/index.fb7a9293.js","assets/index.7bf2f1fa.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.6fc79fb6.js"),["assets/ScriptEditor.6fc79fb6.js","assets/BaseLayout.57877a30.js","assets/outputWidgets.e52c8f8e.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.835f27fd.js","assets/uuid.ce741bd3.js","assets/PhCaretRight.vue.fea0503e.js","assets/workspaces.28371e0b.js","assets/asyncComputed.03b34de5.js","assets/runnerData.cc926795.js","assets/url.f1f726ac.js","assets/record.bf175fd9.js","assets/pubsub.ed297c6d.js","assets/PhCheckCircle.vue.bc0ebf0b.js","assets/PhCopySimple.vue.a35cded9.js","assets/LoadingOutlined.87533d7d.js","assets/jobs.b912c31a.js","assets/scripts.55eccc22.js","assets/validations.fcad18a7.js","assets/string.41e4f2ae.js","assets/Form.3eddbd1f.js","assets/hasIn.dc404c28.js","assets/PhPencil.vue.780f28a2.js","assets/toggleHighContrast.b47c1b57.js","assets/toggleHighContrast.30d77c87.css","assets/index.a87e51fe.js","assets/Card.9264e2e9.js","assets/TabPane.80f6bc43.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.3675d5a8.js","assets/UnsavedChangesHandler.825dd359.js","assets/ExclamationCircleOutlined.a939c140.js","assets/Modal.50e05da8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.2540b45c.js","assets/index.34a2578c.js","assets/index.69a0d061.js","assets/ThreadSelector.402458d4.css","assets/RunButton.vue_vue_type_script_setup_true_lang.01e1d7ed.js","assets/NavbarControls.ef273c99.js","assets/index.eb1f3aff.js","assets/fetch.eb1cfe3f.js","assets/CloseCircleOutlined.e709aa0c.js","assets/popupNotifcation.6764b61c.js","assets/PhArrowSquareOut.vue.d3b3d63c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c47982b3.js","assets/BookOutlined.4688be0c.js","assets/PhChats.vue.d4de8c88.js","assets/NavbarControls.8ea605da.css","assets/index.b1fd0839.js","assets/index.fb7a9293.js","assets/index.7bf2f1fa.js","assets/CollapsePanel.94cefff6.js","assets/Badge.582a42d9.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.dcd3e897.js.map
