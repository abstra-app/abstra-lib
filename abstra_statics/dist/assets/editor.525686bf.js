import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f,u as E,A as w,g as v,h as b,_ as t,i as A,T as g,j as I,P,C as y,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.ddb799f6.js";import{u as S}from"./index.ae74c6e1.js";import{r as W,u as C,s as x}from"./index.8f78b824.js";import"./pubsub.e6957d89.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f267855c-999c-4d41-a0f1-8f59ca082d99",e._sentryDebugIdIdentifier="sentry-dbid-f267855c-999c-4d41-a0f1-8f59ca082d99")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),l(E(w),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",B,[f(s)])]),_:1})}}});const a=v({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.ae0bc84a.js"),["assets/Home.ae0bc84a.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.28b3a8aa.js"),["assets/Workspace.28b3a8aa.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/icons.4891c9af.js","assets/logo.084e5d7c.js","assets/BaseLayout.c25ddb98.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.627c81d6.js","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/popupNotifcation.bed10a8d.js","assets/asyncComputed.76da9d27.js","assets/index.8f78b824.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.1dc9031f.js","assets/NavbarControls.a18a0f0f.css","assets/index.c83fdb66.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.bb9319fb.js"),["assets/Scripts.bb9319fb.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/forms.62ea05d3.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/validations.c3670f8d.js","assets/string.54198019.js","assets/workspaces.ad653614.js","assets/url.73b2c763.js","assets/asyncComputed.76da9d27.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/icons.4891c9af.js","assets/index.e5a8441b.js","assets/index.761ca6a9.js","assets/Card.0afa35b1.js","assets/index.3f6988e4.js","assets/TabPane.76684559.js","assets/hasIn.ee379a91.js","assets/Form.1bbfaffe.js","assets/FormItem.38b8c259.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/index.1dc9031f.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/Scripts.ed1d9dcc.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.57b9dab9.js"),["assets/FormEditor.57b9dab9.js","assets/FormRunner.a99e0c77.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/url.73b2c763.js","assets/index.8f78b824.js","assets/pubsub.e6957d89.js","assets/icons.4891c9af.js","assets/CircularLoading.24ee9bcb.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.965c381a.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.e20984dc.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.2b8abdf7.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.4665adff.css","assets/SourceCode.16f1c887.js","assets/uuid.87ce6cab.js","assets/NavbarControls.627c81d6.js","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/popupNotifcation.bed10a8d.js","assets/asyncComputed.76da9d27.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.1dc9031f.js","assets/NavbarControls.a18a0f0f.css","assets/validations.c3670f8d.js","assets/string.54198019.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/toggleHighContrast.9cf0131d.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.c25ddb98.js","assets/BaseLayout.881bfa61.css","assets/forms.62ea05d3.js","assets/index.e5a8441b.js","assets/Form.1bbfaffe.js","assets/TabPane.76684559.js","assets/index.3f6988e4.js","assets/ExpandOutlined.2dbf3416.js","assets/index.c83fdb66.js","assets/FormEditor.043cbd07.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.67d23ea3.js"),["assets/FormPreview.67d23ea3.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.24ee9bcb.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.a99e0c77.js","assets/url.73b2c763.js","assets/index.8f78b824.js","assets/pubsub.e6957d89.js","assets/icons.4891c9af.js","assets/PlayerNavbar.965c381a.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.e20984dc.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.2b8abdf7.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.4665adff.css","assets/asyncComputed.76da9d27.js","assets/forms.62ea05d3.js","assets/record.888fd2b8.js","assets/workspaces.ad653614.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.0101386f.js"),["assets/JobEditor.0101386f.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/validations.c3670f8d.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/string.54198019.js","assets/workspaces.ad653614.js","assets/url.73b2c763.js","assets/SourceCode.16f1c887.js","assets/uuid.87ce6cab.js","assets/icons.4891c9af.js","assets/NavbarControls.627c81d6.js","assets/popupNotifcation.bed10a8d.js","assets/asyncComputed.76da9d27.js","assets/index.8f78b824.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.1dc9031f.js","assets/NavbarControls.a18a0f0f.css","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/toggleHighContrast.9cf0131d.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.c25ddb98.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.e14fcec4.js","assets/index.53479210.js","assets/index.45ba5598.js","assets/dayjs.b8987870.js","assets/index.cc0d4a13.js","assets/Form.1bbfaffe.js","assets/index.c83fdb66.js","assets/index.e5a8441b.js","assets/TabPane.76684559.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.83ed3d55.js"),["assets/HookEditor.83ed3d55.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.16f1c887.js","assets/uuid.87ce6cab.js","assets/icons.4891c9af.js","assets/NavbarControls.627c81d6.js","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/popupNotifcation.bed10a8d.js","assets/asyncComputed.76da9d27.js","assets/index.8f78b824.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.1dc9031f.js","assets/NavbarControls.a18a0f0f.css","assets/validations.c3670f8d.js","assets/string.54198019.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/toggleHighContrast.9cf0131d.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.c25ddb98.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.e14fcec4.js","assets/index.fb68ba32.js","assets/index.d66f208f.js","assets/index.61b80b11.js","assets/index.45ba5598.js","assets/Form.1bbfaffe.js","assets/index.c83fdb66.js","assets/index.e5a8441b.js","assets/TabPane.76684559.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.6cb14cfb.js"),["assets/Workflow.6cb14cfb.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/icons.4891c9af.js","assets/NavbarControls.627c81d6.js","assets/popupNotifcation.bed10a8d.js","assets/asyncComputed.76da9d27.js","assets/index.8f78b824.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.1dc9031f.js","assets/NavbarControls.a18a0f0f.css","assets/schema.1b1eda6c.js","assets/index.cf4c23b9.js","assets/metadata.85fdf360.js","assets/index.c83fdb66.js","assets/TabPane.76684559.js","assets/hasIn.ee379a91.js","assets/index.e5a8441b.js","assets/Workflow.956bdfc6.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.93068df5.js"),["assets/WorkflowEditor.93068df5.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/metadata.85fdf360.js","assets/icons.4891c9af.js","assets/schema.1b1eda6c.js","assets/index.cf4c23b9.js","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/index.d9f25a92.js","assets/isNumeric.75337b1e.js","assets/index.e5a8441b.js","assets/Text.f6fcaa4e.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/Link.4e11790d.js","assets/Card.0afa35b1.js","assets/index.3f6988e4.js","assets/TabPane.76684559.js","assets/WorkflowEditor.8d0f933a.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.8e298d29.js"),["assets/WorkflowKanban.8e298d29.js","assets/ant-design.5e9937d0.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/asyncComputed.76da9d27.js","assets/log.b70b165c.js","assets/index.2a5da7a4.js","assets/gateway.ffda3435.js","assets/authorManager.d7437888.js","assets/log.6c2e406b.css","assets/index.81d155fb.js","assets/index.cf4c23b9.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/metadata.85fdf360.js","assets/icons.4891c9af.js","assets/index.ae74c6e1.js","assets/index.cbe0e23a.js","assets/isNumeric.75337b1e.js","assets/index.45ba5598.js","assets/index.d66f208f.js","assets/index.e5a8441b.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.38a59d96.js","assets/Form.1bbfaffe.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/workspaces.ad653614.js","assets/url.73b2c763.js","assets/index.3cbf1483.js","assets/index.d9f25a92.js","assets/Card.0afa35b1.js","assets/index.3f6988e4.js","assets/TabPane.76684559.js","assets/ExpandOutlined.2dbf3416.js","assets/WorkflowKanban.bcbd9b98.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.2a17ecbc.js"),["assets/Settings.2a17ecbc.js","assets/NavbarControls.627c81d6.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/popupNotifcation.bed10a8d.js","assets/asyncComputed.76da9d27.js","assets/index.8f78b824.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.1dc9031f.js","assets/NavbarControls.a18a0f0f.css","assets/TabPane.76684559.js","assets/hasIn.ee379a91.js","assets/index.c83fdb66.js","assets/Settings.792166c1.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.06937d31.js"),["assets/StyleEditor.06937d31.js","assets/asyncComputed.76da9d27.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/CircularLoading.24ee9bcb.js","assets/CircularLoading.f81b57b4.css","assets/icons.4891c9af.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.caf444b3.js","assets/PlayerNavbar.965c381a.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.2b8abdf7.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.e5a8441b.js","assets/Form.1bbfaffe.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.b05b8cba.js"),["assets/SidebarEditor.b05b8cba.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e6acec1.js","assets/ant-design.5e9937d0.js","assets/index.25d8c967.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/index.13094d23.js","assets/Link.4e11790d.js","assets/SaveButton.13ece1cb.css","assets/index.e5a8441b.js","assets/index.61b80b11.js","assets/index.cc0d4a13.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/workspaces.ad653614.js","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js","assets/url.73b2c763.js","assets/asyncComputed.76da9d27.js","assets/CircularLoading.24ee9bcb.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.caf444b3.js","assets/PlayerNavbar.965c381a.js","assets/icons.4891c9af.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.2b8abdf7.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.1bbfaffe.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.a272b026.js"),["assets/RequirementsEditor.a272b026.js","assets/asyncComputed.76da9d27.js","assets/outputWidgets.ddb799f6.js","assets/outputWidgets.3c848cd5.css","assets/icons.4891c9af.js","assets/CrudView.a47b447d.js","assets/Title.7f286e0a.js","assets/Text.f6fcaa4e.js","assets/FormItem.38b8c259.js","assets/hasIn.ee379a91.js","assets/Form.1bbfaffe.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4dae4dfe.js","assets/router.eb6880d4.js","assets/authorManager.d7437888.js","assets/index.ae74c6e1.js","assets/url.73b2c763.js","assets/index.1dc9031f.js","assets/index.45ba5598.js","assets/index.61b80b11.js","assets/CrudView.ec0f092c.css","assets/record.888fd2b8.js","assets/pubsub.e6957d89.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});g.init(),I(e,a),e.use(a),e.use(P),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.525686bf.js.map
