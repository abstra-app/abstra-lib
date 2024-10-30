var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.05917a31.js";import{C as c,a as v}from"./gateway.a1fbb63a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5542dcd4-5f1a-43a3-9d70-6941b5aac233",t._sentryDebugIdIdentifier="sentry-dbid-5542dcd4-5f1a-43a3-9d70-6941b5aac233")}catch{}})();const T=m(h),D=m(u);class f{async getInfo(){return await c.get("authors/info")}}const I=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;l(n,"booted",!1);class P{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new P;class C{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.e7fdbf1a.js"),["assets/WidgetPreview.e7fdbf1a.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/Steps.996a1521.js","assets/index.ad1285f3.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.96b6069f.js","assets/colorHelpers.711073b0.js","assets/index.d3aabee1.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.b3fe4e6a.js"),["assets/Login.b3fe4e6a.js","assets/CircularLoading.b611179f.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.830cac34.js","assets/Logo.6ced72c4.js","assets/Logo.03290bf7.css","assets/string.8bcd6d61.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/member.01368fa1.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.f9541a27.js"),["assets/EditorLogin.f9541a27.js","assets/Navbar.333acf8e.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.086662ce.js","assets/PhChats.vue.225ba2ab.js","assets/PhSignOut.vue.590d89ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/index.1f2970cc.js","assets/Avatar.abffe316.js","assets/index.bd25e814.js","assets/index.5a03463d.js","assets/BookOutlined.f77c3c76.js","assets/Navbar.a899b0d6.css","assets/url.4694fd4e.js","assets/apiKey.ee9bbd78.js","assets/organization.63f22d2c.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.fb17e0b4.js"),["assets/Organizations.fb17e0b4.js","assets/Navbar.333acf8e.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.086662ce.js","assets/PhChats.vue.225ba2ab.js","assets/PhSignOut.vue.590d89ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/index.1f2970cc.js","assets/Avatar.abffe316.js","assets/index.bd25e814.js","assets/index.5a03463d.js","assets/BookOutlined.f77c3c76.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.5fa7dd7d.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.7900816e.js","assets/ContentLayout.ee57a545.css","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/CrudView.57fcf015.css","assets/ant-design.a1922f96.js","assets/PhArrowSquareOut.vue.06117313.js","assets/PhPencil.vue.ce143ca7.js","assets/organization.63f22d2c.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/string.8bcd6d61.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.0cd14fe1.js"),["assets/Organization.0cd14fe1.js","assets/Navbar.333acf8e.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.086662ce.js","assets/PhChats.vue.225ba2ab.js","assets/PhSignOut.vue.590d89ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/index.1f2970cc.js","assets/Avatar.abffe316.js","assets/index.bd25e814.js","assets/index.5a03463d.js","assets/BookOutlined.f77c3c76.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.5fa7dd7d.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.7900816e.js","assets/ContentLayout.ee57a545.css","assets/organization.63f22d2c.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/string.8bcd6d61.js","assets/Sidebar.7a437062.js","assets/index.7e1e3e3d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.830cac34.js","assets/Logo.6ced72c4.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.88bd6ade.js"),["assets/Projects.88bd6ade.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.086662ce.js","assets/ant-design.a1922f96.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/organization.63f22d2c.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.06117313.js","assets/PhCopy.vue.9d788d84.js","assets/PhPencil.vue.ce143ca7.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.afab22d0.js"),["assets/Editors.afab22d0.js","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css","assets/ant-design.a1922f96.js","assets/asyncComputed.086662ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/member.01368fa1.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/string.8bcd6d61.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.ff251a7b.js"),["assets/Billing.ff251a7b.js","assets/asyncComputed.086662ce.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/organization.63f22d2c.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/string.8bcd6d61.js","assets/LoadingContainer.602b65c7.js","assets/LoadingContainer.56fa997a.css","assets/index.f1fcf4ed.js","assets/Card.3bbd97c9.js","assets/TabPane.cd7f7056.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.e7879822.js"),["assets/Project.e7879822.js","assets/Navbar.333acf8e.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.086662ce.js","assets/PhChats.vue.225ba2ab.js","assets/PhSignOut.vue.590d89ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/index.1f2970cc.js","assets/Avatar.abffe316.js","assets/index.bd25e814.js","assets/index.5a03463d.js","assets/BookOutlined.f77c3c76.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.5fa7dd7d.js","assets/BaseLayout.b7a1f19a.css","assets/organization.63f22d2c.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/Sidebar.7a437062.js","assets/index.7e1e3e3d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.830cac34.js","assets/Logo.6ced72c4.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.7900816e.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.4d5d32be.js","assets/PhIdentificationBadge.vue.cfd8adf2.js","assets/PhCube.vue.763c2dd0.js","assets/PhGlobe.vue.8cfc5b71.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.a5272607.js"),["assets/Live.a5272607.js","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css","assets/asyncComputed.086662ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/datetime.8cd77287.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/polling.3281af2a.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5e85af36.js","assets/LoadingOutlined.1189962e.js","assets/PhArrowCounterClockwise.vue.4d5d32be.js","assets/PhArrowSquareOut.vue.06117313.js","assets/PhChats.vue.225ba2ab.js","assets/PhCopySimple.vue.8db2bbcf.js","assets/index.58a7bd90.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.b5a75c7c.js"),["assets/Builds.b5a75c7c.js","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css","assets/asyncComputed.086662ce.js","assets/datetime.8cd77287.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/polling.3281af2a.js","assets/PhArrowCounterClockwise.vue.4d5d32be.js","assets/PhCube.vue.763c2dd0.js","assets/PhDownloadSimple.vue.b7cd3fce.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/PhWebhooksLogo.vue.3db635b9.js","assets/index.98605ccb.js","assets/ExclamationCircleOutlined.f2dc7208.js","assets/CloseCircleOutlined.75d92fcd.js","assets/LoadingOutlined.1189962e.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.71e0316e.js"),["assets/ConnectorsView.71e0316e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.af21e620.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/Avatar.abffe316.js","assets/Card.3bbd97c9.js","assets/TabPane.cd7f7056.js","assets/index.1f2970cc.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.13a82ecb.js"),["assets/Tables.13a82ecb.js","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css","assets/asyncComputed.086662ce.js","assets/string.8bcd6d61.js","assets/PhPencil.vue.ce143ca7.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/ant-design.a1922f96.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.2be2260a.js"),["assets/Sql.2be2260a.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/utils.eaab1b75.js","assets/PhDownloadSimple.vue.b7cd3fce.js","assets/toggleHighContrast.18bd317a.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.4fe62ed5.js"),["assets/ApiKeys.4fe62ed5.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.086662ce.js","assets/apiKey.ee9bbd78.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/member.01368fa1.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.a85a7fe1.js"),["assets/Logs.a85a7fe1.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/datetime.8cd77287.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5e85af36.js","assets/LoadingOutlined.1189962e.js","assets/string.8bcd6d61.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/ant-design.a1922f96.js","assets/index.1f2970cc.js","assets/dayjs.5c2d9867.js","assets/CollapsePanel.d3de90a4.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.e8bafb91.js"),["assets/ProjectSettings.e8bafb91.js","assets/asyncComputed.086662ce.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/SaveButton.8b0b7e28.js","assets/UnsavedChangesHandler.b6250175.js","assets/ExclamationCircleOutlined.f2dc7208.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.1f2970cc.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.3d00a552.js"),["assets/EnvVars.3d00a552.js","assets/View.vue_vue_type_script_setup_true_lang.58953b8d.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/fetch.caaa0014.js","assets/record.eb59195e.js","assets/SaveButton.8b0b7e28.js","assets/UnsavedChangesHandler.b6250175.js","assets/ExclamationCircleOutlined.f2dc7208.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.e6677b95.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/Badge.0f3a8692.js","assets/index.1f2970cc.js","assets/CrudView.57fcf015.css","assets/asyncComputed.086662ce.js","assets/polling.3281af2a.js","assets/PhPencil.vue.ce143ca7.js","assets/index.7e1e3e3d.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.3651ac54.js"),["assets/Files.3651ac54.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.7900816e.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.2f082304.js","assets/ant-design.a1922f96.js","assets/asyncComputed.086662ce.js","assets/gateway.a1fbb63a.js","assets/tables.9b013cb2.js","assets/record.eb59195e.js","assets/string.8bcd6d61.js","assets/DeleteOutlined.b5e352bd.js","assets/Card.3bbd97c9.js","assets/TabPane.cd7f7056.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.3f7ba68c.js"),["assets/View.3f7ba68c.js","assets/asyncComputed.086662ce.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/index.1f2970cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js","assets/BookOutlined.f77c3c76.js","assets/index.7b1bd76d.js","assets/Badge.0f3a8692.js","assets/CrudView.e6677b95.js","assets/url.4694fd4e.js","assets/PhDotsThreeVertical.vue.bcf222f2.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.ce143ca7.js","assets/repository.5e512691.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/fetch.caaa0014.js","assets/record.eb59195e.js","assets/ant-design.a1922f96.js","assets/TabPane.cd7f7056.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.2ff3033b.js"),["assets/TableEditor.2ff3033b.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.af21e620.js","assets/vue-router.05917a31.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.5fa7dd7d.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.086662ce.js","assets/gateway.a1fbb63a.js","assets/popupNotifcation.2f082304.js","assets/organization.63f22d2c.js","assets/project.b23d7745.js","assets/record.eb59195e.js","assets/tables.9b013cb2.js","assets/string.8bcd6d61.js","assets/ContentLayout.7900816e.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.d6007f78.js","assets/index.c36c1ac9.js","assets/index.1f2970cc.js","assets/index.7b1bd76d.js","assets/Badge.0f3a8692.js","assets/ant-design.a1922f96.js","assets/PhCaretRight.vue.d3b39963.js","assets/PhArrowDown.vue.a861381d.js","assets/LoadingOutlined.1189962e.js","assets/index.bd25e814.js","assets/index.5a03463d.js","assets/Avatar.abffe316.js","assets/TableEditor.d539c504.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(C.trackPageView(),n.boot())});export{T as A,n as C,C as T,D as a,p as r};
//# sourceMappingURL=router.0803badc.js.map
