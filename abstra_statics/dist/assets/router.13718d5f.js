var _=Object.defineProperty;var d=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var l=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{C as h,R as u}from"./Form.693a0885.js";import{K as p,v as b,g as E,h as A,_ as o,i as g}from"./outputWidgets.548e4895.js";import{C as c,a as w}from"./gateway.982790d2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3db77185-335a-49a0-977c-e2c8ab5548f4",t._sentryDebugIdIdentifier="sentry-dbid-3db77185-335a-49a0-977c-e2c8ab5548f4")}catch{}})();const T=p(h),D=p(u);class v{async getInfo(){return await c.get("authors/info")}}const f=new v,r=class{static dispatch(e,a,i=0){window.Intercom?window.Intercom(e,a):i<10?setTimeout(()=>r.dispatch(e,a),100):console.error("Intercom not loaded")}static boot(){r.booted||f.getInfo().then(e=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e.email,email:e.email,user_hash:e.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0}).catch(e=>{console.error(e),b(e)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(e){r.dispatch("showNewMessage",e)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let s=r;l(s,"booted",!1);class I{async createSession(e){await c.post("usage/sessions",e)}async trackBrowserEvent(e){await c.post("usage/browser",e)}}const n=new I;class P{static trackSession(){const e=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;n.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:a}).catch(console.error)}static trackPageView(){n.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(e,a){n.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:a,organizationId:e,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(e){n.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:e,href:location.href}}).catch(console.error)}}const m=E({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>o(()=>import("./WidgetPreview.84c8fbf9.js"),["assets/WidgetPreview.84c8fbf9.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/Steps.2ed28ab7.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.94de2056.js","assets/WidgetsFrame.0615c03b.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>o(()=>import("./Login.d4f8d028.js"),["assets/Login.d4f8d028.js","assets/CircularLoading.ccbe1878.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.94de2056.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowClockwise.vue.407dea19.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/member.f9c75873.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>o(()=>import("./ReturnApiKey.75a656be.js"),["assets/ReturnApiKey.75a656be.js","assets/Navbar.e68c3bcc.js","assets/logo.084e5d7c.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/PhChats.vue.8fb8bbab.js","assets/PhSignOut.vue.e5386e34.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.315ed61c.js","assets/index.c1751752.js","assets/BookOutlined.cec3ecab.js","assets/Navbar.4c5e8ebc.css","assets/url.2707059f.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/apiKey.153b0d40.js","assets/project.99ee3cb7.js","assets/organization.a3c3d02f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/index.1302af2c.js","assets/Modal.be37308b.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>o(()=>import("./Organizations.54c3c5e7.js"),["assets/Organizations.54c3c5e7.js","assets/Navbar.e68c3bcc.js","assets/logo.084e5d7c.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/PhChats.vue.8fb8bbab.js","assets/PhSignOut.vue.e5386e34.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.315ed61c.js","assets/index.c1751752.js","assets/BookOutlined.cec3ecab.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.82fa969e.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.514ac9e7.js","assets/ContentLayout.6dd20759.css","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/ant-design.69147d61.js","assets/index.4394d7cf.js","assets/PhArrowSquareOut.vue.313e3c95.js","assets/PhPencil.vue.2fc842fd.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/organization.a3c3d02f.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>o(()=>import("./Organization.7843ac20.js"),["assets/Organization.7843ac20.js","assets/Navbar.e68c3bcc.js","assets/logo.084e5d7c.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/PhChats.vue.8fb8bbab.js","assets/PhSignOut.vue.e5386e34.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.315ed61c.js","assets/index.c1751752.js","assets/BookOutlined.cec3ecab.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.82fa969e.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.514ac9e7.js","assets/ContentLayout.6dd20759.css","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/organization.a3c3d02f.js","assets/Sidebar.d0563a7d.js","assets/index.1302af2c.js","assets/index.0626041a.js","assets/Sidebar.4bfd151d.css","assets/Form.693a0885.js","assets/hasIn.962c450d.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>o(()=>import("./Projects.9d168395.js"),["assets/Projects.9d168395.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/ant-design.69147d61.js","assets/index.4394d7cf.js","assets/Modal.be37308b.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/organization.a3c3d02f.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.313e3c95.js","assets/PhPencil.vue.2fc842fd.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>o(()=>import("./Editors.48ebedce.js"),["assets/Editors.48ebedce.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/member.f9c75873.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/ant-design.69147d61.js","assets/index.4394d7cf.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>o(()=>import("./Billing.714da1d0.js"),["assets/Billing.714da1d0.js","assets/asyncComputed.ce85945e.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/organization.a3c3d02f.js","assets/LoadingContainer.71ddea91.js","assets/LoadingContainer.8bd9cc72.css","assets/index.b50aff34.js","assets/Card.bd56f82e.js","assets/TabPane.e79f372e.js","assets/hasIn.962c450d.js","assets/Form.693a0885.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>o(()=>import("./Project.1efd0563.js"),["assets/Project.1efd0563.js","assets/Navbar.e68c3bcc.js","assets/logo.084e5d7c.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/PhChats.vue.8fb8bbab.js","assets/PhSignOut.vue.e5386e34.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.315ed61c.js","assets/index.c1751752.js","assets/BookOutlined.cec3ecab.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.82fa969e.js","assets/BaseLayout.7e127cbf.css","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/organization.a3c3d02f.js","assets/Sidebar.d0563a7d.js","assets/index.1302af2c.js","assets/index.0626041a.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.514ac9e7.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.c35ee6e7.js","assets/PhIdentificationBadge.vue.93706687.js","assets/PhCube.vue.512352a7.js","assets/PhGlobe.vue.e1df6aea.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>o(()=>import("./Live.eececb30.js"),["assets/Live.eececb30.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.ce85945e.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/datetime.ace8fd47.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.091e2887.js","assets/LoadingOutlined.dfcb17cf.js","assets/PhArrowCounterClockwise.vue.c35ee6e7.js","assets/PhArrowSquareOut.vue.313e3c95.js","assets/PhChats.vue.8fb8bbab.js","assets/PhCopySimple.vue.b2a67251.js","assets/index.27f8b167.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>o(()=>import("./Builds.9f6d3c45.js"),["assets/Builds.9f6d3c45.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/datetime.ace8fd47.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.c35ee6e7.js","assets/PhCube.vue.512352a7.js","assets/PhWebhooksLogo.vue.6ed44496.js","assets/index.5c9744ac.js","assets/ExclamationCircleOutlined.8627121f.js","assets/CloseCircleOutlined.d06595dc.js","assets/LoadingOutlined.dfcb17cf.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>o(()=>import("./Connectors.ba98fb67.js"),["assets/Connectors.ba98fb67.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/string.0f30bdde.js","assets/connector.338238da.js","assets/asyncComputed.ce85945e.js","assets/PhPencil.vue.2fc842fd.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>o(()=>import("./Tables.2dbd6ad9.js"),["assets/Tables.2dbd6ad9.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.ce85945e.js","assets/string.0f30bdde.js","assets/PhPencil.vue.2fc842fd.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>o(()=>import("./Sql.15dd43dc.js"),["assets/Sql.15dd43dc.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/toggleHighContrast.81e8a104.js","assets/toggleHighContrast.30d77c87.css","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>o(()=>import("./ApiKeys.71baaf3f.js"),["assets/ApiKeys.71baaf3f.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/asyncComputed.ce85945e.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/member.f9c75873.js","assets/apiKey.153b0d40.js","assets/project.99ee3cb7.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>o(()=>import("./Logs.d0293aab.js"),["assets/Logs.d0293aab.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/datetime.ace8fd47.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.091e2887.js","assets/LoadingOutlined.dfcb17cf.js","assets/dayjs.73ceb6e3.js","assets/index.2956a6ff.js","assets/index.0626041a.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/CollapsePanel.64a7e53e.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>o(()=>import("./ProjectSettings.21e14a31.js"),["assets/ProjectSettings.21e14a31.js","assets/asyncComputed.ce85945e.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.51f3212b.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>o(()=>import("./EnvVars.66c40f4c.js"),["assets/EnvVars.66c40f4c.js","assets/CrudView.0d706791.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/url.2707059f.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.ce85945e.js","assets/PhPencil.vue.2fc842fd.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>o(()=>import("./Files.40ba321e.js"),["assets/Files.40ba321e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.514ac9e7.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.be01548c.js","assets/ant-design.69147d61.js","assets/index.4394d7cf.js","assets/Modal.be37308b.js","assets/asyncComputed.ce85945e.js","assets/gateway.982790d2.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.c36b9e8a.js","assets/DeleteOutlined.f8ba9770.js","assets/Card.bd56f82e.js","assets/TabPane.e79f372e.js","assets/hasIn.962c450d.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>o(()=>import("./View.8b801a8d.js"),["assets/View.8b801a8d.js","assets/asyncComputed.ce85945e.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/DocsButton.vue_vue_type_script_setup_true_lang.b96a408a.js","assets/BookOutlined.cec3ecab.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/index.afd3eb42.js","assets/isNumeric.75337b1e.js","assets/CrudView.0d706791.js","assets/url.2707059f.js","assets/Modal.be37308b.js","assets/index.0626041a.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.2fc842fd.js","assets/repository.a9aa48db.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/fetch.280dd7ea.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/ant-design.69147d61.js","assets/index.4394d7cf.js","assets/TabPane.e79f372e.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>o(()=>import("./TableEditor.0ce2a504.js"),["assets/TableEditor.0ce2a504.js","assets/BaseLayout.82fa969e.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.ce85945e.js","assets/PhPencil.vue.2fc842fd.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/organization.a3c3d02f.js","assets/ContentLayout.514ac9e7.js","assets/ContentLayout.6dd20759.css","assets/ant-design.69147d61.js","assets/index.4394d7cf.js","assets/Modal.be37308b.js","assets/PhCheckCircle.vue.69714c6c.js","assets/index.d1968fb4.js","assets/index.1a635ac1.js","assets/Form.693a0885.js","assets/hasIn.962c450d.js","assets/index.d21c0d69.js","assets/index.afd3eb42.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.6f1bf41a.js","assets/LoadingOutlined.dfcb17cf.js","assets/DeleteOutlined.c36b9e8a.js","assets/DeleteOutlined.f8ba9770.js","assets/index.b50aff34.js","assets/index.c1751752.js","assets/index.315ed61c.js","assets/TableEditor.0897f3ce.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>o(()=>import("./ConnectorEditor.55e11d32.js"),["assets/ConnectorEditor.55e11d32.js","assets/SaveButton.28769370.js","assets/outputWidgets.548e4895.js","assets/outputWidgets.6a665c1f.css","assets/UnsavedChangesHandler.d6becd1f.js","assets/ExclamationCircleOutlined.8627121f.js","assets/Modal.be37308b.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/BaseLayout.82fa969e.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.ce85945e.js","assets/index.bb0ece72.js","assets/record.bc7d87cb.js","assets/pubsub.d87f8be2.js","assets/gateway.982790d2.js","assets/popupNotifcation.be01548c.js","assets/string.0f30bdde.js","assets/project.99ee3cb7.js","assets/connector.338238da.js","assets/organization.a3c3d02f.js","assets/TabPane.e79f372e.js","assets/hasIn.962c450d.js","assets/index.c1751752.js","assets/index.315ed61c.js","assets/Form.693a0885.js","assets/index.b50aff34.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});m.beforeEach(async(t,e)=>{g(t,e);const a=w.getAuthor();if(!t.meta.allowUnauthenticated&&!a){await m.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}a&&(P.trackPageView(),s.boot())});export{T as A,s as C,P as T,D as a,m as r};
//# sourceMappingURL=router.13718d5f.js.map
