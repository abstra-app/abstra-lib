import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f,u as E,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P as y,C as P,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.5236f452.js";import{u as S}from"./index.1c47a5bc.js";import{r as W,s as C}from"./index.32a4944b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="89410930-f18c-48d8-88be-8273113e4f4c",e._sentryDebugIdIdentifier="sentry-dbid-89410930-f18c-48d8-88be-8273113e4f4c")}catch{}})();const a=_(!1),x=()=>{window.innerWidth<780?a.value=!0:a.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(i,j)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[f(s)])]),_:1})}}});const n=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.4e5191a4.js"),["assets/Home.4e5191a4.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.7de298e5.js"),["assets/Workspace.7de298e5.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/logo.084e5d7c.js","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.299f8370.js","assets/asyncComputed.e1308c1a.js","assets/index.32a4944b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/index.2932688c.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/popupNotifcation.db8c99c9.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/index.cf2b030a.js","assets/NavbarControls.d196f6d1.css","assets/index.2eefabd2.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.7caff762.js"),["assets/Scripts.7caff762.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/forms.8f08f132.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/jobs.d6e22f23.js","assets/workspaces.b84e82c8.js","assets/url.efe60cd3.js","assets/scripts.5a82d184.js","assets/asyncComputed.e1308c1a.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/icons.fa6f77f2.js","assets/Text.8bfc9947.js","assets/index.cf2b030a.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/Title.0774fc0e.js","assets/validations.4d0250f2.js","assets/string.e8d72623.js","assets/FormItem.24f986f1.js","assets/index.0cd7809d.js","assets/Form.57dea4ba.js","assets/index.2932688c.js","assets/index.39780106.js","assets/Link.a9d8fe93.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.f8437ff8.js"),["assets/FormEditor.f8437ff8.js","assets/FormRunner.c256df83.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/url.efe60cd3.js","assets/storage.5d2f2a07.js","assets/pubsub.89e80a8d.js","assets/jwt-decode.esm.74bd4619.js","assets/index.32a4944b.js","assets/icons.fa6f77f2.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.0d92a956.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.325313eb.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.eaf0391a.js","assets/WidgetsFrame.97ae601d.css","assets/index.2ad9ba0b.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/index.39780106.js","assets/Text.8bfc9947.js","assets/Link.a9d8fe93.js","assets/Title.0774fc0e.js","assets/FormRunner.8ff3f1ac.css","assets/SourceCode.eb63d5f1.js","assets/uuid.da0a34e1.js","assets/NavbarControls.299f8370.js","assets/asyncComputed.e1308c1a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/SaveButton.13ece1cb.css","assets/index.2932688c.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/popupNotifcation.db8c99c9.js","assets/index.cf2b030a.js","assets/NavbarControls.d196f6d1.css","assets/jobs.d6e22f23.js","assets/scripts.5a82d184.js","assets/validations.4d0250f2.js","assets/string.e8d72623.js","assets/FormItem.24f986f1.js","assets/toggleHighContrast.e1e8a959.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.bb7637cb.css","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/forms.8f08f132.js","assets/Form.57dea4ba.js","assets/index.e103a33c.js","assets/ExpandOutlined.1646dbe2.js","assets/index.2eefabd2.js","assets/FormEditor.80dd403e.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.2ff14145.js"),["assets/FormPreview.2ff14145.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.c256df83.js","assets/url.efe60cd3.js","assets/storage.5d2f2a07.js","assets/pubsub.89e80a8d.js","assets/jwt-decode.esm.74bd4619.js","assets/index.32a4944b.js","assets/icons.fa6f77f2.js","assets/PlayerNavbar.0d92a956.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.325313eb.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.eaf0391a.js","assets/WidgetsFrame.97ae601d.css","assets/index.2ad9ba0b.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/index.39780106.js","assets/Text.8bfc9947.js","assets/Link.a9d8fe93.js","assets/Title.0774fc0e.js","assets/FormRunner.8ff3f1ac.css","assets/asyncComputed.e1308c1a.js","assets/forms.8f08f132.js","assets/record.205a12dc.js","assets/workspaces.b84e82c8.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.ef0a8a83.js"),["assets/JobEditor.ef0a8a83.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/jobs.d6e22f23.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/workspaces.b84e82c8.js","assets/url.efe60cd3.js","assets/SourceCode.eb63d5f1.js","assets/uuid.da0a34e1.js","assets/icons.fa6f77f2.js","assets/storage.5d2f2a07.js","assets/NavbarControls.299f8370.js","assets/asyncComputed.e1308c1a.js","assets/index.32a4944b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/index.2932688c.js","assets/popupNotifcation.db8c99c9.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/index.cf2b030a.js","assets/NavbarControls.d196f6d1.css","assets/scripts.5a82d184.js","assets/validations.4d0250f2.js","assets/string.e8d72623.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/toggleHighContrast.e1e8a959.js","assets/toggleHighContrast.30d77c87.css","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.45a90672.js","assets/index.71de7f8b.js","assets/index.e103a33c.js","assets/dayjs.46fd4217.js","assets/index.3cbf9cd3.js","assets/Form.57dea4ba.js","assets/index.2eefabd2.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.4d313a15.js"),["assets/HookEditor.4d313a15.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.eb63d5f1.js","assets/uuid.da0a34e1.js","assets/icons.fa6f77f2.js","assets/storage.5d2f2a07.js","assets/NavbarControls.299f8370.js","assets/asyncComputed.e1308c1a.js","assets/index.32a4944b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/index.2932688c.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/popupNotifcation.db8c99c9.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/index.cf2b030a.js","assets/NavbarControls.d196f6d1.css","assets/jobs.d6e22f23.js","assets/scripts.5a82d184.js","assets/validations.4d0250f2.js","assets/string.e8d72623.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/toggleHighContrast.e1e8a959.js","assets/toggleHighContrast.30d77c87.css","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.45a90672.js","assets/index.948ee38c.js","assets/CollapsePanel.5e5c8cad.js","assets/index.6472f5a1.js","assets/index.ce60cecb.js","assets/index.e103a33c.js","assets/Form.57dea4ba.js","assets/index.2eefabd2.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.c8454e77.js"),["assets/Workflow.c8454e77.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/icons.fa6f77f2.js","assets/NavbarControls.299f8370.js","assets/asyncComputed.e1308c1a.js","assets/index.32a4944b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/index.2932688c.js","assets/popupNotifcation.db8c99c9.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/index.cf2b030a.js","assets/NavbarControls.d196f6d1.css","assets/schema.845e8764.js","assets/index.cf4c23b9.js","assets/metadata.d0f0c1ae.js","assets/validations.4d0250f2.js","assets/string.e8d72623.js","assets/index.2eefabd2.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.58146666.js"),["assets/WorkflowEditor.58146666.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/metadata.d0f0c1ae.js","assets/icons.fa6f77f2.js","assets/schema.845e8764.js","assets/index.cf4c23b9.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/validations.4d0250f2.js","assets/string.e8d72623.js","assets/index.8c21ae34.js","assets/isNumeric.75337b1e.js","assets/index.cf2b030a.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Link.a9d8fe93.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.87ecc5a2.js"),["assets/WorkflowKanban.87ecc5a2.js","assets/ant-design.7af204c7.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/asyncComputed.e1308c1a.js","assets/metadata.d0f0c1ae.js","assets/icons.fa6f77f2.js","assets/index.cf2b030a.js","assets/index.1c47a5bc.js","assets/index.73bb30c1.js","assets/index.8c21ae34.js","assets/isNumeric.75337b1e.js","assets/Timeline.fd8f00e3.js","assets/index.6ae3eff7.js","assets/index.e103a33c.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/index.ce60cecb.js","assets/CollapsePanel.5e5c8cad.js","assets/Link.a9d8fe93.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.7565de61.js","assets/Form.57dea4ba.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/scripts.5a82d184.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/ExpandOutlined.1646dbe2.js","assets/WorkflowKanban.f13d6c6b.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.8a6b228f.js"),["assets/Settings.8a6b228f.js","assets/NavbarControls.299f8370.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e1308c1a.js","assets/index.32a4944b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/index.2932688c.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/popupNotifcation.db8c99c9.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/icons.fa6f77f2.js","assets/index.cf2b030a.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/index.2eefabd2.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.9c5e106d.js"),["assets/StyleEditor.9c5e106d.js","assets/asyncComputed.e1308c1a.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/icons.fa6f77f2.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.fe9dfdee.js","assets/PlayerNavbar.0d92a956.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.eaf0391a.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.cf2b030a.js","assets/Form.57dea4ba.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.51ff88c2.js"),["assets/SidebarEditor.51ff88c2.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/index.cf2b030a.js","assets/index.6472f5a1.js","assets/index.3cbf9cd3.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/workspaces.b84e82c8.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/url.efe60cd3.js","assets/asyncComputed.e1308c1a.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.fe9dfdee.js","assets/PlayerNavbar.0d92a956.js","assets/icons.fa6f77f2.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.eaf0391a.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.57dea4ba.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.96baa08b.js"),["assets/RequirementsEditor.96baa08b.js","assets/asyncComputed.e1308c1a.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/router.4cfaf83f.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});n.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await C();const e=A({render:()=>V(B)});g.init(),I(e,n),e.use(n),e.use(y),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.a60b79bd.js.map
