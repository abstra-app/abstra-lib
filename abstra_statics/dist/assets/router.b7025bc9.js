var d=Object.defineProperty;var h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(h(t,typeof e!="symbol"?e+"":e,a),a);import{B as c,R as p}from"./Badge.0d736857.js";import{cO as u,x as b,h as E,i as A,_ as o,j as g}from"./index.5a533bac.js";import{C as l,a as v}from"./gateway.760a0e35.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="eacb4e41-b795-4891-a7aa-44b2fed6aee3",t._sentryDebugIdIdentifier="sentry-dbid-eacb4e41-b795-4891-a7aa-44b2fed6aee3")}catch{}})();c.install=function(t){return t.component(c.name,c),t.component(p.name,p),t};class w{static async getInfo(){return await l.get("authors/info")}}const r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):u.error({message:"Unable to Load Support Chat",description:"It looks like some browser extensions, such as ad blockers, may be preventing the support chat from loading. Please try disabling them or reach out to us at help@abstra.app"})}static boot(){r.booted||w.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let n=r;m(n,"booted",!1);class f{async createSession(e){await l.post("usage/sessions",e)}async trackBrowserEvent(e){await l.post("usage/browser",e)}}const s=new f;class I{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const _=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.626ec95e.js"),["assets/WidgetPreview.626ec95e.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/Steps.e2e4f532.js","assets/index.cd3e94cc.js","assets/Steps.4d03c6c1.css","assets/PlayerConfigProvider.f3ab746a.js","assets/colorHelpers.640b32bd.js","assets/index.9cdb9a9e.js","assets/PlayerConfigProvider.cb445f57.css","assets/WidgetPreview.0208942c.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.6807872e.js"),["assets/Login.6807872e.js","assets/CircularLoading.fdc16166.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/CircularLoading.1a558a0d.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.009a5065.js","assets/Logo.47e20dfe.js","assets/Logo.46d5120c.css","assets/string.b890d74b.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/Badge.0d736857.js","assets/Login.daddff0b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.239728a3.js"),["assets/EditorLogin.239728a3.js","assets/Navbar.72f0cd59.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/asyncComputed.c23cdb9f.js","assets/PhChats.vue.73b2fa01.js","assets/PhSignOut.vue.284fa498.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/index.28701300.js","assets/Avatar.39a072aa.js","assets/index.ea8e62fa.js","assets/index.9d564f53.js","assets/BookOutlined.63013d25.js","assets/Navbar.a899b0d6.css","assets/url.9b965c48.js","assets/apiKey.189ca7a2.js","assets/member.befd3f2c.js","assets/organization.2e5cc417.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/folder.517d93ee.js","assets/Badge.0d736857.js","assets/EditorLogin.c928a0f9.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.18ee7e0b.js"),["assets/Organizations.18ee7e0b.js","assets/Navbar.72f0cd59.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/asyncComputed.c23cdb9f.js","assets/PhChats.vue.73b2fa01.js","assets/PhSignOut.vue.284fa498.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/index.28701300.js","assets/Avatar.39a072aa.js","assets/index.ea8e62fa.js","assets/index.9d564f53.js","assets/BookOutlined.63013d25.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.d1b3fa36.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.4673bde2.js","assets/ContentLayout.ee57a545.css","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/CrudView.c80c8ede.css","assets/PhArrowSquareOut.vue.0a71b286.js","assets/PhPencil.vue.7c87920c.js","assets/organization.2e5cc417.js","assets/tables.211af0a9.js","assets/record.32dd205c.js","assets/string.b890d74b.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.9556b458.js"),["assets/Organization.9556b458.js","assets/Navbar.72f0cd59.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/asyncComputed.c23cdb9f.js","assets/PhChats.vue.73b2fa01.js","assets/PhSignOut.vue.284fa498.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/index.28701300.js","assets/Avatar.39a072aa.js","assets/index.ea8e62fa.js","assets/index.9d564f53.js","assets/BookOutlined.63013d25.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.d1b3fa36.js","assets/BaseLayout.b7a1f19a.css","assets/ContentLayout.4673bde2.js","assets/ContentLayout.ee57a545.css","assets/PhCube.vue.1d86091c.js","assets/PhUsersThree.vue.24e91d58.js","assets/organization.2e5cc417.js","assets/tables.211af0a9.js","assets/record.32dd205c.js","assets/string.b890d74b.js","assets/Sidebar.111eff52.js","assets/index.a1e4d4cd.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.009a5065.js","assets/Logo.47e20dfe.js","assets/Logo.46d5120c.css","assets/index.372282b5.js","assets/Sidebar.e69f49bd.css","assets/Badge.0d736857.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./ProjectsView.bb05f40e.js"),["assets/ProjectsView.bb05f40e.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1f9992de.js","assets/PhCube.vue.1d86091c.js","assets/PhFolder.vue.4bba1f75.js","assets/PhGear.vue.9a8fc371.js","assets/PhUsersThree.vue.24e91d58.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/member.befd3f2c.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/folder.517d93ee.js","assets/ant-design.9c819bc1.js","assets/organization.2e5cc417.js","assets/CollapsePanel.56aa9b9f.js","assets/index.48b4eebe.js","assets/ProjectsView.63d03d2d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./EditorsView.d8c96b07.js"),["assets/EditorsView.d8c96b07.js","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/index.28701300.js","assets/CrudView.c80c8ede.css","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/member.befd3f2c.js","assets/tables.211af0a9.js","assets/record.32dd205c.js","assets/string.b890d74b.js","assets/ant-design.9c819bc1.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.29a212c8.js"),["assets/Billing.29a212c8.js","assets/asyncComputed.c23cdb9f.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/organization.2e5cc417.js","assets/tables.211af0a9.js","assets/record.32dd205c.js","assets/string.b890d74b.js","assets/LoadingContainer.8f0292a0.js","assets/LoadingContainer.56fa997a.css","assets/index.372282b5.js","assets/Badge.0d736857.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.09b1e4da.js"),["assets/Project.09b1e4da.js","assets/Navbar.72f0cd59.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/asyncComputed.c23cdb9f.js","assets/PhChats.vue.73b2fa01.js","assets/PhSignOut.vue.284fa498.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/index.28701300.js","assets/Avatar.39a072aa.js","assets/index.ea8e62fa.js","assets/index.9d564f53.js","assets/BookOutlined.63013d25.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.d1b3fa36.js","assets/BaseLayout.b7a1f19a.css","assets/organization.2e5cc417.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/Sidebar.111eff52.js","assets/index.a1e4d4cd.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.009a5065.js","assets/Logo.47e20dfe.js","assets/Logo.46d5120c.css","assets/index.372282b5.js","assets/Sidebar.e69f49bd.css","assets/ContentLayout.4673bde2.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.74173f15.js","assets/PhIdentificationBadge.vue.adeb3df2.js","assets/Badge.0d736857.js","assets/Project.3e27716b.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.08a1e834.js"),["assets/Live.08a1e834.js","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/index.28701300.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c23cdb9f.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/build.6162ce8e.js","assets/organization.2e5cc417.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/datetime.6dac396f.js","assets/polling.4cd7ee51.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5b24061b.js","assets/LoadingOutlined.8cbb5e31.js","assets/PhArrowCounterClockwise.vue.74173f15.js","assets/PhArrowSquareOut.vue.0a71b286.js","assets/PhChats.vue.73b2fa01.js","assets/PhCopySimple.vue.4206a9cc.js","assets/Live.b0341a28.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.08d68456.js"),["assets/Builds.08d68456.js","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/index.28701300.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c23cdb9f.js","assets/datetime.6dac396f.js","assets/polling.4cd7ee51.js","assets/PhArrowCounterClockwise.vue.74173f15.js","assets/PhCube.vue.1d86091c.js","assets/PhDownloadSimple.vue.7fa03cb2.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/build.6162ce8e.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/PhWebhooksLogo.vue.35fd3fc0.js","assets/index.48b4eebe.js","assets/ExclamationCircleOutlined.bd7b9e60.js","assets/CloseCircleOutlined.e5a7f544.js","assets/LoadingOutlined.8cbb5e31.js","assets/Builds.41ab7a9a.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.8d970685.js"),["assets/ConnectorsView.8d970685.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1f9992de.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/Avatar.39a072aa.js","assets/Card.9493204f.js","assets/TabPane.b9011829.js","assets/index.28701300.js","assets/Badge.0d736857.js","assets/ConnectorsView.464982fb.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.5b3b79d6.js"),["assets/Tables.5b3b79d6.js","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/index.28701300.js","assets/CrudView.c80c8ede.css","assets/ant-design.9c819bc1.js","assets/asyncComputed.c23cdb9f.js","assets/string.b890d74b.js","assets/PhPencil.vue.7c87920c.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/tables.211af0a9.js","assets/record.32dd205c.js"]),meta:{title:"Tables - Abstra Console"}},{path:"tasks",name:"tasks",component:()=>o(()=>import("./Tasks.946cb9b4.js"),["assets/Tasks.946cb9b4.js","assets/TasksView.vue_vue_type_script_setup_true_lang.077c100e.js","assets/tasksController.82265214.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/polling.4cd7ee51.js","assets/string.b890d74b.js","assets/scripts.afeb0e1b.js","assets/record.32dd205c.js","assets/linters.ac3a625b.js","assets/asyncComputed.c23cdb9f.js","assets/metadata.b314988e.js","assets/PhWebhooksLogo.vue.35fd3fc0.js","assets/ant-design.9c819bc1.js","assets/dayjs.2aa6c096.js","assets/index.31d384d1.js","assets/build.6162ce8e.js","assets/project.7b5b24a2.js","assets/tables.211af0a9.js"]),meta:{title:"Tasks - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.e56a6793.js"),["assets/Sql.e56a6793.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/PhDownloadSimple.vue.7fa03cb2.js","assets/toggleHighContrast.90c932af.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/Sql.31ed8d09.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.5efff5d5.js"),["assets/ApiKeys.5efff5d5.js","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/index.28701300.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c23cdb9f.js","assets/apiKey.189ca7a2.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/member.befd3f2c.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.efeb4c08.js"),["assets/Logs.efeb4c08.js","assets/Logs.vue_vue_type_script_setup_true_lang.047b258c.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/string.b890d74b.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/build.6162ce8e.js","assets/tables.211af0a9.js","assets/record.32dd205c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5b24061b.js","assets/LoadingOutlined.8cbb5e31.js","assets/polling.4cd7ee51.js","assets/datetime.6dac396f.js","assets/ant-design.9c819bc1.js","assets/index.28701300.js","assets/index.31d384d1.js","assets/dayjs.2aa6c096.js","assets/CollapsePanel.56aa9b9f.js","assets/Logs.7bfebb24.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.0b3602b9.js"),["assets/ProjectSettings.0b3602b9.js","assets/asyncComputed.c23cdb9f.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/SaveButton.466c3afa.js","assets/UnsavedChangesHandler.bb000679.js","assets/ExclamationCircleOutlined.bd7b9e60.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.31d384d1.js","assets/index.28701300.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.f025a8f2.js"),["assets/EnvVars.f025a8f2.js","assets/View.vue_vue_type_script_setup_true_lang.f0c28951.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/fetch.b558bf5a.js","assets/record.32dd205c.js","assets/SaveButton.466c3afa.js","assets/UnsavedChangesHandler.bb000679.js","assets/ExclamationCircleOutlined.bd7b9e60.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.7014f8a7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/Badge.0d736857.js","assets/index.28701300.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.c23cdb9f.js","assets/polling.4cd7ee51.js","assets/PhPencil.vue.7c87920c.js","assets/index.a1e4d4cd.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.348fba32.js"),["assets/Files.348fba32.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/ContentLayout.4673bde2.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.3de7bb9b.js","assets/ant-design.9c819bc1.js","assets/asyncComputed.c23cdb9f.js","assets/gateway.760a0e35.js","assets/tables.211af0a9.js","assets/record.32dd205c.js","assets/string.b890d74b.js","assets/Card.9493204f.js","assets/TabPane.b9011829.js","assets/Files.06562802.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.601c5072.js"),["assets/View.601c5072.js","assets/asyncComputed.c23cdb9f.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/index.28701300.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0ffbe00f.js","assets/BookOutlined.63013d25.js","assets/index.e3a80a79.js","assets/Badge.0d736857.js","assets/CrudView.7014f8a7.js","assets/url.9b965c48.js","assets/PhDotsThreeVertical.vue.14bc545c.js","assets/index.31d384d1.js","assets/CrudView.c80c8ede.css","assets/PhPencil.vue.7c87920c.js","assets/repository.38c7d725.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/fetch.b558bf5a.js","assets/record.32dd205c.js","assets/ant-design.9c819bc1.js","assets/TabPane.b9011829.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.9c9863e0.js"),["assets/TableEditor.9c9863e0.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.1f9992de.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/BaseLayout.d1b3fa36.js","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.c23cdb9f.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/organization.2e5cc417.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/ContentLayout.4673bde2.js","assets/ContentLayout.ee57a545.css","assets/PhGear.vue.9a8fc371.js","assets/index.28701300.js","assets/index.e3a80a79.js","assets/Badge.0d736857.js","assets/PhCheckCircle.vue.1292730d.js","assets/index.baca98f0.js","assets/PhArrowDown.vue.a99c9a3b.js","assets/ant-design.9c819bc1.js","assets/PhCaretRight.vue.7886f168.js","assets/LoadingOutlined.8cbb5e31.js","assets/index.ea8e62fa.js","assets/index.9d564f53.js","assets/Avatar.39a072aa.js","assets/TableEditor.1e680eaf.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/projects/:projectId/web-editor",name:"web-editor",component:()=>o(()=>import("./WebEditor.60e88e08.js"),["assets/WebEditor.60e88e08.js","assets/index.5a533bac.js","assets/index.1cfd8156.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.009a5065.js","assets/Logo.47e20dfe.js","assets/Logo.46d5120c.css","assets/BaseLayout.d1b3fa36.js","assets/BaseLayout.b7a1f19a.css","assets/fetch.b558bf5a.js","assets/gateway.760a0e35.js","assets/popupNotifcation.3de7bb9b.js","assets/project.7b5b24a2.js","assets/record.32dd205c.js","assets/tables.211af0a9.js","assets/string.b890d74b.js","assets/WebEditor.96e2e5ad.css"]),meta:{title:"Web Editor - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});_.beforeEach(async(t,e)=>{g(t,e);const a=v.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await _.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(I.trackPageView(),n.boot())});export{w as A,n as C,I as T,_ as r};
//# sourceMappingURL=router.b7025bc9.js.map
