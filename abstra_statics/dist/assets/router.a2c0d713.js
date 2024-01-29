var R=Object.defineProperty;var T=(o,t,e)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as b,R as O}from"./FormItem.3f4ebdd2.js";import{B as y,cO as E,g as v,h as I,_ as n}from"./outputWidgets.5e5b5eb8.js";import{o as A}from"./jwt-decode.esm.74bd4619.js";import{S as l}from"./storage.d3e61e1a.js";import{u as P}from"./index.f308e5c6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="f23c446d-aa42-436d-9d19-68bd503e2e4b",o._sentryDebugIdIdentifier="sentry-dbid-f23c446d-aa42-436d-9d19-68bd503e2e4b")}catch{}})();const B=y(b),x=y(O);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"97ef90099d9dea071e628dce6a829e7582056945",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class f{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await d.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await d.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await d.fromResponse(e)}}const m=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await f.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(m.key,t)}getJWT(){return l.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=A(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;h(_,"key","abstracloud:auth:jwt");const i=new _,w=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.cec2c0c8.js"),["assets/WidgetPreview.cec2c0c8.js","assets/ActionButton.447d16af.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.6e2319d7.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.9b330f1d.js"),["assets/Login.9b330f1d.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/icons.16f302b6.js","assets/CircularLoading.76e333f6.js","assets/CircularLoading.f81b57b4.css","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/member.3dca9d8c.js","assets/WidgetsFrame.6e2319d7.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.218a17fd.js"),["assets/ReturnApiKey.218a17fd.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/apiKey.249840ab.js","assets/project.28354204.js","assets/organization.432ee8db.js","assets/asyncComputed.28dd914c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/index.60fc43eb.js","assets/Modal.2435c150.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.1b0f6ab5.js"),["assets/Organizations.1b0f6ab5.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/icons.16f302b6.js","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/organization.432ee8db.js","assets/Navbar.vue_vue_type_script_setup_true_lang.204a93d6.js","assets/logo.084e5d7c.js","assets/Text.81fc0521.js","assets/index.83dcdbb5.js","assets/Navbar.f4a98ea3.css","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/BaseLayout.6cd8f0ae.js","assets/BaseLayout.881bfa61.css","assets/ant-design.5058d961.js","assets/index.ff544522.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.cbee3872.js"),["assets/Organization.cbee3872.js","assets/Sidebar.90ab8c20.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/icons.16f302b6.js","assets/index.d7d2da12.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.204a93d6.js","assets/logo.084e5d7c.js","assets/asyncComputed.28dd914c.js","assets/Text.81fc0521.js","assets/index.83dcdbb5.js","assets/Navbar.f4a98ea3.css","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/organization.432ee8db.js","assets/BaseLayout.6cd8f0ae.js","assets/BaseLayout.881bfa61.css","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.5257b505.js"),["assets/Projects.5257b505.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/icons.16f302b6.js","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/project.28354204.js","assets/organization.432ee8db.js","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/ant-design.5058d961.js","assets/index.ff544522.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.1d9f8f6e.js"),["assets/OrganizationSettings.1d9f8f6e.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.082997e5.js"),["assets/Members.082997e5.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/asyncComputed.28dd914c.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/member.3dca9d8c.js","assets/CrudView.b2363f7c.js","assets/icons.16f302b6.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/ant-design.5058d961.js","assets/index.ff544522.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.9c6ea659.js"),["assets/Billing.9c6ea659.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/organization.432ee8db.js","assets/asyncComputed.28dd914c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/index.fc4fe0b4.js","assets/index.7e28e3d9.js","assets/Card.d2c742a9.js","assets/TabPane.a0e8fc50.js","assets/hasIn.62b14ba2.js","assets/FormItem.3f4ebdd2.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.1e07f0d8.js"),["assets/Project.1e07f0d8.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/BaseLayout.6cd8f0ae.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/project.28354204.js","assets/organization.432ee8db.js","assets/Navbar.vue_vue_type_script_setup_true_lang.204a93d6.js","assets/logo.084e5d7c.js","assets/Text.81fc0521.js","assets/index.83dcdbb5.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.90ab8c20.js","assets/icons.16f302b6.js","assets/index.d7d2da12.js","assets/Sidebar.055402cc.css","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.c3b0db21.js"),["assets/Live.c3b0db21.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/build.8142be68.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/project.28354204.js","assets/CrudView.b2363f7c.js","assets/icons.16f302b6.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.327ab39b.js","assets/CheckCircleFilled.27d86b3f.js","assets/index.60fc43eb.js","assets/Link.5283b480.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.6f393798.js"),["assets/Builds.6f393798.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/build.8142be68.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/project.28354204.js","assets/CrudView.b2363f7c.js","assets/icons.16f302b6.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/index.eb9dcd33.js","assets/datetime.cb1c2bc1.js","assets/index.f308e5c6.js","assets/storage.d3e61e1a.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.7e3859d4.js"),["assets/Connectors.7e3859d4.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/jwt-decode.esm.74bd4619.js","assets/connector.d8eb8262.js","assets/asyncComputed.28dd914c.js","assets/icons.16f302b6.js","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.82afebb8.js"),["assets/Tables.82afebb8.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/icons.16f302b6.js","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/tables.bd54c5a9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/string.e5fb4029.js","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.0e909bd5.js"),["assets/ApiKeys.0e909bd5.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/index.f308e5c6.js","assets/icons.16f302b6.js","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/member.3dca9d8c.js","assets/apiKey.249840ab.js","assets/project.28354204.js","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/storage.d3e61e1a.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.f7d1899f.js"),["assets/Logs.f7d1899f.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/jwt-decode.esm.74bd4619.js","assets/build.8142be68.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.327ab39b.js","assets/CheckCircleFilled.27d86b3f.js","assets/datetime.cb1c2bc1.js","assets/dayjs.78fc775b.js","assets/index.d5693da6.js","assets/index.d7d2da12.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/index.60fc43eb.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/CollapsePanel.1eea32e8.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.de93e367.js"),["assets/LegacyLogs.de93e367.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/ant-design.5058d961.js","assets/index.ff544522.js","assets/Modal.2435c150.js","assets/StarFilled.fad29e50.js","assets/Timeline.bae418bd.js","assets/CheckCircleFilled.27d86b3f.js","assets/index.f308e5c6.js","assets/jwt-decode.esm.74bd4619.js","assets/build.8142be68.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/asyncComputed.28dd914c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/index.60fc43eb.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/dayjs.78fc775b.js","assets/index.d5693da6.js","assets/index.d7d2da12.js","assets/Form.b258a897.js","assets/storage.d3e61e1a.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.ad4fe792.js"),["assets/ProjectSettings.ad4fe792.js","assets/asyncComputed.28dd914c.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/project.28354204.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a613dc2.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.7370d26a.js"),["assets/EnvVars.7370d26a.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/asyncComputed.28dd914c.js","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/icons.16f302b6.js","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.b7cca09d.js"),["assets/Files.b7cca09d.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/asyncComputed.28dd914c.js","assets/ant-design.5058d961.js","assets/index.ff544522.js","assets/Modal.2435c150.js","assets/popupNotifcation.c8cebea4.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/Card.d2c742a9.js","assets/TabPane.a0e8fc50.js","assets/hasIn.62b14ba2.js","assets/FormItem.3f4ebdd2.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.cbfa655c.js"),["assets/Users.cbfa655c.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/icons.16f302b6.js","assets/asyncComputed.28dd914c.js","assets/index.cf4c23b9.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/Form.b258a897.js","assets/index.6e01df3c.js","assets/isNumeric.75337b1e.js","assets/jwt-decode.esm.74bd4619.js","assets/index.aeec525b.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/CrudView.b2363f7c.js","assets/Title.1467f0db.js","assets/Text.81fc0521.js","assets/Modal.2435c150.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js","assets/url.d4cca15f.js","assets/index.d7d2da12.js","assets/CrudView.4c069239.css","assets/popupNotifcation.c8cebea4.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.97b15ef6.js"),["assets/TableEditor.97b15ef6.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/tables.bd54c5a9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/string.e5fb4029.js","assets/BaseLayout.6cd8f0ae.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.28dd914c.js","assets/popupNotifcation.c8cebea4.js","assets/index.7e28e3d9.js","assets/Form.b258a897.js","assets/FormItem.3f4ebdd2.js","assets/hasIn.62b14ba2.js","assets/index.6e01df3c.js","assets/isNumeric.75337b1e.js","assets/jwt-decode.esm.74bd4619.js","assets/project.28354204.js","assets/organization.432ee8db.js","assets/icons.16f302b6.js","assets/index.a2b64677.js","assets/CircularLoading.76e333f6.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.a0e8fc50.js","assets/index.83dcdbb5.js","assets/Text.81fc0521.js","assets/storage.d3e61e1a.js","assets/index.f308e5c6.js","assets/TableEditor.00c1ec33.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.a84be3be.js"),["assets/ConnectorEditor.a84be3be.js","assets/outputWidgets.5e5b5eb8.js","assets/outputWidgets.bd537527.css","assets/BaseLayout.6cd8f0ae.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.28dd914c.js","assets/index.aeec525b.js","assets/index.cf4c23b9.js","assets/record.264bc45b.js","assets/pubsub.2712b93d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6b8919cc.js","assets/ant-design.5058d961.js","assets/index.ff544522.js","assets/Modal.2435c150.js","assets/storage.d3e61e1a.js","assets/Link.5283b480.js","assets/Text.81fc0521.js","assets/index.ee7e1a70.js","assets/Title.1467f0db.js","assets/SaveButton.13ece1cb.css","assets/jwt-decode.esm.74bd4619.js","assets/project.28354204.js","assets/connector.d8eb8262.js","assets/organization.432ee8db.js","assets/TabPane.a0e8fc50.js","assets/hasIn.62b14ba2.js","assets/index.83dcdbb5.js","assets/Form.b258a897.js","assets/FormItem.3f4ebdd2.js","assets/index.7e28e3d9.js","assets/index.f308e5c6.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{B as A,f as C,x as a,i as b,w as r};
//# sourceMappingURL=router.a2c0d713.js.map
