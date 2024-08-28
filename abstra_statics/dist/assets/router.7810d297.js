var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.e363248c.js";import{C as c,a as w}from"./gateway.379fcd0d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c70c6081-2628-4619-a5bc-037445de4e42",t._sentryDebugIdIdentifier="sentry-dbid-c70c6081-2628-4619-a5bc-037445de4e42")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.0957bf03.js"),["assets/WidgetPreview.0957bf03.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/Steps.4d77c1cd.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.fcbd7a73.js","assets/colorHelpers.6e51265b.js","assets/index.70d1b24a.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.70fc87ba.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.3fdfafbf.js"),["assets/Login.3fdfafbf.js","assets/CircularLoading.bdd4ccb5.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/CircularLoading.e156a2b0.css","assets/Logo.f12ff395.js","assets/Logo.21e86751.css","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/member.b8100b83.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/string.a4531dc3.js","assets/Login.39f703eb.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.9c36aaf6.js"),["assets/EditorLogin.9c36aaf6.js","assets/Navbar.cd2acf95.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/asyncComputed.8e1f8284.js","assets/PhChats.vue.f7635026.js","assets/PhSignOut.vue.1e8d1e15.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/index.49597fd5.js","assets/Avatar.031287b0.js","assets/index.15aea3aa.js","assets/index.afe1433b.js","assets/BookOutlined.a071a09a.js","assets/Navbar.a899b0d6.css","assets/url.0bf83deb.js","assets/apiKey.405c9e7a.js","assets/organization.c0142497.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.f74541da.js"),["assets/Organizations.f74541da.js","assets/Navbar.cd2acf95.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/asyncComputed.8e1f8284.js","assets/PhChats.vue.f7635026.js","assets/PhSignOut.vue.1e8d1e15.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/index.49597fd5.js","assets/Avatar.031287b0.js","assets/index.15aea3aa.js","assets/index.afe1433b.js","assets/BookOutlined.a071a09a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.0d41c399.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.080e04a2.js","assets/ContentLayout.ee57a545.css","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/CrudView.6b6b336a.css","assets/ant-design.f86b5fd5.js","assets/PhArrowSquareOut.vue.3d574769.js","assets/PhPencil.vue.42d9456b.js","assets/organization.c0142497.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/string.a4531dc3.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.d052eef7.js"),["assets/Organization.d052eef7.js","assets/Navbar.cd2acf95.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/asyncComputed.8e1f8284.js","assets/PhChats.vue.f7635026.js","assets/PhSignOut.vue.1e8d1e15.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/index.49597fd5.js","assets/Avatar.031287b0.js","assets/index.15aea3aa.js","assets/index.afe1433b.js","assets/BookOutlined.a071a09a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.0d41c399.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.080e04a2.js","assets/ContentLayout.ee57a545.css","assets/organization.c0142497.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/string.a4531dc3.js","assets/Sidebar.0a0b1641.js","assets/index.1070e07d.js","assets/Logo.f12ff395.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.5bc5e8c2.js"),["assets/Projects.5bc5e8c2.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/asyncComputed.8e1f8284.js","assets/ant-design.f86b5fd5.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/organization.c0142497.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.3d574769.js","assets/PhCopy.vue.9e06e1d1.js","assets/PhPencil.vue.42d9456b.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.52bd21bd.js"),["assets/Editors.52bd21bd.js","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css","assets/ant-design.f86b5fd5.js","assets/asyncComputed.8e1f8284.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/member.b8100b83.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/string.a4531dc3.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.54942cc2.js"),["assets/Billing.54942cc2.js","assets/asyncComputed.8e1f8284.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/organization.c0142497.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/string.a4531dc3.js","assets/LoadingContainer.42bfd42c.js","assets/LoadingContainer.56fa997a.css","assets/index.d4f57cfb.js","assets/Card.9623e454.js","assets/TabPane.334542d6.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.11b752a4.js"),["assets/Project.11b752a4.js","assets/Navbar.cd2acf95.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/asyncComputed.8e1f8284.js","assets/PhChats.vue.f7635026.js","assets/PhSignOut.vue.1e8d1e15.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/index.49597fd5.js","assets/Avatar.031287b0.js","assets/index.15aea3aa.js","assets/index.afe1433b.js","assets/BookOutlined.a071a09a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.0d41c399.js","assets/BaseLayout.b7a1f19a.css","assets/organization.c0142497.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/Sidebar.0a0b1641.js","assets/index.1070e07d.js","assets/Logo.f12ff395.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.080e04a2.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.8ad8bec0.js","assets/PhIdentificationBadge.vue.be6cd10f.js","assets/PhCube.vue.1631826b.js","assets/PhGlobe.vue.7493a3b1.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.0f9c32ae.js"),["assets/Live.0f9c32ae.js","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.8e1f8284.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/datetime.e906a064.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/polling.9cd503bd.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9947d54a.js","assets/LoadingOutlined.3ea420d1.js","assets/PhArrowCounterClockwise.vue.8ad8bec0.js","assets/PhArrowSquareOut.vue.3d574769.js","assets/PhChats.vue.f7635026.js","assets/PhCopySimple.vue.ebacd999.js","assets/PhRocketLaunch.vue.874f04b4.js","assets/index.d9c7d933.js","assets/Live.47326f2f.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.2b0dd5f1.js"),["assets/Builds.2b0dd5f1.js","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.8e1f8284.js","assets/datetime.e906a064.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/polling.9cd503bd.js","assets/PhArrowCounterClockwise.vue.8ad8bec0.js","assets/PhCube.vue.1631826b.js","assets/PhDownloadSimple.vue.300335be.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/PhWebhooksLogo.vue.d8b847e1.js","assets/index.3b35dbda.js","assets/ExclamationCircleOutlined.646223d1.js","assets/CloseCircleOutlined.dfdc46b2.js","assets/LoadingOutlined.3ea420d1.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.0dacb4c5.js"),["assets/ConnectorsView.0dacb4c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a0842d9d.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/Avatar.031287b0.js","assets/Card.9623e454.js","assets/TabPane.334542d6.js","assets/index.49597fd5.js","assets/ConnectorsView.c9ae7dfb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.6410d3ae.js"),["assets/Tables.6410d3ae.js","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.8e1f8284.js","assets/string.a4531dc3.js","assets/PhPencil.vue.42d9456b.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.0989cd17.js"),["assets/Sql.0989cd17.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/utils.4863cdb8.js","assets/PhDownloadSimple.vue.300335be.js","assets/toggleHighContrast.c32ed6f1.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.562e268a.js"),["assets/ApiKeys.562e268a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/asyncComputed.8e1f8284.js","assets/apiKey.405c9e7a.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/member.b8100b83.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.90a75ebc.js"),["assets/Logs.90a75ebc.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/datetime.e906a064.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9947d54a.js","assets/LoadingOutlined.3ea420d1.js","assets/string.a4531dc3.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/dayjs.8869a6e8.js","assets/index.49597fd5.js","assets/CollapsePanel.47ee6b48.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.3f67d541.js"),["assets/ProjectSettings.3f67d541.js","assets/asyncComputed.8e1f8284.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/SaveButton.7527447f.js","assets/UnsavedChangesHandler.a86dbf45.js","assets/ExclamationCircleOutlined.646223d1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.49597fd5.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.247f97b7.js"),["assets/EnvVars.247f97b7.js","assets/View.vue_vue_type_script_setup_true_lang.3d078da5.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/fetch.7abbb878.js","assets/record.e927e7e3.js","assets/SaveButton.7527447f.js","assets/UnsavedChangesHandler.a86dbf45.js","assets/ExclamationCircleOutlined.646223d1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.713bb82f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/index.49597fd5.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.874f04b4.js","assets/asyncComputed.8e1f8284.js","assets/polling.9cd503bd.js","assets/PhPencil.vue.42d9456b.js","assets/index.1070e07d.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.f2d08098.js"),["assets/Files.f2d08098.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/ContentLayout.080e04a2.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.180ed436.js","assets/ant-design.f86b5fd5.js","assets/asyncComputed.8e1f8284.js","assets/gateway.379fcd0d.js","assets/tables.d83c8f0c.js","assets/record.e927e7e3.js","assets/string.a4531dc3.js","assets/DeleteOutlined.3775f194.js","assets/Card.9623e454.js","assets/TabPane.334542d6.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.22461ae0.js"),["assets/View.22461ae0.js","assets/asyncComputed.8e1f8284.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/index.49597fd5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js","assets/BookOutlined.a071a09a.js","assets/index.af7ff848.js","assets/isNumeric.75337b1e.js","assets/CrudView.713bb82f.js","assets/url.0bf83deb.js","assets/PhDotsThreeVertical.vue.92d1ad63.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.42d9456b.js","assets/repository.28b520d3.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/fetch.7abbb878.js","assets/record.e927e7e3.js","assets/ant-design.f86b5fd5.js","assets/TabPane.334542d6.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.c8be9bcd.js"),["assets/TableEditor.c8be9bcd.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a0842d9d.js","assets/vue-router.e363248c.js","assets/vue-router.78daf255.css","assets/BaseLayout.0d41c399.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.8e1f8284.js","assets/gateway.379fcd0d.js","assets/popupNotifcation.180ed436.js","assets/organization.c0142497.js","assets/project.ecae8adc.js","assets/record.e927e7e3.js","assets/tables.d83c8f0c.js","assets/string.a4531dc3.js","assets/ContentLayout.080e04a2.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.4279348d.js","assets/index.ade8f81a.js","assets/index.49597fd5.js","assets/index.af7ff848.js","assets/isNumeric.75337b1e.js","assets/ant-design.f86b5fd5.js","assets/PhCaretRight.vue.fb454e48.js","assets/LoadingOutlined.3ea420d1.js","assets/index.15aea3aa.js","assets/index.afe1433b.js","assets/Avatar.031287b0.js","assets/TableEditor.5df780ad.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.7810d297.js.map
