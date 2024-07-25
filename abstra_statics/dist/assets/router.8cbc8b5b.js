var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,d1 as h,d2 as u,d3 as b,h as E,i as A,_ as o,j as g}from"./vue-router.c2ee0e91.js";import{C as c,a as f}from"./gateway.bf2cabe4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6f1955ae-78c7-4bad-96bd-56bacb5fef8f",t._sentryDebugIdIdentifier="sentry-dbid-6f1955ae-78c7-4bad-96bd-56bacb5fef8f")}catch{}})();const L=p(h),T=p(u);class w{async getInfo(){return await c.get("authors/info")}}const v=new w,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.0c058da8.js"),["assets/WidgetPreview.0c058da8.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/Steps.63bfa629.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.ba13b6a8.js","assets/WidgetsFrame.295ac367.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.dbf84a95.js"),["assets/Login.dbf84a95.js","assets/CircularLoading.e44d6e9e.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/CircularLoading.e156a2b0.css","assets/Logo.13a34b42.js","assets/Logo.21e86751.css","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/member.c87ce2d2.js","assets/Login.df6b4899.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.8fba5a67.js"),["assets/EditorLogin.8fba5a67.js","assets/Navbar.d29380d8.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/asyncComputed.b8a2ba99.js","assets/PhChats.vue.63e4c612.js","assets/PhSignOut.vue.3b78f028.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/index.00707700.js","assets/index.715b9652.js","assets/index.7d1f32aa.js","assets/BookOutlined.ef7af410.js","assets/Navbar.a899b0d6.css","assets/url.20e63960.js","assets/apiKey.a377ff94.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js","assets/project.50655e27.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.dd91f654.js"),["assets/Organizations.dd91f654.js","assets/Navbar.d29380d8.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/asyncComputed.b8a2ba99.js","assets/PhChats.vue.63e4c612.js","assets/PhSignOut.vue.3b78f028.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/index.00707700.js","assets/index.715b9652.js","assets/index.7d1f32aa.js","assets/BookOutlined.ef7af410.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.456ca956.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.e17b6e2c.js","assets/ContentLayout.ee57a545.css","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/CrudView.80dd6085.css","assets/ant-design.65becd17.js","assets/PhArrowSquareOut.vue.11d177ef.js","assets/PhPencil.vue.baa0c17d.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.b24c0a46.js"),["assets/Organization.b24c0a46.js","assets/Navbar.d29380d8.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/asyncComputed.b8a2ba99.js","assets/PhChats.vue.63e4c612.js","assets/PhSignOut.vue.3b78f028.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/index.00707700.js","assets/index.715b9652.js","assets/index.7d1f32aa.js","assets/BookOutlined.ef7af410.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.456ca956.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.e17b6e2c.js","assets/ContentLayout.ee57a545.css","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js","assets/Sidebar.a5baca8d.js","assets/index.bb5d55bc.js","assets/Logo.13a34b42.js","assets/Logo.21e86751.css","assets/index.98ac79b1.js","assets/Sidebar.b3237e51.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.878470c3.js"),["assets/Projects.878470c3.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/asyncComputed.b8a2ba99.js","assets/ant-design.65becd17.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js","assets/project.50655e27.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.11d177ef.js","assets/PhPencil.vue.baa0c17d.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.b4bea25e.js"),["assets/Editors.b4bea25e.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css","assets/ant-design.65becd17.js","assets/asyncComputed.b8a2ba99.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/member.c87ce2d2.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.3c6fec80.js"),["assets/Billing.3c6fec80.js","assets/asyncComputed.b8a2ba99.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js","assets/LoadingContainer.e3b39c12.js","assets/LoadingContainer.56fa997a.css","assets/index.259224d5.js","assets/Card.9b99e0b9.js","assets/TabPane.e5860f3b.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.73cc7b3c.js"),["assets/Project.73cc7b3c.js","assets/Navbar.d29380d8.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/asyncComputed.b8a2ba99.js","assets/PhChats.vue.63e4c612.js","assets/PhSignOut.vue.3b78f028.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/index.00707700.js","assets/index.715b9652.js","assets/index.7d1f32aa.js","assets/BookOutlined.ef7af410.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.456ca956.js","assets/BaseLayout.0156e9e1.css","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js","assets/project.50655e27.js","assets/Sidebar.a5baca8d.js","assets/index.bb5d55bc.js","assets/Logo.13a34b42.js","assets/Logo.21e86751.css","assets/index.98ac79b1.js","assets/Sidebar.b3237e51.css","assets/ContentLayout.e17b6e2c.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.c61bcf4e.js","assets/PhIdentificationBadge.vue.4629b71e.js","assets/PhCube.vue.7c6e3733.js","assets/PhGlobe.vue.d396ac24.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.5411d316.js"),["assets/Live.5411d316.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css","assets/asyncComputed.b8a2ba99.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/datetime.cae705ff.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/project.50655e27.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.7bd9ad76.js","assets/LoadingOutlined.26b6eddb.js","assets/PhArrowCounterClockwise.vue.c61bcf4e.js","assets/PhArrowSquareOut.vue.11d177ef.js","assets/PhChats.vue.63e4c612.js","assets/PhCopySimple.vue.da9dc07d.js","assets/PhRocketLaunch.vue.fc8a42bf.js","assets/index.cf0efe5f.js","assets/Live.dfeefa78.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.f6a15787.js"),["assets/Builds.f6a15787.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css","assets/asyncComputed.b8a2ba99.js","assets/datetime.cae705ff.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/PhArrowCounterClockwise.vue.c61bcf4e.js","assets/PhCube.vue.7c6e3733.js","assets/PhDownloadSimple.vue.82e7dd2e.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/project.50655e27.js","assets/PhWebhooksLogo.vue.9bfcff10.js","assets/index.f123989c.js","assets/ExclamationCircleOutlined.3acf4d6f.js","assets/CloseCircleOutlined.a891faaf.js","assets/LoadingOutlined.26b6eddb.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.016bc6f4.js"),["assets/Connectors.016bc6f4.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/tables.f86a0e1f.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/connector.5c5b326b.js","assets/asyncComputed.b8a2ba99.js","assets/PhPencil.vue.baa0c17d.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.64e68b66.js"),["assets/Tables.64e68b66.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css","assets/asyncComputed.b8a2ba99.js","assets/string.187ed685.js","assets/PhPencil.vue.baa0c17d.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.22a212ab.js"),["assets/Sql.22a212ab.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/utils.b9b59365.js","assets/PhDownloadSimple.vue.82e7dd2e.js","assets/toggleHighContrast.1d02b4f4.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/project.50655e27.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.8e03f96e.js"),["assets/ApiKeys.8e03f96e.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/asyncComputed.b8a2ba99.js","assets/apiKey.a377ff94.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/member.c87ce2d2.js","assets/project.50655e27.js","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.f5f98d66.js"),["assets/Logs.f5f98d66.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/datetime.cae705ff.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.7bd9ad76.js","assets/LoadingOutlined.26b6eddb.js","assets/dayjs.bfae00f8.js","assets/index.60493e7d.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CollapsePanel.adb7214f.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.2ab10806.js"),["assets/ProjectSettings.2ab10806.js","assets/asyncComputed.b8a2ba99.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/project.50655e27.js","assets/SaveButton.d63329cd.js","assets/ExclamationCircleOutlined.3acf4d6f.js","assets/SaveButton.ae5051de.css","assets/index.00707700.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.ea08eee6.js"),["assets/EnvVars.ea08eee6.js","assets/View.vue_vue_type_script_setup_true_lang.3516fa9a.js","assets/gateway.bf2cabe4.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/popupNotifcation.34667eaf.js","assets/fetch.475b59e7.js","assets/record.7ac8200f.js","assets/SaveButton.d63329cd.js","assets/ExclamationCircleOutlined.3acf4d6f.js","assets/SaveButton.ae5051de.css","assets/CrudView.00b82294.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/index.00707700.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.fc8a42bf.js","assets/asyncComputed.b8a2ba99.js","assets/PhPencil.vue.baa0c17d.js","assets/index.bb5d55bc.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.79f90a35.js"),["assets/Files.79f90a35.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/ContentLayout.e17b6e2c.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.34667eaf.js","assets/ant-design.65becd17.js","assets/asyncComputed.b8a2ba99.js","assets/PhDotsThree.vue.1715c2d0.js","assets/gateway.bf2cabe4.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/DeleteOutlined.dab4140f.js","assets/Card.9b99e0b9.js","assets/TabPane.e5860f3b.js","assets/Files.88cda06a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.22e37ee5.js"),["assets/View.22e37ee5.js","assets/asyncComputed.b8a2ba99.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/index.00707700.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js","assets/BookOutlined.ef7af410.js","assets/index.ae582ac5.js","assets/isNumeric.75337b1e.js","assets/CrudView.00b82294.js","assets/url.20e63960.js","assets/PhDotsThree.vue.1715c2d0.js","assets/index.98ac79b1.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.baa0c17d.js","assets/repository.8d757dd8.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/fetch.475b59e7.js","assets/record.7ac8200f.js","assets/ant-design.65becd17.js","assets/TabPane.e5860f3b.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.e99b95f0.js"),["assets/TableEditor.e99b95f0.js","assets/BaseLayout.456ca956.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.b8a2ba99.js","assets/PhPencil.vue.baa0c17d.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/tables.f86a0e1f.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/organization.0c3ddc28.js","assets/project.50655e27.js","assets/ContentLayout.e17b6e2c.js","assets/ContentLayout.ee57a545.css","assets/ant-design.65becd17.js","assets/PhCheckCircle.vue.bb0178d1.js","assets/index.a56e5fb6.js","assets/index.00707700.js","assets/index.6a72fd83.js","assets/index.ae582ac5.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.46bb7ad3.js","assets/LoadingOutlined.26b6eddb.js","assets/DeleteOutlined.dab4140f.js","assets/DownOutlined.990f1b91.js","assets/index.259224d5.js","assets/index.7d1f32aa.js","assets/index.715b9652.js","assets/TableEditor.44b01422.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.83164189.js"),["assets/ConnectorEditor.83164189.js","assets/BaseLayout.456ca956.js","assets/vue-router.c2ee0e91.js","assets/vue-router.2c5117a9.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.d63329cd.js","assets/ExclamationCircleOutlined.3acf4d6f.js","assets/SaveButton.ae5051de.css","assets/asyncComputed.b8a2ba99.js","assets/tables.f86a0e1f.js","assets/gateway.bf2cabe4.js","assets/popupNotifcation.34667eaf.js","assets/record.7ac8200f.js","assets/string.187ed685.js","assets/connector.5c5b326b.js","assets/organization.0c3ddc28.js","assets/project.50655e27.js","assets/TabPane.e5860f3b.js","assets/index.7d1f32aa.js","assets/index.715b9652.js","assets/index.00707700.js","assets/index.259224d5.js","assets/ConnectorEditor.575aefc3.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.8cbc8b5b.js.map
