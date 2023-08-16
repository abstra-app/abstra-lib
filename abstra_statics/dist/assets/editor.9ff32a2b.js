import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as v,i as f,P as A,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.1f64062d.js";import{u as L}from"./index.247b1b38.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="50ef44f2-c401-44b0-97a0-b4735024cb60",e._sentryDebugIdIdentifier="sentry-dbid-50ef44f2-c401-44b0-97a0-b4735024cb60")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.a2177b79.js"),["assets/Home.a2177b79.js","assets/Modal.68e9439f.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.60f364a0.js"),["assets/Workspace.60f364a0.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/icons.888e0741.js","assets/Tooltip.18c87d14.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.be96efa9.js","assets/workspaces.5570ba2d.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/login.f06b9578.js","assets/DocsButton.86a17ad8.js","assets/DocsButton.d2184c76.css","assets/Workspace.b7d4a3bf.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.bdf059d2.js"),["assets/Forms.bdf059d2.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/icons.888e0741.js","assets/asyncComputed.be96efa9.js","assets/forms.06156222.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/RuntimeList.7e838c05.js","assets/DropdownMenu.e0a0f092.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.4d20c26c.js"),["assets/Dashes.4d20c26c.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/icons.888e0741.js","assets/asyncComputed.be96efa9.js","assets/dashes.47698501.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/runnerData.19896da7.js","assets/RuntimeList.7e838c05.js","assets/DropdownMenu.e0a0f092.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.c809035b.js"),["assets/Jobs.c809035b.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/icons.888e0741.js","assets/asyncComputed.be96efa9.js","assets/jobs.9275facb.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/RuntimeList.7e838c05.js","assets/DropdownMenu.e0a0f092.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.3997ff36.js"),["assets/Hooks.3997ff36.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/icons.888e0741.js","assets/asyncComputed.be96efa9.js","assets/hooks.96142eaa.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/RuntimeList.7e838c05.js","assets/DropdownMenu.e0a0f092.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.22583d0b.js"),["assets/Tables.22583d0b.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/icons.888e0741.js","assets/asyncComputed.be96efa9.js","assets/tables.e3faebf2.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/RuntimeList.7e838c05.js","assets/DropdownMenu.e0a0f092.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.d8396fdb.js"),["assets/StyleEditor.d8396fdb.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.be96efa9.js","assets/workspaces.5570ba2d.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/icons.888e0741.js","assets/SidebarPreview.086a97af.js","assets/PlayerNavbar.e608b902.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.19896da7.js","assets/colors.d1d40ad8.js","assets/SidebarPreview.12212654.css","assets/SaveButton.bb7defd6.js","assets/SaveButton.c5392044.css","assets/StyleEditor.8a31e1bc.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.8724d18b.js"),["assets/SidebarEditor.8724d18b.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/workspaces.5570ba2d.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/asyncComputed.be96efa9.js","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.bb7defd6.js","assets/icons.888e0741.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.086a97af.js","assets/PlayerNavbar.e608b902.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.19896da7.js","assets/colors.d1d40ad8.js","assets/SidebarPreview.12212654.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.9ad4f6d1.js"),["assets/FormEditor.9ad4f6d1.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/Error.5ebce65a.js","assets/Error.5cfc41d8.css","assets/broker.1f6a1a31.js","assets/passwordlessManager.f7bf4528.js","assets/pubsub.3afe3339.js","assets/icons.888e0741.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.1528dfde.js","assets/Passwordless.88ee3445.js","assets/Passwordless.86ac0c56.css","assets/executeJs.9d3c1254.js","assets/PlayerNavbar.e608b902.js","assets/PlayerNavbar.adff8b48.css","assets/index.247b1b38.js","assets/WidgetsFrame.444835bd.js","assets/colors.d1d40ad8.js","assets/WidgetsFrame.701a818b.css","assets/Modal.68e9439f.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.8206f9e1.js","assets/asyncComputed.be96efa9.js","assets/forms.06156222.js","assets/activeRecord.a4f84f22.js","assets/dashes.47698501.js","assets/runnerData.19896da7.js","assets/hooks.96142eaa.js","assets/jobs.9275facb.js","assets/workspaces.5570ba2d.js","assets/uuid.0bb7ec95.js","assets/login.f06b9578.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/Tab.94bbeb5a.js","assets/Tab.68f29dcc.css","assets/BackButton.5157bd81.js","assets/BackButton.40348456.css","assets/SaveButton.bb7defd6.js","assets/SaveButton.c5392044.css","assets/DocsButton.86a17ad8.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.5dd6304f.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.6172d866.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.3ca915ed.js"),["assets/FormPreview.3ca915ed.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/Error.5ebce65a.js","assets/Error.5cfc41d8.css","assets/broker.1f6a1a31.js","assets/passwordlessManager.f7bf4528.js","assets/pubsub.3afe3339.js","assets/icons.888e0741.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.1528dfde.js","assets/Passwordless.88ee3445.js","assets/Passwordless.86ac0c56.css","assets/executeJs.9d3c1254.js","assets/PlayerNavbar.e608b902.js","assets/PlayerNavbar.adff8b48.css","assets/index.247b1b38.js","assets/WidgetsFrame.444835bd.js","assets/colors.d1d40ad8.js","assets/WidgetsFrame.701a818b.css","assets/Modal.68e9439f.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/BackButton.a1b57cb6.js","assets/BackButton.dd542746.css","assets/asyncComputed.be96efa9.js","assets/forms.06156222.js","assets/activeRecord.a4f84f22.js","assets/workspaces.5570ba2d.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.a1882d2a.js"),["assets/JobEditor.a1882d2a.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/Tab.94bbeb5a.js","assets/Tab.68f29dcc.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.be96efa9.js","assets/jobs.9275facb.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/SaveButton.bb7defd6.js","assets/icons.888e0741.js","assets/SaveButton.c5392044.css","assets/BackButton.5157bd81.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.8206f9e1.js","assets/forms.06156222.js","assets/dashes.47698501.js","assets/runnerData.19896da7.js","assets/hooks.96142eaa.js","assets/workspaces.5570ba2d.js","assets/uuid.0bb7ec95.js","assets/login.f06b9578.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/DocsButton.86a17ad8.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.60d2f250.js"),["assets/DashEditor.60d2f250.js","assets/index.247b1b38.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/Tab.94bbeb5a.js","assets/Tab.68f29dcc.css","assets/DashPlayer.2705d049.js","assets/runnerData.19896da7.js","assets/executeJs.9d3c1254.js","assets/PlayerNavbar.e608b902.js","assets/icons.888e0741.js","assets/PlayerNavbar.adff8b48.css","assets/WidgetsFrame.444835bd.js","assets/colors.d1d40ad8.js","assets/WidgetsFrame.701a818b.css","assets/Modal.68e9439f.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.f7bf4528.js","assets/pubsub.3afe3339.js","assets/Passwordless.88ee3445.js","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.8206f9e1.js","assets/asyncComputed.be96efa9.js","assets/forms.06156222.js","assets/activeRecord.a4f84f22.js","assets/dashes.47698501.js","assets/hooks.96142eaa.js","assets/jobs.9275facb.js","assets/workspaces.5570ba2d.js","assets/uuid.0bb7ec95.js","assets/login.f06b9578.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.5157bd81.js","assets/BackButton.40348456.css","assets/SaveButton.bb7defd6.js","assets/SaveButton.c5392044.css","assets/PreviewButton.5dd6304f.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.86a17ad8.js","assets/DocsButton.d2184c76.css","assets/DashEditor.4380b9a2.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.d5f90f61.js"),["assets/DashPreview.d5f90f61.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.2705d049.js","assets/runnerData.19896da7.js","assets/executeJs.9d3c1254.js","assets/PlayerNavbar.e608b902.js","assets/icons.888e0741.js","assets/PlayerNavbar.adff8b48.css","assets/index.247b1b38.js","assets/WidgetsFrame.444835bd.js","assets/colors.d1d40ad8.js","assets/WidgetsFrame.701a818b.css","assets/Modal.68e9439f.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.f7bf4528.js","assets/pubsub.3afe3339.js","assets/Passwordless.88ee3445.js","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/BackButton.a1b57cb6.js","assets/BackButton.dd542746.css","assets/asyncComputed.be96efa9.js","assets/dashes.47698501.js","assets/activeRecord.a4f84f22.js","assets/workspaces.5570ba2d.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.09ee6050.js"),["assets/HookEditor.09ee6050.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/Tab.94bbeb5a.js","assets/Tab.68f29dcc.css","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.8206f9e1.js","assets/icons.888e0741.js","assets/asyncComputed.be96efa9.js","assets/forms.06156222.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/dashes.47698501.js","assets/runnerData.19896da7.js","assets/hooks.96142eaa.js","assets/jobs.9275facb.js","assets/workspaces.5570ba2d.js","assets/uuid.0bb7ec95.js","assets/login.f06b9578.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.5157bd81.js","assets/BackButton.40348456.css","assets/SaveButton.bb7defd6.js","assets/SaveButton.c5392044.css","assets/DocsButton.86a17ad8.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.013b6e38.js"),["assets/TableEditor.013b6e38.js","assets/asyncComputed.be96efa9.js","assets/registerWidgets.1f64062d.js","assets/registerWidgets.448db7e9.css","assets/tables.e3faebf2.js","assets/activeRecord.a4f84f22.js","assets/pubsub.3afe3339.js","assets/CircularLoading.48f8280b.js","assets/lottie.ec4238e0.js","assets/CircularLoading.f81b57b4.css","assets/Tab.94bbeb5a.js","assets/Tab.68f29dcc.css","assets/BackButton.5157bd81.js","assets/BackButton.40348456.css","assets/icons.888e0741.js","assets/DocsButton.86a17ad8.js","assets/DocsButton.d2184c76.css","assets/SaveButton.bb7defd6.js","assets/SaveButton.c5392044.css","assets/TableEditor.66877c31.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),f(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.9ff32a2b.js.map
