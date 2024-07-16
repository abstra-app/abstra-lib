var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as V,o as A,c as I,w as k,a as j,b as D,u as O,A as S,l as h,e as g,f,g as E,h as U,i as C,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.8ceeff8f.js";import{d as Y,r as K,g as Q,s as X,c as Z}from"./router.dbe489ab.js";import"./linters.9fea5cec.js";import"./asyncComputed.8d9b6ac1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="28f40dfb-e847-4254-949d-01d32ebbb5e2",t._sentryDebugIdIdentifier="sentry-dbid-28f40dfb-e847-4254-949d-01d32ebbb5e2")}catch{}})();const ee={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},te=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=V("RouterView");return A(),I(O(S),{theme:e,"page-header":{ghost:!1}},{default:k(()=>[j("div",ee,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const r=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>r.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let l=r;m(l,"booted",!1);const oe={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"6fe7a9f67e7a1cb29789748516427f017058298b",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||oe[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var n,i;return(i=(n=e.value)==null?void 0:n.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async n=>{const i=await t.createLogin(n);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),y=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async n=>{if(n&&"info"in n){const{email:i,intercomHash:L}=n.info;l.boot(i,L)}else l.shutdown()}),{loadLogin:y,createLogin:b,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),re=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=U({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.b3642302.js"),["assets/Home.b3642302.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.8010c866.js"),["assets/Workspace.8010c866.js","assets/BaseLayout.45852424.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/BaseLayout.0156e9e1.css","assets/NavbarControls.fc1d6ad8.js","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/router.dbe489ab.js","assets/CloseCircleOutlined.115a0c64.js","assets/index.794d043a.js","assets/index.6adb74ab.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/record.7f4489b6.js","assets/popupNotifcation.db99c1d0.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/PhChats.vue.0b2e552a.js","assets/NavbarControls.5a022bc4.css","assets/Logo.f6c1aa2a.js","assets/Logo.7b39b5e7.css","assets/PhIdentificationBadge.vue.6987c049.js","assets/PhCaretRight.vue.bcaec1e2.js","assets/PhFlowArrow.vue.a154b9a8.js","assets/PhKanban.vue.f96847d6.js","assets/index.67985a49.js","assets/index.aa954a80.js","assets/Workspace.04fea0fa.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.5b1c21f5.js"),["assets/Stages.5b1c21f5.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/ContentLayout.cc19f61b.js","assets/ContentLayout.ee57a545.css","assets/CrudView.dd6666ca.js","assets/router.46d9be59.js","assets/gateway.357d642c.js","assets/popupNotifcation.db99c1d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/url.749d5196.js","assets/index.98f30821.js","assets/index.6adb74ab.js","assets/CrudView.80dd6085.css","assets/ant-design.957394c8.js","assets/asyncComputed.8d9b6ac1.js","assets/string.13a990a3.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/forms.0e226ec0.js","assets/record.7f4489b6.js","assets/ai.038db391.js","assets/linters.9fea5cec.js","assets/scripts.272cc697.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/DownOutlined.9bfe5832.js","assets/index.794d043a.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/validations.e2f28e21.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.a7c8695f.js"),["assets/WorkflowEditor.a7c8695f.js","assets/LoadingContainer.1d4a15ff.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/model.4c15fb9d.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/record.7f4489b6.js","assets/validations.e2f28e21.js","assets/string.13a990a3.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/metadata.613ff948.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhKanban.vue.f96847d6.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/index.e2c375d7.js","assets/Badge.8010a914.js","assets/isNumeric.75337b1e.js","assets/index.6adb74ab.js","assets/index.794d043a.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/api.92f14a43.js","assets/fetch.3d99c474.js","assets/uuid.6d1251f0.js","assets/model.e8120bce.css","assets/asyncComputed.8d9b6ac1.js","assets/index.7ac306fd.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.296797a1.js"),["assets/WorkflowThreads.296797a1.js","assets/ContentLayout.cc19f61b.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.72bb90ed.js","assets/fetch.3d99c474.js","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/scripts.272cc697.js","assets/record.7f4489b6.js","assets/api.92f14a43.js","assets/metadata.613ff948.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhKanban.vue.f96847d6.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/ant-design.957394c8.js","assets/index.6adb74ab.js","assets/index.98f30821.js","assets/index.274af184.js","assets/index.cb3cc604.js","assets/CollapsePanel.168ccc84.js","assets/index.7ac306fd.js","assets/index.c2f59e3a.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.676802ea.js","assets/model.4c15fb9d.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/validations.e2f28e21.js","assets/string.13a990a3.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/index.e2c375d7.js","assets/Badge.8010a914.js","assets/index.794d043a.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/uuid.6d1251f0.js","assets/model.e8120bce.css","assets/LoadingOutlined.e7f6ff50.js","assets/DeleteOutlined.bf3d7fde.js","assets/PhDownloadSimple.vue.2542fc28.js","assets/utils.47a20825.js","assets/WorkflowView.ae12211e.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.7cb0a060.js"),["assets/StyleEditor.7cb0a060.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/record.7f4489b6.js","assets/PlayerNavbar.85c37d38.js","assets/router.dbe489ab.js","assets/metadata.613ff948.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhKanban.vue.f96847d6.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/PhSignOut.vue.a864403e.js","assets/api.de5aebba.js","assets/index.aa954a80.js","assets/PlayerNavbar.d09d53fa.css","assets/Home.95f23d2f.js","assets/Watermark.7dc6ea40.js","assets/Watermark.77541699.css","assets/WidgetsFrame.c512f9d0.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/index.a8245bdd.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/Home.ef6dcdfa.css","assets/ContentLayout.cc19f61b.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.1d4a15ff.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/index.6c5296c6.js","assets/StyleEditor.a8cacd08.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.d91f01a2.js"),["assets/RequirementsEditor.d91f01a2.js","assets/ContentLayout.cc19f61b.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/ContentLayout.ee57a545.css","assets/CrudView.dd6666ca.js","assets/router.46d9be59.js","assets/gateway.357d642c.js","assets/popupNotifcation.db99c1d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/url.749d5196.js","assets/index.98f30821.js","assets/index.6adb74ab.js","assets/CrudView.80dd6085.css","assets/asyncComputed.8d9b6ac1.js","assets/linters.9fea5cec.js","assets/record.7f4489b6.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.bff1b5f6.js"),["assets/EnvVarsEditor.bff1b5f6.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/record.7f4489b6.js","assets/ContentLayout.cc19f61b.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.47b1336e.js","assets/gateway.357d642c.js","assets/popupNotifcation.db99c1d0.js","assets/fetch.3d99c474.js","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/CrudView.dd6666ca.js","assets/router.46d9be59.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/index.98f30821.js","assets/index.6adb74ab.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.cdd06d0a.js","assets/PhPencil.vue.97cb7fcc.js","assets/index.794d043a.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.6f88b45e.js"),["assets/VSCodeConnection.6f88b45e.js","assets/ContentLayout.cc19f61b.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/ContentLayout.ee57a545.css","assets/index.6adb74ab.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.b50f75ac.js"),["assets/AccessControlEditor.b50f75ac.js","assets/ContentLayout.cc19f61b.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/ContentLayout.ee57a545.css","assets/fetch.3d99c474.js","assets/record.7f4489b6.js","assets/repository.ddaf458f.js","assets/gateway.357d642c.js","assets/popupNotifcation.db99c1d0.js","assets/asyncComputed.8d9b6ac1.js","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.1e77eba9.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/index.7ac306fd.js","assets/metadata.613ff948.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhKanban.vue.f96847d6.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/index.98f30821.js","assets/index.794d043a.js","assets/router.dbe489ab.js","assets/linters.9fea5cec.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.72bbd146.js"),["assets/ProjectLogin.72bbd146.js","assets/BaseLayout.45852424.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/BaseLayout.0156e9e1.css","assets/Logo.f6c1aa2a.js","assets/Logo.7b39b5e7.css","assets/index.67985a49.js","assets/index.aa954a80.js","assets/index.6adb74ab.js","assets/router.dbe489ab.js","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.04d7ed31.js"),["assets/FormEditor.04d7ed31.js","assets/PlayerNavbar.85c37d38.js","assets/router.dbe489ab.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/metadata.613ff948.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhKanban.vue.f96847d6.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/asyncComputed.8d9b6ac1.js","assets/PhSignOut.vue.a864403e.js","assets/api.de5aebba.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/index.aa954a80.js","assets/PlayerNavbar.d09d53fa.css","assets/BaseLayout.45852424.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.6098b49b.js","assets/uuid.6d1251f0.js","assets/PhCaretRight.vue.bcaec1e2.js","assets/ai.038db391.js","assets/record.7f4489b6.js","assets/PhCopySimple.vue.4cc87e23.js","assets/LoadingOutlined.e7f6ff50.js","assets/linters.9fea5cec.js","assets/scripts.272cc697.js","assets/validations.e2f28e21.js","assets/string.13a990a3.js","assets/workspaces.07e8ca92.js","assets/PhPencil.vue.97cb7fcc.js","assets/toggleHighContrast.6bbd88d2.js","assets/toggleHighContrast.30d77c87.css","assets/index.794d043a.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/FormRunner.b67a1a10.js","assets/Login.vue_vue_type_script_setup_true_lang.ffa33f75.js","assets/CircularLoading.47fc19f6.js","assets/CircularLoading.e156a2b0.css","assets/Login.b829eac8.css","assets/WidgetsFrame.c512f9d0.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.c29096e3.js","assets/Steps.4a8d55e8.css","assets/Watermark.7dc6ea40.js","assets/Watermark.77541699.css","assets/FormRunner.5c08c74e.css","assets/api.92f14a43.js","assets/fetch.3d99c474.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/PhFlowArrow.vue.a154b9a8.js","assets/forms.0e226ec0.js","assets/ThreadSelector.036a3aa2.js","assets/index.274af184.js","assets/index.7ac306fd.js","assets/ThreadSelector.8aa77ab2.css","assets/index.eed0d910.js","assets/index.6adb74ab.js","assets/NavbarControls.fc1d6ad8.js","assets/CloseCircleOutlined.115a0c64.js","assets/popupNotifcation.db99c1d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/PhChats.vue.0b2e552a.js","assets/NavbarControls.5a022bc4.css","assets/index.67985a49.js","assets/Badge.8010a914.js","assets/isNumeric.75337b1e.js","assets/FormEditor.2706fd54.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.8ddf1728.js"),["assets/JobEditor.8ddf1728.js","assets/BaseLayout.45852424.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.6098b49b.js","assets/uuid.6d1251f0.js","assets/PhCaretRight.vue.bcaec1e2.js","assets/ai.038db391.js","assets/record.7f4489b6.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhCopySimple.vue.4cc87e23.js","assets/LoadingOutlined.e7f6ff50.js","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/scripts.272cc697.js","assets/validations.e2f28e21.js","assets/string.13a990a3.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/PhPencil.vue.97cb7fcc.js","assets/toggleHighContrast.6bbd88d2.js","assets/toggleHighContrast.30d77c87.css","assets/index.794d043a.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/dayjs.438edc2d.js","assets/index.ac33faa9.js","assets/index.98f30821.js","assets/index.957a6026.js","assets/index.6adb74ab.js","assets/RunButton.vue_vue_type_script_setup_true_lang.5ba795af.js","assets/NavbarControls.fc1d6ad8.js","assets/router.dbe489ab.js","assets/CloseCircleOutlined.115a0c64.js","assets/popupNotifcation.db99c1d0.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/PhChats.vue.0b2e552a.js","assets/NavbarControls.5a022bc4.css","assets/index.67985a49.js","assets/index.aa954a80.js","assets/index.eed0d910.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.a5beb89c.js"),["assets/HookEditor.a5beb89c.js","assets/BaseLayout.45852424.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.6098b49b.js","assets/uuid.6d1251f0.js","assets/PhCaretRight.vue.bcaec1e2.js","assets/ai.038db391.js","assets/record.7f4489b6.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhCopySimple.vue.4cc87e23.js","assets/LoadingOutlined.e7f6ff50.js","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/scripts.272cc697.js","assets/validations.e2f28e21.js","assets/string.13a990a3.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/PhPencil.vue.97cb7fcc.js","assets/toggleHighContrast.6bbd88d2.js","assets/toggleHighContrast.30d77c87.css","assets/index.794d043a.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.5ba795af.js","assets/api.92f14a43.js","assets/fetch.3d99c474.js","assets/metadata.613ff948.js","assets/PhKanban.vue.f96847d6.js","assets/PhWebhooksLogo.vue.b9ab8d95.js","assets/ThreadSelector.036a3aa2.js","assets/index.274af184.js","assets/index.7ac306fd.js","assets/ThreadSelector.8aa77ab2.css","assets/index.2457fd51.js","assets/CollapsePanel.168ccc84.js","assets/index.6adb74ab.js","assets/Badge.8010a914.js","assets/isNumeric.75337b1e.js","assets/index.98f30821.js","assets/NavbarControls.fc1d6ad8.js","assets/router.dbe489ab.js","assets/CloseCircleOutlined.115a0c64.js","assets/popupNotifcation.db99c1d0.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/PhChats.vue.0b2e552a.js","assets/NavbarControls.5a022bc4.css","assets/index.67985a49.js","assets/index.aa954a80.js","assets/index.eed0d910.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.581b26b2.js"),["assets/ScriptEditor.581b26b2.js","assets/BaseLayout.45852424.js","assets/vue-router.8ceeff8f.js","assets/vue-router.0a96cdf8.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.6098b49b.js","assets/uuid.6d1251f0.js","assets/PhCaretRight.vue.bcaec1e2.js","assets/ai.038db391.js","assets/record.7f4489b6.js","assets/PhCheckCircle.vue.a5e4c19b.js","assets/PhCopySimple.vue.4cc87e23.js","assets/LoadingOutlined.e7f6ff50.js","assets/linters.9fea5cec.js","assets/asyncComputed.8d9b6ac1.js","assets/scripts.272cc697.js","assets/validations.e2f28e21.js","assets/string.13a990a3.js","assets/workspaces.07e8ca92.js","assets/runnerData.85cfa2e3.js","assets/url.749d5196.js","assets/PhPencil.vue.97cb7fcc.js","assets/toggleHighContrast.6bbd88d2.js","assets/toggleHighContrast.30d77c87.css","assets/index.794d043a.js","assets/Card.3a07a8ab.js","assets/TabPane.13cc68be.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.2b5aa794.js","assets/ExclamationCircleOutlined.b9ed3a9f.js","assets/SaveButton.ae5051de.css","assets/ThreadSelector.036a3aa2.js","assets/index.274af184.js","assets/index.7ac306fd.js","assets/ThreadSelector.8aa77ab2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.5ba795af.js","assets/NavbarControls.fc1d6ad8.js","assets/router.dbe489ab.js","assets/CloseCircleOutlined.115a0c64.js","assets/index.6adb74ab.js","assets/popupNotifcation.db99c1d0.js","assets/PhArrowSquareOut.vue.ab3964ef.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.cfc57677.js","assets/BookOutlined.7f6a0f55.js","assets/PhChats.vue.0b2e552a.js","assets/NavbarControls.5a022bc4.css","assets/index.67985a49.js","assets/index.aa954a80.js","assets/index.eed0d910.js","assets/CollapsePanel.168ccc84.js","assets/Badge.8010a914.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...re],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),se=Q(d);d.beforeEach(async(t,e)=>{if(t.meta.playerRoute)return se(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await X();const t=Z(),e=W({render:()=>F(te)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.d187c8ef.js.map
