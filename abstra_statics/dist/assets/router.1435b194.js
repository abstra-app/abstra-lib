var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{Z as p,cZ as h,c_ as u,c$ as b,h as E,i as A,_ as o,j as g}from"./vue-router.41854a3c.js";import{C as c,a as w}from"./gateway.3b159718.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="540f3255-b926-4161-a996-2ebdefd2934a",t._sentryDebugIdIdentifier="sentry-dbid-540f3255-b926-4161-a996-2ebdefd2934a")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.8f0b7d64.js"),["assets/WidgetPreview.8f0b7d64.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/Steps.5367f406.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.5ffbf68c.js","assets/WidgetsFrame.56c3f15a.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.edbee052.js"),["assets/Login.edbee052.js","assets/CircularLoading.47eb9341.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.5ffbf68c.js","assets/WidgetsFrame.56c3f15a.css","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/member.5c843f4a.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.9838005d.js"),["assets/EditorLogin.9838005d.js","assets/Navbar.c5942001.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/PhChats.vue.29f6498a.js","assets/PhSignOut.vue.6fee7b07.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.73d3ff24.js","assets/index.f97eb76a.js","assets/index.2c5630eb.js","assets/BookOutlined.a88eda51.js","assets/Navbar.3c85938c.css","assets/url.136adcd3.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/apiKey.f0ad3dc4.js","assets/project.7de37c68.js","assets/organization.8657e1d3.js","assets/EditorLogin.a86eeb38.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.5fa16727.js"),["assets/Organizations.5fa16727.js","assets/Navbar.c5942001.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/PhChats.vue.29f6498a.js","assets/PhSignOut.vue.6fee7b07.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.73d3ff24.js","assets/index.f97eb76a.js","assets/index.2c5630eb.js","assets/BookOutlined.a88eda51.js","assets/Navbar.3c85938c.css","assets/BaseLayout.0744469c.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.735b13db.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/CrudView.a8b105cf.css","assets/ant-design.b88fc035.js","assets/PhArrowSquareOut.vue.eb6c48d9.js","assets/PhPencil.vue.42cb8c09.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/organization.8657e1d3.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.e8d32725.js"),["assets/Organization.e8d32725.js","assets/Navbar.c5942001.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/PhChats.vue.29f6498a.js","assets/PhSignOut.vue.6fee7b07.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.73d3ff24.js","assets/index.f97eb76a.js","assets/index.2c5630eb.js","assets/BookOutlined.a88eda51.js","assets/Navbar.3c85938c.css","assets/BaseLayout.0744469c.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.735b13db.js","assets/ContentLayout.ee57a545.css","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/organization.8657e1d3.js","assets/Sidebar.393f4c04.js","assets/index.db772e26.js","assets/Logo.7b44008d.js","assets/Logo.7b39b5e7.css","assets/index.f676c6ce.js","assets/Sidebar.4733e4f6.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.2e7af4de.js"),["assets/Projects.2e7af4de.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/ant-design.b88fc035.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/organization.8657e1d3.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.eb6c48d9.js","assets/PhPencil.vue.42cb8c09.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.38ebbd9c.js"),["assets/Editors.38ebbd9c.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css","assets/ant-design.b88fc035.js","assets/asyncComputed.9af3a3fa.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/member.5c843f4a.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.8329ad06.js"),["assets/Billing.8329ad06.js","assets/asyncComputed.9af3a3fa.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/organization.8657e1d3.js","assets/LoadingContainer.a64be705.js","assets/LoadingContainer.8bd9cc72.css","assets/index.f550cb06.js","assets/Card.88ad10bb.js","assets/TabPane.839177e7.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.6db9d4cb.js"),["assets/Project.6db9d4cb.js","assets/Navbar.c5942001.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/PhChats.vue.29f6498a.js","assets/PhSignOut.vue.6fee7b07.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.73d3ff24.js","assets/index.f97eb76a.js","assets/index.2c5630eb.js","assets/BookOutlined.a88eda51.js","assets/Navbar.3c85938c.css","assets/BaseLayout.0744469c.js","assets/BaseLayout.0156e9e1.css","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/organization.8657e1d3.js","assets/Sidebar.393f4c04.js","assets/index.db772e26.js","assets/Logo.7b44008d.js","assets/Logo.7b39b5e7.css","assets/index.f676c6ce.js","assets/Sidebar.4733e4f6.css","assets/ContentLayout.735b13db.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.62f1e8ae.js","assets/PhIdentificationBadge.vue.d365e1fe.js","assets/PhCube.vue.a5f1c0eb.js","assets/PhGlobe.vue.4e0655f4.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.7e5492ff.js"),["assets/Live.7e5492ff.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.9af3a3fa.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/datetime.c9b09010.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.de681d5e.js","assets/LoadingOutlined.03532033.js","assets/PhArrowCounterClockwise.vue.62f1e8ae.js","assets/PhArrowSquareOut.vue.eb6c48d9.js","assets/PhChats.vue.29f6498a.js","assets/PhCopySimple.vue.453f9a92.js","assets/index.ab6c3a40.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.77ff6716.js"),["assets/Builds.77ff6716.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/datetime.c9b09010.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.62f1e8ae.js","assets/PhCube.vue.a5f1c0eb.js","assets/PhDownloadSimple.vue.303a31ba.js","assets/PhWebhooksLogo.vue.e1c6aaca.js","assets/index.653b72fc.js","assets/ExclamationCircleOutlined.1e9a658f.js","assets/CloseCircleOutlined.8e45d11e.js","assets/LoadingOutlined.03532033.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.63ac4a24.js"),["assets/Connectors.63ac4a24.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/index.c069fbee.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/connector.0ac4d6af.js","assets/asyncComputed.9af3a3fa.js","assets/PhPencil.vue.42cb8c09.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.72952620.js"),["assets/Tables.72952620.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.9af3a3fa.js","assets/string.a3f8150b.js","assets/PhPencil.vue.42cb8c09.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.9f94d7e7.js"),["assets/Sql.9f94d7e7.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/utils.fdaa8bcf.js","assets/PhDownloadSimple.vue.303a31ba.js","assets/toggleHighContrast.d6769a32.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.41222fa3.js"),["assets/ApiKeys.41222fa3.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/asyncComputed.9af3a3fa.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/member.5c843f4a.js","assets/apiKey.f0ad3dc4.js","assets/project.7de37c68.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.89e0e0dd.js"),["assets/Logs.89e0e0dd.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/datetime.c9b09010.js","assets/string.a3f8150b.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.de681d5e.js","assets/LoadingOutlined.03532033.js","assets/dayjs.50333f6e.js","assets/index.0ddeb729.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CollapsePanel.b75cd20d.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.cb0b68df.js"),["assets/ProjectSettings.cb0b68df.js","assets/asyncComputed.9af3a3fa.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/SaveButton.5fa8107b.js","assets/ExclamationCircleOutlined.1e9a658f.js","assets/SaveButton.9c6e367d.css","assets/index.73d3ff24.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.fec6b567.js"),["assets/EnvVars.fec6b567.js","assets/CrudView.b38ff9c6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/index.73d3ff24.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.9af3a3fa.js","assets/PhPencil.vue.42cb8c09.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.59fcfdd9.js"),["assets/Files.59fcfdd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/ContentLayout.735b13db.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.b75212f7.js","assets/ant-design.b88fc035.js","assets/asyncComputed.9af3a3fa.js","assets/gateway.3b159718.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/DeleteOutlined.10fa49d5.js","assets/Card.88ad10bb.js","assets/TabPane.839177e7.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.cc1c3717.js"),["assets/View.cc1c3717.js","assets/asyncComputed.9af3a3fa.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/index.73d3ff24.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fae955a.js","assets/BookOutlined.a88eda51.js","assets/index.4dc75c8d.js","assets/isNumeric.75337b1e.js","assets/CrudView.b38ff9c6.js","assets/url.136adcd3.js","assets/index.f676c6ce.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.42cb8c09.js","assets/repository.fb8468a0.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/fetch.037d63a3.js","assets/record.4cc58db0.js","assets/ant-design.b88fc035.js","assets/TabPane.839177e7.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.f21eee28.js"),["assets/TableEditor.f21eee28.js","assets/BaseLayout.0744469c.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.9af3a3fa.js","assets/PhPencil.vue.42cb8c09.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/index.c069fbee.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/organization.8657e1d3.js","assets/ContentLayout.735b13db.js","assets/ContentLayout.ee57a545.css","assets/ant-design.b88fc035.js","assets/PhCheckCircle.vue.285c7a20.js","assets/index.bb5012db.js","assets/index.73d3ff24.js","assets/index.cc060d26.js","assets/index.4dc75c8d.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.e7971adb.js","assets/LoadingOutlined.03532033.js","assets/DeleteOutlined.10fa49d5.js","assets/DownOutlined.b0a3f606.js","assets/index.f550cb06.js","assets/index.2c5630eb.js","assets/index.f97eb76a.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.c3a952be.js"),["assets/ConnectorEditor.c3a952be.js","assets/BaseLayout.0744469c.js","assets/vue-router.41854a3c.js","assets/vue-router.adb1b88b.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.5fa8107b.js","assets/ExclamationCircleOutlined.1e9a658f.js","assets/SaveButton.9c6e367d.css","assets/asyncComputed.9af3a3fa.js","assets/index.c069fbee.js","assets/gateway.3b159718.js","assets/popupNotifcation.b75212f7.js","assets/record.4cc58db0.js","assets/string.a3f8150b.js","assets/project.7de37c68.js","assets/connector.0ac4d6af.js","assets/organization.8657e1d3.js","assets/TabPane.839177e7.js","assets/index.2c5630eb.js","assets/index.f97eb76a.js","assets/index.73d3ff24.js","assets/index.f550cb06.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.1435b194.js.map
