var T=Object.defineProperty;var R=(o,t,e)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var u=(o,t,e)=>(R(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as v}from"./Form.461dd844.js";import{E as A,cR as E,S as b,t as O,g as P,h as C,_ as a,i as L}from"./outputWidgets.9e9188d0.js";import{p as D}from"./popupNotifcation.2e400c13.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="917550f4-cb22-4ff3-a782-38fb6bdef665",o._sentryDebugIdIdentifier="sentry-dbid-917550f4-cb22-4ff3-a782-38fb6bdef665")}catch{}})();const B=A(I),N=A(v);class y{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const r=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>r.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),r.booted=!0)}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(t){r.dispatch("showNewMessage",t)}};let h=r;u(h,"booted",!1);const V=()=>window.location.host.includes(".abstra.io"),j={"cloud-api":"/api/cloud-api"},k={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"6c2b1500549d489b29669c717c52c97730b27392",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(V()?j[o]:k[o])},l={cloudApi:S("cloud-api")};class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class w{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,f])=>f!=null)),n=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${l.cloudApi}/console/${t}${n}`,{headers:{...c.headers}});if(i.status===403){D("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const p=await i.text();return p?JSON.parse(p):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const n=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:n?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const p=await i.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await m.fromResponse(s);const n=await s.text();return n?JSON.parse(n):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}const d=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await w.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),y.trackSession(t),this.getAuthor()}saveJWT(t){b.set(d.key,t)}getJWT(){return b.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=O(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){b.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=d;u(_,"key","abstracloud:auth:jwt");const c=new _,g=P({history:C("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.61250493.js"),["assets/WidgetPreview.61250493.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/Steps.c4fba42c.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.b6933178.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.140773f1.js"),["assets/Login.140773f1.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/PhArrowClockwise.vue.d59047de.js","assets/CircularLoading.90b68b93.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.b6933178.js","assets/WidgetsFrame.13b291ee.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/member.5f95179b.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/popupNotifcation.2e400c13.js","assets/Login.733ebc2d.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.23dd8da2.js"),["assets/ReturnApiKey.23dd8da2.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/apiKey.b5b8be50.js","assets/project.8ed5570d.js","assets/organization.629b1f6c.js","assets/asyncComputed.7f89aa45.js","assets/Title.4176959f.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/url.9a56d162.js","assets/Paragraph.29b1e445.js","assets/index.209c88c8.js","assets/Modal.6d1e8b3e.js","assets/popupNotifcation.2e400c13.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.a5e0cd12.js"),["assets/Organizations.a5e0cd12.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/organization.629b1f6c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.db5e6788.js","assets/logo.084e5d7c.js","assets/Text.7619a5e2.js","assets/index.5fc8fe37.js","assets/index.b83d2e77.js","assets/Navbar.f4a98ea3.css","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/BaseLayout.40d37b33.js","assets/BaseLayout.2a9791da.css","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/PhArrowSquareOut.vue.4bbbc84d.js","assets/PhPencil.vue.6796688d.js","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.c218f05e.js"),["assets/Organization.c218f05e.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/organization.629b1f6c.js","assets/BaseLayout.40d37b33.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7f89aa45.js","assets/Sidebar.17f34123.js","assets/Text.7619a5e2.js","assets/index.209c88c8.js","assets/index.6cedf673.js","assets/Sidebar.e01ed604.css","assets/Navbar.vue_vue_type_script_setup_true_lang.db5e6788.js","assets/logo.084e5d7c.js","assets/index.5fc8fe37.js","assets/index.b83d2e77.js","assets/Navbar.f4a98ea3.css","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/popupNotifcation.2e400c13.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.5c43709d.js"),["assets/Projects.5c43709d.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/Modal.6d1e8b3e.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/project.8ed5570d.js","assets/organization.629b1f6c.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/PhArrowSquareOut.vue.4bbbc84d.js","assets/PhPencil.vue.6796688d.js","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.d0ab366c.js"),["assets/OrganizationSettings.d0ab366c.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.5efdbf23.js"),["assets/Editors.5efdbf23.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/member.5f95179b.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.9ab071a0.js"),["assets/Billing.9ab071a0.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/organization.629b1f6c.js","assets/asyncComputed.7f89aa45.js","assets/Title.4176959f.js","assets/Text.7619a5e2.js","assets/index.1a8c32de.js","assets/index.9e060570.js","assets/Card.265072b8.js","assets/TabPane.af28745f.js","assets/hasIn.67b34c75.js","assets/Form.461dd844.js","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.f4d2ff2e.js"),["assets/Project.f4d2ff2e.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/BaseLayout.40d37b33.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7f89aa45.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/project.8ed5570d.js","assets/organization.629b1f6c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.db5e6788.js","assets/logo.084e5d7c.js","assets/Text.7619a5e2.js","assets/index.5fc8fe37.js","assets/index.b83d2e77.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.17f34123.js","assets/index.209c88c8.js","assets/index.6cedf673.js","assets/Sidebar.e01ed604.css","assets/PhArrowCounterClockwise.vue.993757fe.js","assets/PhBracketsSquare.vue.f792277c.js","assets/PhCube.vue.bb3c929c.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/popupNotifcation.2e400c13.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.25e81f7f.js"),["assets/Live.25e81f7f.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/build.dd20b3f4.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/project.8ed5570d.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/PhArrowCounterClockwise.vue.993757fe.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.99d470a6.js","assets/CheckCircleFilled.ad12b602.js","assets/LoadingOutlined.f61199b1.js","assets/index.209c88c8.js","assets/Link.6163d718.js","assets/popupNotifcation.2e400c13.js","assets/Live.d2bd54e0.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.36b77302.js"),["assets/Builds.36b77302.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/build.dd20b3f4.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/project.8ed5570d.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/PhArrowCounterClockwise.vue.993757fe.js","assets/PhCube.vue.bb3c929c.js","assets/PhWebhooksLogo.vue.0fac68f3.js","assets/index.a2578e86.js","assets/datetime.ca6a2a46.js","assets/CloseCircleOutlined.1ae71f30.js","assets/LoadingOutlined.f61199b1.js","assets/popupNotifcation.2e400c13.js","assets/Builds.df5e5b81.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.9ead56a0.js"),["assets/Connectors.9ead56a0.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/connector.bfad07f2.js","assets/asyncComputed.7f89aa45.js","assets/PhPencil.vue.6796688d.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.8a5c89ae.js"),["assets/Tables.8a5c89ae.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/PhPencil.vue.6796688d.js","assets/asyncComputed.7f89aa45.js","assets/tables.174eeb43.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/string.39827548.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.0001447f.js"),["assets/Sql.0001447f.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/project.8ed5570d.js","assets/toggleHighContrast.1bcff4fc.js","assets/toggleHighContrast.30d77c87.css","assets/index.1a8c32de.js","assets/index.209c88c8.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/popupNotifcation.2e400c13.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.25113874.js"),["assets/ApiKeys.25113874.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/member.5f95179b.js","assets/apiKey.b5b8be50.js","assets/project.8ed5570d.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.2e400c13.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.c3ec40fe.js"),["assets/Logs.c3ec40fe.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/build.dd20b3f4.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.99d470a6.js","assets/CheckCircleFilled.ad12b602.js","assets/LoadingOutlined.f61199b1.js","assets/datetime.ca6a2a46.js","assets/dayjs.ce8057c2.js","assets/index.9b668466.js","assets/index.6cedf673.js","assets/Title.4176959f.js","assets/Text.7619a5e2.js","assets/index.209c88c8.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/CollapsePanel.779d2249.js","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.2efaf0b0.js"),["assets/LegacyLogs.2efaf0b0.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/Modal.6d1e8b3e.js","assets/StarFilled.fad29e50.js","assets/Timeline.b9f146da.js","assets/CheckCircleFilled.ad12b602.js","assets/build.dd20b3f4.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/asyncComputed.7f89aa45.js","assets/Title.4176959f.js","assets/Text.7619a5e2.js","assets/index.209c88c8.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/dayjs.ce8057c2.js","assets/index.9b668466.js","assets/index.6cedf673.js","assets/popupNotifcation.2e400c13.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.5abbf2d5.js"),["assets/ProjectSettings.5abbf2d5.js","assets/asyncComputed.7f89aa45.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/project.8ed5570d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6c421efa.js","assets/Title.4176959f.js","assets/Text.7619a5e2.js","assets/Paragraph.29b1e445.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.c4142ed7.js"),["assets/EnvVars.c4142ed7.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/PhPencil.vue.6796688d.js","assets/asyncComputed.7f89aa45.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.2e400c13.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.a4c09cf1.js"),["assets/Files.a4c09cf1.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/popupNotifcation.2e400c13.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/asyncComputed.7f89aa45.js","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.90d49137.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.4176959f.js","assets/Text.7619a5e2.js","assets/Paragraph.29b1e445.js","assets/Card.265072b8.js","assets/TabPane.af28745f.js","assets/hasIn.67b34c75.js","assets/Form.461dd844.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.157d45b1.js"),["assets/View.157d45b1.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.7f89aa45.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/index.0004a01c.js","assets/isNumeric.75337b1e.js","assets/CrudView.5c0f1306.js","assets/Paragraph.29b1e445.js","assets/Text.7619a5e2.js","assets/Modal.6d1e8b3e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c911ee2b.js","assets/url.9a56d162.js","assets/index.1a8c32de.js","assets/Title.4176959f.js","assets/index.6cedf673.js","assets/CrudView.f7a00a3f.css","assets/PhPencil.vue.6796688d.js","assets/popupNotifcation.2e400c13.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/TabPane.af28745f.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.9d3efd1c.js"),["assets/TableEditor.9d3efd1c.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/tables.174eeb43.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/string.39827548.js","assets/BaseLayout.40d37b33.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7f89aa45.js","assets/popupNotifcation.2e400c13.js","assets/project.8ed5570d.js","assets/index.0c08a01b.js","assets/index.5598f3d7.js","assets/Form.461dd844.js","assets/hasIn.67b34c75.js","assets/index.7a100257.js","assets/index.0004a01c.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.c159d827.js","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/Modal.6d1e8b3e.js","assets/Text.7619a5e2.js","assets/LoadingOutlined.f61199b1.js","assets/index.1a8c32de.js","assets/DeleteOutlined.90d49137.js","assets/DeleteOutlined.f8ba9770.js","assets/index.9e060570.js","assets/organization.629b1f6c.js","assets/PhPencil.vue.6796688d.js","assets/index.b83d2e77.js","assets/index.5fc8fe37.js","assets/TableEditor.81588151.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.d2d8d5d7.js"),["assets/ConnectorEditor.d2d8d5d7.js","assets/outputWidgets.9e9188d0.js","assets/outputWidgets.e406c4a0.css","assets/BaseLayout.40d37b33.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7f89aa45.js","assets/index.fd2429fc.js","assets/index.cf4c23b9.js","assets/record.5a1f0869.js","assets/pubsub.40a94856.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.51d4a5ba.js","assets/ant-design.412d51fb.js","assets/index.1fc91add.js","assets/Modal.6d1e8b3e.js","assets/Text.7619a5e2.js","assets/Link.6163d718.js","assets/SaveButton.13ece1cb.css","assets/project.8ed5570d.js","assets/connector.bfad07f2.js","assets/organization.629b1f6c.js","assets/TabPane.af28745f.js","assets/hasIn.67b34c75.js","assets/index.b83d2e77.js","assets/index.5fc8fe37.js","assets/Form.461dd844.js","assets/index.9e060570.js","assets/popupNotifcation.2e400c13.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(y.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&h.boot(e)});export{B as A,w as C,h as I,N as a,c as b,g as r};
//# sourceMappingURL=router.09dbb026.js.map
