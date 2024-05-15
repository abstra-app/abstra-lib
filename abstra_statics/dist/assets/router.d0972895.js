var g=Object.defineProperty;var A=(o,t,e)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(A(o,typeof t!="symbol"?t+"":t,e),e);import{C as y,R as v}from"./Form.2d3d9370.js";import{G as E,cS as b,L as C,z as I,t as R,g as P,h as T,_ as a,i as L}from"./outputWidgets.0667e48c.js";import{p as O}from"./popupNotifcation.8293a2c2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="0ae9353f-a73f-41bc-8979-60d42eb456e9",o._sentryDebugIdIdentifier="sentry-dbid-0ae9353f-a73f-41bc-8979-60d42eb456e9")}catch{}})();const N=E(y),M=E(v),n=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>n.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),n.booted=!0)}static show(){n.dispatch("show")}static hide(){n.dispatch("hide")}static showNewMessage(t){n.dispatch("showNewMessage",t)}static shutdown(){n.dispatch("shutdown")}};let h=n;_(h,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),k={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"f132efb80ca19031bf748a0c2ab08b1ea28c69f7",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?k[o]:V[o])},p={cloudApi:j("cloud-api")};class S{constructor(){_(this,"storage");this.storage=new C(I.string(),"auth:jwt")}async authenticate(t){try{return await u.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await u.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),this.getAuthor()}saveJWT(t){this.storage.set(t)}getAuthor(){const t=this.storage.get();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){this.storage.remove()}get headers(){const t=this.getAuthor();return t?{"Author-Authorization":`Bearer ${t.jwt}`}:{}}}const c=new S;class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class u{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,w])=>w!=null)),r=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){O("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const r=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:r?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const s=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await m.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}class B{async createSession(t){await u.post("usage/sessions",t)}async trackBrowserEvent(t){await u.post("usage/browser",t)}}const d=new B;class U{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;d.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){d.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){d.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){d.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const f=P({history:T("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.83bc19ae.js"),["assets/WidgetPreview.83bc19ae.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/Steps.9fafa81c.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.a0f14bc3.js","assets/WidgetsFrame.c4d00f60.css","assets/WidgetPreview.b54ee00d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console",hideComms:!0}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.4f7d4def.js"),["assets/Login.4f7d4def.js","assets/CircularLoading.39ebf42f.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/CircularLoading.e156a2b0.css","assets/WidgetsFrame.a0f14bc3.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowClockwise.vue.1092b631.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/member.327e752f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/popupNotifcation.8293a2c2.js","assets/Login.29e5c79b.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.48e0e12d.js"),["assets/ReturnApiKey.48e0e12d.js","assets/Navbar.cf4816b5.js","assets/logo.084e5d7c.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/PhSignOut.vue.9da21ad7.js","assets/Text.49b42065.js","assets/Base.f655980f.js","assets/index.8eed30f8.js","assets/index.9c985c4b.js","assets/BookOutlined.7f6d6fed.js","assets/Navbar.4c5e8ebc.css","assets/url.3b1dfe5a.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/apiKey.1e9b8b3c.js","assets/project.a32d35d8.js","assets/organization.39ebb10b.js","assets/Title.95df57ba.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Paragraph.3090005d.js","assets/index.77150e0c.js","assets/Modal.4cd24584.js","assets/popupNotifcation.8293a2c2.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.363ed172.js"),["assets/Organizations.363ed172.js","assets/Navbar.cf4816b5.js","assets/logo.084e5d7c.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/PhSignOut.vue.9da21ad7.js","assets/Text.49b42065.js","assets/Base.f655980f.js","assets/index.8eed30f8.js","assets/index.9c985c4b.js","assets/BookOutlined.7f6d6fed.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.d3a08a4b.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.21ca12c3.js","assets/ContentLayout.6dd20759.css","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/ant-design.c588d694.js","assets/index.a8e49ddc.js","assets/PhArrowSquareOut.vue.8beb2c1e.js","assets/PhPencil.vue.2178320b.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/organization.39ebb10b.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.f77f67ec.js"),["assets/Organization.f77f67ec.js","assets/Navbar.cf4816b5.js","assets/logo.084e5d7c.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/PhSignOut.vue.9da21ad7.js","assets/Text.49b42065.js","assets/Base.f655980f.js","assets/index.8eed30f8.js","assets/index.9c985c4b.js","assets/BookOutlined.7f6d6fed.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.d3a08a4b.js","assets/BaseLayout.7e127cbf.css","assets/ContentLayout.21ca12c3.js","assets/ContentLayout.6dd20759.css","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/organization.39ebb10b.js","assets/Sidebar.6bacc55e.js","assets/index.77150e0c.js","assets/index.b8f46b91.js","assets/Sidebar.4bfd151d.css","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/popupNotifcation.8293a2c2.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.58c797a9.js"),["assets/Projects.58c797a9.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/ant-design.c588d694.js","assets/index.a8e49ddc.js","assets/Modal.4cd24584.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/organization.39ebb10b.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/PhArrowSquareOut.vue.8beb2c1e.js","assets/PhPencil.vue.2178320b.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Projects - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.b0aedc7f.js"),["assets/Editors.b0aedc7f.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/member.327e752f.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/ant-design.c588d694.js","assets/index.a8e49ddc.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.4153c75c.js"),["assets/Billing.4153c75c.js","assets/asyncComputed.014b59b2.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/organization.39ebb10b.js","assets/LoadingContainer.5eba65e7.js","assets/LoadingContainer.8bd9cc72.css","assets/Title.95df57ba.js","assets/Base.f655980f.js","assets/index.2c556bd4.js","assets/index.0a7a0d17.js","assets/Card.3eaf10d8.js","assets/TabPane.07f16b8d.js","assets/hasIn.bf0e7b1e.js","assets/Form.2d3d9370.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.48cc2660.js"),["assets/Project.48cc2660.js","assets/Navbar.cf4816b5.js","assets/logo.084e5d7c.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/PhSignOut.vue.9da21ad7.js","assets/Text.49b42065.js","assets/Base.f655980f.js","assets/index.8eed30f8.js","assets/index.9c985c4b.js","assets/BookOutlined.7f6d6fed.js","assets/Navbar.4c5e8ebc.css","assets/BaseLayout.d3a08a4b.js","assets/BaseLayout.7e127cbf.css","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/organization.39ebb10b.js","assets/Sidebar.6bacc55e.js","assets/index.77150e0c.js","assets/index.b8f46b91.js","assets/Sidebar.4bfd151d.css","assets/ContentLayout.21ca12c3.js","assets/ContentLayout.6dd20759.css","assets/PhArrowCounterClockwise.vue.e880ec8f.js","assets/PhBracketsSquare.vue.1be78f63.js","assets/PhCube.vue.081e858a.js","assets/PhKey.vue.bdc2ea59.js","assets/PhIdentificationBadge.vue.186ee292.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/popupNotifcation.8293a2c2.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.3217bfe6.js"),["assets/Live.3217bfe6.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.014b59b2.js","assets/datetime.3d3a7305.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1c44747a.js","assets/LoadingOutlined.91d949f1.js","assets/PhArrowCounterClockwise.vue.e880ec8f.js","assets/PhArrowSquareOut.vue.8beb2c1e.js","assets/PhInfo.vue.040c101d.js","assets/index.1d43e6c8.js","assets/Link.29528afc.js","assets/popupNotifcation.8293a2c2.js","assets/Live.11d1c925.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.49eabbda.js"),["assets/Builds.49eabbda.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/datetime.3d3a7305.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/PhArrowCounterClockwise.vue.e880ec8f.js","assets/PhCube.vue.081e858a.js","assets/PhWebhooksLogo.vue.a07b0ee6.js","assets/Item.6c7c60e8.js","assets/index.d0815798.js","assets/ExclamationCircleOutlined.2586e615.js","assets/CloseCircleOutlined.f5830111.js","assets/LoadingOutlined.91d949f1.js","assets/popupNotifcation.8293a2c2.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.61331fef.js"),["assets/Connectors.61331fef.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/connector.b55a81f2.js","assets/asyncComputed.014b59b2.js","assets/PhPencil.vue.2178320b.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.1049997b.js"),["assets/Tables.1049997b.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.014b59b2.js","assets/string.54df12a5.js","assets/PhPencil.vue.2178320b.js","assets/tables.e5bd64e1.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/index.58cf4b1a.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.2881770d.js"),["assets/Sql.2881770d.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/toggleHighContrast.c8b299e7.js","assets/toggleHighContrast.30d77c87.css","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/index.2c556bd4.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/popupNotifcation.8293a2c2.js","assets/Sql.e5bb807a.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.2d361c10.js"),["assets/ApiKeys.2d361c10.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/member.327e752f.js","assets/apiKey.1e9b8b3c.js","assets/project.a32d35d8.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.d683d2ee.js"),["assets/Logs.d683d2ee.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/datetime.3d3a7305.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1c44747a.js","assets/LoadingOutlined.91d949f1.js","assets/index.c1cb6d56.js","assets/index.b8f46b91.js","assets/dayjs.60c4bb15.js","assets/Title.95df57ba.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/CollapsePanel.cc237172.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.f73c6eed.js"),["assets/ProjectSettings.f73c6eed.js","assets/asyncComputed.014b59b2.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5f1ff11f.js","assets/Title.95df57ba.js","assets/Base.f655980f.js","assets/Paragraph.3090005d.js","assets/Text.49b42065.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.672c4c3d.js"),["assets/EnvVars.672c4c3d.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.014b59b2.js","assets/PhPencil.vue.2178320b.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/popupNotifcation.8293a2c2.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.fc5ba7c5.js"),["assets/Files.fc5ba7c5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/ContentLayout.21ca12c3.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.8293a2c2.js","assets/ant-design.c588d694.js","assets/index.a8e49ddc.js","assets/Modal.4cd24584.js","assets/asyncComputed.014b59b2.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.0caa7eb8.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.95df57ba.js","assets/Base.f655980f.js","assets/Paragraph.3090005d.js","assets/Card.3eaf10d8.js","assets/TabPane.07f16b8d.js","assets/hasIn.bf0e7b1e.js","assets/Form.2d3d9370.js","assets/Files.62f0a1ba.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.899f994c.js"),["assets/View.899f994c.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/asyncComputed.014b59b2.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/index.c1d03ae0.js","assets/isNumeric.75337b1e.js","assets/CrudView.ba6416a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ebf06ebd.js","assets/BookOutlined.7f6d6fed.js","assets/url.3b1dfe5a.js","assets/Paragraph.3090005d.js","assets/Base.f655980f.js","assets/Modal.4cd24584.js","assets/index.2c556bd4.js","assets/Title.95df57ba.js","assets/Text.49b42065.js","assets/index.b8f46b91.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.2178320b.js","assets/repository.2bb1d97c.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/fetch.0e525297.js","assets/popupNotifcation.8293a2c2.js","assets/ant-design.c588d694.js","assets/index.a8e49ddc.js","assets/TabPane.07f16b8d.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.359a124f.js"),["assets/TableEditor.359a124f.js","assets/BaseLayout.d3a08a4b.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.014b59b2.js","assets/PhPencil.vue.2178320b.js","assets/tables.e5bd64e1.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/index.58cf4b1a.js","assets/string.54df12a5.js","assets/project.a32d35d8.js","assets/organization.39ebb10b.js","assets/ContentLayout.21ca12c3.js","assets/ContentLayout.6dd20759.css","assets/popupNotifcation.8293a2c2.js","assets/ant-design.c588d694.js","assets/index.a8e49ddc.js","assets/Modal.4cd24584.js","assets/PhCheckCircle.vue.45c74717.js","assets/index.f95c8ca4.js","assets/index.0c220c4d.js","assets/Form.2d3d9370.js","assets/hasIn.bf0e7b1e.js","assets/index.096242b4.js","assets/index.c1d03ae0.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.ed184192.js","assets/Base.f655980f.js","assets/LoadingOutlined.91d949f1.js","assets/index.2c556bd4.js","assets/DeleteOutlined.0caa7eb8.js","assets/DeleteOutlined.f8ba9770.js","assets/index.0a7a0d17.js","assets/index.9c985c4b.js","assets/index.8eed30f8.js","assets/TableEditor.38ba7aa7.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.4fe0b376.js"),["assets/ConnectorEditor.4fe0b376.js","assets/SaveButton.de9e13cf.js","assets/outputWidgets.0667e48c.js","assets/outputWidgets.ff704127.css","assets/UnsavedChangesHandler.2e2d1498.js","assets/ExclamationCircleOutlined.2586e615.js","assets/Modal.4cd24584.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.f655980f.js","assets/Link.29528afc.js","assets/SaveButton.ccfb7431.css","assets/BaseLayout.d3a08a4b.js","assets/BaseLayout.7e127cbf.css","assets/asyncComputed.014b59b2.js","assets/index.58cf4b1a.js","assets/record.4f47485c.js","assets/pubsub.c96de954.js","assets/project.a32d35d8.js","assets/connector.b55a81f2.js","assets/organization.39ebb10b.js","assets/TabPane.07f16b8d.js","assets/hasIn.bf0e7b1e.js","assets/index.9c985c4b.js","assets/index.8eed30f8.js","assets/Form.2d3d9370.js","assets/index.0a7a0d17.js","assets/popupNotifcation.8293a2c2.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(U.trackPageView(),o.meta.hideComms||h.boot(e))});export{N as A,u as C,U as T,M as a,c as b,h as c,f as r};
//# sourceMappingURL=router.d0972895.js.map
