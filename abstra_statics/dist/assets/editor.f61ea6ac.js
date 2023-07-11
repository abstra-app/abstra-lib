import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as T,s as f,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.bb4c7eff.js";import{u as L}from"./index.82e1a6b3.js";import{i as w}from"./sentry.2692e5c6.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},y=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,g)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.17c05de9.js"),["assets/Home.17c05de9.js","assets/Modal.bf534f7d.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.212ab158.js"),["assets/Workspace.212ab158.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.e3de8035.js","assets/Tooltip.e8984c12.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.0adffaf6.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/login.29b4c1f1.js","assets/Workspace.3786c737.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.72a9c394.js"),["assets/Forms.72a9c394.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.e3de8035.js","assets/asyncComputed.0adffaf6.js","assets/forms.8e1f6bae.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.330f505a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.5d98ff82.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.1ed8ed7f.js"),["assets/Dashes.1ed8ed7f.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.e3de8035.js","assets/asyncComputed.0adffaf6.js","assets/dashes.c877f4ad.js","assets/activeRecord.57c6bf02.js","assets/runnerData.e56dab20.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.330f505a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.5d98ff82.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.5b4265fc.js"),["assets/Jobs.5b4265fc.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.e3de8035.js","assets/asyncComputed.0adffaf6.js","assets/jobs.a513b685.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.330f505a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.5d98ff82.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.28886bcc.js"),["assets/Hooks.28886bcc.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.e3de8035.js","assets/asyncComputed.0adffaf6.js","assets/hooks.c2425b80.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.330f505a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.5d98ff82.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.52a5d57e.js"),["assets/Tables.52a5d57e.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.e3de8035.js","assets/asyncComputed.0adffaf6.js","assets/tables.58cbb36c.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.330f505a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.5d98ff82.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>e(()=>import("./StyleEditor.8737bb31.js"),["assets/StyleEditor.8737bb31.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/asyncComputed.0adffaf6.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/index.82e1a6b3.js","assets/icons.e3de8035.js","assets/SaveButton.adb205a9.js","assets/SaveButton.806cd84b.css","assets/SidebarPreview.3a67e293.js","assets/PlayerNavbar.31f81a29.js","assets/PlayerNavbar.89be930f.css","assets/runnerData.e56dab20.js","assets/SidebarPreview.ce5a7c4f.css","assets/StyleEditor.9cf9c802.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>e(()=>import("./SidebarEditor.318f7c10.js"),["assets/SidebarEditor.318f7c10.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/asyncComputed.0adffaf6.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.adb205a9.js","assets/icons.e3de8035.js","assets/SaveButton.806cd84b.css","assets/SidebarPreview.3a67e293.js","assets/PlayerNavbar.31f81a29.js","assets/PlayerNavbar.89be930f.css","assets/runnerData.e56dab20.js","assets/SidebarPreview.ce5a7c4f.css","assets/SidebarEditor.7143517f.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.0e395905.js"),["assets/FormEditor.0e395905.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Error.93dd1e5c.js","assets/Error.5cfc41d8.css","assets/broker.cb081a13.js","assets/passwordlessManager.a806df6a.js","assets/icons.e3de8035.js","assets/Passwordless.dd440ef2.js","assets/Passwordless.07735323.css","assets/WidgetsFrame.36374261.js","assets/PlayerNavbar.31f81a29.js","assets/PlayerNavbar.89be930f.css","assets/index.82e1a6b3.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.3b037b7b.css","assets/log.6e68571d.js","assets/broker.bebc9a1e.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c288ced7.js","assets/asyncComputed.0adffaf6.js","assets/forms.8e1f6bae.js","assets/activeRecord.57c6bf02.js","assets/dashes.c877f4ad.js","assets/runnerData.e56dab20.js","assets/hooks.c2425b80.js","assets/jobs.a513b685.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.26785bdc.css","assets/BackButton.1811d14c.js","assets/BackButton.fd898764.css","assets/FormEditor.0b031f26.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.0c8eefb7.js"),["assets/FormPreview.0c8eefb7.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Error.93dd1e5c.js","assets/Error.5cfc41d8.css","assets/broker.cb081a13.js","assets/passwordlessManager.a806df6a.js","assets/icons.e3de8035.js","assets/Passwordless.dd440ef2.js","assets/Passwordless.07735323.css","assets/WidgetsFrame.36374261.js","assets/PlayerNavbar.31f81a29.js","assets/PlayerNavbar.89be930f.css","assets/index.82e1a6b3.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.3b037b7b.css","assets/log.6e68571d.js","assets/broker.bebc9a1e.css","assets/BackButton.0c30933e.js","assets/BackButton.dfea3675.css","assets/asyncComputed.0adffaf6.js","assets/forms.8e1f6bae.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/FormPreview.5b85f48a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.5e57d592.js"),["assets/JobEditor.5e57d592.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/BackButton.1811d14c.js","assets/BackButton.fd898764.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.0adffaf6.js","assets/jobs.a513b685.js","assets/activeRecord.57c6bf02.js","assets/SaveButton.adb205a9.js","assets/icons.e3de8035.js","assets/SaveButton.806cd84b.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c288ced7.js","assets/forms.8e1f6bae.js","assets/dashes.c877f4ad.js","assets/runnerData.e56dab20.js","assets/hooks.c2425b80.js","assets/workspaces.741b6616.js","assets/log.6e68571d.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.26785bdc.css","assets/JobEditor.408d8bc3.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.f621a2dd.js"),["assets/DashEditor.f621a2dd.js","assets/index.82e1a6b3.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/BackButton.1811d14c.js","assets/BackButton.fd898764.css","assets/icons.e3de8035.js","assets/DashPlayer.b337353d.js","assets/passwordlessManager.a806df6a.js","assets/runnerData.e56dab20.js","assets/WidgetsFrame.36374261.js","assets/PlayerNavbar.31f81a29.js","assets/PlayerNavbar.89be930f.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.3b037b7b.css","assets/log.6e68571d.js","assets/Passwordless.dd440ef2.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.07735323.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c288ced7.js","assets/asyncComputed.0adffaf6.js","assets/forms.8e1f6bae.js","assets/activeRecord.57c6bf02.js","assets/dashes.c877f4ad.js","assets/hooks.c2425b80.js","assets/jobs.a513b685.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.26785bdc.css","assets/SaveButton.adb205a9.js","assets/SaveButton.806cd84b.css","assets/DashEditor.2428583f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.57dd7201.js"),["assets/DashPreview.57dd7201.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/DashPlayer.b337353d.js","assets/passwordlessManager.a806df6a.js","assets/runnerData.e56dab20.js","assets/WidgetsFrame.36374261.js","assets/PlayerNavbar.31f81a29.js","assets/icons.e3de8035.js","assets/PlayerNavbar.89be930f.css","assets/index.82e1a6b3.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.3b037b7b.css","assets/log.6e68571d.js","assets/Passwordless.dd440ef2.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.07735323.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.0c30933e.js","assets/BackButton.dfea3675.css","assets/asyncComputed.0adffaf6.js","assets/dashes.c877f4ad.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/DashPreview.b8159f13.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.ebf0fd51.js"),["assets/HookEditor.ebf0fd51.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/BackButton.1811d14c.js","assets/BackButton.fd898764.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c288ced7.js","assets/icons.e3de8035.js","assets/asyncComputed.0adffaf6.js","assets/forms.8e1f6bae.js","assets/activeRecord.57c6bf02.js","assets/dashes.c877f4ad.js","assets/runnerData.e56dab20.js","assets/hooks.c2425b80.js","assets/jobs.a513b685.js","assets/workspaces.741b6616.js","assets/log.6e68571d.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.26785bdc.css","assets/SaveButton.adb205a9.js","assets/SaveButton.806cd84b.css","assets/HookEditor.4890d3b0.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.72575fa9.js"),["assets/TableEditor.72575fa9.js","assets/asyncComputed.0adffaf6.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/tables.58cbb36c.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.1811d14c.js","assets/BackButton.fd898764.css","assets/icons.e3de8035.js","assets/TableEditor.73c06e25.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{L(t,r)});(async()=>{const t=u({render:()=>I(y)});b.init(),w(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",T),t.component("Message",f),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.f61ea6ac.js.map
