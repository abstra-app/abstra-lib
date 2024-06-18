var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.3dbd34e0.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.589d5db6.js";import{C as c,a as w}from"./gateway.5245cda5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="002f5f3f-b6d9-4792-b148-9c4a6364d66e",t._sentryDebugIdIdentifier="sentry-dbid-002f5f3f-b6d9-4792-b148-9c4a6364d66e")}catch{}})();const T=p(h),D=p(u);class f{async getInfo(){return await c.get("authors/info")}}const v=new f,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||v.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.0414aa3f.js"),["assets/WidgetPreview.0414aa3f.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/Steps.ca960058.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.c753c958.js","assets/WidgetsFrame.0615c03b.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.ca9241a1.js"),["assets/Login.ca9241a1.js","assets/CircularLoading.7d8146a4.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.c753c958.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowClockwise.vue.1f82bf0b.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/member.d89cd0c1.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.da6bb551.js"),["assets/ReturnApiKey.da6bb551.js","assets/Navbar.990e8b62.js","assets/logo.084e5d7c.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/PhChats.vue.090fb9d7.js","assets/PhSignOut.vue.bfbef623.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.adc22e0f.js","assets/index.1e825667.js","assets/BookOutlined.cd4d9624.js","assets/Navbar.4c5e8ebc.css","assets/url.d6fa8aca.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/apiKey.4ae9e7a0.js","assets/project.afde80cb.js","assets/organization.e5f734c0.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/index.29bd72ff.js","assets/Modal.cddc73e2.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.7098d7e5.js"),["assets/Organizations.7098d7e5.js","assets/Navbar.990e8b62.js","assets/logo.084e5d7c.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/PhChats.vue.090fb9d7.js","assets/PhSignOut.vue.bfbef623.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.adc22e0f.js","assets/index.1e825667.js","assets/BookOutlined.cd4d9624.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.e605f185.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.c7b90469.js","assets/ContentLayout.6dd20759.css","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/ant-design.6b0cba37.js","assets/index.926fb751.js","assets/PhArrowSquareOut.vue.096428e9.js","assets/PhPencil.vue.2abc688b.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/organization.e5f734c0.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.8e04ebdb.js"),["assets/Organization.8e04ebdb.js","assets/Navbar.990e8b62.js","assets/logo.084e5d7c.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/PhChats.vue.090fb9d7.js","assets/PhSignOut.vue.bfbef623.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.adc22e0f.js","assets/index.1e825667.js","assets/BookOutlined.cd4d9624.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.e605f185.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.c7b90469.js","assets/ContentLayout.6dd20759.css","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/organization.e5f734c0.js","assets/Sidebar.031f505a.js","assets/index.29bd72ff.js","assets/index.1ed90867.js","assets/Sidebar.4bfd151d.css","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.bbc5c87c.js"),["assets/Projects.bbc5c87c.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/ant-design.6b0cba37.js","assets/index.926fb751.js","assets/Modal.cddc73e2.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/organization.e5f734c0.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.096428e9.js","assets/PhPencil.vue.2abc688b.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.c9422b2f.js"),["assets/Editors.c9422b2f.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/member.d89cd0c1.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/ant-design.6b0cba37.js","assets/index.926fb751.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.3b2e3094.js"),["assets/Billing.3b2e3094.js","assets/asyncComputed.779bb454.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/organization.e5f734c0.js","assets/LoadingContainer.ff5e7f79.js","assets/LoadingContainer.8bd9cc72.css","assets/index.cea267ea.js","assets/Card.65c7a02f.js","assets/TabPane.5a20ade2.js","assets/hasIn.9f92df29.js","assets/Form.3dbd34e0.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.cd2c227b.js"),["assets/Project.cd2c227b.js","assets/Navbar.990e8b62.js","assets/logo.084e5d7c.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/PhChats.vue.090fb9d7.js","assets/PhSignOut.vue.bfbef623.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.adc22e0f.js","assets/index.1e825667.js","assets/BookOutlined.cd4d9624.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.e605f185.js","assets/BaseLayout.7e127cbf.css","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/organization.e5f734c0.js","assets/Sidebar.031f505a.js","assets/index.29bd72ff.js","assets/index.1ed90867.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.c7b90469.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.02fdaa64.js","assets/PhIdentificationBadge.vue.f22763c3.js","assets/PhCube.vue.1d9d9584.js","assets/PhGlobe.vue.27a66ef5.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.4734f1da.js"),["assets/Live.4734f1da.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.779bb454.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/datetime.074c49cc.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.020b1b32.js","assets/LoadingOutlined.04cbd373.js","assets/PhArrowCounterClockwise.vue.02fdaa64.js","assets/PhArrowSquareOut.vue.096428e9.js","assets/PhChats.vue.090fb9d7.js","assets/PhCopySimple.vue.6f6741c4.js","assets/index.72c54513.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.84b8a120.js"),["assets/Builds.84b8a120.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/datetime.074c49cc.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.02fdaa64.js","assets/PhCube.vue.1d9d9584.js","assets/PhDownloadSimple.vue.772a6d1e.js","assets/PhWebhooksLogo.vue.09bc0895.js","assets/index.60c8d89e.js","assets/ExclamationCircleOutlined.00215708.js","assets/CloseCircleOutlined.d8452366.js","assets/LoadingOutlined.04cbd373.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.80390e87.js"),["assets/Connectors.80390e87.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/index.13578cac.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/connector.3727633e.js","assets/asyncComputed.779bb454.js","assets/PhPencil.vue.2abc688b.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.6ded3e87.js"),["assets/Tables.6ded3e87.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.779bb454.js","assets/string.f7185dbb.js","assets/PhPencil.vue.2abc688b.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.bb12f715.js"),["assets/Sql.bb12f715.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/utils.2256dcb9.js","assets/PhDownloadSimple.vue.772a6d1e.js","assets/toggleHighContrast.0b361cee.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/Sql.d29b4717.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.02f0ae14.js"),["assets/ApiKeys.02f0ae14.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/asyncComputed.779bb454.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/member.d89cd0c1.js","assets/apiKey.4ae9e7a0.js","assets/project.afde80cb.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.df0519c0.js"),["assets/Logs.df0519c0.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/datetime.074c49cc.js","assets/string.f7185dbb.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.020b1b32.js","assets/LoadingOutlined.04cbd373.js","assets/dayjs.d433ed37.js","assets/index.c2e45c62.js","assets/index.1ed90867.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/CollapsePanel.f5599ba2.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.2dd9d51b.js"),["assets/ProjectSettings.2dd9d51b.js","assets/asyncComputed.779bb454.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.95193202.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.1670f2c1.js"),["assets/EnvVars.1670f2c1.js","assets/CrudView.0d6566c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/url.d6fa8aca.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.779bb454.js","assets/PhPencil.vue.2abc688b.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.41e5d758.js"),["assets/Files.41e5d758.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/ContentLayout.c7b90469.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.70a8efc7.js","assets/ant-design.6b0cba37.js","assets/index.926fb751.js","assets/Modal.cddc73e2.js","assets/asyncComputed.779bb454.js","assets/gateway.5245cda5.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.25d41650.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.65c7a02f.js","assets/TabPane.5a20ade2.js","assets/hasIn.9f92df29.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.c45edbc4.js"),["assets/View.c45edbc4.js","assets/asyncComputed.779bb454.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.61d47591.js","assets/BookOutlined.cd4d9624.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/index.b27f597e.js","assets/isNumeric.75337b1e.js","assets/CrudView.0d6566c9.js","assets/url.d6fa8aca.js","assets/Modal.cddc73e2.js","assets/index.1ed90867.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.2abc688b.js","assets/repository.1c669e4c.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/fetch.2da6a89a.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/ant-design.6b0cba37.js","assets/index.926fb751.js","assets/TabPane.5a20ade2.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.cc9fbd85.js"),["assets/TableEditor.cc9fbd85.js","assets/BaseLayout.e605f185.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.779bb454.js","assets/PhPencil.vue.2abc688b.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/index.13578cac.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/organization.e5f734c0.js","assets/ContentLayout.c7b90469.js","assets/ContentLayout.6dd20759.css","assets/ant-design.6b0cba37.js","assets/index.926fb751.js","assets/Modal.cddc73e2.js","assets/PhCheckCircle.vue.9d07c497.js","assets/index.8714da79.js","assets/index.59bad154.js","assets/Form.3dbd34e0.js","assets/hasIn.9f92df29.js","assets/index.f04446b8.js","assets/index.b27f597e.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.139022a3.js","assets/LoadingOutlined.04cbd373.js","assets/DeleteOutlined.25d41650.js","assets/DeleteOutlined.f8ba9770.js","assets/index.cea267ea.js","assets/index.1e825667.js","assets/index.adc22e0f.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.7520546f.js"),["assets/ConnectorEditor.7520546f.js","assets/SaveButton.e0bc4907.js","assets/outputWidgets.589d5db6.js","assets/outputWidgets.f9731be5.css","assets/UnsavedChangesHandler.90563524.js","assets/ExclamationCircleOutlined.00215708.js","assets/Modal.cddc73e2.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.e605f185.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.779bb454.js","assets/index.13578cac.js","assets/gateway.5245cda5.js","assets/popupNotifcation.70a8efc7.js","assets/record.cd1164d0.js","assets/pubsub.7ca38379.js","assets/string.f7185dbb.js","assets/project.afde80cb.js","assets/connector.3727633e.js","assets/organization.e5f734c0.js","assets/TabPane.5a20ade2.js","assets/hasIn.9f92df29.js","assets/index.1e825667.js","assets/index.adc22e0f.js","assets/Form.3dbd34e0.js","assets/index.cea267ea.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.3ad640bd.js.map
