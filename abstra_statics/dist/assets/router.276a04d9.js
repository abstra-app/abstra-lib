var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.28044722.js";import{E as g,cS as b,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.6eb42f16.js";import{p as C}from"./popupNotifcation.88303055.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="dd75d5d5-9261-4ee8-bf3c-6277a3bf1b59",o._sentryDebugIdIdentifier="sentry-dbid-dd75d5d5-9261-4ee8-bf3c-6277a3bf1b59")}catch{}})();const $=g(T),z=g(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"90f754c72c7c98422c8a2b4eb6c0078d8c6b198f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class E{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await E.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.d16e5a7e.js"),["assets/WidgetPreview.d16e5a7e.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/Steps.35ad5d14.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.753d30cc.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.15eb0541.js"),["assets/Login.15eb0541.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/icons.a3022b2c.js","assets/CircularLoading.fcb95689.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.753d30cc.js","assets/WidgetsFrame.13b291ee.css","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/popupNotifcation.88303055.js","assets/Login.4672e6e4.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.a3b4b882.js"),["assets/ReturnApiKey.a3b4b882.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/apiKey.cfeed55e.js","assets/project.62dfece1.js","assets/organization.2e6d590e.js","assets/asyncComputed.706ab9bd.js","assets/Title.09e4c950.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Paragraph.ca364e37.js","assets/Text.db500d81.js","assets/index.693fc62b.js","assets/Modal.8ee684fd.js","assets/popupNotifcation.88303055.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.cd30f5fc.js"),["assets/Organizations.cd30f5fc.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/icons.a3022b2c.js","assets/asyncComputed.706ab9bd.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/organization.2e6d590e.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b8accabd.js","assets/logo.084e5d7c.js","assets/Text.db500d81.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/index.0a6123b8.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.42da9fd8.js","assets/Paragraph.ca364e37.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/BaseLayout.f3fce1d9.js","assets/BaseLayout.2a9791da.css","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/popupNotifcation.88303055.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.93a4b8b6.js"),["assets/Organization.93a4b8b6.js","assets/Sidebar.ab7d9cf5.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/icons.a3022b2c.js","assets/index.fe4847f6.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.b8accabd.js","assets/logo.084e5d7c.js","assets/asyncComputed.706ab9bd.js","assets/Text.db500d81.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/index.0a6123b8.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/organization.2e6d590e.js","assets/BaseLayout.f3fce1d9.js","assets/BaseLayout.2a9791da.css","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/popupNotifcation.88303055.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.23041cb4.js"),["assets/Projects.23041cb4.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.706ab9bd.js","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/Modal.8ee684fd.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/project.62dfece1.js","assets/organization.2e6d590e.js","assets/CrudView.42da9fd8.js","assets/icons.a3022b2c.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.88303055.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.41ede0fd.js"),["assets/OrganizationSettings.41ede0fd.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.7f0ddc7c.js"),["assets/Editors.7f0ddc7c.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.706ab9bd.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/member.820e0431.js","assets/CrudView.42da9fd8.js","assets/icons.a3022b2c.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/popupNotifcation.88303055.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.d76fd25e.js"),["assets/Billing.d76fd25e.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/organization.2e6d590e.js","assets/asyncComputed.706ab9bd.js","assets/Title.09e4c950.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/index.6b4f5d7c.js","assets/index.7405a791.js","assets/Text.db500d81.js","assets/Card.18ef7a62.js","assets/TabPane.4d5d6eb4.js","assets/hasIn.076802f3.js","assets/Form.28044722.js","assets/popupNotifcation.88303055.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.b0ed8256.js"),["assets/Project.b0ed8256.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/BaseLayout.f3fce1d9.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.706ab9bd.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/project.62dfece1.js","assets/organization.2e6d590e.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b8accabd.js","assets/logo.084e5d7c.js","assets/Text.db500d81.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/index.0a6123b8.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.ab7d9cf5.js","assets/icons.a3022b2c.js","assets/index.fe4847f6.js","assets/Sidebar.055402cc.css","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/popupNotifcation.88303055.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.c4e2c30e.js"),["assets/Live.c4e2c30e.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.706ab9bd.js","assets/build.fa206da5.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/project.62dfece1.js","assets/CrudView.42da9fd8.js","assets/icons.a3022b2c.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.65841ece.js","assets/CheckCircleFilled.dfa547ac.js","assets/LoadingOutlined.6dcac1cb.js","assets/index.693fc62b.js","assets/Link.fe0d887b.js","assets/popupNotifcation.88303055.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.99a3f02a.js"),["assets/Builds.99a3f02a.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.706ab9bd.js","assets/build.fa206da5.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/project.62dfece1.js","assets/CrudView.42da9fd8.js","assets/icons.a3022b2c.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/index.b94446cc.js","assets/datetime.4f5698a0.js","assets/popupNotifcation.88303055.js","assets/Builds.ac3e960d.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.a3b90006.js"),["assets/Connectors.a3b90006.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/connector.93d27b58.js","assets/asyncComputed.706ab9bd.js","assets/icons.a3022b2c.js","assets/CrudView.42da9fd8.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.88303055.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.22e425bf.js"),["assets/Tables.22e425bf.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/icons.a3022b2c.js","assets/asyncComputed.706ab9bd.js","assets/tables.ce228008.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/string.954ba712.js","assets/CrudView.42da9fd8.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.88303055.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.d998b04c.js"),["assets/Sql.d998b04c.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/project.62dfece1.js","assets/toggleHighContrast.32158cc2.js","assets/toggleHighContrast.30d77c87.css","assets/index.6b4f5d7c.js","assets/index.693fc62b.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/popupNotifcation.88303055.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.c37f3182.js"),["assets/ApiKeys.c37f3182.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/icons.a3022b2c.js","assets/asyncComputed.706ab9bd.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/member.820e0431.js","assets/apiKey.cfeed55e.js","assets/project.62dfece1.js","assets/CrudView.42da9fd8.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.88303055.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.65de2227.js"),["assets/Logs.65de2227.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/build.fa206da5.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.65841ece.js","assets/CheckCircleFilled.dfa547ac.js","assets/LoadingOutlined.6dcac1cb.js","assets/datetime.4f5698a0.js","assets/dayjs.3528712d.js","assets/index.f7bf5c2c.js","assets/index.fe4847f6.js","assets/Title.09e4c950.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/index.693fc62b.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/CollapsePanel.9542de69.js","assets/popupNotifcation.88303055.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.8ac0177e.js"),["assets/LegacyLogs.8ac0177e.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/Modal.8ee684fd.js","assets/StarFilled.fad29e50.js","assets/Timeline.54e1baef.js","assets/CheckCircleFilled.dfa547ac.js","assets/build.fa206da5.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/asyncComputed.706ab9bd.js","assets/Title.09e4c950.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/index.693fc62b.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/dayjs.3528712d.js","assets/index.f7bf5c2c.js","assets/index.fe4847f6.js","assets/popupNotifcation.88303055.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.af31992a.js"),["assets/ProjectSettings.af31992a.js","assets/asyncComputed.706ab9bd.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/project.62dfece1.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.fe802d30.js","assets/Title.09e4c950.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Paragraph.ca364e37.js","assets/Text.db500d81.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/popupNotifcation.88303055.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.28d86dab.js"),["assets/EnvVars.28d86dab.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/icons.a3022b2c.js","assets/asyncComputed.706ab9bd.js","assets/CrudView.42da9fd8.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.88303055.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.5933d9d6.js"),["assets/Files.5933d9d6.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/popupNotifcation.88303055.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/asyncComputed.706ab9bd.js","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.770dadea.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.09e4c950.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Paragraph.ca364e37.js","assets/Card.18ef7a62.js","assets/TabPane.4d5d6eb4.js","assets/hasIn.076802f3.js","assets/Form.28044722.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.2e54b3dc.js"),["assets/Users.2e54b3dc.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/icons.a3022b2c.js","assets/asyncComputed.706ab9bd.js","assets/contracts.generated.842a5def.js","assets/index.cf4c23b9.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/index.7ca43790.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.88303055.js","assets/index.7e4d6141.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/CrudView.42da9fd8.js","assets/Paragraph.ca364e37.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/Modal.8ee684fd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.83b9800a.js","assets/url.a23c07df.js","assets/index.6b4f5d7c.js","assets/Title.09e4c950.js","assets/Text.db500d81.js","assets/index.fe4847f6.js","assets/SyncOutlined.d15dafcc.js","assets/CrudView.66515e1d.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.f11c648c.js"),["assets/TableEditor.f11c648c.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/tables.ce228008.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/string.954ba712.js","assets/BaseLayout.f3fce1d9.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.706ab9bd.js","assets/popupNotifcation.88303055.js","assets/icons.a3022b2c.js","assets/project.62dfece1.js","assets/index.d2d7be3d.js","assets/index.824ea449.js","assets/Form.28044722.js","assets/hasIn.076802f3.js","assets/index.d08f3475.js","assets/index.7ca43790.js","assets/isNumeric.75337b1e.js","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/Modal.8ee684fd.js","assets/Base.75ec815b.js","assets/Typography.12f99910.js","assets/LoadingOutlined.6dcac1cb.js","assets/index.6b4f5d7c.js","assets/DeleteOutlined.770dadea.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.7f2d521c.js","assets/index.7405a791.js","assets/organization.2e6d590e.js","assets/index.0a6123b8.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.6bd55245.js"),["assets/ConnectorEditor.6bd55245.js","assets/outputWidgets.6eb42f16.js","assets/outputWidgets.37c4b859.css","assets/BaseLayout.f3fce1d9.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.706ab9bd.js","assets/index.7e4d6141.js","assets/index.cf4c23b9.js","assets/record.d64cbdad.js","assets/pubsub.93b23055.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.fe9434a9.js","assets/ant-design.2abdbaaf.js","assets/index.d4420d6b.js","assets/Modal.8ee684fd.js","assets/Typography.12f99910.js","assets/Link.fe0d887b.js","assets/Base.75ec815b.js","assets/SaveButton.13ece1cb.css","assets/project.62dfece1.js","assets/connector.93d27b58.js","assets/organization.2e6d590e.js","assets/TabPane.4d5d6eb4.js","assets/hasIn.076802f3.js","assets/index.0a6123b8.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.28044722.js","assets/index.7405a791.js","assets/popupNotifcation.88303055.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,E as C,z as a,i as b,f as r};
//# sourceMappingURL=router.276a04d9.js.map
