var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.eb723478.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.021fcbbd.js";import"./linters.7669e208.js";import"./url.02a99e5e.js";import"./colorHelpers.7c3fff1f.js";import"./asyncComputed.65722ff2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="620bad6c-bd84-4a89-852e-c3f3e4e827a1",t._sentryDebugIdIdentifier="sentry-dbid-620bad6c-bd84-4a89-852e-c3f3e4e827a1")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"8a40d4310b6715d8fb556aa23762c5971dfa2727",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.200a9189.js"),["assets/Home.200a9189.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.abb30a79.js"),["assets/Workspace.abb30a79.js","assets/BaseLayout.5b8f495b.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.83bb70d0.js","assets/NavbarControls.c8e34d53.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/index.25425e3b.js","assets/CloseCircleOutlined.71e0202a.js","assets/index.91bd3e1e.js","assets/workspaces.56e3a440.js","assets/record.95022861.js","assets/popupNotifcation.073fbf81.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/PhChats.vue.15faf35c.js","assets/polling.61555a47.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.dfecc76e.js","assets/PhIdentificationBadge.vue.ea5afab7.js","assets/PhCaretRight.vue.53d71520.js","assets/index.5c283244.js","assets/index.68c29d1e.js","assets/Avatar.3eff4dad.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.a9a79251.js"),["assets/Stages.a9a79251.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/ContentLayout.0a98fb03.js","assets/ContentLayout.ee57a545.css","assets/CrudView.611ab080.js","assets/router.9644c549.js","assets/Badge.a7fb7347.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/url.02a99e5e.js","assets/PhDotsThreeVertical.vue.8a87c8ed.js","assets/index.4f469b66.js","assets/index.25425e3b.js","assets/CrudView.c80c8ede.css","assets/ant-design.cc6017f6.js","assets/asyncComputed.65722ff2.js","assets/string.3d89bd5f.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/scripts.5ec494c1.js","assets/record.95022861.js","assets/linters.7669e208.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/colorHelpers.7c3fff1f.js","assets/ai.4df3e7b0.js","assets/index.91bd3e1e.js","assets/PhWebhooksLogo.vue.28ea5864.js","assets/validations.3782caa5.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.753aa9ca.js"),["assets/WorkflowEditor.753aa9ca.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/validations.3782caa5.js","assets/string.3d89bd5f.js","assets/uuid.7d1d0254.js","assets/metadata.499f6a91.js","assets/PhWebhooksLogo.vue.28ea5864.js","assets/asyncComputed.65722ff2.js","assets/linters.7669e208.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/record.95022861.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.64a20157.js","assets/PhArrowCounterClockwise.vue.dfecc76e.js","assets/TasksManager.ba33183b.js","assets/tasksController.eae77d4c.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/polling.61555a47.js","assets/scripts.5ec494c1.js","assets/ant-design.cc6017f6.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.33c26635.js","assets/Card.0d71695b.js","assets/TabPane.ed4eb1f6.js","assets/CollapsePanel.645c13fb.js","assets/index.bd21aaea.js","assets/TasksManager.824ac91c.css","assets/index.a647c342.js","assets/Badge.a7fb7347.js","assets/index.0bdb9cf2.js","assets/PhArrowDown.vue.5a8ad83f.js","assets/WorkflowEditor.9b774473.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.2009d93a.js"),["assets/Tasks.2009d93a.js","assets/TasksView.vue_vue_type_script_setup_true_lang.5c740b6b.js","assets/tasksController.eae77d4c.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/polling.61555a47.js","assets/string.3d89bd5f.js","assets/scripts.5ec494c1.js","assets/record.95022861.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/metadata.499f6a91.js","assets/PhWebhooksLogo.vue.28ea5864.js","assets/ant-design.cc6017f6.js","assets/dayjs.a6c00338.js","assets/index.4f469b66.js","assets/ContentLayout.0a98fb03.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.ba880a2c.js"),["assets/Logs.ba880a2c.js","assets/ContentLayout.0a98fb03.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.f374d76e.js","assets/string.3d89bd5f.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/build.9d584ce6.js","assets/tables.32d95201.js","assets/record.95022861.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.8f269b3b.js","assets/LoadingOutlined.9b6e838f.js","assets/polling.61555a47.js","assets/datetime.0d5fd368.js","assets/ant-design.cc6017f6.js","assets/index.25425e3b.js","assets/index.4f469b66.js","assets/dayjs.a6c00338.js","assets/CollapsePanel.645c13fb.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.6a68d0bd.js"),["assets/PreferencesEditor.6a68d0bd.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/record.95022861.js","assets/PlayerNavbar.afb7d526.js","assets/metadata.499f6a91.js","assets/PhWebhooksLogo.vue.28ea5864.js","assets/LoadingOutlined.9b6e838f.js","assets/PhSignOut.vue.83bb70d0.js","assets/index.68c29d1e.js","assets/Avatar.3eff4dad.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.dc477630.js","assets/index.0bdb9cf2.js","assets/PlayerConfigProvider.cb445f57.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.33c26635.js","assets/ContentLayout.0a98fb03.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.de913ce7.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.2e9c3fa6.js"),["assets/RequirementsEditor.2e9c3fa6.js","assets/ContentLayout.0a98fb03.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.611ab080.js","assets/router.9644c549.js","assets/Badge.a7fb7347.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/url.02a99e5e.js","assets/PhDotsThreeVertical.vue.8a87c8ed.js","assets/index.4f469b66.js","assets/index.25425e3b.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.65722ff2.js","assets/polling.61555a47.js","assets/linters.7669e208.js","assets/record.95022861.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/colorHelpers.7c3fff1f.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.fc1bc32a.js"),["assets/EnvVarsEditor.fc1bc32a.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/record.95022861.js","assets/ContentLayout.0a98fb03.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.c3baaa12.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/fetch.2101e4d1.js","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.611ab080.js","assets/router.9644c549.js","assets/Badge.a7fb7347.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/PhDotsThreeVertical.vue.8a87c8ed.js","assets/index.4f469b66.js","assets/index.25425e3b.js","assets/CrudView.c80c8ede.css","assets/polling.61555a47.js","assets/PhPencil.vue.a36b8773.js","assets/index.91bd3e1e.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.4c035cbb.js"),["assets/AccessControlEditor.4c035cbb.js","assets/ContentLayout.0a98fb03.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.2101e4d1.js","assets/record.95022861.js","assets/repository.a9f4266e.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/asyncComputed.65722ff2.js","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.aec63edb.js","assets/index.64a20157.js","assets/metadata.499f6a91.js","assets/PhWebhooksLogo.vue.28ea5864.js","assets/index.91bd3e1e.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/linters.7669e208.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.fc372f6a.js"),["assets/ProjectLogin.fc372f6a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/BaseLayout.5b8f495b.js","assets/BaseLayout.b7a1f19a.css","assets/index.5c283244.js","assets/index.68c29d1e.js","assets/Avatar.3eff4dad.js","assets/index.25425e3b.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.64e3db36.js"),["assets/FormEditor.64e3db36.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/BaseLayout.5b8f495b.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3f689d5f.js","assets/scripts.5ec494c1.js","assets/record.95022861.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/validations.3782caa5.js","assets/string.3d89bd5f.js","assets/uuid.7d1d0254.js","assets/PhCaretRight.vue.53d71520.js","assets/Badge.a7fb7347.js","assets/LoadingOutlined.9b6e838f.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.61555a47.js","assets/PhFolder.vue.88972f5c.js","assets/PhPencil.vue.a36b8773.js","assets/toggleHighContrast.7cc299ff.js","assets/toggleHighContrast.30d77c87.css","assets/index.91bd3e1e.js","assets/Card.0d71695b.js","assets/TabPane.ed4eb1f6.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/Logo.46d5120c.css","assets/ai.4df3e7b0.js","assets/PhCheckCircle.vue.c5f15a50.js","assets/PhCopySimple.vue.d53828ba.js","assets/Avatar.3eff4dad.js","assets/SmartChat.0200e553.css","assets/FormRunner.7a669b1b.js","assets/Login.vue_vue_type_script_setup_true_lang.c8776973.js","assets/CircularLoading.c53e41b6.js","assets/CircularLoading.1a558a0d.css","assets/index.0bdb9cf2.js","assets/Login.28df3844.css","assets/Steps.fa27db31.js","assets/index.c02069af.js","assets/Steps.4d03c6c1.css","assets/Watermark.d821b68c.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerNavbar.afb7d526.js","assets/metadata.499f6a91.js","assets/PhWebhooksLogo.vue.28ea5864.js","assets/PhSignOut.vue.83bb70d0.js","assets/index.68c29d1e.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.dc477630.js","assets/PlayerConfigProvider.cb445f57.css","assets/index.25425e3b.js","assets/TasksManager.ba33183b.js","assets/tasksController.eae77d4c.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/ant-design.cc6017f6.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.33c26635.js","assets/index.64a20157.js","assets/CollapsePanel.645c13fb.js","assets/index.bd21aaea.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.c8e34d53.js","assets/CloseCircleOutlined.71e0202a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/PhChats.vue.15faf35c.js","assets/NavbarControls.e9c97288.css","assets/index.5c283244.js","assets/FormEditor.67c0b6ec.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.9f29976f.js"),["assets/JobEditor.9f29976f.js","assets/BaseLayout.5b8f495b.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3f689d5f.js","assets/scripts.5ec494c1.js","assets/record.95022861.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/validations.3782caa5.js","assets/string.3d89bd5f.js","assets/uuid.7d1d0254.js","assets/PhCaretRight.vue.53d71520.js","assets/Badge.a7fb7347.js","assets/LoadingOutlined.9b6e838f.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.61555a47.js","assets/PhFolder.vue.88972f5c.js","assets/PhPencil.vue.a36b8773.js","assets/toggleHighContrast.7cc299ff.js","assets/toggleHighContrast.30d77c87.css","assets/index.91bd3e1e.js","assets/Card.0d71695b.js","assets/TabPane.ed4eb1f6.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/Logo.46d5120c.css","assets/ai.4df3e7b0.js","assets/PhCheckCircle.vue.c5f15a50.js","assets/PhCopySimple.vue.d53828ba.js","assets/Avatar.3eff4dad.js","assets/SmartChat.0200e553.css","assets/index.84c834e4.js","assets/index.25425e3b.js","assets/TasksManager.ba33183b.js","assets/tasksController.eae77d4c.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/ant-design.cc6017f6.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.33c26635.js","assets/index.64a20157.js","assets/CollapsePanel.645c13fb.js","assets/index.bd21aaea.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.c8e34d53.js","assets/CloseCircleOutlined.71e0202a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/PhChats.vue.15faf35c.js","assets/NavbarControls.e9c97288.css","assets/index.5c283244.js","assets/index.68c29d1e.js","assets/JobEditor.897dfb6d.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.3f0aa323.js"),["assets/HookEditor.3f0aa323.js","assets/BaseLayout.5b8f495b.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3f689d5f.js","assets/scripts.5ec494c1.js","assets/record.95022861.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/validations.3782caa5.js","assets/string.3d89bd5f.js","assets/uuid.7d1d0254.js","assets/PhCaretRight.vue.53d71520.js","assets/Badge.a7fb7347.js","assets/LoadingOutlined.9b6e838f.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.61555a47.js","assets/PhFolder.vue.88972f5c.js","assets/PhPencil.vue.a36b8773.js","assets/toggleHighContrast.7cc299ff.js","assets/toggleHighContrast.30d77c87.css","assets/index.91bd3e1e.js","assets/Card.0d71695b.js","assets/TabPane.ed4eb1f6.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/Logo.46d5120c.css","assets/ai.4df3e7b0.js","assets/PhCheckCircle.vue.c5f15a50.js","assets/PhCopySimple.vue.d53828ba.js","assets/Avatar.3eff4dad.js","assets/SmartChat.0200e553.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f032b6d7.js","assets/index.705a4cb8.js","assets/CollapsePanel.645c13fb.js","assets/index.25425e3b.js","assets/index.64a20157.js","assets/TasksManager.ba33183b.js","assets/tasksController.eae77d4c.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/ant-design.cc6017f6.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.33c26635.js","assets/index.bd21aaea.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.c8e34d53.js","assets/CloseCircleOutlined.71e0202a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/PhChats.vue.15faf35c.js","assets/NavbarControls.e9c97288.css","assets/index.5c283244.js","assets/index.68c29d1e.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.4f0a3971.js"),["assets/ScriptEditor.4f0a3971.js","assets/BaseLayout.5b8f495b.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3f689d5f.js","assets/scripts.5ec494c1.js","assets/record.95022861.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/validations.3782caa5.js","assets/string.3d89bd5f.js","assets/uuid.7d1d0254.js","assets/PhCaretRight.vue.53d71520.js","assets/Badge.a7fb7347.js","assets/LoadingOutlined.9b6e838f.js","assets/workspaces.56e3a440.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/SaveButton.80e4501c.js","assets/UnsavedChangesHandler.63a31ca9.js","assets/ExclamationCircleOutlined.8d58d326.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.61555a47.js","assets/PhFolder.vue.88972f5c.js","assets/PhPencil.vue.a36b8773.js","assets/toggleHighContrast.7cc299ff.js","assets/toggleHighContrast.30d77c87.css","assets/index.91bd3e1e.js","assets/Card.0d71695b.js","assets/TabPane.ed4eb1f6.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/Logo.46d5120c.css","assets/ai.4df3e7b0.js","assets/PhCheckCircle.vue.c5f15a50.js","assets/PhCopySimple.vue.d53828ba.js","assets/Avatar.3eff4dad.js","assets/SmartChat.0200e553.css","assets/tasksController.eae77d4c.js","assets/gateway.41d9bbf6.js","assets/popupNotifcation.073fbf81.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f032b6d7.js","assets/TasksManager.ba33183b.js","assets/ant-design.cc6017f6.js","assets/PhArrowSquareOut.vue.aec63edb.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.33c26635.js","assets/index.64a20157.js","assets/CollapsePanel.645c13fb.js","assets/index.bd21aaea.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.c8e34d53.js","assets/index.25425e3b.js","assets/CloseCircleOutlined.71e0202a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6bf1b159.js","assets/BookOutlined.e9f35cae.js","assets/PhChats.vue.15faf35c.js","assets/NavbarControls.e9c97288.css","assets/index.5c283244.js","assets/index.68c29d1e.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.1ef28713.js"),["assets/ResourcesTracker.1ef28713.js","assets/BaseLayout.5b8f495b.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.65722ff2.js","assets/polling.61555a47.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.5266786f.js"),["assets/Welcome.5266786f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8461d839.js","assets/Logo.1e63d273.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/ContentLayout.0a98fb03.js","assets/ContentLayout.ee57a545.css","assets/fetch.2101e4d1.js","assets/Card.0d71695b.js","assets/TabPane.ed4eb1f6.js","assets/workspaceStore.021fcbbd.js","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/linters.7669e208.js","assets/asyncComputed.65722ff2.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.f8124b4c.js"),["assets/App.f8124b4c.js","assets/App.vue_vue_type_style_index_0_lang.95c69bb1.js","assets/workspaceStore.021fcbbd.js","assets/index.eb723478.js","assets/index.b3bf2b78.css","assets/url.02a99e5e.js","assets/colorHelpers.7c3fff1f.js","assets/PlayerConfigProvider.dc477630.js","assets/index.0bdb9cf2.js","assets/PlayerConfigProvider.cb445f57.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.8a17e7df.js.map
