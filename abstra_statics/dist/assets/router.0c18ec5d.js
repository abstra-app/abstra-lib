var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,dg as h,dh as u,cI as b,di as E,h as A,i as g,_ as o,j as w}from"./vue-router.324eaed2.js";import{C as c,a as v}from"./gateway.edd4374b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="aa8ee45d-d127-4fd6-8188-bb0176c55145",t._sentryDebugIdIdentifier="sentry-dbid-aa8ee45d-d127-4fd6-8188-bb0176c55145")}catch{}})();const R=p(h),T=p(u);class f{static async getInfo(){return await c.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=A({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.d4229321.js"),["assets/WidgetPreview.d4229321.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/Steps.f9a5ddf6.js","assets/index.0b1755c2.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.8618ed20.js","assets/colorHelpers.78fae216.js","assets/index.40f13cf1.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.f75fa921.js"),["assets/Login.f75fa921.js","assets/CircularLoading.08cb4e45.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.01b1b62c.js","assets/Logo.bfb8cf31.js","assets/Logo.03290bf7.css","assets/string.d698465c.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.2d3ab2ca.js"),["assets/EditorLogin.2d3ab2ca.js","assets/Navbar.b51dae48.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.3916dfed.js","assets/PhChats.vue.42699894.js","assets/PhSignOut.vue.d965d159.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/index.7d758831.js","assets/Avatar.4c029798.js","assets/index.51467614.js","assets/index.ea51f4a9.js","assets/BookOutlined.789cce39.js","assets/Navbar.a899b0d6.css","assets/url.1a1c4e74.js","assets/apiKey.084f4c6e.js","assets/organization.0ae7dfed.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.c5b7c80c.js"),["assets/Organizations.c5b7c80c.js","assets/Navbar.b51dae48.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.3916dfed.js","assets/PhChats.vue.42699894.js","assets/PhSignOut.vue.d965d159.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/index.7d758831.js","assets/Avatar.4c029798.js","assets/index.51467614.js","assets/index.ea51f4a9.js","assets/BookOutlined.789cce39.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.577165c3.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.5465dc16.js","assets/ContentLayout.ee57a545.css","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/CrudView.57fcf015.css","assets/ant-design.48401d91.js","assets/PhArrowSquareOut.vue.2a1b339b.js","assets/PhPencil.vue.91f72c2e.js","assets/organization.0ae7dfed.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/string.d698465c.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.6b4c3407.js"),["assets/Organization.6b4c3407.js","assets/Navbar.b51dae48.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.3916dfed.js","assets/PhChats.vue.42699894.js","assets/PhSignOut.vue.d965d159.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/index.7d758831.js","assets/Avatar.4c029798.js","assets/index.51467614.js","assets/index.ea51f4a9.js","assets/BookOutlined.789cce39.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.577165c3.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.5465dc16.js","assets/ContentLayout.ee57a545.css","assets/organization.0ae7dfed.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/string.d698465c.js","assets/Sidebar.e2719686.js","assets/index.0887bacc.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.01b1b62c.js","assets/Logo.bfb8cf31.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.1ceb3a6f.js"),["assets/Projects.1ceb3a6f.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.3916dfed.js","assets/ant-design.48401d91.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/organization.0ae7dfed.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.2a1b339b.js","assets/PhCopy.vue.b2238e41.js","assets/PhPencil.vue.91f72c2e.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.8a53904a.js"),["assets/Editors.8a53904a.js","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css","assets/ant-design.48401d91.js","assets/asyncComputed.3916dfed.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/member.972d243d.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/string.d698465c.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.e9284aff.js"),["assets/Billing.e9284aff.js","assets/asyncComputed.3916dfed.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/organization.0ae7dfed.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/string.d698465c.js","assets/LoadingContainer.57756ccb.js","assets/LoadingContainer.56fa997a.css","assets/index.341662d4.js","assets/Card.1902bdb7.js","assets/TabPane.caed57de.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.83f68038.js"),["assets/Project.83f68038.js","assets/Navbar.b51dae48.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.3916dfed.js","assets/PhChats.vue.42699894.js","assets/PhSignOut.vue.d965d159.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/index.7d758831.js","assets/Avatar.4c029798.js","assets/index.51467614.js","assets/index.ea51f4a9.js","assets/BookOutlined.789cce39.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.577165c3.js","assets/BaseLayout.b7a1f19a.css","assets/organization.0ae7dfed.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/Sidebar.e2719686.js","assets/index.0887bacc.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.01b1b62c.js","assets/Logo.bfb8cf31.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.5465dc16.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.1fa0c440.js","assets/PhIdentificationBadge.vue.c9ecd119.js","assets/PhCube.vue.38b62bfa.js","assets/PhGlobe.vue.8ad99031.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.84e0b389.js"),["assets/Live.84e0b389.js","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css","assets/asyncComputed.3916dfed.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/datetime.0827e1b6.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/polling.72e5a2f8.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.2f7085a2.js","assets/LoadingOutlined.09a06334.js","assets/PhArrowCounterClockwise.vue.1fa0c440.js","assets/PhArrowSquareOut.vue.2a1b339b.js","assets/PhChats.vue.42699894.js","assets/PhCopySimple.vue.d9faf509.js","assets/index.71c22de0.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.e79ce050.js"),["assets/Builds.e79ce050.js","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css","assets/asyncComputed.3916dfed.js","assets/datetime.0827e1b6.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/polling.72e5a2f8.js","assets/PhArrowCounterClockwise.vue.1fa0c440.js","assets/PhCube.vue.38b62bfa.js","assets/PhDownloadSimple.vue.7ab7df2c.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/PhWebhooksLogo.vue.96003388.js","assets/index.5cae8761.js","assets/ExclamationCircleOutlined.6541b8d4.js","assets/CloseCircleOutlined.6d0d12eb.js","assets/LoadingOutlined.09a06334.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.5ec3c0b4.js"),["assets/ConnectorsView.5ec3c0b4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.691418fd.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/Avatar.4c029798.js","assets/Card.1902bdb7.js","assets/TabPane.caed57de.js","assets/index.7d758831.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.30db1e07.js"),["assets/Tables.30db1e07.js","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css","assets/asyncComputed.3916dfed.js","assets/string.d698465c.js","assets/PhPencil.vue.91f72c2e.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/ant-design.48401d91.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.3456efbe.js"),["assets/Sql.3456efbe.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/utils.6b974807.js","assets/PhDownloadSimple.vue.7ab7df2c.js","assets/toggleHighContrast.4c55b574.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.82582ccf.js"),["assets/ApiKeys.82582ccf.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.3916dfed.js","assets/apiKey.084f4c6e.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/member.972d243d.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.3d0e63a6.js"),["assets/Logs.3d0e63a6.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/datetime.0827e1b6.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.2f7085a2.js","assets/LoadingOutlined.09a06334.js","assets/string.d698465c.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/ant-design.48401d91.js","assets/index.7d758831.js","assets/dayjs.31352634.js","assets/CollapsePanel.ce95f921.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.66d29ed1.js"),["assets/ProjectSettings.66d29ed1.js","assets/asyncComputed.3916dfed.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/SaveButton.17e88f21.js","assets/UnsavedChangesHandler.d2b18117.js","assets/ExclamationCircleOutlined.6541b8d4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.7d758831.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.f9b39c83.js"),["assets/EnvVars.f9b39c83.js","assets/View.vue_vue_type_script_setup_true_lang.4883471d.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/fetch.42a41b34.js","assets/record.cff1707c.js","assets/SaveButton.17e88f21.js","assets/UnsavedChangesHandler.d2b18117.js","assets/ExclamationCircleOutlined.6541b8d4.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.0b1b90a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/Badge.9808092c.js","assets/index.7d758831.js","assets/CrudView.57fcf015.css","assets/asyncComputed.3916dfed.js","assets/polling.72e5a2f8.js","assets/PhPencil.vue.91f72c2e.js","assets/index.0887bacc.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.2c0cf334.js"),["assets/WebEditor.2c0cf334.js","assets/ContentLayout.5465dc16.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.42a41b34.js","assets/CircularLoading.08cb4e45.js","assets/CircularLoading.1a558a0d.css","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/WebEditor.d5fe6ad0.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.710036f9.js"),["assets/Files.710036f9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.5465dc16.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.5a82bc93.js","assets/ant-design.48401d91.js","assets/asyncComputed.3916dfed.js","assets/gateway.edd4374b.js","assets/tables.842b993f.js","assets/record.cff1707c.js","assets/string.d698465c.js","assets/DeleteOutlined.618a8e2f.js","assets/Card.1902bdb7.js","assets/TabPane.caed57de.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.249963d0.js"),["assets/View.249963d0.js","assets/asyncComputed.3916dfed.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/index.7d758831.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js","assets/BookOutlined.789cce39.js","assets/index.fe1d28be.js","assets/Badge.9808092c.js","assets/CrudView.0b1b90a7.js","assets/url.1a1c4e74.js","assets/PhDotsThreeVertical.vue.766b7c1d.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.91f72c2e.js","assets/repository.61a8d769.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/fetch.42a41b34.js","assets/record.cff1707c.js","assets/ant-design.48401d91.js","assets/TabPane.caed57de.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.b7e85598.js"),["assets/TableEditor.b7e85598.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.691418fd.js","assets/vue-router.324eaed2.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.577165c3.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.3916dfed.js","assets/gateway.edd4374b.js","assets/popupNotifcation.5a82bc93.js","assets/organization.0ae7dfed.js","assets/project.a5f62f99.js","assets/record.cff1707c.js","assets/tables.842b993f.js","assets/string.d698465c.js","assets/ContentLayout.5465dc16.js","assets/ContentLayout.ee57a545.css","assets/index.7d758831.js","assets/index.fe1d28be.js","assets/Badge.9808092c.js","assets/PhCheckCircle.vue.b905d38f.js","assets/index.b0999c8c.js","assets/PhArrowDown.vue.8953407d.js","assets/ant-design.48401d91.js","assets/PhCaretRight.vue.70c5f54b.js","assets/LoadingOutlined.09a06334.js","assets/index.51467614.js","assets/index.ea51f4a9.js","assets/Avatar.4c029798.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{R as A,i as C,P as T,T as a,f as b,m as r};
//# sourceMappingURL=router.0c18ec5d.js.map
