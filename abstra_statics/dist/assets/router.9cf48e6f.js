var v=Object.defineProperty;var T=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var E=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as C}from"./Form.780f472a.js";import{E as y,cQ as g,S as b,t as R,g as P,h as O,_ as a,i as L}from"./outputWidgets.0fcc4832.js";import{p as k}from"./popupNotifcation.5ab97a7a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="e4c8f3a9-0a50-469a-97f6-8c2b94167561",o._sentryDebugIdIdentifier="sentry-dbid-e4c8f3a9-0a50-469a-97f6-8c2b94167561")}catch{}})();const N=y(I),W=y(C),s=class{static dispatch(t,e,n=0){window.Intercom?window.Intercom(t,e):n<10?setTimeout(()=>s.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){s.booted||(s.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),s.booted=!0)}static show(){s.dispatch("show")}static hide(){s.dispatch("hide")}static showNewMessage(t){s.dispatch("showNewMessage",t)}static shutdown(){s.dispatch("shutdown")}};let u=s;E(u,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+g.toUpper(g.snakeCase(o)),e={VITE_SENTRY_RELEASE:"d844ce0d2850462c468b15cb32eff5b0527444e5",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?V[o]:j[o])},p={cloudApi:S("cloud-api")},d=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await w.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){b.set(d.key,t)}getJWT(){return b.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){b.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=d;E(_,"key","abstracloud:auth:jwt");const c=new _;class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class w{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,f])=>f!=null)),r=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){k("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const r=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:r?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await m.fromResponse(n);const r=await n.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}class U{async createSession(t){await w.post("usage/sessions",t)}async trackBrowserEvent(t){await w.post("usage/browser",t)}}const h=new U;class B{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;h.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){h.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){h.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){h.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const A=P({history:O("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.60edf131.js"),["assets/WidgetPreview.60edf131.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/Steps.bf2405b8.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.6666d2cc.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.bc18fca4.js"),["assets/Login.bc18fca4.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/PhArrowClockwise.vue.7916384e.js","assets/CircularLoading.8f432a73.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.6666d2cc.js","assets/WidgetsFrame.13b291ee.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/member.2cbfe1a5.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/popupNotifcation.5ab97a7a.js","assets/Login.80787f68.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.886bd307.js"),["assets/ReturnApiKey.886bd307.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/apiKey.7a4891ec.js","assets/project.c50ca89a.js","assets/organization.8bb148b4.js","assets/asyncComputed.8a68a021.js","assets/Title.694ed3c8.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/url.58ed6757.js","assets/Paragraph.1f759319.js","assets/index.6ba7e2dd.js","assets/Modal.401e1f75.js","assets/popupNotifcation.5ab97a7a.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.ecfafd31.js"),["assets/Organizations.ecfafd31.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.8a68a021.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/organization.8bb148b4.js","assets/Navbar.a16a1c82.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.6aa9ab20.js","assets/Text.4d1a9b47.js","assets/index.2b7e9891.js","assets/index.7b2544b3.js","assets/BookOutlined.80e5839e.js","assets/Navbar.4c5e8ebc.css","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/BaseLayout.52ea8ea2.js","assets/BaseLayout.d7a8431f.css","assets/ant-design.32a1acf1.js","assets/index.281794dc.js","assets/PhArrowSquareOut.vue.178a87be.js","assets/PhPencil.vue.c8aa3b4f.js","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.a8c6bee7.js"),["assets/Organization.a8c6bee7.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/organization.8bb148b4.js","assets/BaseLayout.52ea8ea2.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.8a68a021.js","assets/Sidebar.2c95aa7b.js","assets/Text.4d1a9b47.js","assets/index.6ba7e2dd.js","assets/index.e87d52ec.js","assets/Sidebar.4bfd151d.css","assets/Navbar.a16a1c82.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.6aa9ab20.js","assets/index.2b7e9891.js","assets/index.7b2544b3.js","assets/BookOutlined.80e5839e.js","assets/Navbar.4c5e8ebc.css","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/popupNotifcation.5ab97a7a.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.9760cb2c.js"),["assets/Projects.9760cb2c.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.8a68a021.js","assets/ant-design.32a1acf1.js","assets/index.281794dc.js","assets/Modal.401e1f75.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/project.c50ca89a.js","assets/organization.8bb148b4.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/PhArrowSquareOut.vue.178a87be.js","assets/PhPencil.vue.c8aa3b4f.js","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.f9384c6f.js"),["assets/OrganizationSettings.f9384c6f.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.9c18fe0f.js"),["assets/Editors.9c18fe0f.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.8a68a021.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/member.2cbfe1a5.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/ant-design.32a1acf1.js","assets/index.281794dc.js","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.ebc18d02.js"),["assets/Billing.ebc18d02.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/organization.8bb148b4.js","assets/asyncComputed.8a68a021.js","assets/Title.694ed3c8.js","assets/Text.4d1a9b47.js","assets/index.61769a5c.js","assets/index.89b9fbcd.js","assets/Card.5108872c.js","assets/index.1304cd8f.js","assets/TabPane.8ac32395.js","assets/hasIn.82f707c7.js","assets/Form.780f472a.js","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.076c114c.js"),["assets/Project.076c114c.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/BaseLayout.52ea8ea2.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.8a68a021.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/project.c50ca89a.js","assets/organization.8bb148b4.js","assets/Navbar.a16a1c82.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.6aa9ab20.js","assets/Text.4d1a9b47.js","assets/index.2b7e9891.js","assets/index.7b2544b3.js","assets/BookOutlined.80e5839e.js","assets/Navbar.4c5e8ebc.css","assets/Sidebar.2c95aa7b.js","assets/index.6ba7e2dd.js","assets/index.e87d52ec.js","assets/Sidebar.4bfd151d.css","assets/PhArrowCounterClockwise.vue.d6e7d65b.js","assets/PhIdentificationBadge.vue.2215a15a.js","assets/PhCube.vue.d68049a1.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/popupNotifcation.5ab97a7a.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.f0eae5cb.js"),["assets/Live.f0eae5cb.js","assets/CrudView.41605d7f.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/asyncComputed.8a68a021.js","assets/build.9feb63ec.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/project.c50ca89a.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.183f26b1.js","assets/LoadingOutlined.7135850d.js","assets/PhArrowCounterClockwise.vue.d6e7d65b.js","assets/PhInfo.vue.d11551fa.js","assets/index.295bf74b.js","assets/Link.fbc81c0a.js","assets/popupNotifcation.5ab97a7a.js","assets/Live.ef5b15f7.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.57412ff7.js"),["assets/Builds.57412ff7.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.8a68a021.js","assets/build.9feb63ec.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/project.c50ca89a.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/PhArrowCounterClockwise.vue.d6e7d65b.js","assets/PhCube.vue.d68049a1.js","assets/PhWebhooksLogo.vue.4cac084e.js","assets/Item.c0fb323b.js","assets/index.9e985c12.js","assets/datetime.a1677f40.js","assets/ExclamationCircleOutlined.0e1d77b0.js","assets/CloseCircleOutlined.f055736c.js","assets/LoadingOutlined.7135850d.js","assets/popupNotifcation.5ab97a7a.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.ce12491c.js"),["assets/Connectors.ce12491c.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/connector.c40005cd.js","assets/asyncComputed.8a68a021.js","assets/PhPencil.vue.c8aa3b4f.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.55b10a60.js"),["assets/Tables.55b10a60.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/PhPencil.vue.c8aa3b4f.js","assets/asyncComputed.8a68a021.js","assets/tables.b512ad62.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/string.246785b4.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.5061e613.js"),["assets/Sql.5061e613.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/project.c50ca89a.js","assets/toggleHighContrast.06e9103a.js","assets/toggleHighContrast.30d77c87.css","assets/index.61769a5c.js","assets/index.6ba7e2dd.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/popupNotifcation.5ab97a7a.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.1be0e92a.js"),["assets/ApiKeys.1be0e92a.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.8a68a021.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/member.2cbfe1a5.js","assets/apiKey.7a4891ec.js","assets/project.c50ca89a.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.0fbc8a68.js"),["assets/Logs.0fbc8a68.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/build.9feb63ec.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.183f26b1.js","assets/LoadingOutlined.7135850d.js","assets/datetime.a1677f40.js","assets/index.28e86b28.js","assets/index.e87d52ec.js","assets/dayjs.29b634a4.js","assets/Title.694ed3c8.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/CollapsePanel.b77e5784.js","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.58defd9d.js"),["assets/ProjectSettings.58defd9d.js","assets/asyncComputed.8a68a021.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/project.c50ca89a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.8481a6ff.js","assets/Title.694ed3c8.js","assets/Text.4d1a9b47.js","assets/Paragraph.1f759319.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.2e0f3fcc.js"),["assets/EnvVars.2e0f3fcc.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/PhPencil.vue.c8aa3b4f.js","assets/asyncComputed.8a68a021.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.5ab97a7a.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.39e6ffaa.js"),["assets/Files.39e6ffaa.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/popupNotifcation.5ab97a7a.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/asyncComputed.8a68a021.js","assets/ant-design.32a1acf1.js","assets/index.281794dc.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.8d02b629.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.694ed3c8.js","assets/Text.4d1a9b47.js","assets/Paragraph.1f759319.js","assets/Card.5108872c.js","assets/index.1304cd8f.js","assets/TabPane.8ac32395.js","assets/hasIn.82f707c7.js","assets/Form.780f472a.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.5ce09400.js"),["assets/View.5ce09400.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.8a68a021.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/index.f7961a06.js","assets/isNumeric.75337b1e.js","assets/CrudView.41605d7f.js","assets/Paragraph.1f759319.js","assets/Text.4d1a9b47.js","assets/Modal.401e1f75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js","assets/BookOutlined.80e5839e.js","assets/url.58ed6757.js","assets/index.61769a5c.js","assets/Title.694ed3c8.js","assets/index.e87d52ec.js","assets/CrudView.e8f8f039.css","assets/PhPencil.vue.c8aa3b4f.js","assets/repository.17b4aaa1.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/fetch.bcda5c1e.js","assets/popupNotifcation.5ab97a7a.js","assets/ant-design.32a1acf1.js","assets/index.281794dc.js","assets/TabPane.8ac32395.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.fffdf285.js"),["assets/TableEditor.fffdf285.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/tables.b512ad62.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/string.246785b4.js","assets/BaseLayout.52ea8ea2.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.8a68a021.js","assets/popupNotifcation.5ab97a7a.js","assets/project.c50ca89a.js","assets/PhCheckCircle.vue.597e2347.js","assets/index.f615a55c.js","assets/index.780da163.js","assets/Form.780f472a.js","assets/hasIn.82f707c7.js","assets/index.6b00c265.js","assets/index.f7961a06.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.f4d4fef4.js","assets/ant-design.32a1acf1.js","assets/index.281794dc.js","assets/Modal.401e1f75.js","assets/Text.4d1a9b47.js","assets/LoadingOutlined.7135850d.js","assets/index.61769a5c.js","assets/DeleteOutlined.8d02b629.js","assets/DeleteOutlined.f8ba9770.js","assets/index.89b9fbcd.js","assets/organization.8bb148b4.js","assets/PhPencil.vue.c8aa3b4f.js","assets/index.7b2544b3.js","assets/index.2b7e9891.js","assets/TableEditor.81588151.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.c6023a71.js"),["assets/ConnectorEditor.c6023a71.js","assets/outputWidgets.0fcc4832.js","assets/outputWidgets.25fe30e4.css","assets/BaseLayout.52ea8ea2.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.8a68a021.js","assets/index.179db35e.js","assets/index.cf4c23b9.js","assets/record.1fa21a6f.js","assets/pubsub.ec35bb48.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.89d614ad.js","assets/UnsavedChangesHandler.82ed01cb.js","assets/ExclamationCircleOutlined.0e1d77b0.js","assets/Modal.401e1f75.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.4d1a9b47.js","assets/Link.fbc81c0a.js","assets/project.c50ca89a.js","assets/connector.c40005cd.js","assets/organization.8bb148b4.js","assets/TabPane.8ac32395.js","assets/hasIn.82f707c7.js","assets/index.7b2544b3.js","assets/index.2b7e9891.js","assets/Form.780f472a.js","assets/index.89b9fbcd.js","assets/popupNotifcation.5ab97a7a.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});A.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await A.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(B.trackPageView(),u.boot(e))});export{N as A,w as C,B as T,W as a,c as b,u as c,A as r};
//# sourceMappingURL=router.9cf48e6f.js.map
