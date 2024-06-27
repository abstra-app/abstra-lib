var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.f244b960.js";import{B as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.3f3d2696.js";import{C as c,a as w}from"./gateway.3fe338e2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8b0c4033-0ca5-404e-a4a3-a9b26e4bc666",t._sentryDebugIdIdentifier="sentry-dbid-8b0c4033-0ca5-404e-a4a3-a9b26e4bc666")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.7494fc79.js"),["assets/WidgetPreview.7494fc79.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/Steps.bd9f44fe.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.afd57429.js","assets/index.33e498ec.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.64b75cad.js"),["assets/Login.64b75cad.js","assets/CircularLoading.489f13b1.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.afd57429.js","assets/index.33e498ec.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowClockwise.vue.e4f6793d.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/member.dda5a5ec.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.b4c4e0c1.js"),["assets/ReturnApiKey.b4c4e0c1.js","assets/Navbar.06f2e295.js","assets/logo.084e5d7c.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/PhChats.vue.859f6589.js","assets/PhSignOut.vue.79dc2414.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.de1971f4.js","assets/index.675c4b2b.js","assets/BookOutlined.e414dd1d.js","assets/Navbar.4c5e8ebc.css","assets/url.66876857.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/apiKey.df27125f.js","assets/project.cd1c12d0.js","assets/organization.eb4d9e8a.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/index.d1a46f77.js","assets/Modal.1a6e3eab.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.f35a076d.js"),["assets/Organizations.f35a076d.js","assets/Navbar.06f2e295.js","assets/logo.084e5d7c.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/PhChats.vue.859f6589.js","assets/PhSignOut.vue.79dc2414.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.de1971f4.js","assets/index.675c4b2b.js","assets/BookOutlined.e414dd1d.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.535d189f.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.2dc16744.js","assets/ContentLayout.ee57a545.css","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/url.66876857.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/ant-design.640b3158.js","assets/index.b32591eb.js","assets/PhArrowSquareOut.vue.3429fe30.js","assets/PhPencil.vue.69c25c12.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/organization.eb4d9e8a.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.49b571fb.js"),["assets/Organization.49b571fb.js","assets/Navbar.06f2e295.js","assets/logo.084e5d7c.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/PhChats.vue.859f6589.js","assets/PhSignOut.vue.79dc2414.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.de1971f4.js","assets/index.675c4b2b.js","assets/BookOutlined.e414dd1d.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.535d189f.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.2dc16744.js","assets/ContentLayout.ee57a545.css","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/organization.eb4d9e8a.js","assets/Sidebar.383ceb18.js","assets/index.d1a46f77.js","assets/index.29592a3a.js","assets/Sidebar.4bfd151d.css","assets/Form.f244b960.js","assets/hasIn.065301c4.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.99ce7cbf.js"),["assets/Projects.99ce7cbf.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/ant-design.640b3158.js","assets/index.b32591eb.js","assets/Modal.1a6e3eab.js","assets/index.33e498ec.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/organization.eb4d9e8a.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/url.66876857.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.3429fe30.js","assets/PhPencil.vue.69c25c12.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.4350f856.js"),["assets/Editors.4350f856.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/url.66876857.js","assets/Form.f244b960.js","assets/index.33e498ec.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/ant-design.640b3158.js","assets/index.b32591eb.js","assets/asyncComputed.35b55909.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/member.dda5a5ec.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.6767beb3.js"),["assets/Billing.6767beb3.js","assets/asyncComputed.35b55909.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/organization.eb4d9e8a.js","assets/LoadingContainer.e849ff6a.js","assets/LoadingContainer.8bd9cc72.css","assets/index.ebecced1.js","assets/Card.a434a68d.js","assets/TabPane.dc3a5cad.js","assets/hasIn.065301c4.js","assets/Form.f244b960.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.287f86b7.js"),["assets/Project.287f86b7.js","assets/Navbar.06f2e295.js","assets/logo.084e5d7c.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/PhChats.vue.859f6589.js","assets/PhSignOut.vue.79dc2414.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.de1971f4.js","assets/index.675c4b2b.js","assets/BookOutlined.e414dd1d.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.535d189f.js","assets/BaseLayout.7e127cbf.css","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/organization.eb4d9e8a.js","assets/Sidebar.383ceb18.js","assets/index.d1a46f77.js","assets/index.29592a3a.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.2dc16744.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.cdd65bb3.js","assets/PhIdentificationBadge.vue.fb215fc5.js","assets/PhCube.vue.b9375fbe.js","assets/PhGlobe.vue.75b729fc.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.f02823af.js"),["assets/Live.f02823af.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/url.66876857.js","assets/Form.f244b960.js","assets/index.33e498ec.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.35b55909.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/datetime.e946780a.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.088085cc.js","assets/LoadingOutlined.203c65a2.js","assets/PhArrowCounterClockwise.vue.cdd65bb3.js","assets/PhArrowSquareOut.vue.3429fe30.js","assets/PhChats.vue.859f6589.js","assets/PhCopySimple.vue.d87023c2.js","assets/index.d31bc888.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.2c436c18.js"),["assets/Builds.2c436c18.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/datetime.e946780a.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/url.66876857.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.cdd65bb3.js","assets/PhCube.vue.b9375fbe.js","assets/PhDownloadSimple.vue.7e9fcbc7.js","assets/PhWebhooksLogo.vue.486bbc83.js","assets/index.84c7b067.js","assets/ExclamationCircleOutlined.0d7f0e83.js","assets/CloseCircleOutlined.8fc17956.js","assets/LoadingOutlined.203c65a2.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.cbc295f2.js"),["assets/Connectors.cbc295f2.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/index.b123c950.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/connector.05756b14.js","assets/asyncComputed.35b55909.js","assets/PhPencil.vue.69c25c12.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/url.66876857.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.45e26971.js"),["assets/Tables.45e26971.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/url.66876857.js","assets/Form.f244b960.js","assets/index.33e498ec.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.35b55909.js","assets/string.87c5f088.js","assets/PhPencil.vue.69c25c12.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.cb7a3541.js"),["assets/Sql.cb7a3541.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/utils.e0e1d432.js","assets/PhDownloadSimple.vue.7e9fcbc7.js","assets/toggleHighContrast.62de542b.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.33cb63fb.js"),["assets/ApiKeys.33cb63fb.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/asyncComputed.35b55909.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/member.dda5a5ec.js","assets/apiKey.df27125f.js","assets/project.cd1c12d0.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/url.66876857.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.bd6c188f.js"),["assets/Logs.bd6c188f.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/datetime.e946780a.js","assets/string.87c5f088.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.088085cc.js","assets/LoadingOutlined.203c65a2.js","assets/dayjs.d9daabd5.js","assets/index.5944372b.js","assets/index.29592a3a.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/CollapsePanel.f8d37844.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.ade2dd93.js"),["assets/ProjectSettings.ade2dd93.js","assets/asyncComputed.35b55909.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.666a20a7.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.925ec8ff.js"),["assets/EnvVars.925ec8ff.js","assets/CrudView.890e4765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/url.66876857.js","assets/Form.f244b960.js","assets/index.33e498ec.js","assets/hasIn.065301c4.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.35b55909.js","assets/PhPencil.vue.69c25c12.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.70341ee5.js"),["assets/Files.70341ee5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/ContentLayout.2dc16744.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/ant-design.640b3158.js","assets/index.b32591eb.js","assets/Modal.1a6e3eab.js","assets/asyncComputed.35b55909.js","assets/gateway.3fe338e2.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.82fefaa9.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.a434a68d.js","assets/TabPane.dc3a5cad.js","assets/hasIn.065301c4.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.1e4607f8.js"),["assets/View.1e4607f8.js","assets/asyncComputed.35b55909.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.79ad6fc2.js","assets/BookOutlined.e414dd1d.js","assets/Form.f244b960.js","assets/index.33e498ec.js","assets/hasIn.065301c4.js","assets/index.3861c5b8.js","assets/isNumeric.75337b1e.js","assets/CrudView.890e4765.js","assets/url.66876857.js","assets/Modal.1a6e3eab.js","assets/index.29592a3a.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.69c25c12.js","assets/repository.d7dba98a.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/fetch.4f571878.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/ant-design.640b3158.js","assets/index.b32591eb.js","assets/TabPane.dc3a5cad.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.9e88b461.js"),["assets/TableEditor.9e88b461.js","assets/BaseLayout.535d189f.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.35b55909.js","assets/PhPencil.vue.69c25c12.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/index.33e498ec.js","assets/index.b123c950.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/organization.eb4d9e8a.js","assets/ContentLayout.2dc16744.js","assets/ContentLayout.ee57a545.css","assets/ant-design.640b3158.js","assets/index.b32591eb.js","assets/Modal.1a6e3eab.js","assets/PhCheckCircle.vue.230dfb84.js","assets/index.da979294.js","assets/index.74792555.js","assets/Form.f244b960.js","assets/hasIn.065301c4.js","assets/index.81d39e0f.js","assets/index.3861c5b8.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.19ebb55c.js","assets/LoadingOutlined.203c65a2.js","assets/DeleteOutlined.82fefaa9.js","assets/DeleteOutlined.f8ba9770.js","assets/index.ebecced1.js","assets/index.675c4b2b.js","assets/index.de1971f4.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.1fee31ad.js"),["assets/ConnectorEditor.1fee31ad.js","assets/SaveButton.a07231fb.js","assets/outputWidgets.3f3d2696.js","assets/outputWidgets.bb91798a.css","assets/UnsavedChangesHandler.5f0268d1.js","assets/ExclamationCircleOutlined.0d7f0e83.js","assets/index.33e498ec.js","assets/Modal.1a6e3eab.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.535d189f.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.35b55909.js","assets/index.b123c950.js","assets/gateway.3fe338e2.js","assets/popupNotifcation.d3f60023.js","assets/record.1d843e2c.js","assets/pubsub.d28d7b1f.js","assets/string.87c5f088.js","assets/project.cd1c12d0.js","assets/connector.05756b14.js","assets/organization.eb4d9e8a.js","assets/TabPane.dc3a5cad.js","assets/hasIn.065301c4.js","assets/index.675c4b2b.js","assets/index.de1971f4.js","assets/Form.f244b960.js","assets/index.ebecced1.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.e0ea9aad.js.map
