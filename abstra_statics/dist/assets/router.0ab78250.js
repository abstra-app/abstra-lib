var _=Object.defineProperty;var h=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.78b81bf9.js";import{cO as u,x as b,h as E,i as A,_ as o,j as g}from"./index.b24b0be8.js";import{C as l,a as f}from"./gateway.5b2b2bc6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fc8f1d73-bdc0-45ba-a285-abff07d2eec0",t._sentryDebugIdIdentifier="sentry-dbid-fc8f1d73-bdc0-45ba-a285-abff07d2eec0")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class v{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;m(n,"booted",!1);class w{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const s=new w;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const d=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.92c1ddd4.js"),["assets/WidgetPreview.92c1ddd4.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/Steps.4a6032e9.js","assets/index.6632416c.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.2f980982.js","assets/colorHelpers.12df2224.js","assets/index.bc5f7fb1.js","assets/PlayerConfigProvider.cb445f57.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.0e2dd274.js"),["assets/Login.0e2dd274.js","assets/CircularLoading.2537df4f.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.eb59dd79.js","assets/Logo.15e49c15.js","assets/Logo.46d5120c.css","assets/string.9be7b1c9.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/Badge.78b81bf9.js","assets/Login.7dccb591.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.d431d7a4.js"),["assets/EditorLogin.d431d7a4.js","assets/Navbar.f358afd4.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/asyncComputed.8444b6d6.js","assets/PhChats.vue.eef3eb6f.js","assets/PhSignOut.vue.a2f897a7.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/index.d8ea2ac2.js","assets/Avatar.3c461396.js","assets/index.819e467e.js","assets/index.d2960486.js","assets/BookOutlined.9bd991bf.js","assets/Navbar.a899b0d6.css","assets/url.ed3aee72.js","assets/apiKey.f4e6ca02.js","assets/member.a1a19b02.js","assets/organization.62ac54bb.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/folder.3ba4628c.js","assets/Badge.78b81bf9.js","assets/EditorLogin.c928a0f9.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.fdcfcde7.js"),["assets/Organizations.fdcfcde7.js","assets/Navbar.f358afd4.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/asyncComputed.8444b6d6.js","assets/PhChats.vue.eef3eb6f.js","assets/PhSignOut.vue.a2f897a7.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/index.d8ea2ac2.js","assets/Avatar.3c461396.js","assets/index.819e467e.js","assets/index.d2960486.js","assets/BookOutlined.9bd991bf.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.81e03f25.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.36186c2f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.a36ebad0.js","assets/PhPencil.vue.eb2b49af.js","assets/organization.62ac54bb.js","assets/tables.b183d093.js","assets/record.45c57538.js","assets/string.9be7b1c9.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.7143ea8d.js"),["assets/Organization.7143ea8d.js","assets/Navbar.f358afd4.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/asyncComputed.8444b6d6.js","assets/PhChats.vue.eef3eb6f.js","assets/PhSignOut.vue.a2f897a7.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/index.d8ea2ac2.js","assets/Avatar.3c461396.js","assets/index.819e467e.js","assets/index.d2960486.js","assets/BookOutlined.9bd991bf.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.81e03f25.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.36186c2f.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.da93deff.js","assets/PhUsersThree.vue.f724e262.js","assets/organization.62ac54bb.js","assets/tables.b183d093.js","assets/record.45c57538.js","assets/string.9be7b1c9.js","assets/Sidebar.fa410fcd.js","assets/index.c5afe1af.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.eb59dd79.js","assets/Logo.15e49c15.js","assets/Logo.46d5120c.css","assets/index.4d89302c.js","assets/Sidebar.e69f49bd.css","assets/Badge.78b81bf9.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.c78cd69e.js"),["assets/ProjectsView.c78cd69e.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5854c856.js","assets/PhCube.vue.da93deff.js","assets/PhFolder.vue.870be4fe.js","assets/PhGear.vue.f7fbe624.js","assets/PhUsersThree.vue.f724e262.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/member.a1a19b02.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/folder.3ba4628c.js","assets/ant-design.201e3fba.js","assets/organization.62ac54bb.js","assets/CollapsePanel.ea9b9f09.js","assets/index.2162069f.js","assets/ProjectsView.63d03d2d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.ddfb44db.js"),["assets/EditorsView.ddfb44db.js","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/index.d8ea2ac2.js","assets/CrudView.c80c8ede.css","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/member.a1a19b02.js","assets/tables.b183d093.js","assets/record.45c57538.js","assets/string.9be7b1c9.js","assets/ant-design.201e3fba.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.6ca7f4c8.js"),["assets/Billing.6ca7f4c8.js","assets/asyncComputed.8444b6d6.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/organization.62ac54bb.js","assets/tables.b183d093.js","assets/record.45c57538.js","assets/string.9be7b1c9.js","assets/LoadingContainer.71e730b6.js","assets/LoadingContainer.56fa997a.css","assets/index.4d89302c.js","assets/Badge.78b81bf9.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.8612ce67.js"),["assets/Project.8612ce67.js","assets/Navbar.f358afd4.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/asyncComputed.8444b6d6.js","assets/PhChats.vue.eef3eb6f.js","assets/PhSignOut.vue.a2f897a7.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/index.d8ea2ac2.js","assets/Avatar.3c461396.js","assets/index.819e467e.js","assets/index.d2960486.js","assets/BookOutlined.9bd991bf.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.81e03f25.js","assets/BaseLayout.b7a1f19a.css","assets/organization.62ac54bb.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/Sidebar.fa410fcd.js","assets/index.c5afe1af.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.eb59dd79.js","assets/Logo.15e49c15.js","assets/Logo.46d5120c.css","assets/index.4d89302c.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.36186c2f.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.184c5bda.js","assets/PhIdentificationBadge.vue.399fa99d.js","assets/Badge.78b81bf9.js","assets/Project.3add99b7.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.45da6c62.js"),["assets/Live.45da6c62.js","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/index.d8ea2ac2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.8444b6d6.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/build.dd9d5a7b.js","assets/organization.62ac54bb.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/datetime.84ea0c7f.js","assets/polling.2eadee37.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.484eb9af.js","assets/LoadingOutlined.48f91f37.js","assets/PhArrowCounterClockwise.vue.184c5bda.js","assets/PhArrowSquareOut.vue.a36ebad0.js","assets/PhChats.vue.eef3eb6f.js","assets/PhCopySimple.vue.1a970f08.js","assets/Live.2fce7425.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.d964d84e.js"),["assets/Builds.d964d84e.js","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/index.d8ea2ac2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.8444b6d6.js","assets/datetime.84ea0c7f.js","assets/polling.2eadee37.js","assets/PhArrowCounterClockwise.vue.184c5bda.js","assets/PhCube.vue.da93deff.js","assets/PhDownloadSimple.vue.8eaf8f53.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/build.dd9d5a7b.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/PhWebhooksLogo.vue.85f14427.js","assets/index.2162069f.js","assets/ExclamationCircleOutlined.2d7578b3.js","assets/CloseCircleOutlined.d43dea50.js","assets/LoadingOutlined.48f91f37.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.73015c1c.js"),["assets/ConnectorsView.73015c1c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5854c856.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/Avatar.3c461396.js","assets/Card.f0c92429.js","assets/TabPane.b5758dc7.js","assets/index.d8ea2ac2.js","assets/Badge.78b81bf9.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.d033c33e.js"),["assets/Tables.d033c33e.js","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/index.d8ea2ac2.js","assets/CrudView.c80c8ede.css","assets/ant-design.201e3fba.js","assets/asyncComputed.8444b6d6.js","assets/string.9be7b1c9.js","assets/PhPencil.vue.eb2b49af.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/tables.b183d093.js","assets/record.45c57538.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.b6d8adc2.js"),["assets/Tasks.b6d8adc2.js","assets/TasksView.vue_vue_type_script_setup_true_lang.688f712e.js","assets/tasksController.3831df8b.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/polling.2eadee37.js","assets/string.9be7b1c9.js","assets/scripts.7810d4f1.js","assets/record.45c57538.js","assets/linters.a0fe2d5a.js","assets/asyncComputed.8444b6d6.js","assets/metadata.80347643.js","assets/PhWebhooksLogo.vue.85f14427.js","assets/ant-design.201e3fba.js","assets/dayjs.46382f4f.js","assets/index.c895cbb9.js","assets/build.dd9d5a7b.js","assets/project.51434c3d.js","assets/tables.b183d093.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.2a6c64e2.js"),["assets/Sql.2a6c64e2.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/PhDownloadSimple.vue.8eaf8f53.js","assets/toggleHighContrast.fd834016.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/Sql.31ed8d09.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.70c7470b.js"),["assets/ApiKeys.70c7470b.js","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/index.d8ea2ac2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.8444b6d6.js","assets/apiKey.f4e6ca02.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/member.a1a19b02.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.bf8b7575.js"),["assets/Logs.bf8b7575.js","assets/Logs.vue_vue_type_script_setup_true_lang.5fff4bc6.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/string.9be7b1c9.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/build.dd9d5a7b.js","assets/tables.b183d093.js","assets/record.45c57538.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.484eb9af.js","assets/LoadingOutlined.48f91f37.js","assets/polling.2eadee37.js","assets/datetime.84ea0c7f.js","assets/ant-design.201e3fba.js","assets/index.d8ea2ac2.js","assets/index.c895cbb9.js","assets/dayjs.46382f4f.js","assets/CollapsePanel.ea9b9f09.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.31ad2c30.js"),["assets/ProjectSettings.31ad2c30.js","assets/asyncComputed.8444b6d6.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/SaveButton.b51bdaec.js","assets/UnsavedChangesHandler.79351aba.js","assets/ExclamationCircleOutlined.2d7578b3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.c895cbb9.js","assets/index.d8ea2ac2.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.a11f6537.js"),["assets/EnvVars.a11f6537.js","assets/View.vue_vue_type_script_setup_true_lang.d4e75c04.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/fetch.57dbef68.js","assets/record.45c57538.js","assets/SaveButton.b51bdaec.js","assets/UnsavedChangesHandler.79351aba.js","assets/ExclamationCircleOutlined.2d7578b3.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.f7dfd6cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/Badge.78b81bf9.js","assets/index.d8ea2ac2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.8444b6d6.js","assets/polling.2eadee37.js","assets/PhPencil.vue.eb2b49af.js","assets/index.c5afe1af.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.8a9795d2.js"),["assets/Files.8a9795d2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/ContentLayout.36186c2f.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.5870d19b.js","assets/ant-design.201e3fba.js","assets/asyncComputed.8444b6d6.js","assets/gateway.5b2b2bc6.js","assets/tables.b183d093.js","assets/record.45c57538.js","assets/string.9be7b1c9.js","assets/Card.f0c92429.js","assets/TabPane.b5758dc7.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.eba8025d.js"),["assets/View.eba8025d.js","assets/asyncComputed.8444b6d6.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/index.d8ea2ac2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js","assets/BookOutlined.9bd991bf.js","assets/index.380c1aa2.js","assets/Badge.78b81bf9.js","assets/CrudView.f7dfd6cc.js","assets/url.ed3aee72.js","assets/PhDotsThreeVertical.vue.4434f9fc.js","assets/index.c895cbb9.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.eb2b49af.js","assets/repository.77eea619.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/fetch.57dbef68.js","assets/record.45c57538.js","assets/ant-design.201e3fba.js","assets/TabPane.b5758dc7.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.79a31817.js"),["assets/TableEditor.79a31817.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.5854c856.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/BaseLayout.81e03f25.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.8444b6d6.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/organization.62ac54bb.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/ContentLayout.36186c2f.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.f7fbe624.js","assets/index.d8ea2ac2.js","assets/index.380c1aa2.js","assets/Badge.78b81bf9.js","assets/PhCheckCircle.vue.9622ba0b.js","assets/index.90a9ad31.js","assets/PhArrowDown.vue.fb345320.js","assets/ant-design.201e3fba.js","assets/PhCaretRight.vue.a43ebcc2.js","assets/LoadingOutlined.48f91f37.js","assets/index.819e467e.js","assets/index.d2960486.js","assets/Avatar.3c461396.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.a34274fc.js"),["assets/WebEditor.a34274fc.js","assets/index.b24b0be8.js","assets/index.1cfd8156.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.eb59dd79.js","assets/Logo.15e49c15.js","assets/Logo.46d5120c.css","assets/BaseLayout.81e03f25.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.57dbef68.js","assets/gateway.5b2b2bc6.js","assets/popupNotifcation.5870d19b.js","assets/project.51434c3d.js","assets/record.45c57538.js","assets/tables.b183d093.js","assets/string.9be7b1c9.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});d.beforeEach(async(t,e)=>{g(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await d.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),n.boot())});export{v as A,n as C,I as T,d as r};
//# sourceMappingURL=router.0ab78250.js.map
