var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,dg as h,dh as u,cI as b,di as E,h as A,i as g,_ as o,j as w}from"./vue-router.33f35a18.js";import{C as c,a as f}from"./gateway.a5388860.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="15ca4f3c-f9b1-46a1-8389-97cb84800e57",t._sentryDebugIdIdentifier="sentry-dbid-15ca4f3c-f9b1-46a1-8389-97cb84800e57")}catch{}})();const R=p(h),T=p(u);class v{static async getInfo(){return await c.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):b.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),E(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=A({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.3da8c1f3.js"),["assets/WidgetPreview.3da8c1f3.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/Steps.677c01d2.js","assets/index.b3a210ed.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.90e436c2.js","assets/colorHelpers.aaea81c6.js","assets/index.dec2a631.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.f5bae42f.js"),["assets/Login.f5bae42f.js","assets/CircularLoading.1c6a1f61.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.6453729f.js","assets/Logo.389f375b.js","assets/Logo.03290bf7.css","assets/string.44188c83.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.c4b4f37d.js"),["assets/EditorLogin.c4b4f37d.js","assets/Navbar.ccb4b57b.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.c677c545.js","assets/PhChats.vue.b6dd7b5a.js","assets/PhSignOut.vue.b806976f.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/index.241ee38a.js","assets/Avatar.dcb46dd7.js","assets/index.6db53852.js","assets/index.8f5819bb.js","assets/BookOutlined.767e0e7a.js","assets/Navbar.a899b0d6.css","assets/url.b6644346.js","assets/apiKey.c5bb4529.js","assets/organization.efcc2606.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.d3cffe0c.js"),["assets/Organizations.d3cffe0c.js","assets/Navbar.ccb4b57b.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.c677c545.js","assets/PhChats.vue.b6dd7b5a.js","assets/PhSignOut.vue.b806976f.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/index.241ee38a.js","assets/Avatar.dcb46dd7.js","assets/index.6db53852.js","assets/index.8f5819bb.js","assets/BookOutlined.767e0e7a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4967fc3d.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.d691ad7a.js","assets/ContentLayout.ee57a545.css","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/CrudView.57fcf015.css","assets/ant-design.51753590.js","assets/PhArrowSquareOut.vue.03bd374b.js","assets/PhPencil.vue.2def7849.js","assets/organization.efcc2606.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/string.44188c83.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.bd4dcbcb.js"),["assets/Organization.bd4dcbcb.js","assets/Navbar.ccb4b57b.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.c677c545.js","assets/PhChats.vue.b6dd7b5a.js","assets/PhSignOut.vue.b806976f.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/index.241ee38a.js","assets/Avatar.dcb46dd7.js","assets/index.6db53852.js","assets/index.8f5819bb.js","assets/BookOutlined.767e0e7a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4967fc3d.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.d691ad7a.js","assets/ContentLayout.ee57a545.css","assets/organization.efcc2606.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/string.44188c83.js","assets/Sidebar.715517e4.js","assets/index.f014adef.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.6453729f.js","assets/Logo.389f375b.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.8eff7fab.js"),["assets/Projects.8eff7fab.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.c677c545.js","assets/ant-design.51753590.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/organization.efcc2606.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css","assets/PhArrowSquareOut.vue.03bd374b.js","assets/PhCopy.vue.edaabc1e.js","assets/PhPencil.vue.2def7849.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.4b67db49.js"),["assets/Editors.4b67db49.js","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css","assets/ant-design.51753590.js","assets/asyncComputed.c677c545.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/member.65b6f588.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/string.44188c83.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.0e7f5307.js"),["assets/Billing.0e7f5307.js","assets/asyncComputed.c677c545.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/organization.efcc2606.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/string.44188c83.js","assets/LoadingContainer.4ab818eb.js","assets/LoadingContainer.56fa997a.css","assets/index.2fc2bb22.js","assets/Card.639eca4a.js","assets/TabPane.1080fde7.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.8dd333e0.js"),["assets/Project.8dd333e0.js","assets/Navbar.ccb4b57b.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.c677c545.js","assets/PhChats.vue.b6dd7b5a.js","assets/PhSignOut.vue.b806976f.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/index.241ee38a.js","assets/Avatar.dcb46dd7.js","assets/index.6db53852.js","assets/index.8f5819bb.js","assets/BookOutlined.767e0e7a.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.4967fc3d.js","assets/BaseLayout.b7a1f19a.css","assets/organization.efcc2606.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/Sidebar.715517e4.js","assets/index.f014adef.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.6453729f.js","assets/Logo.389f375b.js","assets/Logo.03290bf7.css","assets/Sidebar.c9538fe0.css","assets/ContentLayout.d691ad7a.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.4a7ab991.js","assets/PhIdentificationBadge.vue.45493857.js","assets/PhCube.vue.9942e1ba.js","assets/PhGlobe.vue.5d1ae5ae.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.bbe6ff62.js"),["assets/Live.bbe6ff62.js","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.c677c545.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/datetime.2a4e2aaa.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/polling.3587342a.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3ec7ec82.js","assets/LoadingOutlined.64419cb9.js","assets/PhArrowCounterClockwise.vue.4a7ab991.js","assets/PhArrowSquareOut.vue.03bd374b.js","assets/PhChats.vue.b6dd7b5a.js","assets/PhCopySimple.vue.b5d1b25b.js","assets/index.db3c211c.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.e212bca7.js"),["assets/Builds.e212bca7.js","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.c677c545.js","assets/datetime.2a4e2aaa.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/polling.3587342a.js","assets/PhArrowCounterClockwise.vue.4a7ab991.js","assets/PhCube.vue.9942e1ba.js","assets/PhDownloadSimple.vue.b11b5d9f.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/PhWebhooksLogo.vue.4375a0bc.js","assets/index.f9edb8af.js","assets/ExclamationCircleOutlined.d41cf1d8.js","assets/CloseCircleOutlined.1d6fe2b1.js","assets/LoadingOutlined.64419cb9.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.d2fcad20.js"),["assets/ConnectorsView.d2fcad20.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f3ac9724.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/Avatar.dcb46dd7.js","assets/Card.639eca4a.js","assets/TabPane.1080fde7.js","assets/index.241ee38a.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.b3156a21.js"),["assets/Tables.b3156a21.js","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.c677c545.js","assets/string.44188c83.js","assets/PhPencil.vue.2def7849.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/ant-design.51753590.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.23406959.js"),["assets/Sql.23406959.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/utils.3ec7e4d1.js","assets/PhDownloadSimple.vue.b11b5d9f.js","assets/toggleHighContrast.aa328f74.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/Sql.8ce6a064.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.c8e0c349.js"),["assets/ApiKeys.c8e0c349.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/asyncComputed.c677c545.js","assets/apiKey.c5bb4529.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/member.65b6f588.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.20ee4b75.js"),["assets/Logs.20ee4b75.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/datetime.2a4e2aaa.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3ec7ec82.js","assets/LoadingOutlined.64419cb9.js","assets/string.44188c83.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/ant-design.51753590.js","assets/index.241ee38a.js","assets/dayjs.1e9ba65b.js","assets/CollapsePanel.56bdec23.js","assets/Logs.862ab706.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.a3766a88.js"),["assets/ProjectSettings.a3766a88.js","assets/asyncComputed.c677c545.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/SaveButton.dae129ff.js","assets/UnsavedChangesHandler.5637c452.js","assets/ExclamationCircleOutlined.d41cf1d8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.241ee38a.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.20bbef6f.js"),["assets/EnvVars.20bbef6f.js","assets/View.vue_vue_type_script_setup_true_lang.bbce7f6a.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/fetch.3971ea84.js","assets/record.075b7d45.js","assets/SaveButton.dae129ff.js","assets/UnsavedChangesHandler.5637c452.js","assets/ExclamationCircleOutlined.d41cf1d8.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.3c2a3663.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/Badge.71fee936.js","assets/index.241ee38a.js","assets/CrudView.57fcf015.css","assets/asyncComputed.c677c545.js","assets/polling.3587342a.js","assets/PhPencil.vue.2def7849.js","assets/index.f014adef.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.9ae41674.js"),["assets/WebEditor.9ae41674.js","assets/ContentLayout.d691ad7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.3971ea84.js","assets/CircularLoading.1c6a1f61.js","assets/CircularLoading.1a558a0d.css","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/WebEditor.d5fe6ad0.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.4b7a0c53.js"),["assets/Files.4b7a0c53.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.d691ad7a.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.7fc1aee0.js","assets/ant-design.51753590.js","assets/asyncComputed.c677c545.js","assets/gateway.a5388860.js","assets/tables.8d6766f6.js","assets/record.075b7d45.js","assets/string.44188c83.js","assets/DeleteOutlined.d8e8cfb3.js","assets/Card.639eca4a.js","assets/TabPane.1080fde7.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.fc7f10d6.js"),["assets/View.fc7f10d6.js","assets/asyncComputed.c677c545.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/index.241ee38a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5cd13bdf.js","assets/BookOutlined.767e0e7a.js","assets/index.fa9b4e97.js","assets/Badge.71fee936.js","assets/CrudView.3c2a3663.js","assets/url.b6644346.js","assets/PhDotsThreeVertical.vue.756b56ff.js","assets/CrudView.57fcf015.css","assets/PhPencil.vue.2def7849.js","assets/repository.fc6e5621.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/fetch.3971ea84.js","assets/record.075b7d45.js","assets/ant-design.51753590.js","assets/TabPane.1080fde7.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.fe3fe79a.js"),["assets/TableEditor.fe3fe79a.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f3ac9724.js","assets/vue-router.33f35a18.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.4967fc3d.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.c677c545.js","assets/gateway.a5388860.js","assets/popupNotifcation.7fc1aee0.js","assets/organization.efcc2606.js","assets/project.0040997f.js","assets/record.075b7d45.js","assets/tables.8d6766f6.js","assets/string.44188c83.js","assets/ContentLayout.d691ad7a.js","assets/ContentLayout.ee57a545.css","assets/index.241ee38a.js","assets/index.fa9b4e97.js","assets/Badge.71fee936.js","assets/PhCheckCircle.vue.9e5251d2.js","assets/index.00d46a24.js","assets/PhArrowDown.vue.ba4eea7b.js","assets/ant-design.51753590.js","assets/PhCaretRight.vue.d23111f3.js","assets/LoadingOutlined.64419cb9.js","assets/index.6db53852.js","assets/index.8f5819bb.js","assets/Avatar.dcb46dd7.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{w(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{R as A,i as C,P as T,T as a,v as b,m as r};
//# sourceMappingURL=router.cbdfe37b.js.map
