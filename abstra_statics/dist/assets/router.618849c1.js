var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.1f456b69.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.ee3c0009.js";import{C as c,a as w}from"./gateway.e3c59c9d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="31e57848-1c5e-41f0-9f6a-80f7989d83d7",t._sentryDebugIdIdentifier="sentry-dbid-31e57848-1c5e-41f0-9f6a-80f7989d83d7")}catch{}})();const T=p(h),D=p(u);class f{async getInfo(){return await c.get("authors/info")}}const v=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.ad0a2d8b.js"),["assets/WidgetPreview.ad0a2d8b.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/Steps.f1bba861.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.0be7c065.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.b668a93b.js"),["assets/Login.b668a93b.js","assets/CircularLoading.afdbbaed.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.0be7c065.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.edd94149.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/member.1b4315fc.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.8f648c15.js"),["assets/ReturnApiKey.8f648c15.js","assets/Navbar.c70a7702.js","assets/logo.084e5d7c.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/PhChats.vue.a13ae03f.js","assets/PhSignOut.vue.b14b9a0d.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.9b206080.js","assets/index.22cf8ccc.js","assets/BookOutlined.4ccaa220.js","assets/Navbar.4c5e8ebc.css","assets/url.762fcede.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/apiKey.cba12baa.js","assets/project.f3864c77.js","assets/organization.cd624baf.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/index.31d446a0.js","assets/Modal.ecd5381a.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.bcd55a1c.js"),["assets/Organizations.bcd55a1c.js","assets/Navbar.c70a7702.js","assets/logo.084e5d7c.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/PhChats.vue.a13ae03f.js","assets/PhSignOut.vue.b14b9a0d.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.9b206080.js","assets/index.22cf8ccc.js","assets/BookOutlined.4ccaa220.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.0d309ee4.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.0a4be918.js","assets/ContentLayout.6dd20759.css","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/ant-design.7af735be.js","assets/index.ddf4c210.js","assets/PhArrowSquareOut.vue.4f12cb74.js","assets/PhPencil.vue.03489b63.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/organization.cd624baf.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.640f1f5b.js"),["assets/Organization.640f1f5b.js","assets/Navbar.c70a7702.js","assets/logo.084e5d7c.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/PhChats.vue.a13ae03f.js","assets/PhSignOut.vue.b14b9a0d.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.9b206080.js","assets/index.22cf8ccc.js","assets/BookOutlined.4ccaa220.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.0d309ee4.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.0a4be918.js","assets/ContentLayout.6dd20759.css","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/organization.cd624baf.js","assets/Sidebar.623a9283.js","assets/index.31d446a0.js","assets/index.cc5d069e.js","assets/Sidebar.4bfd151d.css","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.b87c2120.js"),["assets/Projects.b87c2120.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/ant-design.7af735be.js","assets/index.ddf4c210.js","assets/Modal.ecd5381a.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/project.f3864c77.js","assets/organization.cd624baf.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.4f12cb74.js","assets/PhPencil.vue.03489b63.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.751e3add.js"),["assets/Editors.751e3add.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/member.1b4315fc.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/ant-design.7af735be.js","assets/index.ddf4c210.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.b9038fc8.js"),["assets/Billing.b9038fc8.js","assets/asyncComputed.22f2d2f6.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/organization.cd624baf.js","assets/LoadingContainer.e19f334a.js","assets/LoadingContainer.8bd9cc72.css","assets/index.e3813851.js","assets/Card.7b1a29b4.js","assets/TabPane.133f759e.js","assets/hasIn.d37c72ab.js","assets/PlusOutlined.cf52d035.js","assets/Form.1f456b69.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.0743e7a1.js"),["assets/Project.0743e7a1.js","assets/Navbar.c70a7702.js","assets/logo.084e5d7c.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/PhChats.vue.a13ae03f.js","assets/PhSignOut.vue.b14b9a0d.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.9b206080.js","assets/index.22cf8ccc.js","assets/BookOutlined.4ccaa220.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.0d309ee4.js","assets/BaseLayout.7e127cbf.css","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/project.f3864c77.js","assets/organization.cd624baf.js","assets/Sidebar.623a9283.js","assets/index.31d446a0.js","assets/index.cc5d069e.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.0a4be918.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.ddcff428.js","assets/PhIdentificationBadge.vue.460f10c5.js","assets/PhCube.vue.a8d727f1.js","assets/PhGlobe.vue.53b6df85.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.a27386fc.js"),["assets/Live.a27386fc.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.22f2d2f6.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/datetime.85b84fbe.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/project.f3864c77.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fc9b0190.js","assets/LoadingOutlined.d8b2ca23.js","assets/PhArrowCounterClockwise.vue.ddcff428.js","assets/PhArrowSquareOut.vue.4f12cb74.js","assets/PhChats.vue.a13ae03f.js","assets/PhCopySimple.vue.e8180709.js","assets/index.5a412697.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.d1e00097.js"),["assets/Builds.d1e00097.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/datetime.85b84fbe.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/project.f3864c77.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.ddcff428.js","assets/PhCube.vue.a8d727f1.js","assets/PhWebhooksLogo.vue.36bec011.js","assets/index.4cd35ea8.js","assets/ExclamationCircleOutlined.eaa4b6ea.js","assets/CloseCircleOutlined.45de26a3.js","assets/LoadingOutlined.d8b2ca23.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.657f4f9c.js"),["assets/Connectors.657f4f9c.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/connector.e7c46d5b.js","assets/asyncComputed.22f2d2f6.js","assets/PhPencil.vue.03489b63.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.443de5ce.js"),["assets/Tables.443de5ce.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.22f2d2f6.js","assets/string.2fe3959b.js","assets/PhPencil.vue.03489b63.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/tables.fb569bea.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/index.ef29e995.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.912bca62.js"),["assets/Sql.912bca62.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/toggleHighContrast.1b5a5197.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/project.f3864c77.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.a148f325.js"),["assets/ApiKeys.a148f325.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.22f2d2f6.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/member.1b4315fc.js","assets/apiKey.cba12baa.js","assets/project.f3864c77.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.5e44c034.js"),["assets/Logs.5e44c034.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/datetime.85b84fbe.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fc9b0190.js","assets/LoadingOutlined.d8b2ca23.js","assets/dayjs.1e9c5d85.js","assets/index.b0be64a5.js","assets/index.cc5d069e.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/CollapsePanel.b4de21fc.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.554cb3f2.js"),["assets/ProjectSettings.554cb3f2.js","assets/asyncComputed.22f2d2f6.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/project.f3864c77.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64c7219a.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.58cc0c92.js"),["assets/EnvVars.58cc0c92.js","assets/CrudView.ee499716.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/url.762fcede.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.22f2d2f6.js","assets/PhPencil.vue.03489b63.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.5a0d2a22.js"),["assets/Files.5a0d2a22.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.0a4be918.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.f9e77086.js","assets/ant-design.7af735be.js","assets/index.ddf4c210.js","assets/Modal.ecd5381a.js","assets/asyncComputed.22f2d2f6.js","assets/gateway.e3c59c9d.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.0eca184b.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.7b1a29b4.js","assets/TabPane.133f759e.js","assets/hasIn.d37c72ab.js","assets/PlusOutlined.cf52d035.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.f901da35.js"),["assets/View.f901da35.js","assets/asyncComputed.22f2d2f6.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js","assets/BookOutlined.4ccaa220.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/index.ef914740.js","assets/isNumeric.75337b1e.js","assets/CrudView.ee499716.js","assets/url.762fcede.js","assets/Modal.ecd5381a.js","assets/index.cc5d069e.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.03489b63.js","assets/repository.447df1b8.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/fetch.8b490a2c.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/ant-design.7af735be.js","assets/index.ddf4c210.js","assets/TabPane.133f759e.js","assets/PlusOutlined.cf52d035.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.bbda61de.js"),["assets/TableEditor.bbda61de.js","assets/BaseLayout.0d309ee4.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.22f2d2f6.js","assets/PhPencil.vue.03489b63.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/tables.fb569bea.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/index.ef29e995.js","assets/string.2fe3959b.js","assets/project.f3864c77.js","assets/organization.cd624baf.js","assets/ContentLayout.0a4be918.js","assets/ContentLayout.6dd20759.css","assets/ant-design.7af735be.js","assets/index.ddf4c210.js","assets/Modal.ecd5381a.js","assets/PhCheckCircle.vue.87935e55.js","assets/index.7c2cae6a.js","assets/index.3b2d3914.js","assets/Form.1f456b69.js","assets/hasIn.d37c72ab.js","assets/index.f7d9641a.js","assets/index.ef914740.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.d9aa2ef4.js","assets/LoadingOutlined.d8b2ca23.js","assets/DeleteOutlined.0eca184b.js","assets/DeleteOutlined.f8ba9770.js","assets/index.e3813851.js","assets/index.22cf8ccc.js","assets/index.9b206080.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.53f19ac8.js"),["assets/ConnectorEditor.53f19ac8.js","assets/SaveButton.9334fbf0.js","assets/outputWidgets.ee3c0009.js","assets/outputWidgets.6a665c1f.css","assets/UnsavedChangesHandler.6898c354.js","assets/ExclamationCircleOutlined.eaa4b6ea.js","assets/Modal.ecd5381a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.0d309ee4.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.22f2d2f6.js","assets/index.ef29e995.js","assets/record.e9217c59.js","assets/pubsub.e0ba7a2d.js","assets/gateway.e3c59c9d.js","assets/popupNotifcation.f9e77086.js","assets/project.f3864c77.js","assets/connector.e7c46d5b.js","assets/organization.cd624baf.js","assets/TabPane.133f759e.js","assets/hasIn.d37c72ab.js","assets/PlusOutlined.cf52d035.js","assets/index.22cf8ccc.js","assets/index.9b206080.js","assets/Form.1f456b69.js","assets/index.e3813851.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.618849c1.js.map
