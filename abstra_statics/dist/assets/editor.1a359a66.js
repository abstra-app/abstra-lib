var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as V,o as A,c as I,w as k,a as j,b as D,u as O,A as U,l as h,e as f,f as g,g as E,h as C,i as S,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.b2844dbd.js";import{d as Y,r as K,g as Q,s as X,c as Z}from"./router.be61be60.js";import"./linters.fc8d8b49.js";import"./asyncComputed.6438c00c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8b920c89-29a7-43ae-9b3d-e15f4e3663bf",t._sentryDebugIdIdentifier="sentry-dbid-8b920c89-29a7-43ae-9b3d-e15f4e3663bf")}catch{}})();const ee={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},te=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=V("RouterView");return A(),I(O(U),{theme:e,"page-header":{ghost:!1}},{default:k(()=>[j("div",ee,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const r=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>r.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let l=r;m(l,"booted",!1);const oe={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"038b1f91f945827f7bc41fedbe0fb666e2656046",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||oe[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var n,i;return(i=(n=e.value)==null?void 0:n.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async n=>{const i=await t.createLogin(n);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async n=>{if(n&&"info"in n){const{email:i,intercomHash:y}=n.info;l.boot(i,y)}else l.shutdown()}),{loadLogin:L,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),re=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=C({history:S("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.4dfea156.js"),["assets/Home.4dfea156.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.db7108c5.js"),["assets/Workspace.db7108c5.js","assets/BaseLayout.8398596e.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/NavbarControls.da86158f.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/router.be61be60.js","assets/CloseCircleOutlined.7e5b3280.js","assets/index.c8fb32b5.js","assets/index.a19b8d23.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/record.d017e1a2.js","assets/popupNotifcation.6c1732c5.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/PhChats.vue.3400ebdd.js","assets/NavbarControls.5a022bc4.css","assets/Logo.d201e363.js","assets/Logo.7b39b5e7.css","assets/PhIdentificationBadge.vue.7def6366.js","assets/PhCaretRight.vue.e15843f4.js","assets/PhFlowArrow.vue.197d8eea.js","assets/PhKanban.vue.fbcc2e7d.js","assets/index.64d5641c.js","assets/index.4500414e.js","assets/Workspace.17ab5181.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.2ac3983b.js"),["assets/Stages.2ac3983b.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/ContentLayout.6e92af0c.js","assets/ContentLayout.ee57a545.css","assets/CrudView.edc95542.js","assets/router.b69b216e.js","assets/gateway.635f7051.js","assets/popupNotifcation.6c1732c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/url.c5aa13f6.js","assets/index.783418dc.js","assets/index.a19b8d23.js","assets/CrudView.80dd6085.css","assets/ant-design.3c955d65.js","assets/asyncComputed.6438c00c.js","assets/string.6a4d30e3.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/forms.e276b5e6.js","assets/record.d017e1a2.js","assets/ai.25c3ca39.js","assets/linters.fc8d8b49.js","assets/scripts.19c2fbe0.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/DownOutlined.61bb708f.js","assets/index.c8fb32b5.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/validations.867d2176.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.7b011b39.js"),["assets/WorkflowEditor.7b011b39.js","assets/LoadingContainer.810c895c.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/model.3755de50.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/record.d017e1a2.js","assets/validations.867d2176.js","assets/string.6a4d30e3.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/metadata.7533f2aa.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhKanban.vue.fbcc2e7d.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/index.2754d54e.js","assets/Badge.7209b892.js","assets/isNumeric.75337b1e.js","assets/index.a19b8d23.js","assets/index.c8fb32b5.js","assets/Card.81031f41.js","assets/TabPane.1487adae.js","assets/api.14333d39.js","assets/fetch.0f9030aa.js","assets/uuid.1e016e3a.js","assets/model.e8120bce.css","assets/asyncComputed.6438c00c.js","assets/index.3f446e05.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.4de9e1a9.js"),["assets/WorkflowThreads.4de9e1a9.js","assets/ContentLayout.6e92af0c.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.9921ac06.js","assets/fetch.0f9030aa.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/scripts.19c2fbe0.js","assets/record.d017e1a2.js","assets/api.14333d39.js","assets/metadata.7533f2aa.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhKanban.vue.fbcc2e7d.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/ant-design.3c955d65.js","assets/index.a19b8d23.js","assets/index.783418dc.js","assets/index.eb98648a.js","assets/index.70e5864e.js","assets/CollapsePanel.87ad7bb3.js","assets/index.3f446e05.js","assets/index.26d548d4.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.d06a955c.js","assets/model.3755de50.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/validations.867d2176.js","assets/string.6a4d30e3.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/index.2754d54e.js","assets/Badge.7209b892.js","assets/index.c8fb32b5.js","assets/Card.81031f41.js","assets/TabPane.1487adae.js","assets/uuid.1e016e3a.js","assets/model.e8120bce.css","assets/LoadingOutlined.30dc3e01.js","assets/DeleteOutlined.876dc329.js","assets/PhDownloadSimple.vue.2d11ac76.js","assets/utils.bade2863.js","assets/WorkflowView.ae12211e.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.a8c9e54e.js"),["assets/PreferencesEditor.a8c9e54e.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/record.d017e1a2.js","assets/PlayerNavbar.8d000f2d.js","assets/router.be61be60.js","assets/metadata.7533f2aa.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhKanban.vue.fbcc2e7d.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/PhSignOut.vue.ca5bf4c9.js","assets/workspaceStore.b7eabfd4.js","assets/api.41112379.js","assets/index.4500414e.js","assets/PlayerNavbar.05528f8e.css","assets/WidgetsFrame.112951d4.js","assets/WidgetsFrame.295ac367.css","assets/ContentLayout.6e92af0c.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.810c895c.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/index.5c045125.js","assets/PreferencesEditor.c3fea61a.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.bda5326a.js"),["assets/RequirementsEditor.bda5326a.js","assets/ContentLayout.6e92af0c.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/ContentLayout.ee57a545.css","assets/CrudView.edc95542.js","assets/router.b69b216e.js","assets/gateway.635f7051.js","assets/popupNotifcation.6c1732c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/url.c5aa13f6.js","assets/index.783418dc.js","assets/index.a19b8d23.js","assets/CrudView.80dd6085.css","assets/asyncComputed.6438c00c.js","assets/linters.fc8d8b49.js","assets/record.d017e1a2.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.22c42bde.js"),["assets/EnvVarsEditor.22c42bde.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/record.d017e1a2.js","assets/ContentLayout.6e92af0c.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.1bb7fa9b.js","assets/gateway.635f7051.js","assets/popupNotifcation.6c1732c5.js","assets/fetch.0f9030aa.js","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/CrudView.edc95542.js","assets/router.b69b216e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/index.783418dc.js","assets/index.a19b8d23.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.5beb6f20.js","assets/PhPencil.vue.d0b7b272.js","assets/index.c8fb32b5.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.842e1d19.js"),["assets/VSCodeConnection.842e1d19.js","assets/ContentLayout.6e92af0c.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/ContentLayout.ee57a545.css","assets/index.a19b8d23.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.86096dcb.js"),["assets/AccessControlEditor.86096dcb.js","assets/ContentLayout.6e92af0c.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/ContentLayout.ee57a545.css","assets/fetch.0f9030aa.js","assets/record.d017e1a2.js","assets/repository.c5f20827.js","assets/gateway.635f7051.js","assets/popupNotifcation.6c1732c5.js","assets/asyncComputed.6438c00c.js","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.3101f439.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/index.3f446e05.js","assets/metadata.7533f2aa.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhKanban.vue.fbcc2e7d.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/index.783418dc.js","assets/index.c8fb32b5.js","assets/router.be61be60.js","assets/linters.fc8d8b49.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.e597c05d.js"),["assets/ProjectLogin.e597c05d.js","assets/BaseLayout.8398596e.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/Logo.d201e363.js","assets/Logo.7b39b5e7.css","assets/index.64d5641c.js","assets/index.4500414e.js","assets/index.a19b8d23.js","assets/router.be61be60.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.f8559500.js"),["assets/FormEditor.f8559500.js","assets/PlayerNavbar.8d000f2d.js","assets/router.be61be60.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/metadata.7533f2aa.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhKanban.vue.fbcc2e7d.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/PhSignOut.vue.ca5bf4c9.js","assets/workspaceStore.b7eabfd4.js","assets/api.41112379.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/index.4500414e.js","assets/PlayerNavbar.05528f8e.css","assets/BaseLayout.8398596e.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.2b07668c.js","assets/uuid.1e016e3a.js","assets/PhCaretRight.vue.e15843f4.js","assets/ai.25c3ca39.js","assets/record.d017e1a2.js","assets/PhCopySimple.vue.ded8bf6e.js","assets/LoadingOutlined.30dc3e01.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/scripts.19c2fbe0.js","assets/validations.867d2176.js","assets/string.6a4d30e3.js","assets/workspaces.198efbfc.js","assets/PhPencil.vue.d0b7b272.js","assets/toggleHighContrast.645a6a59.js","assets/toggleHighContrast.30d77c87.css","assets/index.c8fb32b5.js","assets/Card.81031f41.js","assets/TabPane.1487adae.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/FormRunner.9eab2da8.js","assets/Login.vue_vue_type_script_setup_true_lang.35dc3484.js","assets/CircularLoading.cd9b51dd.js","assets/CircularLoading.e156a2b0.css","assets/Login.e0bff752.css","assets/WidgetsFrame.112951d4.js","assets/WidgetsFrame.295ac367.css","assets/Steps.b4b429f1.js","assets/Steps.4a8d55e8.css","assets/Watermark.70127499.js","assets/Watermark.77541699.css","assets/FormRunner.b0cd3c55.css","assets/api.14333d39.js","assets/fetch.0f9030aa.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/PhFlowArrow.vue.197d8eea.js","assets/forms.e276b5e6.js","assets/ThreadSelector.a085536f.js","assets/index.eb98648a.js","assets/index.3f446e05.js","assets/ThreadSelector.8aa77ab2.css","assets/index.d5cca417.js","assets/index.a19b8d23.js","assets/NavbarControls.da86158f.js","assets/CloseCircleOutlined.7e5b3280.js","assets/popupNotifcation.6c1732c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/PhChats.vue.3400ebdd.js","assets/NavbarControls.5a022bc4.css","assets/index.64d5641c.js","assets/Badge.7209b892.js","assets/isNumeric.75337b1e.js","assets/FormEditor.ab3513d3.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.adf31d59.js"),["assets/JobEditor.adf31d59.js","assets/BaseLayout.8398596e.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.2b07668c.js","assets/uuid.1e016e3a.js","assets/PhCaretRight.vue.e15843f4.js","assets/ai.25c3ca39.js","assets/record.d017e1a2.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhCopySimple.vue.ded8bf6e.js","assets/LoadingOutlined.30dc3e01.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/scripts.19c2fbe0.js","assets/validations.867d2176.js","assets/string.6a4d30e3.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/PhPencil.vue.d0b7b272.js","assets/toggleHighContrast.645a6a59.js","assets/toggleHighContrast.30d77c87.css","assets/index.c8fb32b5.js","assets/Card.81031f41.js","assets/TabPane.1487adae.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/dayjs.7a8709d1.js","assets/index.08793537.js","assets/index.783418dc.js","assets/index.ac1bd553.js","assets/index.a19b8d23.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c37cf4b5.js","assets/NavbarControls.da86158f.js","assets/router.be61be60.js","assets/CloseCircleOutlined.7e5b3280.js","assets/popupNotifcation.6c1732c5.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/PhChats.vue.3400ebdd.js","assets/NavbarControls.5a022bc4.css","assets/index.64d5641c.js","assets/index.4500414e.js","assets/index.d5cca417.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.c3fd77f8.js"),["assets/HookEditor.c3fd77f8.js","assets/BaseLayout.8398596e.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.2b07668c.js","assets/uuid.1e016e3a.js","assets/PhCaretRight.vue.e15843f4.js","assets/ai.25c3ca39.js","assets/record.d017e1a2.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhCopySimple.vue.ded8bf6e.js","assets/LoadingOutlined.30dc3e01.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/scripts.19c2fbe0.js","assets/validations.867d2176.js","assets/string.6a4d30e3.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/PhPencil.vue.d0b7b272.js","assets/toggleHighContrast.645a6a59.js","assets/toggleHighContrast.30d77c87.css","assets/index.c8fb32b5.js","assets/Card.81031f41.js","assets/TabPane.1487adae.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.c37cf4b5.js","assets/api.14333d39.js","assets/fetch.0f9030aa.js","assets/metadata.7533f2aa.js","assets/PhKanban.vue.fbcc2e7d.js","assets/PhWebhooksLogo.vue.b7fc26fe.js","assets/ThreadSelector.a085536f.js","assets/index.eb98648a.js","assets/index.3f446e05.js","assets/ThreadSelector.8aa77ab2.css","assets/index.19cfb8c4.js","assets/CollapsePanel.87ad7bb3.js","assets/index.a19b8d23.js","assets/Badge.7209b892.js","assets/isNumeric.75337b1e.js","assets/index.783418dc.js","assets/NavbarControls.da86158f.js","assets/router.be61be60.js","assets/CloseCircleOutlined.7e5b3280.js","assets/popupNotifcation.6c1732c5.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/PhChats.vue.3400ebdd.js","assets/NavbarControls.5a022bc4.css","assets/index.64d5641c.js","assets/index.4500414e.js","assets/index.d5cca417.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.4cd770fc.js"),["assets/ScriptEditor.4cd770fc.js","assets/BaseLayout.8398596e.js","assets/vue-router.b2844dbd.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.2b07668c.js","assets/uuid.1e016e3a.js","assets/PhCaretRight.vue.e15843f4.js","assets/ai.25c3ca39.js","assets/record.d017e1a2.js","assets/PhCheckCircle.vue.fd275d53.js","assets/PhCopySimple.vue.ded8bf6e.js","assets/LoadingOutlined.30dc3e01.js","assets/linters.fc8d8b49.js","assets/asyncComputed.6438c00c.js","assets/scripts.19c2fbe0.js","assets/validations.867d2176.js","assets/string.6a4d30e3.js","assets/workspaces.198efbfc.js","assets/runnerData.9fbeada9.js","assets/url.c5aa13f6.js","assets/PhPencil.vue.d0b7b272.js","assets/toggleHighContrast.645a6a59.js","assets/toggleHighContrast.30d77c87.css","assets/index.c8fb32b5.js","assets/Card.81031f41.js","assets/TabPane.1487adae.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.9a5d5d8a.js","assets/ExclamationCircleOutlined.f2497988.js","assets/SaveButton.ae5051de.css","assets/ThreadSelector.a085536f.js","assets/index.eb98648a.js","assets/index.3f446e05.js","assets/ThreadSelector.8aa77ab2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.c37cf4b5.js","assets/NavbarControls.da86158f.js","assets/router.be61be60.js","assets/CloseCircleOutlined.7e5b3280.js","assets/index.a19b8d23.js","assets/popupNotifcation.6c1732c5.js","assets/PhArrowSquareOut.vue.b18d1766.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f8c56bd.js","assets/BookOutlined.f244a583.js","assets/PhChats.vue.3400ebdd.js","assets/NavbarControls.5a022bc4.css","assets/index.64d5641c.js","assets/index.4500414e.js","assets/index.d5cca417.js","assets/CollapsePanel.87ad7bb3.js","assets/Badge.7209b892.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...re],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),se=Q(d);d.beforeEach(async(t,e)=>{if(t.meta.playerRoute)return se(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await X();const t=Z(),e=W({render:()=>F(te)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.1a359a66.js.map
