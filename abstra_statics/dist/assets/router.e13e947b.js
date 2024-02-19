var b=Object.defineProperty;var T=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as R,R as v}from"./FormItem.8c320cae.js";import{E as y,cT as E,S as l,t as I,g as O,h as A,_ as n,i as P}from"./outputWidgets.cdb991c0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="783f339c-98d4-4ef4-be6b-552288416fa7",o._sentryDebugIdIdentifier="sentry-dbid-783f339c-98d4-4ef4-be6b-552288416fa7")}catch{}})();const U=y(R),J=y(v);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"29855b90b7e62d46b8b3df18be08551cbc9f5534",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class _ extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new _(e,t.status)}}class f{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await _.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await _.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await _.fromResponse(e)}}const m=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await f.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(m.key,t)}getJWT(){return l.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,w=O({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.4a729b52.js"),["assets/WidgetPreview.4a729b52.js","assets/ActionButton.386ea3be.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.5787ecf2.js"),["assets/Login.5787ecf2.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/member.d27608ad.js","assets/WidgetsFrame.a0b027fc.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Login.f9c7607e.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.6ccbee29.js"),["assets/ReturnApiKey.6ccbee29.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/apiKey.de58cb74.js","assets/project.e62ba66c.js","assets/organization.53b96577.js","assets/asyncComputed.08afc622.js","assets/Title.7c191db2.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Paragraph.0cc4d62c.js","assets/Text.b9fe0916.js","assets/index.9679f407.js","assets/Modal.278e21fc.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.2ba3ed0e.js"),["assets/Organizations.2ba3ed0e.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/asyncComputed.08afc622.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/organization.53b96577.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ac132504.js","assets/logo.084e5d7c.js","assets/Text.b9fe0916.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.e784275f.js","assets/Navbar.f4a98ea3.css","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.f9d006ee.js"),["assets/Organization.f9d006ee.js","assets/Sidebar.39706e7d.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/index.f5c37cf3.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.ac132504.js","assets/logo.084e5d7c.js","assets/asyncComputed.08afc622.js","assets/Text.b9fe0916.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.e784275f.js","assets/Navbar.f4a98ea3.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/organization.53b96577.js","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.5f3340df.js"),["assets/Projects.5f3340df.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/project.e62ba66c.js","assets/organization.53b96577.js","assets/CrudView.0b27b336.js","assets/icons.6cfd480b.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.ded9d9b3.js"),["assets/OrganizationSettings.ded9d9b3.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.e3156e27.js"),["assets/Members.e3156e27.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/member.d27608ad.js","assets/CrudView.0b27b336.js","assets/icons.6cfd480b.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.bed697c4.js"),["assets/Billing.bed697c4.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/organization.53b96577.js","assets/asyncComputed.08afc622.js","assets/Title.7c191db2.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.a9cbb60d.js","assets/index.1838b30e.js","assets/Text.b9fe0916.js","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/FormItem.8c320cae.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.bf5a6c3b.js"),["assets/Project.bf5a6c3b.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.08afc622.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/project.e62ba66c.js","assets/organization.53b96577.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ac132504.js","assets/logo.084e5d7c.js","assets/Text.b9fe0916.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.e784275f.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.39706e7d.js","assets/icons.6cfd480b.js","assets/index.f5c37cf3.js","assets/Sidebar.055402cc.css","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.be7cd149.js"),["assets/Live.be7cd149.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/build.559e803a.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/project.e62ba66c.js","assets/CrudView.0b27b336.js","assets/icons.6cfd480b.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3e480fcb.js","assets/CheckCircleFilled.035c05db.js","assets/index.9679f407.js","assets/Link.530be3b8.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.83d0f78c.js"),["assets/Builds.83d0f78c.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.08afc622.js","assets/build.559e803a.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/project.e62ba66c.js","assets/CrudView.0b27b336.js","assets/icons.6cfd480b.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/index.a4c63802.js","assets/datetime.8207866e.js","assets/Builds.e8faf4b0.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.16237a50.js"),["assets/Connectors.16237a50.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/connector.2a4a4957.js","assets/asyncComputed.08afc622.js","assets/icons.6cfd480b.js","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.db82b620.js"),["assets/Tables.db82b620.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/asyncComputed.08afc622.js","assets/tables.aae86a6a.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/string.35974c9f.js","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css"])},{path:"sql",name:"sql",component:()=>n(()=>import("./Sql.a3aa8b25.js"),["assets/Sql.a3aa8b25.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/project.e62ba66c.js","assets/toggleHighContrast.8685e029.js","assets/toggleHighContrast.30d77c87.css","assets/index.a9cbb60d.js","assets/index.9679f407.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Sql.3405ff47.css"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.745aa580.js"),["assets/ApiKeys.745aa580.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/asyncComputed.08afc622.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/member.d27608ad.js","assets/apiKey.de58cb74.js","assets/project.e62ba66c.js","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.80e4bff4.js"),["assets/Logs.80e4bff4.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/build.559e803a.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3e480fcb.js","assets/CheckCircleFilled.035c05db.js","assets/datetime.8207866e.js","assets/dayjs.1cfbce06.js","assets/index.721e5224.js","assets/index.f5c37cf3.js","assets/Title.7c191db2.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.9679f407.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/CollapsePanel.27924a08.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.184873d3.js"),["assets/LegacyLogs.184873d3.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/StarFilled.fad29e50.js","assets/Timeline.969823d9.js","assets/CheckCircleFilled.035c05db.js","assets/build.559e803a.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/asyncComputed.08afc622.js","assets/Title.7c191db2.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/index.9679f407.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/dayjs.1cfbce06.js","assets/index.721e5224.js","assets/index.f5c37cf3.js","assets/Form.b3aa2dbb.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.43c26f22.js"),["assets/ProjectSettings.43c26f22.js","assets/asyncComputed.08afc622.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/project.e62ba66c.js","assets/Title.7c191db2.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/Paragraph.0cc4d62c.js","assets/Text.b9fe0916.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.8d0402da.js"),["assets/EnvVars.8d0402da.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/icons.6cfd480b.js","assets/asyncComputed.08afc622.js","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.c84e8098.js"),["assets/Files.c84e8098.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/asyncComputed.08afc622.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/popupNotifcation.6f3f8a75.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.7c191db2.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/Paragraph.0cc4d62c.js","assets/Card.bd5c0234.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/FormItem.8c320cae.js","assets/Files.1001d74a.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.6301b421.js"),["assets/Users.6301b421.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/icons.6cfd480b.js","assets/asyncComputed.08afc622.js","assets/contracts.generated.dedff81b.js","assets/index.cf4c23b9.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/Form.b3aa2dbb.js","assets/index.68d11e47.js","assets/isNumeric.75337b1e.js","assets/index.3ef69355.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/CrudView.0b27b336.js","assets/Paragraph.0cc4d62c.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/Modal.278e21fc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9cce69d.js","assets/url.89f36b88.js","assets/index.a9cbb60d.js","assets/Title.7c191db2.js","assets/Text.b9fe0916.js","assets/index.f5c37cf3.js","assets/CrudView.9de44552.css","assets/popupNotifcation.6f3f8a75.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.7bb373a9.js"),["assets/TableEditor.7bb373a9.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/tables.aae86a6a.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/string.35974c9f.js","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.08afc622.js","assets/popupNotifcation.6f3f8a75.js","assets/index.1838b30e.js","assets/Form.b3aa2dbb.js","assets/FormItem.8c320cae.js","assets/hasIn.070ddd79.js","assets/index.68d11e47.js","assets/isNumeric.75337b1e.js","assets/project.e62ba66c.js","assets/organization.53b96577.js","assets/icons.6cfd480b.js","assets/index.450a67e7.js","assets/CircularLoading.12f1c8d2.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.2a290f49.js","assets/index.e784275f.js","assets/Base.5a2bfd95.js","assets/Typography.bbe6290b.js","assets/TableEditor.1138d18e.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.1c9734ab.js"),["assets/ConnectorEditor.1c9734ab.js","assets/outputWidgets.cdb991c0.js","assets/outputWidgets.20866a94.css","assets/BaseLayout.7e6a9b75.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.08afc622.js","assets/index.3ef69355.js","assets/index.cf4c23b9.js","assets/record.a11516e2.js","assets/pubsub.83305973.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d85617a7.js","assets/ant-design.4dce9129.js","assets/index.7cf1e840.js","assets/Modal.278e21fc.js","assets/Typography.bbe6290b.js","assets/Link.530be3b8.js","assets/Base.5a2bfd95.js","assets/SaveButton.13ece1cb.css","assets/project.e62ba66c.js","assets/connector.2a4a4957.js","assets/organization.53b96577.js","assets/TabPane.2a290f49.js","assets/hasIn.070ddd79.js","assets/index.e784275f.js","assets/Form.b3aa2dbb.js","assets/FormItem.8c320cae.js","assets/index.1838b30e.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,f as C,J as a,i as b,w as r};
//# sourceMappingURL=router.e13e947b.js.map
