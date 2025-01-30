var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.42ecc0f5.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.a668a7d7.js";import"./linters.9e8a2447.js";import"./url.6b32122d.js";import"./colorHelpers.69def7d3.js";import"./asyncComputed.39c6c543.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0f6ece38-fe2a-4fe1-bdec-4643c4a0bddf",t._sentryDebugIdIdentifier="sentry-dbid-0f6ece38-fe2a-4fe1-bdec-4643c4a0bddf")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"b23516a595af3e7d98a1d6a7a50b927cf9095be3",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.a07b010e.js"),["assets/Home.a07b010e.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.622435d9.js"),["assets/Workspace.622435d9.js","assets/BaseLayout.556ccf9e.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.d62ec9ae.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/NavbarControls.db6746df.js","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/index.3051dcdf.js","assets/CloseCircleOutlined.5eceac96.js","assets/index.7fccecc9.js","assets/workspaces.f974d670.js","assets/record.40a2105a.js","assets/popupNotifcation.7b1b3cab.js","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/PhChats.vue.c818bba4.js","assets/polling.f6f98fed.js","assets/NavbarControls.e9c97288.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.475e916b.js","assets/PhIdentificationBadge.vue.d2ad1664.js","assets/PhCaretRight.vue.e5c0d72b.js","assets/index.c5bd98ba.js","assets/index.8eec2112.js","assets/Avatar.884b62c1.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.5c38a7d6.js"),["assets/Stages.5c38a7d6.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/ContentLayout.dd6e05d6.js","assets/ContentLayout.ee57a545.css","assets/CrudView.cab832b1.js","assets/router.e81a48a3.js","assets/Badge.a006b51f.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/url.6b32122d.js","assets/PhDotsThreeVertical.vue.606992f8.js","assets/index.31231c0e.js","assets/index.3051dcdf.js","assets/CrudView.c80c8ede.css","assets/ant-design.929ab899.js","assets/asyncComputed.39c6c543.js","assets/string.8aea9111.js","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/scripts.ede0b25a.js","assets/record.40a2105a.js","assets/linters.9e8a2447.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/colorHelpers.69def7d3.js","assets/ai.e9073b3c.js","assets/index.7fccecc9.js","assets/PhWebhooksLogo.vue.19267cfc.js","assets/validations.76f5567d.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.07f1befb.js"),["assets/WorkflowEditor.07f1befb.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/vue-flow-minimap.fc0c40af.js","assets/validations.76f5567d.js","assets/string.8aea9111.js","assets/uuid.d59268a9.js","assets/metadata.af24dd8c.js","assets/PhWebhooksLogo.vue.19267cfc.js","assets/asyncComputed.39c6c543.js","assets/linters.9e8a2447.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/record.40a2105a.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.788558c6.js","assets/PhArrowCounterClockwise.vue.475e916b.js","assets/TasksManager.ac43ce97.js","assets/tasksController.90b4621c.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/polling.f6f98fed.js","assets/scripts.ede0b25a.js","assets/ant-design.929ab899.js","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c4957b40.js","assets/Card.f2064ae7.js","assets/TabPane.9ce708e8.js","assets/CollapsePanel.464e82d4.js","assets/index.a7c0cd4b.js","assets/TasksManager.53a9d7b9.css","assets/index.5c55e76f.js","assets/Badge.a006b51f.js","assets/index.2bc2a69b.js","assets/PhArrowDown.vue.e18b6040.js","assets/WorkflowEditor.82fc34fb.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.0fd99a31.js"),["assets/Tasks.0fd99a31.js","assets/TasksView.vue_vue_type_script_setup_true_lang.5f959dcb.js","assets/tasksController.90b4621c.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/polling.f6f98fed.js","assets/string.8aea9111.js","assets/scripts.ede0b25a.js","assets/record.40a2105a.js","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/metadata.af24dd8c.js","assets/PhWebhooksLogo.vue.19267cfc.js","assets/ant-design.929ab899.js","assets/dayjs.37f0747b.js","assets/index.31231c0e.js","assets/ContentLayout.dd6e05d6.js","assets/ContentLayout.ee57a545.css","assets/Tasks.b14f13b2.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.7f4ba93c.js"),["assets/Logs.7f4ba93c.js","assets/ContentLayout.dd6e05d6.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.217de800.js","assets/string.8aea9111.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/build.9093bd0a.js","assets/tables.b2cd3d1e.js","assets/record.40a2105a.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.96b6c400.js","assets/LoadingOutlined.ef756084.js","assets/polling.f6f98fed.js","assets/datetime.7cc502f9.js","assets/ant-design.929ab899.js","assets/index.3051dcdf.js","assets/index.31231c0e.js","assets/dayjs.37f0747b.js","assets/CollapsePanel.464e82d4.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.187220f3.js"),["assets/PreferencesEditor.187220f3.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/record.40a2105a.js","assets/PlayerNavbar.31d3bdb4.js","assets/metadata.af24dd8c.js","assets/PhWebhooksLogo.vue.19267cfc.js","assets/LoadingOutlined.ef756084.js","assets/PhSignOut.vue.d62ec9ae.js","assets/index.8eec2112.js","assets/Avatar.884b62c1.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.98d8f969.js","assets/index.2bc2a69b.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c4957b40.js","assets/ContentLayout.dd6e05d6.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.74171e12.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.2b5cd0b7.js"),["assets/RequirementsEditor.2b5cd0b7.js","assets/ContentLayout.dd6e05d6.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/CrudView.cab832b1.js","assets/router.e81a48a3.js","assets/Badge.a006b51f.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/url.6b32122d.js","assets/PhDotsThreeVertical.vue.606992f8.js","assets/index.31231c0e.js","assets/index.3051dcdf.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.39c6c543.js","assets/polling.f6f98fed.js","assets/linters.9e8a2447.js","assets/record.40a2105a.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/colorHelpers.69def7d3.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.867e7cfa.js"),["assets/EnvVarsEditor.867e7cfa.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/record.40a2105a.js","assets/ContentLayout.dd6e05d6.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.df730b7c.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/fetch.9ff2779a.js","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.cab832b1.js","assets/router.e81a48a3.js","assets/Badge.a006b51f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/PhDotsThreeVertical.vue.606992f8.js","assets/index.31231c0e.js","assets/index.3051dcdf.js","assets/CrudView.c80c8ede.css","assets/polling.f6f98fed.js","assets/PhPencil.vue.a54ce87f.js","assets/index.7fccecc9.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.2a3a0028.js"),["assets/AccessControlEditor.2a3a0028.js","assets/ContentLayout.dd6e05d6.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/ContentLayout.ee57a545.css","assets/fetch.9ff2779a.js","assets/record.40a2105a.js","assets/repository.0930ff3b.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/asyncComputed.39c6c543.js","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/index.788558c6.js","assets/metadata.af24dd8c.js","assets/PhWebhooksLogo.vue.19267cfc.js","assets/index.7fccecc9.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/linters.9e8a2447.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.5c0dfbaa.js"),["assets/ProjectLogin.5c0dfbaa.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/Logo.8bf94625.css","assets/BaseLayout.556ccf9e.js","assets/BaseLayout.b7a1f19a.css","assets/index.c5bd98ba.js","assets/index.8eec2112.js","assets/Avatar.884b62c1.js","assets/index.3051dcdf.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.74c18254.js"),["assets/FormEditor.74c18254.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/BaseLayout.556ccf9e.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.7081da99.js","assets/scripts.ede0b25a.js","assets/record.40a2105a.js","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/validations.76f5567d.js","assets/string.8aea9111.js","assets/uuid.d59268a9.js","assets/PhCaretRight.vue.e5c0d72b.js","assets/Badge.a006b51f.js","assets/LoadingOutlined.ef756084.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/polling.f6f98fed.js","assets/PhFolder.vue.ebffcdfe.js","assets/PhPencil.vue.a54ce87f.js","assets/toggleHighContrast.05cf1e93.js","assets/toggleHighContrast.30d77c87.css","assets/index.7fccecc9.js","assets/Card.f2064ae7.js","assets/TabPane.9ce708e8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/Logo.8bf94625.css","assets/ant-design.929ab899.js","assets/PhGear.vue.7bcea5f1.js","assets/ai.e9073b3c.js","assets/PhCheckCircle.vue.c1442e38.js","assets/PhCopySimple.vue.b1c4a438.js","assets/Avatar.884b62c1.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.39eaa1f6.js","assets/Login.vue_vue_type_script_setup_true_lang.4a7e7b45.js","assets/CircularLoading.43ed1dbb.js","assets/CircularLoading.1a558a0d.css","assets/index.2bc2a69b.js","assets/Login.28df3844.css","assets/Steps.26069ca9.js","assets/index.09557fb3.js","assets/Steps.4d03c6c1.css","assets/Watermark.24125629.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.a5c2ba90.css","assets/PlayerNavbar.31d3bdb4.js","assets/metadata.af24dd8c.js","assets/PhWebhooksLogo.vue.19267cfc.js","assets/PhSignOut.vue.d62ec9ae.js","assets/index.8eec2112.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.98d8f969.js","assets/PlayerConfigProvider.309c06f9.css","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/index.3051dcdf.js","assets/TasksManager.ac43ce97.js","assets/tasksController.90b4621c.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c4957b40.js","assets/index.788558c6.js","assets/CollapsePanel.464e82d4.js","assets/index.a7c0cd4b.js","assets/TasksManager.53a9d7b9.css","assets/NavbarControls.db6746df.js","assets/CloseCircleOutlined.5eceac96.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/PhChats.vue.c818bba4.js","assets/NavbarControls.e9c97288.css","assets/index.c5bd98ba.js","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.cda388c0.js"),["assets/JobEditor.cda388c0.js","assets/asyncComputed.39c6c543.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/scripts.ede0b25a.js","assets/record.40a2105a.js","assets/linters.9e8a2447.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0e5f9cc2.js","assets/BaseLayout.556ccf9e.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.7081da99.js","assets/validations.76f5567d.js","assets/string.8aea9111.js","assets/uuid.d59268a9.js","assets/PhCaretRight.vue.e5c0d72b.js","assets/Badge.a006b51f.js","assets/LoadingOutlined.ef756084.js","assets/polling.f6f98fed.js","assets/PhFolder.vue.ebffcdfe.js","assets/PhPencil.vue.a54ce87f.js","assets/toggleHighContrast.05cf1e93.js","assets/toggleHighContrast.30d77c87.css","assets/index.7fccecc9.js","assets/Card.f2064ae7.js","assets/TabPane.9ce708e8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/Logo.8bf94625.css","assets/ant-design.929ab899.js","assets/PhGear.vue.7bcea5f1.js","assets/ai.e9073b3c.js","assets/PhCheckCircle.vue.c1442e38.js","assets/PhCopySimple.vue.b1c4a438.js","assets/Avatar.884b62c1.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.db6746df.js","assets/index.3051dcdf.js","assets/CloseCircleOutlined.5eceac96.js","assets/popupNotifcation.7b1b3cab.js","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/PhChats.vue.c818bba4.js","assets/NavbarControls.e9c97288.css","assets/TasksManager.ac43ce97.js","assets/tasksController.90b4621c.js","assets/gateway.89fda673.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c4957b40.js","assets/index.788558c6.js","assets/CollapsePanel.464e82d4.js","assets/index.a7c0cd4b.js","assets/TasksManager.53a9d7b9.css","assets/index.c5bd98ba.js","assets/index.8eec2112.js","assets/index.ec2630f7.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.5efd6f26.js"),["assets/HookEditor.5efd6f26.js","assets/asyncComputed.39c6c543.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/scripts.ede0b25a.js","assets/record.40a2105a.js","assets/linters.9e8a2447.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0e5f9cc2.js","assets/BaseLayout.556ccf9e.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.7081da99.js","assets/validations.76f5567d.js","assets/string.8aea9111.js","assets/uuid.d59268a9.js","assets/PhCaretRight.vue.e5c0d72b.js","assets/Badge.a006b51f.js","assets/LoadingOutlined.ef756084.js","assets/polling.f6f98fed.js","assets/PhFolder.vue.ebffcdfe.js","assets/PhPencil.vue.a54ce87f.js","assets/toggleHighContrast.05cf1e93.js","assets/toggleHighContrast.30d77c87.css","assets/index.7fccecc9.js","assets/Card.f2064ae7.js","assets/TabPane.9ce708e8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/Logo.8bf94625.css","assets/ant-design.929ab899.js","assets/PhGear.vue.7bcea5f1.js","assets/ai.e9073b3c.js","assets/PhCheckCircle.vue.c1442e38.js","assets/PhCopySimple.vue.b1c4a438.js","assets/Avatar.884b62c1.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.db6746df.js","assets/index.3051dcdf.js","assets/CloseCircleOutlined.5eceac96.js","assets/popupNotifcation.7b1b3cab.js","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/PhChats.vue.c818bba4.js","assets/NavbarControls.e9c97288.css","assets/TasksManager.ac43ce97.js","assets/tasksController.90b4621c.js","assets/gateway.89fda673.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c4957b40.js","assets/index.788558c6.js","assets/CollapsePanel.464e82d4.js","assets/index.a7c0cd4b.js","assets/TasksManager.53a9d7b9.css","assets/index.c5bd98ba.js","assets/index.8eec2112.js","assets/index.0063aa24.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.5d96062b.js"),["assets/ScriptEditor.5d96062b.js","assets/tasksController.90b4621c.js","assets/gateway.89fda673.js","assets/popupNotifcation.7b1b3cab.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/polling.f6f98fed.js","assets/string.8aea9111.js","assets/scripts.ede0b25a.js","assets/record.40a2105a.js","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/workspaces.f974d670.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0e5f9cc2.js","assets/BaseLayout.556ccf9e.js","assets/BaseLayout.b7a1f19a.css","assets/SmartChat.7081da99.js","assets/validations.76f5567d.js","assets/uuid.d59268a9.js","assets/PhCaretRight.vue.e5c0d72b.js","assets/Badge.a006b51f.js","assets/LoadingOutlined.ef756084.js","assets/PhFolder.vue.ebffcdfe.js","assets/PhPencil.vue.a54ce87f.js","assets/toggleHighContrast.05cf1e93.js","assets/toggleHighContrast.30d77c87.css","assets/index.7fccecc9.js","assets/Card.f2064ae7.js","assets/TabPane.9ce708e8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/Logo.8bf94625.css","assets/ant-design.929ab899.js","assets/PhGear.vue.7bcea5f1.js","assets/ai.e9073b3c.js","assets/PhCheckCircle.vue.c1442e38.js","assets/PhCopySimple.vue.b1c4a438.js","assets/Avatar.884b62c1.js","assets/SmartChat.1e60d6d2.css","assets/SaveButton.62dccea0.js","assets/UnsavedChangesHandler.8a62cc07.js","assets/ExclamationCircleOutlined.c3b3bb0a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/NavbarControls.db6746df.js","assets/index.3051dcdf.js","assets/CloseCircleOutlined.5eceac96.js","assets/PhArrowSquareOut.vue.b69d4aa8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.be78ffa5.js","assets/BookOutlined.182e0980.js","assets/PhChats.vue.c818bba4.js","assets/NavbarControls.e9c97288.css","assets/TasksManager.ac43ce97.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c4957b40.js","assets/index.788558c6.js","assets/CollapsePanel.464e82d4.js","assets/index.a7c0cd4b.js","assets/TasksManager.53a9d7b9.css","assets/index.c5bd98ba.js","assets/index.8eec2112.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.c15981e9.js"),["assets/ResourcesTracker.c15981e9.js","assets/BaseLayout.556ccf9e.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.39c6c543.js","assets/polling.f6f98fed.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.19786d97.js"),["assets/Welcome.19786d97.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.c21340d6.js","assets/Logo.8959bdcc.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/Logo.8bf94625.css","assets/ContentLayout.dd6e05d6.js","assets/ContentLayout.ee57a545.css","assets/fetch.9ff2779a.js","assets/Card.f2064ae7.js","assets/TabPane.9ce708e8.js","assets/workspaceStore.a668a7d7.js","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/linters.9e8a2447.js","assets/asyncComputed.39c6c543.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.0ad6cddc.js"),["assets/App.0ad6cddc.js","assets/App.vue_vue_type_style_index_0_lang.d0892425.js","assets/workspaceStore.a668a7d7.js","assets/index.42ecc0f5.js","assets/index.65a6d955.css","assets/url.6b32122d.js","assets/colorHelpers.69def7d3.js","assets/PlayerConfigProvider.98d8f969.js","assets/index.2bc2a69b.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.e9610181.js.map
