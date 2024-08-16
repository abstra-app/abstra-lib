var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,dc as h,dd as u,de as b,h as E,i as A,_ as o,j as g}from"./vue-router.717c9672.js";import{C as c,a as w}from"./gateway.738de2d6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="662c386c-b5f3-4950-b309-5aa90776ab03",t._sentryDebugIdIdentifier="sentry-dbid-662c386c-b5f3-4950-b309-5aa90776ab03")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.1666a771.js"),["assets/WidgetPreview.1666a771.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/Steps.733dbc89.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.993c867a.js","assets/WidgetsFrame.e0c6be76.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.8f8f5da6.js"),["assets/Login.8f8f5da6.js","assets/CircularLoading.abf70449.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/CircularLoading.e156a2b0.css","assets/Logo.5cfca05e.js","assets/Logo.21e86751.css","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/member.5595fc5c.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/string.570c2d93.js","assets/Login.694d57fb.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.53de2dc3.js"),["assets/EditorLogin.53de2dc3.js","assets/Navbar.8e869e86.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.d365a226.js","assets/PhChats.vue.9fec7b9d.js","assets/PhSignOut.vue.53de439f.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/index.7cb56e87.js","assets/Avatar.64e81e93.js","assets/index.ab70b27c.js","assets/index.687b2b23.js","assets/BookOutlined.abfccf79.js","assets/Navbar.a899b0d6.css","assets/url.e88fe7d5.js","assets/apiKey.81d18cdc.js","assets/organization.d85c6288.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.02da38aa.js"),["assets/Organizations.02da38aa.js","assets/Navbar.8e869e86.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.d365a226.js","assets/PhChats.vue.9fec7b9d.js","assets/PhSignOut.vue.53de439f.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/index.7cb56e87.js","assets/Avatar.64e81e93.js","assets/index.ab70b27c.js","assets/index.687b2b23.js","assets/BookOutlined.abfccf79.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.dbb58bef.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.d108e8cd.js","assets/ContentLayout.ee57a545.css","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/CrudView.80dd6085.css","assets/ant-design.5fe1d753.js","assets/PhArrowSquareOut.vue.a5c0d548.js","assets/PhPencil.vue.c0dffe79.js","assets/organization.d85c6288.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/string.570c2d93.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.9a5618de.js"),["assets/Organization.9a5618de.js","assets/Navbar.8e869e86.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.d365a226.js","assets/PhChats.vue.9fec7b9d.js","assets/PhSignOut.vue.53de439f.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/index.7cb56e87.js","assets/Avatar.64e81e93.js","assets/index.ab70b27c.js","assets/index.687b2b23.js","assets/BookOutlined.abfccf79.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.dbb58bef.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.d108e8cd.js","assets/ContentLayout.ee57a545.css","assets/organization.d85c6288.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/string.570c2d93.js","assets/Sidebar.81eec376.js","assets/index.bee51fc7.js","assets/Logo.5cfca05e.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.3b644037.js"),["assets/Projects.3b644037.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.d365a226.js","assets/ant-design.5fe1d753.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/organization.d85c6288.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.a5c0d548.js","assets/PhCopy.vue.3a56a463.js","assets/PhPencil.vue.c0dffe79.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.4a3b406f.js"),["assets/Editors.4a3b406f.js","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css","assets/ant-design.5fe1d753.js","assets/asyncComputed.d365a226.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/member.5595fc5c.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/string.570c2d93.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.7ae8d41e.js"),["assets/Billing.7ae8d41e.js","assets/asyncComputed.d365a226.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/organization.d85c6288.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/string.570c2d93.js","assets/LoadingContainer.b8757540.js","assets/LoadingContainer.56fa997a.css","assets/index.10f425f9.js","assets/Card.499b2bc2.js","assets/TabPane.67eb7913.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.b971503e.js"),["assets/Project.b971503e.js","assets/Navbar.8e869e86.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.d365a226.js","assets/PhChats.vue.9fec7b9d.js","assets/PhSignOut.vue.53de439f.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/index.7cb56e87.js","assets/Avatar.64e81e93.js","assets/index.ab70b27c.js","assets/index.687b2b23.js","assets/BookOutlined.abfccf79.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.dbb58bef.js","assets/BaseLayout.0156e9e1.css","assets/organization.d85c6288.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/Sidebar.81eec376.js","assets/index.bee51fc7.js","assets/Logo.5cfca05e.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.d108e8cd.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.0edb74ff.js","assets/PhIdentificationBadge.vue.d7db2b60.js","assets/PhCube.vue.f862e248.js","assets/PhGlobe.vue.389761f1.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.25659111.js"),["assets/Live.25659111.js","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css","assets/asyncComputed.d365a226.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/datetime.ebd06ee2.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ccd0356a.js","assets/LoadingOutlined.2ca13f29.js","assets/PhArrowCounterClockwise.vue.0edb74ff.js","assets/PhArrowSquareOut.vue.a5c0d548.js","assets/PhChats.vue.9fec7b9d.js","assets/PhCopySimple.vue.8b1e2be4.js","assets/PhRocketLaunch.vue.0f3256af.js","assets/index.43c0db9e.js","assets/Live.37cc9741.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.c54e9952.js"),["assets/Builds.c54e9952.js","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css","assets/asyncComputed.d365a226.js","assets/datetime.ebd06ee2.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/PhArrowCounterClockwise.vue.0edb74ff.js","assets/PhCube.vue.f862e248.js","assets/PhDownloadSimple.vue.b394978e.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/PhWebhooksLogo.vue.dfc2e56a.js","assets/index.81dd24ce.js","assets/ExclamationCircleOutlined.82b04103.js","assets/CloseCircleOutlined.4af5b0a4.js","assets/LoadingOutlined.2ca13f29.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.9523f1c5.js"),["assets/ConnectorsView.9523f1c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0cdc894a.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/Avatar.64e81e93.js","assets/Card.499b2bc2.js","assets/TabPane.67eb7913.js","assets/index.7cb56e87.js","assets/index.ae8d104f.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.6fb8095c.js"),["assets/Tables.6fb8095c.js","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css","assets/asyncComputed.d365a226.js","assets/string.570c2d93.js","assets/PhPencil.vue.c0dffe79.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/tables.4d878411.js","assets/record.18236b7c.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.54338ef3.js"),["assets/Sql.54338ef3.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/utils.71bc1ee6.js","assets/PhDownloadSimple.vue.b394978e.js","assets/toggleHighContrast.4a531fbd.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.a312c31d.js"),["assets/ApiKeys.a312c31d.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/asyncComputed.d365a226.js","assets/apiKey.81d18cdc.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/member.5595fc5c.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.bc2a25ae.js"),["assets/Logs.bc2a25ae.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/datetime.ebd06ee2.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ccd0356a.js","assets/LoadingOutlined.2ca13f29.js","assets/string.570c2d93.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/dayjs.9624a008.js","assets/index.7cb56e87.js","assets/CollapsePanel.4e9b1227.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.2ae1ea18.js"),["assets/ProjectSettings.2ae1ea18.js","assets/asyncComputed.d365a226.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/SaveButton.028f0b84.js","assets/PhFloppyDisk.vue.cf114e9a.js","assets/ExclamationCircleOutlined.82b04103.js","assets/SaveButton.ae5051de.css","assets/index.7cb56e87.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.4ca4efcf.js"),["assets/EnvVars.4ca4efcf.js","assets/View.vue_vue_type_script_setup_true_lang.2260a84a.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/fetch.aac5c8bf.js","assets/record.18236b7c.js","assets/SaveButton.028f0b84.js","assets/PhFloppyDisk.vue.cf114e9a.js","assets/ExclamationCircleOutlined.82b04103.js","assets/SaveButton.ae5051de.css","assets/CrudView.b30e86d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/index.7cb56e87.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.0f3256af.js","assets/asyncComputed.d365a226.js","assets/PhPencil.vue.c0dffe79.js","assets/index.bee51fc7.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.d3426338.js"),["assets/Files.d3426338.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.d108e8cd.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.309b8b62.js","assets/ant-design.5fe1d753.js","assets/asyncComputed.d365a226.js","assets/PhDotsThree.vue.d0ba6421.js","assets/gateway.738de2d6.js","assets/tables.4d878411.js","assets/record.18236b7c.js","assets/string.570c2d93.js","assets/DeleteOutlined.083897e4.js","assets/Card.499b2bc2.js","assets/TabPane.67eb7913.js","assets/Files.5fd6b604.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.d698e54e.js"),["assets/View.d698e54e.js","assets/asyncComputed.d365a226.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/index.7cb56e87.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js","assets/BookOutlined.abfccf79.js","assets/index.ae8d104f.js","assets/isNumeric.75337b1e.js","assets/CrudView.b30e86d9.js","assets/url.e88fe7d5.js","assets/PhDotsThree.vue.d0ba6421.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.c0dffe79.js","assets/repository.303d2316.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/fetch.aac5c8bf.js","assets/record.18236b7c.js","assets/ant-design.5fe1d753.js","assets/TabPane.67eb7913.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.1c6bcbec.js"),["assets/TableEditor.1c6bcbec.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.0cdc894a.js","assets/vue-router.717c9672.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.dbb58bef.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.d365a226.js","assets/gateway.738de2d6.js","assets/popupNotifcation.309b8b62.js","assets/organization.d85c6288.js","assets/project.0ea16d54.js","assets/record.18236b7c.js","assets/tables.4d878411.js","assets/string.570c2d93.js","assets/ContentLayout.d108e8cd.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.9f1a6abc.js","assets/index.3580d2f9.js","assets/index.7cb56e87.js","assets/index.ae8d104f.js","assets/isNumeric.75337b1e.js","assets/ant-design.5fe1d753.js","assets/PhCaretRight.vue.c0025b4e.js","assets/LoadingOutlined.2ca13f29.js","assets/index.ab70b27c.js","assets/index.687b2b23.js","assets/Avatar.64e81e93.js","assets/TableEditor.d3254f3f.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.65a615ec.js.map
