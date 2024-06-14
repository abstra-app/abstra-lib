var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.494320ac.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.f4cec438.js";import{C as c,a as w}from"./gateway.d254d1c4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1f269aa0-5aa8-48d7-b720-151f8270167d",t._sentryDebugIdIdentifier="sentry-dbid-1f269aa0-5aa8-48d7-b720-151f8270167d")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.4680fc78.js"),["assets/WidgetPreview.4680fc78.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/Steps.8f4b7bd0.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.ea8a50b1.js","assets/WidgetsFrame.0615c03b.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.0af24637.js"),["assets/Login.0af24637.js","assets/CircularLoading.adab601e.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.ea8a50b1.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowClockwise.vue.e69cfca7.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/member.9a769d48.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Login.17bae9af.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.69bcab42.js"),["assets/ReturnApiKey.69bcab42.js","assets/Navbar.35498ae9.js","assets/logo.084e5d7c.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/PhChats.vue.e35d4dc9.js","assets/PhSignOut.vue.a9ba31cf.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.964f3828.js","assets/index.8dfc1f02.js","assets/BookOutlined.6caf0f37.js","assets/Navbar.4c5e8ebc.css","assets/url.4035cbd8.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/apiKey.1afbb89a.js","assets/project.0b95b14e.js","assets/organization.49219c83.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/index.97d49f19.js","assets/Modal.5b685d80.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.6ab7e257.js"),["assets/Organizations.6ab7e257.js","assets/Navbar.35498ae9.js","assets/logo.084e5d7c.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/PhChats.vue.e35d4dc9.js","assets/PhSignOut.vue.a9ba31cf.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.964f3828.js","assets/index.8dfc1f02.js","assets/BookOutlined.6caf0f37.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.221b8b1b.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.2d7efda6.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/ant-design.578895ff.js","assets/index.7e6d6d0d.js","assets/PhArrowSquareOut.vue.d2b6f819.js","assets/PhPencil.vue.0287c7ad.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/organization.49219c83.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.2aa1f1ae.js"),["assets/Organization.2aa1f1ae.js","assets/Navbar.35498ae9.js","assets/logo.084e5d7c.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/PhChats.vue.e35d4dc9.js","assets/PhSignOut.vue.a9ba31cf.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.964f3828.js","assets/index.8dfc1f02.js","assets/BookOutlined.6caf0f37.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.221b8b1b.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.2d7efda6.js","assets/ContentLayout.6dd20759.css","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/organization.49219c83.js","assets/Sidebar.935a8f80.js","assets/index.97d49f19.js","assets/index.e9d1a280.js","assets/Sidebar.4bfd151d.css","assets/Form.494320ac.js","assets/hasIn.f768b788.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.9e5bed93.js"),["assets/Projects.9e5bed93.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/ant-design.578895ff.js","assets/index.7e6d6d0d.js","assets/Modal.5b685d80.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/organization.49219c83.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.d2b6f819.js","assets/PhPencil.vue.0287c7ad.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.39de66f0.js"),["assets/Editors.39de66f0.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/member.9a769d48.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/ant-design.578895ff.js","assets/index.7e6d6d0d.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.26a5fc82.js"),["assets/Billing.26a5fc82.js","assets/asyncComputed.2d627b56.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/organization.49219c83.js","assets/LoadingContainer.ccc2df6b.js","assets/LoadingContainer.8bd9cc72.css","assets/index.88fc4436.js","assets/Card.819aedb9.js","assets/TabPane.cc4db18b.js","assets/hasIn.f768b788.js","assets/Form.494320ac.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.b843b945.js"),["assets/Project.b843b945.js","assets/Navbar.35498ae9.js","assets/logo.084e5d7c.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/PhChats.vue.e35d4dc9.js","assets/PhSignOut.vue.a9ba31cf.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.964f3828.js","assets/index.8dfc1f02.js","assets/BookOutlined.6caf0f37.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.221b8b1b.js","assets/BaseLayout.7e127cbf.css","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/organization.49219c83.js","assets/Sidebar.935a8f80.js","assets/index.97d49f19.js","assets/index.e9d1a280.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.2d7efda6.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.c07a3a64.js","assets/PhIdentificationBadge.vue.fe50f123.js","assets/PhCube.vue.739a02c0.js","assets/PhGlobe.vue.891d517f.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.ef0b2fb3.js"),["assets/Live.ef0b2fb3.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.2d627b56.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/datetime.2a717ed3.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ec2a5eaf.js","assets/LoadingOutlined.22024271.js","assets/PhArrowCounterClockwise.vue.c07a3a64.js","assets/PhArrowSquareOut.vue.d2b6f819.js","assets/PhChats.vue.e35d4dc9.js","assets/PhCopySimple.vue.66c549a5.js","assets/index.17d2b20b.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.11c0556c.js"),["assets/Builds.11c0556c.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/datetime.2a717ed3.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.c07a3a64.js","assets/PhCube.vue.739a02c0.js","assets/PhWebhooksLogo.vue.9cbfc408.js","assets/index.e58b36f6.js","assets/ExclamationCircleOutlined.856b2409.js","assets/CloseCircleOutlined.507db505.js","assets/LoadingOutlined.22024271.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.ca063a14.js"),["assets/Connectors.ca063a14.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/string.50ad36a9.js","assets/connector.fbdcc2e5.js","assets/asyncComputed.2d627b56.js","assets/PhPencil.vue.0287c7ad.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.19b3908e.js"),["assets/Tables.19b3908e.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.2d627b56.js","assets/string.50ad36a9.js","assets/PhPencil.vue.0287c7ad.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.9379e3f1.js"),["assets/Sql.9379e3f1.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/toggleHighContrast.546eb561.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.56fde087.js"),["assets/ApiKeys.56fde087.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.2d627b56.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/member.9a769d48.js","assets/apiKey.1afbb89a.js","assets/project.0b95b14e.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.44169423.js"),["assets/Logs.44169423.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/datetime.2a717ed3.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ec2a5eaf.js","assets/LoadingOutlined.22024271.js","assets/dayjs.3d348d13.js","assets/index.f466bf83.js","assets/index.e9d1a280.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/CollapsePanel.22abd155.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.93d76d74.js"),["assets/ProjectSettings.93d76d74.js","assets/asyncComputed.2d627b56.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.e95bebf2.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.cd54e9ee.js"),["assets/EnvVars.cd54e9ee.js","assets/CrudView.e6af44c9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/url.4035cbd8.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.2d627b56.js","assets/PhPencil.vue.0287c7ad.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.1249320e.js"),["assets/Files.1249320e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.2d7efda6.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.aee17107.js","assets/ant-design.578895ff.js","assets/index.7e6d6d0d.js","assets/Modal.5b685d80.js","assets/asyncComputed.2d627b56.js","assets/gateway.d254d1c4.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.35b408cd.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.819aedb9.js","assets/TabPane.cc4db18b.js","assets/hasIn.f768b788.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.95d72c9c.js"),["assets/View.95d72c9c.js","assets/asyncComputed.2d627b56.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js","assets/BookOutlined.6caf0f37.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/index.ad5a72d4.js","assets/isNumeric.75337b1e.js","assets/CrudView.e6af44c9.js","assets/url.4035cbd8.js","assets/Modal.5b685d80.js","assets/index.e9d1a280.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.0287c7ad.js","assets/repository.80b9f691.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/fetch.179ea359.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/ant-design.578895ff.js","assets/index.7e6d6d0d.js","assets/TabPane.cc4db18b.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.ecdbdefc.js"),["assets/TableEditor.ecdbdefc.js","assets/BaseLayout.221b8b1b.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.2d627b56.js","assets/PhPencil.vue.0287c7ad.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/organization.49219c83.js","assets/ContentLayout.2d7efda6.js","assets/ContentLayout.6dd20759.css","assets/ant-design.578895ff.js","assets/index.7e6d6d0d.js","assets/Modal.5b685d80.js","assets/PhCheckCircle.vue.9adf6e0f.js","assets/index.dc9b0b4c.js","assets/index.48da4db7.js","assets/Form.494320ac.js","assets/hasIn.f768b788.js","assets/index.8d552923.js","assets/index.ad5a72d4.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.3a0a3820.js","assets/LoadingOutlined.22024271.js","assets/DeleteOutlined.35b408cd.js","assets/DeleteOutlined.f8ba9770.js","assets/index.88fc4436.js","assets/index.8dfc1f02.js","assets/index.964f3828.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.7aaf0d29.js"),["assets/ConnectorEditor.7aaf0d29.js","assets/SaveButton.dd3735dd.js","assets/outputWidgets.f4cec438.js","assets/outputWidgets.6a665c1f.css","assets/UnsavedChangesHandler.95e47487.js","assets/ExclamationCircleOutlined.856b2409.js","assets/Modal.5b685d80.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.221b8b1b.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.2d627b56.js","assets/index.5eef9504.js","assets/record.2b50b479.js","assets/pubsub.d177beea.js","assets/gateway.d254d1c4.js","assets/popupNotifcation.aee17107.js","assets/string.50ad36a9.js","assets/project.0b95b14e.js","assets/connector.fbdcc2e5.js","assets/organization.49219c83.js","assets/TabPane.cc4db18b.js","assets/hasIn.f768b788.js","assets/index.8dfc1f02.js","assets/index.964f3828.js","assets/Form.494320ac.js","assets/index.88fc4436.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.b603db0a.js.map
