var A=Object.defineProperty;var y=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.72892734.js";import{E as g,cT as E,S as d,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.6c92e954.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="4033f6b1-85ae-41a8-89d3-f42a8642fcae",o._sentryDebugIdIdentifier="sentry-dbid-4033f6b1-85ae-41a8-89d3-f42a8642fcae")}catch{}})();const U=g(T),J=g(R);class w{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const C=()=>window.location.host.includes(".abstra.io"),L={"cloud-api":"/api/cloud-api"},D={"cloud-api":"https://cloud-api.abstra.cloud"},V=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"d4315aca28a198570da1bd79609c968d1e6cf722",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(C()?L[o]:D[o])},l={cloudApi:V("cloud-api")};class p extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new p(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${l.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});r.status===403&&(window.location.href="/login");const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await p.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await p.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await p.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),w.trackSession(t),this.getAuthor()}saveJWT(t){d.set(m.key,t)}getJWT(){return d.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){d.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;h(_,"key","abstracloud:auth:jwt");const i=new _,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.a23ade37.js"),["assets/WidgetPreview.a23ade37.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/Steps.be633bdc.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.e9aaef6e.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.e4d0bfa7.js"),["assets/Login.e4d0bfa7.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/icons.eb9ff229.js","assets/CircularLoading.20a74bbe.js","assets/CircularLoading.f81b57b4.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/member.1ea7402f.js","assets/WidgetsFrame.e9aaef6e.js","assets/WidgetsFrame.13b291ee.css","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Login.ecd87c93.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.f8297695.js"),["assets/ReturnApiKey.f8297695.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/apiKey.ebf7a02b.js","assets/project.fb337c95.js","assets/organization.e2d74bf9.js","assets/asyncComputed.a6744f4b.js","assets/Title.1b72d44e.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Paragraph.09928799.js","assets/Text.42d18ad1.js","assets/index.e56d6fb8.js","assets/Modal.09b95803.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.599c824f.js"),["assets/Organizations.599c824f.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/icons.eb9ff229.js","assets/asyncComputed.a6744f4b.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/organization.e2d74bf9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.acff0973.js","assets/logo.084e5d7c.js","assets/Text.42d18ad1.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/index.da275d63.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.096f1d35.js","assets/Paragraph.09928799.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css","assets/BaseLayout.1e9c8fe2.js","assets/BaseLayout.2a9791da.css","assets/ant-design.21c39eac.js","assets/index.8510f685.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.3797d5b0.js"),["assets/Organization.3797d5b0.js","assets/Sidebar.efbb99d3.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/icons.eb9ff229.js","assets/index.33dbdb8c.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.acff0973.js","assets/logo.084e5d7c.js","assets/asyncComputed.a6744f4b.js","assets/Text.42d18ad1.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/index.da275d63.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/organization.e2d74bf9.js","assets/BaseLayout.1e9c8fe2.js","assets/BaseLayout.2a9791da.css","assets/Form.72892734.js","assets/hasIn.252833b5.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.a24aadd5.js"),["assets/Projects.a24aadd5.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/asyncComputed.a6744f4b.js","assets/ant-design.21c39eac.js","assets/index.8510f685.js","assets/Modal.09b95803.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/project.fb337c95.js","assets/organization.e2d74bf9.js","assets/CrudView.096f1d35.js","assets/icons.eb9ff229.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.4ef38407.js"),["assets/OrganizationSettings.4ef38407.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"members",name:"members",component:()=>a(()=>import("./Members.40e7dc5a.js"),["assets/Members.40e7dc5a.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/asyncComputed.a6744f4b.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/member.1ea7402f.js","assets/CrudView.096f1d35.js","assets/icons.eb9ff229.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css","assets/ant-design.21c39eac.js","assets/index.8510f685.js"]),meta:{title:"Members - Abstra Console"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.9617d454.js"),["assets/Billing.9617d454.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/organization.e2d74bf9.js","assets/asyncComputed.a6744f4b.js","assets/Title.1b72d44e.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/index.3500e53c.js","assets/index.642edce5.js","assets/Text.42d18ad1.js","assets/Card.3cd47a33.js","assets/TabPane.e98bc7f4.js","assets/hasIn.252833b5.js","assets/Form.72892734.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.cf0b0b6b.js"),["assets/Project.cf0b0b6b.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/BaseLayout.1e9c8fe2.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.a6744f4b.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/project.fb337c95.js","assets/organization.e2d74bf9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.acff0973.js","assets/logo.084e5d7c.js","assets/Text.42d18ad1.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/index.da275d63.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.efbb99d3.js","assets/icons.eb9ff229.js","assets/index.33dbdb8c.js","assets/Sidebar.055402cc.css","assets/Form.72892734.js","assets/hasIn.252833b5.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.4334bde1.js"),["assets/Live.4334bde1.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/asyncComputed.a6744f4b.js","assets/build.52c4b033.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/project.fb337c95.js","assets/CrudView.096f1d35.js","assets/icons.eb9ff229.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9c4913a0.js","assets/CheckCircleFilled.af0fb207.js","assets/index.e56d6fb8.js","assets/Link.0d700775.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.0623e45e.js"),["assets/Builds.0623e45e.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/asyncComputed.a6744f4b.js","assets/build.52c4b033.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/project.fb337c95.js","assets/CrudView.096f1d35.js","assets/icons.eb9ff229.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css","assets/index.68e4a73c.js","assets/datetime.916b9a02.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.47cab7d2.js"),["assets/Connectors.47cab7d2.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/connector.b7ec0302.js","assets/asyncComputed.a6744f4b.js","assets/icons.eb9ff229.js","assets/CrudView.096f1d35.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.ea9c5e94.js"),["assets/Tables.ea9c5e94.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/icons.eb9ff229.js","assets/asyncComputed.a6744f4b.js","assets/tables.f7c1c733.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/string.5462bd5a.js","assets/CrudView.096f1d35.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.9314ca81.js"),["assets/Sql.9314ca81.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/project.fb337c95.js","assets/toggleHighContrast.79f69078.js","assets/toggleHighContrast.30d77c87.css","assets/index.3500e53c.js","assets/index.e56d6fb8.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.8a79e345.js"),["assets/ApiKeys.8a79e345.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/icons.eb9ff229.js","assets/asyncComputed.a6744f4b.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/member.1ea7402f.js","assets/apiKey.ebf7a02b.js","assets/project.fb337c95.js","assets/CrudView.096f1d35.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.d62f6666.js"),["assets/Logs.d62f6666.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/build.52c4b033.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9c4913a0.js","assets/CheckCircleFilled.af0fb207.js","assets/datetime.916b9a02.js","assets/dayjs.ac11236a.js","assets/index.f6c02569.js","assets/index.33dbdb8c.js","assets/Title.1b72d44e.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/index.e56d6fb8.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/CollapsePanel.ed0c9ff7.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.0f5dece5.js"),["assets/LegacyLogs.0f5dece5.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/ant-design.21c39eac.js","assets/index.8510f685.js","assets/Modal.09b95803.js","assets/StarFilled.fad29e50.js","assets/Timeline.4e610b6d.js","assets/CheckCircleFilled.af0fb207.js","assets/build.52c4b033.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/asyncComputed.a6744f4b.js","assets/Title.1b72d44e.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/index.e56d6fb8.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/dayjs.ac11236a.js","assets/index.f6c02569.js","assets/index.33dbdb8c.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.245810fd.js"),["assets/ProjectSettings.245810fd.js","assets/asyncComputed.a6744f4b.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/project.fb337c95.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.da371a42.js","assets/Title.1b72d44e.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Paragraph.09928799.js","assets/Text.42d18ad1.js","assets/Form.72892734.js","assets/hasIn.252833b5.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.a6605874.js"),["assets/EnvVars.a6605874.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/icons.eb9ff229.js","assets/asyncComputed.a6744f4b.js","assets/CrudView.096f1d35.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.0f55dfd4.js"),["assets/Files.0f55dfd4.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/asyncComputed.a6744f4b.js","assets/ant-design.21c39eac.js","assets/index.8510f685.js","assets/Modal.09b95803.js","assets/popupNotifcation.cd9bd745.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.1b72d44e.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Paragraph.09928799.js","assets/Card.3cd47a33.js","assets/TabPane.e98bc7f4.js","assets/hasIn.252833b5.js","assets/Form.72892734.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.a4d27117.js"),["assets/Users.a4d27117.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/icons.eb9ff229.js","assets/asyncComputed.a6744f4b.js","assets/contracts.generated.f56c84df.js","assets/index.cf4c23b9.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/index.b423c353.js","assets/isNumeric.75337b1e.js","assets/index.d70f3e11.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/CrudView.096f1d35.js","assets/Paragraph.09928799.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/Modal.09b95803.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.9805dcd5.js","assets/url.3097d400.js","assets/index.3500e53c.js","assets/Title.1b72d44e.js","assets/Text.42d18ad1.js","assets/index.33dbdb8c.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.cd9bd745.js"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.8957d4c7.js"),["assets/TableEditor.8957d4c7.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/tables.f7c1c733.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/string.5462bd5a.js","assets/BaseLayout.1e9c8fe2.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.a6744f4b.js","assets/popupNotifcation.cd9bd745.js","assets/index.642edce5.js","assets/Form.72892734.js","assets/hasIn.252833b5.js","assets/index.b423c353.js","assets/isNumeric.75337b1e.js","assets/project.fb337c95.js","assets/organization.e2d74bf9.js","assets/icons.eb9ff229.js","assets/index.8682b326.js","assets/CircularLoading.20a74bbe.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.e98bc7f4.js","assets/index.da275d63.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.1c8cd5a1.js","assets/Typography.ddb46fbe.js","assets/TableEditor.1138d18e.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.aec46806.js"),["assets/ConnectorEditor.aec46806.js","assets/outputWidgets.6c92e954.js","assets/outputWidgets.b91ece06.css","assets/BaseLayout.1e9c8fe2.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.a6744f4b.js","assets/index.d70f3e11.js","assets/index.cf4c23b9.js","assets/record.1024814b.js","assets/pubsub.e3166cf5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.7b22a412.js","assets/ant-design.21c39eac.js","assets/index.8510f685.js","assets/Modal.09b95803.js","assets/Typography.ddb46fbe.js","assets/Link.0d700775.js","assets/Base.1c8cd5a1.js","assets/SaveButton.13ece1cb.css","assets/project.fb337c95.js","assets/connector.b7ec0302.js","assets/organization.e2d74bf9.js","assets/TabPane.e98bc7f4.js","assets/hasIn.252833b5.js","assets/index.da275d63.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.72892734.js","assets/index.642edce5.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(w.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,b as C,J as a,i as b,f as r};
//# sourceMappingURL=router.daec1f4f.js.map
