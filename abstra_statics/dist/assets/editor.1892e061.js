import{r as _,d as m,o as d,a as p,b as c,c as h,e as u,f as l,g as E,_ as t,h as b,T as v,i as f,P as A,C as P,M as I,I as w,s as D,j as a,k as y,l as T,m as V,n as g}from"./registerWidgets.ce5f9e65.js";import{u as R}from"./index.882a8616.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e4a48165-121d-4b40-ba23-95096d1c0c29",e._sentryDebugIdIdentifier="sentry-dbid-e4a48165-121d-4b40-ba23-95096d1c0c29")}catch{}})();const s=_(!1),k=()=>{window.innerWidth<780?s.value=!0:s.value=!1},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},O=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",k)}),(o,n)=>{const i=p("router-view");return c(),h("div",L,[u(i)])}}});const r=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.285ae96d.js"),["assets/Home.285ae96d.js","assets/Modal.a3505e8b.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.e4c8d93e.js"),["assets/Workspace.e4c8d93e.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/icons.3f254762.js","assets/Tooltip.61dcd6cf.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.225e3d7a.js","assets/workspaces.ee892802.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/DocsButton.a3c49ecf.js","assets/DocsButton.d2184c76.css","assets/Workspace.4ee77fdc.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.6784b90c.js"),["assets/Forms.6784b90c.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/forms.f4d69d92.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/RuntimeList.d50d5741.js","assets/DropdownMenu.c386a8d0.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.de4cd1bb.js"),["assets/Dashes.de4cd1bb.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/dashes.92914592.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/index.882a8616.js","assets/RuntimeList.d50d5741.js","assets/DropdownMenu.c386a8d0.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.8387556a.js"),["assets/Jobs.8387556a.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/jobs.863ea8f5.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/RuntimeList.d50d5741.js","assets/DropdownMenu.c386a8d0.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.d5783cf8.js"),["assets/Hooks.d5783cf8.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/hooks.bb79d932.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/RuntimeList.d50d5741.js","assets/DropdownMenu.c386a8d0.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.ac65b9d1.js"),["assets/StyleEditor.ac65b9d1.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/asyncComputed.225e3d7a.js","assets/workspaces.ee892802.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/icons.3f254762.js","assets/SaveButton.a8d3902d.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.54592462.js","assets/PlayerNavbar.dd3835ff.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.882a8616.js","assets/WidgetsFrame.6a8fc0e3.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.1afbe998.js"),["assets/SidebarEditor.1afbe998.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/workspaces.ee892802.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/asyncComputed.225e3d7a.js","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.a8d3902d.js","assets/icons.3f254762.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.54592462.js","assets/PlayerNavbar.dd3835ff.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.882a8616.js","assets/WidgetsFrame.6a8fc0e3.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/SidebarEditor.c089a033.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.216ceed8.js"),["assets/FormEditor.216ceed8.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/Error.247f15fc.js","assets/Error.5cfc41d8.css","assets/broker.375532f2.js","assets/passwordlessManager.2133f51e.js","assets/pubsub.4ee72047.js","assets/storage.18190b76.js","assets/Passwordless.c35055bc.js","assets/icons.3f254762.js","assets/Passwordless.86ac0c56.css","assets/executeJs.fa59fdc9.js","assets/PlayerNavbar.dd3835ff.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.882a8616.js","assets/Steps.77641f42.js","assets/Steps.998aa76d.css","assets/Modal.a3505e8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.6a8fc0e3.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.5cbb0d88.js","assets/broker.a17a9f70.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.47e67fd6.js","assets/asyncComputed.225e3d7a.js","assets/forms.f4d69d92.js","assets/activeRecord.e78d60ff.js","assets/dashes.92914592.js","assets/hooks.bb79d932.js","assets/jobs.863ea8f5.js","assets/workspaces.ee892802.js","assets/uuid.8f4fcdbf.js","assets/DocsButton.a3c49ecf.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.8708d896.css","assets/BackButton.e1e1fe85.js","assets/BackButton.40348456.css","assets/SaveButton.a8d3902d.js","assets/SaveButton.c5392044.css","assets/PreviewButton.56cbfe8f.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.62a947bb.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.4c1d2707.js"),["assets/FormPreview.4c1d2707.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/Error.247f15fc.js","assets/Error.5cfc41d8.css","assets/broker.375532f2.js","assets/passwordlessManager.2133f51e.js","assets/pubsub.4ee72047.js","assets/storage.18190b76.js","assets/Passwordless.c35055bc.js","assets/icons.3f254762.js","assets/Passwordless.86ac0c56.css","assets/executeJs.fa59fdc9.js","assets/PlayerNavbar.dd3835ff.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.882a8616.js","assets/Steps.77641f42.js","assets/Steps.998aa76d.css","assets/Modal.a3505e8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.6a8fc0e3.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.5cbb0d88.js","assets/broker.a17a9f70.css","assets/BackButton.01140cee.js","assets/BackButton.dd542746.css","assets/asyncComputed.225e3d7a.js","assets/forms.f4d69d92.js","assets/activeRecord.e78d60ff.js","assets/workspaces.ee892802.js","assets/FormPreview.77e60739.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.bcf7d976.js"),["assets/JobEditor.bcf7d976.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.47e67fd6.js","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/forms.f4d69d92.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/dashes.92914592.js","assets/index.882a8616.js","assets/hooks.bb79d932.js","assets/jobs.863ea8f5.js","assets/workspaces.ee892802.js","assets/uuid.8f4fcdbf.js","assets/DocsButton.a3c49ecf.js","assets/DocsButton.d2184c76.css","assets/storage.18190b76.js","assets/UnsavedChangesHandler.8708d896.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.a8d3902d.js","assets/SaveButton.c5392044.css","assets/BackButton.e1e1fe85.js","assets/BackButton.40348456.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.452c34f8.js"),["assets/DashEditor.452c34f8.js","assets/index.882a8616.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.47e67fd6.js","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/forms.f4d69d92.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/dashes.92914592.js","assets/hooks.bb79d932.js","assets/jobs.863ea8f5.js","assets/workspaces.ee892802.js","assets/uuid.8f4fcdbf.js","assets/DocsButton.a3c49ecf.js","assets/DocsButton.d2184c76.css","assets/storage.18190b76.js","assets/UnsavedChangesHandler.8708d896.css","assets/DashPlayer.87491633.js","assets/executeJs.fa59fdc9.js","assets/PlayerNavbar.dd3835ff.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.77641f42.js","assets/Steps.998aa76d.css","assets/Modal.a3505e8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.2133f51e.js","assets/Passwordless.c35055bc.js","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/WidgetsFrame.6a8fc0e3.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.e1e1fe85.js","assets/BackButton.40348456.css","assets/SaveButton.a8d3902d.js","assets/SaveButton.c5392044.css","assets/PreviewButton.56cbfe8f.js","assets/PreviewButton.52324bbf.css","assets/DashEditor.7597d8d6.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.875afa2f.js"),["assets/DashPreview.875afa2f.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/DashPlayer.87491633.js","assets/executeJs.fa59fdc9.js","assets/PlayerNavbar.dd3835ff.js","assets/icons.3f254762.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.882a8616.js","assets/Steps.77641f42.js","assets/Steps.998aa76d.css","assets/Modal.a3505e8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.2133f51e.js","assets/pubsub.4ee72047.js","assets/storage.18190b76.js","assets/Passwordless.c35055bc.js","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/WidgetsFrame.6a8fc0e3.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.01140cee.js","assets/BackButton.dd542746.css","assets/asyncComputed.225e3d7a.js","assets/dashes.92914592.js","assets/activeRecord.e78d60ff.js","assets/workspaces.ee892802.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.dbe30499.js"),["assets/HookEditor.dbe30499.js","assets/registerWidgets.ce5f9e65.js","assets/registerWidgets.efc6a450.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.47e67fd6.js","assets/icons.3f254762.js","assets/asyncComputed.225e3d7a.js","assets/forms.f4d69d92.js","assets/activeRecord.e78d60ff.js","assets/pubsub.4ee72047.js","assets/dashes.92914592.js","assets/index.882a8616.js","assets/hooks.bb79d932.js","assets/jobs.863ea8f5.js","assets/workspaces.ee892802.js","assets/uuid.8f4fcdbf.js","assets/DocsButton.a3c49ecf.js","assets/DocsButton.d2184c76.css","assets/storage.18190b76.js","assets/UnsavedChangesHandler.8708d896.css","assets/CircularLoading.e6f5253e.js","assets/lottie.a2200bf1.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.e1e1fe85.js","assets/BackButton.40348456.css","assets/SaveButton.a8d3902d.js","assets/SaveButton.c5392044.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{R(e,o)});(async()=>{const e=b({render:()=>y(O)});v.init(),f(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",w),e.component("Message",D),a(e,T),a(e,V),a(e,g)})();
//# sourceMappingURL=editor.1892e061.js.map
