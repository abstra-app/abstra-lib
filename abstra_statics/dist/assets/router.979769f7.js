var A=Object.defineProperty;var y=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.7d1a8597.js";import{E as g,cT as b,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.6bfc0239.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="cb1e2fe9-b8b0-4ab4-9dd9-392eebc2f3a9",o._sentryDebugIdIdentifier="sentry-dbid-cb1e2fe9-b8b0-4ab4-9dd9-392eebc2f3a9")}catch{}})();const U=g(T),J=g(R);class w{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const C=()=>window.location.host.includes(".abstra.io"),L={"cloud-api":"/api/cloud-api"},D={"cloud-api":"https://cloud-api.abstra.cloud"},V=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"ddfadb53612f21367511f4bf3499cd2a19bdcd04",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(C()?L[o]:D[o])},l={cloudApi:V("cloud-api")};class p extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new p(e,t.status)}}class E{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${l.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});r.status===403&&(window.location.href="/login");const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await p.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await p.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await p.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await E.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),w.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.dd4ce01b.js"),["assets/WidgetPreview.dd4ce01b.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/Steps.cdfeb83b.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.f3e18a8a.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.82aec997.js"),["assets/Login.82aec997.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/icons.5f4f8713.js","assets/CircularLoading.c1d47ee0.js","assets/CircularLoading.f81b57b4.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/member.a98b4f76.js","assets/WidgetsFrame.f3e18a8a.js","assets/WidgetsFrame.13b291ee.css","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Login.ecd87c93.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.7897064a.js"),["assets/ReturnApiKey.7897064a.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/apiKey.69d6f01b.js","assets/project.3b3557c3.js","assets/organization.721b781f.js","assets/asyncComputed.21831dee.js","assets/Title.84d6428e.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Paragraph.100fbd75.js","assets/Text.3be64ce1.js","assets/index.eba2f742.js","assets/Modal.9595e4e0.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.a24fd103.js"),["assets/Organizations.a24fd103.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/icons.5f4f8713.js","assets/asyncComputed.21831dee.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/organization.721b781f.js","assets/Navbar.vue_vue_type_script_setup_true_lang.53af7a2e.js","assets/logo.084e5d7c.js","assets/Text.3be64ce1.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/index.a0291250.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.26794284.js","assets/Paragraph.100fbd75.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css","assets/BaseLayout.b05ffc6b.js","assets/BaseLayout.2a9791da.css","assets/ant-design.bf757549.js","assets/index.71301f31.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.ddf2d2a6.js"),["assets/Organization.ddf2d2a6.js","assets/Sidebar.7d53bde6.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/icons.5f4f8713.js","assets/index.ecc37a00.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.53af7a2e.js","assets/logo.084e5d7c.js","assets/asyncComputed.21831dee.js","assets/Text.3be64ce1.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/index.a0291250.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/organization.721b781f.js","assets/BaseLayout.b05ffc6b.js","assets/BaseLayout.2a9791da.css","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.0262dca0.js"),["assets/Projects.0262dca0.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.21831dee.js","assets/ant-design.bf757549.js","assets/index.71301f31.js","assets/Modal.9595e4e0.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/project.3b3557c3.js","assets/organization.721b781f.js","assets/CrudView.26794284.js","assets/icons.5f4f8713.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.321cc120.js"),["assets/OrganizationSettings.321cc120.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.6e73bbaa.js"),["assets/Editors.6e73bbaa.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.21831dee.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/member.a98b4f76.js","assets/CrudView.26794284.js","assets/icons.5f4f8713.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css","assets/ant-design.bf757549.js","assets/index.71301f31.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.15e36117.js"),["assets/Billing.15e36117.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/organization.721b781f.js","assets/asyncComputed.21831dee.js","assets/Title.84d6428e.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/index.60dad040.js","assets/index.81e0c92a.js","assets/Text.3be64ce1.js","assets/Card.77a4a6f5.js","assets/TabPane.e27b42bc.js","assets/hasIn.42df2c7d.js","assets/Form.7d1a8597.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.87256157.js"),["assets/Project.87256157.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/BaseLayout.b05ffc6b.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.21831dee.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/project.3b3557c3.js","assets/organization.721b781f.js","assets/Navbar.vue_vue_type_script_setup_true_lang.53af7a2e.js","assets/logo.084e5d7c.js","assets/Text.3be64ce1.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/index.a0291250.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.7d53bde6.js","assets/icons.5f4f8713.js","assets/index.ecc37a00.js","assets/Sidebar.055402cc.css","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.25be721b.js"),["assets/Live.25be721b.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.21831dee.js","assets/build.906b350f.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/project.3b3557c3.js","assets/CrudView.26794284.js","assets/icons.5f4f8713.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c1733496.js","assets/CheckCircleFilled.00f0a45b.js","assets/index.eba2f742.js","assets/Link.c1cadb68.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.284fff6f.js"),["assets/Builds.284fff6f.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.21831dee.js","assets/build.906b350f.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/project.3b3557c3.js","assets/CrudView.26794284.js","assets/icons.5f4f8713.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css","assets/index.677555e1.js","assets/datetime.c7b3e9c3.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.5b352a65.js"),["assets/Connectors.5b352a65.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/connector.0e8fd8b9.js","assets/asyncComputed.21831dee.js","assets/icons.5f4f8713.js","assets/CrudView.26794284.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.4d6d8cd0.js"),["assets/Tables.4d6d8cd0.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/icons.5f4f8713.js","assets/asyncComputed.21831dee.js","assets/tables.29c3f8af.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/string.2eb5a2c9.js","assets/CrudView.26794284.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.01912500.js"),["assets/Sql.01912500.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/project.3b3557c3.js","assets/toggleHighContrast.bb37b70a.js","assets/toggleHighContrast.30d77c87.css","assets/index.60dad040.js","assets/index.eba2f742.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.d4d1fd7c.js"),["assets/ApiKeys.d4d1fd7c.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/icons.5f4f8713.js","assets/asyncComputed.21831dee.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/member.a98b4f76.js","assets/apiKey.69d6f01b.js","assets/project.3b3557c3.js","assets/CrudView.26794284.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.9c01c12d.js"),["assets/Logs.9c01c12d.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/build.906b350f.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c1733496.js","assets/CheckCircleFilled.00f0a45b.js","assets/datetime.c7b3e9c3.js","assets/dayjs.eef18a40.js","assets/index.642f5d72.js","assets/index.ecc37a00.js","assets/Title.84d6428e.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/index.eba2f742.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/CollapsePanel.3dd38c7f.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.c3ae9300.js"),["assets/LegacyLogs.c3ae9300.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/ant-design.bf757549.js","assets/index.71301f31.js","assets/Modal.9595e4e0.js","assets/StarFilled.fad29e50.js","assets/Timeline.049ef2a2.js","assets/CheckCircleFilled.00f0a45b.js","assets/build.906b350f.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/asyncComputed.21831dee.js","assets/Title.84d6428e.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/index.eba2f742.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/dayjs.eef18a40.js","assets/index.642f5d72.js","assets/index.ecc37a00.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.e21e01bd.js"),["assets/ProjectSettings.e21e01bd.js","assets/asyncComputed.21831dee.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/project.3b3557c3.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4b0e6f74.js","assets/Title.84d6428e.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Paragraph.100fbd75.js","assets/Text.3be64ce1.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.47e37ea5.js"),["assets/EnvVars.47e37ea5.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/icons.5f4f8713.js","assets/asyncComputed.21831dee.js","assets/CrudView.26794284.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.136ce7d7.js"),["assets/Files.136ce7d7.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/asyncComputed.21831dee.js","assets/ant-design.bf757549.js","assets/index.71301f31.js","assets/Modal.9595e4e0.js","assets/popupNotifcation.9ba9d802.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.84d6428e.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Paragraph.100fbd75.js","assets/Card.77a4a6f5.js","assets/TabPane.e27b42bc.js","assets/hasIn.42df2c7d.js","assets/Form.7d1a8597.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.a5cd499b.js"),["assets/Users.a5cd499b.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/icons.5f4f8713.js","assets/asyncComputed.21831dee.js","assets/contracts.generated.7a08d10a.js","assets/index.cf4c23b9.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/index.9753d7a2.js","assets/isNumeric.75337b1e.js","assets/index.76d87691.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/CrudView.26794284.js","assets/Paragraph.100fbd75.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/Modal.9595e4e0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js","assets/url.c2408bab.js","assets/index.60dad040.js","assets/Title.84d6428e.js","assets/Text.3be64ce1.js","assets/index.ecc37a00.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.9ba9d802.js"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.b0549515.js"),["assets/TableEditor.b0549515.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/tables.29c3f8af.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/string.2eb5a2c9.js","assets/BaseLayout.b05ffc6b.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.21831dee.js","assets/popupNotifcation.9ba9d802.js","assets/index.81e0c92a.js","assets/Form.7d1a8597.js","assets/hasIn.42df2c7d.js","assets/index.9753d7a2.js","assets/isNumeric.75337b1e.js","assets/project.3b3557c3.js","assets/organization.721b781f.js","assets/icons.5f4f8713.js","assets/index.a4bbf07e.js","assets/CircularLoading.c1d47ee0.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.e27b42bc.js","assets/index.a0291250.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.3f4f4c87.js","assets/Typography.7fe49268.js","assets/TableEditor.d993c852.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.e7124e10.js"),["assets/ConnectorEditor.e7124e10.js","assets/outputWidgets.6bfc0239.js","assets/outputWidgets.6d880e89.css","assets/BaseLayout.b05ffc6b.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.21831dee.js","assets/index.76d87691.js","assets/index.cf4c23b9.js","assets/record.dbb754fe.js","assets/pubsub.56f48661.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b3ad499f.js","assets/ant-design.bf757549.js","assets/index.71301f31.js","assets/Modal.9595e4e0.js","assets/Typography.7fe49268.js","assets/Link.c1cadb68.js","assets/Base.3f4f4c87.js","assets/SaveButton.13ece1cb.css","assets/project.3b3557c3.js","assets/connector.0e8fd8b9.js","assets/organization.721b781f.js","assets/TabPane.e27b42bc.js","assets/hasIn.42df2c7d.js","assets/index.a0291250.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.7d1a8597.js","assets/index.81e0c92a.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(w.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,E as C,J as a,i as b,f as r};
//# sourceMappingURL=router.979769f7.js.map
