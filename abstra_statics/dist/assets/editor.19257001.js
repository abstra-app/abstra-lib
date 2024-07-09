var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as A,o as I,c as k,w as V,a as j,b as D,u as O,A as S,l as h,e as g,f,g as E,h as U,i as C,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.35df483d.js";import{d as Y,r as K,g as Q,s as X,c as Z}from"./router.013a2b5f.js";import"./workspaces.9c9db496.js";import"./asyncComputed.fa6138b7.js";import"./runnerData.687cc057.js";import"./url.3860831f.js";import"./record.52252ab3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cfe7e6a6-cc0c-410c-b458-dc938cec7820",t._sentryDebugIdIdentifier="sentry-dbid-cfe7e6a6-cc0c-410c-b458-dc938cec7820")}catch{}})();const ee={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},te=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=A("router-view");return I(),k(O(S),{theme:e,"page-header":{ghost:!1}},{default:V(()=>[j("div",ee,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let l=n;m(l,"booted",!1);const oe={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"476733032c1100fff5e1d93bfefe953ced2d265b",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||oe[t]},c={consoleUrl:ae("console-url")},re=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:b}=r.info;l.boot(i,b)}else l.shutdown()}),{loadLogin:L,createLogin:y,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),ne=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=U({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.28c94850.js"),["assets/Home.28c94850.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/Home.6c0ec87e.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.f1309411.js"),["assets/Workspace.f1309411.js","assets/BaseLayout.27266192.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/NavbarControls.311ba54b.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/record.52252ab3.js","assets/router.013a2b5f.js","assets/CloseCircleOutlined.3d8fe695.js","assets/index.a05d8cde.js","assets/index.8614479b.js","assets/popupNotifcation.ea4acdc5.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/PhChats.vue.9615cf40.js","assets/NavbarControls.21a04751.css","assets/Logo.1da5ad86.js","assets/Logo.7b39b5e7.css","assets/PhIdentificationBadge.vue.905636a2.js","assets/PhCaretRight.vue.616f9d28.js","assets/PhFlowArrow.vue.ccd77077.js","assets/PhKanban.vue.de8fe2a9.js","assets/index.8c4e48ec.js","assets/index.c92cd812.js","assets/Workspace.14a52a67.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.1e0bf023.js"),["assets/Stages.1e0bf023.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.0adfabee.js","assets/ContentLayout.ee57a545.css","assets/CrudView.c23e18cf.js","assets/router.d933c1d5.js","assets/gateway.d1efc3eb.js","assets/popupNotifcation.ea4acdc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/url.3860831f.js","assets/index.8fc2feae.js","assets/index.8614479b.js","assets/CrudView.a8b105cf.css","assets/ant-design.71b54ff7.js","assets/asyncComputed.fa6138b7.js","assets/string.65b1c4d4.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/workspaces.9c9db496.js","assets/runnerData.687cc057.js","assets/record.52252ab3.js","assets/forms.03507f59.js","assets/ai.9476186f.js","assets/scripts.01fc285b.js","assets/DownOutlined.5ff10bbb.js","assets/index.a05d8cde.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/validations.92d28046.js","assets/Stages.91d955ea.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.9e8e4575.js"),["assets/WorkflowEditor.9e8e4575.js","assets/LoadingContainer.5949c6db.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/model.a3b8bd05.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/record.52252ab3.js","assets/validations.92d28046.js","assets/string.65b1c4d4.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/metadata.3a9fc1d1.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhKanban.vue.de8fe2a9.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/index.75149df5.js","assets/Badge.5153bdc4.js","assets/isNumeric.75337b1e.js","assets/index.8614479b.js","assets/index.a05d8cde.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/api.546b2d65.js","assets/fetch.5211d3c5.js","assets/uuid.0162566c.js","assets/model.f4a37ee0.css","assets/index.292c7e99.js","assets/WorkflowEditor.df9d3258.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.fbf214e1.js"),["assets/WorkflowThreads.fbf214e1.js","assets/ContentLayout.0adfabee.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.37b91f9c.js","assets/fetch.5211d3c5.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/record.52252ab3.js","assets/scripts.01fc285b.js","assets/api.546b2d65.js","assets/metadata.3a9fc1d1.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhKanban.vue.de8fe2a9.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/ant-design.71b54ff7.js","assets/index.8614479b.js","assets/index.8fc2feae.js","assets/index.8672e25b.js","assets/index.dc0ad0ce.js","assets/CollapsePanel.3bc80da4.js","assets/index.292c7e99.js","assets/index.30caf62e.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.8b342055.js","assets/model.a3b8bd05.js","assets/validations.92d28046.js","assets/string.65b1c4d4.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/index.75149df5.js","assets/Badge.5153bdc4.js","assets/index.a05d8cde.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/uuid.0162566c.js","assets/model.f4a37ee0.css","assets/LoadingOutlined.10ab5822.js","assets/DeleteOutlined.ed940e32.js","assets/PhDownloadSimple.vue.6fd9fe21.js","assets/utils.cb3c202d.js","assets/WorkflowView.cbdef581.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.96a867d1.js"),["assets/StyleEditor.96a867d1.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/record.52252ab3.js","assets/PlayerNavbar.83dc99e9.js","assets/router.013a2b5f.js","assets/metadata.3a9fc1d1.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhKanban.vue.de8fe2a9.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/PhSignOut.vue.8fc9e08f.js","assets/api.b59ef378.js","assets/index.c92cd812.js","assets/PlayerNavbar.7299386a.css","assets/Home.d6024a1c.js","assets/Watermark.076efd9e.js","assets/Watermark.db150587.css","assets/WidgetsFrame.f83c51b7.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/index.ec41636f.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/Home.d5210cff.css","assets/ContentLayout.0adfabee.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.5949c6db.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/index.96359b89.js","assets/StyleEditor.4d0f11d9.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.cc02f82e.js"),["assets/RequirementsEditor.cc02f82e.js","assets/ContentLayout.0adfabee.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/CrudView.c23e18cf.js","assets/router.d933c1d5.js","assets/gateway.d1efc3eb.js","assets/popupNotifcation.ea4acdc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/url.3860831f.js","assets/index.8fc2feae.js","assets/index.8614479b.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.fa6138b7.js","assets/workspaces.9c9db496.js","assets/runnerData.687cc057.js","assets/record.52252ab3.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.11fab9f0.js"),["assets/EnvVarsEditor.11fab9f0.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/record.52252ab3.js","assets/ContentLayout.0adfabee.js","assets/ContentLayout.ee57a545.css","assets/CrudView.c23e18cf.js","assets/router.d933c1d5.js","assets/gateway.d1efc3eb.js","assets/popupNotifcation.ea4acdc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/index.8fc2feae.js","assets/index.8614479b.js","assets/CrudView.a8b105cf.css","assets/index.a05d8cde.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.6f232615.js"),["assets/VSCodeConnection.6f232615.js","assets/ContentLayout.0adfabee.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/index.8614479b.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.140f6638.js"),["assets/AccessControlEditor.140f6638.js","assets/ContentLayout.0adfabee.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.ee57a545.css","assets/fetch.5211d3c5.js","assets/record.52252ab3.js","assets/repository.b3492b5e.js","assets/gateway.d1efc3eb.js","assets/popupNotifcation.ea4acdc5.js","assets/asyncComputed.fa6138b7.js","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/PhGlobe.vue.8d41a1e7.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/index.292c7e99.js","assets/metadata.3a9fc1d1.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhKanban.vue.de8fe2a9.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/index.8fc2feae.js","assets/index.a05d8cde.js","assets/router.013a2b5f.js","assets/workspaces.9c9db496.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.d2a2e64c.js"),["assets/ProjectLogin.d2a2e64c.js","assets/BaseLayout.27266192.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/Logo.1da5ad86.js","assets/Logo.7b39b5e7.css","assets/index.8c4e48ec.js","assets/index.c92cd812.js","assets/index.8614479b.js","assets/router.013a2b5f.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/record.52252ab3.js","assets/ProjectLogin.c1835ee5.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.26d0be94.js"),["assets/FormEditor.26d0be94.js","assets/PlayerNavbar.83dc99e9.js","assets/router.013a2b5f.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/metadata.3a9fc1d1.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhKanban.vue.de8fe2a9.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/asyncComputed.fa6138b7.js","assets/PhSignOut.vue.8fc9e08f.js","assets/api.b59ef378.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/index.c92cd812.js","assets/PlayerNavbar.7299386a.css","assets/BaseLayout.27266192.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.3b340c1a.js","assets/uuid.0162566c.js","assets/PhCaretRight.vue.616f9d28.js","assets/ai.9476186f.js","assets/record.52252ab3.js","assets/PhCopySimple.vue.4ec19277.js","assets/LoadingOutlined.10ab5822.js","assets/workspaces.9c9db496.js","assets/scripts.01fc285b.js","assets/validations.92d28046.js","assets/string.65b1c4d4.js","assets/PhPencil.vue.a31338a2.js","assets/toggleHighContrast.484c7953.js","assets/toggleHighContrast.30d77c87.css","assets/index.a05d8cde.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/SourceCode.850f1050.css","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/FormRunner.42a5e368.js","assets/Login.vue_vue_type_script_setup_true_lang.0727fbb2.js","assets/CircularLoading.8c3e94ce.js","assets/CircularLoading.e156a2b0.css","assets/Login.5e28eae2.css","assets/WidgetsFrame.f83c51b7.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.2fe5bf2a.js","assets/Steps.4a8d55e8.css","assets/Watermark.076efd9e.js","assets/Watermark.db150587.css","assets/FormRunner.60c4be6b.css","assets/api.546b2d65.js","assets/fetch.5211d3c5.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/PhFlowArrow.vue.ccd77077.js","assets/forms.03507f59.js","assets/ThreadSelector.8fc4b644.js","assets/index.8672e25b.js","assets/index.292c7e99.js","assets/ThreadSelector.087a85c2.css","assets/index.f2ce8b55.js","assets/index.8614479b.js","assets/NavbarControls.311ba54b.js","assets/CloseCircleOutlined.3d8fe695.js","assets/popupNotifcation.ea4acdc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/PhChats.vue.9615cf40.js","assets/NavbarControls.21a04751.css","assets/index.8c4e48ec.js","assets/Badge.5153bdc4.js","assets/isNumeric.75337b1e.js","assets/FormEditor.63e78a7f.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.1b221764.js"),["assets/JobEditor.1b221764.js","assets/BaseLayout.27266192.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.3b340c1a.js","assets/uuid.0162566c.js","assets/PhCaretRight.vue.616f9d28.js","assets/ai.9476186f.js","assets/record.52252ab3.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhCopySimple.vue.4ec19277.js","assets/LoadingOutlined.10ab5822.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/scripts.01fc285b.js","assets/validations.92d28046.js","assets/string.65b1c4d4.js","assets/PhPencil.vue.a31338a2.js","assets/toggleHighContrast.484c7953.js","assets/toggleHighContrast.30d77c87.css","assets/index.a05d8cde.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/SourceCode.850f1050.css","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/dayjs.68b1cac7.js","assets/index.a706de42.js","assets/index.8fc2feae.js","assets/index.a3593b30.js","assets/index.8614479b.js","assets/RunButton.vue_vue_type_script_setup_true_lang.a82d41bf.js","assets/NavbarControls.311ba54b.js","assets/router.013a2b5f.js","assets/CloseCircleOutlined.3d8fe695.js","assets/popupNotifcation.ea4acdc5.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/PhChats.vue.9615cf40.js","assets/NavbarControls.21a04751.css","assets/index.8c4e48ec.js","assets/index.c92cd812.js","assets/index.f2ce8b55.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.10d3baf1.js"),["assets/HookEditor.10d3baf1.js","assets/BaseLayout.27266192.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.3b340c1a.js","assets/uuid.0162566c.js","assets/PhCaretRight.vue.616f9d28.js","assets/ai.9476186f.js","assets/record.52252ab3.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhCopySimple.vue.4ec19277.js","assets/LoadingOutlined.10ab5822.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/scripts.01fc285b.js","assets/validations.92d28046.js","assets/string.65b1c4d4.js","assets/PhPencil.vue.a31338a2.js","assets/toggleHighContrast.484c7953.js","assets/toggleHighContrast.30d77c87.css","assets/index.a05d8cde.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/SourceCode.850f1050.css","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a82d41bf.js","assets/api.546b2d65.js","assets/fetch.5211d3c5.js","assets/metadata.3a9fc1d1.js","assets/PhKanban.vue.de8fe2a9.js","assets/PhScroll.vue.69196a43.js","assets/PhWebhooksLogo.vue.60ecb4d3.js","assets/ThreadSelector.8fc4b644.js","assets/index.8672e25b.js","assets/index.292c7e99.js","assets/ThreadSelector.087a85c2.css","assets/index.d2ddafef.js","assets/CollapsePanel.3bc80da4.js","assets/index.8614479b.js","assets/Badge.5153bdc4.js","assets/isNumeric.75337b1e.js","assets/index.8fc2feae.js","assets/NavbarControls.311ba54b.js","assets/router.013a2b5f.js","assets/CloseCircleOutlined.3d8fe695.js","assets/popupNotifcation.ea4acdc5.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/PhChats.vue.9615cf40.js","assets/NavbarControls.21a04751.css","assets/index.8c4e48ec.js","assets/index.c92cd812.js","assets/index.f2ce8b55.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.88ecf143.js"),["assets/ScriptEditor.88ecf143.js","assets/BaseLayout.27266192.js","assets/vue-router.35df483d.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.3b340c1a.js","assets/uuid.0162566c.js","assets/PhCaretRight.vue.616f9d28.js","assets/ai.9476186f.js","assets/record.52252ab3.js","assets/PhCheckCircle.vue.6324004f.js","assets/PhCopySimple.vue.4ec19277.js","assets/LoadingOutlined.10ab5822.js","assets/workspaces.9c9db496.js","assets/asyncComputed.fa6138b7.js","assets/runnerData.687cc057.js","assets/url.3860831f.js","assets/scripts.01fc285b.js","assets/validations.92d28046.js","assets/string.65b1c4d4.js","assets/PhPencil.vue.a31338a2.js","assets/toggleHighContrast.484c7953.js","assets/toggleHighContrast.30d77c87.css","assets/index.a05d8cde.js","assets/Card.a7aed76b.js","assets/TabPane.c0055991.js","assets/SourceCode.850f1050.css","assets/SaveButton.a3546f1e.js","assets/ExclamationCircleOutlined.495b8053.js","assets/SaveButton.9c6e367d.css","assets/ThreadSelector.8fc4b644.js","assets/index.8672e25b.js","assets/index.292c7e99.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a82d41bf.js","assets/NavbarControls.311ba54b.js","assets/router.013a2b5f.js","assets/CloseCircleOutlined.3d8fe695.js","assets/index.8614479b.js","assets/popupNotifcation.ea4acdc5.js","assets/PhArrowSquareOut.vue.eb0eb802.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js","assets/BookOutlined.44917d48.js","assets/PhChats.vue.9615cf40.js","assets/NavbarControls.21a04751.css","assets/index.8c4e48ec.js","assets/index.c92cd812.js","assets/index.f2ce8b55.js","assets/CollapsePanel.3bc80da4.js","assets/Badge.5153bdc4.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...ne],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),se=Q(d);d.beforeEach(async(t,e)=>{if(t.meta.playerRoute)return se(t,e);$(t,e);const o=re();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await X();const t=Z(),e=W({render:()=>F(te)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,re as u};
//# sourceMappingURL=editor.19257001.js.map
