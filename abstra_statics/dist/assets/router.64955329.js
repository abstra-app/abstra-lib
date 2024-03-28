var T=Object.defineProperty;var R=(o,t,e)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var u=(o,t,e)=>(R(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as v}from"./Form.519ea702.js";import{E as A,cR as f,S as b,t as O,g as P,h as C,_ as a,i as L}from"./outputWidgets.2f54a46f.js";import{p as D}from"./popupNotifcation.994caea3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="140d11c2-38d1-41ec-bed6-537ffe658006",o._sentryDebugIdIdentifier="sentry-dbid-140d11c2-38d1-41ec-bed6-537ffe658006")}catch{}})();const B=A(I),N=A(v);class y{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const r=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>r.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),r.booted=!0)}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(t){r.dispatch("showNewMessage",t)}};let h=r;u(h,"booted",!1);const V=()=>window.location.host.includes(".abstra.io"),j={"cloud-api":"/api/cloud-api"},k={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"5462daee8eddf0708ac12058632b98922ae0a2f6",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(V()?j[o]:k[o])},l={cloudApi:S("cloud-api")};class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class w{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,E])=>E!=null)),n=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${l.cloudApi}/console/${t}${n}`,{headers:{...c.headers}});if(i.status===403){D("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const p=await i.text();return p?JSON.parse(p):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const n=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:n?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const p=await i.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await m.fromResponse(s);const n=await s.text();return n?JSON.parse(n):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}const d=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await w.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),y.trackSession(t),this.getAuthor()}saveJWT(t){b.set(d.key,t)}getJWT(){return b.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=O(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){b.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=d;u(_,"key","abstracloud:auth:jwt");const c=new _,g=P({history:C("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.7b1fbeae.js"),["assets/WidgetPreview.7b1fbeae.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/Steps.c380e664.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.2678a873.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.d6cbb4cc.js"),["assets/Login.d6cbb4cc.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/PhArrowClockwise.vue.6562e692.js","assets/CircularLoading.3c01c951.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.2678a873.js","assets/WidgetsFrame.13b291ee.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/member.8ed15302.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/popupNotifcation.994caea3.js","assets/Login.733ebc2d.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.6037b478.js"),["assets/ReturnApiKey.6037b478.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/apiKey.ddaeac87.js","assets/project.f34fbb31.js","assets/organization.a22c38c5.js","assets/asyncComputed.2e5475ea.js","assets/Title.91cb4483.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/url.3c35ecc3.js","assets/Paragraph.b5c2bff3.js","assets/index.b9cedb30.js","assets/Modal.be0f5629.js","assets/popupNotifcation.994caea3.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.eeaa68e8.js"),["assets/Organizations.eeaa68e8.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/organization.a22c38c5.js","assets/Navbar.vue_vue_type_script_setup_true_lang.80b7d0de.js","assets/logo.084e5d7c.js","assets/Text.4c3787cc.js","assets/index.125f94db.js","assets/index.f4bd5205.js","assets/Navbar.f4a98ea3.css","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/BaseLayout.60fb9582.js","assets/BaseLayout.2a9791da.css","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/PhArrowSquareOut.vue.1d5c5f4d.js","assets/PhPencil.vue.6e62f157.js","assets/popupNotifcation.994caea3.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.136496c1.js"),["assets/Organization.136496c1.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/organization.a22c38c5.js","assets/BaseLayout.60fb9582.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.2e5475ea.js","assets/Sidebar.c13730bb.js","assets/Text.4c3787cc.js","assets/index.b9cedb30.js","assets/index.e20064d2.js","assets/Sidebar.e01ed604.css","assets/Navbar.vue_vue_type_script_setup_true_lang.80b7d0de.js","assets/logo.084e5d7c.js","assets/index.125f94db.js","assets/index.f4bd5205.js","assets/Navbar.f4a98ea3.css","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/popupNotifcation.994caea3.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.28837fef.js"),["assets/Projects.28837fef.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/Modal.be0f5629.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/project.f34fbb31.js","assets/organization.a22c38c5.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/PhArrowSquareOut.vue.1d5c5f4d.js","assets/PhPencil.vue.6e62f157.js","assets/popupNotifcation.994caea3.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.b0bfc74d.js"),["assets/OrganizationSettings.b0bfc74d.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.28a82ef2.js"),["assets/Editors.28a82ef2.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/member.8ed15302.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/popupNotifcation.994caea3.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.75ac1717.js"),["assets/Billing.75ac1717.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/organization.a22c38c5.js","assets/asyncComputed.2e5475ea.js","assets/Title.91cb4483.js","assets/Text.4c3787cc.js","assets/index.00ed081b.js","assets/index.f1e93883.js","assets/Card.038b5370.js","assets/TabPane.5c3c6939.js","assets/hasIn.86cc139a.js","assets/Form.519ea702.js","assets/popupNotifcation.994caea3.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.8f2ad3cf.js"),["assets/Project.8f2ad3cf.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/BaseLayout.60fb9582.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.2e5475ea.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/project.f34fbb31.js","assets/organization.a22c38c5.js","assets/Navbar.vue_vue_type_script_setup_true_lang.80b7d0de.js","assets/logo.084e5d7c.js","assets/Text.4c3787cc.js","assets/index.125f94db.js","assets/index.f4bd5205.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.c13730bb.js","assets/index.b9cedb30.js","assets/index.e20064d2.js","assets/Sidebar.e01ed604.css","assets/PhArrowCounterClockwise.vue.2962442b.js","assets/PhBracketsSquare.vue.c4bada6f.js","assets/PhCube.vue.5c2ef366.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/popupNotifcation.994caea3.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.4566c8af.js"),["assets/Live.4566c8af.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/build.02d8f5ad.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/project.f34fbb31.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/PhArrowCounterClockwise.vue.2962442b.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3a34362e.js","assets/CheckCircleFilled.470d746c.js","assets/LoadingOutlined.43e2d7bc.js","assets/index.b9cedb30.js","assets/Link.ae8b2f11.js","assets/popupNotifcation.994caea3.js","assets/Live.d2bd54e0.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.483ab7ef.js"),["assets/Builds.483ab7ef.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/build.02d8f5ad.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/project.f34fbb31.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/PhArrowCounterClockwise.vue.2962442b.js","assets/PhCube.vue.5c2ef366.js","assets/PhWebhooksLogo.vue.d55e70ea.js","assets/index.0ceb7ca4.js","assets/datetime.d745993f.js","assets/CloseCircleOutlined.3968f7aa.js","assets/LoadingOutlined.43e2d7bc.js","assets/popupNotifcation.994caea3.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.8cbf8005.js"),["assets/Connectors.8cbf8005.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/connector.d9a2b2fe.js","assets/asyncComputed.2e5475ea.js","assets/PhPencil.vue.6e62f157.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.994caea3.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.beae148e.js"),["assets/Tables.beae148e.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/PhPencil.vue.6e62f157.js","assets/asyncComputed.2e5475ea.js","assets/tables.ed22f8eb.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/string.08064fed.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.994caea3.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.1861290d.js"),["assets/Sql.1861290d.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/project.f34fbb31.js","assets/toggleHighContrast.79a35053.js","assets/toggleHighContrast.30d77c87.css","assets/index.00ed081b.js","assets/index.b9cedb30.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/popupNotifcation.994caea3.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.74bad46c.js"),["assets/ApiKeys.74bad46c.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/member.8ed15302.js","assets/apiKey.ddaeac87.js","assets/project.f34fbb31.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.994caea3.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.de619057.js"),["assets/Logs.de619057.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/build.02d8f5ad.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3a34362e.js","assets/CheckCircleFilled.470d746c.js","assets/LoadingOutlined.43e2d7bc.js","assets/datetime.d745993f.js","assets/dayjs.074d65f4.js","assets/index.208d3d07.js","assets/index.e20064d2.js","assets/Title.91cb4483.js","assets/Text.4c3787cc.js","assets/index.b9cedb30.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/CollapsePanel.ec72943f.js","assets/popupNotifcation.994caea3.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.2f45b30f.js"),["assets/LegacyLogs.2f45b30f.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/Modal.be0f5629.js","assets/StarFilled.fad29e50.js","assets/Timeline.120b2696.js","assets/CheckCircleFilled.470d746c.js","assets/build.02d8f5ad.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/asyncComputed.2e5475ea.js","assets/Title.91cb4483.js","assets/Text.4c3787cc.js","assets/index.b9cedb30.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/dayjs.074d65f4.js","assets/index.208d3d07.js","assets/index.e20064d2.js","assets/popupNotifcation.994caea3.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.bb526156.js"),["assets/ProjectSettings.bb526156.js","assets/asyncComputed.2e5475ea.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/project.f34fbb31.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1a3644c0.js","assets/Title.91cb4483.js","assets/Text.4c3787cc.js","assets/Paragraph.b5c2bff3.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/popupNotifcation.994caea3.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.a3e116c3.js"),["assets/EnvVars.a3e116c3.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/PhPencil.vue.6e62f157.js","assets/asyncComputed.2e5475ea.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/popupNotifcation.994caea3.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.eb135e70.js"),["assets/Files.eb135e70.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/popupNotifcation.994caea3.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/asyncComputed.2e5475ea.js","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.1d0dbcb3.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.91cb4483.js","assets/Text.4c3787cc.js","assets/Paragraph.b5c2bff3.js","assets/Card.038b5370.js","assets/TabPane.5c3c6939.js","assets/hasIn.86cc139a.js","assets/Form.519ea702.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.75eb865c.js"),["assets/View.75eb865c.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.2e5475ea.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/index.239c8299.js","assets/isNumeric.75337b1e.js","assets/CrudView.b1924cfa.js","assets/Paragraph.b5c2bff3.js","assets/Text.4c3787cc.js","assets/Modal.be0f5629.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js","assets/url.3c35ecc3.js","assets/index.00ed081b.js","assets/Title.91cb4483.js","assets/index.e20064d2.js","assets/CrudView.f7a00a3f.css","assets/PhPencil.vue.6e62f157.js","assets/popupNotifcation.994caea3.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/TabPane.5c3c6939.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.0c7f3fb2.js"),["assets/TableEditor.0c7f3fb2.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/tables.ed22f8eb.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/string.08064fed.js","assets/BaseLayout.60fb9582.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.2e5475ea.js","assets/popupNotifcation.994caea3.js","assets/project.f34fbb31.js","assets/index.c9be9e84.js","assets/index.46e02363.js","assets/Form.519ea702.js","assets/hasIn.86cc139a.js","assets/index.11eb6ce8.js","assets/index.239c8299.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.54ffd088.js","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/Modal.be0f5629.js","assets/Text.4c3787cc.js","assets/LoadingOutlined.43e2d7bc.js","assets/index.00ed081b.js","assets/DeleteOutlined.1d0dbcb3.js","assets/DeleteOutlined.f8ba9770.js","assets/index.f1e93883.js","assets/organization.a22c38c5.js","assets/PhPencil.vue.6e62f157.js","assets/index.f4bd5205.js","assets/index.125f94db.js","assets/TableEditor.81588151.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.c47ab54d.js"),["assets/ConnectorEditor.c47ab54d.js","assets/outputWidgets.2f54a46f.js","assets/outputWidgets.e406c4a0.css","assets/BaseLayout.60fb9582.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.2e5475ea.js","assets/index.c3b89197.js","assets/index.cf4c23b9.js","assets/record.f8174d1b.js","assets/pubsub.28305d1c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68d895e5.js","assets/ant-design.a75744a8.js","assets/index.1e52521b.js","assets/Modal.be0f5629.js","assets/Text.4c3787cc.js","assets/Link.ae8b2f11.js","assets/SaveButton.13ece1cb.css","assets/project.f34fbb31.js","assets/connector.d9a2b2fe.js","assets/organization.a22c38c5.js","assets/TabPane.5c3c6939.js","assets/hasIn.86cc139a.js","assets/index.f4bd5205.js","assets/index.125f94db.js","assets/Form.519ea702.js","assets/index.f1e93883.js","assets/popupNotifcation.994caea3.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(y.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&h.boot(e)});export{B as A,w as C,h as I,N as a,c as b,g as r};
//# sourceMappingURL=router.64955329.js.map
