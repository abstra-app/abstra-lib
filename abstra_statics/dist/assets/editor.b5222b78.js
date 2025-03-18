var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f as E,g as f,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.de1db9de.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.5cedb055.js";import"./linters.81ecc6c7.js";import"./url.fa14bdfb.js";import"./colorHelpers.424ab1ff.js";import"./asyncComputed.97110c5b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6a5cbaec-4959-4486-b431-72117c4d5170",t._sentryDebugIdIdentifier="sentry-dbid-6a5cbaec-4959-4486-b431-72117c4d5170")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"61232e5116e4d559c866570316f09fabeeb4a4b9",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=E(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=E(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return f(()=>e.value,_),f(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.e5ec491c.js"),["assets/Home.e5ec491c.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.19ce71c3.js"),["assets/Workspace.19ce71c3.js","assets/BaseLayout.4c276ea9.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.e5ec9fdf.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/NavbarControls.96cf6186.js","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/index.ea3d0568.js","assets/CloseCircleOutlined.32e61006.js","assets/index.8abad05d.js","assets/workspaces.30e817bc.js","assets/record.10a0223e.js","assets/popupNotifcation.e06495cc.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/PhChats.vue.e75e002c.js","assets/polling.4520a9f0.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/Logo.55d50ea4.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.cf55c74d.js","assets/PhIdentificationBadge.vue.3bc49397.js","assets/PhCaretRight.vue.553e503a.js","assets/index.55dbfba6.js","assets/index.45b767a5.js","assets/Avatar.a26e5696.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.df1039ba.js"),["assets/Stages.df1039ba.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/ContentLayout.d0937297.js","assets/ContentLayout.ee57a545.css","assets/CrudView.13be4029.js","assets/router.888c99f7.js","assets/Badge.dc078df6.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/url.fa14bdfb.js","assets/PhDotsThreeVertical.vue.4db5ddfc.js","assets/index.50d61e81.js","assets/index.ea3d0568.js","assets/CrudView.c80c8ede.css","assets/ant-design.bf68a7d3.js","assets/asyncComputed.97110c5b.js","assets/string.51fd0f47.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/scripts.77db2679.js","assets/record.10a0223e.js","assets/linters.81ecc6c7.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/colorHelpers.424ab1ff.js","assets/ai.bb520640.js","assets/index.8abad05d.js","assets/PhWebhooksLogo.vue.c687ab71.js","assets/validations.7d8b984a.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.2501b54e.js"),["assets/WorkflowEditor.2501b54e.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.909c3ddc.js","assets/validations.7d8b984a.js","assets/string.51fd0f47.js","assets/uuid.965977c3.js","assets/metadata.b9a7c678.js","assets/PhRobot.vue.6bb0e49a.js","assets/PhWebhooksLogo.vue.c687ab71.js","assets/asyncComputed.97110c5b.js","assets/linters.81ecc6c7.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/record.10a0223e.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.d4369579.js","assets/index.8abad05d.js","assets/PhArrowCounterClockwise.vue.cf55c74d.js","assets/TasksManager.ce889983.js","assets/tasksController.fd3f78ee.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/scripts.77db2679.js","assets/polling.4520a9f0.js","assets/ant-design.bf68a7d3.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/Card.7ae000ab.js","assets/TabPane.31ba4ac3.js","assets/CollapsePanel.0bc092df.js","assets/index.16474d71.js","assets/TasksManager.c9a90d36.css","assets/index.726f02dc.js","assets/Badge.dc078df6.js","assets/index.0e712dbd.js","assets/PhArrowDown.vue.c3d1a12a.js","assets/WorkflowEditor.0f37f7c9.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.b4210a39.js"),["assets/Tasks.b4210a39.js","assets/TasksView.vue_vue_type_script_setup_true_lang.fc89e2d6.js","assets/tasksController.fd3f78ee.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/scripts.77db2679.js","assets/record.10a0223e.js","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/polling.4520a9f0.js","assets/string.51fd0f47.js","assets/metadata.b9a7c678.js","assets/PhRobot.vue.6bb0e49a.js","assets/PhWebhooksLogo.vue.c687ab71.js","assets/ant-design.bf68a7d3.js","assets/dayjs.e6d51040.js","assets/index.50d61e81.js","assets/ContentLayout.d0937297.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.e3feae0c.js"),["assets/Logs.e3feae0c.js","assets/ContentLayout.d0937297.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.b20d5527.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/build.fe2252f2.js","assets/string.51fd0f47.js","assets/tables.6f49032e.js","assets/record.10a0223e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.0579d9cd.js","assets/LoadingOutlined.6b0e82ec.js","assets/polling.4520a9f0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/datetime.a52e75b4.js","assets/ant-design.bf68a7d3.js","assets/index.ea3d0568.js","assets/index.50d61e81.js","assets/dayjs.e6d51040.js","assets/CollapsePanel.0bc092df.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.801b4aed.js"),["assets/PreferencesEditor.801b4aed.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/record.10a0223e.js","assets/PlayerNavbar.0c73a77e.js","assets/metadata.b9a7c678.js","assets/PhRobot.vue.6bb0e49a.js","assets/PhWebhooksLogo.vue.c687ab71.js","assets/LoadingOutlined.6b0e82ec.js","assets/PhSignOut.vue.e5ec9fdf.js","assets/index.45b767a5.js","assets/Avatar.a26e5696.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.e1773333.js","assets/index.0e712dbd.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/ContentLayout.d0937297.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.747dab87.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.f30826fa.js"),["assets/RequirementsEditor.f30826fa.js","assets/ContentLayout.d0937297.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.13be4029.js","assets/router.888c99f7.js","assets/Badge.dc078df6.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/url.fa14bdfb.js","assets/PhDotsThreeVertical.vue.4db5ddfc.js","assets/index.50d61e81.js","assets/index.ea3d0568.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.97110c5b.js","assets/polling.4520a9f0.js","assets/linters.81ecc6c7.js","assets/record.10a0223e.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/colorHelpers.424ab1ff.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.64e8ae4c.js"),["assets/EnvVarsEditor.64e8ae4c.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/record.10a0223e.js","assets/ContentLayout.d0937297.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.27d8bfe7.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/fetch.c6a58462.js","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.13be4029.js","assets/router.888c99f7.js","assets/Badge.dc078df6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/PhDotsThreeVertical.vue.4db5ddfc.js","assets/index.50d61e81.js","assets/index.ea3d0568.js","assets/CrudView.c80c8ede.css","assets/polling.4520a9f0.js","assets/PhPencil.vue.cec697c4.js","assets/index.8abad05d.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.cce74345.js"),["assets/AccessControlEditor.cce74345.js","assets/ContentLayout.d0937297.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.c6a58462.js","assets/record.10a0223e.js","assets/repository.dc2e993a.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/asyncComputed.97110c5b.js","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/index.d4369579.js","assets/metadata.b9a7c678.js","assets/PhRobot.vue.6bb0e49a.js","assets/PhWebhooksLogo.vue.c687ab71.js","assets/index.8abad05d.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/linters.81ecc6c7.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.92925597.js"),["assets/ProjectLogin.92925597.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/Logo.55d50ea4.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.4c276ea9.js","assets/BaseLayout.b7a1f19a.css","assets/index.55dbfba6.js","assets/index.45b767a5.js","assets/Avatar.a26e5696.js","assets/index.ea3d0568.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.ee7990bf.js"),["assets/FormEditor.ee7990bf.js","assets/FormRunner.7cf25e9f.js","assets/url.fa14bdfb.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/workspaceStore.5cedb055.js","assets/colorHelpers.424ab1ff.js","assets/Login.vue_vue_type_script_setup_true_lang.b492f542.js","assets/Logo.55d50ea4.js","assets/Logo.8bf94625.css","assets/string.51fd0f47.js","assets/OTPInput.6060512d.js","assets/OTPInput.277362d6.css","assets/index.8abad05d.js","assets/Login.ae1154ae.css","assets/Steps.e72082b6.js","assets/index.fc6eafaf.js","assets/Steps.4d03c6c1.css","assets/Watermark.b2d59775.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.97110c5b.js","assets/scripts.77db2679.js","assets/record.10a0223e.js","assets/linters.81ecc6c7.js","assets/workspaces.30e817bc.js","assets/RuntimeCommonSettings.412d0f5c.js","assets/BaseLayout.4c276ea9.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.965977c3.js","assets/NavbarControls.96cf6186.js","assets/index.ea3d0568.js","assets/CloseCircleOutlined.32e61006.js","assets/popupNotifcation.e06495cc.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/PhChats.vue.e75e002c.js","assets/polling.4520a9f0.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/ant-design.bf68a7d3.js","assets/ai.bb520640.js","assets/PhCheckCircle.vue.4bfd5135.js","assets/PhCopySimple.vue.746c3f45.js","assets/Avatar.a26e5696.js","assets/LoadingOutlined.6b0e82ec.js","assets/Card.7ae000ab.js","assets/TabPane.31ba4ac3.js","assets/PhCaretRight.vue.553e503a.js","assets/Badge.dc078df6.js","assets/PhFolder.vue.989293da.js","assets/PhPencil.vue.cec697c4.js","assets/validations.7d8b984a.js","assets/toggleHighContrast.a16aef3c.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.ce889983.js","assets/tasksController.fd3f78ee.js","assets/gateway.b4dec3fd.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/index.d4369579.js","assets/CollapsePanel.0bc092df.js","assets/index.16474d71.js","assets/TasksManager.c9a90d36.css","assets/index.55dbfba6.js","assets/index.45b767a5.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/PlayerNavbar.0c73a77e.js","assets/metadata.b9a7c678.js","assets/PhRobot.vue.6bb0e49a.js","assets/PhWebhooksLogo.vue.c687ab71.js","assets/PhSignOut.vue.e5ec9fdf.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.e1773333.js","assets/index.0e712dbd.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.30a35fab.js"),["assets/JobEditor.30a35fab.js","assets/asyncComputed.97110c5b.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/scripts.77db2679.js","assets/record.10a0223e.js","assets/linters.81ecc6c7.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/RuntimeCommonSettings.412d0f5c.js","assets/BaseLayout.4c276ea9.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.965977c3.js","assets/NavbarControls.96cf6186.js","assets/index.ea3d0568.js","assets/CloseCircleOutlined.32e61006.js","assets/index.8abad05d.js","assets/popupNotifcation.e06495cc.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/PhChats.vue.e75e002c.js","assets/polling.4520a9f0.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/Logo.55d50ea4.js","assets/Logo.8bf94625.css","assets/ant-design.bf68a7d3.js","assets/ai.bb520640.js","assets/PhCheckCircle.vue.4bfd5135.js","assets/PhCopySimple.vue.746c3f45.js","assets/Avatar.a26e5696.js","assets/LoadingOutlined.6b0e82ec.js","assets/Card.7ae000ab.js","assets/TabPane.31ba4ac3.js","assets/PhCaretRight.vue.553e503a.js","assets/Badge.dc078df6.js","assets/PhFolder.vue.989293da.js","assets/PhPencil.vue.cec697c4.js","assets/validations.7d8b984a.js","assets/string.51fd0f47.js","assets/toggleHighContrast.a16aef3c.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.ce889983.js","assets/tasksController.fd3f78ee.js","assets/gateway.b4dec3fd.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/index.d4369579.js","assets/CollapsePanel.0bc092df.js","assets/index.16474d71.js","assets/TasksManager.c9a90d36.css","assets/index.55dbfba6.js","assets/index.45b767a5.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/index.a0176056.js","assets/RunButton.vue_vue_type_script_setup_true_lang.882ae289.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.390f7c0d.js"),["assets/HookEditor.390f7c0d.js","assets/asyncComputed.97110c5b.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/scripts.77db2679.js","assets/record.10a0223e.js","assets/linters.81ecc6c7.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/RuntimeCommonSettings.412d0f5c.js","assets/BaseLayout.4c276ea9.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.965977c3.js","assets/NavbarControls.96cf6186.js","assets/index.ea3d0568.js","assets/CloseCircleOutlined.32e61006.js","assets/index.8abad05d.js","assets/popupNotifcation.e06495cc.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/PhChats.vue.e75e002c.js","assets/polling.4520a9f0.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/Logo.55d50ea4.js","assets/Logo.8bf94625.css","assets/ant-design.bf68a7d3.js","assets/ai.bb520640.js","assets/PhCheckCircle.vue.4bfd5135.js","assets/PhCopySimple.vue.746c3f45.js","assets/Avatar.a26e5696.js","assets/LoadingOutlined.6b0e82ec.js","assets/Card.7ae000ab.js","assets/TabPane.31ba4ac3.js","assets/PhCaretRight.vue.553e503a.js","assets/Badge.dc078df6.js","assets/PhFolder.vue.989293da.js","assets/PhPencil.vue.cec697c4.js","assets/validations.7d8b984a.js","assets/string.51fd0f47.js","assets/toggleHighContrast.a16aef3c.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.ce889983.js","assets/tasksController.fd3f78ee.js","assets/gateway.b4dec3fd.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/index.d4369579.js","assets/CollapsePanel.0bc092df.js","assets/index.16474d71.js","assets/TasksManager.c9a90d36.css","assets/index.55dbfba6.js","assets/index.45b767a5.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.882ae289.js","assets/index.b462e4ce.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.9ca2b264.js"),["assets/ScriptEditor.9ca2b264.js","assets/tasksController.fd3f78ee.js","assets/gateway.b4dec3fd.js","assets/popupNotifcation.e06495cc.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/scripts.77db2679.js","assets/record.10a0223e.js","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/polling.4520a9f0.js","assets/string.51fd0f47.js","assets/workspaces.30e817bc.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/RuntimeCommonSettings.412d0f5c.js","assets/BaseLayout.4c276ea9.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.7d4d12c5.js","assets/UnsavedChangesHandler.592a0ffd.js","assets/ExclamationCircleOutlined.bd49b0c3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/uuid.965977c3.js","assets/NavbarControls.96cf6186.js","assets/index.ea3d0568.js","assets/CloseCircleOutlined.32e61006.js","assets/index.8abad05d.js","assets/PhArrowSquareOut.vue.68eeaed8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d8faabbe.js","assets/BookOutlined.1fa7b3a4.js","assets/PhChats.vue.e75e002c.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/Logo.55d50ea4.js","assets/Logo.8bf94625.css","assets/ant-design.bf68a7d3.js","assets/ai.bb520640.js","assets/PhCheckCircle.vue.4bfd5135.js","assets/PhCopySimple.vue.746c3f45.js","assets/Avatar.a26e5696.js","assets/LoadingOutlined.6b0e82ec.js","assets/Card.7ae000ab.js","assets/TabPane.31ba4ac3.js","assets/PhCaretRight.vue.553e503a.js","assets/Badge.dc078df6.js","assets/PhFolder.vue.989293da.js","assets/PhPencil.vue.cec697c4.js","assets/validations.7d8b984a.js","assets/toggleHighContrast.a16aef3c.js","assets/toggleHighContrast.30d77c87.css","assets/TasksManager.ce889983.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.dc26eb55.js","assets/index.d4369579.js","assets/CollapsePanel.0bc092df.js","assets/index.16474d71.js","assets/TasksManager.c9a90d36.css","assets/index.55dbfba6.js","assets/index.45b767a5.js","assets/RuntimeCommonSettings.58a0e2c6.css","assets/RunButton.vue_vue_type_script_setup_true_lang.882ae289.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.97f0f2d5.js"),["assets/ResourcesTracker.97f0f2d5.js","assets/BaseLayout.4c276ea9.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.97110c5b.js","assets/polling.4520a9f0.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.993ba89d.js"),["assets/Welcome.993ba89d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.fe7ccd7e.js","assets/Logo.55d50ea4.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.d0937297.js","assets/ContentLayout.ee57a545.css","assets/fetch.c6a58462.js","assets/Card.7ae000ab.js","assets/TabPane.31ba4ac3.js","assets/workspaceStore.5cedb055.js","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/linters.81ecc6c7.js","assets/asyncComputed.97110c5b.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.0f6daabe.js"),["assets/App.0f6daabe.js","assets/App.vue_vue_type_style_index_0_lang.61ff746f.js","assets/workspaceStore.5cedb055.js","assets/index.de1db9de.js","assets/index.ae14d18e.css","assets/url.fa14bdfb.js","assets/colorHelpers.424ab1ff.js","assets/PlayerConfigProvider.e1773333.js","assets/index.0e712dbd.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.b5222b78.js.map
