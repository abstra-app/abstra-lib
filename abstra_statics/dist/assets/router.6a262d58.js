var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.3f5115ec.js";import{C as c,a as v}from"./gateway.933d138e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b1448269-c301-4155-aa32-285512e713e4",t._sentryDebugIdIdentifier="sentry-dbid-b1448269-c301-4155-aa32-285512e713e4")}catch{}})();const T=m(h),D=m(u);class f{async getInfo(){return await c.get("authors/info")}}const I=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;l(n,"booted",!1);class P{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new P;class C{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.6ffac668.js"),["assets/WidgetPreview.6ffac668.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/Steps.e67ee71d.js","assets/index.230a4858.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.a07f3ab9.js","assets/colorHelpers.abcbbc6d.js","assets/index.704ae890.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.75a920bd.js"),["assets/Login.75a920bd.js","assets/CircularLoading.325bd8a2.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.883d0b75.js","assets/Logo.c917fe19.js","assets/Logo.03290bf7.css","assets/string.2d3c90de.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/member.346ca4c1.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/Login.2184f148.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.821660c2.js"),["assets/EditorLogin.821660c2.js","assets/Navbar.0669f4ab.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.683ad793.js","assets/PhChats.vue.2a0bcaf7.js","assets/PhSignOut.vue.a4428c7c.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/index.bd2d6959.js","assets/Avatar.ad043852.js","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/BookOutlined.2b1f33f5.js","assets/Navbar.a899b0d6.css","assets/url.0928bf28.js","assets/apiKey.9ad0c6e1.js","assets/organization.e830c88b.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.9ca5cbe6.js"),["assets/Organizations.9ca5cbe6.js","assets/Navbar.0669f4ab.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.683ad793.js","assets/PhChats.vue.2a0bcaf7.js","assets/PhSignOut.vue.a4428c7c.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/index.bd2d6959.js","assets/Avatar.ad043852.js","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/BookOutlined.2b1f33f5.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.9fb92f72.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/CrudView.2fb0614c.css","assets/ant-design.014e25fe.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/PhPencil.vue.b7c8f283.js","assets/organization.e830c88b.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/string.2d3c90de.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.2e12f61c.js"),["assets/Organization.2e12f61c.js","assets/Navbar.0669f4ab.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.683ad793.js","assets/PhChats.vue.2a0bcaf7.js","assets/PhSignOut.vue.a4428c7c.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/index.bd2d6959.js","assets/Avatar.ad043852.js","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/BookOutlined.2b1f33f5.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.9fb92f72.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/organization.e830c88b.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/string.2d3c90de.js","assets/Sidebar.55a07e4f.js","assets/index.c891f878.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.883d0b75.js","assets/Logo.c917fe19.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.c02f9853.js"),["assets/Projects.c02f9853.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.683ad793.js","assets/ant-design.014e25fe.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/organization.e830c88b.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/PhArrowSquareOut.vue.501c1834.js","assets/PhCopy.vue.552da6a9.js","assets/PhPencil.vue.b7c8f283.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.b87a3159.js"),["assets/Editors.b87a3159.js","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/ant-design.014e25fe.js","assets/asyncComputed.683ad793.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/member.346ca4c1.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/string.2d3c90de.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.629f2239.js"),["assets/Billing.629f2239.js","assets/asyncComputed.683ad793.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/organization.e830c88b.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/string.2d3c90de.js","assets/LoadingContainer.618def4f.js","assets/LoadingContainer.56fa997a.css","assets/index.3cd7a2fc.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.e51ff2d1.js"),["assets/Project.e51ff2d1.js","assets/Navbar.0669f4ab.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.683ad793.js","assets/PhChats.vue.2a0bcaf7.js","assets/PhSignOut.vue.a4428c7c.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/index.bd2d6959.js","assets/Avatar.ad043852.js","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/BookOutlined.2b1f33f5.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.9fb92f72.js","assets/BaseLayout.b7a1f19a.css","assets/organization.e830c88b.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/Sidebar.55a07e4f.js","assets/index.c891f878.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.883d0b75.js","assets/Logo.c917fe19.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.7bed9e0a.js","assets/PhIdentificationBadge.vue.eb58d0f8.js","assets/PhCube.vue.4aee2822.js","assets/PhGlobe.vue.4275f26a.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.0a937688.js"),["assets/Live.0a937688.js","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.683ad793.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/datetime.637a46cd.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/polling.73906994.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c5914771.js","assets/LoadingOutlined.37a8548d.js","assets/PhArrowCounterClockwise.vue.7bed9e0a.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/PhChats.vue.2a0bcaf7.js","assets/PhCopySimple.vue.1a44d76e.js","assets/index.b37c6c91.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.d9f1588d.js"),["assets/Builds.d9f1588d.js","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.683ad793.js","assets/datetime.637a46cd.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/polling.73906994.js","assets/PhArrowCounterClockwise.vue.7bed9e0a.js","assets/PhCube.vue.4aee2822.js","assets/PhDownloadSimple.vue.baa3f604.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/index.b7dea6b8.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/CloseCircleOutlined.7e9d3697.js","assets/LoadingOutlined.37a8548d.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.bc578621.js"),["assets/ConnectorsView.bc578621.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.cdbd5ae4.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/Avatar.ad043852.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/index.bd2d6959.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.5bd9cafe.js"),["assets/Tables.5bd9cafe.js","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.683ad793.js","assets/string.2d3c90de.js","assets/PhPencil.vue.b7c8f283.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/ant-design.014e25fe.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.1d493f51.js"),["assets/Sql.1d493f51.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/utils.4ece8f44.js","assets/PhDownloadSimple.vue.baa3f604.js","assets/toggleHighContrast.bcb9a504.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.b72f36f3.js"),["assets/ApiKeys.b72f36f3.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.683ad793.js","assets/apiKey.9ad0c6e1.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/member.346ca4c1.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.958a2ecb.js"),["assets/Logs.958a2ecb.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/datetime.637a46cd.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c5914771.js","assets/LoadingOutlined.37a8548d.js","assets/string.2d3c90de.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/ant-design.014e25fe.js","assets/index.bd2d6959.js","assets/dayjs.144f14b1.js","assets/CollapsePanel.d8973f7d.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.add360af.js"),["assets/ProjectSettings.add360af.js","assets/asyncComputed.683ad793.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.bd2d6959.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.e11589c5.js"),["assets/EnvVars.e11589c5.js","assets/View.vue_vue_type_script_setup_true_lang.ab8d9247.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/fetch.2f53f269.js","assets/record.95dbab99.js","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.1480e254.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/PhPencil.vue.b7c8f283.js","assets/index.c891f878.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.d02a2d69.js"),["assets/Files.d02a2d69.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.9fa0d68a.js","assets/ant-design.014e25fe.js","assets/asyncComputed.683ad793.js","assets/gateway.933d138e.js","assets/tables.8be3e409.js","assets/record.95dbab99.js","assets/string.2d3c90de.js","assets/DeleteOutlined.f639e474.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.e8241fb3.js"),["assets/View.e8241fb3.js","assets/asyncComputed.683ad793.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/index.bd2d6959.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/index.d4a05fe7.js","assets/Badge.4fcefc44.js","assets/CrudView.1480e254.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/CrudView.2fb0614c.css","assets/PhPencil.vue.b7c8f283.js","assets/repository.b2d70054.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/fetch.2f53f269.js","assets/record.95dbab99.js","assets/ant-design.014e25fe.js","assets/TabPane.7b48643d.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.6e03e420.js"),["assets/TableEditor.6e03e420.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.cdbd5ae4.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.9fb92f72.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.683ad793.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/organization.e830c88b.js","assets/project.6ea70e93.js","assets/record.95dbab99.js","assets/tables.8be3e409.js","assets/string.2d3c90de.js","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.43552d09.js","assets/index.b2f7af47.js","assets/index.bd2d6959.js","assets/index.d4a05fe7.js","assets/Badge.4fcefc44.js","assets/ant-design.014e25fe.js","assets/PhCaretRight.vue.7ceecb67.js","assets/PhArrowDown.vue.85a5c3e4.js","assets/LoadingOutlined.37a8548d.js","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/Avatar.ad043852.js","assets/TableEditor.d539c504.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(C.trackPageView(),n.boot())});export{T as A,n as C,C as T,D as a,p as r};
//# sourceMappingURL=router.6a262d58.js.map
