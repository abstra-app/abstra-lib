var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{a3 as p,d1 as h,d2 as u,d3 as b,h as E,i as A,_ as o,j as g}from"./vue-router.5a4a176b.js";import{C as c,a as w}from"./gateway.2d3e20d8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="02348c55-49b5-4796-add3-7233ae1eacc2",t._sentryDebugIdIdentifier="sentry-dbid-02348c55-49b5-4796-add3-7233ae1eacc2")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.dfb0e46c.js"),["assets/WidgetPreview.dfb0e46c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/Steps.c21cd737.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.1b0bc13a.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.0aeddb3d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.68f172bd.js"),["assets/Login.68f172bd.js","assets/CircularLoading.0fd3ce53.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.1b0bc13a.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/member.0468c649.js","assets/Login.83ad38e4.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.a05b8618.js"),["assets/EditorLogin.a05b8618.js","assets/Navbar.2d7bc8e6.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/asyncComputed.8c12b2a1.js","assets/PhChats.vue.5baac060.js","assets/PhSignOut.vue.05362cff.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/index.7210f61e.js","assets/index.0664acb2.js","assets/index.ecd544a2.js","assets/BookOutlined.9493568c.js","assets/Navbar.a899b0d6.css","assets/url.6cce3c3e.js","assets/apiKey.6cb9aaa0.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js","assets/project.126401f6.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.3bed677e.js"),["assets/Organizations.3bed677e.js","assets/Navbar.2d7bc8e6.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/asyncComputed.8c12b2a1.js","assets/PhChats.vue.5baac060.js","assets/PhSignOut.vue.05362cff.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/index.7210f61e.js","assets/index.0664acb2.js","assets/index.ecd544a2.js","assets/BookOutlined.9493568c.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.80a6be90.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/CrudView.80dd6085.css","assets/ant-design.2f4c2b3e.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/PhPencil.vue.651d632b.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.20df5cc3.js"),["assets/Organization.20df5cc3.js","assets/Navbar.2d7bc8e6.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/asyncComputed.8c12b2a1.js","assets/PhChats.vue.5baac060.js","assets/PhSignOut.vue.05362cff.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/index.7210f61e.js","assets/index.0664acb2.js","assets/index.ecd544a2.js","assets/BookOutlined.9493568c.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.80a6be90.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js","assets/Sidebar.32737062.js","assets/index.33fd91d4.js","assets/Logo.9c773c6e.js","assets/Logo.7b39b5e7.css","assets/index.eec6044c.js","assets/Sidebar.b3237e51.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.7003b8c5.js"),["assets/Projects.7003b8c5.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/asyncComputed.8c12b2a1.js","assets/ant-design.2f4c2b3e.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js","assets/project.126401f6.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.03c87537.js","assets/PhPencil.vue.651d632b.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.5c1d9f39.js"),["assets/Editors.5c1d9f39.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/ant-design.2f4c2b3e.js","assets/asyncComputed.8c12b2a1.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/member.0468c649.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.103f84ec.js"),["assets/Billing.103f84ec.js","assets/asyncComputed.8c12b2a1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js","assets/LoadingContainer.9e15729c.js","assets/LoadingContainer.56fa997a.css","assets/index.4887eff3.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.4f1a368a.js"),["assets/Project.4f1a368a.js","assets/Navbar.2d7bc8e6.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/asyncComputed.8c12b2a1.js","assets/PhChats.vue.5baac060.js","assets/PhSignOut.vue.05362cff.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/index.7210f61e.js","assets/index.0664acb2.js","assets/index.ecd544a2.js","assets/BookOutlined.9493568c.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.80a6be90.js","assets/BaseLayout.0156e9e1.css","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js","assets/project.126401f6.js","assets/Sidebar.32737062.js","assets/index.33fd91d4.js","assets/Logo.9c773c6e.js","assets/Logo.7b39b5e7.css","assets/index.eec6044c.js","assets/Sidebar.b3237e51.css","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.47f11290.js","assets/PhIdentificationBadge.vue.cce72930.js","assets/PhCube.vue.3838b14c.js","assets/PhGlobe.vue.601f35a5.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.cd635866.js"),["assets/Live.cd635866.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.8c12b2a1.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/datetime.ebb47983.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/project.126401f6.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f6a48acf.js","assets/LoadingOutlined.ad59a8e2.js","assets/PhArrowCounterClockwise.vue.47f11290.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/PhChats.vue.5baac060.js","assets/PhCopySimple.vue.28b40fbd.js","assets/PhRocketLaunch.vue.057f096d.js","assets/index.3318f555.js","assets/Live.dfeefa78.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.cd0c69c3.js"),["assets/Builds.cd0c69c3.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.8c12b2a1.js","assets/datetime.ebb47983.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/PhArrowCounterClockwise.vue.47f11290.js","assets/PhCube.vue.3838b14c.js","assets/PhDownloadSimple.vue.64661cc3.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/project.126401f6.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/index.79256a1c.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/CloseCircleOutlined.47032583.js","assets/LoadingOutlined.ad59a8e2.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.8397614c.js"),["assets/Connectors.8397614c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/tables.773b5f94.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/connector.5bf4de2d.js","assets/asyncComputed.8c12b2a1.js","assets/PhPencil.vue.651d632b.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.19fe38d7.js"),["assets/Tables.19fe38d7.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.8c12b2a1.js","assets/string.6d768b54.js","assets/PhPencil.vue.651d632b.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.4da3e915.js"),["assets/Sql.4da3e915.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/utils.ba547c2c.js","assets/PhDownloadSimple.vue.64661cc3.js","assets/toggleHighContrast.06f6d3d9.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/project.126401f6.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.3ca207f4.js"),["assets/ApiKeys.3ca207f4.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/asyncComputed.8c12b2a1.js","assets/apiKey.6cb9aaa0.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/member.0468c649.js","assets/project.126401f6.js","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.918c02f7.js"),["assets/Logs.918c02f7.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/datetime.ebb47983.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f6a48acf.js","assets/LoadingOutlined.ad59a8e2.js","assets/dayjs.5004826d.js","assets/index.8323aa26.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CollapsePanel.03c12282.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.7e30168b.js"),["assets/ProjectSettings.7e30168b.js","assets/asyncComputed.8c12b2a1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/project.126401f6.js","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/index.7210f61e.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.565bc502.js"),["assets/EnvVars.565bc502.js","assets/View.vue_vue_type_script_setup_true_lang.aa6d4816.js","assets/gateway.2d3e20d8.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/popupNotifcation.083e8b59.js","assets/fetch.5e01ad21.js","assets/record.fdd0857f.js","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/CrudView.5c88dea5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.057f096d.js","assets/asyncComputed.8c12b2a1.js","assets/PhPencil.vue.651d632b.js","assets/index.33fd91d4.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.df57e853.js"),["assets/Files.df57e853.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.083e8b59.js","assets/ant-design.2f4c2b3e.js","assets/asyncComputed.8c12b2a1.js","assets/gateway.2d3e20d8.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/DeleteOutlined.28bae62b.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/Files.4d74f055.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.2f94a46e.js"),["assets/View.2f94a46e.js","assets/asyncComputed.8c12b2a1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/index.7210f61e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/index.f88863c8.js","assets/isNumeric.75337b1e.js","assets/CrudView.5c88dea5.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.651d632b.js","assets/repository.cc272281.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/fetch.5e01ad21.js","assets/record.fdd0857f.js","assets/ant-design.2f4c2b3e.js","assets/TabPane.5b172faf.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.94b5a26a.js"),["assets/TableEditor.94b5a26a.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.8c12b2a1.js","assets/PhPencil.vue.651d632b.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/tables.773b5f94.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/organization.4a66b209.js","assets/project.126401f6.js","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/ant-design.2f4c2b3e.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/index.0cff9fa4.js","assets/index.7210f61e.js","assets/index.bdcba198.js","assets/index.f88863c8.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.073eee8d.js","assets/LoadingOutlined.ad59a8e2.js","assets/DeleteOutlined.28bae62b.js","assets/DownOutlined.885d0c05.js","assets/index.4887eff3.js","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/TableEditor.44b01422.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.21d6895f.js"),["assets/ConnectorEditor.21d6895f.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/asyncComputed.8c12b2a1.js","assets/tables.773b5f94.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/record.fdd0857f.js","assets/string.6d768b54.js","assets/connector.5bf4de2d.js","assets/organization.4a66b209.js","assets/project.126401f6.js","assets/TabPane.5b172faf.js","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/index.7210f61e.js","assets/index.4887eff3.js","assets/ConnectorEditor.575aefc3.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.b7a0a717.js.map
