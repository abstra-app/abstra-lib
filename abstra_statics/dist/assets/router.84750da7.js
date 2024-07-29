var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{a5 as p,d1 as h,d2 as u,d3 as b,h as E,i as A,_ as o,j as g}from"./vue-router.70e693dc.js";import{C as c,a as w}from"./gateway.90873574.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="919736d6-2134-4bcd-afc4-72a7074cebc3",t._sentryDebugIdIdentifier="sentry-dbid-919736d6-2134-4bcd-afc4-72a7074cebc3")}catch{}})();const L=p(h),T=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.f4511c15.js"),["assets/WidgetPreview.f4511c15.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/Steps.7a28dd8a.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.78931ede.js","assets/WidgetsFrame.295ac367.css","assets/WidgetPreview.b08a521d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.e7f424f1.js"),["assets/Login.e7f424f1.js","assets/CircularLoading.f636f5a5.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/CircularLoading.e156a2b0.css","assets/Logo.4398956a.js","assets/Logo.21e86751.css","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/member.b7c8d2e2.js","assets/Login.df6b4899.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./EditorLogin.29f8fa76.js"),["assets/EditorLogin.29f8fa76.js","assets/Navbar.c3dad764.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/asyncComputed.59056117.js","assets/PhChats.vue.be6b345b.js","assets/PhSignOut.vue.6a546da5.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/index.22d982fc.js","assets/index.c6f08ba9.js","assets/index.32a9789d.js","assets/BookOutlined.c95635a1.js","assets/Navbar.a899b0d6.css","assets/url.275f2272.js","assets/apiKey.a753ad88.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js","assets/project.663b284b.js","assets/EditorLogin.7e0ad5ed.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.a85ce573.js"),["assets/Organizations.a85ce573.js","assets/Navbar.c3dad764.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/asyncComputed.59056117.js","assets/PhChats.vue.be6b345b.js","assets/PhSignOut.vue.6a546da5.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/index.22d982fc.js","assets/index.c6f08ba9.js","assets/index.32a9789d.js","assets/BookOutlined.c95635a1.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.27e632d8.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.91b6edb4.js","assets/ContentLayout.ee57a545.css","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/CrudView.80dd6085.css","assets/ant-design.7d7da85e.js","assets/PhArrowSquareOut.vue.01ecbadb.js","assets/PhPencil.vue.9ba9b681.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.c9d0e36b.js"),["assets/Organization.c9d0e36b.js","assets/Navbar.c3dad764.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/asyncComputed.59056117.js","assets/PhChats.vue.be6b345b.js","assets/PhSignOut.vue.6a546da5.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/index.22d982fc.js","assets/index.c6f08ba9.js","assets/index.32a9789d.js","assets/BookOutlined.c95635a1.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.27e632d8.js","assets/BaseLayout.0156e9e1.css","assets/ContentLayout.91b6edb4.js","assets/ContentLayout.ee57a545.css","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js","assets/Sidebar.45e78ded.js","assets/index.b9d676ee.js","assets/Logo.4398956a.js","assets/Logo.21e86751.css","assets/index.5c561278.js","assets/Sidebar.b3237e51.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.f8123861.js"),["assets/Projects.f8123861.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/asyncComputed.59056117.js","assets/ant-design.7d7da85e.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js","assets/project.663b284b.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css","assets/PhArrowSquareOut.vue.01ecbadb.js","assets/PhPencil.vue.9ba9b681.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.337ac335.js"),["assets/Editors.337ac335.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css","assets/ant-design.7d7da85e.js","assets/asyncComputed.59056117.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/member.b7c8d2e2.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.552e9521.js"),["assets/Billing.552e9521.js","assets/asyncComputed.59056117.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js","assets/LoadingContainer.b8669125.js","assets/LoadingContainer.56fa997a.css","assets/index.51b0e265.js","assets/Card.6fc340eb.js","assets/TabPane.08fb23c0.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.a812653c.js"),["assets/Project.a812653c.js","assets/Navbar.c3dad764.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/asyncComputed.59056117.js","assets/PhChats.vue.be6b345b.js","assets/PhSignOut.vue.6a546da5.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/index.22d982fc.js","assets/index.c6f08ba9.js","assets/index.32a9789d.js","assets/BookOutlined.c95635a1.js","assets/Navbar.a899b0d6.css","assets/BaseLayout.27e632d8.js","assets/BaseLayout.0156e9e1.css","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js","assets/project.663b284b.js","assets/Sidebar.45e78ded.js","assets/index.b9d676ee.js","assets/Logo.4398956a.js","assets/Logo.21e86751.css","assets/index.5c561278.js","assets/Sidebar.b3237e51.css","assets/ContentLayout.91b6edb4.js","assets/ContentLayout.ee57a545.css","assets/PhArrowCounterClockwise.vue.80bb45e6.js","assets/PhIdentificationBadge.vue.68653883.js","assets/PhCube.vue.ea274270.js","assets/PhGlobe.vue.e472152b.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.72152305.js"),["assets/Live.72152305.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css","assets/asyncComputed.59056117.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/datetime.bae1fe7d.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/project.663b284b.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9bffe902.js","assets/LoadingOutlined.17be29bf.js","assets/PhArrowCounterClockwise.vue.80bb45e6.js","assets/PhArrowSquareOut.vue.01ecbadb.js","assets/PhChats.vue.be6b345b.js","assets/PhCopySimple.vue.b26a021e.js","assets/PhRocketLaunch.vue.0addd4c5.js","assets/index.22f2d3fc.js","assets/Live.dfeefa78.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.5ecafdc6.js"),["assets/Builds.5ecafdc6.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css","assets/asyncComputed.59056117.js","assets/datetime.bae1fe7d.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/PhArrowCounterClockwise.vue.80bb45e6.js","assets/PhCube.vue.ea274270.js","assets/PhDownloadSimple.vue.0abcd649.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/project.663b284b.js","assets/PhWebhooksLogo.vue.e76d9817.js","assets/index.8c23e54f.js","assets/ExclamationCircleOutlined.292dd70e.js","assets/CloseCircleOutlined.c64c316c.js","assets/LoadingOutlined.17be29bf.js","assets/Builds.7ca95d15.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.e6fd61e2.js"),["assets/Connectors.e6fd61e2.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/tables.f3742496.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/connector.0faea82c.js","assets/asyncComputed.59056117.js","assets/PhPencil.vue.9ba9b681.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.d9677b82.js"),["assets/Tables.d9677b82.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css","assets/asyncComputed.59056117.js","assets/string.441534de.js","assets/PhPencil.vue.9ba9b681.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.b5b0585e.js"),["assets/Sql.b5b0585e.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/utils.0dc7a99f.js","assets/PhDownloadSimple.vue.0abcd649.js","assets/toggleHighContrast.97cb9c75.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/project.663b284b.js","assets/Sql.1feebca7.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.8574977e.js"),["assets/ApiKeys.8574977e.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/asyncComputed.59056117.js","assets/apiKey.a753ad88.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/member.b7c8d2e2.js","assets/project.663b284b.js","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.33d5775c.js"),["assets/Logs.33d5775c.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/datetime.bae1fe7d.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9bffe902.js","assets/LoadingOutlined.17be29bf.js","assets/dayjs.d7da8dd2.js","assets/index.9b4f47c5.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CollapsePanel.45247f46.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.481438bd.js"),["assets/ProjectSettings.481438bd.js","assets/asyncComputed.59056117.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/project.663b284b.js","assets/SaveButton.3d9728d6.js","assets/ExclamationCircleOutlined.292dd70e.js","assets/SaveButton.ae5051de.css","assets/index.22d982fc.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.0c8b2f6b.js"),["assets/EnvVars.0c8b2f6b.js","assets/View.vue_vue_type_script_setup_true_lang.4438cec7.js","assets/gateway.90873574.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/popupNotifcation.f60dcc22.js","assets/fetch.89ca01bd.js","assets/record.4a1b1905.js","assets/SaveButton.3d9728d6.js","assets/ExclamationCircleOutlined.292dd70e.js","assets/SaveButton.ae5051de.css","assets/CrudView.4095bf10.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/index.22d982fc.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.0addd4c5.js","assets/asyncComputed.59056117.js","assets/PhPencil.vue.9ba9b681.js","assets/index.b9d676ee.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.fdf8b061.js"),["assets/Files.fdf8b061.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/ContentLayout.91b6edb4.js","assets/ContentLayout.ee57a545.css","assets/popupNotifcation.f60dcc22.js","assets/ant-design.7d7da85e.js","assets/asyncComputed.59056117.js","assets/PhDotsThree.vue.edb3e473.js","assets/gateway.90873574.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/DeleteOutlined.7fb8eb15.js","assets/Card.6fc340eb.js","assets/TabPane.08fb23c0.js","assets/Files.88cda06a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.49ee08dc.js"),["assets/View.49ee08dc.js","assets/asyncComputed.59056117.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/index.22d982fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js","assets/BookOutlined.c95635a1.js","assets/index.9d8997d1.js","assets/isNumeric.75337b1e.js","assets/CrudView.4095bf10.js","assets/url.275f2272.js","assets/PhDotsThree.vue.edb3e473.js","assets/index.5c561278.js","assets/CrudView.80dd6085.css","assets/PhPencil.vue.9ba9b681.js","assets/repository.17b9367b.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/fetch.89ca01bd.js","assets/record.4a1b1905.js","assets/ant-design.7d7da85e.js","assets/TabPane.08fb23c0.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.ef9969a9.js"),["assets/TableEditor.ef9969a9.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/BaseLayout.27e632d8.js","assets/BaseLayout.0156e9e1.css","assets/asyncComputed.59056117.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/tables.f3742496.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/organization.25d15c38.js","assets/project.663b284b.js","assets/ContentLayout.91b6edb4.js","assets/ContentLayout.ee57a545.css","assets/PhCheckCircle.vue.9ebed657.js","assets/index.bdc35505.js","assets/index.22d982fc.js","assets/index.6a5e2ba0.js","assets/index.9d8997d1.js","assets/isNumeric.75337b1e.js","assets/ant-design.7d7da85e.js","assets/PhCaretRight.vue.fca9ed1d.js","assets/LoadingOutlined.17be29bf.js","assets/index.51b0e265.js","assets/index.32a9789d.js","assets/index.c6f08ba9.js","assets/TableEditor.664e24c1.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.37fb932d.js"),["assets/ConnectorEditor.37fb932d.js","assets/BaseLayout.27e632d8.js","assets/vue-router.70e693dc.js","assets/vue-router.5e05287a.css","assets/BaseLayout.0156e9e1.css","assets/SaveButton.3d9728d6.js","assets/ExclamationCircleOutlined.292dd70e.js","assets/SaveButton.ae5051de.css","assets/asyncComputed.59056117.js","assets/tables.f3742496.js","assets/gateway.90873574.js","assets/popupNotifcation.f60dcc22.js","assets/record.4a1b1905.js","assets/string.441534de.js","assets/connector.0faea82c.js","assets/organization.25d15c38.js","assets/project.663b284b.js","assets/TabPane.08fb23c0.js","assets/index.32a9789d.js","assets/index.c6f08ba9.js","assets/index.22d982fc.js","assets/index.51b0e265.js","assets/ConnectorEditor.575aefc3.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{L as A,s as C,P as T,T as a,m as r};
//# sourceMappingURL=router.84750da7.js.map
