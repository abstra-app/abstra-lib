var y=Object.defineProperty;var b=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(b(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.c0b06422.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.685f2f43.js";import"./linters.caa69a44.js";import"./url.2bc37cc5.js";import"./colorHelpers.52815805.js";import"./asyncComputed.386a2db3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e97481f9-1f54-4137-ac66-42d074c90657",t._sentryDebugIdIdentifier="sentry-dbid-e97481f9-1f54-4137-ac66-42d074c90657")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"21f12667f2d863cd8d3a511de0cc390f3ac52d45",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),P=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:R}=r.info;l.boot(i,R)}else l.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.e8b1482d.js"),["assets/Home.e8b1482d.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.d014765a.js"),["assets/Workspace.d014765a.js","assets/BaseLayout.b58c543d.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.fcddaf80.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/NavbarControls.02d20af0.js","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/index.124bb471.js","assets/CloseCircleOutlined.be18878f.js","assets/index.73a14af9.js","assets/workspaces.88a0329b.js","assets/record.e2b26505.js","assets/popupNotifcation.196e2ce5.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/PhChats.vue.a6e083e6.js","assets/polling.b6eb207e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/Logo.830fb16f.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.eef3d5d9.js","assets/PhIdentificationBadge.vue.9c727fd3.js","assets/PhCaretRight.vue.5bcb8b14.js","assets/index.af2dbd28.js","assets/index.f299f473.js","assets/Avatar.7971574f.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.7bdf4c80.js"),["assets/Stages.7bdf4c80.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/ContentLayout.932ad84d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.e6fcf6c2.js","assets/router.c8065cf4.js","assets/Badge.50335ef3.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/url.2bc37cc5.js","assets/PhDotsThreeVertical.vue.b18d85f2.js","assets/index.7fe2dcea.js","assets/index.124bb471.js","assets/CrudView.c80c8ede.css","assets/ant-design.c72d3b34.js","assets/asyncComputed.386a2db3.js","assets/string.3b7e3375.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/scripts.7f773805.js","assets/record.e2b26505.js","assets/linters.caa69a44.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/colorHelpers.52815805.js","assets/ai.9d21048b.js","assets/index.73a14af9.js","assets/PhWebhooksLogo.vue.ee919f63.js","assets/validations.7c628001.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.02b418f1.js"),["assets/WorkflowEditor.02b418f1.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.ad3e3dad.js","assets/validations.7c628001.js","assets/string.3b7e3375.js","assets/uuid.a2693f65.js","assets/metadata.0c77bb44.js","assets/PhRobot.vue.95044f55.js","assets/PhWebhooksLogo.vue.ee919f63.js","assets/asyncComputed.386a2db3.js","assets/linters.caa69a44.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/record.e2b26505.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.3d07f6eb.js","assets/index.73a14af9.js","assets/PhArrowCounterClockwise.vue.eef3d5d9.js","assets/TasksManager.d6b555c2.js","assets/tasksController.76f3adb6.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/scripts.7f773805.js","assets/polling.b6eb207e.js","assets/ant-design.c72d3b34.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/Card.042670e0.js","assets/TabPane.4c2e3e7f.js","assets/CollapsePanel.3104d1f2.js","assets/index.30ed932d.js","assets/TasksManager.c9a90d36.css","assets/index.e7ef18e7.js","assets/Badge.50335ef3.js","assets/index.b464267b.js","assets/PhArrowDown.vue.aab20e30.js","assets/WorkflowEditor.0f37f7c9.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.9d7c99db.js"),["assets/Tasks.9d7c99db.js","assets/TasksView.vue_vue_type_script_setup_true_lang.e184d4fa.js","assets/tasksController.76f3adb6.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/scripts.7f773805.js","assets/record.e2b26505.js","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/polling.b6eb207e.js","assets/string.3b7e3375.js","assets/metadata.0c77bb44.js","assets/PhRobot.vue.95044f55.js","assets/PhWebhooksLogo.vue.ee919f63.js","assets/ant-design.c72d3b34.js","assets/dayjs.98b6f1ae.js","assets/index.7fe2dcea.js","assets/ContentLayout.932ad84d.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.5c801971.js"),["assets/Logs.5c801971.js","assets/ContentLayout.932ad84d.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.8d53df8b.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/build.89b1ed1f.js","assets/string.3b7e3375.js","assets/tables.ece95658.js","assets/record.e2b26505.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.01815c7e.js","assets/LoadingOutlined.42fffdaf.js","assets/polling.b6eb207e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/datetime.ab8861ec.js","assets/ant-design.c72d3b34.js","assets/index.124bb471.js","assets/index.7fe2dcea.js","assets/dayjs.98b6f1ae.js","assets/CollapsePanel.3104d1f2.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.55d81f14.js"),["assets/PreferencesEditor.55d81f14.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/record.e2b26505.js","assets/PlayerNavbar.50d587e2.js","assets/metadata.0c77bb44.js","assets/PhRobot.vue.95044f55.js","assets/PhWebhooksLogo.vue.ee919f63.js","assets/LoadingOutlined.42fffdaf.js","assets/PhSignOut.vue.fcddaf80.js","assets/index.f299f473.js","assets/Avatar.7971574f.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.3162ff2d.js","assets/index.b464267b.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/ContentLayout.932ad84d.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.244d339b.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.5f5ad7da.js"),["assets/RequirementsEditor.5f5ad7da.js","assets/ContentLayout.932ad84d.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.e6fcf6c2.js","assets/router.c8065cf4.js","assets/Badge.50335ef3.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/url.2bc37cc5.js","assets/PhDotsThreeVertical.vue.b18d85f2.js","assets/index.7fe2dcea.js","assets/index.124bb471.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.386a2db3.js","assets/polling.b6eb207e.js","assets/linters.caa69a44.js","assets/record.e2b26505.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/colorHelpers.52815805.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.81e10823.js"),["assets/EnvVarsEditor.81e10823.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/record.e2b26505.js","assets/ContentLayout.932ad84d.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.f6ac14be.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/fetch.30cc4b5e.js","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.e6fcf6c2.js","assets/router.c8065cf4.js","assets/Badge.50335ef3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/PhDotsThreeVertical.vue.b18d85f2.js","assets/index.7fe2dcea.js","assets/index.124bb471.js","assets/CrudView.c80c8ede.css","assets/polling.b6eb207e.js","assets/PhPencil.vue.f08a2504.js","assets/index.73a14af9.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.8d6f2141.js"),["assets/AccessControlEditor.8d6f2141.js","assets/ContentLayout.932ad84d.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.30cc4b5e.js","assets/record.e2b26505.js","assets/repository.ce1e9771.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/asyncComputed.386a2db3.js","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/index.3d07f6eb.js","assets/metadata.0c77bb44.js","assets/PhRobot.vue.95044f55.js","assets/PhWebhooksLogo.vue.ee919f63.js","assets/index.73a14af9.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/linters.caa69a44.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.1849af32.js"),["assets/ProjectLogin.1849af32.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/Logo.830fb16f.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.b58c543d.js","assets/BaseLayout.b7a1f19a.css","assets/index.af2dbd28.js","assets/index.f299f473.js","assets/Avatar.7971574f.js","assets/index.124bb471.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.6ced8ceb.js"),["assets/FormEditor.6ced8ceb.js","assets/FormRunner.9496aec0.js","assets/url.2bc37cc5.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/workspaceStore.685f2f43.js","assets/colorHelpers.52815805.js","assets/Login.vue_vue_type_script_setup_true_lang.d98b1ac4.js","assets/Logo.830fb16f.js","assets/Logo.8bf94625.css","assets/string.3b7e3375.js","assets/OTPInput.1d1cc28d.js","assets/OTPInput.277362d6.css","assets/index.73a14af9.js","assets/Login.eaf7209c.css","assets/Steps.36a25291.js","assets/index.43dba303.js","assets/Steps.4d03c6c1.css","assets/Watermark.8a77bae4.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.386a2db3.js","assets/scripts.7f773805.js","assets/record.e2b26505.js","assets/linters.caa69a44.js","assets/workspaces.88a0329b.js","assets/RuntimeCommonSettings.04b0f4c7.js","assets/BaseLayout.b58c543d.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.a2693f65.js","assets/NavbarControls.02d20af0.js","assets/index.124bb471.js","assets/CloseCircleOutlined.be18878f.js","assets/popupNotifcation.196e2ce5.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/PhChats.vue.a6e083e6.js","assets/polling.b6eb207e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/ant-design.c72d3b34.js","assets/ai.9d21048b.js","assets/PhCheckCircle.vue.a1b8a166.js","assets/PhCopySimple.vue.d5bf36a0.js","assets/Avatar.7971574f.js","assets/LoadingOutlined.42fffdaf.js","assets/Card.042670e0.js","assets/TabPane.4c2e3e7f.js","assets/PhCaretRight.vue.5bcb8b14.js","assets/Badge.50335ef3.js","assets/PhFolder.vue.251cdba7.js","assets/PhPencil.vue.f08a2504.js","assets/validations.7c628001.js","assets/toggleHighContrast.a750c069.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.d6b555c2.js","assets/tasksController.76f3adb6.js","assets/gateway.3074ee5c.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/index.3d07f6eb.js","assets/CollapsePanel.3104d1f2.js","assets/index.30ed932d.js","assets/TasksManager.c9a90d36.css","assets/index.af2dbd28.js","assets/index.f299f473.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/PlayerNavbar.50d587e2.js","assets/metadata.0c77bb44.js","assets/PhRobot.vue.95044f55.js","assets/PhWebhooksLogo.vue.ee919f63.js","assets/PhSignOut.vue.fcddaf80.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.3162ff2d.js","assets/index.b464267b.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.bb165fe5.js"),["assets/JobEditor.bb165fe5.js","assets/asyncComputed.386a2db3.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/scripts.7f773805.js","assets/record.e2b26505.js","assets/linters.caa69a44.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/RuntimeCommonSettings.04b0f4c7.js","assets/BaseLayout.b58c543d.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.a2693f65.js","assets/NavbarControls.02d20af0.js","assets/index.124bb471.js","assets/CloseCircleOutlined.be18878f.js","assets/index.73a14af9.js","assets/popupNotifcation.196e2ce5.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/PhChats.vue.a6e083e6.js","assets/polling.b6eb207e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/Logo.830fb16f.js","assets/Logo.8bf94625.css","assets/ant-design.c72d3b34.js","assets/ai.9d21048b.js","assets/PhCheckCircle.vue.a1b8a166.js","assets/PhCopySimple.vue.d5bf36a0.js","assets/Avatar.7971574f.js","assets/LoadingOutlined.42fffdaf.js","assets/Card.042670e0.js","assets/TabPane.4c2e3e7f.js","assets/PhCaretRight.vue.5bcb8b14.js","assets/Badge.50335ef3.js","assets/PhFolder.vue.251cdba7.js","assets/PhPencil.vue.f08a2504.js","assets/validations.7c628001.js","assets/string.3b7e3375.js","assets/toggleHighContrast.a750c069.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.d6b555c2.js","assets/tasksController.76f3adb6.js","assets/gateway.3074ee5c.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/index.3d07f6eb.js","assets/CollapsePanel.3104d1f2.js","assets/index.30ed932d.js","assets/TasksManager.c9a90d36.css","assets/index.af2dbd28.js","assets/index.f299f473.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/index.02990026.js","assets/RunButton.vue_vue_type_script_setup_true_lang.217e5f74.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.ca3e64c1.js"),["assets/HookEditor.ca3e64c1.js","assets/asyncComputed.386a2db3.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/scripts.7f773805.js","assets/record.e2b26505.js","assets/linters.caa69a44.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/RuntimeCommonSettings.04b0f4c7.js","assets/BaseLayout.b58c543d.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.a2693f65.js","assets/NavbarControls.02d20af0.js","assets/index.124bb471.js","assets/CloseCircleOutlined.be18878f.js","assets/index.73a14af9.js","assets/popupNotifcation.196e2ce5.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/PhChats.vue.a6e083e6.js","assets/polling.b6eb207e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/Logo.830fb16f.js","assets/Logo.8bf94625.css","assets/ant-design.c72d3b34.js","assets/ai.9d21048b.js","assets/PhCheckCircle.vue.a1b8a166.js","assets/PhCopySimple.vue.d5bf36a0.js","assets/Avatar.7971574f.js","assets/LoadingOutlined.42fffdaf.js","assets/Card.042670e0.js","assets/TabPane.4c2e3e7f.js","assets/PhCaretRight.vue.5bcb8b14.js","assets/Badge.50335ef3.js","assets/PhFolder.vue.251cdba7.js","assets/PhPencil.vue.f08a2504.js","assets/validations.7c628001.js","assets/string.3b7e3375.js","assets/toggleHighContrast.a750c069.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.d6b555c2.js","assets/tasksController.76f3adb6.js","assets/gateway.3074ee5c.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/index.3d07f6eb.js","assets/CollapsePanel.3104d1f2.js","assets/index.30ed932d.js","assets/TasksManager.c9a90d36.css","assets/index.af2dbd28.js","assets/index.f299f473.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.217e5f74.js","assets/index.6addeccc.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.58712e70.js"),["assets/ScriptEditor.58712e70.js","assets/tasksController.76f3adb6.js","assets/gateway.3074ee5c.js","assets/popupNotifcation.196e2ce5.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/scripts.7f773805.js","assets/record.e2b26505.js","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/polling.b6eb207e.js","assets/string.3b7e3375.js","assets/workspaces.88a0329b.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/RuntimeCommonSettings.04b0f4c7.js","assets/BaseLayout.b58c543d.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.52a71eaa.js","assets/UnsavedChangesHandler.47c86d20.js","assets/ExclamationCircleOutlined.88c1b679.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.a2693f65.js","assets/NavbarControls.02d20af0.js","assets/index.124bb471.js","assets/CloseCircleOutlined.be18878f.js","assets/index.73a14af9.js","assets/PhArrowSquareOut.vue.8eb62dbd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js","assets/BookOutlined.996ccc20.js","assets/PhChats.vue.a6e083e6.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/Logo.830fb16f.js","assets/Logo.8bf94625.css","assets/ant-design.c72d3b34.js","assets/ai.9d21048b.js","assets/PhCheckCircle.vue.a1b8a166.js","assets/PhCopySimple.vue.d5bf36a0.js","assets/Avatar.7971574f.js","assets/LoadingOutlined.42fffdaf.js","assets/Card.042670e0.js","assets/TabPane.4c2e3e7f.js","assets/PhCaretRight.vue.5bcb8b14.js","assets/Badge.50335ef3.js","assets/PhFolder.vue.251cdba7.js","assets/PhPencil.vue.f08a2504.js","assets/validations.7c628001.js","assets/toggleHighContrast.a750c069.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.d6b555c2.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.4de969e8.js","assets/index.3d07f6eb.js","assets/CollapsePanel.3104d1f2.js","assets/index.30ed932d.js","assets/TasksManager.c9a90d36.css","assets/index.af2dbd28.js","assets/index.f299f473.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.217e5f74.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.7404ae23.js"),["assets/ResourcesTracker.7404ae23.js","assets/BaseLayout.b58c543d.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.386a2db3.js","assets/polling.b6eb207e.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.f597226d.js"),["assets/Welcome.f597226d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0c7b417e.js","assets/Logo.830fb16f.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.932ad84d.js","assets/ContentLayout.ee57a545.css","assets/fetch.30cc4b5e.js","assets/Card.042670e0.js","assets/TabPane.4c2e3e7f.js","assets/workspaceStore.685f2f43.js","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/linters.caa69a44.js","assets/asyncComputed.386a2db3.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.5b2d7b54.js"),["assets/App.5b2d7b54.js","assets/App.vue_vue_type_style_index_0_lang.4fbd3c5a.js","assets/workspaceStore.685f2f43.js","assets/index.c0b06422.js","assets/index.ae14d18e.css","assets/url.2bc37cc5.js","assets/colorHelpers.52815805.js","assets/PlayerConfigProvider.3162ff2d.js","assets/index.b464267b.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.d077ff69.js.map
