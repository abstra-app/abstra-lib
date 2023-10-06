import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as b,A as f,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.a2ba4435.js";import{u as W}from"./index.a775cbea.js";import{u as j}from"./index.ccf6c1d4.js";import"./pubsub.8fcfe7c5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4799fb20-33eb-4e71-a857-51e22a4b504d",e._sentryDebugIdIdentifier="sentry-dbid-4799fb20-33eb-4e71-a857-51e22a4b504d")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(b(f),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.9df5d153.js"),["assets/Home.9df5d153.js","assets/Modal.4bfee469.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.bd423d48.js"),["assets/Workspace.bd423d48.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/icons.f7e8e357.js","assets/Tooltip.3f313bb4.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.f2114ba3.js","assets/workspaces.402dc483.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js","assets/popupNotifcation.d5be04dc.js","assets/asyncComputed.6f368a69.js","assets/index.0087c5d3.js","assets/Title.b29d6718.js","assets/index.625daf6d.js","assets/Form.91dd00e5.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.3be93fc0.js","assets/BaseLayout.282f66f6.css","assets/index.73e8a114.js","assets/index.94bb3a8a.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.2d5c5a80.js"),["assets/Forms.2d5c5a80.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/icons.f7e8e357.js","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/CrudView.vue_vue_type_script_setup_true_lang.f205684a.js","assets/index.0087c5d3.js","assets/Title.b29d6718.js","assets/Form.91dd00e5.js","assets/index.7b51c8ca.js","assets/index.2b1c7624.js","assets/index.947c90fc.js","assets/index.3c317eee.js","assets/index.94bb3a8a.js","assets/ant-design.9d2f3950.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.ae21fd01.js"),["assets/Dashes.ae21fd01.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/icons.f7e8e357.js","assets/asyncComputed.6f368a69.js","assets/dashes.484841b2.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/index.a775cbea.js","assets/CrudView.vue_vue_type_script_setup_true_lang.f205684a.js","assets/index.0087c5d3.js","assets/Title.b29d6718.js","assets/Form.91dd00e5.js","assets/index.7b51c8ca.js","assets/index.2b1c7624.js","assets/index.947c90fc.js","assets/index.3c317eee.js","assets/index.94bb3a8a.js","assets/ant-design.9d2f3950.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.68870d2d.js"),["assets/Jobs.68870d2d.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/icons.f7e8e357.js","assets/asyncComputed.6f368a69.js","assets/jobs.9172490b.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/CrudView.vue_vue_type_script_setup_true_lang.f205684a.js","assets/index.0087c5d3.js","assets/Title.b29d6718.js","assets/Form.91dd00e5.js","assets/index.7b51c8ca.js","assets/index.2b1c7624.js","assets/index.947c90fc.js","assets/index.3c317eee.js","assets/index.94bb3a8a.js","assets/ant-design.9d2f3950.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.65855ca6.js"),["assets/Hooks.65855ca6.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/icons.f7e8e357.js","assets/asyncComputed.6f368a69.js","assets/hooks.192b7606.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/CrudView.vue_vue_type_script_setup_true_lang.f205684a.js","assets/index.0087c5d3.js","assets/Title.b29d6718.js","assets/Form.91dd00e5.js","assets/index.7b51c8ca.js","assets/index.2b1c7624.js","assets/index.947c90fc.js","assets/index.3c317eee.js","assets/index.94bb3a8a.js","assets/ant-design.9d2f3950.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.738ccb46.js"),["assets/StyleEditor.738ccb46.js","assets/asyncComputed.6f368a69.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/workspaces.402dc483.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/icons.f7e8e357.js","assets/index.2e559ad8.js","assets/Title.b29d6718.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/ant-design.9d2f3950.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.0bca4fbe.js","assets/PlayerNavbar.bce4798f.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a775cbea.js","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.3c317eee.js","assets/Form.91dd00e5.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.d95bdefb.js"),["assets/SidebarEditor.d95bdefb.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/index.e8824290.js","assets/Title.b29d6718.js","assets/index.94bb3a8a.js","assets/index.3c317eee.js","assets/workspaces.402dc483.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/asyncComputed.6f368a69.js","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/ant-design.9d2f3950.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.0bca4fbe.js","assets/PlayerNavbar.bce4798f.js","assets/icons.f7e8e357.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a775cbea.js","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.91dd00e5.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.dcfef615.js"),["assets/FormEditor.dcfef615.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/FormTester.vue_vue_type_script_setup_true_lang.cba65561.js","assets/SmartConsole.bb203d4a.js","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/dashes.484841b2.js","assets/index.a775cbea.js","assets/hooks.192b7606.js","assets/jobs.9172490b.js","assets/workspaces.402dc483.js","assets/icons.f7e8e357.js","assets/Title.b29d6718.js","assets/index.947c90fc.js","assets/uuid.46e69c6d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js","assets/SmartConsole.ec6046c4.css","assets/Form.91dd00e5.js","assets/broker.e35a7de1.js","assets/index.ccf6c1d4.js","assets/executeJs.d6bd4ef3.js","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.bce4798f.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.0757bd5d.js","assets/Steps.998aa76d.css","assets/Modal.4bfee469.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e0977f58.js","assets/broker.ac4594bd.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.f2c29f5c.js","assets/index.3d04f168.js","assets/CollapsePanel.dab38855.js","assets/index.3c317eee.js","assets/index.94bb3a8a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/ant-design.9d2f3950.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.3be93fc0.js","assets/BaseLayout.282f66f6.css","assets/TabPane.5c2f9b68.js","assets/index.01f11779.js","assets/index.73e8a114.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.412cec2d.js"),["assets/FormPreview.412cec2d.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/broker.e35a7de1.js","assets/index.ccf6c1d4.js","assets/pubsub.8fcfe7c5.js","assets/executeJs.d6bd4ef3.js","assets/icons.f7e8e357.js","assets/PlayerNavbar.bce4798f.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a775cbea.js","assets/Steps.0757bd5d.js","assets/Steps.998aa76d.css","assets/Modal.4bfee469.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e0977f58.js","assets/broker.ac4594bd.css","assets/BackButton.0a78a886.js","assets/BackButton.dd542746.css","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/activeRecord.37ea5e23.js","assets/workspaces.402dc483.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.5ca20a22.js"),["assets/JobEditor.5ca20a22.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.bb203d4a.js","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/dashes.484841b2.js","assets/index.a775cbea.js","assets/hooks.192b7606.js","assets/jobs.9172490b.js","assets/workspaces.402dc483.js","assets/icons.f7e8e357.js","assets/Title.b29d6718.js","assets/index.947c90fc.js","assets/uuid.46e69c6d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js","assets/SmartConsole.ec6046c4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/ant-design.9d2f3950.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.3be93fc0.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.9b2c5a17.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f01fccff.js","assets/dayjs.52cb4bad.js","assets/index.7b51c8ca.js","assets/Form.91dd00e5.js","assets/index.73e8a114.js","assets/index.94bb3a8a.js","assets/TabPane.5c2f9b68.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.63aab29e.js"),["assets/DashEditor.63aab29e.js","assets/index.a775cbea.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/BaseLayout.3be93fc0.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.de105b3c.js","assets/executeJs.d6bd4ef3.js","assets/icons.f7e8e357.js","assets/index.ccf6c1d4.js","assets/pubsub.8fcfe7c5.js","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.bce4798f.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.0757bd5d.js","assets/Steps.998aa76d.css","assets/Modal.4bfee469.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/geometryUtils.e282df65.js","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.bb203d4a.js","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/activeRecord.37ea5e23.js","assets/dashes.484841b2.js","assets/hooks.192b7606.js","assets/jobs.9172490b.js","assets/workspaces.402dc483.js","assets/Title.b29d6718.js","assets/index.947c90fc.js","assets/uuid.46e69c6d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js","assets/SmartConsole.ec6046c4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/ant-design.9d2f3950.js","assets/SaveButton.13ece1cb.css","assets/keyboard.172e4777.js","assets/index.73e8a114.js","assets/index.94bb3a8a.js","assets/TabPane.5c2f9b68.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.76019e1c.js"),["assets/DashPreview.76019e1c.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/DashPlayer.de105b3c.js","assets/executeJs.d6bd4ef3.js","assets/icons.f7e8e357.js","assets/index.ccf6c1d4.js","assets/pubsub.8fcfe7c5.js","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.bce4798f.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a775cbea.js","assets/Steps.0757bd5d.js","assets/Steps.998aa76d.css","assets/Modal.4bfee469.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/geometryUtils.e282df65.js","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.0a78a886.js","assets/BackButton.dd542746.css","assets/asyncComputed.6f368a69.js","assets/dashes.484841b2.js","assets/activeRecord.37ea5e23.js","assets/workspaces.402dc483.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.8e54e7ed.js"),["assets/HookEditor.8e54e7ed.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.bb203d4a.js","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/dashes.484841b2.js","assets/index.a775cbea.js","assets/hooks.192b7606.js","assets/jobs.9172490b.js","assets/workspaces.402dc483.js","assets/icons.f7e8e357.js","assets/Title.b29d6718.js","assets/index.947c90fc.js","assets/uuid.46e69c6d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js","assets/SmartConsole.ec6046c4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/ant-design.9d2f3950.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.3be93fc0.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.b1f5ee26.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.f2c29f5c.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f01fccff.js","assets/index.d437d536.js","assets/index.3c317eee.js","assets/CollapsePanel.dab38855.js","assets/index.94bb3a8a.js","assets/index.7b51c8ca.js","assets/Form.91dd00e5.js","assets/index.73e8a114.js","assets/TabPane.5c2f9b68.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.01806ed6.js"),["assets/WorkflowEditor.01806ed6.js","assets/outputWidgets.a2ba4435.js","assets/outputWidgets.8ce475af.css","assets/workspaces.402dc483.js","assets/activeRecord.37ea5e23.js","assets/pubsub.8fcfe7c5.js","assets/icons.f7e8e357.js","assets/FormTester.vue_vue_type_script_setup_true_lang.cba65561.js","assets/SmartConsole.bb203d4a.js","assets/asyncComputed.6f368a69.js","assets/forms.a8132fec.js","assets/dashes.484841b2.js","assets/index.a775cbea.js","assets/hooks.192b7606.js","assets/jobs.9172490b.js","assets/Title.b29d6718.js","assets/index.947c90fc.js","assets/uuid.46e69c6d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js","assets/SmartConsole.ec6046c4.css","assets/Form.91dd00e5.js","assets/broker.e35a7de1.js","assets/index.ccf6c1d4.js","assets/executeJs.d6bd4ef3.js","assets/CircularLoading.0bc574b3.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.bce4798f.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.0757bd5d.js","assets/Steps.998aa76d.css","assets/Modal.4bfee469.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/WidgetsFrame.7040d13c.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e0977f58.js","assets/broker.ac4594bd.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.f2c29f5c.js","assets/index.3d04f168.js","assets/CollapsePanel.dab38855.js","assets/index.3c317eee.js","assets/index.94bb3a8a.js","assets/geometryUtils.e282df65.js","assets/keyboard.172e4777.js","assets/ant-design.9d2f3950.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.b1f5ee26.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f01fccff.js","assets/index.d437d536.js","assets/index.7b51c8ca.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.9b2c5a17.js","assets/dayjs.52cb4bad.js","assets/index.0087c5d3.js","assets/index.e8824290.js","assets/LoginBlock.f2114ba3.js","assets/popupNotifcation.d5be04dc.js","assets/index.625daf6d.js","assets/LoginBlock.d273f904.css","assets/index.73e8a114.js","assets/index.3524619b.js","assets/TabPane.5c2f9b68.js","assets/WorkflowEditor.cd042c40.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.5c96f0e3.js.map
