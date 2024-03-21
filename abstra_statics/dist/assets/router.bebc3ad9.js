var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.186f3ccd.js";import{E as g,cS as b,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.7d9d2da4.js";import{p as C}from"./popupNotifcation.97f45a86.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="b413eb04-3799-48ce-a328-0582f925c442",o._sentryDebugIdIdentifier="sentry-dbid-b413eb04-3799-48ce-a328-0582f925c442")}catch{}})();const $=g(T),z=g(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"bfdcb489b3ac8b97bac3bdaa29e749f49f560f7f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class E{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await E.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.35966953.js"),["assets/WidgetPreview.35966953.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/Steps.964c00ae.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.a083f965.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.a25ebe2d.js"),["assets/Login.a25ebe2d.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/icons.28aac7cc.js","assets/CircularLoading.294181dd.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.a083f965.js","assets/WidgetsFrame.13b291ee.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/member.08853095.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/popupNotifcation.97f45a86.js","assets/Login.ddcd6824.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.c3739d52.js"),["assets/ReturnApiKey.c3739d52.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/apiKey.83d670d9.js","assets/project.ed294168.js","assets/organization.2cac0a46.js","assets/asyncComputed.a940c534.js","assets/Title.bc3fed7a.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/url.a3136da2.js","assets/Paragraph.f3781014.js","assets/Text.c9870ace.js","assets/index.21da0e36.js","assets/Modal.45832a29.js","assets/popupNotifcation.97f45a86.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.8d6e8e60.js"),["assets/Organizations.8d6e8e60.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/icons.28aac7cc.js","assets/asyncComputed.a940c534.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/organization.2cac0a46.js","assets/Navbar.vue_vue_type_script_setup_true_lang.f49593f0.js","assets/logo.084e5d7c.js","assets/Text.c9870ace.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/index.c3a51146.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.21da0e36.js","assets/Navbar.f4a98ea3.css","assets/CrudView.3ab2c116.js","assets/Paragraph.f3781014.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/BaseLayout.68e32840.js","assets/BaseLayout.2a9791da.css","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.aa91a2d0.js"),["assets/Organization.aa91a2d0.js","assets/Sidebar.c6233785.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/icons.28aac7cc.js","assets/index.955d1350.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.f49593f0.js","assets/logo.084e5d7c.js","assets/asyncComputed.a940c534.js","assets/Text.c9870ace.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/index.c3a51146.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.21da0e36.js","assets/Navbar.f4a98ea3.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/organization.2cac0a46.js","assets/BaseLayout.68e32840.js","assets/BaseLayout.2a9791da.css","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/popupNotifcation.97f45a86.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.5502546d.js"),["assets/Projects.5502546d.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.a940c534.js","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/Modal.45832a29.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/project.ed294168.js","assets/organization.2cac0a46.js","assets/CrudView.3ab2c116.js","assets/icons.28aac7cc.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.f6dffe87.js"),["assets/OrganizationSettings.f6dffe87.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.e86f4150.js"),["assets/Editors.e86f4150.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.a940c534.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/member.08853095.js","assets/CrudView.3ab2c116.js","assets/icons.28aac7cc.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.103ed681.js"),["assets/Billing.103ed681.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/organization.2cac0a46.js","assets/asyncComputed.a940c534.js","assets/Title.bc3fed7a.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/index.16783743.js","assets/index.a0a3765b.js","assets/Text.c9870ace.js","assets/Card.51994948.js","assets/TabPane.ac24d014.js","assets/hasIn.dc8aa224.js","assets/Form.186f3ccd.js","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.bc883074.js"),["assets/Project.bc883074.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.68e32840.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.a940c534.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/project.ed294168.js","assets/organization.2cac0a46.js","assets/Navbar.vue_vue_type_script_setup_true_lang.f49593f0.js","assets/logo.084e5d7c.js","assets/Text.c9870ace.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/index.c3a51146.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.21da0e36.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.c6233785.js","assets/icons.28aac7cc.js","assets/index.955d1350.js","assets/Sidebar.055402cc.css","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/popupNotifcation.97f45a86.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.d559e0a9.js"),["assets/Live.d559e0a9.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.a940c534.js","assets/build.dd314bb1.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/project.ed294168.js","assets/CrudView.3ab2c116.js","assets/icons.28aac7cc.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a1f3a22d.js","assets/CheckCircleFilled.16bfb41a.js","assets/LoadingOutlined.48dcb2cc.js","assets/index.21da0e36.js","assets/Link.108d0be6.js","assets/popupNotifcation.97f45a86.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.8b9d34c9.js"),["assets/Builds.8b9d34c9.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.a940c534.js","assets/build.dd314bb1.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/project.ed294168.js","assets/CrudView.3ab2c116.js","assets/icons.28aac7cc.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/index.03b6244f.js","assets/datetime.d66d869f.js","assets/CloseCircleOutlined.5eb7e2d5.js","assets/LoadingOutlined.48dcb2cc.js","assets/popupNotifcation.97f45a86.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.073cee4b.js"),["assets/Connectors.073cee4b.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/connector.46d15eb0.js","assets/asyncComputed.a940c534.js","assets/icons.28aac7cc.js","assets/CrudView.3ab2c116.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.92de807c.js"),["assets/Tables.92de807c.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/icons.28aac7cc.js","assets/asyncComputed.a940c534.js","assets/tables.e434a580.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/string.89004898.js","assets/CrudView.3ab2c116.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.6ac407b3.js"),["assets/Sql.6ac407b3.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/project.ed294168.js","assets/toggleHighContrast.045e2b65.js","assets/toggleHighContrast.30d77c87.css","assets/index.16783743.js","assets/index.21da0e36.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/popupNotifcation.97f45a86.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.744d17ab.js"),["assets/ApiKeys.744d17ab.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/icons.28aac7cc.js","assets/asyncComputed.a940c534.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/member.08853095.js","assets/apiKey.83d670d9.js","assets/project.ed294168.js","assets/CrudView.3ab2c116.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.97f45a86.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.178654ca.js"),["assets/Logs.178654ca.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/build.dd314bb1.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a1f3a22d.js","assets/CheckCircleFilled.16bfb41a.js","assets/LoadingOutlined.48dcb2cc.js","assets/datetime.d66d869f.js","assets/dayjs.0c61028d.js","assets/index.eef20b77.js","assets/index.955d1350.js","assets/Title.bc3fed7a.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/index.21da0e36.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/CollapsePanel.096e0356.js","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.e24b71e6.js"),["assets/LegacyLogs.e24b71e6.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/Modal.45832a29.js","assets/StarFilled.fad29e50.js","assets/Timeline.87aa40c1.js","assets/CheckCircleFilled.16bfb41a.js","assets/build.dd314bb1.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/asyncComputed.a940c534.js","assets/Title.bc3fed7a.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/index.21da0e36.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/dayjs.0c61028d.js","assets/index.eef20b77.js","assets/index.955d1350.js","assets/popupNotifcation.97f45a86.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.d8876d43.js"),["assets/ProjectSettings.d8876d43.js","assets/asyncComputed.a940c534.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/project.ed294168.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a6fd2692.js","assets/Title.bc3fed7a.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Paragraph.f3781014.js","assets/Text.c9870ace.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.25c69190.js"),["assets/EnvVars.25c69190.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/icons.28aac7cc.js","assets/asyncComputed.a940c534.js","assets/CrudView.3ab2c116.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.97f45a86.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.228ec8ac.js"),["assets/Files.228ec8ac.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/popupNotifcation.97f45a86.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/asyncComputed.a940c534.js","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.6e50e99d.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.bc3fed7a.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Paragraph.f3781014.js","assets/Card.51994948.js","assets/TabPane.ac24d014.js","assets/hasIn.dc8aa224.js","assets/Form.186f3ccd.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.263dd8ec.js"),["assets/Users.263dd8ec.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/icons.28aac7cc.js","assets/asyncComputed.a940c534.js","assets/contracts.generated.c3eee8be.js","assets/index.cf4c23b9.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/index.771e52d8.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.97f45a86.js","assets/index.27121bd4.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/CrudView.3ab2c116.js","assets/Paragraph.f3781014.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/Modal.45832a29.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7c2a4a96.js","assets/url.a3136da2.js","assets/index.16783743.js","assets/Title.bc3fed7a.js","assets/Text.c9870ace.js","assets/index.955d1350.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.189e56a4.js"),["assets/TableEditor.189e56a4.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/tables.e434a580.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/string.89004898.js","assets/BaseLayout.68e32840.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.a940c534.js","assets/popupNotifcation.97f45a86.js","assets/icons.28aac7cc.js","assets/project.ed294168.js","assets/index.71f61c0f.js","assets/index.7f8084bb.js","assets/Form.186f3ccd.js","assets/hasIn.dc8aa224.js","assets/index.e2d8a5ce.js","assets/index.771e52d8.js","assets/isNumeric.75337b1e.js","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/Modal.45832a29.js","assets/Base.1e619495.js","assets/Typography.0464c928.js","assets/LoadingOutlined.48dcb2cc.js","assets/index.16783743.js","assets/DeleteOutlined.6e50e99d.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.c447d6b1.js","assets/index.a0a3765b.js","assets/organization.2cac0a46.js","assets/index.c3a51146.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.09e1dac3.js"),["assets/ConnectorEditor.09e1dac3.js","assets/outputWidgets.7d9d2da4.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.68e32840.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.a940c534.js","assets/index.27121bd4.js","assets/index.cf4c23b9.js","assets/record.c58b3d65.js","assets/pubsub.24c705c7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1c556ecd.js","assets/ant-design.bca7e02d.js","assets/index.cd9d80c2.js","assets/Modal.45832a29.js","assets/Typography.0464c928.js","assets/Link.108d0be6.js","assets/Base.1e619495.js","assets/SaveButton.13ece1cb.css","assets/project.ed294168.js","assets/connector.46d15eb0.js","assets/organization.2cac0a46.js","assets/TabPane.ac24d014.js","assets/hasIn.dc8aa224.js","assets/index.c3a51146.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.186f3ccd.js","assets/index.a0a3765b.js","assets/popupNotifcation.97f45a86.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,E as C,z as a,i as b,f as r};
//# sourceMappingURL=router.bebc3ad9.js.map
