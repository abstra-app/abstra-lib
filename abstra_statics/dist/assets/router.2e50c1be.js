var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.be881a7e.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.0b268a6e.js";import{C as c,a as w}from"./gateway.6b86361a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="186cab3c-199b-4fe0-9cb9-0262ebb659b4",t._sentryDebugIdIdentifier="sentry-dbid-186cab3c-199b-4fe0-9cb9-0262ebb659b4")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.2c983256.js"),["assets/WidgetPreview.2c983256.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/Steps.f690272e.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.0d3bd257.js","assets/WidgetsFrame.0615c03b.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.2f1b6518.js"),["assets/Login.2f1b6518.js","assets/CircularLoading.bf24c124.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.0d3bd257.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowClockwise.vue.1cd5f889.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/member.da495e8e.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.c1a50c8f.js"),["assets/ReturnApiKey.c1a50c8f.js","assets/Navbar.9a8afbba.js","assets/logo.084e5d7c.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/PhChats.vue.0b9ce541.js","assets/PhSignOut.vue.20afdbb9.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.92a391ca.js","assets/index.e2723ae6.js","assets/BookOutlined.25d33713.js","assets/Navbar.4c5e8ebc.css","assets/url.8896abfd.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/apiKey.2e6b8ce4.js","assets/project.62c311c6.js","assets/organization.13d76db8.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/index.c2ab207f.js","assets/Modal.e362c192.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.61130f16.js"),["assets/Organizations.61130f16.js","assets/Navbar.9a8afbba.js","assets/logo.084e5d7c.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/PhChats.vue.0b9ce541.js","assets/PhSignOut.vue.20afdbb9.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.92a391ca.js","assets/index.e2723ae6.js","assets/BookOutlined.25d33713.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.45dbf6be.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.42f907f5.js","assets/ContentLayout.6dd20759.css","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/ant-design.882c9442.js","assets/index.7963af41.js","assets/PhArrowSquareOut.vue.3b263d62.js","assets/PhPencil.vue.51014043.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/organization.13d76db8.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.ccf591c9.js"),["assets/Organization.ccf591c9.js","assets/Navbar.9a8afbba.js","assets/logo.084e5d7c.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/PhChats.vue.0b9ce541.js","assets/PhSignOut.vue.20afdbb9.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.92a391ca.js","assets/index.e2723ae6.js","assets/BookOutlined.25d33713.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.45dbf6be.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.42f907f5.js","assets/ContentLayout.6dd20759.css","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/organization.13d76db8.js","assets/Sidebar.f695c3c9.js","assets/index.c2ab207f.js","assets/index.ffb66b6e.js","assets/Sidebar.4bfd151d.css","assets/Form.be881a7e.js","assets/hasIn.838f176c.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.0d648602.js"),["assets/Projects.0d648602.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/ant-design.882c9442.js","assets/index.7963af41.js","assets/Modal.e362c192.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/organization.13d76db8.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.3b263d62.js","assets/PhPencil.vue.51014043.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.eda18ee7.js"),["assets/Editors.eda18ee7.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/member.da495e8e.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/ant-design.882c9442.js","assets/index.7963af41.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.d18b8a8a.js"),["assets/Billing.d18b8a8a.js","assets/asyncComputed.e4eff947.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/organization.13d76db8.js","assets/LoadingContainer.efeaebc7.js","assets/LoadingContainer.8bd9cc72.css","assets/index.87787dc0.js","assets/Card.4eed68ea.js","assets/TabPane.8b6a06f6.js","assets/hasIn.838f176c.js","assets/Form.be881a7e.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.27253b48.js"),["assets/Project.27253b48.js","assets/Navbar.9a8afbba.js","assets/logo.084e5d7c.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/PhChats.vue.0b9ce541.js","assets/PhSignOut.vue.20afdbb9.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.92a391ca.js","assets/index.e2723ae6.js","assets/BookOutlined.25d33713.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.45dbf6be.js","assets/BaseLayout.7e127cbf.css","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/organization.13d76db8.js","assets/Sidebar.f695c3c9.js","assets/index.c2ab207f.js","assets/index.ffb66b6e.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.42f907f5.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.047d6645.js","assets/PhIdentificationBadge.vue.5dcce94a.js","assets/PhCube.vue.ecf79d4a.js","assets/PhGlobe.vue.93e25d22.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.0a114f34.js"),["assets/Live.0a114f34.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.e4eff947.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/datetime.1b026724.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.35267272.js","assets/LoadingOutlined.d9a6fe68.js","assets/PhArrowCounterClockwise.vue.047d6645.js","assets/PhArrowSquareOut.vue.3b263d62.js","assets/PhChats.vue.0b9ce541.js","assets/PhCopySimple.vue.7c392939.js","assets/index.163d44f2.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.35ef79c3.js"),["assets/Builds.35ef79c3.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/datetime.1b026724.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.047d6645.js","assets/PhCube.vue.ecf79d4a.js","assets/PhDownloadSimple.vue.03848523.js","assets/PhWebhooksLogo.vue.4df6ba00.js","assets/index.e632e62d.js","assets/ExclamationCircleOutlined.ab76615b.js","assets/CloseCircleOutlined.628abb1a.js","assets/LoadingOutlined.d9a6fe68.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.3470d735.js"),["assets/Connectors.3470d735.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/index.dbc65bd8.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/connector.f9d49446.js","assets/asyncComputed.e4eff947.js","assets/PhPencil.vue.51014043.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.d9b602d5.js"),["assets/Tables.d9b602d5.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.e4eff947.js","assets/string.de46731c.js","assets/PhPencil.vue.51014043.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.47aa8be1.js"),["assets/Sql.47aa8be1.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/utils.05fceac0.js","assets/PhDownloadSimple.vue.03848523.js","assets/toggleHighContrast.323106c1.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.1a2df184.js"),["assets/ApiKeys.1a2df184.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.e4eff947.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/member.da495e8e.js","assets/apiKey.2e6b8ce4.js","assets/project.62c311c6.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.20252345.js"),["assets/Logs.20252345.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/datetime.1b026724.js","assets/string.de46731c.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.35267272.js","assets/LoadingOutlined.d9a6fe68.js","assets/dayjs.2de4d5a6.js","assets/index.f5b58b9b.js","assets/index.ffb66b6e.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/CollapsePanel.41f932dd.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.d7bce94c.js"),["assets/ProjectSettings.d7bce94c.js","assets/asyncComputed.e4eff947.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9c9547fd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.22154223.js"),["assets/EnvVars.22154223.js","assets/CrudView.6b45a796.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/url.8896abfd.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.e4eff947.js","assets/PhPencil.vue.51014043.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.fb10a6ad.js"),["assets/Files.fb10a6ad.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/ContentLayout.42f907f5.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.55abbcd7.js","assets/ant-design.882c9442.js","assets/index.7963af41.js","assets/Modal.e362c192.js","assets/asyncComputed.e4eff947.js","assets/gateway.6b86361a.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.19f10f39.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.4eed68ea.js","assets/TabPane.8b6a06f6.js","assets/hasIn.838f176c.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.a016f92d.js"),["assets/View.a016f92d.js","assets/asyncComputed.e4eff947.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js","assets/BookOutlined.25d33713.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/index.d034486a.js","assets/isNumeric.75337b1e.js","assets/CrudView.6b45a796.js","assets/url.8896abfd.js","assets/Modal.e362c192.js","assets/index.ffb66b6e.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.51014043.js","assets/repository.01419430.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/fetch.89e36210.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/ant-design.882c9442.js","assets/index.7963af41.js","assets/TabPane.8b6a06f6.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.ec363503.js"),["assets/TableEditor.ec363503.js","assets/BaseLayout.45dbf6be.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.e4eff947.js","assets/PhPencil.vue.51014043.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/index.dbc65bd8.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/organization.13d76db8.js","assets/ContentLayout.42f907f5.js","assets/ContentLayout.6dd20759.css","assets/ant-design.882c9442.js","assets/index.7963af41.js","assets/Modal.e362c192.js","assets/PhCheckCircle.vue.922c71dc.js","assets/index.701be380.js","assets/index.7eadbd74.js","assets/Form.be881a7e.js","assets/hasIn.838f176c.js","assets/index.085a8332.js","assets/index.d034486a.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.e45b7770.js","assets/LoadingOutlined.d9a6fe68.js","assets/DeleteOutlined.19f10f39.js","assets/DeleteOutlined.f8ba9770.js","assets/index.87787dc0.js","assets/index.e2723ae6.js","assets/index.92a391ca.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.c412c68a.js"),["assets/ConnectorEditor.c412c68a.js","assets/SaveButton.d7f7f26e.js","assets/outputWidgets.0b268a6e.js","assets/outputWidgets.f9731be5.css","assets/UnsavedChangesHandler.815fbc18.js","assets/ExclamationCircleOutlined.ab76615b.js","assets/Modal.e362c192.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.45dbf6be.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.e4eff947.js","assets/index.dbc65bd8.js","assets/gateway.6b86361a.js","assets/popupNotifcation.55abbcd7.js","assets/record.4789b40c.js","assets/pubsub.e4b461e5.js","assets/string.de46731c.js","assets/project.62c311c6.js","assets/connector.f9d49446.js","assets/organization.13d76db8.js","assets/TabPane.8b6a06f6.js","assets/hasIn.838f176c.js","assets/index.e2723ae6.js","assets/index.92a391ca.js","assets/Form.be881a7e.js","assets/index.87787dc0.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.2e50c1be.js.map
