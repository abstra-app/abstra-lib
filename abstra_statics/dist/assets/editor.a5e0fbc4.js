import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.6ceeeb3e.js";import{u as L}from"./index.ae81da9e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b1a31449-0bee-460d-a880-078e09c3b7f8",e._sentryDebugIdIdentifier="sentry-dbid-b1a31449-0bee-460d-a880-078e09c3b7f8")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.e8693b07.js"),["assets/Home.e8693b07.js","assets/Modal.98788671.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.c50adc97.js"),["assets/Workspace.c50adc97.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/icons.485db9b0.js","assets/Tooltip.28cd9577.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.269fb65a.js","assets/workspaces.eb478350.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/login.fc779487.js","assets/DocsButton.b05feaee.js","assets/DocsButton.d2184c76.css","assets/Workspace.b7d4a3bf.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.23a88672.js"),["assets/Forms.23a88672.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/icons.485db9b0.js","assets/asyncComputed.269fb65a.js","assets/forms.bcd65128.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/RuntimeList.63be1a59.js","assets/DropdownMenu.f8d90797.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.f09fad32.js"),["assets/Dashes.f09fad32.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/icons.485db9b0.js","assets/asyncComputed.269fb65a.js","assets/dashes.8df734f7.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/runnerData.9e6086d9.js","assets/RuntimeList.63be1a59.js","assets/DropdownMenu.f8d90797.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.cf63272c.js"),["assets/Jobs.cf63272c.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/icons.485db9b0.js","assets/asyncComputed.269fb65a.js","assets/jobs.09082d79.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/RuntimeList.63be1a59.js","assets/DropdownMenu.f8d90797.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.7072e9fd.js"),["assets/Hooks.7072e9fd.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/icons.485db9b0.js","assets/asyncComputed.269fb65a.js","assets/hooks.c4fac734.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/RuntimeList.63be1a59.js","assets/DropdownMenu.f8d90797.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.62a22149.js"),["assets/Tables.62a22149.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/icons.485db9b0.js","assets/asyncComputed.269fb65a.js","assets/tables.81b0097b.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/RuntimeList.63be1a59.js","assets/DropdownMenu.f8d90797.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.a3a7cd81.js"),["assets/StyleEditor.a3a7cd81.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.269fb65a.js","assets/workspaces.eb478350.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/icons.485db9b0.js","assets/SidebarPreview.659b1269.js","assets/PlayerNavbar.d90398f1.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.9e6086d9.js","assets/colors.c076d204.js","assets/SidebarPreview.12212654.css","assets/SaveButton.01226e1c.js","assets/SaveButton.c5392044.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.2d629fc0.js"),["assets/SidebarEditor.2d629fc0.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/workspaces.eb478350.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/asyncComputed.269fb65a.js","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.01226e1c.js","assets/icons.485db9b0.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.659b1269.js","assets/PlayerNavbar.d90398f1.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.9e6086d9.js","assets/colors.c076d204.js","assets/SidebarPreview.12212654.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.5af2ec89.js"),["assets/FormEditor.5af2ec89.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/Error.de0fcc72.js","assets/Error.5cfc41d8.css","assets/broker.2bf9d5c1.js","assets/passwordlessManager.cff2d8ee.js","assets/pubsub.763a2075.js","assets/icons.485db9b0.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.de14464e.js","assets/Passwordless.6508c5df.js","assets/Passwordless.86ac0c56.css","assets/executeJs.5c72accf.js","assets/PlayerNavbar.d90398f1.js","assets/PlayerNavbar.adff8b48.css","assets/index.ae81da9e.js","assets/WidgetsFrame.9b709781.js","assets/colors.c076d204.js","assets/WidgetsFrame.701a818b.css","assets/Modal.98788671.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c35402b1.js","assets/asyncComputed.269fb65a.js","assets/forms.bcd65128.js","assets/activeRecord.89180b3a.js","assets/dashes.8df734f7.js","assets/runnerData.9e6086d9.js","assets/hooks.c4fac734.js","assets/jobs.09082d79.js","assets/workspaces.eb478350.js","assets/uuid.6d042689.js","assets/login.fc779487.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/Tab.89b52b4f.js","assets/Tab.68f29dcc.css","assets/BackButton.701fedd2.js","assets/BackButton.40348456.css","assets/SaveButton.01226e1c.js","assets/SaveButton.c5392044.css","assets/DocsButton.b05feaee.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.477d826a.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.6172d866.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.6c162210.js"),["assets/FormPreview.6c162210.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/Error.de0fcc72.js","assets/Error.5cfc41d8.css","assets/broker.2bf9d5c1.js","assets/passwordlessManager.cff2d8ee.js","assets/pubsub.763a2075.js","assets/icons.485db9b0.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.de14464e.js","assets/Passwordless.6508c5df.js","assets/Passwordless.86ac0c56.css","assets/executeJs.5c72accf.js","assets/PlayerNavbar.d90398f1.js","assets/PlayerNavbar.adff8b48.css","assets/index.ae81da9e.js","assets/WidgetsFrame.9b709781.js","assets/colors.c076d204.js","assets/WidgetsFrame.701a818b.css","assets/Modal.98788671.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/BackButton.098a0f23.js","assets/BackButton.dd542746.css","assets/asyncComputed.269fb65a.js","assets/forms.bcd65128.js","assets/activeRecord.89180b3a.js","assets/workspaces.eb478350.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.e2eb1c13.js"),["assets/JobEditor.e2eb1c13.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/Tab.89b52b4f.js","assets/Tab.68f29dcc.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.269fb65a.js","assets/jobs.09082d79.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/SaveButton.01226e1c.js","assets/icons.485db9b0.js","assets/SaveButton.c5392044.css","assets/BackButton.701fedd2.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c35402b1.js","assets/forms.bcd65128.js","assets/dashes.8df734f7.js","assets/runnerData.9e6086d9.js","assets/hooks.c4fac734.js","assets/workspaces.eb478350.js","assets/uuid.6d042689.js","assets/login.fc779487.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/DocsButton.b05feaee.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.e1cb54bb.js"),["assets/DashEditor.e1cb54bb.js","assets/index.ae81da9e.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/Tab.89b52b4f.js","assets/Tab.68f29dcc.css","assets/DashPlayer.3d4be803.js","assets/runnerData.9e6086d9.js","assets/executeJs.5c72accf.js","assets/PlayerNavbar.d90398f1.js","assets/icons.485db9b0.js","assets/PlayerNavbar.adff8b48.css","assets/WidgetsFrame.9b709781.js","assets/colors.c076d204.js","assets/WidgetsFrame.701a818b.css","assets/Modal.98788671.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.cff2d8ee.js","assets/pubsub.763a2075.js","assets/Passwordless.6508c5df.js","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c35402b1.js","assets/asyncComputed.269fb65a.js","assets/forms.bcd65128.js","assets/activeRecord.89180b3a.js","assets/dashes.8df734f7.js","assets/hooks.c4fac734.js","assets/jobs.09082d79.js","assets/workspaces.eb478350.js","assets/uuid.6d042689.js","assets/login.fc779487.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.701fedd2.js","assets/BackButton.40348456.css","assets/SaveButton.01226e1c.js","assets/SaveButton.c5392044.css","assets/PreviewButton.477d826a.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.b05feaee.js","assets/DocsButton.d2184c76.css","assets/DashEditor.4380b9a2.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.1eec1bfd.js"),["assets/DashPreview.1eec1bfd.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.3d4be803.js","assets/runnerData.9e6086d9.js","assets/executeJs.5c72accf.js","assets/PlayerNavbar.d90398f1.js","assets/icons.485db9b0.js","assets/PlayerNavbar.adff8b48.css","assets/index.ae81da9e.js","assets/WidgetsFrame.9b709781.js","assets/colors.c076d204.js","assets/WidgetsFrame.701a818b.css","assets/Modal.98788671.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.cff2d8ee.js","assets/pubsub.763a2075.js","assets/Passwordless.6508c5df.js","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/BackButton.098a0f23.js","assets/BackButton.dd542746.css","assets/asyncComputed.269fb65a.js","assets/dashes.8df734f7.js","assets/activeRecord.89180b3a.js","assets/workspaces.eb478350.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.82abbdc5.js"),["assets/HookEditor.82abbdc5.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/Tab.89b52b4f.js","assets/Tab.68f29dcc.css","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c35402b1.js","assets/icons.485db9b0.js","assets/asyncComputed.269fb65a.js","assets/forms.bcd65128.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/dashes.8df734f7.js","assets/runnerData.9e6086d9.js","assets/hooks.c4fac734.js","assets/jobs.09082d79.js","assets/workspaces.eb478350.js","assets/uuid.6d042689.js","assets/login.fc779487.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.701fedd2.js","assets/BackButton.40348456.css","assets/SaveButton.01226e1c.js","assets/SaveButton.c5392044.css","assets/DocsButton.b05feaee.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.bc077d30.js"),["assets/TableEditor.bc077d30.js","assets/asyncComputed.269fb65a.js","assets/registerWidgets.6ceeeb3e.js","assets/registerWidgets.448db7e9.css","assets/tables.81b0097b.js","assets/activeRecord.89180b3a.js","assets/pubsub.763a2075.js","assets/CircularLoading.8811b083.js","assets/lottie.a31f13a3.js","assets/CircularLoading.f81b57b4.css","assets/Tab.89b52b4f.js","assets/Tab.68f29dcc.css","assets/BackButton.701fedd2.js","assets/BackButton.40348456.css","assets/icons.485db9b0.js","assets/DocsButton.b05feaee.js","assets/DocsButton.d2184c76.css","assets/SaveButton.01226e1c.js","assets/SaveButton.c5392044.css","assets/TableEditor.66877c31.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.a5e0fbc4.js.map
