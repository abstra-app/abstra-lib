import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f as E,u as f,A as w,g as v,h as b,_ as t,i as A,T as g,j as I,P,C as y,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.333243b5.js";import{u as S}from"./index.b6f16b4f.js";import{r as W,u as C,s as x}from"./index.48ab77c8.js";import"./pubsub.6843f3da.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6dc78e65-6123-46e9-a196-87197450c583",e._sentryDebugIdIdentifier="sentry-dbid-6dc78e65-6123-46e9-a196-87197450c583")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),l(f(w),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",B,[E(s)])]),_:1})}}});const a=v({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.4fb83436.js"),["assets/Home.4fb83436.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.0fe63f56.js"),["assets/Workspace.0fe63f56.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/icons.ec7238f6.js","assets/logo.084e5d7c.js","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.d18ea1e3.js","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/popupNotifcation.ea04b707.js","assets/asyncComputed.916d2e38.js","assets/index.48ab77c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.be8066b9.js","assets/NavbarControls.a18a0f0f.css","assets/index.f0ba07f5.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.24221531.js"),["assets/Scripts.24221531.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/forms.73b441a3.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/validations.0ebe149e.js","assets/string.41e06e1f.js","assets/workspaces.76ae478a.js","assets/url.2fbcdffc.js","assets/asyncComputed.916d2e38.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/icons.ec7238f6.js","assets/index.597ee428.js","assets/index.1634a912.js","assets/Card.a3469205.js","assets/index.58647876.js","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/FormItem.413481bf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/index.be8066b9.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/Scripts.ed1d9dcc.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.5b9492dd.js"),["assets/FormEditor.5b9492dd.js","assets/FormRunner.07479c64.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/url.2fbcdffc.js","assets/index.48ab77c8.js","assets/pubsub.6843f3da.js","assets/icons.ec7238f6.js","assets/CircularLoading.ca74c119.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.d99c0531.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.2c38ff88.js","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.64930db0.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.c4b9e1f8.css","assets/SourceCode.cd6caa7c.js","assets/uuid.79e6386b.js","assets/NavbarControls.d18ea1e3.js","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/popupNotifcation.ea04b707.js","assets/asyncComputed.916d2e38.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.be8066b9.js","assets/NavbarControls.a18a0f0f.css","assets/validations.0ebe149e.js","assets/string.41e06e1f.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/toggleHighContrast.352551aa.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/forms.73b441a3.js","assets/index.597ee428.js","assets/Form.950f385f.js","assets/TabPane.11abb547.js","assets/index.58647876.js","assets/ExpandOutlined.9407071f.js","assets/index.f0ba07f5.js","assets/FormEditor.043cbd07.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.3690139a.js"),["assets/FormPreview.3690139a.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.ca74c119.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.07479c64.js","assets/url.2fbcdffc.js","assets/index.48ab77c8.js","assets/pubsub.6843f3da.js","assets/icons.ec7238f6.js","assets/PlayerNavbar.d99c0531.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.2c38ff88.js","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.64930db0.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.c4b9e1f8.css","assets/asyncComputed.916d2e38.js","assets/forms.73b441a3.js","assets/record.3365b440.js","assets/workspaces.76ae478a.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.9b2cab68.js"),["assets/JobEditor.9b2cab68.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/validations.0ebe149e.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/string.41e06e1f.js","assets/workspaces.76ae478a.js","assets/url.2fbcdffc.js","assets/SourceCode.cd6caa7c.js","assets/uuid.79e6386b.js","assets/icons.ec7238f6.js","assets/NavbarControls.d18ea1e3.js","assets/popupNotifcation.ea04b707.js","assets/asyncComputed.916d2e38.js","assets/index.48ab77c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.be8066b9.js","assets/NavbarControls.a18a0f0f.css","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/toggleHighContrast.352551aa.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.54c031de.js","assets/index.0e101a71.js","assets/index.7a3dbad5.js","assets/dayjs.0c6fdfd8.js","assets/index.6b99bb97.js","assets/Form.950f385f.js","assets/index.f0ba07f5.js","assets/index.597ee428.js","assets/TabPane.11abb547.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.38a69250.js"),["assets/HookEditor.38a69250.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.cd6caa7c.js","assets/uuid.79e6386b.js","assets/icons.ec7238f6.js","assets/NavbarControls.d18ea1e3.js","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/popupNotifcation.ea04b707.js","assets/asyncComputed.916d2e38.js","assets/index.48ab77c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.be8066b9.js","assets/NavbarControls.a18a0f0f.css","assets/validations.0ebe149e.js","assets/string.41e06e1f.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/toggleHighContrast.352551aa.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.54c031de.js","assets/index.8dc49b35.js","assets/index.12dbcf3c.js","assets/index.7e314b45.js","assets/index.7a3dbad5.js","assets/Form.950f385f.js","assets/index.f0ba07f5.js","assets/index.597ee428.js","assets/TabPane.11abb547.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.c3b51d5d.js"),["assets/Workflow.c3b51d5d.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/icons.ec7238f6.js","assets/NavbarControls.d18ea1e3.js","assets/popupNotifcation.ea04b707.js","assets/asyncComputed.916d2e38.js","assets/index.48ab77c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.be8066b9.js","assets/NavbarControls.a18a0f0f.css","assets/schema.84bd0c4a.js","assets/index.cf4c23b9.js","assets/index.f0ba07f5.js","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/index.597ee428.js","assets/Workflow.956bdfc6.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.1c19e174.js"),["assets/WorkflowEditor.1c19e174.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/schema.84bd0c4a.js","assets/index.cf4c23b9.js","assets/icons.ec7238f6.js","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/index.0fc4370c.js","assets/isNumeric.75337b1e.js","assets/index.597ee428.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Link.0ef9fe9c.js","assets/Card.a3469205.js","assets/index.58647876.js","assets/TabPane.11abb547.js","assets/WorkflowEditor.eae8d55a.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.f01f3058.js"),["assets/WorkflowKanban.f01f3058.js","assets/ant-design.d494077f.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/asyncComputed.916d2e38.js","assets/log.d431b0e1.js","assets/index.f1fc9225.js","assets/gateway.d354a11c.js","assets/authorManager.afcc9659.js","assets/log.6c2e406b.css","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/index.e33ba097.js","assets/isNumeric.75337b1e.js","assets/index.7a3dbad5.js","assets/index.12dbcf3c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6626792f.js","assets/Form.950f385f.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/workspaces.76ae478a.js","assets/url.2fbcdffc.js","assets/index.9961e9cd.js","assets/index.0fc4370c.js","assets/Card.a3469205.js","assets/index.58647876.js","assets/TabPane.11abb547.js","assets/ExpandOutlined.9407071f.js","assets/index.597ee428.js","assets/WorkflowKanban.bcbd9b98.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.18ccbf8c.js"),["assets/Settings.18ccbf8c.js","assets/NavbarControls.d18ea1e3.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/popupNotifcation.ea04b707.js","assets/asyncComputed.916d2e38.js","assets/index.48ab77c8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.be8066b9.js","assets/NavbarControls.a18a0f0f.css","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/index.f0ba07f5.js","assets/Settings.792166c1.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.54db3b94.js"),["assets/StyleEditor.54db3b94.js","assets/asyncComputed.916d2e38.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/CircularLoading.ca74c119.js","assets/CircularLoading.f81b57b4.css","assets/icons.ec7238f6.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.abcc28de.js","assets/PlayerNavbar.d99c0531.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.64930db0.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.597ee428.js","assets/Form.950f385f.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.67afdd37.js"),["assets/SidebarEditor.67afdd37.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/index.597ee428.js","assets/index.7e314b45.js","assets/index.6b99bb97.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/workspaces.76ae478a.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/url.2fbcdffc.js","assets/asyncComputed.916d2e38.js","assets/CircularLoading.ca74c119.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.abcc28de.js","assets/PlayerNavbar.d99c0531.js","assets/icons.ec7238f6.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.64930db0.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.950f385f.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.f7956442.js"),["assets/RequirementsEditor.f7956442.js","assets/asyncComputed.916d2e38.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/icons.ec7238f6.js","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/router.9264d3a7.js","assets/authorManager.afcc9659.js","assets/index.b6f16b4f.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/record.3365b440.js","assets/pubsub.6843f3da.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});g.init(),I(e,a),e.use(a),e.use(P),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.997b964f.js.map
