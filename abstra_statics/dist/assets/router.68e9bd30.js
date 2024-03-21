var A=Object.defineProperty;var y=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var u=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as T}from"./Form.f17a93e0.js";import{E as f,cS as b,S as _,t as R,g as v,h as O,_ as a,i as P}from"./outputWidgets.5f4e897a.js";import{p as C}from"./popupNotifcation.960d37a9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="fa5fce54-02bb-403d-a8b8-8ad6f9f32700",o._sentryDebugIdIdentifier="sentry-dbid-fa5fce54-02bb-403d-a8b8-8ad6f9f32700")}catch{}})();const z=f(I),B=f(T);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}class L{static boot(t){window.Intercom("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email})}static show(){window.Intercom("show")}static hide(){window.Intercom("hide")}static showNewMessage(t){window.Intercom("showNewMessage",t)}}const D=()=>window.location.host.includes(".abstra.io"),V={"cloud-api":"/api/cloud-api"},j={"cloud-api":"https://cloud-api.abstra.cloud"},S=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"b84e95bd4739fcf8cf27e8a88e0a40e29963ca27",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(D()?V[o]:j[o])},p={cloudApi:S("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class w{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,h])=>h!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await w.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=R(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;u(d,"key","abstracloud:auth:jwt");const i=new d,E=v({history:O("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.5590fce7.js"),["assets/WidgetPreview.5590fce7.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/Steps.6b60f6f1.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.458cefb8.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.c6aa42c7.js"),["assets/Login.c6aa42c7.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/icons.20eb43bb.js","assets/CircularLoading.75852a21.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.458cefb8.js","assets/WidgetsFrame.13b291ee.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/member.3ff2f97f.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/popupNotifcation.960d37a9.js","assets/Login.ddcd6824.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.5db59d33.js"),["assets/ReturnApiKey.5db59d33.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/apiKey.219ab5b4.js","assets/project.c7d7e8e2.js","assets/organization.6043a426.js","assets/asyncComputed.738e9af6.js","assets/Title.e77a553b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/url.d5d1649b.js","assets/Paragraph.e9d9bed1.js","assets/Text.88ecca0b.js","assets/index.5379103d.js","assets/Modal.7da97b41.js","assets/popupNotifcation.960d37a9.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.a8300583.js"),["assets/Organizations.a8300583.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/icons.20eb43bb.js","assets/asyncComputed.738e9af6.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/organization.6043a426.js","assets/Navbar.vue_vue_type_script_setup_true_lang.68b63049.js","assets/logo.084e5d7c.js","assets/Text.88ecca0b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/index.7a9b4ae0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.5379103d.js","assets/Navbar.f4a98ea3.css","assets/CrudView.8c58f5cc.js","assets/Paragraph.e9d9bed1.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/BaseLayout.2f5bb98c.js","assets/BaseLayout.2a9791da.css","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.080cb58e.js"),["assets/Organization.080cb58e.js","assets/Sidebar.6b8fbbe0.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/icons.20eb43bb.js","assets/index.85963ad9.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.68b63049.js","assets/logo.084e5d7c.js","assets/asyncComputed.738e9af6.js","assets/Text.88ecca0b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/index.7a9b4ae0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.5379103d.js","assets/Navbar.f4a98ea3.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/organization.6043a426.js","assets/BaseLayout.2f5bb98c.js","assets/BaseLayout.2a9791da.css","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/popupNotifcation.960d37a9.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.550de9b4.js"),["assets/Projects.550de9b4.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.738e9af6.js","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/Modal.7da97b41.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/project.c7d7e8e2.js","assets/organization.6043a426.js","assets/CrudView.8c58f5cc.js","assets/icons.20eb43bb.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.3c48f761.js"),["assets/OrganizationSettings.3c48f761.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.5017eabe.js"),["assets/Editors.5017eabe.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.738e9af6.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/member.3ff2f97f.js","assets/CrudView.8c58f5cc.js","assets/icons.20eb43bb.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.37e61fde.js"),["assets/Billing.37e61fde.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/organization.6043a426.js","assets/asyncComputed.738e9af6.js","assets/Title.e77a553b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/index.cf356e21.js","assets/index.9da2dc5f.js","assets/Text.88ecca0b.js","assets/Card.cacab3a8.js","assets/TabPane.e739b457.js","assets/hasIn.c3ca752b.js","assets/Form.f17a93e0.js","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.c334aa0a.js"),["assets/Project.c334aa0a.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.2f5bb98c.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.738e9af6.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/project.c7d7e8e2.js","assets/organization.6043a426.js","assets/Navbar.vue_vue_type_script_setup_true_lang.68b63049.js","assets/logo.084e5d7c.js","assets/Text.88ecca0b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/index.7a9b4ae0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.5379103d.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.6b8fbbe0.js","assets/icons.20eb43bb.js","assets/index.85963ad9.js","assets/Sidebar.055402cc.css","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/popupNotifcation.960d37a9.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.1140ca81.js"),["assets/Live.1140ca81.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.738e9af6.js","assets/build.4112b997.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/project.c7d7e8e2.js","assets/CrudView.8c58f5cc.js","assets/icons.20eb43bb.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.dd870033.js","assets/CheckCircleFilled.9c1363f5.js","assets/LoadingOutlined.6c639189.js","assets/index.5379103d.js","assets/Link.88800d15.js","assets/popupNotifcation.960d37a9.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.0329f162.js"),["assets/Builds.0329f162.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.738e9af6.js","assets/build.4112b997.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/project.c7d7e8e2.js","assets/CrudView.8c58f5cc.js","assets/icons.20eb43bb.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/index.9b535dbb.js","assets/datetime.cbdb5ff3.js","assets/CloseCircleOutlined.e1205f3d.js","assets/LoadingOutlined.6c639189.js","assets/popupNotifcation.960d37a9.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.19cfd55f.js"),["assets/Connectors.19cfd55f.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/connector.8fb7999d.js","assets/asyncComputed.738e9af6.js","assets/icons.20eb43bb.js","assets/CrudView.8c58f5cc.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.d27c652a.js"),["assets/Tables.d27c652a.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/icons.20eb43bb.js","assets/asyncComputed.738e9af6.js","assets/tables.db0a5a13.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/string.57d6b0fb.js","assets/CrudView.8c58f5cc.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.a1886d3d.js"),["assets/Sql.a1886d3d.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/project.c7d7e8e2.js","assets/toggleHighContrast.d9cfa80d.js","assets/toggleHighContrast.30d77c87.css","assets/index.cf356e21.js","assets/index.5379103d.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/popupNotifcation.960d37a9.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.e6c2856f.js"),["assets/ApiKeys.e6c2856f.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/icons.20eb43bb.js","assets/asyncComputed.738e9af6.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/member.3ff2f97f.js","assets/apiKey.219ab5b4.js","assets/project.c7d7e8e2.js","assets/CrudView.8c58f5cc.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.960d37a9.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.cf878acd.js"),["assets/Logs.cf878acd.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/build.4112b997.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.dd870033.js","assets/CheckCircleFilled.9c1363f5.js","assets/LoadingOutlined.6c639189.js","assets/datetime.cbdb5ff3.js","assets/dayjs.99f19e49.js","assets/index.ea532c65.js","assets/index.85963ad9.js","assets/Title.e77a553b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/index.5379103d.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/CollapsePanel.40166804.js","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.4ffedc2a.js"),["assets/LegacyLogs.4ffedc2a.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/Modal.7da97b41.js","assets/StarFilled.fad29e50.js","assets/Timeline.8395e199.js","assets/CheckCircleFilled.9c1363f5.js","assets/build.4112b997.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/asyncComputed.738e9af6.js","assets/Title.e77a553b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/index.5379103d.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/dayjs.99f19e49.js","assets/index.ea532c65.js","assets/index.85963ad9.js","assets/popupNotifcation.960d37a9.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.d62c6b2b.js"),["assets/ProjectSettings.d62c6b2b.js","assets/asyncComputed.738e9af6.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/project.c7d7e8e2.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.666eceff.js","assets/Title.e77a553b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Paragraph.e9d9bed1.js","assets/Text.88ecca0b.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.e5af6e6d.js"),["assets/EnvVars.e5af6e6d.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/icons.20eb43bb.js","assets/asyncComputed.738e9af6.js","assets/CrudView.8c58f5cc.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.960d37a9.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.ee50e3a5.js"),["assets/Files.ee50e3a5.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/popupNotifcation.960d37a9.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/asyncComputed.738e9af6.js","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.5f5d0785.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.e77a553b.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Paragraph.e9d9bed1.js","assets/Card.cacab3a8.js","assets/TabPane.e739b457.js","assets/hasIn.c3ca752b.js","assets/Form.f17a93e0.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.0ff3771d.js"),["assets/Users.0ff3771d.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/icons.20eb43bb.js","assets/asyncComputed.738e9af6.js","assets/contracts.generated.fef3e28f.js","assets/index.cf4c23b9.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/index.d5086fa5.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.960d37a9.js","assets/index.ebef36a2.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/CrudView.8c58f5cc.js","assets/Paragraph.e9d9bed1.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/Modal.7da97b41.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6e414bbd.js","assets/url.d5d1649b.js","assets/index.cf356e21.js","assets/Title.e77a553b.js","assets/Text.88ecca0b.js","assets/index.85963ad9.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.ba0b2f0c.js"),["assets/TableEditor.ba0b2f0c.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/tables.db0a5a13.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/string.57d6b0fb.js","assets/BaseLayout.2f5bb98c.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.738e9af6.js","assets/popupNotifcation.960d37a9.js","assets/icons.20eb43bb.js","assets/project.c7d7e8e2.js","assets/index.67295494.js","assets/index.ea2f9680.js","assets/Form.f17a93e0.js","assets/hasIn.c3ca752b.js","assets/index.e48a13b5.js","assets/index.d5086fa5.js","assets/isNumeric.75337b1e.js","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/Modal.7da97b41.js","assets/Base.f38935dc.js","assets/Typography.01a47c18.js","assets/LoadingOutlined.6c639189.js","assets/index.cf356e21.js","assets/DeleteOutlined.5f5d0785.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.8c03f994.js","assets/index.9da2dc5f.js","assets/organization.6043a426.js","assets/index.7a9b4ae0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.a0a99354.js"),["assets/ConnectorEditor.a0a99354.js","assets/outputWidgets.5f4e897a.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.2f5bb98c.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.738e9af6.js","assets/index.ebef36a2.js","assets/index.cf4c23b9.js","assets/record.d272da54.js","assets/pubsub.2ccdefdf.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ecfcf94b.js","assets/ant-design.ddcbbf13.js","assets/index.629081a3.js","assets/Modal.7da97b41.js","assets/Typography.01a47c18.js","assets/Link.88800d15.js","assets/Base.f38935dc.js","assets/SaveButton.13ece1cb.css","assets/project.c7d7e8e2.js","assets/connector.8fb7999d.js","assets/organization.6043a426.js","assets/TabPane.e739b457.js","assets/hasIn.c3ca752b.js","assets/index.7a9b4ae0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.f17a93e0.js","assets/index.9da2dc5f.js","assets/popupNotifcation.960d37a9.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});E.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await E.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&L.boot(e)});export{z as A,w as C,L as I,B as a,i as b,E as r};
//# sourceMappingURL=router.68e9bd30.js.map
