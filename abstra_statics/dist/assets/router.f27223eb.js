var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.8f347a42.js";import{cM as u,x as b,h as E,i as g,_ as o,j as A}from"./index.980da6b3.js";import{C as l,a as v}from"./gateway.5f4db8f8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5972429f-e9b7-404f-a974-7cd8e32ae1ba",t._sentryDebugIdIdentifier="sentry-dbid-5972429f-e9b7-404f-a974-7cd8e32ae1ba")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class w{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||w.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;m(s,"booted",!1);class f{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const n=new f;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.8383bc03.js"),["assets/WidgetPreview.8383bc03.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/Steps.9284dc3f.js","assets/index.bd148173.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.48ee72f9.js","assets/colorHelpers.0d099c60.js","assets/index.62445e17.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.ac0647e4.js"),["assets/Login.ac0647e4.js","assets/OTPInput.69e09a70.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/OTPInput.277362d6.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.65f1406a.js","assets/Logo.590cd82e.js","assets/Logo.b7d81119.css","assets/string.e1f81484.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.ddce9c6f.js","assets/Badge.8f347a42.js","assets/Login.8c4b2736.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.91a6b4a6.js"),["assets/EditorLogin.91a6b4a6.js","assets/Navbar.f92ba49e.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/asyncComputed.0a23ae67.js","assets/PhChats.vue.9f9a908c.js","assets/PhSignOut.vue.d04cd7af.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.bf1417af.js","assets/Avatar.d6c71d50.js","assets/index.a49e822c.js","assets/index.9cf27ed7.js","assets/BookOutlined.7d4ce61a.js","assets/Navbar.ce698b7a.css","assets/url.dba97c13.js","assets/apiKey.ac6ceafa.js","assets/member.10d2e203.js","assets/organization.fb3f1406.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/folder.ec09b4fe.js","assets/Badge.8f347a42.js","assets/EditorLogin.3d18a45f.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.2bc4984e.js"),["assets/Organizations.2bc4984e.js","assets/Navbar.f92ba49e.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/asyncComputed.0a23ae67.js","assets/PhChats.vue.9f9a908c.js","assets/PhSignOut.vue.d04cd7af.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.bf1417af.js","assets/Avatar.d6c71d50.js","assets/index.a49e822c.js","assets/index.9cf27ed7.js","assets/BookOutlined.7d4ce61a.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.3d3555b0.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.80401d62.js","assets/ContentLayout.ee57a545.css","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.72b6f932.js","assets/PhPencil.vue.76b1de62.js","assets/organization.fb3f1406.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/string.e1f81484.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.4929067e.js"),["assets/Organization.4929067e.js","assets/Navbar.f92ba49e.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/asyncComputed.0a23ae67.js","assets/PhChats.vue.9f9a908c.js","assets/PhSignOut.vue.d04cd7af.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.bf1417af.js","assets/Avatar.d6c71d50.js","assets/index.a49e822c.js","assets/index.9cf27ed7.js","assets/BookOutlined.7d4ce61a.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.3d3555b0.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.80401d62.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.fd895181.js","assets/PhUsersThree.vue.6b6c66a1.js","assets/organization.fb3f1406.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/string.e1f81484.js","assets/Sidebar.1f6e480c.js","assets/index.ddce9c6f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.65f1406a.js","assets/Logo.590cd82e.js","assets/Logo.b7d81119.css","assets/index.43e20e3a.js","assets/Sidebar.e69f49bd.css","assets/Badge.8f347a42.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.91810ba2.js"),["assets/ProjectsView.91810ba2.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b7236069.js","assets/PhCube.vue.fd895181.js","assets/PhFolder.vue.475c2153.js","assets/PhGear.vue.8189d98a.js","assets/PhUsersThree.vue.6b6c66a1.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/member.10d2e203.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/folder.ec09b4fe.js","assets/ant-design.a3fa25dc.js","assets/organization.fb3f1406.js","assets/CollapsePanel.8d494858.js","assets/index.8bb003eb.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.00c9c897.js"),["assets/EditorsView.00c9c897.js","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/index.bf1417af.js","assets/CrudView.c80c8ede.css","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/member.10d2e203.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/string.e1f81484.js","assets/ant-design.a3fa25dc.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.1f09533c.js"),["assets/Billing.1f09533c.js","assets/asyncComputed.0a23ae67.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/organization.fb3f1406.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/string.e1f81484.js","assets/LoadingContainer.13fd91af.js","assets/LoadingContainer.56fa997a.css","assets/index.43e20e3a.js","assets/Badge.8f347a42.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.314348b8.js"),["assets/Project.314348b8.js","assets/Navbar.f92ba49e.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/asyncComputed.0a23ae67.js","assets/PhChats.vue.9f9a908c.js","assets/PhSignOut.vue.d04cd7af.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.bf1417af.js","assets/Avatar.d6c71d50.js","assets/index.a49e822c.js","assets/index.9cf27ed7.js","assets/BookOutlined.7d4ce61a.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.3d3555b0.js","assets/BaseLayout.b7a1f19a.css","assets/organization.fb3f1406.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/Sidebar.1f6e480c.js","assets/index.ddce9c6f.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.65f1406a.js","assets/Logo.590cd82e.js","assets/Logo.b7d81119.css","assets/index.43e20e3a.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.80401d62.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.27cbb058.js","assets/PhFilePy.vue.b0c5b75f.js","assets/PhRocket.vue.eef66660.js","assets/PhKey.vue.eb78f067.js","assets/PhRobot.vue.71766df8.js","assets/Badge.8f347a42.js","assets/Project.107f7666.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.d6778326.js"),["assets/Live.d6778326.js","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/index.bf1417af.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.0a23ae67.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/build.9945c9e0.js","assets/organization.fb3f1406.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/datetime.cbfddf0b.js","assets/polling.b39f11ad.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3d7ae74f.js","assets/CheckCircleFilled.7ddce542.js","assets/LoadingOutlined.755ba0dd.js","assets/PhArrowCounterClockwise.vue.27cbb058.js","assets/PhArrowSquareOut.vue.72b6f932.js","assets/PhChats.vue.9f9a908c.js","assets/PhCopySimple.vue.e7aa4d3e.js","assets/Live.97211844.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.451e6f6d.js"),["assets/Builds.451e6f6d.js","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/index.bf1417af.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.0a23ae67.js","assets/datetime.cbfddf0b.js","assets/polling.b39f11ad.js","assets/PhArrowCounterClockwise.vue.27cbb058.js","assets/PhCube.vue.fd895181.js","assets/PhDownloadSimple.vue.cc91a656.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/build.9945c9e0.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/PhWebhooksLogo.vue.4bc24675.js","assets/index.8bb003eb.js","assets/ExclamationCircleOutlined.f971f657.js","assets/CloseCircleOutlined.23f89a73.js","assets/LoadingOutlined.755ba0dd.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.1170b6e0.js"),["assets/ConnectorsView.1170b6e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b7236069.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/ConnectorCard.6a37b785.js","assets/Avatar.d6c71d50.js","assets/Card.b88d6b63.js","assets/TabPane.bed663b0.js","assets/ConnectorCard.46c492b4.css","assets/index.bf1417af.js","assets/Badge.8f347a42.js","assets/ConnectorsView.a4c38244.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.afa4ad9e.js"),["assets/Tables.afa4ad9e.js","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/index.bf1417af.js","assets/CrudView.c80c8ede.css","assets/ant-design.a3fa25dc.js","assets/asyncComputed.0a23ae67.js","assets/string.e1f81484.js","assets/PhPencil.vue.76b1de62.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.5a4f170d.js","assets/TabPane.bed663b0.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.4defc643.js"),["assets/Tasks.4defc643.js","assets/TasksView.vue_vue_type_script_setup_true_lang.26336600.js","assets/tasksController.64f4cc52.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/linters.a76e6b2b.js","assets/asyncComputed.0a23ae67.js","assets/scripts.196b2163.js","assets/record.24c30899.js","assets/polling.b39f11ad.js","assets/string.e1f81484.js","assets/metadata.34f2496e.js","assets/PhRobot.vue.71766df8.js","assets/PhWebhooksLogo.vue.4bc24675.js","assets/ant-design.a3fa25dc.js","assets/dayjs.0be73bd0.js","assets/index.af6481fc.js","assets/build.9945c9e0.js","assets/project.948eacf6.js","assets/tables.ad294145.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.e4dcbf70.js"),["assets/Sql.e4dcbf70.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/PhDownloadSimple.vue.cc91a656.js","assets/toggleHighContrast.7e82b763.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.5a4f170d.js","assets/TabPane.bed663b0.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.9e7cf024.js"),["assets/TablesDiagram.9e7cf024.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b7236069.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/asyncComputed.0a23ae67.js","assets/PhKey.vue.eb78f067.js","assets/PhPencil.vue.76b1de62.js","assets/vue-flow-minimap.2fb83ae2.js","assets/vue-flow-core.5f8816c2.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/string.e1f81484.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.5a4f170d.js","assets/TabPane.bed663b0.js","assets/index.bf1417af.js","assets/Card.b88d6b63.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.d3d4f178.js"),["assets/ApiKeys.d3d4f178.js","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/index.bf1417af.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.0a23ae67.js","assets/apiKey.ac6ceafa.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/member.10d2e203.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.c4dac1a2.js"),["assets/Logs.c4dac1a2.js","assets/Logs.vue_vue_type_script_setup_true_lang.06bdb1cc.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/build.9945c9e0.js","assets/string.e1f81484.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3d7ae74f.js","assets/CheckCircleFilled.7ddce542.js","assets/LoadingOutlined.755ba0dd.js","assets/polling.b39f11ad.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b7236069.js","assets/datetime.cbfddf0b.js","assets/ant-design.a3fa25dc.js","assets/index.bf1417af.js","assets/index.af6481fc.js","assets/dayjs.0be73bd0.js","assets/CollapsePanel.8d494858.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.16b94b97.js"),["assets/ProjectSettings.16b94b97.js","assets/asyncComputed.0a23ae67.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/SaveButton.d6c552f8.js","assets/UnsavedChangesHandler.7dbc931e.js","assets/ExclamationCircleOutlined.f971f657.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/index.af6481fc.js","assets/index.bf1417af.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.6adde80e.js"),["assets/EnvVars.6adde80e.js","assets/controller.074cc693.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/fetch.15cfcf58.js","assets/record.24c30899.js","assets/PhPencil.vue.76b1de62.js","assets/View.vue_vue_type_script_setup_true_lang.3affbb76.js","assets/SaveButton.d6c552f8.js","assets/UnsavedChangesHandler.7dbc931e.js","assets/ExclamationCircleOutlined.f971f657.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.c74056d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/Badge.8f347a42.js","assets/index.bf1417af.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.0a23ae67.js","assets/polling.b39f11ad.js","assets/index.ddce9c6f.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.cf994d32.js"),["assets/Files.cf994d32.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/ContentLayout.80401d62.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.164003e4.js","assets/popupNotifcation.3768cea6.js","assets/ant-design.a3fa25dc.js","assets/string.e1f81484.js","assets/PhFolder.vue.475c2153.js","assets/FilesNavigator.57c0a8d7.css","assets/asyncComputed.0a23ae67.js","assets/gateway.5f4db8f8.js","assets/tables.ad294145.js","assets/record.24c30899.js","assets/Files.3e452e04.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.d57d63da.js"),["assets/View.d57d63da.js","assets/asyncComputed.0a23ae67.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/index.bf1417af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js","assets/BookOutlined.7d4ce61a.js","assets/index.c38833e4.js","assets/Badge.8f347a42.js","assets/CrudView.c74056d2.js","assets/url.dba97c13.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.af6481fc.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.76b1de62.js","assets/repository.9022303e.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/fetch.15cfcf58.js","assets/record.24c30899.js","assets/ant-design.a3fa25dc.js","assets/TabPane.bed663b0.js"]),meta:{title:"Access Control - Abstra Console"}},{path:"agents",name:"agents",component:()=>o(()=>import("./AgentsView.6a74ae8d.js"),["assets/AgentsView.6a74ae8d.js","assets/ConnectorCard.6a37b785.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/Avatar.d6c71d50.js","assets/Card.b88d6b63.js","assets/TabPane.bed663b0.js","assets/ConnectorCard.46c492b4.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b7236069.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/PhDotsThreeVertical.vue.f6f2f29a.js","assets/index.bf1417af.js","assets/Badge.8f347a42.js","assets/AgentsView.ffc1c231.css"]),meta:{title:"Agents - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.78864cb2.js"),["assets/TableEditor.78864cb2.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b7236069.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/BaseLayout.3d3555b0.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.0a23ae67.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/organization.fb3f1406.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/ContentLayout.80401d62.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.8189d98a.js","assets/index.bf1417af.js","assets/index.c38833e4.js","assets/Badge.8f347a42.js","assets/PhCheckCircle.vue.b4e65e2d.js","assets/index.1e109f41.js","assets/PhArrowDown.vue.60fe8446.js","assets/ant-design.a3fa25dc.js","assets/PhCaretRight.vue.ebb2e3c9.js","assets/index.a49e822c.js","assets/index.9cf27ed7.js","assets/Avatar.d6c71d50.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.de463e38.js"),["assets/WebEditor.de463e38.js","assets/index.980da6b3.js","assets/index.ae14d18e.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.65f1406a.js","assets/Logo.590cd82e.js","assets/Logo.b7d81119.css","assets/BaseLayout.3d3555b0.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.15cfcf58.js","assets/gateway.5f4db8f8.js","assets/popupNotifcation.3768cea6.js","assets/project.948eacf6.js","assets/record.24c30899.js","assets/tables.ad294145.js","assets/string.e1f81484.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{A(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:window.location.origin+t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),s.boot())});export{w as A,s as C,I as T,_ as r};
//# sourceMappingURL=router.f27223eb.js.map
