var b=Object.defineProperty;var y=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.01fa403b.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.05a7646a.js";import"./linters.bd167f89.js";import"./url.76c2da1a.js";import"./colorHelpers.59e06bd0.js";import"./asyncComputed.b3291555.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="60bdd41f-a7d4-44e4-8378-9675de4a2653",t._sentryDebugIdIdentifier="sentry-dbid-60bdd41f-a7d4-44e4-8378-9675de4a2653")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"54c4f2569db7fd4c07a926308546c2c4be696289",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),P=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:R}=r.info;l.boot(i,R)}else l.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.f8ba127b.js"),["assets/Home.f8ba127b.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.9efc95b2.js"),["assets/Workspace.9efc95b2.js","assets/BaseLayout.0173e972.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.09017775.js","assets/NavbarControls.b2e22dc0.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/index.683e8494.js","assets/CloseCircleOutlined.a216dc09.js","assets/index.e03f32c8.js","assets/workspaces.9e4bad90.js","assets/record.53292e3b.js","assets/popupNotifcation.d57bbab0.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/PhChats.vue.d2b4d673.js","assets/polling.04e109de.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.d334cf92.js","assets/PhIdentificationBadge.vue.6c2bf8c7.js","assets/PhCaretRight.vue.0c86b81c.js","assets/index.39a0f49b.js","assets/index.fd3c4ef2.js","assets/Avatar.0f828245.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.01d973a1.js"),["assets/Stages.01d973a1.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/ContentLayout.0210c602.js","assets/ContentLayout.ee57a545.css","assets/CrudView.c21e5e09.js","assets/router.a1a008a2.js","assets/Badge.3ff2b40b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/url.76c2da1a.js","assets/PhDotsThreeVertical.vue.caddbe7d.js","assets/index.d50c6a17.js","assets/index.683e8494.js","assets/CrudView.c80c8ede.css","assets/ant-design.e643ef92.js","assets/asyncComputed.b3291555.js","assets/string.be4946f3.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/scripts.42ba3221.js","assets/record.53292e3b.js","assets/linters.bd167f89.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/colorHelpers.59e06bd0.js","assets/ai.40549921.js","assets/index.e03f32c8.js","assets/PhWebhooksLogo.vue.73df0273.js","assets/validations.1c03531c.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.edfe1729.js"),["assets/WorkflowEditor.edfe1729.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/validations.1c03531c.js","assets/string.be4946f3.js","assets/uuid.aee4fbce.js","assets/metadata.4c2bf481.js","assets/PhWebhooksLogo.vue.73df0273.js","assets/asyncComputed.b3291555.js","assets/linters.bd167f89.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/record.53292e3b.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.d476a302.js","assets/PhArrowCounterClockwise.vue.d334cf92.js","assets/TasksManager.3314beb5.js","assets/tasksController.bbb88d7b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/polling.04e109de.js","assets/scripts.42ba3221.js","assets/ant-design.e643ef92.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7c1d9e67.js","assets/Card.20072f6f.js","assets/TabPane.9a5c25e2.js","assets/CollapsePanel.cf1895a8.js","assets/index.dc253cd9.js","assets/TasksManager.824ac91c.css","assets/index.d39fc995.js","assets/Badge.3ff2b40b.js","assets/index.c251f36a.js","assets/PhArrowDown.vue.38220bcb.js","assets/WorkflowEditor.acc53efd.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.f7c3b50b.js"),["assets/Tasks.f7c3b50b.js","assets/TasksView.vue_vue_type_script_setup_true_lang.3374bed5.js","assets/tasksController.bbb88d7b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/polling.04e109de.js","assets/string.be4946f3.js","assets/scripts.42ba3221.js","assets/record.53292e3b.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/metadata.4c2bf481.js","assets/PhWebhooksLogo.vue.73df0273.js","assets/ant-design.e643ef92.js","assets/dayjs.1711114e.js","assets/index.d50c6a17.js","assets/ContentLayout.0210c602.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.8d3cb8fa.js"),["assets/Logs.8d3cb8fa.js","assets/ContentLayout.0210c602.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.72fb9de5.js","assets/string.be4946f3.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/build.add0d971.js","assets/tables.c62df274.js","assets/record.53292e3b.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1caf814e.js","assets/LoadingOutlined.9a39b8a8.js","assets/polling.04e109de.js","assets/datetime.8037d727.js","assets/ant-design.e643ef92.js","assets/index.683e8494.js","assets/index.d50c6a17.js","assets/dayjs.1711114e.js","assets/CollapsePanel.cf1895a8.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.56bbf7fb.js"),["assets/PreferencesEditor.56bbf7fb.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/record.53292e3b.js","assets/PlayerNavbar.5e662ab9.js","assets/metadata.4c2bf481.js","assets/PhWebhooksLogo.vue.73df0273.js","assets/LoadingOutlined.9a39b8a8.js","assets/PhSignOut.vue.09017775.js","assets/index.fd3c4ef2.js","assets/Avatar.0f828245.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.31d9231b.js","assets/index.c251f36a.js","assets/PlayerConfigProvider.cb445f57.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7c1d9e67.js","assets/ContentLayout.0210c602.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.d09ff5ab.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.1bcc3382.js"),["assets/RequirementsEditor.1bcc3382.js","assets/ContentLayout.0210c602.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.c21e5e09.js","assets/router.a1a008a2.js","assets/Badge.3ff2b40b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/url.76c2da1a.js","assets/PhDotsThreeVertical.vue.caddbe7d.js","assets/index.d50c6a17.js","assets/index.683e8494.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b3291555.js","assets/polling.04e109de.js","assets/linters.bd167f89.js","assets/record.53292e3b.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/colorHelpers.59e06bd0.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.0ba89344.js"),["assets/EnvVarsEditor.0ba89344.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/record.53292e3b.js","assets/ContentLayout.0210c602.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.9aded9ac.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/fetch.13ac3622.js","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.c21e5e09.js","assets/router.a1a008a2.js","assets/Badge.3ff2b40b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/PhDotsThreeVertical.vue.caddbe7d.js","assets/index.d50c6a17.js","assets/index.683e8494.js","assets/CrudView.c80c8ede.css","assets/polling.04e109de.js","assets/PhPencil.vue.e56f6265.js","assets/index.e03f32c8.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.231df751.js"),["assets/AccessControlEditor.231df751.js","assets/ContentLayout.0210c602.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.13ac3622.js","assets/record.53292e3b.js","assets/repository.d0143b7a.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/asyncComputed.b3291555.js","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/index.d476a302.js","assets/metadata.4c2bf481.js","assets/PhWebhooksLogo.vue.73df0273.js","assets/index.e03f32c8.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/linters.bd167f89.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.f217b53c.js"),["assets/ProjectLogin.f217b53c.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/BaseLayout.0173e972.js","assets/BaseLayout.b7a1f19a.css","assets/index.39a0f49b.js","assets/index.fd3c4ef2.js","assets/Avatar.0f828245.js","assets/index.683e8494.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.a2cd128e.js"),["assets/FormEditor.a2cd128e.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/BaseLayout.0173e972.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3e5fa3f7.js","assets/scripts.42ba3221.js","assets/record.53292e3b.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/validations.1c03531c.js","assets/string.be4946f3.js","assets/uuid.aee4fbce.js","assets/PhCaretRight.vue.0c86b81c.js","assets/Badge.3ff2b40b.js","assets/LoadingOutlined.9a39b8a8.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/polling.04e109de.js","assets/PhFolder.vue.4c9471b4.js","assets/PhPencil.vue.e56f6265.js","assets/toggleHighContrast.e6521645.js","assets/toggleHighContrast.30d77c87.css","assets/index.e03f32c8.js","assets/Card.20072f6f.js","assets/TabPane.9a5c25e2.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/Logo.46d5120c.css","assets/ai.40549921.js","assets/PhCheckCircle.vue.5681177e.js","assets/PhCopySimple.vue.ce961521.js","assets/Avatar.0f828245.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.725a4bda.js","assets/Login.vue_vue_type_script_setup_true_lang.e7603445.js","assets/CircularLoading.1cffbae1.js","assets/CircularLoading.1a558a0d.css","assets/index.c251f36a.js","assets/Login.28df3844.css","assets/Steps.5a9a12de.js","assets/index.fdb2f463.js","assets/Steps.4d03c6c1.css","assets/Watermark.68424e20.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerNavbar.5e662ab9.js","assets/metadata.4c2bf481.js","assets/PhWebhooksLogo.vue.73df0273.js","assets/PhSignOut.vue.09017775.js","assets/index.fd3c4ef2.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.31d9231b.js","assets/PlayerConfigProvider.cb445f57.css","assets/index.683e8494.js","assets/TasksManager.3314beb5.js","assets/tasksController.bbb88d7b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/ant-design.e643ef92.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7c1d9e67.js","assets/index.d476a302.js","assets/CollapsePanel.cf1895a8.js","assets/index.dc253cd9.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b2e22dc0.js","assets/CloseCircleOutlined.a216dc09.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/PhChats.vue.d2b4d673.js","assets/NavbarControls.e9c97288.css","assets/index.39a0f49b.js","assets/FormEditor.0aeb2d8c.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.81f76fdd.js"),["assets/JobEditor.81f76fdd.js","assets/BaseLayout.0173e972.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3e5fa3f7.js","assets/scripts.42ba3221.js","assets/record.53292e3b.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/validations.1c03531c.js","assets/string.be4946f3.js","assets/uuid.aee4fbce.js","assets/PhCaretRight.vue.0c86b81c.js","assets/Badge.3ff2b40b.js","assets/LoadingOutlined.9a39b8a8.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/polling.04e109de.js","assets/PhFolder.vue.4c9471b4.js","assets/PhPencil.vue.e56f6265.js","assets/toggleHighContrast.e6521645.js","assets/toggleHighContrast.30d77c87.css","assets/index.e03f32c8.js","assets/Card.20072f6f.js","assets/TabPane.9a5c25e2.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/Logo.46d5120c.css","assets/ai.40549921.js","assets/PhCheckCircle.vue.5681177e.js","assets/PhCopySimple.vue.ce961521.js","assets/Avatar.0f828245.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.6a7729cc.js","assets/index.683e8494.js","assets/RunButton.vue_vue_type_script_setup_true_lang.ad06217b.js","assets/TasksManager.3314beb5.js","assets/tasksController.bbb88d7b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/ant-design.e643ef92.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7c1d9e67.js","assets/index.d476a302.js","assets/CollapsePanel.cf1895a8.js","assets/index.dc253cd9.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b2e22dc0.js","assets/CloseCircleOutlined.a216dc09.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/PhChats.vue.d2b4d673.js","assets/NavbarControls.e9c97288.css","assets/index.39a0f49b.js","assets/index.fd3c4ef2.js","assets/JobEditor.07f0c0ea.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.fbedcbc6.js"),["assets/HookEditor.fbedcbc6.js","assets/BaseLayout.0173e972.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3e5fa3f7.js","assets/scripts.42ba3221.js","assets/record.53292e3b.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/validations.1c03531c.js","assets/string.be4946f3.js","assets/uuid.aee4fbce.js","assets/PhCaretRight.vue.0c86b81c.js","assets/Badge.3ff2b40b.js","assets/LoadingOutlined.9a39b8a8.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/polling.04e109de.js","assets/PhFolder.vue.4c9471b4.js","assets/PhPencil.vue.e56f6265.js","assets/toggleHighContrast.e6521645.js","assets/toggleHighContrast.30d77c87.css","assets/index.e03f32c8.js","assets/Card.20072f6f.js","assets/TabPane.9a5c25e2.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/Logo.46d5120c.css","assets/ai.40549921.js","assets/PhCheckCircle.vue.5681177e.js","assets/PhCopySimple.vue.ce961521.js","assets/Avatar.0f828245.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.ad06217b.js","assets/index.8956a107.js","assets/CollapsePanel.cf1895a8.js","assets/index.683e8494.js","assets/index.d476a302.js","assets/TasksManager.3314beb5.js","assets/tasksController.bbb88d7b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/ant-design.e643ef92.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7c1d9e67.js","assets/index.dc253cd9.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b2e22dc0.js","assets/CloseCircleOutlined.a216dc09.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/PhChats.vue.d2b4d673.js","assets/NavbarControls.e9c97288.css","assets/index.39a0f49b.js","assets/index.fd3c4ef2.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.e16d0272.js"),["assets/ScriptEditor.e16d0272.js","assets/BaseLayout.0173e972.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3e5fa3f7.js","assets/scripts.42ba3221.js","assets/record.53292e3b.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/validations.1c03531c.js","assets/string.be4946f3.js","assets/uuid.aee4fbce.js","assets/PhCaretRight.vue.0c86b81c.js","assets/Badge.3ff2b40b.js","assets/LoadingOutlined.9a39b8a8.js","assets/workspaces.9e4bad90.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/polling.04e109de.js","assets/PhFolder.vue.4c9471b4.js","assets/PhPencil.vue.e56f6265.js","assets/toggleHighContrast.e6521645.js","assets/toggleHighContrast.30d77c87.css","assets/index.e03f32c8.js","assets/Card.20072f6f.js","assets/TabPane.9a5c25e2.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/Logo.46d5120c.css","assets/ai.40549921.js","assets/PhCheckCircle.vue.5681177e.js","assets/PhCopySimple.vue.ce961521.js","assets/Avatar.0f828245.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.53b6d8bb.js","assets/UnsavedChangesHandler.1ede37ac.js","assets/ExclamationCircleOutlined.0ad32c94.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/tasksController.bbb88d7b.js","assets/gateway.00b009da.js","assets/popupNotifcation.d57bbab0.js","assets/RunButton.vue_vue_type_script_setup_true_lang.ad06217b.js","assets/TasksManager.3314beb5.js","assets/ant-design.e643ef92.js","assets/PhArrowSquareOut.vue.0bcdf639.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7c1d9e67.js","assets/index.d476a302.js","assets/CollapsePanel.cf1895a8.js","assets/index.dc253cd9.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b2e22dc0.js","assets/index.683e8494.js","assets/CloseCircleOutlined.a216dc09.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b28e7cdd.js","assets/BookOutlined.17f27765.js","assets/PhChats.vue.d2b4d673.js","assets/NavbarControls.e9c97288.css","assets/index.39a0f49b.js","assets/index.fd3c4ef2.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.0ca4b103.js"),["assets/ResourcesTracker.0ca4b103.js","assets/BaseLayout.0173e972.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.b3291555.js","assets/polling.04e109de.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.df2d55d5.js"),["assets/Welcome.df2d55d5.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.18ed3f3d.js","assets/Logo.b8d7bac2.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/ContentLayout.0210c602.js","assets/ContentLayout.ee57a545.css","assets/fetch.13ac3622.js","assets/Card.20072f6f.js","assets/TabPane.9a5c25e2.js","assets/workspaceStore.05a7646a.js","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/linters.bd167f89.js","assets/asyncComputed.b3291555.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.8e663df6.js"),["assets/App.8e663df6.js","assets/App.vue_vue_type_style_index_0_lang.25a1082d.js","assets/workspaceStore.05a7646a.js","assets/index.01fa403b.js","assets/index.b3bf2b78.css","assets/url.76c2da1a.js","assets/colorHelpers.59e06bd0.js","assets/PlayerConfigProvider.31d9231b.js","assets/index.c251f36a.js","assets/PlayerConfigProvider.cb445f57.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.af1ead16.js.map
