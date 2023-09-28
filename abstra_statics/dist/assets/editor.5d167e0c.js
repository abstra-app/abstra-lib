import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as b,A as f,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./registerWidgets.53633c61.js";import{u as W}from"./index.16bd148e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4c5db820-38b2-4193-964a-969ca660264f",e._sentryDebugIdIdentifier="sentry-dbid-4c5db820-38b2-4193-964a-969ca660264f")}catch{}})();const s=_(!1),j=()=>{window.innerWidth<780?s.value=!0:s.value=!1},C={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},S=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",j)}),(n,x)=>{const i=p("router-view");return c(),h(b(f),{theme:o},{default:u(()=>[l("div",C,[E(i)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.e7c1f169.js"),["assets/Home.e7c1f169.js","assets/Modal.60cde8fb.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.255821ff.js"),["assets/Workspace.255821ff.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/icons.ac8576ed.js","assets/Tooltip.1272f478.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.71bf7079.js","assets/workspaces.0f6fa8fd.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fea3de46.js","assets/popupNotifcation.43528eff.js","assets/asyncComputed.1538aa98.js","assets/index.25885818.js","assets/index.421e976b.js","assets/Title.8fa69391.js","assets/index.4bb32b1d.js","assets/Form.756dc718.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.97fc780b.js","assets/BaseLayout.282f66f6.css","assets/index.5dba3fbd.js","assets/index.20898411.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.da0b04c5.js"),["assets/Forms.da0b04c5.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/icons.ac8576ed.js","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/CrudView.vue_vue_type_script_setup_true_lang.16eadd36.js","assets/index.25885818.js","assets/index.421e976b.js","assets/Title.8fa69391.js","assets/Form.756dc718.js","assets/index.19b11e27.js","assets/index.20898411.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.7dcfab75.js"),["assets/Dashes.7dcfab75.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/icons.ac8576ed.js","assets/asyncComputed.1538aa98.js","assets/dashes.416da845.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/index.16bd148e.js","assets/CrudView.vue_vue_type_script_setup_true_lang.16eadd36.js","assets/index.25885818.js","assets/index.421e976b.js","assets/Title.8fa69391.js","assets/Form.756dc718.js","assets/index.19b11e27.js","assets/index.20898411.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.e67b7d0f.js"),["assets/Jobs.e67b7d0f.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/icons.ac8576ed.js","assets/asyncComputed.1538aa98.js","assets/jobs.c960b044.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/CrudView.vue_vue_type_script_setup_true_lang.16eadd36.js","assets/index.25885818.js","assets/index.421e976b.js","assets/Title.8fa69391.js","assets/Form.756dc718.js","assets/index.19b11e27.js","assets/index.20898411.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.74ba958d.js"),["assets/Hooks.74ba958d.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/icons.ac8576ed.js","assets/asyncComputed.1538aa98.js","assets/hooks.6f085c6f.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/CrudView.vue_vue_type_script_setup_true_lang.16eadd36.js","assets/index.25885818.js","assets/index.421e976b.js","assets/Title.8fa69391.js","assets/Form.756dc718.js","assets/index.19b11e27.js","assets/index.20898411.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.fe9f1189.js"),["assets/StyleEditor.fe9f1189.js","assets/asyncComputed.1538aa98.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/workspaces.0f6fa8fd.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/icons.ac8576ed.js","assets/index.09215c83.js","assets/index.421e976b.js","assets/Title.8fa69391.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/SidebarPreview.16fc5877.js","assets/PlayerNavbar.85615fc2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.16bd148e.js","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.19b11e27.js","assets/Form.756dc718.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.1312e351.js"),["assets/SidebarEditor.1312e351.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/index.c24bfd76.js","assets/Title.8fa69391.js","assets/index.20898411.js","assets/index.19b11e27.js","assets/workspaces.0f6fa8fd.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/asyncComputed.1538aa98.js","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/SidebarPreview.16fc5877.js","assets/PlayerNavbar.85615fc2.js","assets/icons.ac8576ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.16bd148e.js","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.756dc718.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.5e0c3ae5.js"),["assets/FormEditor.5e0c3ae5.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/FormTester.vue_vue_type_script_setup_true_lang.cb2adfdb.js","assets/SmartConsole.9934e345.js","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/dashes.416da845.js","assets/index.16bd148e.js","assets/hooks.6f085c6f.js","assets/jobs.c960b044.js","assets/workspaces.0f6fa8fd.js","assets/icons.ac8576ed.js","assets/index.88068e26.js","assets/Title.8fa69391.js","assets/uuid.d0461a2a.js","assets/storage.72bab494.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fea3de46.js","assets/SmartConsole.ed33cdbe.css","assets/Form.756dc718.js","assets/broker.0ace8bb8.js","assets/passwordlessManager.dc3e2d25.js","assets/Passwordless.387d64d8.js","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/executeJs.a89622c5.js","assets/PlayerNavbar.85615fc2.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.a2c8b558.js","assets/Steps.998aa76d.css","assets/Modal.60cde8fb.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.a971e1b5.js","assets/broker.54a676ec.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/BaseLayout.97fc780b.js","assets/BaseLayout.282f66f6.css","assets/index.a746f963.js","assets/index.5dba3fbd.js","assets/index.20898411.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.d5a58f77.js"),["assets/FormPreview.d5a58f77.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/broker.0ace8bb8.js","assets/passwordlessManager.dc3e2d25.js","assets/pubsub.fed97ffe.js","assets/storage.72bab494.js","assets/Passwordless.387d64d8.js","assets/icons.ac8576ed.js","assets/Passwordless.38735f5c.css","assets/executeJs.a89622c5.js","assets/PlayerNavbar.85615fc2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.16bd148e.js","assets/Steps.a2c8b558.js","assets/Steps.998aa76d.css","assets/Modal.60cde8fb.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.a971e1b5.js","assets/broker.54a676ec.css","assets/BackButton.7288d1c2.js","assets/BackButton.dd542746.css","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/activeRecord.0d1f1b92.js","assets/workspaces.0f6fa8fd.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.dc809144.js"),["assets/JobEditor.dc809144.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/SmartConsole.9934e345.js","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/dashes.416da845.js","assets/index.16bd148e.js","assets/hooks.6f085c6f.js","assets/jobs.c960b044.js","assets/workspaces.0f6fa8fd.js","assets/icons.ac8576ed.js","assets/index.88068e26.js","assets/Title.8fa69391.js","assets/uuid.d0461a2a.js","assets/storage.72bab494.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fea3de46.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/BaseLayout.97fc780b.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.b5baf486.js","assets/dayjs.77a9e6c0.js","assets/index.6f6510e2.js","assets/Form.756dc718.js","assets/index.5dba3fbd.js","assets/index.20898411.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.fd139cec.js"),["assets/DashEditor.fd139cec.js","assets/index.16bd148e.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/BaseLayout.97fc780b.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.308d02b3.js","assets/executeJs.a89622c5.js","assets/PlayerNavbar.85615fc2.js","assets/icons.ac8576ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.a2c8b558.js","assets/Steps.998aa76d.css","assets/Modal.60cde8fb.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/geometryUtils.f3b844fd.js","assets/passwordlessManager.dc3e2d25.js","assets/pubsub.fed97ffe.js","assets/storage.72bab494.js","assets/Passwordless.387d64d8.js","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.9934e345.js","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/activeRecord.0d1f1b92.js","assets/dashes.416da845.js","assets/hooks.6f085c6f.js","assets/jobs.c960b044.js","assets/workspaces.0f6fa8fd.js","assets/index.88068e26.js","assets/Title.8fa69391.js","assets/uuid.d0461a2a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fea3de46.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/keyboard.9f769d63.js","assets/index.5dba3fbd.js","assets/index.20898411.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.e74db5b4.js"),["assets/DashPreview.e74db5b4.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/DashPlayer.308d02b3.js","assets/executeJs.a89622c5.js","assets/PlayerNavbar.85615fc2.js","assets/icons.ac8576ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.16bd148e.js","assets/Steps.a2c8b558.js","assets/Steps.998aa76d.css","assets/Modal.60cde8fb.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/geometryUtils.f3b844fd.js","assets/passwordlessManager.dc3e2d25.js","assets/pubsub.fed97ffe.js","assets/storage.72bab494.js","assets/Passwordless.387d64d8.js","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.7288d1c2.js","assets/BackButton.dd542746.css","assets/asyncComputed.1538aa98.js","assets/dashes.416da845.js","assets/activeRecord.0d1f1b92.js","assets/workspaces.0f6fa8fd.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.93da3e7e.js"),["assets/HookEditor.93da3e7e.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/SmartConsole.9934e345.js","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/dashes.416da845.js","assets/index.16bd148e.js","assets/hooks.6f085c6f.js","assets/jobs.c960b044.js","assets/workspaces.0f6fa8fd.js","assets/icons.ac8576ed.js","assets/index.88068e26.js","assets/Title.8fa69391.js","assets/uuid.d0461a2a.js","assets/storage.72bab494.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fea3de46.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/BaseLayout.97fc780b.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.1f137f3c.js","assets/index.6f6510e2.js","assets/index.a799065a.js","assets/index.20898411.js","assets/index.19b11e27.js","assets/Form.756dc718.js","assets/index.5dba3fbd.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.5dc104ec.js"),["assets/WorkflowEditor.5dc104ec.js","assets/registerWidgets.53633c61.js","assets/registerWidgets.74435dfa.css","assets/workspaces.0f6fa8fd.js","assets/activeRecord.0d1f1b92.js","assets/pubsub.fed97ffe.js","assets/icons.ac8576ed.js","assets/FormTester.vue_vue_type_script_setup_true_lang.cb2adfdb.js","assets/SmartConsole.9934e345.js","assets/asyncComputed.1538aa98.js","assets/forms.832a8f85.js","assets/dashes.416da845.js","assets/index.16bd148e.js","assets/hooks.6f085c6f.js","assets/jobs.c960b044.js","assets/index.88068e26.js","assets/Title.8fa69391.js","assets/uuid.d0461a2a.js","assets/storage.72bab494.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fea3de46.js","assets/SmartConsole.ed33cdbe.css","assets/Form.756dc718.js","assets/broker.0ace8bb8.js","assets/passwordlessManager.dc3e2d25.js","assets/Passwordless.387d64d8.js","assets/CircularLoading.4275dc3f.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/executeJs.a89622c5.js","assets/PlayerNavbar.85615fc2.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.a2c8b558.js","assets/Steps.998aa76d.css","assets/Modal.60cde8fb.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.058a32b1.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.a971e1b5.js","assets/broker.54a676ec.css","assets/geometryUtils.f3b844fd.js","assets/keyboard.9f769d63.js","assets/index.25885818.js","assets/index.421e976b.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.385b328b.js","assets/HookSettings.vue_vue_type_script_setup_true_lang.1f137f3c.js","assets/index.6f6510e2.js","assets/index.a799065a.js","assets/index.20898411.js","assets/index.19b11e27.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.b5baf486.js","assets/dayjs.77a9e6c0.js","assets/ant-design.102d4cf7.js","assets/index.c24bfd76.js","assets/LoginBlock.71bf7079.js","assets/popupNotifcation.43528eff.js","assets/index.4bb32b1d.js","assets/LoginBlock.d273f904.css","assets/index.5dba3fbd.js","assets/index.95782649.js","assets/WorkflowEditor.6d840334.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{const e=w({render:()=>g(S)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.5d167e0c.js.map
