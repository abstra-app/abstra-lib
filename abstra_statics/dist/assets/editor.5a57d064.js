import{r as _,d as m,o as d,a as p,b as c,c as u,w as l,e as h,f,u as E,A as v,g as w,h as b,_ as t,i as A,T as I,j as P,P as y,C as g,M as k,I as D,s as R,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.b70b72c1.js";import{u as W}from"./index.ef33ff64.js";import{r as S,u as C,s as x}from"./index.151e1899.js";import"./pubsub.d6047a30.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e0fea88d-2536-4884-a787-92010125911e",e._sentryDebugIdIdentifier="sentry-dbid-e0fea88d-2536-4884-a787-92010125911e")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),u(E(v),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[h("div",B,[f(s)])]),_:1})}}});const a=w({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.3ba9779b.js"),["assets/Home.3ba9779b.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.88224b62.js"),["assets/Workspace.88224b62.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/icons.5208d8fc.js","assets/logo.084e5d7c.js","assets/BaseLayout.4d2a9a6d.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.f3ff726a.js","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/popupNotifcation.baab3c25.js","assets/asyncComputed.c614e26c.js","assets/index.151e1899.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1ed9d51.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/index.68986f62.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/index.59fa2c7a.js","assets/Link.331d3e13.js","assets/Title.6f7cf5fa.js","assets/NavbarControls.a18a0f0f.css","assets/index.894ef36e.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.fff358dd.js"),["assets/Scripts.fff358dd.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/forms.1e45cf05.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/hooks.a83aaa25.js","assets/scripts.fc9fed3c.js","assets/workspaces.2fd01436.js","assets/url.e25f7878.js","assets/asyncComputed.c614e26c.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/icons.5208d8fc.js","assets/index.9c848a49.js","assets/index.c64672f3.js","assets/Card.9fa52499.js","assets/index.6002e9d3.js","assets/TabPane.7a0e963e.js","assets/hasIn.b81d7d09.js","assets/Form.d2e5c980.js","assets/FormItem.5231dff9.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1ed9d51.js","assets/index.59fa2c7a.js","assets/Link.331d3e13.js","assets/Title.6f7cf5fa.js","assets/string.50e7c914.js","assets/index.68986f62.js","assets/Scripts.a432934a.css"]),meta:{title:"Abstra - Scripts"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.8acc197a.js"),["assets/StyleEditor.8acc197a.js","assets/asyncComputed.c614e26c.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/CircularLoading.d65427b4.js","assets/CircularLoading.f81b57b4.css","assets/icons.5208d8fc.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.109f220e.js","assets/PlayerNavbar.a1ef0657.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.eabe18f2.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/index.93366972.js","assets/Title.6f7cf5fa.js","assets/Base.47be15b4.js","assets/Form.d2e5c980.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.330f8c86.js"),["assets/SidebarEditor.330f8c86.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/index.f691bcfc.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/index.93366972.js","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/asyncComputed.c614e26c.js","assets/CircularLoading.d65427b4.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.109f220e.js","assets/PlayerNavbar.a1ef0657.js","assets/icons.5208d8fc.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.eabe18f2.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/Title.6f7cf5fa.js","assets/Base.47be15b4.js","assets/Form.d2e5c980.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"requirements",component:()=>t(()=>import("./RequirementsEditor.3c735469.js"),["assets/RequirementsEditor.3c735469.js","assets/asyncComputed.c614e26c.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/icons.5208d8fc.js","assets/CrudView.6285bc0d.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/Form.d2e5c980.js","assets/Modal.9e982e32.js","assets/router.e5dc8927.js","assets/index.ef33ff64.js","assets/url.e25f7878.js","assets/index.e12e1f7e.js","assets/index.daccc9d3.js","assets/Title.6f7cf5fa.js","assets/index.68986f62.js","assets/index.93366972.js","assets/CrudView.1d309d6a.css","assets/record.4691c304.js","assets/pubsub.d6047a30.js"]),meta:{title:"Abstra - Requirements"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.073905a2.js"),["assets/FormEditor.073905a2.js","assets/FormRunner.835904f8.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/url.e25f7878.js","assets/index.151e1899.js","assets/pubsub.d6047a30.js","assets/icons.5208d8fc.js","assets/CircularLoading.d65427b4.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.a1ef0657.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.b979489b.js","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.eabe18f2.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.f3130dde.css","assets/RuntimeCommonSettings.6b59dd10.js","assets/uuid.f777b00a.js","assets/NavbarControls.f3ff726a.js","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/popupNotifcation.baab3c25.js","assets/asyncComputed.c614e26c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1ed9d51.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/index.68986f62.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/index.59fa2c7a.js","assets/Link.331d3e13.js","assets/Title.6f7cf5fa.js","assets/NavbarControls.a18a0f0f.css","assets/scripts.fc9fed3c.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/index.daccc9d3.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/BaseLayout.4d2a9a6d.js","assets/BaseLayout.881bfa61.css","assets/forms.1e45cf05.js","assets/index.da5a1ca0.js","assets/CollapsePanel.e8c31156.js","assets/index.9c848a49.js","assets/index.e12e1f7e.js","assets/index.93366972.js","assets/Form.d2e5c980.js","assets/TabPane.7a0e963e.js","assets/index.6002e9d3.js","assets/ExpandOutlined.0d81ac0c.js","assets/index.894ef36e.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.5ccfa510.js"),["assets/FormPreview.5ccfa510.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.d65427b4.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.835904f8.js","assets/url.e25f7878.js","assets/index.151e1899.js","assets/pubsub.d6047a30.js","assets/icons.5208d8fc.js","assets/PlayerNavbar.a1ef0657.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.b979489b.js","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.eabe18f2.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.f3130dde.css","assets/asyncComputed.c614e26c.js","assets/forms.1e45cf05.js","assets/record.4691c304.js","assets/workspaces.2fd01436.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.1c3ed98d.js"),["assets/JobEditor.1c3ed98d.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/scripts.fc9fed3c.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/RuntimeCommonSettings.6b59dd10.js","assets/uuid.f777b00a.js","assets/icons.5208d8fc.js","assets/NavbarControls.f3ff726a.js","assets/workspaces.2fd01436.js","assets/url.e25f7878.js","assets/popupNotifcation.baab3c25.js","assets/asyncComputed.c614e26c.js","assets/index.151e1899.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1ed9d51.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/index.68986f62.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/index.59fa2c7a.js","assets/Link.331d3e13.js","assets/Title.6f7cf5fa.js","assets/NavbarControls.a18a0f0f.css","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/index.daccc9d3.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/BaseLayout.4d2a9a6d.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.57db0ad5.js","assets/index.5d244498.js","assets/index.e12e1f7e.js","assets/dayjs.cd6b9deb.js","assets/index.f691bcfc.js","assets/Form.d2e5c980.js","assets/index.894ef36e.js","assets/TabPane.7a0e963e.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.39b777ae.js"),["assets/HookEditor.39b777ae.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/RuntimeCommonSettings.6b59dd10.js","assets/uuid.f777b00a.js","assets/icons.5208d8fc.js","assets/NavbarControls.f3ff726a.js","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/popupNotifcation.baab3c25.js","assets/asyncComputed.c614e26c.js","assets/index.151e1899.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1ed9d51.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/index.68986f62.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/index.59fa2c7a.js","assets/Link.331d3e13.js","assets/Title.6f7cf5fa.js","assets/NavbarControls.a18a0f0f.css","assets/scripts.fc9fed3c.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/index.daccc9d3.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/hooks.a83aaa25.js","assets/BaseLayout.4d2a9a6d.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.57db0ad5.js","assets/index.107b0bf3.js","assets/CollapsePanel.e8c31156.js","assets/index.93366972.js","assets/index.e12e1f7e.js","assets/Form.d2e5c980.js","assets/index.894ef36e.js","assets/TabPane.7a0e963e.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.998383ba.js"),["assets/Workflow.998383ba.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/icons.5208d8fc.js","assets/NavbarControls.f3ff726a.js","assets/popupNotifcation.baab3c25.js","assets/asyncComputed.c614e26c.js","assets/index.151e1899.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f1ed9d51.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3c0e9c89.js","assets/ant-design.4ae137bb.js","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/SaveButton.13ece1cb.css","assets/index.68986f62.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/index.59fa2c7a.js","assets/Link.331d3e13.js","assets/Title.6f7cf5fa.js","assets/NavbarControls.a18a0f0f.css","assets/schema.6ef1612c.js","assets/index.cf4c23b9.js","assets/index.894ef36e.js","assets/TabPane.7a0e963e.js","assets/hasIn.b81d7d09.js","assets/index.9c848a49.js","assets/Workflow.956bdfc6.css"]),meta:{title:"Abstra - Workflow"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.351db241.js"),["assets/WorkflowEditor.351db241.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/schema.6ef1612c.js","assets/index.cf4c23b9.js","assets/icons.5208d8fc.js","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/Link.331d3e13.js","assets/Base.47be15b4.js","assets/index.59fa2c7a.js","assets/Text.db464c8a.js","assets/Title.6f7cf5fa.js","assets/index.c1c1fa90.js","assets/isNumeric.75337b1e.js","assets/index.9c848a49.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/Card.9fa52499.js","assets/index.6002e9d3.js","assets/TabPane.7a0e963e.js","assets/WorkflowEditor.f5539571.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.71900a8d.js"),["assets/WorkflowKanban.71900a8d.js","assets/ant-design.4ae137bb.js","assets/outputWidgets.b70b72c1.js","assets/outputWidgets.3c848cd5.css","assets/index.db517abc.js","assets/Modal.9e982e32.js","assets/asyncComputed.c614e26c.js","assets/workspaces.2fd01436.js","assets/record.4691c304.js","assets/pubsub.d6047a30.js","assets/url.e25f7878.js","assets/index.3d4f04c7.js","assets/isNumeric.75337b1e.js","assets/index.e12e1f7e.js","assets/Text.db464c8a.js","assets/Base.47be15b4.js","assets/index.107b0bf3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2b3fc470.js","assets/CollapsePanel.e8c31156.js","assets/Form.d2e5c980.js","assets/FormItem.5231dff9.js","assets/hasIn.b81d7d09.js","assets/index.0a62292c.js","assets/index.c1c1fa90.js","assets/Card.9fa52499.js","assets/index.6002e9d3.js","assets/TabPane.7a0e963e.js","assets/ExpandOutlined.0d81ac0c.js","assets/index.9c848a49.js","assets/WorkflowKanban.f5953d0c.css"])}]}]},...S],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",k),e.component("Icon",D),e.component("Message",R),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.5a57d064.js.map
