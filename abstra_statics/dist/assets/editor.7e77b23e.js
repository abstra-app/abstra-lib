import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f as E,u as f,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P as y,C as P,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.31f7d089.js";import{u as S}from"./index.83c4ff75.js";import{r as W,s as C}from"./index.139d7054.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="21708059-3d54-4e0d-9ca5-95a5bb291c82",e._sentryDebugIdIdentifier="sentry-dbid-21708059-3d54-4e0d-9ca5-95a5bb291c82")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(i,j)=>{const s=p("router-view");return c(),l(f(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[E(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.54021968.js"),["assets/Home.54021968.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.f3a14542.js"),["assets/Workspace.f3a14542.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/icons.198d98c5.js","assets/logo.084e5d7c.js","assets/BaseLayout.20de3d15.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.dd0ceb2b.js","assets/asyncComputed.e77cc478.js","assets/index.139d7054.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/storage.9487c073.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/index.44c12190.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/popupNotifcation.fef16c93.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/index.2cc6be50.js","assets/NavbarControls.d196f6d1.css","assets/index.6f8abde1.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.a1a6dfe2.js"),["assets/Scripts.a1a6dfe2.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/forms.1e76e083.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/jobs.3dc90d2b.js","assets/workspaces.db17d976.js","assets/url.9c7cb212.js","assets/scripts.940d690f.js","assets/asyncComputed.e77cc478.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/icons.198d98c5.js","assets/Text.07fdffd9.js","assets/index.2cc6be50.js","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/hasIn.fdd00a9f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/Title.504b0ce1.js","assets/validations.e7f4cf28.js","assets/string.853c8e33.js","assets/FormItem.44f90408.js","assets/index.169854b3.js","assets/Form.29fec373.js","assets/index.44c12190.js","assets/index.5a71bdc9.js","assets/Link.18e38811.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.d0092e1f.js"),["assets/FormEditor.d0092e1f.js","assets/FormRunner.062c0380.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/url.9c7cb212.js","assets/storage.9487c073.js","assets/pubsub.1cbdbeb4.js","assets/jwt-decode.esm.74bd4619.js","assets/index.139d7054.js","assets/icons.198d98c5.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.50597b23.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.c2f05e31.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.94f65fe1.js","assets/WidgetsFrame.97ae601d.css","assets/index.4d9af1af.js","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/hasIn.fdd00a9f.js","assets/index.5a71bdc9.js","assets/Text.07fdffd9.js","assets/Link.18e38811.js","assets/Title.504b0ce1.js","assets/FormRunner.8ff3f1ac.css","assets/SourceCode.bda26ce0.js","assets/uuid.86421060.js","assets/NavbarControls.dd0ceb2b.js","assets/asyncComputed.e77cc478.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/SaveButton.13ece1cb.css","assets/index.44c12190.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/popupNotifcation.fef16c93.js","assets/index.2cc6be50.js","assets/NavbarControls.d196f6d1.css","assets/jobs.3dc90d2b.js","assets/scripts.940d690f.js","assets/validations.e7f4cf28.js","assets/string.853c8e33.js","assets/FormItem.44f90408.js","assets/toggleHighContrast.47765f0e.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.bb7637cb.css","assets/BaseLayout.20de3d15.js","assets/BaseLayout.881bfa61.css","assets/forms.1e76e083.js","assets/Form.29fec373.js","assets/index.1aba186f.js","assets/ExpandOutlined.99d10ff0.js","assets/index.6f8abde1.js","assets/FormEditor.80dd403e.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.591304fc.js"),["assets/FormPreview.591304fc.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.062c0380.js","assets/url.9c7cb212.js","assets/storage.9487c073.js","assets/pubsub.1cbdbeb4.js","assets/jwt-decode.esm.74bd4619.js","assets/index.139d7054.js","assets/icons.198d98c5.js","assets/PlayerNavbar.50597b23.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.c2f05e31.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.94f65fe1.js","assets/WidgetsFrame.97ae601d.css","assets/index.4d9af1af.js","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/hasIn.fdd00a9f.js","assets/index.5a71bdc9.js","assets/Text.07fdffd9.js","assets/Link.18e38811.js","assets/Title.504b0ce1.js","assets/FormRunner.8ff3f1ac.css","assets/asyncComputed.e77cc478.js","assets/forms.1e76e083.js","assets/record.f93ee02b.js","assets/workspaces.db17d976.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.940b2454.js"),["assets/JobEditor.940b2454.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/jobs.3dc90d2b.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/workspaces.db17d976.js","assets/url.9c7cb212.js","assets/SourceCode.bda26ce0.js","assets/uuid.86421060.js","assets/icons.198d98c5.js","assets/storage.9487c073.js","assets/NavbarControls.dd0ceb2b.js","assets/asyncComputed.e77cc478.js","assets/index.139d7054.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/index.44c12190.js","assets/popupNotifcation.fef16c93.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/index.2cc6be50.js","assets/NavbarControls.d196f6d1.css","assets/scripts.940d690f.js","assets/validations.e7f4cf28.js","assets/string.853c8e33.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/toggleHighContrast.47765f0e.js","assets/toggleHighContrast.30d77c87.css","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.20de3d15.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.307be387.js","assets/index.6dde44e3.js","assets/index.1aba186f.js","assets/dayjs.c2b88635.js","assets/index.881e1abf.js","assets/Form.29fec373.js","assets/index.6f8abde1.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.38cbf929.js"),["assets/HookEditor.38cbf929.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.bda26ce0.js","assets/uuid.86421060.js","assets/icons.198d98c5.js","assets/storage.9487c073.js","assets/NavbarControls.dd0ceb2b.js","assets/asyncComputed.e77cc478.js","assets/index.139d7054.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/index.44c12190.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/popupNotifcation.fef16c93.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/index.2cc6be50.js","assets/NavbarControls.d196f6d1.css","assets/jobs.3dc90d2b.js","assets/scripts.940d690f.js","assets/validations.e7f4cf28.js","assets/string.853c8e33.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/toggleHighContrast.47765f0e.js","assets/toggleHighContrast.30d77c87.css","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.20de3d15.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.307be387.js","assets/index.281c401b.js","assets/CollapsePanel.462cd596.js","assets/index.e5b72862.js","assets/index.5b241a74.js","assets/index.1aba186f.js","assets/Form.29fec373.js","assets/index.6f8abde1.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.3367e9f7.js"),["assets/Workflow.3367e9f7.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/icons.198d98c5.js","assets/NavbarControls.dd0ceb2b.js","assets/asyncComputed.e77cc478.js","assets/index.139d7054.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/storage.9487c073.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/index.44c12190.js","assets/popupNotifcation.fef16c93.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/index.2cc6be50.js","assets/NavbarControls.d196f6d1.css","assets/schema.98475f5c.js","assets/index.cf4c23b9.js","assets/metadata.1ae3b917.js","assets/validations.e7f4cf28.js","assets/string.853c8e33.js","assets/index.6f8abde1.js","assets/TabPane.5b9370aa.js","assets/hasIn.fdd00a9f.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.01100b0a.js"),["assets/WorkflowEditor.01100b0a.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/metadata.1ae3b917.js","assets/icons.198d98c5.js","assets/schema.98475f5c.js","assets/index.cf4c23b9.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/validations.e7f4cf28.js","assets/string.853c8e33.js","assets/index.0bd3b0cd.js","assets/isNumeric.75337b1e.js","assets/index.2cc6be50.js","assets/Text.07fdffd9.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/Link.18e38811.js","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.d37ff09b.js"),["assets/WorkflowKanban.d37ff09b.js","assets/ant-design.641a17c9.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/asyncComputed.e77cc478.js","assets/metadata.1ae3b917.js","assets/icons.198d98c5.js","assets/index.2cc6be50.js","assets/index.83c4ff75.js","assets/index.95ed1e91.js","assets/index.0bd3b0cd.js","assets/isNumeric.75337b1e.js","assets/Timeline.7afe811b.js","assets/index.60dab0af.js","assets/index.1aba186f.js","assets/Title.504b0ce1.js","assets/Text.07fdffd9.js","assets/index.5b241a74.js","assets/CollapsePanel.462cd596.js","assets/Link.18e38811.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.7da22e0a.js","assets/Form.29fec373.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/scripts.940d690f.js","assets/Card.a4f0bdcb.js","assets/TabPane.5b9370aa.js","assets/ExpandOutlined.99d10ff0.js","assets/WorkflowKanban.f13d6c6b.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.e73edd74.js"),["assets/Settings.e73edd74.js","assets/NavbarControls.dd0ceb2b.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e77cc478.js","assets/index.139d7054.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/storage.9487c073.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/index.44c12190.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/popupNotifcation.fef16c93.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/icons.198d98c5.js","assets/index.2cc6be50.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.5b9370aa.js","assets/hasIn.fdd00a9f.js","assets/index.6f8abde1.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.7075fb13.js"),["assets/StyleEditor.7075fb13.js","assets/asyncComputed.e77cc478.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/icons.198d98c5.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/storage.9487c073.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.151a9c60.js","assets/PlayerNavbar.50597b23.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.94f65fe1.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.2cc6be50.js","assets/Form.29fec373.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.29a7a229.js"),["assets/SidebarEditor.29a7a229.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.36fce90f.js","assets/ant-design.641a17c9.js","assets/index.717c43b7.js","assets/Modal.3bedd318.js","assets/storage.9487c073.js","assets/Link.18e38811.js","assets/Text.07fdffd9.js","assets/index.5a71bdc9.js","assets/Title.504b0ce1.js","assets/SaveButton.13ece1cb.css","assets/index.2cc6be50.js","assets/index.e5b72862.js","assets/index.881e1abf.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/workspaces.db17d976.js","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js","assets/url.9c7cb212.js","assets/asyncComputed.e77cc478.js","assets/CircularLoading.6a7fb691.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.151a9c60.js","assets/PlayerNavbar.50597b23.js","assets/icons.198d98c5.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.94f65fe1.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.29fec373.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.2b52d692.js"),["assets/RequirementsEditor.2b52d692.js","assets/asyncComputed.e77cc478.js","assets/outputWidgets.31f7d089.js","assets/outputWidgets.3c848cd5.css","assets/icons.198d98c5.js","assets/CrudView.0df6e92a.js","assets/Title.504b0ce1.js","assets/Text.07fdffd9.js","assets/FormItem.44f90408.js","assets/hasIn.fdd00a9f.js","assets/Form.29fec373.js","assets/Modal.3bedd318.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js","assets/router.9f7c32ab.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.9487c073.js","assets/index.83c4ff75.js","assets/url.9c7cb212.js","assets/index.1aba186f.js","assets/CrudView.4c069239.css","assets/record.f93ee02b.js","assets/pubsub.1cbdbeb4.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await C();const e=A({render:()=>V(B)});g.init(),I(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.7e77b23e.js.map
