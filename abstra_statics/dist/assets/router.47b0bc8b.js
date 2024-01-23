var R=Object.defineProperty;var T=(o,t,e)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as b,R as O}from"./FormItem.50118563.js";import{B as y,cO as f,g as v,h as I,_ as n}from"./outputWidgets.fe113f7b.js";import{o as A}from"./jwt-decode.esm.74bd4619.js";import{S as l}from"./storage.9f75c9f6.js";import{u as P}from"./index.c61b2369.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="d73df1c4-9005-496e-8936-e4a42fa8e3bd",o._sentryDebugIdIdentifier="sentry-dbid-d73df1c4-9005-496e-8936-e4a42fa8e3bd")}catch{}})();const B=y(b),x=y(O);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"dbaefeadefe25cde64e24dafcaf7af6d2b37c604",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class E{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await d.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await d.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await d.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await E.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(m.key,t)}getJWT(){return l.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=A(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;h(_,"key","abstracloud:auth:jwt");const i=new _,w=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.17e134b3.js"),["assets/WidgetPreview.17e134b3.js","assets/ActionButton.e55c54aa.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.3f7eec6c.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.034dd787.js"),["assets/Login.034dd787.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/icons.2a688792.js","assets/CircularLoading.f0e2a1be.js","assets/CircularLoading.f81b57b4.css","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/member.e2e3b3a7.js","assets/WidgetsFrame.3f7eec6c.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.faf03760.js"),["assets/ReturnApiKey.faf03760.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/apiKey.ff7c3624.js","assets/project.909fcb99.js","assets/organization.1fb79188.js","assets/asyncComputed.2b7343b2.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/index.ea96a36d.js","assets/Modal.5aa203cc.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.1e9ce6c4.js"),["assets/Organizations.1e9ce6c4.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/icons.2a688792.js","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/organization.1fb79188.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ef684c5e.js","assets/logo.084e5d7c.js","assets/Text.3d9cbdb1.js","assets/index.f1ee6e7f.js","assets/Navbar.f4a98ea3.css","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/BaseLayout.c885bf48.js","assets/BaseLayout.881bfa61.css","assets/ant-design.f8c85289.js","assets/index.495b0b79.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.a16db19b.js"),["assets/Organization.a16db19b.js","assets/Sidebar.44b9e936.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/icons.2a688792.js","assets/index.3bdcff3b.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.ef684c5e.js","assets/logo.084e5d7c.js","assets/asyncComputed.2b7343b2.js","assets/Text.3d9cbdb1.js","assets/index.f1ee6e7f.js","assets/Navbar.f4a98ea3.css","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/organization.1fb79188.js","assets/BaseLayout.c885bf48.js","assets/BaseLayout.881bfa61.css","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.808ba371.js"),["assets/Projects.808ba371.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/icons.2a688792.js","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/project.909fcb99.js","assets/organization.1fb79188.js","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/ant-design.f8c85289.js","assets/index.495b0b79.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.48488e2d.js"),["assets/OrganizationSettings.48488e2d.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.dbed633e.js"),["assets/Members.dbed633e.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.2b7343b2.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/member.e2e3b3a7.js","assets/CrudView.1737a4cd.js","assets/icons.2a688792.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/ant-design.f8c85289.js","assets/index.495b0b79.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.31d91604.js"),["assets/Billing.31d91604.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/organization.1fb79188.js","assets/asyncComputed.2b7343b2.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/index.5683669d.js","assets/index.6905a0dd.js","assets/Card.6dfe09e7.js","assets/TabPane.04f2644b.js","assets/hasIn.30a9e3d3.js","assets/FormItem.50118563.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.6d3adba8.js"),["assets/Project.6d3adba8.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.c885bf48.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/project.909fcb99.js","assets/organization.1fb79188.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ef684c5e.js","assets/logo.084e5d7c.js","assets/Text.3d9cbdb1.js","assets/index.f1ee6e7f.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.44b9e936.js","assets/icons.2a688792.js","assets/index.3bdcff3b.js","assets/Sidebar.055402cc.css","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.5b2708d2.js"),["assets/Live.5b2708d2.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/build.a5fa642c.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/project.909fcb99.js","assets/CrudView.1737a4cd.js","assets/icons.2a688792.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.6e63faaa.js","assets/CheckCircleFilled.f5b1edc4.js","assets/index.ea96a36d.js","assets/Link.56eb965f.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js","assets/Live.8870c9e7.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.d7aeff55.js"),["assets/Builds.d7aeff55.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/build.a5fa642c.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/project.909fcb99.js","assets/CrudView.1737a4cd.js","assets/icons.2a688792.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/index.8ea28d86.js","assets/datetime.98d74d61.js","assets/index.c61b2369.js","assets/storage.9f75c9f6.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.5e4c1bb8.js"),["assets/Connectors.5e4c1bb8.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/jwt-decode.esm.74bd4619.js","assets/connector.756258c8.js","assets/asyncComputed.2b7343b2.js","assets/icons.2a688792.js","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.1eec6694.js"),["assets/Tables.1eec6694.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/icons.2a688792.js","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/tables.02ee7c83.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/string.d4d55efd.js","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.9681d740.js"),["assets/ApiKeys.9681d740.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/index.c61b2369.js","assets/icons.2a688792.js","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/member.e2e3b3a7.js","assets/apiKey.ff7c3624.js","assets/project.909fcb99.js","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/storage.9f75c9f6.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.fa1c62bc.js"),["assets/Logs.fa1c62bc.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/build.a5fa642c.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.6e63faaa.js","assets/CheckCircleFilled.f5b1edc4.js","assets/datetime.98d74d61.js","assets/dayjs.130b8263.js","assets/index.140dab81.js","assets/index.3bdcff3b.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/index.ea96a36d.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/CollapsePanel.53ee77a2.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.f3b183f8.js"),["assets/LegacyLogs.f3b183f8.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/ant-design.f8c85289.js","assets/index.495b0b79.js","assets/Modal.5aa203cc.js","assets/StarFilled.fad29e50.js","assets/Timeline.5712f610.js","assets/CheckCircleFilled.f5b1edc4.js","assets/index.c61b2369.js","assets/jwt-decode.esm.74bd4619.js","assets/build.a5fa642c.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/asyncComputed.2b7343b2.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/index.ea96a36d.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/dayjs.130b8263.js","assets/index.140dab81.js","assets/index.3bdcff3b.js","assets/Form.1413c894.js","assets/storage.9f75c9f6.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.d7470af4.js"),["assets/ProjectSettings.d7470af4.js","assets/asyncComputed.2b7343b2.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/project.909fcb99.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3999875e.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.fe22b059.js"),["assets/EnvVars.fe22b059.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.2b7343b2.js","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/icons.2a688792.js","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.0464e127.js"),["assets/Files.0464e127.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/asyncComputed.2b7343b2.js","assets/ant-design.f8c85289.js","assets/index.495b0b79.js","assets/Modal.5aa203cc.js","assets/popupNotifcation.06ea5027.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/Card.6dfe09e7.js","assets/TabPane.04f2644b.js","assets/hasIn.30a9e3d3.js","assets/FormItem.50118563.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.a2b62c2c.js"),["assets/Users.a2b62c2c.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/icons.2a688792.js","assets/asyncComputed.2b7343b2.js","assets/index.cf4c23b9.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/Form.1413c894.js","assets/index.157af688.js","assets/isNumeric.75337b1e.js","assets/jwt-decode.esm.74bd4619.js","assets/index.1b5e2e24.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/CrudView.1737a4cd.js","assets/Title.ef65c104.js","assets/Text.3d9cbdb1.js","assets/Modal.5aa203cc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.93b23035.js","assets/url.84d457c3.js","assets/index.3bdcff3b.js","assets/CrudView.4c069239.css","assets/popupNotifcation.06ea5027.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.e522468d.js"),["assets/TableEditor.e522468d.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/tables.02ee7c83.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/string.d4d55efd.js","assets/BaseLayout.c885bf48.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.2b7343b2.js","assets/popupNotifcation.06ea5027.js","assets/index.6905a0dd.js","assets/Form.1413c894.js","assets/FormItem.50118563.js","assets/hasIn.30a9e3d3.js","assets/index.157af688.js","assets/isNumeric.75337b1e.js","assets/jwt-decode.esm.74bd4619.js","assets/project.909fcb99.js","assets/organization.1fb79188.js","assets/icons.2a688792.js","assets/index.36cbd9c5.js","assets/CircularLoading.f0e2a1be.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.04f2644b.js","assets/index.f1ee6e7f.js","assets/Text.3d9cbdb1.js","assets/storage.9f75c9f6.js","assets/index.c61b2369.js","assets/TableEditor.00c1ec33.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.6d582044.js"),["assets/ConnectorEditor.6d582044.js","assets/outputWidgets.fe113f7b.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.c885bf48.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.2b7343b2.js","assets/index.1b5e2e24.js","assets/index.cf4c23b9.js","assets/record.36043c0b.js","assets/pubsub.d6f5cd50.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.f323e78e.js","assets/ant-design.f8c85289.js","assets/index.495b0b79.js","assets/Modal.5aa203cc.js","assets/storage.9f75c9f6.js","assets/Link.56eb965f.js","assets/Text.3d9cbdb1.js","assets/index.cbb9300d.js","assets/Title.ef65c104.js","assets/SaveButton.13ece1cb.css","assets/jwt-decode.esm.74bd4619.js","assets/project.909fcb99.js","assets/connector.756258c8.js","assets/organization.1fb79188.js","assets/TabPane.04f2644b.js","assets/hasIn.30a9e3d3.js","assets/index.f1ee6e7f.js","assets/Form.1413c894.js","assets/FormItem.50118563.js","assets/index.6905a0dd.js","assets/index.c61b2369.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{B as A,E as C,x as a,i as b,w as r};
//# sourceMappingURL=router.47b0bc8b.js.map
