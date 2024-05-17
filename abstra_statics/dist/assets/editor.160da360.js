import{r as _,d,o as m,a as p,b as c,c as u,w as l,e as h,f as E,u as v,A as f,g,h as w,_ as t,i as y,j as R,T as b,k as A,P,C as I,M as V,s as T,l as a,m as D,n as k,p as L,q as O}from"./outputWidgets.6fa937e8.js";import{r as S,g as C,s as W}from"./index.3b5830df.js";import"./fetch.b664970a.js";import"./pubsub.0011874d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="272f098a-e227-416c-a470-e31bca504a28",e._sentryDebugIdIdentifier="sentry-dbid-272f098a-e227-416c-a470-e31bca504a28")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",x)}),(i,z)=>{const s=p("router-view");return c(),u(v(f),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[h("div",M,[E(s)])]),_:1})}}});const B=S.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),r=g({history:w("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.3acaaa0f.js"),["assets/Home.3acaaa0f.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.ea45287a.js"),["assets/Workspace.ea45287a.js","assets/BaseLayout.38742a5c.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.8be22fb1.js","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.f7e3c4b9.js","assets/Link.af4982b3.js","assets/SaveButton.ccfb7431.css","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/login.3137c307.js","assets/envVars.49906d57.js","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/popupNotifcation.90dd819f.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/index.b70fd8d3.js","assets/Text.cdfb5d38.js","assets/CloseCircleOutlined.8274357c.js","assets/index.0f12816c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/NavbarControls.db8a0c48.css","assets/PhBracketsSquare.vue.158e0ac7.js","assets/PhCaretRight.vue.393e1327.js","assets/PhFlowArrow.vue.b0ee0c69.js","assets/PhIdentificationBadge.vue.e58d07b4.js","assets/PhKanban.vue.cdecbde4.js","assets/index.00567b5a.js","assets/index.4a606610.js","assets/Workspace.3ffb2076.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Stages.6470abde.js"),["assets/Stages.6470abde.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/ContentLayout.eaf855f8.js","assets/ContentLayout.6dd20759.css","assets/CrudView.ae9af4ed.js","assets/router.7280623c.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/popupNotifcation.90dd819f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/url.de8fbff1.js","assets/Paragraph.47e05b0e.js","assets/Base.f7e3c4b9.js","assets/Modal.21b8b2b8.js","assets/index.b70fd8d3.js","assets/Title.ecf9f632.js","assets/Text.cdfb5d38.js","assets/index.fb72c772.js","assets/CrudView.a8b105cf.css","assets/ant-design.9fa9a867.js","assets/index.6da6b4b1.js","assets/asyncComputed.2efa6345.js","assets/string.0bd2b715.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/forms.ae8835fc.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/jobs.8c2d636e.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/scripts.ba678514.js","assets/envVars.49906d57.js","assets/PhScroll.vue.eec60bf5.js","assets/PhWebhooksLogo.vue.45ab87b1.js","assets/validations.83dc3025.js","assets/index.0f12816c.js","assets/Link.af4982b3.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.cf07cd83.js"),["assets/WorkflowEditor.cf07cd83.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d2bf037e.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/LoadingContainer.b1e2b693.js","assets/LoadingContainer.8bd9cc72.css","assets/Text.cdfb5d38.js","assets/Base.f7e3c4b9.js","assets/validations.83dc3025.js","assets/string.0bd2b715.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/metadata.2070038e.js","assets/PhCheckCircle.vue.d23957e4.js","assets/PhScroll.vue.eec60bf5.js","assets/PhWebhooksLogo.vue.45ab87b1.js","assets/index.82767581.js","assets/Badge.d0d4f48d.js","assets/isNumeric.75337b1e.js","assets/index.b70fd8d3.js","assets/index.0f12816c.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/Modal.21b8b2b8.js","assets/api.b5cf3500.js","assets/uuid.e7028a75.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.0abf6224.js","assets/WorkflowEditor.47e28a49.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>t(()=>import("./WorkflowThreads.54d1c9a5.js"),["assets/WorkflowThreads.54d1c9a5.js","assets/ContentLayout.eaf855f8.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.2f6a5c59.js","assets/fetch.b664970a.js","assets/vuedraggable.umd.6478ad87.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/scripts.ba678514.js","assets/envVars.49906d57.js","assets/api.b5cf3500.js","assets/metadata.2070038e.js","assets/PhCheckCircle.vue.d23957e4.js","assets/PhScroll.vue.eec60bf5.js","assets/PhWebhooksLogo.vue.45ab87b1.js","assets/ant-design.9fa9a867.js","assets/index.6da6b4b1.js","assets/Modal.21b8b2b8.js","assets/Text.cdfb5d38.js","assets/Base.f7e3c4b9.js","assets/index.b70fd8d3.js","assets/index.fb72c772.js","assets/index.2d5f37d2.js","assets/Paragraph.47e05b0e.js","assets/index.c12f289d.js","assets/Link.af4982b3.js","assets/Title.ecf9f632.js","assets/index.9271ed3a.js","assets/CollapsePanel.5b5db7cf.js","assets/index.0abf6224.js","assets/index.cdc826ed.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.6a8339bc.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/hasIn.9f9bff8d.js","assets/LoadingOutlined.95c04217.js","assets/index.d1aa65fb.js","assets/Form.aac49e1e.js","assets/string.0bd2b715.js","assets/TableView.dba70ff7.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.b072c46d.js"),["assets/StyleEditor.b072c46d.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/envVars.49906d57.js","assets/SidebarPreview.b8d0b18c.js","assets/PlayerNavbar.414f18ae.js","assets/PhKanban.vue.cdecbde4.js","assets/PhSignOut.vue.95a76f37.js","assets/index.4a606610.js","assets/Text.cdfb5d38.js","assets/Base.f7e3c4b9.js","assets/PlayerNavbar.df3397cd.css","assets/Home.49ebe0b1.js","assets/api.7bb9e1aa.js","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/index.c12f289d.js","assets/Link.af4982b3.js","assets/Paragraph.47e05b0e.js","assets/Title.ecf9f632.js","assets/index.e886722d.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/hasIn.9f9bff8d.js","assets/index.b70fd8d3.js","assets/Home.fe453109.css","assets/WidgetsFrame.1b3b9f8c.js","assets/WidgetsFrame.c4d00f60.css","assets/SidebarPreview.53a172bc.css","assets/ContentLayout.eaf855f8.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.b1e2b693.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.aac49e1e.js","assets/StyleEditor.7d0460be.css"]),meta:{title:"Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.94f37a80.js"),["assets/SidebarEditor.94f37a80.js","assets/vuedraggable.umd.6478ad87.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.f7e3c4b9.js","assets/Link.af4982b3.js","assets/SaveButton.ccfb7431.css","assets/Item.7fb5b5b6.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/index.450ff5a6.js","assets/Title.ecf9f632.js","assets/index.b70fd8d3.js","assets/index.0abf6224.js","assets/SidebarPreview.b8d0b18c.js","assets/PlayerNavbar.414f18ae.js","assets/PhKanban.vue.cdecbde4.js","assets/PhSignOut.vue.95a76f37.js","assets/index.4a606610.js","assets/Text.cdfb5d38.js","assets/PlayerNavbar.df3397cd.css","assets/Home.49ebe0b1.js","assets/api.7bb9e1aa.js","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/pubsub.0011874d.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/asyncComputed.2efa6345.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/index.c12f289d.js","assets/Paragraph.47e05b0e.js","assets/index.e886722d.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/Home.fe453109.css","assets/WidgetsFrame.1b3b9f8c.js","assets/WidgetsFrame.c4d00f60.css","assets/SidebarPreview.53a172bc.css","assets/ContentLayout.eaf855f8.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.b1e2b693.js","assets/LoadingContainer.8bd9cc72.css","assets/workspaces.31146138.js","assets/record.abf4ce8f.js","assets/envVars.49906d57.js"]),meta:{title:"Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.cceeb886.js"),["assets/RequirementsEditor.cceeb886.js","assets/ContentLayout.eaf855f8.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/ContentLayout.6dd20759.css","assets/CrudView.ae9af4ed.js","assets/router.7280623c.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/popupNotifcation.90dd819f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/url.de8fbff1.js","assets/Paragraph.47e05b0e.js","assets/Base.f7e3c4b9.js","assets/Modal.21b8b2b8.js","assets/index.b70fd8d3.js","assets/Title.ecf9f632.js","assets/Text.cdfb5d38.js","assets/index.fb72c772.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.2efa6345.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/envVars.49906d57.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.1802b3f4.js"),["assets/EnvVarsEditor.1802b3f4.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/envVars.49906d57.js","assets/ContentLayout.eaf855f8.js","assets/ContentLayout.6dd20759.css","assets/CrudView.ae9af4ed.js","assets/router.7280623c.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/popupNotifcation.90dd819f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/Paragraph.47e05b0e.js","assets/Base.f7e3c4b9.js","assets/Modal.21b8b2b8.js","assets/index.b70fd8d3.js","assets/Title.ecf9f632.js","assets/Text.cdfb5d38.js","assets/index.fb72c772.js","assets/CrudView.a8b105cf.css","assets/index.0f12816c.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>t(()=>import("./VSCodeConnection.5a0cc572.js"),["assets/VSCodeConnection.5a0cc572.js","assets/ContentLayout.eaf855f8.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/ContentLayout.6dd20759.css","assets/Title.ecf9f632.js","assets/Base.f7e3c4b9.js","assets/Paragraph.47e05b0e.js","assets/Text.cdfb5d38.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>t(()=>import("./AccessControlEditor.da3b2d36.js"),["assets/AccessControlEditor.da3b2d36.js","assets/ContentLayout.eaf855f8.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/ContentLayout.6dd20759.css","assets/fetch.b664970a.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/repository.f565614a.js","assets/router.7280623c.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/popupNotifcation.90dd819f.js","assets/asyncComputed.2efa6345.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/login.3137c307.js","assets/envVars.49906d57.js","assets/vuedraggable.umd.6478ad87.js","assets/TabPane.1b620cdf.js","assets/index.0abf6224.js","assets/metadata.2070038e.js","assets/PhCheckCircle.vue.d23957e4.js","assets/PhScroll.vue.eec60bf5.js","assets/PhWebhooksLogo.vue.45ab87b1.js","assets/PhKey.vue.e5f249e1.js","assets/PhIdentificationBadge.vue.e58d07b4.js","assets/PhKanban.vue.cdecbde4.js","assets/Text.cdfb5d38.js","assets/Base.f7e3c4b9.js","assets/index.b70fd8d3.js","assets/Item.7fb5b5b6.js","assets/Paragraph.47e05b0e.js","assets/index.fb72c772.js","assets/index.0f12816c.js","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/Link.af4982b3.js","assets/SaveButton.ccfb7431.css","assets/CrudView.ae9af4ed.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/Title.ecf9f632.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.1c1e6aa5.js","assets/index.cdc826ed.js","assets/isNumeric.75337b1e.js","assets/AccessControlEditor.bfcb5fae.css"]),meta:{title:"Abstra - Access Control"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.a0ae38cb.js"),["assets/FormEditor.a0ae38cb.js","assets/PlayerNavbar.414f18ae.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/PhKanban.vue.cdecbde4.js","assets/PhSignOut.vue.95a76f37.js","assets/index.4a606610.js","assets/Text.cdfb5d38.js","assets/Base.f7e3c4b9.js","assets/PlayerNavbar.df3397cd.css","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/pubsub.0011874d.js","assets/BaseLayout.38742a5c.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.2dcbd146.js","assets/uuid.e7028a75.js","assets/PhCaretRight.vue.393e1327.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/asyncComputed.2efa6345.js","assets/login.3137c307.js","assets/envVars.49906d57.js","assets/LoadingOutlined.95c04217.js","assets/jobs.8c2d636e.js","assets/scripts.ba678514.js","assets/validations.83dc3025.js","assets/string.0bd2b715.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/PhPencil.vue.1c1e6aa5.js","assets/toggleHighContrast.cc5a0919.js","assets/toggleHighContrast.30d77c87.css","assets/index.b70fd8d3.js","assets/index.0f12816c.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/SourceCode.eeafa37f.css","assets/FormRunner.d4ee5390.js","assets/Login.vue_vue_type_script_setup_true_lang.75b27c8a.js","assets/Link.af4982b3.js","assets/PhArrowClockwise.vue.c6d28990.js","assets/CircularLoading.671b431d.js","assets/CircularLoading.e156a2b0.css","assets/Login.d3aec418.css","assets/WidgetsFrame.1b3b9f8c.js","assets/WidgetsFrame.c4d00f60.css","assets/Steps.5aed3656.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.459f2cd5.js","assets/FormRunner.a26d57e3.css","assets/api.b5cf3500.js","assets/metadata.2070038e.js","assets/PhCheckCircle.vue.d23957e4.js","assets/PhScroll.vue.eec60bf5.js","assets/PhWebhooksLogo.vue.45ab87b1.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/PhFlowArrow.vue.b0ee0c69.js","assets/forms.ae8835fc.js","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.5b93685d.js","assets/index.2d5f37d2.js","assets/index.0abf6224.js","assets/ThreadSelector.deb06656.css","assets/index.e0888362.js","assets/Title.ecf9f632.js","assets/NavbarControls.8be22fb1.js","assets/popupNotifcation.90dd819f.js","assets/CloseCircleOutlined.8274357c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/NavbarControls.db8a0c48.css","assets/index.00567b5a.js","assets/Badge.d0d4f48d.js","assets/isNumeric.75337b1e.js","assets/FormEditor.5e9088ff.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.263553f5.js"),["assets/JobEditor.263553f5.js","assets/BaseLayout.38742a5c.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.2dcbd146.js","assets/uuid.e7028a75.js","assets/PhCaretRight.vue.393e1327.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/login.3137c307.js","assets/envVars.49906d57.js","assets/LoadingOutlined.95c04217.js","assets/jobs.8c2d636e.js","assets/scripts.ba678514.js","assets/validations.83dc3025.js","assets/string.0bd2b715.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/PhPencil.vue.1c1e6aa5.js","assets/toggleHighContrast.cc5a0919.js","assets/toggleHighContrast.30d77c87.css","assets/index.b70fd8d3.js","assets/index.0f12816c.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/SourceCode.eeafa37f.css","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.f7e3c4b9.js","assets/Link.af4982b3.js","assets/SaveButton.ccfb7431.css","assets/index.6bcbc686.js","assets/index.fb72c772.js","assets/dayjs.28a01077.js","assets/Title.ecf9f632.js","assets/index.450ff5a6.js","assets/Item.7fb5b5b6.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0ed4aa46.js","assets/NavbarControls.8be22fb1.js","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/popupNotifcation.90dd819f.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/Text.cdfb5d38.js","assets/CloseCircleOutlined.8274357c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/NavbarControls.db8a0c48.css","assets/index.00567b5a.js","assets/index.4a606610.js","assets/index.e0888362.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.d1d6af4b.js"),["assets/HookEditor.d1d6af4b.js","assets/BaseLayout.38742a5c.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.2dcbd146.js","assets/uuid.e7028a75.js","assets/PhCaretRight.vue.393e1327.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/login.3137c307.js","assets/envVars.49906d57.js","assets/LoadingOutlined.95c04217.js","assets/jobs.8c2d636e.js","assets/scripts.ba678514.js","assets/validations.83dc3025.js","assets/string.0bd2b715.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/PhPencil.vue.1c1e6aa5.js","assets/toggleHighContrast.cc5a0919.js","assets/toggleHighContrast.30d77c87.css","assets/index.b70fd8d3.js","assets/index.0f12816c.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/SourceCode.eeafa37f.css","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.f7e3c4b9.js","assets/Link.af4982b3.js","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0ed4aa46.js","assets/api.b5cf3500.js","assets/metadata.2070038e.js","assets/PhCheckCircle.vue.d23957e4.js","assets/PhScroll.vue.eec60bf5.js","assets/PhWebhooksLogo.vue.45ab87b1.js","assets/ThreadSelector.5b93685d.js","assets/index.2d5f37d2.js","assets/index.0abf6224.js","assets/ThreadSelector.deb06656.css","assets/index.16a24358.js","assets/CollapsePanel.5b5db7cf.js","assets/Badge.d0d4f48d.js","assets/isNumeric.75337b1e.js","assets/Text.cdfb5d38.js","assets/index.fb72c772.js","assets/NavbarControls.8be22fb1.js","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/popupNotifcation.90dd819f.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/CloseCircleOutlined.8274357c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/NavbarControls.db8a0c48.css","assets/index.00567b5a.js","assets/index.4a606610.js","assets/index.e0888362.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.90f5ce33.js"),["assets/ScriptEditor.90f5ce33.js","assets/BaseLayout.38742a5c.js","assets/outputWidgets.6fa937e8.js","assets/outputWidgets.ff704127.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.2dcbd146.js","assets/uuid.e7028a75.js","assets/PhCaretRight.vue.393e1327.js","assets/workspaces.31146138.js","assets/runnerData.846199eb.js","assets/url.de8fbff1.js","assets/record.abf4ce8f.js","assets/pubsub.0011874d.js","assets/asyncComputed.2efa6345.js","assets/login.3137c307.js","assets/envVars.49906d57.js","assets/LoadingOutlined.95c04217.js","assets/jobs.8c2d636e.js","assets/scripts.ba678514.js","assets/validations.83dc3025.js","assets/string.0bd2b715.js","assets/Form.aac49e1e.js","assets/hasIn.9f9bff8d.js","assets/PhPencil.vue.1c1e6aa5.js","assets/toggleHighContrast.cc5a0919.js","assets/toggleHighContrast.30d77c87.css","assets/index.b70fd8d3.js","assets/index.0f12816c.js","assets/Card.ccb3cb28.js","assets/TabPane.1b620cdf.js","assets/SourceCode.eeafa37f.css","assets/SaveButton.0cf4b35a.js","assets/UnsavedChangesHandler.ae0f9969.js","assets/ExclamationCircleOutlined.62981a58.js","assets/Modal.21b8b2b8.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.f7e3c4b9.js","assets/Link.af4982b3.js","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.5b93685d.js","assets/index.2d5f37d2.js","assets/index.0abf6224.js","assets/ThreadSelector.deb06656.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0ed4aa46.js","assets/NavbarControls.8be22fb1.js","assets/index.3b5830df.js","assets/fetch.b664970a.js","assets/popupNotifcation.90dd819f.js","assets/PhArrowSquareOut.vue.317818c9.js","assets/Text.cdfb5d38.js","assets/CloseCircleOutlined.8274357c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js","assets/BookOutlined.c67d3dce.js","assets/NavbarControls.db8a0c48.css","assets/index.00567b5a.js","assets/index.4a606610.js","assets/index.e0888362.js","assets/CollapsePanel.5b5db7cf.js","assets/Badge.d0d4f48d.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...B],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),j=C(r);r.beforeEach(async(e,o)=>{if(e.meta.playerRoute)return j(e,o);y(e,o)});(async()=>{await W();const e=R({render:()=>D(q)});b.init(),A(e,r),e.use(r),e.use(P),e.mount("#app"),e.component("VSelect",I),e.component("Markdown",V),e.component("Message",T),a(e,k),a(e,L),a(e,O)})();
//# sourceMappingURL=editor.160da360.js.map
