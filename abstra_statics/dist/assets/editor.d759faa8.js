import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as u,g as b,_ as t,h as E,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.b581b882.js";import{u as L}from"./index.b85de9d3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9b21a2ae-794a-4038-acaa-d7f96d63cc86",e._sentryDebugIdIdentifier="sentry-dbid-9b21a2ae-794a-4038-acaa-d7f96d63cc86")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=u({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.c104352e.js"),["assets/Home.c104352e.js","assets/Modal.b2162631.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.16207929.js"),["assets/Workspace.16207929.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/icons.5e5a9af6.js","assets/Tooltip.dc795301.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.d5ac46d6.js","assets/workspaces.c5c1498d.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/login.ca3ef1ee.js","assets/DocsButton.b4513551.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.09ee1ead.js"),["assets/Forms.09ee1ead.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/icons.5e5a9af6.js","assets/asyncComputed.d5ac46d6.js","assets/forms.d431a804.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/RuntimeList.9830ae1d.js","assets/DropdownMenu.cfe14248.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.d097fe21.js"),["assets/Dashes.d097fe21.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/icons.5e5a9af6.js","assets/asyncComputed.d5ac46d6.js","assets/dashes.c47359bb.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/runnerData.9dae2b60.js","assets/RuntimeList.9830ae1d.js","assets/DropdownMenu.cfe14248.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.2fec8cf9.js"),["assets/Jobs.2fec8cf9.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/icons.5e5a9af6.js","assets/asyncComputed.d5ac46d6.js","assets/jobs.e2406e88.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/RuntimeList.9830ae1d.js","assets/DropdownMenu.cfe14248.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.09358b81.js"),["assets/Hooks.09358b81.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/icons.5e5a9af6.js","assets/asyncComputed.d5ac46d6.js","assets/hooks.8f003d86.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/RuntimeList.9830ae1d.js","assets/DropdownMenu.cfe14248.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.73cedfbe.js"),["assets/Tables.73cedfbe.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/icons.5e5a9af6.js","assets/asyncComputed.d5ac46d6.js","assets/tables.74278f57.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/RuntimeList.9830ae1d.js","assets/DropdownMenu.cfe14248.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.3ca3eee3.js"),["assets/StyleEditor.3ca3eee3.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.d5ac46d6.js","assets/workspaces.c5c1498d.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/icons.5e5a9af6.js","assets/SidebarPreview.fd66d528.js","assets/PlayerNavbar.d65f9d76.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.9dae2b60.js","assets/colors.9b427580.js","assets/SidebarPreview.12212654.css","assets/SaveButton.9142bab2.js","assets/SaveButton.c5392044.css","assets/StyleEditor.8a31e1bc.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.b18b42b5.js"),["assets/SidebarEditor.b18b42b5.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/workspaces.c5c1498d.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/asyncComputed.d5ac46d6.js","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.9142bab2.js","assets/icons.5e5a9af6.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.fd66d528.js","assets/PlayerNavbar.d65f9d76.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.9dae2b60.js","assets/colors.9b427580.js","assets/SidebarPreview.12212654.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.4b7228c5.js"),["assets/FormEditor.4b7228c5.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/Error.c22b9bfd.js","assets/Error.5cfc41d8.css","assets/broker.7dd7c6d6.js","assets/passwordlessManager.202da07d.js","assets/pubsub.e8d7f2be.js","assets/icons.5e5a9af6.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.31abc16f.js","assets/Passwordless.d73d43e7.js","assets/Passwordless.86ac0c56.css","assets/executeJs.4676d347.js","assets/PlayerNavbar.d65f9d76.js","assets/PlayerNavbar.adff8b48.css","assets/index.b85de9d3.js","assets/WidgetsFrame.c7d52d0d.js","assets/colors.9b427580.js","assets/WidgetsFrame.701a818b.css","assets/Modal.b2162631.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.f3ea43c3.js","assets/asyncComputed.d5ac46d6.js","assets/forms.d431a804.js","assets/activeRecord.d86e77f4.js","assets/dashes.c47359bb.js","assets/runnerData.9dae2b60.js","assets/hooks.8f003d86.js","assets/jobs.e2406e88.js","assets/workspaces.c5c1498d.js","assets/uuid.ed082f56.js","assets/login.ca3ef1ee.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/Tab.a7322636.js","assets/Tab.68f29dcc.css","assets/BackButton.35941303.js","assets/BackButton.40348456.css","assets/SaveButton.9142bab2.js","assets/SaveButton.c5392044.css","assets/DocsButton.b4513551.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.d326264a.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.6172d866.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.fe853505.js"),["assets/FormPreview.fe853505.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/Error.c22b9bfd.js","assets/Error.5cfc41d8.css","assets/broker.7dd7c6d6.js","assets/passwordlessManager.202da07d.js","assets/pubsub.e8d7f2be.js","assets/icons.5e5a9af6.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.31abc16f.js","assets/Passwordless.d73d43e7.js","assets/Passwordless.86ac0c56.css","assets/executeJs.4676d347.js","assets/PlayerNavbar.d65f9d76.js","assets/PlayerNavbar.adff8b48.css","assets/index.b85de9d3.js","assets/WidgetsFrame.c7d52d0d.js","assets/colors.9b427580.js","assets/WidgetsFrame.701a818b.css","assets/Modal.b2162631.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/BackButton.8e05a182.js","assets/BackButton.dd542746.css","assets/asyncComputed.d5ac46d6.js","assets/forms.d431a804.js","assets/activeRecord.d86e77f4.js","assets/workspaces.c5c1498d.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.3d80c4f3.js"),["assets/JobEditor.3d80c4f3.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/Tab.a7322636.js","assets/Tab.68f29dcc.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.d5ac46d6.js","assets/jobs.e2406e88.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/SaveButton.9142bab2.js","assets/icons.5e5a9af6.js","assets/SaveButton.c5392044.css","assets/BackButton.35941303.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.f3ea43c3.js","assets/forms.d431a804.js","assets/dashes.c47359bb.js","assets/runnerData.9dae2b60.js","assets/hooks.8f003d86.js","assets/workspaces.c5c1498d.js","assets/uuid.ed082f56.js","assets/login.ca3ef1ee.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/DocsButton.b4513551.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.87573437.js"),["assets/DashEditor.87573437.js","assets/index.b85de9d3.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/Tab.a7322636.js","assets/Tab.68f29dcc.css","assets/DashPlayer.fed03862.js","assets/runnerData.9dae2b60.js","assets/executeJs.4676d347.js","assets/PlayerNavbar.d65f9d76.js","assets/icons.5e5a9af6.js","assets/PlayerNavbar.adff8b48.css","assets/WidgetsFrame.c7d52d0d.js","assets/colors.9b427580.js","assets/WidgetsFrame.701a818b.css","assets/Modal.b2162631.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.202da07d.js","assets/pubsub.e8d7f2be.js","assets/Passwordless.d73d43e7.js","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.f3ea43c3.js","assets/asyncComputed.d5ac46d6.js","assets/forms.d431a804.js","assets/activeRecord.d86e77f4.js","assets/dashes.c47359bb.js","assets/hooks.8f003d86.js","assets/jobs.e2406e88.js","assets/workspaces.c5c1498d.js","assets/uuid.ed082f56.js","assets/login.ca3ef1ee.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.35941303.js","assets/BackButton.40348456.css","assets/SaveButton.9142bab2.js","assets/SaveButton.c5392044.css","assets/PreviewButton.d326264a.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.b4513551.js","assets/DocsButton.d2184c76.css","assets/DashEditor.4380b9a2.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.8042380c.js"),["assets/DashPreview.8042380c.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.fed03862.js","assets/runnerData.9dae2b60.js","assets/executeJs.4676d347.js","assets/PlayerNavbar.d65f9d76.js","assets/icons.5e5a9af6.js","assets/PlayerNavbar.adff8b48.css","assets/index.b85de9d3.js","assets/WidgetsFrame.c7d52d0d.js","assets/colors.9b427580.js","assets/WidgetsFrame.701a818b.css","assets/Modal.b2162631.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.202da07d.js","assets/pubsub.e8d7f2be.js","assets/Passwordless.d73d43e7.js","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/BackButton.8e05a182.js","assets/BackButton.dd542746.css","assets/asyncComputed.d5ac46d6.js","assets/dashes.c47359bb.js","assets/activeRecord.d86e77f4.js","assets/workspaces.c5c1498d.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.f47ee8a0.js"),["assets/HookEditor.f47ee8a0.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/Tab.a7322636.js","assets/Tab.68f29dcc.css","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.f3ea43c3.js","assets/icons.5e5a9af6.js","assets/asyncComputed.d5ac46d6.js","assets/forms.d431a804.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/dashes.c47359bb.js","assets/runnerData.9dae2b60.js","assets/hooks.8f003d86.js","assets/jobs.e2406e88.js","assets/workspaces.c5c1498d.js","assets/uuid.ed082f56.js","assets/login.ca3ef1ee.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.35941303.js","assets/BackButton.40348456.css","assets/SaveButton.9142bab2.js","assets/SaveButton.c5392044.css","assets/DocsButton.b4513551.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.94475ac7.js"),["assets/TableEditor.94475ac7.js","assets/asyncComputed.d5ac46d6.js","assets/registerWidgets.b581b882.js","assets/registerWidgets.448db7e9.css","assets/tables.74278f57.js","assets/activeRecord.d86e77f4.js","assets/pubsub.e8d7f2be.js","assets/CircularLoading.187bc0bb.js","assets/lottie.11a8eda8.js","assets/CircularLoading.f81b57b4.css","assets/Tab.a7322636.js","assets/Tab.68f29dcc.css","assets/BackButton.35941303.js","assets/BackButton.40348456.css","assets/icons.5e5a9af6.js","assets/DocsButton.b4513551.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.d759faa8.js.map
