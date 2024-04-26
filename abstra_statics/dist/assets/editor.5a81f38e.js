import{r as _,d,o as m,a as p,b as c,c as u,w as l,e as E,f as h,u as v,A as f,g,h as w,_ as t,i as y,j as P,T as R,k as A,P as I,C as V,M as b,s as T,l as a,m as D,n as k,p as L,q as O}from"./outputWidgets.7dd23d3d.js";import{r as S,g as C,s as W}from"./index.ac9b4c61.js";import"./fetch.55a475bd.js";import"./pubsub.692bcdfa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d018e2de-cf7c-48d6-8d51-6ef63a218dca",e._sentryDebugIdIdentifier="sentry-dbid-d018e2de-cf7c-48d6-8d51-6ef63a218dca")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",x)}),(i,z)=>{const s=p("router-view");return c(),u(v(f),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[E("div",M,[h(s)])]),_:1})}}});const B=S.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),r=g({history:w("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.63d37dbc.js"),["assets/Home.63d37dbc.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.3b8831b7.js"),["assets/Workspace.3b8831b7.js","assets/BaseLayout.eaf51036.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.3a62a247.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.4bf9624b.js","assets/Link.ffd51525.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/login.88006db7.js","assets/envVars.edb75e83.js","assets/index.ac9b4c61.js","assets/fetch.55a475bd.js","assets/popupNotifcation.f54fc99f.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/index.8d63ab0d.js","assets/Text.8f0caa1d.js","assets/CloseCircleOutlined.afd04193.js","assets/index.dad58b70.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/NavbarControls.db8a0c48.css","assets/PhBracketsSquare.vue.6da5a942.js","assets/PhCaretRight.vue.1c881c6c.js","assets/PhFlowArrow.vue.ed55595b.js","assets/PhIdentificationBadge.vue.a2e4398b.js","assets/PhKanban.vue.b32a2861.js","assets/index.9c3c61e5.js","assets/index.3a6370f6.js","assets/Workspace.3ffb2076.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Stages.c3b8100f.js"),["assets/Stages.c3b8100f.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.fb9ec5fe.js","assets/ContentLayout.6dd20759.css","assets/CrudView.5a4776e3.js","assets/router.55ae8196.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/popupNotifcation.f54fc99f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/url.6301f7e9.js","assets/Paragraph.7df229fc.js","assets/Base.4bf9624b.js","assets/Modal.5fb5fcda.js","assets/index.8d63ab0d.js","assets/Title.0952eb37.js","assets/Text.8f0caa1d.js","assets/index.a5cb16ca.js","assets/CrudView.a8b105cf.css","assets/ant-design.410c5d74.js","assets/index.667384b8.js","assets/asyncComputed.8f047c40.js","assets/string.8d4f9524.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/forms.8fba42fd.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/jobs.897e6031.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/scripts.20bb39cb.js","assets/envVars.edb75e83.js","assets/PhScroll.vue.18efaca2.js","assets/PhWebhooksLogo.vue.67e83944.js","assets/validations.2f4b6c29.js","assets/index.dad58b70.js","assets/Link.ffd51525.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.dcd3c34b.js"),["assets/WorkflowEditor.dcd3c34b.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.f8d6c9bb.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/metadata.306bd23a.js","assets/PhCheckCircle.vue.6ee8bb44.js","assets/PhScroll.vue.18efaca2.js","assets/PhWebhooksLogo.vue.67e83944.js","assets/api.9b0a26a8.js","assets/validations.2f4b6c29.js","assets/string.8d4f9524.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/index.7eca0a44.js","assets/Badge.0b3c923e.js","assets/isNumeric.75337b1e.js","assets/index.8d63ab0d.js","assets/Text.8f0caa1d.js","assets/Base.4bf9624b.js","assets/index.dad58b70.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/Modal.5fb5fcda.js","assets/uuid.51158eea.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/UnsavedChangesHandler.bdec248f.css","assets/LoadingContainer.5aa0eb8d.js","assets/LoadingContainer.8bd9cc72.css","assets/index.42ade5ee.js","assets/WorkflowEditor.559e9ad0.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>t(()=>import("./WorkflowThreads.58b2fb6e.js"),["assets/WorkflowThreads.58b2fb6e.js","assets/ContentLayout.fb9ec5fe.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.3ab66d14.js","assets/fetch.55a475bd.js","assets/vuedraggable.umd.9e3b6699.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/scripts.20bb39cb.js","assets/envVars.edb75e83.js","assets/api.9b0a26a8.js","assets/metadata.306bd23a.js","assets/PhCheckCircle.vue.6ee8bb44.js","assets/PhScroll.vue.18efaca2.js","assets/PhWebhooksLogo.vue.67e83944.js","assets/ant-design.410c5d74.js","assets/index.667384b8.js","assets/Modal.5fb5fcda.js","assets/Text.8f0caa1d.js","assets/Base.4bf9624b.js","assets/index.8d63ab0d.js","assets/index.a5cb16ca.js","assets/index.bda542d5.js","assets/Paragraph.7df229fc.js","assets/index.63d9c692.js","assets/Link.ffd51525.js","assets/Title.0952eb37.js","assets/index.90ad5190.js","assets/CollapsePanel.c7d8ef37.js","assets/index.42ade5ee.js","assets/index.7c32ff54.js","assets/isNumeric.75337b1e.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/hasIn.7d5dcda7.js","assets/LoadingOutlined.bc742123.js","assets/index.063cef17.js","assets/Form.9f41d3b4.js","assets/string.8d4f9524.js","assets/TableView.e3f9294c.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.6711fa08.js"),["assets/StyleEditor.6711fa08.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/envVars.edb75e83.js","assets/SidebarPreview.759422d3.js","assets/PlayerNavbar.a89c1e87.js","assets/PhKanban.vue.b32a2861.js","assets/PhSignOut.vue.0b43dbfe.js","assets/Text.8f0caa1d.js","assets/Base.4bf9624b.js","assets/index.63d9c692.js","assets/Link.ffd51525.js","assets/Paragraph.7df229fc.js","assets/Title.0952eb37.js","assets/index.3a6370f6.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.22445284.js","assets/WidgetsFrame.7eb9c981.css","assets/HomeContent.867fb964.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/index.b7995827.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/hasIn.7d5dcda7.js","assets/index.8d63ab0d.js","assets/HomeContent.43c54c8b.css","assets/SidebarPreview.3703e2f8.css","assets/ContentLayout.fb9ec5fe.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.5aa0eb8d.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Form.9f41d3b4.js","assets/StyleEditor.7d0460be.css"]),meta:{title:"Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.28fbe11d.js"),["assets/SidebarEditor.28fbe11d.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/vuedraggable.umd.9e3b6699.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.4bf9624b.js","assets/Link.ffd51525.js","assets/Item.e2852263.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/index.751c58a3.js","assets/Title.0952eb37.js","assets/index.8d63ab0d.js","assets/index.42ade5ee.js","assets/SidebarPreview.759422d3.js","assets/PlayerNavbar.a89c1e87.js","assets/PhKanban.vue.b32a2861.js","assets/PhSignOut.vue.0b43dbfe.js","assets/Text.8f0caa1d.js","assets/index.63d9c692.js","assets/Paragraph.7df229fc.js","assets/index.3a6370f6.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.22445284.js","assets/WidgetsFrame.7eb9c981.css","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/HomeContent.867fb964.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/index.b7995827.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/HomeContent.43c54c8b.css","assets/SidebarPreview.3703e2f8.css","assets/ContentLayout.fb9ec5fe.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.5aa0eb8d.js","assets/LoadingContainer.8bd9cc72.css","assets/asyncComputed.8f047c40.js","assets/workspaces.299c954e.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/envVars.edb75e83.js"]),meta:{title:"Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.4422c1e4.js"),["assets/RequirementsEditor.4422c1e4.js","assets/ContentLayout.fb9ec5fe.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/CrudView.5a4776e3.js","assets/router.55ae8196.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/popupNotifcation.f54fc99f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/url.6301f7e9.js","assets/Paragraph.7df229fc.js","assets/Base.4bf9624b.js","assets/Modal.5fb5fcda.js","assets/index.8d63ab0d.js","assets/Title.0952eb37.js","assets/Text.8f0caa1d.js","assets/index.a5cb16ca.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.8f047c40.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/envVars.edb75e83.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.e297370e.js"),["assets/EnvVarsEditor.e297370e.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/envVars.edb75e83.js","assets/ContentLayout.fb9ec5fe.js","assets/ContentLayout.6dd20759.css","assets/CrudView.5a4776e3.js","assets/router.55ae8196.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/popupNotifcation.f54fc99f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/Paragraph.7df229fc.js","assets/Base.4bf9624b.js","assets/Modal.5fb5fcda.js","assets/index.8d63ab0d.js","assets/Title.0952eb37.js","assets/Text.8f0caa1d.js","assets/index.a5cb16ca.js","assets/CrudView.a8b105cf.css","assets/index.dad58b70.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>t(()=>import("./VSCodeConnection.955f7fb3.js"),["assets/VSCodeConnection.955f7fb3.js","assets/ContentLayout.fb9ec5fe.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/Title.0952eb37.js","assets/Base.4bf9624b.js","assets/Paragraph.7df229fc.js","assets/Text.8f0caa1d.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>t(()=>import("./AccessControlEditor.06b7b725.js"),["assets/AccessControlEditor.06b7b725.js","assets/ContentLayout.fb9ec5fe.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/fetch.55a475bd.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/repository.1a66e973.js","assets/router.55ae8196.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/popupNotifcation.f54fc99f.js","assets/asyncComputed.8f047c40.js","assets/vuedraggable.umd.9e3b6699.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/login.88006db7.js","assets/envVars.edb75e83.js","assets/TabPane.d692f77b.js","assets/index.42ade5ee.js","assets/metadata.306bd23a.js","assets/PhCheckCircle.vue.6ee8bb44.js","assets/PhScroll.vue.18efaca2.js","assets/PhWebhooksLogo.vue.67e83944.js","assets/PhKey.vue.b3d190a9.js","assets/PhIdentificationBadge.vue.a2e4398b.js","assets/PhKanban.vue.b32a2861.js","assets/Text.8f0caa1d.js","assets/Base.4bf9624b.js","assets/index.8d63ab0d.js","assets/Item.e2852263.js","assets/Paragraph.7df229fc.js","assets/index.a5cb16ca.js","assets/index.dad58b70.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Link.ffd51525.js","assets/CrudView.5a4776e3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/Title.0952eb37.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.a435f271.js","assets/index.7c32ff54.js","assets/isNumeric.75337b1e.js","assets/AccessControlEditor.5ac7765b.css"]),meta:{title:"Abstra - Access Control"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.8b17c1e5.js"),["assets/FormEditor.8b17c1e5.js","assets/index.ac9b4c61.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/fetch.55a475bd.js","assets/pubsub.692bcdfa.js","assets/BaseLayout.eaf51036.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.1c3d0772.js","assets/uuid.51158eea.js","assets/PhCaretRight.vue.1c881c6c.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/asyncComputed.8f047c40.js","assets/login.88006db7.js","assets/envVars.edb75e83.js","assets/jobs.897e6031.js","assets/scripts.20bb39cb.js","assets/validations.2f4b6c29.js","assets/string.8d4f9524.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/PhPencil.vue.a435f271.js","assets/toggleHighContrast.95fc8f2a.js","assets/toggleHighContrast.30d77c87.css","assets/index.8d63ab0d.js","assets/index.dad58b70.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/SourceCode.db128cbe.css","assets/FormRunner.ed350a77.js","assets/Login.vue_vue_type_script_setup_true_lang.f149680f.js","assets/Link.ffd51525.js","assets/Base.4bf9624b.js","assets/CircularLoading.deaf8cef.js","assets/CircularLoading.f81b57b4.css","assets/Login.d3aec418.css","assets/PlayerNavbar.a89c1e87.js","assets/PhKanban.vue.b32a2861.js","assets/PhSignOut.vue.0b43dbfe.js","assets/Text.8f0caa1d.js","assets/index.63d9c692.js","assets/Paragraph.7df229fc.js","assets/Title.0952eb37.js","assets/index.3a6370f6.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.22445284.js","assets/WidgetsFrame.7eb9c981.css","assets/Steps.4ba899ad.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.97f477fe.js","assets/FormRunner.b43dfe44.css","assets/api.9b0a26a8.js","assets/metadata.306bd23a.js","assets/PhCheckCircle.vue.6ee8bb44.js","assets/PhScroll.vue.18efaca2.js","assets/PhWebhooksLogo.vue.67e83944.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/PhFlowArrow.vue.ed55595b.js","assets/forms.8fba42fd.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/ThreadSelector.99175da9.js","assets/index.bda542d5.js","assets/index.42ade5ee.js","assets/ThreadSelector.deb06656.css","assets/index.d625af1d.js","assets/NavbarControls.3a62a247.js","assets/popupNotifcation.f54fc99f.js","assets/CloseCircleOutlined.afd04193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/NavbarControls.db8a0c48.css","assets/index.9c3c61e5.js","assets/Badge.0b3c923e.js","assets/isNumeric.75337b1e.js","assets/FormEditor.932b7581.css"]),meta:{title:"Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.8b292568.js"),["assets/FormPreview.8b292568.js","assets/index.ac9b4c61.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/fetch.55a475bd.js","assets/pubsub.692bcdfa.js","assets/FormRunner.ed350a77.js","assets/url.6301f7e9.js","assets/Login.vue_vue_type_script_setup_true_lang.f149680f.js","assets/Link.ffd51525.js","assets/Base.4bf9624b.js","assets/index.dad58b70.js","assets/CircularLoading.deaf8cef.js","assets/CircularLoading.f81b57b4.css","assets/Login.d3aec418.css","assets/PlayerNavbar.a89c1e87.js","assets/PhKanban.vue.b32a2861.js","assets/PhSignOut.vue.0b43dbfe.js","assets/Text.8f0caa1d.js","assets/index.63d9c692.js","assets/Paragraph.7df229fc.js","assets/Title.0952eb37.js","assets/index.3a6370f6.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.22445284.js","assets/WidgetsFrame.7eb9c981.css","assets/Steps.4ba899ad.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.97f477fe.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/hasIn.7d5dcda7.js","assets/FormRunner.b43dfe44.css","assets/asyncComputed.8f047c40.js","assets/forms.8fba42fd.js","assets/record.4544f931.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/envVars.edb75e83.js","assets/FormPreview.10d98ae0.css"]),meta:{title:"Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.01db9831.js"),["assets/JobEditor.01db9831.js","assets/BaseLayout.eaf51036.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.1c3d0772.js","assets/uuid.51158eea.js","assets/PhCaretRight.vue.1c881c6c.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/login.88006db7.js","assets/envVars.edb75e83.js","assets/jobs.897e6031.js","assets/scripts.20bb39cb.js","assets/validations.2f4b6c29.js","assets/string.8d4f9524.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/PhPencil.vue.a435f271.js","assets/toggleHighContrast.95fc8f2a.js","assets/toggleHighContrast.30d77c87.css","assets/index.8d63ab0d.js","assets/index.dad58b70.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/SourceCode.db128cbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.4bf9624b.js","assets/Link.ffd51525.js","assets/index.3bb46ea0.js","assets/index.a5cb16ca.js","assets/dayjs.af873c03.js","assets/Title.0952eb37.js","assets/index.751c58a3.js","assets/Item.e2852263.js","assets/RunButton.vue_vue_type_script_setup_true_lang.34a55748.js","assets/NavbarControls.3a62a247.js","assets/index.ac9b4c61.js","assets/fetch.55a475bd.js","assets/popupNotifcation.f54fc99f.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/Text.8f0caa1d.js","assets/CloseCircleOutlined.afd04193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/NavbarControls.db8a0c48.css","assets/index.9c3c61e5.js","assets/index.3a6370f6.js","assets/index.d625af1d.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.b6bf108a.js"),["assets/HookEditor.b6bf108a.js","assets/BaseLayout.eaf51036.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.1c3d0772.js","assets/uuid.51158eea.js","assets/PhCaretRight.vue.1c881c6c.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/login.88006db7.js","assets/envVars.edb75e83.js","assets/jobs.897e6031.js","assets/scripts.20bb39cb.js","assets/validations.2f4b6c29.js","assets/string.8d4f9524.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/PhPencil.vue.a435f271.js","assets/toggleHighContrast.95fc8f2a.js","assets/toggleHighContrast.30d77c87.css","assets/index.8d63ab0d.js","assets/index.dad58b70.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/SourceCode.db128cbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.4bf9624b.js","assets/Link.ffd51525.js","assets/RunButton.vue_vue_type_script_setup_true_lang.34a55748.js","assets/api.9b0a26a8.js","assets/metadata.306bd23a.js","assets/PhCheckCircle.vue.6ee8bb44.js","assets/PhScroll.vue.18efaca2.js","assets/PhWebhooksLogo.vue.67e83944.js","assets/ThreadSelector.99175da9.js","assets/index.bda542d5.js","assets/index.42ade5ee.js","assets/ThreadSelector.deb06656.css","assets/index.764d186e.js","assets/CollapsePanel.c7d8ef37.js","assets/Badge.0b3c923e.js","assets/isNumeric.75337b1e.js","assets/Text.8f0caa1d.js","assets/index.a5cb16ca.js","assets/NavbarControls.3a62a247.js","assets/index.ac9b4c61.js","assets/fetch.55a475bd.js","assets/popupNotifcation.f54fc99f.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/CloseCircleOutlined.afd04193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/NavbarControls.db8a0c48.css","assets/index.9c3c61e5.js","assets/index.3a6370f6.js","assets/index.d625af1d.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.2592e331.js"),["assets/ScriptEditor.2592e331.js","assets/BaseLayout.eaf51036.js","assets/outputWidgets.7dd23d3d.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.1c3d0772.js","assets/uuid.51158eea.js","assets/PhCaretRight.vue.1c881c6c.js","assets/workspaces.299c954e.js","assets/runnerData.13e158ee.js","assets/url.6301f7e9.js","assets/record.4544f931.js","assets/pubsub.692bcdfa.js","assets/asyncComputed.8f047c40.js","assets/login.88006db7.js","assets/envVars.edb75e83.js","assets/jobs.897e6031.js","assets/scripts.20bb39cb.js","assets/validations.2f4b6c29.js","assets/string.8d4f9524.js","assets/Form.9f41d3b4.js","assets/hasIn.7d5dcda7.js","assets/PhPencil.vue.a435f271.js","assets/toggleHighContrast.95fc8f2a.js","assets/toggleHighContrast.30d77c87.css","assets/index.8d63ab0d.js","assets/index.dad58b70.js","assets/Card.fee12f7e.js","assets/TabPane.d692f77b.js","assets/SourceCode.db128cbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.825ca3ed.js","assets/UnsavedChangesHandler.097b575b.js","assets/ExclamationCircleOutlined.140778c5.js","assets/Modal.5fb5fcda.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.4bf9624b.js","assets/Link.ffd51525.js","assets/ThreadSelector.99175da9.js","assets/index.bda542d5.js","assets/index.42ade5ee.js","assets/ThreadSelector.deb06656.css","assets/RunButton.vue_vue_type_script_setup_true_lang.34a55748.js","assets/NavbarControls.3a62a247.js","assets/index.ac9b4c61.js","assets/fetch.55a475bd.js","assets/popupNotifcation.f54fc99f.js","assets/PhArrowSquareOut.vue.12dafa2a.js","assets/Text.8f0caa1d.js","assets/CloseCircleOutlined.afd04193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js","assets/BookOutlined.ecab59cc.js","assets/NavbarControls.db8a0c48.css","assets/index.9c3c61e5.js","assets/index.3a6370f6.js","assets/index.d625af1d.js","assets/CollapsePanel.c7d8ef37.js","assets/Badge.0b3c923e.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...B],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),j=C(r);r.beforeEach(async(e,o)=>{if(e.meta.playerRoute)return j(e,o);y(e,o)});(async()=>{await W();const e=P({render:()=>D(q)});R.init(),A(e,r),e.use(r),e.use(I),e.mount("#app"),e.component("VSelect",V),e.component("Markdown",b),e.component("Message",T),a(e,k),a(e,L),a(e,O)})();
//# sourceMappingURL=editor.5a81f38e.js.map
