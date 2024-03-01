var A=Object.defineProperty;var y=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.a935b6d6.js";import{E as g,cT as E,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.b4e7bc36.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="b97b2a7e-4732-4ac5-a73a-b391dd8e6d7f",o._sentryDebugIdIdentifier="sentry-dbid-b97b2a7e-4732-4ac5-a73a-b391dd8e6d7f")}catch{}})();const U=g(T),J=g(R);class w{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const C=()=>window.location.host.includes(".abstra.io"),L={"cloud-api":"/api/cloud-api"},D={"cloud-api":"https://cloud-api.abstra.cloud"},V=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"e59f8c7dc0ff6902b1d7a72e95f40fbc7312a643",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(C()?L[o]:D[o])},l={cloudApi:V("cloud-api")};class p extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new p(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${l.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});r.status===403&&(window.location.href="/login");const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await p.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await p.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await p.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),w.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.86899a1a.js"),["assets/WidgetPreview.86899a1a.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/Steps.bcc4c2d3.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.35b648b9.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.9ec54534.js"),["assets/Login.9ec54534.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/icons.ed8a375d.js","assets/CircularLoading.23298a71.js","assets/CircularLoading.f81b57b4.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/member.92dbdf2d.js","assets/WidgetsFrame.35b648b9.js","assets/WidgetsFrame.13b291ee.css","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Login.ecd87c93.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.a063efec.js"),["assets/ReturnApiKey.a063efec.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/apiKey.7693a755.js","assets/project.cbc9601c.js","assets/organization.32a5de1c.js","assets/asyncComputed.63222e21.js","assets/Title.87d4b9b2.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Paragraph.dc776558.js","assets/Text.480840c4.js","assets/index.69712705.js","assets/Modal.0bce1eaa.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.5a0fe097.js"),["assets/Organizations.5a0fe097.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/icons.ed8a375d.js","assets/asyncComputed.63222e21.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/organization.32a5de1c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.1ca04b58.js","assets/logo.084e5d7c.js","assets/Text.480840c4.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.e9cca4fd.js","assets/Paragraph.dc776558.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css","assets/BaseLayout.63ab3f34.js","assets/BaseLayout.2a9791da.css","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.79a0a743.js"),["assets/Organization.79a0a743.js","assets/Sidebar.2e53d668.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/icons.ed8a375d.js","assets/index.1b6f6e06.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.1ca04b58.js","assets/logo.084e5d7c.js","assets/asyncComputed.63222e21.js","assets/Text.480840c4.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/organization.32a5de1c.js","assets/BaseLayout.63ab3f34.js","assets/BaseLayout.2a9791da.css","assets/Form.a935b6d6.js","assets/hasIn.068878da.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.1281eff0.js"),["assets/Projects.1281eff0.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.63222e21.js","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js","assets/Modal.0bce1eaa.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/project.cbc9601c.js","assets/organization.32a5de1c.js","assets/CrudView.e9cca4fd.js","assets/icons.ed8a375d.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.78da68a1.js"),["assets/OrganizationSettings.78da68a1.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.1d9ffd56.js"),["assets/Editors.1d9ffd56.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.63222e21.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/member.92dbdf2d.js","assets/CrudView.e9cca4fd.js","assets/icons.ed8a375d.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.dc23a90b.js"),["assets/Billing.dc23a90b.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/organization.32a5de1c.js","assets/asyncComputed.63222e21.js","assets/Title.87d4b9b2.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.bc81c9a3.js","assets/index.a317fc0b.js","assets/Text.480840c4.js","assets/Card.10f1cba9.js","assets/TabPane.030e32f8.js","assets/hasIn.068878da.js","assets/Form.a935b6d6.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.71485449.js"),["assets/Project.71485449.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/BaseLayout.63ab3f34.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.63222e21.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/project.cbc9601c.js","assets/organization.32a5de1c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.1ca04b58.js","assets/logo.084e5d7c.js","assets/Text.480840c4.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.2e53d668.js","assets/icons.ed8a375d.js","assets/index.1b6f6e06.js","assets/Sidebar.055402cc.css","assets/Form.a935b6d6.js","assets/hasIn.068878da.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.f28fe312.js"),["assets/Live.f28fe312.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.63222e21.js","assets/build.1dce70e3.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/project.cbc9601c.js","assets/CrudView.e9cca4fd.js","assets/icons.ed8a375d.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f2d9be57.js","assets/CheckCircleFilled.25c09a24.js","assets/index.69712705.js","assets/Link.d885589e.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.9a899ac2.js"),["assets/Builds.9a899ac2.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.63222e21.js","assets/build.1dce70e3.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/project.cbc9601c.js","assets/CrudView.e9cca4fd.js","assets/icons.ed8a375d.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css","assets/index.a5c2d7d1.js","assets/datetime.e891d66c.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.3d7f53a8.js"),["assets/Connectors.3d7f53a8.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/connector.b9b19e6e.js","assets/asyncComputed.63222e21.js","assets/icons.ed8a375d.js","assets/CrudView.e9cca4fd.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.17f3b055.js"),["assets/Tables.17f3b055.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/icons.ed8a375d.js","assets/asyncComputed.63222e21.js","assets/tables.eb548ce7.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/string.c83940b9.js","assets/CrudView.e9cca4fd.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.f9e13da0.js"),["assets/Sql.f9e13da0.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/project.cbc9601c.js","assets/toggleHighContrast.26c3ca6b.js","assets/toggleHighContrast.30d77c87.css","assets/index.bc81c9a3.js","assets/index.69712705.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.4dce20e1.js"),["assets/ApiKeys.4dce20e1.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/icons.ed8a375d.js","assets/asyncComputed.63222e21.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/member.92dbdf2d.js","assets/apiKey.7693a755.js","assets/project.cbc9601c.js","assets/CrudView.e9cca4fd.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.93889f40.js"),["assets/Logs.93889f40.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/build.1dce70e3.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.f2d9be57.js","assets/CheckCircleFilled.25c09a24.js","assets/datetime.e891d66c.js","assets/dayjs.1039eceb.js","assets/index.1d2ca5ef.js","assets/index.1b6f6e06.js","assets/Title.87d4b9b2.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.69712705.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/CollapsePanel.d1e12e48.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.1b84b21c.js"),["assets/LegacyLogs.1b84b21c.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js","assets/Modal.0bce1eaa.js","assets/StarFilled.fad29e50.js","assets/Timeline.b093f673.js","assets/CheckCircleFilled.25c09a24.js","assets/build.1dce70e3.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/asyncComputed.63222e21.js","assets/Title.87d4b9b2.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/index.69712705.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/dayjs.1039eceb.js","assets/index.1d2ca5ef.js","assets/index.1b6f6e06.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.01caa77d.js"),["assets/ProjectSettings.01caa77d.js","assets/asyncComputed.63222e21.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/project.cbc9601c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.bb26af8a.js","assets/Title.87d4b9b2.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Paragraph.dc776558.js","assets/Text.480840c4.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.719bad77.js"),["assets/EnvVars.719bad77.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/icons.ed8a375d.js","assets/asyncComputed.63222e21.js","assets/CrudView.e9cca4fd.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.5f1a87c0.js"),["assets/Files.5f1a87c0.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/asyncComputed.63222e21.js","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js","assets/Modal.0bce1eaa.js","assets/popupNotifcation.018f8518.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.87d4b9b2.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Paragraph.dc776558.js","assets/Card.10f1cba9.js","assets/TabPane.030e32f8.js","assets/hasIn.068878da.js","assets/Form.a935b6d6.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.bfb83a5d.js"),["assets/Users.bfb83a5d.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/icons.ed8a375d.js","assets/asyncComputed.63222e21.js","assets/contracts.generated.9de11de1.js","assets/index.cf4c23b9.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/index.f64f6652.js","assets/isNumeric.75337b1e.js","assets/index.d2ed8ff0.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/CrudView.e9cca4fd.js","assets/Paragraph.dc776558.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/Modal.0bce1eaa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js","assets/url.efacade2.js","assets/index.bc81c9a3.js","assets/Title.87d4b9b2.js","assets/Text.480840c4.js","assets/index.1b6f6e06.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.018f8518.js"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.41d5fc34.js"),["assets/TableEditor.41d5fc34.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/tables.eb548ce7.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/string.c83940b9.js","assets/BaseLayout.63ab3f34.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.63222e21.js","assets/popupNotifcation.018f8518.js","assets/index.a317fc0b.js","assets/Form.a935b6d6.js","assets/hasIn.068878da.js","assets/index.f64f6652.js","assets/isNumeric.75337b1e.js","assets/project.cbc9601c.js","assets/organization.32a5de1c.js","assets/icons.ed8a375d.js","assets/index.871f8aad.js","assets/CircularLoading.23298a71.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.030e32f8.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.b036cd53.js","assets/Typography.a2975dec.js","assets/TableEditor.d993c852.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.ff11ee9d.js"),["assets/ConnectorEditor.ff11ee9d.js","assets/outputWidgets.b4e7bc36.js","assets/outputWidgets.6d880e89.css","assets/BaseLayout.63ab3f34.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.63222e21.js","assets/index.d2ed8ff0.js","assets/index.cf4c23b9.js","assets/record.8841a42c.js","assets/pubsub.f377b08c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a58f43a6.js","assets/ant-design.07e59af2.js","assets/index.9bc09b0f.js","assets/Modal.0bce1eaa.js","assets/Typography.a2975dec.js","assets/Link.d885589e.js","assets/Base.b036cd53.js","assets/SaveButton.13ece1cb.css","assets/project.cbc9601c.js","assets/connector.b9b19e6e.js","assets/organization.32a5de1c.js","assets/TabPane.030e32f8.js","assets/hasIn.068878da.js","assets/index.bd84ac43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.a935b6d6.js","assets/index.a317fc0b.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(w.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,b as C,J as a,i as b,f as r};
//# sourceMappingURL=router.ba23848c.js.map
