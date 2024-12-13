var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.1ba674b9.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.522da921.js";import"./linters.18788fc7.js";import"./url.e363deaf.js";import"./colorHelpers.a9219da1.js";import"./asyncComputed.b311f899.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7b497ca5-3ec3-4cad-b470-6bc7ea12570b",t._sentryDebugIdIdentifier="sentry-dbid-7b497ca5-3ec3-4cad-b470-6bc7ea12570b")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"2dc506d02526bf9d32b1960de1024f611eadbfd8",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.6ee0986c.js"),["assets/Home.6ee0986c.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.8432505f.js"),["assets/Workspace.8432505f.js","assets/BaseLayout.6c41e748.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.968b40cf.js","assets/NavbarControls.b17188f5.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/index.7ef2d2bd.js","assets/CloseCircleOutlined.16840096.js","assets/index.53c4badd.js","assets/workspaces.0559a591.js","assets/record.4bb50e2f.js","assets/popupNotifcation.6073eb74.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/PhChats.vue.c3edfccc.js","assets/polling.81600c40.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.964f530e.js","assets/PhIdentificationBadge.vue.a1fb123e.js","assets/PhCaretRight.vue.a63639e0.js","assets/index.80c102ae.js","assets/index.45aff0fb.js","assets/Avatar.c53f9daf.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.70ea7b2f.js"),["assets/Stages.70ea7b2f.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/ContentLayout.5f518002.js","assets/ContentLayout.ee57a545.css","assets/CrudView.dff1c645.js","assets/router.6a89fd2d.js","assets/Badge.ca752c59.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/url.e363deaf.js","assets/PhDotsThreeVertical.vue.12ed3730.js","assets/index.54527094.js","assets/index.7ef2d2bd.js","assets/CrudView.c80c8ede.css","assets/ant-design.d9f702a8.js","assets/asyncComputed.b311f899.js","assets/string.8ac68724.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/scripts.b57cc0df.js","assets/record.4bb50e2f.js","assets/linters.18788fc7.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/colorHelpers.a9219da1.js","assets/ai.d5b3b321.js","assets/index.53c4badd.js","assets/PhWebhooksLogo.vue.9340022e.js","assets/validations.51fc74ac.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.5c0b8791.js"),["assets/WorkflowEditor.5c0b8791.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/validations.51fc74ac.js","assets/string.8ac68724.js","assets/uuid.3a6b24f6.js","assets/metadata.49dd5bc3.js","assets/PhWebhooksLogo.vue.9340022e.js","assets/asyncComputed.b311f899.js","assets/linters.18788fc7.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/record.4bb50e2f.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.2783a6d3.js","assets/PhArrowCounterClockwise.vue.964f530e.js","assets/TasksManager.4d0051a2.js","assets/tasksController.8b8f9320.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/polling.81600c40.js","assets/scripts.b57cc0df.js","assets/ant-design.d9f702a8.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a53f2f3e.js","assets/Card.e282941e.js","assets/TabPane.6bd8c548.js","assets/CollapsePanel.7b1b45ce.js","assets/index.e50a8fe6.js","assets/TasksManager.824ac91c.css","assets/index.89fe58aa.js","assets/Badge.ca752c59.js","assets/index.ac874add.js","assets/PhArrowDown.vue.e0449e96.js","assets/WorkflowEditor.9b774473.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.24de67c4.js"),["assets/Tasks.24de67c4.js","assets/TasksView.vue_vue_type_script_setup_true_lang.fd4c56fa.js","assets/tasksController.8b8f9320.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/polling.81600c40.js","assets/string.8ac68724.js","assets/scripts.b57cc0df.js","assets/record.4bb50e2f.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/metadata.49dd5bc3.js","assets/PhWebhooksLogo.vue.9340022e.js","assets/ant-design.d9f702a8.js","assets/dayjs.ce6506cb.js","assets/index.54527094.js","assets/ContentLayout.5f518002.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.f913878c.js"),["assets/Logs.f913878c.js","assets/ContentLayout.5f518002.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.fbf37246.js","assets/string.8ac68724.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/build.a8d8db8b.js","assets/tables.7bb41740.js","assets/record.4bb50e2f.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.2aaa4502.js","assets/LoadingOutlined.be7dc389.js","assets/polling.81600c40.js","assets/datetime.2c487698.js","assets/ant-design.d9f702a8.js","assets/index.7ef2d2bd.js","assets/index.54527094.js","assets/dayjs.ce6506cb.js","assets/CollapsePanel.7b1b45ce.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.3853d00d.js"),["assets/PreferencesEditor.3853d00d.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/record.4bb50e2f.js","assets/PlayerNavbar.160cbffd.js","assets/metadata.49dd5bc3.js","assets/PhWebhooksLogo.vue.9340022e.js","assets/LoadingOutlined.be7dc389.js","assets/PhSignOut.vue.968b40cf.js","assets/index.45aff0fb.js","assets/Avatar.c53f9daf.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.9d5ea1f0.js","assets/index.ac874add.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a53f2f3e.js","assets/ContentLayout.5f518002.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.baa772d0.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.3546bd02.js"),["assets/RequirementsEditor.3546bd02.js","assets/ContentLayout.5f518002.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.dff1c645.js","assets/router.6a89fd2d.js","assets/Badge.ca752c59.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/url.e363deaf.js","assets/PhDotsThreeVertical.vue.12ed3730.js","assets/index.54527094.js","assets/index.7ef2d2bd.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b311f899.js","assets/polling.81600c40.js","assets/linters.18788fc7.js","assets/record.4bb50e2f.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/colorHelpers.a9219da1.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.e22e91f8.js"),["assets/EnvVarsEditor.e22e91f8.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/record.4bb50e2f.js","assets/ContentLayout.5f518002.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.bb65385d.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/fetch.535f5fbb.js","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.dff1c645.js","assets/router.6a89fd2d.js","assets/Badge.ca752c59.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/PhDotsThreeVertical.vue.12ed3730.js","assets/index.54527094.js","assets/index.7ef2d2bd.js","assets/CrudView.c80c8ede.css","assets/polling.81600c40.js","assets/PhPencil.vue.02407de6.js","assets/index.53c4badd.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.560680e2.js"),["assets/AccessControlEditor.560680e2.js","assets/ContentLayout.5f518002.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.535f5fbb.js","assets/record.4bb50e2f.js","assets/repository.7185d118.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/asyncComputed.b311f899.js","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.a2a04873.js","assets/index.2783a6d3.js","assets/metadata.49dd5bc3.js","assets/PhWebhooksLogo.vue.9340022e.js","assets/index.53c4badd.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/linters.18788fc7.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.da54cd88.js"),["assets/ProjectLogin.da54cd88.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/BaseLayout.6c41e748.js","assets/BaseLayout.b7a1f19a.css","assets/index.80c102ae.js","assets/index.45aff0fb.js","assets/Avatar.c53f9daf.js","assets/index.7ef2d2bd.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.57e8bfc1.js"),["assets/FormEditor.57e8bfc1.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/BaseLayout.6c41e748.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.c68777d4.js","assets/scripts.b57cc0df.js","assets/record.4bb50e2f.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/validations.51fc74ac.js","assets/string.8ac68724.js","assets/uuid.3a6b24f6.js","assets/PhCaretRight.vue.a63639e0.js","assets/Badge.ca752c59.js","assets/LoadingOutlined.be7dc389.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.81600c40.js","assets/PhFolder.vue.9da412a0.js","assets/PhPencil.vue.02407de6.js","assets/toggleHighContrast.590cc315.js","assets/toggleHighContrast.30d77c87.css","assets/index.53c4badd.js","assets/Card.e282941e.js","assets/TabPane.6bd8c548.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/Logo.46d5120c.css","assets/ai.d5b3b321.js","assets/PhCheckCircle.vue.6229e6aa.js","assets/PhCopySimple.vue.98ec3d0c.js","assets/Avatar.c53f9daf.js","assets/SmartChat.0200e553.css","assets/FormRunner.e82147b5.js","assets/Login.vue_vue_type_script_setup_true_lang.f97d98e6.js","assets/CircularLoading.6f3677ac.js","assets/CircularLoading.1a558a0d.css","assets/index.ac874add.js","assets/Login.28df3844.css","assets/Steps.80867b5d.js","assets/index.9f4b91e3.js","assets/Steps.4d03c6c1.css","assets/Watermark.ecb31cff.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerNavbar.160cbffd.js","assets/metadata.49dd5bc3.js","assets/PhWebhooksLogo.vue.9340022e.js","assets/PhSignOut.vue.968b40cf.js","assets/index.45aff0fb.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.9d5ea1f0.js","assets/PlayerConfigProvider.8864c905.css","assets/index.7ef2d2bd.js","assets/TasksManager.4d0051a2.js","assets/tasksController.8b8f9320.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/ant-design.d9f702a8.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a53f2f3e.js","assets/index.2783a6d3.js","assets/CollapsePanel.7b1b45ce.js","assets/index.e50a8fe6.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b17188f5.js","assets/CloseCircleOutlined.16840096.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/PhChats.vue.c3edfccc.js","assets/NavbarControls.e9c97288.css","assets/index.80c102ae.js","assets/FormEditor.67c0b6ec.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.71d0d5d4.js"),["assets/JobEditor.71d0d5d4.js","assets/BaseLayout.6c41e748.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.c68777d4.js","assets/scripts.b57cc0df.js","assets/record.4bb50e2f.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/validations.51fc74ac.js","assets/string.8ac68724.js","assets/uuid.3a6b24f6.js","assets/PhCaretRight.vue.a63639e0.js","assets/Badge.ca752c59.js","assets/LoadingOutlined.be7dc389.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.81600c40.js","assets/PhFolder.vue.9da412a0.js","assets/PhPencil.vue.02407de6.js","assets/toggleHighContrast.590cc315.js","assets/toggleHighContrast.30d77c87.css","assets/index.53c4badd.js","assets/Card.e282941e.js","assets/TabPane.6bd8c548.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/Logo.46d5120c.css","assets/ai.d5b3b321.js","assets/PhCheckCircle.vue.6229e6aa.js","assets/PhCopySimple.vue.98ec3d0c.js","assets/Avatar.c53f9daf.js","assets/SmartChat.0200e553.css","assets/index.bae1040a.js","assets/index.7ef2d2bd.js","assets/TasksManager.4d0051a2.js","assets/tasksController.8b8f9320.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/ant-design.d9f702a8.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a53f2f3e.js","assets/index.2783a6d3.js","assets/CollapsePanel.7b1b45ce.js","assets/index.e50a8fe6.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b17188f5.js","assets/CloseCircleOutlined.16840096.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/PhChats.vue.c3edfccc.js","assets/NavbarControls.e9c97288.css","assets/index.80c102ae.js","assets/index.45aff0fb.js","assets/JobEditor.897dfb6d.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.7a918243.js"),["assets/HookEditor.7a918243.js","assets/BaseLayout.6c41e748.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.c68777d4.js","assets/scripts.b57cc0df.js","assets/record.4bb50e2f.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/validations.51fc74ac.js","assets/string.8ac68724.js","assets/uuid.3a6b24f6.js","assets/PhCaretRight.vue.a63639e0.js","assets/Badge.ca752c59.js","assets/LoadingOutlined.be7dc389.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.81600c40.js","assets/PhFolder.vue.9da412a0.js","assets/PhPencil.vue.02407de6.js","assets/toggleHighContrast.590cc315.js","assets/toggleHighContrast.30d77c87.css","assets/index.53c4badd.js","assets/Card.e282941e.js","assets/TabPane.6bd8c548.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/Logo.46d5120c.css","assets/ai.d5b3b321.js","assets/PhCheckCircle.vue.6229e6aa.js","assets/PhCopySimple.vue.98ec3d0c.js","assets/Avatar.c53f9daf.js","assets/SmartChat.0200e553.css","assets/RunButton.vue_vue_type_script_setup_true_lang.18d1eaa6.js","assets/index.cc0ff585.js","assets/CollapsePanel.7b1b45ce.js","assets/index.7ef2d2bd.js","assets/index.2783a6d3.js","assets/TasksManager.4d0051a2.js","assets/tasksController.8b8f9320.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/ant-design.d9f702a8.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a53f2f3e.js","assets/index.e50a8fe6.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b17188f5.js","assets/CloseCircleOutlined.16840096.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/PhChats.vue.c3edfccc.js","assets/NavbarControls.e9c97288.css","assets/index.80c102ae.js","assets/index.45aff0fb.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.a0ae575c.js"),["assets/ScriptEditor.a0ae575c.js","assets/BaseLayout.6c41e748.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.c68777d4.js","assets/scripts.b57cc0df.js","assets/record.4bb50e2f.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/validations.51fc74ac.js","assets/string.8ac68724.js","assets/uuid.3a6b24f6.js","assets/PhCaretRight.vue.a63639e0.js","assets/Badge.ca752c59.js","assets/LoadingOutlined.be7dc389.js","assets/workspaces.0559a591.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/SaveButton.f629ec9c.js","assets/UnsavedChangesHandler.708a080b.js","assets/ExclamationCircleOutlined.0e4b7e13.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.81600c40.js","assets/PhFolder.vue.9da412a0.js","assets/PhPencil.vue.02407de6.js","assets/toggleHighContrast.590cc315.js","assets/toggleHighContrast.30d77c87.css","assets/index.53c4badd.js","assets/Card.e282941e.js","assets/TabPane.6bd8c548.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/Logo.46d5120c.css","assets/ai.d5b3b321.js","assets/PhCheckCircle.vue.6229e6aa.js","assets/PhCopySimple.vue.98ec3d0c.js","assets/Avatar.c53f9daf.js","assets/SmartChat.0200e553.css","assets/tasksController.8b8f9320.js","assets/gateway.180d1133.js","assets/popupNotifcation.6073eb74.js","assets/RunButton.vue_vue_type_script_setup_true_lang.18d1eaa6.js","assets/TasksManager.4d0051a2.js","assets/ant-design.d9f702a8.js","assets/PhArrowSquareOut.vue.a2a04873.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a53f2f3e.js","assets/index.2783a6d3.js","assets/CollapsePanel.7b1b45ce.js","assets/index.e50a8fe6.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.b17188f5.js","assets/index.7ef2d2bd.js","assets/CloseCircleOutlined.16840096.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.188b130e.js","assets/BookOutlined.1e7ca09d.js","assets/PhChats.vue.c3edfccc.js","assets/NavbarControls.e9c97288.css","assets/index.80c102ae.js","assets/index.45aff0fb.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.33873616.js"),["assets/ResourcesTracker.33873616.js","assets/BaseLayout.6c41e748.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.b311f899.js","assets/polling.81600c40.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.2c060a92.js"),["assets/Welcome.2c060a92.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe9e1d28.js","assets/Logo.915e8d52.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/ContentLayout.5f518002.js","assets/ContentLayout.ee57a545.css","assets/fetch.535f5fbb.js","assets/Card.e282941e.js","assets/TabPane.6bd8c548.js","assets/workspaceStore.522da921.js","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/linters.18788fc7.js","assets/asyncComputed.b311f899.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.edf8fd61.js"),["assets/App.edf8fd61.js","assets/App.vue_vue_type_style_index_0_lang.4cd1d7e9.js","assets/workspaceStore.522da921.js","assets/index.1ba674b9.js","assets/index.b3bf2b78.css","assets/url.e363deaf.js","assets/colorHelpers.a9219da1.js","assets/PlayerConfigProvider.9d5ea1f0.js","assets/index.ac874add.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.b0af92c6.js.map
