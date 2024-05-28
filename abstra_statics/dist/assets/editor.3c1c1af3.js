var h=Object.defineProperty;var f=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var _=(e,t,o)=>(f(e,typeof t!="symbol"?t+"":t,o),o);import{r as g,d as y,o as E,a as v,b as w,c as P,w as b,e as R,f as I,u as C,A as T,g as A,h as V,_ as a,i as D,j as k,T as O,k as L,P as S,C as j,M as W,s as q,l as d,m as x,n as M,p as U,q as B}from"./outputWidgets.7aa0f858.js";import{r as z,g as N,s as F}from"./index.e8ac136a.js";import"./envVars.4bc98a76.js";import{a as H}from"./asyncComputed.7e77424d.js";import"./fetch.6a3f3186.js";import"./pubsub.ebfbeb7d.js";import"./runnerData.17cb8c29.js";import"./url.7852244e.js";import"./record.6f82be67.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="664e5c81-e66f-43e5-bfc3-2d419a34e6b7",e._sentryDebugIdIdentifier="sentry-dbid-664e5c81-e66f-43e5-bfc3-2d419a34e6b7")}catch{}})();const l=g(!1),J=()=>{window.innerWidth<780?l.value=!0:l.value=!1},G={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},K=y({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return E(()=>{window.addEventListener("resize",J)}),(o,r)=>{const s=v("router-view");return w(),P(C(T),{theme:t,"page-header":{ghost:!1}},{default:b(()=>[R("div",G,[I(s)])]),_:1})}}});const n=class{async refreshIfChanged(t){var o,r;t.logged!==((r=(o=this.asyncComputed.result.value)==null?void 0:o.logged)!=null?r:!1)&&await this.asyncComputed.refetch()}async get(){return await(await fetch("/_editor/api/login")).json()}async create(t){const r=await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json();return await this.refreshIfChanged(r),r}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return n._asyncComputed===null&&(n._asyncComputed=H(()=>p.get())),n._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let i=n;_(i,"_asyncComputed",null);const p=new i,Q=z.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),c=A({history:V("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.dac0b1dc.js"),["assets/Home.dac0b1dc.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.94565a0b.js"),["assets/Workspace.94565a0b.js","assets/BaseLayout.f95bcb87.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.4e77cf23.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/index.e8ac136a.js","assets/fetch.6a3f3186.js","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.646c79a8.js","assets/Link.d67967d1.js","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.c3066f99.js","assets/index.0c203854.js","assets/popupNotifcation.043c8115.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/index.7d2f58ee.js","assets/Text.ebdbaf90.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/NavbarControls.64fd95b4.css","assets/PhIdentificationBadge.vue.440884ca.js","assets/PhCaretRight.vue.9ca1a83e.js","assets/PhFlowArrow.vue.48a38724.js","assets/PhKanban.vue.a2d49720.js","assets/index.c7f2ddd3.js","assets/index.2094de5b.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.d911ed04.js"),["assets/Stages.d911ed04.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.1c2b63b7.js","assets/ContentLayout.6dd20759.css","assets/CrudView.f2babfb3.js","assets/router.0980c5a8.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/popupNotifcation.043c8115.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/url.7852244e.js","assets/Paragraph.90e96315.js","assets/Base.646c79a8.js","assets/Modal.551f5bca.js","assets/index.7d2f58ee.js","assets/Title.024e8dc5.js","assets/Text.ebdbaf90.js","assets/index.bc93e816.js","assets/CrudView.a8b105cf.css","assets/ant-design.79f90251.js","assets/index.d2f9f8e3.js","assets/asyncComputed.7e77424d.js","assets/string.0198203e.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/forms.2e18333c.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/jobs.a84d03ec.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/scripts.efe34aa1.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/validations.68448cf3.js","assets/index.0c203854.js","assets/Link.d67967d1.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.cb72c7d0.js"),["assets/WorkflowEditor.cb72c7d0.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6dc59f65.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/LoadingContainer.5f9f7e5e.js","assets/LoadingContainer.8bd9cc72.css","assets/Text.ebdbaf90.js","assets/Base.646c79a8.js","assets/validations.68448cf3.js","assets/string.0198203e.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/metadata.0d67b652.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhKanban.vue.a2d49720.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/index.db65e293.js","assets/Badge.35a3b07e.js","assets/isNumeric.75337b1e.js","assets/index.7d2f58ee.js","assets/index.0c203854.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/Modal.551f5bca.js","assets/api.b7288616.js","assets/uuid.8a044de4.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.5b4b70de.js","assets/WorkflowEditor.47e28a49.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.0f93114d.js"),["assets/WorkflowThreads.0f93114d.js","assets/ContentLayout.1c2b63b7.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.dbc864f6.js","assets/fetch.6a3f3186.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/scripts.efe34aa1.js","assets/api.b7288616.js","assets/metadata.0d67b652.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhKanban.vue.a2d49720.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/ant-design.79f90251.js","assets/index.d2f9f8e3.js","assets/Modal.551f5bca.js","assets/Text.ebdbaf90.js","assets/Base.646c79a8.js","assets/index.7d2f58ee.js","assets/index.bc93e816.js","assets/index.b4c27f18.js","assets/Paragraph.90e96315.js","assets/index.e7ba3000.js","assets/Link.d67967d1.js","assets/Title.024e8dc5.js","assets/index.7d759900.js","assets/CollapsePanel.20df6e8e.js","assets/index.5b4b70de.js","assets/index.9e3c119a.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.ad14588a.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/hasIn.b37c452b.js","assets/LoadingOutlined.00782ae5.js","assets/index.8573b34e.js","assets/Form.62fee2d9.js","assets/string.0198203e.js","assets/TableView.89fe359a.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.3cb89445.js"),["assets/StyleEditor.3cb89445.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/PlayerNavbar.cc2d453d.js","assets/metadata.0d67b652.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhKanban.vue.a2d49720.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/PhSignOut.vue.9187a5a1.js","assets/index.2094de5b.js","assets/Text.ebdbaf90.js","assets/Base.646c79a8.js","assets/PlayerNavbar.6ea5acc6.css","assets/Home.bac3fd25.js","assets/api.677c64a7.js","assets/index.e8ac136a.js","assets/fetch.6a3f3186.js","assets/WidgetsFrame.7dd10565.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowSquareOut.vue.192e6fca.js","assets/index.e7ba3000.js","assets/Link.d67967d1.js","assets/Paragraph.90e96315.js","assets/Title.024e8dc5.js","assets/index.7d2f58ee.js","assets/index.5f595882.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/hasIn.b37c452b.js","assets/Home.c9754666.css","assets/ContentLayout.1c2b63b7.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.5f9f7e5e.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.62fee2d9.js","assets/StyleEditor.448475ef.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.b1fd193b.js"),["assets/RequirementsEditor.b1fd193b.js","assets/ContentLayout.1c2b63b7.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/CrudView.f2babfb3.js","assets/router.0980c5a8.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/popupNotifcation.043c8115.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/url.7852244e.js","assets/Paragraph.90e96315.js","assets/Base.646c79a8.js","assets/Modal.551f5bca.js","assets/index.7d2f58ee.js","assets/Title.024e8dc5.js","assets/Text.ebdbaf90.js","assets/index.bc93e816.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.7e77424d.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.2bb4ad3a.js"),["assets/EnvVarsEditor.2bb4ad3a.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/ContentLayout.1c2b63b7.js","assets/ContentLayout.6dd20759.css","assets/CrudView.f2babfb3.js","assets/router.0980c5a8.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/popupNotifcation.043c8115.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/Paragraph.90e96315.js","assets/Base.646c79a8.js","assets/Modal.551f5bca.js","assets/index.7d2f58ee.js","assets/Title.024e8dc5.js","assets/Text.ebdbaf90.js","assets/index.bc93e816.js","assets/CrudView.a8b105cf.css","assets/index.0c203854.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.42ee4ae5.js"),["assets/VSCodeConnection.42ee4ae5.js","assets/ContentLayout.1c2b63b7.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/Title.024e8dc5.js","assets/Base.646c79a8.js","assets/Paragraph.90e96315.js","assets/Text.ebdbaf90.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.7191eab4.js"),["assets/AccessControlEditor.7191eab4.js","assets/ContentLayout.1c2b63b7.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/fetch.6a3f3186.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/repository.f92ac4b6.js","assets/router.0980c5a8.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/popupNotifcation.043c8115.js","assets/asyncComputed.7e77424d.js","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.646c79a8.js","assets/Link.d67967d1.js","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.cf00db84.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/TabPane.3d553ef1.js","assets/index.5b4b70de.js","assets/metadata.0d67b652.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhKanban.vue.a2d49720.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/index.7d2f58ee.js","assets/Text.ebdbaf90.js","assets/index.bc93e816.js","assets/index.0c203854.js","assets/Paragraph.90e96315.js","assets/CrudView.f2babfb3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/Title.024e8dc5.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.5cf74703.js","assets/index.9e3c119a.js","assets/isNumeric.75337b1e.js","assets/index.e8ac136a.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.3121dd9d.js"),["assets/FormEditor.3121dd9d.js","assets/PlayerNavbar.cc2d453d.js","assets/metadata.0d67b652.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/PhCheckCircle.vue.d29a382d.js","assets/PhKanban.vue.a2d49720.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/PhSignOut.vue.9187a5a1.js","assets/index.2094de5b.js","assets/Text.ebdbaf90.js","assets/Base.646c79a8.js","assets/PlayerNavbar.6ea5acc6.css","assets/index.e8ac136a.js","assets/fetch.6a3f3186.js","assets/pubsub.ebfbeb7d.js","assets/BaseLayout.f95bcb87.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.539143c4.js","assets/uuid.8a044de4.js","assets/PhCaretRight.vue.9ca1a83e.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/asyncComputed.7e77424d.js","assets/PhCopySimple.vue.04a492da.js","assets/LoadingOutlined.00782ae5.js","assets/jobs.a84d03ec.js","assets/scripts.efe34aa1.js","assets/validations.68448cf3.js","assets/string.0198203e.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/PhPencil.vue.5cf74703.js","assets/toggleHighContrast.9db822a3.js","assets/toggleHighContrast.30d77c87.css","assets/index.7d2f58ee.js","assets/index.0c203854.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/SourceCode.4c9abecd.css","assets/FormRunner.30565391.js","assets/Login.vue_vue_type_script_setup_true_lang.891940a0.js","assets/Link.d67967d1.js","assets/index.e7ba3000.js","assets/Paragraph.90e96315.js","assets/Title.024e8dc5.js","assets/CircularLoading.c1b91aef.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.161e6406.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.7dd10565.js","assets/WidgetsFrame.c4d00f60.css","assets/Steps.1280dd15.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.d1507d7e.js","assets/FormRunner.a26d57e3.css","assets/api.b7288616.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/PhFlowArrow.vue.48a38724.js","assets/forms.2e18333c.js","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.c690bc63.js","assets/index.b4c27f18.js","assets/index.5b4b70de.js","assets/ThreadSelector.8a6709c0.css","assets/index.7719f9fc.js","assets/NavbarControls.4e77cf23.js","assets/CloseCircleOutlined.c3066f99.js","assets/popupNotifcation.043c8115.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/NavbarControls.64fd95b4.css","assets/index.c7f2ddd3.js","assets/Badge.35a3b07e.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7a6b2bd9.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.e345cf0c.js"),["assets/JobEditor.e345cf0c.js","assets/BaseLayout.f95bcb87.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.539143c4.js","assets/uuid.8a044de4.js","assets/PhCaretRight.vue.9ca1a83e.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhCopySimple.vue.04a492da.js","assets/LoadingOutlined.00782ae5.js","assets/jobs.a84d03ec.js","assets/scripts.efe34aa1.js","assets/validations.68448cf3.js","assets/string.0198203e.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/PhPencil.vue.5cf74703.js","assets/toggleHighContrast.9db822a3.js","assets/toggleHighContrast.30d77c87.css","assets/index.7d2f58ee.js","assets/index.0c203854.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/SourceCode.4c9abecd.css","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.646c79a8.js","assets/Link.d67967d1.js","assets/SaveButton.ccfb7431.css","assets/index.c9f554b4.js","assets/index.bc93e816.js","assets/dayjs.d6712589.js","assets/index.dd4aee49.js","assets/Title.024e8dc5.js","assets/RunButton.vue_vue_type_script_setup_true_lang.125229ef.js","assets/NavbarControls.4e77cf23.js","assets/index.e8ac136a.js","assets/fetch.6a3f3186.js","assets/CloseCircleOutlined.c3066f99.js","assets/popupNotifcation.043c8115.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/Text.ebdbaf90.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/NavbarControls.64fd95b4.css","assets/index.c7f2ddd3.js","assets/index.2094de5b.js","assets/index.7719f9fc.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.d7205781.js"),["assets/HookEditor.d7205781.js","assets/BaseLayout.f95bcb87.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.539143c4.js","assets/uuid.8a044de4.js","assets/PhCaretRight.vue.9ca1a83e.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhCopySimple.vue.04a492da.js","assets/LoadingOutlined.00782ae5.js","assets/jobs.a84d03ec.js","assets/scripts.efe34aa1.js","assets/validations.68448cf3.js","assets/string.0198203e.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/PhPencil.vue.5cf74703.js","assets/toggleHighContrast.9db822a3.js","assets/toggleHighContrast.30d77c87.css","assets/index.7d2f58ee.js","assets/index.0c203854.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/SourceCode.4c9abecd.css","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.646c79a8.js","assets/Link.d67967d1.js","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.125229ef.js","assets/api.b7288616.js","assets/metadata.0d67b652.js","assets/PhKanban.vue.a2d49720.js","assets/PhScroll.vue.d03813f6.js","assets/PhWebhooksLogo.vue.94647e38.js","assets/ThreadSelector.c690bc63.js","assets/index.b4c27f18.js","assets/index.5b4b70de.js","assets/ThreadSelector.8a6709c0.css","assets/index.c9248b98.js","assets/CollapsePanel.20df6e8e.js","assets/Badge.35a3b07e.js","assets/isNumeric.75337b1e.js","assets/Text.ebdbaf90.js","assets/index.bc93e816.js","assets/NavbarControls.4e77cf23.js","assets/index.e8ac136a.js","assets/fetch.6a3f3186.js","assets/CloseCircleOutlined.c3066f99.js","assets/popupNotifcation.043c8115.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/NavbarControls.64fd95b4.css","assets/index.c7f2ddd3.js","assets/index.2094de5b.js","assets/index.7719f9fc.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.29a6bf18.js"),["assets/ScriptEditor.29a6bf18.js","assets/BaseLayout.f95bcb87.js","assets/outputWidgets.7aa0f858.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.539143c4.js","assets/uuid.8a044de4.js","assets/PhCaretRight.vue.9ca1a83e.js","assets/envVars.4bc98a76.js","assets/runnerData.17cb8c29.js","assets/url.7852244e.js","assets/record.6f82be67.js","assets/pubsub.ebfbeb7d.js","assets/asyncComputed.7e77424d.js","assets/PhCheckCircle.vue.d29a382d.js","assets/PhCopySimple.vue.04a492da.js","assets/LoadingOutlined.00782ae5.js","assets/jobs.a84d03ec.js","assets/scripts.efe34aa1.js","assets/validations.68448cf3.js","assets/string.0198203e.js","assets/Form.62fee2d9.js","assets/hasIn.b37c452b.js","assets/PhPencil.vue.5cf74703.js","assets/toggleHighContrast.9db822a3.js","assets/toggleHighContrast.30d77c87.css","assets/index.7d2f58ee.js","assets/index.0c203854.js","assets/Card.e6650fae.js","assets/TabPane.3d553ef1.js","assets/SourceCode.4c9abecd.css","assets/SaveButton.91249b12.js","assets/UnsavedChangesHandler.f8402cdb.js","assets/ExclamationCircleOutlined.44b05ec7.js","assets/Modal.551f5bca.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.646c79a8.js","assets/Link.d67967d1.js","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.c690bc63.js","assets/index.b4c27f18.js","assets/index.5b4b70de.js","assets/ThreadSelector.8a6709c0.css","assets/RunButton.vue_vue_type_script_setup_true_lang.125229ef.js","assets/NavbarControls.4e77cf23.js","assets/index.e8ac136a.js","assets/fetch.6a3f3186.js","assets/CloseCircleOutlined.c3066f99.js","assets/popupNotifcation.043c8115.js","assets/PhArrowSquareOut.vue.192e6fca.js","assets/Text.ebdbaf90.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js","assets/BookOutlined.15a78ea7.js","assets/NavbarControls.64fd95b4.css","assets/index.c7f2ddd3.js","assets/index.2094de5b.js","assets/index.7719f9fc.js","assets/CollapsePanel.20df6e8e.js","assets/Badge.35a3b07e.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Q],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),X=N(c);c.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return X(e,t);if(D(e,t),e.meta.allowUnauthenticated===!1&&((o=p.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:s,...u}=e.query,m={redirect:location.origin+e.fullPath,...u};s&&(m["prev-redirect"]=s),window.open(p.loginUrl(m),"_self");return}});(async()=>{await F();const e=k({render:()=>x(K)});O.init(),L(e,c),e.use(c),e.use(S),e.mount("#app"),e.component("VSelect",j),e.component("Markdown",W),e.component("Message",q),d(e,M),d(e,U),d(e,B)})();export{p as l};
//# sourceMappingURL=editor.3c1c1af3.js.map
