var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.e2d9b9bf.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.adb5c47a.js";import"./linters.7a795f3a.js";import"./url.d39b9cf8.js";import"./colorHelpers.709902cd.js";import"./asyncComputed.72258d46.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0a3ad66f-8df8-4d9b-8711-968cbdcd8665",t._sentryDebugIdIdentifier="sentry-dbid-0a3ad66f-8df8-4d9b-8711-968cbdcd8665")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let d=n;m(d,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"62d7f9393dc4f5dddd40ff27a34a6174312a1643",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;d.boot(i,P)}else d.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),l=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.b2da066f.js"),["assets/Home.b2da066f.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.6e1de138.js"),["assets/Workspace.6e1de138.js","assets/BaseLayout.67aa1ba9.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/BaseLayout.a3a91ce0.css","assets/log.2992f05e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/PhArrowCounterClockwise.vue.2258eb72.js","assets/PhFilePy.vue.3d129dcf.js","assets/PhChats.vue.84f96e1d.js","assets/PhRocket.vue.e46625ba.js","assets/PhPackage.vue.8bd85f50.js","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/record.440ed4d9.js","assets/polling.5dbad85d.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/PhSignOut.vue.42f9fa8c.js","assets/index.3df36c47.js","assets/CloseCircleOutlined.d812373e.js","assets/CheckCircleFilled.4f98aa74.js","assets/index.66022f00.js","assets/popupNotifcation.0f84464d.js","assets/ai.fdf9d264.js","assets/uuid.1d0c1336.js","assets/PhCheckCircle.vue.0f093cc8.js","assets/PhCopySimple.vue.2f702df6.js","assets/scripts.3666ab60.js","assets/controller.814119db.js","assets/vue-flow-core.d5224d21.js","assets/validations.85c2eaf0.js","assets/string.80a04e9f.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/controller.5cd99ce3.js","assets/gateway.5e1e46a5.js","assets/fetch.853d0458.js","assets/PhPencil.vue.066e4c16.js","assets/log.cf9bdab9.css","assets/PhClockCounterClockwise.vue.9570b186.js","assets/omniChatStore.c7756cb5.js","assets/LoadingOutlined.16257dcc.js","assets/Avatar.95100b67.js","assets/Workspace.7949737e.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.bed2840a.js"),["assets/Stages.bed2840a.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/ContentLayout.d10a1126.js","assets/ContentLayout.ee57a545.css","assets/CrudView.15b95067.js","assets/router.f5f5c720.js","assets/Badge.68625667.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a433faa1.js","assets/BookOutlined.2a439950.js","assets/url.d39b9cf8.js","assets/PhDotsThreeVertical.vue.ab05e813.js","assets/index.ed249e2b.js","assets/index.3df36c47.js","assets/CrudView.c80c8ede.css","assets/ant-design.7bc38784.js","assets/asyncComputed.72258d46.js","assets/string.80a04e9f.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/linters.7a795f3a.js","assets/scripts.3666ab60.js","assets/record.440ed4d9.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/colorHelpers.709902cd.js","assets/ai.fdf9d264.js","assets/index.66022f00.js","assets/validations.85c2eaf0.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.39638db2.js"),["assets/Codebase.39638db2.js","assets/SourceCode.acedef32.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/record.440ed4d9.js","assets/polling.5dbad85d.js","assets/validations.85c2eaf0.js","assets/string.80a04e9f.js","assets/PhFolder.vue.0df0adb0.js","assets/toggleHighContrast.807caa39.js","assets/toggleHighContrast.30d77c87.css","assets/index.66022f00.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/SourceCode.382c465b.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/Logo.b7d81119.css","assets/ContentLayout.d10a1126.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.a6ebab89.js","assets/popupNotifcation.0f84464d.js","assets/ant-design.7bc38784.js","assets/FilesNavigator.57c0a8d7.css","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhFilePy.vue.3d129dcf.js","assets/PhPackage.vue.8bd85f50.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/Codebase.8415832e.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.87127507.js"),["assets/WorkflowEditor.87127507.js","assets/controller.814119db.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/vue-flow-core.d5224d21.js","assets/uuid.1d0c1336.js","assets/validations.85c2eaf0.js","assets/string.80a04e9f.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/asyncComputed.72258d46.js","assets/linters.7a795f3a.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/record.440ed4d9.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.6b4a360b.js","assets/index.66022f00.js","assets/vue-flow-minimap.e55e300e.js","assets/PhArrowCounterClockwise.vue.2258eb72.js","assets/TasksManager.4e6dcd95.js","assets/tasksController.0baedc4b.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/scripts.3666ab60.js","assets/polling.5dbad85d.js","assets/ant-design.7bc38784.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/CollapsePanel.c4488f02.js","assets/index.3cd4e5c3.js","assets/TasksManager.c9a90d36.css","assets/index.606728c8.js","assets/Badge.68625667.js","assets/index.b01f39e4.js","assets/PhArrowDown.vue.3906030d.js","assets/omniChatStore.c7756cb5.js","assets/WorkflowEditor.f3dafd0b.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.ef2ed15b.js"),["assets/Tasks.ef2ed15b.js","assets/TasksView.vue_vue_type_script_setup_true_lang.7621ea3b.js","assets/tasksController.0baedc4b.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/scripts.3666ab60.js","assets/record.440ed4d9.js","assets/polling.5dbad85d.js","assets/string.80a04e9f.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/ant-design.7bc38784.js","assets/dayjs.4b7d24d1.js","assets/index.ed249e2b.js","assets/ContentLayout.d10a1126.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.2d844ac0.js"),["assets/Logs.2d844ac0.js","assets/ContentLayout.d10a1126.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.07fb9571.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/build.8c3c4973.js","assets/string.80a04e9f.js","assets/tables.b8ae7008.js","assets/record.440ed4d9.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5f843866.js","assets/CheckCircleFilled.4f98aa74.js","assets/LoadingOutlined.16257dcc.js","assets/polling.5dbad85d.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/datetime.891e253f.js","assets/ant-design.7bc38784.js","assets/index.3df36c47.js","assets/index.ed249e2b.js","assets/dayjs.4b7d24d1.js","assets/CollapsePanel.c4488f02.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.b56d5383.js"),["assets/PreferencesEditor.b56d5383.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/record.440ed4d9.js","assets/PlayerNavbar.b6d3abe4.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/LoadingOutlined.16257dcc.js","assets/PhSignOut.vue.42f9fa8c.js","assets/index.9b73dd31.js","assets/Avatar.95100b67.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.6e5f9916.js","assets/index.b01f39e4.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/ContentLayout.d10a1126.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.dd118f05.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.1e566474.js"),["assets/RequirementsEditor.1e566474.js","assets/ContentLayout.d10a1126.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.15b95067.js","assets/router.f5f5c720.js","assets/Badge.68625667.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a433faa1.js","assets/BookOutlined.2a439950.js","assets/url.d39b9cf8.js","assets/PhDotsThreeVertical.vue.ab05e813.js","assets/index.ed249e2b.js","assets/index.3df36c47.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.72258d46.js","assets/polling.5dbad85d.js","assets/linters.7a795f3a.js","assets/record.440ed4d9.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/colorHelpers.709902cd.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.94fe794a.js"),["assets/EnvVarsEditor.94fe794a.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/record.440ed4d9.js","assets/ContentLayout.d10a1126.js","assets/ContentLayout.ee57a545.css","assets/controller.5cd99ce3.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/fetch.853d0458.js","assets/PhPencil.vue.066e4c16.js","assets/View.vue_vue_type_script_setup_true_lang.1b873211.js","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.15b95067.js","assets/router.f5f5c720.js","assets/Badge.68625667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a433faa1.js","assets/BookOutlined.2a439950.js","assets/PhDotsThreeVertical.vue.ab05e813.js","assets/index.ed249e2b.js","assets/index.3df36c47.js","assets/CrudView.c80c8ede.css","assets/polling.5dbad85d.js","assets/index.66022f00.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.df017e68.js"),["assets/AccessControlEditor.df017e68.js","assets/ContentLayout.d10a1126.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.853d0458.js","assets/record.440ed4d9.js","assets/repository.f5f21a54.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/asyncComputed.72258d46.js","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/index.6b4a360b.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/index.66022f00.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/linters.7a795f3a.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.a9e43e26.js"),["assets/ProjectLogin.a9e43e26.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/Logo.b7d81119.css","assets/BaseLayout.67aa1ba9.js","assets/BaseLayout.a3a91ce0.css","assets/index.164d75ae.js","assets/index.9b73dd31.js","assets/Avatar.95100b67.js","assets/index.3df36c47.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.9e289fce.js"),["assets/FormEditor.9e289fce.js","assets/FormRunner.6f94e458.js","assets/url.d39b9cf8.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/workspaceStore.adb5c47a.js","assets/colorHelpers.709902cd.js","assets/Login.vue_vue_type_script_setup_true_lang.3c6feeae.js","assets/Logo.d078ad29.js","assets/Logo.b7d81119.css","assets/string.80a04e9f.js","assets/OTPInput.4a840459.js","assets/OTPInput.277362d6.css","assets/index.66022f00.js","assets/Login.eaf7209c.css","assets/Steps.997d3fb1.js","assets/index.9e8c5f1f.js","assets/Steps.4d03c6c1.css","assets/Watermark.a2e5d8f3.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.72258d46.js","assets/linters.7a795f3a.js","assets/scripts.3666ab60.js","assets/record.440ed4d9.js","assets/workspaces.6730bd81.js","assets/RuntimeCommonSettings.04bfca10.js","assets/BaseLayout.67aa1ba9.js","assets/BaseLayout.a3a91ce0.css","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.2992f05e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/PhArrowCounterClockwise.vue.2258eb72.js","assets/PhFilePy.vue.3d129dcf.js","assets/PhChats.vue.84f96e1d.js","assets/PhRocket.vue.e46625ba.js","assets/PhPackage.vue.8bd85f50.js","assets/polling.5dbad85d.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/PhSignOut.vue.42f9fa8c.js","assets/index.3df36c47.js","assets/CloseCircleOutlined.d812373e.js","assets/CheckCircleFilled.4f98aa74.js","assets/popupNotifcation.0f84464d.js","assets/ai.fdf9d264.js","assets/uuid.1d0c1336.js","assets/PhCheckCircle.vue.0f093cc8.js","assets/PhCopySimple.vue.2f702df6.js","assets/controller.814119db.js","assets/vue-flow-core.d5224d21.js","assets/validations.85c2eaf0.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/controller.5cd99ce3.js","assets/gateway.5e1e46a5.js","assets/fetch.853d0458.js","assets/PhPencil.vue.066e4c16.js","assets/log.cf9bdab9.css","assets/ant-design.7bc38784.js","assets/Avatar.95100b67.js","assets/LoadingOutlined.16257dcc.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/SourceCode.acedef32.js","assets/PhFolder.vue.0df0adb0.js","assets/toggleHighContrast.807caa39.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.4e6dcd95.js","assets/tasksController.0baedc4b.js","assets/index.6b4a360b.js","assets/CollapsePanel.c4488f02.js","assets/index.3cd4e5c3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.4991f97b.js","assets/Badge.68625667.js","assets/RuntimeCommonSettings.24be80d3.css","assets/PlayerNavbar.b6d3abe4.js","assets/index.9b73dd31.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.6e5f9916.js","assets/index.b01f39e4.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.94cb2d46.js"),["assets/JobEditor.94cb2d46.js","assets/asyncComputed.72258d46.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/scripts.3666ab60.js","assets/record.440ed4d9.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/RuntimeCommonSettings.04bfca10.js","assets/BaseLayout.67aa1ba9.js","assets/BaseLayout.a3a91ce0.css","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.2992f05e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/PhArrowCounterClockwise.vue.2258eb72.js","assets/PhFilePy.vue.3d129dcf.js","assets/PhChats.vue.84f96e1d.js","assets/PhRocket.vue.e46625ba.js","assets/PhPackage.vue.8bd85f50.js","assets/polling.5dbad85d.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/PhSignOut.vue.42f9fa8c.js","assets/index.3df36c47.js","assets/CloseCircleOutlined.d812373e.js","assets/CheckCircleFilled.4f98aa74.js","assets/index.66022f00.js","assets/popupNotifcation.0f84464d.js","assets/ai.fdf9d264.js","assets/uuid.1d0c1336.js","assets/PhCheckCircle.vue.0f093cc8.js","assets/PhCopySimple.vue.2f702df6.js","assets/controller.814119db.js","assets/vue-flow-core.d5224d21.js","assets/validations.85c2eaf0.js","assets/string.80a04e9f.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/controller.5cd99ce3.js","assets/gateway.5e1e46a5.js","assets/fetch.853d0458.js","assets/PhPencil.vue.066e4c16.js","assets/log.cf9bdab9.css","assets/ant-design.7bc38784.js","assets/Avatar.95100b67.js","assets/LoadingOutlined.16257dcc.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/SourceCode.acedef32.js","assets/PhFolder.vue.0df0adb0.js","assets/toggleHighContrast.807caa39.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.4e6dcd95.js","assets/tasksController.0baedc4b.js","assets/index.6b4a360b.js","assets/CollapsePanel.c4488f02.js","assets/index.3cd4e5c3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.4991f97b.js","assets/Badge.68625667.js","assets/RuntimeCommonSettings.24be80d3.css","assets/index.aff096cb.js","assets/RunButton.vue_vue_type_script_setup_true_lang.4bc17f3e.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.8d8f6519.js"),["assets/HookEditor.8d8f6519.js","assets/asyncComputed.72258d46.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/scripts.3666ab60.js","assets/record.440ed4d9.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/RuntimeCommonSettings.04bfca10.js","assets/BaseLayout.67aa1ba9.js","assets/BaseLayout.a3a91ce0.css","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.2992f05e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/PhArrowCounterClockwise.vue.2258eb72.js","assets/PhFilePy.vue.3d129dcf.js","assets/PhChats.vue.84f96e1d.js","assets/PhRocket.vue.e46625ba.js","assets/PhPackage.vue.8bd85f50.js","assets/polling.5dbad85d.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/PhSignOut.vue.42f9fa8c.js","assets/index.3df36c47.js","assets/CloseCircleOutlined.d812373e.js","assets/CheckCircleFilled.4f98aa74.js","assets/index.66022f00.js","assets/popupNotifcation.0f84464d.js","assets/ai.fdf9d264.js","assets/uuid.1d0c1336.js","assets/PhCheckCircle.vue.0f093cc8.js","assets/PhCopySimple.vue.2f702df6.js","assets/controller.814119db.js","assets/vue-flow-core.d5224d21.js","assets/validations.85c2eaf0.js","assets/string.80a04e9f.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/controller.5cd99ce3.js","assets/gateway.5e1e46a5.js","assets/fetch.853d0458.js","assets/PhPencil.vue.066e4c16.js","assets/log.cf9bdab9.css","assets/ant-design.7bc38784.js","assets/Avatar.95100b67.js","assets/LoadingOutlined.16257dcc.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/SourceCode.acedef32.js","assets/PhFolder.vue.0df0adb0.js","assets/toggleHighContrast.807caa39.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.4e6dcd95.js","assets/tasksController.0baedc4b.js","assets/index.6b4a360b.js","assets/CollapsePanel.c4488f02.js","assets/index.3cd4e5c3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.4991f97b.js","assets/Badge.68625667.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4bc17f3e.js","assets/index.766e9dd7.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.632e749a.js"),["assets/ScriptEditor.632e749a.js","assets/tasksController.0baedc4b.js","assets/gateway.5e1e46a5.js","assets/popupNotifcation.0f84464d.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/scripts.3666ab60.js","assets/record.440ed4d9.js","assets/polling.5dbad85d.js","assets/string.80a04e9f.js","assets/workspaces.6730bd81.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/RuntimeCommonSettings.04bfca10.js","assets/BaseLayout.67aa1ba9.js","assets/BaseLayout.a3a91ce0.css","assets/SaveButton.ccfa2e77.js","assets/UnsavedChangesHandler.256ef9a2.js","assets/ExclamationCircleOutlined.d34e8249.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/log.2992f05e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/Logo.b7d81119.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.79449234.js","assets/PhArrowCounterClockwise.vue.2258eb72.js","assets/PhFilePy.vue.3d129dcf.js","assets/PhChats.vue.84f96e1d.js","assets/PhRocket.vue.e46625ba.js","assets/PhPackage.vue.8bd85f50.js","assets/PhArrowSquareOut.vue.279a8ad9.js","assets/PhSignOut.vue.42f9fa8c.js","assets/index.3df36c47.js","assets/CloseCircleOutlined.d812373e.js","assets/CheckCircleFilled.4f98aa74.js","assets/index.66022f00.js","assets/ai.fdf9d264.js","assets/uuid.1d0c1336.js","assets/PhCheckCircle.vue.0f093cc8.js","assets/PhCopySimple.vue.2f702df6.js","assets/controller.814119db.js","assets/vue-flow-core.d5224d21.js","assets/validations.85c2eaf0.js","assets/metadata.f6f7dc2a.js","assets/PhRobot.vue.b32edade.js","assets/PhWebhooksLogo.vue.4a21f375.js","assets/controller.5cd99ce3.js","assets/fetch.853d0458.js","assets/PhPencil.vue.066e4c16.js","assets/log.cf9bdab9.css","assets/ant-design.7bc38784.js","assets/Avatar.95100b67.js","assets/LoadingOutlined.16257dcc.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/SourceCode.acedef32.js","assets/PhFolder.vue.0df0adb0.js","assets/toggleHighContrast.807caa39.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.382c465b.css","assets/TasksManager.4e6dcd95.js","assets/index.6b4a360b.js","assets/CollapsePanel.c4488f02.js","assets/index.3cd4e5c3.js","assets/TasksManager.c9a90d36.css","assets/PhCaretRight.vue.4991f97b.js","assets/Badge.68625667.js","assets/RuntimeCommonSettings.24be80d3.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4bc17f3e.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.48802111.js"),["assets/ResourcesTracker.48802111.js","assets/BaseLayout.67aa1ba9.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/BaseLayout.a3a91ce0.css","assets/asyncComputed.72258d46.js","assets/polling.5dbad85d.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.5ae4e82e.js"),["assets/Welcome.5ae4e82e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.42181c03.js","assets/Logo.d078ad29.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/Logo.b7d81119.css","assets/ContentLayout.d10a1126.js","assets/ContentLayout.ee57a545.css","assets/fetch.853d0458.js","assets/Card.ec9992d9.js","assets/TabPane.18981b31.js","assets/workspaceStore.adb5c47a.js","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/linters.7a795f3a.js","assets/asyncComputed.72258d46.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.f5b1af4a.js"),["assets/App.f5b1af4a.js","assets/App.vue_vue_type_style_index_0_lang.89397709.js","assets/workspaceStore.adb5c47a.js","assets/index.e2d9b9bf.js","assets/index.ae14d18e.css","assets/url.d39b9cf8.js","assets/colorHelpers.709902cd.js","assets/PlayerConfigProvider.6e5f9916.js","assets/index.b01f39e4.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(l);l.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,l),e.use(l),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.2fef5943.js.map
