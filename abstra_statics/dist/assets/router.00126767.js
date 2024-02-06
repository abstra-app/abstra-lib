var T=Object.defineProperty;var b=(o,t,e)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(b(o,typeof t!="symbol"?t+"":t,e),e);import{C as R,R as v}from"./FormItem.8ce8b9e5.js";import{E as y,cT as E,S as l,t as I,g as O,h as A,_ as n,i as P}from"./outputWidgets.690725ea.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="01ddb260-eb42-4656-939f-4ef4598232ac",o._sentryDebugIdIdentifier="sentry-dbid-01ddb260-eb42-4656-939f-4ef4598232ac")}catch{}})();const U=y(R),J=y(v);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"5360ef23863c5dab57113bcddf1e54e4c16d20d6",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class _ extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new _(e,t.status)}}class f{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await _.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await _.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await _.fromResponse(e)}}const d=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await f.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(d.key,t)}getJWT(){return l.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let m=d;h(m,"key","abstracloud:auth:jwt");const i=new m,w=O({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.6513bf01.js"),["assets/WidgetPreview.6513bf01.js","assets/ActionButton.473264e9.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.16e291db.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.b8a892fe.js"),["assets/Login.b8a892fe.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/icons.5f0fc23f.js","assets/CircularLoading.11dacee7.js","assets/CircularLoading.f81b57b4.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/member.be8f0e23.js","assets/WidgetsFrame.16e291db.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.b67aa305.js"),["assets/ReturnApiKey.b67aa305.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/apiKey.dbb6aea8.js","assets/project.c16c58e6.js","assets/organization.7e185dcc.js","assets/asyncComputed.9d26ca90.js","assets/Title.26f5611e.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Paragraph.fd532cb9.js","assets/Text.727522d2.js","assets/index.f655156b.js","assets/Modal.7dcab86e.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.48d8a6be.js"),["assets/Organizations.48d8a6be.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/icons.5f0fc23f.js","assets/asyncComputed.9d26ca90.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/organization.7e185dcc.js","assets/Navbar.vue_vue_type_script_setup_true_lang.dddcb8a3.js","assets/logo.084e5d7c.js","assets/Text.727522d2.js","assets/Base.d416562a.js","assets/index.f77d59a1.js","assets/Navbar.f4a98ea3.css","assets/CrudView.aec9629d.js","assets/Paragraph.fd532cb9.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css","assets/BaseLayout.2aba6ae2.js","assets/BaseLayout.881bfa61.css","assets/ant-design.de48593a.js","assets/index.5452b076.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.037d4803.js"),["assets/Organization.037d4803.js","assets/Sidebar.8d7aa242.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/icons.5f0fc23f.js","assets/index.f9b83c10.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.dddcb8a3.js","assets/logo.084e5d7c.js","assets/asyncComputed.9d26ca90.js","assets/Text.727522d2.js","assets/Base.d416562a.js","assets/index.f77d59a1.js","assets/Navbar.f4a98ea3.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/organization.7e185dcc.js","assets/BaseLayout.2aba6ae2.js","assets/BaseLayout.881bfa61.css","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.7e450b21.js"),["assets/Projects.7e450b21.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/asyncComputed.9d26ca90.js","assets/ant-design.de48593a.js","assets/index.5452b076.js","assets/Modal.7dcab86e.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/project.c16c58e6.js","assets/organization.7e185dcc.js","assets/CrudView.aec9629d.js","assets/icons.5f0fc23f.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.7b3fcdc9.js"),["assets/OrganizationSettings.7b3fcdc9.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.dc1ea270.js"),["assets/Members.dc1ea270.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/asyncComputed.9d26ca90.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/member.be8f0e23.js","assets/CrudView.aec9629d.js","assets/icons.5f0fc23f.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css","assets/ant-design.de48593a.js","assets/index.5452b076.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.f29888b2.js"),["assets/Billing.f29888b2.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/organization.7e185dcc.js","assets/asyncComputed.9d26ca90.js","assets/Title.26f5611e.js","assets/Base.d416562a.js","assets/index.53ecda6a.js","assets/index.5f6cb82d.js","assets/Text.727522d2.js","assets/Card.cef32033.js","assets/TabPane.130bbe30.js","assets/hasIn.228b7c7d.js","assets/FormItem.8ce8b9e5.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.2463513d.js"),["assets/Project.2463513d.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/BaseLayout.2aba6ae2.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.9d26ca90.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/project.c16c58e6.js","assets/organization.7e185dcc.js","assets/Navbar.vue_vue_type_script_setup_true_lang.dddcb8a3.js","assets/logo.084e5d7c.js","assets/Text.727522d2.js","assets/Base.d416562a.js","assets/index.f77d59a1.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.8d7aa242.js","assets/icons.5f0fc23f.js","assets/index.f9b83c10.js","assets/Sidebar.055402cc.css","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.096e818e.js"),["assets/Live.096e818e.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/asyncComputed.9d26ca90.js","assets/build.7a9760d3.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/project.c16c58e6.js","assets/CrudView.aec9629d.js","assets/icons.5f0fc23f.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b1f248de.js","assets/CheckCircleFilled.ab30d757.js","assets/index.f655156b.js","assets/Link.45ecd325.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.64cf6a45.js"),["assets/Builds.64cf6a45.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/asyncComputed.9d26ca90.js","assets/build.7a9760d3.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/project.c16c58e6.js","assets/CrudView.aec9629d.js","assets/icons.5f0fc23f.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css","assets/index.b0dd6e69.js","assets/datetime.d2f7a5ed.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.79d2e996.js"),["assets/Connectors.79d2e996.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/connector.802c4bf4.js","assets/asyncComputed.9d26ca90.js","assets/icons.5f0fc23f.js","assets/CrudView.aec9629d.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.fa30dccb.js"),["assets/Tables.fa30dccb.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/icons.5f0fc23f.js","assets/asyncComputed.9d26ca90.js","assets/tables.e0a55c86.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/string.a7bb71f9.js","assets/CrudView.aec9629d.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css"])},{path:"sql",name:"sql",component:()=>n(()=>import("./Sql.36eba42c.js"),["assets/Sql.36eba42c.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/project.c16c58e6.js","assets/toggleHighContrast.4d421dcf.js","assets/toggleHighContrast.30d77c87.css","assets/index.53ecda6a.js","assets/index.f655156b.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Sql.cebb6025.css"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.cb0f12e1.js"),["assets/ApiKeys.cb0f12e1.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/icons.5f0fc23f.js","assets/asyncComputed.9d26ca90.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/member.be8f0e23.js","assets/apiKey.dbb6aea8.js","assets/project.c16c58e6.js","assets/CrudView.aec9629d.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.9e1a9a07.js"),["assets/Logs.9e1a9a07.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/build.7a9760d3.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b1f248de.js","assets/CheckCircleFilled.ab30d757.js","assets/datetime.d2f7a5ed.js","assets/dayjs.5bb31956.js","assets/index.9dad5250.js","assets/index.f9b83c10.js","assets/Title.26f5611e.js","assets/Base.d416562a.js","assets/index.f655156b.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/CollapsePanel.4346ada9.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.d272a54f.js"),["assets/LegacyLogs.d272a54f.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/ant-design.de48593a.js","assets/index.5452b076.js","assets/Modal.7dcab86e.js","assets/StarFilled.fad29e50.js","assets/Timeline.9c9ffd41.js","assets/CheckCircleFilled.ab30d757.js","assets/build.7a9760d3.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/asyncComputed.9d26ca90.js","assets/Title.26f5611e.js","assets/Base.d416562a.js","assets/index.f655156b.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/dayjs.5bb31956.js","assets/index.9dad5250.js","assets/index.f9b83c10.js","assets/Form.41087773.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.5cc149ca.js"),["assets/ProjectSettings.5cc149ca.js","assets/asyncComputed.9d26ca90.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/project.c16c58e6.js","assets/Title.26f5611e.js","assets/Base.d416562a.js","assets/Paragraph.fd532cb9.js","assets/Text.727522d2.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.c00476c0.js"),["assets/EnvVars.c00476c0.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/icons.5f0fc23f.js","assets/asyncComputed.9d26ca90.js","assets/CrudView.aec9629d.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.f8d42447.js"),["assets/Files.f8d42447.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/asyncComputed.9d26ca90.js","assets/ant-design.de48593a.js","assets/index.5452b076.js","assets/Modal.7dcab86e.js","assets/popupNotifcation.20d37420.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.26f5611e.js","assets/Base.d416562a.js","assets/Paragraph.fd532cb9.js","assets/Card.cef32033.js","assets/TabPane.130bbe30.js","assets/hasIn.228b7c7d.js","assets/FormItem.8ce8b9e5.js","assets/Files.1001d74a.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.043763f3.js"),["assets/Users.043763f3.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/icons.5f0fc23f.js","assets/asyncComputed.9d26ca90.js","assets/contracts.generated.383e724c.js","assets/index.cf4c23b9.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/Form.41087773.js","assets/index.d475861c.js","assets/isNumeric.75337b1e.js","assets/index.6ebcfe10.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/CrudView.aec9629d.js","assets/Paragraph.fd532cb9.js","assets/Base.d416562a.js","assets/Modal.7dcab86e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ba3ce196.js","assets/url.f7604ec4.js","assets/index.53ecda6a.js","assets/Title.26f5611e.js","assets/Text.727522d2.js","assets/index.f9b83c10.js","assets/CrudView.f31d3386.css","assets/popupNotifcation.20d37420.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.0b4110f9.js"),["assets/TableEditor.0b4110f9.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/tables.e0a55c86.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/string.a7bb71f9.js","assets/BaseLayout.2aba6ae2.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.9d26ca90.js","assets/popupNotifcation.20d37420.js","assets/index.5f6cb82d.js","assets/Form.41087773.js","assets/FormItem.8ce8b9e5.js","assets/hasIn.228b7c7d.js","assets/index.d475861c.js","assets/isNumeric.75337b1e.js","assets/project.c16c58e6.js","assets/organization.7e185dcc.js","assets/icons.5f0fc23f.js","assets/index.45a02b60.js","assets/CircularLoading.11dacee7.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.130bbe30.js","assets/index.f77d59a1.js","assets/Base.d416562a.js","assets/TableEditor.1138d18e.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.5bdbf40d.js"),["assets/ConnectorEditor.5bdbf40d.js","assets/outputWidgets.690725ea.js","assets/outputWidgets.27f987db.css","assets/BaseLayout.2aba6ae2.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.9d26ca90.js","assets/index.6ebcfe10.js","assets/index.cf4c23b9.js","assets/record.22b35408.js","assets/pubsub.a600c13f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.556b2467.js","assets/ant-design.de48593a.js","assets/index.5452b076.js","assets/Modal.7dcab86e.js","assets/Base.d416562a.js","assets/Link.45ecd325.js","assets/SaveButton.13ece1cb.css","assets/project.c16c58e6.js","assets/connector.802c4bf4.js","assets/organization.7e185dcc.js","assets/TabPane.130bbe30.js","assets/hasIn.228b7c7d.js","assets/index.f77d59a1.js","assets/Form.41087773.js","assets/FormItem.8ce8b9e5.js","assets/index.5f6cb82d.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,f as C,J as a,i as b,w as r};
//# sourceMappingURL=router.00126767.js.map
