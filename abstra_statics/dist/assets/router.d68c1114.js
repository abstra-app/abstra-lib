var v=Object.defineProperty;var T=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var w=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as C}from"./Form.b088898a.js";import{E as y,cQ as g,S as E,t as R,g as P,h as O,_ as a,i as L}from"./outputWidgets.e8054ca7.js";import{p as k}from"./popupNotifcation.cbfc2da9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="f5de7771-c91f-4230-8f87-cbb32910fd69",o._sentryDebugIdIdentifier="sentry-dbid-f5de7771-c91f-4230-8f87-cbb32910fd69")}catch{}})();const N=y(I),W=y(C),s=class{static dispatch(t,e,n=0){window.Intercom?window.Intercom(t,e):n<10?setTimeout(()=>s.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){s.booted||(s.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),s.booted=!0)}static show(){s.dispatch("show")}static hide(){s.dispatch("hide")}static showNewMessage(t){s.dispatch("showNewMessage",t)}static shutdown(){s.dispatch("shutdown")}};let u=s;w(u,"booted",!1);const D=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+g.toUpper(g.snakeCase(o)),e={VITE_SENTRY_RELEASE:"f7e8956e81e957e6decf0d3e96d7a9f1ac49f11f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?V[o]:j[o])},p={cloudApi:S("cloud-api")},m=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await f.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),this.getAuthor()}saveJWT(t){E.set(m.key,t)}getJWT(){return E.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){E.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let _=m;w(_,"key","abstracloud:auth:jwt");const c=new _;class d extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new d(e,t.status)}}class f{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,b])=>b!=null)),r=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",i=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...c.headers}});if(i.status===403){k("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const l=await i.text();return l?JSON.parse(l):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,n){const r=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",i=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...n},body:r?e:JSON.stringify(e)});if(!i.ok)throw await d.fromResponse(i);const l=await i.text();return l?JSON.parse(l):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!n.ok)throw await d.fromResponse(n);const r=await n.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await d.fromResponse(e)}}class U{async createSession(t){await f.post("usage/sessions",t)}async trackBrowserEvent(t){await f.post("usage/browser",t)}}const h=new U;class B{static trackSession(){const t=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),e=new URLSearchParams(window.location.search).get("session")||t.abstra_session;h.createSession({query:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href,previousSessionId:e}).catch(console.error)}static trackPageView(){h.trackBrowserEvent({event:"PageView",payload:{queryParams:Object.fromEntries(new URLSearchParams(location.search)),referrer:document.referrer,href:location.href}}).catch(console.error)}static billingAlertCtaClicked(t,e){h.trackBrowserEvent({event:"BillingAlertCtaClicked",payload:{cta:e,organizationId:t,href:location.href}}).catch(console.error)}static billingPlanUpgradeClicked(t){h.trackBrowserEvent({event:"BillingPlanUpgradeClicked",payload:{organizationId:t,href:location.href}}).catch(console.error)}}const A=P({history:O("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.570d721b.js"),["assets/WidgetPreview.570d721b.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/Steps.da0a6eda.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.a9d78280.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.9e634d2b.js"),["assets/Login.9e634d2b.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/PhArrowClockwise.vue.430bf128.js","assets/CircularLoading.f6176512.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.a9d78280.js","assets/WidgetsFrame.13b291ee.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/member.c3acc15a.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/popupNotifcation.cbfc2da9.js","assets/Login.80787f68.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.71409977.js"),["assets/ReturnApiKey.71409977.js","assets/Navbar.b2067d51.js","assets/logo.084e5d7c.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/PhSignOut.vue.73ff9fdd.js","assets/Text.230fde10.js","assets/index.6666692f.js","assets/index.3d2ed24a.js","assets/BookOutlined.5efe1db2.js","assets/Navbar.4c5e8ebc.css","assets/url.175b4bff.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/apiKey.a1c36c61.js","assets/project.26c9674c.js","assets/organization.27a6a748.js","assets/Title.a6b4e026.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Paragraph.8835b4f7.js","assets/index.42678fd7.js","assets/Modal.2232ec94.js","assets/popupNotifcation.cbfc2da9.js","assets/ReturnApiKey.7f06b066.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.709f91f8.js"),["assets/Organizations.709f91f8.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/organization.27a6a748.js","assets/Navbar.b2067d51.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.73ff9fdd.js","assets/Text.230fde10.js","assets/index.6666692f.js","assets/index.3d2ed24a.js","assets/BookOutlined.5efe1db2.js","assets/Navbar.4c5e8ebc.css","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/BaseLayout.cd041609.js","assets/BaseLayout.d7a8431f.css","assets/ant-design.16d38231.js","assets/index.9f01d476.js","assets/PhArrowSquareOut.vue.68bc05e6.js","assets/PhPencil.vue.1bdd5eea.js","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.a539f388.js"),["assets/Organization.a539f388.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/organization.27a6a748.js","assets/BaseLayout.cd041609.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.700b53fb.js","assets/Sidebar.f0e74f13.js","assets/Text.230fde10.js","assets/index.42678fd7.js","assets/index.d5ad068c.js","assets/Sidebar.4bfd151d.css","assets/Navbar.b2067d51.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.73ff9fdd.js","assets/index.6666692f.js","assets/index.3d2ed24a.js","assets/BookOutlined.5efe1db2.js","assets/Navbar.4c5e8ebc.css","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/popupNotifcation.cbfc2da9.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.f8d5d882.js"),["assets/Projects.f8d5d882.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/ant-design.16d38231.js","assets/index.9f01d476.js","assets/Modal.2232ec94.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/project.26c9674c.js","assets/organization.27a6a748.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/PhArrowSquareOut.vue.68bc05e6.js","assets/PhPencil.vue.1bdd5eea.js","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.eb57bf7f.js"),["assets/OrganizationSettings.eb57bf7f.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.dfc15b67.js"),["assets/Editors.dfc15b67.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/member.c3acc15a.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/ant-design.16d38231.js","assets/index.9f01d476.js","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.96f57625.js"),["assets/Billing.96f57625.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/organization.27a6a748.js","assets/asyncComputed.700b53fb.js","assets/Title.a6b4e026.js","assets/Text.230fde10.js","assets/index.928945a7.js","assets/index.b0e21081.js","assets/Card.159f4233.js","assets/index.a9aedfdd.js","assets/TabPane.40168581.js","assets/hasIn.db1a5da2.js","assets/Form.b088898a.js","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.6b6d4f03.js"),["assets/Project.6b6d4f03.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/BaseLayout.cd041609.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.700b53fb.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/project.26c9674c.js","assets/organization.27a6a748.js","assets/Navbar.b2067d51.js","assets/logo.084e5d7c.js","assets/PhSignOut.vue.73ff9fdd.js","assets/Text.230fde10.js","assets/index.6666692f.js","assets/index.3d2ed24a.js","assets/BookOutlined.5efe1db2.js","assets/Navbar.4c5e8ebc.css","assets/Sidebar.f0e74f13.js","assets/index.42678fd7.js","assets/index.d5ad068c.js","assets/Sidebar.4bfd151d.css","assets/PhArrowCounterClockwise.vue.82721f59.js","assets/PhIdentificationBadge.vue.29312d4b.js","assets/PhCube.vue.7fc426fc.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/popupNotifcation.cbfc2da9.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.6a7d1cba.js"),["assets/Live.6a7d1cba.js","assets/CrudView.952a9559.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/asyncComputed.700b53fb.js","assets/build.c833eae0.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/project.26c9674c.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3b1f70c5.js","assets/LoadingOutlined.144cc467.js","assets/PhArrowCounterClockwise.vue.82721f59.js","assets/PhInfo.vue.5978663c.js","assets/index.952479b9.js","assets/Link.09ae0183.js","assets/popupNotifcation.cbfc2da9.js","assets/Live.ef5b15f7.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.1626ea11.js"),["assets/Builds.1626ea11.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/build.c833eae0.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/project.26c9674c.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/PhArrowCounterClockwise.vue.82721f59.js","assets/PhCube.vue.7fc426fc.js","assets/PhWebhooksLogo.vue.ef0b3279.js","assets/Item.7036535e.js","assets/index.b293d50a.js","assets/datetime.e229a63f.js","assets/ExclamationCircleOutlined.77e210bf.js","assets/CloseCircleOutlined.373dbac1.js","assets/LoadingOutlined.144cc467.js","assets/popupNotifcation.cbfc2da9.js","assets/Builds.935ea564.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.694c14a7.js"),["assets/Connectors.694c14a7.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/connector.8e221516.js","assets/asyncComputed.700b53fb.js","assets/PhPencil.vue.1bdd5eea.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.7115befa.js"),["assets/Tables.7115befa.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/PhPencil.vue.1bdd5eea.js","assets/asyncComputed.700b53fb.js","assets/tables.14c33806.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/string.e8cd50f8.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.508db34c.js"),["assets/Sql.508db34c.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/project.26c9674c.js","assets/toggleHighContrast.0cade069.js","assets/toggleHighContrast.30d77c87.css","assets/index.928945a7.js","assets/index.42678fd7.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/popupNotifcation.cbfc2da9.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.bd5a0ba1.js"),["assets/ApiKeys.bd5a0ba1.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/member.c3acc15a.js","assets/apiKey.a1c36c61.js","assets/project.26c9674c.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.b35e93f0.js"),["assets/Logs.b35e93f0.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/build.c833eae0.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3b1f70c5.js","assets/LoadingOutlined.144cc467.js","assets/datetime.e229a63f.js","assets/index.52e96cf0.js","assets/index.d5ad068c.js","assets/dayjs.0cdba876.js","assets/Title.a6b4e026.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/CollapsePanel.400b6bb0.js","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.21026346.js"),["assets/ProjectSettings.21026346.js","assets/asyncComputed.700b53fb.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/project.26c9674c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.cef4940f.js","assets/Title.a6b4e026.js","assets/Text.230fde10.js","assets/Paragraph.8835b4f7.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.1f1895a0.js"),["assets/EnvVars.1f1895a0.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/PhPencil.vue.1bdd5eea.js","assets/asyncComputed.700b53fb.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/popupNotifcation.cbfc2da9.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.83cc261a.js"),["assets/Files.83cc261a.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/popupNotifcation.cbfc2da9.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/asyncComputed.700b53fb.js","assets/ant-design.16d38231.js","assets/index.9f01d476.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.013c9e9f.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.a6b4e026.js","assets/Text.230fde10.js","assets/Paragraph.8835b4f7.js","assets/Card.159f4233.js","assets/index.a9aedfdd.js","assets/TabPane.40168581.js","assets/hasIn.db1a5da2.js","assets/Form.b088898a.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"access-control",name:"access-control",component:()=>a(()=>import("./View.d377cf8b.js"),["assets/View.d377cf8b.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/asyncComputed.700b53fb.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/index.d62bfaf1.js","assets/isNumeric.75337b1e.js","assets/CrudView.952a9559.js","assets/Paragraph.8835b4f7.js","assets/Text.230fde10.js","assets/Modal.2232ec94.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js","assets/BookOutlined.5efe1db2.js","assets/url.175b4bff.js","assets/index.928945a7.js","assets/Title.a6b4e026.js","assets/index.d5ad068c.js","assets/CrudView.e8f8f039.css","assets/PhPencil.vue.1bdd5eea.js","assets/repository.a8652cd4.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/fetch.256c9a8e.js","assets/popupNotifcation.cbfc2da9.js","assets/ant-design.16d38231.js","assets/index.9f01d476.js","assets/TabPane.40168581.js"]),meta:{title:"Access Control - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.eeeac813.js"),["assets/TableEditor.eeeac813.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/tables.14c33806.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/string.e8cd50f8.js","assets/BaseLayout.cd041609.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.700b53fb.js","assets/popupNotifcation.cbfc2da9.js","assets/project.26c9674c.js","assets/PhCheckCircle.vue.2d3363a5.js","assets/index.af2822ec.js","assets/index.bc5a3aa8.js","assets/Form.b088898a.js","assets/hasIn.db1a5da2.js","assets/index.f857b72c.js","assets/index.d62bfaf1.js","assets/isNumeric.75337b1e.js","assets/PhCaretRight.vue.ef139fb8.js","assets/ant-design.16d38231.js","assets/index.9f01d476.js","assets/Modal.2232ec94.js","assets/Text.230fde10.js","assets/LoadingOutlined.144cc467.js","assets/index.928945a7.js","assets/DeleteOutlined.013c9e9f.js","assets/DeleteOutlined.f8ba9770.js","assets/index.b0e21081.js","assets/organization.27a6a748.js","assets/PhPencil.vue.1bdd5eea.js","assets/index.3d2ed24a.js","assets/index.6666692f.js","assets/TableEditor.81588151.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.1c9d3bfe.js"),["assets/ConnectorEditor.1c9d3bfe.js","assets/outputWidgets.e8054ca7.js","assets/outputWidgets.25fe30e4.css","assets/BaseLayout.cd041609.js","assets/BaseLayout.d7a8431f.css","assets/asyncComputed.700b53fb.js","assets/index.99dad205.js","assets/index.cf4c23b9.js","assets/record.120358d7.js","assets/pubsub.37160207.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.61c434ba.js","assets/UnsavedChangesHandler.85103f7a.js","assets/ExclamationCircleOutlined.77e210bf.js","assets/Modal.2232ec94.js","assets/UnsavedChangesHandler.bdec248f.css","assets/Text.230fde10.js","assets/Link.09ae0183.js","assets/project.26c9674c.js","assets/connector.8e221516.js","assets/organization.27a6a748.js","assets/TabPane.40168581.js","assets/hasIn.db1a5da2.js","assets/index.3d2ed24a.js","assets/index.6666692f.js","assets/Form.b088898a.js","assets/index.b0e21081.js","assets/popupNotifcation.cbfc2da9.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});A.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await A.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&(B.trackPageView(),u.boot(e))});export{N as A,f as C,B as T,W as a,c as b,u as c,A as r};
//# sourceMappingURL=router.d68c1114.js.map
