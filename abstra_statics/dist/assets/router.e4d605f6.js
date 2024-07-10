var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Z as p,cZ as h,c_ as u,c$ as b,h as E,i as A,_ as o,j as f}from"./vue-router.3911c59e.js";import{C as c,a as g}from"./gateway.0e0c8a44.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1df5fe53-3139-497d-b67b-2c9cfffe6424",t._sentryDebugIdIdentifier="sentry-dbid-1df5fe53-3139-497d-b67b-2c9cfffe6424")}catch{}})();const L=p(h),T=p(u);class w{async getInfo(){return await c.get("authors/info")}}const v=new w,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.410f9261.js"),["assets/WidgetPreview.410f9261.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/Steps.c146d2f2.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.0b4fb8c4.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.89828237.js"),["assets/Login.89828237.js","assets/CircularLoading.fdacb399.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.0b4fb8c4.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/member.13374b77.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.908171a7.js"),["assets/EditorLogin.908171a7.js","assets/Navbar.1fc2e8ff.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.cc198c3f.js","assets/PhChats.vue.312264c6.js","assets/PhSignOut.vue.0f8da4c3.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.e06658df.js","assets/index.a290afb6.js","assets/index.4b609fdd.js","assets/BookOutlined.0a92a502.js","assets/Navbar.3c85938c.css","assets/url.bac468b6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/apiKey.5d7ea33a.js","assets/project.4e281891.js","assets/organization.a4bc0447.js","assets/EditorLogin.a86eeb38.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.dc4b012f.js"),["assets/Organizations.dc4b012f.js","assets/Navbar.1fc2e8ff.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.cc198c3f.js","assets/PhChats.vue.312264c6.js","assets/PhSignOut.vue.0f8da4c3.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.e06658df.js","assets/index.a290afb6.js","assets/index.4b609fdd.js","assets/BookOutlined.0a92a502.js","assets/Navbar.3c85938c.css","assets/BaseLayout.9b1a4efd.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.00008c0d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/url.bac468b6.js","assets/index.a0298495.js","assets/CrudView.a8b105cf.css","assets/ant-design.321d52ab.js","assets/PhArrowSquareOut.vue.8689962c.js","assets/PhPencil.vue.ebb044bd.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/organization.a4bc0447.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.1f5e3a40.js"),["assets/Organization.1f5e3a40.js","assets/Navbar.1fc2e8ff.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.cc198c3f.js","assets/PhChats.vue.312264c6.js","assets/PhSignOut.vue.0f8da4c3.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.e06658df.js","assets/index.a290afb6.js","assets/index.4b609fdd.js","assets/BookOutlined.0a92a502.js","assets/Navbar.3c85938c.css","assets/BaseLayout.9b1a4efd.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.00008c0d.js","assets/ContentLayout.ee57a545.css","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/organization.a4bc0447.js","assets/Sidebar.404f258e.js","assets/index.2d614765.js","assets/Logo.e9a41c41.js","assets/Logo.7b39b5e7.css","assets/index.a0298495.js","assets/Sidebar.4733e4f6.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.453d3abd.js"),["assets/Projects.453d3abd.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.cc198c3f.js","assets/ant-design.321d52ab.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/organization.a4bc0447.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.8689962c.js","assets/PhPencil.vue.ebb044bd.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.f1755a56.js"),["assets/Editors.f1755a56.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css","assets/ant-design.321d52ab.js","assets/asyncComputed.cc198c3f.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/member.13374b77.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.eb28e6a2.js"),["assets/Billing.eb28e6a2.js","assets/asyncComputed.cc198c3f.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/organization.a4bc0447.js","assets/LoadingContainer.c4a95928.js","assets/LoadingContainer.8bd9cc72.css","assets/index.5933951f.js","assets/Card.d40ca5b6.js","assets/TabPane.b4195ac9.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.7bbe8a53.js"),["assets/Project.7bbe8a53.js","assets/Navbar.1fc2e8ff.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.cc198c3f.js","assets/PhChats.vue.312264c6.js","assets/PhSignOut.vue.0f8da4c3.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.e06658df.js","assets/index.a290afb6.js","assets/index.4b609fdd.js","assets/BookOutlined.0a92a502.js","assets/Navbar.3c85938c.css","assets/BaseLayout.9b1a4efd.js","assets/BaseLayout.0156e9e1.css","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/organization.a4bc0447.js","assets/Sidebar.404f258e.js","assets/index.2d614765.js","assets/Logo.e9a41c41.js","assets/Logo.7b39b5e7.css","assets/index.a0298495.js","assets/Sidebar.4733e4f6.css","assets/ContentLayout.00008c0d.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.bb0b3dd7.js","assets/PhIdentificationBadge.vue.35ad898b.js","assets/PhCube.vue.119907b7.js","assets/PhGlobe.vue.446f68d6.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.eb999cdb.js"),["assets/Live.eb999cdb.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.cc198c3f.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/datetime.f36aea80.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.43b52831.js","assets/LoadingOutlined.bcf8ae15.js","assets/PhArrowCounterClockwise.vue.bb0b3dd7.js","assets/PhArrowSquareOut.vue.8689962c.js","assets/PhChats.vue.312264c6.js","assets/PhCopySimple.vue.d1987d62.js","assets/index.9f68bae5.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.c071e214.js"),["assets/Builds.c071e214.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.cc198c3f.js","assets/datetime.f36aea80.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/PhArrowCounterClockwise.vue.bb0b3dd7.js","assets/PhCube.vue.119907b7.js","assets/PhDownloadSimple.vue.02c0c88f.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/PhWebhooksLogo.vue.89a65c35.js","assets/index.c96cc648.js","assets/ExclamationCircleOutlined.5e743b89.js","assets/CloseCircleOutlined.202c475e.js","assets/LoadingOutlined.bcf8ae15.js","assets/Builds.91927b8f.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.ee47e45e.js"),["assets/Connectors.ee47e45e.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/index.581f272c.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/connector.8667becb.js","assets/asyncComputed.cc198c3f.js","assets/PhPencil.vue.ebb044bd.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.315c1f05.js"),["assets/Tables.315c1f05.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.cc198c3f.js","assets/string.33c588a3.js","assets/PhPencil.vue.ebb044bd.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.68d3ff20.js"),["assets/Sql.68d3ff20.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/utils.cdd84a74.js","assets/PhDownloadSimple.vue.02c0c88f.js","assets/toggleHighContrast.9e82ba59.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.3766fee1.js"),["assets/ApiKeys.3766fee1.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.cc198c3f.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/member.13374b77.js","assets/apiKey.5d7ea33a.js","assets/project.4e281891.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.72cc4460.js"),["assets/Logs.72cc4460.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/datetime.f36aea80.js","assets/string.33c588a3.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.43b52831.js","assets/LoadingOutlined.bcf8ae15.js","assets/dayjs.08b383a8.js","assets/index.e61f4bf2.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CollapsePanel.ef1c7df8.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.2b2dbd7d.js"),["assets/ProjectSettings.2b2dbd7d.js","assets/asyncComputed.cc198c3f.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/SaveButton.2cd44c53.js","assets/ExclamationCircleOutlined.5e743b89.js","assets/SaveButton.9c6e367d.css","assets/index.e06658df.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.df8dd029.js"),["assets/EnvVars.df8dd029.js","assets/CrudView.928a71d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/url.bac468b6.js","assets/index.a0298495.js","assets/index.e06658df.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.cc198c3f.js","assets/PhPencil.vue.ebb044bd.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.1c2b0861.js"),["assets/Files.1c2b0861.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.00008c0d.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.5c0082e6.js","assets/ant-design.321d52ab.js","assets/asyncComputed.cc198c3f.js","assets/gateway.0e0c8a44.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/DeleteOutlined.ab5e423f.js","assets/Card.d40ca5b6.js","assets/TabPane.b4195ac9.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.15870d56.js"),["assets/View.15870d56.js","assets/asyncComputed.cc198c3f.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/index.e06658df.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0d2885b4.js","assets/BookOutlined.0a92a502.js","assets/index.a3d97d2e.js","assets/isNumeric.75337b1e.js","assets/CrudView.928a71d9.js","assets/url.bac468b6.js","assets/index.a0298495.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.ebb044bd.js","assets/repository.bbb078b0.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/fetch.750e4d20.js","assets/record.d40dae46.js","assets/ant-design.321d52ab.js","assets/TabPane.b4195ac9.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.8a22f17f.js"),["assets/TableEditor.8a22f17f.js","assets/BaseLayout.9b1a4efd.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.cc198c3f.js","assets/PhPencil.vue.ebb044bd.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/index.581f272c.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/organization.a4bc0447.js","assets/ContentLayout.00008c0d.js","assets/ContentLayout.ee57a545.css","assets/ant-design.321d52ab.js","assets/PhCheckCircle.vue.5839c195.js","assets/index.98e08989.js","assets/index.e06658df.js","assets/index.20d4fcf6.js","assets/index.a3d97d2e.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.4f369204.js","assets/LoadingOutlined.bcf8ae15.js","assets/DeleteOutlined.ab5e423f.js","assets/DownOutlined.7e6ceb47.js","assets/index.5933951f.js","assets/index.4b609fdd.js","assets/index.a290afb6.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.0090350a.js"),["assets/ConnectorEditor.0090350a.js","assets/BaseLayout.9b1a4efd.js","assets/vue-router.3911c59e.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.2cd44c53.js","assets/ExclamationCircleOutlined.5e743b89.js","assets/SaveButton.9c6e367d.css","assets/asyncComputed.cc198c3f.js","assets/index.581f272c.js","assets/gateway.0e0c8a44.js","assets/popupNotifcation.5c0082e6.js","assets/record.d40dae46.js","assets/string.33c588a3.js","assets/project.4e281891.js","assets/connector.8667becb.js","assets/organization.a4bc0447.js","assets/TabPane.b4195ac9.js","assets/index.4b609fdd.js","assets/index.a290afb6.js","assets/index.e06658df.js","assets/index.5933951f.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{f(t,e);const a=g.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.e4d605f6.js.map
