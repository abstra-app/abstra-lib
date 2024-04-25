var b=Object.defineProperty;var A=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.894c92e7.js";import{G as g,cQ as f,L as C,z as T,t as I,g as R,h as P,_ as a,i as L}from"./outputWidgets.c7d11ead.js";import{p as O}from"./popupNotifcation.ba1f83dd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="85113d9f-df15-4e4f-9fd2-248cd63daa6c",o._sentryDebugIdIdentifier="sentry-dbid-85113d9f-df15-4e4f-9fd2-248cd63daa6c")}catch{}})();const N=g(y),W=g(v),n=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),n.booted=!0)}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown")}};let h=n;_(h,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),k={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"b9398679fec9bbd6e2d0532833104c4dcf392696",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?k[o]:V[o])},p={cloudApi:j("cloud-api")};class S{constructor(){_(this,"storage");this.storage=new C(T.string(),"auth:jwt")}async authenticate(t){try{return await u.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await u.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getJWT(){return this.storage.get()}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}}const c=new S;class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class u{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),r=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){O("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const r=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:r?e:JSON.stringify(e)});if(!i.ok)throw await d.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await d.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await d.fromResponse(e)}}class B{async createSession(t){await u.post("usage/sessions",t)}async trackBrowserEvent(t){await u.post("usage/browser",t)}}const m=new B;class U{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;m.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){m.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){m.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){m.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const E=R({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.d509e29e.js"),["assets/WidgetPreview.d509e29e.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/Steps.34349013.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.52136fe3.js","assets/WidgetsFrame.7eb9c981.css","assets/WidgetPreview.e27f2bf8.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.925919d7.js"),["assets/Login.925919d7.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/CircularLoading.41c10026.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.52136fe3.js","assets/WidgetsFrame.7eb9c981.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/member.e78292dd.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/popupNotifcation.ba1f83dd.js","assets/Login.6efc5893.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.b6ee44d0.js"),["assets/ReturnApiKey.b6ee44d0.js","assets/Navbar.e1ad05c7.js","assets/logo.084e5d7c.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/PhSignOut.vue.66a76268.js","assets/Text.eba38ee8.js","assets/Base.984b27ce.js","assets/index.8e44e8fb.js","assets/index.82de5679.js","assets/BookOutlined.e29593a7.js","assets/Navbar.4c5e8ebc.css","assets/url.20f0444a.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/apiKey.c10f69f9.js","assets/project.26c7843a.js","assets/organization.94de8fbd.js","assets/Title.fdf5c01d.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Paragraph.a2d4bb5b.js","assets/index.1f925116.js","assets/Modal.7ab5d69d.js","assets/popupNotifcation.ba1f83dd.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.27a65f2a.js"),["assets/Organizations.27a65f2a.js","assets/Navbar.e1ad05c7.js","assets/logo.084e5d7c.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/PhSignOut.vue.66a76268.js","assets/Text.eba38ee8.js","assets/Base.984b27ce.js","assets/index.8e44e8fb.js","assets/index.82de5679.js","assets/BookOutlined.e29593a7.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.97a58d92.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.081ded6d.js","assets/ContentLayout.6dd20759.css","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/ant-design.50805854.js","assets/index.8b08f555.js","assets/PhArrowSquareOut.vue.4830520f.js","assets/PhPencil.vue.3769c6aa.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/organization.94de8fbd.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.f0e28e73.js"),["assets/Organization.f0e28e73.js","assets/Navbar.e1ad05c7.js","assets/logo.084e5d7c.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/PhSignOut.vue.66a76268.js","assets/Text.eba38ee8.js","assets/Base.984b27ce.js","assets/index.8e44e8fb.js","assets/index.82de5679.js","assets/BookOutlined.e29593a7.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.97a58d92.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.081ded6d.js","assets/ContentLayout.6dd20759.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/organization.94de8fbd.js","assets/Sidebar.cfddb3c1.js","assets/index.1f925116.js","assets/index.e53fe664.js","assets/Sidebar.4bfd151d.css","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/popupNotifcation.ba1f83dd.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.f90f0e14.js"),["assets/Projects.f90f0e14.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/ant-design.50805854.js","assets/index.8b08f555.js","assets/Modal.7ab5d69d.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/organization.94de8fbd.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.4830520f.js","assets/PhPencil.vue.3769c6aa.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.2df04c6f.js"),["assets/Editors.2df04c6f.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/member.e78292dd.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/ant-design.50805854.js","assets/index.8b08f555.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.c228b32c.js"),["assets/Billing.c228b32c.js","assets/asyncComputed.0d9bf0ef.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/organization.94de8fbd.js","assets/LoadingContainer.9fd2b01d.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.fdf5c01d.js","assets/Base.984b27ce.js","assets/index.8343729f.js","assets/index.bcace449.js","assets/Card.f339dcbe.js","assets/TabPane.4688ff0a.js","assets/hasIn.dd565870.js","assets/Form.894c92e7.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.e215eb47.js"),["assets/Project.e215eb47.js","assets/Navbar.e1ad05c7.js","assets/logo.084e5d7c.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/PhSignOut.vue.66a76268.js","assets/Text.eba38ee8.js","assets/Base.984b27ce.js","assets/index.8e44e8fb.js","assets/index.82de5679.js","assets/BookOutlined.e29593a7.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.97a58d92.js","assets/BaseLayout.7e127cbf.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/organization.94de8fbd.js","assets/Sidebar.cfddb3c1.js","assets/index.1f925116.js","assets/index.e53fe664.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.081ded6d.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.a32d2c58.js","assets/PhBracketsSquare.vue.5be8d158.js","assets/PhCube.vue.02ef6938.js","assets/PhKey.vue.500110f0.js","assets/PhIdentificationBadge.vue.a59e1225.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/popupNotifcation.ba1f83dd.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.f75f0726.js"),["assets/Live.f75f0726.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.0d9bf0ef.js","assets/datetime.685f1a28.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3e8e9e2d.js","assets/LoadingOutlined.656209b9.js","assets/PhArrowCounterClockwise.vue.a32d2c58.js","assets/PhInfo.vue.a82a627c.js","assets/index.06c3c790.js","assets/Link.38c2ac16.js","assets/popupNotifcation.ba1f83dd.js","assets/Live.c5651958.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.71bb2caf.js"),["assets/Builds.71bb2caf.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/datetime.685f1a28.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.a32d2c58.js","assets/PhCube.vue.02ef6938.js","assets/PhWebhooksLogo.vue.29eac025.js","assets/Item.4cc2b8d8.js","assets/index.ed42937c.js","assets/ExclamationCircleOutlined.276cec24.js","assets/CloseCircleOutlined.0ff37e0c.js","assets/LoadingOutlined.656209b9.js","assets/popupNotifcation.ba1f83dd.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.7d429533.js"),["assets/Connectors.7d429533.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/connector.63595d80.js","assets/asyncComputed.0d9bf0ef.js","assets/PhPencil.vue.3769c6aa.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.54ec691e.js"),["assets/Tables.54ec691e.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.0d9bf0ef.js","assets/string.67265545.js","assets/PhPencil.vue.3769c6aa.js","assets/tables.ae146801.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/index.e05a5a2e.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.29fed950.js"),["assets/Sql.29fed950.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/toggleHighContrast.2f21eff6.js","assets/toggleHighContrast.30d77c87.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/index.8343729f.js","assets/index.1f925116.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/popupNotifcation.ba1f83dd.js","assets/Sql.eb4a925b.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.f341db5b.js"),["assets/ApiKeys.f341db5b.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/member.e78292dd.js","assets/apiKey.c10f69f9.js","assets/project.26c7843a.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.bedbe9af.js"),["assets/Logs.bedbe9af.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/datetime.685f1a28.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3e8e9e2d.js","assets/LoadingOutlined.656209b9.js","assets/index.c8b526e4.js","assets/index.e53fe664.js","assets/dayjs.881a974e.js","assets/Title.fdf5c01d.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/CollapsePanel.b78c52e8.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.846e1a54.js"),["assets/ProjectSettings.846e1a54.js","assets/asyncComputed.0d9bf0ef.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.328aa712.js","assets/Title.fdf5c01d.js","assets/Base.984b27ce.js","assets/Paragraph.a2d4bb5b.js","assets/Text.eba38ee8.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.803038b0.js"),["assets/EnvVars.803038b0.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/PhPencil.vue.3769c6aa.js","assets/asyncComputed.0d9bf0ef.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.ba1f83dd.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.4d159c28.js"),["assets/Files.4d159c28.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/ContentLayout.081ded6d.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.ba1f83dd.js","assets/ant-design.50805854.js","assets/index.8b08f555.js","assets/Modal.7ab5d69d.js","assets/asyncComputed.0d9bf0ef.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.36b314ff.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.fdf5c01d.js","assets/Base.984b27ce.js","assets/Paragraph.a2d4bb5b.js","assets/Card.f339dcbe.js","assets/TabPane.4688ff0a.js","assets/hasIn.dd565870.js","assets/Form.894c92e7.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.79e6e01c.js"),["assets/View.79e6e01c.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/asyncComputed.0d9bf0ef.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/index.064a4841.js","assets/isNumeric.75337b1e.js","assets/CrudView.a5d66c2b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.47e2aae4.js","assets/BookOutlined.e29593a7.js","assets/url.20f0444a.js","assets/Paragraph.a2d4bb5b.js","assets/Base.984b27ce.js","assets/Modal.7ab5d69d.js","assets/index.8343729f.js","assets/Title.fdf5c01d.js","assets/Text.eba38ee8.js","assets/index.e53fe664.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.3769c6aa.js","assets/repository.e8a8e014.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/fetch.9493b87c.js","assets/popupNotifcation.ba1f83dd.js","assets/ant-design.50805854.js","assets/index.8b08f555.js","assets/TabPane.4688ff0a.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.003a61d3.js"),["assets/TableEditor.003a61d3.js","assets/BaseLayout.97a58d92.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.0d9bf0ef.js","assets/PhPencil.vue.3769c6aa.js","assets/tables.ae146801.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/index.e05a5a2e.js","assets/string.67265545.js","assets/project.26c7843a.js","assets/organization.94de8fbd.js","assets/ContentLayout.081ded6d.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.ba1f83dd.js","assets/ant-design.50805854.js","assets/index.8b08f555.js","assets/Modal.7ab5d69d.js","assets/PhCheckCircle.vue.ea26645b.js","assets/index.8d149e65.js","assets/index.8d5bf7d1.js","assets/Form.894c92e7.js","assets/hasIn.dd565870.js","assets/index.c173db20.js","assets/index.064a4841.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.41c77c9c.js","assets/Base.984b27ce.js","assets/LoadingOutlined.656209b9.js","assets/index.8343729f.js","assets/DeleteOutlined.36b314ff.js","assets/DeleteOutlined.f8ba9770.js","assets/index.bcace449.js","assets/index.82de5679.js","assets/index.8e44e8fb.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.7aa21477.js"),["assets/ConnectorEditor.7aa21477.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9810d90c.js","assets/outputWidgets.c7d11ead.js","assets/outputWidgets.dabbfaa6.css","assets/UnsavedChangesHandler.97f6b632.js","assets/ExclamationCircleOutlined.276cec24.js","assets/Modal.7ab5d69d.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Base.984b27ce.js","assets/Link.38c2ac16.js","assets/BaseLayout.97a58d92.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.0d9bf0ef.js","assets/index.e05a5a2e.js","assets/record.e5cfb835.js","assets/pubsub.a91a3d3f.js","assets/project.26c7843a.js","assets/connector.63595d80.js","assets/organization.94de8fbd.js","assets/TabPane.4688ff0a.js","assets/hasIn.dd565870.js","assets/index.82de5679.js","assets/index.8e44e8fb.js","assets/Form.894c92e7.js","assets/index.bcace449.js","assets/popupNotifcation.ba1f83dd.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});E.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await E.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(U.trackPageView(),o.meta.hideComms||h.boot(e))});export{N as A,u as C,U as T,W as a,c as b,h as c,E as r};
//# sourceMappingURL=router.95851ad5.js.map
