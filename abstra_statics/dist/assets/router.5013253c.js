var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.1abced8c.js";import{E as f,cS as E,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.23a77d09.js";import{p as C}from"./popupNotifcation.8aa8d2a6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="17999a29-6931-4889-8229-b0a8ee5014c8",o._sentryDebugIdIdentifier="sentry-dbid-17999a29-6931-4889-8229-b0a8ee5014c8")}catch{}})();const $=f(T),z=f(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"b8b7c86a9701a971fdfb899c9997213c18394ea0",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,g=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.986b8928.js"),["assets/WidgetPreview.986b8928.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/Steps.9876f809.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.2fd8634b.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.98b38a26.js"),["assets/Login.98b38a26.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/icons.7faba5d8.js","assets/CircularLoading.901893c8.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.2fd8634b.js","assets/WidgetsFrame.13b291ee.css","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/popupNotifcation.8aa8d2a6.js","assets/Login.4672e6e4.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.f52b7fb6.js"),["assets/ReturnApiKey.f52b7fb6.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/apiKey.70343458.js","assets/project.a4457213.js","assets/organization.e5af53c0.js","assets/asyncComputed.87bcbfab.js","assets/Title.61f38aef.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Paragraph.a35411f7.js","assets/Text.bfbdf9cf.js","assets/index.de856d8b.js","assets/Modal.e2700fe9.js","assets/popupNotifcation.8aa8d2a6.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.226710fa.js"),["assets/Organizations.226710fa.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/icons.7faba5d8.js","assets/asyncComputed.87bcbfab.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/organization.e5af53c0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.c3ff025c.js","assets/logo.084e5d7c.js","assets/Text.bfbdf9cf.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/index.f90e2b0c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.a71d1967.js","assets/Paragraph.a35411f7.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/BaseLayout.4d920aa0.js","assets/BaseLayout.2a9791da.css","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.51ab9cb2.js"),["assets/Organization.51ab9cb2.js","assets/Sidebar.4cf81991.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/icons.7faba5d8.js","assets/index.34e34ded.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.c3ff025c.js","assets/logo.084e5d7c.js","assets/asyncComputed.87bcbfab.js","assets/Text.bfbdf9cf.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/index.f90e2b0c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/organization.e5af53c0.js","assets/BaseLayout.4d920aa0.js","assets/BaseLayout.2a9791da.css","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/popupNotifcation.8aa8d2a6.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.e356a9e6.js"),["assets/Projects.e356a9e6.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/asyncComputed.87bcbfab.js","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/Modal.e2700fe9.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/project.a4457213.js","assets/organization.e5af53c0.js","assets/CrudView.a71d1967.js","assets/icons.7faba5d8.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.bcaa3c6e.js"),["assets/OrganizationSettings.bcaa3c6e.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.dd9b79b3.js"),["assets/Editors.dd9b79b3.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/asyncComputed.87bcbfab.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/member.bb26838f.js","assets/CrudView.a71d1967.js","assets/icons.7faba5d8.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.c9e0c3ad.js"),["assets/Billing.c9e0c3ad.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/organization.e5af53c0.js","assets/asyncComputed.87bcbfab.js","assets/Title.61f38aef.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/index.869792c3.js","assets/index.4039fe5f.js","assets/Text.bfbdf9cf.js","assets/Card.db9c9118.js","assets/TabPane.bd6cf25b.js","assets/hasIn.897d62dc.js","assets/Form.1abced8c.js","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.1d746d83.js"),["assets/Project.1d746d83.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/BaseLayout.4d920aa0.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.87bcbfab.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/project.a4457213.js","assets/organization.e5af53c0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.c3ff025c.js","assets/logo.084e5d7c.js","assets/Text.bfbdf9cf.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/index.f90e2b0c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.4cf81991.js","assets/icons.7faba5d8.js","assets/index.34e34ded.js","assets/Sidebar.055402cc.css","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/popupNotifcation.8aa8d2a6.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.e742cb0d.js"),["assets/Live.e742cb0d.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/asyncComputed.87bcbfab.js","assets/build.4fded5f0.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/project.a4457213.js","assets/CrudView.a71d1967.js","assets/icons.7faba5d8.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.bd6aff82.js","assets/CheckCircleFilled.f170b76d.js","assets/LoadingOutlined.02e49033.js","assets/index.de856d8b.js","assets/Link.a03bf6d5.js","assets/popupNotifcation.8aa8d2a6.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.ab76c716.js"),["assets/Builds.ab76c716.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/asyncComputed.87bcbfab.js","assets/build.4fded5f0.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/project.a4457213.js","assets/CrudView.a71d1967.js","assets/icons.7faba5d8.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/index.66bf3f29.js","assets/datetime.e1226b40.js","assets/CloseCircleOutlined.7682a060.js","assets/LoadingOutlined.02e49033.js","assets/popupNotifcation.8aa8d2a6.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.5150afbf.js"),["assets/Connectors.5150afbf.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/connector.03158c08.js","assets/asyncComputed.87bcbfab.js","assets/icons.7faba5d8.js","assets/CrudView.a71d1967.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.36bc8647.js"),["assets/Tables.36bc8647.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/icons.7faba5d8.js","assets/asyncComputed.87bcbfab.js","assets/tables.4a8f7486.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/string.3abfe698.js","assets/CrudView.a71d1967.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.d3226965.js"),["assets/Sql.d3226965.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/project.a4457213.js","assets/toggleHighContrast.dd5e627d.js","assets/toggleHighContrast.30d77c87.css","assets/index.869792c3.js","assets/index.de856d8b.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/popupNotifcation.8aa8d2a6.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.4fdd2e9b.js"),["assets/ApiKeys.4fdd2e9b.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/icons.7faba5d8.js","assets/asyncComputed.87bcbfab.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/member.bb26838f.js","assets/apiKey.70343458.js","assets/project.a4457213.js","assets/CrudView.a71d1967.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.dd57fae5.js"),["assets/Logs.dd57fae5.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/build.4fded5f0.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.bd6aff82.js","assets/CheckCircleFilled.f170b76d.js","assets/LoadingOutlined.02e49033.js","assets/datetime.e1226b40.js","assets/dayjs.ce0bd3fb.js","assets/index.04f3096e.js","assets/index.34e34ded.js","assets/Title.61f38aef.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/index.de856d8b.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/CollapsePanel.2cc16ea9.js","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.e3bbef26.js"),["assets/LegacyLogs.e3bbef26.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/Modal.e2700fe9.js","assets/StarFilled.fad29e50.js","assets/Timeline.2316d494.js","assets/CheckCircleFilled.f170b76d.js","assets/build.4fded5f0.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/asyncComputed.87bcbfab.js","assets/Title.61f38aef.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/index.de856d8b.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/dayjs.ce0bd3fb.js","assets/index.04f3096e.js","assets/index.34e34ded.js","assets/popupNotifcation.8aa8d2a6.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.1b7f79b8.js"),["assets/ProjectSettings.1b7f79b8.js","assets/asyncComputed.87bcbfab.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/project.a4457213.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3458d25d.js","assets/Title.61f38aef.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Paragraph.a35411f7.js","assets/Text.bfbdf9cf.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.2872e42d.js"),["assets/EnvVars.2872e42d.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/icons.7faba5d8.js","assets/asyncComputed.87bcbfab.js","assets/CrudView.a71d1967.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.8aa8d2a6.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.a1bac449.js"),["assets/Files.a1bac449.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/popupNotifcation.8aa8d2a6.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/asyncComputed.87bcbfab.js","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.754f89dc.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.61f38aef.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Paragraph.a35411f7.js","assets/Card.db9c9118.js","assets/TabPane.bd6cf25b.js","assets/hasIn.897d62dc.js","assets/Form.1abced8c.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.fac34b98.js"),["assets/Users.fac34b98.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/icons.7faba5d8.js","assets/asyncComputed.87bcbfab.js","assets/contracts.generated.7d343f0b.js","assets/index.cf4c23b9.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/index.cfbd7810.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.8aa8d2a6.js","assets/index.fb6a8be1.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/CrudView.a71d1967.js","assets/Paragraph.a35411f7.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/Modal.e2700fe9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js","assets/url.9d816829.js","assets/index.869792c3.js","assets/Title.61f38aef.js","assets/Text.bfbdf9cf.js","assets/index.34e34ded.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.5f4ef976.js"),["assets/TableEditor.5f4ef976.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/tables.4a8f7486.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/string.3abfe698.js","assets/BaseLayout.4d920aa0.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.87bcbfab.js","assets/popupNotifcation.8aa8d2a6.js","assets/icons.7faba5d8.js","assets/project.a4457213.js","assets/index.28b57dee.js","assets/index.1b2ce698.js","assets/Form.1abced8c.js","assets/hasIn.897d62dc.js","assets/index.3e7b0ed8.js","assets/index.cfbd7810.js","assets/isNumeric.75337b1e.js","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/Modal.e2700fe9.js","assets/Base.a26f807d.js","assets/Typography.d216066f.js","assets/LoadingOutlined.02e49033.js","assets/index.869792c3.js","assets/DeleteOutlined.754f89dc.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.f4c6dcdb.js","assets/index.4039fe5f.js","assets/organization.e5af53c0.js","assets/index.f90e2b0c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.0562c1c4.js"),["assets/ConnectorEditor.0562c1c4.js","assets/outputWidgets.23a77d09.js","assets/outputWidgets.ba69b022.css","assets/BaseLayout.4d920aa0.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.87bcbfab.js","assets/index.fb6a8be1.js","assets/index.cf4c23b9.js","assets/record.99cdbef5.js","assets/pubsub.a21150d7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.c748080d.js","assets/ant-design.7692a78f.js","assets/index.c9455a12.js","assets/Modal.e2700fe9.js","assets/Typography.d216066f.js","assets/Link.a03bf6d5.js","assets/Base.a26f807d.js","assets/SaveButton.13ece1cb.css","assets/project.a4457213.js","assets/connector.03158c08.js","assets/organization.e5af53c0.js","assets/TabPane.bd6cf25b.js","assets/hasIn.897d62dc.js","assets/index.f90e2b0c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.1abced8c.js","assets/index.4039fe5f.js","assets/popupNotifcation.8aa8d2a6.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,b as C,z as a,i as b,g as r};
//# sourceMappingURL=router.5013253c.js.map
