import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f as E,u as f,A as b,g as w,h as v,_ as t,i as A,j as g,T as I,k as P,P as y,C as k,M as R,I as D,s as V,l as r,m as T,n as L,p as O,q as S}from"./outputWidgets.2e47e14c.js";import{r as W,s as C}from"./index.29d24591.js";import"./pubsub.add0ba02.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2fb8ce15-3021-494e-b6b9-f690e78f7c05",e._sentryDebugIdIdentifier="sentry-dbid-2fb8ce15-3021-494e-b6b9-f690e78f7c05")}catch{}})();const i=_(!1),x=()=>{window.innerWidth<780?i.value=!0:i.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(n,B)=>{const s=p("router-view");return c(),l(f(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[E(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.4aacba80.js"),["assets/Home.4aacba80.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.0416f2a8.js"),["assets/Workspace.0416f2a8.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/icons.4a820db9.js","assets/logo.084e5d7c.js","assets/BaseLayout.40b797c1.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.255a2ee0.js","assets/index.29d24591.js","assets/pubsub.add0ba02.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/popupNotifcation.72d5fcac.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/index.ee2acc49.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.f7459eca.js"),["assets/Scripts.f7459eca.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/forms.451cba30.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/jobs.32aa4a19.js","assets/scripts.810d7a62.js","assets/asyncComputed.2a8292e3.js","assets/icons.4a820db9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Typography.f0e049e6.js","assets/index.3357c4ce.js","assets/Paragraph.21d1783d.js","assets/Base.e19ec4a0.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/Text.33fabc42.js","assets/index.2ccc7d16.js","assets/Form.0b25b541.js","assets/Modal.51099ad8.js","assets/CrudView.383d7074.js","assets/router.47e8f42d.js","assets/Title.9819116a.js","assets/index.a9995d7b.js","assets/CrudView.9de44552.css","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Link.fd04b625.js","assets/Scripts.c0ba7f07.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.2d1d1a6b.js"),["assets/FormEditor.2d1d1a6b.js","assets/index.29d24591.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/pubsub.add0ba02.js","assets/BaseLayout.40b797c1.js","assets/BaseLayout.881bfa61.css","assets/FormRunner.029fb35d.js","assets/url.071010f9.js","assets/Passwordless.334baa82.js","assets/icons.4a820db9.js","assets/CircularLoading.3d92913a.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.75fdb37e.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.96bfc24d.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.e90b03b4.js","assets/Steps.4a8d55e8.css","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/hasIn.a2a632bb.js","assets/Typography.f0e049e6.js","assets/FormRunner.21d1e77c.css","assets/SourceCode.6110d8ee.js","assets/uuid.2bc0a179.js","assets/NavbarControls.255a2ee0.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/record.fb76d4af.js","assets/popupNotifcation.72d5fcac.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/jobs.32aa4a19.js","assets/scripts.810d7a62.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/FormItem.47817a76.js","assets/toggleHighContrast.a4abc220.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.52c7bd2b.css","assets/forms.451cba30.js","assets/StageRunSelector.5dd045a2.js","assets/index.2fdba74b.js","assets/index.b306ef07.js","assets/Form.0b25b541.js","assets/StageRunSelector.587727ed.css","assets/index.ee67bf1c.js","assets/Title.9819116a.js","assets/api.ba69b6c6.js","assets/schema.bab73897.js","assets/index.cf4c23b9.js","assets/index.ee2acc49.js","assets/index.a9995d7b.js","assets/ExpandOutlined.b4a7acc7.js","assets/FormEditor.bdb2f6d5.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.ee635530.js"),["assets/FormPreview.ee635530.js","assets/index.29d24591.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/pubsub.add0ba02.js","assets/FormRunner.029fb35d.js","assets/url.071010f9.js","assets/Passwordless.334baa82.js","assets/icons.4a820db9.js","assets/CircularLoading.3d92913a.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.75fdb37e.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.96bfc24d.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.e90b03b4.js","assets/Steps.4a8d55e8.css","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/hasIn.a2a632bb.js","assets/Typography.f0e049e6.js","assets/FormRunner.21d1e77c.css","assets/asyncComputed.2a8292e3.js","assets/forms.451cba30.js","assets/record.fb76d4af.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/FormPreview.335edebb.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.6d46ab1e.js"),["assets/JobEditor.6d46ab1e.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/jobs.32aa4a19.js","assets/SourceCode.6110d8ee.js","assets/uuid.2bc0a179.js","assets/icons.4a820db9.js","assets/NavbarControls.255a2ee0.js","assets/index.29d24591.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/popupNotifcation.72d5fcac.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/scripts.810d7a62.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/toggleHighContrast.a4abc220.js","assets/toggleHighContrast.30d77c87.css","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/SourceCode.52c7bd2b.css","assets/BaseLayout.40b797c1.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4663360f.js","assets/index.3d6d6342.js","assets/index.a9995d7b.js","assets/dayjs.f923dc8f.js","assets/index.8fbad136.js","assets/Title.9819116a.js","assets/Form.0b25b541.js","assets/index.ee2acc49.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.b48d2f04.js"),["assets/HookEditor.b48d2f04.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/SourceCode.6110d8ee.js","assets/uuid.2bc0a179.js","assets/icons.4a820db9.js","assets/NavbarControls.255a2ee0.js","assets/index.29d24591.js","assets/pubsub.add0ba02.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/popupNotifcation.72d5fcac.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/jobs.32aa4a19.js","assets/scripts.810d7a62.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/toggleHighContrast.a4abc220.js","assets/toggleHighContrast.30d77c87.css","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/SourceCode.52c7bd2b.css","assets/BaseLayout.40b797c1.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4663360f.js","assets/api.ba69b6c6.js","assets/schema.bab73897.js","assets/index.cf4c23b9.js","assets/CollapsePanel.6a0252b9.js","assets/index.b306ef07.js","assets/index.a9995d7b.js","assets/index.4328ffd3.js","assets/Form.0b25b541.js","assets/StageRunSelector.5dd045a2.js","assets/index.2fdba74b.js","assets/StageRunSelector.587727ed.css","assets/index.ee2acc49.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.7f1dcc98.js"),["assets/ScriptEditor.7f1dcc98.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/scripts.810d7a62.js","assets/SourceCode.6110d8ee.js","assets/uuid.2bc0a179.js","assets/icons.4a820db9.js","assets/NavbarControls.255a2ee0.js","assets/index.29d24591.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/popupNotifcation.72d5fcac.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/jobs.32aa4a19.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/toggleHighContrast.a4abc220.js","assets/toggleHighContrast.30d77c87.css","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/SourceCode.52c7bd2b.css","assets/BaseLayout.40b797c1.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4663360f.js","assets/Form.0b25b541.js","assets/StageRunSelector.5dd045a2.js","assets/index.2fdba74b.js","assets/index.b306ef07.js","assets/StageRunSelector.587727ed.css","assets/index.ee2acc49.js"]),meta:{title:"Abstra - Script Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.981fb98e.js"),["assets/Workflow.981fb98e.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/icons.4a820db9.js","assets/NavbarControls.255a2ee0.js","assets/index.29d24591.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/popupNotifcation.72d5fcac.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/api.ba69b6c6.js","assets/schema.bab73897.js","assets/index.cf4c23b9.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/index.ee2acc49.js","assets/TabPane.ecc0e07d.js","assets/hasIn.a2a632bb.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.9cb35dd7.js"),["assets/WorkflowEditor.9cb35dd7.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/schema.bab73897.js","assets/index.cf4c23b9.js","assets/icons.4a820db9.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/validations.dd332b9b.js","assets/string.018a3e61.js","assets/index.a200655c.js","assets/isNumeric.75337b1e.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/Base.e19ec4a0.js","assets/Typography.f0e049e6.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/Link.fd04b625.js","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.8559431b.js"),["assets/WorkflowKanban.8559431b.js","assets/repository.e1144df4.js","assets/ant-design.0bf6bed5.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/asyncComputed.2a8292e3.js","assets/api.ba69b6c6.js","assets/schema.bab73897.js","assets/index.cf4c23b9.js","assets/icons.4a820db9.js","assets/index.3357c4ce.js","assets/index.a9995d7b.js","assets/index.2fdba74b.js","assets/Paragraph.21d1783d.js","assets/Base.e19ec4a0.js","assets/Typography.f0e049e6.js","assets/index.1acdc8b4.js","assets/Link.fd04b625.js","assets/Text.33fabc42.js","assets/Title.9819116a.js","assets/index.4328ffd3.js","assets/index.cb1f7d78.js","assets/CollapsePanel.6a0252b9.js","assets/Form.0b25b541.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/Timeline.ee7683eb.js","assets/index.66ba20d4.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.c0f8c8a8.js","assets/scripts.810d7a62.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/ExpandOutlined.b4a7acc7.js","assets/Card.f54f3849.js","assets/TabPane.ecc0e07d.js","assets/index.29d24591.js","assets/repository.a6dad21c.css"]),meta:{title:"Abstra - Workflow Kanban"}}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.d73122f3.js"),["assets/Settings.d73122f3.js","assets/NavbarControls.255a2ee0.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/index.29d24591.js","assets/pubsub.add0ba02.js","assets/asyncComputed.2a8292e3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/index.2ccc7d16.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/popupNotifcation.72d5fcac.js","assets/icons.4a820db9.js","assets/index.3357c4ce.js","assets/Text.33fabc42.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/Paragraph.21d1783d.js","assets/NavbarControls.a62b7291.css","assets/TabPane.ecc0e07d.js","assets/hasIn.a2a632bb.js","assets/index.ee2acc49.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.0dcfd089.js"),["assets/StyleEditor.0dcfd089.js","assets/asyncComputed.2a8292e3.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/CircularLoading.3d92913a.js","assets/CircularLoading.f81b57b4.css","assets/icons.4a820db9.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.9db0edd5.js","assets/PlayerNavbar.75fdb37e.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.96bfc24d.js","assets/WidgetsFrame.97ae601d.css","assets/Title.9819116a.js","assets/SidebarPreview.c4d1a6e7.css","assets/index.3357c4ce.js","assets/Form.0b25b541.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.34304732.js"),["assets/SidebarEditor.34304732.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5823147.js","assets/ant-design.0bf6bed5.js","assets/index.5305428d.js","assets/Modal.51099ad8.js","assets/Typography.f0e049e6.js","assets/Link.fd04b625.js","assets/Base.e19ec4a0.js","assets/SaveButton.13ece1cb.css","assets/Title.9819116a.js","assets/index.3357c4ce.js","assets/index.b306ef07.js","assets/index.8fbad136.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/workspaces.2be6c8b9.js","assets/runnerData.677f6556.js","assets/url.071010f9.js","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js","assets/asyncComputed.2a8292e3.js","assets/CircularLoading.3d92913a.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.9db0edd5.js","assets/PlayerNavbar.75fdb37e.js","assets/icons.4a820db9.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.96bfc24d.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c4d1a6e7.css","assets/Form.0b25b541.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.91ed4f68.js"),["assets/RequirementsEditor.91ed4f68.js","assets/asyncComputed.2a8292e3.js","assets/outputWidgets.2e47e14c.js","assets/outputWidgets.b5a98445.css","assets/icons.4a820db9.js","assets/CrudView.383d7074.js","assets/Paragraph.21d1783d.js","assets/Base.e19ec4a0.js","assets/Typography.f0e049e6.js","assets/FormItem.47817a76.js","assets/hasIn.a2a632bb.js","assets/Form.0b25b541.js","assets/Modal.51099ad8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.68a35066.js","assets/router.47e8f42d.js","assets/url.071010f9.js","assets/index.3357c4ce.js","assets/Title.9819116a.js","assets/Text.33fabc42.js","assets/index.a9995d7b.js","assets/CrudView.9de44552.css","assets/record.fb76d4af.js","assets/pubsub.add0ba02.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{A(e,o)});(async()=>{await C();const e=g({render:()=>T(q)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",k),e.component("Markdown",R),e.component("Icon",D),e.component("Message",V),r(e,L),r(e,O),r(e,S)})();
//# sourceMappingURL=editor.9926f46d.js.map
