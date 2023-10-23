var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.289b0fc7.js";import{E as f,cV as p,S as s,q as g,g as v,h as I,_ as n}from"./outputWidgets.f4de17f7.js";import{u as b}from"./index.9e25a95e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="70a5b217-45fa-48be-8c5f-9b89fca71aa4",o._sentryDebugIdIdentifier="sentry-dbid-70a5b217-45fa-48be-8c5f-9b89fca71aa4")}catch{}})();const P=f(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"e1208049e1e2e760640d0cb478554d4adc85ef5c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},u={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${u.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${u.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,d=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.f03dd90b.js"),["assets/WidgetPreview.f03dd90b.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.0967688c.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/Steps.74f02edc.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.342814d9.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.a1a949f7.js"),["assets/Login.a1a949f7.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/icons.0f3b4022.js","assets/CircularLoading.d03c9831.js","assets/CircularLoading.f81b57b4.css","assets/member.2b41e042.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/WidgetsFrame.342814d9.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.289b0fc7.js","assets/index.9e25a95e.js","assets/Login.02ec3c46.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.bc230012.js"),["assets/Organizations.bc230012.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/icons.0f3b4022.js","assets/asyncComputed.fa71fe61.js","assets/organization.ae6515f1.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.a06c5ed2.js","assets/logo.084e5d7c.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/index.0ce368d1.js","assets/index.d5886b6a.js","assets/Navbar.f4a98ea3.css","assets/CrudView.fcf5e700.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/CrudView.b7607004.css","assets/BaseLayout.f01bc5b9.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.2fadf44f.js","assets/index.9e25a95e.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.cd272c61.js"),["assets/Organization.cd272c61.js","assets/Sidebar.85ab99ec.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/icons.0f3b4022.js","assets/Tooltip.7e3132f8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.a06c5ed2.js","assets/logo.084e5d7c.js","assets/asyncComputed.fa71fe61.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/index.0ce368d1.js","assets/index.d5886b6a.js","assets/Navbar.f4a98ea3.css","assets/organization.ae6515f1.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/BaseLayout.f01bc5b9.js","assets/BaseLayout.2d5b030e.css","assets/index.9e25a95e.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.e4213ae5.js"),["assets/Projects.e4213ae5.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/icons.0f3b4022.js","assets/asyncComputed.fa71fe61.js","assets/project.7f1a752a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/organization.ae6515f1.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/CrudView.fcf5e700.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/ant-design.2fadf44f.js","assets/index.9e25a95e.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.ee0db4e0.js"),["assets/OrganizationSettings.ee0db4e0.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.b97371f5.js"),["assets/Members.b97371f5.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.fa71fe61.js","assets/member.2b41e042.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/CrudView.fcf5e700.js","assets/icons.0f3b4022.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.9e25a95e.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.42acd0c2.js"),["assets/Project.42acd0c2.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/BaseLayout.f01bc5b9.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.fa71fe61.js","assets/project.7f1a752a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/organization.ae6515f1.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.a06c5ed2.js","assets/logo.084e5d7c.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/index.0ce368d1.js","assets/index.d5886b6a.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.85ab99ec.js","assets/icons.0f3b4022.js","assets/Tooltip.7e3132f8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.9e25a95e.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.949b0cad.js"),["assets/Builds.949b0cad.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.fa71fe61.js","assets/project.7f1a752a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/build.423424de.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/string.ec0cb8cb.js","assets/icons.0f3b4022.js","assets/CrudView.fcf5e700.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.9e25a95e.js","assets/Builds.a841386a.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.50b82880.js"),["assets/Connectors.50b82880.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/columns.5e35155a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/index.f4ac7424.js","assets/connector.f55f9440.js","assets/asyncComputed.fa71fe61.js","assets/icons.0f3b4022.js","assets/CrudView.fcf5e700.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.9e25a95e.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.5d859339.js"),["assets/Tables.5d859339.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/icons.0f3b4022.js","assets/asyncComputed.fa71fe61.js","assets/columns.5e35155a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/index.f4ac7424.js","assets/tables.58814a84.js","assets/string.ec0cb8cb.js","assets/CrudView.fcf5e700.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.9e25a95e.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.d36034ee.js"),["assets/ApiKeys.d36034ee.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.fa71fe61.js","assets/project.7f1a752a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/member.2b41e042.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/icons.0f3b4022.js","assets/CrudView.fcf5e700.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.9e25a95e.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.15b576f9.js"),["assets/Logs.15b576f9.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/build.423424de.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/asyncComputed.fa71fe61.js","assets/ant-design.2fadf44f.js","assets/Title.289b0fc7.js","assets/index.f3c339bc.js","assets/index.18370ef4.js","assets/dayjs.46fc2631.js","assets/index.b048d0fb.js","assets/Form.072610c2.js","assets/index.1f2284af.js","assets/CollapsePanel.ade19396.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/index.9e25a95e.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.8cf09403.js"),["assets/ProjectSettings.8cf09403.js","assets/asyncComputed.fa71fe61.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/project.7f1a752a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/Title.289b0fc7.js","assets/index.1f2284af.js","assets/index.d1e42202.js","assets/Form.072610c2.js","assets/index.0ce368d1.js","assets/index.9e25a95e.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.f13f6a73.js"),["assets/EnvVars.f13f6a73.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.fa71fe61.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/icons.0f3b4022.js","assets/CrudView.fcf5e700.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.9e25a95e.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.b462ab1b.js"),["assets/Files.b462ab1b.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/columns.5e35155a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/index.f4ac7424.js","assets/asyncComputed.fa71fe61.js","assets/CrudView.fcf5e700.js","assets/icons.0f3b4022.js","assets/index.1f2284af.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/url.c4798fbe.js","assets/index.44e2aeda.js","assets/index.18370ef4.js","assets/index.d1e42202.js","assets/index.1b2e7cff.js","assets/index.0ce368d1.js","assets/CrudView.b7607004.css","assets/index.9e25a95e.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.92319644.js"),["assets/TableEditor.92319644.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/BaseLayout.f01bc5b9.js","assets/BaseLayout.2d5b030e.css","assets/tables.58814a84.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/columns.5e35155a.js","assets/index.f4ac7424.js","assets/string.ec0cb8cb.js","assets/asyncComputed.fa71fe61.js","assets/popupNotifcation.073cad6c.js","assets/index.09e59eef.js","assets/index.0ce368d1.js","assets/Title.289b0fc7.js","assets/Form.072610c2.js","assets/index.fa35dd7a.js","assets/icons.0f3b4022.js","assets/index.1b2e7cff.js","assets/CircularLoading.d03c9831.js","assets/CircularLoading.f81b57b4.css","assets/project.7f1a752a.js","assets/organization.ae6515f1.js","assets/TabPane.7029665a.js","assets/index.d5886b6a.js","assets/index.9e25a95e.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.f2217047.js"),["assets/ConnectorEditor.f2217047.js","assets/outputWidgets.f4de17f7.js","assets/outputWidgets.e8fba759.css","assets/columns.5e35155a.js","assets/gateway.37954070.js","assets/activeRecord.c929782f.js","assets/pubsub.5aa8c360.js","assets/index.f4ac7424.js","assets/project.7f1a752a.js","assets/organization.ae6515f1.js","assets/connector.f55f9440.js","assets/asyncComputed.fa71fe61.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.e53b0b18.js","assets/ant-design.2fadf44f.js","assets/Title.289b0fc7.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.f01bc5b9.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.7029665a.js","assets/index.d5886b6a.js","assets/index.0ce368d1.js","assets/Form.072610c2.js","assets/index.1b2e7cff.js","assets/index.9e25a95e.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});d.beforeEach(async(o,t)=>{b(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await d.push({name:"login"});return}});export{P as A,u as E,R as a,d as r};
//# sourceMappingURL=router.c9a435eb.js.map
