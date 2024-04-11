import{r as _,d as m,o as d,a as p,b as c,c as u,w as l,e as E,f as h,u as v,A as f,g as b,h as w,_ as t,i as g,j as y,T as P,k as R,P as A,C as I,M as V,s as T,l as a,m as D,n as k,p as L,q as O}from"./outputWidgets.18c70f65.js";import{r as S,g as C,s as W}from"./index.388a06ac.js";import"./pubsub.4cf1f7e2.js";import"./fetch.907432df.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="226f85bb-868e-4cde-adbf-878e4be692b4",e._sentryDebugIdIdentifier="sentry-dbid-226f85bb-868e-4cde-adbf-878e4be692b4")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(i,z)=>{const s=p("router-view");return c(),u(v(f),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[E("div",M,[h(s)])]),_:1})}}});const B=S.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),r=b({history:w("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.d902594a.js"),["assets/Home.d902594a.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.5d8a35a3.js"),["assets/Workspace.5d8a35a3.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/login.34a28fb9.js","assets/envVars.169b1241.js","assets/PhIdentificationBadge.vue.5f3a5c13.js","assets/PhCaretRight.vue.3b40a6c1.js","assets/PhFlowArrow.vue.e36d5466.js","assets/PhKanban.vue.76440158.js","assets/logo.084e5d7c.js","assets/BaseLayout.3f5cc487.js","assets/BaseLayout.d7a8431f.css","assets/NavbarControls.e180adb1.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2714d1ab.js","assets/Link.db942520.js","assets/index.388a06ac.js","assets/fetch.907432df.js","assets/popupNotifcation.1a8e2bdf.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/index.92cef1a2.js","assets/CloseCircleOutlined.02d77276.js","assets/index.d85d4d1c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/NavbarControls.db8a0c48.css","assets/index.d4ed2f18.js","assets/index.e9600d49.js","assets/Workspace.256863c0.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Stages.a8535cc7.js"),["assets/Stages.a8535cc7.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/forms.50737c43.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/jobs.0264ba73.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/asyncComputed.daff5e70.js","assets/scripts.24bd0832.js","assets/envVars.169b1241.js","assets/PhScroll.vue.b002a6d1.js","assets/PhWebhooksLogo.vue.5751b153.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/Text.2714d1ab.js","assets/index.92cef1a2.js","assets/Paragraph.ca29c0e1.js","assets/validations.9eb23f80.js","assets/string.66c8f203.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/index.d85d4d1c.js","assets/Modal.a35e951e.js","assets/CrudView.ff204112.js","assets/router.d979360f.js","assets/popupNotifcation.1a8e2bdf.js","assets/Title.23d5ef85.js","assets/index.46fd16a2.js","assets/CrudView.e8f8f039.css","assets/ant-design.2a34d3eb.js","assets/index.562f0258.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/Link.db942520.js","assets/Stages.ff837dcf.css"]),meta:{title:"Scripts"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.7a71db21.js"),["assets/WorkflowEditor.7a71db21.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0b51a4b4.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/metadata.8f3a7ff6.js","assets/PhCheckCircle.vue.fbb41a6d.js","assets/PhScroll.vue.b002a6d1.js","assets/PhWebhooksLogo.vue.5751b153.js","assets/api.47413049.js","assets/index.cf4c23b9.js","assets/validations.9eb23f80.js","assets/string.66c8f203.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/index.3102c22b.js","assets/Badge.a5c81491.js","assets/isNumeric.75337b1e.js","assets/index.92cef1a2.js","assets/Text.2714d1ab.js","assets/index.d85d4d1c.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/Modal.a35e951e.js","assets/uuid.647085a1.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/UnsavedChangesHandler.bdec248f.css","assets/index.268cc668.js","assets/WorkflowEditor.cc74329a.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>t(()=>import("./WorkflowThreads.5debbf47.js"),["assets/WorkflowThreads.5debbf47.js","assets/TableView.vue_vue_type_script_setup_true_lang.e6ab5d9b.js","assets/fetch.907432df.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/vuedraggable.umd.85976e85.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/scripts.24bd0832.js","assets/envVars.169b1241.js","assets/api.47413049.js","assets/index.cf4c23b9.js","assets/metadata.8f3a7ff6.js","assets/PhCheckCircle.vue.fbb41a6d.js","assets/PhScroll.vue.b002a6d1.js","assets/PhWebhooksLogo.vue.5751b153.js","assets/ant-design.2a34d3eb.js","assets/index.562f0258.js","assets/Modal.a35e951e.js","assets/Text.2714d1ab.js","assets/index.92cef1a2.js","assets/index.46fd16a2.js","assets/index.17dd27b1.js","assets/Paragraph.ca29c0e1.js","assets/index.b16d1a59.js","assets/Link.db942520.js","assets/Title.23d5ef85.js","assets/index.8bceb892.js","assets/CollapsePanel.041c0a2c.js","assets/index.268cc668.js","assets/index.d181bcbd.js","assets/isNumeric.75337b1e.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/hasIn.365a6f2f.js","assets/LoadingOutlined.ee856a33.js","assets/index.8a6d4f57.js","assets/Form.6beeadb7.js","assets/string.66c8f203.js","assets/TableView.5d9e33eb.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.f026a1b9.js"),["assets/StyleEditor.f026a1b9.js","assets/asyncComputed.daff5e70.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/envVars.169b1241.js","assets/CircularLoading.19bc06fd.js","assets/CircularLoading.f81b57b4.css","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2714d1ab.js","assets/Link.db942520.js","assets/SidebarPreview.9a574883.js","assets/PlayerNavbar.e0fa98d8.js","assets/PhKanban.vue.76440158.js","assets/PhSignOut.vue.f9362380.js","assets/index.b16d1a59.js","assets/Paragraph.ca29c0e1.js","assets/Title.23d5ef85.js","assets/index.e9600d49.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.d799901c.js","assets/WidgetsFrame.13b291ee.css","assets/HomeContent.19118f32.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/index.67463100.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/index.92cef1a2.js","assets/HomeContent.43c54c8b.css","assets/SidebarPreview.3703e2f8.css","assets/StyleEditor.7d0460be.css"]),meta:{title:"Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.6974fa18.js"),["assets/SidebarEditor.6974fa18.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/vuedraggable.umd.85976e85.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2714d1ab.js","assets/Link.db942520.js","assets/Item.ebe5449d.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/index.2b198b2c.js","assets/Title.23d5ef85.js","assets/index.92cef1a2.js","assets/index.268cc668.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/envVars.169b1241.js","assets/CircularLoading.19bc06fd.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.9a574883.js","assets/PlayerNavbar.e0fa98d8.js","assets/PhKanban.vue.76440158.js","assets/PhSignOut.vue.f9362380.js","assets/index.b16d1a59.js","assets/Paragraph.ca29c0e1.js","assets/index.e9600d49.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.d799901c.js","assets/WidgetsFrame.13b291ee.css","assets/HomeContent.19118f32.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/index.67463100.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/HomeContent.43c54c8b.css","assets/SidebarPreview.3703e2f8.css"]),meta:{title:"Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.c81b8175.js"),["assets/RequirementsEditor.c81b8175.js","assets/asyncComputed.daff5e70.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/CrudView.ff204112.js","assets/Paragraph.ca29c0e1.js","assets/Text.2714d1ab.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/Modal.a35e951e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/router.d979360f.js","assets/popupNotifcation.1a8e2bdf.js","assets/url.7deaa710.js","assets/index.92cef1a2.js","assets/Title.23d5ef85.js","assets/index.46fd16a2.js","assets/CrudView.e8f8f039.css","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/envVars.169b1241.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.a40bd248.js"),["assets/EnvVarsEditor.a40bd248.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/envVars.169b1241.js","assets/CrudView.ff204112.js","assets/Paragraph.ca29c0e1.js","assets/Text.2714d1ab.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/Modal.a35e951e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/router.d979360f.js","assets/popupNotifcation.1a8e2bdf.js","assets/index.92cef1a2.js","assets/Title.23d5ef85.js","assets/index.46fd16a2.js","assets/CrudView.e8f8f039.css","assets/index.d85d4d1c.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>t(()=>import("./VSCodeConnection.162fb808.js"),["assets/VSCodeConnection.162fb808.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/Title.23d5ef85.js","assets/Text.2714d1ab.js","assets/Paragraph.ca29c0e1.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>t(()=>import("./AccessControlEditor.8be28100.js"),["assets/AccessControlEditor.8be28100.js","assets/asyncComputed.daff5e70.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/fetch.907432df.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/vuedraggable.umd.85976e85.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/login.34a28fb9.js","assets/envVars.169b1241.js","assets/TabPane.7a0dfe39.js","assets/hasIn.365a6f2f.js","assets/index.268cc668.js","assets/metadata.8f3a7ff6.js","assets/PhCheckCircle.vue.fbb41a6d.js","assets/PhScroll.vue.b002a6d1.js","assets/PhWebhooksLogo.vue.5751b153.js","assets/PhKanban.vue.76440158.js","assets/Text.2714d1ab.js","assets/index.92cef1a2.js","assets/Item.ebe5449d.js","assets/Form.6beeadb7.js","assets/index.46fd16a2.js","assets/index.d85d4d1c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Link.db942520.js","assets/Paragraph.ca29c0e1.js","assets/CrudView.ff204112.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/router.d979360f.js","assets/popupNotifcation.1a8e2bdf.js","assets/Title.23d5ef85.js","assets/CrudView.e8f8f039.css","assets/PhPencil.vue.cb1e9a24.js","assets/index.d181bcbd.js","assets/isNumeric.75337b1e.js","assets/repository.25492724.js","assets/index.f41b39f3.js","assets/AccessControlEditor.748dcdfa.css"]),meta:{title:"Abstra - Access Control"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.42c4efd0.js"),["assets/FormEditor.42c4efd0.js","assets/index.388a06ac.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/pubsub.4cf1f7e2.js","assets/fetch.907432df.js","assets/BaseLayout.3f5cc487.js","assets/BaseLayout.d7a8431f.css","assets/FormRunner.fb992240.js","assets/url.7deaa710.js","assets/Passwordless.8e9230ea.js","assets/index.d85d4d1c.js","assets/PhArrowClockwise.vue.b8c5f3ce.js","assets/CircularLoading.19bc06fd.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.e0fa98d8.js","assets/PhKanban.vue.76440158.js","assets/PhSignOut.vue.f9362380.js","assets/Text.2714d1ab.js","assets/index.b16d1a59.js","assets/Link.db942520.js","assets/Paragraph.ca29c0e1.js","assets/Title.23d5ef85.js","assets/index.e9600d49.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.d799901c.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.ca220266.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.2730551a.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/hasIn.365a6f2f.js","assets/FormRunner.07bdfe87.css","assets/SourceCode.d70b53b0.js","assets/uuid.647085a1.js","assets/PhCaretRight.vue.3b40a6c1.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/record.adc4685d.js","assets/asyncComputed.daff5e70.js","assets/login.34a28fb9.js","assets/envVars.169b1241.js","assets/jobs.0264ba73.js","assets/scripts.24bd0832.js","assets/validations.9eb23f80.js","assets/string.66c8f203.js","assets/Form.6beeadb7.js","assets/toggleHighContrast.cd4b0337.js","assets/toggleHighContrast.30d77c87.css","assets/PhPencil.vue.cb1e9a24.js","assets/index.92cef1a2.js","assets/SourceCode.a441e60b.css","assets/api.47413049.js","assets/index.cf4c23b9.js","assets/metadata.8f3a7ff6.js","assets/PhCheckCircle.vue.fbb41a6d.js","assets/PhScroll.vue.b002a6d1.js","assets/PhWebhooksLogo.vue.5751b153.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/PhFlowArrow.vue.e36d5466.js","assets/forms.50737c43.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/ThreadSelector.9ff0440f.js","assets/index.17dd27b1.js","assets/index.268cc668.js","assets/ThreadSelector.deb06656.css","assets/index.7905c0d8.js","assets/NavbarControls.e180adb1.js","assets/popupNotifcation.1a8e2bdf.js","assets/CloseCircleOutlined.02d77276.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/NavbarControls.db8a0c48.css","assets/index.d4ed2f18.js","assets/Badge.a5c81491.js","assets/isNumeric.75337b1e.js","assets/FormEditor.5386c253.css"]),meta:{title:"Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.201cfbe7.js"),["assets/FormPreview.201cfbe7.js","assets/index.388a06ac.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/pubsub.4cf1f7e2.js","assets/fetch.907432df.js","assets/FormRunner.fb992240.js","assets/url.7deaa710.js","assets/Passwordless.8e9230ea.js","assets/index.d85d4d1c.js","assets/PhArrowClockwise.vue.b8c5f3ce.js","assets/CircularLoading.19bc06fd.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.e0fa98d8.js","assets/PhKanban.vue.76440158.js","assets/PhSignOut.vue.f9362380.js","assets/Text.2714d1ab.js","assets/index.b16d1a59.js","assets/Link.db942520.js","assets/Paragraph.ca29c0e1.js","assets/Title.23d5ef85.js","assets/index.e9600d49.js","assets/PlayerNavbar.16fb646d.css","assets/WidgetsFrame.d799901c.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.ca220266.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.2730551a.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/hasIn.365a6f2f.js","assets/FormRunner.07bdfe87.css","assets/asyncComputed.daff5e70.js","assets/forms.50737c43.js","assets/record.adc4685d.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/envVars.169b1241.js","assets/FormPreview.10d98ae0.css"]),meta:{title:"Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.cd9549f5.js"),["assets/JobEditor.cd9549f5.js","assets/BaseLayout.3f5cc487.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/BaseLayout.d7a8431f.css","assets/SourceCode.d70b53b0.js","assets/uuid.647085a1.js","assets/PhCaretRight.vue.3b40a6c1.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/login.34a28fb9.js","assets/envVars.169b1241.js","assets/jobs.0264ba73.js","assets/scripts.24bd0832.js","assets/validations.9eb23f80.js","assets/string.66c8f203.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/toggleHighContrast.cd4b0337.js","assets/toggleHighContrast.30d77c87.css","assets/PhPencil.vue.cb1e9a24.js","assets/index.92cef1a2.js","assets/index.d85d4d1c.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/SourceCode.a441e60b.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2714d1ab.js","assets/Link.db942520.js","assets/index.cb7cbc7f.js","assets/index.46fd16a2.js","assets/dayjs.483a5497.js","assets/Title.23d5ef85.js","assets/index.2b198b2c.js","assets/Item.ebe5449d.js","assets/RunButton.vue_vue_type_script_setup_true_lang.ad799beb.js","assets/NavbarControls.e180adb1.js","assets/index.388a06ac.js","assets/fetch.907432df.js","assets/popupNotifcation.1a8e2bdf.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/CloseCircleOutlined.02d77276.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/NavbarControls.db8a0c48.css","assets/index.d4ed2f18.js","assets/index.e9600d49.js","assets/index.7905c0d8.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.eee63445.js"),["assets/HookEditor.eee63445.js","assets/BaseLayout.3f5cc487.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/BaseLayout.d7a8431f.css","assets/SourceCode.d70b53b0.js","assets/uuid.647085a1.js","assets/PhCaretRight.vue.3b40a6c1.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/login.34a28fb9.js","assets/envVars.169b1241.js","assets/jobs.0264ba73.js","assets/scripts.24bd0832.js","assets/validations.9eb23f80.js","assets/string.66c8f203.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/toggleHighContrast.cd4b0337.js","assets/toggleHighContrast.30d77c87.css","assets/PhPencil.vue.cb1e9a24.js","assets/index.92cef1a2.js","assets/index.d85d4d1c.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/SourceCode.a441e60b.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2714d1ab.js","assets/Link.db942520.js","assets/RunButton.vue_vue_type_script_setup_true_lang.ad799beb.js","assets/api.47413049.js","assets/index.cf4c23b9.js","assets/metadata.8f3a7ff6.js","assets/PhCheckCircle.vue.fbb41a6d.js","assets/PhScroll.vue.b002a6d1.js","assets/PhWebhooksLogo.vue.5751b153.js","assets/ThreadSelector.9ff0440f.js","assets/index.17dd27b1.js","assets/index.268cc668.js","assets/ThreadSelector.deb06656.css","assets/index.1b5e90f8.js","assets/CollapsePanel.041c0a2c.js","assets/Badge.a5c81491.js","assets/isNumeric.75337b1e.js","assets/index.46fd16a2.js","assets/NavbarControls.e180adb1.js","assets/index.388a06ac.js","assets/fetch.907432df.js","assets/popupNotifcation.1a8e2bdf.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/CloseCircleOutlined.02d77276.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/NavbarControls.db8a0c48.css","assets/index.d4ed2f18.js","assets/index.e9600d49.js","assets/index.7905c0d8.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.b985e0a7.js"),["assets/ScriptEditor.b985e0a7.js","assets/BaseLayout.3f5cc487.js","assets/outputWidgets.18c70f65.js","assets/outputWidgets.04a49a2c.css","assets/BaseLayout.d7a8431f.css","assets/SourceCode.d70b53b0.js","assets/uuid.647085a1.js","assets/PhCaretRight.vue.3b40a6c1.js","assets/workspaces.c7df1622.js","assets/runnerData.21738c4d.js","assets/url.7deaa710.js","assets/record.adc4685d.js","assets/pubsub.4cf1f7e2.js","assets/asyncComputed.daff5e70.js","assets/login.34a28fb9.js","assets/envVars.169b1241.js","assets/jobs.0264ba73.js","assets/scripts.24bd0832.js","assets/validations.9eb23f80.js","assets/string.66c8f203.js","assets/Form.6beeadb7.js","assets/hasIn.365a6f2f.js","assets/toggleHighContrast.cd4b0337.js","assets/toggleHighContrast.30d77c87.css","assets/PhPencil.vue.cb1e9a24.js","assets/index.92cef1a2.js","assets/index.d85d4d1c.js","assets/Card.f423b529.js","assets/index.f41b39f3.js","assets/TabPane.7a0dfe39.js","assets/SourceCode.a441e60b.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.21789422.js","assets/UnsavedChangesHandler.38da9816.js","assets/ExclamationCircleOutlined.7d1d94b3.js","assets/Modal.a35e951e.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2714d1ab.js","assets/Link.db942520.js","assets/ThreadSelector.9ff0440f.js","assets/index.17dd27b1.js","assets/index.268cc668.js","assets/ThreadSelector.deb06656.css","assets/RunButton.vue_vue_type_script_setup_true_lang.ad799beb.js","assets/NavbarControls.e180adb1.js","assets/index.388a06ac.js","assets/fetch.907432df.js","assets/popupNotifcation.1a8e2bdf.js","assets/PhArrowSquareOut.vue.e8f82b2f.js","assets/CloseCircleOutlined.02d77276.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d73535d5.js","assets/BookOutlined.b9991d87.js","assets/NavbarControls.db8a0c48.css","assets/index.d4ed2f18.js","assets/index.e9600d49.js","assets/index.7905c0d8.js","assets/CollapsePanel.041c0a2c.js","assets/Badge.a5c81491.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...B],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),j=C(r);r.beforeEach(async(e,o)=>{if(e.meta.playerRoute)return j(e,o);g(e,o)});(async()=>{await W();const e=y({render:()=>D(q)});P.init(),R(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",I),e.component("Markdown",V),e.component("Message",T),a(e,k),a(e,L),a(e,O)})();
//# sourceMappingURL=editor.32e2bd81.js.map
