var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dj as h,dk as u,cL as b,dl as E,h as A,i as g,_ as o,j as w}from"./vue-router.0142926c.js";import{C as c,a as f}from"./gateway.0d2e3cee.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0c2847f5-4247-409f-b578-6a782e78b6d4",t._sentryDebugIdIdentifier="sentry-dbid-0c2847f5-4247-409f-b578-6a782e78b6d4")}catch{}})();const R=m(h),T=m(u);class v{static async getInfo(){return await c.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=A({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.9685f3b2.js"),["assets/WidgetPreview.9685f3b2.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/Steps.4cb18de3.js","assets/index.62930ecc.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.9125c622.js","assets/colorHelpers.abe650a1.js","assets/index.40431953.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.39f22ef1.js"),["assets/Login.39f22ef1.js","assets/CircularLoading.cfcebb3c.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.31264283.js","assets/Logo.ce674d36.js","assets/Logo.03290bf7.css","assets/string.8b46420e.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.4d8903e2.js"),["assets/EditorLogin.4d8903e2.js","assets/Navbar.1a412eeb.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.88bea7bc.js","assets/PhChats.vue.f6e94253.js","assets/PhSignOut.vue.531d1365.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/index.a4a46ce2.js","assets/Avatar.fd9d311a.js","assets/index.20a8d65e.js","assets/index.bdfba88a.js","assets/BookOutlined.e2b529e7.js","assets/Navbar.a899b0d6.css","assets/url.99ccd509.js","assets/apiKey.7071606f.js","assets/organization.da9f7142.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.6528ee58.js"),["assets/Organizations.6528ee58.js","assets/Navbar.1a412eeb.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.88bea7bc.js","assets/PhChats.vue.f6e94253.js","assets/PhSignOut.vue.531d1365.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/index.a4a46ce2.js","assets/Avatar.fd9d311a.js","assets/index.20a8d65e.js","assets/index.bdfba88a.js","assets/BookOutlined.e2b529e7.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.3e42b15b.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.e84ffcba.js","assets/ContentLayout.ee57a545.css","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/CrudView.57fcf015.css","assets/ant-design.1ebce241.js","assets/PhArrowSquareOut.vue.9d729ef8.js","assets/PhPencil.vue.d2a32a54.js","assets/organization.da9f7142.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/string.8b46420e.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.b0b000ae.js"),["assets/Organization.b0b000ae.js","assets/Navbar.1a412eeb.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.88bea7bc.js","assets/PhChats.vue.f6e94253.js","assets/PhSignOut.vue.531d1365.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/index.a4a46ce2.js","assets/Avatar.fd9d311a.js","assets/index.20a8d65e.js","assets/index.bdfba88a.js","assets/BookOutlined.e2b529e7.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.3e42b15b.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.e84ffcba.js","assets/ContentLayout.ee57a545.css","assets/organization.da9f7142.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/string.8b46420e.js","assets/Sidebar.4b932f83.js","assets/index.ca1e914d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.31264283.js","assets/Logo.ce674d36.js","assets/Logo.03290bf7.css","assets/index.0d90aebf.js","assets/Sidebar.e69f49bd.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.94ec47ef.js"),["assets/Projects.94ec47ef.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.88bea7bc.js","assets/ant-design.1ebce241.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/organization.da9f7142.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.9d729ef8.js","assets/PhCopy.vue.48ea4fb3.js","assets/PhPencil.vue.d2a32a54.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.e7f7976d.js"),["assets/Editors.e7f7976d.js","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css","assets/ant-design.1ebce241.js","assets/asyncComputed.88bea7bc.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/member.ba24cca1.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/string.8b46420e.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.6876797d.js"),["assets/Billing.6876797d.js","assets/asyncComputed.88bea7bc.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/organization.da9f7142.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/string.8b46420e.js","assets/LoadingContainer.577469f2.js","assets/LoadingContainer.56fa997a.css","assets/index.0d90aebf.js","assets/Card.d7d382f9.js","assets/TabPane.cfbf7497.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.9dc90e14.js"),["assets/Project.9dc90e14.js","assets/Navbar.1a412eeb.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.88bea7bc.js","assets/PhChats.vue.f6e94253.js","assets/PhSignOut.vue.531d1365.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/index.a4a46ce2.js","assets/Avatar.fd9d311a.js","assets/index.20a8d65e.js","assets/index.bdfba88a.js","assets/BookOutlined.e2b529e7.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.3e42b15b.js","assets/BaseLayout.b7a1f19a.css","assets/organization.da9f7142.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/Sidebar.4b932f83.js","assets/index.ca1e914d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.31264283.js","assets/Logo.ce674d36.js","assets/Logo.03290bf7.css","assets/index.0d90aebf.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.e84ffcba.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.9dff0c44.js","assets/PhIdentificationBadge.vue.fdd428dd.js","assets/PhCube.vue.62d925aa.js","assets/PhGlobe.vue.7fd655ed.js","assets/Project.738d2762.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.7d8699b2.js"),["assets/Live.7d8699b2.js","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css","assets/asyncComputed.88bea7bc.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/datetime.78bb8f24.js","assets/organization.da9f7142.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/polling.457651fa.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b57a1210.js","assets/LoadingOutlined.ce94cebc.js","assets/PhArrowCounterClockwise.vue.9dff0c44.js","assets/PhArrowSquareOut.vue.9d729ef8.js","assets/PhChats.vue.f6e94253.js","assets/PhCopySimple.vue.52daad6a.js","assets/Live.1f5cfa1c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.b706f388.js"),["assets/Builds.b706f388.js","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css","assets/asyncComputed.88bea7bc.js","assets/datetime.78bb8f24.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/polling.457651fa.js","assets/PhArrowCounterClockwise.vue.9dff0c44.js","assets/PhCube.vue.62d925aa.js","assets/PhDownloadSimple.vue.0a5acae5.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/PhWebhooksLogo.vue.79730c72.js","assets/index.cd4bbedf.js","assets/ExclamationCircleOutlined.201fde0e.js","assets/CloseCircleOutlined.db329adb.js","assets/LoadingOutlined.ce94cebc.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.18b05529.js"),["assets/ConnectorsView.18b05529.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.3943f9d3.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/Avatar.fd9d311a.js","assets/Card.d7d382f9.js","assets/TabPane.cfbf7497.js","assets/index.a4a46ce2.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.c39f8f5b.js"),["assets/Tables.c39f8f5b.js","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css","assets/asyncComputed.88bea7bc.js","assets/string.8b46420e.js","assets/PhPencil.vue.d2a32a54.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/ant-design.1ebce241.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.c1d9303b.js"),["assets/Sql.c1d9303b.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/utils.f8a67825.js","assets/PhDownloadSimple.vue.0a5acae5.js","assets/toggleHighContrast.805af9bb.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.bee00ccf.js"),["assets/ApiKeys.bee00ccf.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.88bea7bc.js","assets/apiKey.7071606f.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/member.ba24cca1.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.6462a879.js"),["assets/Logs.6462a879.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/datetime.78bb8f24.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b57a1210.js","assets/LoadingOutlined.ce94cebc.js","assets/string.8b46420e.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/ant-design.1ebce241.js","assets/index.a4a46ce2.js","assets/dayjs.f88f190e.js","assets/CollapsePanel.e9ad1a04.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.529c0b36.js"),["assets/ProjectSettings.529c0b36.js","assets/asyncComputed.88bea7bc.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/SaveButton.fa0c88c1.js","assets/UnsavedChangesHandler.cc57ab3d.js","assets/ExclamationCircleOutlined.201fde0e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.a4a46ce2.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.3f1440dd.js"),["assets/EnvVars.3f1440dd.js","assets/View.vue_vue_type_script_setup_true_lang.a2479009.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/fetch.821c5fc7.js","assets/record.aa55731a.js","assets/SaveButton.fa0c88c1.js","assets/UnsavedChangesHandler.cc57ab3d.js","assets/ExclamationCircleOutlined.201fde0e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.1c8a8772.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/Badge.184a06ec.js","assets/index.a4a46ce2.js","assets/CrudView.57fcf015.css","assets/asyncComputed.88bea7bc.js","assets/polling.457651fa.js","assets/PhPencil.vue.d2a32a54.js","assets/index.ca1e914d.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.578c9029.js"),["assets/Files.578c9029.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/ContentLayout.e84ffcba.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.192cdf4b.js","assets/ant-design.1ebce241.js","assets/asyncComputed.88bea7bc.js","assets/gateway.0d2e3cee.js","assets/tables.e2e8e01d.js","assets/record.aa55731a.js","assets/string.8b46420e.js","assets/DeleteOutlined.edcda1dc.js","assets/Card.d7d382f9.js","assets/TabPane.cfbf7497.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.7b283edc.js"),["assets/View.7b283edc.js","assets/asyncComputed.88bea7bc.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/index.a4a46ce2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.45c85966.js","assets/BookOutlined.e2b529e7.js","assets/index.5aa68e8d.js","assets/Badge.184a06ec.js","assets/CrudView.1c8a8772.js","assets/url.99ccd509.js","assets/PhDotsThreeVertical.vue.1b7a7356.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.d2a32a54.js","assets/repository.dbbd62d0.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/fetch.821c5fc7.js","assets/record.aa55731a.js","assets/ant-design.1ebce241.js","assets/TabPane.cfbf7497.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.257c05d8.js"),["assets/TableEditor.257c05d8.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.3943f9d3.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.3e42b15b.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.88bea7bc.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/organization.da9f7142.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/ContentLayout.e84ffcba.js","assets/ContentLayout.ee57a545.css","assets/index.a4a46ce2.js","assets/index.5aa68e8d.js","assets/Badge.184a06ec.js","assets/PhCheckCircle.vue.09c62183.js","assets/index.a5746e3c.js","assets/PhArrowDown.vue.aec11496.js","assets/ant-design.1ebce241.js","assets/PhCaretRight.vue.60f055c9.js","assets/LoadingOutlined.ce94cebc.js","assets/index.20a8d65e.js","assets/index.bdfba88a.js","assets/Avatar.fd9d311a.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.17d182ac.js"),["assets/WebEditor.17d182ac.js","assets/vue-router.0142926c.js","assets/vue-router.b3bf2b78.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.31264283.js","assets/Logo.ce674d36.js","assets/Logo.03290bf7.css","assets/BaseLayout.3e42b15b.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.821c5fc7.js","assets/gateway.0d2e3cee.js","assets/popupNotifcation.192cdf4b.js","assets/project.1f920dc1.js","assets/record.aa55731a.js","assets/tables.e2e8e01d.js","assets/string.8b46420e.js","assets/WebEditor.bac6e8fe.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{R as A,i as C,P as T,T as a,v as b,p as r};
//# sourceMappingURL=router.34aac783.js.map
