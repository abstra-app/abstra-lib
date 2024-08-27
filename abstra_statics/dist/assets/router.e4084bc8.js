var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.9969f581.js";import{C as c,a as w}from"./gateway.baeb206e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8bc63509-0cc0-4d13-a5ae-7f523604b8bc",t._sentryDebugIdIdentifier="sentry-dbid-8bc63509-0cc0-4d13-a5ae-7f523604b8bc")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.1230bbe5.js"),["assets/WidgetPreview.1230bbe5.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/Steps.c8a3dac4.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.5ec7c462.js","assets/colorHelpers.8bb9b5eb.js","assets/index.c421ee6e.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.70fc87ba.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.2b08f5d3.js"),["assets/Login.2b08f5d3.js","assets/CircularLoading.04bc0ef0.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/CircularLoading.e156a2b0.css","assets/Logo.ddc6058d.js","assets/Logo.21e86751.css","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/member.9c83506d.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/string.a303b23b.js","assets/Login.39f703eb.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.7218f91c.js"),["assets/EditorLogin.7218f91c.js","assets/Navbar.1c35deb1.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/asyncComputed.97c3d3e9.js","assets/PhChats.vue.a1bf7555.js","assets/PhSignOut.vue.5223922e.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/index.ee6a5a51.js","assets/Avatar.19c05e15.js","assets/index.2e40f2d4.js","assets/index.5c2e1a82.js","assets/BookOutlined.b8dec585.js","assets/Navbar.a899b0d6.css","assets/url.118bde72.js","assets/apiKey.ed185016.js","assets/organization.9330ee2c.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.25ec3f4f.js"),["assets/Organizations.25ec3f4f.js","assets/Navbar.1c35deb1.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/asyncComputed.97c3d3e9.js","assets/PhChats.vue.a1bf7555.js","assets/PhSignOut.vue.5223922e.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/index.ee6a5a51.js","assets/Avatar.19c05e15.js","assets/index.2e40f2d4.js","assets/index.5c2e1a82.js","assets/BookOutlined.b8dec585.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.98b3999c.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.644be2cd.js","assets/ContentLayout.ee57a545.css","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/CrudView.6b6b336a.css","assets/ant-design.f08a637d.js","assets/PhArrowSquareOut.vue.d60746c3.js","assets/PhPencil.vue.2a07d849.js","assets/organization.9330ee2c.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/string.a303b23b.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.630ab652.js"),["assets/Organization.630ab652.js","assets/Navbar.1c35deb1.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/asyncComputed.97c3d3e9.js","assets/PhChats.vue.a1bf7555.js","assets/PhSignOut.vue.5223922e.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/index.ee6a5a51.js","assets/Avatar.19c05e15.js","assets/index.2e40f2d4.js","assets/index.5c2e1a82.js","assets/BookOutlined.b8dec585.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.98b3999c.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.644be2cd.js","assets/ContentLayout.ee57a545.css","assets/organization.9330ee2c.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/string.a303b23b.js","assets/Sidebar.de25fa56.js","assets/index.fdba6297.js","assets/Logo.ddc6058d.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.966dc97f.js"),["assets/Projects.966dc97f.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/asyncComputed.97c3d3e9.js","assets/ant-design.f08a637d.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/organization.9330ee2c.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.d60746c3.js","assets/PhCopy.vue.7dfb163a.js","assets/PhPencil.vue.2a07d849.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.a23b7b3e.js"),["assets/Editors.a23b7b3e.js","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css","assets/ant-design.f08a637d.js","assets/asyncComputed.97c3d3e9.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/member.9c83506d.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/string.a303b23b.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.cac391d4.js"),["assets/Billing.cac391d4.js","assets/asyncComputed.97c3d3e9.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/organization.9330ee2c.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/string.a303b23b.js","assets/LoadingContainer.1ba273ab.js","assets/LoadingContainer.56fa997a.css","assets/index.fd05d511.js","assets/Card.fe45bb7f.js","assets/TabPane.55222ec1.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.db29d3eb.js"),["assets/Project.db29d3eb.js","assets/Navbar.1c35deb1.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/asyncComputed.97c3d3e9.js","assets/PhChats.vue.a1bf7555.js","assets/PhSignOut.vue.5223922e.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/index.ee6a5a51.js","assets/Avatar.19c05e15.js","assets/index.2e40f2d4.js","assets/index.5c2e1a82.js","assets/BookOutlined.b8dec585.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.98b3999c.js","assets/BaseLayout.b7a1f19a.css","assets/organization.9330ee2c.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/Sidebar.de25fa56.js","assets/index.fdba6297.js","assets/Logo.ddc6058d.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.644be2cd.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.1cfe2eba.js","assets/PhIdentificationBadge.vue.82cc0c96.js","assets/PhCube.vue.beba4c32.js","assets/PhGlobe.vue.96f644be.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.d3fc617d.js"),["assets/Live.d3fc617d.js","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.97c3d3e9.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/datetime.6c3a3bee.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/polling.41b98bf6.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.8a867ea9.js","assets/LoadingOutlined.d229c324.js","assets/PhArrowCounterClockwise.vue.1cfe2eba.js","assets/PhArrowSquareOut.vue.d60746c3.js","assets/PhChats.vue.a1bf7555.js","assets/PhCopySimple.vue.b5b1670a.js","assets/PhRocketLaunch.vue.1c01df9d.js","assets/index.d31c04bc.js","assets/Live.47326f2f.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.66e92f3f.js"),["assets/Builds.66e92f3f.js","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.97c3d3e9.js","assets/datetime.6c3a3bee.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/polling.41b98bf6.js","assets/PhArrowCounterClockwise.vue.1cfe2eba.js","assets/PhCube.vue.beba4c32.js","assets/PhDownloadSimple.vue.881fd4e0.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/PhWebhooksLogo.vue.f3b1943d.js","assets/index.9ed83a58.js","assets/ExclamationCircleOutlined.b33dfa8f.js","assets/CloseCircleOutlined.240f1520.js","assets/LoadingOutlined.d229c324.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.c7f55a65.js"),["assets/ConnectorsView.c7f55a65.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.fa24be9e.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/Avatar.19c05e15.js","assets/Card.fe45bb7f.js","assets/TabPane.55222ec1.js","assets/index.ee6a5a51.js","assets/ConnectorsView.c9ae7dfb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.00a50045.js"),["assets/Tables.00a50045.js","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.97c3d3e9.js","assets/string.a303b23b.js","assets/PhPencil.vue.2a07d849.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.dc7fbbdc.js"),["assets/Sql.dc7fbbdc.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/utils.32fc7a6f.js","assets/PhDownloadSimple.vue.881fd4e0.js","assets/toggleHighContrast.abad775d.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.6ad20d94.js"),["assets/ApiKeys.6ad20d94.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/asyncComputed.97c3d3e9.js","assets/apiKey.ed185016.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/member.9c83506d.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.c1cd3388.js"),["assets/Logs.c1cd3388.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/datetime.6c3a3bee.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.8a867ea9.js","assets/LoadingOutlined.d229c324.js","assets/string.a303b23b.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/dayjs.b430a730.js","assets/index.ee6a5a51.js","assets/CollapsePanel.be6fa7c7.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.1f0edbed.js"),["assets/ProjectSettings.1f0edbed.js","assets/asyncComputed.97c3d3e9.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/SaveButton.af417fad.js","assets/UnsavedChangesHandler.a7f4d72d.js","assets/ExclamationCircleOutlined.b33dfa8f.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.ee6a5a51.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.499233bc.js"),["assets/EnvVars.499233bc.js","assets/View.vue_vue_type_script_setup_true_lang.c2cb15ca.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/fetch.30087909.js","assets/record.5020bbf3.js","assets/SaveButton.af417fad.js","assets/UnsavedChangesHandler.a7f4d72d.js","assets/ExclamationCircleOutlined.b33dfa8f.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.36ad9ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/index.ee6a5a51.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.1c01df9d.js","assets/asyncComputed.97c3d3e9.js","assets/polling.41b98bf6.js","assets/PhPencil.vue.2a07d849.js","assets/index.fdba6297.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.cf9d1e02.js"),["assets/Files.cf9d1e02.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/ContentLayout.644be2cd.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.124326d3.js","assets/ant-design.f08a637d.js","assets/asyncComputed.97c3d3e9.js","assets/gateway.baeb206e.js","assets/tables.a85eb8db.js","assets/record.5020bbf3.js","assets/string.a303b23b.js","assets/DeleteOutlined.815ce6c5.js","assets/Card.fe45bb7f.js","assets/TabPane.55222ec1.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.eb2dd42a.js"),["assets/View.eb2dd42a.js","assets/asyncComputed.97c3d3e9.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/index.ee6a5a51.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.dcf7d8ed.js","assets/BookOutlined.b8dec585.js","assets/index.0e44cdbb.js","assets/isNumeric.75337b1e.js","assets/CrudView.36ad9ded.js","assets/url.118bde72.js","assets/PhDotsThreeVertical.vue.08f267f3.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.2a07d849.js","assets/repository.ff4e4ccc.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/fetch.30087909.js","assets/record.5020bbf3.js","assets/ant-design.f08a637d.js","assets/TabPane.55222ec1.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.3b4cc578.js"),["assets/TableEditor.3b4cc578.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.fa24be9e.js","assets/vue-router.9969f581.js","assets/vue-router.f97ff4cf.css","assets/BaseLayout.98b3999c.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.97c3d3e9.js","assets/gateway.baeb206e.js","assets/popupNotifcation.124326d3.js","assets/organization.9330ee2c.js","assets/project.d16c5186.js","assets/record.5020bbf3.js","assets/tables.a85eb8db.js","assets/string.a303b23b.js","assets/ContentLayout.644be2cd.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.e2796c46.js","assets/index.7b48e44c.js","assets/index.ee6a5a51.js","assets/index.0e44cdbb.js","assets/isNumeric.75337b1e.js","assets/ant-design.f08a637d.js","assets/PhCaretRight.vue.f3f21718.js","assets/LoadingOutlined.d229c324.js","assets/index.2e40f2d4.js","assets/index.5c2e1a82.js","assets/Avatar.19c05e15.js","assets/TableEditor.5df780ad.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.e4084bc8.js.map
