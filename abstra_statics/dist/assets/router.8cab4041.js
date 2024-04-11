var v=Object.defineProperty;var C=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var E=(o,t,e)=>(C(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R as I}from"./Form.86ede2da.js";import{E as y,cO as A,S as b,t as R,g as P,h as O,_ as a,i as L}from"./outputWidgets.6fd5a5d8.js";import{p as k}from"./popupNotifcation.8c55eab8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9079bd20-5064-4af4-8117-fbeaa3f261a7",o._sentryDebugIdIdentifier="sentry-dbid-9079bd20-5064-4af4-8117-fbeaa3f261a7")}catch{}})();const N=y(T),W=y(I),s=class{static dispatch(t,e,n=0){window.Intercom?window.Intercom(t,e):n<10?setTimeout(()=>s.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){s.booted||(s.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),s.booted=!0)}static show(){s.dispatch("show")}static hide(){s.dispatch("hide")}static showNewMessage(t){s.dispatch("showNewMessage",t)}static shutdown(){s.dispatch("shutdown")}};let u=s;E(u,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+A.toUpper(A.snakeCase(o)),e={VITE_SENTRY_RELEASE:"2e974fd157dd9b8d38dc58e00ed0e0c4bac2aa39",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?V[o]:j[o])},p={cloudApi:S("cloud-api")},m=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await w.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){b.set(m.key,t)}getJWT(){return b.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){b.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;E(_,"key","abstracloud:auth:jwt");const c=new _;class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class w{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,f])=>f!=null)),r=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){k("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const r=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:r?e:JSON.stringify(e)});if(!i.ok)throw await d.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await d.fromResponse(n);const r=await n.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await d.fromResponse(e)}}class U{async createSession(t){await w.post("usage/sessions",t)}async trackBrowserEvent(t){await w.post("usage/browser",t)}}const h=new U;class B{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;h.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){h.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){h.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){h.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const g=P({history:O("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.cc165ddc.js"),["assets/WidgetPreview.cc165ddc.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/Steps.3ccfac43.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.9a232f58.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.e27f2bf8.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.e7fd618b.js"),["assets/Login.e7fd618b.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/CircularLoading.6414eaba.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.9a232f58.js","assets/WidgetsFrame.13b291ee.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/member.7d44c5f0.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/popupNotifcation.8c55eab8.js","assets/Login.80787f68.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.cf949c87.js"),["assets/ReturnApiKey.cf949c87.js","assets/Navbar.d6833f61.js","assets/logo.084e5d7c.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.07ac1480.js","assets/index.d855cc9d.js","assets/BookOutlined.2e7b7d83.js","assets/Navbar.4c5e8ebc.css","assets/url.1af9f50e.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/apiKey.28453af5.js","assets/project.2fbd9e25.js","assets/organization.a351ab3b.js","assets/Title.c26fc29f.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Paragraph.0504c9ed.js","assets/index.a9b847fc.js","assets/Modal.c7fda8bb.js","assets/popupNotifcation.8c55eab8.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.b3bde55b.js"),["assets/Organizations.b3bde55b.js","assets/Navbar.d6833f61.js","assets/logo.084e5d7c.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.07ac1480.js","assets/index.d855cc9d.js","assets/BookOutlined.2e7b7d83.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.d4e2f4e3.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.82a0937b.js","assets/ContentLayout.6dd20759.css","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/PhArrowSquareOut.vue.446cfe14.js","assets/PhPencil.vue.4e24a975.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/organization.a351ab3b.js","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.820b2bd1.js"),["assets/Organization.820b2bd1.js","assets/Navbar.d6833f61.js","assets/logo.084e5d7c.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.07ac1480.js","assets/index.d855cc9d.js","assets/BookOutlined.2e7b7d83.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.d4e2f4e3.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.82a0937b.js","assets/ContentLayout.6dd20759.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/organization.a351ab3b.js","assets/Sidebar.a083afc1.js","assets/index.a9b847fc.js","assets/index.f6da9859.js","assets/Sidebar.4bfd151d.css","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/popupNotifcation.8c55eab8.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.b84c3d5f.js"),["assets/Projects.b84c3d5f.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/Modal.c7fda8bb.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/organization.a351ab3b.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.446cfe14.js","assets/PhPencil.vue.4e24a975.js","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.e2a2a0af.js"),["assets/Editors.e2a2a0af.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/member.7d44c5f0.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.52b2d22c.js"),["assets/Billing.52b2d22c.js","assets/asyncComputed.310b0a30.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/organization.a351ab3b.js","assets/LoadingContainer.6045fa6c.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.c26fc29f.js","assets/Text.c853e104.js","assets/index.73f8e03d.js","assets/index.e1325c7f.js","assets/Card.88511f33.js","assets/index.557fb711.js","assets/TabPane.d460dc80.js","assets/hasIn.f935cc6f.js","assets/Form.86ede2da.js","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.87def25a.js"),["assets/Project.87def25a.js","assets/Navbar.d6833f61.js","assets/logo.084e5d7c.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/PhSignOut.vue.95719fb0.js","assets/Text.c853e104.js","assets/index.07ac1480.js","assets/index.d855cc9d.js","assets/BookOutlined.2e7b7d83.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.d4e2f4e3.js","assets/BaseLayout.7e127cbf.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/organization.a351ab3b.js","assets/Sidebar.a083afc1.js","assets/index.a9b847fc.js","assets/index.f6da9859.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.82a0937b.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.bc856b52.js","assets/PhIdentificationBadge.vue.5544b896.js","assets/PhCube.vue.42a0238e.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/popupNotifcation.8c55eab8.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.2436bc06.js"),["assets/Live.2436bc06.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.310b0a30.js","assets/build.f51e4479.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fe682ff4.js","assets/LoadingOutlined.976a3ea7.js","assets/PhArrowCounterClockwise.vue.bc856b52.js","assets/PhInfo.vue.83b508d2.js","assets/index.ee4ffb0b.js","assets/Link.ae8e3018.js","assets/popupNotifcation.8c55eab8.js","assets/Live.ef5b15f7.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.930970b5.js"),["assets/Builds.930970b5.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/build.f51e4479.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.bc856b52.js","assets/PhCube.vue.42a0238e.js","assets/PhWebhooksLogo.vue.03b2906b.js","assets/Item.83b0615a.js","assets/index.1abab12c.js","assets/datetime.46849ee9.js","assets/ExclamationCircleOutlined.0b834acf.js","assets/CloseCircleOutlined.8bf19adf.js","assets/LoadingOutlined.976a3ea7.js","assets/popupNotifcation.8c55eab8.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.413399d4.js"),["assets/Connectors.413399d4.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/connector.9b1be53c.js","assets/asyncComputed.310b0a30.js","assets/PhPencil.vue.4e24a975.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.e9433db7.js"),["assets/Tables.e9433db7.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/PhPencil.vue.4e24a975.js","assets/asyncComputed.310b0a30.js","assets/tables.6f519543.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/string.f5b3f736.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.1162b721.js"),["assets/Sql.1162b721.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/toggleHighContrast.c8663cb9.js","assets/toggleHighContrast.30d77c87.css","assets/index.73f8e03d.js","assets/index.a9b847fc.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/popupNotifcation.8c55eab8.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.5027ca4a.js"),["assets/ApiKeys.5027ca4a.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/member.7d44c5f0.js","assets/apiKey.28453af5.js","assets/project.2fbd9e25.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.c94bbc95.js"),["assets/Logs.c94bbc95.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/build.f51e4479.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fe682ff4.js","assets/LoadingOutlined.976a3ea7.js","assets/datetime.46849ee9.js","assets/index.e953e8c7.js","assets/index.f6da9859.js","assets/dayjs.7cb48c6d.js","assets/Title.c26fc29f.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/CollapsePanel.198ded9a.js","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.7f2a2dbf.js"),["assets/ProjectSettings.7f2a2dbf.js","assets/asyncComputed.310b0a30.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.284413d4.js","assets/Title.c26fc29f.js","assets/Text.c853e104.js","assets/Paragraph.0504c9ed.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.0af23729.js"),["assets/EnvVars.0af23729.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/PhPencil.vue.4e24a975.js","assets/asyncComputed.310b0a30.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.8c55eab8.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.1addecde.js"),["assets/Files.1addecde.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/popupNotifcation.8c55eab8.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/asyncComputed.310b0a30.js","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/Modal.c7fda8bb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.f2a3b6a8.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.c26fc29f.js","assets/Text.c853e104.js","assets/Paragraph.0504c9ed.js","assets/Card.88511f33.js","assets/index.557fb711.js","assets/TabPane.d460dc80.js","assets/hasIn.f935cc6f.js","assets/Form.86ede2da.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.b633a7d0.js"),["assets/View.b633a7d0.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/asyncComputed.310b0a30.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/index.52f3c433.js","assets/isNumeric.75337b1e.js","assets/CrudView.38b74af3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js","assets/BookOutlined.2e7b7d83.js","assets/url.1af9f50e.js","assets/Paragraph.0504c9ed.js","assets/Text.c853e104.js","assets/Modal.c7fda8bb.js","assets/index.73f8e03d.js","assets/Title.c26fc29f.js","assets/index.f6da9859.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.4e24a975.js","assets/repository.11c9d9f5.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/fetch.85e7c98a.js","assets/popupNotifcation.8c55eab8.js","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/TabPane.d460dc80.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.6eb748b5.js"),["assets/TableEditor.6eb748b5.js","assets/BaseLayout.d4e2f4e3.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.310b0a30.js","assets/PhPencil.vue.4e24a975.js","assets/tables.6f519543.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/string.f5b3f736.js","assets/project.2fbd9e25.js","assets/organization.a351ab3b.js","assets/ContentLayout.82a0937b.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.8c55eab8.js","assets/ant-design.14d564d0.js","assets/index.dce244c9.js","assets/Modal.c7fda8bb.js","assets/PhCheckCircle.vue.36088834.js","assets/index.b10e2043.js","assets/index.e303bd1b.js","assets/Form.86ede2da.js","assets/hasIn.f935cc6f.js","assets/index.cc68314c.js","assets/index.52f3c433.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.6fbc9a96.js","assets/Text.c853e104.js","assets/LoadingOutlined.976a3ea7.js","assets/index.73f8e03d.js","assets/DeleteOutlined.f2a3b6a8.js","assets/DeleteOutlined.f8ba9770.js","assets/index.e1325c7f.js","assets/index.d855cc9d.js","assets/index.07ac1480.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.33d633df.js"),["assets/ConnectorEditor.33d633df.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b5ea8551.js","assets/UnsavedChangesHandler.7fcf1c4c.js","assets/outputWidgets.6fd5a5d8.js","assets/outputWidgets.04a49a2c.css","assets/ExclamationCircleOutlined.0b834acf.js","assets/Modal.c7fda8bb.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.c853e104.js","assets/Link.ae8e3018.js","assets/BaseLayout.d4e2f4e3.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.310b0a30.js","assets/index.cef21a4c.js","assets/index.cf4c23b9.js","assets/record.7a291906.js","assets/pubsub.7bd978fa.js","assets/project.2fbd9e25.js","assets/connector.9b1be53c.js","assets/organization.a351ab3b.js","assets/TabPane.d460dc80.js","assets/hasIn.f935cc6f.js","assets/index.d855cc9d.js","assets/index.07ac1480.js","assets/Form.86ede2da.js","assets/index.e1325c7f.js","assets/popupNotifcation.8c55eab8.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(B.trackPageView(),o.meta.hideComms||u.boot(e))});export{N as A,w as C,B as T,W as a,c as b,u as c,g as r};
//# sourceMappingURL=router.8cab4041.js.map
