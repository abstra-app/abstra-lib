var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Y as p,cY as h,cZ as u,c_ as b,h as E,i as A,_ as o,j as g}from"./vue-router.f3519154.js";import{C as c,a as f}from"./gateway.0671d338.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ffcbf6aa-c9e1-4645-832d-d5ece263f95a",t._sentryDebugIdIdentifier="sentry-dbid-ffcbf6aa-c9e1-4645-832d-d5ece263f95a")}catch{}})();const L=p(h),T=p(u);class w{async getInfo(){return await c.get("authors/info")}}const v=new w,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.05825625.js"),["assets/WidgetPreview.05825625.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/Steps.2f7132a1.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.8fbeec34.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.0aeddb3d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.0d056278.js"),["assets/Login.0d056278.js","assets/CircularLoading.bc30524d.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.8fbeec34.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/member.1f0dac68.js","assets/Login.4d61f324.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.684c28eb.js"),["assets/EditorLogin.684c28eb.js","assets/Navbar.b9b06664.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.1d798485.js","assets/PhChats.vue.ffde475f.js","assets/PhSignOut.vue.87329143.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/index.fc10cf6e.js","assets/index.86abd2b1.js","assets/index.73a31a3b.js","assets/BookOutlined.c2d82337.js","assets/Navbar.a899b0d6.css","assets/url.22f9c685.js","assets/apiKey.6d6cc066.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js","assets/project.8c0f05b3.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.c621bc14.js"),["assets/Organizations.c621bc14.js","assets/Navbar.b9b06664.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.1d798485.js","assets/PhChats.vue.ffde475f.js","assets/PhSignOut.vue.87329143.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/index.fc10cf6e.js","assets/index.86abd2b1.js","assets/index.73a31a3b.js","assets/BookOutlined.c2d82337.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.6a8f3e8d.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.e0142dae.js","assets/ContentLayout.ee57a545.css","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/CrudView.80dd6085.css","assets/ant-design.44f5aba4.js","assets/PhArrowSquareOut.vue.f9c8d9b7.js","assets/PhPencil.vue.5d218ef5.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.e0208c0d.js"),["assets/Organization.e0208c0d.js","assets/Navbar.b9b06664.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.1d798485.js","assets/PhChats.vue.ffde475f.js","assets/PhSignOut.vue.87329143.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/index.fc10cf6e.js","assets/index.86abd2b1.js","assets/index.73a31a3b.js","assets/BookOutlined.c2d82337.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.6a8f3e8d.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.e0142dae.js","assets/ContentLayout.ee57a545.css","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js","assets/Sidebar.8801ae77.js","assets/index.ff1df01d.js","assets/Logo.337d87a1.js","assets/Logo.7b39b5e7.css","assets/index.88d62a15.js","assets/Sidebar.b3237e51.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.c685374a.js"),["assets/Projects.c685374a.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.1d798485.js","assets/ant-design.44f5aba4.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js","assets/project.8c0f05b3.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.f9c8d9b7.js","assets/PhPencil.vue.5d218ef5.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.ce5a3a25.js"),["assets/Editors.ce5a3a25.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css","assets/ant-design.44f5aba4.js","assets/asyncComputed.1d798485.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/member.1f0dac68.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.2582354b.js"),["assets/Billing.2582354b.js","assets/asyncComputed.1d798485.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js","assets/LoadingContainer.e1d4609d.js","assets/LoadingContainer.56fa997a.css","assets/index.49038ef1.js","assets/Card.b53b3889.js","assets/TabPane.b37c6920.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.f2bd70b1.js"),["assets/Project.f2bd70b1.js","assets/Navbar.b9b06664.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.1d798485.js","assets/PhChats.vue.ffde475f.js","assets/PhSignOut.vue.87329143.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/index.fc10cf6e.js","assets/index.86abd2b1.js","assets/index.73a31a3b.js","assets/BookOutlined.c2d82337.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.6a8f3e8d.js","assets/BaseLayout.0156e9e1.css","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js","assets/project.8c0f05b3.js","assets/Sidebar.8801ae77.js","assets/index.ff1df01d.js","assets/Logo.337d87a1.js","assets/Logo.7b39b5e7.css","assets/index.88d62a15.js","assets/Sidebar.b3237e51.css","assets/ContentLayout.e0142dae.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.13ad5ff2.js","assets/PhIdentificationBadge.vue.b1e50d2f.js","assets/PhCube.vue.7b886b6b.js","assets/PhGlobe.vue.eda7a72f.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.cba7f02f.js"),["assets/Live.cba7f02f.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.1d798485.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/datetime.c75088d8.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/project.8c0f05b3.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9ef56a7f.js","assets/LoadingOutlined.e28594d1.js","assets/PhArrowCounterClockwise.vue.13ad5ff2.js","assets/PhArrowSquareOut.vue.f9c8d9b7.js","assets/PhChats.vue.ffde475f.js","assets/PhCopySimple.vue.5245a94e.js","assets/PhRocketLaunch.vue.053d0174.js","assets/index.71a7d9fe.js","assets/Live.2e8a50a7.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.cd5caf26.js"),["assets/Builds.cd5caf26.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.1d798485.js","assets/datetime.c75088d8.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/PhArrowCounterClockwise.vue.13ad5ff2.js","assets/PhCube.vue.7b886b6b.js","assets/PhDownloadSimple.vue.94fc0e18.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/project.8c0f05b3.js","assets/PhWebhooksLogo.vue.bbb92d9b.js","assets/index.2857d8cc.js","assets/ExclamationCircleOutlined.16f928cc.js","assets/CloseCircleOutlined.766998a9.js","assets/LoadingOutlined.e28594d1.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.63f2049e.js"),["assets/Connectors.63f2049e.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/tables.ba2d38e2.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/connector.179322b2.js","assets/asyncComputed.1d798485.js","assets/PhPencil.vue.5d218ef5.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.e56f206b.js"),["assets/Tables.e56f206b.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.1d798485.js","assets/string.de479eff.js","assets/PhPencil.vue.5d218ef5.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.9745e93c.js"),["assets/Sql.9745e93c.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/utils.3037b846.js","assets/PhDownloadSimple.vue.94fc0e18.js","assets/toggleHighContrast.0c45e3e1.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/project.8c0f05b3.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.b549180f.js"),["assets/ApiKeys.b549180f.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.1d798485.js","assets/apiKey.6d6cc066.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/member.1f0dac68.js","assets/project.8c0f05b3.js","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.69c4d297.js"),["assets/Logs.69c4d297.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/datetime.c75088d8.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9ef56a7f.js","assets/LoadingOutlined.e28594d1.js","assets/dayjs.6e5df2b6.js","assets/index.7e844083.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CollapsePanel.745c9b92.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.2d94bb55.js"),["assets/ProjectSettings.2d94bb55.js","assets/asyncComputed.1d798485.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/project.8c0f05b3.js","assets/SaveButton.aa452031.js","assets/ExclamationCircleOutlined.16f928cc.js","assets/SaveButton.ae5051de.css","assets/index.fc10cf6e.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.9c996483.js"),["assets/EnvVars.9c996483.js","assets/View.vue_vue_type_script_setup_true_lang.099bda27.js","assets/gateway.0671d338.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/popupNotifcation.0850a472.js","assets/fetch.88e7436b.js","assets/record.2326b55d.js","assets/SaveButton.aa452031.js","assets/ExclamationCircleOutlined.16f928cc.js","assets/SaveButton.ae5051de.css","assets/CrudView.1807497b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/index.fc10cf6e.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.053d0174.js","assets/asyncComputed.1d798485.js","assets/PhPencil.vue.5d218ef5.js","assets/index.ff1df01d.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.f0560c85.js"),["assets/Files.f0560c85.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.e0142dae.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.0850a472.js","assets/ant-design.44f5aba4.js","assets/asyncComputed.1d798485.js","assets/gateway.0671d338.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/DeleteOutlined.f7d9a5a5.js","assets/Card.b53b3889.js","assets/TabPane.b37c6920.js","assets/Files.4d74f055.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.36119ba0.js"),["assets/View.36119ba0.js","assets/asyncComputed.1d798485.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/index.fc10cf6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e3853a0.js","assets/BookOutlined.c2d82337.js","assets/index.d0d37a94.js","assets/isNumeric.75337b1e.js","assets/CrudView.1807497b.js","assets/url.22f9c685.js","assets/index.88d62a15.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.5d218ef5.js","assets/repository.16fdf898.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/fetch.88e7436b.js","assets/record.2326b55d.js","assets/ant-design.44f5aba4.js","assets/TabPane.b37c6920.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.f125926b.js"),["assets/TableEditor.f125926b.js","assets/BaseLayout.6a8f3e8d.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.1d798485.js","assets/PhPencil.vue.5d218ef5.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/tables.ba2d38e2.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/organization.54ac42b0.js","assets/project.8c0f05b3.js","assets/ContentLayout.e0142dae.js","assets/ContentLayout.ee57a545.css","assets/ant-design.44f5aba4.js","assets/PhCheckCircle.vue.4ee29adb.js","assets/index.280391ec.js","assets/index.fc10cf6e.js","assets/index.d7c48620.js","assets/index.d0d37a94.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.12fc2fcd.js","assets/LoadingOutlined.e28594d1.js","assets/DeleteOutlined.f7d9a5a5.js","assets/DownOutlined.4ff3ad87.js","assets/index.49038ef1.js","assets/index.73a31a3b.js","assets/index.86abd2b1.js","assets/TableEditor.44b01422.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.4225fbe0.js"),["assets/ConnectorEditor.4225fbe0.js","assets/BaseLayout.6a8f3e8d.js","assets/vue-router.f3519154.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.aa452031.js","assets/ExclamationCircleOutlined.16f928cc.js","assets/SaveButton.ae5051de.css","assets/asyncComputed.1d798485.js","assets/tables.ba2d38e2.js","assets/gateway.0671d338.js","assets/popupNotifcation.0850a472.js","assets/record.2326b55d.js","assets/string.de479eff.js","assets/connector.179322b2.js","assets/organization.54ac42b0.js","assets/project.8c0f05b3.js","assets/TabPane.b37c6920.js","assets/index.73a31a3b.js","assets/index.86abd2b1.js","assets/index.fc10cf6e.js","assets/index.49038ef1.js","assets/ConnectorEditor.575aefc3.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.d6f46e6b.js.map
