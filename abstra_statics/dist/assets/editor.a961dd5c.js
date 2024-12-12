var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.73a38d81.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.9a1cf89e.js";import"./linters.19a229f9.js";import"./url.9bc6af1d.js";import"./colorHelpers.2f665bfc.js";import"./asyncComputed.c6319089.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="29f41ea3-87dd-4e8a-8aac-321485b81fd9",t._sentryDebugIdIdentifier="sentry-dbid-29f41ea3-87dd-4e8a-8aac-321485b81fd9")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"12cdf59c85bb0d92052cddd1f58de9c428b669fa",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),P=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:b}=r.info;l.boot(i,b)}else l.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.462d0258.js"),["assets/Home.462d0258.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.49b8103d.js"),["assets/Workspace.49b8103d.js","assets/BaseLayout.2eb77e5e.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.ccc2174a.js","assets/NavbarControls.f99c5e32.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/index.2d36535b.js","assets/CloseCircleOutlined.f621b712.js","assets/index.78e04c78.js","assets/workspaces.d6292660.js","assets/record.0e492bf3.js","assets/popupNotifcation.3e5ffef1.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/PhChats.vue.0ddbb468.js","assets/polling.b4e09b79.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.94ad9cf6.js","assets/PhIdentificationBadge.vue.c4b15766.js","assets/PhCaretRight.vue.cd4f7433.js","assets/index.1d99cd36.js","assets/index.6a44bd55.js","assets/Avatar.b56b94ed.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.68b1676a.js"),["assets/Stages.68b1676a.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee4f4aa2.js","assets/ContentLayout.ee57a545.css","assets/CrudView.8287bc55.js","assets/router.4241d0f1.js","assets/Badge.c734bd0c.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/url.9bc6af1d.js","assets/PhDotsThreeVertical.vue.355ba4af.js","assets/index.17e17239.js","assets/index.2d36535b.js","assets/CrudView.c80c8ede.css","assets/ant-design.dfa6c76d.js","assets/asyncComputed.c6319089.js","assets/string.ead22143.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/scripts.345756e7.js","assets/record.0e492bf3.js","assets/linters.19a229f9.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/colorHelpers.2f665bfc.js","assets/ai.d3dc1da1.js","assets/index.78e04c78.js","assets/PhWebhooksLogo.vue.963bdc68.js","assets/validations.aa32a170.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.6872cfae.js"),["assets/WorkflowEditor.6872cfae.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/validations.aa32a170.js","assets/string.ead22143.js","assets/uuid.8c8c77c5.js","assets/metadata.cc1c1c9b.js","assets/PhWebhooksLogo.vue.963bdc68.js","assets/asyncComputed.c6319089.js","assets/linters.19a229f9.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/record.0e492bf3.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.c30ceca6.js","assets/PhArrowCounterClockwise.vue.94ad9cf6.js","assets/TasksManager.1b0c87d8.js","assets/tasksController.a7392939.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/polling.b4e09b79.js","assets/scripts.345756e7.js","assets/ant-design.dfa6c76d.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.aa101f2b.js","assets/Card.f9ea02bd.js","assets/TabPane.5f6856ea.js","assets/CollapsePanel.5b52b88b.js","assets/index.904b936f.js","assets/TasksManager.824ac91c.css","assets/index.f72cd765.js","assets/Badge.c734bd0c.js","assets/index.1fcf1ec5.js","assets/PhArrowDown.vue.51125de1.js","assets/WorkflowEditor.9b774473.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.1f23bfa5.js"),["assets/Tasks.1f23bfa5.js","assets/TasksView.vue_vue_type_script_setup_true_lang.b9d04c83.js","assets/tasksController.a7392939.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/polling.b4e09b79.js","assets/string.ead22143.js","assets/scripts.345756e7.js","assets/record.0e492bf3.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/metadata.cc1c1c9b.js","assets/PhWebhooksLogo.vue.963bdc68.js","assets/ant-design.dfa6c76d.js","assets/dayjs.f09a9114.js","assets/index.17e17239.js","assets/ContentLayout.ee4f4aa2.js","assets/ContentLayout.ee57a545.css","assets/Tasks.1557e4df.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.df9ad843.js"),["assets/Logs.df9ad843.js","assets/ContentLayout.ee4f4aa2.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.87b074bc.js","assets/string.ead22143.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/build.3d82ca93.js","assets/tables.61bdfee3.js","assets/record.0e492bf3.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b57014ab.js","assets/LoadingOutlined.70a572c4.js","assets/polling.b4e09b79.js","assets/datetime.0e65584f.js","assets/ant-design.dfa6c76d.js","assets/index.2d36535b.js","assets/index.17e17239.js","assets/dayjs.f09a9114.js","assets/CollapsePanel.5b52b88b.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.ff6fc713.js"),["assets/PreferencesEditor.ff6fc713.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/record.0e492bf3.js","assets/PlayerNavbar.7b392e68.js","assets/metadata.cc1c1c9b.js","assets/PhWebhooksLogo.vue.963bdc68.js","assets/LoadingOutlined.70a572c4.js","assets/PhSignOut.vue.ccc2174a.js","assets/index.6a44bd55.js","assets/Avatar.b56b94ed.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.37c97964.js","assets/index.1fcf1ec5.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.aa101f2b.js","assets/ContentLayout.ee4f4aa2.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.25034c70.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.c3b8d223.js"),["assets/RequirementsEditor.c3b8d223.js","assets/ContentLayout.ee4f4aa2.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.8287bc55.js","assets/router.4241d0f1.js","assets/Badge.c734bd0c.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/url.9bc6af1d.js","assets/PhDotsThreeVertical.vue.355ba4af.js","assets/index.17e17239.js","assets/index.2d36535b.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c6319089.js","assets/polling.b4e09b79.js","assets/linters.19a229f9.js","assets/record.0e492bf3.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/colorHelpers.2f665bfc.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.5252e9fc.js"),["assets/EnvVarsEditor.5252e9fc.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/record.0e492bf3.js","assets/ContentLayout.ee4f4aa2.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.7ff6504f.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/fetch.5d8f4620.js","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.8287bc55.js","assets/router.4241d0f1.js","assets/Badge.c734bd0c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/PhDotsThreeVertical.vue.355ba4af.js","assets/index.17e17239.js","assets/index.2d36535b.js","assets/CrudView.c80c8ede.css","assets/polling.b4e09b79.js","assets/PhPencil.vue.e94c1cbe.js","assets/index.78e04c78.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.e01a6567.js"),["assets/AccessControlEditor.e01a6567.js","assets/ContentLayout.ee4f4aa2.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.5d8f4620.js","assets/record.0e492bf3.js","assets/repository.62979385.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/asyncComputed.c6319089.js","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/index.c30ceca6.js","assets/metadata.cc1c1c9b.js","assets/PhWebhooksLogo.vue.963bdc68.js","assets/index.78e04c78.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/linters.19a229f9.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.86e7eefe.js"),["assets/ProjectLogin.86e7eefe.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/BaseLayout.2eb77e5e.js","assets/BaseLayout.b7a1f19a.css","assets/index.1d99cd36.js","assets/index.6a44bd55.js","assets/Avatar.b56b94ed.js","assets/index.2d36535b.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.0c3c8d19.js"),["assets/FormEditor.0c3c8d19.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/BaseLayout.2eb77e5e.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.12b60eb6.js","assets/scripts.345756e7.js","assets/record.0e492bf3.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/validations.aa32a170.js","assets/string.ead22143.js","assets/uuid.8c8c77c5.js","assets/PhCaretRight.vue.cd4f7433.js","assets/Badge.c734bd0c.js","assets/LoadingOutlined.70a572c4.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.b4e09b79.js","assets/PhFolder.vue.f61e1a65.js","assets/PhPencil.vue.e94c1cbe.js","assets/toggleHighContrast.e2e5f044.js","assets/toggleHighContrast.30d77c87.css","assets/index.78e04c78.js","assets/Card.f9ea02bd.js","assets/TabPane.5f6856ea.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/Logo.46d5120c.css","assets/ai.d3dc1da1.js","assets/PhCheckCircle.vue.40ecb9b7.js","assets/PhCopySimple.vue.ec2f2118.js","assets/Avatar.b56b94ed.js","assets/SmartChat.45263162.css","assets/FormRunner.62d954b6.js","assets/Login.vue_vue_type_script_setup_true_lang.2fcc1fa6.js","assets/CircularLoading.69bd11d0.js","assets/CircularLoading.1a558a0d.css","assets/index.1fcf1ec5.js","assets/Login.28df3844.css","assets/Steps.ee240675.js","assets/index.e4d35acb.js","assets/Steps.4d03c6c1.css","assets/Watermark.d66acae1.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerNavbar.7b392e68.js","assets/metadata.cc1c1c9b.js","assets/PhWebhooksLogo.vue.963bdc68.js","assets/PhSignOut.vue.ccc2174a.js","assets/index.6a44bd55.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.37c97964.js","assets/PlayerConfigProvider.8864c905.css","assets/index.2d36535b.js","assets/TasksManager.1b0c87d8.js","assets/tasksController.a7392939.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/ant-design.dfa6c76d.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.aa101f2b.js","assets/index.c30ceca6.js","assets/CollapsePanel.5b52b88b.js","assets/index.904b936f.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.f99c5e32.js","assets/CloseCircleOutlined.f621b712.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/PhChats.vue.0ddbb468.js","assets/NavbarControls.e9c97288.css","assets/index.1d99cd36.js","assets/FormEditor.67c0b6ec.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.2c11af21.js"),["assets/JobEditor.2c11af21.js","assets/BaseLayout.2eb77e5e.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.12b60eb6.js","assets/scripts.345756e7.js","assets/record.0e492bf3.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/validations.aa32a170.js","assets/string.ead22143.js","assets/uuid.8c8c77c5.js","assets/PhCaretRight.vue.cd4f7433.js","assets/Badge.c734bd0c.js","assets/LoadingOutlined.70a572c4.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.b4e09b79.js","assets/PhFolder.vue.f61e1a65.js","assets/PhPencil.vue.e94c1cbe.js","assets/toggleHighContrast.e2e5f044.js","assets/toggleHighContrast.30d77c87.css","assets/index.78e04c78.js","assets/Card.f9ea02bd.js","assets/TabPane.5f6856ea.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/Logo.46d5120c.css","assets/ai.d3dc1da1.js","assets/PhCheckCircle.vue.40ecb9b7.js","assets/PhCopySimple.vue.ec2f2118.js","assets/Avatar.b56b94ed.js","assets/SmartChat.45263162.css","assets/index.03605816.js","assets/index.2d36535b.js","assets/TasksManager.1b0c87d8.js","assets/tasksController.a7392939.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/ant-design.dfa6c76d.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.aa101f2b.js","assets/index.c30ceca6.js","assets/CollapsePanel.5b52b88b.js","assets/index.904b936f.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.f99c5e32.js","assets/CloseCircleOutlined.f621b712.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/PhChats.vue.0ddbb468.js","assets/NavbarControls.e9c97288.css","assets/index.1d99cd36.js","assets/index.6a44bd55.js","assets/JobEditor.897dfb6d.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.d11a4aa2.js"),["assets/HookEditor.d11a4aa2.js","assets/BaseLayout.2eb77e5e.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.12b60eb6.js","assets/scripts.345756e7.js","assets/record.0e492bf3.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/validations.aa32a170.js","assets/string.ead22143.js","assets/uuid.8c8c77c5.js","assets/PhCaretRight.vue.cd4f7433.js","assets/Badge.c734bd0c.js","assets/LoadingOutlined.70a572c4.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.b4e09b79.js","assets/PhFolder.vue.f61e1a65.js","assets/PhPencil.vue.e94c1cbe.js","assets/toggleHighContrast.e2e5f044.js","assets/toggleHighContrast.30d77c87.css","assets/index.78e04c78.js","assets/Card.f9ea02bd.js","assets/TabPane.5f6856ea.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/Logo.46d5120c.css","assets/ai.d3dc1da1.js","assets/PhCheckCircle.vue.40ecb9b7.js","assets/PhCopySimple.vue.ec2f2118.js","assets/Avatar.b56b94ed.js","assets/SmartChat.45263162.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4561320c.js","assets/index.8087cb60.js","assets/CollapsePanel.5b52b88b.js","assets/index.2d36535b.js","assets/index.c30ceca6.js","assets/TasksManager.1b0c87d8.js","assets/tasksController.a7392939.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/ant-design.dfa6c76d.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.aa101f2b.js","assets/index.904b936f.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.f99c5e32.js","assets/CloseCircleOutlined.f621b712.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/PhChats.vue.0ddbb468.js","assets/NavbarControls.e9c97288.css","assets/index.1d99cd36.js","assets/index.6a44bd55.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.2c06f4d9.js"),["assets/ScriptEditor.2c06f4d9.js","assets/BaseLayout.2eb77e5e.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.12b60eb6.js","assets/scripts.345756e7.js","assets/record.0e492bf3.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/validations.aa32a170.js","assets/string.ead22143.js","assets/uuid.8c8c77c5.js","assets/PhCaretRight.vue.cd4f7433.js","assets/Badge.c734bd0c.js","assets/LoadingOutlined.70a572c4.js","assets/workspaces.d6292660.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/SaveButton.30165a8c.js","assets/UnsavedChangesHandler.186eda01.js","assets/ExclamationCircleOutlined.670eff0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/polling.b4e09b79.js","assets/PhFolder.vue.f61e1a65.js","assets/PhPencil.vue.e94c1cbe.js","assets/toggleHighContrast.e2e5f044.js","assets/toggleHighContrast.30d77c87.css","assets/index.78e04c78.js","assets/Card.f9ea02bd.js","assets/TabPane.5f6856ea.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/Logo.46d5120c.css","assets/ai.d3dc1da1.js","assets/PhCheckCircle.vue.40ecb9b7.js","assets/PhCopySimple.vue.ec2f2118.js","assets/Avatar.b56b94ed.js","assets/SmartChat.45263162.css","assets/tasksController.a7392939.js","assets/gateway.e9e7eb7d.js","assets/popupNotifcation.3e5ffef1.js","assets/RunButton.vue_vue_type_script_setup_true_lang.4561320c.js","assets/TasksManager.1b0c87d8.js","assets/ant-design.dfa6c76d.js","assets/PhArrowSquareOut.vue.86b1b3ba.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.aa101f2b.js","assets/index.c30ceca6.js","assets/CollapsePanel.5b52b88b.js","assets/index.904b936f.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.f99c5e32.js","assets/index.2d36535b.js","assets/CloseCircleOutlined.f621b712.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.14bb05c7.js","assets/BookOutlined.0a5325b1.js","assets/PhChats.vue.0ddbb468.js","assets/NavbarControls.e9c97288.css","assets/index.1d99cd36.js","assets/index.6a44bd55.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.3defc13c.js"),["assets/ResourcesTracker.3defc13c.js","assets/BaseLayout.2eb77e5e.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.c6319089.js","assets/polling.b4e09b79.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.79ce8d70.js"),["assets/Welcome.79ce8d70.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.30c7ded0.js","assets/Logo.20f38e81.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/ContentLayout.ee4f4aa2.js","assets/ContentLayout.ee57a545.css","assets/fetch.5d8f4620.js","assets/Card.f9ea02bd.js","assets/TabPane.5f6856ea.js","assets/workspaceStore.9a1cf89e.js","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/linters.19a229f9.js","assets/asyncComputed.c6319089.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.1a35b242.js"),["assets/App.1a35b242.js","assets/App.vue_vue_type_style_index_0_lang.4fc64d55.js","assets/workspaceStore.9a1cf89e.js","assets/index.73a38d81.js","assets/index.b3bf2b78.css","assets/url.9bc6af1d.js","assets/colorHelpers.2f665bfc.js","assets/PlayerConfigProvider.37c97964.js","assets/index.1fcf1ec5.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.a961dd5c.js.map
