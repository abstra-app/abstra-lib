var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as V,o as A,c as I,w as k,a as j,b as D,u as O,A as S,l as h,e as g,f,g as E,h as U,i as C,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.14a548cd.js";import{d as Y,r as K,g as Q,s as X,c as Z}from"./router.8f459ff9.js";import"./linters.695269ce.js";import"./asyncComputed.e02ddca3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fa5b18c5-a4a7-4c2d-999c-1507a73853f4",t._sentryDebugIdIdentifier="sentry-dbid-fa5b18c5-a4a7-4c2d-999c-1507a73853f4")}catch{}})();const ee={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},te=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=V("RouterView");return A(),I(O(S),{theme:e,"page-header":{ghost:!1}},{default:k(()=>[j("div",ee,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const r=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>r.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let l=r;m(l,"booted",!1);const oe={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"a106c05f9c4178393d35ce3f57f3f0291e2f2f79",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||oe[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var n,i;return(i=(n=e.value)==null?void 0:n.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async n=>{const i=await t.createLogin(n);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async n=>{if(n&&"info"in n){const{email:i,intercomHash:b}=n.info;l.boot(i,b)}else l.shutdown()}),{loadLogin:L,createLogin:y,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),re=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=U({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.b81741fd.js"),["assets/Home.b81741fd.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.5950ef95.js"),["assets/Workspace.5950ef95.js","assets/BaseLayout.5fc18dd6.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/NavbarControls.1031fa1f.js","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/router.8f459ff9.js","assets/CloseCircleOutlined.46c0d655.js","assets/index.9f2fd8db.js","assets/index.d30600b7.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/record.38982c9b.js","assets/popupNotifcation.857cd3f8.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/PhChats.vue.5b56f171.js","assets/NavbarControls.5a022bc4.css","assets/Logo.bf4a04ad.js","assets/Logo.7b39b5e7.css","assets/PhIdentificationBadge.vue.b37e07d3.js","assets/PhCaretRight.vue.62446ddc.js","assets/PhFlowArrow.vue.eab2a8fb.js","assets/PhKanban.vue.6a89bf26.js","assets/index.f7583dd5.js","assets/index.db7959db.js","assets/Workspace.04fea0fa.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.8fff44a5.js"),["assets/Stages.8fff44a5.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.169cf879.js","assets/ContentLayout.ee57a545.css","assets/CrudView.cfedb12a.js","assets/router.153eed5e.js","assets/gateway.3e99bbcd.js","assets/popupNotifcation.857cd3f8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/url.035a83f3.js","assets/index.737de368.js","assets/index.d30600b7.js","assets/CrudView.80dd6085.css","assets/ant-design.1e9d5b60.js","assets/asyncComputed.e02ddca3.js","assets/string.06dbe131.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/forms.30288b0c.js","assets/record.38982c9b.js","assets/ai.a8767052.js","assets/linters.695269ce.js","assets/scripts.c8044df8.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/DownOutlined.5194d40d.js","assets/index.9f2fd8db.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/validations.c2bdd4f4.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.7c0a65d1.js"),["assets/WorkflowEditor.7c0a65d1.js","assets/LoadingContainer.af3fd647.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/model.5b919670.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/record.38982c9b.js","assets/validations.c2bdd4f4.js","assets/string.06dbe131.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/metadata.63e44d65.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhKanban.vue.6a89bf26.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/index.b337a396.js","assets/Badge.753a0a69.js","assets/isNumeric.75337b1e.js","assets/index.d30600b7.js","assets/index.9f2fd8db.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/api.b7d1c8e4.js","assets/fetch.760e3843.js","assets/uuid.a7f35b80.js","assets/model.e8120bce.css","assets/asyncComputed.e02ddca3.js","assets/index.89dec29d.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.195f663f.js"),["assets/WorkflowThreads.195f663f.js","assets/ContentLayout.169cf879.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.e1611764.js","assets/fetch.760e3843.js","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/scripts.c8044df8.js","assets/record.38982c9b.js","assets/api.b7d1c8e4.js","assets/metadata.63e44d65.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhKanban.vue.6a89bf26.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/ant-design.1e9d5b60.js","assets/index.d30600b7.js","assets/index.737de368.js","assets/index.5881e998.js","assets/index.2c7c75fe.js","assets/CollapsePanel.63f964e3.js","assets/index.89dec29d.js","assets/index.350fcaff.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.584db50a.js","assets/model.5b919670.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/validations.c2bdd4f4.js","assets/string.06dbe131.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/index.b337a396.js","assets/Badge.753a0a69.js","assets/index.9f2fd8db.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/uuid.a7f35b80.js","assets/model.e8120bce.css","assets/LoadingOutlined.4b701d7c.js","assets/DeleteOutlined.11f070e5.js","assets/PhDownloadSimple.vue.c432479d.js","assets/utils.4853543a.js","assets/WorkflowView.ae12211e.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.9458b007.js"),["assets/StyleEditor.9458b007.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/record.38982c9b.js","assets/PlayerNavbar.7012f236.js","assets/router.8f459ff9.js","assets/metadata.63e44d65.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhKanban.vue.6a89bf26.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/PhSignOut.vue.98c36413.js","assets/api.ae22d641.js","assets/index.db7959db.js","assets/PlayerNavbar.d09d53fa.css","assets/Home.055141cf.js","assets/Watermark.23e1ee7d.js","assets/Watermark.db150587.css","assets/WidgetsFrame.1666af77.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowSquareOut.vue.33b3861a.js","assets/index.2148acfe.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/Home.ee23fb9b.css","assets/ContentLayout.169cf879.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.af3fd647.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/index.da092abe.js","assets/StyleEditor.bb7bc850.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.101d1c03.js"),["assets/RequirementsEditor.101d1c03.js","assets/ContentLayout.169cf879.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/CrudView.cfedb12a.js","assets/router.153eed5e.js","assets/gateway.3e99bbcd.js","assets/popupNotifcation.857cd3f8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/url.035a83f3.js","assets/index.737de368.js","assets/index.d30600b7.js","assets/CrudView.80dd6085.css","assets/asyncComputed.e02ddca3.js","assets/linters.695269ce.js","assets/record.38982c9b.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.dc1cfc41.js"),["assets/EnvVarsEditor.dc1cfc41.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/record.38982c9b.js","assets/ContentLayout.169cf879.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.33f8abe9.js","assets/gateway.3e99bbcd.js","assets/popupNotifcation.857cd3f8.js","assets/fetch.760e3843.js","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/CrudView.cfedb12a.js","assets/router.153eed5e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/index.737de368.js","assets/index.d30600b7.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.a2e18ece.js","assets/PhPencil.vue.e697d58c.js","assets/index.9f2fd8db.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.ad88194d.js"),["assets/VSCodeConnection.ad88194d.js","assets/ContentLayout.169cf879.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/index.d30600b7.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.5d5139a4.js"),["assets/AccessControlEditor.5d5139a4.js","assets/ContentLayout.169cf879.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/fetch.760e3843.js","assets/record.38982c9b.js","assets/repository.7ed3ccfa.js","assets/gateway.3e99bbcd.js","assets/popupNotifcation.857cd3f8.js","assets/asyncComputed.e02ddca3.js","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.cd9f986f.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/index.89dec29d.js","assets/metadata.63e44d65.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhKanban.vue.6a89bf26.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/index.737de368.js","assets/index.9f2fd8db.js","assets/router.8f459ff9.js","assets/linters.695269ce.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.506aa624.js"),["assets/ProjectLogin.506aa624.js","assets/BaseLayout.5fc18dd6.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/Logo.bf4a04ad.js","assets/Logo.7b39b5e7.css","assets/index.f7583dd5.js","assets/index.db7959db.js","assets/index.d30600b7.js","assets/router.8f459ff9.js","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.50fceee4.js"),["assets/FormEditor.50fceee4.js","assets/PlayerNavbar.7012f236.js","assets/router.8f459ff9.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/metadata.63e44d65.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhKanban.vue.6a89bf26.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/asyncComputed.e02ddca3.js","assets/PhSignOut.vue.98c36413.js","assets/api.ae22d641.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/index.db7959db.js","assets/PlayerNavbar.d09d53fa.css","assets/BaseLayout.5fc18dd6.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.56bbc4ec.js","assets/uuid.a7f35b80.js","assets/PhCaretRight.vue.62446ddc.js","assets/ai.a8767052.js","assets/record.38982c9b.js","assets/PhCopySimple.vue.d692cc6d.js","assets/LoadingOutlined.4b701d7c.js","assets/linters.695269ce.js","assets/scripts.c8044df8.js","assets/validations.c2bdd4f4.js","assets/string.06dbe131.js","assets/workspaces.0c1cb985.js","assets/PhPencil.vue.e697d58c.js","assets/toggleHighContrast.5c4de550.js","assets/toggleHighContrast.30d77c87.css","assets/index.9f2fd8db.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/SourceCode.bb8f20ac.css","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/FormRunner.aa79929b.js","assets/Login.vue_vue_type_script_setup_true_lang.61b9b065.js","assets/CircularLoading.e6d0e040.js","assets/CircularLoading.e156a2b0.css","assets/Login.b7670620.css","assets/WidgetsFrame.1666af77.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.49e3ff62.js","assets/Steps.4a8d55e8.css","assets/Watermark.23e1ee7d.js","assets/Watermark.db150587.css","assets/FormRunner.e77c3549.css","assets/api.b7d1c8e4.js","assets/fetch.760e3843.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/PhFlowArrow.vue.eab2a8fb.js","assets/forms.30288b0c.js","assets/ThreadSelector.49e0ebb6.js","assets/index.5881e998.js","assets/index.89dec29d.js","assets/ThreadSelector.8aa77ab2.css","assets/index.6f61dbf5.js","assets/index.d30600b7.js","assets/NavbarControls.1031fa1f.js","assets/CloseCircleOutlined.46c0d655.js","assets/popupNotifcation.857cd3f8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/PhChats.vue.5b56f171.js","assets/NavbarControls.5a022bc4.css","assets/index.f7583dd5.js","assets/Badge.753a0a69.js","assets/isNumeric.75337b1e.js","assets/FormEditor.2706fd54.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.dc5bff96.js"),["assets/JobEditor.dc5bff96.js","assets/BaseLayout.5fc18dd6.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.56bbc4ec.js","assets/uuid.a7f35b80.js","assets/PhCaretRight.vue.62446ddc.js","assets/ai.a8767052.js","assets/record.38982c9b.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhCopySimple.vue.d692cc6d.js","assets/LoadingOutlined.4b701d7c.js","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/scripts.c8044df8.js","assets/validations.c2bdd4f4.js","assets/string.06dbe131.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/PhPencil.vue.e697d58c.js","assets/toggleHighContrast.5c4de550.js","assets/toggleHighContrast.30d77c87.css","assets/index.9f2fd8db.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/SourceCode.bb8f20ac.css","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/dayjs.82cb7573.js","assets/index.c033b7d3.js","assets/index.737de368.js","assets/index.21b384e2.js","assets/index.d30600b7.js","assets/RunButton.vue_vue_type_script_setup_true_lang.bce5fc3c.js","assets/NavbarControls.1031fa1f.js","assets/router.8f459ff9.js","assets/CloseCircleOutlined.46c0d655.js","assets/popupNotifcation.857cd3f8.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/PhChats.vue.5b56f171.js","assets/NavbarControls.5a022bc4.css","assets/index.f7583dd5.js","assets/index.db7959db.js","assets/index.6f61dbf5.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.bc8e2827.js"),["assets/HookEditor.bc8e2827.js","assets/BaseLayout.5fc18dd6.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.56bbc4ec.js","assets/uuid.a7f35b80.js","assets/PhCaretRight.vue.62446ddc.js","assets/ai.a8767052.js","assets/record.38982c9b.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhCopySimple.vue.d692cc6d.js","assets/LoadingOutlined.4b701d7c.js","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/scripts.c8044df8.js","assets/validations.c2bdd4f4.js","assets/string.06dbe131.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/PhPencil.vue.e697d58c.js","assets/toggleHighContrast.5c4de550.js","assets/toggleHighContrast.30d77c87.css","assets/index.9f2fd8db.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/SourceCode.bb8f20ac.css","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.bce5fc3c.js","assets/api.b7d1c8e4.js","assets/fetch.760e3843.js","assets/metadata.63e44d65.js","assets/PhKanban.vue.6a89bf26.js","assets/PhWebhooksLogo.vue.c9145d72.js","assets/ThreadSelector.49e0ebb6.js","assets/index.5881e998.js","assets/index.89dec29d.js","assets/ThreadSelector.8aa77ab2.css","assets/index.a57de896.js","assets/CollapsePanel.63f964e3.js","assets/index.d30600b7.js","assets/Badge.753a0a69.js","assets/isNumeric.75337b1e.js","assets/index.737de368.js","assets/NavbarControls.1031fa1f.js","assets/router.8f459ff9.js","assets/CloseCircleOutlined.46c0d655.js","assets/popupNotifcation.857cd3f8.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/PhChats.vue.5b56f171.js","assets/NavbarControls.5a022bc4.css","assets/index.f7583dd5.js","assets/index.db7959db.js","assets/index.6f61dbf5.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.8c277772.js"),["assets/ScriptEditor.8c277772.js","assets/BaseLayout.5fc18dd6.js","assets/vue-router.14a548cd.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.56bbc4ec.js","assets/uuid.a7f35b80.js","assets/PhCaretRight.vue.62446ddc.js","assets/ai.a8767052.js","assets/record.38982c9b.js","assets/PhCheckCircle.vue.9ef7f7fa.js","assets/PhCopySimple.vue.d692cc6d.js","assets/LoadingOutlined.4b701d7c.js","assets/linters.695269ce.js","assets/asyncComputed.e02ddca3.js","assets/scripts.c8044df8.js","assets/validations.c2bdd4f4.js","assets/string.06dbe131.js","assets/workspaces.0c1cb985.js","assets/runnerData.29acc03f.js","assets/url.035a83f3.js","assets/PhPencil.vue.e697d58c.js","assets/toggleHighContrast.5c4de550.js","assets/toggleHighContrast.30d77c87.css","assets/index.9f2fd8db.js","assets/Card.703dc1c7.js","assets/TabPane.9c5a6544.js","assets/SourceCode.bb8f20ac.css","assets/SaveButton.42196cdc.js","assets/ExclamationCircleOutlined.d66fe7a9.js","assets/SaveButton.ae5051de.css","assets/ThreadSelector.49e0ebb6.js","assets/index.5881e998.js","assets/index.89dec29d.js","assets/ThreadSelector.8aa77ab2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.bce5fc3c.js","assets/NavbarControls.1031fa1f.js","assets/router.8f459ff9.js","assets/CloseCircleOutlined.46c0d655.js","assets/index.d30600b7.js","assets/popupNotifcation.857cd3f8.js","assets/PhArrowSquareOut.vue.33b3861a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js","assets/BookOutlined.20d08049.js","assets/PhChats.vue.5b56f171.js","assets/NavbarControls.5a022bc4.css","assets/index.f7583dd5.js","assets/index.db7959db.js","assets/index.6f61dbf5.js","assets/CollapsePanel.63f964e3.js","assets/Badge.753a0a69.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...re],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),se=Q(d);d.beforeEach(async(t,e)=>{if(t.meta.playerRoute)return se(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await X();const t=Z(),e=W({render:()=>F(te)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.c64ff5f4.js.map
