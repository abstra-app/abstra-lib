import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as f,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.eddbac36.js";import{u as W}from"./index.cc18f239.js";import{u as j}from"./index.9830a393.js";import"./pubsub.9aea5614.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="438f5a1f-2169-461c-811d-8e62cfb825cd",e._sentryDebugIdIdentifier="sentry-dbid-438f5a1f-2169-461c-811d-8e62cfb825cd")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(f(b),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.fb56511c.js"),["assets/Home.fb56511c.js","assets/Modal.761ee3d8.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.01d35bcb.js"),["assets/Workspace.01d35bcb.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/icons.08aaa24c.js","assets/Tooltip.94e52160.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.600b8f99.js","assets/workspaces.54224ba5.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js","assets/popupNotifcation.2580ac98.js","assets/asyncComputed.fbd351ba.js","assets/index.f428cf3a.js","assets/Title.7ca27be1.js","assets/index.b6a61078.js","assets/Form.f5163eed.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.bab34813.js","assets/BaseLayout.282f66f6.css","assets/index.1a0ec4ff.js","assets/index.31447910.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.a6146d77.js"),["assets/Forms.a6146d77.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/icons.08aaa24c.js","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d009f8f3.js","assets/index.f428cf3a.js","assets/Title.7ca27be1.js","assets/Form.f5163eed.js","assets/index.8318ec36.js","assets/index.7a28d537.js","assets/index.3475d619.js","assets/index.933610ff.js","assets/index.31447910.js","assets/ant-design.109b29f5.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.805a90c3.js"),["assets/Dashes.805a90c3.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/icons.08aaa24c.js","assets/asyncComputed.fbd351ba.js","assets/dashes.f8c3da60.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/index.cc18f239.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d009f8f3.js","assets/index.f428cf3a.js","assets/Title.7ca27be1.js","assets/Form.f5163eed.js","assets/index.8318ec36.js","assets/index.7a28d537.js","assets/index.3475d619.js","assets/index.933610ff.js","assets/index.31447910.js","assets/ant-design.109b29f5.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.62f48fec.js"),["assets/Jobs.62f48fec.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/icons.08aaa24c.js","assets/asyncComputed.fbd351ba.js","assets/jobs.ee7e6eb2.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d009f8f3.js","assets/index.f428cf3a.js","assets/Title.7ca27be1.js","assets/Form.f5163eed.js","assets/index.8318ec36.js","assets/index.7a28d537.js","assets/index.3475d619.js","assets/index.933610ff.js","assets/index.31447910.js","assets/ant-design.109b29f5.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.cdfdee58.js"),["assets/Hooks.cdfdee58.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/icons.08aaa24c.js","assets/asyncComputed.fbd351ba.js","assets/hooks.7f3d2eee.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d009f8f3.js","assets/index.f428cf3a.js","assets/Title.7ca27be1.js","assets/Form.f5163eed.js","assets/index.8318ec36.js","assets/index.7a28d537.js","assets/index.3475d619.js","assets/index.933610ff.js","assets/index.31447910.js","assets/ant-design.109b29f5.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.e6a60e38.js"),["assets/StyleEditor.e6a60e38.js","assets/asyncComputed.fbd351ba.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/workspaces.54224ba5.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/icons.08aaa24c.js","assets/index.2c51d0a8.js","assets/Title.7ca27be1.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/ant-design.109b29f5.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.3193637a.js","assets/PlayerNavbar.ef058b0b.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.cc18f239.js","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.933610ff.js","assets/Form.f5163eed.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.903e257e.js"),["assets/SidebarEditor.903e257e.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/index.b131e8f9.js","assets/Title.7ca27be1.js","assets/index.31447910.js","assets/index.933610ff.js","assets/workspaces.54224ba5.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/asyncComputed.fbd351ba.js","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/ant-design.109b29f5.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.3193637a.js","assets/PlayerNavbar.ef058b0b.js","assets/icons.08aaa24c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.cc18f239.js","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.f5163eed.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.d85262b6.js"),["assets/FormEditor.d85262b6.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/FormTester.vue_vue_type_script_setup_true_lang.d433ae25.js","assets/SmartConsole.41c65287.js","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/dashes.f8c3da60.js","assets/index.cc18f239.js","assets/hooks.7f3d2eee.js","assets/jobs.ee7e6eb2.js","assets/workspaces.54224ba5.js","assets/icons.08aaa24c.js","assets/Title.7ca27be1.js","assets/index.3475d619.js","assets/uuid.a7963699.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js","assets/SmartConsole.ed33cdbe.css","assets/Form.f5163eed.js","assets/broker.b662ddf3.js","assets/index.9830a393.js","assets/executeJs.b990b619.js","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.ef058b0b.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.894c5f7d.js","assets/Steps.998aa76d.css","assets/Modal.761ee3d8.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.b7eba10e.js","assets/broker.ac4594bd.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/ant-design.109b29f5.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.bab34813.js","assets/BaseLayout.282f66f6.css","assets/TabPane.05333dfb.js","assets/index.8b693270.js","assets/index.1a0ec4ff.js","assets/index.31447910.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.774be6e6.js"),["assets/FormPreview.774be6e6.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/broker.b662ddf3.js","assets/index.9830a393.js","assets/pubsub.9aea5614.js","assets/executeJs.b990b619.js","assets/icons.08aaa24c.js","assets/PlayerNavbar.ef058b0b.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.cc18f239.js","assets/Steps.894c5f7d.js","assets/Steps.998aa76d.css","assets/Modal.761ee3d8.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.b7eba10e.js","assets/broker.ac4594bd.css","assets/BackButton.2b63b75b.js","assets/BackButton.dd542746.css","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/activeRecord.64b754df.js","assets/workspaces.54224ba5.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.5ea48cfa.js"),["assets/JobEditor.5ea48cfa.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.41c65287.js","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/dashes.f8c3da60.js","assets/index.cc18f239.js","assets/hooks.7f3d2eee.js","assets/jobs.ee7e6eb2.js","assets/workspaces.54224ba5.js","assets/icons.08aaa24c.js","assets/Title.7ca27be1.js","assets/index.3475d619.js","assets/uuid.a7963699.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/ant-design.109b29f5.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.bab34813.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.a2374888.js","assets/dayjs.d80a3524.js","assets/index.8318ec36.js","assets/Form.f5163eed.js","assets/index.1a0ec4ff.js","assets/index.31447910.js","assets/TabPane.05333dfb.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.ca71fc00.js"),["assets/DashEditor.ca71fc00.js","assets/index.cc18f239.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/BaseLayout.bab34813.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.1f96a371.js","assets/executeJs.b990b619.js","assets/icons.08aaa24c.js","assets/index.9830a393.js","assets/pubsub.9aea5614.js","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.ef058b0b.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.894c5f7d.js","assets/Steps.998aa76d.css","assets/Modal.761ee3d8.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/geometryUtils.674366f7.js","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.41c65287.js","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/activeRecord.64b754df.js","assets/dashes.f8c3da60.js","assets/hooks.7f3d2eee.js","assets/jobs.ee7e6eb2.js","assets/workspaces.54224ba5.js","assets/Title.7ca27be1.js","assets/index.3475d619.js","assets/uuid.a7963699.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/ant-design.109b29f5.js","assets/SaveButton.13ece1cb.css","assets/keyboard.9e62e6a9.js","assets/index.1a0ec4ff.js","assets/index.31447910.js","assets/TabPane.05333dfb.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.af47235f.js"),["assets/DashPreview.af47235f.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/DashPlayer.1f96a371.js","assets/executeJs.b990b619.js","assets/icons.08aaa24c.js","assets/index.9830a393.js","assets/pubsub.9aea5614.js","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.ef058b0b.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.cc18f239.js","assets/Steps.894c5f7d.js","assets/Steps.998aa76d.css","assets/Modal.761ee3d8.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/geometryUtils.674366f7.js","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.2b63b75b.js","assets/BackButton.dd542746.css","assets/asyncComputed.fbd351ba.js","assets/dashes.f8c3da60.js","assets/activeRecord.64b754df.js","assets/workspaces.54224ba5.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.f56fc637.js"),["assets/HookEditor.f56fc637.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.41c65287.js","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/dashes.f8c3da60.js","assets/index.cc18f239.js","assets/hooks.7f3d2eee.js","assets/jobs.ee7e6eb2.js","assets/workspaces.54224ba5.js","assets/icons.08aaa24c.js","assets/Title.7ca27be1.js","assets/index.3475d619.js","assets/uuid.a7963699.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/ant-design.109b29f5.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.bab34813.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.e1f1e987.js","assets/index.d099a09e.js","assets/index.31447910.js","assets/index.933610ff.js","assets/index.8318ec36.js","assets/Form.f5163eed.js","assets/index.1a0ec4ff.js","assets/TabPane.05333dfb.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.46600875.js"),["assets/WorkflowEditor.46600875.js","assets/outputWidgets.eddbac36.js","assets/outputWidgets.8ce475af.css","assets/workspaces.54224ba5.js","assets/activeRecord.64b754df.js","assets/pubsub.9aea5614.js","assets/icons.08aaa24c.js","assets/FormTester.vue_vue_type_script_setup_true_lang.d433ae25.js","assets/SmartConsole.41c65287.js","assets/asyncComputed.fbd351ba.js","assets/forms.4b8bb1c1.js","assets/dashes.f8c3da60.js","assets/index.cc18f239.js","assets/hooks.7f3d2eee.js","assets/jobs.ee7e6eb2.js","assets/Title.7ca27be1.js","assets/index.3475d619.js","assets/uuid.a7963699.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js","assets/SmartConsole.ed33cdbe.css","assets/Form.f5163eed.js","assets/broker.b662ddf3.js","assets/index.9830a393.js","assets/executeJs.b990b619.js","assets/CircularLoading.bbd62e42.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.ef058b0b.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.894c5f7d.js","assets/Steps.998aa76d.css","assets/Modal.761ee3d8.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/WidgetsFrame.c6eb9ff3.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.b7eba10e.js","assets/broker.ac4594bd.css","assets/geometryUtils.674366f7.js","assets/keyboard.9e62e6a9.js","assets/ant-design.109b29f5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.e1f1e987.js","assets/index.d099a09e.js","assets/index.31447910.js","assets/index.933610ff.js","assets/index.8318ec36.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.a2374888.js","assets/dayjs.d80a3524.js","assets/index.f428cf3a.js","assets/index.b131e8f9.js","assets/LoginBlock.600b8f99.js","assets/popupNotifcation.2580ac98.js","assets/index.b6a61078.js","assets/LoginBlock.d273f904.css","assets/index.1a0ec4ff.js","assets/index.9c583b89.js","assets/TabPane.05333dfb.js","assets/WorkflowEditor.6d840334.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.f396fb5b.js.map
