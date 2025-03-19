var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as r,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.5c5ccd33.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.df2419ae.js";import"./linters.1955fed7.js";import"./url.86f687ce.js";import"./colorHelpers.67b25edf.js";import"./asyncComputed.c65e5e5a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7f081751-df65-4ed6-82b1-0be1993f19ec",t._sentryDebugIdIdentifier="sentry-dbid-7f081751-df65-4ed6-82b1-0be1993f19ec")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const re={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"b06deae0b8d4c6b0b3b34928aed51ce40f983d25",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||re[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var a,i;return(i=(a=e.value)==null?void 0:a.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async a=>{const i=await t.createLogin(a);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async a=>{if(a&&"info"in a){const{email:i,intercomHash:P}=a.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>r(()=>import("./Home.324d37b0.js"),["assets/Home.324d37b0.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>r(()=>import("./Workspace.cb69d168.js"),["assets/Workspace.cb69d168.js","assets/BaseLayout.1e5d8882.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.765c4859.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/NavbarControls.681c64c9.js","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/index.6bc80892.js","assets/CloseCircleOutlined.a83f7a83.js","assets/index.b35e6fea.js","assets/workspaces.f590fd06.js","assets/record.d9ffc978.js","assets/popupNotifcation.f6cf2f35.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/PhChats.vue.46d44efe.js","assets/polling.27451ab7.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/Logo.4051fe89.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.bdcf21ec.js","assets/PhIdentificationBadge.vue.7275394b.js","assets/PhCaretRight.vue.98e85d16.js","assets/index.5c642e5e.js","assets/index.afb00d42.js","assets/Avatar.086f6236.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>r(()=>import("./Stages.f5226896.js"),["assets/Stages.f5226896.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/ContentLayout.58fe997e.js","assets/ContentLayout.ee57a545.css","assets/CrudView.75b2cbc8.js","assets/router.de82840a.js","assets/Badge.fd1d6139.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/url.86f687ce.js","assets/PhDotsThreeVertical.vue.b24cdd02.js","assets/index.f92ba761.js","assets/index.6bc80892.js","assets/CrudView.c80c8ede.css","assets/ant-design.4f8a0a2a.js","assets/asyncComputed.c65e5e5a.js","assets/string.a5d8a0e0.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/scripts.edd675ac.js","assets/record.d9ffc978.js","assets/linters.1955fed7.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/colorHelpers.67b25edf.js","assets/ai.af039a9c.js","assets/index.b35e6fea.js","assets/PhWebhooksLogo.vue.828f61b1.js","assets/validations.65d918c3.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>r(()=>import("./WorkflowEditor.cd520040.js"),["assets/WorkflowEditor.cd520040.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.8f4567a1.js","assets/validations.65d918c3.js","assets/string.a5d8a0e0.js","assets/uuid.767b1625.js","assets/metadata.5f933b40.js","assets/PhRobot.vue.1cb48a68.js","assets/PhWebhooksLogo.vue.828f61b1.js","assets/asyncComputed.c65e5e5a.js","assets/linters.1955fed7.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/record.d9ffc978.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.ebd5d6bb.js","assets/index.b35e6fea.js","assets/PhArrowCounterClockwise.vue.bdcf21ec.js","assets/TasksManager.6f7e6144.js","assets/tasksController.9f99c36c.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/scripts.edd675ac.js","assets/polling.27451ab7.js","assets/ant-design.4f8a0a2a.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/Card.8c965263.js","assets/TabPane.bf8b1b6d.js","assets/CollapsePanel.b67cb0f1.js","assets/index.a5b6a1c4.js","assets/TasksManager.c9a90d36.css","assets/index.c0f74f26.js","assets/Badge.fd1d6139.js","assets/index.859a38d6.js","assets/PhArrowDown.vue.2362c934.js","assets/WorkflowEditor.0f37f7c9.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>r(()=>import("./Tasks.6f33ed09.js"),["assets/Tasks.6f33ed09.js","assets/TasksView.vue_vue_type_script_setup_true_lang.12fb42d7.js","assets/tasksController.9f99c36c.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/scripts.edd675ac.js","assets/record.d9ffc978.js","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/polling.27451ab7.js","assets/string.a5d8a0e0.js","assets/metadata.5f933b40.js","assets/PhRobot.vue.1cb48a68.js","assets/PhWebhooksLogo.vue.828f61b1.js","assets/ant-design.4f8a0a2a.js","assets/dayjs.5f9545a3.js","assets/index.f92ba761.js","assets/ContentLayout.58fe997e.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>r(()=>import("./Logs.f31ce347.js"),["assets/Logs.f31ce347.js","assets/ContentLayout.58fe997e.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.4680a6b8.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/build.79899cbc.js","assets/string.a5d8a0e0.js","assets/tables.647240ad.js","assets/record.d9ffc978.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f241dea6.js","assets/LoadingOutlined.f059a7d0.js","assets/polling.27451ab7.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/datetime.d17fbd52.js","assets/ant-design.4f8a0a2a.js","assets/index.6bc80892.js","assets/index.f92ba761.js","assets/dayjs.5f9545a3.js","assets/CollapsePanel.b67cb0f1.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>r(()=>import("./PreferencesEditor.0a2d9818.js"),["assets/PreferencesEditor.0a2d9818.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/record.d9ffc978.js","assets/PlayerNavbar.a66ff938.js","assets/metadata.5f933b40.js","assets/PhRobot.vue.1cb48a68.js","assets/PhWebhooksLogo.vue.828f61b1.js","assets/LoadingOutlined.f059a7d0.js","assets/PhSignOut.vue.765c4859.js","assets/index.afb00d42.js","assets/Avatar.086f6236.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.34100152.js","assets/index.859a38d6.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/ContentLayout.58fe997e.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.d82be3b2.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>r(()=>import("./RequirementsEditor.b988ff46.js"),["assets/RequirementsEditor.b988ff46.js","assets/ContentLayout.58fe997e.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.75b2cbc8.js","assets/router.de82840a.js","assets/Badge.fd1d6139.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/url.86f687ce.js","assets/PhDotsThreeVertical.vue.b24cdd02.js","assets/index.f92ba761.js","assets/index.6bc80892.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c65e5e5a.js","assets/polling.27451ab7.js","assets/linters.1955fed7.js","assets/record.d9ffc978.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/colorHelpers.67b25edf.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>r(()=>import("./EnvVarsEditor.4bcbb4bc.js"),["assets/EnvVarsEditor.4bcbb4bc.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/record.d9ffc978.js","assets/ContentLayout.58fe997e.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.fc0cc55d.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/fetch.8d6d9e3c.js","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.75b2cbc8.js","assets/router.de82840a.js","assets/Badge.fd1d6139.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/PhDotsThreeVertical.vue.b24cdd02.js","assets/index.f92ba761.js","assets/index.6bc80892.js","assets/CrudView.c80c8ede.css","assets/polling.27451ab7.js","assets/PhPencil.vue.0f0d8534.js","assets/index.b35e6fea.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>r(()=>import("./AccessControlEditor.1b3349b0.js"),["assets/AccessControlEditor.1b3349b0.js","assets/ContentLayout.58fe997e.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.8d6d9e3c.js","assets/record.d9ffc978.js","assets/repository.2e6af435.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/asyncComputed.c65e5e5a.js","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.c560099f.js","assets/index.ebd5d6bb.js","assets/metadata.5f933b40.js","assets/PhRobot.vue.1cb48a68.js","assets/PhWebhooksLogo.vue.828f61b1.js","assets/index.b35e6fea.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/linters.1955fed7.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>r(()=>import("./ProjectLogin.7cc2e3f8.js"),["assets/ProjectLogin.7cc2e3f8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/Logo.4051fe89.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.1e5d8882.js","assets/BaseLayout.b7a1f19a.css","assets/index.5c642e5e.js","assets/index.afb00d42.js","assets/Avatar.086f6236.js","assets/index.6bc80892.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>r(()=>import("./FormEditor.6c0d16a3.js"),["assets/FormEditor.6c0d16a3.js","assets/FormRunner.bf693314.js","assets/url.86f687ce.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/workspaceStore.df2419ae.js","assets/colorHelpers.67b25edf.js","assets/Login.vue_vue_type_script_setup_true_lang.a73bfda1.js","assets/Logo.4051fe89.js","assets/Logo.8bf94625.css","assets/string.a5d8a0e0.js","assets/OTPInput.3c70f51f.js","assets/OTPInput.277362d6.css","assets/index.b35e6fea.js","assets/Login.ae1154ae.css","assets/Steps.8647b1f0.js","assets/index.24babb54.js","assets/Steps.4d03c6c1.css","assets/Watermark.250bc59d.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.c65e5e5a.js","assets/scripts.edd675ac.js","assets/record.d9ffc978.js","assets/linters.1955fed7.js","assets/workspaces.f590fd06.js","assets/RuntimeCommonSettings.b94f7b39.js","assets/BaseLayout.1e5d8882.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.767b1625.js","assets/NavbarControls.681c64c9.js","assets/index.6bc80892.js","assets/CloseCircleOutlined.a83f7a83.js","assets/popupNotifcation.f6cf2f35.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/PhChats.vue.46d44efe.js","assets/polling.27451ab7.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/ant-design.4f8a0a2a.js","assets/ai.af039a9c.js","assets/PhCheckCircle.vue.591f8b8c.js","assets/PhCopySimple.vue.d2c6ea2c.js","assets/Avatar.086f6236.js","assets/LoadingOutlined.f059a7d0.js","assets/Card.8c965263.js","assets/TabPane.bf8b1b6d.js","assets/PhCaretRight.vue.98e85d16.js","assets/Badge.fd1d6139.js","assets/PhFolder.vue.c78bff35.js","assets/PhPencil.vue.0f0d8534.js","assets/validations.65d918c3.js","assets/toggleHighContrast.4a3bb9d8.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.6f7e6144.js","assets/tasksController.9f99c36c.js","assets/gateway.86b98780.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/index.ebd5d6bb.js","assets/CollapsePanel.b67cb0f1.js","assets/index.a5b6a1c4.js","assets/TasksManager.c9a90d36.css","assets/index.5c642e5e.js","assets/index.afb00d42.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/PlayerNavbar.a66ff938.js","assets/metadata.5f933b40.js","assets/PhRobot.vue.1cb48a68.js","assets/PhWebhooksLogo.vue.828f61b1.js","assets/PhSignOut.vue.765c4859.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.34100152.js","assets/index.859a38d6.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>r(()=>import("./JobEditor.c40ff495.js"),["assets/JobEditor.c40ff495.js","assets/asyncComputed.c65e5e5a.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/scripts.edd675ac.js","assets/record.d9ffc978.js","assets/linters.1955fed7.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/RuntimeCommonSettings.b94f7b39.js","assets/BaseLayout.1e5d8882.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.767b1625.js","assets/NavbarControls.681c64c9.js","assets/index.6bc80892.js","assets/CloseCircleOutlined.a83f7a83.js","assets/index.b35e6fea.js","assets/popupNotifcation.f6cf2f35.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/PhChats.vue.46d44efe.js","assets/polling.27451ab7.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/Logo.4051fe89.js","assets/Logo.8bf94625.css","assets/ant-design.4f8a0a2a.js","assets/ai.af039a9c.js","assets/PhCheckCircle.vue.591f8b8c.js","assets/PhCopySimple.vue.d2c6ea2c.js","assets/Avatar.086f6236.js","assets/LoadingOutlined.f059a7d0.js","assets/Card.8c965263.js","assets/TabPane.bf8b1b6d.js","assets/PhCaretRight.vue.98e85d16.js","assets/Badge.fd1d6139.js","assets/PhFolder.vue.c78bff35.js","assets/PhPencil.vue.0f0d8534.js","assets/validations.65d918c3.js","assets/string.a5d8a0e0.js","assets/toggleHighContrast.4a3bb9d8.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.6f7e6144.js","assets/tasksController.9f99c36c.js","assets/gateway.86b98780.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/index.ebd5d6bb.js","assets/CollapsePanel.b67cb0f1.js","assets/index.a5b6a1c4.js","assets/TasksManager.c9a90d36.css","assets/index.5c642e5e.js","assets/index.afb00d42.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/index.97868068.js","assets/RunButton.vue_vue_type_script_setup_true_lang.8c2423db.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>r(()=>import("./HookEditor.b4f7641c.js"),["assets/HookEditor.b4f7641c.js","assets/asyncComputed.c65e5e5a.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/scripts.edd675ac.js","assets/record.d9ffc978.js","assets/linters.1955fed7.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/RuntimeCommonSettings.b94f7b39.js","assets/BaseLayout.1e5d8882.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.767b1625.js","assets/NavbarControls.681c64c9.js","assets/index.6bc80892.js","assets/CloseCircleOutlined.a83f7a83.js","assets/index.b35e6fea.js","assets/popupNotifcation.f6cf2f35.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/PhChats.vue.46d44efe.js","assets/polling.27451ab7.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/Logo.4051fe89.js","assets/Logo.8bf94625.css","assets/ant-design.4f8a0a2a.js","assets/ai.af039a9c.js","assets/PhCheckCircle.vue.591f8b8c.js","assets/PhCopySimple.vue.d2c6ea2c.js","assets/Avatar.086f6236.js","assets/LoadingOutlined.f059a7d0.js","assets/Card.8c965263.js","assets/TabPane.bf8b1b6d.js","assets/PhCaretRight.vue.98e85d16.js","assets/Badge.fd1d6139.js","assets/PhFolder.vue.c78bff35.js","assets/PhPencil.vue.0f0d8534.js","assets/validations.65d918c3.js","assets/string.a5d8a0e0.js","assets/toggleHighContrast.4a3bb9d8.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.6f7e6144.js","assets/tasksController.9f99c36c.js","assets/gateway.86b98780.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/index.ebd5d6bb.js","assets/CollapsePanel.b67cb0f1.js","assets/index.a5b6a1c4.js","assets/TasksManager.c9a90d36.css","assets/index.5c642e5e.js","assets/index.afb00d42.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.8c2423db.js","assets/index.65451b53.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>r(()=>import("./ScriptEditor.0114d096.js"),["assets/ScriptEditor.0114d096.js","assets/tasksController.9f99c36c.js","assets/gateway.86b98780.js","assets/popupNotifcation.f6cf2f35.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/scripts.edd675ac.js","assets/record.d9ffc978.js","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/polling.27451ab7.js","assets/string.a5d8a0e0.js","assets/workspaces.f590fd06.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/RuntimeCommonSettings.b94f7b39.js","assets/BaseLayout.1e5d8882.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.f47038ae.js","assets/UnsavedChangesHandler.2926d07f.js","assets/ExclamationCircleOutlined.54d9689b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.767b1625.js","assets/NavbarControls.681c64c9.js","assets/index.6bc80892.js","assets/CloseCircleOutlined.a83f7a83.js","assets/index.b35e6fea.js","assets/PhArrowSquareOut.vue.c560099f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9eee82c3.js","assets/BookOutlined.b8ce3ab2.js","assets/PhChats.vue.46d44efe.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/Logo.4051fe89.js","assets/Logo.8bf94625.css","assets/ant-design.4f8a0a2a.js","assets/ai.af039a9c.js","assets/PhCheckCircle.vue.591f8b8c.js","assets/PhCopySimple.vue.d2c6ea2c.js","assets/Avatar.086f6236.js","assets/LoadingOutlined.f059a7d0.js","assets/Card.8c965263.js","assets/TabPane.bf8b1b6d.js","assets/PhCaretRight.vue.98e85d16.js","assets/Badge.fd1d6139.js","assets/PhFolder.vue.c78bff35.js","assets/PhPencil.vue.0f0d8534.js","assets/validations.65d918c3.js","assets/toggleHighContrast.4a3bb9d8.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.6f7e6144.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1eec2d6d.js","assets/index.ebd5d6bb.js","assets/CollapsePanel.b67cb0f1.js","assets/index.a5b6a1c4.js","assets/TasksManager.c9a90d36.css","assets/index.5c642e5e.js","assets/index.afb00d42.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.8c2423db.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>r(()=>import("./ResourcesTracker.648e1c70.js"),["assets/ResourcesTracker.648e1c70.js","assets/BaseLayout.1e5d8882.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.c65e5e5a.js","assets/polling.27451ab7.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>r(()=>import("./Welcome.16abfa3e.js"),["assets/Welcome.16abfa3e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dd22affe.js","assets/Logo.4051fe89.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.58fe997e.js","assets/ContentLayout.ee57a545.css","assets/fetch.8d6d9e3c.js","assets/Card.8c965263.js","assets/TabPane.bf8b1b6d.js","assets/workspaceStore.df2419ae.js","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/linters.1955fed7.js","assets/asyncComputed.c65e5e5a.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./App.caad63f3.js"),["assets/App.caad63f3.js","assets/App.vue_vue_type_style_index_0_lang.ed1a052d.js","assets/workspaceStore.df2419ae.js","assets/index.5c5ccd33.js","assets/index.ae14d18e.css","assets/url.86f687ce.js","assets/colorHelpers.67b25edf.js","assets/PlayerConfigProvider.34100152.js","assets/index.859a38d6.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.234f667d.js.map
