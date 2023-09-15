import{r as _,d as m,o as d,a as p,b as c,c as h,e as u,f as b,g as l,_ as t,h as E,T as f,i as v,P as A,C as P,M as I,I as w,s as D,j as r,k as y,l as T,m as V,n as g}from"./registerWidgets.65ad7269.js";import{u as R}from"./index.c4ca38a7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6b27a852-696b-442f-bc2d-cde8b0de75fc",e._sentryDebugIdIdentifier="sentry-dbid-6b27a852-696b-442f-bc2d-cde8b0de75fc")}catch{}})();const s=_(!1),k=()=>{window.innerWidth<780?s.value=!0:s.value=!1},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},O=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",k)}),(o,n)=>{const i=p("router-view");return c(),h("div",L,[u(i)])}}});const a=b({history:l("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.8b40b77d.js"),["assets/Home.8b40b77d.js","assets/Modal.37da020a.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.cb330647.js"),["assets/Workspace.cb330647.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/icons.af1545d2.js","assets/Tooltip.65cabe80.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.bc9bb426.js","assets/workspaces.d21adf51.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/DocsButton.8a512f2e.js","assets/DocsButton.d2184c76.css","assets/Workspace.463776d7.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.9feadb2c.js"),["assets/Forms.9feadb2c.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/forms.536560b8.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/RuntimeList.ac15a6e1.js","assets/DropdownMenu.4f61f503.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.3dfbbbeb.js"),["assets/Dashes.3dfbbbeb.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/dashes.969c2360.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/index.c4ca38a7.js","assets/RuntimeList.ac15a6e1.js","assets/DropdownMenu.4f61f503.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.43ac0c4b.js"),["assets/Jobs.43ac0c4b.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/jobs.94a8b6f4.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/RuntimeList.ac15a6e1.js","assets/DropdownMenu.4f61f503.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.d612aae1.js"),["assets/Hooks.d612aae1.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/hooks.2b4d3cdc.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/RuntimeList.ac15a6e1.js","assets/DropdownMenu.4f61f503.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.770055c9.js"),["assets/StyleEditor.770055c9.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/asyncComputed.bc9bb426.js","assets/workspaces.d21adf51.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/icons.af1545d2.js","assets/SaveButton.5ac999c9.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.b856029d.js","assets/PlayerNavbar.fbf462a4.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.c4ca38a7.js","assets/WidgetsFrame.9f065f43.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.5276a562.js"),["assets/SidebarEditor.5276a562.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/workspaces.d21adf51.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/asyncComputed.bc9bb426.js","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.5ac999c9.js","assets/icons.af1545d2.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.b856029d.js","assets/PlayerNavbar.fbf462a4.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.c4ca38a7.js","assets/WidgetsFrame.9f065f43.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/SidebarEditor.c089a033.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.277f6ba3.js"),["assets/FormEditor.277f6ba3.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/Error.64b8b0c1.js","assets/Error.5cfc41d8.css","assets/broker.46cc97a8.js","assets/passwordlessManager.907d7dd5.js","assets/pubsub.ae54b92c.js","assets/storage.885899ad.js","assets/Passwordless.e3b298b6.js","assets/icons.af1545d2.js","assets/Passwordless.38735f5c.css","assets/executeJs.7ff7afd2.js","assets/PlayerNavbar.fbf462a4.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.c4ca38a7.js","assets/Steps.f65c7bc6.js","assets/Steps.998aa76d.css","assets/Modal.37da020a.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.9f065f43.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.872b1b3a.js","assets/broker.54a676ec.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3ffd518c.js","assets/asyncComputed.bc9bb426.js","assets/forms.536560b8.js","assets/activeRecord.7584f904.js","assets/dashes.969c2360.js","assets/hooks.2b4d3cdc.js","assets/jobs.94a8b6f4.js","assets/workspaces.d21adf51.js","assets/uuid.f4402824.js","assets/DocsButton.8a512f2e.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.8708d896.css","assets/BackButton.a6de9bd9.js","assets/BackButton.40348456.css","assets/SaveButton.5ac999c9.js","assets/SaveButton.c5392044.css","assets/PreviewButton.9de25351.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.62a947bb.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.ae095786.js"),["assets/FormPreview.ae095786.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/Error.64b8b0c1.js","assets/Error.5cfc41d8.css","assets/broker.46cc97a8.js","assets/passwordlessManager.907d7dd5.js","assets/pubsub.ae54b92c.js","assets/storage.885899ad.js","assets/Passwordless.e3b298b6.js","assets/icons.af1545d2.js","assets/Passwordless.38735f5c.css","assets/executeJs.7ff7afd2.js","assets/PlayerNavbar.fbf462a4.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.c4ca38a7.js","assets/Steps.f65c7bc6.js","assets/Steps.998aa76d.css","assets/Modal.37da020a.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.9f065f43.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.872b1b3a.js","assets/broker.54a676ec.css","assets/BackButton.09dec487.js","assets/BackButton.dd542746.css","assets/asyncComputed.bc9bb426.js","assets/forms.536560b8.js","assets/activeRecord.7584f904.js","assets/workspaces.d21adf51.js","assets/FormPreview.77e60739.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.ac9ce6e6.js"),["assets/JobEditor.ac9ce6e6.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3ffd518c.js","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/forms.536560b8.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/dashes.969c2360.js","assets/index.c4ca38a7.js","assets/hooks.2b4d3cdc.js","assets/jobs.94a8b6f4.js","assets/workspaces.d21adf51.js","assets/uuid.f4402824.js","assets/DocsButton.8a512f2e.js","assets/DocsButton.d2184c76.css","assets/storage.885899ad.js","assets/UnsavedChangesHandler.8708d896.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.5ac999c9.js","assets/SaveButton.c5392044.css","assets/BackButton.a6de9bd9.js","assets/BackButton.40348456.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.2681793e.js"),["assets/DashEditor.2681793e.js","assets/index.c4ca38a7.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3ffd518c.js","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/forms.536560b8.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/dashes.969c2360.js","assets/hooks.2b4d3cdc.js","assets/jobs.94a8b6f4.js","assets/workspaces.d21adf51.js","assets/uuid.f4402824.js","assets/DocsButton.8a512f2e.js","assets/DocsButton.d2184c76.css","assets/storage.885899ad.js","assets/UnsavedChangesHandler.8708d896.css","assets/DashPlayer.8d0c4ecc.js","assets/executeJs.7ff7afd2.js","assets/PlayerNavbar.fbf462a4.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.f65c7bc6.js","assets/Steps.998aa76d.css","assets/Modal.37da020a.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.907d7dd5.js","assets/Passwordless.e3b298b6.js","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.9f065f43.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.a6de9bd9.js","assets/BackButton.40348456.css","assets/SaveButton.5ac999c9.js","assets/SaveButton.c5392044.css","assets/PreviewButton.9de25351.js","assets/PreviewButton.52324bbf.css","assets/DashEditor.7597d8d6.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.7a011809.js"),["assets/DashPreview.7a011809.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/DashPlayer.8d0c4ecc.js","assets/executeJs.7ff7afd2.js","assets/PlayerNavbar.fbf462a4.js","assets/icons.af1545d2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.c4ca38a7.js","assets/Steps.f65c7bc6.js","assets/Steps.998aa76d.css","assets/Modal.37da020a.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.907d7dd5.js","assets/pubsub.ae54b92c.js","assets/storage.885899ad.js","assets/Passwordless.e3b298b6.js","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.9f065f43.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.09dec487.js","assets/BackButton.dd542746.css","assets/asyncComputed.bc9bb426.js","assets/dashes.969c2360.js","assets/activeRecord.7584f904.js","assets/workspaces.d21adf51.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.7529692b.js"),["assets/HookEditor.7529692b.js","assets/registerWidgets.65ad7269.js","assets/registerWidgets.74435dfa.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3ffd518c.js","assets/icons.af1545d2.js","assets/asyncComputed.bc9bb426.js","assets/forms.536560b8.js","assets/activeRecord.7584f904.js","assets/pubsub.ae54b92c.js","assets/dashes.969c2360.js","assets/index.c4ca38a7.js","assets/hooks.2b4d3cdc.js","assets/jobs.94a8b6f4.js","assets/workspaces.d21adf51.js","assets/uuid.f4402824.js","assets/DocsButton.8a512f2e.js","assets/DocsButton.d2184c76.css","assets/storage.885899ad.js","assets/UnsavedChangesHandler.8708d896.css","assets/CircularLoading.bb6b6696.js","assets/lottie.ac26577d.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.a6de9bd9.js","assets/BackButton.40348456.css","assets/SaveButton.5ac999c9.js","assets/SaveButton.c5392044.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{R(e,o)});(async()=>{const e=E({render:()=>y(O)});f.init(),v(e,a),e.use(a),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",w),e.component("Message",D),r(e,T),r(e,V),r(e,g)})();
//# sourceMappingURL=editor.242f8000.js.map
