var g=Object.defineProperty;var A=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.b2ba4809.js";import{K as E,cU as b,L as I,z as C,t as P,v as R,g as T,h as L,_ as a,i as O}from"./outputWidgets.8e22ccc1.js";import{p as D}from"./popupNotifcation.a4eabbc5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="bf47eef5-2b90-40d2-8a44-d16a16964193",o._sentryDebugIdIdentifier="sentry-dbid-bf47eef5-2b90-40d2-8a44-d16a16964193")}catch{}})();const W=E(y),K=E(v),k=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"efb402f1e069f22723b1eb18d1ea7b98b733758a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(k()?V[o]:j[o])},p={cloudApi:S("cloud-api")};class U{constructor(){_(this,"storage");this.storage=new I(C.string(),"auth:jwt")}async authenticate(t){try{return await d.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const r=await d.post("authn/verify",{email:t,token:e});if(!(r&&"jwt"in r))throw new Error("Invalid token");return this.saveJWT(r.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=P(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new U;class h extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new h(e,t.status)}}class d{static async get(t,e){const r=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),s=Object.keys(r).length>0?`?${new URLSearchParams(r).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...c.headers}});if(i.status===403){D("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,r){const s=!!(r!=null&&r["Content-Type"])&&r["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...r},body:s?e:JSON.stringify(e)});if(!i.ok)throw await h.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const r=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!r.ok)throw await h.fromResponse(r);const s=await r.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await h.fromResponse(e)}}class B{async getInfo(){return await d.get("authors/info")}}const $=new B,n=class{static dispatch(t,e,r=0){window.Intercom?window.Intercom(t,e):r<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(){n.booted||$.getInfo().then(t=>{n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.email,email:t.email,user_hash:t.intercomHash,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0}).catch(t=>{console.error(t),R(t)})}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let u=n;_(u,"booted",!1);class z{async createSession(t){await d.post("usage/sessions",t)}async trackBrowserEvent(t){await d.post("usage/browser",t)}}const m=new z;class x{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;m.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){m.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){m.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){m.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const f=T({history:L("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.7d00658a.js"),["assets/WidgetPreview.7d00658a.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/Steps.1a6f7969.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.c1304029.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.136a4e46.js"),["assets/Login.136a4e46.js","assets/CircularLoading.c64d383d.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.c1304029.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.4ee72f72.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/member.578887be.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.b5800978.js"),["assets/ReturnApiKey.b5800978.js","assets/Navbar.f90c123b.js","assets/logo.084e5d7c.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/PhChats.vue.9a7ab8b6.js","assets/PhSignOut.vue.7b64920c.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/index.45c270b4.js","assets/index.9e90d37d.js","assets/BookOutlined.2f1f7bfd.js","assets/Navbar.4c5e8ebc.css","assets/url.eeed4570.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/apiKey.273ef0b0.js","assets/project.5f2d25a5.js","assets/organization.98a8abac.js","assets/Title.175055e6.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Paragraph.e3fa7fcc.js","assets/index.7692f455.js","assets/Modal.88fcbc95.js","assets/popupNotifcation.a4eabbc5.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.858bf106.js"),["assets/Organizations.858bf106.js","assets/Navbar.f90c123b.js","assets/logo.084e5d7c.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/PhChats.vue.9a7ab8b6.js","assets/PhSignOut.vue.7b64920c.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/index.45c270b4.js","assets/index.9e90d37d.js","assets/BookOutlined.2f1f7bfd.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.aaa67e43.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/PhPencil.vue.502a337a.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/organization.98a8abac.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.1ae653e5.js"),["assets/Organization.1ae653e5.js","assets/Navbar.f90c123b.js","assets/logo.084e5d7c.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/PhChats.vue.9a7ab8b6.js","assets/PhSignOut.vue.7b64920c.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/index.45c270b4.js","assets/index.9e90d37d.js","assets/BookOutlined.2f1f7bfd.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.aaa67e43.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/organization.98a8abac.js","assets/Sidebar.85ad8511.js","assets/index.7692f455.js","assets/index.547193f7.js","assets/Sidebar.4bfd151d.css","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.e068ab8b.js"),["assets/Projects.e068ab8b.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/Modal.88fcbc95.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/organization.98a8abac.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.69e88463.js","assets/PhPencil.vue.502a337a.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.5b377b54.js"),["assets/Editors.5b377b54.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/member.578887be.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.841d99f7.js"),["assets/Billing.841d99f7.js","assets/asyncComputed.4e9770a4.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/organization.98a8abac.js","assets/LoadingContainer.eef50bf4.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.175055e6.js","assets/Base.4843c88f.js","assets/index.72c2e68b.js","assets/index.8637e771.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/hasIn.dcbed61a.js","assets/Form.b2ba4809.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.a86da96b.js"),["assets/Project.a86da96b.js","assets/Navbar.f90c123b.js","assets/logo.084e5d7c.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/PhChats.vue.9a7ab8b6.js","assets/PhSignOut.vue.7b64920c.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/index.45c270b4.js","assets/index.9e90d37d.js","assets/BookOutlined.2f1f7bfd.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.aaa67e43.js","assets/BaseLayout.7e127cbf.css","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/organization.98a8abac.js","assets/Sidebar.85ad8511.js","assets/index.7692f455.js","assets/index.547193f7.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.984e59ca.js","assets/PhIdentificationBadge.vue.04b70e67.js","assets/PhCube.vue.6cf59768.js","assets/PhGlobe.vue.a5fd9c9c.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.164e5049.js"),["assets/Live.164e5049.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.4e9770a4.js","assets/datetime.63de0fef.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b8c00203.js","assets/LoadingOutlined.b3727b3e.js","assets/PhArrowCounterClockwise.vue.984e59ca.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/PhChats.vue.9a7ab8b6.js","assets/PhCopySimple.vue.daebdf43.js","assets/PhInfo.vue.c1ae3518.js","assets/index.b47fbfde.js","assets/Link.17b71136.js","assets/popupNotifcation.a4eabbc5.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.f1e907cd.js"),["assets/Builds.f1e907cd.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/datetime.63de0fef.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.984e59ca.js","assets/PhCube.vue.6cf59768.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/index.bad4dd09.js","assets/ExclamationCircleOutlined.7e549140.js","assets/CloseCircleOutlined.6808daf2.js","assets/LoadingOutlined.b3727b3e.js","assets/popupNotifcation.a4eabbc5.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.49dc5c47.js"),["assets/Connectors.49dc5c47.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/connector.e7696b4c.js","assets/asyncComputed.4e9770a4.js","assets/PhPencil.vue.502a337a.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.443c374a.js"),["assets/Tables.443c374a.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.4e9770a4.js","assets/string.b4749b4f.js","assets/PhPencil.vue.502a337a.js","assets/tables.c806ac67.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/index.78ff3a25.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.9d683376.js"),["assets/Sql.9d683376.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/toggleHighContrast.7b4532c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/index.72c2e68b.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.4aa21511.js"),["assets/ApiKeys.4aa21511.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.4e9770a4.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/member.578887be.js","assets/apiKey.273ef0b0.js","assets/project.5f2d25a5.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.bf261f3b.js"),["assets/Logs.bf261f3b.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/datetime.63de0fef.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b8c00203.js","assets/LoadingOutlined.b3727b3e.js","assets/index.f5debc55.js","assets/index.547193f7.js","assets/dayjs.f03820a9.js","assets/Title.175055e6.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/CollapsePanel.0abc646d.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.672782c0.js"),["assets/ProjectSettings.672782c0.js","assets/asyncComputed.4e9770a4.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0f064972.js","assets/Title.175055e6.js","assets/Base.4843c88f.js","assets/Paragraph.e3fa7fcc.js","assets/Text.c4e810d3.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.ccc0f852.js"),["assets/EnvVars.ccc0f852.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.4e9770a4.js","assets/PhPencil.vue.502a337a.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/popupNotifcation.a4eabbc5.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.7348bc7a.js"),["assets/Files.7348bc7a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.a4eabbc5.js","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/Modal.88fcbc95.js","assets/asyncComputed.4e9770a4.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.a33a6fab.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.175055e6.js","assets/Base.4843c88f.js","assets/Paragraph.e3fa7fcc.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/hasIn.dcbed61a.js","assets/Form.b2ba4809.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.4ed7a220.js"),["assets/View.4ed7a220.js","assets/asyncComputed.4e9770a4.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/index.025e8615.js","assets/isNumeric.75337b1e.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.502a337a.js","assets/repository.c772c677.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/fetch.638d0759.js","assets/popupNotifcation.a4eabbc5.js","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/TabPane.f72ad8d4.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.410f51f3.js"),["assets/TableEditor.410f51f3.js","assets/BaseLayout.aaa67e43.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.4e9770a4.js","assets/PhPencil.vue.502a337a.js","assets/tables.c806ac67.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/index.78ff3a25.js","assets/string.b4749b4f.js","assets/project.5f2d25a5.js","assets/organization.98a8abac.js","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.a4eabbc5.js","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/Modal.88fcbc95.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/index.ff68c416.js","assets/index.33fbf904.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/index.976e479f.js","assets/index.025e8615.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.c582d10c.js","assets/Base.4843c88f.js","assets/LoadingOutlined.b3727b3e.js","assets/index.72c2e68b.js","assets/DeleteOutlined.a33a6fab.js","assets/DeleteOutlined.f8ba9770.js","assets/index.8637e771.js","assets/index.9e90d37d.js","assets/index.45c270b4.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.f18a87dc.js"),["assets/ConnectorEditor.f18a87dc.js","assets/SaveButton.49f5d702.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.4843c88f.js","assets/Link.17b71136.js","assets/SaveButton.ccfb7431.css","assets/BaseLayout.aaa67e43.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.4e9770a4.js","assets/index.78ff3a25.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/project.5f2d25a5.js","assets/connector.e7696b4c.js","assets/organization.98a8abac.js","assets/TabPane.f72ad8d4.js","assets/hasIn.dcbed61a.js","assets/index.9e90d37d.js","assets/index.45c270b4.js","assets/Form.b2ba4809.js","assets/index.8637e771.js","assets/popupNotifcation.a4eabbc5.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{O(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(x.trackPageView(),u.boot())});export{W as A,d as C,x as T,K as a,c as b,u as c,f as r};
//# sourceMappingURL=router.6fc18345.js.map
