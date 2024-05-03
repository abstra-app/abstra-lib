var g=Object.defineProperty;var A=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.e32bc4e7.js";import{G as f,cQ as w,L as C,z as I,t as R,g as P,h as T,_ as a,i as L}from"./outputWidgets.eae74f87.js";import{p as O}from"./popupNotifcation.e450b445.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="47063ecd-bbc1-4c39-a916-a44f742406b8",o._sentryDebugIdIdentifier="sentry-dbid-47063ecd-bbc1-4c39-a916-a44f742406b8")}catch{}})();const N=f(y),M=f(v),n=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),n.booted=!0)}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown")}};let h=n;_(h,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),k={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+w.toUpper(w.snakeCase(o)),e={VITE_SENTRY_RELEASE:"fcdb5a2b419eaf3cdbc0e9414ee51bbdd3767bac",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?k[o]:V[o])},p={cloudApi:j("cloud-api")};class S{constructor(){_(this,"storage");this.storage=new C(I.string(),"auth:jwt")}async authenticate(t){try{return await u.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await u.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new S;class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class u{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,b])=>b!=null)),r=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){O("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const r=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:r?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await m.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}class B{async createSession(t){await u.post("usage/sessions",t)}async trackBrowserEvent(t){await u.post("usage/browser",t)}}const d=new B;class U{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;d.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){d.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){d.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){d.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const E=P({history:T("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.7d7c7cb4.js"),["assets/WidgetPreview.7d7c7cb4.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/Steps.4218c086.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.d1696dc0.js","assets/WidgetsFrame.7eb9c981.css","assets/WidgetPreview.e27f2bf8.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.6d5b7e54.js"),["assets/Login.6d5b7e54.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/CircularLoading.03ab2af1.js","assets/CircularLoading.f81b57b4.css","assets/PhArrowClockwise.vue.15074544.js","assets/WidgetsFrame.d1696dc0.js","assets/WidgetsFrame.7eb9c981.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/member.7b405a16.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/popupNotifcation.e450b445.js","assets/Login.6efc5893.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.14efc369.js"),["assets/ReturnApiKey.14efc369.js","assets/Navbar.63df1427.js","assets/logo.084e5d7c.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/PhSignOut.vue.2918cea6.js","assets/Text.2973c02c.js","assets/Base.1f77227e.js","assets/index.be6c319c.js","assets/index.60e974bd.js","assets/BookOutlined.a4fe2000.js","assets/Navbar.4c5e8ebc.css","assets/url.1e11a0b5.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/apiKey.edd1d5d2.js","assets/project.d72c22f6.js","assets/organization.faa7ad10.js","assets/Title.f21d4af5.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Paragraph.9553ecfa.js","assets/index.39740910.js","assets/Modal.2ce87839.js","assets/popupNotifcation.e450b445.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.63fab5b2.js"),["assets/Organizations.63fab5b2.js","assets/Navbar.63df1427.js","assets/logo.084e5d7c.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/PhSignOut.vue.2918cea6.js","assets/Text.2973c02c.js","assets/Base.1f77227e.js","assets/index.be6c319c.js","assets/index.60e974bd.js","assets/BookOutlined.a4fe2000.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.a238b7e8.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.ea29d80f.js","assets/ContentLayout.6dd20759.css","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/ant-design.d1e94f1f.js","assets/index.8eaa330e.js","assets/PhArrowSquareOut.vue.12fdd3de.js","assets/PhPencil.vue.6a04782f.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/organization.faa7ad10.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.b5c36729.js"),["assets/Organization.b5c36729.js","assets/Navbar.63df1427.js","assets/logo.084e5d7c.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/PhSignOut.vue.2918cea6.js","assets/Text.2973c02c.js","assets/Base.1f77227e.js","assets/index.be6c319c.js","assets/index.60e974bd.js","assets/BookOutlined.a4fe2000.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.a238b7e8.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.ea29d80f.js","assets/ContentLayout.6dd20759.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/organization.faa7ad10.js","assets/Sidebar.ef39eadc.js","assets/index.39740910.js","assets/index.fe59abb7.js","assets/Sidebar.4bfd151d.css","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/popupNotifcation.e450b445.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.5e90be26.js"),["assets/Projects.5e90be26.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/ant-design.d1e94f1f.js","assets/index.8eaa330e.js","assets/Modal.2ce87839.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/organization.faa7ad10.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.12fdd3de.js","assets/PhPencil.vue.6a04782f.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.5912c0eb.js"),["assets/Editors.5912c0eb.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/member.7b405a16.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/ant-design.d1e94f1f.js","assets/index.8eaa330e.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.11daf52a.js"),["assets/Billing.11daf52a.js","assets/asyncComputed.8ba0ae73.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/organization.faa7ad10.js","assets/LoadingContainer.113d9fdf.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.f21d4af5.js","assets/Base.1f77227e.js","assets/index.35e6ce4f.js","assets/index.0bf57870.js","assets/Card.0de00555.js","assets/TabPane.f9c97252.js","assets/hasIn.9ff6d63d.js","assets/Form.e32bc4e7.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.005ab334.js"),["assets/Project.005ab334.js","assets/Navbar.63df1427.js","assets/logo.084e5d7c.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/PhSignOut.vue.2918cea6.js","assets/Text.2973c02c.js","assets/Base.1f77227e.js","assets/index.be6c319c.js","assets/index.60e974bd.js","assets/BookOutlined.a4fe2000.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.a238b7e8.js","assets/BaseLayout.7e127cbf.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/organization.faa7ad10.js","assets/Sidebar.ef39eadc.js","assets/index.39740910.js","assets/index.fe59abb7.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.ea29d80f.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.0f6c7183.js","assets/PhBracketsSquare.vue.bbcad7a3.js","assets/PhCube.vue.dae8376d.js","assets/PhKey.vue.1859c63e.js","assets/PhIdentificationBadge.vue.13293b36.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/popupNotifcation.e450b445.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.64132089.js"),["assets/Live.64132089.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.8ba0ae73.js","assets/datetime.2e7d9c3b.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e25d60bd.js","assets/LoadingOutlined.06bed919.js","assets/PhArrowCounterClockwise.vue.0f6c7183.js","assets/PhInfo.vue.f0995e6a.js","assets/index.0e01f45b.js","assets/Link.90f95be5.js","assets/popupNotifcation.e450b445.js","assets/Live.c5651958.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.efe032b4.js"),["assets/Builds.efe032b4.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/datetime.2e7d9c3b.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.0f6c7183.js","assets/PhCube.vue.dae8376d.js","assets/PhWebhooksLogo.vue.e7ecd29b.js","assets/Item.aba518ca.js","assets/index.6d06f891.js","assets/ExclamationCircleOutlined.f70e3739.js","assets/CloseCircleOutlined.d9d80ef0.js","assets/LoadingOutlined.06bed919.js","assets/popupNotifcation.e450b445.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.4b4c2e56.js"),["assets/Connectors.4b4c2e56.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/connector.41ff12ec.js","assets/asyncComputed.8ba0ae73.js","assets/PhPencil.vue.6a04782f.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.e450b445.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.822a8f15.js"),["assets/Tables.822a8f15.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.8ba0ae73.js","assets/string.269b5afc.js","assets/PhPencil.vue.6a04782f.js","assets/tables.693f9d00.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/index.6da59d8e.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.050814aa.js"),["assets/Sql.050814aa.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/toggleHighContrast.4beadb41.js","assets/toggleHighContrast.30d77c87.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/index.35e6ce4f.js","assets/index.39740910.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/popupNotifcation.e450b445.js","assets/Sql.eb4a925b.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.350485f7.js"),["assets/ApiKeys.350485f7.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/member.7b405a16.js","assets/apiKey.edd1d5d2.js","assets/project.d72c22f6.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.e450b445.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.c5e1742d.js"),["assets/Logs.c5e1742d.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/datetime.2e7d9c3b.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e25d60bd.js","assets/LoadingOutlined.06bed919.js","assets/index.92b79f63.js","assets/index.fe59abb7.js","assets/dayjs.95e30cef.js","assets/Title.f21d4af5.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/CollapsePanel.20390bea.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.c9b4f11e.js"),["assets/ProjectSettings.c9b4f11e.js","assets/asyncComputed.8ba0ae73.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.830bda02.js","assets/Title.f21d4af5.js","assets/Base.1f77227e.js","assets/Paragraph.9553ecfa.js","assets/Text.2973c02c.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.ec247539.js"),["assets/EnvVars.ec247539.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.8ba0ae73.js","assets/PhPencil.vue.6a04782f.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/popupNotifcation.e450b445.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.b1b377b1.js"),["assets/Files.b1b377b1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.ea29d80f.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.e450b445.js","assets/ant-design.d1e94f1f.js","assets/index.8eaa330e.js","assets/Modal.2ce87839.js","assets/asyncComputed.8ba0ae73.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.4ee07971.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.f21d4af5.js","assets/Base.1f77227e.js","assets/Paragraph.9553ecfa.js","assets/Card.0de00555.js","assets/TabPane.f9c97252.js","assets/hasIn.9ff6d63d.js","assets/Form.e32bc4e7.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.c4727a9a.js"),["assets/View.c4727a9a.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.8ba0ae73.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/index.cfb8da44.js","assets/isNumeric.75337b1e.js","assets/CrudView.0a163667.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.799a7f4d.js","assets/BookOutlined.a4fe2000.js","assets/url.1e11a0b5.js","assets/Paragraph.9553ecfa.js","assets/Base.1f77227e.js","assets/Modal.2ce87839.js","assets/index.35e6ce4f.js","assets/Title.f21d4af5.js","assets/Text.2973c02c.js","assets/index.fe59abb7.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.6a04782f.js","assets/repository.b733e60d.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/fetch.78d1ee51.js","assets/popupNotifcation.e450b445.js","assets/ant-design.d1e94f1f.js","assets/index.8eaa330e.js","assets/TabPane.f9c97252.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.182b07e1.js"),["assets/TableEditor.182b07e1.js","assets/BaseLayout.a238b7e8.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.8ba0ae73.js","assets/PhPencil.vue.6a04782f.js","assets/tables.693f9d00.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/index.6da59d8e.js","assets/string.269b5afc.js","assets/project.d72c22f6.js","assets/organization.faa7ad10.js","assets/ContentLayout.ea29d80f.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.e450b445.js","assets/ant-design.d1e94f1f.js","assets/index.8eaa330e.js","assets/Modal.2ce87839.js","assets/PhCheckCircle.vue.ab2de069.js","assets/index.717ae8f0.js","assets/index.65e477f2.js","assets/Form.e32bc4e7.js","assets/hasIn.9ff6d63d.js","assets/index.740add2e.js","assets/index.cfb8da44.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.f8423147.js","assets/Base.1f77227e.js","assets/LoadingOutlined.06bed919.js","assets/index.35e6ce4f.js","assets/DeleteOutlined.4ee07971.js","assets/DeleteOutlined.f8ba9770.js","assets/index.0bf57870.js","assets/index.60e974bd.js","assets/index.be6c319c.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.6eda87bf.js"),["assets/ConnectorEditor.6eda87bf.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b54a791b.js","assets/outputWidgets.eae74f87.js","assets/outputWidgets.dabbfaa6.css","assets/UnsavedChangesHandler.aa8e5f1e.js","assets/ExclamationCircleOutlined.f70e3739.js","assets/Modal.2ce87839.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.1f77227e.js","assets/Link.90f95be5.js","assets/BaseLayout.a238b7e8.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.8ba0ae73.js","assets/index.6da59d8e.js","assets/record.e5a5b1d5.js","assets/pubsub.55af801c.js","assets/project.d72c22f6.js","assets/connector.41ff12ec.js","assets/organization.faa7ad10.js","assets/TabPane.f9c97252.js","assets/hasIn.9ff6d63d.js","assets/index.60e974bd.js","assets/index.be6c319c.js","assets/Form.e32bc4e7.js","assets/index.0bf57870.js","assets/popupNotifcation.e450b445.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});E.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await E.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(U.trackPageView(),o.meta.hideComms||h.boot(e))});export{N as A,u as C,U as T,M as a,c as b,h as c,E as r};
//# sourceMappingURL=router.eabe51ca.js.map
