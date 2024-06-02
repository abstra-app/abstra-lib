var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.8489fb6d.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.abde7be7.js";import{C as c,a as w}from"./gateway.e5c93921.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="68e8975e-9357-46ca-9fff-eb8383cb2703",t._sentryDebugIdIdentifier="sentry-dbid-68e8975e-9357-46ca-9fff-eb8383cb2703")}catch{}})();const T=p(h),D=p(u);class f{async getInfo(){return await c.get("authors/info")}}const v=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.7173ecbf.js"),["assets/WidgetPreview.7173ecbf.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/Steps.086ab5ca.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.4914fd38.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.5c3e4f28.js"),["assets/Login.5c3e4f28.js","assets/CircularLoading.f68da4a9.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.4914fd38.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.4d0818de.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/member.cd96ab58.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.17e9f5bc.js"),["assets/ReturnApiKey.17e9f5bc.js","assets/Navbar.1f1ef45f.js","assets/logo.084e5d7c.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/PhChats.vue.51217c5c.js","assets/PhSignOut.vue.34a67eb6.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.17d825a9.js","assets/index.d3caf38b.js","assets/BookOutlined.ef6ccb36.js","assets/Navbar.4c5e8ebc.css","assets/url.578d50c3.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/apiKey.bb85ff40.js","assets/project.0d7f508d.js","assets/organization.484f355f.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/index.b3a8a88f.js","assets/Modal.b9769244.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.a932299b.js"),["assets/Organizations.a932299b.js","assets/Navbar.1f1ef45f.js","assets/logo.084e5d7c.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/PhChats.vue.51217c5c.js","assets/PhSignOut.vue.34a67eb6.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.17d825a9.js","assets/index.d3caf38b.js","assets/BookOutlined.ef6ccb36.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.5e237fd8.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.f6dd01ab.js","assets/ContentLayout.6dd20759.css","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/ant-design.039e95cf.js","assets/index.a7c0b349.js","assets/PhArrowSquareOut.vue.40da27c6.js","assets/PhPencil.vue.ecceca31.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/organization.484f355f.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.4b228f5c.js"),["assets/Organization.4b228f5c.js","assets/Navbar.1f1ef45f.js","assets/logo.084e5d7c.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/PhChats.vue.51217c5c.js","assets/PhSignOut.vue.34a67eb6.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.17d825a9.js","assets/index.d3caf38b.js","assets/BookOutlined.ef6ccb36.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.5e237fd8.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.f6dd01ab.js","assets/ContentLayout.6dd20759.css","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/organization.484f355f.js","assets/Sidebar.b744bfbd.js","assets/index.b3a8a88f.js","assets/index.42ebfb5e.js","assets/Sidebar.4bfd151d.css","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.b3e3c753.js"),["assets/Projects.b3e3c753.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/ant-design.039e95cf.js","assets/index.a7c0b349.js","assets/Modal.b9769244.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/project.0d7f508d.js","assets/organization.484f355f.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.40da27c6.js","assets/PhPencil.vue.ecceca31.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.2bce86fc.js"),["assets/Editors.2bce86fc.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/member.cd96ab58.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/ant-design.039e95cf.js","assets/index.a7c0b349.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.3c13c3b8.js"),["assets/Billing.3c13c3b8.js","assets/asyncComputed.e188c84d.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/organization.484f355f.js","assets/LoadingContainer.9e6e23bc.js","assets/LoadingContainer.8bd9cc72.css","assets/index.4f1dbd0f.js","assets/Card.562cc5dd.js","assets/TabPane.7e495c62.js","assets/hasIn.b8f131ab.js","assets/PlusOutlined.cf52d035.js","assets/Form.8489fb6d.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.ca1c905d.js"),["assets/Project.ca1c905d.js","assets/Navbar.1f1ef45f.js","assets/logo.084e5d7c.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/PhChats.vue.51217c5c.js","assets/PhSignOut.vue.34a67eb6.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.17d825a9.js","assets/index.d3caf38b.js","assets/BookOutlined.ef6ccb36.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.5e237fd8.js","assets/BaseLayout.7e127cbf.css","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/project.0d7f508d.js","assets/organization.484f355f.js","assets/Sidebar.b744bfbd.js","assets/index.b3a8a88f.js","assets/index.42ebfb5e.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.f6dd01ab.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.1d60b204.js","assets/PhIdentificationBadge.vue.717fda91.js","assets/PhCube.vue.13d1f5f5.js","assets/PhGlobe.vue.fed9e8ba.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.9202b5d4.js"),["assets/Live.9202b5d4.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.e188c84d.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/datetime.f9de4960.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/project.0d7f508d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.08bf7267.js","assets/LoadingOutlined.85e51c6e.js","assets/PhArrowCounterClockwise.vue.1d60b204.js","assets/PhArrowSquareOut.vue.40da27c6.js","assets/PhChats.vue.51217c5c.js","assets/PhCopySimple.vue.4852a6d4.js","assets/PhInfo.vue.7ecfaa90.js","assets/index.4e50b288.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.955bb8dc.js"),["assets/Builds.955bb8dc.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/datetime.f9de4960.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/project.0d7f508d.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.1d60b204.js","assets/PhCube.vue.13d1f5f5.js","assets/PhWebhooksLogo.vue.68b418b3.js","assets/index.394a9951.js","assets/ExclamationCircleOutlined.bbc81a29.js","assets/CloseCircleOutlined.c4ab4867.js","assets/LoadingOutlined.85e51c6e.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.f98490a7.js"),["assets/Connectors.f98490a7.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/connector.ce33ed52.js","assets/asyncComputed.e188c84d.js","assets/PhPencil.vue.ecceca31.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.1a548e56.js"),["assets/Tables.1a548e56.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.e188c84d.js","assets/string.5024f615.js","assets/PhPencil.vue.ecceca31.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/tables.cc1b175a.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/index.2e366912.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.59a1f046.js"),["assets/Sql.59a1f046.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/toggleHighContrast.004586ad.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/project.0d7f508d.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.4023c093.js"),["assets/ApiKeys.4023c093.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.e188c84d.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/member.cd96ab58.js","assets/apiKey.bb85ff40.js","assets/project.0d7f508d.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.047c1c85.js"),["assets/Logs.047c1c85.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/datetime.f9de4960.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.08bf7267.js","assets/LoadingOutlined.85e51c6e.js","assets/dayjs.d6c48421.js","assets/index.2ed31802.js","assets/index.42ebfb5e.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/CollapsePanel.b38b07c3.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.5e162391.js"),["assets/ProjectSettings.5e162391.js","assets/asyncComputed.e188c84d.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/project.0d7f508d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a245bdba.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.f64641fb.js"),["assets/EnvVars.f64641fb.js","assets/CrudView.d2e5841c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/url.578d50c3.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.e188c84d.js","assets/PhPencil.vue.ecceca31.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.07aca1c1.js"),["assets/Files.07aca1c1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/ContentLayout.f6dd01ab.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.51a8836c.js","assets/ant-design.039e95cf.js","assets/index.a7c0b349.js","assets/Modal.b9769244.js","assets/asyncComputed.e188c84d.js","assets/gateway.e5c93921.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.dde58471.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.562cc5dd.js","assets/TabPane.7e495c62.js","assets/hasIn.b8f131ab.js","assets/PlusOutlined.cf52d035.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.c4fc046b.js"),["assets/View.c4fc046b.js","assets/asyncComputed.e188c84d.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.2107de83.js","assets/BookOutlined.ef6ccb36.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/index.61779b78.js","assets/isNumeric.75337b1e.js","assets/CrudView.d2e5841c.js","assets/url.578d50c3.js","assets/Modal.b9769244.js","assets/index.42ebfb5e.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.ecceca31.js","assets/repository.9e872289.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/fetch.3b6246ff.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/ant-design.039e95cf.js","assets/index.a7c0b349.js","assets/TabPane.7e495c62.js","assets/PlusOutlined.cf52d035.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.899e2234.js"),["assets/TableEditor.899e2234.js","assets/BaseLayout.5e237fd8.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.e188c84d.js","assets/PhPencil.vue.ecceca31.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/tables.cc1b175a.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/index.2e366912.js","assets/string.5024f615.js","assets/project.0d7f508d.js","assets/organization.484f355f.js","assets/ContentLayout.f6dd01ab.js","assets/ContentLayout.6dd20759.css","assets/ant-design.039e95cf.js","assets/index.a7c0b349.js","assets/Modal.b9769244.js","assets/PhCheckCircle.vue.9630c7d1.js","assets/index.b4c5694b.js","assets/index.1a65a7a8.js","assets/Form.8489fb6d.js","assets/hasIn.b8f131ab.js","assets/index.e42dcce1.js","assets/index.61779b78.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.439abe39.js","assets/LoadingOutlined.85e51c6e.js","assets/DeleteOutlined.dde58471.js","assets/DeleteOutlined.f8ba9770.js","assets/index.4f1dbd0f.js","assets/index.d3caf38b.js","assets/index.17d825a9.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.1d25f3a3.js"),["assets/ConnectorEditor.1d25f3a3.js","assets/SaveButton.7e58c277.js","assets/outputWidgets.abde7be7.js","assets/outputWidgets.f26cd360.css","assets/UnsavedChangesHandler.58e7f1b2.js","assets/ExclamationCircleOutlined.bbc81a29.js","assets/Modal.b9769244.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.5e237fd8.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.e188c84d.js","assets/index.2e366912.js","assets/record.4adc9d27.js","assets/pubsub.7f579dee.js","assets/gateway.e5c93921.js","assets/popupNotifcation.51a8836c.js","assets/project.0d7f508d.js","assets/connector.ce33ed52.js","assets/organization.484f355f.js","assets/TabPane.7e495c62.js","assets/hasIn.b8f131ab.js","assets/PlusOutlined.cf52d035.js","assets/index.d3caf38b.js","assets/index.17d825a9.js","assets/Form.8489fb6d.js","assets/index.4f1dbd0f.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.aff593c1.js.map
