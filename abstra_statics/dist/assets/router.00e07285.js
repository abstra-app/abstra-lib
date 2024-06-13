var d=Object.defineProperty;var _=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(_(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.87fb7934.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.e8df7bd6.js";import{C as c,a as w}from"./gateway.11a92db7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e5a2712e-b4d5-4e9d-b593-dada5ebce0b9",t._sentryDebugIdIdentifier="sentry-dbid-e5a2712e-b4d5-4e9d-b593-dada5ebce0b9")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const I=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||I.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class f{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new f;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.c8dde2de.js"),["assets/WidgetPreview.c8dde2de.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/Steps.8670395e.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.f1f5c152.js","assets/WidgetsFrame.0615c03b.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.d9b3332b.js"),["assets/Login.d9b3332b.js","assets/CircularLoading.127b19d5.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.f1f5c152.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowClockwise.vue.81769a5e.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/member.7451cfd1.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.51df260c.js"),["assets/ReturnApiKey.51df260c.js","assets/Navbar.0032b713.js","assets/logo.084e5d7c.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/PhChats.vue.791fa0a0.js","assets/PhSignOut.vue.b7f67141.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.5ac9c8ce.js","assets/index.8f19a559.js","assets/BookOutlined.6fc00861.js","assets/Navbar.4c5e8ebc.css","assets/url.a8d8aa9e.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/apiKey.a7f36d2e.js","assets/project.509139c8.js","assets/organization.e8786dac.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/index.29445b3e.js","assets/Modal.10e3144f.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.72dcdf7c.js"),["assets/Organizations.72dcdf7c.js","assets/Navbar.0032b713.js","assets/logo.084e5d7c.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/PhChats.vue.791fa0a0.js","assets/PhSignOut.vue.b7f67141.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.5ac9c8ce.js","assets/index.8f19a559.js","assets/BookOutlined.6fc00861.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.708c2e88.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/PhPencil.vue.83e08a39.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/organization.e8786dac.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.0670da6a.js"),["assets/Organization.0670da6a.js","assets/Navbar.0032b713.js","assets/logo.084e5d7c.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/PhChats.vue.791fa0a0.js","assets/PhSignOut.vue.b7f67141.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.5ac9c8ce.js","assets/index.8f19a559.js","assets/BookOutlined.6fc00861.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.708c2e88.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/organization.e8786dac.js","assets/Sidebar.3efe8106.js","assets/index.29445b3e.js","assets/index.ea715c19.js","assets/Sidebar.4bfd151d.css","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.ea72cc54.js"),["assets/Projects.ea72cc54.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/Modal.10e3144f.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/organization.e8786dac.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/PhPencil.vue.83e08a39.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.47381d91.js"),["assets/Editors.47381d91.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/member.7451cfd1.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/ant-design.5f8727bf.js","assets/index.0e091586.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.c0af077f.js"),["assets/Billing.c0af077f.js","assets/asyncComputed.78e6dc57.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/organization.e8786dac.js","assets/LoadingContainer.d63be05b.js","assets/LoadingContainer.8bd9cc72.css","assets/index.612586a5.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/hasIn.0c7158d4.js","assets/Form.87fb7934.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.da4712ff.js"),["assets/Project.da4712ff.js","assets/Navbar.0032b713.js","assets/logo.084e5d7c.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/PhChats.vue.791fa0a0.js","assets/PhSignOut.vue.b7f67141.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.5ac9c8ce.js","assets/index.8f19a559.js","assets/BookOutlined.6fc00861.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.708c2e88.js","assets/BaseLayout.7e127cbf.css","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/organization.e8786dac.js","assets/Sidebar.3efe8106.js","assets/index.29445b3e.js","assets/index.ea715c19.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.d5c38a5c.js","assets/PhIdentificationBadge.vue.a277e4b1.js","assets/PhCube.vue.bceb6193.js","assets/PhGlobe.vue.0265170b.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.b3692ede.js"),["assets/Live.b3692ede.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.78e6dc57.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/datetime.ec760995.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e0b453e8.js","assets/LoadingOutlined.419cf900.js","assets/PhArrowCounterClockwise.vue.d5c38a5c.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/PhChats.vue.791fa0a0.js","assets/PhCopySimple.vue.3b305c8b.js","assets/index.c370b4af.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.10b4020e.js"),["assets/Builds.10b4020e.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/datetime.ec760995.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.d5c38a5c.js","assets/PhCube.vue.bceb6193.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/index.c66b9ae1.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/CloseCircleOutlined.fc1bd334.js","assets/LoadingOutlined.419cf900.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.7f8423a2.js"),["assets/Connectors.7f8423a2.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/string.f31a4de3.js","assets/connector.cede4211.js","assets/asyncComputed.78e6dc57.js","assets/PhPencil.vue.83e08a39.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.14c68e7d.js"),["assets/Tables.14c68e7d.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.78e6dc57.js","assets/string.f31a4de3.js","assets/PhPencil.vue.83e08a39.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.5156d9d5.js"),["assets/Sql.5156d9d5.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/toggleHighContrast.eb2c05c5.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.567ae0b9.js"),["assets/ApiKeys.567ae0b9.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.78e6dc57.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/member.7451cfd1.js","assets/apiKey.a7f36d2e.js","assets/project.509139c8.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.c3e76645.js"),["assets/Logs.c3e76645.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/datetime.ec760995.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e0b453e8.js","assets/LoadingOutlined.419cf900.js","assets/dayjs.e48f203f.js","assets/index.ec24afef.js","assets/index.ea715c19.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/CollapsePanel.02a492e7.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.11654f53.js"),["assets/ProjectSettings.11654f53.js","assets/asyncComputed.78e6dc57.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.243c2001.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.88fd2d4d.js"),["assets/EnvVars.88fd2d4d.js","assets/CrudView.e7ede052.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/url.a8d8aa9e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.78e6dc57.js","assets/PhPencil.vue.83e08a39.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.5c3a1a2a.js"),["assets/Files.5c3a1a2a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.c6b65145.js","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/Modal.10e3144f.js","assets/asyncComputed.78e6dc57.js","assets/gateway.11a92db7.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.d4931297.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/hasIn.0c7158d4.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.052a7b77.js"),["assets/View.052a7b77.js","assets/asyncComputed.78e6dc57.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/index.780def49.js","assets/isNumeric.75337b1e.js","assets/CrudView.e7ede052.js","assets/url.a8d8aa9e.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.83e08a39.js","assets/repository.0f2ab255.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/fetch.dc4a901f.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/TabPane.ff421f1e.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.90eebd7d.js"),["assets/TableEditor.90eebd7d.js","assets/BaseLayout.708c2e88.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.78e6dc57.js","assets/PhPencil.vue.83e08a39.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/organization.e8786dac.js","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/Modal.10e3144f.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/index.1bf0cf94.js","assets/index.c1c43905.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/index.7df51953.js","assets/index.780def49.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.b093634d.js","assets/LoadingOutlined.419cf900.js","assets/DeleteOutlined.d4931297.js","assets/DeleteOutlined.f8ba9770.js","assets/index.612586a5.js","assets/index.8f19a559.js","assets/index.5ac9c8ce.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.4bcccd75.js"),["assets/ConnectorEditor.4bcccd75.js","assets/SaveButton.825008e1.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.708c2e88.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.78e6dc57.js","assets/index.cdc65a84.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/string.f31a4de3.js","assets/project.509139c8.js","assets/connector.cede4211.js","assets/organization.e8786dac.js","assets/TabPane.ff421f1e.js","assets/hasIn.0c7158d4.js","assets/index.8f19a559.js","assets/index.5ac9c8ce.js","assets/Form.87fb7934.js","assets/index.612586a5.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.00e07285.js.map
