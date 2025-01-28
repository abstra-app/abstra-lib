var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.569200c6.js";import{cM as u,x as b,h as E,i as A,_ as o,j as g}from"./index.a701e366.js";import{C as l,a as f}from"./gateway.d41e4aa0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="99787c12-a47f-48df-ac54-2d59640ae51b",t._sentryDebugIdIdentifier="sentry-dbid-99787c12-a47f-48df-ac54-2d59640ae51b")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class v{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;m(i,"booted",!1);class w{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const s=new w;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.429e8534.js"),["assets/WidgetPreview.429e8534.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/Steps.9e5e16fb.js","assets/index.b56fc03b.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.2ade7073.js","assets/colorHelpers.9b23d237.js","assets/index.76a022d7.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.608a6bb2.js"),["assets/Login.608a6bb2.js","assets/CircularLoading.acda00ea.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1419874e.js","assets/Logo.9c52af15.js","assets/Logo.46d5120c.css","assets/string.03a69f55.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/Badge.569200c6.js","assets/Login.7dccb591.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.ce5b69e7.js"),["assets/EditorLogin.ce5b69e7.js","assets/Navbar.6cbf1c64.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/asyncComputed.b84af790.js","assets/PhChats.vue.6f92a7e0.js","assets/PhSignOut.vue.a5a46b59.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/index.2b3ce6b9.js","assets/Avatar.56ac0159.js","assets/index.9eac4252.js","assets/index.6a50e657.js","assets/BookOutlined.505c89f9.js","assets/Navbar.a899b0d6.css","assets/url.f8ee3ffa.js","assets/apiKey.2a3fe51a.js","assets/member.7429b963.js","assets/organization.74c788db.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/folder.18362f4a.js","assets/Badge.569200c6.js","assets/EditorLogin.5c26246d.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.fc228b0f.js"),["assets/Organizations.fc228b0f.js","assets/Navbar.6cbf1c64.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/asyncComputed.b84af790.js","assets/PhChats.vue.6f92a7e0.js","assets/PhSignOut.vue.a5a46b59.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/index.2b3ce6b9.js","assets/Avatar.56ac0159.js","assets/index.9eac4252.js","assets/index.6a50e657.js","assets/BookOutlined.505c89f9.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.417963b9.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.5fad2036.js","assets/ContentLayout.ee57a545.css","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.889caa4a.js","assets/PhPencil.vue.80a9e788.js","assets/organization.74c788db.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/string.03a69f55.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.f4f70ee6.js"),["assets/Organization.f4f70ee6.js","assets/Navbar.6cbf1c64.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/asyncComputed.b84af790.js","assets/PhChats.vue.6f92a7e0.js","assets/PhSignOut.vue.a5a46b59.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/index.2b3ce6b9.js","assets/Avatar.56ac0159.js","assets/index.9eac4252.js","assets/index.6a50e657.js","assets/BookOutlined.505c89f9.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.417963b9.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.5fad2036.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.73c095d7.js","assets/PhUsersThree.vue.9bf53b18.js","assets/organization.74c788db.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/string.03a69f55.js","assets/Sidebar.88deb01d.js","assets/index.91b486b8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1419874e.js","assets/Logo.9c52af15.js","assets/Logo.46d5120c.css","assets/index.82a1df9f.js","assets/Sidebar.e69f49bd.css","assets/Badge.569200c6.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.2ee6e57c.js"),["assets/ProjectsView.2ee6e57c.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.e2ee6be1.js","assets/PhCube.vue.73c095d7.js","assets/PhFolder.vue.e274b234.js","assets/PhGear.vue.01d03c15.js","assets/PhUsersThree.vue.9bf53b18.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/member.7429b963.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/folder.18362f4a.js","assets/ant-design.707f2aaa.js","assets/organization.74c788db.js","assets/CollapsePanel.a5b46158.js","assets/index.6f882de3.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.67bab093.js"),["assets/EditorsView.67bab093.js","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/index.2b3ce6b9.js","assets/CrudView.c80c8ede.css","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/member.7429b963.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/string.03a69f55.js","assets/ant-design.707f2aaa.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.9153318e.js"),["assets/Billing.9153318e.js","assets/asyncComputed.b84af790.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/organization.74c788db.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/string.03a69f55.js","assets/LoadingContainer.cfc2125d.js","assets/LoadingContainer.56fa997a.css","assets/index.82a1df9f.js","assets/Badge.569200c6.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.ac53e323.js"),["assets/Project.ac53e323.js","assets/Navbar.6cbf1c64.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/asyncComputed.b84af790.js","assets/PhChats.vue.6f92a7e0.js","assets/PhSignOut.vue.a5a46b59.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/index.2b3ce6b9.js","assets/Avatar.56ac0159.js","assets/index.9eac4252.js","assets/index.6a50e657.js","assets/BookOutlined.505c89f9.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.417963b9.js","assets/BaseLayout.b7a1f19a.css","assets/organization.74c788db.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/Sidebar.88deb01d.js","assets/index.91b486b8.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1419874e.js","assets/Logo.9c52af15.js","assets/Logo.46d5120c.css","assets/index.82a1df9f.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.5fad2036.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.949776df.js","assets/PhIdentificationBadge.vue.5d59c107.js","assets/PhKey.vue.c6cb6534.js","assets/Badge.569200c6.js","assets/Project.3add99b7.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.da73b47d.js"),["assets/Live.da73b47d.js","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/index.2b3ce6b9.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b84af790.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/build.a6e4a659.js","assets/organization.74c788db.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/datetime.ec3c0567.js","assets/polling.14f9e66c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.60b1e26b.js","assets/LoadingOutlined.6522a139.js","assets/PhArrowCounterClockwise.vue.949776df.js","assets/PhArrowSquareOut.vue.889caa4a.js","assets/PhChats.vue.6f92a7e0.js","assets/PhCopySimple.vue.115ab50e.js","assets/Live.d2244dfa.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.40a97677.js"),["assets/Builds.40a97677.js","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/index.2b3ce6b9.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b84af790.js","assets/datetime.ec3c0567.js","assets/polling.14f9e66c.js","assets/PhArrowCounterClockwise.vue.949776df.js","assets/PhCube.vue.73c095d7.js","assets/PhDownloadSimple.vue.ecb0f1e7.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/build.a6e4a659.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/PhWebhooksLogo.vue.dad2c655.js","assets/index.6f882de3.js","assets/ExclamationCircleOutlined.ef630a7a.js","assets/CloseCircleOutlined.e8582c6c.js","assets/LoadingOutlined.6522a139.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.27bd8b15.js"),["assets/ConnectorsView.27bd8b15.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.e2ee6be1.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/Avatar.56ac0159.js","assets/Card.28798f2c.js","assets/TabPane.80c9c2d0.js","assets/index.2b3ce6b9.js","assets/Badge.569200c6.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.6943b1ff.js"),["assets/Tables.6943b1ff.js","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/index.2b3ce6b9.js","assets/CrudView.c80c8ede.css","assets/ant-design.707f2aaa.js","assets/asyncComputed.b84af790.js","assets/string.03a69f55.js","assets/PhPencil.vue.80a9e788.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.9e6681ea.js","assets/TabPane.80c9c2d0.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.26fd7430.js"),["assets/Tasks.26fd7430.js","assets/TasksView.vue_vue_type_script_setup_true_lang.77c23c13.js","assets/tasksController.cf61f015.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/polling.14f9e66c.js","assets/string.03a69f55.js","assets/scripts.00b1788b.js","assets/record.17573268.js","assets/linters.1a2ad2c4.js","assets/asyncComputed.b84af790.js","assets/metadata.426f3118.js","assets/PhWebhooksLogo.vue.dad2c655.js","assets/ant-design.707f2aaa.js","assets/dayjs.1f752056.js","assets/index.ec2f97ef.js","assets/build.a6e4a659.js","assets/project.75629cfa.js","assets/tables.07f99db9.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.635447f1.js"),["assets/Sql.635447f1.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/PhDownloadSimple.vue.ecb0f1e7.js","assets/toggleHighContrast.2229cce4.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.9e6681ea.js","assets/TabPane.80c9c2d0.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.09a1db4e.js"),["assets/TablesDiagram.09a1db4e.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.e2ee6be1.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/asyncComputed.b84af790.js","assets/PhKey.vue.c6cb6534.js","assets/PhPencil.vue.80a9e788.js","assets/vue-flow-minimap.e70761ff.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/string.03a69f55.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.9e6681ea.js","assets/TabPane.80c9c2d0.js","assets/index.2b3ce6b9.js","assets/Card.28798f2c.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.e2717c83.js"),["assets/ApiKeys.e2717c83.js","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/index.2b3ce6b9.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b84af790.js","assets/apiKey.2a3fe51a.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/member.7429b963.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.a3a2dc7b.js"),["assets/Logs.a3a2dc7b.js","assets/Logs.vue_vue_type_script_setup_true_lang.a5a41bf8.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/string.03a69f55.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/build.a6e4a659.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.60b1e26b.js","assets/LoadingOutlined.6522a139.js","assets/polling.14f9e66c.js","assets/datetime.ec3c0567.js","assets/ant-design.707f2aaa.js","assets/index.2b3ce6b9.js","assets/index.ec2f97ef.js","assets/dayjs.1f752056.js","assets/CollapsePanel.a5b46158.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.c62ce04e.js"),["assets/ProjectSettings.c62ce04e.js","assets/asyncComputed.b84af790.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/SaveButton.1fde6127.js","assets/UnsavedChangesHandler.4cedf63d.js","assets/ExclamationCircleOutlined.ef630a7a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.ec2f97ef.js","assets/index.2b3ce6b9.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.c43be6b4.js"),["assets/EnvVars.c43be6b4.js","assets/View.vue_vue_type_script_setup_true_lang.e301071a.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/fetch.9613e46d.js","assets/record.17573268.js","assets/SaveButton.1fde6127.js","assets/UnsavedChangesHandler.4cedf63d.js","assets/ExclamationCircleOutlined.ef630a7a.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.8fcf1bf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/Badge.569200c6.js","assets/index.2b3ce6b9.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b84af790.js","assets/polling.14f9e66c.js","assets/PhPencil.vue.80a9e788.js","assets/index.91b486b8.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.1d8082ff.js"),["assets/Files.1d8082ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/ContentLayout.5fad2036.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.97d308ec.js","assets/ant-design.707f2aaa.js","assets/asyncComputed.b84af790.js","assets/gateway.d41e4aa0.js","assets/tables.07f99db9.js","assets/record.17573268.js","assets/string.03a69f55.js","assets/Card.28798f2c.js","assets/TabPane.80c9c2d0.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.9062ea1c.js"),["assets/View.9062ea1c.js","assets/asyncComputed.b84af790.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/index.2b3ce6b9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6c79ed48.js","assets/BookOutlined.505c89f9.js","assets/index.8455bbc8.js","assets/Badge.569200c6.js","assets/CrudView.8fcf1bf0.js","assets/url.f8ee3ffa.js","assets/PhDotsThreeVertical.vue.46aa46c5.js","assets/index.ec2f97ef.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.80a9e788.js","assets/repository.4ab67e09.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/fetch.9613e46d.js","assets/record.17573268.js","assets/ant-design.707f2aaa.js","assets/TabPane.80c9c2d0.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.bd7a4e7c.js"),["assets/TableEditor.bd7a4e7c.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.e2ee6be1.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/BaseLayout.417963b9.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.b84af790.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/organization.74c788db.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/ContentLayout.5fad2036.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.01d03c15.js","assets/index.2b3ce6b9.js","assets/index.8455bbc8.js","assets/Badge.569200c6.js","assets/PhCheckCircle.vue.9e0423c3.js","assets/index.9e04a84a.js","assets/PhArrowDown.vue.3cfe8a5f.js","assets/ant-design.707f2aaa.js","assets/PhCaretRight.vue.2ebeb1ac.js","assets/index.9eac4252.js","assets/index.6a50e657.js","assets/Avatar.56ac0159.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.20624783.js"),["assets/WebEditor.20624783.js","assets/index.a701e366.js","assets/index.65a6d955.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1419874e.js","assets/Logo.9c52af15.js","assets/Logo.46d5120c.css","assets/BaseLayout.417963b9.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.9613e46d.js","assets/gateway.d41e4aa0.js","assets/popupNotifcation.97d308ec.js","assets/project.75629cfa.js","assets/record.17573268.js","assets/tables.07f99db9.js","assets/string.03a69f55.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{g(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),i.boot())});export{v as A,i as C,I as T,_ as r};
//# sourceMappingURL=router.e4f44ac5.js.map
