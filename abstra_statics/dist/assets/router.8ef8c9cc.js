var g=Object.defineProperty;var A=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.6bb424f3.js";import{G as f,cS as b,L as C,z as I,t as R,g as P,h as T,_ as a,i as L}from"./outputWidgets.949e4725.js";import{p as O}from"./popupNotifcation.5602537b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c0b1b3d4-aed4-4e09-98a2-a188b87e90f9",o._sentryDebugIdIdentifier="sentry-dbid-c0b1b3d4-aed4-4e09-98a2-a188b87e90f9")}catch{}})();const N=f(y),M=f(v),n=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),n.booted=!0)}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown")}};let h=n;_(h,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),k={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"c280c91cbacb9e03f01d1522b1d1811640f7ddfb",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?k[o]:V[o])},p={cloudApi:j("cloud-api")};class S{constructor(){_(this,"storage");this.storage=new C(I.string(),"auth:jwt")}async authenticate(t){try{return await u.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await u.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new S;class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class u{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),r=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){O("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const r=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:r?e:JSON.stringify(e)});if(!i.ok)throw await d.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await d.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await d.fromResponse(e)}}class B{async createSession(t){await u.post("usage/sessions",t)}async trackBrowserEvent(t){await u.post("usage/browser",t)}}const m=new B;class U{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;m.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){m.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){m.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){m.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const E=P({history:T("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.fc725111.js"),["assets/WidgetPreview.fc725111.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/Steps.921c5ca3.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.d09511a4.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.1f207351.js"),["assets/Login.1f207351.js","assets/CircularLoading.55f8125f.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.d09511a4.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.ffed1199.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/member.b09fe024.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/popupNotifcation.5602537b.js","assets/Login.29e5c79b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.102ac788.js"),["assets/ReturnApiKey.102ac788.js","assets/Navbar.6715616b.js","assets/logo.084e5d7c.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/PhSignOut.vue.d3fe17c8.js","assets/Text.37c6b693.js","assets/Base.faa618dc.js","assets/index.422f170c.js","assets/index.39aded1e.js","assets/BookOutlined.5338d2f0.js","assets/Navbar.4c5e8ebc.css","assets/url.2b7142f0.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/apiKey.23732d7b.js","assets/project.c00e46a7.js","assets/organization.b9ced3a4.js","assets/Title.ce0892b2.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Paragraph.ac86a1a9.js","assets/index.16e81ed7.js","assets/Modal.780991bb.js","assets/popupNotifcation.5602537b.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.8b10ac6c.js"),["assets/Organizations.8b10ac6c.js","assets/Navbar.6715616b.js","assets/logo.084e5d7c.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/PhSignOut.vue.d3fe17c8.js","assets/Text.37c6b693.js","assets/Base.faa618dc.js","assets/index.422f170c.js","assets/index.39aded1e.js","assets/BookOutlined.5338d2f0.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.67596818.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.d55fb74c.js","assets/ContentLayout.6dd20759.css","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/ant-design.3bb3113b.js","assets/index.f2ea1793.js","assets/PhArrowSquareOut.vue.0f3f3172.js","assets/PhPencil.vue.6573395f.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/organization.b9ced3a4.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.0078590a.js"),["assets/Organization.0078590a.js","assets/Navbar.6715616b.js","assets/logo.084e5d7c.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/PhSignOut.vue.d3fe17c8.js","assets/Text.37c6b693.js","assets/Base.faa618dc.js","assets/index.422f170c.js","assets/index.39aded1e.js","assets/BookOutlined.5338d2f0.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.67596818.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.d55fb74c.js","assets/ContentLayout.6dd20759.css","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/organization.b9ced3a4.js","assets/Sidebar.af37c1dc.js","assets/index.16e81ed7.js","assets/index.1b29a265.js","assets/Sidebar.4bfd151d.css","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/popupNotifcation.5602537b.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.1b762038.js"),["assets/Projects.1b762038.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/ant-design.3bb3113b.js","assets/index.f2ea1793.js","assets/Modal.780991bb.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/organization.b9ced3a4.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.0f3f3172.js","assets/PhPencil.vue.6573395f.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.3d51b721.js"),["assets/Editors.3d51b721.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/member.b09fe024.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/ant-design.3bb3113b.js","assets/index.f2ea1793.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.102906e2.js"),["assets/Billing.102906e2.js","assets/asyncComputed.45b4f5b8.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/organization.b9ced3a4.js","assets/LoadingContainer.f7330ef0.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.ce0892b2.js","assets/Base.faa618dc.js","assets/index.0a361189.js","assets/index.168b143b.js","assets/Card.b5189210.js","assets/TabPane.933186ab.js","assets/hasIn.d080299f.js","assets/Form.6bb424f3.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.6237e611.js"),["assets/Project.6237e611.js","assets/Navbar.6715616b.js","assets/logo.084e5d7c.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/PhSignOut.vue.d3fe17c8.js","assets/Text.37c6b693.js","assets/Base.faa618dc.js","assets/index.422f170c.js","assets/index.39aded1e.js","assets/BookOutlined.5338d2f0.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.67596818.js","assets/BaseLayout.7e127cbf.css","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/organization.b9ced3a4.js","assets/Sidebar.af37c1dc.js","assets/index.16e81ed7.js","assets/index.1b29a265.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.d55fb74c.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.fccfa7ee.js","assets/PhBracketsSquare.vue.327c3efc.js","assets/PhCube.vue.3b7076f5.js","assets/PhKey.vue.8d53555c.js","assets/PhIdentificationBadge.vue.fe7da99e.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/popupNotifcation.5602537b.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.6256f4a1.js"),["assets/Live.6256f4a1.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.45b4f5b8.js","assets/datetime.2844724f.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.868bfe3a.js","assets/LoadingOutlined.2754be70.js","assets/PhArrowCounterClockwise.vue.fccfa7ee.js","assets/PhArrowSquareOut.vue.0f3f3172.js","assets/PhInfo.vue.7755c972.js","assets/index.32447f98.js","assets/Link.56ad214a.js","assets/popupNotifcation.5602537b.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.81bd8cb0.js"),["assets/Builds.81bd8cb0.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/datetime.2844724f.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.fccfa7ee.js","assets/PhCube.vue.3b7076f5.js","assets/PhWebhooksLogo.vue.35381cef.js","assets/Item.d52d840b.js","assets/index.da0978de.js","assets/ExclamationCircleOutlined.57d3ed68.js","assets/CloseCircleOutlined.eab46a47.js","assets/LoadingOutlined.2754be70.js","assets/popupNotifcation.5602537b.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.e914cf3d.js"),["assets/Connectors.e914cf3d.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/connector.57d88a02.js","assets/asyncComputed.45b4f5b8.js","assets/PhPencil.vue.6573395f.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.5602537b.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.1a157582.js"),["assets/Tables.1a157582.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.45b4f5b8.js","assets/string.2d775be5.js","assets/PhPencil.vue.6573395f.js","assets/tables.3a7d8738.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/index.ac23ca31.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.1a0739d2.js"),["assets/Sql.1a0739d2.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/toggleHighContrast.c6c2eee4.js","assets/toggleHighContrast.30d77c87.css","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/index.0a361189.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/popupNotifcation.5602537b.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.040c2546.js"),["assets/ApiKeys.040c2546.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/member.b09fe024.js","assets/apiKey.23732d7b.js","assets/project.c00e46a7.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.5602537b.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.0fc33450.js"),["assets/Logs.0fc33450.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/datetime.2844724f.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.868bfe3a.js","assets/LoadingOutlined.2754be70.js","assets/index.b2377844.js","assets/index.1b29a265.js","assets/dayjs.09b30fbc.js","assets/Title.ce0892b2.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/CollapsePanel.b32bbb41.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.1febd811.js"),["assets/ProjectSettings.1febd811.js","assets/asyncComputed.45b4f5b8.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a79d3fed.js","assets/Title.ce0892b2.js","assets/Base.faa618dc.js","assets/Paragraph.ac86a1a9.js","assets/Text.37c6b693.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.c8e49899.js"),["assets/EnvVars.c8e49899.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.45b4f5b8.js","assets/PhPencil.vue.6573395f.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/popupNotifcation.5602537b.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.b40b6f31.js"),["assets/Files.b40b6f31.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/ContentLayout.d55fb74c.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.5602537b.js","assets/ant-design.3bb3113b.js","assets/index.f2ea1793.js","assets/Modal.780991bb.js","assets/asyncComputed.45b4f5b8.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.a3c85e15.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.ce0892b2.js","assets/Base.faa618dc.js","assets/Paragraph.ac86a1a9.js","assets/Card.b5189210.js","assets/TabPane.933186ab.js","assets/hasIn.d080299f.js","assets/Form.6bb424f3.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.68d74385.js"),["assets/View.68d74385.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/asyncComputed.45b4f5b8.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/index.696fd940.js","assets/isNumeric.75337b1e.js","assets/CrudView.39d2dc79.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf94909d.js","assets/BookOutlined.5338d2f0.js","assets/url.2b7142f0.js","assets/Paragraph.ac86a1a9.js","assets/Base.faa618dc.js","assets/Modal.780991bb.js","assets/index.0a361189.js","assets/Title.ce0892b2.js","assets/Text.37c6b693.js","assets/index.1b29a265.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.6573395f.js","assets/repository.d52dfa09.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/fetch.bd971f54.js","assets/popupNotifcation.5602537b.js","assets/ant-design.3bb3113b.js","assets/index.f2ea1793.js","assets/TabPane.933186ab.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.38fbf1af.js"),["assets/TableEditor.38fbf1af.js","assets/BaseLayout.67596818.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.45b4f5b8.js","assets/PhPencil.vue.6573395f.js","assets/tables.3a7d8738.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/index.ac23ca31.js","assets/string.2d775be5.js","assets/project.c00e46a7.js","assets/organization.b9ced3a4.js","assets/ContentLayout.d55fb74c.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.5602537b.js","assets/ant-design.3bb3113b.js","assets/index.f2ea1793.js","assets/Modal.780991bb.js","assets/PhCheckCircle.vue.af167f99.js","assets/index.f1ad0d93.js","assets/index.68450467.js","assets/Form.6bb424f3.js","assets/hasIn.d080299f.js","assets/index.fa775929.js","assets/index.696fd940.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.e6c02201.js","assets/Base.faa618dc.js","assets/LoadingOutlined.2754be70.js","assets/index.0a361189.js","assets/DeleteOutlined.a3c85e15.js","assets/DeleteOutlined.f8ba9770.js","assets/index.168b143b.js","assets/index.39aded1e.js","assets/index.422f170c.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.7d30e94d.js"),["assets/ConnectorEditor.7d30e94d.js","assets/SaveButton.25094627.js","assets/outputWidgets.949e4725.js","assets/outputWidgets.58529dbd.css","assets/UnsavedChangesHandler.136188e8.js","assets/ExclamationCircleOutlined.57d3ed68.js","assets/Modal.780991bb.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.faa618dc.js","assets/Link.56ad214a.js","assets/SaveButton.ccfb7431.css","assets/BaseLayout.67596818.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.45b4f5b8.js","assets/index.ac23ca31.js","assets/record.2f5084e5.js","assets/pubsub.16360cb7.js","assets/project.c00e46a7.js","assets/connector.57d88a02.js","assets/organization.b9ced3a4.js","assets/TabPane.933186ab.js","assets/hasIn.d080299f.js","assets/index.39aded1e.js","assets/index.422f170c.js","assets/Form.6bb424f3.js","assets/index.168b143b.js","assets/popupNotifcation.5602537b.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});E.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await E.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(U.trackPageView(),o.meta.hideComms||h.boot(e))});export{N as A,u as C,U as T,M as a,c as b,h as c,E as r};
//# sourceMappingURL=router.8ef8c9cc.js.map
