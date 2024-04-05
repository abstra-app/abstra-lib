var v=Object.defineProperty;var T=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var w=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as C}from"./Form.7ed8a386.js";import{E as y,cQ as g,S as E,t as R,g as P,h as O,_ as a,i as L}from"./outputWidgets.96aee116.js";import{p as k}from"./popupNotifcation.67a31726.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="f29c8f69-9610-4b9e-9b82-f3a7b63e768d",o._sentryDebugIdIdentifier="sentry-dbid-f29c8f69-9610-4b9e-9b82-f3a7b63e768d")}catch{}})();const N=y(I),W=y(C),s=class{static dispatch(t,e,n=0){window.Intercom?window.Intercom(t,e):n<10?setTimeout(()=>s.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){s.booted||(s.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),s.booted=!0)}static show(){s.dispatch("show")}static hide(){s.dispatch("hide")}static showNewMessage(t){s.dispatch("showNewMessage",t)}static shutdown(){s.dispatch("shutdown")}};let u=s;w(u,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+g.toUpper(g.snakeCase(o)),e={VITE_SENTRY_RELEASE:"1874d873623671c7f8b201aa8c0e703bcf25782b",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?V[o]:j[o])},p={cloudApi:S("cloud-api")},d=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){E.set(d.key,t)}getJWT(){return E.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){E.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=d;w(_,"key","abstracloud:auth:jwt");const c=new _;class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,f])=>f!=null)),r=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){k("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const r=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:r?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await m.fromResponse(n);const r=await n.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}class U{async createSession(t){await b.post("usage/sessions",t)}async trackBrowserEvent(t){await b.post("usage/browser",t)}}const h=new U;class B{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;h.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){h.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){h.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){h.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const A=P({history:O("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.7ffc24c4.js"),["assets/WidgetPreview.7ffc24c4.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/Steps.2ca8500d.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.d4782678.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.c7ff6287.js"),["assets/Login.c7ff6287.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/PhArrowClockwise.vue.fc448fba.js","assets/CircularLoading.bb7c06fb.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.d4782678.js","assets/WidgetsFrame.13b291ee.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/member.d8243cee.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/popupNotifcation.67a31726.js","assets/Login.80787f68.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.aa6e6a49.js"),["assets/ReturnApiKey.aa6e6a49.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/apiKey.38bc85f2.js","assets/project.7da6e6c4.js","assets/organization.49e5ab88.js","assets/asyncComputed.4fee1090.js","assets/Title.ac2145d9.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/url.710cff03.js","assets/Paragraph.e53262a2.js","assets/index.398c450d.js","assets/Modal.6ac123a9.js","assets/popupNotifcation.67a31726.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.b3bb8a95.js"),["assets/Organizations.b3bb8a95.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/organization.49e5ab88.js","assets/Navbar.8fb38f7c.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.b05ad4c9.js","assets/Text.2bc30457.js","assets/index.aeede8bb.js","assets/index.8ac11a66.js","assets/BookOutlined.9255dab1.js","assets/Navbar.4c5e8ebc.css","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/BaseLayout.cddc6ffe.js","assets/BaseLayout.d7a8431f.css","assets/ant-design.5a22a12c.js","assets/index.20bdee0b.js","assets/PhArrowSquareOut.vue.b6184325.js","assets/PhPencil.vue.645c20b5.js","assets/popupNotifcation.67a31726.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.c7bed3b8.js"),["assets/Organization.c7bed3b8.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/organization.49e5ab88.js","assets/BaseLayout.cddc6ffe.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.4fee1090.js","assets/Sidebar.a1252b33.js","assets/Text.2bc30457.js","assets/index.398c450d.js","assets/index.478bc192.js","assets/Sidebar.4bfd151d.css","assets/Navbar.8fb38f7c.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.b05ad4c9.js","assets/index.aeede8bb.js","assets/index.8ac11a66.js","assets/BookOutlined.9255dab1.js","assets/Navbar.4c5e8ebc.css","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/popupNotifcation.67a31726.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.dd2d269a.js"),["assets/Projects.dd2d269a.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/ant-design.5a22a12c.js","assets/index.20bdee0b.js","assets/Modal.6ac123a9.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/project.7da6e6c4.js","assets/organization.49e5ab88.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/PhArrowSquareOut.vue.b6184325.js","assets/PhPencil.vue.645c20b5.js","assets/popupNotifcation.67a31726.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.997595f8.js"),["assets/OrganizationSettings.997595f8.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.01bb089a.js"),["assets/Editors.01bb089a.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/member.d8243cee.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/ant-design.5a22a12c.js","assets/index.20bdee0b.js","assets/popupNotifcation.67a31726.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.4b7c884b.js"),["assets/Billing.4b7c884b.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/organization.49e5ab88.js","assets/asyncComputed.4fee1090.js","assets/Title.ac2145d9.js","assets/Text.2bc30457.js","assets/index.707e9bf9.js","assets/index.90c5842f.js","assets/Card.98c41cd0.js","assets/index.901c5098.js","assets/TabPane.a7088680.js","assets/hasIn.6dd7b6cd.js","assets/Form.7ed8a386.js","assets/popupNotifcation.67a31726.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.d0bcb7ed.js"),["assets/Project.d0bcb7ed.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/BaseLayout.cddc6ffe.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.4fee1090.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/project.7da6e6c4.js","assets/organization.49e5ab88.js","assets/Navbar.8fb38f7c.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.b05ad4c9.js","assets/Text.2bc30457.js","assets/index.aeede8bb.js","assets/index.8ac11a66.js","assets/BookOutlined.9255dab1.js","assets/Navbar.4c5e8ebc.css","assets/Sidebar.a1252b33.js","assets/index.398c450d.js","assets/index.478bc192.js","assets/Sidebar.4bfd151d.css","assets/PhArrowCounterClockwise.vue.2cc3b520.js","assets/PhIdentificationBadge.vue.58b3203b.js","assets/PhCube.vue.e4da5660.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/popupNotifcation.67a31726.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.eac65a50.js"),["assets/Live.eac65a50.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/build.dc0fbbb9.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/project.7da6e6c4.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9304901f.js","assets/LoadingOutlined.aa4de11e.js","assets/PhArrowCounterClockwise.vue.2cc3b520.js","assets/PhInfo.vue.6267e0b1.js","assets/index.662cc220.js","assets/Link.728678d6.js","assets/popupNotifcation.67a31726.js","assets/Live.cb68a2ce.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.73066ec3.js"),["assets/Builds.73066ec3.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/build.dc0fbbb9.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/project.7da6e6c4.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/PhArrowCounterClockwise.vue.2cc3b520.js","assets/PhCube.vue.e4da5660.js","assets/PhWebhooksLogo.vue.a85983c5.js","assets/Item.977286aa.js","assets/index.211df165.js","assets/datetime.7552090b.js","assets/ExclamationCircleOutlined.41da8a52.js","assets/CloseCircleOutlined.b5a9c4cc.js","assets/LoadingOutlined.aa4de11e.js","assets/popupNotifcation.67a31726.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.a84c2a9f.js"),["assets/Connectors.a84c2a9f.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/connector.5ddb02b0.js","assets/asyncComputed.4fee1090.js","assets/PhPencil.vue.645c20b5.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.67a31726.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.020f75ac.js"),["assets/Tables.020f75ac.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/PhPencil.vue.645c20b5.js","assets/asyncComputed.4fee1090.js","assets/tables.552f9a3b.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/string.c260ca33.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.67a31726.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.ad94502d.js"),["assets/Sql.ad94502d.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/project.7da6e6c4.js","assets/toggleHighContrast.1a24c9e7.js","assets/toggleHighContrast.30d77c87.css","assets/index.707e9bf9.js","assets/index.398c450d.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/popupNotifcation.67a31726.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.1468857f.js"),["assets/ApiKeys.1468857f.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/member.d8243cee.js","assets/apiKey.38bc85f2.js","assets/project.7da6e6c4.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.67a31726.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.3362e745.js"),["assets/Logs.3362e745.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/build.dc0fbbb9.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.9304901f.js","assets/LoadingOutlined.aa4de11e.js","assets/datetime.7552090b.js","assets/dayjs.784aca68.js","assets/index.03f39fb3.js","assets/index.478bc192.js","assets/Title.ac2145d9.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/CollapsePanel.34c54dcb.js","assets/popupNotifcation.67a31726.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.6057ceb2.js"),["assets/ProjectSettings.6057ceb2.js","assets/asyncComputed.4fee1090.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/project.7da6e6c4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.49a63c88.js","assets/Title.ac2145d9.js","assets/Text.2bc30457.js","assets/Paragraph.e53262a2.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/popupNotifcation.67a31726.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.9edc84cd.js"),["assets/EnvVars.9edc84cd.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/PhPencil.vue.645c20b5.js","assets/asyncComputed.4fee1090.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.67a31726.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.37c9b6fe.js"),["assets/Files.37c9b6fe.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/popupNotifcation.67a31726.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/asyncComputed.4fee1090.js","assets/ant-design.5a22a12c.js","assets/index.20bdee0b.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.5db63e95.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.ac2145d9.js","assets/Text.2bc30457.js","assets/Paragraph.e53262a2.js","assets/Card.98c41cd0.js","assets/index.901c5098.js","assets/TabPane.a7088680.js","assets/hasIn.6dd7b6cd.js","assets/Form.7ed8a386.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.d8f19c92.js"),["assets/View.d8f19c92.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.4fee1090.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/index.15e6c052.js","assets/isNumeric.75337b1e.js","assets/CrudView.fc8d0a2e.js","assets/Paragraph.e53262a2.js","assets/Text.2bc30457.js","assets/Modal.6ac123a9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bd5d53c0.js","assets/BookOutlined.9255dab1.js","assets/url.710cff03.js","assets/index.707e9bf9.js","assets/Title.ac2145d9.js","assets/index.478bc192.js","assets/CrudView.e8f8f039.css","assets/PhPencil.vue.645c20b5.js","assets/repository.87524dfe.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/fetch.a33f4bca.js","assets/popupNotifcation.67a31726.js","assets/ant-design.5a22a12c.js","assets/index.20bdee0b.js","assets/TabPane.a7088680.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.cbff5710.js"),["assets/TableEditor.cbff5710.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/tables.552f9a3b.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/string.c260ca33.js","assets/BaseLayout.cddc6ffe.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.4fee1090.js","assets/popupNotifcation.67a31726.js","assets/project.7da6e6c4.js","assets/PhCheckCircle.vue.0b1c68a1.js","assets/index.30832da4.js","assets/index.6560e0f5.js","assets/Form.7ed8a386.js","assets/hasIn.6dd7b6cd.js","assets/index.d7b9b84d.js","assets/index.15e6c052.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.b6158b42.js","assets/ant-design.5a22a12c.js","assets/index.20bdee0b.js","assets/Modal.6ac123a9.js","assets/Text.2bc30457.js","assets/LoadingOutlined.aa4de11e.js","assets/index.707e9bf9.js","assets/DeleteOutlined.5db63e95.js","assets/DeleteOutlined.f8ba9770.js","assets/index.90c5842f.js","assets/organization.49e5ab88.js","assets/PhPencil.vue.645c20b5.js","assets/index.8ac11a66.js","assets/index.aeede8bb.js","assets/TableEditor.81588151.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.4bf82dbf.js"),["assets/ConnectorEditor.4bf82dbf.js","assets/outputWidgets.96aee116.js","assets/outputWidgets.25fe30e4.css","assets/BaseLayout.cddc6ffe.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.4fee1090.js","assets/index.993a770e.js","assets/index.cf4c23b9.js","assets/record.4eec9618.js","assets/pubsub.20685aef.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ac8d2226.js","assets/UnsavedChangesHandler.b502c90b.js","assets/ExclamationCircleOutlined.41da8a52.js","assets/Modal.6ac123a9.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.2bc30457.js","assets/Link.728678d6.js","assets/project.7da6e6c4.js","assets/connector.5ddb02b0.js","assets/organization.49e5ab88.js","assets/TabPane.a7088680.js","assets/hasIn.6dd7b6cd.js","assets/index.8ac11a66.js","assets/index.aeede8bb.js","assets/Form.7ed8a386.js","assets/index.90c5842f.js","assets/popupNotifcation.67a31726.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});A.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await A.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(B.trackPageView(),u.boot(e))});export{N as A,b as C,B as T,W as a,c as b,u as c,A as r};
//# sourceMappingURL=router.c3eae5f1.js.map
