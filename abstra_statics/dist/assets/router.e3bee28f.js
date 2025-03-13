var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.3562fa5b.js";import{cM as u,x as b,h as E,i as g,_ as o,j as A}from"./index.c78b0055.js";import{C as l,a as v}from"./gateway.1b51fb20.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="483021f7-6bc6-4ca1-acb4-4e96a2f1bbd1",t._sentryDebugIdIdentifier="sentry-dbid-483021f7-6bc6-4ca1-acb4-4e96a2f1bbd1")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class w{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||w.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;m(s,"booted",!1);class f{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const n=new f;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.228d646e.js"),["assets/WidgetPreview.228d646e.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/Steps.a17d0516.js","assets/index.e88acfe9.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.92c685fa.js","assets/colorHelpers.7b94ce07.js","assets/index.07849a20.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.419a11c4.js"),["assets/Login.419a11c4.js","assets/CircularLoading.e06b56f0.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d426a352.js","assets/Logo.f7e88aa7.js","assets/Logo.8bf94625.css","assets/string.3d7f75ed.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/Badge.3562fa5b.js","assets/Login.05945f96.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.eb0de32f.js"),["assets/EditorLogin.eb0de32f.js","assets/Navbar.55691572.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/asyncComputed.712812a6.js","assets/PhChats.vue.991fb935.js","assets/PhSignOut.vue.4888a298.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.87177814.js","assets/Avatar.ce6f514f.js","assets/index.b8289935.js","assets/index.621ce44c.js","assets/BookOutlined.b724d739.js","assets/Navbar.ce698b7a.css","assets/url.7ae3401b.js","assets/apiKey.a63e53c4.js","assets/member.256850d7.js","assets/organization.cb6f9732.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/folder.b69b1338.js","assets/Badge.3562fa5b.js","assets/EditorLogin.3d18a45f.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.fdaa9cf3.js"),["assets/Organizations.fdaa9cf3.js","assets/Navbar.55691572.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/asyncComputed.712812a6.js","assets/PhChats.vue.991fb935.js","assets/PhSignOut.vue.4888a298.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.87177814.js","assets/Avatar.ce6f514f.js","assets/index.b8289935.js","assets/index.621ce44c.js","assets/BookOutlined.b724d739.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.f819cd1f.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.1fbbc478.js","assets/ContentLayout.ee57a545.css","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.df392c54.js","assets/PhPencil.vue.565dd490.js","assets/organization.cb6f9732.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/string.3d7f75ed.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.8b5a337f.js"),["assets/Organization.8b5a337f.js","assets/Navbar.55691572.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/asyncComputed.712812a6.js","assets/PhChats.vue.991fb935.js","assets/PhSignOut.vue.4888a298.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.87177814.js","assets/Avatar.ce6f514f.js","assets/index.b8289935.js","assets/index.621ce44c.js","assets/BookOutlined.b724d739.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.f819cd1f.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.1fbbc478.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.d3fbb928.js","assets/PhUsersThree.vue.8e2a5ff5.js","assets/organization.cb6f9732.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/string.3d7f75ed.js","assets/Sidebar.5b4b650b.js","assets/index.5a897c2f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d426a352.js","assets/Logo.f7e88aa7.js","assets/Logo.8bf94625.css","assets/index.aaec655e.js","assets/Sidebar.e69f49bd.css","assets/Badge.3562fa5b.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.68407f84.js"),["assets/ProjectsView.68407f84.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a1a70907.js","assets/PhCube.vue.d3fbb928.js","assets/PhFolder.vue.e5f217e7.js","assets/PhGear.vue.0dcbfb1b.js","assets/PhUsersThree.vue.8e2a5ff5.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/member.256850d7.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/folder.b69b1338.js","assets/ant-design.61ba3bc2.js","assets/organization.cb6f9732.js","assets/CollapsePanel.6cf14ee0.js","assets/index.e06c91e0.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.ebdd098e.js"),["assets/EditorsView.ebdd098e.js","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/index.87177814.js","assets/CrudView.c80c8ede.css","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/member.256850d7.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/string.3d7f75ed.js","assets/ant-design.61ba3bc2.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.59fd7b98.js"),["assets/Billing.59fd7b98.js","assets/asyncComputed.712812a6.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/organization.cb6f9732.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/string.3d7f75ed.js","assets/LoadingContainer.75f6921f.js","assets/LoadingContainer.56fa997a.css","assets/index.aaec655e.js","assets/Badge.3562fa5b.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.0e225be4.js"),["assets/Project.0e225be4.js","assets/Navbar.55691572.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/asyncComputed.712812a6.js","assets/PhChats.vue.991fb935.js","assets/PhSignOut.vue.4888a298.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.87177814.js","assets/Avatar.ce6f514f.js","assets/index.b8289935.js","assets/index.621ce44c.js","assets/BookOutlined.b724d739.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.f819cd1f.js","assets/BaseLayout.b7a1f19a.css","assets/organization.cb6f9732.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/Sidebar.5b4b650b.js","assets/index.5a897c2f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d426a352.js","assets/Logo.f7e88aa7.js","assets/Logo.8bf94625.css","assets/index.aaec655e.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.1fbbc478.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.b551bd53.js","assets/PhIdentificationBadge.vue.114da8ee.js","assets/PhKey.vue.688b42ee.js","assets/PhRobot.vue.7d4bb5e4.js","assets/Badge.3562fa5b.js","assets/Project.1cd68ede.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.1a1218f6.js"),["assets/Live.1a1218f6.js","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/index.87177814.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.712812a6.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/build.857241c0.js","assets/organization.cb6f9732.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/datetime.9790761c.js","assets/polling.a749ad7e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.553eb566.js","assets/LoadingOutlined.b978db4e.js","assets/PhArrowCounterClockwise.vue.b551bd53.js","assets/PhArrowSquareOut.vue.df392c54.js","assets/PhChats.vue.991fb935.js","assets/PhCopySimple.vue.0f22b91d.js","assets/Live.97211844.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.0ea72320.js"),["assets/Builds.0ea72320.js","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/index.87177814.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.712812a6.js","assets/datetime.9790761c.js","assets/polling.a749ad7e.js","assets/PhArrowCounterClockwise.vue.b551bd53.js","assets/PhCube.vue.d3fbb928.js","assets/PhDownloadSimple.vue.b5889574.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/build.857241c0.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/PhWebhooksLogo.vue.3b0cf42b.js","assets/index.e06c91e0.js","assets/ExclamationCircleOutlined.0d150976.js","assets/CloseCircleOutlined.f2cb25ad.js","assets/LoadingOutlined.b978db4e.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.187d27ae.js"),["assets/ConnectorsView.187d27ae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a1a70907.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/ConnectorCard.74d2ab51.js","assets/Avatar.ce6f514f.js","assets/Card.e00cd4a9.js","assets/TabPane.c1b160f0.js","assets/ConnectorCard.46c492b4.css","assets/index.87177814.js","assets/Badge.3562fa5b.js","assets/ConnectorsView.a4c38244.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.7c4f0eda.js"),["assets/Tables.7c4f0eda.js","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/index.87177814.js","assets/CrudView.c80c8ede.css","assets/ant-design.61ba3bc2.js","assets/asyncComputed.712812a6.js","assets/string.3d7f75ed.js","assets/PhPencil.vue.565dd490.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.524e680e.js","assets/TabPane.c1b160f0.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.462d74b4.js"),["assets/Tasks.462d74b4.js","assets/TasksView.vue_vue_type_script_setup_true_lang.7f3841b5.js","assets/tasksController.f4308553.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/scripts.0afc1c34.js","assets/record.a5fa5fdb.js","assets/linters.b2faf385.js","assets/asyncComputed.712812a6.js","assets/polling.a749ad7e.js","assets/string.3d7f75ed.js","assets/metadata.0b13b916.js","assets/PhRobot.vue.7d4bb5e4.js","assets/PhWebhooksLogo.vue.3b0cf42b.js","assets/ant-design.61ba3bc2.js","assets/dayjs.77d12b3b.js","assets/index.4919b26e.js","assets/build.857241c0.js","assets/project.8a79bf77.js","assets/tables.050aa3e9.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.4034f8dc.js"),["assets/Sql.4034f8dc.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/PhDownloadSimple.vue.b5889574.js","assets/toggleHighContrast.da00eae4.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.524e680e.js","assets/TabPane.c1b160f0.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.a260a38f.js"),["assets/TablesDiagram.a260a38f.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a1a70907.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/asyncComputed.712812a6.js","assets/PhKey.vue.688b42ee.js","assets/PhPencil.vue.565dd490.js","assets/vue-flow-minimap.7265291d.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/string.3d7f75ed.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.524e680e.js","assets/TabPane.c1b160f0.js","assets/index.87177814.js","assets/Card.e00cd4a9.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.70d657d1.js"),["assets/ApiKeys.70d657d1.js","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/index.87177814.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.712812a6.js","assets/apiKey.a63e53c4.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/member.256850d7.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.3db90473.js"),["assets/Logs.3db90473.js","assets/Logs.vue_vue_type_script_setup_true_lang.48cc1c44.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/build.857241c0.js","assets/string.3d7f75ed.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.553eb566.js","assets/LoadingOutlined.b978db4e.js","assets/polling.a749ad7e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a1a70907.js","assets/datetime.9790761c.js","assets/ant-design.61ba3bc2.js","assets/index.87177814.js","assets/index.4919b26e.js","assets/dayjs.77d12b3b.js","assets/CollapsePanel.6cf14ee0.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.3fc1eead.js"),["assets/ProjectSettings.3fc1eead.js","assets/asyncComputed.712812a6.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/SaveButton.cfe51ebf.js","assets/UnsavedChangesHandler.28b17b8a.js","assets/ExclamationCircleOutlined.0d150976.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.4919b26e.js","assets/index.87177814.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.a4b7b28b.js"),["assets/EnvVars.a4b7b28b.js","assets/View.vue_vue_type_script_setup_true_lang.d6c7b8ae.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/fetch.1077da6f.js","assets/record.a5fa5fdb.js","assets/SaveButton.cfe51ebf.js","assets/UnsavedChangesHandler.28b17b8a.js","assets/ExclamationCircleOutlined.0d150976.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.4f2b02e7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/Badge.3562fa5b.js","assets/index.87177814.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.712812a6.js","assets/polling.a749ad7e.js","assets/PhPencil.vue.565dd490.js","assets/index.5a897c2f.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.6921457c.js"),["assets/Files.6921457c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/ContentLayout.1fbbc478.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.435b88e0.js","assets/ant-design.61ba3bc2.js","assets/asyncComputed.712812a6.js","assets/gateway.1b51fb20.js","assets/tables.050aa3e9.js","assets/record.a5fa5fdb.js","assets/string.3d7f75ed.js","assets/Card.e00cd4a9.js","assets/TabPane.c1b160f0.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.5bc87b04.js"),["assets/View.5bc87b04.js","assets/asyncComputed.712812a6.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/index.87177814.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js","assets/BookOutlined.b724d739.js","assets/index.faccb1f2.js","assets/Badge.3562fa5b.js","assets/CrudView.4f2b02e7.js","assets/url.7ae3401b.js","assets/PhDotsThreeVertical.vue.0dee2529.js","assets/index.4919b26e.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.565dd490.js","assets/repository.6a547c10.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/fetch.1077da6f.js","assets/record.a5fa5fdb.js","assets/ant-design.61ba3bc2.js","assets/TabPane.c1b160f0.js"]),meta:{title:"Access Control - Abstra Console"}},{path:"agents",name:"agents",component:()=>o(()=>import("./AgentsView.5080d935.js"),["assets/AgentsView.5080d935.js","assets/ConnectorCard.74d2ab51.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/Avatar.ce6f514f.js","assets/Card.e00cd4a9.js","assets/TabPane.c1b160f0.js","assets/ConnectorCard.46c492b4.css","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/index.87177814.js","assets/Badge.3562fa5b.js","assets/AgentsView.223203c8.css"]),meta:{title:"Agents - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.2ab864f9.js"),["assets/TableEditor.2ab864f9.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a1a70907.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/BaseLayout.f819cd1f.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.712812a6.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/organization.cb6f9732.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/ContentLayout.1fbbc478.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.0dcbfb1b.js","assets/index.87177814.js","assets/index.faccb1f2.js","assets/Badge.3562fa5b.js","assets/PhCheckCircle.vue.159db41b.js","assets/index.6b353e91.js","assets/PhArrowDown.vue.36510a1a.js","assets/ant-design.61ba3bc2.js","assets/PhCaretRight.vue.0cdbe94e.js","assets/index.b8289935.js","assets/index.621ce44c.js","assets/Avatar.ce6f514f.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.96a848e7.js"),["assets/WebEditor.96a848e7.js","assets/index.c78b0055.js","assets/index.84e5979e.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d426a352.js","assets/Logo.f7e88aa7.js","assets/Logo.8bf94625.css","assets/BaseLayout.f819cd1f.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.1077da6f.js","assets/gateway.1b51fb20.js","assets/popupNotifcation.435b88e0.js","assets/project.8a79bf77.js","assets/record.a5fa5fdb.js","assets/tables.050aa3e9.js","assets/string.3d7f75ed.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{A(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:window.location.origin+t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),s.boot())});export{w as A,s as C,I as T,_ as r};
//# sourceMappingURL=router.e3bee28f.js.map
