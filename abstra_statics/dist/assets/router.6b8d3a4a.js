var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.2201cef6.js";import{C as c,a as f}from"./gateway.7efa8d2d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="40ea80f9-26fa-414e-ba50-b89d574a4797",t._sentryDebugIdIdentifier="sentry-dbid-40ea80f9-26fa-414e-ba50-b89d574a4797")}catch{}})();const T=m(h),D=m(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;l(n,"booted",!1);class P{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new P;class C{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.e73d9667.js"),["assets/WidgetPreview.e73d9667.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/Steps.f6c3d4da.js","assets/index.9e3e4246.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.dff3c7b1.js","assets/colorHelpers.d2a65168.js","assets/index.1f842578.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.5f5c27a0.js"),["assets/Login.5f5c27a0.js","assets/CircularLoading.d9799abe.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.baf2210a.js","assets/Logo.b366616c.js","assets/Logo.03290bf7.css","assets/string.be099367.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/member.e813698d.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.9a972163.js"),["assets/EditorLogin.9a972163.js","assets/Navbar.c02d6f59.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.2115b995.js","assets/PhChats.vue.d46135ea.js","assets/PhSignOut.vue.d2ccd347.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/index.7cac7273.js","assets/Avatar.748c34bd.js","assets/index.0b8816b9.js","assets/index.bbc4edcd.js","assets/BookOutlined.a6671f16.js","assets/Navbar.a899b0d6.css","assets/url.9b355f19.js","assets/apiKey.fb4b6f9f.js","assets/organization.38bc3722.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.4efb8437.js"),["assets/Organizations.4efb8437.js","assets/Navbar.c02d6f59.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.2115b995.js","assets/PhChats.vue.d46135ea.js","assets/PhSignOut.vue.d2ccd347.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/index.7cac7273.js","assets/Avatar.748c34bd.js","assets/index.0b8816b9.js","assets/index.bbc4edcd.js","assets/BookOutlined.a6671f16.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.700c77e2.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.d5fe30f0.js","assets/ContentLayout.ee57a545.css","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/CrudView.57fcf015.css","assets/ant-design.270b4452.js","assets/PhArrowSquareOut.vue.7e37fcf5.js","assets/PhPencil.vue.cd884f9f.js","assets/organization.38bc3722.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/string.be099367.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.6e5f268a.js"),["assets/Organization.6e5f268a.js","assets/Navbar.c02d6f59.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.2115b995.js","assets/PhChats.vue.d46135ea.js","assets/PhSignOut.vue.d2ccd347.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/index.7cac7273.js","assets/Avatar.748c34bd.js","assets/index.0b8816b9.js","assets/index.bbc4edcd.js","assets/BookOutlined.a6671f16.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.700c77e2.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.d5fe30f0.js","assets/ContentLayout.ee57a545.css","assets/organization.38bc3722.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/string.be099367.js","assets/Sidebar.190e8f3e.js","assets/index.2b393750.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.baf2210a.js","assets/Logo.b366616c.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.90d7b988.js"),["assets/Projects.90d7b988.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.2115b995.js","assets/ant-design.270b4452.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/organization.38bc3722.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.7e37fcf5.js","assets/PhCopy.vue.72fd926a.js","assets/PhPencil.vue.cd884f9f.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.438d8818.js"),["assets/Editors.438d8818.js","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css","assets/ant-design.270b4452.js","assets/asyncComputed.2115b995.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/member.e813698d.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/string.be099367.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.5f71c656.js"),["assets/Billing.5f71c656.js","assets/asyncComputed.2115b995.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/organization.38bc3722.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/string.be099367.js","assets/LoadingContainer.4a7081b8.js","assets/LoadingContainer.56fa997a.css","assets/index.7974cb01.js","assets/Card.8ecd4ede.js","assets/TabPane.7dd157a1.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.bf5ff5f9.js"),["assets/Project.bf5ff5f9.js","assets/Navbar.c02d6f59.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.2115b995.js","assets/PhChats.vue.d46135ea.js","assets/PhSignOut.vue.d2ccd347.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/index.7cac7273.js","assets/Avatar.748c34bd.js","assets/index.0b8816b9.js","assets/index.bbc4edcd.js","assets/BookOutlined.a6671f16.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.700c77e2.js","assets/BaseLayout.b7a1f19a.css","assets/organization.38bc3722.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/Sidebar.190e8f3e.js","assets/index.2b393750.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.baf2210a.js","assets/Logo.b366616c.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.d5fe30f0.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.35e59089.js","assets/PhIdentificationBadge.vue.3f7e2dd8.js","assets/PhCube.vue.3f7f41c4.js","assets/PhGlobe.vue.77fb6b0b.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.18565798.js"),["assets/Live.18565798.js","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css","assets/asyncComputed.2115b995.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/datetime.91ed7d8b.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/polling.4ffd289d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.aac9c928.js","assets/LoadingOutlined.28042dfa.js","assets/PhArrowCounterClockwise.vue.35e59089.js","assets/PhArrowSquareOut.vue.7e37fcf5.js","assets/PhChats.vue.d46135ea.js","assets/PhCopySimple.vue.86fee646.js","assets/index.0d6a2ace.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.f524ed74.js"),["assets/Builds.f524ed74.js","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css","assets/asyncComputed.2115b995.js","assets/datetime.91ed7d8b.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/polling.4ffd289d.js","assets/PhArrowCounterClockwise.vue.35e59089.js","assets/PhCube.vue.3f7f41c4.js","assets/PhDownloadSimple.vue.623d9eef.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/PhWebhooksLogo.vue.f2455ef4.js","assets/index.8601ff5f.js","assets/ExclamationCircleOutlined.46d76c10.js","assets/CloseCircleOutlined.e32cd267.js","assets/LoadingOutlined.28042dfa.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.caec0eb4.js"),["assets/ConnectorsView.caec0eb4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5c9338a1.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/Avatar.748c34bd.js","assets/Card.8ecd4ede.js","assets/TabPane.7dd157a1.js","assets/index.7cac7273.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.85003430.js"),["assets/Tables.85003430.js","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css","assets/asyncComputed.2115b995.js","assets/string.be099367.js","assets/PhPencil.vue.cd884f9f.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/ant-design.270b4452.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.c406feea.js"),["assets/Sql.c406feea.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/utils.0e946207.js","assets/PhDownloadSimple.vue.623d9eef.js","assets/toggleHighContrast.4f2b0f64.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.b77a69f5.js"),["assets/ApiKeys.b77a69f5.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.2115b995.js","assets/apiKey.fb4b6f9f.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/member.e813698d.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.1afdacdf.js"),["assets/Logs.1afdacdf.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/datetime.91ed7d8b.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.aac9c928.js","assets/LoadingOutlined.28042dfa.js","assets/string.be099367.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/ant-design.270b4452.js","assets/index.7cac7273.js","assets/dayjs.013fbde9.js","assets/CollapsePanel.b667f890.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.22a052bc.js"),["assets/ProjectSettings.22a052bc.js","assets/asyncComputed.2115b995.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/SaveButton.d5b2bf75.js","assets/UnsavedChangesHandler.82cce6c5.js","assets/ExclamationCircleOutlined.46d76c10.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.7cac7273.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.87a9b9e3.js"),["assets/EnvVars.87a9b9e3.js","assets/View.vue_vue_type_script_setup_true_lang.96ddf622.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/fetch.1f60c70a.js","assets/record.cf38cca3.js","assets/SaveButton.d5b2bf75.js","assets/UnsavedChangesHandler.82cce6c5.js","assets/ExclamationCircleOutlined.46d76c10.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.13e20986.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/Badge.8217c44a.js","assets/index.7cac7273.js","assets/CrudView.57fcf015.css","assets/asyncComputed.2115b995.js","assets/polling.4ffd289d.js","assets/PhPencil.vue.cd884f9f.js","assets/index.2b393750.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.9081582a.js"),["assets/Files.9081582a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.d5fe30f0.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.41bdff57.js","assets/ant-design.270b4452.js","assets/asyncComputed.2115b995.js","assets/gateway.7efa8d2d.js","assets/tables.c5f55659.js","assets/record.cf38cca3.js","assets/string.be099367.js","assets/DeleteOutlined.25147770.js","assets/Card.8ecd4ede.js","assets/TabPane.7dd157a1.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.ba62c490.js"),["assets/View.ba62c490.js","assets/asyncComputed.2115b995.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/index.7cac7273.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a6550171.js","assets/BookOutlined.a6671f16.js","assets/index.470b21fd.js","assets/Badge.8217c44a.js","assets/CrudView.13e20986.js","assets/url.9b355f19.js","assets/PhDotsThreeVertical.vue.beab4f4e.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.cd884f9f.js","assets/repository.ef789d1d.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/fetch.1f60c70a.js","assets/record.cf38cca3.js","assets/ant-design.270b4452.js","assets/TabPane.7dd157a1.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.75efff88.js"),["assets/TableEditor.75efff88.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5c9338a1.js","assets/vue-router.2201cef6.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.700c77e2.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.2115b995.js","assets/gateway.7efa8d2d.js","assets/popupNotifcation.41bdff57.js","assets/organization.38bc3722.js","assets/project.4a2335cc.js","assets/record.cf38cca3.js","assets/tables.c5f55659.js","assets/string.be099367.js","assets/ContentLayout.d5fe30f0.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.ff019516.js","assets/index.ce559730.js","assets/index.7cac7273.js","assets/index.470b21fd.js","assets/Badge.8217c44a.js","assets/ant-design.270b4452.js","assets/PhCaretRight.vue.26bd4b2a.js","assets/PhArrowDown.vue.c4666d9a.js","assets/LoadingOutlined.28042dfa.js","assets/index.0b8816b9.js","assets/index.bbc4edcd.js","assets/Avatar.748c34bd.js","assets/TableEditor.d539c504.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(C.trackPageView(),n.boot())});export{T as A,n as C,C as T,D as a,p as r};
//# sourceMappingURL=router.6b8d3a4a.js.map
