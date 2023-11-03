var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.72e90637.js";import{E as f,cV as p,S as s,q as g,g as v,h as I,_ as n}from"./outputWidgets.9a4dffd5.js";import{u as w}from"./index.a351ac5c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a95347df-7823-4f49-a095-299766e2b3e1",o._sentryDebugIdIdentifier="sentry-dbid-a95347df-7823-4f49-a095-299766e2b3e1")}catch{}})();const P=f(E),y=()=>window.location.host.includes(".abstra.io"),T={authn:"/api/authn","cloud-api":"/api/cloud-api"},b={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"b69e3147d57386ea7c4fea2fad6d52c4105861c8",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(y()?T[o]:b[o])},u={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${u.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${u.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,d=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.89c16f95.js"),["assets/WidgetPreview.89c16f95.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.fa882ec7.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/Steps.a733e7f2.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.6bff1f4e.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.96ec25e9.js"),["assets/Login.96ec25e9.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/member.ffd0cf0e.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/icons.d935dec9.js","assets/CircularLoading.e0f97658.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.6bff1f4e.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.72e90637.js","assets/index.a351ac5c.js","assets/Login.74ccb377.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.ceb823ae.js"),["assets/Organizations.ceb823ae.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/icons.d935dec9.js","assets/asyncComputed.947a021a.js","assets/organization.ab53ea01.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.abe838a3.js","assets/logo.084e5d7c.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/index.0e22fd42.js","assets/index.c2be78ce.js","assets/Navbar.f4a98ea3.css","assets/CrudView.32e9e362.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/CrudView.b7607004.css","assets/BaseLayout.a71d4fa9.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.edc4db28.js","assets/index.a351ac5c.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.95821b23.js"),["assets/Organization.95821b23.js","assets/Sidebar.05b85fdb.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/icons.d935dec9.js","assets/Tooltip.99b12d24.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.abe838a3.js","assets/logo.084e5d7c.js","assets/asyncComputed.947a021a.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/index.0e22fd42.js","assets/index.c2be78ce.js","assets/Navbar.f4a98ea3.css","assets/organization.ab53ea01.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/BaseLayout.a71d4fa9.js","assets/BaseLayout.2d5b030e.css","assets/index.a351ac5c.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.458bdf52.js"),["assets/Projects.458bdf52.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/icons.d935dec9.js","assets/asyncComputed.947a021a.js","assets/project.e0e41272.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/organization.ab53ea01.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/CrudView.32e9e362.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/ant-design.edc4db28.js","assets/index.a351ac5c.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.42ea2d85.js"),["assets/OrganizationSettings.42ea2d85.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.1ad47df6.js"),["assets/Members.1ad47df6.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.947a021a.js","assets/member.ffd0cf0e.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/CrudView.32e9e362.js","assets/icons.d935dec9.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.a351ac5c.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.475775db.js"),["assets/Project.475775db.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/BaseLayout.a71d4fa9.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.947a021a.js","assets/project.e0e41272.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/organization.ab53ea01.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.abe838a3.js","assets/logo.084e5d7c.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/index.0e22fd42.js","assets/index.c2be78ce.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.05b85fdb.js","assets/icons.d935dec9.js","assets/Tooltip.99b12d24.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.a351ac5c.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.b45671a7.js"),["assets/Builds.b45671a7.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.947a021a.js","assets/project.e0e41272.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/build.c805096b.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/string.2c28b0b0.js","assets/icons.d935dec9.js","assets/CrudView.32e9e362.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.a351ac5c.js","assets/Builds.a841386a.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.b9beb78e.js"),["assets/Connectors.b9beb78e.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/columns.2487afd8.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/index.f4ac7424.js","assets/connector.069bd6c6.js","assets/asyncComputed.947a021a.js","assets/icons.d935dec9.js","assets/CrudView.32e9e362.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.a351ac5c.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.95d964ba.js"),["assets/Tables.95d964ba.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/icons.d935dec9.js","assets/asyncComputed.947a021a.js","assets/columns.2487afd8.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/index.f4ac7424.js","assets/tables.17cd765d.js","assets/string.2c28b0b0.js","assets/CrudView.32e9e362.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.a351ac5c.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.5e8ba841.js"),["assets/ApiKeys.5e8ba841.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.947a021a.js","assets/project.e0e41272.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/member.ffd0cf0e.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/icons.d935dec9.js","assets/CrudView.32e9e362.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.a351ac5c.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.f4d9dc53.js"),["assets/Logs.f4d9dc53.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/build.c805096b.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/asyncComputed.947a021a.js","assets/ant-design.edc4db28.js","assets/Title.72e90637.js","assets/index.5ac52d51.js","assets/index.c4327f7e.js","assets/dayjs.e7706c46.js","assets/index.b048d0fb.js","assets/Form.0ea0ca53.js","assets/index.0d204717.js","assets/CollapsePanel.a49bdae4.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/index.a351ac5c.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.61bf81f6.js"),["assets/ProjectSettings.61bf81f6.js","assets/asyncComputed.947a021a.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/project.e0e41272.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/Title.72e90637.js","assets/index.0d204717.js","assets/index.d0b58c73.js","assets/Form.0ea0ca53.js","assets/index.0e22fd42.js","assets/index.a351ac5c.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.9d4d59f5.js"),["assets/EnvVars.9d4d59f5.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.947a021a.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/icons.d935dec9.js","assets/CrudView.32e9e362.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.a351ac5c.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.91c79e80.js"),["assets/Files.91c79e80.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/columns.2487afd8.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/index.f4ac7424.js","assets/asyncComputed.947a021a.js","assets/CrudView.32e9e362.js","assets/icons.d935dec9.js","assets/index.0d204717.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/url.152c5826.js","assets/index.c64df437.js","assets/index.c4327f7e.js","assets/index.d0b58c73.js","assets/index.3ecad98a.js","assets/index.0e22fd42.js","assets/CrudView.b7607004.css","assets/index.a351ac5c.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.45dcc8ce.js"),["assets/TableEditor.45dcc8ce.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/BaseLayout.a71d4fa9.js","assets/BaseLayout.2d5b030e.css","assets/tables.17cd765d.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/columns.2487afd8.js","assets/index.f4ac7424.js","assets/string.2c28b0b0.js","assets/asyncComputed.947a021a.js","assets/popupNotifcation.5e27ab9c.js","assets/index.e531f89e.js","assets/index.0e22fd42.js","assets/Title.72e90637.js","assets/Form.0ea0ca53.js","assets/index.f6ddbc51.js","assets/icons.d935dec9.js","assets/index.3ecad98a.js","assets/CircularLoading.e0f97658.js","assets/CircularLoading.f81b57b4.css","assets/project.e0e41272.js","assets/organization.ab53ea01.js","assets/TabPane.aa41b762.js","assets/index.c2be78ce.js","assets/index.a351ac5c.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.24990d3f.js"),["assets/ConnectorEditor.24990d3f.js","assets/outputWidgets.9a4dffd5.js","assets/outputWidgets.e8fba759.css","assets/columns.2487afd8.js","assets/gateway.a8fa6711.js","assets/activeRecord.6b2e89dc.js","assets/pubsub.25596209.js","assets/index.f4ac7424.js","assets/project.e0e41272.js","assets/organization.ab53ea01.js","assets/connector.069bd6c6.js","assets/asyncComputed.947a021a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9f93be5c.js","assets/ant-design.edc4db28.js","assets/Title.72e90637.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.a71d4fa9.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.aa41b762.js","assets/index.c2be78ce.js","assets/index.0e22fd42.js","assets/Form.0ea0ca53.js","assets/index.3ecad98a.js","assets/index.a351ac5c.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});d.beforeEach(async(o,t)=>{w(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await d.push({name:"login"});return}});export{P as A,u as E,R as a,d as r};
//# sourceMappingURL=router.e9c58c63.js.map
