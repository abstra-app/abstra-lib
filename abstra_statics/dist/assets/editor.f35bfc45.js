import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as f,f as h,u as E,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P as y,C as P,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.2f984d8c.js";import{u as S}from"./index.4ff8ae43.js";import{r as W,s as C}from"./index.ef84f147.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="7fbff1a3-bece-44fc-98cd-a0c7d0681017",e._sentryDebugIdIdentifier="sentry-dbid-7fbff1a3-bece-44fc-98cd-a0c7d0681017")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(i,j)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[f("div",M,[h(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.9e43bf7e.js"),["assets/Home.9e43bf7e.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.327a997d.js"),["assets/Workspace.327a997d.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/icons.01a3c723.js","assets/logo.084e5d7c.js","assets/BaseLayout.a05841ee.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.41162fb7.js","assets/asyncComputed.e24f1c59.js","assets/index.ef84f147.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/storage.83f66495.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/index.4689dfbf.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/popupNotifcation.dc30d521.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/index.682f1eb7.js","assets/NavbarControls.d196f6d1.css","assets/index.b2ce84fd.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.7e8c16aa.js"),["assets/Scripts.7e8c16aa.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/forms.a01c5b9c.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/jobs.ece4727b.js","assets/workspaces.2eded4e7.js","assets/url.0b412367.js","assets/scripts.199bb428.js","assets/asyncComputed.e24f1c59.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/icons.01a3c723.js","assets/Text.0232fe9c.js","assets/index.682f1eb7.js","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/hasIn.9bc86e38.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/Title.569da09f.js","assets/validations.8608bbf9.js","assets/string.02593f1f.js","assets/FormItem.03241454.js","assets/index.1406c43a.js","assets/Form.0a4fce66.js","assets/index.4689dfbf.js","assets/index.2d38ef6d.js","assets/Link.76299f4f.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.faccdafc.js"),["assets/FormEditor.faccdafc.js","assets/FormRunner.f59baba3.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/url.0b412367.js","assets/storage.83f66495.js","assets/pubsub.4b35560e.js","assets/jwt-decode.esm.74bd4619.js","assets/index.ef84f147.js","assets/icons.01a3c723.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.5f9ad009.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.aeac7480.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.eb7e6e8b.js","assets/WidgetsFrame.97ae601d.css","assets/index.1da7ba57.js","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/hasIn.9bc86e38.js","assets/index.2d38ef6d.js","assets/Text.0232fe9c.js","assets/Link.76299f4f.js","assets/Title.569da09f.js","assets/FormRunner.8ff3f1ac.css","assets/SourceCode.57f3cba4.js","assets/uuid.aab8d096.js","assets/NavbarControls.41162fb7.js","assets/asyncComputed.e24f1c59.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/SaveButton.13ece1cb.css","assets/index.4689dfbf.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/popupNotifcation.dc30d521.js","assets/index.682f1eb7.js","assets/NavbarControls.d196f6d1.css","assets/jobs.ece4727b.js","assets/scripts.199bb428.js","assets/validations.8608bbf9.js","assets/string.02593f1f.js","assets/FormItem.03241454.js","assets/toggleHighContrast.af91c1d3.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.bb7637cb.css","assets/BaseLayout.a05841ee.js","assets/BaseLayout.881bfa61.css","assets/forms.a01c5b9c.js","assets/Form.0a4fce66.js","assets/index.5615e480.js","assets/ExpandOutlined.c6f040d1.js","assets/index.b2ce84fd.js","assets/FormEditor.80dd403e.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.56a2125c.js"),["assets/FormPreview.56a2125c.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.f59baba3.js","assets/url.0b412367.js","assets/storage.83f66495.js","assets/pubsub.4b35560e.js","assets/jwt-decode.esm.74bd4619.js","assets/index.ef84f147.js","assets/icons.01a3c723.js","assets/PlayerNavbar.5f9ad009.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.aeac7480.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.eb7e6e8b.js","assets/WidgetsFrame.97ae601d.css","assets/index.1da7ba57.js","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/hasIn.9bc86e38.js","assets/index.2d38ef6d.js","assets/Text.0232fe9c.js","assets/Link.76299f4f.js","assets/Title.569da09f.js","assets/FormRunner.8ff3f1ac.css","assets/asyncComputed.e24f1c59.js","assets/forms.a01c5b9c.js","assets/record.767acc01.js","assets/workspaces.2eded4e7.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.9c3295a3.js"),["assets/JobEditor.9c3295a3.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/jobs.ece4727b.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/workspaces.2eded4e7.js","assets/url.0b412367.js","assets/SourceCode.57f3cba4.js","assets/uuid.aab8d096.js","assets/icons.01a3c723.js","assets/storage.83f66495.js","assets/NavbarControls.41162fb7.js","assets/asyncComputed.e24f1c59.js","assets/index.ef84f147.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/index.4689dfbf.js","assets/popupNotifcation.dc30d521.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/index.682f1eb7.js","assets/NavbarControls.d196f6d1.css","assets/scripts.199bb428.js","assets/validations.8608bbf9.js","assets/string.02593f1f.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/toggleHighContrast.af91c1d3.js","assets/toggleHighContrast.30d77c87.css","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.a05841ee.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7259a28e.js","assets/index.2ce27e5b.js","assets/index.5615e480.js","assets/dayjs.19c0670b.js","assets/index.082011c3.js","assets/Form.0a4fce66.js","assets/index.b2ce84fd.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.8a14d644.js"),["assets/HookEditor.8a14d644.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.57f3cba4.js","assets/uuid.aab8d096.js","assets/icons.01a3c723.js","assets/storage.83f66495.js","assets/NavbarControls.41162fb7.js","assets/asyncComputed.e24f1c59.js","assets/index.ef84f147.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/index.4689dfbf.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/popupNotifcation.dc30d521.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/index.682f1eb7.js","assets/NavbarControls.d196f6d1.css","assets/jobs.ece4727b.js","assets/scripts.199bb428.js","assets/validations.8608bbf9.js","assets/string.02593f1f.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/toggleHighContrast.af91c1d3.js","assets/toggleHighContrast.30d77c87.css","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.a05841ee.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7259a28e.js","assets/index.90d7354d.js","assets/CollapsePanel.2930b00f.js","assets/index.813ddec8.js","assets/index.c87b240c.js","assets/index.5615e480.js","assets/Form.0a4fce66.js","assets/index.b2ce84fd.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.b3ff3bee.js"),["assets/Workflow.b3ff3bee.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/icons.01a3c723.js","assets/NavbarControls.41162fb7.js","assets/asyncComputed.e24f1c59.js","assets/index.ef84f147.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/storage.83f66495.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/index.4689dfbf.js","assets/popupNotifcation.dc30d521.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/index.682f1eb7.js","assets/NavbarControls.d196f6d1.css","assets/schema.2f975141.js","assets/index.cf4c23b9.js","assets/metadata.8e1afe93.js","assets/validations.8608bbf9.js","assets/string.02593f1f.js","assets/index.b2ce84fd.js","assets/TabPane.fe666e6a.js","assets/hasIn.9bc86e38.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.142a51ae.js"),["assets/WorkflowEditor.142a51ae.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/metadata.8e1afe93.js","assets/icons.01a3c723.js","assets/schema.2f975141.js","assets/index.cf4c23b9.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/validations.8608bbf9.js","assets/string.02593f1f.js","assets/index.f1b9c965.js","assets/isNumeric.75337b1e.js","assets/index.682f1eb7.js","assets/Text.0232fe9c.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/Link.76299f4f.js","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.a86b2377.js"),["assets/WorkflowKanban.a86b2377.js","assets/ant-design.24e61e53.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/asyncComputed.e24f1c59.js","assets/metadata.8e1afe93.js","assets/icons.01a3c723.js","assets/index.682f1eb7.js","assets/index.4ff8ae43.js","assets/index.153afbf9.js","assets/index.f1b9c965.js","assets/isNumeric.75337b1e.js","assets/Timeline.52b55b52.js","assets/index.9cf06a59.js","assets/index.5615e480.js","assets/Title.569da09f.js","assets/Text.0232fe9c.js","assets/index.c87b240c.js","assets/CollapsePanel.2930b00f.js","assets/Link.76299f4f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4b5b63e1.js","assets/Form.0a4fce66.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/scripts.199bb428.js","assets/Card.86f03523.js","assets/TabPane.fe666e6a.js","assets/ExpandOutlined.c6f040d1.js","assets/WorkflowKanban.f13d6c6b.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.5da8a6b5.js"),["assets/Settings.5da8a6b5.js","assets/NavbarControls.41162fb7.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e24f1c59.js","assets/index.ef84f147.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/storage.83f66495.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/index.4689dfbf.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/popupNotifcation.dc30d521.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/icons.01a3c723.js","assets/index.682f1eb7.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.fe666e6a.js","assets/hasIn.9bc86e38.js","assets/index.b2ce84fd.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.81c8517f.js"),["assets/StyleEditor.81c8517f.js","assets/asyncComputed.e24f1c59.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/icons.01a3c723.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/storage.83f66495.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.e8f60883.js","assets/PlayerNavbar.5f9ad009.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.eb7e6e8b.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.682f1eb7.js","assets/Form.0a4fce66.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.38b72619.js"),["assets/SidebarEditor.38b72619.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.925d47ab.js","assets/ant-design.24e61e53.js","assets/index.a98daa7b.js","assets/Modal.6eebfd80.js","assets/storage.83f66495.js","assets/Link.76299f4f.js","assets/Text.0232fe9c.js","assets/index.2d38ef6d.js","assets/Title.569da09f.js","assets/SaveButton.13ece1cb.css","assets/index.682f1eb7.js","assets/index.813ddec8.js","assets/index.082011c3.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/workspaces.2eded4e7.js","assets/record.767acc01.js","assets/pubsub.4b35560e.js","assets/url.0b412367.js","assets/asyncComputed.e24f1c59.js","assets/CircularLoading.2fc78561.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.e8f60883.js","assets/PlayerNavbar.5f9ad009.js","assets/icons.01a3c723.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.eb7e6e8b.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.0a4fce66.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.e29b660c.js"),["assets/RequirementsEditor.e29b660c.js","assets/asyncComputed.e24f1c59.js","assets/outputWidgets.2f984d8c.js","assets/outputWidgets.3c848cd5.css","assets/icons.01a3c723.js","assets/CrudView.efb1cc0d.js","assets/Title.569da09f.js","assets/Text.0232fe9c.js","assets/FormItem.03241454.js","assets/hasIn.9bc86e38.js","assets/Form.0a4fce66.js","assets/Modal.6eebfd80.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.785054eb.js","assets/router.a345177b.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.83f66495.js","assets/index.4ff8ae43.js","assets/url.0b412367.js","assets/index.5615e480.js","assets/CrudView.4c069239.css","assets/record.767acc01.js","assets/pubsub.4b35560e.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await C();const e=A({render:()=>V(B)});g.init(),I(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.f35bfc45.js.map
