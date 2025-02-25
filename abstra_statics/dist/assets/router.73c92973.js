var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.50220263.js";import{cM as u,x as b,h as E,i as A,_ as o,j as g}from"./index.3be38143.js";import{C as l,a as f}from"./gateway.dbb3c871.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3f6c4a70-aadc-4a93-aafd-7651f2b77bcd",t._sentryDebugIdIdentifier="sentry-dbid-3f6c4a70-aadc-4a93-aafd-7651f2b77bcd")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class v{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;m(i,"booted",!1);class w{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const s=new w;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.d08a9e2f.js"),["assets/WidgetPreview.d08a9e2f.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/Steps.85fa1546.js","assets/index.66f4dc84.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.c2ec52d7.js","assets/colorHelpers.46b5948e.js","assets/index.8e99290b.js","assets/PlayerConfigProvider.309c06f9.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.9b0fbbec.js"),["assets/Login.9b0fbbec.js","assets/CircularLoading.25a13057.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.e7cb539f.js","assets/Logo.c4930986.js","assets/Logo.8bf94625.css","assets/string.1a29d489.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/Badge.50220263.js","assets/Login.7dccb591.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.7938b1d7.js"),["assets/EditorLogin.7938b1d7.js","assets/Navbar.7de64732.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/asyncComputed.b805ba3a.js","assets/PhChats.vue.82afa452.js","assets/PhSignOut.vue.7593f61b.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/index.38a489ae.js","assets/Avatar.397d4fa9.js","assets/index.f3cb2d23.js","assets/index.f7cf4879.js","assets/BookOutlined.dea4f008.js","assets/Navbar.a899b0d6.css","assets/url.2195d581.js","assets/apiKey.7941c8a4.js","assets/member.51e82d20.js","assets/organization.af853aed.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/folder.a579d8c3.js","assets/Badge.50220263.js","assets/EditorLogin.5c26246d.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.374b8d4f.js"),["assets/Organizations.374b8d4f.js","assets/Navbar.7de64732.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/asyncComputed.b805ba3a.js","assets/PhChats.vue.82afa452.js","assets/PhSignOut.vue.7593f61b.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/index.38a489ae.js","assets/Avatar.397d4fa9.js","assets/index.f3cb2d23.js","assets/index.f7cf4879.js","assets/BookOutlined.dea4f008.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.e320c631.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.a13479af.js","assets/ContentLayout.ee57a545.css","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.722d6236.js","assets/PhPencil.vue.cf6015da.js","assets/organization.af853aed.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/string.1a29d489.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.3a9fee56.js"),["assets/Organization.3a9fee56.js","assets/Navbar.7de64732.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/asyncComputed.b805ba3a.js","assets/PhChats.vue.82afa452.js","assets/PhSignOut.vue.7593f61b.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/index.38a489ae.js","assets/Avatar.397d4fa9.js","assets/index.f3cb2d23.js","assets/index.f7cf4879.js","assets/BookOutlined.dea4f008.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.e320c631.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.a13479af.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.5a3c6830.js","assets/PhUsersThree.vue.84ec8cbd.js","assets/organization.af853aed.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/string.1a29d489.js","assets/Sidebar.dd317a5d.js","assets/index.ff755f71.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.e7cb539f.js","assets/Logo.c4930986.js","assets/Logo.8bf94625.css","assets/index.cc121b25.js","assets/Sidebar.e69f49bd.css","assets/Badge.50220263.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.3894db22.js"),["assets/ProjectsView.3894db22.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a6501a79.js","assets/PhCube.vue.5a3c6830.js","assets/PhFolder.vue.94c9b68c.js","assets/PhGear.vue.e55f23ef.js","assets/PhUsersThree.vue.84ec8cbd.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/member.51e82d20.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/folder.a579d8c3.js","assets/ant-design.55b50d18.js","assets/organization.af853aed.js","assets/CollapsePanel.c637a6ef.js","assets/index.a116cc19.js","assets/ProjectsView.36bd8515.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.abcde76a.js"),["assets/EditorsView.abcde76a.js","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/index.38a489ae.js","assets/CrudView.c80c8ede.css","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/member.51e82d20.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/string.1a29d489.js","assets/ant-design.55b50d18.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.00135a10.js"),["assets/Billing.00135a10.js","assets/asyncComputed.b805ba3a.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/organization.af853aed.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/string.1a29d489.js","assets/LoadingContainer.8254630f.js","assets/LoadingContainer.56fa997a.css","assets/index.cc121b25.js","assets/Badge.50220263.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.7ad2cfcf.js"),["assets/Project.7ad2cfcf.js","assets/Navbar.7de64732.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/asyncComputed.b805ba3a.js","assets/PhChats.vue.82afa452.js","assets/PhSignOut.vue.7593f61b.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/index.38a489ae.js","assets/Avatar.397d4fa9.js","assets/index.f3cb2d23.js","assets/index.f7cf4879.js","assets/BookOutlined.dea4f008.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.e320c631.js","assets/BaseLayout.b7a1f19a.css","assets/organization.af853aed.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/Sidebar.dd317a5d.js","assets/index.ff755f71.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.e7cb539f.js","assets/Logo.c4930986.js","assets/Logo.8bf94625.css","assets/index.cc121b25.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.a13479af.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.ed16e859.js","assets/PhIdentificationBadge.vue.3fab5979.js","assets/PhKey.vue.90c510d0.js","assets/Badge.50220263.js","assets/Project.2a29bba8.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.e71aee8d.js"),["assets/Live.e71aee8d.js","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/index.38a489ae.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b805ba3a.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/build.2ebf6639.js","assets/organization.af853aed.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/datetime.435ac1e6.js","assets/polling.5f17f033.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b89a2cef.js","assets/LoadingOutlined.ce6a95a9.js","assets/PhArrowCounterClockwise.vue.ed16e859.js","assets/PhArrowSquareOut.vue.722d6236.js","assets/PhChats.vue.82afa452.js","assets/PhCopySimple.vue.708c674c.js","assets/Live.57d116ed.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.0ea066f5.js"),["assets/Builds.0ea066f5.js","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/index.38a489ae.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b805ba3a.js","assets/datetime.435ac1e6.js","assets/polling.5f17f033.js","assets/PhArrowCounterClockwise.vue.ed16e859.js","assets/PhCube.vue.5a3c6830.js","assets/PhDownloadSimple.vue.45cab086.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/build.2ebf6639.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/PhWebhooksLogo.vue.f1f140d1.js","assets/index.a116cc19.js","assets/ExclamationCircleOutlined.515ff948.js","assets/CloseCircleOutlined.e17fe8d5.js","assets/LoadingOutlined.ce6a95a9.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.2bc3a050.js"),["assets/ConnectorsView.2bc3a050.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a6501a79.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/Avatar.397d4fa9.js","assets/Card.496117e1.js","assets/TabPane.1bbb1f2a.js","assets/index.38a489ae.js","assets/Badge.50220263.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.c3df99da.js"),["assets/Tables.c3df99da.js","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/index.38a489ae.js","assets/CrudView.c80c8ede.css","assets/ant-design.55b50d18.js","assets/asyncComputed.b805ba3a.js","assets/string.1a29d489.js","assets/PhPencil.vue.cf6015da.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.97504287.js","assets/TabPane.1bbb1f2a.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.ca014d91.js"),["assets/Tasks.ca014d91.js","assets/TasksView.vue_vue_type_script_setup_true_lang.f559030e.js","assets/tasksController.df74f3cb.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/scripts.02008643.js","assets/record.1676815c.js","assets/linters.f8027f3b.js","assets/asyncComputed.b805ba3a.js","assets/polling.5f17f033.js","assets/string.1a29d489.js","assets/metadata.a346265e.js","assets/PhWebhooksLogo.vue.f1f140d1.js","assets/ant-design.55b50d18.js","assets/dayjs.ad750bf1.js","assets/index.5998852f.js","assets/build.2ebf6639.js","assets/project.7f894075.js","assets/tables.80270e1d.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.a905abdb.js"),["assets/Sql.a905abdb.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/PhDownloadSimple.vue.45cab086.js","assets/toggleHighContrast.113053c2.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.97504287.js","assets/TabPane.1bbb1f2a.js","assets/Sql.1afe0bac.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"tables-diagram",name:"tables-diagram",component:()=>o(()=>import("./TablesDiagram.f8b15cd9.js"),["assets/TablesDiagram.f8b15cd9.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a6501a79.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/asyncComputed.b805ba3a.js","assets/PhKey.vue.90c510d0.js","assets/PhPencil.vue.cf6015da.js","assets/vue-flow-minimap.2a0a4f17.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/string.1a29d489.js","assets/TablesTabs.vue_vue_type_script_setup_true_lang.97504287.js","assets/TabPane.1bbb1f2a.js","assets/index.38a489ae.js","assets/Card.496117e1.js","assets/TablesDiagram.1ec45dd9.css"]),meta:{title:"Tables Diagram - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.22a91b76.js"),["assets/ApiKeys.22a91b76.js","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/index.38a489ae.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b805ba3a.js","assets/apiKey.7941c8a4.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/member.51e82d20.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.c6fc93ea.js"),["assets/Logs.c6fc93ea.js","assets/Logs.vue_vue_type_script_setup_true_lang.532c1995.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/string.1a29d489.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/build.2ebf6639.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b89a2cef.js","assets/LoadingOutlined.ce6a95a9.js","assets/polling.5f17f033.js","assets/datetime.435ac1e6.js","assets/ant-design.55b50d18.js","assets/index.38a489ae.js","assets/index.5998852f.js","assets/dayjs.ad750bf1.js","assets/CollapsePanel.c637a6ef.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.4e53a494.js"),["assets/ProjectSettings.4e53a494.js","assets/asyncComputed.b805ba3a.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/SaveButton.84acd705.js","assets/UnsavedChangesHandler.4ce4f67a.js","assets/ExclamationCircleOutlined.515ff948.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.5998852f.js","assets/index.38a489ae.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.8f65fc89.js"),["assets/EnvVars.8f65fc89.js","assets/View.vue_vue_type_script_setup_true_lang.2dcdd840.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/fetch.3a23fbc1.js","assets/record.1676815c.js","assets/SaveButton.84acd705.js","assets/UnsavedChangesHandler.4ce4f67a.js","assets/ExclamationCircleOutlined.515ff948.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.e505d060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/Badge.50220263.js","assets/index.38a489ae.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.b805ba3a.js","assets/polling.5f17f033.js","assets/PhPencil.vue.cf6015da.js","assets/index.ff755f71.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.42cfec28.js"),["assets/Files.42cfec28.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/ContentLayout.a13479af.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.ea220c48.js","assets/ant-design.55b50d18.js","assets/asyncComputed.b805ba3a.js","assets/gateway.dbb3c871.js","assets/tables.80270e1d.js","assets/record.1676815c.js","assets/string.1a29d489.js","assets/Card.496117e1.js","assets/TabPane.1bbb1f2a.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.4ca4dbc5.js"),["assets/View.4ca4dbc5.js","assets/asyncComputed.b805ba3a.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/index.38a489ae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77042e14.js","assets/BookOutlined.dea4f008.js","assets/index.c6884f65.js","assets/Badge.50220263.js","assets/CrudView.e505d060.js","assets/url.2195d581.js","assets/PhDotsThreeVertical.vue.883eb5e6.js","assets/index.5998852f.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.cf6015da.js","assets/repository.e5867975.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/fetch.3a23fbc1.js","assets/record.1676815c.js","assets/ant-design.55b50d18.js","assets/TabPane.1bbb1f2a.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.3e763343.js"),["assets/TableEditor.3e763343.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.a6501a79.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/BaseLayout.e320c631.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.b805ba3a.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/organization.af853aed.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/ContentLayout.a13479af.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.e55f23ef.js","assets/index.38a489ae.js","assets/index.c6884f65.js","assets/Badge.50220263.js","assets/PhCheckCircle.vue.7ef9a77e.js","assets/index.4226bf87.js","assets/PhArrowDown.vue.857da3c9.js","assets/ant-design.55b50d18.js","assets/PhCaretRight.vue.5b349c7d.js","assets/index.f3cb2d23.js","assets/index.f7cf4879.js","assets/Avatar.397d4fa9.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.f2c83ff8.js"),["assets/WebEditor.f2c83ff8.js","assets/index.3be38143.js","assets/index.65a6d955.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.e7cb539f.js","assets/Logo.c4930986.js","assets/Logo.8bf94625.css","assets/BaseLayout.e320c631.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.3a23fbc1.js","assets/gateway.dbb3c871.js","assets/popupNotifcation.ea220c48.js","assets/project.7f894075.js","assets/record.1676815c.js","assets/tables.80270e1d.js","assets/string.1a29d489.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{g(t,e);const a=f.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),i.boot())});export{v as A,i as C,I as T,_ as r};
//# sourceMappingURL=router.73c92973.js.map
