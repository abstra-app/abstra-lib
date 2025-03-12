var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.260a8170.js";import{cM as u,x as b,h as E,i as g,_ as o,j as A}from"./index.4aadb4b3.js";import{C as l,a as v}from"./gateway.32288124.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="dcfef7a5-bee4-4d6d-9e95-39e13bac52d1",t._sentryDebugIdIdentifier="sentry-dbid-dcfef7a5-bee4-4d6d-9e95-39e13bac52d1")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class w{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||w.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;m(s,"booted",!1);class f{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const n=new f;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.6b7c4297.js"),["assets/WidgetPreview.6b7c4297.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/Steps.9280d5eb.js","assets/index.0ea69fcf.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.3a23c00d.js","assets/colorHelpers.d9873a47.js","assets/index.aca39fca.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.423bdcca.js"),["assets/Login.423bdcca.js","assets/CircularLoading.c1765b49.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.937320fb.js","assets/Logo.ef84940c.js","assets/Logo.8bf94625.css","assets/string.358f1ec9.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/Badge.260a8170.js","assets/Login.05945f96.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.bac1dbb6.js"),["assets/EditorLogin.bac1dbb6.js","assets/Navbar.ddd33419.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/asyncComputed.d18a9fa3.js","assets/PhChats.vue.b0097c2d.js","assets/PhSignOut.vue.4f40077a.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.2c238b0a.js","assets/Avatar.e6618b11.js","assets/index.bfbdf08f.js","assets/index.a9470594.js","assets/BookOutlined.f67181c8.js","assets/Navbar.ce698b7a.css","assets/url.7d22bb63.js","assets/apiKey.f30cdf83.js","assets/member.514a5279.js","assets/organization.dc9dfa4f.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/folder.48094eb6.js","assets/Badge.260a8170.js","assets/EditorLogin.3d18a45f.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.d6335c7c.js"),["assets/Organizations.d6335c7c.js","assets/Navbar.ddd33419.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/asyncComputed.d18a9fa3.js","assets/PhChats.vue.b0097c2d.js","assets/PhSignOut.vue.4f40077a.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.2c238b0a.js","assets/Avatar.e6618b11.js","assets/index.bfbdf08f.js","assets/index.a9470594.js","assets/BookOutlined.f67181c8.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.7b40832b.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.6fa70c2c.js","assets/ContentLayout.ee57a545.css","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.0dd026f0.js","assets/PhPencil.vue.adf16920.js","assets/organization.dc9dfa4f.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/string.358f1ec9.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.a20a8860.js"),["assets/Organization.a20a8860.js","assets/Navbar.ddd33419.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/asyncComputed.d18a9fa3.js","assets/PhChats.vue.b0097c2d.js","assets/PhSignOut.vue.4f40077a.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.2c238b0a.js","assets/Avatar.e6618b11.js","assets/index.bfbdf08f.js","assets/index.a9470594.js","assets/BookOutlined.f67181c8.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.7b40832b.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.6fa70c2c.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.189e1b37.js","assets/PhUsersThree.vue.148c3a7d.js","assets/organization.dc9dfa4f.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/string.358f1ec9.js","assets/Sidebar.f9ea06ed.js","assets/index.19ff4cf1.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.937320fb.js","assets/Logo.ef84940c.js","assets/Logo.8bf94625.css","assets/index.886aa33b.js","assets/Sidebar.e69f49bd.css","assets/Badge.260a8170.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.56ff13ec.js"),["assets/ProjectsView.56ff13ec.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.2a05e2ac.js","assets/PhCube.vue.189e1b37.js","assets/PhFolder.vue.a0c0af2c.js","assets/PhGear.vue.993af229.js","assets/PhUsersThree.vue.148c3a7d.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/member.514a5279.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/folder.48094eb6.js","assets/ant-design.bc634ff4.js","assets/organization.dc9dfa4f.js","assets/CollapsePanel.1d251f07.js","assets/index.9e65982d.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.04961ece.js"),["assets/EditorsView.04961ece.js","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/index.2c238b0a.js","assets/CrudView.c80c8ede.css","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/member.514a5279.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/string.358f1ec9.js","assets/ant-design.bc634ff4.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.083a158a.js"),["assets/Billing.083a158a.js","assets/asyncComputed.d18a9fa3.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/organization.dc9dfa4f.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/string.358f1ec9.js","assets/LoadingContainer.a5a4206e.js","assets/LoadingContainer.56fa997a.css","assets/index.886aa33b.js","assets/Badge.260a8170.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.a8964db2.js"),["assets/Project.a8964db2.js","assets/Navbar.ddd33419.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/asyncComputed.d18a9fa3.js","assets/PhChats.vue.b0097c2d.js","assets/PhSignOut.vue.4f40077a.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.2c238b0a.js","assets/Avatar.e6618b11.js","assets/index.bfbdf08f.js","assets/index.a9470594.js","assets/BookOutlined.f67181c8.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.7b40832b.js","assets/BaseLayout.b7a1f19a.css","assets/organization.dc9dfa4f.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/Sidebar.f9ea06ed.js","assets/index.19ff4cf1.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.937320fb.js","assets/Logo.ef84940c.js","assets/Logo.8bf94625.css","assets/index.886aa33b.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.6fa70c2c.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.d1689227.js","assets/PhIdentificationBadge.vue.e1d84830.js","assets/PhKey.vue.6ba5be7c.js","assets/PhRobot.vue.67935b7a.js","assets/Badge.260a8170.js","assets/Project.1cd68ede.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.7308069c.js"),["assets/Live.7308069c.js","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/index.2c238b0a.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.d18a9fa3.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/build.8b2cb530.js","assets/organization.dc9dfa4f.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/datetime.a1a59931.js","assets/polling.0b59fdbf.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b3d1ba32.js","assets/LoadingOutlined.9e355cba.js","assets/PhArrowCounterClockwise.vue.d1689227.js","assets/PhArrowSquareOut.vue.0dd026f0.js","assets/PhChats.vue.b0097c2d.js","assets/PhCopySimple.vue.1efba1b3.js","assets/Live.97211844.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.2feba24c.js"),["assets/Builds.2feba24c.js","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/index.2c238b0a.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.d18a9fa3.js","assets/datetime.a1a59931.js","assets/polling.0b59fdbf.js","assets/PhArrowCounterClockwise.vue.d1689227.js","assets/PhCube.vue.189e1b37.js","assets/PhDownloadSimple.vue.2a26831d.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/build.8b2cb530.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/PhWebhooksLogo.vue.c20f0754.js","assets/index.9e65982d.js","assets/ExclamationCircleOutlined.bc78985e.js","assets/CloseCircleOutlined.19c5dcbc.js","assets/LoadingOutlined.9e355cba.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.93c38a36.js"),["assets/ConnectorsView.93c38a36.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.2a05e2ac.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/ConnectorCard.ea8eeedd.js","assets/Avatar.e6618b11.js","assets/Card.87faa1d6.js","assets/TabPane.7312f131.js","assets/ConnectorCard.46c492b4.css","assets/index.2c238b0a.js","assets/Badge.260a8170.js","assets/ConnectorsView.a4c38244.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.ce268692.js"),["assets/Tables.ce268692.js","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/index.2c238b0a.js","assets/CrudView.c80c8ede.css","assets/ant-design.bc634ff4.js","assets/asyncComputed.d18a9fa3.js","assets/string.358f1ec9.js","assets/PhPencil.vue.adf16920.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.84b27252.js","assets/TabPane.7312f131.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.8bca66ec.js"),["assets/Tasks.8bca66ec.js","assets/TasksView.vue_vue_type_script_setup_true_lang.d1c90076.js","assets/tasksController.c7be48a0.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/scripts.5df3bd25.js","assets/record.277e98db.js","assets/linters.8f975464.js","assets/asyncComputed.d18a9fa3.js","assets/polling.0b59fdbf.js","assets/string.358f1ec9.js","assets/metadata.27978d1b.js","assets/PhRobot.vue.67935b7a.js","assets/PhWebhooksLogo.vue.c20f0754.js","assets/ant-design.bc634ff4.js","assets/dayjs.2e3ec619.js","assets/index.0c55c36a.js","assets/build.8b2cb530.js","assets/project.9e142743.js","assets/tables.d10b764a.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.abc7aa23.js"),["assets/Sql.abc7aa23.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/PhDownloadSimple.vue.2a26831d.js","assets/toggleHighContrast.c2be526a.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.84b27252.js","assets/TabPane.7312f131.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.284c3e96.js"),["assets/TablesDiagram.284c3e96.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.2a05e2ac.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/asyncComputed.d18a9fa3.js","assets/PhKey.vue.6ba5be7c.js","assets/PhPencil.vue.adf16920.js","assets/vue-flow-minimap.6a03e5b7.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/string.358f1ec9.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.84b27252.js","assets/TabPane.7312f131.js","assets/index.2c238b0a.js","assets/Card.87faa1d6.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.29214ca2.js"),["assets/ApiKeys.29214ca2.js","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/index.2c238b0a.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.d18a9fa3.js","assets/apiKey.f30cdf83.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/member.514a5279.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.2d5da885.js"),["assets/Logs.2d5da885.js","assets/Logs.vue_vue_type_script_setup_true_lang.5800e895.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/build.8b2cb530.js","assets/string.358f1ec9.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b3d1ba32.js","assets/LoadingOutlined.9e355cba.js","assets/polling.0b59fdbf.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.2a05e2ac.js","assets/datetime.a1a59931.js","assets/ant-design.bc634ff4.js","assets/index.2c238b0a.js","assets/index.0c55c36a.js","assets/dayjs.2e3ec619.js","assets/CollapsePanel.1d251f07.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.1d62b67f.js"),["assets/ProjectSettings.1d62b67f.js","assets/asyncComputed.d18a9fa3.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/SaveButton.99559feb.js","assets/UnsavedChangesHandler.3af62f11.js","assets/ExclamationCircleOutlined.bc78985e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.0c55c36a.js","assets/index.2c238b0a.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.c18b1cad.js"),["assets/EnvVars.c18b1cad.js","assets/View.vue_vue_type_script_setup_true_lang.711fc065.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/fetch.082118f2.js","assets/record.277e98db.js","assets/SaveButton.99559feb.js","assets/UnsavedChangesHandler.3af62f11.js","assets/ExclamationCircleOutlined.bc78985e.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.3e375430.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/Badge.260a8170.js","assets/index.2c238b0a.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.d18a9fa3.js","assets/polling.0b59fdbf.js","assets/PhPencil.vue.adf16920.js","assets/index.19ff4cf1.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.2e83cce5.js"),["assets/Files.2e83cce5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/ContentLayout.6fa70c2c.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.73f11295.js","assets/ant-design.bc634ff4.js","assets/asyncComputed.d18a9fa3.js","assets/gateway.32288124.js","assets/tables.d10b764a.js","assets/record.277e98db.js","assets/string.358f1ec9.js","assets/Card.87faa1d6.js","assets/TabPane.7312f131.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.85f73c96.js"),["assets/View.85f73c96.js","assets/asyncComputed.d18a9fa3.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/index.2c238b0a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js","assets/BookOutlined.f67181c8.js","assets/index.4e2bfed0.js","assets/Badge.260a8170.js","assets/CrudView.3e375430.js","assets/url.7d22bb63.js","assets/PhDotsThreeVertical.vue.6fbf703c.js","assets/index.0c55c36a.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.adf16920.js","assets/repository.792ed45f.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/fetch.082118f2.js","assets/record.277e98db.js","assets/ant-design.bc634ff4.js","assets/TabPane.7312f131.js"]),meta:{title:"Access Control - Abstra Console"}},{path:"agents",name:"agents",component:()=>o(()=>import("./AgentsView.22d8f26f.js"),["assets/AgentsView.22d8f26f.js","assets/ConnectorCard.ea8eeedd.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/Avatar.e6618b11.js","assets/Card.87faa1d6.js","assets/TabPane.7312f131.js","assets/ConnectorCard.46c492b4.css","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/index.2c238b0a.js","assets/Badge.260a8170.js","assets/AgentsView.223203c8.css"]),meta:{title:"Agents - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.d75bf3e0.js"),["assets/TableEditor.d75bf3e0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.2a05e2ac.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/BaseLayout.7b40832b.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.d18a9fa3.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/organization.dc9dfa4f.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/ContentLayout.6fa70c2c.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.993af229.js","assets/index.2c238b0a.js","assets/index.4e2bfed0.js","assets/Badge.260a8170.js","assets/PhCheckCircle.vue.ece2bdf3.js","assets/index.f32f179d.js","assets/PhArrowDown.vue.ace34f95.js","assets/ant-design.bc634ff4.js","assets/PhCaretRight.vue.2cf2abc0.js","assets/index.bfbdf08f.js","assets/index.a9470594.js","assets/Avatar.e6618b11.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.3407b1e0.js"),["assets/WebEditor.3407b1e0.js","assets/index.4aadb4b3.js","assets/index.84e5979e.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.937320fb.js","assets/Logo.ef84940c.js","assets/Logo.8bf94625.css","assets/BaseLayout.7b40832b.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.082118f2.js","assets/gateway.32288124.js","assets/popupNotifcation.73f11295.js","assets/project.9e142743.js","assets/record.277e98db.js","assets/tables.d10b764a.js","assets/string.358f1ec9.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{A(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:window.location.origin+t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),s.boot())});export{w as A,s as C,I as T,_ as r};
//# sourceMappingURL=router.f8534c88.js.map
