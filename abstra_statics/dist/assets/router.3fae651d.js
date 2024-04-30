var b=Object.defineProperty;var A=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.7baf356e.js";import{G as g,cQ as f,L as C,z as I,t as R,g as P,h as T,_ as a,i as L}from"./outputWidgets.65049c44.js";import{p as O}from"./popupNotifcation.789fa8e2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="95eaf5e3-ffa0-4cd5-9961-fc0a1cd85fd6",o._sentryDebugIdIdentifier="sentry-dbid-95eaf5e3-ffa0-4cd5-9961-fc0a1cd85fd6")}catch{}})();const N=g(y),M=g(v),n=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),n.booted=!0)}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown")}};let h=n;_(h,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),k={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"07aa49c64829b5de16b04eea7845dc2318753d14",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?k[o]:V[o])},p={cloudApi:j("cloud-api")};class S{constructor(){_(this,"storage");this.storage=new C(I.string(),"auth:jwt")}async authenticate(t){try{return await u.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await u.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new S;class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class u{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),r=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){O("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const r=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:r?e:JSON.stringify(e)});if(!i.ok)throw await d.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await d.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await d.fromResponse(e)}}class B{async createSession(t){await u.post("usage/sessions",t)}async trackBrowserEvent(t){await u.post("usage/browser",t)}}const m=new B;class U{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;m.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){m.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){m.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){m.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const E=P({history:T("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.a97e69db.js"),["assets/WidgetPreview.a97e69db.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/Steps.7b7b9007.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.1c14694e.js","assets/WidgetsFrame.7eb9c981.css","assets/WidgetPreview.e27f2bf8.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.20fb5857.js"),["assets/Login.20fb5857.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/CircularLoading.1c57b6af.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.1c14694e.js","assets/WidgetsFrame.7eb9c981.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/member.c15cf3e3.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/popupNotifcation.789fa8e2.js","assets/Login.6efc5893.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.d97d8269.js"),["assets/ReturnApiKey.d97d8269.js","assets/Navbar.256fba30.js","assets/logo.084e5d7c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/PhSignOut.vue.d7b64015.js","assets/Text.b5308c04.js","assets/Base.fee2c985.js","assets/index.5ec4a4c0.js","assets/index.0255b6a8.js","assets/BookOutlined.fadc7b3f.js","assets/Navbar.4c5e8ebc.css","assets/url.52ad6bd1.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/apiKey.cf0ef6c6.js","assets/project.0464b1cd.js","assets/organization.9074f062.js","assets/Title.a6310807.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Paragraph.1591b6ff.js","assets/index.3ba76da6.js","assets/Modal.291bf2b7.js","assets/popupNotifcation.789fa8e2.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.4eb8eab0.js"),["assets/Organizations.4eb8eab0.js","assets/Navbar.256fba30.js","assets/logo.084e5d7c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/PhSignOut.vue.d7b64015.js","assets/Text.b5308c04.js","assets/Base.fee2c985.js","assets/index.5ec4a4c0.js","assets/index.0255b6a8.js","assets/BookOutlined.fadc7b3f.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.2a1bf85c.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.cfd5079d.js","assets/ContentLayout.6dd20759.css","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/ant-design.7b197137.js","assets/index.2679a3d8.js","assets/PhArrowSquareOut.vue.de7fc556.js","assets/PhPencil.vue.45b30013.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/organization.9074f062.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.585c0627.js"),["assets/Organization.585c0627.js","assets/Navbar.256fba30.js","assets/logo.084e5d7c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/PhSignOut.vue.d7b64015.js","assets/Text.b5308c04.js","assets/Base.fee2c985.js","assets/index.5ec4a4c0.js","assets/index.0255b6a8.js","assets/BookOutlined.fadc7b3f.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.2a1bf85c.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.cfd5079d.js","assets/ContentLayout.6dd20759.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/organization.9074f062.js","assets/Sidebar.581990b0.js","assets/index.3ba76da6.js","assets/index.eb0ecdab.js","assets/Sidebar.4bfd151d.css","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/popupNotifcation.789fa8e2.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.fde967d9.js"),["assets/Projects.fde967d9.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/ant-design.7b197137.js","assets/index.2679a3d8.js","assets/Modal.291bf2b7.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/organization.9074f062.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.de7fc556.js","assets/PhPencil.vue.45b30013.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.c8af6460.js"),["assets/Editors.c8af6460.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/member.c15cf3e3.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/ant-design.7b197137.js","assets/index.2679a3d8.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.1fcbcdee.js"),["assets/Billing.1fcbcdee.js","assets/asyncComputed.f574921c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/organization.9074f062.js","assets/LoadingContainer.c0bb44dc.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.a6310807.js","assets/Base.fee2c985.js","assets/index.e7a31063.js","assets/index.549d18ee.js","assets/Card.801ebae7.js","assets/TabPane.d0b415cd.js","assets/hasIn.0c24a40c.js","assets/Form.7baf356e.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.d1b6702a.js"),["assets/Project.d1b6702a.js","assets/Navbar.256fba30.js","assets/logo.084e5d7c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/PhSignOut.vue.d7b64015.js","assets/Text.b5308c04.js","assets/Base.fee2c985.js","assets/index.5ec4a4c0.js","assets/index.0255b6a8.js","assets/BookOutlined.fadc7b3f.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.2a1bf85c.js","assets/BaseLayout.7e127cbf.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/organization.9074f062.js","assets/Sidebar.581990b0.js","assets/index.3ba76da6.js","assets/index.eb0ecdab.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.cfd5079d.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.a21fa617.js","assets/PhBracketsSquare.vue.f5e05420.js","assets/PhCube.vue.e70e5e84.js","assets/PhKey.vue.48bb1127.js","assets/PhIdentificationBadge.vue.1b19d005.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/popupNotifcation.789fa8e2.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.24470810.js"),["assets/Live.24470810.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.f574921c.js","assets/datetime.0fca0daa.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.cbaebde3.js","assets/LoadingOutlined.fea2f2e9.js","assets/PhArrowCounterClockwise.vue.a21fa617.js","assets/PhInfo.vue.e4c87ca7.js","assets/index.cee6f42a.js","assets/Link.1fd640a3.js","assets/popupNotifcation.789fa8e2.js","assets/Live.c5651958.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.751fab2f.js"),["assets/Builds.751fab2f.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/datetime.0fca0daa.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.a21fa617.js","assets/PhCube.vue.e70e5e84.js","assets/PhWebhooksLogo.vue.aadcd271.js","assets/Item.03a1c720.js","assets/index.d00a2359.js","assets/ExclamationCircleOutlined.607b6c06.js","assets/CloseCircleOutlined.94804bf4.js","assets/LoadingOutlined.fea2f2e9.js","assets/popupNotifcation.789fa8e2.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.de93ec88.js"),["assets/Connectors.de93ec88.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/connector.fd04c3db.js","assets/asyncComputed.f574921c.js","assets/PhPencil.vue.45b30013.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.d3923aa2.js"),["assets/Tables.d3923aa2.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.f574921c.js","assets/string.6d19ced5.js","assets/PhPencil.vue.45b30013.js","assets/tables.0241ea1a.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/index.e3028f4e.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.2964c361.js"),["assets/Sql.2964c361.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/toggleHighContrast.191fc826.js","assets/toggleHighContrast.30d77c87.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/index.e7a31063.js","assets/index.3ba76da6.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/popupNotifcation.789fa8e2.js","assets/Sql.eb4a925b.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.3dc9134c.js"),["assets/ApiKeys.3dc9134c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/member.c15cf3e3.js","assets/apiKey.cf0ef6c6.js","assets/project.0464b1cd.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.8a95c522.js"),["assets/Logs.8a95c522.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/datetime.0fca0daa.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.cbaebde3.js","assets/LoadingOutlined.fea2f2e9.js","assets/index.b7040938.js","assets/index.eb0ecdab.js","assets/dayjs.263740c7.js","assets/Title.a6310807.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/CollapsePanel.530c7965.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.b2e126dc.js"),["assets/ProjectSettings.b2e126dc.js","assets/asyncComputed.f574921c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.f50fda4e.js","assets/Title.a6310807.js","assets/Base.fee2c985.js","assets/Paragraph.1591b6ff.js","assets/Text.b5308c04.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.7ad0bbdb.js"),["assets/EnvVars.7ad0bbdb.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/PhPencil.vue.45b30013.js","assets/asyncComputed.f574921c.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.789fa8e2.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.03f78bd0.js"),["assets/Files.03f78bd0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.cfd5079d.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.789fa8e2.js","assets/ant-design.7b197137.js","assets/index.2679a3d8.js","assets/Modal.291bf2b7.js","assets/asyncComputed.f574921c.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.cc2e2c72.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.a6310807.js","assets/Base.fee2c985.js","assets/Paragraph.1591b6ff.js","assets/Card.801ebae7.js","assets/TabPane.d0b415cd.js","assets/hasIn.0c24a40c.js","assets/Form.7baf356e.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.ded478d2.js"),["assets/View.ded478d2.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.f574921c.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/index.7bf2a704.js","assets/isNumeric.75337b1e.js","assets/CrudView.8069db6e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e1518af2.js","assets/BookOutlined.fadc7b3f.js","assets/url.52ad6bd1.js","assets/Paragraph.1591b6ff.js","assets/Base.fee2c985.js","assets/Modal.291bf2b7.js","assets/index.e7a31063.js","assets/Title.a6310807.js","assets/Text.b5308c04.js","assets/index.eb0ecdab.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.45b30013.js","assets/repository.128b5949.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/fetch.0487e253.js","assets/popupNotifcation.789fa8e2.js","assets/ant-design.7b197137.js","assets/index.2679a3d8.js","assets/TabPane.d0b415cd.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.f0b6bfb9.js"),["assets/TableEditor.f0b6bfb9.js","assets/BaseLayout.2a1bf85c.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.f574921c.js","assets/PhPencil.vue.45b30013.js","assets/tables.0241ea1a.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/index.e3028f4e.js","assets/string.6d19ced5.js","assets/project.0464b1cd.js","assets/organization.9074f062.js","assets/ContentLayout.cfd5079d.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.789fa8e2.js","assets/ant-design.7b197137.js","assets/index.2679a3d8.js","assets/Modal.291bf2b7.js","assets/PhCheckCircle.vue.a5261a54.js","assets/index.dcc12113.js","assets/index.3920f1ab.js","assets/Form.7baf356e.js","assets/hasIn.0c24a40c.js","assets/index.b5101814.js","assets/index.7bf2a704.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.3bf313d9.js","assets/Base.fee2c985.js","assets/LoadingOutlined.fea2f2e9.js","assets/index.e7a31063.js","assets/DeleteOutlined.cc2e2c72.js","assets/DeleteOutlined.f8ba9770.js","assets/index.549d18ee.js","assets/index.0255b6a8.js","assets/index.5ec4a4c0.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.0bcb9700.js"),["assets/ConnectorEditor.0bcb9700.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9ad36269.js","assets/outputWidgets.65049c44.js","assets/outputWidgets.dabbfaa6.css","assets/UnsavedChangesHandler.e2a3c980.js","assets/ExclamationCircleOutlined.607b6c06.js","assets/Modal.291bf2b7.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.fee2c985.js","assets/Link.1fd640a3.js","assets/BaseLayout.2a1bf85c.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.f574921c.js","assets/index.e3028f4e.js","assets/record.13e1b387.js","assets/pubsub.f43ad40e.js","assets/project.0464b1cd.js","assets/connector.fd04c3db.js","assets/organization.9074f062.js","assets/TabPane.d0b415cd.js","assets/hasIn.0c24a40c.js","assets/index.0255b6a8.js","assets/index.5ec4a4c0.js","assets/Form.7baf356e.js","assets/index.549d18ee.js","assets/popupNotifcation.789fa8e2.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});E.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await E.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(U.trackPageView(),o.meta.hideComms||h.boot(e))});export{N as A,u as C,U as T,M as a,c as b,h as c,E as r};
//# sourceMappingURL=router.3fae651d.js.map
