var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f,g as E,h as S,i as C,_ as r,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.d728e330.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.64f294b6.js";import"./linters.52940436.js";import"./url.03500f23.js";import"./colorHelpers.64161ae3.js";import"./asyncComputed.86e766d3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b4ceec39-8eeb-4b0d-b4b7-506b212e8746",t._sentryDebugIdIdentifier="sentry-dbid-b4ceec39-8eeb-4b0d-b4b7-506b212e8746")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const re={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"ab9b7b02e1cc77cfba96dd4b0f77492b3596ffb1",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||re[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var a,i;return(i=(a=e.value)==null?void 0:a.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async a=>{const i=await t.createLogin(a);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async a=>{if(a&&"info"in a){const{email:i,intercomHash:P}=a.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>r(()=>import("./Home.0cb2df06.js"),["assets/Home.0cb2df06.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>r(()=>import("./Workspace.9fe2ebdc.js"),["assets/Workspace.9fe2ebdc.js","assets/BaseLayout.4268a2d7.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.4fc5b4a6.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/NavbarControls.dd670936.js","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/index.1231d115.js","assets/CloseCircleOutlined.57dfb6c4.js","assets/index.445a1693.js","assets/workspaces.0141c1c8.js","assets/record.a36b091e.js","assets/popupNotifcation.ff8ffede.js","assets/PhArrowSquareOut.vue.e99a2900.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/PhChats.vue.c2707db0.js","assets/polling.40f5de8e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.2624302a.js","assets/PhIdentificationBadge.vue.6b9fd99f.js","assets/PhCaretRight.vue.d25eaaea.js","assets/index.ee7f86f9.js","assets/index.97bd7dc2.js","assets/Avatar.3081be1a.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>r(()=>import("./Stages.f5481e01.js"),["assets/Stages.f5481e01.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/ContentLayout.83135e4b.js","assets/ContentLayout.ee57a545.css","assets/CrudView.22d5c66e.js","assets/router.75dc5960.js","assets/Badge.d3a226ec.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/url.03500f23.js","assets/PhDotsThreeVertical.vue.66e9daef.js","assets/index.2cbb0cea.js","assets/index.1231d115.js","assets/CrudView.c80c8ede.css","assets/ant-design.60ff9afa.js","assets/asyncComputed.86e766d3.js","assets/string.7b682701.js","assets/PhArrowSquareOut.vue.e99a2900.js","assets/scripts.6ccfc826.js","assets/record.a36b091e.js","assets/linters.52940436.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/colorHelpers.64161ae3.js","assets/ai.f8825df7.js","assets/index.445a1693.js","assets/PhWebhooksLogo.vue.9815013b.js","assets/validations.4de9d21b.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>r(()=>import("./WorkflowEditor.5f351a01.js"),["assets/WorkflowEditor.5f351a01.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/vue-flow-minimap.42cef60d.js","assets/validations.4de9d21b.js","assets/string.7b682701.js","assets/uuid.18771d8c.js","assets/metadata.7f2db139.js","assets/PhWebhooksLogo.vue.9815013b.js","assets/asyncComputed.86e766d3.js","assets/linters.52940436.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/record.a36b091e.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.44433c40.js","assets/index.445a1693.js","assets/PhArrowCounterClockwise.vue.2624302a.js","assets/TasksManager.1eb59008.js","assets/tasksController.194039e0.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/scripts.6ccfc826.js","assets/polling.40f5de8e.js","assets/ant-design.60ff9afa.js","assets/PhArrowSquareOut.vue.e99a2900.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.23d6cd13.js","assets/Card.14b65dcb.js","assets/TabPane.3d0d00a4.js","assets/CollapsePanel.fd4b01d5.js","assets/index.07a98922.js","assets/TasksManager.53a9d7b9.css","assets/index.fc7cf91f.js","assets/Badge.d3a226ec.js","assets/index.6fb42f15.js","assets/PhArrowDown.vue.531ec903.js","assets/WorkflowEditor.db6223ea.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>r(()=>import("./Tasks.9949619c.js"),["assets/Tasks.9949619c.js","assets/TasksView.vue_vue_type_script_setup_true_lang.5fa7d8e6.js","assets/tasksController.194039e0.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/scripts.6ccfc826.js","assets/record.a36b091e.js","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/polling.40f5de8e.js","assets/string.7b682701.js","assets/metadata.7f2db139.js","assets/PhWebhooksLogo.vue.9815013b.js","assets/ant-design.60ff9afa.js","assets/dayjs.16c5458e.js","assets/index.2cbb0cea.js","assets/ContentLayout.83135e4b.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>r(()=>import("./Logs.6a13d17c.js"),["assets/Logs.6a13d17c.js","assets/ContentLayout.83135e4b.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.9102ce8c.js","assets/string.7b682701.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/build.2c787ff8.js","assets/tables.4e6f1de1.js","assets/record.a36b091e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.0bf785d2.js","assets/LoadingOutlined.9126a350.js","assets/polling.40f5de8e.js","assets/datetime.c947779c.js","assets/ant-design.60ff9afa.js","assets/index.1231d115.js","assets/index.2cbb0cea.js","assets/dayjs.16c5458e.js","assets/CollapsePanel.fd4b01d5.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>r(()=>import("./PreferencesEditor.dd25ec5c.js"),["assets/PreferencesEditor.dd25ec5c.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/record.a36b091e.js","assets/PlayerNavbar.c539b7e4.js","assets/metadata.7f2db139.js","assets/PhWebhooksLogo.vue.9815013b.js","assets/LoadingOutlined.9126a350.js","assets/PhSignOut.vue.4fc5b4a6.js","assets/index.97bd7dc2.js","assets/Avatar.3081be1a.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.efc75087.js","assets/index.6fb42f15.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.23d6cd13.js","assets/ContentLayout.83135e4b.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.5a4c3d62.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>r(()=>import("./RequirementsEditor.6d2e6317.js"),["assets/RequirementsEditor.6d2e6317.js","assets/ContentLayout.83135e4b.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/CrudView.22d5c66e.js","assets/router.75dc5960.js","assets/Badge.d3a226ec.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/url.03500f23.js","assets/PhDotsThreeVertical.vue.66e9daef.js","assets/index.2cbb0cea.js","assets/index.1231d115.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.86e766d3.js","assets/polling.40f5de8e.js","assets/linters.52940436.js","assets/record.a36b091e.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/colorHelpers.64161ae3.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>r(()=>import("./EnvVarsEditor.893c8def.js"),["assets/EnvVarsEditor.893c8def.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/record.a36b091e.js","assets/ContentLayout.83135e4b.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.afc17c21.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/fetch.521b808c.js","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.22d5c66e.js","assets/router.75dc5960.js","assets/Badge.d3a226ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/PhDotsThreeVertical.vue.66e9daef.js","assets/index.2cbb0cea.js","assets/index.1231d115.js","assets/CrudView.c80c8ede.css","assets/polling.40f5de8e.js","assets/PhPencil.vue.180f4002.js","assets/index.445a1693.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>r(()=>import("./AccessControlEditor.dedb9eaa.js"),["assets/AccessControlEditor.dedb9eaa.js","assets/ContentLayout.83135e4b.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/fetch.521b808c.js","assets/record.a36b091e.js","assets/repository.bbf2eb1a.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/asyncComputed.86e766d3.js","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.e99a2900.js","assets/index.44433c40.js","assets/metadata.7f2db139.js","assets/PhWebhooksLogo.vue.9815013b.js","assets/index.445a1693.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/linters.52940436.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>r(()=>import("./ProjectLogin.3bb8ac9f.js"),["assets/ProjectLogin.3bb8ac9f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/Logo.8bf94625.css","assets/BaseLayout.4268a2d7.js","assets/BaseLayout.b7a1f19a.css","assets/index.ee7f86f9.js","assets/index.97bd7dc2.js","assets/Avatar.3081be1a.js","assets/index.1231d115.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>r(()=>import("./FormEditor.92da4038.js"),["assets/FormEditor.92da4038.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/BaseLayout.4268a2d7.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.d55bb006.js","assets/scripts.6ccfc826.js","assets/record.a36b091e.js","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/validations.4de9d21b.js","assets/string.7b682701.js","assets/uuid.18771d8c.js","assets/PhCaretRight.vue.d25eaaea.js","assets/Badge.d3a226ec.js","assets/LoadingOutlined.9126a350.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/polling.40f5de8e.js","assets/PhFolder.vue.401df1a7.js","assets/PhPencil.vue.180f4002.js","assets/toggleHighContrast.dd32bfda.js","assets/toggleHighContrast.30d77c87.css","assets/index.445a1693.js","assets/Card.14b65dcb.js","assets/TabPane.3d0d00a4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/Logo.8bf94625.css","assets/ant-design.60ff9afa.js","assets/PhGear.vue.bc8d0bd1.js","assets/ai.f8825df7.js","assets/PhCheckCircle.vue.d989c352.js","assets/PhCopySimple.vue.2b59680a.js","assets/Avatar.3081be1a.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.bb9378d5.js","assets/Login.vue_vue_type_script_setup_true_lang.1645c193.js","assets/CircularLoading.86995103.js","assets/CircularLoading.1a558a0d.css","assets/index.6fb42f15.js","assets/Login.9114b8a3.css","assets/Steps.c94dd272.js","assets/index.8f078108.js","assets/Steps.4d03c6c1.css","assets/Watermark.59e86546.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.a5c2ba90.css","assets/PlayerNavbar.c539b7e4.js","assets/metadata.7f2db139.js","assets/PhWebhooksLogo.vue.9815013b.js","assets/PhSignOut.vue.4fc5b4a6.js","assets/index.97bd7dc2.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.efc75087.js","assets/PlayerConfigProvider.309c06f9.css","assets/PhArrowSquareOut.vue.e99a2900.js","assets/index.1231d115.js","assets/TasksManager.1eb59008.js","assets/tasksController.194039e0.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.23d6cd13.js","assets/index.44433c40.js","assets/CollapsePanel.fd4b01d5.js","assets/index.07a98922.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.dd670936.js","assets/CloseCircleOutlined.57dfb6c4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/PhChats.vue.c2707db0.js","assets/NavbarControls.e2d5dd75.css","assets/index.ee7f86f9.js","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>r(()=>import("./JobEditor.8440afe0.js"),["assets/JobEditor.8440afe0.js","assets/asyncComputed.86e766d3.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/scripts.6ccfc826.js","assets/record.a36b091e.js","assets/linters.52940436.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.15a49466.js","assets/BaseLayout.4268a2d7.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.d55bb006.js","assets/validations.4de9d21b.js","assets/string.7b682701.js","assets/uuid.18771d8c.js","assets/PhCaretRight.vue.d25eaaea.js","assets/Badge.d3a226ec.js","assets/LoadingOutlined.9126a350.js","assets/polling.40f5de8e.js","assets/PhFolder.vue.401df1a7.js","assets/PhPencil.vue.180f4002.js","assets/toggleHighContrast.dd32bfda.js","assets/toggleHighContrast.30d77c87.css","assets/index.445a1693.js","assets/Card.14b65dcb.js","assets/TabPane.3d0d00a4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/Logo.8bf94625.css","assets/ant-design.60ff9afa.js","assets/PhGear.vue.bc8d0bd1.js","assets/ai.f8825df7.js","assets/PhCheckCircle.vue.d989c352.js","assets/PhCopySimple.vue.2b59680a.js","assets/Avatar.3081be1a.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.dd670936.js","assets/index.1231d115.js","assets/CloseCircleOutlined.57dfb6c4.js","assets/popupNotifcation.ff8ffede.js","assets/PhArrowSquareOut.vue.e99a2900.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/PhChats.vue.c2707db0.js","assets/NavbarControls.e2d5dd75.css","assets/TasksManager.1eb59008.js","assets/tasksController.194039e0.js","assets/gateway.0c79d34d.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.23d6cd13.js","assets/index.44433c40.js","assets/CollapsePanel.fd4b01d5.js","assets/index.07a98922.js","assets/TasksManager.53a9d7b9.css","assets/index.ee7f86f9.js","assets/index.97bd7dc2.js","assets/index.c39e388c.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>r(()=>import("./HookEditor.6d42dfcd.js"),["assets/HookEditor.6d42dfcd.js","assets/asyncComputed.86e766d3.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/scripts.6ccfc826.js","assets/record.a36b091e.js","assets/linters.52940436.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.15a49466.js","assets/BaseLayout.4268a2d7.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.d55bb006.js","assets/validations.4de9d21b.js","assets/string.7b682701.js","assets/uuid.18771d8c.js","assets/PhCaretRight.vue.d25eaaea.js","assets/Badge.d3a226ec.js","assets/LoadingOutlined.9126a350.js","assets/polling.40f5de8e.js","assets/PhFolder.vue.401df1a7.js","assets/PhPencil.vue.180f4002.js","assets/toggleHighContrast.dd32bfda.js","assets/toggleHighContrast.30d77c87.css","assets/index.445a1693.js","assets/Card.14b65dcb.js","assets/TabPane.3d0d00a4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/Logo.8bf94625.css","assets/ant-design.60ff9afa.js","assets/PhGear.vue.bc8d0bd1.js","assets/ai.f8825df7.js","assets/PhCheckCircle.vue.d989c352.js","assets/PhCopySimple.vue.2b59680a.js","assets/Avatar.3081be1a.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.dd670936.js","assets/index.1231d115.js","assets/CloseCircleOutlined.57dfb6c4.js","assets/popupNotifcation.ff8ffede.js","assets/PhArrowSquareOut.vue.e99a2900.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/PhChats.vue.c2707db0.js","assets/NavbarControls.e2d5dd75.css","assets/TasksManager.1eb59008.js","assets/tasksController.194039e0.js","assets/gateway.0c79d34d.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.23d6cd13.js","assets/index.44433c40.js","assets/CollapsePanel.fd4b01d5.js","assets/index.07a98922.js","assets/TasksManager.53a9d7b9.css","assets/index.ee7f86f9.js","assets/index.97bd7dc2.js","assets/index.0c1411b7.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>r(()=>import("./ScriptEditor.48bd1852.js"),["assets/ScriptEditor.48bd1852.js","assets/tasksController.194039e0.js","assets/gateway.0c79d34d.js","assets/popupNotifcation.ff8ffede.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/scripts.6ccfc826.js","assets/record.a36b091e.js","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/polling.40f5de8e.js","assets/string.7b682701.js","assets/workspaces.0141c1c8.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.15a49466.js","assets/BaseLayout.4268a2d7.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.d55bb006.js","assets/validations.4de9d21b.js","assets/uuid.18771d8c.js","assets/PhCaretRight.vue.d25eaaea.js","assets/Badge.d3a226ec.js","assets/LoadingOutlined.9126a350.js","assets/PhFolder.vue.401df1a7.js","assets/PhPencil.vue.180f4002.js","assets/toggleHighContrast.dd32bfda.js","assets/toggleHighContrast.30d77c87.css","assets/index.445a1693.js","assets/Card.14b65dcb.js","assets/TabPane.3d0d00a4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/Logo.8bf94625.css","assets/ant-design.60ff9afa.js","assets/PhGear.vue.bc8d0bd1.js","assets/ai.f8825df7.js","assets/PhCheckCircle.vue.d989c352.js","assets/PhCopySimple.vue.2b59680a.js","assets/Avatar.3081be1a.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.59bd0d1d.js","assets/UnsavedChangesHandler.9087ab26.js","assets/ExclamationCircleOutlined.a01b552e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.dd670936.js","assets/index.1231d115.js","assets/CloseCircleOutlined.57dfb6c4.js","assets/PhArrowSquareOut.vue.e99a2900.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e27a3d5a.js","assets/BookOutlined.dcc0ef08.js","assets/PhChats.vue.c2707db0.js","assets/NavbarControls.e2d5dd75.css","assets/TasksManager.1eb59008.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.23d6cd13.js","assets/index.44433c40.js","assets/CollapsePanel.fd4b01d5.js","assets/index.07a98922.js","assets/TasksManager.53a9d7b9.css","assets/index.ee7f86f9.js","assets/index.97bd7dc2.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>r(()=>import("./ResourcesTracker.2df08761.js"),["assets/ResourcesTracker.2df08761.js","assets/BaseLayout.4268a2d7.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.86e766d3.js","assets/polling.40f5de8e.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>r(()=>import("./Welcome.aef00ff7.js"),["assets/Welcome.aef00ff7.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.f42f44d1.js","assets/Logo.01755569.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/Logo.8bf94625.css","assets/ContentLayout.83135e4b.js","assets/ContentLayout.ee57a545.css","assets/fetch.521b808c.js","assets/Card.14b65dcb.js","assets/TabPane.3d0d00a4.js","assets/workspaceStore.64f294b6.js","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/linters.52940436.js","assets/asyncComputed.86e766d3.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./App.89a4a4d1.js"),["assets/App.89a4a4d1.js","assets/App.vue_vue_type_style_index_0_lang.abcd6f5f.js","assets/workspaceStore.64f294b6.js","assets/index.d728e330.js","assets/index.65a6d955.css","assets/url.03500f23.js","assets/colorHelpers.64161ae3.js","assets/PlayerConfigProvider.efc75087.js","assets/index.6fb42f15.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.949dd623.js.map
