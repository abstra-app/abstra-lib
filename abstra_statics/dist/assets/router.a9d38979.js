var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{ae as p,di as h,dj as u,dk as b,h as E,i as A,_ as o,j as g}from"./vue-router.a320ca3b.js";import{C as c,a as w}from"./gateway.ec19cd18.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7ca569d4-2598-47b3-ae45-3da06fa193f6",t._sentryDebugIdIdentifier="sentry-dbid-7ca569d4-2598-47b3-ae45-3da06fa193f6")}catch{}})();const L=p(h),T=p(u);class f{async getInfo(){return await c.get("authors/info")}}const v=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.711f5009.js"),["assets/WidgetPreview.711f5009.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/Steps.63b9895d.js","assets/Steps.d681065f.css","assets/PlayerConfigProvider.5504a575.js","assets/colorHelpers.d7d5dbe1.js","assets/index.4f30fbcc.js","assets/PlayerConfigProvider.8864c905.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.43d1b2f4.js"),["assets/Login.43d1b2f4.js","assets/CircularLoading.210bf331.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/CircularLoading.e156a2b0.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9e1f7f01.js","assets/Logo.8e0618e6.js","assets/Logo.03290bf7.css","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/member.ddc4c2d0.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/string.eb7b2641.js","assets/Login.6ca67cd8.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.7ed1bb18.js"),["assets/EditorLogin.7ed1bb18.js","assets/Navbar.735277bd.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.dee66cbe.js","assets/PhChats.vue.6d8d6176.js","assets/PhSignOut.vue.ce67b2f8.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/index.77f15b54.js","assets/Avatar.35af0387.js","assets/index.0b9ec388.js","assets/index.90741094.js","assets/BookOutlined.c3029427.js","assets/Navbar.a899b0d6.css","assets/url.8c5bbd75.js","assets/apiKey.b2ff5ebc.js","assets/organization.c739c584.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.a0797a4a.js"),["assets/Organizations.a0797a4a.js","assets/Navbar.735277bd.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.dee66cbe.js","assets/PhChats.vue.6d8d6176.js","assets/PhSignOut.vue.ce67b2f8.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/index.77f15b54.js","assets/Avatar.35af0387.js","assets/index.0b9ec388.js","assets/index.90741094.js","assets/BookOutlined.c3029427.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.134559ff.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.86ddd57d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/CrudView.6b6b336a.css","assets/ant-design.c0110a22.js","assets/PhArrowSquareOut.vue.5ab6c180.js","assets/PhPencil.vue.8011f44d.js","assets/organization.c739c584.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/string.eb7b2641.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.59d313a7.js"),["assets/Organization.59d313a7.js","assets/Navbar.735277bd.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.dee66cbe.js","assets/PhChats.vue.6d8d6176.js","assets/PhSignOut.vue.ce67b2f8.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/index.77f15b54.js","assets/Avatar.35af0387.js","assets/index.0b9ec388.js","assets/index.90741094.js","assets/BookOutlined.c3029427.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.134559ff.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.86ddd57d.js","assets/ContentLayout.ee57a545.css","assets/organization.c739c584.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/string.eb7b2641.js","assets/Sidebar.1ad1baa6.js","assets/index.20517175.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9e1f7f01.js","assets/Logo.8e0618e6.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.c58f36bb.js"),["assets/Projects.c58f36bb.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.dee66cbe.js","assets/ant-design.c0110a22.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/organization.c739c584.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css","assets/PhArrowSquareOut.vue.5ab6c180.js","assets/PhCopy.vue.031ab663.js","assets/PhPencil.vue.8011f44d.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.57927e90.js"),["assets/Editors.57927e90.js","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css","assets/ant-design.c0110a22.js","assets/asyncComputed.dee66cbe.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/member.ddc4c2d0.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/string.eb7b2641.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.852612e0.js"),["assets/Billing.852612e0.js","assets/asyncComputed.dee66cbe.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/organization.c739c584.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/string.eb7b2641.js","assets/LoadingContainer.7d08c4c5.js","assets/LoadingContainer.56fa997a.css","assets/index.ece264e4.js","assets/Card.99743e49.js","assets/TabPane.068ccaba.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.26e9c069.js"),["assets/Project.26e9c069.js","assets/Navbar.735277bd.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.dee66cbe.js","assets/PhChats.vue.6d8d6176.js","assets/PhSignOut.vue.ce67b2f8.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/index.77f15b54.js","assets/Avatar.35af0387.js","assets/index.0b9ec388.js","assets/index.90741094.js","assets/BookOutlined.c3029427.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.134559ff.js","assets/BaseLayout.b7a1f19a.css","assets/organization.c739c584.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/Sidebar.1ad1baa6.js","assets/index.20517175.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.9e1f7f01.js","assets/Logo.8e0618e6.js","assets/Logo.03290bf7.css","assets/Sidebar.13df2a9d.css","assets/ContentLayout.86ddd57d.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.8fc81b52.js","assets/PhIdentificationBadge.vue.2707ad5e.js","assets/PhCube.vue.32c6ddd6.js","assets/PhGlobe.vue.54e4b093.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.a1a4c674.js"),["assets/Live.a1a4c674.js","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.dee66cbe.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/datetime.60cbaae9.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/polling.14f767db.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.2af1516f.js","assets/LoadingOutlined.733fff1a.js","assets/PhArrowCounterClockwise.vue.8fc81b52.js","assets/PhArrowSquareOut.vue.5ab6c180.js","assets/PhChats.vue.6d8d6176.js","assets/PhCopySimple.vue.bbb1caa6.js","assets/PhRocketLaunch.vue.a8d7c131.js","assets/index.db5d9456.js","assets/Live.c4388f9c.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.1cf9a6e1.js"),["assets/Builds.1cf9a6e1.js","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.dee66cbe.js","assets/datetime.60cbaae9.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/polling.14f767db.js","assets/PhArrowCounterClockwise.vue.8fc81b52.js","assets/PhCube.vue.32c6ddd6.js","assets/PhDownloadSimple.vue.d5962016.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/PhWebhooksLogo.vue.06922f99.js","assets/index.b180ea6d.js","assets/ExclamationCircleOutlined.de87011f.js","assets/CloseCircleOutlined.806f44f6.js","assets/LoadingOutlined.733fff1a.js","assets/Builds.8dab7d81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.133cdbe8.js"),["assets/ConnectorsView.133cdbe8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5cd399b9.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/Avatar.35af0387.js","assets/Card.99743e49.js","assets/TabPane.068ccaba.js","assets/index.77f15b54.js","assets/ConnectorsView.57c087c2.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.4a1c6b77.js"),["assets/Tables.4a1c6b77.js","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.dee66cbe.js","assets/string.eb7b2641.js","assets/PhPencil.vue.8011f44d.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/ant-design.c0110a22.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.21c135cc.js"),["assets/Sql.21c135cc.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/utils.612309b4.js","assets/PhDownloadSimple.vue.d5962016.js","assets/toggleHighContrast.3cf35ca1.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.7cca3be4.js"),["assets/ApiKeys.7cca3be4.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/asyncComputed.dee66cbe.js","assets/apiKey.b2ff5ebc.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/member.ddc4c2d0.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.5da502dd.js"),["assets/Logs.5da502dd.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/datetime.60cbaae9.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.2af1516f.js","assets/LoadingOutlined.733fff1a.js","assets/string.eb7b2641.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/dayjs.ed0d157a.js","assets/index.77f15b54.js","assets/CollapsePanel.d91d32b8.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.7efcf8f2.js"),["assets/ProjectSettings.7efcf8f2.js","assets/asyncComputed.dee66cbe.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/SaveButton.7b908ff4.js","assets/UnsavedChangesHandler.d4d191e1.js","assets/ExclamationCircleOutlined.de87011f.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.77f15b54.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.37eaf475.js"),["assets/EnvVars.37eaf475.js","assets/View.vue_vue_type_script_setup_true_lang.c3857507.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/fetch.8cb71dd0.js","assets/record.14b6e5e9.js","assets/SaveButton.7b908ff4.js","assets/UnsavedChangesHandler.d4d191e1.js","assets/ExclamationCircleOutlined.de87011f.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.d22e4374.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/index.77f15b54.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.a8d7c131.js","assets/asyncComputed.dee66cbe.js","assets/polling.14f767db.js","assets/PhPencil.vue.8011f44d.js","assets/index.20517175.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.fa04d510.js"),["assets/Files.fa04d510.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/ContentLayout.86ddd57d.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.33968027.js","assets/ant-design.c0110a22.js","assets/asyncComputed.dee66cbe.js","assets/gateway.ec19cd18.js","assets/tables.09f40ec0.js","assets/record.14b6e5e9.js","assets/string.eb7b2641.js","assets/DeleteOutlined.7e108d98.js","assets/Card.99743e49.js","assets/TabPane.068ccaba.js","assets/Files.3b8a3600.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.a4ad163e.js"),["assets/View.a4ad163e.js","assets/asyncComputed.dee66cbe.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/index.77f15b54.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.38940f4c.js","assets/BookOutlined.c3029427.js","assets/index.6f2124ac.js","assets/isNumeric.75337b1e.js","assets/CrudView.d22e4374.js","assets/url.8c5bbd75.js","assets/PhDotsThreeVertical.vue.e15c1a0b.js","assets/CrudView.6b6b336a.css","assets/PhPencil.vue.8011f44d.js","assets/repository.ac95f143.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/fetch.8cb71dd0.js","assets/record.14b6e5e9.js","assets/ant-design.c0110a22.js","assets/TabPane.068ccaba.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.f4b2acb9.js"),["assets/TableEditor.f4b2acb9.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5cd399b9.js","assets/vue-router.a320ca3b.js","assets/vue-router.6b4b78cf.css","assets/BaseLayout.134559ff.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.dee66cbe.js","assets/gateway.ec19cd18.js","assets/popupNotifcation.33968027.js","assets/organization.c739c584.js","assets/project.deedb230.js","assets/record.14b6e5e9.js","assets/tables.09f40ec0.js","assets/string.eb7b2641.js","assets/ContentLayout.86ddd57d.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.7bce3fb0.js","assets/index.8d460681.js","assets/index.77f15b54.js","assets/index.6f2124ac.js","assets/isNumeric.75337b1e.js","assets/ant-design.c0110a22.js","assets/PhCaretRight.vue.e2abfa1e.js","assets/LoadingOutlined.733fff1a.js","assets/index.0b9ec388.js","assets/index.90741094.js","assets/Avatar.35af0387.js","assets/TableEditor.b1663dd4.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.a9d38979.js.map
