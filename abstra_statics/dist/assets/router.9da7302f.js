var A=Object.defineProperty;var y=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.57f174d1.js";import{E as g,cT as E,S as d,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.aff95ef3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="08e3ae98-3be4-4e7d-98e4-a7ff9e053b2f",o._sentryDebugIdIdentifier="sentry-dbid-08e3ae98-3be4-4e7d-98e4-a7ff9e053b2f")}catch{}})();const U=g(T),J=g(R);class w{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const C=()=>window.location.host.includes(".abstra.io"),L={"cloud-api":"/api/cloud-api"},D={"cloud-api":"https://cloud-api.abstra.cloud"},V=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"1da62deb9a65c4a16a0711ab6766df492d992595",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(C()?L[o]:D[o])},l={cloudApi:V("cloud-api")};class p extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new p(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${l.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});r.status===403&&(window.location.href="/login");const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await p.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await p.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await p.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),w.trackSession(t),this.getAuthor()}saveJWT(t){d.set(m.key,t)}getJWT(){return d.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){d.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;h(_,"key","abstracloud:auth:jwt");const i=new _,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.28848c2a.js"),["assets/WidgetPreview.28848c2a.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/Steps.bab4ef97.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.70c2a2d0.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.fb06bfa0.js"),["assets/Login.fb06bfa0.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/icons.9b000560.js","assets/CircularLoading.cd15138d.js","assets/CircularLoading.f81b57b4.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/member.fb69c81a.js","assets/WidgetsFrame.70c2a2d0.js","assets/WidgetsFrame.13b291ee.css","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Login.ecd87c93.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.c9259e96.js"),["assets/ReturnApiKey.c9259e96.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/apiKey.1cf1ff6a.js","assets/project.d123ac34.js","assets/organization.88bd6991.js","assets/asyncComputed.20ee3174.js","assets/Title.6f043c8e.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Paragraph.645d5000.js","assets/Text.da7d6e49.js","assets/index.ed9b0d90.js","assets/Modal.5729ac3b.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.6d438c57.js"),["assets/Organizations.6d438c57.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/icons.9b000560.js","assets/asyncComputed.20ee3174.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/organization.88bd6991.js","assets/Navbar.vue_vue_type_script_setup_true_lang.92a7cbf3.js","assets/logo.084e5d7c.js","assets/Text.da7d6e49.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.259af733.js","assets/Paragraph.645d5000.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css","assets/BaseLayout.a0233fae.js","assets/BaseLayout.2a9791da.css","assets/ant-design.86abae93.js","assets/index.72a4e529.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.4ef4ea98.js"),["assets/Organization.4ef4ea98.js","assets/Sidebar.5fb541cc.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/icons.9b000560.js","assets/index.d203a4f6.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.92a7cbf3.js","assets/logo.084e5d7c.js","assets/asyncComputed.20ee3174.js","assets/Text.da7d6e49.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/organization.88bd6991.js","assets/BaseLayout.a0233fae.js","assets/BaseLayout.2a9791da.css","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.415179b2.js"),["assets/Projects.415179b2.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/ant-design.86abae93.js","assets/index.72a4e529.js","assets/Modal.5729ac3b.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/project.d123ac34.js","assets/organization.88bd6991.js","assets/CrudView.259af733.js","assets/icons.9b000560.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.fdbc5e8b.js"),["assets/OrganizationSettings.fdbc5e8b.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"members",name:"members",component:()=>a(()=>import("./Members.8e3ee538.js"),["assets/Members.8e3ee538.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/member.fb69c81a.js","assets/CrudView.259af733.js","assets/icons.9b000560.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css","assets/ant-design.86abae93.js","assets/index.72a4e529.js"]),meta:{title:"Members - Abstra Console"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.693ed6eb.js"),["assets/Billing.693ed6eb.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/organization.88bd6991.js","assets/asyncComputed.20ee3174.js","assets/Title.6f043c8e.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.4cadba5d.js","assets/index.575d7595.js","assets/Text.da7d6e49.js","assets/Card.aee71dc0.js","assets/TabPane.85ea9e94.js","assets/hasIn.59f3ceea.js","assets/Form.57f174d1.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.2803d0cf.js"),["assets/Project.2803d0cf.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/BaseLayout.a0233fae.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.20ee3174.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/project.d123ac34.js","assets/organization.88bd6991.js","assets/Navbar.vue_vue_type_script_setup_true_lang.92a7cbf3.js","assets/logo.084e5d7c.js","assets/Text.da7d6e49.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.5fb541cc.js","assets/icons.9b000560.js","assets/index.d203a4f6.js","assets/Sidebar.055402cc.css","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.6f6c595f.js"),["assets/Live.6f6c595f.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/build.a55eb918.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/project.d123ac34.js","assets/CrudView.259af733.js","assets/icons.9b000560.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1f36f072.js","assets/CheckCircleFilled.311496b1.js","assets/index.ed9b0d90.js","assets/Link.756f024c.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.c3c78543.js"),["assets/Builds.c3c78543.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.20ee3174.js","assets/build.a55eb918.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/project.d123ac34.js","assets/CrudView.259af733.js","assets/icons.9b000560.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css","assets/index.083474a8.js","assets/datetime.debcc235.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.70a5ae26.js"),["assets/Connectors.70a5ae26.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/connector.8c51021b.js","assets/asyncComputed.20ee3174.js","assets/icons.9b000560.js","assets/CrudView.259af733.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.7d8f7470.js"),["assets/Tables.7d8f7470.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/icons.9b000560.js","assets/asyncComputed.20ee3174.js","assets/tables.03180d5f.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/string.fc1c190b.js","assets/CrudView.259af733.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.1113a830.js"),["assets/Sql.1113a830.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/project.d123ac34.js","assets/toggleHighContrast.d239ee3d.js","assets/toggleHighContrast.30d77c87.css","assets/index.4cadba5d.js","assets/index.ed9b0d90.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.b40bc5f2.js"),["assets/ApiKeys.b40bc5f2.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/icons.9b000560.js","assets/asyncComputed.20ee3174.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/member.fb69c81a.js","assets/apiKey.1cf1ff6a.js","assets/project.d123ac34.js","assets/CrudView.259af733.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.14fbe85e.js"),["assets/Logs.14fbe85e.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/build.a55eb918.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1f36f072.js","assets/CheckCircleFilled.311496b1.js","assets/datetime.debcc235.js","assets/dayjs.e3b08779.js","assets/index.d02d9b17.js","assets/index.d203a4f6.js","assets/Title.6f043c8e.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.ed9b0d90.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/CollapsePanel.6015b58b.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.035c62f3.js"),["assets/LegacyLogs.035c62f3.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/ant-design.86abae93.js","assets/index.72a4e529.js","assets/Modal.5729ac3b.js","assets/StarFilled.fad29e50.js","assets/Timeline.0f378a3a.js","assets/CheckCircleFilled.311496b1.js","assets/build.a55eb918.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/asyncComputed.20ee3174.js","assets/Title.6f043c8e.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/index.ed9b0d90.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/dayjs.e3b08779.js","assets/index.d02d9b17.js","assets/index.d203a4f6.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.8b24ed57.js"),["assets/ProjectSettings.8b24ed57.js","assets/asyncComputed.20ee3174.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/project.d123ac34.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4e168ece.js","assets/Title.6f043c8e.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Paragraph.645d5000.js","assets/Text.da7d6e49.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.24f99d07.js"),["assets/EnvVars.24f99d07.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/icons.9b000560.js","assets/asyncComputed.20ee3174.js","assets/CrudView.259af733.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.bb5a37ff.js"),["assets/Files.bb5a37ff.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/asyncComputed.20ee3174.js","assets/ant-design.86abae93.js","assets/index.72a4e529.js","assets/Modal.5729ac3b.js","assets/popupNotifcation.56914b91.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.6f043c8e.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Paragraph.645d5000.js","assets/Card.aee71dc0.js","assets/TabPane.85ea9e94.js","assets/hasIn.59f3ceea.js","assets/Form.57f174d1.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.5db6ef31.js"),["assets/Users.5db6ef31.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/icons.9b000560.js","assets/asyncComputed.20ee3174.js","assets/contracts.generated.ce029bf0.js","assets/index.cf4c23b9.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/index.7830cf80.js","assets/isNumeric.75337b1e.js","assets/index.bdfb2b09.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/CrudView.259af733.js","assets/Paragraph.645d5000.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/Modal.5729ac3b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7154ea1f.js","assets/url.644d7978.js","assets/index.4cadba5d.js","assets/Title.6f043c8e.js","assets/Text.da7d6e49.js","assets/index.d203a4f6.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.56914b91.js"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.f7bb4989.js"),["assets/TableEditor.f7bb4989.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/tables.03180d5f.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/string.fc1c190b.js","assets/BaseLayout.a0233fae.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.20ee3174.js","assets/popupNotifcation.56914b91.js","assets/index.575d7595.js","assets/Form.57f174d1.js","assets/hasIn.59f3ceea.js","assets/index.7830cf80.js","assets/isNumeric.75337b1e.js","assets/project.d123ac34.js","assets/organization.88bd6991.js","assets/icons.9b000560.js","assets/index.2ef2488e.js","assets/CircularLoading.cd15138d.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.85ea9e94.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.0c246aee.js","assets/Typography.60000f40.js","assets/TableEditor.1138d18e.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.a73bae70.js"),["assets/ConnectorEditor.a73bae70.js","assets/outputWidgets.aff95ef3.js","assets/outputWidgets.6d880e89.css","assets/BaseLayout.a0233fae.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.20ee3174.js","assets/index.bdfb2b09.js","assets/index.cf4c23b9.js","assets/record.b43eab04.js","assets/pubsub.3b8860eb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a03da62f.js","assets/ant-design.86abae93.js","assets/index.72a4e529.js","assets/Modal.5729ac3b.js","assets/Typography.60000f40.js","assets/Link.756f024c.js","assets/Base.0c246aee.js","assets/SaveButton.13ece1cb.css","assets/project.d123ac34.js","assets/connector.8c51021b.js","assets/organization.88bd6991.js","assets/TabPane.85ea9e94.js","assets/hasIn.59f3ceea.js","assets/index.00fb47d6.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.57f174d1.js","assets/index.575d7595.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(w.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,b as C,J as a,i as b,f as r};
//# sourceMappingURL=router.9da7302f.js.map
