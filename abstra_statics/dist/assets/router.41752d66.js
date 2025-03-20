var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.54c2a3b4.js";import{cM as u,x as b,h as E,i as g,_ as o,j as A}from"./index.9ec4908b.js";import{C as l,a as v}from"./gateway.988e63eb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8c919978-89e3-4298-b7b8-5112201c42d7",t._sentryDebugIdIdentifier="sentry-dbid-8c919978-89e3-4298-b7b8-5112201c42d7")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class w{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||w.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;m(s,"booted",!1);class I{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const n=new I;class f{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.b5fc5690.js"),["assets/WidgetPreview.b5fc5690.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/Steps.8422c896.js","assets/index.4230aeae.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.cb774a2a.js","assets/colorHelpers.917d3f18.js","assets/index.1dd6cb08.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.f3294cf1.js"),["assets/Login.f3294cf1.js","assets/OTPInput.c863e15f.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/OTPInput.277362d6.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.b76166b2.js","assets/Logo.38601fbb.js","assets/Logo.8bf94625.css","assets/string.928c5604.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.6ea424cc.js","assets/Badge.54c2a3b4.js","assets/Login.8c4b2736.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.a4a4b5e8.js"),["assets/EditorLogin.a4a4b5e8.js","assets/Navbar.ec5866ed.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/asyncComputed.dff47d77.js","assets/PhChats.vue.4ec58028.js","assets/PhSignOut.vue.788b66c2.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.8dd8b6be.js","assets/Avatar.3b237189.js","assets/index.831752bf.js","assets/index.d2041f5d.js","assets/BookOutlined.fc1f41dc.js","assets/Navbar.ce698b7a.css","assets/url.9b32da79.js","assets/apiKey.0ebd72cd.js","assets/member.0f16a11c.js","assets/organization.c5f471f0.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/folder.1435fb81.js","assets/Badge.54c2a3b4.js","assets/EditorLogin.3d18a45f.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.9382c9d1.js"),["assets/Organizations.9382c9d1.js","assets/Navbar.ec5866ed.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/asyncComputed.dff47d77.js","assets/PhChats.vue.4ec58028.js","assets/PhSignOut.vue.788b66c2.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.8dd8b6be.js","assets/Avatar.3b237189.js","assets/index.831752bf.js","assets/index.d2041f5d.js","assets/BookOutlined.fc1f41dc.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.ea979808.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.fa8f255b.js","assets/ContentLayout.ee57a545.css","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.e2433c03.js","assets/PhPencil.vue.4b90d8c4.js","assets/organization.c5f471f0.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/string.928c5604.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.f28c7c07.js"),["assets/Organization.f28c7c07.js","assets/Navbar.ec5866ed.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/asyncComputed.dff47d77.js","assets/PhChats.vue.4ec58028.js","assets/PhSignOut.vue.788b66c2.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.8dd8b6be.js","assets/Avatar.3b237189.js","assets/index.831752bf.js","assets/index.d2041f5d.js","assets/BookOutlined.fc1f41dc.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.ea979808.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.fa8f255b.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.2387b419.js","assets/PhUsersThree.vue.4eca5277.js","assets/organization.c5f471f0.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/string.928c5604.js","assets/Sidebar.c8482836.js","assets/index.6ea424cc.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.b76166b2.js","assets/Logo.38601fbb.js","assets/Logo.8bf94625.css","assets/index.ab212e90.js","assets/Sidebar.e69f49bd.css","assets/Badge.54c2a3b4.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.7e4f6037.js"),["assets/ProjectsView.7e4f6037.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js","assets/PhCube.vue.2387b419.js","assets/PhFolder.vue.b67bf34f.js","assets/PhGear.vue.f51e83a5.js","assets/PhUsersThree.vue.4eca5277.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/member.0f16a11c.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/folder.1435fb81.js","assets/ant-design.f5a10d13.js","assets/organization.c5f471f0.js","assets/CollapsePanel.c1e1ce84.js","assets/index.caaa1faf.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.9be2d049.js"),["assets/EditorsView.9be2d049.js","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/index.8dd8b6be.js","assets/CrudView.c80c8ede.css","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/member.0f16a11c.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/string.928c5604.js","assets/ant-design.f5a10d13.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.68c8bace.js"),["assets/Billing.68c8bace.js","assets/asyncComputed.dff47d77.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/organization.c5f471f0.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/string.928c5604.js","assets/LoadingContainer.a45d95c1.js","assets/LoadingContainer.56fa997a.css","assets/index.ab212e90.js","assets/Badge.54c2a3b4.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.2820a47d.js"),["assets/Project.2820a47d.js","assets/Navbar.ec5866ed.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/asyncComputed.dff47d77.js","assets/PhChats.vue.4ec58028.js","assets/PhSignOut.vue.788b66c2.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.8dd8b6be.js","assets/Avatar.3b237189.js","assets/index.831752bf.js","assets/index.d2041f5d.js","assets/BookOutlined.fc1f41dc.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.ea979808.js","assets/BaseLayout.b7a1f19a.css","assets/organization.c5f471f0.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/Sidebar.c8482836.js","assets/index.6ea424cc.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.b76166b2.js","assets/Logo.38601fbb.js","assets/Logo.8bf94625.css","assets/index.ab212e90.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.fa8f255b.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.4c68d213.js","assets/PhIdentificationBadge.vue.d50676a9.js","assets/PhKey.vue.9f8164eb.js","assets/PhRobot.vue.7548f621.js","assets/Badge.54c2a3b4.js","assets/Project.1cd68ede.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.e8d5437e.js"),["assets/Live.e8d5437e.js","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/index.8dd8b6be.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.dff47d77.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/build.f42794bc.js","assets/organization.c5f471f0.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/datetime.58c32ff0.js","assets/polling.f243698e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.210c131d.js","assets/LoadingOutlined.755e1f30.js","assets/PhArrowCounterClockwise.vue.4c68d213.js","assets/PhArrowSquareOut.vue.e2433c03.js","assets/PhChats.vue.4ec58028.js","assets/PhCopySimple.vue.8628a1f8.js","assets/Live.97211844.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.e06da1f9.js"),["assets/Builds.e06da1f9.js","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/index.8dd8b6be.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.dff47d77.js","assets/datetime.58c32ff0.js","assets/polling.f243698e.js","assets/PhArrowCounterClockwise.vue.4c68d213.js","assets/PhCube.vue.2387b419.js","assets/PhDownloadSimple.vue.6290e5cc.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/build.f42794bc.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/PhWebhooksLogo.vue.b56bf5d8.js","assets/index.caaa1faf.js","assets/ExclamationCircleOutlined.574ee8b7.js","assets/CloseCircleOutlined.92e7ac65.js","assets/LoadingOutlined.755e1f30.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.e3cb07fa.js"),["assets/ConnectorsView.e3cb07fa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/ConnectorCard.b77e7fe7.js","assets/Avatar.3b237189.js","assets/Card.2890f1d0.js","assets/TabPane.2ba9330d.js","assets/ConnectorCard.46c492b4.css","assets/index.8dd8b6be.js","assets/Badge.54c2a3b4.js","assets/ConnectorsView.a4c38244.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.d11967f1.js"),["assets/Tables.d11967f1.js","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/index.8dd8b6be.js","assets/CrudView.c80c8ede.css","assets/ant-design.f5a10d13.js","assets/asyncComputed.dff47d77.js","assets/string.928c5604.js","assets/PhPencil.vue.4b90d8c4.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.d9126246.js","assets/TabPane.2ba9330d.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.a34e7206.js"),["assets/Tasks.a34e7206.js","assets/TasksView.vue_vue_type_script_setup_true_lang.d600963d.js","assets/tasksController.e1069380.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/scripts.daf6ddd9.js","assets/record.82c779cf.js","assets/linters.2be430ba.js","assets/asyncComputed.dff47d77.js","assets/polling.f243698e.js","assets/string.928c5604.js","assets/metadata.513400d9.js","assets/PhRobot.vue.7548f621.js","assets/PhWebhooksLogo.vue.b56bf5d8.js","assets/ant-design.f5a10d13.js","assets/dayjs.37ea0140.js","assets/index.9d33ddfe.js","assets/build.f42794bc.js","assets/project.6715e302.js","assets/tables.0793b146.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.348085e9.js"),["assets/Sql.348085e9.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/PhDownloadSimple.vue.6290e5cc.js","assets/toggleHighContrast.9bd3303c.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.d9126246.js","assets/TabPane.2ba9330d.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.f49d3857.js"),["assets/TablesDiagram.f49d3857.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/asyncComputed.dff47d77.js","assets/PhKey.vue.9f8164eb.js","assets/PhPencil.vue.4b90d8c4.js","assets/vue-flow-minimap.93452f5d.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/string.928c5604.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.d9126246.js","assets/TabPane.2ba9330d.js","assets/index.8dd8b6be.js","assets/Card.2890f1d0.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.6fcd50f8.js"),["assets/ApiKeys.6fcd50f8.js","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/index.8dd8b6be.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.dff47d77.js","assets/apiKey.0ebd72cd.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/member.0f16a11c.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.23bdd725.js"),["assets/Logs.23bdd725.js","assets/Logs.vue_vue_type_script_setup_true_lang.b6f09010.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/build.f42794bc.js","assets/string.928c5604.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.210c131d.js","assets/LoadingOutlined.755e1f30.js","assets/polling.f243698e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js","assets/datetime.58c32ff0.js","assets/ant-design.f5a10d13.js","assets/index.8dd8b6be.js","assets/index.9d33ddfe.js","assets/dayjs.37ea0140.js","assets/CollapsePanel.c1e1ce84.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.10b92ce6.js"),["assets/ProjectSettings.10b92ce6.js","assets/asyncComputed.dff47d77.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/SaveButton.1bb7c2f5.js","assets/UnsavedChangesHandler.b5cbee23.js","assets/ExclamationCircleOutlined.574ee8b7.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.9d33ddfe.js","assets/index.8dd8b6be.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.c3757328.js"),["assets/EnvVars.c3757328.js","assets/View.vue_vue_type_script_setup_true_lang.b2b17bc4.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/fetch.517390b0.js","assets/record.82c779cf.js","assets/SaveButton.1bb7c2f5.js","assets/UnsavedChangesHandler.b5cbee23.js","assets/ExclamationCircleOutlined.574ee8b7.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.ef230581.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/Badge.54c2a3b4.js","assets/index.8dd8b6be.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.dff47d77.js","assets/polling.f243698e.js","assets/PhPencil.vue.4b90d8c4.js","assets/index.6ea424cc.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.e618a330.js"),["assets/Files.e618a330.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/ContentLayout.fa8f255b.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.74211ce2.js","assets/ant-design.f5a10d13.js","assets/asyncComputed.dff47d77.js","assets/gateway.988e63eb.js","assets/tables.0793b146.js","assets/record.82c779cf.js","assets/string.928c5604.js","assets/Card.2890f1d0.js","assets/TabPane.2ba9330d.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.7a6da9a8.js"),["assets/View.7a6da9a8.js","assets/asyncComputed.dff47d77.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/index.8dd8b6be.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js","assets/BookOutlined.fc1f41dc.js","assets/index.d8a5af6f.js","assets/Badge.54c2a3b4.js","assets/CrudView.ef230581.js","assets/url.9b32da79.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.9d33ddfe.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.4b90d8c4.js","assets/repository.263eca0d.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/fetch.517390b0.js","assets/record.82c779cf.js","assets/ant-design.f5a10d13.js","assets/TabPane.2ba9330d.js"]),meta:{title:"Access Control - Abstra Console"}},{path:"agents",name:"agents",component:()=>o(()=>import("./AgentsView.efbe98de.js"),["assets/AgentsView.efbe98de.js","assets/ConnectorCard.b77e7fe7.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/Avatar.3b237189.js","assets/Card.2890f1d0.js","assets/TabPane.2ba9330d.js","assets/ConnectorCard.46c492b4.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/PhDotsThreeVertical.vue.b32e24bb.js","assets/index.8dd8b6be.js","assets/Badge.54c2a3b4.js","assets/AgentsView.ffc1c231.css"]),meta:{title:"Agents - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.a5297032.js"),["assets/TableEditor.a5297032.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/BaseLayout.ea979808.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.dff47d77.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/organization.c5f471f0.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/ContentLayout.fa8f255b.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.f51e83a5.js","assets/index.8dd8b6be.js","assets/index.d8a5af6f.js","assets/Badge.54c2a3b4.js","assets/PhCheckCircle.vue.a8728c8a.js","assets/index.8c68bbf1.js","assets/PhArrowDown.vue.33d0034b.js","assets/ant-design.f5a10d13.js","assets/PhCaretRight.vue.ee70e2f7.js","assets/index.831752bf.js","assets/index.d2041f5d.js","assets/Avatar.3b237189.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.fa90cb42.js"),["assets/WebEditor.fa90cb42.js","assets/index.9ec4908b.js","assets/index.ae14d18e.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.b76166b2.js","assets/Logo.38601fbb.js","assets/Logo.8bf94625.css","assets/BaseLayout.ea979808.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.517390b0.js","assets/gateway.988e63eb.js","assets/popupNotifcation.74211ce2.js","assets/project.6715e302.js","assets/record.82c779cf.js","assets/tables.0793b146.js","assets/string.928c5604.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{A(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:window.location.origin+t.path,"prev-redirect":t.query.redirect}});return}a&&(f.trackPageView(),s.boot())});export{w as A,s as C,f as T,_ as r};
//# sourceMappingURL=router.41752d66.js.map
