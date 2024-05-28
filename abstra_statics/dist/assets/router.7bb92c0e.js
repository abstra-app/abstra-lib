var b=Object.defineProperty;var A=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.4d35a934.js";import{K as g,cU as E,L as I,z as C,t as P,v as R,g as T,h as L,_ as a,i as O}from"./outputWidgets.7323a17d.js";import{p as D}from"./popupNotifcation.4e57751c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="02792f7e-12e3-45a2-9b73-067a99f91108",o._sentryDebugIdIdentifier="sentry-dbid-02792f7e-12e3-45a2-9b73-067a99f91108")}catch{}})();const W=g(y),K=g(v),k=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"e7ac5d3bda0b28b510742fc2f03e4334ce588245",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(k()?V[o]:j[o])},p={cloudApi:S("cloud-api")};class U{constructor(){_(this,"storage");this.storage=new I(C.string(),"auth:jwt")}async authenticate(t){try{return await m.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await m.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=P(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new U;class h extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new h(e,t.status)}}class m{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...c.headers}});if(i.status===403){D("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:s?e:JSON.stringify(e)});if(!i.ok)throw await h.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await h.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await h.fromResponse(e)}}class B{async getInfo(){return await m.get("authors/info")}}const $=new B,r=class{static dispatch(t,e,n=0){window.Intercom?window.Intercom(t,e):n<10?setTimeout(()=>r.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(){r.booted||$.getInfo().then(t=>{r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.email,email:t.email,user_hash:t.intercomHash}),r.booted=!0}).catch(t=>{console.error(t),R(t)})}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(t){r.dispatch("showNewMessage",t)}static shutdown(){r.dispatch("shutdown")}};let u=r;_(u,"booted",!1);class z{async createSession(t){await m.post("usage/sessions",t)}async trackBrowserEvent(t){await m.post("usage/browser",t)}}const d=new z;class x{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;d.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){d.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){d.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){d.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const f=T({history:L("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.db2c8e7d.js"),["assets/WidgetPreview.db2c8e7d.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/Steps.eb4b23f9.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.26556590.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.3c8643e1.js"),["assets/Login.3c8643e1.js","assets/CircularLoading.606d7e5e.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.26556590.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.badd6007.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/member.493faa08.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/popupNotifcation.4e57751c.js","assets/Login.761cfc4a.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.71b632db.js"),["assets/ReturnApiKey.71b632db.js","assets/Navbar.1f474c04.js","assets/logo.084e5d7c.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/PhSignOut.vue.e19ee1ae.js","assets/Text.a0b69008.js","assets/Base.003f7172.js","assets/index.4920b0cf.js","assets/index.252f049c.js","assets/BookOutlined.22bb6522.js","assets/Navbar.4c5e8ebc.css","assets/url.50c4a8f0.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/apiKey.2effa860.js","assets/project.dfdecc43.js","assets/organization.7a4ab869.js","assets/Title.88a7d0e4.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Paragraph.1e67eefb.js","assets/index.28672a8c.js","assets/Modal.8e6a9189.js","assets/popupNotifcation.4e57751c.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.7db6b2e6.js"),["assets/Organizations.7db6b2e6.js","assets/Navbar.1f474c04.js","assets/logo.084e5d7c.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/PhSignOut.vue.e19ee1ae.js","assets/Text.a0b69008.js","assets/Base.003f7172.js","assets/index.4920b0cf.js","assets/index.252f049c.js","assets/BookOutlined.22bb6522.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.1e49bd2f.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.143d2119.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/ant-design.aba87fd3.js","assets/index.e70ae279.js","assets/PhArrowSquareOut.vue.93f36f8d.js","assets/PhPencil.vue.75024b51.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/organization.7a4ab869.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.52762d2c.js"),["assets/Organization.52762d2c.js","assets/Navbar.1f474c04.js","assets/logo.084e5d7c.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/PhSignOut.vue.e19ee1ae.js","assets/Text.a0b69008.js","assets/Base.003f7172.js","assets/index.4920b0cf.js","assets/index.252f049c.js","assets/BookOutlined.22bb6522.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.1e49bd2f.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.143d2119.js","assets/ContentLayout.6dd20759.css","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/organization.7a4ab869.js","assets/Sidebar.120cae5a.js","assets/index.28672a8c.js","assets/index.211f7220.js","assets/Sidebar.4bfd151d.css","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/popupNotifcation.4e57751c.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.b03f6f13.js"),["assets/Projects.b03f6f13.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/ant-design.aba87fd3.js","assets/index.e70ae279.js","assets/Modal.8e6a9189.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/organization.7a4ab869.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.93f36f8d.js","assets/PhPencil.vue.75024b51.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.785c8a8a.js"),["assets/Editors.785c8a8a.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/member.493faa08.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/ant-design.aba87fd3.js","assets/index.e70ae279.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.d9c32dbd.js"),["assets/Billing.d9c32dbd.js","assets/asyncComputed.a50f21d4.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/organization.7a4ab869.js","assets/LoadingContainer.61887736.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.88a7d0e4.js","assets/Base.003f7172.js","assets/index.42443749.js","assets/index.aff86221.js","assets/Card.9a50e2cc.js","assets/TabPane.b8745f51.js","assets/hasIn.adc00278.js","assets/Form.4d35a934.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.c8cf864b.js"),["assets/Project.c8cf864b.js","assets/Navbar.1f474c04.js","assets/logo.084e5d7c.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/PhSignOut.vue.e19ee1ae.js","assets/Text.a0b69008.js","assets/Base.003f7172.js","assets/index.4920b0cf.js","assets/index.252f049c.js","assets/BookOutlined.22bb6522.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.1e49bd2f.js","assets/BaseLayout.7e127cbf.css","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/organization.7a4ab869.js","assets/Sidebar.120cae5a.js","assets/index.28672a8c.js","assets/index.211f7220.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.143d2119.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.5e4405b3.js","assets/PhIdentificationBadge.vue.a67acca8.js","assets/PhCube.vue.c643b142.js","assets/PhGlobe.vue.2d50bb33.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/popupNotifcation.4e57751c.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.624cdc5f.js"),["assets/Live.624cdc5f.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.a50f21d4.js","assets/datetime.8d4373a1.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5bc5174c.js","assets/LoadingOutlined.a0fd65bc.js","assets/PhArrowCounterClockwise.vue.5e4405b3.js","assets/PhArrowSquareOut.vue.93f36f8d.js","assets/PhCopySimple.vue.d4e9e20f.js","assets/PhInfo.vue.f0b4199e.js","assets/index.497f1ef3.js","assets/Link.21b53365.js","assets/popupNotifcation.4e57751c.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.1df58798.js"),["assets/Builds.1df58798.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/datetime.8d4373a1.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.5e4405b3.js","assets/PhCube.vue.c643b142.js","assets/PhWebhooksLogo.vue.5a5aacec.js","assets/index.b93edcb2.js","assets/ExclamationCircleOutlined.05eebe9c.js","assets/CloseCircleOutlined.cd395edf.js","assets/LoadingOutlined.a0fd65bc.js","assets/popupNotifcation.4e57751c.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.5cd104c9.js"),["assets/Connectors.5cd104c9.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/connector.04b8874d.js","assets/asyncComputed.a50f21d4.js","assets/PhPencil.vue.75024b51.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.4cc4cec9.js"),["assets/Tables.4cc4cec9.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.a50f21d4.js","assets/string.3bdd59f2.js","assets/PhPencil.vue.75024b51.js","assets/tables.380f1031.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/index.c9f11f2b.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.db826cdf.js"),["assets/Sql.db826cdf.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/toggleHighContrast.60d1145a.js","assets/toggleHighContrast.30d77c87.css","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/index.42443749.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/popupNotifcation.4e57751c.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.9d3b819e.js"),["assets/ApiKeys.9d3b819e.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/asyncComputed.a50f21d4.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/member.493faa08.js","assets/apiKey.2effa860.js","assets/project.dfdecc43.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.4e57751c.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.ed338940.js"),["assets/Logs.ed338940.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/datetime.8d4373a1.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.5bc5174c.js","assets/LoadingOutlined.a0fd65bc.js","assets/index.51db7feb.js","assets/index.211f7220.js","assets/dayjs.7d0745ce.js","assets/Title.88a7d0e4.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/CollapsePanel.bec59cc2.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.6ae8723c.js"),["assets/ProjectSettings.6ae8723c.js","assets/asyncComputed.a50f21d4.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.09f71e51.js","assets/Title.88a7d0e4.js","assets/Base.003f7172.js","assets/Paragraph.1e67eefb.js","assets/Text.a0b69008.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.86704662.js"),["assets/EnvVars.86704662.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.a50f21d4.js","assets/PhPencil.vue.75024b51.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/popupNotifcation.4e57751c.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.e68d7939.js"),["assets/Files.e68d7939.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.143d2119.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.4e57751c.js","assets/ant-design.aba87fd3.js","assets/index.e70ae279.js","assets/Modal.8e6a9189.js","assets/asyncComputed.a50f21d4.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.3e9ad32b.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.88a7d0e4.js","assets/Base.003f7172.js","assets/Paragraph.1e67eefb.js","assets/Card.9a50e2cc.js","assets/TabPane.b8745f51.js","assets/hasIn.adc00278.js","assets/Form.4d35a934.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.f33d667c.js"),["assets/View.f33d667c.js","assets/asyncComputed.a50f21d4.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/index.a39c007e.js","assets/isNumeric.75337b1e.js","assets/CrudView.e2192329.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d07c372f.js","assets/BookOutlined.22bb6522.js","assets/url.50c4a8f0.js","assets/Paragraph.1e67eefb.js","assets/Base.003f7172.js","assets/Modal.8e6a9189.js","assets/index.42443749.js","assets/Title.88a7d0e4.js","assets/Text.a0b69008.js","assets/index.211f7220.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.75024b51.js","assets/repository.7cdd9094.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/fetch.787e046c.js","assets/popupNotifcation.4e57751c.js","assets/ant-design.aba87fd3.js","assets/index.e70ae279.js","assets/TabPane.b8745f51.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.b85c2e9b.js"),["assets/TableEditor.b85c2e9b.js","assets/BaseLayout.1e49bd2f.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.a50f21d4.js","assets/PhPencil.vue.75024b51.js","assets/tables.380f1031.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/index.c9f11f2b.js","assets/string.3bdd59f2.js","assets/project.dfdecc43.js","assets/organization.7a4ab869.js","assets/ContentLayout.143d2119.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.4e57751c.js","assets/ant-design.aba87fd3.js","assets/index.e70ae279.js","assets/Modal.8e6a9189.js","assets/PhCheckCircle.vue.33fdfcd3.js","assets/index.55ba4390.js","assets/index.120df1e3.js","assets/Form.4d35a934.js","assets/hasIn.adc00278.js","assets/index.0e2fdb3c.js","assets/index.a39c007e.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.f102f632.js","assets/Base.003f7172.js","assets/LoadingOutlined.a0fd65bc.js","assets/index.42443749.js","assets/DeleteOutlined.3e9ad32b.js","assets/DeleteOutlined.f8ba9770.js","assets/index.aff86221.js","assets/index.252f049c.js","assets/index.4920b0cf.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.dbd06889.js"),["assets/ConnectorEditor.dbd06889.js","assets/SaveButton.b60b7379.js","assets/outputWidgets.7323a17d.js","assets/outputWidgets.b5bd3a75.css","assets/UnsavedChangesHandler.630e80d4.js","assets/ExclamationCircleOutlined.05eebe9c.js","assets/Modal.8e6a9189.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.003f7172.js","assets/Link.21b53365.js","assets/SaveButton.ccfb7431.css","assets/BaseLayout.1e49bd2f.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.a50f21d4.js","assets/index.c9f11f2b.js","assets/record.1f033572.js","assets/pubsub.2c3883f4.js","assets/project.dfdecc43.js","assets/connector.04b8874d.js","assets/organization.7a4ab869.js","assets/TabPane.b8745f51.js","assets/hasIn.adc00278.js","assets/index.252f049c.js","assets/index.4920b0cf.js","assets/Form.4d35a934.js","assets/index.aff86221.js","assets/popupNotifcation.4e57751c.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{O(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(x.trackPageView(),u.boot())});export{W as A,m as C,x as T,K as a,c as b,u as c,f as r};
//# sourceMappingURL=router.7bb92c0e.js.map
