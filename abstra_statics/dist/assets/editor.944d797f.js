var R=Object.defineProperty;var y=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(y(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as A,c as I,w as V,a as D,b as j,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as W,k as $,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./index.22c5821c.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.09e6a778.js";import"./linters.2fdb8443.js";import"./url.c20c7213.js";import"./colorHelpers.83f3c8e0.js";import"./asyncComputed.33ebd1fe.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="532deb9e-bc85-458b-be3f-1e8a8bdd5f52",t._sentryDebugIdIdentifier="sentry-dbid-532deb9e-bc85-458b-be3f-1e8a8bdd5f52")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[D("div",te,[j(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"33503f7ffcbff9b5fff52a837059e92a09e6828a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:P}=r.info;l.boot(i,P)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.9a7ffa9b.js"),["assets/Home.9a7ffa9b.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.d87f7d06.js"),["assets/Workspace.d87f7d06.js","assets/BaseLayout.d0a9d263.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.fc046574.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/NavbarControls.7fd33083.js","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/index.f26b459b.js","assets/CloseCircleOutlined.f4ce4456.js","assets/index.c745b3c8.js","assets/workspaces.66bc47b0.js","assets/record.0ec2c925.js","assets/popupNotifcation.21030540.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/PhChats.vue.296df513.js","assets/polling.3a01f39f.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/Logo.237fa238.js","assets/Logo.8bf94625.css","assets/PhArrowCounterClockwise.vue.650faa6b.js","assets/PhIdentificationBadge.vue.7929f293.js","assets/PhCaretRight.vue.a2c9b80f.js","assets/index.dee19bbb.js","assets/index.8726dd57.js","assets/Avatar.12790a1f.js","assets/Workspace.954990f3.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.d7526290.js"),["assets/Stages.d7526290.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/ContentLayout.af0d9080.js","assets/ContentLayout.ee57a545.css","assets/CrudView.9cbdd8db.js","assets/router.bce00928.js","assets/Badge.af4fc2f0.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/url.c20c7213.js","assets/PhDotsThreeVertical.vue.070d4a91.js","assets/index.1667924f.js","assets/index.f26b459b.js","assets/CrudView.c80c8ede.css","assets/ant-design.629eedeb.js","assets/asyncComputed.33ebd1fe.js","assets/string.bdb72daf.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/linters.2fdb8443.js","assets/scripts.6bd998f5.js","assets/record.0ec2c925.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/colorHelpers.83f3c8e0.js","assets/ai.3d9fa518.js","assets/index.c745b3c8.js","assets/validations.a6d667d5.js","assets/PhWebhooksLogo.vue.57722af8.js","assets/Stages.51afe08f.css"]),meta:{title:"Stages"}},{path:"codebase",name:"codebase",component:()=>a(()=>import("./Codebase.ad2e237f.js"),["assets/Codebase.ad2e237f.js","assets/SourceCode.8602c066.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/record.0ec2c925.js","assets/polling.3a01f39f.js","assets/validations.a6d667d5.js","assets/string.bdb72daf.js","assets/PhFolder.vue.5d17fe82.js","assets/toggleHighContrast.b776fcf4.js","assets/toggleHighContrast.30d77c87.css","assets/index.c745b3c8.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/SourceCode.1cb3f731.css","assets/ContentLayout.af0d9080.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.31e2ced0.js","assets/popupNotifcation.21030540.js","assets/ant-design.629eedeb.js","assets/FilesNavigator.ebc9fb1c.css","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/Codebase.8ba12bca.css"]),meta:{title:"Codebase"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.772c96f2.js"),["assets/WorkflowEditor.772c96f2.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/vue-flow-minimap.3441d3c7.js","assets/uuid.1914a261.js","assets/validations.a6d667d5.js","assets/string.bdb72daf.js","assets/metadata.9555d43a.js","assets/PhRobot.vue.bea806bd.js","assets/PhWebhooksLogo.vue.57722af8.js","assets/asyncComputed.33ebd1fe.js","assets/linters.2fdb8443.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/record.0ec2c925.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.998ed697.js","assets/index.c745b3c8.js","assets/PhArrowCounterClockwise.vue.650faa6b.js","assets/TasksManager.e314e9af.js","assets/tasksController.92c219f1.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/scripts.6bd998f5.js","assets/polling.3a01f39f.js","assets/ant-design.629eedeb.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/CollapsePanel.e1f26cd9.js","assets/index.77188db3.js","assets/TasksManager.c9a90d36.css","assets/index.03887861.js","assets/Badge.af4fc2f0.js","assets/index.5b0f9b29.js","assets/PhArrowDown.vue.c2ca5f98.js","assets/WorkflowEditor.b704a89b.css"]),meta:{title:"Workflow Editor"}},{path:"tasks",name:"tasks",component:()=>a(()=>import("./Tasks.25474821.js"),["assets/Tasks.25474821.js","assets/TasksView.vue_vue_type_script_setup_true_lang.3fcb299b.js","assets/tasksController.92c219f1.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/scripts.6bd998f5.js","assets/record.0ec2c925.js","assets/polling.3a01f39f.js","assets/string.bdb72daf.js","assets/metadata.9555d43a.js","assets/PhRobot.vue.bea806bd.js","assets/PhWebhooksLogo.vue.57722af8.js","assets/ant-design.629eedeb.js","assets/dayjs.63ea3b4c.js","assets/index.1667924f.js","assets/ContentLayout.af0d9080.js","assets/ContentLayout.ee57a545.css","assets/Tasks.57a455a4.css"]),meta:{title:"Workflow Tasks"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.42904e8b.js"),["assets/Logs.42904e8b.js","assets/ContentLayout.af0d9080.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/Logs.vue_vue_type_script_setup_true_lang.09d9e0a4.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/build.49003cf2.js","assets/string.bdb72daf.js","assets/tables.8991b2b0.js","assets/record.0ec2c925.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.be229e32.js","assets/LoadingOutlined.13aa00db.js","assets/polling.3a01f39f.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/datetime.dc45597f.js","assets/ant-design.629eedeb.js","assets/index.f26b459b.js","assets/index.1667924f.js","assets/dayjs.63ea3b4c.js","assets/CollapsePanel.e1f26cd9.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.6a9abf35.js"),["assets/PreferencesEditor.6a9abf35.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/record.0ec2c925.js","assets/PlayerNavbar.fb1bb003.js","assets/metadata.9555d43a.js","assets/PhRobot.vue.bea806bd.js","assets/PhWebhooksLogo.vue.57722af8.js","assets/LoadingOutlined.13aa00db.js","assets/PhSignOut.vue.fc046574.js","assets/index.8726dd57.js","assets/Avatar.12790a1f.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.4b3458b1.js","assets/index.5b0f9b29.js","assets/PlayerConfigProvider.309c06f9.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/ContentLayout.af0d9080.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.2669cec1.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.d91a45de.js"),["assets/RequirementsEditor.d91a45de.js","assets/ContentLayout.af0d9080.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/CrudView.9cbdd8db.js","assets/router.bce00928.js","assets/Badge.af4fc2f0.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/url.c20c7213.js","assets/PhDotsThreeVertical.vue.070d4a91.js","assets/index.1667924f.js","assets/index.f26b459b.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.33ebd1fe.js","assets/polling.3a01f39f.js","assets/linters.2fdb8443.js","assets/record.0ec2c925.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/colorHelpers.83f3c8e0.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.65cff29b.js"),["assets/EnvVarsEditor.65cff29b.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/record.0ec2c925.js","assets/ContentLayout.af0d9080.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.f2ceb693.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/fetch.27f9f1cd.js","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.9cbdd8db.js","assets/router.bce00928.js","assets/Badge.af4fc2f0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/PhDotsThreeVertical.vue.070d4a91.js","assets/index.1667924f.js","assets/index.f26b459b.js","assets/CrudView.c80c8ede.css","assets/polling.3a01f39f.js","assets/PhPencil.vue.6026b79e.js","assets/index.c745b3c8.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.c9e312e8.js"),["assets/AccessControlEditor.c9e312e8.js","assets/ContentLayout.af0d9080.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/ContentLayout.ee57a545.css","assets/fetch.27f9f1cd.js","assets/record.0ec2c925.js","assets/repository.027bddc1.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/asyncComputed.33ebd1fe.js","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/PhArrowSquareOut.vue.1619e969.js","assets/index.998ed697.js","assets/metadata.9555d43a.js","assets/PhRobot.vue.bea806bd.js","assets/PhWebhooksLogo.vue.57722af8.js","assets/index.c745b3c8.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/linters.2fdb8443.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.a7bc199b.js"),["assets/ProjectLogin.a7bc199b.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/Logo.237fa238.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/BaseLayout.d0a9d263.js","assets/BaseLayout.b7a1f19a.css","assets/index.dee19bbb.js","assets/index.8726dd57.js","assets/Avatar.12790a1f.js","assets/index.f26b459b.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.e0b84eea.js"),["assets/FormEditor.e0b84eea.js","assets/FormRunner.226e0281.js","assets/url.c20c7213.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/workspaceStore.09e6a778.js","assets/colorHelpers.83f3c8e0.js","assets/Login.vue_vue_type_script_setup_true_lang.fb4f2fe1.js","assets/Logo.237fa238.js","assets/Logo.8bf94625.css","assets/string.bdb72daf.js","assets/OTPInput.70df04fc.js","assets/OTPInput.277362d6.css","assets/index.c745b3c8.js","assets/Login.eaf7209c.css","assets/Steps.c69d688f.js","assets/index.ba64bd85.js","assets/Steps.4d03c6c1.css","assets/Watermark.45c7a9e1.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.1db1e6a2.css","assets/asyncComputed.33ebd1fe.js","assets/linters.2fdb8443.js","assets/scripts.6bd998f5.js","assets/record.0ec2c925.js","assets/workspaces.66bc47b0.js","assets/RuntimeCommonSettings.fd837ebf.js","assets/BaseLayout.d0a9d263.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.1914a261.js","assets/NavbarControls.7fd33083.js","assets/index.f26b459b.js","assets/CloseCircleOutlined.f4ce4456.js","assets/popupNotifcation.21030540.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/PhChats.vue.296df513.js","assets/polling.3a01f39f.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/ant-design.629eedeb.js","assets/ai.3d9fa518.js","assets/PhCheckCircle.vue.bfc157fd.js","assets/PhCopySimple.vue.571d8ba2.js","assets/Avatar.12790a1f.js","assets/LoadingOutlined.13aa00db.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/PhCaretRight.vue.a2c9b80f.js","assets/Badge.af4fc2f0.js","assets/SourceCode.8602c066.js","assets/validations.a6d667d5.js","assets/PhFolder.vue.5d17fe82.js","assets/toggleHighContrast.b776fcf4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e314e9af.js","assets/tasksController.92c219f1.js","assets/gateway.ea19b8ff.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/index.998ed697.js","assets/CollapsePanel.e1f26cd9.js","assets/index.77188db3.js","assets/TasksManager.c9a90d36.css","assets/index.dee19bbb.js","assets/index.8726dd57.js","assets/RuntimeCommonSettings.14275052.css","assets/PlayerNavbar.fb1bb003.js","assets/metadata.9555d43a.js","assets/PhRobot.vue.bea806bd.js","assets/PhWebhooksLogo.vue.57722af8.js","assets/PhSignOut.vue.fc046574.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.4b3458b1.js","assets/index.5b0f9b29.js","assets/PlayerConfigProvider.309c06f9.css","assets/FormEditor.558ef5d7.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.edab1507.js"),["assets/JobEditor.edab1507.js","assets/asyncComputed.33ebd1fe.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/scripts.6bd998f5.js","assets/record.0ec2c925.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/RuntimeCommonSettings.fd837ebf.js","assets/BaseLayout.d0a9d263.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.1914a261.js","assets/NavbarControls.7fd33083.js","assets/index.f26b459b.js","assets/CloseCircleOutlined.f4ce4456.js","assets/index.c745b3c8.js","assets/popupNotifcation.21030540.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/PhChats.vue.296df513.js","assets/polling.3a01f39f.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/Logo.237fa238.js","assets/Logo.8bf94625.css","assets/ant-design.629eedeb.js","assets/ai.3d9fa518.js","assets/PhCheckCircle.vue.bfc157fd.js","assets/PhCopySimple.vue.571d8ba2.js","assets/Avatar.12790a1f.js","assets/LoadingOutlined.13aa00db.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/PhCaretRight.vue.a2c9b80f.js","assets/Badge.af4fc2f0.js","assets/SourceCode.8602c066.js","assets/validations.a6d667d5.js","assets/string.bdb72daf.js","assets/PhFolder.vue.5d17fe82.js","assets/toggleHighContrast.b776fcf4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e314e9af.js","assets/tasksController.92c219f1.js","assets/gateway.ea19b8ff.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/index.998ed697.js","assets/CollapsePanel.e1f26cd9.js","assets/index.77188db3.js","assets/TasksManager.c9a90d36.css","assets/index.dee19bbb.js","assets/index.8726dd57.js","assets/RuntimeCommonSettings.14275052.css","assets/index.dc018299.js","assets/RunButton.vue_vue_type_script_setup_true_lang.a4ac7a62.js","assets/JobEditor.42421a54.css"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.b3361998.js"),["assets/HookEditor.b3361998.js","assets/asyncComputed.33ebd1fe.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/scripts.6bd998f5.js","assets/record.0ec2c925.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/RuntimeCommonSettings.fd837ebf.js","assets/BaseLayout.d0a9d263.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.1914a261.js","assets/NavbarControls.7fd33083.js","assets/index.f26b459b.js","assets/CloseCircleOutlined.f4ce4456.js","assets/index.c745b3c8.js","assets/popupNotifcation.21030540.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/PhChats.vue.296df513.js","assets/polling.3a01f39f.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/Logo.237fa238.js","assets/Logo.8bf94625.css","assets/ant-design.629eedeb.js","assets/ai.3d9fa518.js","assets/PhCheckCircle.vue.bfc157fd.js","assets/PhCopySimple.vue.571d8ba2.js","assets/Avatar.12790a1f.js","assets/LoadingOutlined.13aa00db.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/PhCaretRight.vue.a2c9b80f.js","assets/Badge.af4fc2f0.js","assets/SourceCode.8602c066.js","assets/validations.a6d667d5.js","assets/string.bdb72daf.js","assets/PhFolder.vue.5d17fe82.js","assets/toggleHighContrast.b776fcf4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e314e9af.js","assets/tasksController.92c219f1.js","assets/gateway.ea19b8ff.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/index.998ed697.js","assets/CollapsePanel.e1f26cd9.js","assets/index.77188db3.js","assets/TasksManager.c9a90d36.css","assets/index.dee19bbb.js","assets/index.8726dd57.js","assets/RuntimeCommonSettings.14275052.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a4ac7a62.js","assets/index.d0095200.js"]),meta:{title:"Hook Editor"}},{path:"tasklet/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.b0e717c2.js"),["assets/ScriptEditor.b0e717c2.js","assets/tasksController.92c219f1.js","assets/gateway.ea19b8ff.js","assets/popupNotifcation.21030540.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/scripts.6bd998f5.js","assets/record.0ec2c925.js","assets/polling.3a01f39f.js","assets/string.bdb72daf.js","assets/workspaces.66bc47b0.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/RuntimeCommonSettings.fd837ebf.js","assets/BaseLayout.d0a9d263.js","assets/BaseLayout.b7a1f19a.css","assets/SaveButton.996992ec.js","assets/UnsavedChangesHandler.20422af5.js","assets/ExclamationCircleOutlined.706c9f5e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/uuid.1914a261.js","assets/NavbarControls.7fd33083.js","assets/index.f26b459b.js","assets/CloseCircleOutlined.f4ce4456.js","assets/index.c745b3c8.js","assets/PhArrowSquareOut.vue.1619e969.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.275cceb9.js","assets/BookOutlined.e24349cf.js","assets/PhChats.vue.296df513.js","assets/NavbarControls.e2d5dd75.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/Logo.237fa238.js","assets/Logo.8bf94625.css","assets/ant-design.629eedeb.js","assets/ai.3d9fa518.js","assets/PhCheckCircle.vue.bfc157fd.js","assets/PhCopySimple.vue.571d8ba2.js","assets/Avatar.12790a1f.js","assets/LoadingOutlined.13aa00db.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/PhCaretRight.vue.a2c9b80f.js","assets/Badge.af4fc2f0.js","assets/SourceCode.8602c066.js","assets/validations.a6d667d5.js","assets/PhFolder.vue.5d17fe82.js","assets/toggleHighContrast.b776fcf4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.1cb3f731.css","assets/TasksManager.e314e9af.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.970542a4.js","assets/index.998ed697.js","assets/CollapsePanel.e1f26cd9.js","assets/index.77188db3.js","assets/TasksManager.c9a90d36.css","assets/index.dee19bbb.js","assets/index.8726dd57.js","assets/RuntimeCommonSettings.14275052.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a4ac7a62.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.f4a33dd6.js"),["assets/ResourcesTracker.f4a33dd6.js","assets/BaseLayout.d0a9d263.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.33ebd1fe.js","assets/polling.3a01f39f.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.2b4166e9.js"),["assets/Welcome.2b4166e9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.3413ed73.js","assets/Logo.237fa238.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/Logo.8bf94625.css","assets/ContentLayout.af0d9080.js","assets/ContentLayout.ee57a545.css","assets/fetch.27f9f1cd.js","assets/Card.655d3798.js","assets/TabPane.77c67586.js","assets/workspaceStore.09e6a778.js","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/linters.2fdb8443.js","assets/asyncComputed.33ebd1fe.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.f87eeeee.js"),["assets/App.f87eeeee.js","assets/App.vue_vue_type_style_index_0_lang.2cf4b2c5.js","assets/workspaceStore.09e6a778.js","assets/index.22c5821c.js","assets/index.ae14d18e.css","assets/url.c20c7213.js","assets/colorHelpers.83f3c8e0.js","assets/PlayerConfigProvider.4b3458b1.js","assets/index.5b0f9b29.js","assets/PlayerConfigProvider.309c06f9.css","assets/App.bf2707f8.css"]),children:se}],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(d);d.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);W(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=$({render:()=>F(oe)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.944d797f.js.map
