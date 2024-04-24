import{r as _,d,o as m,a as p,b as c,c as u,w as l,e as E,f as h,u as v,A as f,g,h as w,_ as t,i as y,j as P,T as R,k as A,P as I,C as V,M as b,s as T,l as a,m as D,n as k,p as L,q as O}from"./outputWidgets.60e2cfb3.js";import{r as S,g as C,s as W}from"./index.4b50fa56.js";import"./fetch.0c15122e.js";import"./pubsub.b80b2845.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="544d81a0-47ad-40c0-9ae3-1da612511970",e._sentryDebugIdIdentifier="sentry-dbid-544d81a0-47ad-40c0-9ae3-1da612511970")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",x)}),(i,z)=>{const s=p("router-view");return c(),u(v(f),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[E("div",M,[h(s)])]),_:1})}}});const B=S.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),r=g({history:w("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.750c9bdc.js"),["assets/Home.750c9bdc.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.32434196.js"),["assets/Workspace.32434196.js","assets/BaseLayout.94f8f051.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.97a4e6bf.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.fa2c0c3a.js","assets/Link.e1eb3835.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/login.dc9e87b9.js","assets/envVars.98b3ca31.js","assets/index.4b50fa56.js","assets/fetch.0c15122e.js","assets/popupNotifcation.b5eb6b54.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/index.e4935754.js","assets/Text.6116aa28.js","assets/CloseCircleOutlined.cc3f9d4d.js","assets/index.79b26aef.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/NavbarControls.db8a0c48.css","assets/PhBracketsSquare.vue.a7c98584.js","assets/PhCaretRight.vue.8bde554d.js","assets/PhFlowArrow.vue.6f391323.js","assets/PhIdentificationBadge.vue.6b64ec97.js","assets/PhKanban.vue.687b6d70.js","assets/index.a9aca59f.js","assets/index.d1aa13e4.js","assets/Workspace.3ffb2076.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Stages.52de8b0e.js"),["assets/Stages.52de8b0e.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.73f09674.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e8d8cec1.js","assets/router.dcd36344.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/popupNotifcation.b5eb6b54.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/url.2d1f0441.js","assets/Paragraph.5431ef62.js","assets/Base.fa2c0c3a.js","assets/Modal.c4f28aca.js","assets/index.e4935754.js","assets/Title.7bef409e.js","assets/Text.6116aa28.js","assets/index.5680d2cb.js","assets/CrudView.a8b105cf.css","assets/ant-design.b9e75904.js","assets/index.5e6325cc.js","assets/asyncComputed.66fb612f.js","assets/string.3c5647d2.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/forms.27a11ac2.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/jobs.c32bfb04.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/scripts.11de0763.js","assets/envVars.98b3ca31.js","assets/PhScroll.vue.1f00c659.js","assets/PhWebhooksLogo.vue.9d46ace2.js","assets/validations.8feb1461.js","assets/index.79b26aef.js","assets/Link.e1eb3835.js","assets/Stages.5e2082cf.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.7f4d86b6.js"),["assets/WorkflowEditor.7f4d86b6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.bc87f3e7.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/metadata.63c3505e.js","assets/PhCheckCircle.vue.c3fa20e4.js","assets/PhScroll.vue.1f00c659.js","assets/PhWebhooksLogo.vue.9d46ace2.js","assets/api.9a8a7bce.js","assets/validations.8feb1461.js","assets/string.3c5647d2.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/index.0b04b24e.js","assets/Badge.63337045.js","assets/isNumeric.75337b1e.js","assets/index.e4935754.js","assets/Text.6116aa28.js","assets/Base.fa2c0c3a.js","assets/index.79b26aef.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/Modal.c4f28aca.js","assets/uuid.922aa2f9.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/UnsavedChangesHandler.bdec248f.css","assets/LoadingContainer.00e0a0a1.js","assets/LoadingContainer.8bd9cc72.css","assets/index.bb5c41e7.js","assets/WorkflowEditor.559e9ad0.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>t(()=>import("./WorkflowThreads.0d37858f.js"),["assets/WorkflowThreads.0d37858f.js","assets/ContentLayout.73f09674.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.da734470.js","assets/fetch.0c15122e.js","assets/vuedraggable.umd.4e741757.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/scripts.11de0763.js","assets/envVars.98b3ca31.js","assets/api.9a8a7bce.js","assets/metadata.63c3505e.js","assets/PhCheckCircle.vue.c3fa20e4.js","assets/PhScroll.vue.1f00c659.js","assets/PhWebhooksLogo.vue.9d46ace2.js","assets/ant-design.b9e75904.js","assets/index.5e6325cc.js","assets/Modal.c4f28aca.js","assets/Text.6116aa28.js","assets/Base.fa2c0c3a.js","assets/index.e4935754.js","assets/index.5680d2cb.js","assets/index.f0442008.js","assets/Paragraph.5431ef62.js","assets/index.1644cd3b.js","assets/Link.e1eb3835.js","assets/Title.7bef409e.js","assets/index.c3b06aad.js","assets/CollapsePanel.df839464.js","assets/index.bb5c41e7.js","assets/index.26e2ecdc.js","assets/isNumeric.75337b1e.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/hasIn.e586edaf.js","assets/LoadingOutlined.cde16921.js","assets/index.910a76f2.js","assets/Form.acf22271.js","assets/string.3c5647d2.js","assets/TableView.e3f9294c.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.98a8e729.js"),["assets/StyleEditor.98a8e729.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/envVars.98b3ca31.js","assets/SidebarPreview.6ce4df08.js","assets/PlayerNavbar.3eefd106.js","assets/PhKanban.vue.687b6d70.js","assets/PhSignOut.vue.4eba92a2.js","assets/Text.6116aa28.js","assets/Base.fa2c0c3a.js","assets/index.1644cd3b.js","assets/Link.e1eb3835.js","assets/Paragraph.5431ef62.js","assets/Title.7bef409e.js","assets/index.d1aa13e4.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.e875ceaa.js","assets/WidgetsFrame.7eb9c981.css","assets/HomeContent.7b57cc8f.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/index.5664efe2.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/hasIn.e586edaf.js","assets/index.e4935754.js","assets/HomeContent.43c54c8b.css","assets/SidebarPreview.3703e2f8.css","assets/ContentLayout.73f09674.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.00e0a0a1.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Form.acf22271.js","assets/StyleEditor.7d0460be.css"]),meta:{title:"Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.963d6188.js"),["assets/SidebarEditor.963d6188.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/vuedraggable.umd.4e741757.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.fa2c0c3a.js","assets/Link.e1eb3835.js","assets/Item.b23fb8f3.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/index.3489f1fa.js","assets/Title.7bef409e.js","assets/index.e4935754.js","assets/index.bb5c41e7.js","assets/SidebarPreview.6ce4df08.js","assets/PlayerNavbar.3eefd106.js","assets/PhKanban.vue.687b6d70.js","assets/PhSignOut.vue.4eba92a2.js","assets/Text.6116aa28.js","assets/index.1644cd3b.js","assets/Paragraph.5431ef62.js","assets/index.d1aa13e4.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.e875ceaa.js","assets/WidgetsFrame.7eb9c981.css","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/HomeContent.7b57cc8f.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/index.5664efe2.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/HomeContent.43c54c8b.css","assets/SidebarPreview.3703e2f8.css","assets/ContentLayout.73f09674.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.00e0a0a1.js","assets/LoadingContainer.8bd9cc72.css","assets/asyncComputed.66fb612f.js","assets/workspaces.805af0bf.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/envVars.98b3ca31.js"]),meta:{title:"Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.a832410d.js"),["assets/RequirementsEditor.a832410d.js","assets/ContentLayout.73f09674.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/CrudView.e8d8cec1.js","assets/router.dcd36344.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/popupNotifcation.b5eb6b54.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/url.2d1f0441.js","assets/Paragraph.5431ef62.js","assets/Base.fa2c0c3a.js","assets/Modal.c4f28aca.js","assets/index.e4935754.js","assets/Title.7bef409e.js","assets/Text.6116aa28.js","assets/index.5680d2cb.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.66fb612f.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/envVars.98b3ca31.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.ea97dcbf.js"),["assets/EnvVarsEditor.ea97dcbf.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/envVars.98b3ca31.js","assets/ContentLayout.73f09674.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e8d8cec1.js","assets/router.dcd36344.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/popupNotifcation.b5eb6b54.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/Paragraph.5431ef62.js","assets/Base.fa2c0c3a.js","assets/Modal.c4f28aca.js","assets/index.e4935754.js","assets/Title.7bef409e.js","assets/Text.6116aa28.js","assets/index.5680d2cb.js","assets/CrudView.a8b105cf.css","assets/index.79b26aef.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>t(()=>import("./VSCodeConnection.c5abd352.js"),["assets/VSCodeConnection.c5abd352.js","assets/ContentLayout.73f09674.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/Title.7bef409e.js","assets/Base.fa2c0c3a.js","assets/Paragraph.5431ef62.js","assets/Text.6116aa28.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>t(()=>import("./AccessControlEditor.c41e5bc9.js"),["assets/AccessControlEditor.c41e5bc9.js","assets/ContentLayout.73f09674.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.6dd20759.css","assets/fetch.0c15122e.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/repository.0d39e4d3.js","assets/router.dcd36344.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/popupNotifcation.b5eb6b54.js","assets/asyncComputed.66fb612f.js","assets/vuedraggable.umd.4e741757.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/login.dc9e87b9.js","assets/envVars.98b3ca31.js","assets/TabPane.c58ae13f.js","assets/index.bb5c41e7.js","assets/metadata.63c3505e.js","assets/PhCheckCircle.vue.c3fa20e4.js","assets/PhScroll.vue.1f00c659.js","assets/PhWebhooksLogo.vue.9d46ace2.js","assets/PhKey.vue.e62c0980.js","assets/PhIdentificationBadge.vue.6b64ec97.js","assets/PhKanban.vue.687b6d70.js","assets/Text.6116aa28.js","assets/Base.fa2c0c3a.js","assets/index.e4935754.js","assets/Item.b23fb8f3.js","assets/Paragraph.5431ef62.js","assets/index.5680d2cb.js","assets/index.79b26aef.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Link.e1eb3835.js","assets/CrudView.e8d8cec1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/Title.7bef409e.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.6f36fea8.js","assets/index.26e2ecdc.js","assets/isNumeric.75337b1e.js","assets/AccessControlEditor.5ac7765b.css"]),meta:{title:"Abstra - Access Control"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.57578905.js"),["assets/FormEditor.57578905.js","assets/index.4b50fa56.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/fetch.0c15122e.js","assets/pubsub.b80b2845.js","assets/BaseLayout.94f8f051.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.a50c91ab.js","assets/uuid.922aa2f9.js","assets/PhCaretRight.vue.8bde554d.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/asyncComputed.66fb612f.js","assets/login.dc9e87b9.js","assets/envVars.98b3ca31.js","assets/jobs.c32bfb04.js","assets/scripts.11de0763.js","assets/validations.8feb1461.js","assets/string.3c5647d2.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/PhPencil.vue.6f36fea8.js","assets/toggleHighContrast.b855897e.js","assets/toggleHighContrast.30d77c87.css","assets/index.e4935754.js","assets/index.79b26aef.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/SourceCode.7fd4e9c9.css","assets/FormRunner.5fbaeff1.js","assets/Login.vue_vue_type_script_setup_true_lang.a422595d.js","assets/Link.e1eb3835.js","assets/Base.fa2c0c3a.js","assets/CircularLoading.8e018f34.js","assets/CircularLoading.f81b57b4.css","assets/Login.6256c05e.css","assets/PlayerNavbar.3eefd106.js","assets/PhKanban.vue.687b6d70.js","assets/PhSignOut.vue.4eba92a2.js","assets/Text.6116aa28.js","assets/index.1644cd3b.js","assets/Paragraph.5431ef62.js","assets/Title.7bef409e.js","assets/index.d1aa13e4.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.e875ceaa.js","assets/WidgetsFrame.7eb9c981.css","assets/Steps.79137618.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.ffa2c1ac.js","assets/FormRunner.b43dfe44.css","assets/api.9a8a7bce.js","assets/metadata.63c3505e.js","assets/PhCheckCircle.vue.c3fa20e4.js","assets/PhScroll.vue.1f00c659.js","assets/PhWebhooksLogo.vue.9d46ace2.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/PhFlowArrow.vue.6f391323.js","assets/forms.27a11ac2.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/ThreadSelector.a037536a.js","assets/index.f0442008.js","assets/index.bb5c41e7.js","assets/ThreadSelector.deb06656.css","assets/index.db303e9d.js","assets/NavbarControls.97a4e6bf.js","assets/popupNotifcation.b5eb6b54.js","assets/CloseCircleOutlined.cc3f9d4d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/NavbarControls.db8a0c48.css","assets/index.a9aca59f.js","assets/Badge.63337045.js","assets/isNumeric.75337b1e.js","assets/FormEditor.932b7581.css"]),meta:{title:"Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.d7bcb6db.js"),["assets/FormPreview.d7bcb6db.js","assets/index.4b50fa56.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/fetch.0c15122e.js","assets/pubsub.b80b2845.js","assets/FormRunner.5fbaeff1.js","assets/url.2d1f0441.js","assets/Login.vue_vue_type_script_setup_true_lang.a422595d.js","assets/Link.e1eb3835.js","assets/Base.fa2c0c3a.js","assets/index.79b26aef.js","assets/CircularLoading.8e018f34.js","assets/CircularLoading.f81b57b4.css","assets/Login.6256c05e.css","assets/PlayerNavbar.3eefd106.js","assets/PhKanban.vue.687b6d70.js","assets/PhSignOut.vue.4eba92a2.js","assets/Text.6116aa28.js","assets/index.1644cd3b.js","assets/Paragraph.5431ef62.js","assets/Title.7bef409e.js","assets/index.d1aa13e4.js","assets/PlayerNavbar.cc225783.css","assets/WidgetsFrame.e875ceaa.js","assets/WidgetsFrame.7eb9c981.css","assets/Steps.79137618.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.ffa2c1ac.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/hasIn.e586edaf.js","assets/FormRunner.b43dfe44.css","assets/asyncComputed.66fb612f.js","assets/forms.27a11ac2.js","assets/record.70fbfcb3.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/envVars.98b3ca31.js","assets/FormPreview.10d98ae0.css"]),meta:{title:"Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.90631a7c.js"),["assets/JobEditor.90631a7c.js","assets/BaseLayout.94f8f051.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.a50c91ab.js","assets/uuid.922aa2f9.js","assets/PhCaretRight.vue.8bde554d.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/login.dc9e87b9.js","assets/envVars.98b3ca31.js","assets/jobs.c32bfb04.js","assets/scripts.11de0763.js","assets/validations.8feb1461.js","assets/string.3c5647d2.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/PhPencil.vue.6f36fea8.js","assets/toggleHighContrast.b855897e.js","assets/toggleHighContrast.30d77c87.css","assets/index.e4935754.js","assets/index.79b26aef.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/SourceCode.7fd4e9c9.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.fa2c0c3a.js","assets/Link.e1eb3835.js","assets/index.66f4895e.js","assets/index.5680d2cb.js","assets/dayjs.21a20241.js","assets/Title.7bef409e.js","assets/index.3489f1fa.js","assets/Item.b23fb8f3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.faec4f2b.js","assets/NavbarControls.97a4e6bf.js","assets/index.4b50fa56.js","assets/fetch.0c15122e.js","assets/popupNotifcation.b5eb6b54.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/Text.6116aa28.js","assets/CloseCircleOutlined.cc3f9d4d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/NavbarControls.db8a0c48.css","assets/index.a9aca59f.js","assets/index.d1aa13e4.js","assets/index.db303e9d.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.1ac69167.js"),["assets/HookEditor.1ac69167.js","assets/BaseLayout.94f8f051.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.a50c91ab.js","assets/uuid.922aa2f9.js","assets/PhCaretRight.vue.8bde554d.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/login.dc9e87b9.js","assets/envVars.98b3ca31.js","assets/jobs.c32bfb04.js","assets/scripts.11de0763.js","assets/validations.8feb1461.js","assets/string.3c5647d2.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/PhPencil.vue.6f36fea8.js","assets/toggleHighContrast.b855897e.js","assets/toggleHighContrast.30d77c87.css","assets/index.e4935754.js","assets/index.79b26aef.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/SourceCode.7fd4e9c9.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.fa2c0c3a.js","assets/Link.e1eb3835.js","assets/RunButton.vue_vue_type_script_setup_true_lang.faec4f2b.js","assets/api.9a8a7bce.js","assets/metadata.63c3505e.js","assets/PhCheckCircle.vue.c3fa20e4.js","assets/PhScroll.vue.1f00c659.js","assets/PhWebhooksLogo.vue.9d46ace2.js","assets/ThreadSelector.a037536a.js","assets/index.f0442008.js","assets/index.bb5c41e7.js","assets/ThreadSelector.deb06656.css","assets/index.5427ab8a.js","assets/CollapsePanel.df839464.js","assets/Badge.63337045.js","assets/isNumeric.75337b1e.js","assets/Text.6116aa28.js","assets/index.5680d2cb.js","assets/NavbarControls.97a4e6bf.js","assets/index.4b50fa56.js","assets/fetch.0c15122e.js","assets/popupNotifcation.b5eb6b54.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/CloseCircleOutlined.cc3f9d4d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/NavbarControls.db8a0c48.css","assets/index.a9aca59f.js","assets/index.d1aa13e4.js","assets/index.db303e9d.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.350e104d.js"),["assets/ScriptEditor.350e104d.js","assets/BaseLayout.94f8f051.js","assets/outputWidgets.60e2cfb3.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.a50c91ab.js","assets/uuid.922aa2f9.js","assets/PhCaretRight.vue.8bde554d.js","assets/workspaces.805af0bf.js","assets/runnerData.a86c30fb.js","assets/url.2d1f0441.js","assets/record.70fbfcb3.js","assets/pubsub.b80b2845.js","assets/asyncComputed.66fb612f.js","assets/login.dc9e87b9.js","assets/envVars.98b3ca31.js","assets/jobs.c32bfb04.js","assets/scripts.11de0763.js","assets/validations.8feb1461.js","assets/string.3c5647d2.js","assets/Form.acf22271.js","assets/hasIn.e586edaf.js","assets/PhPencil.vue.6f36fea8.js","assets/toggleHighContrast.b855897e.js","assets/toggleHighContrast.30d77c87.css","assets/index.e4935754.js","assets/index.79b26aef.js","assets/Card.088b46ac.js","assets/TabPane.c58ae13f.js","assets/SourceCode.7fd4e9c9.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.24c7f9a3.js","assets/UnsavedChangesHandler.ec63fb62.js","assets/ExclamationCircleOutlined.d953e3d8.js","assets/Modal.c4f28aca.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.fa2c0c3a.js","assets/Link.e1eb3835.js","assets/ThreadSelector.a037536a.js","assets/index.f0442008.js","assets/index.bb5c41e7.js","assets/ThreadSelector.deb06656.css","assets/RunButton.vue_vue_type_script_setup_true_lang.faec4f2b.js","assets/NavbarControls.97a4e6bf.js","assets/index.4b50fa56.js","assets/fetch.0c15122e.js","assets/popupNotifcation.b5eb6b54.js","assets/PhArrowSquareOut.vue.8ed170a2.js","assets/Text.6116aa28.js","assets/CloseCircleOutlined.cc3f9d4d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.80da498c.js","assets/BookOutlined.9fce1f87.js","assets/NavbarControls.db8a0c48.css","assets/index.a9aca59f.js","assets/index.d1aa13e4.js","assets/index.db303e9d.js","assets/CollapsePanel.df839464.js","assets/Badge.63337045.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...B],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),j=C(r);r.beforeEach(async(e,o)=>{if(e.meta.playerRoute)return j(e,o);y(e,o)});(async()=>{await W();const e=P({render:()=>D(q)});R.init(),A(e,r),e.use(r),e.use(I),e.mount("#app"),e.component("VSelect",V),e.component("Markdown",b),e.component("Message",T),a(e,k),a(e,L),a(e,O)})();
//# sourceMappingURL=editor.83e4eb0a.js.map
