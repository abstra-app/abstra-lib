import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as u,g as b,_ as t,h as E,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.deaf8486.js";import{u as L}from"./index.85711985.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="82a3ee65-7cea-4e7c-a44d-ac0ad00ebfc6",e._sentryDebugIdIdentifier="sentry-dbid-82a3ee65-7cea-4e7c-a44d-ac0ad00ebfc6")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=u({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.f671da24.js"),["assets/Home.f671da24.js","assets/Modal.64cb459c.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.e5159130.js"),["assets/Workspace.e5159130.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/icons.e2e89521.js","assets/Tooltip.162ac3a5.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.aede4aef.js","assets/workspaces.dde35c92.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/login.51443aae.js","assets/DocsButton.16440b19.js","assets/DocsButton.d2184c76.css","assets/Workspace.b7d4a3bf.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.75cd17d5.js"),["assets/Forms.75cd17d5.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/icons.e2e89521.js","assets/asyncComputed.aede4aef.js","assets/forms.4a905f36.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/RuntimeList.7764594c.js","assets/DropdownMenu.f543efaf.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.311f94fe.js"),["assets/Dashes.311f94fe.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/icons.e2e89521.js","assets/asyncComputed.aede4aef.js","assets/dashes.1faabe16.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/runnerData.9caac0c9.js","assets/RuntimeList.7764594c.js","assets/DropdownMenu.f543efaf.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.64f769fa.js"),["assets/Jobs.64f769fa.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/icons.e2e89521.js","assets/asyncComputed.aede4aef.js","assets/jobs.efc59cbd.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/RuntimeList.7764594c.js","assets/DropdownMenu.f543efaf.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.d5078752.js"),["assets/Hooks.d5078752.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/icons.e2e89521.js","assets/asyncComputed.aede4aef.js","assets/hooks.74f5406d.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/RuntimeList.7764594c.js","assets/DropdownMenu.f543efaf.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.ac76e4d6.js"),["assets/Tables.ac76e4d6.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/icons.e2e89521.js","assets/asyncComputed.aede4aef.js","assets/tables.6138b649.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/RuntimeList.7764594c.js","assets/DropdownMenu.f543efaf.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.d841cd57.js"),["assets/StyleEditor.d841cd57.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.aede4aef.js","assets/workspaces.dde35c92.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/icons.e2e89521.js","assets/SidebarPreview.d11fe2ac.js","assets/PlayerNavbar.31196aae.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.9caac0c9.js","assets/colors.3c27c4d6.js","assets/SidebarPreview.12212654.css","assets/SaveButton.179ce185.js","assets/SaveButton.c5392044.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.0be78192.js"),["assets/SidebarEditor.0be78192.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/workspaces.dde35c92.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/asyncComputed.aede4aef.js","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.179ce185.js","assets/icons.e2e89521.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.d11fe2ac.js","assets/PlayerNavbar.31196aae.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.9caac0c9.js","assets/colors.3c27c4d6.js","assets/SidebarPreview.12212654.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.acdf7ec0.js"),["assets/FormEditor.acdf7ec0.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/Error.2c06f773.js","assets/Error.5cfc41d8.css","assets/broker.46c16d62.js","assets/passwordlessManager.6fe3b008.js","assets/pubsub.39b0446c.js","assets/icons.e2e89521.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.9aada108.js","assets/Passwordless.8c03f2df.js","assets/Passwordless.86ac0c56.css","assets/executeJs.492db764.js","assets/PlayerNavbar.31196aae.js","assets/PlayerNavbar.adff8b48.css","assets/index.85711985.js","assets/WidgetsFrame.aec00b29.js","assets/colors.3c27c4d6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.64cb459c.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.1d4cb5f1.js","assets/asyncComputed.aede4aef.js","assets/forms.4a905f36.js","assets/activeRecord.73018348.js","assets/dashes.1faabe16.js","assets/runnerData.9caac0c9.js","assets/hooks.74f5406d.js","assets/jobs.efc59cbd.js","assets/workspaces.dde35c92.js","assets/uuid.11577f75.js","assets/login.51443aae.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/Tab.8e40e494.js","assets/Tab.68f29dcc.css","assets/BackButton.937e8e76.js","assets/BackButton.40348456.css","assets/SaveButton.179ce185.js","assets/SaveButton.c5392044.css","assets/DocsButton.16440b19.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.e53cb1cd.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.6172d866.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.b212134a.js"),["assets/FormPreview.b212134a.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/Error.2c06f773.js","assets/Error.5cfc41d8.css","assets/broker.46c16d62.js","assets/passwordlessManager.6fe3b008.js","assets/pubsub.39b0446c.js","assets/icons.e2e89521.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.9aada108.js","assets/Passwordless.8c03f2df.js","assets/Passwordless.86ac0c56.css","assets/executeJs.492db764.js","assets/PlayerNavbar.31196aae.js","assets/PlayerNavbar.adff8b48.css","assets/index.85711985.js","assets/WidgetsFrame.aec00b29.js","assets/colors.3c27c4d6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.64cb459c.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/BackButton.350d8eec.js","assets/BackButton.dd542746.css","assets/asyncComputed.aede4aef.js","assets/forms.4a905f36.js","assets/activeRecord.73018348.js","assets/workspaces.dde35c92.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.d3eebe60.js"),["assets/JobEditor.d3eebe60.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/Tab.8e40e494.js","assets/Tab.68f29dcc.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.aede4aef.js","assets/jobs.efc59cbd.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/SaveButton.179ce185.js","assets/icons.e2e89521.js","assets/SaveButton.c5392044.css","assets/BackButton.937e8e76.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.1d4cb5f1.js","assets/forms.4a905f36.js","assets/dashes.1faabe16.js","assets/runnerData.9caac0c9.js","assets/hooks.74f5406d.js","assets/workspaces.dde35c92.js","assets/uuid.11577f75.js","assets/login.51443aae.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/DocsButton.16440b19.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.46d8383f.js"),["assets/DashEditor.46d8383f.js","assets/index.85711985.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/Tab.8e40e494.js","assets/Tab.68f29dcc.css","assets/DashPlayer.b598b1e8.js","assets/runnerData.9caac0c9.js","assets/executeJs.492db764.js","assets/PlayerNavbar.31196aae.js","assets/icons.e2e89521.js","assets/PlayerNavbar.adff8b48.css","assets/WidgetsFrame.aec00b29.js","assets/colors.3c27c4d6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.64cb459c.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.6fe3b008.js","assets/pubsub.39b0446c.js","assets/Passwordless.8c03f2df.js","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.1d4cb5f1.js","assets/asyncComputed.aede4aef.js","assets/forms.4a905f36.js","assets/activeRecord.73018348.js","assets/dashes.1faabe16.js","assets/hooks.74f5406d.js","assets/jobs.efc59cbd.js","assets/workspaces.dde35c92.js","assets/uuid.11577f75.js","assets/login.51443aae.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.937e8e76.js","assets/BackButton.40348456.css","assets/SaveButton.179ce185.js","assets/SaveButton.c5392044.css","assets/PreviewButton.e53cb1cd.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.16440b19.js","assets/DocsButton.d2184c76.css","assets/DashEditor.4380b9a2.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.58944e2d.js"),["assets/DashPreview.58944e2d.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.b598b1e8.js","assets/runnerData.9caac0c9.js","assets/executeJs.492db764.js","assets/PlayerNavbar.31196aae.js","assets/icons.e2e89521.js","assets/PlayerNavbar.adff8b48.css","assets/index.85711985.js","assets/WidgetsFrame.aec00b29.js","assets/colors.3c27c4d6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.64cb459c.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.6fe3b008.js","assets/pubsub.39b0446c.js","assets/Passwordless.8c03f2df.js","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/BackButton.350d8eec.js","assets/BackButton.dd542746.css","assets/asyncComputed.aede4aef.js","assets/dashes.1faabe16.js","assets/activeRecord.73018348.js","assets/workspaces.dde35c92.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.bfbfc1aa.js"),["assets/HookEditor.bfbfc1aa.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/Tab.8e40e494.js","assets/Tab.68f29dcc.css","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.1d4cb5f1.js","assets/icons.e2e89521.js","assets/asyncComputed.aede4aef.js","assets/forms.4a905f36.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/dashes.1faabe16.js","assets/runnerData.9caac0c9.js","assets/hooks.74f5406d.js","assets/jobs.efc59cbd.js","assets/workspaces.dde35c92.js","assets/uuid.11577f75.js","assets/login.51443aae.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.937e8e76.js","assets/BackButton.40348456.css","assets/SaveButton.179ce185.js","assets/SaveButton.c5392044.css","assets/DocsButton.16440b19.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.83ede5f3.js"),["assets/TableEditor.83ede5f3.js","assets/asyncComputed.aede4aef.js","assets/registerWidgets.deaf8486.js","assets/registerWidgets.448db7e9.css","assets/tables.6138b649.js","assets/activeRecord.73018348.js","assets/pubsub.39b0446c.js","assets/CircularLoading.e5ab82ad.js","assets/lottie.b5b96505.js","assets/CircularLoading.f81b57b4.css","assets/Tab.8e40e494.js","assets/Tab.68f29dcc.css","assets/BackButton.937e8e76.js","assets/BackButton.40348456.css","assets/icons.e2e89521.js","assets/DocsButton.16440b19.js","assets/DocsButton.d2184c76.css","assets/SaveButton.179ce185.js","assets/SaveButton.c5392044.css","assets/TableEditor.66877c31.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.23d3c698.js.map
