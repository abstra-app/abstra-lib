var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.9006fede.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.73ec338c.js";import{C as c,a as w}from"./gateway.90a5afe5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="90d66972-4867-4d99-93d7-df8f0967be6c",t._sentryDebugIdIdentifier="sentry-dbid-90d66972-4867-4d99-93d7-df8f0967be6c")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.dadb13bd.js"),["assets/WidgetPreview.dadb13bd.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/Steps.652d9198.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.99eac29a.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.e786c711.js"),["assets/Login.e786c711.js","assets/CircularLoading.0a463bbc.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.99eac29a.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.64afcbd2.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/member.2454d0b6.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.37d14c41.js"),["assets/ReturnApiKey.37d14c41.js","assets/Navbar.8e38ac8a.js","assets/logo.084e5d7c.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/PhChats.vue.a9ac95e4.js","assets/PhSignOut.vue.71a61036.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.36e313ae.js","assets/index.b977e612.js","assets/BookOutlined.348251a3.js","assets/Navbar.4c5e8ebc.css","assets/url.75d692bc.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/apiKey.d3936d59.js","assets/project.44754ab9.js","assets/organization.bf21f1c5.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/index.f9f1a36e.js","assets/Modal.388dcf7d.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.9aad946f.js"),["assets/Organizations.9aad946f.js","assets/Navbar.8e38ac8a.js","assets/logo.084e5d7c.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/PhChats.vue.a9ac95e4.js","assets/PhSignOut.vue.71a61036.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.36e313ae.js","assets/index.b977e612.js","assets/BookOutlined.348251a3.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.394c8591.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.ebac91e7.js","assets/ContentLayout.6dd20759.css","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/ant-design.bfbb7e88.js","assets/index.d46e8d72.js","assets/PhArrowSquareOut.vue.a9754206.js","assets/PhPencil.vue.c160eb61.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/organization.bf21f1c5.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.dd17fd0e.js"),["assets/Organization.dd17fd0e.js","assets/Navbar.8e38ac8a.js","assets/logo.084e5d7c.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/PhChats.vue.a9ac95e4.js","assets/PhSignOut.vue.71a61036.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.36e313ae.js","assets/index.b977e612.js","assets/BookOutlined.348251a3.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.394c8591.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.ebac91e7.js","assets/ContentLayout.6dd20759.css","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/organization.bf21f1c5.js","assets/Sidebar.38f76a4f.js","assets/index.f9f1a36e.js","assets/index.7b0e4fae.js","assets/Sidebar.4bfd151d.css","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.8f94818d.js"),["assets/Projects.8f94818d.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/ant-design.bfbb7e88.js","assets/index.d46e8d72.js","assets/Modal.388dcf7d.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/project.44754ab9.js","assets/organization.bf21f1c5.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.a9754206.js","assets/PhPencil.vue.c160eb61.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.59156000.js"),["assets/Editors.59156000.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/member.2454d0b6.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/ant-design.bfbb7e88.js","assets/index.d46e8d72.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.a33f1ced.js"),["assets/Billing.a33f1ced.js","assets/asyncComputed.77b43460.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/organization.bf21f1c5.js","assets/LoadingContainer.441a0970.js","assets/LoadingContainer.8bd9cc72.css","assets/index.7c2400df.js","assets/Card.fd0ca299.js","assets/TabPane.d89814b7.js","assets/hasIn.7e7cb708.js","assets/PlusOutlined.cf52d035.js","assets/Form.9006fede.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.0c3e984f.js"),["assets/Project.0c3e984f.js","assets/Navbar.8e38ac8a.js","assets/logo.084e5d7c.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/PhChats.vue.a9ac95e4.js","assets/PhSignOut.vue.71a61036.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.36e313ae.js","assets/index.b977e612.js","assets/BookOutlined.348251a3.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.394c8591.js","assets/BaseLayout.7e127cbf.css","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/project.44754ab9.js","assets/organization.bf21f1c5.js","assets/Sidebar.38f76a4f.js","assets/index.f9f1a36e.js","assets/index.7b0e4fae.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.ebac91e7.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.e0daf75a.js","assets/PhIdentificationBadge.vue.89a84003.js","assets/PhCube.vue.7ec30ae1.js","assets/PhGlobe.vue.7ca4f37e.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.7d1864ba.js"),["assets/Live.7d1864ba.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.77b43460.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/datetime.c15f91e4.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/project.44754ab9.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.24f24fcd.js","assets/LoadingOutlined.01bf969c.js","assets/PhArrowCounterClockwise.vue.e0daf75a.js","assets/PhArrowSquareOut.vue.a9754206.js","assets/PhChats.vue.a9ac95e4.js","assets/PhCopySimple.vue.cda122eb.js","assets/PhInfo.vue.9103c93a.js","assets/index.31cf4e32.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.e85db72c.js"),["assets/Builds.e85db72c.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/datetime.c15f91e4.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/project.44754ab9.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.e0daf75a.js","assets/PhCube.vue.7ec30ae1.js","assets/PhWebhooksLogo.vue.29bd6093.js","assets/index.1e95f4a3.js","assets/ExclamationCircleOutlined.98f5e003.js","assets/CloseCircleOutlined.dd1772a5.js","assets/LoadingOutlined.01bf969c.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.58d1bd10.js"),["assets/Connectors.58d1bd10.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/connector.03aa2a80.js","assets/asyncComputed.77b43460.js","assets/PhPencil.vue.c160eb61.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.65b496f7.js"),["assets/Tables.65b496f7.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.77b43460.js","assets/string.a0cb0a45.js","assets/PhPencil.vue.c160eb61.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/tables.7510af64.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/index.e1bd2589.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.210bb5b6.js"),["assets/Sql.210bb5b6.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/toggleHighContrast.d369d104.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/project.44754ab9.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.6fad357a.js"),["assets/ApiKeys.6fad357a.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/asyncComputed.77b43460.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/member.2454d0b6.js","assets/apiKey.d3936d59.js","assets/project.44754ab9.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.ff01b244.js"),["assets/Logs.ff01b244.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/datetime.c15f91e4.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.24f24fcd.js","assets/LoadingOutlined.01bf969c.js","assets/dayjs.0986a3fa.js","assets/index.f4801e77.js","assets/index.7b0e4fae.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/CollapsePanel.a1d5f0d1.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.d3e8bec9.js"),["assets/ProjectSettings.d3e8bec9.js","assets/asyncComputed.77b43460.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/project.44754ab9.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.534c188b.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.83f275c2.js"),["assets/EnvVars.83f275c2.js","assets/CrudView.5fda30b6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/url.75d692bc.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.77b43460.js","assets/PhPencil.vue.c160eb61.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.53e62f10.js"),["assets/Files.53e62f10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/ContentLayout.ebac91e7.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.8842c060.js","assets/ant-design.bfbb7e88.js","assets/index.d46e8d72.js","assets/Modal.388dcf7d.js","assets/asyncComputed.77b43460.js","assets/gateway.90a5afe5.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.50c536a8.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.fd0ca299.js","assets/TabPane.d89814b7.js","assets/hasIn.7e7cb708.js","assets/PlusOutlined.cf52d035.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.1f74e4c8.js"),["assets/View.1f74e4c8.js","assets/asyncComputed.77b43460.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.d3d53808.js","assets/BookOutlined.348251a3.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/index.c5b0ab20.js","assets/isNumeric.75337b1e.js","assets/CrudView.5fda30b6.js","assets/url.75d692bc.js","assets/Modal.388dcf7d.js","assets/index.7b0e4fae.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.c160eb61.js","assets/repository.5d8ab32e.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/fetch.5754a8e7.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/ant-design.bfbb7e88.js","assets/index.d46e8d72.js","assets/TabPane.d89814b7.js","assets/PlusOutlined.cf52d035.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.e35abc24.js"),["assets/TableEditor.e35abc24.js","assets/BaseLayout.394c8591.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.77b43460.js","assets/PhPencil.vue.c160eb61.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/tables.7510af64.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/index.e1bd2589.js","assets/string.a0cb0a45.js","assets/project.44754ab9.js","assets/organization.bf21f1c5.js","assets/ContentLayout.ebac91e7.js","assets/ContentLayout.6dd20759.css","assets/ant-design.bfbb7e88.js","assets/index.d46e8d72.js","assets/Modal.388dcf7d.js","assets/PhCheckCircle.vue.ec09fe92.js","assets/index.7f3d66e7.js","assets/index.77c6c7a9.js","assets/Form.9006fede.js","assets/hasIn.7e7cb708.js","assets/index.eefed9ea.js","assets/index.c5b0ab20.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.a51f929d.js","assets/LoadingOutlined.01bf969c.js","assets/DeleteOutlined.50c536a8.js","assets/DeleteOutlined.f8ba9770.js","assets/index.7c2400df.js","assets/index.b977e612.js","assets/index.36e313ae.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.5e85ddb0.js"),["assets/ConnectorEditor.5e85ddb0.js","assets/SaveButton.ff8d17cb.js","assets/outputWidgets.73ec338c.js","assets/outputWidgets.f26cd360.css","assets/UnsavedChangesHandler.5580526f.js","assets/ExclamationCircleOutlined.98f5e003.js","assets/Modal.388dcf7d.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.394c8591.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.77b43460.js","assets/index.e1bd2589.js","assets/record.393e7a57.js","assets/pubsub.0fb921bc.js","assets/gateway.90a5afe5.js","assets/popupNotifcation.8842c060.js","assets/project.44754ab9.js","assets/connector.03aa2a80.js","assets/organization.bf21f1c5.js","assets/TabPane.d89814b7.js","assets/hasIn.7e7cb708.js","assets/PlusOutlined.cf52d035.js","assets/index.b977e612.js","assets/index.36e313ae.js","assets/Form.9006fede.js","assets/index.7c2400df.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.a4e2ee79.js.map
