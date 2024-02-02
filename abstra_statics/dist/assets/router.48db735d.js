var T=Object.defineProperty;var R=(o,t,e)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(R(o,typeof t!="symbol"?t+"":t,e),e);import{C as b,R as v}from"./FormItem.b14f4821.js";import{E as y,cT as E,S as l,t as I,g as O,h as A,_ as n,i as P}from"./outputWidgets.78c1e9b1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="80de7ea0-e770-48c4-887a-0d75a375880d",o._sentryDebugIdIdentifier="sentry-dbid-80de7ea0-e770-48c4-887a-0d75a375880d")}catch{}})();const U=y(b),J=y(v);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"7daa1a137ab8cc76c6cba3e393fb462bddef36bd",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class _ extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new _(e,t.status)}}class f{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await _.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await _.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await _.fromResponse(e)}}const d=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await f.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(d.key,t)}getJWT(){return l.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let m=d;h(m,"key","abstracloud:auth:jwt");const i=new m,w=O({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.18227520.js"),["assets/WidgetPreview.18227520.js","assets/ActionButton.18f25b81.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.290ae8c2.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.ba742cf1.js"),["assets/Login.ba742cf1.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/CircularLoading.8df8d997.js","assets/CircularLoading.f81b57b4.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/member.9e28b46d.js","assets/WidgetsFrame.290ae8c2.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.cf0c095c.js"),["assets/ReturnApiKey.cf0c095c.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/apiKey.93997966.js","assets/project.0566a513.js","assets/organization.1a540a47.js","assets/asyncComputed.e28d0df5.js","assets/Title.f2a0eaa6.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Paragraph.cc3be504.js","assets/Text.a54aa716.js","assets/index.61853709.js","assets/Modal.aa10b8fb.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.d433514a.js"),["assets/Organizations.d433514a.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/organization.1a540a47.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b6bc1185.js","assets/logo.084e5d7c.js","assets/Text.a54aa716.js","assets/Base.4c609d7d.js","assets/index.66c0d96d.js","assets/Navbar.f4a98ea3.css","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css","assets/BaseLayout.f165dc24.js","assets/BaseLayout.881bfa61.css","assets/ant-design.95227feb.js","assets/index.9c8f68c7.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.7a05936e.js"),["assets/Organization.7a05936e.js","assets/Sidebar.eb1ed42b.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/index.f874e2d8.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.b6bc1185.js","assets/logo.084e5d7c.js","assets/asyncComputed.e28d0df5.js","assets/Text.a54aa716.js","assets/Base.4c609d7d.js","assets/index.66c0d96d.js","assets/Navbar.f4a98ea3.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/organization.1a540a47.js","assets/BaseLayout.f165dc24.js","assets/BaseLayout.881bfa61.css","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.1e57fedf.js"),["assets/Projects.1e57fedf.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/project.0566a513.js","assets/organization.1a540a47.js","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css","assets/ant-design.95227feb.js","assets/index.9c8f68c7.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.fedc620d.js"),["assets/OrganizationSettings.fedc620d.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.2396ad10.js"),["assets/Members.2396ad10.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/member.9e28b46d.js","assets/CrudView.1b1ffe82.js","assets/icons.b044caed.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css","assets/ant-design.95227feb.js","assets/index.9c8f68c7.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.6b7b4d9f.js"),["assets/Billing.6b7b4d9f.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/organization.1a540a47.js","assets/asyncComputed.e28d0df5.js","assets/Title.f2a0eaa6.js","assets/Base.4c609d7d.js","assets/index.5ddcc632.js","assets/index.6ab3cd15.js","assets/Text.a54aa716.js","assets/Card.0970abd9.js","assets/TabPane.ab870ff2.js","assets/hasIn.249cb62a.js","assets/FormItem.b14f4821.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.c85db808.js"),["assets/Project.c85db808.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/BaseLayout.f165dc24.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/project.0566a513.js","assets/organization.1a540a47.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b6bc1185.js","assets/logo.084e5d7c.js","assets/Text.a54aa716.js","assets/Base.4c609d7d.js","assets/index.66c0d96d.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.eb1ed42b.js","assets/icons.b044caed.js","assets/index.f874e2d8.js","assets/Sidebar.055402cc.css","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.a2ccd319.js"),["assets/Live.a2ccd319.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/asyncComputed.e28d0df5.js","assets/build.3f518be8.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/project.0566a513.js","assets/CrudView.1b1ffe82.js","assets/icons.b044caed.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.08f40063.js","assets/CheckCircleFilled.59a6d8e6.js","assets/index.61853709.js","assets/Link.614fa96e.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.2c049295.js"),["assets/Builds.2c049295.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/asyncComputed.e28d0df5.js","assets/build.3f518be8.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/project.0566a513.js","assets/CrudView.1b1ffe82.js","assets/icons.b044caed.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css","assets/index.4639f070.js","assets/datetime.eab71f87.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.6b61f1db.js"),["assets/Connectors.6b61f1db.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/connector.9ac0930d.js","assets/asyncComputed.e28d0df5.js","assets/icons.b044caed.js","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.60eca9b4.js"),["assets/Tables.60eca9b4.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/asyncComputed.e28d0df5.js","assets/tables.cd0afda0.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/string.712cf11f.js","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css"])},{path:"sql",name:"sql",component:()=>n(()=>import("./Sql.76ff0780.js"),["assets/Sql.76ff0780.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/project.0566a513.js","assets/toggleHighContrast.5a7c46cb.js","assets/toggleHighContrast.30d77c87.css","assets/index.5ddcc632.js","assets/index.61853709.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Sql.cebb6025.css"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.51d29189.js"),["assets/ApiKeys.51d29189.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/member.9e28b46d.js","assets/apiKey.93997966.js","assets/project.0566a513.js","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.fc24c8f6.js"),["assets/Logs.fc24c8f6.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/build.3f518be8.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.08f40063.js","assets/CheckCircleFilled.59a6d8e6.js","assets/datetime.eab71f87.js","assets/dayjs.30faa6ee.js","assets/index.8f75543f.js","assets/index.f874e2d8.js","assets/Title.f2a0eaa6.js","assets/Base.4c609d7d.js","assets/index.61853709.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/CollapsePanel.8526e373.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.eb45d17b.js"),["assets/LegacyLogs.eb45d17b.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/ant-design.95227feb.js","assets/index.9c8f68c7.js","assets/Modal.aa10b8fb.js","assets/StarFilled.fad29e50.js","assets/Timeline.5395fa1c.js","assets/CheckCircleFilled.59a6d8e6.js","assets/build.3f518be8.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/asyncComputed.e28d0df5.js","assets/Title.f2a0eaa6.js","assets/Base.4c609d7d.js","assets/index.61853709.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/dayjs.30faa6ee.js","assets/index.8f75543f.js","assets/index.f874e2d8.js","assets/Form.2a6686f8.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.004057e3.js"),["assets/ProjectSettings.004057e3.js","assets/asyncComputed.e28d0df5.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/project.0566a513.js","assets/Title.f2a0eaa6.js","assets/Base.4c609d7d.js","assets/Paragraph.cc3be504.js","assets/Text.a54aa716.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.a6fe78ee.js"),["assets/EnvVars.a6fe78ee.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/icons.b044caed.js","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.290128b0.js"),["assets/Files.290128b0.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/asyncComputed.e28d0df5.js","assets/ant-design.95227feb.js","assets/index.9c8f68c7.js","assets/Modal.aa10b8fb.js","assets/popupNotifcation.fcd6aebc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.f2a0eaa6.js","assets/Base.4c609d7d.js","assets/Paragraph.cc3be504.js","assets/Card.0970abd9.js","assets/TabPane.ab870ff2.js","assets/hasIn.249cb62a.js","assets/FormItem.b14f4821.js","assets/Files.1001d74a.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.d25d713b.js"),["assets/Users.d25d713b.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/icons.b044caed.js","assets/asyncComputed.e28d0df5.js","assets/contracts.generated.d2ff55d6.js","assets/index.cf4c23b9.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/Form.2a6686f8.js","assets/index.5f77198d.js","assets/isNumeric.75337b1e.js","assets/index.a3a30154.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/CrudView.1b1ffe82.js","assets/Paragraph.cc3be504.js","assets/Base.4c609d7d.js","assets/Modal.aa10b8fb.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js","assets/url.7d81a83b.js","assets/index.5ddcc632.js","assets/Title.f2a0eaa6.js","assets/Text.a54aa716.js","assets/index.f874e2d8.js","assets/CrudView.f31d3386.css","assets/popupNotifcation.fcd6aebc.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.283450c7.js"),["assets/TableEditor.283450c7.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/tables.cd0afda0.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/string.712cf11f.js","assets/BaseLayout.f165dc24.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.e28d0df5.js","assets/popupNotifcation.fcd6aebc.js","assets/index.6ab3cd15.js","assets/Form.2a6686f8.js","assets/FormItem.b14f4821.js","assets/hasIn.249cb62a.js","assets/index.5f77198d.js","assets/isNumeric.75337b1e.js","assets/project.0566a513.js","assets/organization.1a540a47.js","assets/icons.b044caed.js","assets/index.4db96b5d.js","assets/CircularLoading.8df8d997.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.ab870ff2.js","assets/index.66c0d96d.js","assets/Base.4c609d7d.js","assets/TableEditor.1138d18e.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.c4962fc3.js"),["assets/ConnectorEditor.c4962fc3.js","assets/outputWidgets.78c1e9b1.js","assets/outputWidgets.50805c8a.css","assets/BaseLayout.f165dc24.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.e28d0df5.js","assets/index.a3a30154.js","assets/index.cf4c23b9.js","assets/record.d42823f9.js","assets/pubsub.788d3547.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.25e30ec9.js","assets/ant-design.95227feb.js","assets/index.9c8f68c7.js","assets/Modal.aa10b8fb.js","assets/Base.4c609d7d.js","assets/Link.614fa96e.js","assets/SaveButton.13ece1cb.css","assets/project.0566a513.js","assets/connector.9ac0930d.js","assets/organization.1a540a47.js","assets/TabPane.ab870ff2.js","assets/hasIn.249cb62a.js","assets/index.66c0d96d.js","assets/Form.2a6686f8.js","assets/FormItem.b14f4821.js","assets/index.6ab3cd15.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,f as C,J as a,i as b,w as r};
//# sourceMappingURL=router.48db735d.js.map
