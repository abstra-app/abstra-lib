var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.1aaa7a54.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.24367bce.js";import"./linters.0cfb77dd.js";import"./url.013cb684.js";import"./colorHelpers.e1ef16f6.js";import"./asyncComputed.b7b98fe2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9b7f01fa-db87-4ac5-8eee-dd1595fc27b3",t._sentryDebugIdIdentifier="sentry-dbid-9b7f01fa-db87-4ac5-8eee-dd1595fc27b3")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"dc462551b169d01a369e5695240e1f5362dc958a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.ebe8766e.js"),["assets/Home.ebe8766e.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.b9f14630.js"),["assets/Workspace.b9f14630.js","assets/BaseLayout.c2b4e986.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.1f3b9f49.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/NavbarControls.c09dbff8.js","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/index.051fbafc.js","assets/CloseCircleOutlined.c32edc07.js","assets/index.7c206e16.js","assets/workspaces.10eaf423.js","assets/record.39ba3ecc.js","assets/popupNotifcation.1dcf5b97.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/PhChats.vue.cda43748.js","assets/polling.a724950e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/Logo.667a2544.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.4dc5080f.js","assets/PhIdentificationBadge.vue.8bc3ce14.js","assets/PhCaretRight.vue.2443c0d4.js","assets/index.edde64a9.js","assets/index.6cf4b5ea.js","assets/Avatar.2e3a36fa.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.b0185db4.js"),["assets/Stages.b0185db4.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/ContentLayout.9b459c36.js","assets/ContentLayout.ee57a545.css","assets/CrudView.da4416dd.js","assets/router.7d65fa35.js","assets/Badge.df7269c2.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/url.013cb684.js","assets/PhDotsThreeVertical.vue.301058ec.js","assets/index.1a9518f0.js","assets/index.051fbafc.js","assets/CrudView.c80c8ede.css","assets/ant-design.1305a308.js","assets/asyncComputed.b7b98fe2.js","assets/string.c4ea2852.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/scripts.5baac3a6.js","assets/record.39ba3ecc.js","assets/linters.0cfb77dd.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/colorHelpers.e1ef16f6.js","assets/ai.5d748e5d.js","assets/index.7c206e16.js","assets/PhWebhooksLogo.vue.0b9ed983.js","assets/validations.c1f371df.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.ef8ef4d0.js"),["assets/WorkflowEditor.ef8ef4d0.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.9ef27c98.js","assets/validations.c1f371df.js","assets/string.c4ea2852.js","assets/uuid.6376dfed.js","assets/metadata.28e61fd1.js","assets/PhRobot.vue.57e15bcc.js","assets/PhWebhooksLogo.vue.0b9ed983.js","assets/asyncComputed.b7b98fe2.js","assets/linters.0cfb77dd.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/record.39ba3ecc.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.28d77108.js","assets/index.7c206e16.js","assets/PhArrowCounterClockwise.vue.4dc5080f.js","assets/TasksManager.1d51c38c.js","assets/tasksController.88a24e82.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/scripts.5baac3a6.js","assets/polling.a724950e.js","assets/ant-design.1305a308.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/Card.f22ffda3.js","assets/TabPane.5c3172c0.js","assets/CollapsePanel.c3e9602d.js","assets/index.c885bc7e.js","assets/TasksManager.c9a90d36.css","assets/index.1b8de286.js","assets/Badge.df7269c2.js","assets/index.b89afbd6.js","assets/PhArrowDown.vue.9bd47cee.js","assets/WorkflowEditor.0f37f7c9.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.e8dc675b.js"),["assets/Tasks.e8dc675b.js","assets/TasksView.vue_vue_type_script_setup_true_lang.da60a1a2.js","assets/tasksController.88a24e82.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/scripts.5baac3a6.js","assets/record.39ba3ecc.js","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/polling.a724950e.js","assets/string.c4ea2852.js","assets/metadata.28e61fd1.js","assets/PhRobot.vue.57e15bcc.js","assets/PhWebhooksLogo.vue.0b9ed983.js","assets/ant-design.1305a308.js","assets/dayjs.21f4cc44.js","assets/index.1a9518f0.js","assets/ContentLayout.9b459c36.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.09bdf04c.js"),["assets/Logs.09bdf04c.js","assets/ContentLayout.9b459c36.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.8aa32a0a.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/build.dc74ef53.js","assets/string.c4ea2852.js","assets/tables.ad0ff542.js","assets/record.39ba3ecc.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b673eeeb.js","assets/LoadingOutlined.94e14e71.js","assets/polling.a724950e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/datetime.01234747.js","assets/ant-design.1305a308.js","assets/index.051fbafc.js","assets/index.1a9518f0.js","assets/dayjs.21f4cc44.js","assets/CollapsePanel.c3e9602d.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.572f6f45.js"),["assets/PreferencesEditor.572f6f45.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/record.39ba3ecc.js","assets/PlayerNavbar.70e3f3e7.js","assets/metadata.28e61fd1.js","assets/PhRobot.vue.57e15bcc.js","assets/PhWebhooksLogo.vue.0b9ed983.js","assets/LoadingOutlined.94e14e71.js","assets/PhSignOut.vue.1f3b9f49.js","assets/index.6cf4b5ea.js","assets/Avatar.2e3a36fa.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.b9a40c81.js","assets/index.b89afbd6.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/ContentLayout.9b459c36.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.3d5d98d2.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.9e4b6318.js"),["assets/RequirementsEditor.9e4b6318.js","assets/ContentLayout.9b459c36.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.da4416dd.js","assets/router.7d65fa35.js","assets/Badge.df7269c2.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/url.013cb684.js","assets/PhDotsThreeVertical.vue.301058ec.js","assets/index.1a9518f0.js","assets/index.051fbafc.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b7b98fe2.js","assets/polling.a724950e.js","assets/linters.0cfb77dd.js","assets/record.39ba3ecc.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/colorHelpers.e1ef16f6.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.8475c6f8.js"),["assets/EnvVarsEditor.8475c6f8.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/record.39ba3ecc.js","assets/ContentLayout.9b459c36.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.0c52f24d.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/fetch.8722a72f.js","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.da4416dd.js","assets/router.7d65fa35.js","assets/Badge.df7269c2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/PhDotsThreeVertical.vue.301058ec.js","assets/index.1a9518f0.js","assets/index.051fbafc.js","assets/CrudView.c80c8ede.css","assets/polling.a724950e.js","assets/PhPencil.vue.82b43392.js","assets/index.7c206e16.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.0351eda5.js"),["assets/AccessControlEditor.0351eda5.js","assets/ContentLayout.9b459c36.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.8722a72f.js","assets/record.39ba3ecc.js","assets/repository.7b6ff764.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/asyncComputed.b7b98fe2.js","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.6b37f626.js","assets/index.28d77108.js","assets/metadata.28e61fd1.js","assets/PhRobot.vue.57e15bcc.js","assets/PhWebhooksLogo.vue.0b9ed983.js","assets/index.7c206e16.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/linters.0cfb77dd.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.70361193.js"),["assets/ProjectLogin.70361193.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/Logo.667a2544.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.c2b4e986.js","assets/BaseLayout.b7a1f19a.css","assets/index.edde64a9.js","assets/index.6cf4b5ea.js","assets/Avatar.2e3a36fa.js","assets/index.051fbafc.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.eac7e0f9.js"),["assets/FormEditor.eac7e0f9.js","assets/FormRunner.d22f718e.js","assets/url.013cb684.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/workspaceStore.24367bce.js","assets/colorHelpers.e1ef16f6.js","assets/Login.vue_vue_type_script_setup_true_lang.4968416f.js","assets/Logo.667a2544.js","assets/Logo.8bf94625.css","assets/string.c4ea2852.js","assets/OTPInput.7b4549ea.js","assets/OTPInput.277362d6.css","assets/index.7c206e16.js","assets/Login.ae1154ae.css","assets/Steps.e886e8f3.js","assets/index.aa35a8c9.js","assets/Steps.4d03c6c1.css","assets/Watermark.cbf53923.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.b7b98fe2.js","assets/scripts.5baac3a6.js","assets/record.39ba3ecc.js","assets/linters.0cfb77dd.js","assets/workspaces.10eaf423.js","assets/RuntimeCommonSettings.096b7f85.js","assets/BaseLayout.c2b4e986.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.6376dfed.js","assets/NavbarControls.c09dbff8.js","assets/index.051fbafc.js","assets/CloseCircleOutlined.c32edc07.js","assets/popupNotifcation.1dcf5b97.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/PhChats.vue.cda43748.js","assets/polling.a724950e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/ant-design.1305a308.js","assets/ai.5d748e5d.js","assets/PhCheckCircle.vue.f44dda9a.js","assets/PhCopySimple.vue.85961d1d.js","assets/Avatar.2e3a36fa.js","assets/LoadingOutlined.94e14e71.js","assets/Card.f22ffda3.js","assets/TabPane.5c3172c0.js","assets/PhCaretRight.vue.2443c0d4.js","assets/Badge.df7269c2.js","assets/PhFolder.vue.e282ee9d.js","assets/PhPencil.vue.82b43392.js","assets/validations.c1f371df.js","assets/toggleHighContrast.ec7a81ef.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.1d51c38c.js","assets/tasksController.88a24e82.js","assets/gateway.2debc515.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/index.28d77108.js","assets/CollapsePanel.c3e9602d.js","assets/index.c885bc7e.js","assets/TasksManager.c9a90d36.css","assets/index.edde64a9.js","assets/index.6cf4b5ea.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/PlayerNavbar.70e3f3e7.js","assets/metadata.28e61fd1.js","assets/PhRobot.vue.57e15bcc.js","assets/PhWebhooksLogo.vue.0b9ed983.js","assets/PhSignOut.vue.1f3b9f49.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.b9a40c81.js","assets/index.b89afbd6.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.bd261f4f.js"),["assets/JobEditor.bd261f4f.js","assets/asyncComputed.b7b98fe2.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/scripts.5baac3a6.js","assets/record.39ba3ecc.js","assets/linters.0cfb77dd.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/RuntimeCommonSettings.096b7f85.js","assets/BaseLayout.c2b4e986.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.6376dfed.js","assets/NavbarControls.c09dbff8.js","assets/index.051fbafc.js","assets/CloseCircleOutlined.c32edc07.js","assets/index.7c206e16.js","assets/popupNotifcation.1dcf5b97.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/PhChats.vue.cda43748.js","assets/polling.a724950e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/Logo.667a2544.js","assets/Logo.8bf94625.css","assets/ant-design.1305a308.js","assets/ai.5d748e5d.js","assets/PhCheckCircle.vue.f44dda9a.js","assets/PhCopySimple.vue.85961d1d.js","assets/Avatar.2e3a36fa.js","assets/LoadingOutlined.94e14e71.js","assets/Card.f22ffda3.js","assets/TabPane.5c3172c0.js","assets/PhCaretRight.vue.2443c0d4.js","assets/Badge.df7269c2.js","assets/PhFolder.vue.e282ee9d.js","assets/PhPencil.vue.82b43392.js","assets/validations.c1f371df.js","assets/string.c4ea2852.js","assets/toggleHighContrast.ec7a81ef.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.1d51c38c.js","assets/tasksController.88a24e82.js","assets/gateway.2debc515.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/index.28d77108.js","assets/CollapsePanel.c3e9602d.js","assets/index.c885bc7e.js","assets/TasksManager.c9a90d36.css","assets/index.edde64a9.js","assets/index.6cf4b5ea.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/index.cb6dcd9b.js","assets/RunButton.vue_vue_type_script_setup_true_lang.daf47105.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.3aa55c58.js"),["assets/HookEditor.3aa55c58.js","assets/asyncComputed.b7b98fe2.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/scripts.5baac3a6.js","assets/record.39ba3ecc.js","assets/linters.0cfb77dd.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/RuntimeCommonSettings.096b7f85.js","assets/BaseLayout.c2b4e986.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.6376dfed.js","assets/NavbarControls.c09dbff8.js","assets/index.051fbafc.js","assets/CloseCircleOutlined.c32edc07.js","assets/index.7c206e16.js","assets/popupNotifcation.1dcf5b97.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/PhChats.vue.cda43748.js","assets/polling.a724950e.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/Logo.667a2544.js","assets/Logo.8bf94625.css","assets/ant-design.1305a308.js","assets/ai.5d748e5d.js","assets/PhCheckCircle.vue.f44dda9a.js","assets/PhCopySimple.vue.85961d1d.js","assets/Avatar.2e3a36fa.js","assets/LoadingOutlined.94e14e71.js","assets/Card.f22ffda3.js","assets/TabPane.5c3172c0.js","assets/PhCaretRight.vue.2443c0d4.js","assets/Badge.df7269c2.js","assets/PhFolder.vue.e282ee9d.js","assets/PhPencil.vue.82b43392.js","assets/validations.c1f371df.js","assets/string.c4ea2852.js","assets/toggleHighContrast.ec7a81ef.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.1d51c38c.js","assets/tasksController.88a24e82.js","assets/gateway.2debc515.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/index.28d77108.js","assets/CollapsePanel.c3e9602d.js","assets/index.c885bc7e.js","assets/TasksManager.c9a90d36.css","assets/index.edde64a9.js","assets/index.6cf4b5ea.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.daf47105.js","assets/index.e4558678.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.250f6a98.js"),["assets/ScriptEditor.250f6a98.js","assets/tasksController.88a24e82.js","assets/gateway.2debc515.js","assets/popupNotifcation.1dcf5b97.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/scripts.5baac3a6.js","assets/record.39ba3ecc.js","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/polling.a724950e.js","assets/string.c4ea2852.js","assets/workspaces.10eaf423.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/RuntimeCommonSettings.096b7f85.js","assets/BaseLayout.c2b4e986.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.cdc63daf.js","assets/UnsavedChangesHandler.e436efc6.js","assets/ExclamationCircleOutlined.17e2c7d5.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.6376dfed.js","assets/NavbarControls.c09dbff8.js","assets/index.051fbafc.js","assets/CloseCircleOutlined.c32edc07.js","assets/index.7c206e16.js","assets/PhArrowSquareOut.vue.6b37f626.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25240c7a.js","assets/BookOutlined.ac43d888.js","assets/PhChats.vue.cda43748.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/Logo.667a2544.js","assets/Logo.8bf94625.css","assets/ant-design.1305a308.js","assets/ai.5d748e5d.js","assets/PhCheckCircle.vue.f44dda9a.js","assets/PhCopySimple.vue.85961d1d.js","assets/Avatar.2e3a36fa.js","assets/LoadingOutlined.94e14e71.js","assets/Card.f22ffda3.js","assets/TabPane.5c3172c0.js","assets/PhCaretRight.vue.2443c0d4.js","assets/Badge.df7269c2.js","assets/PhFolder.vue.e282ee9d.js","assets/PhPencil.vue.82b43392.js","assets/validations.c1f371df.js","assets/toggleHighContrast.ec7a81ef.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.1d51c38c.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.bc92393d.js","assets/index.28d77108.js","assets/CollapsePanel.c3e9602d.js","assets/index.c885bc7e.js","assets/TasksManager.c9a90d36.css","assets/index.edde64a9.js","assets/index.6cf4b5ea.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.daf47105.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.6fbe3edb.js"),["assets/ResourcesTracker.6fbe3edb.js","assets/BaseLayout.c2b4e986.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.b7b98fe2.js","assets/polling.a724950e.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.5690cd87.js"),["assets/Welcome.5690cd87.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.13e6a046.js","assets/Logo.667a2544.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.9b459c36.js","assets/ContentLayout.ee57a545.css","assets/fetch.8722a72f.js","assets/Card.f22ffda3.js","assets/TabPane.5c3172c0.js","assets/workspaceStore.24367bce.js","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/linters.0cfb77dd.js","assets/asyncComputed.b7b98fe2.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.1c037e6f.js"),["assets/App.1c037e6f.js","assets/App.vue_vue_type_style_index_0_lang.d35b8550.js","assets/workspaceStore.24367bce.js","assets/index.1aaa7a54.js","assets/index.ae14d18e.css","assets/url.013cb684.js","assets/colorHelpers.e1ef16f6.js","assets/PlayerConfigProvider.b9a40c81.js","assets/index.b89afbd6.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.98d0e54b.js.map
