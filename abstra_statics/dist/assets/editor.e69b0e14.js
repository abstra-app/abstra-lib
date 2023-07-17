import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as T,s as f,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.88d12ae1.js";import{u as L}from"./index.ae3415a0.js";import{i as w}from"./sentry.2692e5c6.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},y=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,g)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.f0044fad.js"),["assets/Home.f0044fad.js","assets/Modal.f14dcc44.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.503918b9.js"),["assets/Workspace.503918b9.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/Tooltip.ca813c38.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.0bf661db.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/login.29b4c1f1.js","assets/Workspace.3297a659.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.6a52f098.js"),["assets/Forms.6a52f098.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.90807eba.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.ad2f6cc9.js"),["assets/Dashes.ad2f6cc9.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/dashes.645b907c.js","assets/activeRecord.57c6bf02.js","assets/runnerData.833eed88.js","assets/RuntimeList.90807eba.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.01829812.js"),["assets/Jobs.01829812.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/jobs.098bcb10.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.90807eba.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.02b42e69.js"),["assets/Hooks.02b42e69.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/hooks.d59fb935.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.90807eba.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.e366466f.js"),["assets/Tables.e366466f.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/tables.1eeef4d2.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.90807eba.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>e(()=>import("./StyleEditor.97dd3c82.js"),["assets/StyleEditor.97dd3c82.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0bf661db.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/index.ae3415a0.js","assets/icons.778999cd.js","assets/SaveButton.c080879d.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.1dfaa6b8.js","assets/colors.4ea7d5a7.js","assets/colors.89be930f.css","assets/runnerData.833eed88.js","assets/SidebarPreview.03190bc4.css","assets/StyleEditor.80771b58.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>e(()=>import("./SidebarEditor.8649535a.js"),["assets/SidebarEditor.8649535a.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/asyncComputed.0bf661db.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.c080879d.js","assets/icons.778999cd.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.1dfaa6b8.js","assets/colors.4ea7d5a7.js","assets/colors.89be930f.css","assets/runnerData.833eed88.js","assets/SidebarPreview.03190bc4.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.4e11640c.js"),["assets/FormEditor.4e11640c.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Error.e003c235.js","assets/Error.5cfc41d8.css","assets/broker.6483aa8d.js","assets/passwordlessManager.a5c71e7e.js","assets/icons.778999cd.js","assets/Passwordless.a5311b67.js","assets/Passwordless.2b58e538.css","assets/WidgetsFrame.0c34a010.js","assets/colors.4ea7d5a7.js","assets/colors.89be930f.css","assets/index.ae3415a0.js","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.47145056.css","assets/log.d8fc5146.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d0b0855b.js","assets/asyncComputed.0bf661db.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/dashes.645b907c.js","assets/runnerData.833eed88.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.ff64d06f.js","assets/BackButton.f2f3c401.css","assets/SaveButton.c080879d.js","assets/SaveButton.7277f302.css","assets/PreviewButton.31dce115.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.96d71607.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.c8b10e45.js"),["assets/FormPreview.c8b10e45.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Error.e003c235.js","assets/Error.5cfc41d8.css","assets/broker.6483aa8d.js","assets/passwordlessManager.a5c71e7e.js","assets/icons.778999cd.js","assets/Passwordless.a5311b67.js","assets/Passwordless.2b58e538.css","assets/WidgetsFrame.0c34a010.js","assets/colors.4ea7d5a7.js","assets/colors.89be930f.css","assets/index.ae3415a0.js","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.47145056.css","assets/log.d8fc5146.js","assets/broker.f87ad36d.css","assets/BackButton.e0388e6c.js","assets/BackButton.dd542746.css","assets/asyncComputed.0bf661db.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.627dffd6.js"),["assets/JobEditor.627dffd6.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.ff64d06f.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.0bf661db.js","assets/jobs.098bcb10.js","assets/activeRecord.57c6bf02.js","assets/SaveButton.c080879d.js","assets/icons.778999cd.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d0b0855b.js","assets/forms.cc593bbd.js","assets/dashes.645b907c.js","assets/runnerData.833eed88.js","assets/hooks.d59fb935.js","assets/workspaces.741b6616.js","assets/log.d8fc5146.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/JobEditor.408d8bc3.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.a82b84d4.js"),["assets/DashEditor.a82b84d4.js","assets/index.ae3415a0.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.ff64d06f.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.012c8c7f.js","assets/passwordlessManager.a5c71e7e.js","assets/runnerData.833eed88.js","assets/WidgetsFrame.0c34a010.js","assets/colors.4ea7d5a7.js","assets/icons.778999cd.js","assets/colors.89be930f.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.47145056.css","assets/log.d8fc5146.js","assets/Passwordless.a5311b67.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d0b0855b.js","assets/asyncComputed.0bf661db.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/dashes.645b907c.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.c080879d.js","assets/SaveButton.7277f302.css","assets/PreviewButton.31dce115.js","assets/PreviewButton.52324bbf.css","assets/DashEditor.44715c85.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.8bca255a.js"),["assets/DashPreview.8bca255a.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/DashPlayer.012c8c7f.js","assets/passwordlessManager.a5c71e7e.js","assets/runnerData.833eed88.js","assets/WidgetsFrame.0c34a010.js","assets/colors.4ea7d5a7.js","assets/icons.778999cd.js","assets/colors.89be930f.css","assets/index.ae3415a0.js","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.47145056.css","assets/log.d8fc5146.js","assets/Passwordless.a5311b67.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.e0388e6c.js","assets/BackButton.dd542746.css","assets/asyncComputed.0bf661db.js","assets/dashes.645b907c.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.fda489f3.js"),["assets/HookEditor.fda489f3.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.ff64d06f.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d0b0855b.js","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/dashes.645b907c.js","assets/runnerData.833eed88.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/log.d8fc5146.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.c080879d.js","assets/SaveButton.7277f302.css","assets/HookEditor.e8d0c366.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.4deb66c5.js"),["assets/TableEditor.4deb66c5.js","assets/asyncComputed.0bf661db.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/tables.1eeef4d2.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.ff64d06f.js","assets/BackButton.f2f3c401.css","assets/icons.778999cd.js","assets/TableEditor.e234e809.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{L(t,r)});(async()=>{const t=u({render:()=>I(y)});b.init(),w(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",T),t.component("Message",f),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.e69b0e14.js.map
