import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f,u as E,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P as y,C as P,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.427273b8.js";import{u as S}from"./index.3d2dc6af.js";import{r as W,s as C}from"./index.a1f7f447.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="441e618e-2a25-4881-9a4c-52be3dbf8fca",e._sentryDebugIdIdentifier="sentry-dbid-441e618e-2a25-4881-9a4c-52be3dbf8fca")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(i,j)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[f(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.cd03b58e.js"),["assets/Home.cd03b58e.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.5d79336a.js"),["assets/Workspace.5d79336a.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/icons.6552134e.js","assets/logo.084e5d7c.js","assets/BaseLayout.1af78fe9.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.72bff5fb.js","assets/asyncComputed.0c579c2b.js","assets/index.a1f7f447.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/storage.bc391793.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/index.2d66e6ce.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/popupNotifcation.1108478c.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/index.477338ed.js","assets/NavbarControls.d196f6d1.css","assets/index.3fa4212d.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.220ea7d3.js"),["assets/Scripts.220ea7d3.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/forms.cd9a530a.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/jobs.49bb7d19.js","assets/workspaces.9fc9f0f1.js","assets/url.6379a791.js","assets/scripts.f7c65169.js","assets/asyncComputed.0c579c2b.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/icons.6552134e.js","assets/Text.d8c58083.js","assets/index.477338ed.js","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/hasIn.9b75da57.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/Title.8e3eb460.js","assets/validations.f42750f9.js","assets/string.d4b61c20.js","assets/FormItem.8e12718f.js","assets/index.13a04cb6.js","assets/Form.36bc9848.js","assets/index.2d66e6ce.js","assets/index.fcf7c457.js","assets/Link.dab45218.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.89c43a36.js"),["assets/FormEditor.89c43a36.js","assets/FormRunner.642618f2.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/url.6379a791.js","assets/storage.bc391793.js","assets/pubsub.e079f8e1.js","assets/jwt-decode.esm.74bd4619.js","assets/index.a1f7f447.js","assets/icons.6552134e.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.2487646b.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.13b7ace5.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.b50bf671.js","assets/WidgetsFrame.97ae601d.css","assets/index.61643dba.js","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/hasIn.9b75da57.js","assets/index.fcf7c457.js","assets/Text.d8c58083.js","assets/Link.dab45218.js","assets/Title.8e3eb460.js","assets/FormRunner.8ff3f1ac.css","assets/SourceCode.383bedac.js","assets/uuid.1d2d85a1.js","assets/NavbarControls.72bff5fb.js","assets/asyncComputed.0c579c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/SaveButton.13ece1cb.css","assets/index.2d66e6ce.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/popupNotifcation.1108478c.js","assets/index.477338ed.js","assets/NavbarControls.d196f6d1.css","assets/jobs.49bb7d19.js","assets/scripts.f7c65169.js","assets/validations.f42750f9.js","assets/string.d4b61c20.js","assets/FormItem.8e12718f.js","assets/toggleHighContrast.e172d004.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.bb7637cb.css","assets/BaseLayout.1af78fe9.js","assets/BaseLayout.881bfa61.css","assets/forms.cd9a530a.js","assets/Form.36bc9848.js","assets/index.7400ec36.js","assets/ExpandOutlined.e4c34e94.js","assets/index.3fa4212d.js","assets/FormEditor.80dd403e.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.cb2b052d.js"),["assets/FormPreview.cb2b052d.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.642618f2.js","assets/url.6379a791.js","assets/storage.bc391793.js","assets/pubsub.e079f8e1.js","assets/jwt-decode.esm.74bd4619.js","assets/index.a1f7f447.js","assets/icons.6552134e.js","assets/PlayerNavbar.2487646b.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.13b7ace5.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.b50bf671.js","assets/WidgetsFrame.97ae601d.css","assets/index.61643dba.js","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/hasIn.9b75da57.js","assets/index.fcf7c457.js","assets/Text.d8c58083.js","assets/Link.dab45218.js","assets/Title.8e3eb460.js","assets/FormRunner.8ff3f1ac.css","assets/asyncComputed.0c579c2b.js","assets/forms.cd9a530a.js","assets/record.6362517a.js","assets/workspaces.9fc9f0f1.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.df7d4d4a.js"),["assets/JobEditor.df7d4d4a.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/jobs.49bb7d19.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/workspaces.9fc9f0f1.js","assets/url.6379a791.js","assets/SourceCode.383bedac.js","assets/uuid.1d2d85a1.js","assets/icons.6552134e.js","assets/storage.bc391793.js","assets/NavbarControls.72bff5fb.js","assets/asyncComputed.0c579c2b.js","assets/index.a1f7f447.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/index.2d66e6ce.js","assets/popupNotifcation.1108478c.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/index.477338ed.js","assets/NavbarControls.d196f6d1.css","assets/scripts.f7c65169.js","assets/validations.f42750f9.js","assets/string.d4b61c20.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/toggleHighContrast.e172d004.js","assets/toggleHighContrast.30d77c87.css","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.1af78fe9.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.25749e06.js","assets/index.529cff4b.js","assets/index.7400ec36.js","assets/dayjs.2c5f15cb.js","assets/index.071c271e.js","assets/Form.36bc9848.js","assets/index.3fa4212d.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.9da848c4.js"),["assets/HookEditor.9da848c4.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.383bedac.js","assets/uuid.1d2d85a1.js","assets/icons.6552134e.js","assets/storage.bc391793.js","assets/NavbarControls.72bff5fb.js","assets/asyncComputed.0c579c2b.js","assets/index.a1f7f447.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/index.2d66e6ce.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/popupNotifcation.1108478c.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/index.477338ed.js","assets/NavbarControls.d196f6d1.css","assets/jobs.49bb7d19.js","assets/scripts.f7c65169.js","assets/validations.f42750f9.js","assets/string.d4b61c20.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/toggleHighContrast.e172d004.js","assets/toggleHighContrast.30d77c87.css","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.1af78fe9.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.25749e06.js","assets/index.caf73f2d.js","assets/CollapsePanel.3dd7516b.js","assets/index.0daa0a51.js","assets/index.3c15be5d.js","assets/index.7400ec36.js","assets/Form.36bc9848.js","assets/index.3fa4212d.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.ed593836.js"),["assets/Workflow.ed593836.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/icons.6552134e.js","assets/NavbarControls.72bff5fb.js","assets/asyncComputed.0c579c2b.js","assets/index.a1f7f447.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/storage.bc391793.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/index.2d66e6ce.js","assets/popupNotifcation.1108478c.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/index.477338ed.js","assets/NavbarControls.d196f6d1.css","assets/schema.aa389e77.js","assets/index.cf4c23b9.js","assets/metadata.848198fc.js","assets/validations.f42750f9.js","assets/string.d4b61c20.js","assets/index.3fa4212d.js","assets/TabPane.74f400af.js","assets/hasIn.9b75da57.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.6483f084.js"),["assets/WorkflowEditor.6483f084.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/metadata.848198fc.js","assets/icons.6552134e.js","assets/schema.aa389e77.js","assets/index.cf4c23b9.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/validations.f42750f9.js","assets/string.d4b61c20.js","assets/index.932d93a7.js","assets/isNumeric.75337b1e.js","assets/index.477338ed.js","assets/Text.d8c58083.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/Link.dab45218.js","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.f60bd8c4.js"),["assets/WorkflowKanban.f60bd8c4.js","assets/ant-design.e9833f0e.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/asyncComputed.0c579c2b.js","assets/metadata.848198fc.js","assets/icons.6552134e.js","assets/index.477338ed.js","assets/index.3d2dc6af.js","assets/index.7c189c41.js","assets/index.932d93a7.js","assets/isNumeric.75337b1e.js","assets/Timeline.06d8a962.js","assets/index.0679ac8f.js","assets/index.7400ec36.js","assets/Title.8e3eb460.js","assets/Text.d8c58083.js","assets/index.3c15be5d.js","assets/CollapsePanel.3dd7516b.js","assets/Link.dab45218.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0340c0e0.js","assets/Form.36bc9848.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/scripts.f7c65169.js","assets/Card.87f5907b.js","assets/TabPane.74f400af.js","assets/ExpandOutlined.e4c34e94.js","assets/WorkflowKanban.f13d6c6b.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.119278a7.js"),["assets/Settings.119278a7.js","assets/NavbarControls.72bff5fb.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.0c579c2b.js","assets/index.a1f7f447.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/storage.bc391793.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/index.2d66e6ce.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/popupNotifcation.1108478c.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/icons.6552134e.js","assets/index.477338ed.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.74f400af.js","assets/hasIn.9b75da57.js","assets/index.3fa4212d.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.f0dae04c.js"),["assets/StyleEditor.f0dae04c.js","assets/asyncComputed.0c579c2b.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/icons.6552134e.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/storage.bc391793.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.177f7be5.js","assets/PlayerNavbar.2487646b.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.b50bf671.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.477338ed.js","assets/Form.36bc9848.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.43743cbd.js"),["assets/SidebarEditor.43743cbd.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.786daffc.js","assets/ant-design.e9833f0e.js","assets/index.631186a5.js","assets/Modal.05c87e5d.js","assets/storage.bc391793.js","assets/Link.dab45218.js","assets/Text.d8c58083.js","assets/index.fcf7c457.js","assets/Title.8e3eb460.js","assets/SaveButton.13ece1cb.css","assets/index.477338ed.js","assets/index.0daa0a51.js","assets/index.071c271e.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/workspaces.9fc9f0f1.js","assets/record.6362517a.js","assets/pubsub.e079f8e1.js","assets/url.6379a791.js","assets/asyncComputed.0c579c2b.js","assets/CircularLoading.cf7242aa.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.177f7be5.js","assets/PlayerNavbar.2487646b.js","assets/icons.6552134e.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.b50bf671.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.36bc9848.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.39b442b6.js"),["assets/RequirementsEditor.39b442b6.js","assets/asyncComputed.0c579c2b.js","assets/outputWidgets.427273b8.js","assets/outputWidgets.3c848cd5.css","assets/icons.6552134e.js","assets/CrudView.2fce1bfb.js","assets/Title.8e3eb460.js","assets/Text.d8c58083.js","assets/FormItem.8e12718f.js","assets/hasIn.9b75da57.js","assets/Form.36bc9848.js","assets/Modal.05c87e5d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js","assets/router.85e945f1.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.bc391793.js","assets/index.3d2dc6af.js","assets/url.6379a791.js","assets/index.7400ec36.js","assets/CrudView.4c069239.css","assets/record.6362517a.js","assets/pubsub.e079f8e1.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await C();const e=A({render:()=>V(B)});g.init(),I(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.299a2310.js.map
