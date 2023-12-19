import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f,u as E,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P,C as y,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.38a8ba6d.js";import{u as S}from"./index.8b3fd40e.js";import{r as W,u as C,s as x}from"./index.3243a7b6.js";import"./pubsub.23b14df7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4f2bde92-c16a-4784-85b5-a864f579247c",e._sentryDebugIdIdentifier="sentry-dbid-4f2bde92-c16a-4784-85b5-a864f579247c")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",B,[f(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.5eaae650.js"),["assets/Home.5eaae650.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.43d6a9ca.js"),["assets/Workspace.43d6a9ca.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/icons.4ae4a9c5.js","assets/logo.084e5d7c.js","assets/BaseLayout.32fd786f.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.e8acfe68.js","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/popupNotifcation.a4145a10.js","assets/asyncComputed.41d10d8a.js","assets/index.3243a7b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.0c02607f.js","assets/NavbarControls.a18a0f0f.css","assets/index.15b0d850.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.45d22389.js"),["assets/Scripts.45d22389.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/forms.eebe6478.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/validations.bb93f240.js","assets/string.5879301e.js","assets/workspaces.213ecf20.js","assets/url.1a877628.js","assets/asyncComputed.41d10d8a.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/icons.4ae4a9c5.js","assets/index.28377f0e.js","assets/index.8117f05d.js","assets/Card.c4ec24e0.js","assets/index.11a8cbce.js","assets/TabPane.6742aa67.js","assets/hasIn.29d88859.js","assets/Form.a08a590c.js","assets/FormItem.4673de87.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/index.0c02607f.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/Scripts.ed1d9dcc.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.073d7e70.js"),["assets/FormEditor.073d7e70.js","assets/FormRunner.c7efdd12.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/url.1a877628.js","assets/index.3243a7b6.js","assets/pubsub.23b14df7.js","assets/icons.4ae4a9c5.js","assets/CircularLoading.e14f33d5.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.16bcf7de.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.62b4215b.js","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.176e928e.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.c4b9e1f8.css","assets/SourceCode.6839fb43.js","assets/uuid.c4c4dd2f.js","assets/NavbarControls.e8acfe68.js","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/popupNotifcation.a4145a10.js","assets/asyncComputed.41d10d8a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.0c02607f.js","assets/NavbarControls.a18a0f0f.css","assets/validations.bb93f240.js","assets/string.5879301e.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/toggleHighContrast.d3736a6e.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.32fd786f.js","assets/BaseLayout.881bfa61.css","assets/forms.eebe6478.js","assets/index.28377f0e.js","assets/Form.a08a590c.js","assets/TabPane.6742aa67.js","assets/index.11a8cbce.js","assets/ExpandOutlined.08a91c70.js","assets/index.15b0d850.js","assets/FormEditor.043cbd07.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.ba86959b.js"),["assets/FormPreview.ba86959b.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.e14f33d5.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.c7efdd12.js","assets/url.1a877628.js","assets/index.3243a7b6.js","assets/pubsub.23b14df7.js","assets/icons.4ae4a9c5.js","assets/PlayerNavbar.16bcf7de.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.62b4215b.js","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.176e928e.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.c4b9e1f8.css","assets/asyncComputed.41d10d8a.js","assets/forms.eebe6478.js","assets/record.be73334f.js","assets/workspaces.213ecf20.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.b8df2523.js"),["assets/JobEditor.b8df2523.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/validations.bb93f240.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/string.5879301e.js","assets/workspaces.213ecf20.js","assets/url.1a877628.js","assets/SourceCode.6839fb43.js","assets/uuid.c4c4dd2f.js","assets/icons.4ae4a9c5.js","assets/NavbarControls.e8acfe68.js","assets/popupNotifcation.a4145a10.js","assets/asyncComputed.41d10d8a.js","assets/index.3243a7b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.0c02607f.js","assets/NavbarControls.a18a0f0f.css","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/toggleHighContrast.d3736a6e.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.32fd786f.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fe8a7ba2.js","assets/index.ad49743e.js","assets/index.91017c21.js","assets/dayjs.02d1eb45.js","assets/index.97909bdc.js","assets/Form.a08a590c.js","assets/index.15b0d850.js","assets/index.28377f0e.js","assets/TabPane.6742aa67.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.07933a70.js"),["assets/HookEditor.07933a70.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.6839fb43.js","assets/uuid.c4c4dd2f.js","assets/icons.4ae4a9c5.js","assets/NavbarControls.e8acfe68.js","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/popupNotifcation.a4145a10.js","assets/asyncComputed.41d10d8a.js","assets/index.3243a7b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.0c02607f.js","assets/NavbarControls.a18a0f0f.css","assets/validations.bb93f240.js","assets/string.5879301e.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/toggleHighContrast.d3736a6e.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2243f7f4.css","assets/BaseLayout.32fd786f.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fe8a7ba2.js","assets/index.2c794cfe.js","assets/index.40179dc5.js","assets/index.df8e3842.js","assets/index.91017c21.js","assets/Form.a08a590c.js","assets/index.15b0d850.js","assets/index.28377f0e.js","assets/TabPane.6742aa67.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.e3d9edd2.js"),["assets/Workflow.e3d9edd2.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/icons.4ae4a9c5.js","assets/NavbarControls.e8acfe68.js","assets/popupNotifcation.a4145a10.js","assets/asyncComputed.41d10d8a.js","assets/index.3243a7b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.0c02607f.js","assets/NavbarControls.a18a0f0f.css","assets/schema.d1053356.js","assets/index.cf4c23b9.js","assets/metadata.c133d271.js","assets/index.15b0d850.js","assets/TabPane.6742aa67.js","assets/hasIn.29d88859.js","assets/index.28377f0e.js","assets/Workflow.956bdfc6.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.686fd981.js"),["assets/WorkflowEditor.686fd981.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/metadata.c133d271.js","assets/icons.4ae4a9c5.js","assets/schema.d1053356.js","assets/index.cf4c23b9.js","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/index.f785d531.js","assets/isNumeric.75337b1e.js","assets/index.28377f0e.js","assets/Text.1048f348.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/Link.a1ff2f16.js","assets/Card.c4ec24e0.js","assets/index.11a8cbce.js","assets/TabPane.6742aa67.js","assets/WorkflowEditor.8d0f933a.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.9c30b093.js"),["assets/WorkflowKanban.9c30b093.js","assets/ant-design.16790220.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/asyncComputed.41d10d8a.js","assets/log.71d960fe.js","assets/index.f764705c.js","assets/gateway.77dbab2f.js","assets/authorManager.b6ced178.js","assets/log.6c2e406b.css","assets/index.56107642.js","assets/index.cf4c23b9.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/metadata.c133d271.js","assets/icons.4ae4a9c5.js","assets/index.8b3fd40e.js","assets/index.e041a53e.js","assets/isNumeric.75337b1e.js","assets/index.91017c21.js","assets/index.40179dc5.js","assets/index.28377f0e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a6aaf6f8.js","assets/Form.a08a590c.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/workspaces.213ecf20.js","assets/url.1a877628.js","assets/index.e61e39a3.js","assets/index.f785d531.js","assets/Card.c4ec24e0.js","assets/index.11a8cbce.js","assets/TabPane.6742aa67.js","assets/ExpandOutlined.08a91c70.js","assets/WorkflowKanban.bcbd9b98.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.97311c2a.js"),["assets/Settings.97311c2a.js","assets/NavbarControls.e8acfe68.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/popupNotifcation.a4145a10.js","assets/asyncComputed.41d10d8a.js","assets/index.3243a7b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.0c02607f.js","assets/NavbarControls.a18a0f0f.css","assets/TabPane.6742aa67.js","assets/hasIn.29d88859.js","assets/index.15b0d850.js","assets/Settings.792166c1.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.a226ede8.js"),["assets/StyleEditor.a226ede8.js","assets/asyncComputed.41d10d8a.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/CircularLoading.e14f33d5.js","assets/CircularLoading.f81b57b4.css","assets/icons.4ae4a9c5.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.627f0b67.js","assets/PlayerNavbar.16bcf7de.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.176e928e.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.28377f0e.js","assets/Form.a08a590c.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.4b3fd9eb.js"),["assets/SidebarEditor.4b3fd9eb.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.816a7439.js","assets/ant-design.16790220.js","assets/index.2785839f.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/index.24f811cd.js","assets/Link.a1ff2f16.js","assets/SaveButton.13ece1cb.css","assets/index.28377f0e.js","assets/index.df8e3842.js","assets/index.97909bdc.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/workspaces.213ecf20.js","assets/record.be73334f.js","assets/pubsub.23b14df7.js","assets/url.1a877628.js","assets/asyncComputed.41d10d8a.js","assets/CircularLoading.e14f33d5.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.627f0b67.js","assets/PlayerNavbar.16bcf7de.js","assets/icons.4ae4a9c5.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.176e928e.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.a08a590c.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.a76d5ddf.js"),["assets/RequirementsEditor.a76d5ddf.js","assets/asyncComputed.41d10d8a.js","assets/outputWidgets.38a8ba6d.js","assets/outputWidgets.3c848cd5.css","assets/icons.4ae4a9c5.js","assets/CrudView.ba56980c.js","assets/Title.ecd0d354.js","assets/Text.1048f348.js","assets/FormItem.4673de87.js","assets/hasIn.29d88859.js","assets/Form.a08a590c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js","assets/router.558347d5.js","assets/authorManager.b6ced178.js","assets/index.8b3fd40e.js","assets/url.1a877628.js","assets/index.0c02607f.js","assets/index.91017c21.js","assets/index.df8e3842.js","assets/CrudView.ec0f092c.css","assets/record.be73334f.js","assets/pubsub.23b14df7.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});g.init(),I(e,a),e.use(a),e.use(P),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.7446bc3f.js.map
