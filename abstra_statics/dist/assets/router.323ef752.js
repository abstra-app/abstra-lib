var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Z as p,cY as h,cZ as u,c_ as b,g as E,h as A,_ as o,i as g}from"./vue-router.c084b0ce.js";import{C as c,a as w}from"./gateway.2860aedc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d0be7338-4649-4613-ab76-287a923e7d02",t._sentryDebugIdIdentifier="sentry-dbid-d0be7338-4649-4613-ab76-287a923e7d02")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.91a78d3c.js"),["assets/WidgetPreview.91a78d3c.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/Steps.0f8a57cb.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.3b21f771.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.88afd8ba.js"),["assets/Login.88afd8ba.js","assets/CircularLoading.72c95b05.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.3b21f771.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/member.1827bc56.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.723e2f43.js"),["assets/ReturnApiKey.723e2f43.js","assets/Navbar.d64784c0.js","assets/logo.084e5d7c.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/PhChats.vue.4674d705.js","assets/PhSignOut.vue.d93ff533.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.93c4b6a1.js","assets/index.b0793bb0.js","assets/index.a59e4f44.js","assets/BookOutlined.e580274a.js","assets/Navbar.4c5e8ebc.css","assets/url.9d42bccf.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/apiKey.da73ad0e.js","assets/project.79afe7c7.js","assets/organization.e44d298f.js","assets/index.5e7b4ef3.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.b9c2a648.js"),["assets/Organizations.b9c2a648.js","assets/Navbar.d64784c0.js","assets/logo.084e5d7c.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/PhChats.vue.4674d705.js","assets/PhSignOut.vue.d93ff533.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.93c4b6a1.js","assets/index.b0793bb0.js","assets/index.a59e4f44.js","assets/BookOutlined.e580274a.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.7214b325.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/CrudView.a8b105cf.css","assets/ant-design.17cf12ad.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/PhPencil.vue.8a285fb8.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/organization.e44d298f.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.9006ca05.js"),["assets/Organization.9006ca05.js","assets/Navbar.d64784c0.js","assets/logo.084e5d7c.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/PhChats.vue.4674d705.js","assets/PhSignOut.vue.d93ff533.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.93c4b6a1.js","assets/index.b0793bb0.js","assets/index.a59e4f44.js","assets/BookOutlined.e580274a.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.7214b325.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/organization.e44d298f.js","assets/Sidebar.7b71dc20.js","assets/index.5e7b4ef3.js","assets/index.7839f463.js","assets/Sidebar.4bfd151d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.30d0eb6e.js"),["assets/Projects.30d0eb6e.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/ant-design.17cf12ad.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/organization.e44d298f.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.dab600ec.js","assets/PhPencil.vue.8a285fb8.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.b2dd103a.js"),["assets/Editors.b2dd103a.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/ant-design.17cf12ad.js","assets/asyncComputed.bc1d1b96.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/member.1827bc56.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.81360ad9.js"),["assets/Billing.81360ad9.js","assets/asyncComputed.bc1d1b96.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/organization.e44d298f.js","assets/LoadingContainer.31ecbdc1.js","assets/LoadingContainer.8bd9cc72.css","assets/index.0196f898.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.190feb1a.js"),["assets/Project.190feb1a.js","assets/Navbar.d64784c0.js","assets/logo.084e5d7c.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/PhChats.vue.4674d705.js","assets/PhSignOut.vue.d93ff533.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.93c4b6a1.js","assets/index.b0793bb0.js","assets/index.a59e4f44.js","assets/BookOutlined.e580274a.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.7214b325.js","assets/BaseLayout.7e127cbf.css","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/organization.e44d298f.js","assets/Sidebar.7b71dc20.js","assets/index.5e7b4ef3.js","assets/index.7839f463.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.117b6a64.js","assets/PhIdentificationBadge.vue.747a3e63.js","assets/PhCube.vue.2d8c1d03.js","assets/PhGlobe.vue.aae97aef.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.84e4c90e.js"),["assets/Live.84e4c90e.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.bc1d1b96.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/datetime.fd86aca9.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.beb725d4.js","assets/LoadingOutlined.b055fcfb.js","assets/PhArrowCounterClockwise.vue.117b6a64.js","assets/PhArrowSquareOut.vue.dab600ec.js","assets/PhChats.vue.4674d705.js","assets/PhCopySimple.vue.a08b1bb4.js","assets/index.c7cc5fb3.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.5dc2ca58.js"),["assets/Builds.5dc2ca58.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/datetime.fd86aca9.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.117b6a64.js","assets/PhCube.vue.2d8c1d03.js","assets/PhDownloadSimple.vue.17e515cf.js","assets/PhWebhooksLogo.vue.13e28f0a.js","assets/index.e7e94428.js","assets/ExclamationCircleOutlined.557698f4.js","assets/CloseCircleOutlined.478cd306.js","assets/LoadingOutlined.b055fcfb.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.125093a0.js"),["assets/Connectors.125093a0.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/index.361eae3c.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/connector.330ce08d.js","assets/asyncComputed.bc1d1b96.js","assets/PhPencil.vue.8a285fb8.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.74ddcac9.js"),["assets/Tables.74ddcac9.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.bc1d1b96.js","assets/string.0b090da8.js","assets/PhPencil.vue.8a285fb8.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.2c201e3e.js"),["assets/Sql.2c201e3e.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/utils.892b04e8.js","assets/PhDownloadSimple.vue.17e515cf.js","assets/toggleHighContrast.b42dc17e.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.a5f435df.js"),["assets/ApiKeys.a5f435df.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/asyncComputed.bc1d1b96.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/member.1827bc56.js","assets/apiKey.da73ad0e.js","assets/project.79afe7c7.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.93366d05.js"),["assets/Logs.93366d05.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/datetime.fd86aca9.js","assets/string.0b090da8.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.beb725d4.js","assets/LoadingOutlined.b055fcfb.js","assets/dayjs.2b60e29f.js","assets/index.0a4a6b93.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CollapsePanel.f9707140.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.0f344f59.js"),["assets/ProjectSettings.0f344f59.js","assets/asyncComputed.bc1d1b96.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/index.93c4b6a1.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.42424e86.js"),["assets/EnvVars.42424e86.js","assets/CrudView.2a7e11ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/index.93c4b6a1.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.bc1d1b96.js","assets/PhPencil.vue.8a285fb8.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.c83549de.js"),["assets/Files.c83549de.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.db6965f1.js","assets/ant-design.17cf12ad.js","assets/asyncComputed.bc1d1b96.js","assets/gateway.2860aedc.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/DeleteOutlined.9b6739f2.js","assets/Card.0fdf15ba.js","assets/TabPane.05c42898.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.86d72e9f.js"),["assets/View.86d72e9f.js","assets/asyncComputed.bc1d1b96.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/index.93c4b6a1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js","assets/BookOutlined.e580274a.js","assets/index.746bd7e7.js","assets/isNumeric.75337b1e.js","assets/CrudView.2a7e11ba.js","assets/url.9d42bccf.js","assets/index.7839f463.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.8a285fb8.js","assets/repository.1754560c.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/fetch.fc10da49.js","assets/record.5074e0e9.js","assets/ant-design.17cf12ad.js","assets/TabPane.05c42898.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.6e31e548.js"),["assets/TableEditor.6e31e548.js","assets/BaseLayout.7214b325.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.bc1d1b96.js","assets/PhPencil.vue.8a285fb8.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/index.361eae3c.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/organization.e44d298f.js","assets/ContentLayout.bf662838.js","assets/ContentLayout.ee57a545.css","assets/ant-design.17cf12ad.js","assets/PhCheckCircle.vue.c81476e4.js","assets/index.93ffd604.js","assets/index.93c4b6a1.js","assets/index.6cdcea3b.js","assets/index.746bd7e7.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.8f95729b.js","assets/LoadingOutlined.b055fcfb.js","assets/DeleteOutlined.9b6739f2.js","assets/index.0196f898.js","assets/index.a59e4f44.js","assets/index.b0793bb0.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.e63aacb4.js"),["assets/ConnectorEditor.e63aacb4.js","assets/BaseLayout.7214b325.js","assets/vue-router.c084b0ce.js","assets/vue-router.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SaveButton.2f05f686.js","assets/ExclamationCircleOutlined.557698f4.js","assets/SaveButton.eebb7701.css","assets/asyncComputed.bc1d1b96.js","assets/index.361eae3c.js","assets/gateway.2860aedc.js","assets/popupNotifcation.db6965f1.js","assets/record.5074e0e9.js","assets/string.0b090da8.js","assets/project.79afe7c7.js","assets/connector.330ce08d.js","assets/organization.e44d298f.js","assets/TabPane.05c42898.js","assets/index.a59e4f44.js","assets/index.b0793bb0.js","assets/index.93c4b6a1.js","assets/index.0196f898.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.323ef752.js.map
