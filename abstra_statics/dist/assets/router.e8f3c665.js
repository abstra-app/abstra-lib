var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.fd146592.js";import{cM as u,x as b,h as E,i as g,_ as o,j as A}from"./index.aae55199.js";import{C as l,a as f}from"./gateway.a06bc576.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5814cf2f-b7b9-48f7-b25c-388cb3005204",t._sentryDebugIdIdentifier="sentry-dbid-5814cf2f-b7b9-48f7-b25c-388cb3005204")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class v{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;m(s,"booted",!1);class w{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const n=new w;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.15f5f679.js"),["assets/WidgetPreview.15f5f679.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/Steps.e2872eee.js","assets/index.3481b347.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.8266118c.js","assets/colorHelpers.f9f13f7e.js","assets/index.71564cfe.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.22d7cd9d.js"),["assets/Login.22d7cd9d.js","assets/OTPInput.c196ca60.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/OTPInput.277362d6.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.41b96ff9.js","assets/Logo.4470ab2c.js","assets/Logo.8bf94625.css","assets/string.b2c7262c.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.9a1c91be.js","assets/Badge.fd146592.js","assets/Login.8c4b2736.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.a2ff065d.js"),["assets/EditorLogin.a2ff065d.js","assets/Navbar.e938f729.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/asyncComputed.134e912f.js","assets/PhChats.vue.2ae70d88.js","assets/PhSignOut.vue.84117117.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.4faa8139.js","assets/Avatar.4b2538b7.js","assets/index.572f1bc6.js","assets/index.d100915b.js","assets/BookOutlined.179d0a19.js","assets/Navbar.ce698b7a.css","assets/url.8d81634b.js","assets/apiKey.476b5a56.js","assets/member.b539e2fb.js","assets/organization.3cc03528.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/folder.9dc8eac0.js","assets/Badge.fd146592.js","assets/EditorLogin.3d18a45f.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.7ee67b60.js"),["assets/Organizations.7ee67b60.js","assets/Navbar.e938f729.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/asyncComputed.134e912f.js","assets/PhChats.vue.2ae70d88.js","assets/PhSignOut.vue.84117117.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.4faa8139.js","assets/Avatar.4b2538b7.js","assets/index.572f1bc6.js","assets/index.d100915b.js","assets/BookOutlined.179d0a19.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.a973bc95.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.cce6f055.js","assets/ContentLayout.ee57a545.css","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.1b3be3c0.js","assets/PhPencil.vue.38df09d3.js","assets/organization.3cc03528.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/string.b2c7262c.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.1b8c38d4.js"),["assets/Organization.1b8c38d4.js","assets/Navbar.e938f729.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/asyncComputed.134e912f.js","assets/PhChats.vue.2ae70d88.js","assets/PhSignOut.vue.84117117.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.4faa8139.js","assets/Avatar.4b2538b7.js","assets/index.572f1bc6.js","assets/index.d100915b.js","assets/BookOutlined.179d0a19.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.a973bc95.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.cce6f055.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.75ef5b31.js","assets/PhUsersThree.vue.5c8cb06a.js","assets/organization.3cc03528.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/string.b2c7262c.js","assets/Sidebar.a5991d67.js","assets/index.9a1c91be.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.41b96ff9.js","assets/Logo.4470ab2c.js","assets/Logo.8bf94625.css","assets/index.b89b316c.js","assets/Sidebar.e69f49bd.css","assets/Badge.fd146592.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.6925420d.js"),["assets/ProjectsView.6925420d.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b56e25c4.js","assets/PhCube.vue.75ef5b31.js","assets/PhFolder.vue.e0f65d31.js","assets/PhGear.vue.424cae65.js","assets/PhUsersThree.vue.5c8cb06a.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/member.b539e2fb.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/folder.9dc8eac0.js","assets/ant-design.67767174.js","assets/organization.3cc03528.js","assets/CollapsePanel.c716ff71.js","assets/index.9b5337e2.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.7e472aff.js"),["assets/EditorsView.7e472aff.js","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/index.4faa8139.js","assets/CrudView.c80c8ede.css","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/member.b539e2fb.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/string.b2c7262c.js","assets/ant-design.67767174.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.7c664487.js"),["assets/Billing.7c664487.js","assets/asyncComputed.134e912f.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/organization.3cc03528.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/string.b2c7262c.js","assets/LoadingContainer.30a1b9fc.js","assets/LoadingContainer.56fa997a.css","assets/index.b89b316c.js","assets/Badge.fd146592.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.d00b3f81.js"),["assets/Project.d00b3f81.js","assets/Navbar.e938f729.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/asyncComputed.134e912f.js","assets/PhChats.vue.2ae70d88.js","assets/PhSignOut.vue.84117117.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.4faa8139.js","assets/Avatar.4b2538b7.js","assets/index.572f1bc6.js","assets/index.d100915b.js","assets/BookOutlined.179d0a19.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.a973bc95.js","assets/BaseLayout.b7a1f19a.css","assets/organization.3cc03528.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/Sidebar.a5991d67.js","assets/index.9a1c91be.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.41b96ff9.js","assets/Logo.4470ab2c.js","assets/Logo.8bf94625.css","assets/index.b89b316c.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.cce6f055.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.92914554.js","assets/PhIdentificationBadge.vue.f0151377.js","assets/PhKey.vue.3f0337cd.js","assets/PhRobot.vue.a40e8391.js","assets/Badge.fd146592.js","assets/Project.5822ddc8.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.9ac8952e.js"),["assets/Live.9ac8952e.js","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/index.4faa8139.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.134e912f.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/build.f7cfd8d2.js","assets/organization.3cc03528.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/datetime.c8da9602.js","assets/polling.0f410167.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.235b841a.js","assets/LoadingOutlined.8fc71330.js","assets/PhArrowCounterClockwise.vue.92914554.js","assets/PhArrowSquareOut.vue.1b3be3c0.js","assets/PhChats.vue.2ae70d88.js","assets/PhCopySimple.vue.511cd0e7.js","assets/Live.97211844.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.844789cc.js"),["assets/Builds.844789cc.js","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/index.4faa8139.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.134e912f.js","assets/datetime.c8da9602.js","assets/polling.0f410167.js","assets/PhArrowCounterClockwise.vue.92914554.js","assets/PhCube.vue.75ef5b31.js","assets/PhDownloadSimple.vue.03eda9e5.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/build.f7cfd8d2.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/PhWebhooksLogo.vue.35701dd2.js","assets/index.9b5337e2.js","assets/ExclamationCircleOutlined.28d351b6.js","assets/CloseCircleOutlined.aa55cf3a.js","assets/LoadingOutlined.8fc71330.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.a9b0efd6.js"),["assets/ConnectorsView.a9b0efd6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b56e25c4.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/ConnectorCard.d770904f.js","assets/Avatar.4b2538b7.js","assets/Card.e8e8d369.js","assets/TabPane.00aaa012.js","assets/ConnectorCard.46c492b4.css","assets/index.4faa8139.js","assets/Badge.fd146592.js","assets/ConnectorsView.a4c38244.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.7a122e35.js"),["assets/Tables.7a122e35.js","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/index.4faa8139.js","assets/CrudView.c80c8ede.css","assets/ant-design.67767174.js","assets/asyncComputed.134e912f.js","assets/string.b2c7262c.js","assets/PhPencil.vue.38df09d3.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.9548e26b.js","assets/TabPane.00aaa012.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.1d77bf9f.js"),["assets/Tasks.1d77bf9f.js","assets/TasksView.vue_vue_type_script_setup_true_lang.eaa89d3a.js","assets/tasksController.7823d02a.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/linters.c4f85ae8.js","assets/asyncComputed.134e912f.js","assets/scripts.e772d8a0.js","assets/record.26b8388b.js","assets/polling.0f410167.js","assets/string.b2c7262c.js","assets/metadata.58eef517.js","assets/PhRobot.vue.a40e8391.js","assets/PhWebhooksLogo.vue.35701dd2.js","assets/ant-design.67767174.js","assets/dayjs.9b43668c.js","assets/index.796ce9c7.js","assets/build.f7cfd8d2.js","assets/project.6a1f6932.js","assets/tables.1ff1e550.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.f7b03f9e.js"),["assets/Sql.f7b03f9e.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/PhDownloadSimple.vue.03eda9e5.js","assets/toggleHighContrast.f429325d.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.9548e26b.js","assets/TabPane.00aaa012.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.610ac9a5.js"),["assets/TablesDiagram.610ac9a5.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b56e25c4.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/asyncComputed.134e912f.js","assets/PhKey.vue.3f0337cd.js","assets/PhPencil.vue.38df09d3.js","assets/vue-flow-minimap.3cf062cc.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/string.b2c7262c.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.9548e26b.js","assets/TabPane.00aaa012.js","assets/index.4faa8139.js","assets/Card.e8e8d369.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.079b3e17.js"),["assets/ApiKeys.079b3e17.js","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/index.4faa8139.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.134e912f.js","assets/apiKey.476b5a56.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/member.b539e2fb.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.afbd78d2.js"),["assets/Logs.afbd78d2.js","assets/Logs.vue_vue_type_script_setup_true_lang.c7dfc9fb.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/build.f7cfd8d2.js","assets/string.b2c7262c.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.235b841a.js","assets/LoadingOutlined.8fc71330.js","assets/polling.0f410167.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b56e25c4.js","assets/datetime.c8da9602.js","assets/ant-design.67767174.js","assets/index.4faa8139.js","assets/index.796ce9c7.js","assets/dayjs.9b43668c.js","assets/CollapsePanel.c716ff71.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.6cf929fe.js"),["assets/ProjectSettings.6cf929fe.js","assets/asyncComputed.134e912f.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/SaveButton.2e36d57e.js","assets/UnsavedChangesHandler.b5735aed.js","assets/ExclamationCircleOutlined.28d351b6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/index.796ce9c7.js","assets/index.4faa8139.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.5c8646dc.js"),["assets/EnvVars.5c8646dc.js","assets/View.vue_vue_type_script_setup_true_lang.4e641cab.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/fetch.5e2a17b3.js","assets/record.26b8388b.js","assets/SaveButton.2e36d57e.js","assets/UnsavedChangesHandler.b5735aed.js","assets/ExclamationCircleOutlined.28d351b6.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.91be7e08.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/Badge.fd146592.js","assets/index.4faa8139.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.134e912f.js","assets/polling.0f410167.js","assets/PhPencil.vue.38df09d3.js","assets/index.9a1c91be.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.5b089688.js"),["assets/Files.5b089688.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/ContentLayout.cce6f055.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.23e783cd.js","assets/popupNotifcation.bfa75adc.js","assets/ant-design.67767174.js","assets/string.b2c7262c.js","assets/FilesNavigator.ebc9fb1c.css","assets/asyncComputed.134e912f.js","assets/gateway.a06bc576.js","assets/tables.1ff1e550.js","assets/record.26b8388b.js","assets/Files.3e452e04.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.c2960c4b.js"),["assets/View.c2960c4b.js","assets/asyncComputed.134e912f.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/index.4faa8139.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.03b5bdb0.js","assets/BookOutlined.179d0a19.js","assets/index.1ff080f2.js","assets/Badge.fd146592.js","assets/CrudView.91be7e08.js","assets/url.8d81634b.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.796ce9c7.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.38df09d3.js","assets/repository.9d4444ee.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/fetch.5e2a17b3.js","assets/record.26b8388b.js","assets/ant-design.67767174.js","assets/TabPane.00aaa012.js"]),meta:{title:"Access Control - Abstra Console"}},{path:"agents",name:"agents",component:()=>o(()=>import("./AgentsView.759403de.js"),["assets/AgentsView.759403de.js","assets/ConnectorCard.d770904f.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/Avatar.4b2538b7.js","assets/Card.e8e8d369.js","assets/TabPane.00aaa012.js","assets/ConnectorCard.46c492b4.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b56e25c4.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/PhDotsThreeVertical.vue.209b793e.js","assets/index.4faa8139.js","assets/Badge.fd146592.js","assets/AgentsView.ffc1c231.css"]),meta:{title:"Agents - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.8c2bd563.js"),["assets/TableEditor.8c2bd563.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.b56e25c4.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/BaseLayout.a973bc95.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.134e912f.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/organization.3cc03528.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/ContentLayout.cce6f055.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.424cae65.js","assets/index.4faa8139.js","assets/index.1ff080f2.js","assets/Badge.fd146592.js","assets/PhCheckCircle.vue.cef197e2.js","assets/index.8267b6af.js","assets/PhArrowDown.vue.f921b522.js","assets/ant-design.67767174.js","assets/PhCaretRight.vue.be8597c4.js","assets/index.572f1bc6.js","assets/index.d100915b.js","assets/Avatar.4b2538b7.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.5cb8325f.js"),["assets/WebEditor.5cb8325f.js","assets/index.aae55199.js","assets/index.ae14d18e.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.41b96ff9.js","assets/Logo.4470ab2c.js","assets/Logo.8bf94625.css","assets/BaseLayout.a973bc95.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.5e2a17b3.js","assets/gateway.a06bc576.js","assets/popupNotifcation.bfa75adc.js","assets/project.6a1f6932.js","assets/record.26b8388b.js","assets/tables.1ff1e550.js","assets/string.b2c7262c.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{A(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:window.location.origin+t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),s.boot())});export{v as A,s as C,I as T,_ as r};
//# sourceMappingURL=router.e8f3c665.js.map
