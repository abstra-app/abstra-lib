import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as f,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.17e2270d.js";import{u as W}from"./index.4787064b.js";import{u as j}from"./index.678809b3.js";import"./pubsub.52f6192d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2322e255-cd50-435a-9e8d-4d3537586cfd",e._sentryDebugIdIdentifier="sentry-dbid-2322e255-cd50-435a-9e8d-4d3537586cfd")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(f(b),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.59789e9e.js"),["assets/Home.59789e9e.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.d9f8b6a4.js"),["assets/Workspace.d9f8b6a4.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/icons.ae606380.js","assets/Tooltip.dda20d9d.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.4e1307a1.js","assets/workspaces.1c8fc227.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/url.6c73df07.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b7a046.js","assets/popupNotifcation.386010ff.js","assets/asyncComputed.c8589796.js","assets/index.23cb8791.js","assets/Title.7b6ce571.js","assets/index.ccccfee8.js","assets/Form.0e9953f6.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.0fbdf4d1.js","assets/BaseLayout.2d5b030e.css","assets/index.038579df.js","assets/index.34b7172c.js","assets/Workspace.6ebc5b25.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.5e5ef7ea.js"),["assets/Forms.5e5ef7ea.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/icons.ae606380.js","assets/asyncComputed.c8589796.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/CrudView.0a7d7224.js","assets/index.23cb8791.js","assets/Title.7b6ce571.js","assets/Form.0e9953f6.js","assets/router.845058a4.js","assets/index.4787064b.js","assets/url.6c73df07.js","assets/index.29151007.js","assets/index.4b3be88e.js","assets/index.cfd05648.js","assets/index.bedec2c6.js","assets/index.34b7172c.js","assets/CrudView.b7607004.css","assets/ant-design.8d97eacb.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.9b101db9.js"),["assets/Dashes.9b101db9.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/icons.ae606380.js","assets/asyncComputed.c8589796.js","assets/dashes.f7f3f911.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/runnerData.07784255.js","assets/CrudView.0a7d7224.js","assets/index.23cb8791.js","assets/Title.7b6ce571.js","assets/Form.0e9953f6.js","assets/router.845058a4.js","assets/index.4787064b.js","assets/url.6c73df07.js","assets/index.29151007.js","assets/index.4b3be88e.js","assets/index.cfd05648.js","assets/index.bedec2c6.js","assets/index.34b7172c.js","assets/CrudView.b7607004.css","assets/ant-design.8d97eacb.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.d292cdd8.js"),["assets/Jobs.d292cdd8.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/icons.ae606380.js","assets/asyncComputed.c8589796.js","assets/jobs.5a9560be.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/CrudView.0a7d7224.js","assets/index.23cb8791.js","assets/Title.7b6ce571.js","assets/Form.0e9953f6.js","assets/router.845058a4.js","assets/index.4787064b.js","assets/url.6c73df07.js","assets/index.29151007.js","assets/index.4b3be88e.js","assets/index.cfd05648.js","assets/index.bedec2c6.js","assets/index.34b7172c.js","assets/CrudView.b7607004.css","assets/ant-design.8d97eacb.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.94f77137.js"),["assets/Hooks.94f77137.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/icons.ae606380.js","assets/asyncComputed.c8589796.js","assets/hooks.793ec9e4.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/CrudView.0a7d7224.js","assets/index.23cb8791.js","assets/Title.7b6ce571.js","assets/Form.0e9953f6.js","assets/router.845058a4.js","assets/index.4787064b.js","assets/url.6c73df07.js","assets/index.29151007.js","assets/index.4b3be88e.js","assets/index.cfd05648.js","assets/index.bedec2c6.js","assets/index.34b7172c.js","assets/CrudView.b7607004.css","assets/ant-design.8d97eacb.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.fd64e210.js"),["assets/StyleEditor.fd64e210.js","assets/asyncComputed.c8589796.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/workspaces.1c8fc227.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/url.6c73df07.js","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/icons.ae606380.js","assets/index.e3bef26f.js","assets/Title.7b6ce571.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/ant-design.8d97eacb.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.e2381a86.js","assets/PlayerNavbar.03251a7c.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.07784255.js","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.bedec2c6.js","assets/Form.0e9953f6.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.e5a9912d.js"),["assets/SidebarEditor.e5a9912d.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/index.b2b1aaed.js","assets/Title.7b6ce571.js","assets/index.34b7172c.js","assets/index.bedec2c6.js","assets/workspaces.1c8fc227.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/url.6c73df07.js","assets/asyncComputed.c8589796.js","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/ant-design.8d97eacb.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.e2381a86.js","assets/PlayerNavbar.03251a7c.js","assets/icons.ae606380.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.07784255.js","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.0e9953f6.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.a97ceaa2.js"),["assets/FormEditor.a97ceaa2.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/FormTester.vue_vue_type_script_setup_true_lang.5bba28c9.js","assets/SmartConsole.11639759.js","assets/asyncComputed.c8589796.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/dashes.f7f3f911.js","assets/runnerData.07784255.js","assets/hooks.793ec9e4.js","assets/jobs.5a9560be.js","assets/workspaces.1c8fc227.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/Title.7b6ce571.js","assets/index.cfd05648.js","assets/uuid.79e36a56.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b7a046.js","assets/SmartConsole.96457e04.css","assets/Form.0e9953f6.js","assets/broker.f8850d2a.js","assets/index.678809b3.js","assets/executeJs.dcb0cac7.js","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.03251a7c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.4787064b.js","assets/Steps.6af066e9.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.6359e175.js","assets/broker.49d66771.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.d5b385ae.js","assets/index.0e8e64cb.js","assets/CollapsePanel.0785fbcd.js","assets/index.bedec2c6.js","assets/index.34b7172c.js","assets/index.29151007.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/ant-design.8d97eacb.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.e00c1ac7.js","assets/BaseLayout.0fbdf4d1.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.f1ed80bf.js","assets/index.f56076f5.js","assets/index.038579df.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.25557a03.js"),["assets/FormPreview.25557a03.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/broker.f8850d2a.js","assets/index.678809b3.js","assets/pubsub.52f6192d.js","assets/executeJs.dcb0cac7.js","assets/runnerData.07784255.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/PlayerNavbar.03251a7c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.4787064b.js","assets/Steps.6af066e9.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.6359e175.js","assets/broker.49d66771.css","assets/BackButton.5eee5ad3.js","assets/BackButton.dd542746.css","assets/asyncComputed.c8589796.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/workspaces.1c8fc227.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.833535b9.js"),["assets/JobEditor.833535b9.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/SmartConsole.11639759.js","assets/asyncComputed.c8589796.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/dashes.f7f3f911.js","assets/runnerData.07784255.js","assets/hooks.793ec9e4.js","assets/jobs.5a9560be.js","assets/workspaces.1c8fc227.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/Title.7b6ce571.js","assets/index.cfd05648.js","assets/uuid.79e36a56.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b7a046.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/ant-design.8d97eacb.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.0fbdf4d1.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.a9ab755d.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c40d6c69.js","assets/index.ab9babdf.js","assets/index.4b3be88e.js","assets/dayjs.480d260c.js","assets/Form.0e9953f6.js","assets/index.038579df.js","assets/index.34b7172c.js","assets/TabPane.f1ed80bf.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.e2b986a8.js"),["assets/DashEditor.e2b986a8.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/index.4787064b.js","assets/executeJs.dcb0cac7.js","assets/runnerData.07784255.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/index.678809b3.js","assets/pubsub.52f6192d.js","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.03251a7c.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.6af066e9.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/BaseLayout.0fbdf4d1.js","assets/BaseLayout.2d5b030e.css","assets/DashPlayer.828aa52d.js","assets/geometryUtils.16dd0e1b.js","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/SmartConsole.11639759.js","assets/asyncComputed.c8589796.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/dashes.f7f3f911.js","assets/hooks.793ec9e4.js","assets/jobs.5a9560be.js","assets/workspaces.1c8fc227.js","assets/Title.7b6ce571.js","assets/index.cfd05648.js","assets/uuid.79e36a56.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b7a046.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.e00c1ac7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/ant-design.8d97eacb.js","assets/SaveButton.13ece1cb.css","assets/keyboard.7c9744c3.js","assets/index.038579df.js","assets/index.34b7172c.js","assets/TabPane.f1ed80bf.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.3e3b2567.js"),["assets/DashPreview.3e3b2567.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/DashPlayer.828aa52d.js","assets/executeJs.dcb0cac7.js","assets/runnerData.07784255.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/index.678809b3.js","assets/pubsub.52f6192d.js","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.03251a7c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.4787064b.js","assets/Steps.6af066e9.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/geometryUtils.16dd0e1b.js","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/BackButton.5eee5ad3.js","assets/BackButton.dd542746.css","assets/asyncComputed.c8589796.js","assets/dashes.f7f3f911.js","assets/activeRecord.1230459a.js","assets/workspaces.1c8fc227.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.1b27bd78.js"),["assets/HookEditor.1b27bd78.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/SmartConsole.11639759.js","assets/asyncComputed.c8589796.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/dashes.f7f3f911.js","assets/runnerData.07784255.js","assets/hooks.793ec9e4.js","assets/jobs.5a9560be.js","assets/workspaces.1c8fc227.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/Title.7b6ce571.js","assets/index.cfd05648.js","assets/uuid.79e36a56.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b7a046.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/ant-design.8d97eacb.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.0fbdf4d1.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.ce0a1a17.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.d5b385ae.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c40d6c69.js","assets/index.43e45aad.js","assets/index.bedec2c6.js","assets/CollapsePanel.0785fbcd.js","assets/index.34b7172c.js","assets/index.29151007.js","assets/index.4b3be88e.js","assets/Form.0e9953f6.js","assets/index.038579df.js","assets/TabPane.f1ed80bf.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.b8b74dba.js"),["assets/WorkflowEditor.b8b74dba.js","assets/forms.4a239233.js","assets/activeRecord.1230459a.js","assets/pubsub.52f6192d.js","assets/outputWidgets.17e2270d.js","assets/outputWidgets.e8fba759.css","assets/workspaces.1c8fc227.js","assets/url.6c73df07.js","assets/icons.ae606380.js","assets/FormTester.vue_vue_type_script_setup_true_lang.5bba28c9.js","assets/SmartConsole.11639759.js","assets/asyncComputed.c8589796.js","assets/dashes.f7f3f911.js","assets/runnerData.07784255.js","assets/hooks.793ec9e4.js","assets/jobs.5a9560be.js","assets/Title.7b6ce571.js","assets/index.cfd05648.js","assets/uuid.79e36a56.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b7a046.js","assets/SmartConsole.96457e04.css","assets/Form.0e9953f6.js","assets/broker.f8850d2a.js","assets/index.678809b3.js","assets/executeJs.dcb0cac7.js","assets/CircularLoading.1c3b33da.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.03251a7c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.4787064b.js","assets/Steps.6af066e9.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.b5c97561.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.6359e175.js","assets/broker.49d66771.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.d5b385ae.js","assets/index.0e8e64cb.js","assets/CollapsePanel.0785fbcd.js","assets/index.bedec2c6.js","assets/index.34b7172c.js","assets/index.29151007.js","assets/geometryUtils.16dd0e1b.js","assets/keyboard.7c9744c3.js","assets/ant-design.8d97eacb.js","assets/index.f4ac7424.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.e00c1ac7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6e46a263.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.ce0a1a17.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c40d6c69.js","assets/index.43e45aad.js","assets/index.4b3be88e.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.a9ab755d.js","assets/index.ab9babdf.js","assets/dayjs.480d260c.js","assets/index.23cb8791.js","assets/index.b2b1aaed.js","assets/LoginBlock.4e1307a1.js","assets/popupNotifcation.386010ff.js","assets/index.ccccfee8.js","assets/LoginBlock.d273f904.css","assets/index.038579df.js","assets/index.edb47e62.js","assets/TabPane.f1ed80bf.js","assets/WorkflowEditor.df415533.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.56d0ee6e.js.map
