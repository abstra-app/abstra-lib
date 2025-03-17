var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.af5935c5.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.c60f5d73.js";import"./linters.be53f75b.js";import"./url.6ea417ff.js";import"./colorHelpers.75627b03.js";import"./asyncComputed.d727f45f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="918bc65f-f87c-4a1f-9946-a17361f21704",t._sentryDebugIdIdentifier="sentry-dbid-918bc65f-f87c-4a1f-9946-a17361f21704")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"bc0693f4ca7760a28972ba13d6eb5897e575a13a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),P=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:b}=r.info;l.boot(i,b)}else l.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.f6f9088b.js"),["assets/Home.f6f9088b.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.2a027462.js"),["assets/Workspace.2a027462.js","assets/BaseLayout.83290eed.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.9eaa13aa.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/NavbarControls.80fdcf94.js","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/index.327f331f.js","assets/CloseCircleOutlined.ed24ac34.js","assets/index.1c0b3b8b.js","assets/workspaces.360e7b11.js","assets/record.f7d8f659.js","assets/popupNotifcation.d7845d1b.js","assets/PhArrowSquareOut.vue.12761645.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/PhChats.vue.56a911b2.js","assets/polling.437f8969.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/Logo.2ce0761a.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.8d8da3ab.js","assets/PhIdentificationBadge.vue.6b5c6537.js","assets/PhCaretRight.vue.03a14fb2.js","assets/index.04bc7387.js","assets/index.44f10ef0.js","assets/Avatar.08a85760.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.f23f751b.js"),["assets/Stages.f23f751b.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/ContentLayout.9b4c940c.js","assets/ContentLayout.ee57a545.css","assets/CrudView.96a91179.js","assets/router.d78f9794.js","assets/Badge.698eb2df.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/url.6ea417ff.js","assets/PhDotsThreeVertical.vue.25910ae8.js","assets/index.68bbd184.js","assets/index.327f331f.js","assets/CrudView.c80c8ede.css","assets/ant-design.86f31cb9.js","assets/asyncComputed.d727f45f.js","assets/string.f3bdc3d2.js","assets/PhArrowSquareOut.vue.12761645.js","assets/scripts.71a339af.js","assets/record.f7d8f659.js","assets/linters.be53f75b.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/colorHelpers.75627b03.js","assets/ai.7e89b6f9.js","assets/index.1c0b3b8b.js","assets/PhWebhooksLogo.vue.8cba439b.js","assets/validations.e6af922e.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.2b3189a8.js"),["assets/WorkflowEditor.2b3189a8.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/vue-flow-minimap.a3dfaa0b.js","assets/validations.e6af922e.js","assets/string.f3bdc3d2.js","assets/uuid.4613d962.js","assets/metadata.9fad18d4.js","assets/PhRobot.vue.50d0f544.js","assets/PhWebhooksLogo.vue.8cba439b.js","assets/asyncComputed.d727f45f.js","assets/linters.be53f75b.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/record.f7d8f659.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.849d4177.js","assets/index.1c0b3b8b.js","assets/PhArrowCounterClockwise.vue.8d8da3ab.js","assets/TasksManager.a58816ee.js","assets/tasksController.e166e583.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/scripts.71a339af.js","assets/polling.437f8969.js","assets/ant-design.86f31cb9.js","assets/PhArrowSquareOut.vue.12761645.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/Card.20071def.js","assets/TabPane.1ece305b.js","assets/CollapsePanel.e54dfb49.js","assets/index.8a2a437a.js","assets/TasksManager.53a9d7b9.css","assets/index.070066f1.js","assets/Badge.698eb2df.js","assets/index.99a3928b.js","assets/PhArrowDown.vue.52340155.js","assets/WorkflowEditor.0f37f7c9.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.dcd2b078.js"),["assets/Tasks.dcd2b078.js","assets/TasksView.vue_vue_type_script_setup_true_lang.fc08eb1d.js","assets/tasksController.e166e583.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/scripts.71a339af.js","assets/record.f7d8f659.js","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/polling.437f8969.js","assets/string.f3bdc3d2.js","assets/metadata.9fad18d4.js","assets/PhRobot.vue.50d0f544.js","assets/PhWebhooksLogo.vue.8cba439b.js","assets/ant-design.86f31cb9.js","assets/dayjs.7d71c1a9.js","assets/index.68bbd184.js","assets/ContentLayout.9b4c940c.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.03a11e76.js"),["assets/Logs.03a11e76.js","assets/ContentLayout.9b4c940c.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.66399557.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/build.906c5086.js","assets/string.f3bdc3d2.js","assets/tables.cbcf274c.js","assets/record.f7d8f659.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ca657fb4.js","assets/LoadingOutlined.a44d24ed.js","assets/polling.437f8969.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/datetime.196df51a.js","assets/ant-design.86f31cb9.js","assets/index.327f331f.js","assets/index.68bbd184.js","assets/dayjs.7d71c1a9.js","assets/CollapsePanel.e54dfb49.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.1276a594.js"),["assets/PreferencesEditor.1276a594.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/record.f7d8f659.js","assets/PlayerNavbar.cc63135a.js","assets/metadata.9fad18d4.js","assets/PhRobot.vue.50d0f544.js","assets/PhWebhooksLogo.vue.8cba439b.js","assets/LoadingOutlined.a44d24ed.js","assets/PhSignOut.vue.9eaa13aa.js","assets/index.44f10ef0.js","assets/Avatar.08a85760.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.c859fb45.js","assets/index.99a3928b.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/ContentLayout.9b4c940c.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.f79be56a.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.e94527b5.js"),["assets/RequirementsEditor.e94527b5.js","assets/ContentLayout.9b4c940c.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.96a91179.js","assets/router.d78f9794.js","assets/Badge.698eb2df.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/url.6ea417ff.js","assets/PhDotsThreeVertical.vue.25910ae8.js","assets/index.68bbd184.js","assets/index.327f331f.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.d727f45f.js","assets/polling.437f8969.js","assets/linters.be53f75b.js","assets/record.f7d8f659.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/colorHelpers.75627b03.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.7d9d2501.js"),["assets/EnvVarsEditor.7d9d2501.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/record.f7d8f659.js","assets/ContentLayout.9b4c940c.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.d34b71c0.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/fetch.dcf0f4bf.js","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.96a91179.js","assets/router.d78f9794.js","assets/Badge.698eb2df.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/PhDotsThreeVertical.vue.25910ae8.js","assets/index.68bbd184.js","assets/index.327f331f.js","assets/CrudView.c80c8ede.css","assets/polling.437f8969.js","assets/PhPencil.vue.19f72bc6.js","assets/index.1c0b3b8b.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.7d34d2f8.js"),["assets/AccessControlEditor.7d34d2f8.js","assets/ContentLayout.9b4c940c.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/ContentLayout.ee57a545.css","assets/fetch.dcf0f4bf.js","assets/record.f7d8f659.js","assets/repository.5a5fdb48.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/asyncComputed.d727f45f.js","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.12761645.js","assets/index.849d4177.js","assets/metadata.9fad18d4.js","assets/PhRobot.vue.50d0f544.js","assets/PhWebhooksLogo.vue.8cba439b.js","assets/index.1c0b3b8b.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/linters.be53f75b.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.dc263e9f.js"),["assets/ProjectLogin.dc263e9f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/Logo.2ce0761a.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/Logo.8bf94625.css","assets/BaseLayout.83290eed.js","assets/BaseLayout.b7a1f19a.css","assets/index.04bc7387.js","assets/index.44f10ef0.js","assets/Avatar.08a85760.js","assets/index.327f331f.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.cd513b6e.js"),["assets/FormEditor.cd513b6e.js","assets/FormRunner.96ee881b.js","assets/url.6ea417ff.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/workspaceStore.c60f5d73.js","assets/colorHelpers.75627b03.js","assets/Login.vue_vue_type_script_setup_true_lang.e151a0fd.js","assets/Logo.2ce0761a.js","assets/Logo.8bf94625.css","assets/string.f3bdc3d2.js","assets/OTPInput.8a65ff26.js","assets/OTPInput.277362d6.css","assets/index.1c0b3b8b.js","assets/Login.ae1154ae.css","assets/Steps.56f15264.js","assets/index.0bf372ec.js","assets/Steps.4d03c6c1.css","assets/Watermark.192a43e7.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.d727f45f.js","assets/scripts.71a339af.js","assets/record.f7d8f659.js","assets/linters.be53f75b.js","assets/workspaces.360e7b11.js","assets/RuntimeCommonSettings.c8997509.js","assets/BaseLayout.83290eed.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.4613d962.js","assets/NavbarControls.80fdcf94.js","assets/index.327f331f.js","assets/CloseCircleOutlined.ed24ac34.js","assets/popupNotifcation.d7845d1b.js","assets/PhArrowSquareOut.vue.12761645.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/PhChats.vue.56a911b2.js","assets/polling.437f8969.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/ant-design.86f31cb9.js","assets/ai.7e89b6f9.js","assets/PhCheckCircle.vue.8f2a96dd.js","assets/PhCopySimple.vue.84a6056f.js","assets/Avatar.08a85760.js","assets/LoadingOutlined.a44d24ed.js","assets/Card.20071def.js","assets/TabPane.1ece305b.js","assets/PhCaretRight.vue.03a14fb2.js","assets/Badge.698eb2df.js","assets/PhFolder.vue.905e98a6.js","assets/PhPencil.vue.19f72bc6.js","assets/validations.e6af922e.js","assets/toggleHighContrast.dcc58ca4.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.a58816ee.js","assets/tasksController.e166e583.js","assets/gateway.080706ea.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/index.849d4177.js","assets/CollapsePanel.e54dfb49.js","assets/index.8a2a437a.js","assets/TasksManager.53a9d7b9.css","assets/index.04bc7387.js","assets/index.44f10ef0.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/PlayerNavbar.cc63135a.js","assets/metadata.9fad18d4.js","assets/PhRobot.vue.50d0f544.js","assets/PhWebhooksLogo.vue.8cba439b.js","assets/PhSignOut.vue.9eaa13aa.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.c859fb45.js","assets/index.99a3928b.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.7c5af216.js"),["assets/JobEditor.7c5af216.js","assets/asyncComputed.d727f45f.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/scripts.71a339af.js","assets/record.f7d8f659.js","assets/linters.be53f75b.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/RuntimeCommonSettings.c8997509.js","assets/BaseLayout.83290eed.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.4613d962.js","assets/NavbarControls.80fdcf94.js","assets/index.327f331f.js","assets/CloseCircleOutlined.ed24ac34.js","assets/index.1c0b3b8b.js","assets/popupNotifcation.d7845d1b.js","assets/PhArrowSquareOut.vue.12761645.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/PhChats.vue.56a911b2.js","assets/polling.437f8969.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/Logo.2ce0761a.js","assets/Logo.8bf94625.css","assets/ant-design.86f31cb9.js","assets/ai.7e89b6f9.js","assets/PhCheckCircle.vue.8f2a96dd.js","assets/PhCopySimple.vue.84a6056f.js","assets/Avatar.08a85760.js","assets/LoadingOutlined.a44d24ed.js","assets/Card.20071def.js","assets/TabPane.1ece305b.js","assets/PhCaretRight.vue.03a14fb2.js","assets/Badge.698eb2df.js","assets/PhFolder.vue.905e98a6.js","assets/PhPencil.vue.19f72bc6.js","assets/validations.e6af922e.js","assets/string.f3bdc3d2.js","assets/toggleHighContrast.dcc58ca4.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.a58816ee.js","assets/tasksController.e166e583.js","assets/gateway.080706ea.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/index.849d4177.js","assets/CollapsePanel.e54dfb49.js","assets/index.8a2a437a.js","assets/TasksManager.53a9d7b9.css","assets/index.04bc7387.js","assets/index.44f10ef0.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/index.3361db68.js","assets/RunButton.vue_vue_type_script_setup_true_lang.651b542e.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.b7924e3f.js"),["assets/HookEditor.b7924e3f.js","assets/asyncComputed.d727f45f.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/scripts.71a339af.js","assets/record.f7d8f659.js","assets/linters.be53f75b.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/RuntimeCommonSettings.c8997509.js","assets/BaseLayout.83290eed.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.4613d962.js","assets/NavbarControls.80fdcf94.js","assets/index.327f331f.js","assets/CloseCircleOutlined.ed24ac34.js","assets/index.1c0b3b8b.js","assets/popupNotifcation.d7845d1b.js","assets/PhArrowSquareOut.vue.12761645.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/PhChats.vue.56a911b2.js","assets/polling.437f8969.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/Logo.2ce0761a.js","assets/Logo.8bf94625.css","assets/ant-design.86f31cb9.js","assets/ai.7e89b6f9.js","assets/PhCheckCircle.vue.8f2a96dd.js","assets/PhCopySimple.vue.84a6056f.js","assets/Avatar.08a85760.js","assets/LoadingOutlined.a44d24ed.js","assets/Card.20071def.js","assets/TabPane.1ece305b.js","assets/PhCaretRight.vue.03a14fb2.js","assets/Badge.698eb2df.js","assets/PhFolder.vue.905e98a6.js","assets/PhPencil.vue.19f72bc6.js","assets/validations.e6af922e.js","assets/string.f3bdc3d2.js","assets/toggleHighContrast.dcc58ca4.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.a58816ee.js","assets/tasksController.e166e583.js","assets/gateway.080706ea.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/index.849d4177.js","assets/CollapsePanel.e54dfb49.js","assets/index.8a2a437a.js","assets/TasksManager.53a9d7b9.css","assets/index.04bc7387.js","assets/index.44f10ef0.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.651b542e.js","assets/index.cc60bd0d.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.17c9d858.js"),["assets/ScriptEditor.17c9d858.js","assets/tasksController.e166e583.js","assets/gateway.080706ea.js","assets/popupNotifcation.d7845d1b.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/scripts.71a339af.js","assets/record.f7d8f659.js","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/polling.437f8969.js","assets/string.f3bdc3d2.js","assets/workspaces.360e7b11.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/RuntimeCommonSettings.c8997509.js","assets/BaseLayout.83290eed.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.43096001.js","assets/UnsavedChangesHandler.b5bc1fee.js","assets/ExclamationCircleOutlined.ba06d1fe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.4613d962.js","assets/NavbarControls.80fdcf94.js","assets/index.327f331f.js","assets/CloseCircleOutlined.ed24ac34.js","assets/index.1c0b3b8b.js","assets/PhArrowSquareOut.vue.12761645.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js","assets/BookOutlined.dc21b6f8.js","assets/PhChats.vue.56a911b2.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/Logo.2ce0761a.js","assets/Logo.8bf94625.css","assets/ant-design.86f31cb9.js","assets/ai.7e89b6f9.js","assets/PhCheckCircle.vue.8f2a96dd.js","assets/PhCopySimple.vue.84a6056f.js","assets/Avatar.08a85760.js","assets/LoadingOutlined.a44d24ed.js","assets/Card.20071def.js","assets/TabPane.1ece305b.js","assets/PhCaretRight.vue.03a14fb2.js","assets/Badge.698eb2df.js","assets/PhFolder.vue.905e98a6.js","assets/PhPencil.vue.19f72bc6.js","assets/validations.e6af922e.js","assets/toggleHighContrast.dcc58ca4.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.a58816ee.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js","assets/index.849d4177.js","assets/CollapsePanel.e54dfb49.js","assets/index.8a2a437a.js","assets/TasksManager.53a9d7b9.css","assets/index.04bc7387.js","assets/index.44f10ef0.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.651b542e.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.cb57cb3f.js"),["assets/ResourcesTracker.cb57cb3f.js","assets/BaseLayout.83290eed.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.d727f45f.js","assets/polling.437f8969.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.5e3b888e.js"),["assets/Welcome.5e3b888e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js","assets/Logo.2ce0761a.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/Logo.8bf94625.css","assets/ContentLayout.9b4c940c.js","assets/ContentLayout.ee57a545.css","assets/fetch.dcf0f4bf.js","assets/Card.20071def.js","assets/TabPane.1ece305b.js","assets/workspaceStore.c60f5d73.js","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/linters.be53f75b.js","assets/asyncComputed.d727f45f.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.2ff60fe2.js"),["assets/App.2ff60fe2.js","assets/App.vue_vue_type_style_index_0_lang.7d6297ef.js","assets/workspaceStore.c60f5d73.js","assets/index.af5935c5.js","assets/index.84e5979e.css","assets/url.6ea417ff.js","assets/colorHelpers.75627b03.js","assets/PlayerConfigProvider.c859fb45.js","assets/index.99a3928b.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.6b6a4b7b.js.map
