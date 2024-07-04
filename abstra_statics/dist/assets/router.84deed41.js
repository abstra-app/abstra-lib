var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Z as p,cZ as h,c_ as u,c$ as b,h as E,i as A,_ as o,j as g}from"./vue-router.7730510e.js";import{C as c,a as w}from"./gateway.93d564a3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7db2171a-a199-43ca-8a43-d5d27273e6fa",t._sentryDebugIdIdentifier="sentry-dbid-7db2171a-a199-43ca-8a43-d5d27273e6fa")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.f874e44d.js"),["assets/WidgetPreview.f874e44d.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/Steps.4d263284.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.076ed1a3.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.36d0b360.js"),["assets/Login.36d0b360.js","assets/CircularLoading.817a98f9.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.076ed1a3.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/member.67b0f4ca.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.234e0b0a.js"),["assets/EditorLogin.234e0b0a.js","assets/Navbar.bec58c8c.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/PhChats.vue.65a360b6.js","assets/PhSignOut.vue.6ed04b01.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.dec0903c.js","assets/index.9378ad18.js","assets/index.17d251be.js","assets/BookOutlined.896c2e24.js","assets/Navbar.3c85938c.css","assets/url.2ec92899.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/apiKey.cf78814b.js","assets/project.6e2c8f5f.js","assets/organization.c59aaf6f.js","assets/EditorLogin.a86eeb38.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.8d18fdfa.js"),["assets/Organizations.8d18fdfa.js","assets/Navbar.bec58c8c.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/PhChats.vue.65a360b6.js","assets/PhSignOut.vue.6ed04b01.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.dec0903c.js","assets/index.9378ad18.js","assets/index.17d251be.js","assets/BookOutlined.896c2e24.js","assets/Navbar.3c85938c.css","assets/BaseLayout.daaed1f9.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.c9c57b8b.js","assets/ContentLayout.ee57a545.css","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/CrudView.a8b105cf.css","assets/ant-design.59710f8d.js","assets/PhArrowSquareOut.vue.a4274460.js","assets/PhPencil.vue.313dd37b.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/organization.c59aaf6f.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.220e786b.js"),["assets/Organization.220e786b.js","assets/Navbar.bec58c8c.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/PhChats.vue.65a360b6.js","assets/PhSignOut.vue.6ed04b01.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.dec0903c.js","assets/index.9378ad18.js","assets/index.17d251be.js","assets/BookOutlined.896c2e24.js","assets/Navbar.3c85938c.css","assets/BaseLayout.daaed1f9.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.c9c57b8b.js","assets/ContentLayout.ee57a545.css","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/organization.c59aaf6f.js","assets/Sidebar.04937c32.js","assets/index.119c6cb0.js","assets/Logo.a338abcb.js","assets/Logo.7b39b5e7.css","assets/index.1a0ff823.js","assets/Sidebar.4733e4f6.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.cc3b43a6.js"),["assets/Projects.cc3b43a6.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/ant-design.59710f8d.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/organization.c59aaf6f.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.a4274460.js","assets/PhPencil.vue.313dd37b.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.050ec6cf.js"),["assets/Editors.050ec6cf.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css","assets/ant-design.59710f8d.js","assets/asyncComputed.c3c2c9b7.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/member.67b0f4ca.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.e353e6f9.js"),["assets/Billing.e353e6f9.js","assets/asyncComputed.c3c2c9b7.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/organization.c59aaf6f.js","assets/LoadingContainer.2121d770.js","assets/LoadingContainer.8bd9cc72.css","assets/index.fd8e0cfa.js","assets/Card.f1c33750.js","assets/TabPane.3dd9ab56.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.d506b419.js"),["assets/Project.d506b419.js","assets/Navbar.bec58c8c.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/PhChats.vue.65a360b6.js","assets/PhSignOut.vue.6ed04b01.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.dec0903c.js","assets/index.9378ad18.js","assets/index.17d251be.js","assets/BookOutlined.896c2e24.js","assets/Navbar.3c85938c.css","assets/BaseLayout.daaed1f9.js","assets/BaseLayout.0156e9e1.css","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/organization.c59aaf6f.js","assets/Sidebar.04937c32.js","assets/index.119c6cb0.js","assets/Logo.a338abcb.js","assets/Logo.7b39b5e7.css","assets/index.1a0ff823.js","assets/Sidebar.4733e4f6.css","assets/ContentLayout.c9c57b8b.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.b0d59fbc.js","assets/PhIdentificationBadge.vue.b205e4a5.js","assets/PhCube.vue.a6c8f3f7.js","assets/PhGlobe.vue.e75af09c.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.b9ba6db6.js"),["assets/Live.b9ba6db6.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.c3c2c9b7.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/datetime.a0ad4d38.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.7a70a16f.js","assets/LoadingOutlined.7e5bbeed.js","assets/PhArrowCounterClockwise.vue.b0d59fbc.js","assets/PhArrowSquareOut.vue.a4274460.js","assets/PhChats.vue.65a360b6.js","assets/PhCopySimple.vue.25e8b8b0.js","assets/index.4c20ffb7.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.620d0e7f.js"),["assets/Builds.620d0e7f.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/datetime.a0ad4d38.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.b0d59fbc.js","assets/PhCube.vue.a6c8f3f7.js","assets/PhDownloadSimple.vue.96b8489b.js","assets/PhWebhooksLogo.vue.08c183c7.js","assets/index.11c460ed.js","assets/ExclamationCircleOutlined.ab7a9852.js","assets/CloseCircleOutlined.ea1fa75d.js","assets/LoadingOutlined.7e5bbeed.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.a56e0266.js"),["assets/Connectors.a56e0266.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/index.b96bfbea.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/connector.3ab61088.js","assets/asyncComputed.c3c2c9b7.js","assets/PhPencil.vue.313dd37b.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.4fdf471b.js"),["assets/Tables.4fdf471b.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.c3c2c9b7.js","assets/string.3e8f4f7c.js","assets/PhPencil.vue.313dd37b.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.6ad3360d.js"),["assets/Sql.6ad3360d.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/utils.25708a7c.js","assets/PhDownloadSimple.vue.96b8489b.js","assets/toggleHighContrast.64bf0a10.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.4ae81f97.js"),["assets/ApiKeys.4ae81f97.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.c3c2c9b7.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/member.67b0f4ca.js","assets/apiKey.cf78814b.js","assets/project.6e2c8f5f.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.88d4094d.js"),["assets/Logs.88d4094d.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/datetime.a0ad4d38.js","assets/string.3e8f4f7c.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.7a70a16f.js","assets/LoadingOutlined.7e5bbeed.js","assets/dayjs.eafbca82.js","assets/index.9e5890dc.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CollapsePanel.54f4cb14.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.ff6dac3a.js"),["assets/ProjectSettings.ff6dac3a.js","assets/asyncComputed.c3c2c9b7.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/SaveButton.81c30359.js","assets/ExclamationCircleOutlined.ab7a9852.js","assets/SaveButton.eebb7701.css","assets/index.dec0903c.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.2468321d.js"),["assets/EnvVars.2468321d.js","assets/CrudView.8dd2054e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/index.dec0903c.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.c3c2c9b7.js","assets/PhPencil.vue.313dd37b.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.4201027d.js"),["assets/Files.4201027d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.c9c57b8b.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.1478bc39.js","assets/ant-design.59710f8d.js","assets/asyncComputed.c3c2c9b7.js","assets/gateway.93d564a3.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/DeleteOutlined.680fc551.js","assets/Card.f1c33750.js","assets/TabPane.3dd9ab56.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.a86e6420.js"),["assets/View.a86e6420.js","assets/asyncComputed.c3c2c9b7.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/index.dec0903c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3dc2057.js","assets/BookOutlined.896c2e24.js","assets/index.e1e9cb1b.js","assets/isNumeric.75337b1e.js","assets/CrudView.8dd2054e.js","assets/url.2ec92899.js","assets/index.1a0ff823.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.313dd37b.js","assets/repository.20b064a0.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/fetch.a195ad44.js","assets/record.6f75ac39.js","assets/ant-design.59710f8d.js","assets/TabPane.3dd9ab56.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.44b320c1.js"),["assets/TableEditor.44b320c1.js","assets/BaseLayout.daaed1f9.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.c3c2c9b7.js","assets/PhPencil.vue.313dd37b.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/index.b96bfbea.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/organization.c59aaf6f.js","assets/ContentLayout.c9c57b8b.js","assets/ContentLayout.ee57a545.css","assets/ant-design.59710f8d.js","assets/PhCheckCircle.vue.a4e23e50.js","assets/index.10dc6d8e.js","assets/index.dec0903c.js","assets/index.d7f8bd21.js","assets/index.e1e9cb1b.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.2245bb9c.js","assets/LoadingOutlined.7e5bbeed.js","assets/DeleteOutlined.680fc551.js","assets/index.fd8e0cfa.js","assets/index.17d251be.js","assets/index.9378ad18.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.b91505e0.js"),["assets/ConnectorEditor.b91505e0.js","assets/BaseLayout.daaed1f9.js","assets/vue-router.7730510e.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.81c30359.js","assets/ExclamationCircleOutlined.ab7a9852.js","assets/SaveButton.eebb7701.css","assets/asyncComputed.c3c2c9b7.js","assets/index.b96bfbea.js","assets/gateway.93d564a3.js","assets/popupNotifcation.1478bc39.js","assets/record.6f75ac39.js","assets/string.3e8f4f7c.js","assets/project.6e2c8f5f.js","assets/connector.3ab61088.js","assets/organization.c59aaf6f.js","assets/TabPane.3dd9ab56.js","assets/index.17d251be.js","assets/index.9378ad18.js","assets/index.dec0903c.js","assets/index.fd8e0cfa.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.84deed41.js.map
