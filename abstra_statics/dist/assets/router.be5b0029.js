var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.ce41a05f.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.be20efe3.js";import{C as c,a as w}from"./gateway.fe6bdab1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="04ea7ac8-b5ce-4c7a-913e-0797a17ed332",t._sentryDebugIdIdentifier="sentry-dbid-04ea7ac8-b5ce-4c7a-913e-0797a17ed332")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.80c86339.js"),["assets/WidgetPreview.80c86339.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/Steps.f7de3872.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.3fb9017d.js","assets/WidgetsFrame.0615c03b.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.bf23e200.js"),["assets/Login.bf23e200.js","assets/CircularLoading.8f0b8996.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.3fb9017d.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowClockwise.vue.b3aa637f.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/member.2cb842ee.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.4f3a0965.js"),["assets/ReturnApiKey.4f3a0965.js","assets/Navbar.335b6ff7.js","assets/logo.084e5d7c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/PhChats.vue.f55dc816.js","assets/PhSignOut.vue.de442321.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.70445c7d.js","assets/index.69bb6615.js","assets/BookOutlined.60c3b77c.js","assets/Navbar.4c5e8ebc.css","assets/url.90cac12c.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/apiKey.076ddefb.js","assets/project.8967a97d.js","assets/organization.4449b4d7.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/index.23e25755.js","assets/Modal.0aed7d26.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.9886ec48.js"),["assets/Organizations.9886ec48.js","assets/Navbar.335b6ff7.js","assets/logo.084e5d7c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/PhChats.vue.f55dc816.js","assets/PhSignOut.vue.de442321.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.70445c7d.js","assets/index.69bb6615.js","assets/BookOutlined.60c3b77c.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.4dec6f13.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.292ccdc8.js","assets/ContentLayout.6dd20759.css","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/ant-design.5f6acf17.js","assets/index.7f1eb677.js","assets/PhArrowSquareOut.vue.2a3d3b2b.js","assets/PhPencil.vue.a9a50b2e.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/organization.4449b4d7.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.43847dda.js"),["assets/Organization.43847dda.js","assets/Navbar.335b6ff7.js","assets/logo.084e5d7c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/PhChats.vue.f55dc816.js","assets/PhSignOut.vue.de442321.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.70445c7d.js","assets/index.69bb6615.js","assets/BookOutlined.60c3b77c.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.4dec6f13.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.292ccdc8.js","assets/ContentLayout.6dd20759.css","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/organization.4449b4d7.js","assets/Sidebar.8860d192.js","assets/index.23e25755.js","assets/index.9212cf73.js","assets/Sidebar.4bfd151d.css","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.b107c858.js"),["assets/Projects.b107c858.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/ant-design.5f6acf17.js","assets/index.7f1eb677.js","assets/Modal.0aed7d26.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/organization.4449b4d7.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.2a3d3b2b.js","assets/PhPencil.vue.a9a50b2e.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.9ee26285.js"),["assets/Editors.9ee26285.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/member.2cb842ee.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/ant-design.5f6acf17.js","assets/index.7f1eb677.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.12655ebf.js"),["assets/Billing.12655ebf.js","assets/asyncComputed.daa78d52.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/organization.4449b4d7.js","assets/LoadingContainer.0e313c4e.js","assets/LoadingContainer.8bd9cc72.css","assets/index.75995b91.js","assets/Card.561a65b3.js","assets/TabPane.88e30905.js","assets/hasIn.8254fa08.js","assets/PlusOutlined.cf52d035.js","assets/Form.ce41a05f.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.bbc4e0bb.js"),["assets/Project.bbc4e0bb.js","assets/Navbar.335b6ff7.js","assets/logo.084e5d7c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/PhChats.vue.f55dc816.js","assets/PhSignOut.vue.de442321.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.70445c7d.js","assets/index.69bb6615.js","assets/BookOutlined.60c3b77c.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.4dec6f13.js","assets/BaseLayout.7e127cbf.css","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/organization.4449b4d7.js","assets/Sidebar.8860d192.js","assets/index.23e25755.js","assets/index.9212cf73.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.292ccdc8.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.ca6ea5b6.js","assets/PhIdentificationBadge.vue.72b3946f.js","assets/PhCube.vue.e9f4af4b.js","assets/PhGlobe.vue.12c0ed44.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.e43c1075.js"),["assets/Live.e43c1075.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.daa78d52.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/datetime.3fa690fc.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b5bdeecd.js","assets/LoadingOutlined.8dc46914.js","assets/PhArrowCounterClockwise.vue.ca6ea5b6.js","assets/PhArrowSquareOut.vue.2a3d3b2b.js","assets/PhChats.vue.f55dc816.js","assets/PhCopySimple.vue.eb827c9a.js","assets/index.2618fe6f.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.d981ac83.js"),["assets/Builds.d981ac83.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/datetime.3fa690fc.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.ca6ea5b6.js","assets/PhCube.vue.e9f4af4b.js","assets/PhWebhooksLogo.vue.7282c594.js","assets/index.47932d2d.js","assets/ExclamationCircleOutlined.62dd85e3.js","assets/CloseCircleOutlined.a4a84ad0.js","assets/LoadingOutlined.8dc46914.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.9897a147.js"),["assets/Connectors.9897a147.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/string.00ea499d.js","assets/connector.dfb0d82a.js","assets/asyncComputed.daa78d52.js","assets/PhPencil.vue.a9a50b2e.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.20c35384.js"),["assets/Tables.20c35384.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.daa78d52.js","assets/string.00ea499d.js","assets/PhPencil.vue.a9a50b2e.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.5031ffbb.js"),["assets/Sql.5031ffbb.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/toggleHighContrast.35903942.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.d0eb4382.js"),["assets/ApiKeys.d0eb4382.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.daa78d52.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/member.2cb842ee.js","assets/apiKey.076ddefb.js","assets/project.8967a97d.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.e363504d.js"),["assets/Logs.e363504d.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/datetime.3fa690fc.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b5bdeecd.js","assets/LoadingOutlined.8dc46914.js","assets/dayjs.85b48fee.js","assets/index.4bd9a0ec.js","assets/index.9212cf73.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/CollapsePanel.d9ad4169.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.bd249b0b.js"),["assets/ProjectSettings.bd249b0b.js","assets/asyncComputed.daa78d52.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.c7c268d9.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.a6b816a9.js"),["assets/EnvVars.a6b816a9.js","assets/CrudView.fc9b957f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/url.90cac12c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.daa78d52.js","assets/PhPencil.vue.a9a50b2e.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.28fa4043.js"),["assets/Files.28fa4043.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.292ccdc8.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.91ce836d.js","assets/ant-design.5f6acf17.js","assets/index.7f1eb677.js","assets/Modal.0aed7d26.js","assets/asyncComputed.daa78d52.js","assets/gateway.fe6bdab1.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.425c040f.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.561a65b3.js","assets/TabPane.88e30905.js","assets/hasIn.8254fa08.js","assets/PlusOutlined.cf52d035.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.1c3424dd.js"),["assets/View.1c3424dd.js","assets/asyncComputed.daa78d52.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b3ceb10.js","assets/BookOutlined.60c3b77c.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/index.4eb0d363.js","assets/isNumeric.75337b1e.js","assets/CrudView.fc9b957f.js","assets/url.90cac12c.js","assets/Modal.0aed7d26.js","assets/index.9212cf73.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.a9a50b2e.js","assets/repository.f0260d36.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/fetch.ab614deb.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/ant-design.5f6acf17.js","assets/index.7f1eb677.js","assets/TabPane.88e30905.js","assets/PlusOutlined.cf52d035.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.13c56fd1.js"),["assets/TableEditor.13c56fd1.js","assets/BaseLayout.4dec6f13.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.daa78d52.js","assets/PhPencil.vue.a9a50b2e.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/organization.4449b4d7.js","assets/ContentLayout.292ccdc8.js","assets/ContentLayout.6dd20759.css","assets/ant-design.5f6acf17.js","assets/index.7f1eb677.js","assets/Modal.0aed7d26.js","assets/PhCheckCircle.vue.e8a8e803.js","assets/index.21f1a549.js","assets/index.8cf83089.js","assets/Form.ce41a05f.js","assets/hasIn.8254fa08.js","assets/index.25ea8646.js","assets/index.4eb0d363.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.d5d6f4bc.js","assets/LoadingOutlined.8dc46914.js","assets/DeleteOutlined.425c040f.js","assets/DeleteOutlined.f8ba9770.js","assets/index.75995b91.js","assets/index.69bb6615.js","assets/index.70445c7d.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.0e26191b.js"),["assets/ConnectorEditor.0e26191b.js","assets/SaveButton.4db5ba12.js","assets/outputWidgets.be20efe3.js","assets/outputWidgets.6a665c1f.css","assets/UnsavedChangesHandler.f90a032e.js","assets/ExclamationCircleOutlined.62dd85e3.js","assets/Modal.0aed7d26.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.4dec6f13.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.daa78d52.js","assets/index.a3c71fae.js","assets/record.1cf5762a.js","assets/pubsub.a14b1b20.js","assets/gateway.fe6bdab1.js","assets/popupNotifcation.91ce836d.js","assets/string.00ea499d.js","assets/project.8967a97d.js","assets/connector.dfb0d82a.js","assets/organization.4449b4d7.js","assets/TabPane.88e30905.js","assets/hasIn.8254fa08.js","assets/PlusOutlined.cf52d035.js","assets/index.69bb6615.js","assets/index.70445c7d.js","assets/Form.ce41a05f.js","assets/index.75995b91.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.be5b0029.js.map
