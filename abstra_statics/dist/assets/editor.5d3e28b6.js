var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f as E,g as f,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.10d18eeb.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.c0cb1dfd.js";import"./linters.582c7e19.js";import"./url.d8012159.js";import"./colorHelpers.909a680e.js";import"./asyncComputed.36169bb2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="760c3863-1006-4baa-9ab3-8bb7372c4c58",t._sentryDebugIdIdentifier="sentry-dbid-760c3863-1006-4baa-9ab3-8bb7372c4c58")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"28863373c4d6345e7fa48189b42c5b59f1fe9107",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=E(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=E(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return f(()=>e.value,_),f(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.181c3f3e.js"),["assets/Home.181c3f3e.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.94c7ec51.js"),["assets/Workspace.94c7ec51.js","assets/BaseLayout.b6d6fbb3.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/log.9f0735b9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/PhArrowCounterClockwise.vue.5052fef8.js","assets/PhFilePy.vue.746ac570.js","assets/PhChats.vue.eb0a9e97.js","assets/PhRocket.vue.01b3afba.js","assets/PhPackage.vue.f2614808.js","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/record.b0557e31.js","assets/polling.d338a499.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/PhSignOut.vue.9843ebf6.js","assets/index.fea33973.js","assets/CloseCircleOutlined.28a2cd5d.js","assets/CheckCircleFilled.e9afebfe.js","assets/index.5ec8813d.js","assets/popupNotifcation.59137ce2.js","assets/ai.23144aae.js","assets/uuid.6140049b.js","assets/PhCheckCircle.vue.5209f985.js","assets/PhCopySimple.vue.9a7d5cfb.js","assets/scripts.3401baf4.js","assets/controller.454c8e5c.js","assets/vue-flow-core.a919e8e5.js","assets/validations.f7646e18.js","assets/string.0b68bfce.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/controller.23a56222.js","assets/gateway.4c384311.js","assets/fetch.6f746cc2.js","assets/PhPencil.vue.d072bbca.js","assets/log.cf9bdab9.css","assets/index.82d90a4e.js","assets/Avatar.4faedb8b.js","assets/LoadingOutlined.04bd1083.js","assets/Workspace.a7b9924e.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.279ce78c.js"),["assets/Stages.279ce78c.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/ContentLayout.ca809403.js","assets/ContentLayout.ee57a545.css","assets/CrudView.f5f06895.js","assets/router.6f83ec90.js","assets/Badge.bff8354e.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.744cfc93.js","assets/BookOutlined.0b083dff.js","assets/url.d8012159.js","assets/PhDotsThreeVertical.vue.8c04ead3.js","assets/index.4b617898.js","assets/index.fea33973.js","assets/CrudView.c80c8ede.css","assets/ant-design.2b094f44.js","assets/asyncComputed.36169bb2.js","assets/string.0b68bfce.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/linters.582c7e19.js","assets/scripts.3401baf4.js","assets/record.b0557e31.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/colorHelpers.909a680e.js","assets/ai.23144aae.js","assets/index.5ec8813d.js","assets/validations.f7646e18.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.ab9224f2.js"),["assets/Codebase.ab9224f2.js","assets/SourceCode.92d2170f.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/record.b0557e31.js","assets/polling.d338a499.js","assets/validations.f7646e18.js","assets/string.0b68bfce.js","assets/PhFolder.vue.73c428d1.js","assets/toggleHighContrast.6884fe52.js","assets/toggleHighContrast.30d77c87.css","assets/index.5ec8813d.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/SourceCode.382c465b.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/Logo.b7d81119.css","assets/ContentLayout.ca809403.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.9e29a872.js","assets/popupNotifcation.59137ce2.js","assets/ant-design.2b094f44.js","assets/FilesNavigator.57c0a8d7.css","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhFilePy.vue.746ac570.js","assets/PhPackage.vue.f2614808.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/Codebase.8415832e.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.f4a75236.js"),["assets/WorkflowEditor.f4a75236.js","assets/controller.454c8e5c.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/vue-flow-core.a919e8e5.js","assets/uuid.6140049b.js","assets/validations.f7646e18.js","assets/string.0b68bfce.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/asyncComputed.36169bb2.js","assets/linters.582c7e19.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/record.b0557e31.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.5ec8813d.js","assets/index.82d90a4e.js","assets/vue-flow-minimap.f0d2e684.js","assets/PhArrowCounterClockwise.vue.5052fef8.js","assets/TasksManager.01ea6d67.js","assets/tasksController.331ff7e8.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/scripts.3401baf4.js","assets/polling.d338a499.js","assets/ant-design.2b094f44.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/CollapsePanel.29580a8c.js","assets/index.213d9859.js","assets/TasksManager.c9a90d36.css","assets/index.3066c264.js","assets/Badge.bff8354e.js","assets/index.e4bdc7e8.js","assets/PhArrowDown.vue.ba36dd46.js","assets/WorkflowEditor.3ab2505a.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.2422fbc4.js"),["assets/Tasks.2422fbc4.js","assets/TasksView.vue_vue_type_script_setup_true_lang.3e0722d7.js","assets/tasksController.331ff7e8.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/scripts.3401baf4.js","assets/record.b0557e31.js","assets/polling.d338a499.js","assets/string.0b68bfce.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/ant-design.2b094f44.js","assets/dayjs.8fa0bdbd.js","assets/index.4b617898.js","assets/ContentLayout.ca809403.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.2f741a6f.js"),["assets/Logs.2f741a6f.js","assets/ContentLayout.ca809403.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.82525eb4.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/build.eb23a5da.js","assets/string.0b68bfce.js","assets/tables.a8471d0d.js","assets/record.b0557e31.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1e86d6a6.js","assets/CheckCircleFilled.e9afebfe.js","assets/LoadingOutlined.04bd1083.js","assets/polling.d338a499.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/datetime.aa35d068.js","assets/ant-design.2b094f44.js","assets/index.fea33973.js","assets/index.4b617898.js","assets/dayjs.8fa0bdbd.js","assets/CollapsePanel.29580a8c.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.7f00392d.js"),["assets/PreferencesEditor.7f00392d.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/record.b0557e31.js","assets/PlayerNavbar.10db5012.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/LoadingOutlined.04bd1083.js","assets/PhSignOut.vue.9843ebf6.js","assets/index.23d314bc.js","assets/Avatar.4faedb8b.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.6bbba92b.js","assets/index.e4bdc7e8.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/ContentLayout.ca809403.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.9eaaf330.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.27866211.js"),["assets/RequirementsEditor.27866211.js","assets/ContentLayout.ca809403.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.f5f06895.js","assets/router.6f83ec90.js","assets/Badge.bff8354e.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.744cfc93.js","assets/BookOutlined.0b083dff.js","assets/url.d8012159.js","assets/PhDotsThreeVertical.vue.8c04ead3.js","assets/index.4b617898.js","assets/index.fea33973.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.36169bb2.js","assets/polling.d338a499.js","assets/linters.582c7e19.js","assets/record.b0557e31.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/colorHelpers.909a680e.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.aa836e38.js"),["assets/EnvVarsEditor.aa836e38.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/record.b0557e31.js","assets/ContentLayout.ca809403.js","assets/ContentLayout.ee57a545.css","assets/controller.23a56222.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/fetch.6f746cc2.js","assets/PhPencil.vue.d072bbca.js","assets/View.vue_vue_type_script_setup_true_lang.d4daaa70.js","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.f5f06895.js","assets/router.6f83ec90.js","assets/Badge.bff8354e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.744cfc93.js","assets/BookOutlined.0b083dff.js","assets/PhDotsThreeVertical.vue.8c04ead3.js","assets/index.4b617898.js","assets/index.fea33973.js","assets/CrudView.c80c8ede.css","assets/polling.d338a499.js","assets/index.5ec8813d.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.3d2b12e7.js"),["assets/AccessControlEditor.3d2b12e7.js","assets/ContentLayout.ca809403.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.6f746cc2.js","assets/record.b0557e31.js","assets/repository.6e5efbba.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/asyncComputed.36169bb2.js","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.15a06997.js","assets/index.82d90a4e.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/index.5ec8813d.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/linters.582c7e19.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.ce32af5a.js"),["assets/ProjectLogin.ce32af5a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/Logo.b7d81119.css","assets/BaseLayout.b6d6fbb3.js","assets/BaseLayout.b7a1f19a.css","assets/index.9cbb3dce.js","assets/index.23d314bc.js","assets/Avatar.4faedb8b.js","assets/index.fea33973.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.1c84b5f6.js"),["assets/FormEditor.1c84b5f6.js","assets/FormRunner.a1114524.js","assets/url.d8012159.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/workspaceStore.c0cb1dfd.js","assets/colorHelpers.909a680e.js","assets/Login.vue_vue_type_script_setup_true_lang.9522f88b.js","assets/Logo.9b732acc.js","assets/Logo.b7d81119.css","assets/string.0b68bfce.js","assets/OTPInput.a358828c.js","assets/OTPInput.277362d6.css","assets/index.5ec8813d.js","assets/Login.eaf7209c.css","assets/Steps.c3031fe6.js","assets/index.19a14bbd.js","assets/Steps.4d03c6c1.css","assets/Watermark.320283a6.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.36169bb2.js","assets/linters.582c7e19.js","assets/scripts.3401baf4.js","assets/record.b0557e31.js","assets/workspaces.a88b406c.js","assets/RuntimeCommonSettings.f01dcfbe.js","assets/BaseLayout.b6d6fbb3.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.9f0735b9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/PhArrowCounterClockwise.vue.5052fef8.js","assets/PhFilePy.vue.746ac570.js","assets/PhChats.vue.eb0a9e97.js","assets/PhRocket.vue.01b3afba.js","assets/PhPackage.vue.f2614808.js","assets/polling.d338a499.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/PhSignOut.vue.9843ebf6.js","assets/index.fea33973.js","assets/CloseCircleOutlined.28a2cd5d.js","assets/CheckCircleFilled.e9afebfe.js","assets/popupNotifcation.59137ce2.js","assets/ai.23144aae.js","assets/uuid.6140049b.js","assets/PhCheckCircle.vue.5209f985.js","assets/PhCopySimple.vue.9a7d5cfb.js","assets/controller.454c8e5c.js","assets/vue-flow-core.a919e8e5.js","assets/validations.f7646e18.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/controller.23a56222.js","assets/gateway.4c384311.js","assets/fetch.6f746cc2.js","assets/PhPencil.vue.d072bbca.js","assets/log.cf9bdab9.css","assets/ant-design.2b094f44.js","assets/Avatar.4faedb8b.js","assets/LoadingOutlined.04bd1083.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/SourceCode.92d2170f.js","assets/PhFolder.vue.73c428d1.js","assets/toggleHighContrast.6884fe52.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.01ea6d67.js","assets/tasksController.331ff7e8.js","assets/index.82d90a4e.js","assets/CollapsePanel.29580a8c.js","assets/index.213d9859.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.42e3d5c2.js","assets/Badge.bff8354e.js","assets/RuntimeCommonSettings.24be80d3.css","assets/PlayerNavbar.10db5012.js","assets/index.23d314bc.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.6bbba92b.js","assets/index.e4bdc7e8.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.7a07eba7.js"),["assets/JobEditor.7a07eba7.js","assets/asyncComputed.36169bb2.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/scripts.3401baf4.js","assets/record.b0557e31.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/RuntimeCommonSettings.f01dcfbe.js","assets/BaseLayout.b6d6fbb3.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.9f0735b9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/PhArrowCounterClockwise.vue.5052fef8.js","assets/PhFilePy.vue.746ac570.js","assets/PhChats.vue.eb0a9e97.js","assets/PhRocket.vue.01b3afba.js","assets/PhPackage.vue.f2614808.js","assets/polling.d338a499.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/PhSignOut.vue.9843ebf6.js","assets/index.fea33973.js","assets/CloseCircleOutlined.28a2cd5d.js","assets/CheckCircleFilled.e9afebfe.js","assets/index.5ec8813d.js","assets/popupNotifcation.59137ce2.js","assets/ai.23144aae.js","assets/uuid.6140049b.js","assets/PhCheckCircle.vue.5209f985.js","assets/PhCopySimple.vue.9a7d5cfb.js","assets/controller.454c8e5c.js","assets/vue-flow-core.a919e8e5.js","assets/validations.f7646e18.js","assets/string.0b68bfce.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/controller.23a56222.js","assets/gateway.4c384311.js","assets/fetch.6f746cc2.js","assets/PhPencil.vue.d072bbca.js","assets/log.cf9bdab9.css","assets/ant-design.2b094f44.js","assets/Avatar.4faedb8b.js","assets/LoadingOutlined.04bd1083.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/SourceCode.92d2170f.js","assets/PhFolder.vue.73c428d1.js","assets/toggleHighContrast.6884fe52.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.01ea6d67.js","assets/tasksController.331ff7e8.js","assets/index.82d90a4e.js","assets/CollapsePanel.29580a8c.js","assets/index.213d9859.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.42e3d5c2.js","assets/Badge.bff8354e.js","assets/RuntimeCommonSettings.24be80d3.css","assets/index.556d0acb.js","assets/RunButton.vue_vue_type_script_setup_true_lang.bfdeca9e.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.b39f3ef0.js"),["assets/HookEditor.b39f3ef0.js","assets/asyncComputed.36169bb2.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/scripts.3401baf4.js","assets/record.b0557e31.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/RuntimeCommonSettings.f01dcfbe.js","assets/BaseLayout.b6d6fbb3.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.9f0735b9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/PhArrowCounterClockwise.vue.5052fef8.js","assets/PhFilePy.vue.746ac570.js","assets/PhChats.vue.eb0a9e97.js","assets/PhRocket.vue.01b3afba.js","assets/PhPackage.vue.f2614808.js","assets/polling.d338a499.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/PhSignOut.vue.9843ebf6.js","assets/index.fea33973.js","assets/CloseCircleOutlined.28a2cd5d.js","assets/CheckCircleFilled.e9afebfe.js","assets/index.5ec8813d.js","assets/popupNotifcation.59137ce2.js","assets/ai.23144aae.js","assets/uuid.6140049b.js","assets/PhCheckCircle.vue.5209f985.js","assets/PhCopySimple.vue.9a7d5cfb.js","assets/controller.454c8e5c.js","assets/vue-flow-core.a919e8e5.js","assets/validations.f7646e18.js","assets/string.0b68bfce.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/controller.23a56222.js","assets/gateway.4c384311.js","assets/fetch.6f746cc2.js","assets/PhPencil.vue.d072bbca.js","assets/log.cf9bdab9.css","assets/ant-design.2b094f44.js","assets/Avatar.4faedb8b.js","assets/LoadingOutlined.04bd1083.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/SourceCode.92d2170f.js","assets/PhFolder.vue.73c428d1.js","assets/toggleHighContrast.6884fe52.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.01ea6d67.js","assets/tasksController.331ff7e8.js","assets/index.82d90a4e.js","assets/CollapsePanel.29580a8c.js","assets/index.213d9859.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.42e3d5c2.js","assets/Badge.bff8354e.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.bfdeca9e.js","assets/index.a3a1ee14.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.b24b9fdc.js"),["assets/ScriptEditor.b24b9fdc.js","assets/tasksController.331ff7e8.js","assets/gateway.4c384311.js","assets/popupNotifcation.59137ce2.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/scripts.3401baf4.js","assets/record.b0557e31.js","assets/polling.d338a499.js","assets/string.0b68bfce.js","assets/workspaces.a88b406c.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/RuntimeCommonSettings.f01dcfbe.js","assets/BaseLayout.b6d6fbb3.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.969e3097.js","assets/UnsavedChangesHandler.83c7b6aa.js","assets/ExclamationCircleOutlined.1f106e08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.9f0735b9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.51735809.js","assets/PhArrowCounterClockwise.vue.5052fef8.js","assets/PhFilePy.vue.746ac570.js","assets/PhChats.vue.eb0a9e97.js","assets/PhRocket.vue.01b3afba.js","assets/PhPackage.vue.f2614808.js","assets/PhArrowSquareOut.vue.15a06997.js","assets/PhSignOut.vue.9843ebf6.js","assets/index.fea33973.js","assets/CloseCircleOutlined.28a2cd5d.js","assets/CheckCircleFilled.e9afebfe.js","assets/index.5ec8813d.js","assets/ai.23144aae.js","assets/uuid.6140049b.js","assets/PhCheckCircle.vue.5209f985.js","assets/PhCopySimple.vue.9a7d5cfb.js","assets/controller.454c8e5c.js","assets/vue-flow-core.a919e8e5.js","assets/validations.f7646e18.js","assets/metadata.03c06604.js","assets/PhRobot.vue.3408f397.js","assets/PhWebhooksLogo.vue.58709cee.js","assets/controller.23a56222.js","assets/fetch.6f746cc2.js","assets/PhPencil.vue.d072bbca.js","assets/log.cf9bdab9.css","assets/ant-design.2b094f44.js","assets/Avatar.4faedb8b.js","assets/LoadingOutlined.04bd1083.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/SourceCode.92d2170f.js","assets/PhFolder.vue.73c428d1.js","assets/toggleHighContrast.6884fe52.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.01ea6d67.js","assets/index.82d90a4e.js","assets/CollapsePanel.29580a8c.js","assets/index.213d9859.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.42e3d5c2.js","assets/Badge.bff8354e.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.bfdeca9e.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.db59f483.js"),["assets/ResourcesTracker.db59f483.js","assets/BaseLayout.b6d6fbb3.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.36169bb2.js","assets/polling.d338a499.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.ba57b34a.js"),["assets/Welcome.ba57b34a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.97c060a2.js","assets/Logo.9b732acc.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/Logo.b7d81119.css","assets/ContentLayout.ca809403.js","assets/ContentLayout.ee57a545.css","assets/fetch.6f746cc2.js","assets/Card.32828c9d.js","assets/TabPane.e8515910.js","assets/workspaceStore.c0cb1dfd.js","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/linters.582c7e19.js","assets/asyncComputed.36169bb2.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.8c6c95ae.js"),["assets/App.8c6c95ae.js","assets/App.vue_vue_type_style_index_0_lang.752fbeef.js","assets/workspaceStore.c0cb1dfd.js","assets/index.10d18eeb.js","assets/index.ae14d18e.css","assets/url.d8012159.js","assets/colorHelpers.909a680e.js","assets/PlayerConfigProvider.6bbba92b.js","assets/index.e4bdc7e8.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.5d3e28b6.js.map
