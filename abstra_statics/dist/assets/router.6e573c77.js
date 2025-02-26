var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.f00721a2.js";import{cM as u,x as b,h as E,i as A,_ as o,j as g}from"./index.c29ec4a8.js";import{C as l,a as v}from"./gateway.ff64fc32.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="868df98b-486c-416b-a2ed-581ce06179b4",t._sentryDebugIdIdentifier="sentry-dbid-868df98b-486c-416b-a2ed-581ce06179b4")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class w{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||w.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;m(i,"booted",!1);class f{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const s=new f;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.ce945223.js"),["assets/WidgetPreview.ce945223.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/Steps.863495c7.js","assets/index.6ebbc57c.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.91b40929.js","assets/colorHelpers.9905b14e.js","assets/index.f6740f89.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.45007656.js"),["assets/Login.45007656.js","assets/CircularLoading.0f0ba22b.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d79eea6c.js","assets/Logo.60a5f6ca.js","assets/Logo.8bf94625.css","assets/string.252ffa57.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/Badge.f00721a2.js","assets/Login.7dccb591.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.7e7817ef.js"),["assets/EditorLogin.7e7817ef.js","assets/Navbar.840b94bf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/asyncComputed.adefd745.js","assets/PhChats.vue.43206927.js","assets/PhSignOut.vue.e529e17f.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/index.d23b409e.js","assets/Avatar.dbb92461.js","assets/index.a228d535.js","assets/index.6e2ba25c.js","assets/BookOutlined.b0b52cdf.js","assets/Navbar.a899b0d6.css","assets/url.86895cf6.js","assets/apiKey.b8c32be4.js","assets/member.3eb6ff8b.js","assets/organization.1aa29dab.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/folder.aa3cee21.js","assets/Badge.f00721a2.js","assets/EditorLogin.5c26246d.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.061e945e.js"),["assets/Organizations.061e945e.js","assets/Navbar.840b94bf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/asyncComputed.adefd745.js","assets/PhChats.vue.43206927.js","assets/PhSignOut.vue.e529e17f.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/index.d23b409e.js","assets/Avatar.dbb92461.js","assets/index.a228d535.js","assets/index.6e2ba25c.js","assets/BookOutlined.b0b52cdf.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.ef8f161a.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.462d0f92.js","assets/ContentLayout.ee57a545.css","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.79f3f73a.js","assets/PhPencil.vue.6f23ca5a.js","assets/organization.1aa29dab.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/string.252ffa57.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.c159d393.js"),["assets/Organization.c159d393.js","assets/Navbar.840b94bf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/asyncComputed.adefd745.js","assets/PhChats.vue.43206927.js","assets/PhSignOut.vue.e529e17f.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/index.d23b409e.js","assets/Avatar.dbb92461.js","assets/index.a228d535.js","assets/index.6e2ba25c.js","assets/BookOutlined.b0b52cdf.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.ef8f161a.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.462d0f92.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.85c3e7fc.js","assets/PhUsersThree.vue.6a9f6d05.js","assets/organization.1aa29dab.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/string.252ffa57.js","assets/Sidebar.eca0a421.js","assets/index.4f6780a4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d79eea6c.js","assets/Logo.60a5f6ca.js","assets/Logo.8bf94625.css","assets/index.990629df.js","assets/Sidebar.e69f49bd.css","assets/Badge.f00721a2.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.b987c1a5.js"),["assets/ProjectsView.b987c1a5.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c08a243c.js","assets/PhCube.vue.85c3e7fc.js","assets/PhFolder.vue.b56f0c4e.js","assets/PhGear.vue.980d3a1f.js","assets/PhUsersThree.vue.6a9f6d05.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/member.3eb6ff8b.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/folder.aa3cee21.js","assets/ant-design.0cbf15fc.js","assets/organization.1aa29dab.js","assets/CollapsePanel.3c96379b.js","assets/index.8b7f2c53.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.4ae64f0d.js"),["assets/EditorsView.4ae64f0d.js","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/index.d23b409e.js","assets/CrudView.c80c8ede.css","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/member.3eb6ff8b.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/string.252ffa57.js","assets/ant-design.0cbf15fc.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.66decd28.js"),["assets/Billing.66decd28.js","assets/asyncComputed.adefd745.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/organization.1aa29dab.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/string.252ffa57.js","assets/LoadingContainer.b180b9de.js","assets/LoadingContainer.56fa997a.css","assets/index.990629df.js","assets/Badge.f00721a2.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.6a6e508c.js"),["assets/Project.6a6e508c.js","assets/Navbar.840b94bf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/asyncComputed.adefd745.js","assets/PhChats.vue.43206927.js","assets/PhSignOut.vue.e529e17f.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/index.d23b409e.js","assets/Avatar.dbb92461.js","assets/index.a228d535.js","assets/index.6e2ba25c.js","assets/BookOutlined.b0b52cdf.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.ef8f161a.js","assets/BaseLayout.b7a1f19a.css","assets/organization.1aa29dab.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/Sidebar.eca0a421.js","assets/index.4f6780a4.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d79eea6c.js","assets/Logo.60a5f6ca.js","assets/Logo.8bf94625.css","assets/index.990629df.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.462d0f92.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.49fbc84e.js","assets/PhIdentificationBadge.vue.ac964608.js","assets/PhKey.vue.15c83f54.js","assets/Badge.f00721a2.js","assets/Project.2a29bba8.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.bf3f0d48.js"),["assets/Live.bf3f0d48.js","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/index.d23b409e.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.adefd745.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/build.af8245f7.js","assets/organization.1aa29dab.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/datetime.9209715b.js","assets/polling.5d952f6a.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.119c4822.js","assets/LoadingOutlined.994fc7b7.js","assets/PhArrowCounterClockwise.vue.49fbc84e.js","assets/PhArrowSquareOut.vue.79f3f73a.js","assets/PhChats.vue.43206927.js","assets/PhCopySimple.vue.ae7637bc.js","assets/Live.57d116ed.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.8fd3ea64.js"),["assets/Builds.8fd3ea64.js","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/index.d23b409e.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.adefd745.js","assets/datetime.9209715b.js","assets/polling.5d952f6a.js","assets/PhArrowCounterClockwise.vue.49fbc84e.js","assets/PhCube.vue.85c3e7fc.js","assets/PhDownloadSimple.vue.a434efb2.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/build.af8245f7.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/PhWebhooksLogo.vue.33441da8.js","assets/index.8b7f2c53.js","assets/ExclamationCircleOutlined.469be53b.js","assets/CloseCircleOutlined.3898d714.js","assets/LoadingOutlined.994fc7b7.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.3f68e9ce.js"),["assets/ConnectorsView.3f68e9ce.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c08a243c.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/Avatar.dbb92461.js","assets/Card.b3791cab.js","assets/TabPane.5fd949c3.js","assets/index.d23b409e.js","assets/Badge.f00721a2.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.f97df119.js"),["assets/Tables.f97df119.js","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/index.d23b409e.js","assets/CrudView.c80c8ede.css","assets/ant-design.0cbf15fc.js","assets/asyncComputed.adefd745.js","assets/string.252ffa57.js","assets/PhPencil.vue.6f23ca5a.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.cc09344e.js","assets/TabPane.5fd949c3.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.f7540faf.js"),["assets/Tasks.f7540faf.js","assets/TasksView.vue_vue_type_script_setup_true_lang.9038c920.js","assets/tasksController.d3fb4ac4.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/scripts.7a0f4876.js","assets/record.6c12f8d7.js","assets/linters.35fd0752.js","assets/asyncComputed.adefd745.js","assets/polling.5d952f6a.js","assets/string.252ffa57.js","assets/metadata.95d75787.js","assets/PhWebhooksLogo.vue.33441da8.js","assets/ant-design.0cbf15fc.js","assets/dayjs.e95a12fa.js","assets/index.6e2baa12.js","assets/build.af8245f7.js","assets/project.310607c1.js","assets/tables.05ce3d7f.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.07d39d10.js"),["assets/Sql.07d39d10.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/PhDownloadSimple.vue.a434efb2.js","assets/toggleHighContrast.b346e9e8.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.cc09344e.js","assets/TabPane.5fd949c3.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.48163f52.js"),["assets/TablesDiagram.48163f52.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c08a243c.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/asyncComputed.adefd745.js","assets/PhKey.vue.15c83f54.js","assets/PhPencil.vue.6f23ca5a.js","assets/vue-flow-minimap.adf7e720.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/string.252ffa57.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.cc09344e.js","assets/TabPane.5fd949c3.js","assets/index.d23b409e.js","assets/Card.b3791cab.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.6f10745f.js"),["assets/ApiKeys.6f10745f.js","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/index.d23b409e.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.adefd745.js","assets/apiKey.b8c32be4.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/member.3eb6ff8b.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.98c05aaa.js"),["assets/Logs.98c05aaa.js","assets/Logs.vue_vue_type_script_setup_true_lang.b0bbb4f8.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/string.252ffa57.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/build.af8245f7.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.119c4822.js","assets/LoadingOutlined.994fc7b7.js","assets/polling.5d952f6a.js","assets/datetime.9209715b.js","assets/ant-design.0cbf15fc.js","assets/index.d23b409e.js","assets/index.6e2baa12.js","assets/dayjs.e95a12fa.js","assets/CollapsePanel.3c96379b.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.441a4162.js"),["assets/ProjectSettings.441a4162.js","assets/asyncComputed.adefd745.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/SaveButton.22c78357.js","assets/UnsavedChangesHandler.53f501da.js","assets/ExclamationCircleOutlined.469be53b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.6e2baa12.js","assets/index.d23b409e.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.d0aa91f7.js"),["assets/EnvVars.d0aa91f7.js","assets/View.vue_vue_type_script_setup_true_lang.17b539fc.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/fetch.cc3d8687.js","assets/record.6c12f8d7.js","assets/SaveButton.22c78357.js","assets/UnsavedChangesHandler.53f501da.js","assets/ExclamationCircleOutlined.469be53b.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.47179a4f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/Badge.f00721a2.js","assets/index.d23b409e.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.adefd745.js","assets/polling.5d952f6a.js","assets/PhPencil.vue.6f23ca5a.js","assets/index.4f6780a4.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.81c84be9.js"),["assets/Files.81c84be9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/ContentLayout.462d0f92.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.6432128e.js","assets/ant-design.0cbf15fc.js","assets/asyncComputed.adefd745.js","assets/gateway.ff64fc32.js","assets/tables.05ce3d7f.js","assets/record.6c12f8d7.js","assets/string.252ffa57.js","assets/Card.b3791cab.js","assets/TabPane.5fd949c3.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.dcec3f56.js"),["assets/View.dcec3f56.js","assets/asyncComputed.adefd745.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/index.d23b409e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js","assets/BookOutlined.b0b52cdf.js","assets/index.06ffead2.js","assets/Badge.f00721a2.js","assets/CrudView.47179a4f.js","assets/url.86895cf6.js","assets/PhDotsThreeVertical.vue.4d7ac67c.js","assets/index.6e2baa12.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.6f23ca5a.js","assets/repository.51f2e7e9.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/fetch.cc3d8687.js","assets/record.6c12f8d7.js","assets/ant-design.0cbf15fc.js","assets/TabPane.5fd949c3.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.a08d494d.js"),["assets/TableEditor.a08d494d.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c08a243c.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/BaseLayout.ef8f161a.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.adefd745.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/organization.1aa29dab.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/ContentLayout.462d0f92.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.980d3a1f.js","assets/index.d23b409e.js","assets/index.06ffead2.js","assets/Badge.f00721a2.js","assets/PhCheckCircle.vue.0fa58355.js","assets/index.7fbae31d.js","assets/PhArrowDown.vue.0abc6d5c.js","assets/ant-design.0cbf15fc.js","assets/PhCaretRight.vue.15eb56b9.js","assets/index.a228d535.js","assets/index.6e2ba25c.js","assets/Avatar.dbb92461.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.a30bbad5.js"),["assets/WebEditor.a30bbad5.js","assets/index.c29ec4a8.js","assets/index.65a6d955.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.d79eea6c.js","assets/Logo.60a5f6ca.js","assets/Logo.8bf94625.css","assets/BaseLayout.ef8f161a.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.cc3d8687.js","assets/gateway.ff64fc32.js","assets/popupNotifcation.6432128e.js","assets/project.310607c1.js","assets/record.6c12f8d7.js","assets/tables.05ce3d7f.js","assets/string.252ffa57.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{g(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),i.boot())});export{w as A,i as C,I as T,_ as r};
//# sourceMappingURL=router.6e573c77.js.map
