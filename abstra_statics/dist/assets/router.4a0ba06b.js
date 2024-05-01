var g=Object.defineProperty;var A=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.b82a2cec.js";import{G as b,cQ as E,L as C,z as I,t as R,g as P,h as T,_ as a,i as L}from"./outputWidgets.6e1c5425.js";import{p as O}from"./popupNotifcation.76f4dd63.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="026f296c-8c15-4ad8-9dca-cc9df9568ba0",o._sentryDebugIdIdentifier="sentry-dbid-026f296c-8c15-4ad8-9dca-cc9df9568ba0")}catch{}})();const N=b(y),M=b(v),n=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),n.booted=!0)}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown")}};let h=n;_(h,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),k={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"441a25af2d731d3981b39ea84cee47a67a47dbd8",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?k[o]:V[o])},p={cloudApi:j("cloud-api")};class S{constructor(){_(this,"storage");this.storage=new C(I.string(),"auth:jwt")}async authenticate(t){try{return await u.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await u.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new S;class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class u{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),r=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){O("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const r=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:r?e:JSON.stringify(e)});if(!i.ok)throw await d.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await d.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await d.fromResponse(e)}}class B{async createSession(t){await u.post("usage/sessions",t)}async trackBrowserEvent(t){await u.post("usage/browser",t)}}const m=new B;class U{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;m.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){m.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){m.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){m.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const f=P({history:T("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.5f9e1d3b.js"),["assets/WidgetPreview.5f9e1d3b.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/Steps.3b1b1a45.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.89e32c21.js","assets/WidgetsFrame.7eb9c981.css","assets/WidgetPreview.e27f2bf8.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.45432695.js"),["assets/Login.45432695.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/CircularLoading.f493f8ac.js","assets/CircularLoading.f81b57b4.css","assets/PhArrowClockwise.vue.ce26992a.js","assets/WidgetsFrame.89e32c21.js","assets/WidgetsFrame.7eb9c981.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/member.54aa99a1.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/popupNotifcation.76f4dd63.js","assets/Login.6efc5893.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.00a7dafa.js"),["assets/ReturnApiKey.00a7dafa.js","assets/Navbar.10564cb7.js","assets/logo.084e5d7c.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/PhSignOut.vue.8b6374ae.js","assets/Text.b10c1140.js","assets/Base.0277cf44.js","assets/index.2d522974.js","assets/index.8f97a60b.js","assets/BookOutlined.8202b78f.js","assets/Navbar.4c5e8ebc.css","assets/url.5357e9db.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/apiKey.7cdb1236.js","assets/project.ba2bfaa1.js","assets/organization.87dbdb1d.js","assets/Title.dfd37452.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Paragraph.4ce326b3.js","assets/index.0b7245cc.js","assets/Modal.e50e9e9a.js","assets/popupNotifcation.76f4dd63.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.11dcdec6.js"),["assets/Organizations.11dcdec6.js","assets/Navbar.10564cb7.js","assets/logo.084e5d7c.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/PhSignOut.vue.8b6374ae.js","assets/Text.b10c1140.js","assets/Base.0277cf44.js","assets/index.2d522974.js","assets/index.8f97a60b.js","assets/BookOutlined.8202b78f.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.6e2aa643.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.150390bd.js","assets/ContentLayout.6dd20759.css","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/ant-design.f246aa2b.js","assets/index.1a6a6e78.js","assets/PhArrowSquareOut.vue.b51cdf06.js","assets/PhPencil.vue.09a8c9d5.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/organization.87dbdb1d.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.ca2d013b.js"),["assets/Organization.ca2d013b.js","assets/Navbar.10564cb7.js","assets/logo.084e5d7c.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/PhSignOut.vue.8b6374ae.js","assets/Text.b10c1140.js","assets/Base.0277cf44.js","assets/index.2d522974.js","assets/index.8f97a60b.js","assets/BookOutlined.8202b78f.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.6e2aa643.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.150390bd.js","assets/ContentLayout.6dd20759.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/organization.87dbdb1d.js","assets/Sidebar.cb492433.js","assets/index.0b7245cc.js","assets/index.1442882a.js","assets/Sidebar.4bfd151d.css","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/popupNotifcation.76f4dd63.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.def99aa9.js"),["assets/Projects.def99aa9.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/ant-design.f246aa2b.js","assets/index.1a6a6e78.js","assets/Modal.e50e9e9a.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/organization.87dbdb1d.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.b51cdf06.js","assets/PhPencil.vue.09a8c9d5.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.eb30344c.js"),["assets/Editors.eb30344c.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/member.54aa99a1.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/ant-design.f246aa2b.js","assets/index.1a6a6e78.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.b189c682.js"),["assets/Billing.b189c682.js","assets/asyncComputed.06ede41f.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/organization.87dbdb1d.js","assets/LoadingContainer.74576226.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.dfd37452.js","assets/Base.0277cf44.js","assets/index.c12e1c2f.js","assets/index.e3b3130d.js","assets/Card.8d975aac.js","assets/TabPane.6f71397e.js","assets/hasIn.bf07751b.js","assets/Form.b82a2cec.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.d7f63777.js"),["assets/Project.d7f63777.js","assets/Navbar.10564cb7.js","assets/logo.084e5d7c.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/PhSignOut.vue.8b6374ae.js","assets/Text.b10c1140.js","assets/Base.0277cf44.js","assets/index.2d522974.js","assets/index.8f97a60b.js","assets/BookOutlined.8202b78f.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.6e2aa643.js","assets/BaseLayout.7e127cbf.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/organization.87dbdb1d.js","assets/Sidebar.cb492433.js","assets/index.0b7245cc.js","assets/index.1442882a.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.150390bd.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.b7abb429.js","assets/PhBracketsSquare.vue.b77d248c.js","assets/PhCube.vue.7aab2090.js","assets/PhKey.vue.ad206296.js","assets/PhIdentificationBadge.vue.f6183b8b.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/popupNotifcation.76f4dd63.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.51fc1b17.js"),["assets/Live.51fc1b17.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.06ede41f.js","assets/datetime.4c04cd60.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fc01a358.js","assets/LoadingOutlined.3409bcb9.js","assets/PhArrowCounterClockwise.vue.b7abb429.js","assets/PhInfo.vue.74926ceb.js","assets/index.b152a4f0.js","assets/Link.5b1de2a9.js","assets/popupNotifcation.76f4dd63.js","assets/Live.c5651958.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.e46dfcd7.js"),["assets/Builds.e46dfcd7.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/datetime.4c04cd60.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.b7abb429.js","assets/PhCube.vue.7aab2090.js","assets/PhWebhooksLogo.vue.9951768a.js","assets/Item.c37126c1.js","assets/index.5df58343.js","assets/ExclamationCircleOutlined.0240c9dc.js","assets/CloseCircleOutlined.683f9a4c.js","assets/LoadingOutlined.3409bcb9.js","assets/popupNotifcation.76f4dd63.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.a2541cd0.js"),["assets/Connectors.a2541cd0.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/connector.013a77e2.js","assets/asyncComputed.06ede41f.js","assets/PhPencil.vue.09a8c9d5.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.1253714f.js"),["assets/Tables.1253714f.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.06ede41f.js","assets/string.21869e46.js","assets/PhPencil.vue.09a8c9d5.js","assets/tables.40d51dc6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/index.76daa7f6.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.13873d7e.js"),["assets/Sql.13873d7e.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/toggleHighContrast.5ee3c63e.js","assets/toggleHighContrast.30d77c87.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/index.c12e1c2f.js","assets/index.0b7245cc.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/popupNotifcation.76f4dd63.js","assets/Sql.eb4a925b.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.bc2cceaf.js"),["assets/ApiKeys.bc2cceaf.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/member.54aa99a1.js","assets/apiKey.7cdb1236.js","assets/project.ba2bfaa1.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.af4f14de.js"),["assets/Logs.af4f14de.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/datetime.4c04cd60.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.fc01a358.js","assets/LoadingOutlined.3409bcb9.js","assets/index.a9b06ab4.js","assets/index.1442882a.js","assets/dayjs.219647cd.js","assets/Title.dfd37452.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/CollapsePanel.98f2e9e0.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.d8c8f012.js"),["assets/ProjectSettings.d8c8f012.js","assets/asyncComputed.06ede41f.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.054c75fa.js","assets/Title.dfd37452.js","assets/Base.0277cf44.js","assets/Paragraph.4ce326b3.js","assets/Text.b10c1140.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.61df8d19.js"),["assets/EnvVars.61df8d19.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/PhPencil.vue.09a8c9d5.js","assets/asyncComputed.06ede41f.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.76f4dd63.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.38c0b08d.js"),["assets/Files.38c0b08d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.150390bd.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.76f4dd63.js","assets/ant-design.f246aa2b.js","assets/index.1a6a6e78.js","assets/Modal.e50e9e9a.js","assets/asyncComputed.06ede41f.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.6ea9eddf.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.dfd37452.js","assets/Base.0277cf44.js","assets/Paragraph.4ce326b3.js","assets/Card.8d975aac.js","assets/TabPane.6f71397e.js","assets/hasIn.bf07751b.js","assets/Form.b82a2cec.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.bded4abb.js"),["assets/View.bded4abb.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.06ede41f.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/index.19929efb.js","assets/isNumeric.75337b1e.js","assets/CrudView.88823d06.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3a6e05dd.js","assets/BookOutlined.8202b78f.js","assets/url.5357e9db.js","assets/Paragraph.4ce326b3.js","assets/Base.0277cf44.js","assets/Modal.e50e9e9a.js","assets/index.c12e1c2f.js","assets/Title.dfd37452.js","assets/Text.b10c1140.js","assets/index.1442882a.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.09a8c9d5.js","assets/repository.1507146e.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/fetch.d2d3ed34.js","assets/popupNotifcation.76f4dd63.js","assets/ant-design.f246aa2b.js","assets/index.1a6a6e78.js","assets/TabPane.6f71397e.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.a18f9a11.js"),["assets/TableEditor.a18f9a11.js","assets/BaseLayout.6e2aa643.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.06ede41f.js","assets/PhPencil.vue.09a8c9d5.js","assets/tables.40d51dc6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/index.76daa7f6.js","assets/string.21869e46.js","assets/project.ba2bfaa1.js","assets/organization.87dbdb1d.js","assets/ContentLayout.150390bd.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.76f4dd63.js","assets/ant-design.f246aa2b.js","assets/index.1a6a6e78.js","assets/Modal.e50e9e9a.js","assets/PhCheckCircle.vue.c66a4019.js","assets/index.41d3b63a.js","assets/index.9a8c87ee.js","assets/Form.b82a2cec.js","assets/hasIn.bf07751b.js","assets/index.094eba61.js","assets/index.19929efb.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.1112c219.js","assets/Base.0277cf44.js","assets/LoadingOutlined.3409bcb9.js","assets/index.c12e1c2f.js","assets/DeleteOutlined.6ea9eddf.js","assets/DeleteOutlined.f8ba9770.js","assets/index.e3b3130d.js","assets/index.8f97a60b.js","assets/index.2d522974.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.6a0fefce.js"),["assets/ConnectorEditor.6a0fefce.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a37b6a4e.js","assets/outputWidgets.6e1c5425.js","assets/outputWidgets.dabbfaa6.css","assets/UnsavedChangesHandler.77610fef.js","assets/ExclamationCircleOutlined.0240c9dc.js","assets/Modal.e50e9e9a.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.0277cf44.js","assets/Link.5b1de2a9.js","assets/BaseLayout.6e2aa643.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.06ede41f.js","assets/index.76daa7f6.js","assets/record.c7d63161.js","assets/pubsub.4f3043c8.js","assets/project.ba2bfaa1.js","assets/connector.013a77e2.js","assets/organization.87dbdb1d.js","assets/TabPane.6f71397e.js","assets/hasIn.bf07751b.js","assets/index.8f97a60b.js","assets/index.2d522974.js","assets/Form.b82a2cec.js","assets/index.e3b3130d.js","assets/popupNotifcation.76f4dd63.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(U.trackPageView(),o.meta.hideComms||h.boot(e))});export{N as A,u as C,U as T,M as a,c as b,h as c,f as r};
//# sourceMappingURL=router.4a0ba06b.js.map
