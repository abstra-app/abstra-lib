var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f as E,g as f,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.07f9f4c4.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.dd7b207f.js";import"./linters.fa202adb.js";import"./url.d4d00a32.js";import"./colorHelpers.e581006b.js";import"./asyncComputed.c03dce3e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8de7d2ec-8a7f-4d58-928d-58a4398e35b4",t._sentryDebugIdIdentifier="sentry-dbid-8de7d2ec-8a7f-4d58-928d-58a4398e35b4")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"20e61ee607bb83259bf50c4418b49655c9ece68c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=E(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=E(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return f(()=>e.value,_),f(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.acced1af.js"),["assets/Home.acced1af.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.128abb44.js"),["assets/Workspace.128abb44.js","assets/BaseLayout.3c091b4e.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.5e4f2e3d.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/NavbarControls.e42b3873.js","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/index.61e63cff.js","assets/CloseCircleOutlined.f1a8ab37.js","assets/index.5c7cdba3.js","assets/workspaces.c1ab2ac4.js","assets/record.b9cfeac1.js","assets/popupNotifcation.2e774f60.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/PhChats.vue.23cacbc8.js","assets/polling.699330de.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/Logo.dda0ebf1.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.f71e9641.js","assets/PhIdentificationBadge.vue.4f5c3a9b.js","assets/PhCaretRight.vue.bf891f5e.js","assets/index.74888aaf.js","assets/index.e124ccb9.js","assets/Avatar.16f1c86b.js","assets/Workspace.954990f3.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.5b5ae4f6.js"),["assets/Stages.5b5ae4f6.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/ContentLayout.e2217d22.js","assets/ContentLayout.ee57a545.css","assets/CrudView.0336df6f.js","assets/router.1d44dc28.js","assets/Badge.2873465b.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/url.d4d00a32.js","assets/PhDotsThreeVertical.vue.23fa05af.js","assets/index.903aab5a.js","assets/index.61e63cff.js","assets/CrudView.c80c8ede.css","assets/ant-design.672562da.js","assets/asyncComputed.c03dce3e.js","assets/string.0108bd09.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/linters.fa202adb.js","assets/scripts.08330d1c.js","assets/record.b9cfeac1.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/colorHelpers.e581006b.js","assets/ai.53b12e99.js","assets/index.5c7cdba3.js","assets/validations.d6eb5ed9.js","assets/PhWebhooksLogo.vue.735674f2.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.4aff20d2.js"),["assets/Codebase.4aff20d2.js","assets/SourceCode.5fd80245.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/record.b9cfeac1.js","assets/polling.699330de.js","assets/validations.d6eb5ed9.js","assets/string.0108bd09.js","assets/PhFolder.vue.ae32874e.js","assets/toggleHighContrast.be4e837a.js","assets/toggleHighContrast.30d77c87.css","assets/index.5c7cdba3.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/SourceCode.1cb3f731.css","assets/ContentLayout.e2217d22.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.ccfdf239.js","assets/popupNotifcation.2e774f60.js","assets/ant-design.672562da.js","assets/FilesNavigator.ebc9fb1c.css","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/Codebase.8ba12bca.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.0ea59ce3.js"),["assets/WorkflowEditor.0ea59ce3.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.20dc4130.js","assets/uuid.4cb85baf.js","assets/validations.d6eb5ed9.js","assets/string.0108bd09.js","assets/metadata.f316433a.js","assets/PhRobot.vue.20b7ad7b.js","assets/PhWebhooksLogo.vue.735674f2.js","assets/asyncComputed.c03dce3e.js","assets/linters.fa202adb.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/record.b9cfeac1.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.aca8e23f.js","assets/index.5c7cdba3.js","assets/PhArrowCounterClockwise.vue.f71e9641.js","assets/TasksManager.328edb66.js","assets/tasksController.c8a28061.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/scripts.08330d1c.js","assets/polling.699330de.js","assets/ant-design.672562da.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/CollapsePanel.66e49750.js","assets/index.7074ae12.js","assets/TasksManager.c9a90d36.css","assets/index.fb53231f.js","assets/Badge.2873465b.js","assets/index.92102d41.js","assets/PhArrowDown.vue.1a579adc.js","assets/WorkflowEditor.b704a89b.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.1769adf6.js"),["assets/Tasks.1769adf6.js","assets/TasksView.vue_vue_type_script_setup_true_lang.5489f6c4.js","assets/tasksController.c8a28061.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/scripts.08330d1c.js","assets/record.b9cfeac1.js","assets/polling.699330de.js","assets/string.0108bd09.js","assets/metadata.f316433a.js","assets/PhRobot.vue.20b7ad7b.js","assets/PhWebhooksLogo.vue.735674f2.js","assets/ant-design.672562da.js","assets/dayjs.6b69e9f7.js","assets/index.903aab5a.js","assets/ContentLayout.e2217d22.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.2fbf84c7.js"),["assets/Logs.2fbf84c7.js","assets/ContentLayout.e2217d22.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.0542493e.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/build.c09193b8.js","assets/string.0108bd09.js","assets/tables.f012d89b.js","assets/record.b9cfeac1.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.57fb5c9f.js","assets/LoadingOutlined.22297519.js","assets/polling.699330de.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/datetime.91445dc9.js","assets/ant-design.672562da.js","assets/index.61e63cff.js","assets/index.903aab5a.js","assets/dayjs.6b69e9f7.js","assets/CollapsePanel.66e49750.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.f012255c.js"),["assets/PreferencesEditor.f012255c.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/record.b9cfeac1.js","assets/PlayerNavbar.e29b190f.js","assets/metadata.f316433a.js","assets/PhRobot.vue.20b7ad7b.js","assets/PhWebhooksLogo.vue.735674f2.js","assets/LoadingOutlined.22297519.js","assets/PhSignOut.vue.5e4f2e3d.js","assets/index.e124ccb9.js","assets/Avatar.16f1c86b.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.51555ae2.js","assets/index.92102d41.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/ContentLayout.e2217d22.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.205c8c74.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.58efc445.js"),["assets/RequirementsEditor.58efc445.js","assets/ContentLayout.e2217d22.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.0336df6f.js","assets/router.1d44dc28.js","assets/Badge.2873465b.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/url.d4d00a32.js","assets/PhDotsThreeVertical.vue.23fa05af.js","assets/index.903aab5a.js","assets/index.61e63cff.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c03dce3e.js","assets/polling.699330de.js","assets/linters.fa202adb.js","assets/record.b9cfeac1.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/colorHelpers.e581006b.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.f3f95715.js"),["assets/EnvVarsEditor.f3f95715.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/record.b9cfeac1.js","assets/ContentLayout.e2217d22.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.23d1e610.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/fetch.2bb779a3.js","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.0336df6f.js","assets/router.1d44dc28.js","assets/Badge.2873465b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/PhDotsThreeVertical.vue.23fa05af.js","assets/index.903aab5a.js","assets/index.61e63cff.js","assets/CrudView.c80c8ede.css","assets/polling.699330de.js","assets/PhPencil.vue.13366b43.js","assets/index.5c7cdba3.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.d13574d6.js"),["assets/AccessControlEditor.d13574d6.js","assets/ContentLayout.e2217d22.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.2bb779a3.js","assets/record.b9cfeac1.js","assets/repository.a5a233dd.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/asyncComputed.c03dce3e.js","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.98638ba6.js","assets/index.aca8e23f.js","assets/metadata.f316433a.js","assets/PhRobot.vue.20b7ad7b.js","assets/PhWebhooksLogo.vue.735674f2.js","assets/index.5c7cdba3.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/linters.fa202adb.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.db7cb178.js"),["assets/ProjectLogin.db7cb178.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/Logo.dda0ebf1.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.3c091b4e.js","assets/BaseLayout.b7a1f19a.css","assets/index.74888aaf.js","assets/index.e124ccb9.js","assets/Avatar.16f1c86b.js","assets/index.61e63cff.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.a3d5ea45.js"),["assets/FormEditor.a3d5ea45.js","assets/FormRunner.5126dd4f.js","assets/url.d4d00a32.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/workspaceStore.dd7b207f.js","assets/colorHelpers.e581006b.js","assets/Login.vue_vue_type_script_setup_true_lang.c84b2393.js","assets/Logo.dda0ebf1.js","assets/Logo.8bf94625.css","assets/string.0108bd09.js","assets/OTPInput.c37ae044.js","assets/OTPInput.277362d6.css","assets/index.5c7cdba3.js","assets/Login.eaf7209c.css","assets/Steps.ef35594c.js","assets/index.45c250a2.js","assets/Steps.4d03c6c1.css","assets/Watermark.3518d2b3.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.c03dce3e.js","assets/linters.fa202adb.js","assets/scripts.08330d1c.js","assets/record.b9cfeac1.js","assets/workspaces.c1ab2ac4.js","assets/RuntimeCommonSettings.56e6d064.js","assets/BaseLayout.3c091b4e.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.4cb85baf.js","assets/NavbarControls.e42b3873.js","assets/index.61e63cff.js","assets/CloseCircleOutlined.f1a8ab37.js","assets/popupNotifcation.2e774f60.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/PhChats.vue.23cacbc8.js","assets/polling.699330de.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/ant-design.672562da.js","assets/ai.53b12e99.js","assets/PhCheckCircle.vue.5c0773b4.js","assets/PhCopySimple.vue.e1f19a10.js","assets/Avatar.16f1c86b.js","assets/LoadingOutlined.22297519.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/PhCaretRight.vue.bf891f5e.js","assets/Badge.2873465b.js","assets/SourceCode.5fd80245.js","assets/validations.d6eb5ed9.js","assets/PhFolder.vue.ae32874e.js","assets/toggleHighContrast.be4e837a.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.328edb66.js","assets/tasksController.c8a28061.js","assets/gateway.cbf9ef58.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/index.aca8e23f.js","assets/CollapsePanel.66e49750.js","assets/index.7074ae12.js","assets/TasksManager.c9a90d36.css","assets/index.74888aaf.js","assets/index.e124ccb9.js","assets/RuntimeCommonSettings.14275052.css","assets/PlayerNavbar.e29b190f.js","assets/metadata.f316433a.js","assets/PhRobot.vue.20b7ad7b.js","assets/PhWebhooksLogo.vue.735674f2.js","assets/PhSignOut.vue.5e4f2e3d.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.51555ae2.js","assets/index.92102d41.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.4c3006f6.js"),["assets/JobEditor.4c3006f6.js","assets/asyncComputed.c03dce3e.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/scripts.08330d1c.js","assets/record.b9cfeac1.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/RuntimeCommonSettings.56e6d064.js","assets/BaseLayout.3c091b4e.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.4cb85baf.js","assets/NavbarControls.e42b3873.js","assets/index.61e63cff.js","assets/CloseCircleOutlined.f1a8ab37.js","assets/index.5c7cdba3.js","assets/popupNotifcation.2e774f60.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/PhChats.vue.23cacbc8.js","assets/polling.699330de.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/Logo.dda0ebf1.js","assets/Logo.8bf94625.css","assets/ant-design.672562da.js","assets/ai.53b12e99.js","assets/PhCheckCircle.vue.5c0773b4.js","assets/PhCopySimple.vue.e1f19a10.js","assets/Avatar.16f1c86b.js","assets/LoadingOutlined.22297519.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/PhCaretRight.vue.bf891f5e.js","assets/Badge.2873465b.js","assets/SourceCode.5fd80245.js","assets/validations.d6eb5ed9.js","assets/string.0108bd09.js","assets/PhFolder.vue.ae32874e.js","assets/toggleHighContrast.be4e837a.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.328edb66.js","assets/tasksController.c8a28061.js","assets/gateway.cbf9ef58.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/index.aca8e23f.js","assets/CollapsePanel.66e49750.js","assets/index.7074ae12.js","assets/TasksManager.c9a90d36.css","assets/index.74888aaf.js","assets/index.e124ccb9.js","assets/RuntimeCommonSettings.14275052.css","assets/index.f72ea29b.js","assets/RunButton.vue_vue_type_script_setup_true_lang.63e74f01.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f72cba40.js"),["assets/HookEditor.f72cba40.js","assets/asyncComputed.c03dce3e.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/scripts.08330d1c.js","assets/record.b9cfeac1.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/RuntimeCommonSettings.56e6d064.js","assets/BaseLayout.3c091b4e.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.4cb85baf.js","assets/NavbarControls.e42b3873.js","assets/index.61e63cff.js","assets/CloseCircleOutlined.f1a8ab37.js","assets/index.5c7cdba3.js","assets/popupNotifcation.2e774f60.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/PhChats.vue.23cacbc8.js","assets/polling.699330de.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/Logo.dda0ebf1.js","assets/Logo.8bf94625.css","assets/ant-design.672562da.js","assets/ai.53b12e99.js","assets/PhCheckCircle.vue.5c0773b4.js","assets/PhCopySimple.vue.e1f19a10.js","assets/Avatar.16f1c86b.js","assets/LoadingOutlined.22297519.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/PhCaretRight.vue.bf891f5e.js","assets/Badge.2873465b.js","assets/SourceCode.5fd80245.js","assets/validations.d6eb5ed9.js","assets/string.0108bd09.js","assets/PhFolder.vue.ae32874e.js","assets/toggleHighContrast.be4e837a.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.328edb66.js","assets/tasksController.c8a28061.js","assets/gateway.cbf9ef58.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/index.aca8e23f.js","assets/CollapsePanel.66e49750.js","assets/index.7074ae12.js","assets/TasksManager.c9a90d36.css","assets/index.74888aaf.js","assets/index.e124ccb9.js","assets/RuntimeCommonSettings.14275052.css","assets/RunButton.vue_vue_type_script_setup_true_lang.63e74f01.js","assets/index.40d2a0f1.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.13e5fbea.js"),["assets/ScriptEditor.13e5fbea.js","assets/tasksController.c8a28061.js","assets/gateway.cbf9ef58.js","assets/popupNotifcation.2e774f60.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/scripts.08330d1c.js","assets/record.b9cfeac1.js","assets/polling.699330de.js","assets/string.0108bd09.js","assets/workspaces.c1ab2ac4.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/RuntimeCommonSettings.56e6d064.js","assets/BaseLayout.3c091b4e.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.11d347c6.js","assets/UnsavedChangesHandler.6f55dfb2.js","assets/ExclamationCircleOutlined.27925218.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.4cb85baf.js","assets/NavbarControls.e42b3873.js","assets/index.61e63cff.js","assets/CloseCircleOutlined.f1a8ab37.js","assets/index.5c7cdba3.js","assets/PhArrowSquareOut.vue.98638ba6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c6b24776.js","assets/BookOutlined.2f7b37b7.js","assets/PhChats.vue.23cacbc8.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/Logo.dda0ebf1.js","assets/Logo.8bf94625.css","assets/ant-design.672562da.js","assets/ai.53b12e99.js","assets/PhCheckCircle.vue.5c0773b4.js","assets/PhCopySimple.vue.e1f19a10.js","assets/Avatar.16f1c86b.js","assets/LoadingOutlined.22297519.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/PhCaretRight.vue.bf891f5e.js","assets/Badge.2873465b.js","assets/SourceCode.5fd80245.js","assets/validations.d6eb5ed9.js","assets/PhFolder.vue.ae32874e.js","assets/toggleHighContrast.be4e837a.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.328edb66.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.60dad1fa.js","assets/index.aca8e23f.js","assets/CollapsePanel.66e49750.js","assets/index.7074ae12.js","assets/TasksManager.c9a90d36.css","assets/index.74888aaf.js","assets/index.e124ccb9.js","assets/RuntimeCommonSettings.14275052.css","assets/RunButton.vue_vue_type_script_setup_true_lang.63e74f01.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.35dda05e.js"),["assets/ResourcesTracker.35dda05e.js","assets/BaseLayout.3c091b4e.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.c03dce3e.js","assets/polling.699330de.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.329fb5a6.js"),["assets/Welcome.329fb5a6.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9b27c5f9.js","assets/Logo.dda0ebf1.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.e2217d22.js","assets/ContentLayout.ee57a545.css","assets/fetch.2bb779a3.js","assets/Card.cd2bf093.js","assets/TabPane.fd3841f0.js","assets/workspaceStore.dd7b207f.js","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/linters.fa202adb.js","assets/asyncComputed.c03dce3e.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.c93ee137.js"),["assets/App.c93ee137.js","assets/App.vue_vue_type_style_index_0_lang.4ad6dee0.js","assets/workspaceStore.dd7b207f.js","assets/index.07f9f4c4.js","assets/index.ae14d18e.css","assets/url.d4d00a32.js","assets/colorHelpers.e581006b.js","assets/PlayerConfigProvider.51555ae2.js","assets/index.92102d41.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.4308be17.js.map
