var b=Object.defineProperty;var y=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.f7dd6fda.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.347f66ce.js";import"./linters.7f7a4daf.js";import"./url.21b4944a.js";import"./colorHelpers.3c2a0e57.js";import"./asyncComputed.43b1ed77.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fe6f494c-5b7e-4f7a-89cc-377ce3b67627",t._sentryDebugIdIdentifier="sentry-dbid-fe6f494c-5b7e-4f7a-89cc-377ce3b67627")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"2ef09a06008a2e7c508928d9d41af408847e9475",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),P=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:R}=r.info;l.boot(i,R)}else l.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.81f6476c.js"),["assets/Home.81f6476c.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.202f72be.js"),["assets/Workspace.202f72be.js","assets/BaseLayout.cb8713e1.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.15a85178.js","assets/NavbarControls.92a5dc7e.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/index.c2ddca4f.js","assets/CloseCircleOutlined.7ca659eb.js","assets/index.abbc699b.js","assets/workspaces.419db295.js","assets/record.75371607.js","assets/popupNotifcation.fa705675.js","assets/PhArrowSquareOut.vue.8f490758.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/PhChats.vue.0e0ba45f.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.577f35df.js","assets/Logo.6d5b7e6b.js","assets/Logo.03290bf7.css","assets/PhArrowCounterClockwise.vue.e07be706.js","assets/PhIdentificationBadge.vue.477580f1.js","assets/PhCaretRight.vue.d86610ea.js","assets/index.65ad726e.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js","assets/Workspace.17aaea47.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.0c89dc79.js"),["assets/Stages.0c89dc79.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/ContentLayout.caf86b79.js","assets/ContentLayout.ee57a545.css","assets/CrudView.38e6de5b.js","assets/router.1531b208.js","assets/Badge.1ababa5f.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/url.21b4944a.js","assets/PhDotsThreeVertical.vue.b04e14df.js","assets/index.dc095478.js","assets/index.c2ddca4f.js","assets/CrudView.c80c8ede.css","assets/ant-design.c842b06e.js","assets/asyncComputed.43b1ed77.js","assets/string.c833e9a6.js","assets/PhArrowSquareOut.vue.8f490758.js","assets/scripts.d68fc1d2.js","assets/record.75371607.js","assets/linters.7f7a4daf.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/colorHelpers.3c2a0e57.js","assets/ai.5375c57e.js","assets/index.abbc699b.js","assets/PhWebhooksLogo.vue.1de6ac7b.js","assets/validations.e045e69d.js","assets/Stages.bcec46cb.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.001ae0bb.js"),["assets/WorkflowEditor.001ae0bb.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/validations.e045e69d.js","assets/string.c833e9a6.js","assets/uuid.83ca7079.js","assets/metadata.ba74d038.js","assets/PhWebhooksLogo.vue.1de6ac7b.js","assets/asyncComputed.43b1ed77.js","assets/linters.7f7a4daf.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/record.75371607.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.75b2d18f.js","assets/PhArrowCounterClockwise.vue.e07be706.js","assets/TasksManager.5a7b793f.js","assets/tasksController.92faf3bf.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/polling.a3eab948.js","assets/scripts.d68fc1d2.js","assets/ant-design.c842b06e.js","assets/PhArrowSquareOut.vue.8f490758.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f63d8d49.js","assets/Card.7acfff2d.js","assets/TabPane.409d954e.js","assets/CollapsePanel.611cf5bf.js","assets/index.f80d7115.js","assets/TasksManager.824ac91c.css","assets/index.931cbfa8.js","assets/Badge.1ababa5f.js","assets/index.85493357.js","assets/PhArrowDown.vue.e22eb954.js","assets/WorkflowEditor.9b774473.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.5b63ce76.js"),["assets/Tasks.5b63ce76.js","assets/TasksView.vue_vue_type_script_setup_true_lang.0c48d74d.js","assets/tasksController.92faf3bf.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/polling.a3eab948.js","assets/string.c833e9a6.js","assets/scripts.d68fc1d2.js","assets/record.75371607.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/metadata.ba74d038.js","assets/PhWebhooksLogo.vue.1de6ac7b.js","assets/ant-design.c842b06e.js","assets/dayjs.18a52f4d.js","assets/index.dc095478.js","assets/ContentLayout.caf86b79.js","assets/ContentLayout.ee57a545.css","assets/Tasks.1557e4df.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.9c7df1c1.js"),["assets/Logs.9c7df1c1.js","assets/ContentLayout.caf86b79.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.e2304320.js","assets/string.c833e9a6.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/build.3b88bf88.js","assets/tables.af148496.js","assets/record.75371607.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fda3c201.js","assets/LoadingOutlined.821b3315.js","assets/datetime.5cdcf1d2.js","assets/ant-design.c842b06e.js","assets/index.c2ddca4f.js","assets/index.dc095478.js","assets/dayjs.18a52f4d.js","assets/CollapsePanel.611cf5bf.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.46174eb8.js"),["assets/PreferencesEditor.46174eb8.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/record.75371607.js","assets/PlayerNavbar.b386c2f4.js","assets/metadata.ba74d038.js","assets/PhWebhooksLogo.vue.1de6ac7b.js","assets/LoadingOutlined.821b3315.js","assets/PhSignOut.vue.15a85178.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.1bfe50c3.js","assets/index.85493357.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f63d8d49.js","assets/ContentLayout.caf86b79.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.0cf4e941.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.26f96d1a.js"),["assets/RequirementsEditor.26f96d1a.js","assets/ContentLayout.caf86b79.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.38e6de5b.js","assets/router.1531b208.js","assets/Badge.1ababa5f.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/url.21b4944a.js","assets/PhDotsThreeVertical.vue.b04e14df.js","assets/index.dc095478.js","assets/index.c2ddca4f.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.43b1ed77.js","assets/polling.a3eab948.js","assets/linters.7f7a4daf.js","assets/record.75371607.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/colorHelpers.3c2a0e57.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.c68b68bd.js"),["assets/EnvVarsEditor.c68b68bd.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/record.75371607.js","assets/ContentLayout.caf86b79.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.7e52c2dc.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/fetch.a4398887.js","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.38e6de5b.js","assets/router.1531b208.js","assets/Badge.1ababa5f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/PhDotsThreeVertical.vue.b04e14df.js","assets/index.dc095478.js","assets/index.c2ddca4f.js","assets/CrudView.c80c8ede.css","assets/polling.a3eab948.js","assets/PhPencil.vue.7ef9b1f7.js","assets/index.abbc699b.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.ab7eaa54.js"),["assets/AccessControlEditor.ab7eaa54.js","assets/ContentLayout.caf86b79.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.a4398887.js","assets/record.75371607.js","assets/repository.25b1ec9e.js","assets/gateway.03168c96.js","assets/popupNotifcation.fa705675.js","assets/asyncComputed.43b1ed77.js","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhArrowSquareOut.vue.8f490758.js","assets/index.75b2d18f.js","assets/metadata.ba74d038.js","assets/PhWebhooksLogo.vue.1de6ac7b.js","assets/index.abbc699b.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/linters.7f7a4daf.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.26f49745.js"),["assets/ProjectLogin.26f49745.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.577f35df.js","assets/Logo.6d5b7e6b.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/Logo.03290bf7.css","assets/BaseLayout.cb8713e1.js","assets/BaseLayout.b7a1f19a.css","assets/index.65ad726e.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js","assets/index.c2ddca4f.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.175e996d.js"),["assets/FormEditor.175e996d.js","assets/PlayerNavbar.b386c2f4.js","assets/workspaceStore.347f66ce.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/metadata.ba74d038.js","assets/PhWebhooksLogo.vue.1de6ac7b.js","assets/LoadingOutlined.821b3315.js","assets/PhSignOut.vue.15a85178.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js","assets/PlayerNavbar.bac3bd2c.css","assets/BaseLayout.cb8713e1.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.cd62107c.js","assets/uuid.83ca7079.js","assets/scripts.d68fc1d2.js","assets/record.75371607.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/validations.e045e69d.js","assets/string.c833e9a6.js","assets/ai.5375c57e.js","assets/PhCheckCircle.vue.beb6c3ed.js","assets/PhCopySimple.vue.3ac936ce.js","assets/PhCaretRight.vue.d86610ea.js","assets/Badge.1ababa5f.js","assets/workspaces.419db295.js","assets/polling.a3eab948.js","assets/PhFolder.vue.92cf711e.js","assets/PhPencil.vue.7ef9b1f7.js","assets/toggleHighContrast.6f571c0e.js","assets/toggleHighContrast.30d77c87.css","assets/index.abbc699b.js","assets/Card.7acfff2d.js","assets/TabPane.409d954e.js","assets/SourceCode.62d79c81.css","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.d460ee9a.js","assets/Login.vue_vue_type_script_setup_true_lang.df149372.js","assets/Logo.6d5b7e6b.js","assets/Logo.03290bf7.css","assets/CircularLoading.7b28d626.js","assets/CircularLoading.1a558a0d.css","assets/index.85493357.js","assets/Login.28df3844.css","assets/Steps.fbbf66f5.js","assets/index.3e63df7b.js","assets/Steps.4d03c6c1.css","assets/Watermark.a1acd78b.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerConfigProvider.1bfe50c3.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.8f490758.js","assets/index.c2ddca4f.js","assets/NavbarControls.92a5dc7e.js","assets/CloseCircleOutlined.7ca659eb.js","assets/popupNotifcation.fa705675.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/PhChats.vue.0e0ba45f.js","assets/NavbarControls.8216d9aa.css","assets/TasksManager.5a7b793f.js","assets/tasksController.92faf3bf.js","assets/gateway.03168c96.js","assets/ant-design.c842b06e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f63d8d49.js","assets/index.75b2d18f.js","assets/CollapsePanel.611cf5bf.js","assets/index.f80d7115.js","assets/TasksManager.824ac91c.css","assets/index.65ad726e.js","assets/FormEditor.d5ed2ee0.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.7e5efdc9.js"),["assets/JobEditor.7e5efdc9.js","assets/BaseLayout.cb8713e1.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.cd62107c.js","assets/uuid.83ca7079.js","assets/scripts.d68fc1d2.js","assets/record.75371607.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/validations.e045e69d.js","assets/string.c833e9a6.js","assets/ai.5375c57e.js","assets/PhCheckCircle.vue.beb6c3ed.js","assets/PhCopySimple.vue.3ac936ce.js","assets/PhCaretRight.vue.d86610ea.js","assets/Badge.1ababa5f.js","assets/LoadingOutlined.821b3315.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/polling.a3eab948.js","assets/PhFolder.vue.92cf711e.js","assets/PhPencil.vue.7ef9b1f7.js","assets/toggleHighContrast.6f571c0e.js","assets/toggleHighContrast.30d77c87.css","assets/index.abbc699b.js","assets/Card.7acfff2d.js","assets/TabPane.409d954e.js","assets/SourceCode.62d79c81.css","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.1a29410b.js","assets/index.c2ddca4f.js","assets/RunButton.vue_vue_type_script_setup_true_lang.758091dc.js","assets/NavbarControls.92a5dc7e.js","assets/CloseCircleOutlined.7ca659eb.js","assets/popupNotifcation.fa705675.js","assets/PhArrowSquareOut.vue.8f490758.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/PhChats.vue.0e0ba45f.js","assets/NavbarControls.8216d9aa.css","assets/TasksManager.5a7b793f.js","assets/tasksController.92faf3bf.js","assets/gateway.03168c96.js","assets/ant-design.c842b06e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f63d8d49.js","assets/index.75b2d18f.js","assets/CollapsePanel.611cf5bf.js","assets/index.f80d7115.js","assets/TasksManager.824ac91c.css","assets/index.65ad726e.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.a64641e9.js"),["assets/HookEditor.a64641e9.js","assets/BaseLayout.cb8713e1.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.cd62107c.js","assets/uuid.83ca7079.js","assets/scripts.d68fc1d2.js","assets/record.75371607.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/validations.e045e69d.js","assets/string.c833e9a6.js","assets/ai.5375c57e.js","assets/PhCheckCircle.vue.beb6c3ed.js","assets/PhCopySimple.vue.3ac936ce.js","assets/PhCaretRight.vue.d86610ea.js","assets/Badge.1ababa5f.js","assets/LoadingOutlined.821b3315.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/polling.a3eab948.js","assets/PhFolder.vue.92cf711e.js","assets/PhPencil.vue.7ef9b1f7.js","assets/toggleHighContrast.6f571c0e.js","assets/toggleHighContrast.30d77c87.css","assets/index.abbc699b.js","assets/Card.7acfff2d.js","assets/TabPane.409d954e.js","assets/SourceCode.62d79c81.css","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.758091dc.js","assets/index.495901d2.js","assets/CollapsePanel.611cf5bf.js","assets/index.c2ddca4f.js","assets/index.75b2d18f.js","assets/NavbarControls.92a5dc7e.js","assets/CloseCircleOutlined.7ca659eb.js","assets/popupNotifcation.fa705675.js","assets/PhArrowSquareOut.vue.8f490758.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/PhChats.vue.0e0ba45f.js","assets/NavbarControls.8216d9aa.css","assets/TasksManager.5a7b793f.js","assets/tasksController.92faf3bf.js","assets/gateway.03168c96.js","assets/ant-design.c842b06e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f63d8d49.js","assets/index.f80d7115.js","assets/TasksManager.824ac91c.css","assets/index.65ad726e.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js"]),meta:{title:"Hook Editor"}},{path:"on-task/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.d7e0685a.js"),["assets/ScriptEditor.d7e0685a.js","assets/BaseLayout.cb8713e1.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.cd62107c.js","assets/uuid.83ca7079.js","assets/scripts.d68fc1d2.js","assets/record.75371607.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/validations.e045e69d.js","assets/string.c833e9a6.js","assets/ai.5375c57e.js","assets/PhCheckCircle.vue.beb6c3ed.js","assets/PhCopySimple.vue.3ac936ce.js","assets/PhCaretRight.vue.d86610ea.js","assets/Badge.1ababa5f.js","assets/LoadingOutlined.821b3315.js","assets/workspaces.419db295.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/polling.a3eab948.js","assets/PhFolder.vue.92cf711e.js","assets/PhPencil.vue.7ef9b1f7.js","assets/toggleHighContrast.6f571c0e.js","assets/toggleHighContrast.30d77c87.css","assets/index.abbc699b.js","assets/Card.7acfff2d.js","assets/TabPane.409d954e.js","assets/SourceCode.62d79c81.css","assets/SaveButton.9eabeac5.js","assets/UnsavedChangesHandler.d2cd6e6b.js","assets/ExclamationCircleOutlined.740d41e8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.758091dc.js","assets/NavbarControls.92a5dc7e.js","assets/index.c2ddca4f.js","assets/CloseCircleOutlined.7ca659eb.js","assets/popupNotifcation.fa705675.js","assets/PhArrowSquareOut.vue.8f490758.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7b78d101.js","assets/BookOutlined.d9a45110.js","assets/PhChats.vue.0e0ba45f.js","assets/NavbarControls.8216d9aa.css","assets/TasksManager.5a7b793f.js","assets/tasksController.92faf3bf.js","assets/gateway.03168c96.js","assets/ant-design.c842b06e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f63d8d49.js","assets/index.75b2d18f.js","assets/CollapsePanel.611cf5bf.js","assets/index.f80d7115.js","assets/TasksManager.824ac91c.css","assets/index.65ad726e.js","assets/index.fb93844d.js","assets/Avatar.995eaa7d.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.45f00c83.js"),["assets/ResourcesTracker.45f00c83.js","assets/BaseLayout.cb8713e1.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.43b1ed77.js","assets/polling.a3eab948.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.160d8933.js"),["assets/Welcome.160d8933.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.577f35df.js","assets/Logo.6d5b7e6b.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/Logo.03290bf7.css","assets/ContentLayout.caf86b79.js","assets/ContentLayout.ee57a545.css","assets/fetch.a4398887.js","assets/Card.7acfff2d.js","assets/TabPane.409d954e.js","assets/workspaceStore.347f66ce.js","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/linters.7f7a4daf.js","assets/asyncComputed.43b1ed77.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.7e3cf13c.js"),["assets/App.7e3cf13c.js","assets/App.vue_vue_type_style_index_0_lang.b8cabb3a.js","assets/workspaceStore.347f66ce.js","assets/index.f7dd6fda.js","assets/index.b3bf2b78.css","assets/url.21b4944a.js","assets/colorHelpers.3c2a0e57.js","assets/PlayerConfigProvider.1bfe50c3.js","assets/index.85493357.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.03f734c8.js.map
