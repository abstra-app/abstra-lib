var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as m,dj as h,dk as u,cL as b,dl as E,h as A,i as g,_ as o,j as w}from"./vue-router.0e1aa95c.js";import{C as c,a as f}from"./gateway.2e2716c8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5b2aa2ef-6ab7-429d-aea7-baa328391ccf",t._sentryDebugIdIdentifier="sentry-dbid-5b2aa2ef-6ab7-429d-aea7-baa328391ccf")}catch{}})();const R=m(h),T=m(u);class v{static async getInfo(){return await c.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const p=A({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.e2583f94.js"),["assets/WidgetPreview.e2583f94.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/Steps.b2906a39.js","assets/index.3fbc1136.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.4ae1dd51.js","assets/colorHelpers.a98ca6b8.js","assets/index.0819ea58.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.3f5e83cd.js"),["assets/Login.3f5e83cd.js","assets/CircularLoading.2b3a1c91.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8a8e4944.js","assets/Logo.1820946f.js","assets/Logo.03290bf7.css","assets/string.9c3270e3.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.4ffb9a46.js"),["assets/EditorLogin.4ffb9a46.js","assets/Navbar.ff38a5a9.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.f3a7f772.js","assets/PhChats.vue.e19d511b.js","assets/PhSignOut.vue.d174672c.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/index.87ecf37a.js","assets/Avatar.4003250e.js","assets/index.61bac317.js","assets/index.f6cacca6.js","assets/BookOutlined.aff43295.js","assets/Navbar.a899b0d6.css","assets/url.a8d76a6b.js","assets/apiKey.91462c91.js","assets/organization.f95a3365.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.c7181202.js"),["assets/Organizations.c7181202.js","assets/Navbar.ff38a5a9.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.f3a7f772.js","assets/PhChats.vue.e19d511b.js","assets/PhSignOut.vue.d174672c.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/index.87ecf37a.js","assets/Avatar.4003250e.js","assets/index.61bac317.js","assets/index.f6cacca6.js","assets/BookOutlined.aff43295.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.2b763cda.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.72c13f4d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/CrudView.57fcf015.css","assets/ant-design.349360b9.js","assets/PhArrowSquareOut.vue.c1b2c9ea.js","assets/PhPencil.vue.cb99d5fd.js","assets/organization.f95a3365.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/string.9c3270e3.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.faa401c5.js"),["assets/Organization.faa401c5.js","assets/Navbar.ff38a5a9.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.f3a7f772.js","assets/PhChats.vue.e19d511b.js","assets/PhSignOut.vue.d174672c.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/index.87ecf37a.js","assets/Avatar.4003250e.js","assets/index.61bac317.js","assets/index.f6cacca6.js","assets/BookOutlined.aff43295.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.2b763cda.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.72c13f4d.js","assets/ContentLayout.ee57a545.css","assets/organization.f95a3365.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/string.9c3270e3.js","assets/Sidebar.6badb57c.js","assets/index.de6e3d61.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8a8e4944.js","assets/Logo.1820946f.js","assets/Logo.03290bf7.css","assets/index.72e6a6d7.js","assets/Sidebar.e69f49bd.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.ddd03920.js"),["assets/Projects.ddd03920.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.f3a7f772.js","assets/ant-design.349360b9.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/organization.f95a3365.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.c1b2c9ea.js","assets/PhCopy.vue.685bb3f2.js","assets/PhPencil.vue.cb99d5fd.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.8736b4a3.js"),["assets/Editors.8736b4a3.js","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css","assets/ant-design.349360b9.js","assets/asyncComputed.f3a7f772.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/member.21559434.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/string.9c3270e3.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.bb967a2a.js"),["assets/Billing.bb967a2a.js","assets/asyncComputed.f3a7f772.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/organization.f95a3365.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/string.9c3270e3.js","assets/LoadingContainer.1b6c4d26.js","assets/LoadingContainer.56fa997a.css","assets/index.72e6a6d7.js","assets/Card.8842ff02.js","assets/TabPane.d265292b.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.53782290.js"),["assets/Project.53782290.js","assets/Navbar.ff38a5a9.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.f3a7f772.js","assets/PhChats.vue.e19d511b.js","assets/PhSignOut.vue.d174672c.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/index.87ecf37a.js","assets/Avatar.4003250e.js","assets/index.61bac317.js","assets/index.f6cacca6.js","assets/BookOutlined.aff43295.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.2b763cda.js","assets/BaseLayout.b7a1f19a.css","assets/organization.f95a3365.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/Sidebar.6badb57c.js","assets/index.de6e3d61.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8a8e4944.js","assets/Logo.1820946f.js","assets/Logo.03290bf7.css","assets/index.72e6a6d7.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.72c13f4d.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.31de7853.js","assets/PhIdentificationBadge.vue.24ac1c95.js","assets/PhCube.vue.0e87cb7d.js","assets/PhGlobe.vue.eccdf349.js","assets/Project.738d2762.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.e3b77182.js"),["assets/Live.e3b77182.js","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.f3a7f772.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/datetime.d7e27620.js","assets/organization.f95a3365.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/polling.6cc58059.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f7f404a6.js","assets/LoadingOutlined.4b2a53bd.js","assets/PhArrowCounterClockwise.vue.31de7853.js","assets/PhArrowSquareOut.vue.c1b2c9ea.js","assets/PhChats.vue.e19d511b.js","assets/PhCopySimple.vue.f70522bd.js","assets/Live.1f5cfa1c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.26c2676a.js"),["assets/Builds.26c2676a.js","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.f3a7f772.js","assets/datetime.d7e27620.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/polling.6cc58059.js","assets/PhArrowCounterClockwise.vue.31de7853.js","assets/PhCube.vue.0e87cb7d.js","assets/PhDownloadSimple.vue.f45e2d7e.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/PhWebhooksLogo.vue.0fa5ba05.js","assets/index.772727b9.js","assets/ExclamationCircleOutlined.01fc09e9.js","assets/CloseCircleOutlined.7d1448d2.js","assets/LoadingOutlined.4b2a53bd.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.69bdc817.js"),["assets/ConnectorsView.69bdc817.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1b23b44a.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/Avatar.4003250e.js","assets/Card.8842ff02.js","assets/TabPane.d265292b.js","assets/index.87ecf37a.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.e4640ace.js"),["assets/Tables.e4640ace.js","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.f3a7f772.js","assets/string.9c3270e3.js","assets/PhPencil.vue.cb99d5fd.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/ant-design.349360b9.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.58e1a954.js"),["assets/Sql.58e1a954.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/utils.5b017a7d.js","assets/PhDownloadSimple.vue.f45e2d7e.js","assets/toggleHighContrast.946dc420.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.5abc691d.js"),["assets/ApiKeys.5abc691d.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/asyncComputed.f3a7f772.js","assets/apiKey.91462c91.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/member.21559434.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.98d1fa3f.js"),["assets/Logs.98d1fa3f.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/datetime.d7e27620.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f7f404a6.js","assets/LoadingOutlined.4b2a53bd.js","assets/string.9c3270e3.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/ant-design.349360b9.js","assets/index.87ecf37a.js","assets/dayjs.9d2c12d2.js","assets/CollapsePanel.b9ac2405.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.3c08540a.js"),["assets/ProjectSettings.3c08540a.js","assets/asyncComputed.f3a7f772.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/SaveButton.0d967b85.js","assets/UnsavedChangesHandler.1e2d83bd.js","assets/ExclamationCircleOutlined.01fc09e9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.87ecf37a.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.4a65bcd4.js"),["assets/EnvVars.4a65bcd4.js","assets/View.vue_vue_type_script_setup_true_lang.4ca12afe.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/fetch.7970585b.js","assets/record.f6c0f1bc.js","assets/SaveButton.0d967b85.js","assets/UnsavedChangesHandler.1e2d83bd.js","assets/ExclamationCircleOutlined.01fc09e9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.d55c3f6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/Badge.0833414d.js","assets/index.87ecf37a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.f3a7f772.js","assets/polling.6cc58059.js","assets/PhPencil.vue.cb99d5fd.js","assets/index.de6e3d61.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.eb75c77b.js"),["assets/Files.eb75c77b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/ContentLayout.72c13f4d.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.5f5482dd.js","assets/ant-design.349360b9.js","assets/asyncComputed.f3a7f772.js","assets/gateway.2e2716c8.js","assets/tables.56a8bee9.js","assets/record.f6c0f1bc.js","assets/string.9c3270e3.js","assets/DeleteOutlined.65b61af7.js","assets/Card.8842ff02.js","assets/TabPane.d265292b.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.06b46976.js"),["assets/View.06b46976.js","assets/asyncComputed.f3a7f772.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/index.87ecf37a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a8d6b0fa.js","assets/BookOutlined.aff43295.js","assets/index.fe707ced.js","assets/Badge.0833414d.js","assets/CrudView.d55c3f6e.js","assets/url.a8d76a6b.js","assets/PhDotsThreeVertical.vue.952c186d.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.cb99d5fd.js","assets/repository.b7f18fd1.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/fetch.7970585b.js","assets/record.f6c0f1bc.js","assets/ant-design.349360b9.js","assets/TabPane.d265292b.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.9b980e95.js"),["assets/TableEditor.9b980e95.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1b23b44a.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.2b763cda.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.f3a7f772.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/organization.f95a3365.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/ContentLayout.72c13f4d.js","assets/ContentLayout.ee57a545.css","assets/index.87ecf37a.js","assets/index.fe707ced.js","assets/Badge.0833414d.js","assets/PhCheckCircle.vue.2621ec3c.js","assets/index.6e42c703.js","assets/PhArrowDown.vue.d46b823a.js","assets/ant-design.349360b9.js","assets/PhCaretRight.vue.b9212438.js","assets/LoadingOutlined.4b2a53bd.js","assets/index.61bac317.js","assets/index.f6cacca6.js","assets/Avatar.4003250e.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.820fb705.js"),["assets/WebEditor.820fb705.js","assets/vue-router.0e1aa95c.js","assets/vue-router.b3bf2b78.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.8a8e4944.js","assets/Logo.1820946f.js","assets/Logo.03290bf7.css","assets/BaseLayout.2b763cda.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.7970585b.js","assets/gateway.2e2716c8.js","assets/popupNotifcation.5f5482dd.js","assets/project.67c0a6c7.js","assets/record.f6c0f1bc.js","assets/tables.56a8bee9.js","assets/string.9c3270e3.js","assets/WebEditor.bac6e8fe.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});p.beforeEach(async(t,e)=>{w(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await p.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{R as A,i as C,P as T,T as a,v as b,p as r};
//# sourceMappingURL=router.9011de20.js.map
