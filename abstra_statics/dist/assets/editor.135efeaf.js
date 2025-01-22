var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.c7bfbac5.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.1ede3134.js";import"./linters.a2274013.js";import"./url.849b89bd.js";import"./colorHelpers.c733b97f.js";import"./asyncComputed.e8bdf241.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2a9fc2dd-78d3-4d25-9521-cbb4a778de50",t._sentryDebugIdIdentifier="sentry-dbid-2a9fc2dd-78d3-4d25-9521-cbb4a778de50")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"5e76d869db79ff2f32af9200895059ff3c990c73",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),P=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:b}=r.info;l.boot(i,b)}else l.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.2d057bcd.js"),["assets/Home.2d057bcd.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.fcf27c53.js"),["assets/Workspace.fcf27c53.js","assets/BaseLayout.f38daf27.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.5beacf5a.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/NavbarControls.b41bdb25.js","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/index.b3169a7f.js","assets/CloseCircleOutlined.c7d60866.js","assets/index.50a8edb2.js","assets/workspaces.d3f6e0b3.js","assets/record.afcd03d8.js","assets/popupNotifcation.fccbdfd9.js","assets/PhArrowSquareOut.vue.410f03ab.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/PhChats.vue.caa0eda0.js","assets/polling.12512c5d.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.2ed49e5a.js","assets/PhIdentificationBadge.vue.6248260a.js","assets/PhCaretRight.vue.53cf9869.js","assets/index.6559d793.js","assets/index.c3954aaf.js","assets/Avatar.decb9ce6.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.01f8a62b.js"),["assets/Stages.01f8a62b.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/ContentLayout.dd7d847f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.85e41ce5.js","assets/router.4f8bd337.js","assets/Badge.ba91c905.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/url.849b89bd.js","assets/PhDotsThreeVertical.vue.45225a66.js","assets/index.fce58dd3.js","assets/index.b3169a7f.js","assets/CrudView.c80c8ede.css","assets/ant-design.24be0047.js","assets/asyncComputed.e8bdf241.js","assets/string.f5587c68.js","assets/PhArrowSquareOut.vue.410f03ab.js","assets/scripts.df21923f.js","assets/record.afcd03d8.js","assets/linters.a2274013.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/colorHelpers.c733b97f.js","assets/ai.9f3d42cb.js","assets/index.50a8edb2.js","assets/PhWebhooksLogo.vue.8f08178a.js","assets/validations.9aa53928.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.d47fe8e7.js"),["assets/WorkflowEditor.d47fe8e7.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/vue-flow-minimap.3ec9d97c.js","assets/validations.9aa53928.js","assets/string.f5587c68.js","assets/uuid.d061732f.js","assets/metadata.5e0af592.js","assets/PhWebhooksLogo.vue.8f08178a.js","assets/asyncComputed.e8bdf241.js","assets/linters.a2274013.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/record.afcd03d8.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.3ef36a4e.js","assets/PhArrowCounterClockwise.vue.2ed49e5a.js","assets/TasksManager.5788e3c2.js","assets/tasksController.d2cf7bd4.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/polling.12512c5d.js","assets/scripts.df21923f.js","assets/ant-design.24be0047.js","assets/PhArrowSquareOut.vue.410f03ab.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f2281e8d.js","assets/Card.ce6b04b4.js","assets/TabPane.125e3c08.js","assets/CollapsePanel.a0fe61d7.js","assets/index.ad130cf6.js","assets/TasksManager.53a9d7b9.css","assets/index.25c4a4a0.js","assets/Badge.ba91c905.js","assets/index.7bdecc74.js","assets/PhArrowDown.vue.a12d908a.js","assets/WorkflowEditor.acc53efd.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.9d51342a.js"),["assets/Tasks.9d51342a.js","assets/TasksView.vue_vue_type_script_setup_true_lang.a4f99aeb.js","assets/tasksController.d2cf7bd4.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/polling.12512c5d.js","assets/string.f5587c68.js","assets/scripts.df21923f.js","assets/record.afcd03d8.js","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/metadata.5e0af592.js","assets/PhWebhooksLogo.vue.8f08178a.js","assets/ant-design.24be0047.js","assets/dayjs.6f049f6e.js","assets/index.fce58dd3.js","assets/ContentLayout.dd7d847f.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.6879a7f0.js"),["assets/Logs.6879a7f0.js","assets/ContentLayout.dd7d847f.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.25ac6291.js","assets/string.f5587c68.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/build.c5e6e505.js","assets/tables.656b63c8.js","assets/record.afcd03d8.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.024e65be.js","assets/LoadingOutlined.730b0f2f.js","assets/polling.12512c5d.js","assets/datetime.7ad1de55.js","assets/ant-design.24be0047.js","assets/index.b3169a7f.js","assets/index.fce58dd3.js","assets/dayjs.6f049f6e.js","assets/CollapsePanel.a0fe61d7.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.0bdcd517.js"),["assets/PreferencesEditor.0bdcd517.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/record.afcd03d8.js","assets/PlayerNavbar.a0b8941c.js","assets/metadata.5e0af592.js","assets/PhWebhooksLogo.vue.8f08178a.js","assets/LoadingOutlined.730b0f2f.js","assets/PhSignOut.vue.5beacf5a.js","assets/index.c3954aaf.js","assets/Avatar.decb9ce6.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.cd04dec8.js","assets/index.7bdecc74.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f2281e8d.js","assets/ContentLayout.dd7d847f.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.cb38c85a.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.0fe5e3fb.js"),["assets/RequirementsEditor.0fe5e3fb.js","assets/ContentLayout.dd7d847f.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/CrudView.85e41ce5.js","assets/router.4f8bd337.js","assets/Badge.ba91c905.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/url.849b89bd.js","assets/PhDotsThreeVertical.vue.45225a66.js","assets/index.fce58dd3.js","assets/index.b3169a7f.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.e8bdf241.js","assets/polling.12512c5d.js","assets/linters.a2274013.js","assets/record.afcd03d8.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/colorHelpers.c733b97f.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.06b585da.js"),["assets/EnvVarsEditor.06b585da.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/record.afcd03d8.js","assets/ContentLayout.dd7d847f.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.7b7381e6.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/fetch.526d03c9.js","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.85e41ce5.js","assets/router.4f8bd337.js","assets/Badge.ba91c905.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/PhDotsThreeVertical.vue.45225a66.js","assets/index.fce58dd3.js","assets/index.b3169a7f.js","assets/CrudView.c80c8ede.css","assets/polling.12512c5d.js","assets/PhPencil.vue.0e34147f.js","assets/index.50a8edb2.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.a0dc443c.js"),["assets/AccessControlEditor.a0dc443c.js","assets/ContentLayout.dd7d847f.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/fetch.526d03c9.js","assets/record.afcd03d8.js","assets/repository.9560c616.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/asyncComputed.e8bdf241.js","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.410f03ab.js","assets/index.3ef36a4e.js","assets/metadata.5e0af592.js","assets/PhWebhooksLogo.vue.8f08178a.js","assets/index.50a8edb2.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/linters.a2274013.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.639ad798.js"),["assets/ProjectLogin.639ad798.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/Logo.46d5120c.css","assets/BaseLayout.f38daf27.js","assets/BaseLayout.b7a1f19a.css","assets/index.6559d793.js","assets/index.c3954aaf.js","assets/Avatar.decb9ce6.js","assets/index.b3169a7f.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.5e8cd9c3.js"),["assets/FormEditor.5e8cd9c3.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/BaseLayout.f38daf27.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.4ad71be6.js","assets/scripts.df21923f.js","assets/record.afcd03d8.js","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/validations.9aa53928.js","assets/string.f5587c68.js","assets/uuid.d061732f.js","assets/PhCaretRight.vue.53cf9869.js","assets/Badge.ba91c905.js","assets/LoadingOutlined.730b0f2f.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/polling.12512c5d.js","assets/PhFolder.vue.2058bd53.js","assets/PhPencil.vue.0e34147f.js","assets/toggleHighContrast.b523601d.js","assets/toggleHighContrast.30d77c87.css","assets/index.50a8edb2.js","assets/Card.ce6b04b4.js","assets/TabPane.125e3c08.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/Logo.46d5120c.css","assets/ant-design.24be0047.js","assets/PhGear.vue.54c97724.js","assets/ai.9f3d42cb.js","assets/PhCheckCircle.vue.c1d59fb3.js","assets/PhCopySimple.vue.33b9dd16.js","assets/Avatar.decb9ce6.js","assets/SmartChat.25a947bd.css","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.42c164d7.js","assets/Login.vue_vue_type_script_setup_true_lang.fed2ec5d.js","assets/CircularLoading.9ac6ee90.js","assets/CircularLoading.1a558a0d.css","assets/index.7bdecc74.js","assets/Login.28df3844.css","assets/Steps.bcfddf6a.js","assets/index.7913360f.js","assets/Steps.4d03c6c1.css","assets/Watermark.7a3326cf.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.a5c2ba90.css","assets/PlayerNavbar.a0b8941c.js","assets/metadata.5e0af592.js","assets/PhWebhooksLogo.vue.8f08178a.js","assets/PhSignOut.vue.5beacf5a.js","assets/index.c3954aaf.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.cd04dec8.js","assets/PlayerConfigProvider.309c06f9.css","assets/PhArrowSquareOut.vue.410f03ab.js","assets/index.b3169a7f.js","assets/TasksManager.5788e3c2.js","assets/tasksController.d2cf7bd4.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f2281e8d.js","assets/index.3ef36a4e.js","assets/CollapsePanel.a0fe61d7.js","assets/index.ad130cf6.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.b41bdb25.js","assets/CloseCircleOutlined.c7d60866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/PhChats.vue.caa0eda0.js","assets/NavbarControls.e9c97288.css","assets/index.6559d793.js","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.3d99afc0.js"),["assets/JobEditor.3d99afc0.js","assets/asyncComputed.e8bdf241.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/scripts.df21923f.js","assets/record.afcd03d8.js","assets/linters.a2274013.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f208d387.js","assets/BaseLayout.f38daf27.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.4ad71be6.js","assets/validations.9aa53928.js","assets/string.f5587c68.js","assets/uuid.d061732f.js","assets/PhCaretRight.vue.53cf9869.js","assets/Badge.ba91c905.js","assets/LoadingOutlined.730b0f2f.js","assets/polling.12512c5d.js","assets/PhFolder.vue.2058bd53.js","assets/PhPencil.vue.0e34147f.js","assets/toggleHighContrast.b523601d.js","assets/toggleHighContrast.30d77c87.css","assets/index.50a8edb2.js","assets/Card.ce6b04b4.js","assets/TabPane.125e3c08.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/Logo.46d5120c.css","assets/ant-design.24be0047.js","assets/PhGear.vue.54c97724.js","assets/ai.9f3d42cb.js","assets/PhCheckCircle.vue.c1d59fb3.js","assets/PhCopySimple.vue.33b9dd16.js","assets/Avatar.decb9ce6.js","assets/SmartChat.25a947bd.css","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.b41bdb25.js","assets/index.b3169a7f.js","assets/CloseCircleOutlined.c7d60866.js","assets/popupNotifcation.fccbdfd9.js","assets/PhArrowSquareOut.vue.410f03ab.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/PhChats.vue.caa0eda0.js","assets/NavbarControls.e9c97288.css","assets/TasksManager.5788e3c2.js","assets/tasksController.d2cf7bd4.js","assets/gateway.68b09373.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f2281e8d.js","assets/index.3ef36a4e.js","assets/CollapsePanel.a0fe61d7.js","assets/index.ad130cf6.js","assets/TasksManager.53a9d7b9.css","assets/index.6559d793.js","assets/index.c3954aaf.js","assets/index.72e7245f.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.0756786d.js"),["assets/HookEditor.0756786d.js","assets/asyncComputed.e8bdf241.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/scripts.df21923f.js","assets/record.afcd03d8.js","assets/linters.a2274013.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f208d387.js","assets/BaseLayout.f38daf27.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.4ad71be6.js","assets/validations.9aa53928.js","assets/string.f5587c68.js","assets/uuid.d061732f.js","assets/PhCaretRight.vue.53cf9869.js","assets/Badge.ba91c905.js","assets/LoadingOutlined.730b0f2f.js","assets/polling.12512c5d.js","assets/PhFolder.vue.2058bd53.js","assets/PhPencil.vue.0e34147f.js","assets/toggleHighContrast.b523601d.js","assets/toggleHighContrast.30d77c87.css","assets/index.50a8edb2.js","assets/Card.ce6b04b4.js","assets/TabPane.125e3c08.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/Logo.46d5120c.css","assets/ant-design.24be0047.js","assets/PhGear.vue.54c97724.js","assets/ai.9f3d42cb.js","assets/PhCheckCircle.vue.c1d59fb3.js","assets/PhCopySimple.vue.33b9dd16.js","assets/Avatar.decb9ce6.js","assets/SmartChat.25a947bd.css","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.b41bdb25.js","assets/index.b3169a7f.js","assets/CloseCircleOutlined.c7d60866.js","assets/popupNotifcation.fccbdfd9.js","assets/PhArrowSquareOut.vue.410f03ab.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/PhChats.vue.caa0eda0.js","assets/NavbarControls.e9c97288.css","assets/TasksManager.5788e3c2.js","assets/tasksController.d2cf7bd4.js","assets/gateway.68b09373.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f2281e8d.js","assets/index.3ef36a4e.js","assets/CollapsePanel.a0fe61d7.js","assets/index.ad130cf6.js","assets/TasksManager.53a9d7b9.css","assets/index.6559d793.js","assets/index.c3954aaf.js","assets/index.f9ee188e.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.970a8d8d.js"),["assets/ScriptEditor.970a8d8d.js","assets/tasksController.d2cf7bd4.js","assets/gateway.68b09373.js","assets/popupNotifcation.fccbdfd9.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/polling.12512c5d.js","assets/string.f5587c68.js","assets/scripts.df21923f.js","assets/record.afcd03d8.js","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/workspaces.d3f6e0b3.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f208d387.js","assets/BaseLayout.f38daf27.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.4ad71be6.js","assets/validations.9aa53928.js","assets/uuid.d061732f.js","assets/PhCaretRight.vue.53cf9869.js","assets/Badge.ba91c905.js","assets/LoadingOutlined.730b0f2f.js","assets/PhFolder.vue.2058bd53.js","assets/PhPencil.vue.0e34147f.js","assets/toggleHighContrast.b523601d.js","assets/toggleHighContrast.30d77c87.css","assets/index.50a8edb2.js","assets/Card.ce6b04b4.js","assets/TabPane.125e3c08.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/Logo.46d5120c.css","assets/ant-design.24be0047.js","assets/PhGear.vue.54c97724.js","assets/ai.9f3d42cb.js","assets/PhCheckCircle.vue.c1d59fb3.js","assets/PhCopySimple.vue.33b9dd16.js","assets/Avatar.decb9ce6.js","assets/SmartChat.25a947bd.css","assets/SaveButton.705d326d.js","assets/UnsavedChangesHandler.0e62f49d.js","assets/ExclamationCircleOutlined.8b910499.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.b41bdb25.js","assets/index.b3169a7f.js","assets/CloseCircleOutlined.c7d60866.js","assets/PhArrowSquareOut.vue.410f03ab.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2f263be6.js","assets/BookOutlined.08d6c33d.js","assets/PhChats.vue.caa0eda0.js","assets/NavbarControls.e9c97288.css","assets/TasksManager.5788e3c2.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f2281e8d.js","assets/index.3ef36a4e.js","assets/CollapsePanel.a0fe61d7.js","assets/index.ad130cf6.js","assets/TasksManager.53a9d7b9.css","assets/index.6559d793.js","assets/index.c3954aaf.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.aa8949aa.js"),["assets/ResourcesTracker.aa8949aa.js","assets/BaseLayout.f38daf27.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.e8bdf241.js","assets/polling.12512c5d.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.8f939be3.js"),["assets/Welcome.8f939be3.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0596c76f.js","assets/Logo.59443a35.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/Logo.46d5120c.css","assets/ContentLayout.dd7d847f.js","assets/ContentLayout.ee57a545.css","assets/fetch.526d03c9.js","assets/Card.ce6b04b4.js","assets/TabPane.125e3c08.js","assets/workspaceStore.1ede3134.js","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/linters.a2274013.js","assets/asyncComputed.e8bdf241.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.d459471d.js"),["assets/App.d459471d.js","assets/App.vue_vue_type_style_index_0_lang.fd12bca2.js","assets/workspaceStore.1ede3134.js","assets/index.c7bfbac5.js","assets/index.65a6d955.css","assets/url.849b89bd.js","assets/colorHelpers.c733b97f.js","assets/PlayerConfigProvider.cd04dec8.js","assets/index.7bdecc74.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.135efeaf.js.map
