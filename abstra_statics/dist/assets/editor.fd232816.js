import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as f,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as a,l as g,m as R,n as L,p as O}from"./registerWidgets.3fe3e574.js";import{u as W}from"./index.d7b2b754.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2aff86ed-3ad5-46af-aa13-947721b3cd88",e._sentryDebugIdIdentifier="sentry-dbid-2aff86ed-3ad5-46af-aa13-947721b3cd88")}catch{}})();const s=_(!1),j=()=>{window.innerWidth<780?s.value=!0:s.value=!1},C={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},S=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",j)}),(n,x)=>{const i=p("router-view");return c(),h(f(b),{theme:o},{default:u(()=>[l("div",C,[E(i)])]),_:1})}}});const r=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.1a4d54ec.js"),["assets/Home.1a4d54ec.js","assets/Modal.eb428ef7.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.0dddbba9.js"),["assets/Workspace.0dddbba9.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/icons.3f547329.js","assets/Tooltip.ba83726b.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.67ce6c02.js","assets/workspaces.822699d6.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js","assets/popupNotifcation.53a2287a.js","assets/asyncComputed.5cb892a4.js","assets/index.ed47c328.js","assets/Title.bb963c89.js","assets/index.084c26cf.js","assets/Form.273c73e9.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.2c29f2de.js","assets/BaseLayout.282f66f6.css","assets/index.fb78a3e8.js","assets/index.239592cd.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.5e75155f.js"),["assets/Forms.5e75155f.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/icons.3f547329.js","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d85b15cd.js","assets/index.ed47c328.js","assets/Title.bb963c89.js","assets/Form.273c73e9.js","assets/index.dc1ab387.js","assets/index.239592cd.js","assets/ant-design.f2ce73f6.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.b0f38f11.js"),["assets/Dashes.b0f38f11.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/icons.3f547329.js","assets/asyncComputed.5cb892a4.js","assets/dashes.0fbac077.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/index.d7b2b754.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d85b15cd.js","assets/index.ed47c328.js","assets/Title.bb963c89.js","assets/Form.273c73e9.js","assets/index.dc1ab387.js","assets/index.239592cd.js","assets/ant-design.f2ce73f6.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.ccc18c8d.js"),["assets/Jobs.ccc18c8d.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/icons.3f547329.js","assets/asyncComputed.5cb892a4.js","assets/jobs.8f243083.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d85b15cd.js","assets/index.ed47c328.js","assets/Title.bb963c89.js","assets/Form.273c73e9.js","assets/index.dc1ab387.js","assets/index.239592cd.js","assets/ant-design.f2ce73f6.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.1d7f9148.js"),["assets/Hooks.1d7f9148.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/icons.3f547329.js","assets/asyncComputed.5cb892a4.js","assets/hooks.6a308555.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/CrudView.vue_vue_type_script_setup_true_lang.d85b15cd.js","assets/index.ed47c328.js","assets/Title.bb963c89.js","assets/Form.273c73e9.js","assets/index.dc1ab387.js","assets/index.239592cd.js","assets/ant-design.f2ce73f6.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.61ef5416.js"),["assets/StyleEditor.61ef5416.js","assets/asyncComputed.5cb892a4.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/workspaces.822699d6.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/icons.3f547329.js","assets/index.08fbc77b.js","assets/Title.bb963c89.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.9ecd72b6.js","assets/PlayerNavbar.6aab3f9c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d7b2b754.js","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.dc1ab387.js","assets/Form.273c73e9.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.f5d4c28a.js"),["assets/SidebarEditor.f5d4c28a.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/index.ed1d021b.js","assets/Title.bb963c89.js","assets/index.239592cd.js","assets/index.dc1ab387.js","assets/workspaces.822699d6.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/asyncComputed.5cb892a4.js","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.9ecd72b6.js","assets/PlayerNavbar.6aab3f9c.js","assets/icons.3f547329.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d7b2b754.js","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.273c73e9.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.26722cc6.js"),["assets/FormEditor.26722cc6.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/FormTester.vue_vue_type_script_setup_true_lang.edfa2bdf.js","assets/SmartConsole.9178bd09.js","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/dashes.0fbac077.js","assets/index.d7b2b754.js","assets/hooks.6a308555.js","assets/jobs.8f243083.js","assets/workspaces.822699d6.js","assets/icons.3f547329.js","assets/index.faae4db1.js","assets/Title.bb963c89.js","assets/uuid.870f0653.js","assets/storage.478cbdcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js","assets/SmartConsole.ed33cdbe.css","assets/Form.273c73e9.js","assets/broker.83939546.js","assets/passwordlessManager.0b9af8aa.js","assets/Passwordless.a8c200db.js","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/executeJs.84fe060f.js","assets/PlayerNavbar.6aab3f9c.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.84c85124.js","assets/Steps.998aa76d.css","assets/Modal.eb428ef7.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.cdd5fc35.js","assets/broker.54a676ec.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.2c29f2de.js","assets/BaseLayout.282f66f6.css","assets/index.27e54f03.js","assets/index.fb78a3e8.js","assets/index.239592cd.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.43b85f11.js"),["assets/FormPreview.43b85f11.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/broker.83939546.js","assets/passwordlessManager.0b9af8aa.js","assets/pubsub.6dbde606.js","assets/storage.478cbdcc.js","assets/Passwordless.a8c200db.js","assets/icons.3f547329.js","assets/Passwordless.38735f5c.css","assets/executeJs.84fe060f.js","assets/PlayerNavbar.6aab3f9c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d7b2b754.js","assets/Steps.84c85124.js","assets/Steps.998aa76d.css","assets/Modal.eb428ef7.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.cdd5fc35.js","assets/broker.54a676ec.css","assets/BackButton.b466b254.js","assets/BackButton.dd542746.css","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/activeRecord.1c8420b0.js","assets/workspaces.822699d6.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.b1d1af6b.js"),["assets/JobEditor.b1d1af6b.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/SmartConsole.9178bd09.js","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/dashes.0fbac077.js","assets/index.d7b2b754.js","assets/hooks.6a308555.js","assets/jobs.8f243083.js","assets/workspaces.822699d6.js","assets/icons.3f547329.js","assets/index.faae4db1.js","assets/Title.bb963c89.js","assets/uuid.870f0653.js","assets/storage.478cbdcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.2c29f2de.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.ee7f4534.js","assets/dayjs.4c8ed4e6.js","assets/index.918426f7.js","assets/Form.273c73e9.js","assets/index.fb78a3e8.js","assets/index.239592cd.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.b547896a.js"),["assets/DashEditor.b547896a.js","assets/index.d7b2b754.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/BaseLayout.2c29f2de.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.e7b52785.js","assets/executeJs.84fe060f.js","assets/PlayerNavbar.6aab3f9c.js","assets/icons.3f547329.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.84c85124.js","assets/Steps.998aa76d.css","assets/Modal.eb428ef7.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/geometryUtils.21b56c1d.js","assets/passwordlessManager.0b9af8aa.js","assets/pubsub.6dbde606.js","assets/storage.478cbdcc.js","assets/Passwordless.a8c200db.js","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.9178bd09.js","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/activeRecord.1c8420b0.js","assets/dashes.0fbac077.js","assets/hooks.6a308555.js","assets/jobs.8f243083.js","assets/workspaces.822699d6.js","assets/index.faae4db1.js","assets/Title.bb963c89.js","assets/uuid.870f0653.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.13ece1cb.css","assets/keyboard.c01c4edc.js","assets/index.fb78a3e8.js","assets/index.239592cd.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.db115ee2.js"),["assets/DashPreview.db115ee2.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/DashPlayer.e7b52785.js","assets/executeJs.84fe060f.js","assets/PlayerNavbar.6aab3f9c.js","assets/icons.3f547329.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d7b2b754.js","assets/Steps.84c85124.js","assets/Steps.998aa76d.css","assets/Modal.eb428ef7.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/geometryUtils.21b56c1d.js","assets/passwordlessManager.0b9af8aa.js","assets/pubsub.6dbde606.js","assets/storage.478cbdcc.js","assets/Passwordless.a8c200db.js","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.b466b254.js","assets/BackButton.dd542746.css","assets/asyncComputed.5cb892a4.js","assets/dashes.0fbac077.js","assets/activeRecord.1c8420b0.js","assets/workspaces.822699d6.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.eb4a7baf.js"),["assets/HookEditor.eb4a7baf.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/SmartConsole.9178bd09.js","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/dashes.0fbac077.js","assets/index.d7b2b754.js","assets/hooks.6a308555.js","assets/jobs.8f243083.js","assets/workspaces.822699d6.js","assets/icons.3f547329.js","assets/index.faae4db1.js","assets/Title.bb963c89.js","assets/uuid.870f0653.js","assets/storage.478cbdcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.2c29f2de.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.c1a9a74c.js","assets/index.918426f7.js","assets/index.af35d8a8.js","assets/index.239592cd.js","assets/index.dc1ab387.js","assets/Form.273c73e9.js","assets/index.fb78a3e8.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.d05cd6ee.js"),["assets/WorkflowEditor.d05cd6ee.js","assets/registerWidgets.3fe3e574.js","assets/registerWidgets.74435dfa.css","assets/workspaces.822699d6.js","assets/activeRecord.1c8420b0.js","assets/pubsub.6dbde606.js","assets/icons.3f547329.js","assets/FormTester.vue_vue_type_script_setup_true_lang.edfa2bdf.js","assets/SmartConsole.9178bd09.js","assets/asyncComputed.5cb892a4.js","assets/forms.68a037bb.js","assets/dashes.0fbac077.js","assets/index.d7b2b754.js","assets/hooks.6a308555.js","assets/jobs.8f243083.js","assets/index.faae4db1.js","assets/Title.bb963c89.js","assets/uuid.870f0653.js","assets/storage.478cbdcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js","assets/SmartConsole.ed33cdbe.css","assets/Form.273c73e9.js","assets/broker.83939546.js","assets/passwordlessManager.0b9af8aa.js","assets/Passwordless.a8c200db.js","assets/CircularLoading.cc1808db.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/executeJs.84fe060f.js","assets/PlayerNavbar.6aab3f9c.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.84c85124.js","assets/Steps.998aa76d.css","assets/Modal.eb428ef7.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.08f25a72.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.cdd5fc35.js","assets/broker.54a676ec.css","assets/geometryUtils.21b56c1d.js","assets/keyboard.c01c4edc.js","assets/ant-design.f2ce73f6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.42677167.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.c1a9a74c.js","assets/index.918426f7.js","assets/index.af35d8a8.js","assets/index.239592cd.js","assets/index.dc1ab387.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.ee7f4534.js","assets/dayjs.4c8ed4e6.js","assets/index.ed47c328.js","assets/index.ed1d021b.js","assets/LoginBlock.67ce6c02.js","assets/popupNotifcation.53a2287a.js","assets/index.084c26cf.js","assets/LoginBlock.d273f904.css","assets/index.fb78a3e8.js","assets/index.16d34c43.js","assets/WorkflowEditor.6d840334.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{W(e,o)});(async()=>{const e=w({render:()=>g(S)});P.init(),I(e,r),e.use(r),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),a(e,R),a(e,L),a(e,O)})();
//# sourceMappingURL=editor.fd232816.js.map
