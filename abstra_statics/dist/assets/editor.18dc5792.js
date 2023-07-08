import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as T,s as f,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.7452ec0b.js";import{u as L}from"./index.10e7a483.js";import{i as w}from"./sentry.2692e5c6.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},y=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,g)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.626b66fc.js"),["assets/Home.626b66fc.js","assets/Modal.f31beab2.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.9b91aeae.js"),["assets/Workspace.9b91aeae.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/Tooltip.2879568f.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.23d75013.js","assets/workspaces.4c177a35.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/login.29b4c1f1.js","assets/Workspace.e5d0c579.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.5d1a7ea4.js"),["assets/Forms.5d1a7ea4.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.9384f45c.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.8d7fb50a.js"),["assets/Dashes.8d7fb50a.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/dashes.7c8e2bf8.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/runnerData.d532dcaa.js","assets/RuntimeList.9384f45c.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.ce707003.js"),["assets/Jobs.ce707003.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/jobs.cb7d0efd.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.9384f45c.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.d9bd4a73.js"),["assets/Hooks.d9bd4a73.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/hooks.911e43af.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.9384f45c.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.6f29de13.js"),["assets/Tables.6f29de13.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/tables.0812fe41.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.9384f45c.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>e(()=>import("./StyleEditor.53be25fb.js"),["assets/StyleEditor.53be25fb.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.23d75013.js","assets/workspaces.4c177a35.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/index.10e7a483.js","assets/icons.97625e56.js","assets/SaveButton.f17ed242.js","assets/SaveButton.40e9ccb6.css","assets/StyleEditor.b2884735.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>e(()=>import("./SidebarEditor.f6af9c69.js"),["assets/SidebarEditor.f6af9c69.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/workspaces.4c177a35.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/asyncComputed.23d75013.js","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.f17ed242.js","assets/icons.97625e56.js","assets/SaveButton.40e9ccb6.css","assets/SidebarEditor.c4237693.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.77e57baf.js"),["assets/FormEditor.77e57baf.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Error.2096a0e8.js","assets/Error.5cfc41d8.css","assets/broker.84676ea2.js","assets/passwordlessManager.abb9ad15.js","assets/icons.97625e56.js","assets/Passwordless.15d9e658.js","assets/Passwordless.c981501a.css","assets/WidgetsFrame.d73ba8f1.js","assets/index.10e7a483.js","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.ccaee3bb.js","assets/broker.b057aed3.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.b0a2b125.js","assets/asyncComputed.23d75013.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/dashes.7c8e2bf8.js","assets/runnerData.d532dcaa.js","assets/hooks.911e43af.js","assets/jobs.cb7d0efd.js","assets/workspaces.4c177a35.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/BackButton.72f9b6e0.js","assets/BackButton.ae9a631b.css","assets/FormEditor.32b73955.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.e2ac2d29.js"),["assets/FormPreview.e2ac2d29.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Error.2096a0e8.js","assets/Error.5cfc41d8.css","assets/broker.84676ea2.js","assets/passwordlessManager.abb9ad15.js","assets/icons.97625e56.js","assets/Passwordless.15d9e658.js","assets/Passwordless.c981501a.css","assets/WidgetsFrame.d73ba8f1.js","assets/index.10e7a483.js","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.ccaee3bb.js","assets/broker.b057aed3.css","assets/BackButton.6bcbb21b.js","assets/BackButton.802d214e.css","assets/asyncComputed.23d75013.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/workspaces.4c177a35.js","assets/FormPreview.69e549a7.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.d3efcee0.js"),["assets/JobEditor.d3efcee0.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/BackButton.72f9b6e0.js","assets/BackButton.ae9a631b.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.23d75013.js","assets/jobs.cb7d0efd.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/SaveButton.f17ed242.js","assets/icons.97625e56.js","assets/SaveButton.40e9ccb6.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.b0a2b125.js","assets/forms.91463966.js","assets/dashes.7c8e2bf8.js","assets/runnerData.d532dcaa.js","assets/hooks.911e43af.js","assets/workspaces.4c177a35.js","assets/log.ccaee3bb.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/JobEditor.408d8bc3.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.22e74bb6.js"),["assets/DashEditor.22e74bb6.js","assets/index.10e7a483.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/BackButton.72f9b6e0.js","assets/BackButton.ae9a631b.css","assets/icons.97625e56.js","assets/DashPlayer.164bd0f6.js","assets/passwordlessManager.abb9ad15.js","assets/runnerData.d532dcaa.js","assets/WidgetsFrame.d73ba8f1.js","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.ccaee3bb.js","assets/Passwordless.15d9e658.js","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.c981501a.css","assets/DashPlayer.f60035bd.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.b0a2b125.js","assets/asyncComputed.23d75013.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/dashes.7c8e2bf8.js","assets/hooks.911e43af.js","assets/jobs.cb7d0efd.js","assets/workspaces.4c177a35.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/SaveButton.f17ed242.js","assets/SaveButton.40e9ccb6.css","assets/DashEditor.10029962.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.33dba79d.js"),["assets/DashPreview.33dba79d.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/DashPlayer.164bd0f6.js","assets/passwordlessManager.abb9ad15.js","assets/runnerData.d532dcaa.js","assets/WidgetsFrame.d73ba8f1.js","assets/icons.97625e56.js","assets/index.10e7a483.js","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.ccaee3bb.js","assets/Passwordless.15d9e658.js","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.c981501a.css","assets/DashPlayer.f60035bd.css","assets/BackButton.6bcbb21b.js","assets/BackButton.802d214e.css","assets/asyncComputed.23d75013.js","assets/dashes.7c8e2bf8.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/workspaces.4c177a35.js","assets/DashPreview.4ac074a5.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.88c721e4.js"),["assets/HookEditor.88c721e4.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/BackButton.72f9b6e0.js","assets/BackButton.ae9a631b.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.b0a2b125.js","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/dashes.7c8e2bf8.js","assets/runnerData.d532dcaa.js","assets/hooks.911e43af.js","assets/jobs.cb7d0efd.js","assets/workspaces.4c177a35.js","assets/log.ccaee3bb.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/SaveButton.f17ed242.js","assets/SaveButton.40e9ccb6.css","assets/HookEditor.6b67e33b.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.0c0d8e3c.js"),["assets/TableEditor.0c0d8e3c.js","assets/asyncComputed.23d75013.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/tables.0812fe41.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.72f9b6e0.js","assets/BackButton.ae9a631b.css","assets/icons.97625e56.js","assets/TableEditor.73c06e25.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{L(t,r)});(async()=>{const t=u({render:()=>I(y)});b.init(),w(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",T),t.component("Message",f),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.18dc5792.js.map
