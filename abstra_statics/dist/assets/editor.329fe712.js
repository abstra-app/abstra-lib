var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.cda70faa.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.fa1ac7b7.js";import"./linters.242386e6.js";import"./url.2745998c.js";import"./colorHelpers.2da84e9e.js";import"./asyncComputed.3cd32a3a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="00745f85-00f9-4a94-8754-b5e85991a318",t._sentryDebugIdIdentifier="sentry-dbid-00745f85-00f9-4a94-8754-b5e85991a318")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"e193fce71159030f36458708b4459a327bbc2f3e",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.1afc3cc9.js"),["assets/Home.1afc3cc9.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.448212a4.js"),["assets/Workspace.448212a4.js","assets/BaseLayout.3e55c296.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.e42e9a1d.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/NavbarControls.45706f2e.js","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/index.1afb4146.js","assets/CloseCircleOutlined.9f6f6207.js","assets/index.bf0b5fc8.js","assets/workspaces.18f052d3.js","assets/record.9aa216bc.js","assets/popupNotifcation.29f086e3.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/PhChats.vue.15efb8e3.js","assets/polling.010eeab6.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/Logo.f095e645.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.b3611895.js","assets/PhIdentificationBadge.vue.f6d40c7a.js","assets/PhCaretRight.vue.69f8d049.js","assets/index.85956522.js","assets/index.f6931b28.js","assets/Avatar.8777680a.js","assets/Workspace.954990f3.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.1afa7276.js"),["assets/Stages.1afa7276.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/ContentLayout.904c2655.js","assets/ContentLayout.ee57a545.css","assets/CrudView.18b5c688.js","assets/router.64b8a2b7.js","assets/Badge.f773b9dc.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/url.2745998c.js","assets/PhDotsThreeVertical.vue.51584bb3.js","assets/index.7e79acc9.js","assets/index.1afb4146.js","assets/CrudView.c80c8ede.css","assets/ant-design.d6f80b24.js","assets/asyncComputed.3cd32a3a.js","assets/string.64f82337.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/linters.242386e6.js","assets/scripts.a9a5db64.js","assets/record.9aa216bc.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/colorHelpers.2da84e9e.js","assets/ai.a7fe5579.js","assets/index.bf0b5fc8.js","assets/validations.971d6cbf.js","assets/PhWebhooksLogo.vue.ea7bcc6c.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.73de380d.js"),["assets/Codebase.73de380d.js","assets/SourceCode.c70e94a3.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/record.9aa216bc.js","assets/polling.010eeab6.js","assets/validations.971d6cbf.js","assets/string.64f82337.js","assets/PhFolder.vue.b8557f85.js","assets/toggleHighContrast.3516f739.js","assets/toggleHighContrast.30d77c87.css","assets/index.bf0b5fc8.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/SourceCode.1cb3f731.css","assets/ContentLayout.904c2655.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.d7af1adc.js","assets/popupNotifcation.29f086e3.js","assets/ant-design.d6f80b24.js","assets/FilesNavigator.ebc9fb1c.css","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/Codebase.8ba12bca.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.a90816c3.js"),["assets/WorkflowEditor.a90816c3.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.7aa4cee9.js","assets/uuid.e065d7dc.js","assets/validations.971d6cbf.js","assets/string.64f82337.js","assets/metadata.ebdbf1c8.js","assets/PhRobot.vue.8bd66d5a.js","assets/PhWebhooksLogo.vue.ea7bcc6c.js","assets/asyncComputed.3cd32a3a.js","assets/linters.242386e6.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/record.9aa216bc.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.0bc9696b.js","assets/index.bf0b5fc8.js","assets/PhArrowCounterClockwise.vue.b3611895.js","assets/TasksManager.e38baa9f.js","assets/tasksController.dfc96085.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/scripts.a9a5db64.js","assets/polling.010eeab6.js","assets/ant-design.d6f80b24.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/CollapsePanel.48fd2b7d.js","assets/index.14110d5d.js","assets/TasksManager.c9a90d36.css","assets/index.1e1a92cd.js","assets/Badge.f773b9dc.js","assets/index.577b26e6.js","assets/PhArrowDown.vue.5fbd0778.js","assets/WorkflowEditor.b704a89b.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.c0ceee27.js"),["assets/Tasks.c0ceee27.js","assets/TasksView.vue_vue_type_script_setup_true_lang.f9bfb8ed.js","assets/tasksController.dfc96085.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/scripts.a9a5db64.js","assets/record.9aa216bc.js","assets/polling.010eeab6.js","assets/string.64f82337.js","assets/metadata.ebdbf1c8.js","assets/PhRobot.vue.8bd66d5a.js","assets/PhWebhooksLogo.vue.ea7bcc6c.js","assets/ant-design.d6f80b24.js","assets/dayjs.943bcfcb.js","assets/index.7e79acc9.js","assets/ContentLayout.904c2655.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.efd1fd01.js"),["assets/Logs.efd1fd01.js","assets/ContentLayout.904c2655.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.2b3fc4de.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/build.22ad8111.js","assets/string.64f82337.js","assets/tables.2fce9e9d.js","assets/record.9aa216bc.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f3ad07cd.js","assets/LoadingOutlined.e8be6a79.js","assets/polling.010eeab6.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/datetime.4cddee4d.js","assets/ant-design.d6f80b24.js","assets/index.1afb4146.js","assets/index.7e79acc9.js","assets/dayjs.943bcfcb.js","assets/CollapsePanel.48fd2b7d.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.e43582d4.js"),["assets/PreferencesEditor.e43582d4.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/record.9aa216bc.js","assets/PlayerNavbar.e2b2c1ba.js","assets/metadata.ebdbf1c8.js","assets/PhRobot.vue.8bd66d5a.js","assets/PhWebhooksLogo.vue.ea7bcc6c.js","assets/LoadingOutlined.e8be6a79.js","assets/PhSignOut.vue.e42e9a1d.js","assets/index.f6931b28.js","assets/Avatar.8777680a.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.cef350b5.js","assets/index.577b26e6.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/ContentLayout.904c2655.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.10647397.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.bc15f7dd.js"),["assets/RequirementsEditor.bc15f7dd.js","assets/ContentLayout.904c2655.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.18b5c688.js","assets/router.64b8a2b7.js","assets/Badge.f773b9dc.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/url.2745998c.js","assets/PhDotsThreeVertical.vue.51584bb3.js","assets/index.7e79acc9.js","assets/index.1afb4146.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.3cd32a3a.js","assets/polling.010eeab6.js","assets/linters.242386e6.js","assets/record.9aa216bc.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/colorHelpers.2da84e9e.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.8f4ba389.js"),["assets/EnvVarsEditor.8f4ba389.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/record.9aa216bc.js","assets/ContentLayout.904c2655.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.d758163e.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/fetch.6b44a470.js","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.18b5c688.js","assets/router.64b8a2b7.js","assets/Badge.f773b9dc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/PhDotsThreeVertical.vue.51584bb3.js","assets/index.7e79acc9.js","assets/index.1afb4146.js","assets/CrudView.c80c8ede.css","assets/polling.010eeab6.js","assets/PhPencil.vue.95020bea.js","assets/index.bf0b5fc8.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.ecf7fb87.js"),["assets/AccessControlEditor.ecf7fb87.js","assets/ContentLayout.904c2655.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.6b44a470.js","assets/record.9aa216bc.js","assets/repository.4363c825.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/asyncComputed.3cd32a3a.js","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.3630c86e.js","assets/index.0bc9696b.js","assets/metadata.ebdbf1c8.js","assets/PhRobot.vue.8bd66d5a.js","assets/PhWebhooksLogo.vue.ea7bcc6c.js","assets/index.bf0b5fc8.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/linters.242386e6.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.95b925ee.js"),["assets/ProjectLogin.95b925ee.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/Logo.f095e645.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.3e55c296.js","assets/BaseLayout.b7a1f19a.css","assets/index.85956522.js","assets/index.f6931b28.js","assets/Avatar.8777680a.js","assets/index.1afb4146.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.02ebabad.js"),["assets/FormEditor.02ebabad.js","assets/FormRunner.33377b72.js","assets/url.2745998c.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/workspaceStore.fa1ac7b7.js","assets/colorHelpers.2da84e9e.js","assets/Login.vue_vue_type_script_setup_true_lang.ad08671a.js","assets/Logo.f095e645.js","assets/Logo.8bf94625.css","assets/string.64f82337.js","assets/OTPInput.9d567ca5.js","assets/OTPInput.277362d6.css","assets/index.bf0b5fc8.js","assets/Login.eaf7209c.css","assets/Steps.38072a64.js","assets/index.73e917a8.js","assets/Steps.4d03c6c1.css","assets/Watermark.9238afd1.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.3cd32a3a.js","assets/linters.242386e6.js","assets/scripts.a9a5db64.js","assets/record.9aa216bc.js","assets/workspaces.18f052d3.js","assets/RuntimeCommonSettings.64cdef26.js","assets/BaseLayout.3e55c296.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.e065d7dc.js","assets/NavbarControls.45706f2e.js","assets/index.1afb4146.js","assets/CloseCircleOutlined.9f6f6207.js","assets/popupNotifcation.29f086e3.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/PhChats.vue.15efb8e3.js","assets/polling.010eeab6.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/ant-design.d6f80b24.js","assets/ai.a7fe5579.js","assets/PhCheckCircle.vue.85376059.js","assets/PhCopySimple.vue.32f33db3.js","assets/Avatar.8777680a.js","assets/LoadingOutlined.e8be6a79.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/PhCaretRight.vue.69f8d049.js","assets/Badge.f773b9dc.js","assets/SourceCode.c70e94a3.js","assets/validations.971d6cbf.js","assets/PhFolder.vue.b8557f85.js","assets/toggleHighContrast.3516f739.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e38baa9f.js","assets/tasksController.dfc96085.js","assets/gateway.f490dbc0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/index.0bc9696b.js","assets/CollapsePanel.48fd2b7d.js","assets/index.14110d5d.js","assets/TasksManager.c9a90d36.css","assets/index.85956522.js","assets/index.f6931b28.js","assets/RuntimeCommonSettings.5ebfeec7.css","assets/PlayerNavbar.e2b2c1ba.js","assets/metadata.ebdbf1c8.js","assets/PhRobot.vue.8bd66d5a.js","assets/PhWebhooksLogo.vue.ea7bcc6c.js","assets/PhSignOut.vue.e42e9a1d.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.cef350b5.js","assets/index.577b26e6.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.12d17cd7.js"),["assets/JobEditor.12d17cd7.js","assets/asyncComputed.3cd32a3a.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/scripts.a9a5db64.js","assets/record.9aa216bc.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/RuntimeCommonSettings.64cdef26.js","assets/BaseLayout.3e55c296.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.e065d7dc.js","assets/NavbarControls.45706f2e.js","assets/index.1afb4146.js","assets/CloseCircleOutlined.9f6f6207.js","assets/index.bf0b5fc8.js","assets/popupNotifcation.29f086e3.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/PhChats.vue.15efb8e3.js","assets/polling.010eeab6.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/Logo.f095e645.js","assets/Logo.8bf94625.css","assets/ant-design.d6f80b24.js","assets/ai.a7fe5579.js","assets/PhCheckCircle.vue.85376059.js","assets/PhCopySimple.vue.32f33db3.js","assets/Avatar.8777680a.js","assets/LoadingOutlined.e8be6a79.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/PhCaretRight.vue.69f8d049.js","assets/Badge.f773b9dc.js","assets/SourceCode.c70e94a3.js","assets/validations.971d6cbf.js","assets/string.64f82337.js","assets/PhFolder.vue.b8557f85.js","assets/toggleHighContrast.3516f739.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e38baa9f.js","assets/tasksController.dfc96085.js","assets/gateway.f490dbc0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/index.0bc9696b.js","assets/CollapsePanel.48fd2b7d.js","assets/index.14110d5d.js","assets/TasksManager.c9a90d36.css","assets/index.85956522.js","assets/index.f6931b28.js","assets/RuntimeCommonSettings.5ebfeec7.css","assets/index.bcffb0dd.js","assets/RunButton.vue_vue_type_script_setup_true_lang.01d924cb.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.222d233f.js"),["assets/HookEditor.222d233f.js","assets/asyncComputed.3cd32a3a.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/scripts.a9a5db64.js","assets/record.9aa216bc.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/RuntimeCommonSettings.64cdef26.js","assets/BaseLayout.3e55c296.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.e065d7dc.js","assets/NavbarControls.45706f2e.js","assets/index.1afb4146.js","assets/CloseCircleOutlined.9f6f6207.js","assets/index.bf0b5fc8.js","assets/popupNotifcation.29f086e3.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/PhChats.vue.15efb8e3.js","assets/polling.010eeab6.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/Logo.f095e645.js","assets/Logo.8bf94625.css","assets/ant-design.d6f80b24.js","assets/ai.a7fe5579.js","assets/PhCheckCircle.vue.85376059.js","assets/PhCopySimple.vue.32f33db3.js","assets/Avatar.8777680a.js","assets/LoadingOutlined.e8be6a79.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/PhCaretRight.vue.69f8d049.js","assets/Badge.f773b9dc.js","assets/SourceCode.c70e94a3.js","assets/validations.971d6cbf.js","assets/string.64f82337.js","assets/PhFolder.vue.b8557f85.js","assets/toggleHighContrast.3516f739.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e38baa9f.js","assets/tasksController.dfc96085.js","assets/gateway.f490dbc0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/index.0bc9696b.js","assets/CollapsePanel.48fd2b7d.js","assets/index.14110d5d.js","assets/TasksManager.c9a90d36.css","assets/index.85956522.js","assets/index.f6931b28.js","assets/RuntimeCommonSettings.5ebfeec7.css","assets/RunButton.vue_vue_type_script_setup_true_lang.01d924cb.js","assets/index.fcfee72b.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.45d2f04f.js"),["assets/ScriptEditor.45d2f04f.js","assets/tasksController.dfc96085.js","assets/gateway.f490dbc0.js","assets/popupNotifcation.29f086e3.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/scripts.a9a5db64.js","assets/record.9aa216bc.js","assets/polling.010eeab6.js","assets/string.64f82337.js","assets/workspaces.18f052d3.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/RuntimeCommonSettings.64cdef26.js","assets/BaseLayout.3e55c296.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.e37c59f4.js","assets/UnsavedChangesHandler.bb83fcfc.js","assets/ExclamationCircleOutlined.94b07f9d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.e065d7dc.js","assets/NavbarControls.45706f2e.js","assets/index.1afb4146.js","assets/CloseCircleOutlined.9f6f6207.js","assets/index.bf0b5fc8.js","assets/PhArrowSquareOut.vue.3630c86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d712b0ab.js","assets/BookOutlined.5869c0f8.js","assets/PhChats.vue.15efb8e3.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/Logo.f095e645.js","assets/Logo.8bf94625.css","assets/ant-design.d6f80b24.js","assets/ai.a7fe5579.js","assets/PhCheckCircle.vue.85376059.js","assets/PhCopySimple.vue.32f33db3.js","assets/Avatar.8777680a.js","assets/LoadingOutlined.e8be6a79.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/PhCaretRight.vue.69f8d049.js","assets/Badge.f773b9dc.js","assets/SourceCode.c70e94a3.js","assets/validations.971d6cbf.js","assets/PhFolder.vue.b8557f85.js","assets/toggleHighContrast.3516f739.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e38baa9f.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5af091b6.js","assets/index.0bc9696b.js","assets/CollapsePanel.48fd2b7d.js","assets/index.14110d5d.js","assets/TasksManager.c9a90d36.css","assets/index.85956522.js","assets/index.f6931b28.js","assets/RuntimeCommonSettings.5ebfeec7.css","assets/RunButton.vue_vue_type_script_setup_true_lang.01d924cb.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.0f36d474.js"),["assets/ResourcesTracker.0f36d474.js","assets/BaseLayout.3e55c296.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.3cd32a3a.js","assets/polling.010eeab6.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.7db75c9e.js"),["assets/Welcome.7db75c9e.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.813a2412.js","assets/Logo.f095e645.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.904c2655.js","assets/ContentLayout.ee57a545.css","assets/fetch.6b44a470.js","assets/Card.c0dc5803.js","assets/TabPane.13853b1c.js","assets/workspaceStore.fa1ac7b7.js","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/linters.242386e6.js","assets/asyncComputed.3cd32a3a.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.4f7a7127.js"),["assets/App.4f7a7127.js","assets/App.vue_vue_type_style_index_0_lang.bfba1cb7.js","assets/workspaceStore.fa1ac7b7.js","assets/index.cda70faa.js","assets/index.ae14d18e.css","assets/url.2745998c.js","assets/colorHelpers.2da84e9e.js","assets/PlayerConfigProvider.cef350b5.js","assets/index.577b26e6.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.329fe712.js.map
