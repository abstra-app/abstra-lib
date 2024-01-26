var b=Object.defineProperty;var R=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(R(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R as O}from"./FormItem.24f986f1.js";import{B as y,cO as f,g as v,h as I,_ as n}from"./outputWidgets.5236f452.js";import{o as A}from"./jwt-decode.esm.74bd4619.js";import{S as l}from"./storage.5d2f2a07.js";import{u as P}from"./index.1c47a5bc.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="5a773993-2994-492f-a3bf-5c53936e5f8c",o._sentryDebugIdIdentifier="sentry-dbid-5a773993-2994-492f-a3bf-5c53936e5f8c")}catch{}})();const B=y(T),x=y(O);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"98b33aa2b56bd605dea34279e66afdd78276c773",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class E{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await m.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await m.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await m.fromResponse(e)}}const _=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await E.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(_.key,t)}getJWT(){return l.get(_.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=A(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(_.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=_;h(d,"key","abstracloud:auth:jwt");const i=new d,w=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.e9271504.js"),["assets/WidgetPreview.e9271504.js","assets/ActionButton.325313eb.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.eaf0391a.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.2762d22d.js"),["assets/Login.2762d22d.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/member.da27ef30.js","assets/WidgetsFrame.eaf0391a.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.0b8d4203.js"),["assets/ReturnApiKey.0b8d4203.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/apiKey.a34e6ca2.js","assets/project.736e5c7a.js","assets/organization.240138b6.js","assets/asyncComputed.e1308c1a.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/index.2932688c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.742c44ad.js"),["assets/Organizations.742c44ad.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/organization.240138b6.js","assets/Navbar.vue_vue_type_script_setup_true_lang.abfcd8ed.js","assets/logo.084e5d7c.js","assets/Text.8bfc9947.js","assets/index.2eefabd2.js","assets/Navbar.f4a98ea3.css","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.f2b2a57a.js"),["assets/Organization.f2b2a57a.js","assets/Sidebar.7fb553e3.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/index.e103a33c.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.abfcd8ed.js","assets/logo.084e5d7c.js","assets/asyncComputed.e1308c1a.js","assets/Text.8bfc9947.js","assets/index.2eefabd2.js","assets/Navbar.f4a98ea3.css","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/organization.240138b6.js","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.4021fb83.js"),["assets/Projects.4021fb83.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/project.736e5c7a.js","assets/organization.240138b6.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.a7c84a9d.js"),["assets/OrganizationSettings.a7c84a9d.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.7dd522c8.js"),["assets/Members.7dd522c8.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e1308c1a.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/member.da27ef30.js","assets/CrudView.734aaba5.js","assets/icons.fa6f77f2.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.72a1a2b2.js"),["assets/Billing.72a1a2b2.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/organization.240138b6.js","assets/asyncComputed.e1308c1a.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/index.cf2b030a.js","assets/index.6472f5a1.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/FormItem.24f986f1.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.d733d962.js"),["assets/Project.d733d962.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/project.736e5c7a.js","assets/organization.240138b6.js","assets/Navbar.vue_vue_type_script_setup_true_lang.abfcd8ed.js","assets/logo.084e5d7c.js","assets/Text.8bfc9947.js","assets/index.2eefabd2.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.7fb553e3.js","assets/icons.fa6f77f2.js","assets/index.e103a33c.js","assets/Sidebar.055402cc.css","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.d5c3fa32.js"),["assets/Live.d5c3fa32.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/build.b82c90d8.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/project.736e5c7a.js","assets/CrudView.734aaba5.js","assets/icons.fa6f77f2.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c99476e2.js","assets/CheckCircleFilled.b4ebe7d9.js","assets/index.2932688c.js","assets/Link.a9d8fe93.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.16460356.js"),["assets/Builds.16460356.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/build.b82c90d8.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/project.736e5c7a.js","assets/CrudView.734aaba5.js","assets/icons.fa6f77f2.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/index.3cbf9cd3.js","assets/datetime.bedd5879.js","assets/index.1c47a5bc.js","assets/storage.5d2f2a07.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.e975a2e4.js"),["assets/Connectors.e975a2e4.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/jwt-decode.esm.74bd4619.js","assets/connector.d720ccff.js","assets/asyncComputed.e1308c1a.js","assets/icons.fa6f77f2.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.e3a7d2b6.js"),["assets/Tables.e3a7d2b6.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/tables.c3ee3bcb.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/string.e8d72623.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.69d10d32.js"),["assets/ApiKeys.69d10d32.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/index.1c47a5bc.js","assets/icons.fa6f77f2.js","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/member.da27ef30.js","assets/apiKey.a34e6ca2.js","assets/project.736e5c7a.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/storage.5d2f2a07.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.c81dd50b.js"),["assets/Logs.c81dd50b.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/build.b82c90d8.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c99476e2.js","assets/CheckCircleFilled.b4ebe7d9.js","assets/datetime.bedd5879.js","assets/dayjs.57c3cf10.js","assets/index.71de7f8b.js","assets/index.e103a33c.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/index.2932688c.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/CollapsePanel.5e5c8cad.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.c84f6790.js"),["assets/LegacyLogs.c84f6790.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/StarFilled.fad29e50.js","assets/Timeline.fd8f00e3.js","assets/CheckCircleFilled.b4ebe7d9.js","assets/index.1c47a5bc.js","assets/jwt-decode.esm.74bd4619.js","assets/build.b82c90d8.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/asyncComputed.e1308c1a.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/index.2932688c.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/dayjs.57c3cf10.js","assets/index.71de7f8b.js","assets/index.e103a33c.js","assets/Form.57dea4ba.js","assets/storage.5d2f2a07.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.b6f0c51d.js"),["assets/ProjectSettings.b6f0c51d.js","assets/asyncComputed.e1308c1a.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/project.736e5c7a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.7565de61.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.d1f07946.js"),["assets/EnvVars.d1f07946.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e1308c1a.js","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/icons.fa6f77f2.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.48cb64e5.js"),["assets/Files.48cb64e5.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/asyncComputed.e1308c1a.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/popupNotifcation.db8c99c9.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/Card.ace70bd2.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/FormItem.24f986f1.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.5610d5c3.js"),["assets/Users.5610d5c3.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/icons.fa6f77f2.js","assets/asyncComputed.e1308c1a.js","assets/index.cf4c23b9.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/Form.57dea4ba.js","assets/index.6ae3eff7.js","assets/isNumeric.75337b1e.js","assets/jwt-decode.esm.74bd4619.js","assets/index.41a1f2cc.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/CrudView.734aaba5.js","assets/Title.0774fc0e.js","assets/Text.8bfc9947.js","assets/Modal.359c6747.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc34904.js","assets/url.efe60cd3.js","assets/index.e103a33c.js","assets/CrudView.4c069239.css","assets/popupNotifcation.db8c99c9.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.8c4f44cd.js"),["assets/TableEditor.8c4f44cd.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/tables.c3ee3bcb.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/string.e8d72623.js","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.e1308c1a.js","assets/popupNotifcation.db8c99c9.js","assets/index.6472f5a1.js","assets/Form.57dea4ba.js","assets/FormItem.24f986f1.js","assets/hasIn.34b98a74.js","assets/index.6ae3eff7.js","assets/isNumeric.75337b1e.js","assets/jwt-decode.esm.74bd4619.js","assets/project.736e5c7a.js","assets/organization.240138b6.js","assets/icons.fa6f77f2.js","assets/index.f07e04fe.js","assets/CircularLoading.a2541cb5.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.9ac37102.js","assets/index.2eefabd2.js","assets/Text.8bfc9947.js","assets/storage.5d2f2a07.js","assets/index.1c47a5bc.js","assets/TableEditor.00c1ec33.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.d8912ac7.js"),["assets/ConnectorEditor.d8912ac7.js","assets/outputWidgets.5236f452.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.86ffc2c6.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.e1308c1a.js","assets/index.41a1f2cc.js","assets/index.cf4c23b9.js","assets/record.205a12dc.js","assets/pubsub.89e80a8d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.68678376.js","assets/ant-design.7af204c7.js","assets/index.00e6086c.js","assets/Modal.359c6747.js","assets/storage.5d2f2a07.js","assets/Link.a9d8fe93.js","assets/Text.8bfc9947.js","assets/index.39780106.js","assets/Title.0774fc0e.js","assets/SaveButton.13ece1cb.css","assets/jwt-decode.esm.74bd4619.js","assets/project.736e5c7a.js","assets/connector.d720ccff.js","assets/organization.240138b6.js","assets/TabPane.9ac37102.js","assets/hasIn.34b98a74.js","assets/index.2eefabd2.js","assets/Form.57dea4ba.js","assets/FormItem.24f986f1.js","assets/index.6472f5a1.js","assets/index.1c47a5bc.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{B as A,E as C,x as a,i as b,w as r};
//# sourceMappingURL=router.4cfaf83f.js.map
