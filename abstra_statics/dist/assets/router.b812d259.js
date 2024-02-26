var f=Object.defineProperty;var y=(o,t,e)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.db59b1d8.js";import{E as w,cT as b,S as d,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.eba7fd6d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="7e55ab02-746b-4109-b380-a1871ee33959",o._sentryDebugIdIdentifier="sentry-dbid-7e55ab02-746b-4109-b380-a1871ee33959")}catch{}})();const U=w(T),J=w(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const C=()=>window.location.host.includes(".abstra.io"),L={"cloud-api":"/api/cloud-api"},D={"cloud-api":"https://cloud-api.abstra.cloud"},V=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"8f33460b76dc8299ed6caace217e1775160353a1",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(C()?L[o]:D[o])},l={cloudApi:V("cloud-api")};class p extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new p(e,t.status)}}class E{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${l.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});r.status===403&&(window.location.href="/login");const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await p.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await p.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await p.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await E.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){d.set(m.key,t)}getJWT(){return d.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){d.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;h(_,"key","abstracloud:auth:jwt");const i=new _,g=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.822db021.js"),["assets/WidgetPreview.822db021.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/Steps.e31de4dc.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.3cbf4ad7.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.34e60a18.js"),["assets/Login.34e60a18.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/icons.0a5ddaa6.js","assets/CircularLoading.811285ba.js","assets/CircularLoading.f81b57b4.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/member.cbd9f8e3.js","assets/WidgetsFrame.3cbf4ad7.js","assets/WidgetsFrame.13b291ee.css","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Login.ecd87c93.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.47959555.js"),["assets/ReturnApiKey.47959555.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/apiKey.661427f9.js","assets/project.08c6aedf.js","assets/organization.9a52ad89.js","assets/asyncComputed.d84c8a23.js","assets/Title.a13bf1c9.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Paragraph.61cbc45a.js","assets/Text.d7e01cac.js","assets/index.8c705ad1.js","assets/Modal.682382a8.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.041ded12.js"),["assets/Organizations.041ded12.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/icons.0a5ddaa6.js","assets/asyncComputed.d84c8a23.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/organization.9a52ad89.js","assets/Navbar.vue_vue_type_script_setup_true_lang.787edbdb.js","assets/logo.084e5d7c.js","assets/Text.d7e01cac.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/index.d594fad7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.2edd29a1.js","assets/Paragraph.61cbc45a.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css","assets/BaseLayout.37cf5670.js","assets/BaseLayout.2a9791da.css","assets/ant-design.ef039780.js","assets/index.b7c5a0d3.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.f431a6fc.js"),["assets/Organization.f431a6fc.js","assets/Sidebar.65e00841.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/icons.0a5ddaa6.js","assets/index.d3764a90.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.787edbdb.js","assets/logo.084e5d7c.js","assets/asyncComputed.d84c8a23.js","assets/Text.d7e01cac.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/index.d594fad7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/organization.9a52ad89.js","assets/BaseLayout.37cf5670.js","assets/BaseLayout.2a9791da.css","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.486284a4.js"),["assets/Projects.486284a4.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/asyncComputed.d84c8a23.js","assets/ant-design.ef039780.js","assets/index.b7c5a0d3.js","assets/Modal.682382a8.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/project.08c6aedf.js","assets/organization.9a52ad89.js","assets/CrudView.2edd29a1.js","assets/icons.0a5ddaa6.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.647a13d1.js"),["assets/OrganizationSettings.647a13d1.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"members",name:"members",component:()=>a(()=>import("./Members.f2d1b850.js"),["assets/Members.f2d1b850.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/asyncComputed.d84c8a23.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/member.cbd9f8e3.js","assets/CrudView.2edd29a1.js","assets/icons.0a5ddaa6.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css","assets/ant-design.ef039780.js","assets/index.b7c5a0d3.js"]),meta:{title:"Members - Abstra Console"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.09fac173.js"),["assets/Billing.09fac173.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/organization.9a52ad89.js","assets/asyncComputed.d84c8a23.js","assets/Title.a13bf1c9.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/index.7e1b0d07.js","assets/index.3be166be.js","assets/Text.d7e01cac.js","assets/Card.eb6cecaa.js","assets/TabPane.89962a36.js","assets/hasIn.017aa15f.js","assets/Form.db59b1d8.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.903622e2.js"),["assets/Project.903622e2.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/BaseLayout.37cf5670.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.d84c8a23.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/project.08c6aedf.js","assets/organization.9a52ad89.js","assets/Navbar.vue_vue_type_script_setup_true_lang.787edbdb.js","assets/logo.084e5d7c.js","assets/Text.d7e01cac.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/index.d594fad7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.65e00841.js","assets/icons.0a5ddaa6.js","assets/index.d3764a90.js","assets/Sidebar.055402cc.css","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.8d4ab4e5.js"),["assets/Live.8d4ab4e5.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/asyncComputed.d84c8a23.js","assets/build.6b577802.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/project.08c6aedf.js","assets/CrudView.2edd29a1.js","assets/icons.0a5ddaa6.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.59910448.js","assets/CheckCircleFilled.85e545f0.js","assets/index.8c705ad1.js","assets/Link.7a3b3b6f.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.c7ec1463.js"),["assets/Builds.c7ec1463.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/asyncComputed.d84c8a23.js","assets/build.6b577802.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/project.08c6aedf.js","assets/CrudView.2edd29a1.js","assets/icons.0a5ddaa6.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css","assets/index.9dbebcf3.js","assets/datetime.c665e808.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.6038ec0d.js"),["assets/Connectors.6038ec0d.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/connector.befd851e.js","assets/asyncComputed.d84c8a23.js","assets/icons.0a5ddaa6.js","assets/CrudView.2edd29a1.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.efef7304.js"),["assets/Tables.efef7304.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/icons.0a5ddaa6.js","assets/asyncComputed.d84c8a23.js","assets/tables.9e5d150d.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/string.18d533c9.js","assets/CrudView.2edd29a1.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.0f0e726c.js"),["assets/Sql.0f0e726c.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/project.08c6aedf.js","assets/toggleHighContrast.9291efed.js","assets/toggleHighContrast.30d77c87.css","assets/index.7e1b0d07.js","assets/index.8c705ad1.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.b3fb0d3d.js"),["assets/ApiKeys.b3fb0d3d.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/icons.0a5ddaa6.js","assets/asyncComputed.d84c8a23.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/member.cbd9f8e3.js","assets/apiKey.661427f9.js","assets/project.08c6aedf.js","assets/CrudView.2edd29a1.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.cd1a81b4.js"),["assets/Logs.cd1a81b4.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/build.6b577802.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.59910448.js","assets/CheckCircleFilled.85e545f0.js","assets/datetime.c665e808.js","assets/dayjs.ba806571.js","assets/index.682b4a5a.js","assets/index.d3764a90.js","assets/Title.a13bf1c9.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/index.8c705ad1.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/CollapsePanel.15d6ccd3.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.1836c98f.js"),["assets/LegacyLogs.1836c98f.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/ant-design.ef039780.js","assets/index.b7c5a0d3.js","assets/Modal.682382a8.js","assets/StarFilled.fad29e50.js","assets/Timeline.e05b2e40.js","assets/CheckCircleFilled.85e545f0.js","assets/build.6b577802.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/asyncComputed.d84c8a23.js","assets/Title.a13bf1c9.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/index.8c705ad1.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/dayjs.ba806571.js","assets/index.682b4a5a.js","assets/index.d3764a90.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.422a73cd.js"),["assets/ProjectSettings.422a73cd.js","assets/asyncComputed.d84c8a23.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/project.08c6aedf.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.587a35df.js","assets/Title.a13bf1c9.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Paragraph.61cbc45a.js","assets/Text.d7e01cac.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.1f2ca561.js"),["assets/EnvVars.1f2ca561.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/icons.0a5ddaa6.js","assets/asyncComputed.d84c8a23.js","assets/CrudView.2edd29a1.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.98c6b7a1.js"),["assets/Files.98c6b7a1.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/asyncComputed.d84c8a23.js","assets/ant-design.ef039780.js","assets/index.b7c5a0d3.js","assets/Modal.682382a8.js","assets/popupNotifcation.4e89d279.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.a13bf1c9.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Paragraph.61cbc45a.js","assets/Card.eb6cecaa.js","assets/TabPane.89962a36.js","assets/hasIn.017aa15f.js","assets/Form.db59b1d8.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.d1c48f7b.js"),["assets/Users.d1c48f7b.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/icons.0a5ddaa6.js","assets/asyncComputed.d84c8a23.js","assets/contracts.generated.40208335.js","assets/index.cf4c23b9.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/index.508d0ee1.js","assets/isNumeric.75337b1e.js","assets/index.d8ef3f9d.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/CrudView.2edd29a1.js","assets/Paragraph.61cbc45a.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/Modal.682382a8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a92bad54.js","assets/url.09bbafdb.js","assets/index.7e1b0d07.js","assets/Title.a13bf1c9.js","assets/Text.d7e01cac.js","assets/index.d3764a90.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.4e89d279.js"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.bffeb650.js"),["assets/TableEditor.bffeb650.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/tables.9e5d150d.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/string.18d533c9.js","assets/BaseLayout.37cf5670.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.d84c8a23.js","assets/popupNotifcation.4e89d279.js","assets/index.3be166be.js","assets/Form.db59b1d8.js","assets/hasIn.017aa15f.js","assets/index.508d0ee1.js","assets/isNumeric.75337b1e.js","assets/project.08c6aedf.js","assets/organization.9a52ad89.js","assets/icons.0a5ddaa6.js","assets/index.bb5c71d9.js","assets/CircularLoading.811285ba.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.89962a36.js","assets/index.d594fad7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.f3fc76d5.js","assets/Typography.41ff1dd0.js","assets/TableEditor.1138d18e.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.9089d3ff.js"),["assets/ConnectorEditor.9089d3ff.js","assets/outputWidgets.eba7fd6d.js","assets/outputWidgets.3e214fd1.css","assets/BaseLayout.37cf5670.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.d84c8a23.js","assets/index.d8ef3f9d.js","assets/index.cf4c23b9.js","assets/record.d2906049.js","assets/pubsub.af0b43dd.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.072693c6.js","assets/ant-design.ef039780.js","assets/index.b7c5a0d3.js","assets/Modal.682382a8.js","assets/Typography.41ff1dd0.js","assets/Link.7a3b3b6f.js","assets/Base.f3fc76d5.js","assets/SaveButton.13ece1cb.css","assets/project.08c6aedf.js","assets/connector.befd851e.js","assets/organization.9a52ad89.js","assets/TabPane.89962a36.js","assets/hasIn.017aa15f.js","assets/index.d594fad7.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.db59b1d8.js","assets/index.3be166be.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,E as C,J as a,i as b,g as r};
//# sourceMappingURL=router.b812d259.js.map
