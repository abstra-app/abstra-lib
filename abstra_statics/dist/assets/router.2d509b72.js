var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,d3 as h,d4 as u,d5 as b,h as E,i as A,_ as o,j as g}from"./vue-router.afcf06ff.js";import{C as c,a as w}from"./gateway.d3db1be9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="37f6e608-ac74-4f80-b16e-14e199800ae7",t._sentryDebugIdIdentifier="sentry-dbid-37f6e608-ac74-4f80-b16e-14e199800ae7")}catch{}})();const L=p(h),T=p(u);class f{async getInfo(){return await c.get("authors/info")}}const v=new f,r=class{static dispatch(e,a,n=0){window.Intercom?window.Intercom(e,a):n<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let i=r;l(i,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const s=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;s.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){s.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){s.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){s.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.a4c78517.js"),["assets/WidgetPreview.a4c78517.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/Steps.02738a2d.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.6e9da71e.js","assets/WidgetsFrame.e0c6be76.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.95eef7eb.js"),["assets/Login.95eef7eb.js","assets/CircularLoading.6fc392a6.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/CircularLoading.e156a2b0.css","assets/Logo.1aa4870d.js","assets/Logo.21e86751.css","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/member.91cdbabf.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/string.18977233.js","assets/Login.df6b4899.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.4c64c264.js"),["assets/EditorLogin.4c64c264.js","assets/Navbar.d883e50b.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/asyncComputed.a952b95a.js","assets/PhChats.vue.fcd1087f.js","assets/PhSignOut.vue.f82e071b.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/index.b4dc3b3d.js","assets/index.5b074c44.js","assets/index.75d8e9ac.js","assets/BookOutlined.c829f575.js","assets/Navbar.a899b0d6.css","assets/url.7823dc6b.js","assets/apiKey.f2e31751.js","assets/organization.cf0a0b6a.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.aed79eec.js"),["assets/Organizations.aed79eec.js","assets/Navbar.d883e50b.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/asyncComputed.a952b95a.js","assets/PhChats.vue.fcd1087f.js","assets/PhSignOut.vue.f82e071b.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/index.b4dc3b3d.js","assets/index.5b074c44.js","assets/index.75d8e9ac.js","assets/BookOutlined.c829f575.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.eefefa39.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.c5e5c138.js","assets/ContentLayout.ee57a545.css","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/CrudView.80dd6085.css","assets/ant-design.6ddd2189.js","assets/PhArrowSquareOut.vue.b7a6464e.js","assets/PhPencil.vue.ca8bfe59.js","assets/organization.cf0a0b6a.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/string.18977233.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.b5d7dfd5.js"),["assets/Organization.b5d7dfd5.js","assets/Navbar.d883e50b.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/asyncComputed.a952b95a.js","assets/PhChats.vue.fcd1087f.js","assets/PhSignOut.vue.f82e071b.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/index.b4dc3b3d.js","assets/index.5b074c44.js","assets/index.75d8e9ac.js","assets/BookOutlined.c829f575.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.eefefa39.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.c5e5c138.js","assets/ContentLayout.ee57a545.css","assets/organization.cf0a0b6a.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/string.18977233.js","assets/Sidebar.614b0368.js","assets/index.fa5c154b.js","assets/Logo.1aa4870d.js","assets/Logo.21e86751.css","assets/index.6fb1e2c9.js","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.acae366f.js"),["assets/Projects.acae366f.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/asyncComputed.a952b95a.js","assets/ant-design.6ddd2189.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/organization.cf0a0b6a.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.b7a6464e.js","assets/PhCopy.vue.991611f6.js","assets/PhPencil.vue.ca8bfe59.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.42dd106c.js"),["assets/Editors.42dd106c.js","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css","assets/ant-design.6ddd2189.js","assets/asyncComputed.a952b95a.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/member.91cdbabf.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/string.18977233.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.91d0022a.js"),["assets/Billing.91d0022a.js","assets/asyncComputed.a952b95a.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/organization.cf0a0b6a.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/string.18977233.js","assets/LoadingContainer.927d1f2e.js","assets/LoadingContainer.56fa997a.css","assets/index.78dd9967.js","assets/Card.66b10dba.js","assets/TabPane.5ed4358f.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.02df46a1.js"),["assets/Project.02df46a1.js","assets/Navbar.d883e50b.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/asyncComputed.a952b95a.js","assets/PhChats.vue.fcd1087f.js","assets/PhSignOut.vue.f82e071b.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/index.b4dc3b3d.js","assets/index.5b074c44.js","assets/index.75d8e9ac.js","assets/BookOutlined.c829f575.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.eefefa39.js","assets/BaseLayout.0156e9e1.css","assets/organization.cf0a0b6a.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/Sidebar.614b0368.js","assets/index.fa5c154b.js","assets/Logo.1aa4870d.js","assets/Logo.21e86751.css","assets/index.6fb1e2c9.js","assets/Sidebar.83c5c451.css","assets/ContentLayout.c5e5c138.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.623d68d9.js","assets/PhIdentificationBadge.vue.94b0528d.js","assets/PhCube.vue.158837c0.js","assets/PhGlobe.vue.011479c7.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.eba0794a.js"),["assets/Live.eba0794a.js","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css","assets/asyncComputed.a952b95a.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/datetime.4db937f8.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b566aa3b.js","assets/LoadingOutlined.c8a142bc.js","assets/PhArrowCounterClockwise.vue.623d68d9.js","assets/PhArrowSquareOut.vue.b7a6464e.js","assets/PhChats.vue.fcd1087f.js","assets/PhCopySimple.vue.1ac5719f.js","assets/PhRocketLaunch.vue.525e4c08.js","assets/index.468af608.js","assets/Live.37cc9741.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.7b09d74e.js"),["assets/Builds.7b09d74e.js","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css","assets/asyncComputed.a952b95a.js","assets/datetime.4db937f8.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/PhArrowCounterClockwise.vue.623d68d9.js","assets/PhCube.vue.158837c0.js","assets/PhDownloadSimple.vue.e243f205.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/PhWebhooksLogo.vue.90702a1d.js","assets/index.d3189743.js","assets/ExclamationCircleOutlined.8aa95a33.js","assets/CloseCircleOutlined.937792d2.js","assets/LoadingOutlined.c8a142bc.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.f466efea.js"),["assets/Tables.f466efea.js","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css","assets/asyncComputed.a952b95a.js","assets/string.18977233.js","assets/PhPencil.vue.ca8bfe59.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.6e0f03ea.js"),["assets/Sql.6e0f03ea.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/utils.6c0462bb.js","assets/PhDownloadSimple.vue.e243f205.js","assets/toggleHighContrast.dd4b340e.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.ea1322e8.js"),["assets/ApiKeys.ea1322e8.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/asyncComputed.a952b95a.js","assets/apiKey.f2e31751.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/member.91cdbabf.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.80b6ae3d.js"),["assets/Logs.80b6ae3d.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/datetime.4db937f8.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b566aa3b.js","assets/LoadingOutlined.c8a142bc.js","assets/string.18977233.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/dayjs.14b12a21.js","assets/index.29418779.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CollapsePanel.9a1664e3.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.a49db249.js"),["assets/ProjectSettings.a49db249.js","assets/asyncComputed.a952b95a.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/SaveButton.0d3e3a03.js","assets/ExclamationCircleOutlined.8aa95a33.js","assets/SaveButton.ae5051de.css","assets/index.b4dc3b3d.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.ec0fc59a.js"),["assets/EnvVars.ec0fc59a.js","assets/View.vue_vue_type_script_setup_true_lang.64d9ba91.js","assets/gateway.d3db1be9.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/popupNotifcation.c145e592.js","assets/fetch.d964eef2.js","assets/record.3c47cf2c.js","assets/SaveButton.0d3e3a03.js","assets/ExclamationCircleOutlined.8aa95a33.js","assets/SaveButton.ae5051de.css","assets/CrudView.d23ed202.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/index.b4dc3b3d.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.525e4c08.js","assets/asyncComputed.a952b95a.js","assets/PhPencil.vue.ca8bfe59.js","assets/index.fa5c154b.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.d8289f72.js"),["assets/Files.d8289f72.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/ContentLayout.c5e5c138.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.c145e592.js","assets/ant-design.6ddd2189.js","assets/asyncComputed.a952b95a.js","assets/PhDotsThree.vue.e883d5ee.js","assets/gateway.d3db1be9.js","assets/tables.64b4b1f2.js","assets/record.3c47cf2c.js","assets/string.18977233.js","assets/DeleteOutlined.380ba9de.js","assets/Card.66b10dba.js","assets/TabPane.5ed4358f.js","assets/Files.5fd6b604.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.0696b729.js"),["assets/View.0696b729.js","assets/asyncComputed.a952b95a.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/index.b4dc3b3d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js","assets/BookOutlined.c829f575.js","assets/index.2b6e163b.js","assets/isNumeric.75337b1e.js","assets/CrudView.d23ed202.js","assets/url.7823dc6b.js","assets/PhDotsThree.vue.e883d5ee.js","assets/index.6fb1e2c9.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.ca8bfe59.js","assets/repository.d685709a.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/fetch.d964eef2.js","assets/record.3c47cf2c.js","assets/ant-design.6ddd2189.js","assets/TabPane.5ed4358f.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.09019790.js"),["assets/TableEditor.09019790.js","assets/vue-router.afcf06ff.js","assets/vue-router.08f4004b.css","assets/BaseLayout.eefefa39.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.a952b95a.js","assets/gateway.d3db1be9.js","assets/popupNotifcation.c145e592.js","assets/organization.cf0a0b6a.js","assets/project.cbfa6422.js","assets/record.3c47cf2c.js","assets/tables.64b4b1f2.js","assets/string.18977233.js","assets/ContentLayout.c5e5c138.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.222fbf88.js","assets/index.31a80ffd.js","assets/index.b4dc3b3d.js","assets/index.a0e789e4.js","assets/index.2b6e163b.js","assets/isNumeric.75337b1e.js","assets/ant-design.6ddd2189.js","assets/PhCaretRight.vue.fd3f255f.js","assets/LoadingOutlined.c8a142bc.js","assets/index.75d8e9ac.js","assets/index.5b074c44.js","assets/TableEditor.d3254f3f.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),i.boot())});export{L as A,i as C,P as T,T as a,m as r};
//# sourceMappingURL=router.2d509b72.js.map
