var I=Object.defineProperty;var T=(o,t,e)=>t in o?I(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var w=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as R,R as P}from"./Form.be701021.js";import{E as y,cO as f,S as E,t as O,g as C,h as L,_ as a,i as D}from"./outputWidgets.3d5619ad.js";import{p as V}from"./popupNotifcation.09cf30ee.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="f57228fb-f2fb-4723-99de-2b380ac1dc96",o._sentryDebugIdIdentifier="sentry-dbid-f57228fb-f2fb-4723-99de-2b380ac1dc96")}catch{}})();const N=y(R),W=y(P),s=class{static dispatch(t,e,n=0){window.Intercom?window.Intercom(t,e):n<10?setTimeout(()=>s.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){s.booted||(s.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),s.booted=!0)}static show(){s.dispatch("show")}static hide(){s.dispatch("hide")}static showNewMessage(t){s.dispatch("showNewMessage",t)}static shutdown(){s.dispatch("shutdown")}};let h=s;w(h,"booted",!1);const k=()=>window.location.host.includes(".abstra.io"),j={"cloud-api":"/api/cloud-api"},S={"cloud-api":"https://cloud-api.abstra.cloud"},U=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"84c3f35d917c95f46ac24cd97dd014c562480904",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(k()?j[o]:S[o])},p={cloudApi:U("cloud-api")},d=class{async authenticate(t){try{return await _.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await _.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),v.trackSession(),this.getAuthor()}saveJWT(t){E.set(d.key,t)}getJWT(){return E.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=O(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){E.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let u=d;w(u,"key","abstracloud:auth:jwt");const c=new u;class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class _{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,b])=>b!=null)),r=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){V("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const r=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:r?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await m.fromResponse(n);const r=await n.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}class ${async createSession(t){await _.post("usage/sessions",t)}async trackBrowserEvent(t){await _.post("usage/browser",t)}}const A=new $;class v{static async trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;A.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e})}static async trackPageView(){A.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}})}}const g=C({history:L("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.cf4eaa75.js"),["assets/WidgetPreview.cf4eaa75.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/Steps.7aaf9966.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.f21f2559.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.48b070b9.js"),["assets/Login.48b070b9.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/PhArrowClockwise.vue.c3c9bbe3.js","assets/CircularLoading.17886c10.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.f21f2559.js","assets/WidgetsFrame.13b291ee.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/member.45d80c40.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/popupNotifcation.09cf30ee.js","assets/Login.733ebc2d.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.d7fb56a0.js"),["assets/ReturnApiKey.d7fb56a0.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/apiKey.ec05ba4c.js","assets/project.a317d21c.js","assets/organization.206bc70a.js","assets/asyncComputed.cc7b1589.js","assets/Title.b3ab4882.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/url.f8beadaf.js","assets/Paragraph.8363f717.js","assets/index.db7b0c9a.js","assets/Modal.7a17aa61.js","assets/popupNotifcation.09cf30ee.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.4f5246c1.js"),["assets/Organizations.4f5246c1.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/organization.206bc70a.js","assets/Navbar.8a5774df.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.4c781de5.js","assets/index.171f0aaa.js","assets/index.37f4c83c.js","assets/Text.e765430e.js","assets/BookOutlined.b93080c0.js","assets/Navbar.4c5e8ebc.css","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/BaseLayout.11c7fdac.js","assets/BaseLayout.d7a8431f.css","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/PhArrowSquareOut.vue.1be53a9c.js","assets/PhPencil.vue.d558b34b.js","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.9e93b494.js"),["assets/Organization.9e93b494.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/organization.206bc70a.js","assets/BaseLayout.11c7fdac.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.cc7b1589.js","assets/Sidebar.93af05ee.js","assets/Text.e765430e.js","assets/index.db7b0c9a.js","assets/index.0c246290.js","assets/Sidebar.4bfd151d.css","assets/Navbar.8a5774df.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.4c781de5.js","assets/index.171f0aaa.js","assets/index.37f4c83c.js","assets/BookOutlined.b93080c0.js","assets/Navbar.4c5e8ebc.css","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/popupNotifcation.09cf30ee.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.b29e6fcf.js"),["assets/Projects.b29e6fcf.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/Modal.7a17aa61.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/project.a317d21c.js","assets/organization.206bc70a.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/PhArrowSquareOut.vue.1be53a9c.js","assets/PhPencil.vue.d558b34b.js","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.167a2de1.js"),["assets/OrganizationSettings.167a2de1.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.7d19e947.js"),["assets/Editors.7d19e947.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/member.45d80c40.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.44225156.js"),["assets/Billing.44225156.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/organization.206bc70a.js","assets/asyncComputed.cc7b1589.js","assets/Title.b3ab4882.js","assets/Text.e765430e.js","assets/index.99f8a53d.js","assets/index.1608e241.js","assets/Card.03d78d90.js","assets/index.74df4259.js","assets/TabPane.e26f0571.js","assets/hasIn.0386b140.js","assets/Form.be701021.js","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.d19a054e.js"),["assets/Project.d19a054e.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/BaseLayout.11c7fdac.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.cc7b1589.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/project.a317d21c.js","assets/organization.206bc70a.js","assets/Navbar.8a5774df.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.4c781de5.js","assets/index.171f0aaa.js","assets/index.37f4c83c.js","assets/Text.e765430e.js","assets/BookOutlined.b93080c0.js","assets/Navbar.4c5e8ebc.css","assets/Sidebar.93af05ee.js","assets/index.db7b0c9a.js","assets/index.0c246290.js","assets/Sidebar.4bfd151d.css","assets/PhArrowCounterClockwise.vue.e26ce218.js","assets/PhIdentificationBadge.vue.91046779.js","assets/PhCube.vue.ea729b99.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/popupNotifcation.09cf30ee.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.fc348a36.js"),["assets/Live.fc348a36.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/build.18e6efa3.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/project.a317d21c.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c1ef905d.js","assets/LoadingOutlined.b79ee169.js","assets/PhArrowCounterClockwise.vue.e26ce218.js","assets/PhInfo.vue.563c3d7c.js","assets/index.4bcc4856.js","assets/Link.7f34c4e1.js","assets/popupNotifcation.09cf30ee.js","assets/Live.cb68a2ce.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.75048be2.js"),["assets/Builds.75048be2.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/build.18e6efa3.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/project.a317d21c.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/PhArrowCounterClockwise.vue.e26ce218.js","assets/PhCube.vue.ea729b99.js","assets/PhWebhooksLogo.vue.f24ad430.js","assets/Item.ab81efae.js","assets/index.bcb707b3.js","assets/datetime.3b8339b2.js","assets/CloseCircleOutlined.62537c31.js","assets/LoadingOutlined.b79ee169.js","assets/popupNotifcation.09cf30ee.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.46f4a4bc.js"),["assets/Connectors.46f4a4bc.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/connector.b84897b4.js","assets/asyncComputed.cc7b1589.js","assets/PhPencil.vue.d558b34b.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.0a6a6571.js"),["assets/Tables.0a6a6571.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/PhPencil.vue.d558b34b.js","assets/asyncComputed.cc7b1589.js","assets/tables.919f58db.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/string.2e1479ce.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.3c8b25d7.js"),["assets/Sql.3c8b25d7.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/project.a317d21c.js","assets/toggleHighContrast.2f080925.js","assets/toggleHighContrast.30d77c87.css","assets/index.99f8a53d.js","assets/index.db7b0c9a.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/popupNotifcation.09cf30ee.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.40d6e8ca.js"),["assets/ApiKeys.40d6e8ca.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/member.45d80c40.js","assets/apiKey.ec05ba4c.js","assets/project.a317d21c.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.7ce533ab.js"),["assets/Logs.7ce533ab.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/build.18e6efa3.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.c1ef905d.js","assets/LoadingOutlined.b79ee169.js","assets/datetime.3b8339b2.js","assets/dayjs.2938b351.js","assets/index.982b9ab8.js","assets/index.0c246290.js","assets/Title.b3ab4882.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/CollapsePanel.e5deca98.js","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.c1484fd3.js"),["assets/ProjectSettings.c1484fd3.js","assets/asyncComputed.cc7b1589.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/project.a317d21c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ec68a1e7.js","assets/Title.b3ab4882.js","assets/Text.e765430e.js","assets/Paragraph.8363f717.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.6a6b34f1.js"),["assets/EnvVars.6a6b34f1.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/PhPencil.vue.d558b34b.js","assets/asyncComputed.cc7b1589.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.09cf30ee.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.22f145b1.js"),["assets/Files.22f145b1.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/popupNotifcation.09cf30ee.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/asyncComputed.cc7b1589.js","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.8c2c429c.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.b3ab4882.js","assets/Text.e765430e.js","assets/Paragraph.8363f717.js","assets/Card.03d78d90.js","assets/index.74df4259.js","assets/TabPane.e26f0571.js","assets/hasIn.0386b140.js","assets/Form.be701021.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.37848531.js"),["assets/View.37848531.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.cc7b1589.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/index.2b9e4562.js","assets/isNumeric.75337b1e.js","assets/CrudView.0068fdb2.js","assets/Paragraph.8363f717.js","assets/Text.e765430e.js","assets/Modal.7a17aa61.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js","assets/BookOutlined.b93080c0.js","assets/url.f8beadaf.js","assets/index.99f8a53d.js","assets/Title.b3ab4882.js","assets/index.0c246290.js","assets/CrudView.e8f8f039.css","assets/PhPencil.vue.d558b34b.js","assets/repository.e4d864c0.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/fetch.8e3e4490.js","assets/popupNotifcation.09cf30ee.js","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/TabPane.e26f0571.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.e3d719d4.js"),["assets/TableEditor.e3d719d4.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/tables.919f58db.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/string.2e1479ce.js","assets/BaseLayout.11c7fdac.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.cc7b1589.js","assets/popupNotifcation.09cf30ee.js","assets/project.a317d21c.js","assets/PhCheckCircle.vue.77fafde5.js","assets/index.203b12dd.js","assets/index.6bcd2353.js","assets/Form.be701021.js","assets/hasIn.0386b140.js","assets/index.cde86ec2.js","assets/index.2b9e4562.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.5a9b3ab5.js","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/Modal.7a17aa61.js","assets/Text.e765430e.js","assets/LoadingOutlined.b79ee169.js","assets/index.99f8a53d.js","assets/DeleteOutlined.8c2c429c.js","assets/DeleteOutlined.f8ba9770.js","assets/index.1608e241.js","assets/organization.206bc70a.js","assets/PhPencil.vue.d558b34b.js","assets/index.37f4c83c.js","assets/index.171f0aaa.js","assets/TableEditor.81588151.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.c5a96f14.js"),["assets/ConnectorEditor.c5a96f14.js","assets/outputWidgets.3d5619ad.js","assets/outputWidgets.e406c4a0.css","assets/BaseLayout.11c7fdac.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.cc7b1589.js","assets/index.a54bc491.js","assets/index.cf4c23b9.js","assets/record.835fcdff.js","assets/pubsub.10afa862.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d1b1c949.js","assets/ant-design.53bda13f.js","assets/index.40f044e1.js","assets/Modal.7a17aa61.js","assets/Text.e765430e.js","assets/Link.7f34c4e1.js","assets/SaveButton.13ece1cb.css","assets/project.a317d21c.js","assets/connector.b84897b4.js","assets/organization.206bc70a.js","assets/TabPane.e26f0571.js","assets/hasIn.0386b140.js","assets/index.37f4c83c.js","assets/index.171f0aaa.js","assets/Form.be701021.js","assets/index.1608e241.js","assets/popupNotifcation.09cf30ee.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{D(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(v.trackPageView(),h.boot(e))});export{N as A,_ as C,W as a,c as b,h as c,g as r};
//# sourceMappingURL=router.08aab85c.js.map
