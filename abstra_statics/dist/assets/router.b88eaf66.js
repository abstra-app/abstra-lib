var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dg as h,dh as u,cI as b,di as E,h as g,i as A,_ as o,j as w}from"./vue-router.5caac341.js";import{C as c,a as v}from"./gateway.3f0a368e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1a953240-e4e5-4458-8f05-77ea83182c3c",t._sentryDebugIdIdentifier="sentry-dbid-1a953240-e4e5-4458-8f05-77ea83182c3c")}catch{}})();const R=m(h),T=m(u);class f{static async getInfo(){return await c.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=g({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.de7b3713.js"),["assets/WidgetPreview.de7b3713.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/Steps.d9212cd2.js","assets/index.868b5fb9.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.58b9f005.js","assets/colorHelpers.057f5d78.js","assets/index.f798f57f.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.a9d56732.js"),["assets/Login.a9d56732.js","assets/CircularLoading.ce357ab7.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.de95a2ed.js","assets/Logo.804d21a4.js","assets/Logo.03290bf7.css","assets/string.acc60ba5.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/Login.430d8e74.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.a39cc652.js"),["assets/EditorLogin.a39cc652.js","assets/Navbar.00df3eb1.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.ca1f7f8f.js","assets/PhChats.vue.203d24a4.js","assets/PhSignOut.vue.65e54eab.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/index.6ae42474.js","assets/Avatar.82e30866.js","assets/index.53adeaa2.js","assets/index.2937766a.js","assets/BookOutlined.55f108d5.js","assets/Navbar.a899b0d6.css","assets/url.36400742.js","assets/apiKey.3ef58470.js","assets/organization.88fc1ca6.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.aa83f8a4.js"),["assets/Organizations.aa83f8a4.js","assets/Navbar.00df3eb1.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.ca1f7f8f.js","assets/PhChats.vue.203d24a4.js","assets/PhSignOut.vue.65e54eab.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/index.6ae42474.js","assets/Avatar.82e30866.js","assets/index.53adeaa2.js","assets/index.2937766a.js","assets/BookOutlined.55f108d5.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.2d0515ed.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.73d34738.js","assets/ContentLayout.ee57a545.css","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/CrudView.57fcf015.css","assets/ant-design.3646dc8b.js","assets/PhArrowSquareOut.vue.101e70ef.js","assets/PhPencil.vue.acfd23c8.js","assets/organization.88fc1ca6.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/string.acc60ba5.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.cb64c7fa.js"),["assets/Organization.cb64c7fa.js","assets/Navbar.00df3eb1.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.ca1f7f8f.js","assets/PhChats.vue.203d24a4.js","assets/PhSignOut.vue.65e54eab.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/index.6ae42474.js","assets/Avatar.82e30866.js","assets/index.53adeaa2.js","assets/index.2937766a.js","assets/BookOutlined.55f108d5.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.2d0515ed.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.73d34738.js","assets/ContentLayout.ee57a545.css","assets/organization.88fc1ca6.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/string.acc60ba5.js","assets/Sidebar.a6faf5c5.js","assets/index.31adbaf4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.de95a2ed.js","assets/Logo.804d21a4.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.bc27d638.js"),["assets/Projects.bc27d638.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.ca1f7f8f.js","assets/ant-design.3646dc8b.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/organization.88fc1ca6.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.101e70ef.js","assets/PhCopy.vue.eee2774d.js","assets/PhPencil.vue.acfd23c8.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.6bd335b2.js"),["assets/Editors.6bd335b2.js","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css","assets/ant-design.3646dc8b.js","assets/asyncComputed.ca1f7f8f.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/member.4276e7f7.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/string.acc60ba5.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.5ee2b9d8.js"),["assets/Billing.5ee2b9d8.js","assets/asyncComputed.ca1f7f8f.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/organization.88fc1ca6.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/string.acc60ba5.js","assets/LoadingContainer.07a72f32.js","assets/LoadingContainer.56fa997a.css","assets/index.7c6c62e4.js","assets/Card.ead17fb7.js","assets/TabPane.43e27c05.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.a9789da2.js"),["assets/Project.a9789da2.js","assets/Navbar.00df3eb1.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.ca1f7f8f.js","assets/PhChats.vue.203d24a4.js","assets/PhSignOut.vue.65e54eab.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/index.6ae42474.js","assets/Avatar.82e30866.js","assets/index.53adeaa2.js","assets/index.2937766a.js","assets/BookOutlined.55f108d5.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.2d0515ed.js","assets/BaseLayout.b7a1f19a.css","assets/organization.88fc1ca6.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/Sidebar.a6faf5c5.js","assets/index.31adbaf4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.de95a2ed.js","assets/Logo.804d21a4.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.73d34738.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.d7cadab1.js","assets/PhIdentificationBadge.vue.67a9b37a.js","assets/PhCube.vue.47dba4c0.js","assets/PhGlobe.vue.c1ffaa6a.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.e07b9867.js"),["assets/Live.e07b9867.js","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css","assets/asyncComputed.ca1f7f8f.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/datetime.46f074fe.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/polling.4839c79c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9751b71d.js","assets/LoadingOutlined.36393413.js","assets/PhArrowCounterClockwise.vue.d7cadab1.js","assets/PhArrowSquareOut.vue.101e70ef.js","assets/PhChats.vue.203d24a4.js","assets/PhCopySimple.vue.c2457c11.js","assets/index.2e46946c.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.a30a3481.js"),["assets/Builds.a30a3481.js","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css","assets/asyncComputed.ca1f7f8f.js","assets/datetime.46f074fe.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/polling.4839c79c.js","assets/PhArrowCounterClockwise.vue.d7cadab1.js","assets/PhCube.vue.47dba4c0.js","assets/PhDownloadSimple.vue.f5e2f8d4.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/PhWebhooksLogo.vue.c0ea4abc.js","assets/index.228b9942.js","assets/ExclamationCircleOutlined.c6534b35.js","assets/CloseCircleOutlined.733fd990.js","assets/LoadingOutlined.36393413.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.f53cab21.js"),["assets/ConnectorsView.f53cab21.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ad3c1d59.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/Avatar.82e30866.js","assets/Card.ead17fb7.js","assets/TabPane.43e27c05.js","assets/index.6ae42474.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.56c1533d.js"),["assets/Tables.56c1533d.js","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css","assets/asyncComputed.ca1f7f8f.js","assets/string.acc60ba5.js","assets/PhPencil.vue.acfd23c8.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/ant-design.3646dc8b.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.ca7a96e5.js"),["assets/Sql.ca7a96e5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/utils.20f2e7af.js","assets/PhDownloadSimple.vue.f5e2f8d4.js","assets/toggleHighContrast.09a91a62.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.c4868bb6.js"),["assets/ApiKeys.c4868bb6.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.ca1f7f8f.js","assets/apiKey.3ef58470.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/member.4276e7f7.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.90620e6f.js"),["assets/Logs.90620e6f.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/datetime.46f074fe.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9751b71d.js","assets/LoadingOutlined.36393413.js","assets/string.acc60ba5.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/ant-design.3646dc8b.js","assets/index.6ae42474.js","assets/dayjs.58b46a18.js","assets/CollapsePanel.78e3ab7d.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.21c69fbc.js"),["assets/ProjectSettings.21c69fbc.js","assets/asyncComputed.ca1f7f8f.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/SaveButton.e4896502.js","assets/UnsavedChangesHandler.3ee1195f.js","assets/ExclamationCircleOutlined.c6534b35.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.6ae42474.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.b6652f7a.js"),["assets/EnvVars.b6652f7a.js","assets/View.vue_vue_type_script_setup_true_lang.eed22c61.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/fetch.58beb979.js","assets/record.64316bc1.js","assets/SaveButton.e4896502.js","assets/UnsavedChangesHandler.3ee1195f.js","assets/ExclamationCircleOutlined.c6534b35.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.4110b78a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/Badge.a32da928.js","assets/index.6ae42474.js","assets/CrudView.57fcf015.css","assets/asyncComputed.ca1f7f8f.js","assets/polling.4839c79c.js","assets/PhPencil.vue.acfd23c8.js","assets/index.31adbaf4.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.7f22132d.js"),["assets/Files.7f22132d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.73d34738.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.30fe7450.js","assets/ant-design.3646dc8b.js","assets/asyncComputed.ca1f7f8f.js","assets/gateway.3f0a368e.js","assets/tables.696ec741.js","assets/record.64316bc1.js","assets/string.acc60ba5.js","assets/DeleteOutlined.43f641da.js","assets/Card.ead17fb7.js","assets/TabPane.43e27c05.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.0241e29c.js"),["assets/View.0241e29c.js","assets/asyncComputed.ca1f7f8f.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/index.6ae42474.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e2479e53.js","assets/BookOutlined.55f108d5.js","assets/index.29aa94fd.js","assets/Badge.a32da928.js","assets/CrudView.4110b78a.js","assets/url.36400742.js","assets/PhDotsThreeVertical.vue.3937ba57.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.acfd23c8.js","assets/repository.b3da0db1.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/fetch.58beb979.js","assets/record.64316bc1.js","assets/ant-design.3646dc8b.js","assets/TabPane.43e27c05.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.32ad00c0.js"),["assets/TableEditor.32ad00c0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.ad3c1d59.js","assets/vue-router.5caac341.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.2d0515ed.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.ca1f7f8f.js","assets/gateway.3f0a368e.js","assets/popupNotifcation.30fe7450.js","assets/organization.88fc1ca6.js","assets/project.0d7409e0.js","assets/record.64316bc1.js","assets/tables.696ec741.js","assets/string.acc60ba5.js","assets/ContentLayout.73d34738.js","assets/ContentLayout.ee57a545.css","assets/index.6ae42474.js","assets/index.29aa94fd.js","assets/Badge.a32da928.js","assets/PhCheckCircle.vue.5dd1ffdf.js","assets/index.a01a3c8e.js","assets/PhArrowDown.vue.e3c01361.js","assets/ant-design.3646dc8b.js","assets/PhCaretRight.vue.7b7464b2.js","assets/LoadingOutlined.36393413.js","assets/index.53adeaa2.js","assets/index.2937766a.js","assets/Avatar.82e30866.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{R as A,i as C,P as T,T as a,p as r};
//# sourceMappingURL=router.b88eaf66.js.map
