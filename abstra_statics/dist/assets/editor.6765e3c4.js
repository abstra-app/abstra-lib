var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.f0b92b7e.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.ad60b079.js";import"./linters.c97d2b7c.js";import"./url.a5f3da23.js";import"./colorHelpers.4c8a49fb.js";import"./asyncComputed.451e9a72.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="03cd3074-a972-444d-9bde-7c037a3d1378",t._sentryDebugIdIdentifier="sentry-dbid-03cd3074-a972-444d-9bde-7c037a3d1378")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"e7af71b5c164b80a94c820faacb376eabdf75148",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.f3a25df8.js"),["assets/Home.f3a25df8.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.6ea505b5.js"),["assets/Workspace.6ea505b5.js","assets/BaseLayout.a0a1a562.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.473b638b.js","assets/NavbarControls.5f64e7d5.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/index.33db5ee2.js","assets/CloseCircleOutlined.2d88764d.js","assets/index.a71dc8cb.js","assets/workspaces.45d829e9.js","assets/record.aae20370.js","assets/popupNotifcation.1a1aff4d.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/PhChats.vue.4fb761eb.js","assets/polling.9459178b.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.585cbc71.js","assets/PhIdentificationBadge.vue.cf6d5ec4.js","assets/PhCaretRight.vue.fd5dad3e.js","assets/index.54c45960.js","assets/index.38fab6db.js","assets/Avatar.e9d19919.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.d4604aaf.js"),["assets/Stages.d4604aaf.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/ContentLayout.728ae941.js","assets/ContentLayout.ee57a545.css","assets/CrudView.fdf2a3ee.js","assets/router.b636156b.js","assets/Badge.503c1d1d.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/url.a5f3da23.js","assets/PhDotsThreeVertical.vue.0215e6b6.js","assets/index.26805589.js","assets/index.33db5ee2.js","assets/CrudView.c80c8ede.css","assets/ant-design.0728f411.js","assets/asyncComputed.451e9a72.js","assets/string.1b82e875.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/scripts.bf6689bc.js","assets/record.aae20370.js","assets/linters.c97d2b7c.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/colorHelpers.4c8a49fb.js","assets/ai.c83ccd73.js","assets/index.a71dc8cb.js","assets/PhWebhooksLogo.vue.4b8dd4f2.js","assets/validations.6db20a24.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.1bc52d24.js"),["assets/WorkflowEditor.1bc52d24.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/validations.6db20a24.js","assets/string.1b82e875.js","assets/uuid.012555d1.js","assets/metadata.b17b5a4e.js","assets/PhWebhooksLogo.vue.4b8dd4f2.js","assets/asyncComputed.451e9a72.js","assets/linters.c97d2b7c.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/record.aae20370.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.9ee52e91.js","assets/PhArrowCounterClockwise.vue.585cbc71.js","assets/TasksManager.0b1f33b4.js","assets/tasksController.3c17e23f.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/polling.9459178b.js","assets/scripts.bf6689bc.js","assets/ant-design.0728f411.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.966e6b97.js","assets/Card.a73060cd.js","assets/TabPane.51ef539a.js","assets/CollapsePanel.c9143ab7.js","assets/index.10f3ce73.js","assets/TasksManager.824ac91c.css","assets/index.ab0f2b96.js","assets/Badge.503c1d1d.js","assets/index.a92924fd.js","assets/PhArrowDown.vue.679f7aca.js","assets/WorkflowEditor.9b774473.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.64220833.js"),["assets/Tasks.64220833.js","assets/TasksView.vue_vue_type_script_setup_true_lang.a4c63a05.js","assets/tasksController.3c17e23f.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/polling.9459178b.js","assets/string.1b82e875.js","assets/scripts.bf6689bc.js","assets/record.aae20370.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/metadata.b17b5a4e.js","assets/PhWebhooksLogo.vue.4b8dd4f2.js","assets/ant-design.0728f411.js","assets/dayjs.15e0cd57.js","assets/index.26805589.js","assets/ContentLayout.728ae941.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.41f96afd.js"),["assets/Logs.41f96afd.js","assets/ContentLayout.728ae941.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.3f4f5169.js","assets/string.1b82e875.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/build.e0c06e13.js","assets/tables.cf074385.js","assets/record.aae20370.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e8df8938.js","assets/LoadingOutlined.67ec2f2e.js","assets/polling.9459178b.js","assets/datetime.99dbb464.js","assets/ant-design.0728f411.js","assets/index.33db5ee2.js","assets/index.26805589.js","assets/dayjs.15e0cd57.js","assets/CollapsePanel.c9143ab7.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.cbf1ea92.js"),["assets/PreferencesEditor.cbf1ea92.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/record.aae20370.js","assets/PlayerNavbar.015aba66.js","assets/metadata.b17b5a4e.js","assets/PhWebhooksLogo.vue.4b8dd4f2.js","assets/LoadingOutlined.67ec2f2e.js","assets/PhSignOut.vue.473b638b.js","assets/index.38fab6db.js","assets/Avatar.e9d19919.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.1d7c2ccb.js","assets/index.a92924fd.js","assets/PlayerConfigProvider.cb445f57.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.966e6b97.js","assets/ContentLayout.728ae941.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.342f3479.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.01666846.js"),["assets/RequirementsEditor.01666846.js","assets/ContentLayout.728ae941.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.fdf2a3ee.js","assets/router.b636156b.js","assets/Badge.503c1d1d.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/url.a5f3da23.js","assets/PhDotsThreeVertical.vue.0215e6b6.js","assets/index.26805589.js","assets/index.33db5ee2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.451e9a72.js","assets/polling.9459178b.js","assets/linters.c97d2b7c.js","assets/record.aae20370.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/colorHelpers.4c8a49fb.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.a2c8016d.js"),["assets/EnvVarsEditor.a2c8016d.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/record.aae20370.js","assets/ContentLayout.728ae941.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.3165243c.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/fetch.d7470d5a.js","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.fdf2a3ee.js","assets/router.b636156b.js","assets/Badge.503c1d1d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/PhDotsThreeVertical.vue.0215e6b6.js","assets/index.26805589.js","assets/index.33db5ee2.js","assets/CrudView.c80c8ede.css","assets/polling.9459178b.js","assets/PhPencil.vue.8b609b8e.js","assets/index.a71dc8cb.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.5e43faf8.js"),["assets/AccessControlEditor.5e43faf8.js","assets/ContentLayout.728ae941.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.d7470d5a.js","assets/record.aae20370.js","assets/repository.c3655024.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/asyncComputed.451e9a72.js","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/index.9ee52e91.js","assets/metadata.b17b5a4e.js","assets/PhWebhooksLogo.vue.4b8dd4f2.js","assets/index.a71dc8cb.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/linters.c97d2b7c.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.fe98d670.js"),["assets/ProjectLogin.fe98d670.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/BaseLayout.a0a1a562.js","assets/BaseLayout.b7a1f19a.css","assets/index.54c45960.js","assets/index.38fab6db.js","assets/Avatar.e9d19919.js","assets/index.33db5ee2.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.ebc4327c.js"),["assets/FormEditor.ebc4327c.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/BaseLayout.a0a1a562.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.e31701cc.js","assets/scripts.bf6689bc.js","assets/record.aae20370.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/validations.6db20a24.js","assets/string.1b82e875.js","assets/uuid.012555d1.js","assets/PhCaretRight.vue.fd5dad3e.js","assets/Badge.503c1d1d.js","assets/LoadingOutlined.67ec2f2e.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/polling.9459178b.js","assets/PhFolder.vue.8d8ffc2d.js","assets/PhPencil.vue.8b609b8e.js","assets/toggleHighContrast.59528160.js","assets/toggleHighContrast.30d77c87.css","assets/index.a71dc8cb.js","assets/Card.a73060cd.js","assets/TabPane.51ef539a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/Logo.46d5120c.css","assets/ai.c83ccd73.js","assets/PhCheckCircle.vue.78db7197.js","assets/PhCopySimple.vue.f1ff6117.js","assets/Avatar.e9d19919.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.570b6b78.js","assets/Login.vue_vue_type_script_setup_true_lang.e26664ce.js","assets/CircularLoading.765edb2a.js","assets/CircularLoading.1a558a0d.css","assets/index.a92924fd.js","assets/Login.28df3844.css","assets/Steps.e1a34495.js","assets/index.d9ccce1d.js","assets/Steps.4d03c6c1.css","assets/Watermark.9987a4ce.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerNavbar.015aba66.js","assets/metadata.b17b5a4e.js","assets/PhWebhooksLogo.vue.4b8dd4f2.js","assets/PhSignOut.vue.473b638b.js","assets/index.38fab6db.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.1d7c2ccb.js","assets/PlayerConfigProvider.cb445f57.css","assets/index.33db5ee2.js","assets/TasksManager.0b1f33b4.js","assets/tasksController.3c17e23f.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/ant-design.0728f411.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.966e6b97.js","assets/index.9ee52e91.js","assets/CollapsePanel.c9143ab7.js","assets/index.10f3ce73.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.5f64e7d5.js","assets/CloseCircleOutlined.2d88764d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/PhChats.vue.4fb761eb.js","assets/NavbarControls.e9c97288.css","assets/index.54c45960.js","assets/FormEditor.67c0b6ec.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.df4c6319.js"),["assets/JobEditor.df4c6319.js","assets/BaseLayout.a0a1a562.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.e31701cc.js","assets/scripts.bf6689bc.js","assets/record.aae20370.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/validations.6db20a24.js","assets/string.1b82e875.js","assets/uuid.012555d1.js","assets/PhCaretRight.vue.fd5dad3e.js","assets/Badge.503c1d1d.js","assets/LoadingOutlined.67ec2f2e.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/polling.9459178b.js","assets/PhFolder.vue.8d8ffc2d.js","assets/PhPencil.vue.8b609b8e.js","assets/toggleHighContrast.59528160.js","assets/toggleHighContrast.30d77c87.css","assets/index.a71dc8cb.js","assets/Card.a73060cd.js","assets/TabPane.51ef539a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/Logo.46d5120c.css","assets/ai.c83ccd73.js","assets/PhCheckCircle.vue.78db7197.js","assets/PhCopySimple.vue.f1ff6117.js","assets/Avatar.e9d19919.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.2bf43d5f.js","assets/index.33db5ee2.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0e68375f.js","assets/TasksManager.0b1f33b4.js","assets/tasksController.3c17e23f.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/ant-design.0728f411.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.966e6b97.js","assets/index.9ee52e91.js","assets/CollapsePanel.c9143ab7.js","assets/index.10f3ce73.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.5f64e7d5.js","assets/CloseCircleOutlined.2d88764d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/PhChats.vue.4fb761eb.js","assets/NavbarControls.e9c97288.css","assets/index.54c45960.js","assets/index.38fab6db.js","assets/JobEditor.07f0c0ea.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.3b407668.js"),["assets/HookEditor.3b407668.js","assets/BaseLayout.a0a1a562.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.e31701cc.js","assets/scripts.bf6689bc.js","assets/record.aae20370.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/validations.6db20a24.js","assets/string.1b82e875.js","assets/uuid.012555d1.js","assets/PhCaretRight.vue.fd5dad3e.js","assets/Badge.503c1d1d.js","assets/LoadingOutlined.67ec2f2e.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/polling.9459178b.js","assets/PhFolder.vue.8d8ffc2d.js","assets/PhPencil.vue.8b609b8e.js","assets/toggleHighContrast.59528160.js","assets/toggleHighContrast.30d77c87.css","assets/index.a71dc8cb.js","assets/Card.a73060cd.js","assets/TabPane.51ef539a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/Logo.46d5120c.css","assets/ai.c83ccd73.js","assets/PhCheckCircle.vue.78db7197.js","assets/PhCopySimple.vue.f1ff6117.js","assets/Avatar.e9d19919.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0e68375f.js","assets/index.c7877b92.js","assets/CollapsePanel.c9143ab7.js","assets/index.33db5ee2.js","assets/index.9ee52e91.js","assets/TasksManager.0b1f33b4.js","assets/tasksController.3c17e23f.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/ant-design.0728f411.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.966e6b97.js","assets/index.10f3ce73.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.5f64e7d5.js","assets/CloseCircleOutlined.2d88764d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/PhChats.vue.4fb761eb.js","assets/NavbarControls.e9c97288.css","assets/index.54c45960.js","assets/index.38fab6db.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.07980f85.js"),["assets/ScriptEditor.07980f85.js","assets/BaseLayout.a0a1a562.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.e31701cc.js","assets/scripts.bf6689bc.js","assets/record.aae20370.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/validations.6db20a24.js","assets/string.1b82e875.js","assets/uuid.012555d1.js","assets/PhCaretRight.vue.fd5dad3e.js","assets/Badge.503c1d1d.js","assets/LoadingOutlined.67ec2f2e.js","assets/workspaces.45d829e9.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/polling.9459178b.js","assets/PhFolder.vue.8d8ffc2d.js","assets/PhPencil.vue.8b609b8e.js","assets/toggleHighContrast.59528160.js","assets/toggleHighContrast.30d77c87.css","assets/index.a71dc8cb.js","assets/Card.a73060cd.js","assets/TabPane.51ef539a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/Logo.46d5120c.css","assets/ai.c83ccd73.js","assets/PhCheckCircle.vue.78db7197.js","assets/PhCopySimple.vue.f1ff6117.js","assets/Avatar.e9d19919.js","assets/SmartChat.2e25eb4b.css","assets/SaveButton.1003d0c7.js","assets/UnsavedChangesHandler.6b99a65e.js","assets/ExclamationCircleOutlined.7ab24bca.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/tasksController.3c17e23f.js","assets/gateway.dd2bcb1f.js","assets/popupNotifcation.1a1aff4d.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0e68375f.js","assets/TasksManager.0b1f33b4.js","assets/ant-design.0728f411.js","assets/PhArrowSquareOut.vue.2cb9ddbc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.966e6b97.js","assets/index.9ee52e91.js","assets/CollapsePanel.c9143ab7.js","assets/index.10f3ce73.js","assets/TasksManager.824ac91c.css","assets/NavbarControls.5f64e7d5.js","assets/index.33db5ee2.js","assets/CloseCircleOutlined.2d88764d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js","assets/BookOutlined.109c3ef4.js","assets/PhChats.vue.4fb761eb.js","assets/NavbarControls.e9c97288.css","assets/index.54c45960.js","assets/index.38fab6db.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.d351a679.js"),["assets/ResourcesTracker.d351a679.js","assets/BaseLayout.a0a1a562.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.451e9a72.js","assets/polling.9459178b.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.c87bb15b.js"),["assets/Welcome.c87bb15b.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.26ffa16c.js","assets/Logo.69d78281.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/Logo.46d5120c.css","assets/ContentLayout.728ae941.js","assets/ContentLayout.ee57a545.css","assets/fetch.d7470d5a.js","assets/Card.a73060cd.js","assets/TabPane.51ef539a.js","assets/workspaceStore.ad60b079.js","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/linters.c97d2b7c.js","assets/asyncComputed.451e9a72.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.2a077769.js"),["assets/App.2a077769.js","assets/App.vue_vue_type_style_index_0_lang.4369cb54.js","assets/workspaceStore.ad60b079.js","assets/index.f0b92b7e.js","assets/index.b3bf2b78.css","assets/url.a5f3da23.js","assets/colorHelpers.4c8a49fb.js","assets/PlayerConfigProvider.1d7c2ccb.js","assets/index.a92924fd.js","assets/PlayerConfigProvider.cb445f57.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.6765e3c4.js.map
