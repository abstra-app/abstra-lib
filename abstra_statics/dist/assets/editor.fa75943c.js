import{r as _,d as m,o as p,a as d,b as c,c as h,e as b,f as l,g as u,_ as t,h as E,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.88c51da7.js";import{u as L}from"./index.30a589ef.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f434bbba-76b0-46e0-aa09-09a9e3446a93",e._sentryDebugIdIdentifier="sentry-dbid-f434bbba-76b0-46e0-aa09-09a9e3446a93")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[b(i)])}}});const r=l({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.25282c3c.js"),["assets/Home.25282c3c.js","assets/Modal.a39e83fe.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.97f4a4fe.js"),["assets/Workspace.97f4a4fe.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/icons.b8d1681f.js","assets/Tooltip.33a8e6a2.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.a5845b08.js","assets/workspaces.228500e6.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/login.6a0ec72d.js","assets/DocsButton.f656f75c.js","assets/DocsButton.d2184c76.css","assets/Workspace.b7d4a3bf.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.209799c9.js"),["assets/Forms.209799c9.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/icons.b8d1681f.js","assets/asyncComputed.a5845b08.js","assets/forms.902fc5ec.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/RuntimeList.9d56065f.js","assets/DropdownMenu.66652201.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.eae6f376.js"),["assets/Dashes.eae6f376.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/icons.b8d1681f.js","assets/asyncComputed.a5845b08.js","assets/dashes.bb1f1e30.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/runnerData.80612952.js","assets/RuntimeList.9d56065f.js","assets/DropdownMenu.66652201.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.d413816d.js"),["assets/Jobs.d413816d.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/icons.b8d1681f.js","assets/asyncComputed.a5845b08.js","assets/jobs.d7d6b773.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/RuntimeList.9d56065f.js","assets/DropdownMenu.66652201.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.830156af.js"),["assets/Hooks.830156af.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/icons.b8d1681f.js","assets/asyncComputed.a5845b08.js","assets/hooks.41ce60ac.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/RuntimeList.9d56065f.js","assets/DropdownMenu.66652201.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.716d09b7.js"),["assets/Tables.716d09b7.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/icons.b8d1681f.js","assets/asyncComputed.a5845b08.js","assets/tables.eb122005.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/RuntimeList.9d56065f.js","assets/DropdownMenu.66652201.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.b3c00421.js"),["assets/StyleEditor.b3c00421.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.a5845b08.js","assets/workspaces.228500e6.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/icons.b8d1681f.js","assets/SidebarPreview.7b1e4dbf.js","assets/PlayerNavbar.ccfbde1a.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.80612952.js","assets/colors.679b0747.js","assets/SidebarPreview.12212654.css","assets/SaveButton.a7d054ee.js","assets/SaveButton.c5392044.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.f650b7c4.js"),["assets/SidebarEditor.f650b7c4.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/workspaces.228500e6.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/asyncComputed.a5845b08.js","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.a7d054ee.js","assets/icons.b8d1681f.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.7b1e4dbf.js","assets/PlayerNavbar.ccfbde1a.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.80612952.js","assets/colors.679b0747.js","assets/SidebarPreview.12212654.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.b43758b9.js"),["assets/FormEditor.b43758b9.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/Error.d3cd9232.js","assets/Error.5cfc41d8.css","assets/broker.f19382ec.js","assets/passwordlessManager.28ad1e43.js","assets/pubsub.4f378f83.js","assets/icons.b8d1681f.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.d8408961.js","assets/Passwordless.d10721ba.js","assets/Passwordless.86ac0c56.css","assets/executeJs.2d59e163.js","assets/PlayerNavbar.ccfbde1a.js","assets/PlayerNavbar.adff8b48.css","assets/index.30a589ef.js","assets/WidgetsFrame.65252261.js","assets/colors.679b0747.js","assets/WidgetsFrame.701a818b.css","assets/Modal.a39e83fe.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.046df99d.js","assets/asyncComputed.a5845b08.js","assets/forms.902fc5ec.js","assets/activeRecord.aa5c6156.js","assets/dashes.bb1f1e30.js","assets/runnerData.80612952.js","assets/hooks.41ce60ac.js","assets/jobs.d7d6b773.js","assets/workspaces.228500e6.js","assets/uuid.5f20a77c.js","assets/login.6a0ec72d.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/Tab.a0b30bed.js","assets/Tab.68f29dcc.css","assets/BackButton.219d80b6.js","assets/BackButton.40348456.css","assets/SaveButton.a7d054ee.js","assets/SaveButton.c5392044.css","assets/DocsButton.f656f75c.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.a73031dc.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.6172d866.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.92c0a85d.js"),["assets/FormPreview.92c0a85d.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/Error.d3cd9232.js","assets/Error.5cfc41d8.css","assets/broker.f19382ec.js","assets/passwordlessManager.28ad1e43.js","assets/pubsub.4f378f83.js","assets/icons.b8d1681f.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.d8408961.js","assets/Passwordless.d10721ba.js","assets/Passwordless.86ac0c56.css","assets/executeJs.2d59e163.js","assets/PlayerNavbar.ccfbde1a.js","assets/PlayerNavbar.adff8b48.css","assets/index.30a589ef.js","assets/WidgetsFrame.65252261.js","assets/colors.679b0747.js","assets/WidgetsFrame.701a818b.css","assets/Modal.a39e83fe.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/BackButton.65202e79.js","assets/BackButton.dd542746.css","assets/asyncComputed.a5845b08.js","assets/forms.902fc5ec.js","assets/activeRecord.aa5c6156.js","assets/workspaces.228500e6.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.d71eeac9.js"),["assets/JobEditor.d71eeac9.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/Tab.a0b30bed.js","assets/Tab.68f29dcc.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.a5845b08.js","assets/jobs.d7d6b773.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/SaveButton.a7d054ee.js","assets/icons.b8d1681f.js","assets/SaveButton.c5392044.css","assets/BackButton.219d80b6.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.046df99d.js","assets/forms.902fc5ec.js","assets/dashes.bb1f1e30.js","assets/runnerData.80612952.js","assets/hooks.41ce60ac.js","assets/workspaces.228500e6.js","assets/uuid.5f20a77c.js","assets/login.6a0ec72d.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/DocsButton.f656f75c.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.29163721.js"),["assets/DashEditor.29163721.js","assets/index.30a589ef.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/Tab.a0b30bed.js","assets/Tab.68f29dcc.css","assets/DashPlayer.7f162ffc.js","assets/runnerData.80612952.js","assets/executeJs.2d59e163.js","assets/PlayerNavbar.ccfbde1a.js","assets/icons.b8d1681f.js","assets/PlayerNavbar.adff8b48.css","assets/WidgetsFrame.65252261.js","assets/colors.679b0747.js","assets/WidgetsFrame.701a818b.css","assets/Modal.a39e83fe.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.28ad1e43.js","assets/pubsub.4f378f83.js","assets/Passwordless.d10721ba.js","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.046df99d.js","assets/asyncComputed.a5845b08.js","assets/forms.902fc5ec.js","assets/activeRecord.aa5c6156.js","assets/dashes.bb1f1e30.js","assets/hooks.41ce60ac.js","assets/jobs.d7d6b773.js","assets/workspaces.228500e6.js","assets/uuid.5f20a77c.js","assets/login.6a0ec72d.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.219d80b6.js","assets/BackButton.40348456.css","assets/SaveButton.a7d054ee.js","assets/SaveButton.c5392044.css","assets/PreviewButton.a73031dc.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.f656f75c.js","assets/DocsButton.d2184c76.css","assets/DashEditor.3a6ec511.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.d4ed48f5.js"),["assets/DashPreview.d4ed48f5.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.7f162ffc.js","assets/runnerData.80612952.js","assets/executeJs.2d59e163.js","assets/PlayerNavbar.ccfbde1a.js","assets/icons.b8d1681f.js","assets/PlayerNavbar.adff8b48.css","assets/index.30a589ef.js","assets/WidgetsFrame.65252261.js","assets/colors.679b0747.js","assets/WidgetsFrame.701a818b.css","assets/Modal.a39e83fe.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.28ad1e43.js","assets/pubsub.4f378f83.js","assets/Passwordless.d10721ba.js","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/BackButton.65202e79.js","assets/BackButton.dd542746.css","assets/asyncComputed.a5845b08.js","assets/dashes.bb1f1e30.js","assets/activeRecord.aa5c6156.js","assets/workspaces.228500e6.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.33c5a4e5.js"),["assets/HookEditor.33c5a4e5.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/Tab.a0b30bed.js","assets/Tab.68f29dcc.css","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.046df99d.js","assets/icons.b8d1681f.js","assets/asyncComputed.a5845b08.js","assets/forms.902fc5ec.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/dashes.bb1f1e30.js","assets/runnerData.80612952.js","assets/hooks.41ce60ac.js","assets/jobs.d7d6b773.js","assets/workspaces.228500e6.js","assets/uuid.5f20a77c.js","assets/login.6a0ec72d.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.219d80b6.js","assets/BackButton.40348456.css","assets/SaveButton.a7d054ee.js","assets/SaveButton.c5392044.css","assets/DocsButton.f656f75c.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.7ca82bd6.js"),["assets/TableEditor.7ca82bd6.js","assets/asyncComputed.a5845b08.js","assets/registerWidgets.88c51da7.js","assets/registerWidgets.448db7e9.css","assets/tables.eb122005.js","assets/activeRecord.aa5c6156.js","assets/pubsub.4f378f83.js","assets/CircularLoading.3066df0c.js","assets/lottie.67123843.js","assets/CircularLoading.f81b57b4.css","assets/Tab.a0b30bed.js","assets/Tab.68f29dcc.css","assets/BackButton.219d80b6.js","assets/BackButton.40348456.css","assets/icons.b8d1681f.js","assets/DocsButton.f656f75c.js","assets/DocsButton.d2184c76.css","assets/SaveButton.a7d054ee.js","assets/SaveButton.c5392044.css","assets/TableEditor.66877c31.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.fa75943c.js.map
