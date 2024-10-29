var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.ddf818f0.js";import{C as c,a as v}from"./gateway.7127c347.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="72daa56a-18e3-41a9-84c3-664ef92a1187",t._sentryDebugIdIdentifier="sentry-dbid-72daa56a-18e3-41a9-84c3-664ef92a1187")}catch{}})();const T=m(h),D=m(u);class f{async getInfo(){return await c.get("authors/info")}}const I=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;l(n,"booted",!1);class P{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new P;class C{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.7def1a7a.js"),["assets/WidgetPreview.7def1a7a.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/Steps.6a1706be.js","assets/index.c82fec65.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.79f13a58.js","assets/colorHelpers.e31c29a1.js","assets/index.cacdad3c.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.e52a824b.js"),["assets/Login.e52a824b.js","assets/CircularLoading.c1dc1ca2.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.6f7d567c.js","assets/Logo.c869826f.js","assets/Logo.03290bf7.css","assets/string.f8a63dfa.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/member.cb8ce3d1.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.66f78216.js"),["assets/EditorLogin.66f78216.js","assets/Navbar.9637c86d.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.dcb6a6ba.js","assets/PhChats.vue.fa04b0a2.js","assets/PhSignOut.vue.c76310e9.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/index.2ce8156d.js","assets/Avatar.560c1bbd.js","assets/index.e6ef6c25.js","assets/index.d0b6a3c5.js","assets/BookOutlined.c06f1300.js","assets/Navbar.a899b0d6.css","assets/url.eec99bb6.js","assets/apiKey.86853266.js","assets/organization.e9db2ca1.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.8bc7d6da.js"),["assets/Organizations.8bc7d6da.js","assets/Navbar.9637c86d.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.dcb6a6ba.js","assets/PhChats.vue.fa04b0a2.js","assets/PhSignOut.vue.c76310e9.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/index.2ce8156d.js","assets/Avatar.560c1bbd.js","assets/index.e6ef6c25.js","assets/index.d0b6a3c5.js","assets/BookOutlined.c06f1300.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.911e897f.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.507963f0.js","assets/ContentLayout.ee57a545.css","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/CrudView.57fcf015.css","assets/ant-design.1fa10241.js","assets/PhArrowSquareOut.vue.206179c8.js","assets/PhPencil.vue.8ce1aa7f.js","assets/organization.e9db2ca1.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/string.f8a63dfa.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.5640828c.js"),["assets/Organization.5640828c.js","assets/Navbar.9637c86d.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.dcb6a6ba.js","assets/PhChats.vue.fa04b0a2.js","assets/PhSignOut.vue.c76310e9.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/index.2ce8156d.js","assets/Avatar.560c1bbd.js","assets/index.e6ef6c25.js","assets/index.d0b6a3c5.js","assets/BookOutlined.c06f1300.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.911e897f.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.507963f0.js","assets/ContentLayout.ee57a545.css","assets/organization.e9db2ca1.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/string.f8a63dfa.js","assets/Sidebar.40ba97ef.js","assets/index.cfc06248.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.6f7d567c.js","assets/Logo.c869826f.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.2597064f.js"),["assets/Projects.2597064f.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.dcb6a6ba.js","assets/ant-design.1fa10241.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/organization.e9db2ca1.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.206179c8.js","assets/PhCopy.vue.19ab5e7f.js","assets/PhPencil.vue.8ce1aa7f.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.5e92ad91.js"),["assets/Editors.5e92ad91.js","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css","assets/ant-design.1fa10241.js","assets/asyncComputed.dcb6a6ba.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/member.cb8ce3d1.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/string.f8a63dfa.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.31f27543.js"),["assets/Billing.31f27543.js","assets/asyncComputed.dcb6a6ba.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/organization.e9db2ca1.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/string.f8a63dfa.js","assets/LoadingContainer.f26568bc.js","assets/LoadingContainer.56fa997a.css","assets/index.450f0fad.js","assets/Card.138189f2.js","assets/TabPane.5f811058.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.fca88359.js"),["assets/Project.fca88359.js","assets/Navbar.9637c86d.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.dcb6a6ba.js","assets/PhChats.vue.fa04b0a2.js","assets/PhSignOut.vue.c76310e9.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/index.2ce8156d.js","assets/Avatar.560c1bbd.js","assets/index.e6ef6c25.js","assets/index.d0b6a3c5.js","assets/BookOutlined.c06f1300.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.911e897f.js","assets/BaseLayout.b7a1f19a.css","assets/organization.e9db2ca1.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/Sidebar.40ba97ef.js","assets/index.cfc06248.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.6f7d567c.js","assets/Logo.c869826f.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.507963f0.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.069b347a.js","assets/PhIdentificationBadge.vue.b2a9e44e.js","assets/PhCube.vue.71e1a544.js","assets/PhGlobe.vue.10eaffd8.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.cf2e8d82.js"),["assets/Live.cf2e8d82.js","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.dcb6a6ba.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/datetime.c5ec6e29.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/polling.a1727685.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5d4d2e43.js","assets/LoadingOutlined.c3223659.js","assets/PhArrowCounterClockwise.vue.069b347a.js","assets/PhArrowSquareOut.vue.206179c8.js","assets/PhChats.vue.fa04b0a2.js","assets/PhCopySimple.vue.65afff3c.js","assets/index.593c55e7.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.fedc7738.js"),["assets/Builds.fedc7738.js","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.dcb6a6ba.js","assets/datetime.c5ec6e29.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/polling.a1727685.js","assets/PhArrowCounterClockwise.vue.069b347a.js","assets/PhCube.vue.71e1a544.js","assets/PhDownloadSimple.vue.c04b9116.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/PhWebhooksLogo.vue.87e0f9c9.js","assets/index.7a1331f9.js","assets/ExclamationCircleOutlined.f1ab0a69.js","assets/CloseCircleOutlined.874dd357.js","assets/LoadingOutlined.c3223659.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.74ac9d6c.js"),["assets/ConnectorsView.74ac9d6c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a60fe40f.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/Avatar.560c1bbd.js","assets/Card.138189f2.js","assets/TabPane.5f811058.js","assets/index.2ce8156d.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.014ce16f.js"),["assets/Tables.014ce16f.js","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.dcb6a6ba.js","assets/string.f8a63dfa.js","assets/PhPencil.vue.8ce1aa7f.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/ant-design.1fa10241.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.cd2071a0.js"),["assets/Sql.cd2071a0.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/utils.de89279b.js","assets/PhDownloadSimple.vue.c04b9116.js","assets/toggleHighContrast.340e27aa.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.cd16ba63.js"),["assets/ApiKeys.cd16ba63.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.dcb6a6ba.js","assets/apiKey.86853266.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/member.cb8ce3d1.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.299ce14e.js"),["assets/Logs.299ce14e.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/datetime.c5ec6e29.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5d4d2e43.js","assets/LoadingOutlined.c3223659.js","assets/string.f8a63dfa.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/ant-design.1fa10241.js","assets/index.2ce8156d.js","assets/dayjs.a0811e54.js","assets/CollapsePanel.d3f7be0c.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.37d9dd34.js"),["assets/ProjectSettings.37d9dd34.js","assets/asyncComputed.dcb6a6ba.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/SaveButton.1dc4ffae.js","assets/UnsavedChangesHandler.f6bb4829.js","assets/ExclamationCircleOutlined.f1ab0a69.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.2ce8156d.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.7a124a42.js"),["assets/EnvVars.7a124a42.js","assets/View.vue_vue_type_script_setup_true_lang.4f0a811f.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/fetch.a4e8f3a2.js","assets/record.41ede930.js","assets/SaveButton.1dc4ffae.js","assets/UnsavedChangesHandler.f6bb4829.js","assets/ExclamationCircleOutlined.f1ab0a69.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.d245d8a0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/Badge.b0a95e20.js","assets/index.2ce8156d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.dcb6a6ba.js","assets/polling.a1727685.js","assets/PhPencil.vue.8ce1aa7f.js","assets/index.cfc06248.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.d6796cc1.js"),["assets/Files.d6796cc1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.507963f0.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.960cdf03.js","assets/ant-design.1fa10241.js","assets/asyncComputed.dcb6a6ba.js","assets/gateway.7127c347.js","assets/tables.190a720a.js","assets/record.41ede930.js","assets/string.f8a63dfa.js","assets/DeleteOutlined.6a4b875d.js","assets/Card.138189f2.js","assets/TabPane.5f811058.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.c54616e1.js"),["assets/View.c54616e1.js","assets/asyncComputed.dcb6a6ba.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/index.2ce8156d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js","assets/BookOutlined.c06f1300.js","assets/index.db490e54.js","assets/Badge.b0a95e20.js","assets/CrudView.d245d8a0.js","assets/url.eec99bb6.js","assets/PhDotsThreeVertical.vue.5ceb3d6e.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.8ce1aa7f.js","assets/repository.56cf3ad8.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/fetch.a4e8f3a2.js","assets/record.41ede930.js","assets/ant-design.1fa10241.js","assets/TabPane.5f811058.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.d324bbe7.js"),["assets/TableEditor.d324bbe7.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a60fe40f.js","assets/vue-router.ddf818f0.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.911e897f.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.dcb6a6ba.js","assets/gateway.7127c347.js","assets/popupNotifcation.960cdf03.js","assets/organization.e9db2ca1.js","assets/project.06d3c1b0.js","assets/record.41ede930.js","assets/tables.190a720a.js","assets/string.f8a63dfa.js","assets/ContentLayout.507963f0.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.2331be81.js","assets/index.16581b06.js","assets/index.2ce8156d.js","assets/index.db490e54.js","assets/Badge.b0a95e20.js","assets/ant-design.1fa10241.js","assets/PhCaretRight.vue.fde8de09.js","assets/PhArrowDown.vue.2528b438.js","assets/LoadingOutlined.c3223659.js","assets/index.e6ef6c25.js","assets/index.d0b6a3c5.js","assets/Avatar.560c1bbd.js","assets/TableEditor.d539c504.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(C.trackPageView(),n.boot())});export{T as A,n as C,C as T,D as a,p as r};
//# sourceMappingURL=router.bf7be5e2.js.map
