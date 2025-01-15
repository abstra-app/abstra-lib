var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as g,f,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.41d62268.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.dc910481.js";import"./linters.f57d92bc.js";import"./url.a86d80ff.js";import"./colorHelpers.f908ab89.js";import"./asyncComputed.69156f97.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3cc0283b-ca96-452b-9bd7-fba75efabbc5",t._sentryDebugIdIdentifier="sentry-dbid-3cc0283b-ca96-452b-9bd7-fba75efabbc5")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"26311a6184c3c7299c3bff192c710a372a937616",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.eb56429a.js"),["assets/Home.eb56429a.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.2bdc6dd1.js"),["assets/Workspace.2bdc6dd1.js","assets/BaseLayout.f6a86ecb.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.a14714af.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/NavbarControls.1b475cfd.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/index.30fcbfa1.js","assets/CloseCircleOutlined.1492f8a8.js","assets/index.c2779def.js","assets/workspaces.1dbaa18f.js","assets/record.e03a72df.js","assets/popupNotifcation.3bfed761.js","assets/PhArrowSquareOut.vue.143833bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/PhChats.vue.0df1e5b8.js","assets/polling.59b0a65e.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/Logo.46d5120c.css","assets/PhArrowCounterClockwise.vue.874e783f.js","assets/PhIdentificationBadge.vue.a4a7722a.js","assets/PhCaretRight.vue.956c0796.js","assets/index.ba314016.js","assets/index.3b143b4b.js","assets/Avatar.b2ed7c8a.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.1712954f.js"),["assets/Stages.1712954f.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/ContentLayout.dbcfc7e1.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b7efaab3.js","assets/router.4b0266a8.js","assets/Badge.a60ba35b.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/url.a86d80ff.js","assets/PhDotsThreeVertical.vue.a0702168.js","assets/index.abf2c0ef.js","assets/index.30fcbfa1.js","assets/CrudView.c80c8ede.css","assets/ant-design.ca43ae68.js","assets/asyncComputed.69156f97.js","assets/string.00363640.js","assets/PhArrowSquareOut.vue.143833bc.js","assets/scripts.f2cf98be.js","assets/record.e03a72df.js","assets/linters.f57d92bc.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/colorHelpers.f908ab89.js","assets/ai.5e42cb73.js","assets/index.c2779def.js","assets/PhWebhooksLogo.vue.0a551dc7.js","assets/validations.7b93037c.js","assets/Stages.47f5a465.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.cd7e5966.js"),["assets/WorkflowEditor.cd7e5966.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/vue-flow-minimap.3bbc65a3.js","assets/validations.7b93037c.js","assets/string.00363640.js","assets/uuid.f7ada658.js","assets/metadata.671fb4ea.js","assets/PhWebhooksLogo.vue.0a551dc7.js","assets/asyncComputed.69156f97.js","assets/linters.f57d92bc.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/record.e03a72df.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.492d3f2e.js","assets/PhArrowCounterClockwise.vue.874e783f.js","assets/TasksManager.60730588.js","assets/tasksController.71cb3982.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/polling.59b0a65e.js","assets/scripts.f2cf98be.js","assets/ant-design.ca43ae68.js","assets/PhArrowSquareOut.vue.143833bc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0ebe7b4a.js","assets/Card.4171da30.js","assets/TabPane.39154347.js","assets/CollapsePanel.d288e0c1.js","assets/index.93d1a0ce.js","assets/TasksManager.53a9d7b9.css","assets/index.f2c227d4.js","assets/Badge.a60ba35b.js","assets/index.2ece01e2.js","assets/PhArrowDown.vue.147b3334.js","assets/WorkflowEditor.acc53efd.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.649156bf.js"),["assets/Tasks.649156bf.js","assets/TasksView.vue_vue_type_script_setup_true_lang.6fb29d08.js","assets/tasksController.71cb3982.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/polling.59b0a65e.js","assets/string.00363640.js","assets/scripts.f2cf98be.js","assets/record.e03a72df.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/metadata.671fb4ea.js","assets/PhWebhooksLogo.vue.0a551dc7.js","assets/ant-design.ca43ae68.js","assets/dayjs.e58dc7cb.js","assets/index.abf2c0ef.js","assets/ContentLayout.dbcfc7e1.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.8bdd0428.js"),["assets/Logs.8bdd0428.js","assets/ContentLayout.dbcfc7e1.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.57ef8be0.js","assets/string.00363640.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/build.599c2daf.js","assets/tables.b8f506fd.js","assets/record.e03a72df.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c96f48d3.js","assets/LoadingOutlined.5365deb7.js","assets/polling.59b0a65e.js","assets/datetime.dfb94e4a.js","assets/ant-design.ca43ae68.js","assets/index.30fcbfa1.js","assets/index.abf2c0ef.js","assets/dayjs.e58dc7cb.js","assets/CollapsePanel.d288e0c1.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.e6075137.js"),["assets/PreferencesEditor.e6075137.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/record.e03a72df.js","assets/PlayerNavbar.49b9196f.js","assets/metadata.671fb4ea.js","assets/PhWebhooksLogo.vue.0a551dc7.js","assets/LoadingOutlined.5365deb7.js","assets/PhSignOut.vue.a14714af.js","assets/index.3b143b4b.js","assets/Avatar.b2ed7c8a.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.8e682629.js","assets/index.2ece01e2.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0ebe7b4a.js","assets/ContentLayout.dbcfc7e1.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.de311500.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.a0f13142.js"),["assets/RequirementsEditor.a0f13142.js","assets/ContentLayout.dbcfc7e1.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/ContentLayout.ee57a545.css","assets/CrudView.b7efaab3.js","assets/router.4b0266a8.js","assets/Badge.a60ba35b.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/url.a86d80ff.js","assets/PhDotsThreeVertical.vue.a0702168.js","assets/index.abf2c0ef.js","assets/index.30fcbfa1.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.69156f97.js","assets/polling.59b0a65e.js","assets/linters.f57d92bc.js","assets/record.e03a72df.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/colorHelpers.f908ab89.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.70fdb6f0.js"),["assets/EnvVarsEditor.70fdb6f0.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/record.e03a72df.js","assets/ContentLayout.dbcfc7e1.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.806826ff.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/fetch.1b96bd3c.js","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.b7efaab3.js","assets/router.4b0266a8.js","assets/Badge.a60ba35b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/PhDotsThreeVertical.vue.a0702168.js","assets/index.abf2c0ef.js","assets/index.30fcbfa1.js","assets/CrudView.c80c8ede.css","assets/polling.59b0a65e.js","assets/PhPencil.vue.253cd4a9.js","assets/index.c2779def.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.61e00060.js"),["assets/AccessControlEditor.61e00060.js","assets/ContentLayout.dbcfc7e1.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/ContentLayout.ee57a545.css","assets/fetch.1b96bd3c.js","assets/record.e03a72df.js","assets/repository.e925de4e.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/asyncComputed.69156f97.js","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.143833bc.js","assets/index.492d3f2e.js","assets/metadata.671fb4ea.js","assets/PhWebhooksLogo.vue.0a551dc7.js","assets/index.c2779def.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/linters.f57d92bc.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.2aa4d758.js"),["assets/ProjectLogin.2aa4d758.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/Logo.46d5120c.css","assets/BaseLayout.f6a86ecb.js","assets/BaseLayout.b7a1f19a.css","assets/index.ba314016.js","assets/index.3b143b4b.js","assets/Avatar.b2ed7c8a.js","assets/index.30fcbfa1.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.17740c82.js"),["assets/FormEditor.17740c82.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/BaseLayout.f6a86ecb.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3339f25e.js","assets/scripts.f2cf98be.js","assets/record.e03a72df.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/validations.7b93037c.js","assets/string.00363640.js","assets/uuid.f7ada658.js","assets/PhCaretRight.vue.956c0796.js","assets/Badge.a60ba35b.js","assets/LoadingOutlined.5365deb7.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/polling.59b0a65e.js","assets/PhFolder.vue.0e572f65.js","assets/PhPencil.vue.253cd4a9.js","assets/toggleHighContrast.58a06bb7.js","assets/toggleHighContrast.30d77c87.css","assets/index.c2779def.js","assets/Card.4171da30.js","assets/TabPane.39154347.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/Logo.46d5120c.css","assets/ant-design.ca43ae68.js","assets/PhGear.vue.7c914f57.js","assets/ai.5e42cb73.js","assets/PhCheckCircle.vue.9fcd302a.js","assets/PhCopySimple.vue.67475848.js","assets/Avatar.b2ed7c8a.js","assets/SmartChat.b84b94b5.css","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.bf93b886.js","assets/Login.vue_vue_type_script_setup_true_lang.e97095a6.js","assets/CircularLoading.2c63a4ca.js","assets/CircularLoading.1a558a0d.css","assets/index.2ece01e2.js","assets/Login.28df3844.css","assets/Steps.a6de77c7.js","assets/index.ced068b0.js","assets/Steps.4d03c6c1.css","assets/Watermark.9d1bf495.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.a5c2ba90.css","assets/PlayerNavbar.49b9196f.js","assets/metadata.671fb4ea.js","assets/PhWebhooksLogo.vue.0a551dc7.js","assets/PhSignOut.vue.a14714af.js","assets/index.3b143b4b.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.8e682629.js","assets/PlayerConfigProvider.309c06f9.css","assets/PhArrowSquareOut.vue.143833bc.js","assets/index.30fcbfa1.js","assets/TasksManager.60730588.js","assets/tasksController.71cb3982.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0ebe7b4a.js","assets/index.492d3f2e.js","assets/CollapsePanel.d288e0c1.js","assets/index.93d1a0ce.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.1b475cfd.js","assets/CloseCircleOutlined.1492f8a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/PhChats.vue.0df1e5b8.js","assets/NavbarControls.e9c97288.css","assets/index.ba314016.js","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.c10d2cb9.js"),["assets/JobEditor.c10d2cb9.js","assets/BaseLayout.f6a86ecb.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3339f25e.js","assets/scripts.f2cf98be.js","assets/record.e03a72df.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/validations.7b93037c.js","assets/string.00363640.js","assets/uuid.f7ada658.js","assets/PhCaretRight.vue.956c0796.js","assets/Badge.a60ba35b.js","assets/LoadingOutlined.5365deb7.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/polling.59b0a65e.js","assets/PhFolder.vue.0e572f65.js","assets/PhPencil.vue.253cd4a9.js","assets/toggleHighContrast.58a06bb7.js","assets/toggleHighContrast.30d77c87.css","assets/index.c2779def.js","assets/Card.4171da30.js","assets/TabPane.39154347.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/Logo.46d5120c.css","assets/ant-design.ca43ae68.js","assets/PhGear.vue.7c914f57.js","assets/ai.5e42cb73.js","assets/PhCheckCircle.vue.9fcd302a.js","assets/PhCopySimple.vue.67475848.js","assets/Avatar.b2ed7c8a.js","assets/SmartChat.b84b94b5.css","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.bd8425c0.js","assets/index.30fcbfa1.js","assets/RunButton.vue_vue_type_script_setup_true_lang.638a2cb1.js","assets/TasksManager.60730588.js","assets/tasksController.71cb3982.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/PhArrowSquareOut.vue.143833bc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0ebe7b4a.js","assets/index.492d3f2e.js","assets/CollapsePanel.d288e0c1.js","assets/index.93d1a0ce.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.1b475cfd.js","assets/CloseCircleOutlined.1492f8a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/PhChats.vue.0df1e5b8.js","assets/NavbarControls.e9c97288.css","assets/index.ba314016.js","assets/index.3b143b4b.js","assets/JobEditor.60660c58.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.c7cbb568.js"),["assets/HookEditor.c7cbb568.js","assets/BaseLayout.f6a86ecb.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3339f25e.js","assets/scripts.f2cf98be.js","assets/record.e03a72df.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/validations.7b93037c.js","assets/string.00363640.js","assets/uuid.f7ada658.js","assets/PhCaretRight.vue.956c0796.js","assets/Badge.a60ba35b.js","assets/LoadingOutlined.5365deb7.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/polling.59b0a65e.js","assets/PhFolder.vue.0e572f65.js","assets/PhPencil.vue.253cd4a9.js","assets/toggleHighContrast.58a06bb7.js","assets/toggleHighContrast.30d77c87.css","assets/index.c2779def.js","assets/Card.4171da30.js","assets/TabPane.39154347.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/Logo.46d5120c.css","assets/ant-design.ca43ae68.js","assets/PhGear.vue.7c914f57.js","assets/ai.5e42cb73.js","assets/PhCheckCircle.vue.9fcd302a.js","assets/PhCopySimple.vue.67475848.js","assets/Avatar.b2ed7c8a.js","assets/SmartChat.b84b94b5.css","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.638a2cb1.js","assets/index.5a863b07.js","assets/CollapsePanel.d288e0c1.js","assets/index.30fcbfa1.js","assets/index.492d3f2e.js","assets/TasksManager.60730588.js","assets/tasksController.71cb3982.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/PhArrowSquareOut.vue.143833bc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0ebe7b4a.js","assets/index.93d1a0ce.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.1b475cfd.js","assets/CloseCircleOutlined.1492f8a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/PhChats.vue.0df1e5b8.js","assets/NavbarControls.e9c97288.css","assets/index.ba314016.js","assets/index.3b143b4b.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.8d75b918.js"),["assets/ScriptEditor.8d75b918.js","assets/BaseLayout.f6a86ecb.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.3339f25e.js","assets/scripts.f2cf98be.js","assets/record.e03a72df.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/validations.7b93037c.js","assets/string.00363640.js","assets/uuid.f7ada658.js","assets/PhCaretRight.vue.956c0796.js","assets/Badge.a60ba35b.js","assets/LoadingOutlined.5365deb7.js","assets/workspaces.1dbaa18f.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/polling.59b0a65e.js","assets/PhFolder.vue.0e572f65.js","assets/PhPencil.vue.253cd4a9.js","assets/toggleHighContrast.58a06bb7.js","assets/toggleHighContrast.30d77c87.css","assets/index.c2779def.js","assets/Card.4171da30.js","assets/TabPane.39154347.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/Logo.46d5120c.css","assets/ant-design.ca43ae68.js","assets/PhGear.vue.7c914f57.js","assets/ai.5e42cb73.js","assets/PhCheckCircle.vue.9fcd302a.js","assets/PhCopySimple.vue.67475848.js","assets/Avatar.b2ed7c8a.js","assets/SmartChat.b84b94b5.css","assets/SaveButton.2a2de475.js","assets/UnsavedChangesHandler.dd308c17.js","assets/ExclamationCircleOutlined.592d8693.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/tasksController.71cb3982.js","assets/gateway.e150b779.js","assets/popupNotifcation.3bfed761.js","assets/RunButton.vue_vue_type_script_setup_true_lang.638a2cb1.js","assets/TasksManager.60730588.js","assets/PhArrowSquareOut.vue.143833bc.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0ebe7b4a.js","assets/index.492d3f2e.js","assets/CollapsePanel.d288e0c1.js","assets/index.93d1a0ce.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.1b475cfd.js","assets/index.30fcbfa1.js","assets/CloseCircleOutlined.1492f8a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.949c56e5.js","assets/BookOutlined.ef7353f7.js","assets/PhChats.vue.0df1e5b8.js","assets/NavbarControls.e9c97288.css","assets/index.ba314016.js","assets/index.3b143b4b.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.231388fb.js"),["assets/ResourcesTracker.231388fb.js","assets/BaseLayout.f6a86ecb.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.69156f97.js","assets/polling.59b0a65e.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.efcbd8d6.js"),["assets/Welcome.efcbd8d6.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.09d7400e.js","assets/Logo.07b22807.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/Logo.46d5120c.css","assets/ContentLayout.dbcfc7e1.js","assets/ContentLayout.ee57a545.css","assets/fetch.1b96bd3c.js","assets/Card.4171da30.js","assets/TabPane.39154347.js","assets/workspaceStore.dc910481.js","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/linters.f57d92bc.js","assets/asyncComputed.69156f97.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.27bc6ca7.js"),["assets/App.27bc6ca7.js","assets/App.vue_vue_type_style_index_0_lang.899b4891.js","assets/workspaceStore.dc910481.js","assets/index.41d62268.js","assets/index.1cfd8156.css","assets/url.a86d80ff.js","assets/colorHelpers.f908ab89.js","assets/PlayerConfigProvider.8e682629.js","assets/index.2ece01e2.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.9e06f05a.js.map
