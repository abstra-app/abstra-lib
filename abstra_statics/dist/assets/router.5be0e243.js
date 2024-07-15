var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Y as p,cY as h,cZ as u,c_ as b,h as E,i as A,_ as o,j as g}from"./vue-router.c2834bcc.js";import{C as c,a as w}from"./gateway.b922ce40.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cc2298bc-fc85-4427-97e9-842680220b45",t._sentryDebugIdIdentifier="sentry-dbid-cc2298bc-fc85-4427-97e9-842680220b45")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.4384b4b7.js"),["assets/WidgetPreview.4384b4b7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/Steps.2efcc082.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.866dc607.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.0aeddb3d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.416a727e.js"),["assets/Login.416a727e.js","assets/CircularLoading.88779240.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.866dc607.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/member.1bb840f3.js","assets/Login.4d61f324.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.3beff10c.js"),["assets/EditorLogin.3beff10c.js","assets/Navbar.9bfe630b.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.aabb0ef7.js","assets/PhChats.vue.bbdcc599.js","assets/PhSignOut.vue.2666b5e9.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/index.77aa2424.js","assets/index.49ebe6fd.js","assets/index.ce3e362f.js","assets/BookOutlined.39f192da.js","assets/Navbar.a899b0d6.css","assets/url.c513c3e6.js","assets/apiKey.24399fd4.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js","assets/project.42ef24e2.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.d139e837.js"),["assets/Organizations.d139e837.js","assets/Navbar.9bfe630b.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.aabb0ef7.js","assets/PhChats.vue.bbdcc599.js","assets/PhSignOut.vue.2666b5e9.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/index.77aa2424.js","assets/index.49ebe6fd.js","assets/index.ce3e362f.js","assets/BookOutlined.39f192da.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.7a6239a7.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.7cb3e982.js","assets/ContentLayout.ee57a545.css","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/CrudView.80dd6085.css","assets/ant-design.1f00f587.js","assets/PhArrowSquareOut.vue.b59d6c06.js","assets/PhPencil.vue.a1d26ffc.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.ebdad01a.js"),["assets/Organization.ebdad01a.js","assets/Navbar.9bfe630b.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.aabb0ef7.js","assets/PhChats.vue.bbdcc599.js","assets/PhSignOut.vue.2666b5e9.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/index.77aa2424.js","assets/index.49ebe6fd.js","assets/index.ce3e362f.js","assets/BookOutlined.39f192da.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.7a6239a7.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.7cb3e982.js","assets/ContentLayout.ee57a545.css","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js","assets/Sidebar.c679b1d6.js","assets/index.95439879.js","assets/Logo.0f0e7707.js","assets/Logo.7b39b5e7.css","assets/index.8e42f9c8.js","assets/Sidebar.b3237e51.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.caa0704c.js"),["assets/Projects.caa0704c.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.aabb0ef7.js","assets/ant-design.1f00f587.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js","assets/project.42ef24e2.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.b59d6c06.js","assets/PhPencil.vue.a1d26ffc.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.a54ee73e.js"),["assets/Editors.a54ee73e.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css","assets/ant-design.1f00f587.js","assets/asyncComputed.aabb0ef7.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/member.1bb840f3.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.66ee4ec4.js"),["assets/Billing.66ee4ec4.js","assets/asyncComputed.aabb0ef7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js","assets/LoadingContainer.25cce90a.js","assets/LoadingContainer.56fa997a.css","assets/index.875f417a.js","assets/Card.a03120a4.js","assets/TabPane.73cf352d.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.cf59c90c.js"),["assets/Project.cf59c90c.js","assets/Navbar.9bfe630b.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.aabb0ef7.js","assets/PhChats.vue.bbdcc599.js","assets/PhSignOut.vue.2666b5e9.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/index.77aa2424.js","assets/index.49ebe6fd.js","assets/index.ce3e362f.js","assets/BookOutlined.39f192da.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.7a6239a7.js","assets/BaseLayout.0156e9e1.css","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js","assets/project.42ef24e2.js","assets/Sidebar.c679b1d6.js","assets/index.95439879.js","assets/Logo.0f0e7707.js","assets/Logo.7b39b5e7.css","assets/index.8e42f9c8.js","assets/Sidebar.b3237e51.css","assets/ContentLayout.7cb3e982.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.a93d9798.js","assets/PhIdentificationBadge.vue.e44929e4.js","assets/PhCube.vue.45abfa54.js","assets/PhGlobe.vue.c8da0435.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.8bec6e8d.js"),["assets/Live.8bec6e8d.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css","assets/asyncComputed.aabb0ef7.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/datetime.8ae7a0e3.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/project.42ef24e2.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a5318430.js","assets/LoadingOutlined.3233da15.js","assets/PhArrowCounterClockwise.vue.a93d9798.js","assets/PhArrowSquareOut.vue.b59d6c06.js","assets/PhChats.vue.bbdcc599.js","assets/PhCopySimple.vue.efd2f7e2.js","assets/PhRocketLaunch.vue.59c203eb.js","assets/index.6f094890.js","assets/Live.2e8a50a7.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.f3a984bd.js"),["assets/Builds.f3a984bd.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css","assets/asyncComputed.aabb0ef7.js","assets/datetime.8ae7a0e3.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/PhArrowCounterClockwise.vue.a93d9798.js","assets/PhCube.vue.45abfa54.js","assets/PhDownloadSimple.vue.1eb54f99.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/project.42ef24e2.js","assets/PhWebhooksLogo.vue.a9c10a05.js","assets/index.55fa8d91.js","assets/ExclamationCircleOutlined.667cfc40.js","assets/CloseCircleOutlined.1c62bda9.js","assets/LoadingOutlined.3233da15.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.0bd170f7.js"),["assets/Connectors.0bd170f7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/tables.07d529bf.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/connector.9ba950e5.js","assets/asyncComputed.aabb0ef7.js","assets/PhPencil.vue.a1d26ffc.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.51a37d7d.js"),["assets/Tables.51a37d7d.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css","assets/asyncComputed.aabb0ef7.js","assets/string.a81389d2.js","assets/PhPencil.vue.a1d26ffc.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.a8aa6d9f.js"),["assets/Sql.a8aa6d9f.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/utils.59348c69.js","assets/PhDownloadSimple.vue.1eb54f99.js","assets/toggleHighContrast.371049d7.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/project.42ef24e2.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.dfa13ec7.js"),["assets/ApiKeys.dfa13ec7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.aabb0ef7.js","assets/apiKey.24399fd4.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/member.1bb840f3.js","assets/project.42ef24e2.js","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.862e0f90.js"),["assets/Logs.862e0f90.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/datetime.8ae7a0e3.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a5318430.js","assets/LoadingOutlined.3233da15.js","assets/dayjs.4d1b265c.js","assets/index.62f411df.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CollapsePanel.611e1b79.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.1965eee5.js"),["assets/ProjectSettings.1965eee5.js","assets/asyncComputed.aabb0ef7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/project.42ef24e2.js","assets/SaveButton.75deec62.js","assets/ExclamationCircleOutlined.667cfc40.js","assets/SaveButton.ae5051de.css","assets/index.77aa2424.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.e8a5ee30.js"),["assets/EnvVars.e8a5ee30.js","assets/View.vue_vue_type_script_setup_true_lang.8a62bc1a.js","assets/gateway.b922ce40.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/popupNotifcation.d7f14fb5.js","assets/fetch.269e4310.js","assets/record.bb8461de.js","assets/SaveButton.75deec62.js","assets/ExclamationCircleOutlined.667cfc40.js","assets/SaveButton.ae5051de.css","assets/CrudView.cb63a448.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/index.77aa2424.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.59c203eb.js","assets/asyncComputed.aabb0ef7.js","assets/PhPencil.vue.a1d26ffc.js","assets/index.95439879.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.3a527e9c.js"),["assets/Files.3a527e9c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.7cb3e982.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.d7f14fb5.js","assets/ant-design.1f00f587.js","assets/asyncComputed.aabb0ef7.js","assets/gateway.b922ce40.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/DeleteOutlined.22c76aee.js","assets/Card.a03120a4.js","assets/TabPane.73cf352d.js","assets/Files.4d74f055.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.e44ce3c0.js"),["assets/View.e44ce3c0.js","assets/asyncComputed.aabb0ef7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/index.77aa2424.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7f637703.js","assets/BookOutlined.39f192da.js","assets/index.ab6d15cf.js","assets/isNumeric.75337b1e.js","assets/CrudView.cb63a448.js","assets/url.c513c3e6.js","assets/index.8e42f9c8.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.a1d26ffc.js","assets/repository.45382767.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/fetch.269e4310.js","assets/record.bb8461de.js","assets/ant-design.1f00f587.js","assets/TabPane.73cf352d.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.54a27b91.js"),["assets/TableEditor.54a27b91.js","assets/BaseLayout.7a6239a7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.aabb0ef7.js","assets/PhPencil.vue.a1d26ffc.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/tables.07d529bf.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/organization.c8a012b4.js","assets/project.42ef24e2.js","assets/ContentLayout.7cb3e982.js","assets/ContentLayout.ee57a545.css","assets/ant-design.1f00f587.js","assets/PhCheckCircle.vue.f1288edd.js","assets/index.f2cc8587.js","assets/index.77aa2424.js","assets/index.09a229cf.js","assets/index.ab6d15cf.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.b761c89e.js","assets/LoadingOutlined.3233da15.js","assets/DeleteOutlined.22c76aee.js","assets/DownOutlined.cd82b201.js","assets/index.875f417a.js","assets/index.ce3e362f.js","assets/index.49ebe6fd.js","assets/TableEditor.44b01422.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.ab07b29d.js"),["assets/ConnectorEditor.ab07b29d.js","assets/BaseLayout.7a6239a7.js","assets/vue-router.c2834bcc.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.75deec62.js","assets/ExclamationCircleOutlined.667cfc40.js","assets/SaveButton.ae5051de.css","assets/asyncComputed.aabb0ef7.js","assets/tables.07d529bf.js","assets/gateway.b922ce40.js","assets/popupNotifcation.d7f14fb5.js","assets/record.bb8461de.js","assets/string.a81389d2.js","assets/connector.9ba950e5.js","assets/organization.c8a012b4.js","assets/project.42ef24e2.js","assets/TabPane.73cf352d.js","assets/index.ce3e362f.js","assets/index.49ebe6fd.js","assets/index.77aa2424.js","assets/index.875f417a.js","assets/ConnectorEditor.575aefc3.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.5be0e243.js.map
