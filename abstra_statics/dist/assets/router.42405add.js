var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.41495132.js";import{cM as u,x as b,h as E,i as g,_ as o,j as A}from"./index.f3c8f0bd.js";import{C as l,a as f}from"./gateway.2b0541c1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ddfa9452-efec-460d-8568-f0e877bcec7f",t._sentryDebugIdIdentifier="sentry-dbid-ddfa9452-efec-460d-8568-f0e877bcec7f")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class v{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;m(s,"booted",!1);class w{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const n=new w;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:g("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.3e5d9dde.js"),["assets/WidgetPreview.3e5d9dde.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/Steps.9c898a2c.js","assets/index.c8fa813c.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.23ccfb83.js","assets/colorHelpers.98ceaf1a.js","assets/index.e4503151.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.34804296.js"),["assets/Login.34804296.js","assets/OTPInput.70ee540c.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/OTPInput.277362d6.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.4a6732fd.js","assets/Logo.d475ffbd.js","assets/Logo.8bf94625.css","assets/string.538d1449.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.6b72fb4c.js","assets/Badge.41495132.js","assets/Login.8c4b2736.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.6e0930c9.js"),["assets/EditorLogin.6e0930c9.js","assets/Navbar.9059e924.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/asyncComputed.43ea2068.js","assets/PhChats.vue.20068b9b.js","assets/PhSignOut.vue.f12a4fb1.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.70f800f8.js","assets/Avatar.a2e56f3e.js","assets/index.4ec00092.js","assets/index.c86663f7.js","assets/BookOutlined.4a8230ea.js","assets/Navbar.ce698b7a.css","assets/url.f792ff7c.js","assets/apiKey.ab466b00.js","assets/member.1c30b951.js","assets/organization.dfd846e6.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/folder.6daca6cb.js","assets/Badge.41495132.js","assets/EditorLogin.3d18a45f.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.5eafd1ca.js"),["assets/Organizations.5eafd1ca.js","assets/Navbar.9059e924.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/asyncComputed.43ea2068.js","assets/PhChats.vue.20068b9b.js","assets/PhSignOut.vue.f12a4fb1.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.70f800f8.js","assets/Avatar.a2e56f3e.js","assets/index.4ec00092.js","assets/index.c86663f7.js","assets/BookOutlined.4a8230ea.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.3528b0d2.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.a77ad08f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.14824ee3.js","assets/PhPencil.vue.43a0f38c.js","assets/organization.dfd846e6.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/string.538d1449.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.7e86efa9.js"),["assets/Organization.7e86efa9.js","assets/Navbar.9059e924.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/asyncComputed.43ea2068.js","assets/PhChats.vue.20068b9b.js","assets/PhSignOut.vue.f12a4fb1.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.70f800f8.js","assets/Avatar.a2e56f3e.js","assets/index.4ec00092.js","assets/index.c86663f7.js","assets/BookOutlined.4a8230ea.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.3528b0d2.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.a77ad08f.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.d03bcae4.js","assets/PhUsersThree.vue.e9db696c.js","assets/organization.dfd846e6.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/string.538d1449.js","assets/Sidebar.adaa38be.js","assets/index.6b72fb4c.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.4a6732fd.js","assets/Logo.d475ffbd.js","assets/Logo.8bf94625.css","assets/index.c5495b52.js","assets/Sidebar.e69f49bd.css","assets/Badge.41495132.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.c2b95f01.js"),["assets/ProjectsView.c2b95f01.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.75dac206.js","assets/PhCube.vue.d03bcae4.js","assets/PhFolder.vue.3c38b847.js","assets/PhGear.vue.0a1994ec.js","assets/PhUsersThree.vue.e9db696c.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/member.1c30b951.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/folder.6daca6cb.js","assets/ant-design.ddb9cdde.js","assets/organization.dfd846e6.js","assets/CollapsePanel.9afba98b.js","assets/index.9c2c9e3c.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.0395a168.js"),["assets/EditorsView.0395a168.js","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/index.70f800f8.js","assets/CrudView.c80c8ede.css","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/member.1c30b951.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/string.538d1449.js","assets/ant-design.ddb9cdde.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.e78d36ea.js"),["assets/Billing.e78d36ea.js","assets/asyncComputed.43ea2068.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/organization.dfd846e6.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/string.538d1449.js","assets/LoadingContainer.6cb1dd83.js","assets/LoadingContainer.56fa997a.css","assets/index.c5495b52.js","assets/Badge.41495132.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.179c43e8.js"),["assets/Project.179c43e8.js","assets/Navbar.9059e924.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/asyncComputed.43ea2068.js","assets/PhChats.vue.20068b9b.js","assets/PhSignOut.vue.f12a4fb1.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.70f800f8.js","assets/Avatar.a2e56f3e.js","assets/index.4ec00092.js","assets/index.c86663f7.js","assets/BookOutlined.4a8230ea.js","assets/Navbar.ce698b7a.css","assets/BaseLayout.3528b0d2.js","assets/BaseLayout.b7a1f19a.css","assets/organization.dfd846e6.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/Sidebar.adaa38be.js","assets/index.6b72fb4c.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.4a6732fd.js","assets/Logo.d475ffbd.js","assets/Logo.8bf94625.css","assets/index.c5495b52.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.a77ad08f.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.d4191e7e.js","assets/PhIdentificationBadge.vue.19e39c65.js","assets/PhKey.vue.89165d3e.js","assets/PhRobot.vue.acc7df5c.js","assets/Badge.41495132.js","assets/Project.107f7666.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.393a4773.js"),["assets/Live.393a4773.js","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/index.70f800f8.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.43ea2068.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/build.1b57881b.js","assets/organization.dfd846e6.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/datetime.152d0abe.js","assets/polling.2e0e4e33.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.aca82d7b.js","assets/LoadingOutlined.068e0581.js","assets/PhArrowCounterClockwise.vue.d4191e7e.js","assets/PhArrowSquareOut.vue.14824ee3.js","assets/PhChats.vue.20068b9b.js","assets/PhCopySimple.vue.f12f66d7.js","assets/Live.97211844.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.557f3db3.js"),["assets/Builds.557f3db3.js","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/index.70f800f8.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.43ea2068.js","assets/datetime.152d0abe.js","assets/polling.2e0e4e33.js","assets/PhArrowCounterClockwise.vue.d4191e7e.js","assets/PhCube.vue.d03bcae4.js","assets/PhDownloadSimple.vue.94cdcd27.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/build.1b57881b.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/PhWebhooksLogo.vue.982f3430.js","assets/index.9c2c9e3c.js","assets/ExclamationCircleOutlined.b94f2dfe.js","assets/CloseCircleOutlined.6e638593.js","assets/LoadingOutlined.068e0581.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.1889b65f.js"),["assets/ConnectorsView.1889b65f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.75dac206.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/ConnectorCard.d49c4a49.js","assets/Avatar.a2e56f3e.js","assets/Card.f2154f7b.js","assets/TabPane.aa83a8f1.js","assets/ConnectorCard.46c492b4.css","assets/index.70f800f8.js","assets/Badge.41495132.js","assets/ConnectorsView.a4c38244.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.6aa27216.js"),["assets/Tables.6aa27216.js","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/index.70f800f8.js","assets/CrudView.c80c8ede.css","assets/ant-design.ddb9cdde.js","assets/asyncComputed.43ea2068.js","assets/string.538d1449.js","assets/PhPencil.vue.43a0f38c.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.266ef4a2.js","assets/TabPane.aa83a8f1.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.3cbe53ba.js"),["assets/Tasks.3cbe53ba.js","assets/TasksView.vue_vue_type_script_setup_true_lang.25673a45.js","assets/tasksController.182fbd14.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/linters.d91dd72a.js","assets/asyncComputed.43ea2068.js","assets/scripts.7550ea3f.js","assets/record.3d29baa1.js","assets/polling.2e0e4e33.js","assets/string.538d1449.js","assets/metadata.d8be5ea2.js","assets/PhRobot.vue.acc7df5c.js","assets/PhWebhooksLogo.vue.982f3430.js","assets/ant-design.ddb9cdde.js","assets/dayjs.f8de5344.js","assets/index.11bee9b5.js","assets/build.1b57881b.js","assets/project.0070253c.js","assets/tables.1c5243b6.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.b3b6cc78.js"),["assets/Sql.b3b6cc78.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/PhDownloadSimple.vue.94cdcd27.js","assets/toggleHighContrast.9daeaf18.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.266ef4a2.js","assets/TabPane.aa83a8f1.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.c742cc5f.js"),["assets/TablesDiagram.c742cc5f.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.75dac206.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/asyncComputed.43ea2068.js","assets/PhKey.vue.89165d3e.js","assets/PhPencil.vue.43a0f38c.js","assets/vue-flow-minimap.e5be7ad9.js","assets/vue-flow-core.46089656.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/string.538d1449.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.266ef4a2.js","assets/TabPane.aa83a8f1.js","assets/index.70f800f8.js","assets/Card.f2154f7b.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.2ff7edeb.js"),["assets/ApiKeys.2ff7edeb.js","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/index.70f800f8.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.43ea2068.js","assets/apiKey.ab466b00.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/member.1c30b951.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.90916499.js"),["assets/Logs.90916499.js","assets/Logs.vue_vue_type_script_setup_true_lang.92c59542.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/build.1b57881b.js","assets/string.538d1449.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.aca82d7b.js","assets/LoadingOutlined.068e0581.js","assets/polling.2e0e4e33.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.75dac206.js","assets/datetime.152d0abe.js","assets/ant-design.ddb9cdde.js","assets/index.70f800f8.js","assets/index.11bee9b5.js","assets/dayjs.f8de5344.js","assets/CollapsePanel.9afba98b.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.54c205a9.js"),["assets/ProjectSettings.54c205a9.js","assets/asyncComputed.43ea2068.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/SaveButton.ab6b773f.js","assets/UnsavedChangesHandler.202a8200.js","assets/ExclamationCircleOutlined.b94f2dfe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/index.11bee9b5.js","assets/index.70f800f8.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.376ab464.js"),["assets/EnvVars.376ab464.js","assets/controller.3370b347.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/fetch.949132ec.js","assets/record.3d29baa1.js","assets/PhPencil.vue.43a0f38c.js","assets/View.vue_vue_type_script_setup_true_lang.8b738c78.js","assets/SaveButton.ab6b773f.js","assets/UnsavedChangesHandler.202a8200.js","assets/ExclamationCircleOutlined.b94f2dfe.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.b8b0ff7f.css","assets/CrudView.60c66da6.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/Badge.41495132.js","assets/index.70f800f8.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.43ea2068.js","assets/polling.2e0e4e33.js","assets/index.6b72fb4c.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.5e61a052.js"),["assets/Files.5e61a052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/ContentLayout.a77ad08f.js","assets/ContentLayout.ee57a545.css","assets/FilesNavigator.9ec20a3e.js","assets/popupNotifcation.06d25674.js","assets/ant-design.ddb9cdde.js","assets/string.538d1449.js","assets/FilesNavigator.ebc9fb1c.css","assets/asyncComputed.43ea2068.js","assets/gateway.2b0541c1.js","assets/tables.1c5243b6.js","assets/record.3d29baa1.js","assets/Files.3e452e04.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.3e3344dc.js"),["assets/View.3e3344dc.js","assets/asyncComputed.43ea2068.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/index.70f800f8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7cb4170.js","assets/BookOutlined.4a8230ea.js","assets/index.0764ee6e.js","assets/Badge.41495132.js","assets/CrudView.60c66da6.js","assets/url.f792ff7c.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.11bee9b5.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.43a0f38c.js","assets/repository.37f77d05.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/fetch.949132ec.js","assets/record.3d29baa1.js","assets/ant-design.ddb9cdde.js","assets/TabPane.aa83a8f1.js"]),meta:{title:"Access Control - Abstra Console"}},{path:"agents",name:"agents",component:()=>o(()=>import("./AgentsView.ed781358.js"),["assets/AgentsView.ed781358.js","assets/ConnectorCard.d49c4a49.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/Avatar.a2e56f3e.js","assets/Card.f2154f7b.js","assets/TabPane.aa83a8f1.js","assets/ConnectorCard.46c492b4.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.75dac206.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/PhDotsThreeVertical.vue.ca8276c3.js","assets/index.70f800f8.js","assets/Badge.41495132.js","assets/AgentsView.ffc1c231.css"]),meta:{title:"Agents - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.9d67e0c0.js"),["assets/TableEditor.9d67e0c0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.75dac206.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/BaseLayout.3528b0d2.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.43ea2068.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/organization.dfd846e6.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/ContentLayout.a77ad08f.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.0a1994ec.js","assets/index.70f800f8.js","assets/index.0764ee6e.js","assets/Badge.41495132.js","assets/PhCheckCircle.vue.d8dfe239.js","assets/index.4a0ecafc.js","assets/PhArrowDown.vue.c8a78e30.js","assets/ant-design.ddb9cdde.js","assets/index.4ec00092.js","assets/index.c86663f7.js","assets/Avatar.a2e56f3e.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.e1335aca.js"),["assets/WebEditor.e1335aca.js","assets/index.f3c8f0bd.js","assets/index.ae14d18e.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.4a6732fd.js","assets/Logo.d475ffbd.js","assets/Logo.8bf94625.css","assets/BaseLayout.3528b0d2.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.949132ec.js","assets/gateway.2b0541c1.js","assets/popupNotifcation.06d25674.js","assets/project.0070253c.js","assets/record.3d29baa1.js","assets/tables.1c5243b6.js","assets/string.538d1449.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{A(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:window.location.origin+t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),s.boot())});export{v as A,s as C,I as T,_ as r};
//# sourceMappingURL=router.42405add.js.map
