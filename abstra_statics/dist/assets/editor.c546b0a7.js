import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f as E,u as f,A as b,g as w,h as v,_ as t,i as A,j as g,T as I,k as P,P as y,C as k,M as R,I as D,s as V,l as r,m as T,n as L,p as O,q as S}from"./outputWidgets.cdb991c0.js";import{r as W,s as C}from"./index.8e65e13e.js";import"./pubsub.83305973.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fcd72ee7-beea-4322-aee4-a27b75f34e45",e._sentryDebugIdIdentifier="sentry-dbid-fcd72ee7-beea-4322-aee4-a27b75f34e45")}catch{}})();const i=_(!1),x=()=>{window.innerWidth<780?i.value=!0:i.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(n,B)=>{const s=p("router-view");return c(),l(f(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[E(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.c364916e.js"),["assets/Home.c364916e.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.0506741c.js"),["assets/Workspace.0506741c.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/logo.084e5d7c.js","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.cef9ec71.js","assets/index.8e65e13e.js","assets/pubsub.83305973.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/popupNotifcation.6f3f8a75.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/index.e784275f.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.a7a86d58.js"),["assets/Scripts.a7a86d58.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/forms.2cf582b5.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/jobs.98e15d9b.js","assets/scripts.beead079.js","assets/asyncComputed.08afc622.js","assets/icons.6cfd480b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Typography.bbe6290b.js","assets/index.a9cbb60d.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Text.b9fe0916.js","assets/index.9679f407.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/CrudView.0b27b336.js","assets/router.e13e947b.js","assets/Title.7c191db2.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Link.530be3b8.js","assets/Scripts.c0ba7f07.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.2e587c70.js"),["assets/FormEditor.2e587c70.js","assets/BaseLayout.7e6a9b75.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/BaseLayout.881bfa61.css","assets/FormRunner.a377a8d3.js","assets/url.89f36b88.js","assets/Passwordless.f1d73db0.js","assets/index.8e65e13e.js","assets/pubsub.83305973.js","assets/icons.6cfd480b.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.092146f9.js","assets/PlayerNavbar.ead94b03.css","assets/ActionButton.386ea3be.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/Typography.bbe6290b.js","assets/FormRunner.09f8a51e.css","assets/SourceCode.6c3aa191.js","assets/uuid.befb7455.js","assets/NavbarControls.cef9ec71.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/record.a11516e2.js","assets/popupNotifcation.6f3f8a75.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/jobs.98e15d9b.js","assets/scripts.beead079.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/FormItem.8c320cae.js","assets/toggleHighContrast.8685e029.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.9b5b1dcc.css","assets/forms.2cf582b5.js","assets/Title.7c191db2.js","assets/Form.b3aa2dbb.js","assets/index.450a67e7.js","assets/StageRunSelector.9635580a.js","assets/index.216d7748.js","assets/index.1838b30e.js","assets/StageRunSelector.587727ed.css","assets/index.e784275f.js","assets/index.f5c37cf3.js","assets/ExpandOutlined.85b1abd7.js","assets/FormEditor.5319e872.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.09cc8868.js"),["assets/FormPreview.09cc8868.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.a377a8d3.js","assets/url.89f36b88.js","assets/Passwordless.f1d73db0.js","assets/index.8e65e13e.js","assets/pubsub.83305973.js","assets/icons.6cfd480b.js","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.092146f9.js","assets/PlayerNavbar.ead94b03.css","assets/ActionButton.386ea3be.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/Typography.bbe6290b.js","assets/FormRunner.09f8a51e.css","assets/asyncComputed.08afc622.js","assets/forms.2cf582b5.js","assets/record.a11516e2.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/FormPreview.3e51948e.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.261b94e0.js"),["assets/JobEditor.261b94e0.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/jobs.98e15d9b.js","assets/SourceCode.6c3aa191.js","assets/uuid.befb7455.js","assets/icons.6cfd480b.js","assets/NavbarControls.cef9ec71.js","assets/index.8e65e13e.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/popupNotifcation.6f3f8a75.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/scripts.beead079.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/toggleHighContrast.8685e029.js","assets/toggleHighContrast.30d77c87.css","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/SourceCode.9b5b1dcc.css","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.222b2f12.js","assets/index.721e5224.js","assets/index.f5c37cf3.js","assets/dayjs.8f9349ba.js","assets/index.a4c63802.js","assets/Title.7c191db2.js","assets/Form.b3aa2dbb.js","assets/index.e784275f.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.5af86e51.js"),["assets/HookEditor.5af86e51.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/SourceCode.6c3aa191.js","assets/uuid.befb7455.js","assets/icons.6cfd480b.js","assets/NavbarControls.cef9ec71.js","assets/index.8e65e13e.js","assets/pubsub.83305973.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/popupNotifcation.6f3f8a75.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/jobs.98e15d9b.js","assets/scripts.beead079.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/toggleHighContrast.8685e029.js","assets/toggleHighContrast.30d77c87.css","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/SourceCode.9b5b1dcc.css","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.222b2f12.js","assets/CollapsePanel.27924a08.js","assets/index.1838b30e.js","assets/index.f5c37cf3.js","assets/index.5a5faaa3.js","assets/Form.b3aa2dbb.js","assets/StageRunSelector.9635580a.js","assets/index.216d7748.js","assets/StageRunSelector.587727ed.css","assets/index.e784275f.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.8da1369f.js"),["assets/ScriptEditor.8da1369f.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/scripts.beead079.js","assets/SourceCode.6c3aa191.js","assets/uuid.befb7455.js","assets/icons.6cfd480b.js","assets/NavbarControls.cef9ec71.js","assets/index.8e65e13e.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/popupNotifcation.6f3f8a75.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/jobs.98e15d9b.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/toggleHighContrast.8685e029.js","assets/toggleHighContrast.30d77c87.css","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/SourceCode.9b5b1dcc.css","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.222b2f12.js","assets/Form.b3aa2dbb.js","assets/StageRunSelector.9635580a.js","assets/index.216d7748.js","assets/index.1838b30e.js","assets/StageRunSelector.587727ed.css","assets/index.e784275f.js"]),meta:{title:"Abstra - Script Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.79056755.js"),["assets/Workflow.79056755.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/icons.6cfd480b.js","assets/NavbarControls.cef9ec71.js","assets/index.8e65e13e.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/popupNotifcation.6f3f8a75.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/schema.9e6a3284.js","assets/index.cf4c23b9.js","assets/metadata.d3183e4c.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/index.e784275f.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.f5e8e14a.js"),["assets/WorkflowEditor.f5e8e14a.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/metadata.d3183e4c.js","assets/icons.6cfd480b.js","assets/schema.9e6a3284.js","assets/index.cf4c23b9.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/validations.74e1d9a9.js","assets/string.35974c9f.js","assets/index.306c9af3.js","assets/isNumeric.75337b1e.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Link.530be3b8.js","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.c9a9b4c1.js"),["assets/WorkflowKanban.c9a9b4c1.js","assets/repository.eb0d45d1.js","assets/ant-design.4dce9129.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/asyncComputed.08afc622.js","assets/metadata.d3183e4c.js","assets/icons.6cfd480b.js","assets/index.a9cbb60d.js","assets/index.f5c37cf3.js","assets/index.216d7748.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.6f9053ce.js","assets/Link.530be3b8.js","assets/Text.b9fe0916.js","assets/Title.7c191db2.js","assets/index.5a5faaa3.js","assets/index.a1ab1438.js","assets/CollapsePanel.27924a08.js","assets/Form.b3aa2dbb.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Timeline.969823d9.js","assets/index.68d11e47.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.dedff81b.js","assets/index.cf4c23b9.js","assets/scripts.beead079.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/ExpandOutlined.85b1abd7.js","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/index.8e65e13e.js","assets/repository.a6dad21c.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.5ddaf2bb.js"),["assets/Settings.5ddaf2bb.js","assets/NavbarControls.cef9ec71.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.8e65e13e.js","assets/pubsub.83305973.js","assets/asyncComputed.08afc622.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/index.9679f407.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/popupNotifcation.6f3f8a75.js","assets/icons.6cfd480b.js","assets/index.a9cbb60d.js","assets/Text.b9fe0916.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/Paragraph.0cc4d62c.js","assets/NavbarControls.a62b7291.css","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/index.e784275f.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.975178fb.js"),["assets/StyleEditor.975178fb.js","assets/asyncComputed.08afc622.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/icons.6cfd480b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.ac64a0a1.js","assets/PlayerNavbar.092146f9.js","assets/PlayerNavbar.ead94b03.css","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/Title.7c191db2.js","assets/SidebarPreview.30998a96.css","assets/index.a9cbb60d.js","assets/Form.b3aa2dbb.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.80355481.js"),["assets/SidebarEditor.80355481.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/Title.7c191db2.js","assets/index.a9cbb60d.js","assets/index.1838b30e.js","assets/index.a4c63802.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/workspaces.5a06f52c.js","assets/runnerData.00833d0d.js","assets/url.89f36b88.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/asyncComputed.08afc622.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.ac64a0a1.js","assets/PlayerNavbar.092146f9.js","assets/icons.6cfd480b.js","assets/PlayerNavbar.ead94b03.css","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.30998a96.css","assets/Form.b3aa2dbb.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.da8589af.js"),["assets/RequirementsEditor.da8589af.js","assets/asyncComputed.08afc622.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/router.e13e947b.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/record.a11516e2.js","assets/pubsub.83305973.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{A(e,o)});(async()=>{await C();const e=g({render:()=>T(q)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",k),e.component("Markdown",R),e.component("Icon",D),e.component("Message",V),r(e,L),r(e,O),r(e,S)})();
//# sourceMappingURL=editor.c546b0a7.js.map
