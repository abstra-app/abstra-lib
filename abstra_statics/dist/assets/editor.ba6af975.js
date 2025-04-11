var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.ed5876d6.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.334dce81.js";import"./linters.444e2018.js";import"./url.28c9d07b.js";import"./colorHelpers.536d34a1.js";import"./asyncComputed.ef6b106a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f2d38047-e792-41ad-8f2e-43b2246fe613",t._sentryDebugIdIdentifier="sentry-dbid-f2d38047-e792-41ad-8f2e-43b2246fe613")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"2709aec66dcf650bb41f36aee1ec41fcbd0e0be5",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.fa395517.js"),["assets/Home.fa395517.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.7b6379d0.js"),["assets/Workspace.7b6379d0.js","assets/BaseLayout.6d92f637.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/log.865bdfed.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/PhArrowCounterClockwise.vue.671db30c.js","assets/PhFilePy.vue.d1c0a5cc.js","assets/PhChats.vue.5eef9514.js","assets/PhRocket.vue.65e82330.js","assets/PhPackage.vue.50b08edf.js","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/record.4267e1e3.js","assets/polling.4bb07e1d.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/PhSignOut.vue.c287534a.js","assets/index.71c666ad.js","assets/CloseCircleOutlined.de2feb9c.js","assets/CheckCircleFilled.602cc7ba.js","assets/index.13cb5be3.js","assets/popupNotifcation.cf9b894a.js","assets/ai.eeb1ebaf.js","assets/uuid.9c56812c.js","assets/PhCheckCircle.vue.418cb781.js","assets/PhCopySimple.vue.43b7d476.js","assets/scripts.44d4aefb.js","assets/controller.75dfc1c7.js","assets/vue-flow-core.542fc76e.js","assets/validations.b6cc7097.js","assets/string.1ab10e12.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/controller.0663af69.js","assets/gateway.0da9f723.js","assets/fetch.e0096cbb.js","assets/PhPencil.vue.81bd899e.js","assets/log.cf9bdab9.css","assets/index.516ace3c.js","assets/Avatar.2efeed91.js","assets/LoadingOutlined.a4a460c3.js","assets/Workspace.a7b9924e.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.e6f88f08.js"),["assets/Stages.e6f88f08.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/ContentLayout.e2420c4f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.abec7dee.js","assets/router.a3f3262c.js","assets/Badge.0d76d0e0.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfdcb975.js","assets/BookOutlined.1d0028e4.js","assets/url.28c9d07b.js","assets/PhDotsThreeVertical.vue.e3192744.js","assets/index.2e72325a.js","assets/index.71c666ad.js","assets/CrudView.c80c8ede.css","assets/ant-design.5fde6809.js","assets/asyncComputed.ef6b106a.js","assets/string.1ab10e12.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/linters.444e2018.js","assets/scripts.44d4aefb.js","assets/record.4267e1e3.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/colorHelpers.536d34a1.js","assets/ai.eeb1ebaf.js","assets/index.13cb5be3.js","assets/validations.b6cc7097.js","assets/PhWebhooksLogo.vue.39909608.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.58abb1b7.js"),["assets/Codebase.58abb1b7.js","assets/SourceCode.6b241bfd.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/record.4267e1e3.js","assets/polling.4bb07e1d.js","assets/validations.b6cc7097.js","assets/string.1ab10e12.js","assets/PhFolder.vue.828c3d8f.js","assets/toggleHighContrast.0f9c88a2.js","assets/toggleHighContrast.30d77c87.css","assets/index.13cb5be3.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/SourceCode.382c465b.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/Logo.b7d81119.css","assets/ContentLayout.e2420c4f.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.8567eb0d.js","assets/popupNotifcation.cf9b894a.js","assets/ant-design.5fde6809.js","assets/FilesNavigator.57c0a8d7.css","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhFilePy.vue.d1c0a5cc.js","assets/PhPackage.vue.50b08edf.js","assets/PhWebhooksLogo.vue.39909608.js","assets/Codebase.8415832e.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.0972ff23.js"),["assets/WorkflowEditor.0972ff23.js","assets/controller.75dfc1c7.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/vue-flow-core.542fc76e.js","assets/uuid.9c56812c.js","assets/validations.b6cc7097.js","assets/string.1ab10e12.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/asyncComputed.ef6b106a.js","assets/linters.444e2018.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/record.4267e1e3.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.13cb5be3.js","assets/index.516ace3c.js","assets/vue-flow-minimap.2ce3dc7c.js","assets/PhArrowCounterClockwise.vue.671db30c.js","assets/TasksManager.6024ac4f.js","assets/tasksController.95812413.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/scripts.44d4aefb.js","assets/polling.4bb07e1d.js","assets/ant-design.5fde6809.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/CollapsePanel.13ed24cf.js","assets/index.9fcdace3.js","assets/TasksManager.c9a90d36.css","assets/index.dff1a6db.js","assets/Badge.0d76d0e0.js","assets/index.1ea702e8.js","assets/PhArrowDown.vue.7b89417f.js","assets/WorkflowEditor.ea11c21a.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.6285fcce.js"),["assets/Tasks.6285fcce.js","assets/TasksView.vue_vue_type_script_setup_true_lang.156987d3.js","assets/tasksController.95812413.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/scripts.44d4aefb.js","assets/record.4267e1e3.js","assets/polling.4bb07e1d.js","assets/string.1ab10e12.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/ant-design.5fde6809.js","assets/dayjs.1e761903.js","assets/index.2e72325a.js","assets/ContentLayout.e2420c4f.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.47f46273.js"),["assets/Logs.47f46273.js","assets/ContentLayout.e2420c4f.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.73311b9d.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/build.67fc7808.js","assets/string.1ab10e12.js","assets/tables.310dfb41.js","assets/record.4267e1e3.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.386a6d33.js","assets/CheckCircleFilled.602cc7ba.js","assets/LoadingOutlined.a4a460c3.js","assets/polling.4bb07e1d.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/datetime.8c1b5afc.js","assets/ant-design.5fde6809.js","assets/index.71c666ad.js","assets/index.2e72325a.js","assets/dayjs.1e761903.js","assets/CollapsePanel.13ed24cf.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.259a23ac.js"),["assets/PreferencesEditor.259a23ac.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/record.4267e1e3.js","assets/PlayerNavbar.dbf9f106.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/LoadingOutlined.a4a460c3.js","assets/PhSignOut.vue.c287534a.js","assets/index.c3160e96.js","assets/Avatar.2efeed91.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.1acfe4c8.js","assets/index.1ea702e8.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/ContentLayout.e2420c4f.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.ddb157a4.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.abf1cee5.js"),["assets/RequirementsEditor.abf1cee5.js","assets/ContentLayout.e2420c4f.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.abec7dee.js","assets/router.a3f3262c.js","assets/Badge.0d76d0e0.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfdcb975.js","assets/BookOutlined.1d0028e4.js","assets/url.28c9d07b.js","assets/PhDotsThreeVertical.vue.e3192744.js","assets/index.2e72325a.js","assets/index.71c666ad.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.ef6b106a.js","assets/polling.4bb07e1d.js","assets/linters.444e2018.js","assets/record.4267e1e3.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/colorHelpers.536d34a1.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.98771e23.js"),["assets/EnvVarsEditor.98771e23.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/record.4267e1e3.js","assets/ContentLayout.e2420c4f.js","assets/ContentLayout.ee57a545.css","assets/controller.0663af69.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/fetch.e0096cbb.js","assets/PhPencil.vue.81bd899e.js","assets/View.vue_vue_type_script_setup_true_lang.536cbb93.js","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.abec7dee.js","assets/router.a3f3262c.js","assets/Badge.0d76d0e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfdcb975.js","assets/BookOutlined.1d0028e4.js","assets/PhDotsThreeVertical.vue.e3192744.js","assets/index.2e72325a.js","assets/index.71c666ad.js","assets/CrudView.c80c8ede.css","assets/polling.4bb07e1d.js","assets/index.13cb5be3.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.47792bb4.js"),["assets/AccessControlEditor.47792bb4.js","assets/ContentLayout.e2420c4f.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.e0096cbb.js","assets/record.4267e1e3.js","assets/repository.2a5bb024.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/asyncComputed.ef6b106a.js","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/index.516ace3c.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/index.13cb5be3.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/linters.444e2018.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.0cdf4679.js"),["assets/ProjectLogin.0cdf4679.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/Logo.b7d81119.css","assets/BaseLayout.6d92f637.js","assets/BaseLayout.b7a1f19a.css","assets/index.bbe8259c.js","assets/index.c3160e96.js","assets/Avatar.2efeed91.js","assets/index.71c666ad.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.2015b95b.js"),["assets/FormEditor.2015b95b.js","assets/FormRunner.11f5bbfa.js","assets/url.28c9d07b.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/workspaceStore.334dce81.js","assets/colorHelpers.536d34a1.js","assets/Login.vue_vue_type_script_setup_true_lang.08c14d12.js","assets/Logo.f030a8f4.js","assets/Logo.b7d81119.css","assets/string.1ab10e12.js","assets/OTPInput.2728b672.js","assets/OTPInput.277362d6.css","assets/index.13cb5be3.js","assets/Login.eaf7209c.css","assets/Steps.a2f41125.js","assets/index.d70d7200.js","assets/Steps.4d03c6c1.css","assets/Watermark.55d33ee7.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.ef6b106a.js","assets/linters.444e2018.js","assets/scripts.44d4aefb.js","assets/record.4267e1e3.js","assets/workspaces.9795dadf.js","assets/RuntimeCommonSettings.66461355.js","assets/BaseLayout.6d92f637.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.865bdfed.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/PhArrowCounterClockwise.vue.671db30c.js","assets/PhFilePy.vue.d1c0a5cc.js","assets/PhChats.vue.5eef9514.js","assets/PhRocket.vue.65e82330.js","assets/PhPackage.vue.50b08edf.js","assets/polling.4bb07e1d.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/PhSignOut.vue.c287534a.js","assets/index.71c666ad.js","assets/CloseCircleOutlined.de2feb9c.js","assets/CheckCircleFilled.602cc7ba.js","assets/popupNotifcation.cf9b894a.js","assets/ai.eeb1ebaf.js","assets/uuid.9c56812c.js","assets/PhCheckCircle.vue.418cb781.js","assets/PhCopySimple.vue.43b7d476.js","assets/controller.75dfc1c7.js","assets/vue-flow-core.542fc76e.js","assets/validations.b6cc7097.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/controller.0663af69.js","assets/gateway.0da9f723.js","assets/fetch.e0096cbb.js","assets/PhPencil.vue.81bd899e.js","assets/log.cf9bdab9.css","assets/ant-design.5fde6809.js","assets/Avatar.2efeed91.js","assets/LoadingOutlined.a4a460c3.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/SourceCode.6b241bfd.js","assets/PhFolder.vue.828c3d8f.js","assets/toggleHighContrast.0f9c88a2.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.6024ac4f.js","assets/tasksController.95812413.js","assets/index.516ace3c.js","assets/CollapsePanel.13ed24cf.js","assets/index.9fcdace3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.7aac0fcf.js","assets/Badge.0d76d0e0.js","assets/RuntimeCommonSettings.24be80d3.css","assets/PlayerNavbar.dbf9f106.js","assets/index.c3160e96.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.1acfe4c8.js","assets/index.1ea702e8.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.35f148cb.js"),["assets/JobEditor.35f148cb.js","assets/asyncComputed.ef6b106a.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/scripts.44d4aefb.js","assets/record.4267e1e3.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/RuntimeCommonSettings.66461355.js","assets/BaseLayout.6d92f637.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.865bdfed.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/PhArrowCounterClockwise.vue.671db30c.js","assets/PhFilePy.vue.d1c0a5cc.js","assets/PhChats.vue.5eef9514.js","assets/PhRocket.vue.65e82330.js","assets/PhPackage.vue.50b08edf.js","assets/polling.4bb07e1d.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/PhSignOut.vue.c287534a.js","assets/index.71c666ad.js","assets/CloseCircleOutlined.de2feb9c.js","assets/CheckCircleFilled.602cc7ba.js","assets/index.13cb5be3.js","assets/popupNotifcation.cf9b894a.js","assets/ai.eeb1ebaf.js","assets/uuid.9c56812c.js","assets/PhCheckCircle.vue.418cb781.js","assets/PhCopySimple.vue.43b7d476.js","assets/controller.75dfc1c7.js","assets/vue-flow-core.542fc76e.js","assets/validations.b6cc7097.js","assets/string.1ab10e12.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/controller.0663af69.js","assets/gateway.0da9f723.js","assets/fetch.e0096cbb.js","assets/PhPencil.vue.81bd899e.js","assets/log.cf9bdab9.css","assets/ant-design.5fde6809.js","assets/Avatar.2efeed91.js","assets/LoadingOutlined.a4a460c3.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/SourceCode.6b241bfd.js","assets/PhFolder.vue.828c3d8f.js","assets/toggleHighContrast.0f9c88a2.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.6024ac4f.js","assets/tasksController.95812413.js","assets/index.516ace3c.js","assets/CollapsePanel.13ed24cf.js","assets/index.9fcdace3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.7aac0fcf.js","assets/Badge.0d76d0e0.js","assets/RuntimeCommonSettings.24be80d3.css","assets/index.ea2a522d.js","assets/RunButton.vue_vue_type_script_setup_true_lang.ba3d6a10.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.1a95d04f.js"),["assets/HookEditor.1a95d04f.js","assets/asyncComputed.ef6b106a.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/scripts.44d4aefb.js","assets/record.4267e1e3.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/RuntimeCommonSettings.66461355.js","assets/BaseLayout.6d92f637.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.865bdfed.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/PhArrowCounterClockwise.vue.671db30c.js","assets/PhFilePy.vue.d1c0a5cc.js","assets/PhChats.vue.5eef9514.js","assets/PhRocket.vue.65e82330.js","assets/PhPackage.vue.50b08edf.js","assets/polling.4bb07e1d.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/PhSignOut.vue.c287534a.js","assets/index.71c666ad.js","assets/CloseCircleOutlined.de2feb9c.js","assets/CheckCircleFilled.602cc7ba.js","assets/index.13cb5be3.js","assets/popupNotifcation.cf9b894a.js","assets/ai.eeb1ebaf.js","assets/uuid.9c56812c.js","assets/PhCheckCircle.vue.418cb781.js","assets/PhCopySimple.vue.43b7d476.js","assets/controller.75dfc1c7.js","assets/vue-flow-core.542fc76e.js","assets/validations.b6cc7097.js","assets/string.1ab10e12.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/controller.0663af69.js","assets/gateway.0da9f723.js","assets/fetch.e0096cbb.js","assets/PhPencil.vue.81bd899e.js","assets/log.cf9bdab9.css","assets/ant-design.5fde6809.js","assets/Avatar.2efeed91.js","assets/LoadingOutlined.a4a460c3.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/SourceCode.6b241bfd.js","assets/PhFolder.vue.828c3d8f.js","assets/toggleHighContrast.0f9c88a2.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.6024ac4f.js","assets/tasksController.95812413.js","assets/index.516ace3c.js","assets/CollapsePanel.13ed24cf.js","assets/index.9fcdace3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.7aac0fcf.js","assets/Badge.0d76d0e0.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.ba3d6a10.js","assets/index.e4668868.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.db5a75ad.js"),["assets/ScriptEditor.db5a75ad.js","assets/tasksController.95812413.js","assets/gateway.0da9f723.js","assets/popupNotifcation.cf9b894a.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/scripts.44d4aefb.js","assets/record.4267e1e3.js","assets/polling.4bb07e1d.js","assets/string.1ab10e12.js","assets/workspaces.9795dadf.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/RuntimeCommonSettings.66461355.js","assets/BaseLayout.6d92f637.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7f99fb6e.js","assets/UnsavedChangesHandler.5605092a.js","assets/ExclamationCircleOutlined.989446c4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.865bdfed.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.82b72500.js","assets/PhArrowCounterClockwise.vue.671db30c.js","assets/PhFilePy.vue.d1c0a5cc.js","assets/PhChats.vue.5eef9514.js","assets/PhRocket.vue.65e82330.js","assets/PhPackage.vue.50b08edf.js","assets/PhArrowSquareOut.vue.13d3f6d7.js","assets/PhSignOut.vue.c287534a.js","assets/index.71c666ad.js","assets/CloseCircleOutlined.de2feb9c.js","assets/CheckCircleFilled.602cc7ba.js","assets/index.13cb5be3.js","assets/ai.eeb1ebaf.js","assets/uuid.9c56812c.js","assets/PhCheckCircle.vue.418cb781.js","assets/PhCopySimple.vue.43b7d476.js","assets/controller.75dfc1c7.js","assets/vue-flow-core.542fc76e.js","assets/validations.b6cc7097.js","assets/metadata.35d2649f.js","assets/PhRobot.vue.739024d2.js","assets/PhWebhooksLogo.vue.39909608.js","assets/controller.0663af69.js","assets/fetch.e0096cbb.js","assets/PhPencil.vue.81bd899e.js","assets/log.cf9bdab9.css","assets/ant-design.5fde6809.js","assets/Avatar.2efeed91.js","assets/LoadingOutlined.a4a460c3.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/SourceCode.6b241bfd.js","assets/PhFolder.vue.828c3d8f.js","assets/toggleHighContrast.0f9c88a2.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.6024ac4f.js","assets/index.516ace3c.js","assets/CollapsePanel.13ed24cf.js","assets/index.9fcdace3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.7aac0fcf.js","assets/Badge.0d76d0e0.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.ba3d6a10.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.2a166fe0.js"),["assets/ResourcesTracker.2a166fe0.js","assets/BaseLayout.6d92f637.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.ef6b106a.js","assets/polling.4bb07e1d.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.8695d704.js"),["assets/Welcome.8695d704.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d23c8a15.js","assets/Logo.f030a8f4.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/Logo.b7d81119.css","assets/ContentLayout.e2420c4f.js","assets/ContentLayout.ee57a545.css","assets/fetch.e0096cbb.js","assets/Card.0d4f3abf.js","assets/TabPane.0acef4a3.js","assets/workspaceStore.334dce81.js","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/linters.444e2018.js","assets/asyncComputed.ef6b106a.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.7dcf81aa.js"),["assets/App.7dcf81aa.js","assets/App.vue_vue_type_style_index_0_lang.27c26547.js","assets/workspaceStore.334dce81.js","assets/index.ed5876d6.js","assets/index.ae14d18e.css","assets/url.28c9d07b.js","assets/colorHelpers.536d34a1.js","assets/PlayerConfigProvider.1acfe4c8.js","assets/index.1ea702e8.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.ba6af975.js.map
