var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.d92d4544.js";import{C as c,a as w}from"./gateway.593ed864.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="22a2b2d5-acb3-481e-96d7-94479f957504",t._sentryDebugIdIdentifier="sentry-dbid-22a2b2d5-acb3-481e-96d7-94479f957504")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.e6403e39.js"),["assets/WidgetPreview.e6403e39.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/Steps.a9c8ac2b.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.9a79de04.js","assets/colorHelpers.782103ac.js","assets/index.d7435a84.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.9da8c9a5.js"),["assets/Login.9da8c9a5.js","assets/CircularLoading.43413bd4.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/CircularLoading.e156a2b0.css","assets/Logo.985d4d7a.js","assets/Logo.21e86751.css","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/member.c0337f89.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/string.38033d9b.js","assets/Login.39f703eb.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.9672a426.js"),["assets/EditorLogin.9672a426.js","assets/Navbar.46693eff.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.2074ebfe.js","assets/PhChats.vue.ad180264.js","assets/PhSignOut.vue.6e861c33.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/index.d470833a.js","assets/Avatar.444dfc6e.js","assets/index.01b3493e.js","assets/index.f95471f7.js","assets/BookOutlined.1aa8ee25.js","assets/Navbar.a899b0d6.css","assets/url.01a19a72.js","assets/apiKey.a91f2f92.js","assets/organization.418b6c2d.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.055ac9b2.js"),["assets/Organizations.055ac9b2.js","assets/Navbar.46693eff.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.2074ebfe.js","assets/PhChats.vue.ad180264.js","assets/PhSignOut.vue.6e861c33.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/index.d470833a.js","assets/Avatar.444dfc6e.js","assets/index.01b3493e.js","assets/index.f95471f7.js","assets/BookOutlined.1aa8ee25.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.01d20fc6.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.8c7667f2.js","assets/ContentLayout.ee57a545.css","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/CrudView.6b6b336a.css","assets/ant-design.abbc1f96.js","assets/PhArrowSquareOut.vue.1818c42c.js","assets/PhPencil.vue.f8195c47.js","assets/organization.418b6c2d.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/string.38033d9b.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.18ec05b2.js"),["assets/Organization.18ec05b2.js","assets/Navbar.46693eff.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.2074ebfe.js","assets/PhChats.vue.ad180264.js","assets/PhSignOut.vue.6e861c33.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/index.d470833a.js","assets/Avatar.444dfc6e.js","assets/index.01b3493e.js","assets/index.f95471f7.js","assets/BookOutlined.1aa8ee25.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.01d20fc6.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.8c7667f2.js","assets/ContentLayout.ee57a545.css","assets/organization.418b6c2d.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/string.38033d9b.js","assets/Sidebar.c2d99ebd.js","assets/index.02ca4c90.js","assets/Logo.985d4d7a.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.aaa9ddc5.js"),["assets/Projects.aaa9ddc5.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.2074ebfe.js","assets/ant-design.abbc1f96.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/organization.418b6c2d.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.1818c42c.js","assets/PhCopy.vue.f634cbb6.js","assets/PhPencil.vue.f8195c47.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.060cb61d.js"),["assets/Editors.060cb61d.js","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css","assets/ant-design.abbc1f96.js","assets/asyncComputed.2074ebfe.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/member.c0337f89.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/string.38033d9b.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.e69ac558.js"),["assets/Billing.e69ac558.js","assets/asyncComputed.2074ebfe.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/organization.418b6c2d.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/string.38033d9b.js","assets/LoadingContainer.c66216b4.js","assets/LoadingContainer.56fa997a.css","assets/index.255cade6.js","assets/Card.7b880de8.js","assets/TabPane.a28afeba.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.5171f2a7.js"),["assets/Project.5171f2a7.js","assets/Navbar.46693eff.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.2074ebfe.js","assets/PhChats.vue.ad180264.js","assets/PhSignOut.vue.6e861c33.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/index.d470833a.js","assets/Avatar.444dfc6e.js","assets/index.01b3493e.js","assets/index.f95471f7.js","assets/BookOutlined.1aa8ee25.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.01d20fc6.js","assets/BaseLayout.b7a1f19a.css","assets/organization.418b6c2d.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/Sidebar.c2d99ebd.js","assets/index.02ca4c90.js","assets/Logo.985d4d7a.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.8c7667f2.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.efa50aac.js","assets/PhIdentificationBadge.vue.2d8a1fce.js","assets/PhCube.vue.b3f989b5.js","assets/PhGlobe.vue.821940a8.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.652ab0f3.js"),["assets/Live.652ab0f3.js","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.2074ebfe.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/datetime.15d0516c.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/polling.1a083668.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c80fb2d0.js","assets/LoadingOutlined.1ec63560.js","assets/PhArrowCounterClockwise.vue.efa50aac.js","assets/PhArrowSquareOut.vue.1818c42c.js","assets/PhChats.vue.ad180264.js","assets/PhCopySimple.vue.30279dd4.js","assets/PhRocketLaunch.vue.5d674528.js","assets/index.9fb5552d.js","assets/Live.47326f2f.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.0a9c82f1.js"),["assets/Builds.0a9c82f1.js","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.2074ebfe.js","assets/datetime.15d0516c.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/polling.1a083668.js","assets/PhArrowCounterClockwise.vue.efa50aac.js","assets/PhCube.vue.b3f989b5.js","assets/PhDownloadSimple.vue.6ab44840.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/PhWebhooksLogo.vue.1c6962a6.js","assets/index.107378be.js","assets/ExclamationCircleOutlined.a0135afe.js","assets/CloseCircleOutlined.5d3369af.js","assets/LoadingOutlined.1ec63560.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.e87bf5ff.js"),["assets/ConnectorsView.e87bf5ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.de2d0aea.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/Avatar.444dfc6e.js","assets/Card.7b880de8.js","assets/TabPane.a28afeba.js","assets/index.d470833a.js","assets/ConnectorsView.57c087c2.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.a6b4b872.js"),["assets/Tables.a6b4b872.js","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.2074ebfe.js","assets/string.38033d9b.js","assets/PhPencil.vue.f8195c47.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/ant-design.abbc1f96.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.1955c128.js"),["assets/Sql.1955c128.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/utils.e865a65c.js","assets/PhDownloadSimple.vue.6ab44840.js","assets/toggleHighContrast.14a6d43d.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.f7584baf.js"),["assets/ApiKeys.f7584baf.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/asyncComputed.2074ebfe.js","assets/apiKey.a91f2f92.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/member.c0337f89.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.3632a8ff.js"),["assets/Logs.3632a8ff.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/datetime.15d0516c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c80fb2d0.js","assets/LoadingOutlined.1ec63560.js","assets/string.38033d9b.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/dayjs.57197ac6.js","assets/index.d470833a.js","assets/CollapsePanel.0e22bca5.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.dfa8bf7b.js"),["assets/ProjectSettings.dfa8bf7b.js","assets/asyncComputed.2074ebfe.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/SaveButton.911015a6.js","assets/UnsavedChangesHandler.fbe27f2f.js","assets/ExclamationCircleOutlined.a0135afe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.d470833a.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.6cead2bc.js"),["assets/EnvVars.6cead2bc.js","assets/View.vue_vue_type_script_setup_true_lang.724f9351.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/fetch.c6727ad6.js","assets/record.2ab953c0.js","assets/SaveButton.911015a6.js","assets/UnsavedChangesHandler.fbe27f2f.js","assets/ExclamationCircleOutlined.a0135afe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.346094f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/index.d470833a.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.5d674528.js","assets/asyncComputed.2074ebfe.js","assets/polling.1a083668.js","assets/PhPencil.vue.f8195c47.js","assets/index.02ca4c90.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.691f2a4a.js"),["assets/Files.691f2a4a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/ContentLayout.8c7667f2.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.268bc3a1.js","assets/ant-design.abbc1f96.js","assets/asyncComputed.2074ebfe.js","assets/gateway.593ed864.js","assets/tables.22d89707.js","assets/record.2ab953c0.js","assets/string.38033d9b.js","assets/DeleteOutlined.a1d4dab7.js","assets/Card.7b880de8.js","assets/TabPane.a28afeba.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.345c3e28.js"),["assets/View.345c3e28.js","assets/asyncComputed.2074ebfe.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/index.d470833a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1591c0d9.js","assets/BookOutlined.1aa8ee25.js","assets/index.6510e8d2.js","assets/isNumeric.75337b1e.js","assets/CrudView.346094f5.js","assets/url.01a19a72.js","assets/PhDotsThreeVertical.vue.1b55838b.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.f8195c47.js","assets/repository.779787ec.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/fetch.c6727ad6.js","assets/record.2ab953c0.js","assets/ant-design.abbc1f96.js","assets/TabPane.a28afeba.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.b2808c75.js"),["assets/TableEditor.b2808c75.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.de2d0aea.js","assets/vue-router.d92d4544.js","assets/vue-router.3a0fae2e.css","assets/BaseLayout.01d20fc6.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.2074ebfe.js","assets/gateway.593ed864.js","assets/popupNotifcation.268bc3a1.js","assets/organization.418b6c2d.js","assets/project.cccbbe06.js","assets/record.2ab953c0.js","assets/tables.22d89707.js","assets/string.38033d9b.js","assets/ContentLayout.8c7667f2.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.465dda5a.js","assets/index.d7b57a18.js","assets/index.d470833a.js","assets/index.6510e8d2.js","assets/isNumeric.75337b1e.js","assets/ant-design.abbc1f96.js","assets/PhCaretRight.vue.66165309.js","assets/LoadingOutlined.1ec63560.js","assets/index.01b3493e.js","assets/index.f95471f7.js","assets/Avatar.444dfc6e.js","assets/TableEditor.b1663dd4.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.851bae67.js.map
