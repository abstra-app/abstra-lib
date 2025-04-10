var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.5572dd7e.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.911f36b5.js";import"./linters.5d4f4193.js";import"./url.d80febd7.js";import"./colorHelpers.b1f37418.js";import"./asyncComputed.ec375dc7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="286ce85c-d9f8-4bb4-a0b5-2a95b8e21b4a",t._sentryDebugIdIdentifier="sentry-dbid-286ce85c-d9f8-4bb4-a0b5-2a95b8e21b4a")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"49c8e4ff9c48a0851305eff4985cbb12fdfe4fe6",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.61d47c84.js"),["assets/Home.61d47c84.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.afc6cfde.js"),["assets/Workspace.afc6cfde.js","assets/BaseLayout.bd87fbab.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.0ef21df7.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/log.51595ca7.js","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/index.9f36e6e9.js","assets/CloseCircleOutlined.350b3cab.js","assets/index.39057a1e.js","assets/workspaces.bd759025.js","assets/record.b39e4f7d.js","assets/popupNotifcation.0dd61396.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/PhChats.vue.492f009d.js","assets/polling.2c36bf65.js","assets/ai.6e7ef10a.js","assets/uuid.581ddf8f.js","assets/PhCheckCircle.vue.8ac3d648.js","assets/PhCopySimple.vue.bbc0f891.js","assets/scripts.d04c162f.js","assets/controller.95fec66e.js","assets/vue-flow-core.274e6d98.js","assets/validations.e28306b4.js","assets/string.21e44731.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/controller.3825979b.js","assets/gateway.eaf0365c.js","assets/fetch.6614bd02.js","assets/PhPencil.vue.5a3116a4.js","assets/log.3c05ab63.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/Logo.70a49b64.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.fe52520e.js","assets/PhIdentificationBadge.vue.97f6f674.js","assets/index.8df74d74.js","assets/Avatar.4c9fea1d.js","assets/LoadingOutlined.cfab984f.js","assets/index.7d23e19f.js","assets/index.b832bc30.js","assets/Workspace.dbd29a7f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.725d1b17.js"),["assets/Stages.725d1b17.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/ContentLayout.02f12831.js","assets/ContentLayout.ee57a545.css","assets/CrudView.7a3f5669.js","assets/router.6bb78aa3.js","assets/Badge.d7e06fdc.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/url.d80febd7.js","assets/PhDotsThreeVertical.vue.1c8b59ab.js","assets/index.edf0c178.js","assets/index.9f36e6e9.js","assets/CrudView.c80c8ede.css","assets/ant-design.0882cf6b.js","assets/asyncComputed.ec375dc7.js","assets/string.21e44731.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/linters.5d4f4193.js","assets/scripts.d04c162f.js","assets/record.b39e4f7d.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/colorHelpers.b1f37418.js","assets/ai.6e7ef10a.js","assets/index.39057a1e.js","assets/validations.e28306b4.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.f7f7eece.js"),["assets/Codebase.f7f7eece.js","assets/SourceCode.0286154a.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/record.b39e4f7d.js","assets/polling.2c36bf65.js","assets/validations.e28306b4.js","assets/string.21e44731.js","assets/PhFolder.vue.868ca452.js","assets/toggleHighContrast.45c0353c.js","assets/toggleHighContrast.30d77c87.css","assets/index.39057a1e.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/SourceCode.1cb3f731.css","assets/ContentLayout.02f12831.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.194fcfc9.js","assets/popupNotifcation.0dd61396.js","assets/ant-design.0882cf6b.js","assets/FilesNavigator.ebc9fb1c.css","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/Codebase.8ba12bca.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.51dfd690.js"),["assets/WorkflowEditor.51dfd690.js","assets/controller.95fec66e.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/vue-flow-core.274e6d98.js","assets/uuid.581ddf8f.js","assets/validations.e28306b4.js","assets/string.21e44731.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/asyncComputed.ec375dc7.js","assets/linters.5d4f4193.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/record.b39e4f7d.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.39057a1e.js","assets/index.8df74d74.js","assets/vue-flow-minimap.b086bc50.js","assets/PhArrowCounterClockwise.vue.fe52520e.js","assets/TasksManager.5f46bc4c.js","assets/tasksController.9d537405.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/scripts.d04c162f.js","assets/polling.2c36bf65.js","assets/ant-design.0882cf6b.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/CollapsePanel.6c33189d.js","assets/index.e8ccec63.js","assets/TasksManager.c9a90d36.css","assets/index.241d39c0.js","assets/Badge.d7e06fdc.js","assets/index.8e2ca640.js","assets/PhArrowDown.vue.3dbaecb4.js","assets/WorkflowEditor.c7708479.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.0ff13995.js"),["assets/Tasks.0ff13995.js","assets/TasksView.vue_vue_type_script_setup_true_lang.ede0b6bf.js","assets/tasksController.9d537405.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/scripts.d04c162f.js","assets/record.b39e4f7d.js","assets/polling.2c36bf65.js","assets/string.21e44731.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/ant-design.0882cf6b.js","assets/dayjs.a8863b4f.js","assets/index.edf0c178.js","assets/ContentLayout.02f12831.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.83714aca.js"),["assets/Logs.83714aca.js","assets/ContentLayout.02f12831.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.e2c82d07.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/build.e2aaa79f.js","assets/string.21e44731.js","assets/tables.d5a7b0ab.js","assets/record.b39e4f7d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.41f5845e.js","assets/LoadingOutlined.cfab984f.js","assets/polling.2c36bf65.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/datetime.a891dbde.js","assets/ant-design.0882cf6b.js","assets/index.9f36e6e9.js","assets/index.edf0c178.js","assets/dayjs.a8863b4f.js","assets/CollapsePanel.6c33189d.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.5b048183.js"),["assets/PreferencesEditor.5b048183.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/record.b39e4f7d.js","assets/PlayerNavbar.7fd08dee.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/LoadingOutlined.cfab984f.js","assets/PhSignOut.vue.0ef21df7.js","assets/index.b832bc30.js","assets/Avatar.4c9fea1d.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.ef2bd0d9.js","assets/index.8e2ca640.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/ContentLayout.02f12831.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.7dc58c81.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.1125fbe4.js"),["assets/RequirementsEditor.1125fbe4.js","assets/ContentLayout.02f12831.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.7a3f5669.js","assets/router.6bb78aa3.js","assets/Badge.d7e06fdc.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/url.d80febd7.js","assets/PhDotsThreeVertical.vue.1c8b59ab.js","assets/index.edf0c178.js","assets/index.9f36e6e9.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.ec375dc7.js","assets/polling.2c36bf65.js","assets/linters.5d4f4193.js","assets/record.b39e4f7d.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/colorHelpers.b1f37418.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.4144f746.js"),["assets/EnvVarsEditor.4144f746.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/record.b39e4f7d.js","assets/ContentLayout.02f12831.js","assets/ContentLayout.ee57a545.css","assets/controller.3825979b.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/fetch.6614bd02.js","assets/PhPencil.vue.5a3116a4.js","assets/View.vue_vue_type_script_setup_true_lang.3c2bc628.js","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.7a3f5669.js","assets/router.6bb78aa3.js","assets/Badge.d7e06fdc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/PhDotsThreeVertical.vue.1c8b59ab.js","assets/index.edf0c178.js","assets/index.9f36e6e9.js","assets/CrudView.c80c8ede.css","assets/polling.2c36bf65.js","assets/index.39057a1e.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.0d4cee39.js"),["assets/AccessControlEditor.0d4cee39.js","assets/ContentLayout.02f12831.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.6614bd02.js","assets/record.b39e4f7d.js","assets/repository.d736bc98.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/asyncComputed.ec375dc7.js","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.8adfc125.js","assets/index.8df74d74.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/index.39057a1e.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/linters.5d4f4193.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.4227380b.js"),["assets/ProjectLogin.4227380b.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/Logo.70a49b64.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.bd87fbab.js","assets/BaseLayout.b7a1f19a.css","assets/index.7d23e19f.js","assets/index.b832bc30.js","assets/Avatar.4c9fea1d.js","assets/index.9f36e6e9.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.0e5d64a4.js"),["assets/FormEditor.0e5d64a4.js","assets/FormRunner.6843acc9.js","assets/url.d80febd7.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/workspaceStore.911f36b5.js","assets/colorHelpers.b1f37418.js","assets/Login.vue_vue_type_script_setup_true_lang.ad737e9d.js","assets/Logo.70a49b64.js","assets/Logo.8bf94625.css","assets/string.21e44731.js","assets/OTPInput.34d09d74.js","assets/OTPInput.277362d6.css","assets/index.39057a1e.js","assets/Login.eaf7209c.css","assets/Steps.957c6463.js","assets/index.b69f8e09.js","assets/Steps.4d03c6c1.css","assets/Watermark.d3d91a14.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.ec375dc7.js","assets/linters.5d4f4193.js","assets/scripts.d04c162f.js","assets/record.b39e4f7d.js","assets/workspaces.bd759025.js","assets/RuntimeCommonSettings.70c8243f.js","assets/BaseLayout.bd87fbab.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.51595ca7.js","assets/index.9f36e6e9.js","assets/CloseCircleOutlined.350b3cab.js","assets/popupNotifcation.0dd61396.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/PhChats.vue.492f009d.js","assets/polling.2c36bf65.js","assets/ai.6e7ef10a.js","assets/uuid.581ddf8f.js","assets/PhCheckCircle.vue.8ac3d648.js","assets/PhCopySimple.vue.bbc0f891.js","assets/controller.95fec66e.js","assets/vue-flow-core.274e6d98.js","assets/validations.e28306b4.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/controller.3825979b.js","assets/gateway.eaf0365c.js","assets/fetch.6614bd02.js","assets/PhPencil.vue.5a3116a4.js","assets/log.3c05ab63.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/ant-design.0882cf6b.js","assets/Avatar.4c9fea1d.js","assets/LoadingOutlined.cfab984f.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/Badge.d7e06fdc.js","assets/SourceCode.0286154a.js","assets/PhFolder.vue.868ca452.js","assets/toggleHighContrast.45c0353c.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.5f46bc4c.js","assets/tasksController.9d537405.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/index.8df74d74.js","assets/CollapsePanel.6c33189d.js","assets/index.e8ccec63.js","assets/TasksManager.c9a90d36.css","assets/index.7d23e19f.js","assets/index.b832bc30.js","assets/RuntimeCommonSettings.24be80d3.css","assets/PlayerNavbar.7fd08dee.js","assets/PhSignOut.vue.0ef21df7.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.ef2bd0d9.js","assets/index.8e2ca640.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.8d18f1c6.js"),["assets/JobEditor.8d18f1c6.js","assets/asyncComputed.ec375dc7.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/scripts.d04c162f.js","assets/record.b39e4f7d.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/RuntimeCommonSettings.70c8243f.js","assets/BaseLayout.bd87fbab.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.51595ca7.js","assets/index.9f36e6e9.js","assets/CloseCircleOutlined.350b3cab.js","assets/index.39057a1e.js","assets/popupNotifcation.0dd61396.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/PhChats.vue.492f009d.js","assets/polling.2c36bf65.js","assets/ai.6e7ef10a.js","assets/uuid.581ddf8f.js","assets/PhCheckCircle.vue.8ac3d648.js","assets/PhCopySimple.vue.bbc0f891.js","assets/controller.95fec66e.js","assets/vue-flow-core.274e6d98.js","assets/validations.e28306b4.js","assets/string.21e44731.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/controller.3825979b.js","assets/gateway.eaf0365c.js","assets/fetch.6614bd02.js","assets/PhPencil.vue.5a3116a4.js","assets/log.3c05ab63.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/Logo.70a49b64.js","assets/Logo.8bf94625.css","assets/ant-design.0882cf6b.js","assets/Avatar.4c9fea1d.js","assets/LoadingOutlined.cfab984f.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/Badge.d7e06fdc.js","assets/SourceCode.0286154a.js","assets/PhFolder.vue.868ca452.js","assets/toggleHighContrast.45c0353c.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.5f46bc4c.js","assets/tasksController.9d537405.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/index.8df74d74.js","assets/CollapsePanel.6c33189d.js","assets/index.e8ccec63.js","assets/TasksManager.c9a90d36.css","assets/index.7d23e19f.js","assets/index.b832bc30.js","assets/RuntimeCommonSettings.24be80d3.css","assets/index.b9bcb224.js","assets/RunButton.vue_vue_type_script_setup_true_lang.a7714da0.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.cab1a9f0.js"),["assets/HookEditor.cab1a9f0.js","assets/asyncComputed.ec375dc7.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/scripts.d04c162f.js","assets/record.b39e4f7d.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/RuntimeCommonSettings.70c8243f.js","assets/BaseLayout.bd87fbab.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.51595ca7.js","assets/index.9f36e6e9.js","assets/CloseCircleOutlined.350b3cab.js","assets/index.39057a1e.js","assets/popupNotifcation.0dd61396.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/PhChats.vue.492f009d.js","assets/polling.2c36bf65.js","assets/ai.6e7ef10a.js","assets/uuid.581ddf8f.js","assets/PhCheckCircle.vue.8ac3d648.js","assets/PhCopySimple.vue.bbc0f891.js","assets/controller.95fec66e.js","assets/vue-flow-core.274e6d98.js","assets/validations.e28306b4.js","assets/string.21e44731.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/controller.3825979b.js","assets/gateway.eaf0365c.js","assets/fetch.6614bd02.js","assets/PhPencil.vue.5a3116a4.js","assets/log.3c05ab63.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/Logo.70a49b64.js","assets/Logo.8bf94625.css","assets/ant-design.0882cf6b.js","assets/Avatar.4c9fea1d.js","assets/LoadingOutlined.cfab984f.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/Badge.d7e06fdc.js","assets/SourceCode.0286154a.js","assets/PhFolder.vue.868ca452.js","assets/toggleHighContrast.45c0353c.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.5f46bc4c.js","assets/tasksController.9d537405.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/index.8df74d74.js","assets/CollapsePanel.6c33189d.js","assets/index.e8ccec63.js","assets/TasksManager.c9a90d36.css","assets/index.7d23e19f.js","assets/index.b832bc30.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a7714da0.js","assets/index.ce1c676a.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.aa7676bd.js"),["assets/ScriptEditor.aa7676bd.js","assets/tasksController.9d537405.js","assets/gateway.eaf0365c.js","assets/popupNotifcation.0dd61396.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/scripts.d04c162f.js","assets/record.b39e4f7d.js","assets/polling.2c36bf65.js","assets/string.21e44731.js","assets/workspaces.bd759025.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/RuntimeCommonSettings.70c8243f.js","assets/BaseLayout.bd87fbab.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.4bb0f678.js","assets/UnsavedChangesHandler.53aaad84.js","assets/ExclamationCircleOutlined.f0ffb2ff.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.51595ca7.js","assets/index.9f36e6e9.js","assets/CloseCircleOutlined.350b3cab.js","assets/index.39057a1e.js","assets/PhArrowSquareOut.vue.8adfc125.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c22e4b87.js","assets/BookOutlined.65669461.js","assets/PhChats.vue.492f009d.js","assets/ai.6e7ef10a.js","assets/uuid.581ddf8f.js","assets/PhCheckCircle.vue.8ac3d648.js","assets/PhCopySimple.vue.bbc0f891.js","assets/controller.95fec66e.js","assets/vue-flow-core.274e6d98.js","assets/validations.e28306b4.js","assets/metadata.630b4d92.js","assets/PhRobot.vue.b6d33908.js","assets/PhWebhooksLogo.vue.7feade71.js","assets/controller.3825979b.js","assets/fetch.6614bd02.js","assets/PhPencil.vue.5a3116a4.js","assets/log.3c05ab63.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/Logo.70a49b64.js","assets/Logo.8bf94625.css","assets/ant-design.0882cf6b.js","assets/Avatar.4c9fea1d.js","assets/LoadingOutlined.cfab984f.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/Badge.d7e06fdc.js","assets/SourceCode.0286154a.js","assets/PhFolder.vue.868ca452.js","assets/toggleHighContrast.45c0353c.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.5f46bc4c.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.07f6f371.js","assets/index.8df74d74.js","assets/CollapsePanel.6c33189d.js","assets/index.e8ccec63.js","assets/TasksManager.c9a90d36.css","assets/index.7d23e19f.js","assets/index.b832bc30.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a7714da0.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.79189fcf.js"),["assets/ResourcesTracker.79189fcf.js","assets/BaseLayout.bd87fbab.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.ec375dc7.js","assets/polling.2c36bf65.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.5bc75eda.js"),["assets/Welcome.5bc75eda.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.0f0f172d.js","assets/Logo.70a49b64.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.02f12831.js","assets/ContentLayout.ee57a545.css","assets/fetch.6614bd02.js","assets/Card.d430f4bc.js","assets/TabPane.065b3329.js","assets/workspaceStore.911f36b5.js","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/linters.5d4f4193.js","assets/asyncComputed.ec375dc7.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.a4f52bcb.js"),["assets/App.a4f52bcb.js","assets/App.vue_vue_type_style_index_0_lang.1acf7b50.js","assets/workspaceStore.911f36b5.js","assets/index.5572dd7e.js","assets/index.ae14d18e.css","assets/url.d80febd7.js","assets/colorHelpers.b1f37418.js","assets/PlayerConfigProvider.ef2bd0d9.js","assets/index.8e2ca640.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.c2555793.js.map
