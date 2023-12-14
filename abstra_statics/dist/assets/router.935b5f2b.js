var f=Object.defineProperty;var I=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var _=(o,e,t)=>(I(o,typeof e!="symbol"?e+"":e,t),t);import{F as r,C as g}from"./Form.3a6f0ba4.js";import{aU as y,cp as m,D as w,cU as d,S as p,q as v,g as b,h as R,_ as a}from"./outputWidgets.63c887f3.js";import{u as T}from"./index.397e58b6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="826e34ec-84ce-45aa-913a-680cff5d7c1c",o._sentryDebugIdIdentifier="sentry-dbid-826e34ec-84ce-45aa-913a-680cff5d7c1c")}catch{}})();r.useInjectFormItemContext=y;r.ItemRest=m;r.install=function(o){return o.component(r.name,r),o.component(r.Item.name,r.Item),o.component(m.name,m),o};const S=w(g),P=()=>window.location.host.includes(".abstra.io"),O={authn:"/api/authn","cloud-api":"/api/cloud-api"},L={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},u=o=>{const e="VITE_"+d.toUpper(d.snakeCase(o)),t={VITE_SENTRY_RELEASE:"4f14526f16fb83af3fae2da2c09d1f8f7987e65f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||(P()?O[o]:L[o])},h={authn:u("authn"),cloudApi:u("cloud-api")};class E{static async trackSession(e){const t=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||t.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:e})})}static async trackPageView(e){const t=Object.fromEntries(document.cookie.split("; ").map(i=>i.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||t.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:e,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const s=class{async authenticate(e){try{const t=await fetch(`${h.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok)throw new Error(await t.text());return null}catch(t){return t.message}}async verify(e,t){const n=await fetch(`${h.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:t})});if(!n.ok)throw new Error(await n.text());const i=await n.json();return this.saveJWT(i.jwt),E.trackSession(e),this.getAuthor()}saveJWT(e){p.set(s.key,e)}getJWT(){return p.get(s.key)}getAuthor(){const e=this.getJWT();if(e)try{const t=v(e);if(t.exp&&t.exp>Date.now()/1e3)return{jwt:e,claims:t}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){p.remove(s.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let c=s;_(c,"key","abstracloud:auth:jwt");const A=new c,l=b({history:R("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>a(()=>import("./WidgetPreview.c761bc9a.js"),["assets/WidgetPreview.c761bc9a.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.dd36d6fa.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.d2a068d4.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>a(()=>import("./Login.8cb975be.js"),["assets/Login.8cb975be.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/member.aaffbb20.js","assets/gateway.b66dc8b1.js","assets/icons.cc357010.js","assets/CircularLoading.a86cd198.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.d2a068d4.js","assets/WidgetsFrame.97ae601d.css","assets/Form.3a6f0ba4.js","assets/index.397e58b6.js","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.2691dd41.js"),["assets/ReturnApiKey.2691dd41.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/apiKey.5102123a.js","assets/project.dece335c.js","assets/organization.a18b427e.js","assets/asyncComputed.c163afad.js","assets/Title.2207c510.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/index.397e58b6.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.4fceaab0.js"),["assets/Organizations.4fceaab0.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/organization.a18b427e.js","assets/Navbar.vue_vue_type_script_setup_true_lang.cc56fb42.js","assets/logo.084e5d7c.js","assets/index.968a957b.js","assets/Title.2207c510.js","assets/index.8afa5475.js","assets/Navbar.f4a98ea3.css","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/index.397e58b6.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.3f50518a.js"),["assets/Organization.3f50518a.js","assets/Sidebar.45810f04.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/Tooltip.9e18677b.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Navbar.vue_vue_type_script_setup_true_lang.cc56fb42.js","assets/logo.084e5d7c.js","assets/asyncComputed.c163afad.js","assets/index.968a957b.js","assets/Title.2207c510.js","assets/index.8afa5475.js","assets/Navbar.f4a98ea3.css","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/organization.a18b427e.js","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/Form.3a6f0ba4.js","assets/index.397e58b6.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.e0e3f808.js"),["assets/Projects.e0e3f808.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/project.dece335c.js","assets/organization.a18b427e.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/index.397e58b6.js"])},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.05e0334f.js"),["assets/OrganizationSettings.05e0334f.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css"])},{path:"members",name:"members",component:()=>a(()=>import("./Members.c2e45c72.js"),["assets/Members.c2e45c72.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/member.aaffbb20.js","assets/CrudView.02f2f455.js","assets/icons.cc357010.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/index.397e58b6.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.95618986.js"),["assets/Project.95618986.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/project.dece335c.js","assets/organization.a18b427e.js","assets/Navbar.vue_vue_type_script_setup_true_lang.cc56fb42.js","assets/logo.084e5d7c.js","assets/index.968a957b.js","assets/Title.2207c510.js","assets/index.8afa5475.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.45810f04.js","assets/icons.cc357010.js","assets/Tooltip.9e18677b.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Form.3a6f0ba4.js","assets/index.397e58b6.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.b6161bb0.js"),["assets/Live.b6161bb0.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/asyncComputed.c163afad.js","assets/build.47c8c91c.js","assets/gateway.b66dc8b1.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/project.dece335c.js","assets/component.vue_vue_type_script_setup_true_lang.ad3e81d0.js","assets/Log.9054a061.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/index.c128cc7d.js","assets/Log.6c2e406b.css","assets/WarningFilled.d99917ef.js","assets/index.8afa5475.js","assets/index.397e58b6.js","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/index.6bf58bb7.js","assets/index.968a957b.js","assets/TabPane.6741fe4b.js","assets/Form.3a6f0ba4.js","assets/icons.cc357010.js","assets/index.1e7c0edf.js","assets/component.5b48d29d.css"])},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.6023b14a.js"),["assets/Builds.6023b14a.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/index.397e58b6.js","assets/asyncComputed.c163afad.js","assets/build.47c8c91c.js","assets/gateway.b66dc8b1.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/project.dece335c.js","assets/CrudView.02f2f455.js","assets/icons.cc357010.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.b7c49261.js"),["assets/Connectors.b7c49261.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/connector.b5a666f7.js","assets/asyncComputed.c163afad.js","assets/icons.cc357010.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/index.397e58b6.js"])},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.0f96d1d5.js"),["assets/Tables.0f96d1d5.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/tables.f868d15f.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/index.3a2d2c29.js","assets/gateway.b66dc8b1.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/index.397e58b6.js"])},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.c7c6fa04.js"),["assets/ApiKeys.c7c6fa04.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/index.397e58b6.js","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/member.aaffbb20.js","assets/apiKey.5102123a.js","assets/project.dece335c.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css"])},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.39a6b916.js"),["assets/Logs.39a6b916.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/Log.9054a061.js","assets/gateway.b66dc8b1.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/index.c128cc7d.js","assets/Log.6c2e406b.css","assets/index.397e58b6.js","assets/build.47c8c91c.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/asyncComputed.c163afad.js","assets/dayjs.b6f5df34.js","assets/index.7d481dd0.js","assets/index.3ee8c662.js","assets/Form.3a6f0ba4.js"])},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.828aa823.js"),["assets/ProjectSettings.828aa823.js","assets/asyncComputed.c163afad.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/project.dece335c.js","assets/Title.2207c510.js","assets/index.8afa5475.js","assets/index.3ee8c662.js","assets/Form.3a6f0ba4.js","assets/index.397e58b6.js"])},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.6a413bb6.js"),["assets/EnvVars.6a413bb6.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/icons.cc357010.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/index.397e58b6.js"])},{path:"files",name:"files",component:()=>a(()=>import("./Files.0cd7b4cc.js"),["assets/Files.0cd7b4cc.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/gateway.b66dc8b1.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/asyncComputed.c163afad.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/popupNotifcation.989ea2f9.js","assets/DownloadOutlined.e0726fcd.js","assets/index.75c24f3f.js","assets/TabPane.6741fe4b.js","assets/Form.3a6f0ba4.js","assets/index.8afa5475.js","assets/index.397e58b6.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.709f104f.js"),["assets/TableEditor.709f104f.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/tables.f868d15f.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/index.3a2d2c29.js","assets/gateway.b66dc8b1.js","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.c163afad.js","assets/popupNotifcation.989ea2f9.js","assets/index.f7c5414a.js","assets/Form.3a6f0ba4.js","assets/index.6bf58bb7.js","assets/project.dece335c.js","assets/organization.a18b427e.js","assets/icons.cc357010.js","assets/index.2f3bcd61.js","assets/CircularLoading.a86cd198.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.6741fe4b.js","assets/index.968a957b.js","assets/Title.2207c510.js","assets/index.397e58b6.js","assets/TableEditor.01ce8fb6.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.fc7584e3.js"),["assets/ConnectorEditor.fc7584e3.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.c163afad.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/project.dece335c.js","assets/connector.b5a666f7.js","assets/organization.a18b427e.js","assets/TabPane.6741fe4b.js","assets/Form.3a6f0ba4.js","assets/index.968a957b.js","assets/index.f7c5414a.js","assets/index.397e58b6.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>a(()=>import("./Build.c5ea9d78.js"),["assets/Build.c5ea9d78.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.c163afad.js","assets/component.vue_vue_type_script_setup_true_lang.ad3e81d0.js","assets/index.3a2d2c29.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/gateway.b66dc8b1.js","assets/Log.9054a061.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/index.c128cc7d.js","assets/Log.6c2e406b.css","assets/WarningFilled.d99917ef.js","assets/index.8afa5475.js","assets/index.397e58b6.js","assets/index.6bf58bb7.js","assets/index.968a957b.js","assets/TabPane.6741fe4b.js","assets/Form.3a6f0ba4.js","assets/icons.cc357010.js","assets/index.1e7c0edf.js","assets/component.5b48d29d.css","assets/build.47c8c91c.js","assets/project.dece335c.js","assets/organization.a18b427e.js"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});l.beforeEach(async(o,e)=>{T(o,e);const t=A.getAuthor();if(E.trackPageView(t==null?void 0:t.claims.email),!o.meta.allowUnauthenticated&&!t){await l.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{S as A,h as E,A as a,l as r};
//# sourceMappingURL=router.935b5f2b.js.map
