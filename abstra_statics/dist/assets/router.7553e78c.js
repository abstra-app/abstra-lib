var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,dg as h,dh as u,cI as b,di as E,h as A,i as g,_ as o,j as w}from"./vue-router.e3ef87f0.js";import{C as c,a as f}from"./gateway.e3730daa.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5ed1f52b-1f22-4ce6-a502-dc53cd73d62c",t._sentryDebugIdIdentifier="sentry-dbid-5ed1f52b-1f22-4ce6-a502-dc53cd73d62c")}catch{}})();const R=p(h),T=p(u);class v{static async getInfo(){return await c.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=A({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.0b590424.js"),["assets/WidgetPreview.0b590424.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/Steps.2bf34f9f.js","assets/index.e543c595.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.d7d0bb7a.js","assets/colorHelpers.68e96910.js","assets/index.0d9beae4.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.3874e383.js"),["assets/Login.3874e383.js","assets/CircularLoading.046b2d5c.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d1e74e3b.js","assets/Logo.19ebe967.js","assets/Logo.03290bf7.css","assets/string.5524ff61.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.6e0e7c03.js"),["assets/EditorLogin.6e0e7c03.js","assets/Navbar.e82054e6.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.e840076d.js","assets/PhChats.vue.e1264b9f.js","assets/PhSignOut.vue.4fb59e20.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/index.45410f8d.js","assets/Avatar.715e2ca3.js","assets/index.74f6e7f5.js","assets/index.6f617d93.js","assets/BookOutlined.2206ef88.js","assets/Navbar.a899b0d6.css","assets/url.d7fc9f74.js","assets/apiKey.eeb482c2.js","assets/organization.365449ea.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.b4791359.js"),["assets/Organizations.b4791359.js","assets/Navbar.e82054e6.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.e840076d.js","assets/PhChats.vue.e1264b9f.js","assets/PhSignOut.vue.4fb59e20.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/index.45410f8d.js","assets/Avatar.715e2ca3.js","assets/index.74f6e7f5.js","assets/index.6f617d93.js","assets/BookOutlined.2206ef88.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.3b732e48.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.9508ac8e.js","assets/ContentLayout.ee57a545.css","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/CrudView.57fcf015.css","assets/ant-design.ab86670b.js","assets/PhArrowSquareOut.vue.a3cf64eb.js","assets/PhPencil.vue.c5b74fb4.js","assets/organization.365449ea.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/string.5524ff61.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.4c80d96e.js"),["assets/Organization.4c80d96e.js","assets/Navbar.e82054e6.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.e840076d.js","assets/PhChats.vue.e1264b9f.js","assets/PhSignOut.vue.4fb59e20.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/index.45410f8d.js","assets/Avatar.715e2ca3.js","assets/index.74f6e7f5.js","assets/index.6f617d93.js","assets/BookOutlined.2206ef88.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.3b732e48.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.9508ac8e.js","assets/ContentLayout.ee57a545.css","assets/organization.365449ea.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/string.5524ff61.js","assets/Sidebar.eae696c3.js","assets/index.38be2fa1.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d1e74e3b.js","assets/Logo.19ebe967.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.48132015.js"),["assets/Projects.48132015.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.e840076d.js","assets/ant-design.ab86670b.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/organization.365449ea.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.a3cf64eb.js","assets/PhCopy.vue.0da0c2a4.js","assets/PhPencil.vue.c5b74fb4.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.bd0869fb.js"),["assets/Editors.bd0869fb.js","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css","assets/ant-design.ab86670b.js","assets/asyncComputed.e840076d.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/member.d7c647e6.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/string.5524ff61.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.b5a0316d.js"),["assets/Billing.b5a0316d.js","assets/asyncComputed.e840076d.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/organization.365449ea.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/string.5524ff61.js","assets/LoadingContainer.e164c4c5.js","assets/LoadingContainer.56fa997a.css","assets/index.cd9b2c78.js","assets/Card.9e74c9cd.js","assets/TabPane.16834058.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.3553a844.js"),["assets/Project.3553a844.js","assets/Navbar.e82054e6.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.e840076d.js","assets/PhChats.vue.e1264b9f.js","assets/PhSignOut.vue.4fb59e20.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/index.45410f8d.js","assets/Avatar.715e2ca3.js","assets/index.74f6e7f5.js","assets/index.6f617d93.js","assets/BookOutlined.2206ef88.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.3b732e48.js","assets/BaseLayout.b7a1f19a.css","assets/organization.365449ea.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/Sidebar.eae696c3.js","assets/index.38be2fa1.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d1e74e3b.js","assets/Logo.19ebe967.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.9508ac8e.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.b57d3f96.js","assets/PhIdentificationBadge.vue.dd8ce310.js","assets/PhCube.vue.d7b5ee47.js","assets/PhGlobe.vue.1818a708.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.d513cb01.js"),["assets/Live.d513cb01.js","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.e840076d.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/datetime.2554fcad.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/polling.9969b38e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a31890c2.js","assets/LoadingOutlined.e83670fa.js","assets/PhArrowCounterClockwise.vue.b57d3f96.js","assets/PhArrowSquareOut.vue.a3cf64eb.js","assets/PhChats.vue.e1264b9f.js","assets/PhCopySimple.vue.b09c29e3.js","assets/index.9e5627c3.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.4be769bc.js"),["assets/Builds.4be769bc.js","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.e840076d.js","assets/datetime.2554fcad.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/polling.9969b38e.js","assets/PhArrowCounterClockwise.vue.b57d3f96.js","assets/PhCube.vue.d7b5ee47.js","assets/PhDownloadSimple.vue.c60d2774.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/PhWebhooksLogo.vue.259f6aaf.js","assets/index.b24d9a98.js","assets/ExclamationCircleOutlined.5cb43a6c.js","assets/CloseCircleOutlined.ac9d90fe.js","assets/LoadingOutlined.e83670fa.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.1b1a6014.js"),["assets/ConnectorsView.1b1a6014.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7d8e6557.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/Avatar.715e2ca3.js","assets/Card.9e74c9cd.js","assets/TabPane.16834058.js","assets/index.45410f8d.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.f5ede054.js"),["assets/Tables.f5ede054.js","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.e840076d.js","assets/string.5524ff61.js","assets/PhPencil.vue.c5b74fb4.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/ant-design.ab86670b.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.65aa56fb.js"),["assets/Sql.65aa56fb.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/utils.2789cdf5.js","assets/PhDownloadSimple.vue.c60d2774.js","assets/toggleHighContrast.e0066c61.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.3a8bceff.js"),["assets/ApiKeys.3a8bceff.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.e840076d.js","assets/apiKey.eeb482c2.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/member.d7c647e6.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.487133a0.js"),["assets/Logs.487133a0.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/datetime.2554fcad.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a31890c2.js","assets/LoadingOutlined.e83670fa.js","assets/string.5524ff61.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/ant-design.ab86670b.js","assets/index.45410f8d.js","assets/dayjs.ad2491a8.js","assets/CollapsePanel.b237cad2.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.7617646e.js"),["assets/ProjectSettings.7617646e.js","assets/asyncComputed.e840076d.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/SaveButton.e9805d23.js","assets/UnsavedChangesHandler.0b7e2325.js","assets/ExclamationCircleOutlined.5cb43a6c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.45410f8d.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.d3d83eff.js"),["assets/EnvVars.d3d83eff.js","assets/View.vue_vue_type_script_setup_true_lang.acd841ee.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/fetch.1531f1e4.js","assets/record.9f354c97.js","assets/SaveButton.e9805d23.js","assets/UnsavedChangesHandler.0b7e2325.js","assets/ExclamationCircleOutlined.5cb43a6c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.6dee12dd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/Badge.e09547ac.js","assets/index.45410f8d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.e840076d.js","assets/polling.9969b38e.js","assets/PhPencil.vue.c5b74fb4.js","assets/index.38be2fa1.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.32bdfc8b.js"),["assets/WebEditor.32bdfc8b.js","assets/ContentLayout.9508ac8e.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.1531f1e4.js","assets/CircularLoading.046b2d5c.js","assets/CircularLoading.1a558a0d.css","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/WebEditor.d5fe6ad0.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.0acebf2a.js"),["assets/Files.0acebf2a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.9508ac8e.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.bf248d47.js","assets/ant-design.ab86670b.js","assets/asyncComputed.e840076d.js","assets/gateway.e3730daa.js","assets/tables.8b5b16f2.js","assets/record.9f354c97.js","assets/string.5524ff61.js","assets/DeleteOutlined.b3749286.js","assets/Card.9e74c9cd.js","assets/TabPane.16834058.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.d3e6e755.js"),["assets/View.d3e6e755.js","assets/asyncComputed.e840076d.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/index.45410f8d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7e26700d.js","assets/BookOutlined.2206ef88.js","assets/index.8b67a975.js","assets/Badge.e09547ac.js","assets/CrudView.6dee12dd.js","assets/url.d7fc9f74.js","assets/PhDotsThreeVertical.vue.4a059a70.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.c5b74fb4.js","assets/repository.cd58f5f2.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/fetch.1531f1e4.js","assets/record.9f354c97.js","assets/ant-design.ab86670b.js","assets/TabPane.16834058.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.3329dca3.js"),["assets/TableEditor.3329dca3.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7d8e6557.js","assets/vue-router.e3ef87f0.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.3b732e48.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.e840076d.js","assets/gateway.e3730daa.js","assets/popupNotifcation.bf248d47.js","assets/organization.365449ea.js","assets/project.1af02886.js","assets/record.9f354c97.js","assets/tables.8b5b16f2.js","assets/string.5524ff61.js","assets/ContentLayout.9508ac8e.js","assets/ContentLayout.ee57a545.css","assets/index.45410f8d.js","assets/index.8b67a975.js","assets/Badge.e09547ac.js","assets/PhCheckCircle.vue.e0058912.js","assets/index.fd6bb800.js","assets/PhArrowDown.vue.a29a48a3.js","assets/ant-design.ab86670b.js","assets/PhCaretRight.vue.2b65875d.js","assets/LoadingOutlined.e83670fa.js","assets/index.74f6e7f5.js","assets/index.6f617d93.js","assets/Avatar.715e2ca3.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{w(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{R as A,i as C,P as T,T as a,v as b,m as r};
//# sourceMappingURL=router.7553e78c.js.map
