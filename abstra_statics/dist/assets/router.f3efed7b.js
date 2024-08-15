var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,dc as h,dd as u,de as b,h as E,i as A,_ as o,j as f}from"./vue-router.3651a0a9.js";import{C as c,a as g}from"./gateway.441ecb6a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2a7ac29f-5bff-4199-ab9f-ef9e5c947312",t._sentryDebugIdIdentifier="sentry-dbid-2a7ac29f-5bff-4199-ab9f-ef9e5c947312")}catch{}})();const L=p(h),T=p(u);class w{async getInfo(){return await c.get("authors/info")}}const v=new w,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.63a58349.js"),["assets/WidgetPreview.63a58349.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/Steps.ec2a1a54.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.55f5e386.js","assets/WidgetsFrame.e0c6be76.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.148edb62.js"),["assets/Login.148edb62.js","assets/CircularLoading.316331ca.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/CircularLoading.e156a2b0.css","assets/Logo.5d5a720e.js","assets/Logo.21e86751.css","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/member.b63ae420.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/string.47bdf7b5.js","assets/Login.df6b4899.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.b08c4634.js"),["assets/EditorLogin.b08c4634.js","assets/Navbar.328bf08e.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/asyncComputed.557db8ec.js","assets/PhChats.vue.41ecdc5c.js","assets/PhSignOut.vue.494974bd.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/index.a6c79072.js","assets/Avatar.d5f85dd5.js","assets/index.1b9e019b.js","assets/index.98c0d102.js","assets/BookOutlined.2faa38e2.js","assets/Navbar.a899b0d6.css","assets/url.1fa0dd33.js","assets/apiKey.c434dd7f.js","assets/organization.24752b4d.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.cf40083e.js"),["assets/Organizations.cf40083e.js","assets/Navbar.328bf08e.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/asyncComputed.557db8ec.js","assets/PhChats.vue.41ecdc5c.js","assets/PhSignOut.vue.494974bd.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/index.a6c79072.js","assets/Avatar.d5f85dd5.js","assets/index.1b9e019b.js","assets/index.98c0d102.js","assets/BookOutlined.2faa38e2.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.c0ed4031.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.30bfd48d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/CrudView.80dd6085.css","assets/ant-design.cad07fb8.js","assets/PhArrowSquareOut.vue.a4f7e67f.js","assets/PhPencil.vue.f3844e99.js","assets/organization.24752b4d.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/string.47bdf7b5.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.fe18539b.js"),["assets/Organization.fe18539b.js","assets/Navbar.328bf08e.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/asyncComputed.557db8ec.js","assets/PhChats.vue.41ecdc5c.js","assets/PhSignOut.vue.494974bd.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/index.a6c79072.js","assets/Avatar.d5f85dd5.js","assets/index.1b9e019b.js","assets/index.98c0d102.js","assets/BookOutlined.2faa38e2.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.c0ed4031.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.30bfd48d.js","assets/ContentLayout.ee57a545.css","assets/organization.24752b4d.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/string.47bdf7b5.js","assets/Sidebar.530f9d33.js","assets/index.0a1c06b7.js","assets/Logo.5d5a720e.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.e00e56e7.js"),["assets/Projects.e00e56e7.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/asyncComputed.557db8ec.js","assets/ant-design.cad07fb8.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/organization.24752b4d.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.a4f7e67f.js","assets/PhCopy.vue.f625d6d9.js","assets/PhPencil.vue.f3844e99.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.818520d6.js"),["assets/Editors.818520d6.js","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css","assets/ant-design.cad07fb8.js","assets/asyncComputed.557db8ec.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/member.b63ae420.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/string.47bdf7b5.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.7beddedb.js"),["assets/Billing.7beddedb.js","assets/asyncComputed.557db8ec.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/organization.24752b4d.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/string.47bdf7b5.js","assets/LoadingContainer.576a91c9.js","assets/LoadingContainer.56fa997a.css","assets/index.cea5d53c.js","assets/Card.37545675.js","assets/TabPane.f1dc051a.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.a87b4c0e.js"),["assets/Project.a87b4c0e.js","assets/Navbar.328bf08e.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/asyncComputed.557db8ec.js","assets/PhChats.vue.41ecdc5c.js","assets/PhSignOut.vue.494974bd.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/index.a6c79072.js","assets/Avatar.d5f85dd5.js","assets/index.1b9e019b.js","assets/index.98c0d102.js","assets/BookOutlined.2faa38e2.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.c0ed4031.js","assets/BaseLayout.0156e9e1.css","assets/organization.24752b4d.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/Sidebar.530f9d33.js","assets/index.0a1c06b7.js","assets/Logo.5d5a720e.js","assets/Logo.21e86751.css","assets/Sidebar.83c5c451.css","assets/ContentLayout.30bfd48d.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.c4df2fb9.js","assets/PhIdentificationBadge.vue.e16c6bf8.js","assets/PhCube.vue.e26ddef4.js","assets/PhGlobe.vue.1720c94c.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.bd9d747b.js"),["assets/Live.bd9d747b.js","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css","assets/asyncComputed.557db8ec.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/datetime.7ec52b02.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.05ec10cf.js","assets/LoadingOutlined.2900f6c6.js","assets/PhArrowCounterClockwise.vue.c4df2fb9.js","assets/PhArrowSquareOut.vue.a4f7e67f.js","assets/PhChats.vue.41ecdc5c.js","assets/PhCopySimple.vue.7c2884f2.js","assets/PhRocketLaunch.vue.b055bced.js","assets/index.ce04fbc7.js","assets/Live.37cc9741.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.081173bb.js"),["assets/Builds.081173bb.js","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css","assets/asyncComputed.557db8ec.js","assets/datetime.7ec52b02.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/PhArrowCounterClockwise.vue.c4df2fb9.js","assets/PhCube.vue.e26ddef4.js","assets/PhDownloadSimple.vue.e9906ad0.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/PhWebhooksLogo.vue.5cafcf0a.js","assets/index.f63289fc.js","assets/ExclamationCircleOutlined.76ccead7.js","assets/CloseCircleOutlined.8011ed42.js","assets/LoadingOutlined.2900f6c6.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./ConnectorsView.cea6f57e.js"),["assets/ConnectorsView.cea6f57e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.737debcd.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/Avatar.d5f85dd5.js","assets/Card.37545675.js","assets/TabPane.f1dc051a.js","assets/index.a6c79072.js","assets/index.a1a74c89.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.d46326e8.js"),["assets/Tables.d46326e8.js","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css","assets/asyncComputed.557db8ec.js","assets/string.47bdf7b5.js","assets/PhPencil.vue.f3844e99.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/tables.e063442e.js","assets/record.21f9fccc.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.872512c6.js"),["assets/Sql.872512c6.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/utils.263752ac.js","assets/PhDownloadSimple.vue.e9906ad0.js","assets/toggleHighContrast.61c891de.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.089dcda8.js"),["assets/ApiKeys.089dcda8.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/asyncComputed.557db8ec.js","assets/apiKey.c434dd7f.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/member.b63ae420.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.ad868cee.js"),["assets/Logs.ad868cee.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/datetime.7ec52b02.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.05ec10cf.js","assets/LoadingOutlined.2900f6c6.js","assets/string.47bdf7b5.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/dayjs.d666cc8e.js","assets/index.a6c79072.js","assets/CollapsePanel.ca370525.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.ea73a444.js"),["assets/ProjectSettings.ea73a444.js","assets/asyncComputed.557db8ec.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/SaveButton.9232e6f3.js","assets/ExclamationCircleOutlined.76ccead7.js","assets/SaveButton.ae5051de.css","assets/index.a6c79072.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.83ec21e1.js"),["assets/EnvVars.83ec21e1.js","assets/View.vue_vue_type_script_setup_true_lang.e1347cb4.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/fetch.67d8b8e2.js","assets/record.21f9fccc.js","assets/SaveButton.9232e6f3.js","assets/ExclamationCircleOutlined.76ccead7.js","assets/SaveButton.ae5051de.css","assets/CrudView.91b6c7f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/index.a6c79072.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.b055bced.js","assets/asyncComputed.557db8ec.js","assets/PhPencil.vue.f3844e99.js","assets/index.0a1c06b7.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.efa3dcf5.js"),["assets/Files.efa3dcf5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/ContentLayout.30bfd48d.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.58438251.js","assets/ant-design.cad07fb8.js","assets/asyncComputed.557db8ec.js","assets/PhDotsThree.vue.30e022d0.js","assets/gateway.441ecb6a.js","assets/tables.e063442e.js","assets/record.21f9fccc.js","assets/string.47bdf7b5.js","assets/DeleteOutlined.09a3d577.js","assets/Card.37545675.js","assets/TabPane.f1dc051a.js","assets/Files.5fd6b604.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.39737fe5.js"),["assets/View.39737fe5.js","assets/asyncComputed.557db8ec.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/index.a6c79072.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js","assets/BookOutlined.2faa38e2.js","assets/index.a1a74c89.js","assets/isNumeric.75337b1e.js","assets/CrudView.91b6c7f5.js","assets/url.1fa0dd33.js","assets/PhDotsThree.vue.30e022d0.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.f3844e99.js","assets/repository.ca1e111b.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/fetch.67d8b8e2.js","assets/record.21f9fccc.js","assets/ant-design.cad07fb8.js","assets/TabPane.f1dc051a.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.b6994a62.js"),["assets/TableEditor.b6994a62.js","assets/AbstraButton.vue_vue_type_script_setup_true_lang.737debcd.js","assets/vue-router.3651a0a9.js","assets/vue-router.1e9a29cf.css","assets/BaseLayout.c0ed4031.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.557db8ec.js","assets/gateway.441ecb6a.js","assets/popupNotifcation.58438251.js","assets/organization.24752b4d.js","assets/project.7620f98c.js","assets/record.21f9fccc.js","assets/tables.e063442e.js","assets/string.47bdf7b5.js","assets/ContentLayout.30bfd48d.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.fe599cc0.js","assets/index.62d89888.js","assets/index.a6c79072.js","assets/index.a1a74c89.js","assets/isNumeric.75337b1e.js","assets/ant-design.cad07fb8.js","assets/PhCaretRight.vue.51fb3427.js","assets/LoadingOutlined.2900f6c6.js","assets/index.1b9e019b.js","assets/index.98c0d102.js","assets/Avatar.d5f85dd5.js","assets/TableEditor.d3254f3f.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{f(t,e);const a=g.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.f3efed7b.js.map
