var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.674f6096.js";import{E as g,cS as f,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.181aa682.js";import{p as C}from"./popupNotifcation.39419412.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="1051e7f0-e521-4f11-97ff-50efd50199fd",o._sentryDebugIdIdentifier="sentry-dbid-1051e7f0-e521-4f11-97ff-50efd50199fd")}catch{}})();const $=g(T),z=g(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"909ae03f3fea49103e95a587b064060ece713d61",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class E{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await E.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,b=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.b36c6384.js"),["assets/WidgetPreview.b36c6384.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/Steps.2a91d495.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.1d74437f.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.0c9cd237.js"),["assets/Login.0c9cd237.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/icons.0993a98a.js","assets/CircularLoading.d32d41b4.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.1d74437f.js","assets/WidgetsFrame.13b291ee.css","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/popupNotifcation.39419412.js","assets/Login.4672e6e4.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.09bf50af.js"),["assets/ReturnApiKey.09bf50af.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/apiKey.78eb1c61.js","assets/project.9a80be33.js","assets/organization.c6a7236b.js","assets/asyncComputed.7ebec2c8.js","assets/Title.115648e8.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Paragraph.6e854bbb.js","assets/Text.c22c06ac.js","assets/index.3f945403.js","assets/Modal.094213af.js","assets/popupNotifcation.39419412.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.50dc6502.js"),["assets/Organizations.50dc6502.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/icons.0993a98a.js","assets/asyncComputed.7ebec2c8.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/organization.c6a7236b.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ceda935d.js","assets/logo.084e5d7c.js","assets/Text.c22c06ac.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/index.b49e989c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.3940b576.js","assets/Paragraph.6e854bbb.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/BaseLayout.46a6c8c9.js","assets/BaseLayout.2a9791da.css","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/popupNotifcation.39419412.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.17458323.js"),["assets/Organization.17458323.js","assets/Sidebar.40d2470f.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/icons.0993a98a.js","assets/index.069ae257.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.ceda935d.js","assets/logo.084e5d7c.js","assets/asyncComputed.7ebec2c8.js","assets/Text.c22c06ac.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/index.b49e989c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/organization.c6a7236b.js","assets/BaseLayout.46a6c8c9.js","assets/BaseLayout.2a9791da.css","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/popupNotifcation.39419412.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.0e3ed9b9.js"),["assets/Projects.0e3ed9b9.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.7ebec2c8.js","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/Modal.094213af.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/project.9a80be33.js","assets/organization.c6a7236b.js","assets/CrudView.3940b576.js","assets/icons.0993a98a.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.39419412.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.f3e9bcea.js"),["assets/OrganizationSettings.f3e9bcea.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.99dd04b7.js"),["assets/Editors.99dd04b7.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.7ebec2c8.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/member.fcc091cc.js","assets/CrudView.3940b576.js","assets/icons.0993a98a.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/popupNotifcation.39419412.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.9341954f.js"),["assets/Billing.9341954f.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/organization.c6a7236b.js","assets/asyncComputed.7ebec2c8.js","assets/Title.115648e8.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/index.27994ce3.js","assets/index.cbec1ef3.js","assets/Text.c22c06ac.js","assets/Card.2503ba80.js","assets/TabPane.045dc937.js","assets/hasIn.95ace56c.js","assets/Form.674f6096.js","assets/popupNotifcation.39419412.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.8aaf2789.js"),["assets/Project.8aaf2789.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.46a6c8c9.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7ebec2c8.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/project.9a80be33.js","assets/organization.c6a7236b.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ceda935d.js","assets/logo.084e5d7c.js","assets/Text.c22c06ac.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/index.b49e989c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.40d2470f.js","assets/icons.0993a98a.js","assets/index.069ae257.js","assets/Sidebar.055402cc.css","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/popupNotifcation.39419412.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.1e0e6caf.js"),["assets/Live.1e0e6caf.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.7ebec2c8.js","assets/build.900a5205.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/project.9a80be33.js","assets/CrudView.3940b576.js","assets/icons.0993a98a.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e240c7c7.js","assets/CheckCircleFilled.ccce1046.js","assets/LoadingOutlined.b0a5e369.js","assets/index.3f945403.js","assets/Link.39626a79.js","assets/popupNotifcation.39419412.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.d9e1652e.js"),["assets/Builds.d9e1652e.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.7ebec2c8.js","assets/build.900a5205.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/project.9a80be33.js","assets/CrudView.3940b576.js","assets/icons.0993a98a.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/index.3e49f516.js","assets/datetime.3fbc1167.js","assets/CloseCircleOutlined.a7971c46.js","assets/LoadingOutlined.b0a5e369.js","assets/popupNotifcation.39419412.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.8263f52e.js"),["assets/Connectors.8263f52e.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/connector.2b9835f5.js","assets/asyncComputed.7ebec2c8.js","assets/icons.0993a98a.js","assets/CrudView.3940b576.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.39419412.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.3edc457e.js"),["assets/Tables.3edc457e.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/icons.0993a98a.js","assets/asyncComputed.7ebec2c8.js","assets/tables.e3843d7a.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/string.5cca2b85.js","assets/CrudView.3940b576.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.39419412.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.de0d99ae.js"),["assets/Sql.de0d99ae.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/project.9a80be33.js","assets/toggleHighContrast.f14df9bc.js","assets/toggleHighContrast.30d77c87.css","assets/index.27994ce3.js","assets/index.3f945403.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/popupNotifcation.39419412.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.59838b6f.js"),["assets/ApiKeys.59838b6f.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/icons.0993a98a.js","assets/asyncComputed.7ebec2c8.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/member.fcc091cc.js","assets/apiKey.78eb1c61.js","assets/project.9a80be33.js","assets/CrudView.3940b576.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.39419412.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.1d2c455f.js"),["assets/Logs.1d2c455f.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/build.900a5205.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e240c7c7.js","assets/CheckCircleFilled.ccce1046.js","assets/LoadingOutlined.b0a5e369.js","assets/datetime.3fbc1167.js","assets/dayjs.0769a090.js","assets/index.fe4b6cd3.js","assets/index.069ae257.js","assets/Title.115648e8.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/index.3f945403.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/CollapsePanel.9b4cd3e2.js","assets/popupNotifcation.39419412.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.df181881.js"),["assets/LegacyLogs.df181881.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/Modal.094213af.js","assets/StarFilled.fad29e50.js","assets/Timeline.00910f5f.js","assets/CheckCircleFilled.ccce1046.js","assets/build.900a5205.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/asyncComputed.7ebec2c8.js","assets/Title.115648e8.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/index.3f945403.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/dayjs.0769a090.js","assets/index.fe4b6cd3.js","assets/index.069ae257.js","assets/popupNotifcation.39419412.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.42e80121.js"),["assets/ProjectSettings.42e80121.js","assets/asyncComputed.7ebec2c8.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/project.9a80be33.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ff47510b.js","assets/Title.115648e8.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Paragraph.6e854bbb.js","assets/Text.c22c06ac.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/popupNotifcation.39419412.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.1d2ee5be.js"),["assets/EnvVars.1d2ee5be.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/icons.0993a98a.js","assets/asyncComputed.7ebec2c8.js","assets/CrudView.3940b576.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.39419412.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.8ba69f16.js"),["assets/Files.8ba69f16.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/popupNotifcation.39419412.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/asyncComputed.7ebec2c8.js","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.b5b25973.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.115648e8.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Paragraph.6e854bbb.js","assets/Card.2503ba80.js","assets/TabPane.045dc937.js","assets/hasIn.95ace56c.js","assets/Form.674f6096.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.44662f55.js"),["assets/Users.44662f55.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/icons.0993a98a.js","assets/asyncComputed.7ebec2c8.js","assets/contracts.generated.1f99492f.js","assets/index.cf4c23b9.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/index.49adfb0c.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.39419412.js","assets/index.b33a0e54.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/CrudView.3940b576.js","assets/Paragraph.6e854bbb.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/Modal.094213af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c0a8b87.js","assets/url.f3c7142a.js","assets/index.27994ce3.js","assets/Title.115648e8.js","assets/Text.c22c06ac.js","assets/index.069ae257.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.2127a693.js"),["assets/TableEditor.2127a693.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/tables.e3843d7a.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/string.5cca2b85.js","assets/BaseLayout.46a6c8c9.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7ebec2c8.js","assets/popupNotifcation.39419412.js","assets/icons.0993a98a.js","assets/project.9a80be33.js","assets/index.dc824da8.js","assets/index.1dd11fe1.js","assets/Form.674f6096.js","assets/hasIn.95ace56c.js","assets/index.53edeb70.js","assets/index.49adfb0c.js","assets/isNumeric.75337b1e.js","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/Modal.094213af.js","assets/Base.5a460e6d.js","assets/Typography.136d7768.js","assets/LoadingOutlined.b0a5e369.js","assets/index.27994ce3.js","assets/DeleteOutlined.b5b25973.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.dddeadcd.js","assets/index.cbec1ef3.js","assets/organization.c6a7236b.js","assets/index.b49e989c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.a2581d17.js"),["assets/ConnectorEditor.a2581d17.js","assets/outputWidgets.181aa682.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.46a6c8c9.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.7ebec2c8.js","assets/index.b33a0e54.js","assets/index.cf4c23b9.js","assets/record.36169a1a.js","assets/pubsub.ce62596d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.23bd06f4.js","assets/ant-design.968180ff.js","assets/index.6a0bb78b.js","assets/Modal.094213af.js","assets/Typography.136d7768.js","assets/Link.39626a79.js","assets/Base.5a460e6d.js","assets/SaveButton.13ece1cb.css","assets/project.9a80be33.js","assets/connector.2b9835f5.js","assets/organization.c6a7236b.js","assets/TabPane.045dc937.js","assets/hasIn.95ace56c.js","assets/index.b49e989c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.674f6096.js","assets/index.cbec1ef3.js","assets/popupNotifcation.39419412.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});b.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await b.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,E as C,z as a,i as b,b as r};
//# sourceMappingURL=router.b42d7cbe.js.map
