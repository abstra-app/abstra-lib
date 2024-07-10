var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Z as p,cZ as h,c_ as u,c$ as b,h as E,i as A,_ as o,j as g}from"./vue-router.cfcddb21.js";import{C as c,a as w}from"./gateway.6c31c921.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6a72c471-6dc8-4bf3-94f9-8243e8cd9302",t._sentryDebugIdIdentifier="sentry-dbid-6a72c471-6dc8-4bf3-94f9-8243e8cd9302")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.b3683e06.js"),["assets/WidgetPreview.b3683e06.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/Steps.9959715b.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.771758b5.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.fb489f40.js"),["assets/Login.fb489f40.js","assets/CircularLoading.0461a6ea.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.771758b5.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/member.d14fc8bc.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.1cf38730.js"),["assets/EditorLogin.1cf38730.js","assets/Navbar.26b9bcfc.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.3fd67146.js","assets/PhChats.vue.06d968fd.js","assets/PhSignOut.vue.9960b591.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.f86e7e78.js","assets/index.51c2bfd4.js","assets/index.5f7d7a86.js","assets/BookOutlined.d11fa7da.js","assets/Navbar.3c85938c.css","assets/url.f69db1b4.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/apiKey.f9966022.js","assets/project.8b9abc32.js","assets/organization.85c35d97.js","assets/EditorLogin.a86eeb38.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.03ecc705.js"),["assets/Organizations.03ecc705.js","assets/Navbar.26b9bcfc.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.3fd67146.js","assets/PhChats.vue.06d968fd.js","assets/PhSignOut.vue.9960b591.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.f86e7e78.js","assets/index.51c2bfd4.js","assets/index.5f7d7a86.js","assets/BookOutlined.d11fa7da.js","assets/Navbar.3c85938c.css","assets/BaseLayout.7bb586d0.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.b2fc802e.js","assets/ContentLayout.ee57a545.css","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/CrudView.a8b105cf.css","assets/ant-design.c7e9d852.js","assets/PhArrowSquareOut.vue.abf8a744.js","assets/PhPencil.vue.e1e73c3e.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/organization.85c35d97.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.e588da11.js"),["assets/Organization.e588da11.js","assets/Navbar.26b9bcfc.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.3fd67146.js","assets/PhChats.vue.06d968fd.js","assets/PhSignOut.vue.9960b591.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.f86e7e78.js","assets/index.51c2bfd4.js","assets/index.5f7d7a86.js","assets/BookOutlined.d11fa7da.js","assets/Navbar.3c85938c.css","assets/BaseLayout.7bb586d0.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.b2fc802e.js","assets/ContentLayout.ee57a545.css","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/organization.85c35d97.js","assets/Sidebar.7540a918.js","assets/index.041c636b.js","assets/Logo.283d1505.js","assets/Logo.7b39b5e7.css","assets/index.4ba43c8e.js","assets/Sidebar.4733e4f6.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.70344bcb.js"),["assets/Projects.70344bcb.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.3fd67146.js","assets/ant-design.c7e9d852.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/organization.85c35d97.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.abf8a744.js","assets/PhPencil.vue.e1e73c3e.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.0d9bd9e3.js"),["assets/Editors.0d9bd9e3.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css","assets/ant-design.c7e9d852.js","assets/asyncComputed.3fd67146.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/member.d14fc8bc.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.d8d9a015.js"),["assets/Billing.d8d9a015.js","assets/asyncComputed.3fd67146.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/organization.85c35d97.js","assets/LoadingContainer.4c0e65a7.js","assets/LoadingContainer.8bd9cc72.css","assets/index.881eb69e.js","assets/Card.438e22c5.js","assets/TabPane.042b02b0.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.a4ab7387.js"),["assets/Project.a4ab7387.js","assets/Navbar.26b9bcfc.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.3fd67146.js","assets/PhChats.vue.06d968fd.js","assets/PhSignOut.vue.9960b591.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.f86e7e78.js","assets/index.51c2bfd4.js","assets/index.5f7d7a86.js","assets/BookOutlined.d11fa7da.js","assets/Navbar.3c85938c.css","assets/BaseLayout.7bb586d0.js","assets/BaseLayout.0156e9e1.css","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/organization.85c35d97.js","assets/Sidebar.7540a918.js","assets/index.041c636b.js","assets/Logo.283d1505.js","assets/Logo.7b39b5e7.css","assets/index.4ba43c8e.js","assets/Sidebar.4733e4f6.css","assets/ContentLayout.b2fc802e.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.9b743ce9.js","assets/PhIdentificationBadge.vue.9737aa28.js","assets/PhCube.vue.36d23705.js","assets/PhGlobe.vue.d99a61db.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.c002144b.js"),["assets/Live.c002144b.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.3fd67146.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/datetime.9a1e003d.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.d5636df5.js","assets/LoadingOutlined.18233de6.js","assets/PhArrowCounterClockwise.vue.9b743ce9.js","assets/PhArrowSquareOut.vue.abf8a744.js","assets/PhChats.vue.06d968fd.js","assets/PhCopySimple.vue.503286ef.js","assets/index.47ec7994.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.e5408199.js"),["assets/Builds.e5408199.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.3fd67146.js","assets/datetime.9a1e003d.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/PhArrowCounterClockwise.vue.9b743ce9.js","assets/PhCube.vue.36d23705.js","assets/PhDownloadSimple.vue.b97ab3eb.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/PhWebhooksLogo.vue.1fe44310.js","assets/index.7c86b475.js","assets/ExclamationCircleOutlined.b124b8c4.js","assets/CloseCircleOutlined.92f0147a.js","assets/LoadingOutlined.18233de6.js","assets/Builds.91927b8f.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.7684439c.js"),["assets/Connectors.7684439c.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/index.69e4954f.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/connector.6f0b4ee1.js","assets/asyncComputed.3fd67146.js","assets/PhPencil.vue.e1e73c3e.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.512e6798.js"),["assets/Tables.512e6798.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.3fd67146.js","assets/string.5a5fd55b.js","assets/PhPencil.vue.e1e73c3e.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.fd26dcde.js"),["assets/Sql.fd26dcde.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/utils.cc746d38.js","assets/PhDownloadSimple.vue.b97ab3eb.js","assets/toggleHighContrast.311878bd.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.c076c68f.js"),["assets/ApiKeys.c076c68f.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.3fd67146.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/member.d14fc8bc.js","assets/apiKey.f9966022.js","assets/project.8b9abc32.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.c64b4ca2.js"),["assets/Logs.c64b4ca2.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/datetime.9a1e003d.js","assets/string.5a5fd55b.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.d5636df5.js","assets/LoadingOutlined.18233de6.js","assets/dayjs.e19521b8.js","assets/index.d2493b75.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CollapsePanel.03f6bfdb.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.c7c2ef61.js"),["assets/ProjectSettings.c7c2ef61.js","assets/asyncComputed.3fd67146.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/SaveButton.a1c98e21.js","assets/ExclamationCircleOutlined.b124b8c4.js","assets/SaveButton.9c6e367d.css","assets/index.f86e7e78.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.bb0ac716.js"),["assets/EnvVars.bb0ac716.js","assets/CrudView.a9914c50.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/index.f86e7e78.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.3fd67146.js","assets/PhPencil.vue.e1e73c3e.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.a76f58f5.js"),["assets/Files.a76f58f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.b2fc802e.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.7dda7c90.js","assets/ant-design.c7e9d852.js","assets/asyncComputed.3fd67146.js","assets/gateway.6c31c921.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/DeleteOutlined.85af5e4b.js","assets/Card.438e22c5.js","assets/TabPane.042b02b0.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.1a58848d.js"),["assets/View.1a58848d.js","assets/asyncComputed.3fd67146.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/index.f86e7e78.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.db180743.js","assets/BookOutlined.d11fa7da.js","assets/index.f71c229e.js","assets/isNumeric.75337b1e.js","assets/CrudView.a9914c50.js","assets/url.f69db1b4.js","assets/index.4ba43c8e.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.e1e73c3e.js","assets/repository.734dbe84.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/fetch.b7aa7a2d.js","assets/record.771a6a5c.js","assets/ant-design.c7e9d852.js","assets/TabPane.042b02b0.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.2d553f05.js"),["assets/TableEditor.2d553f05.js","assets/BaseLayout.7bb586d0.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.3fd67146.js","assets/PhPencil.vue.e1e73c3e.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/index.69e4954f.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/organization.85c35d97.js","assets/ContentLayout.b2fc802e.js","assets/ContentLayout.ee57a545.css","assets/ant-design.c7e9d852.js","assets/PhCheckCircle.vue.b6670bd1.js","assets/index.f143ffed.js","assets/index.f86e7e78.js","assets/index.d853857b.js","assets/index.f71c229e.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.7f221c9c.js","assets/LoadingOutlined.18233de6.js","assets/DeleteOutlined.85af5e4b.js","assets/DownOutlined.dab207c3.js","assets/index.881eb69e.js","assets/index.5f7d7a86.js","assets/index.51c2bfd4.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.7783d2eb.js"),["assets/ConnectorEditor.7783d2eb.js","assets/BaseLayout.7bb586d0.js","assets/vue-router.cfcddb21.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.a1c98e21.js","assets/ExclamationCircleOutlined.b124b8c4.js","assets/SaveButton.9c6e367d.css","assets/asyncComputed.3fd67146.js","assets/index.69e4954f.js","assets/gateway.6c31c921.js","assets/popupNotifcation.7dda7c90.js","assets/record.771a6a5c.js","assets/string.5a5fd55b.js","assets/project.8b9abc32.js","assets/connector.6f0b4ee1.js","assets/organization.85c35d97.js","assets/TabPane.042b02b0.js","assets/index.5f7d7a86.js","assets/index.51c2bfd4.js","assets/index.f86e7e78.js","assets/index.881eb69e.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.179118fa.js.map
