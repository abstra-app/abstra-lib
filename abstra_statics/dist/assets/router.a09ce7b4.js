var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.875549d8.js";import{E as f,cV as p,S as s,q as g,g as v,h as b,_ as n}from"./outputWidgets.3a1a3161.js";import{u as I}from"./index.62bc48c6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a540b80b-0ca0-48f5-a4fc-f7a30995b585",o._sentryDebugIdIdentifier="sentry-dbid-a540b80b-0ca0-48f5-a4fc-f7a30995b585")}catch{}})();const P=f(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"030dd22f401ce6e51a36346c763b84b786ab9dcb",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},u={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${u.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${u.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,d=v({history:b("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.30ba3b54.js"),["assets/WidgetPreview.30ba3b54.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.2cee2bbd.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/Steps.24c62716.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.1b51b23f.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.293af140.js"),["assets/Login.293af140.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/member.53164ecd.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/icons.d8ed105c.js","assets/CircularLoading.ad65c002.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.1b51b23f.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.875549d8.js","assets/index.62bc48c6.js","assets/Login.74ccb377.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.e3a0c091.js"),["assets/Organizations.e3a0c091.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/icons.d8ed105c.js","assets/asyncComputed.3068c2f0.js","assets/organization.e9a35c36.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.17a7f3af.js","assets/logo.084e5d7c.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/index.0d5ed1d0.js","assets/index.bbf19cac.js","assets/Navbar.f4a98ea3.css","assets/CrudView.3b8ef4e3.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/CrudView.b7607004.css","assets/BaseLayout.3d21d871.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.58442a38.js","assets/index.62bc48c6.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.b70638b0.js"),["assets/Organization.b70638b0.js","assets/Sidebar.3524c91b.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/icons.d8ed105c.js","assets/Tooltip.c3c71d11.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.17a7f3af.js","assets/logo.084e5d7c.js","assets/asyncComputed.3068c2f0.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/index.0d5ed1d0.js","assets/index.bbf19cac.js","assets/Navbar.f4a98ea3.css","assets/organization.e9a35c36.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/BaseLayout.3d21d871.js","assets/BaseLayout.2d5b030e.css","assets/index.62bc48c6.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.dceb4dfb.js"),["assets/Projects.dceb4dfb.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/icons.d8ed105c.js","assets/asyncComputed.3068c2f0.js","assets/project.878b12c8.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/organization.e9a35c36.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/CrudView.3b8ef4e3.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/ant-design.58442a38.js","assets/index.62bc48c6.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.0807bb5a.js"),["assets/OrganizationSettings.0807bb5a.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.c97fa5c6.js"),["assets/Members.c97fa5c6.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.3068c2f0.js","assets/member.53164ecd.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/CrudView.3b8ef4e3.js","assets/icons.d8ed105c.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.62bc48c6.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.9be98672.js"),["assets/Project.9be98672.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/BaseLayout.3d21d871.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.3068c2f0.js","assets/project.878b12c8.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/organization.e9a35c36.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.17a7f3af.js","assets/logo.084e5d7c.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/index.0d5ed1d0.js","assets/index.bbf19cac.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.3524c91b.js","assets/icons.d8ed105c.js","assets/Tooltip.c3c71d11.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.62bc48c6.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.e64a2e1d.js"),["assets/Builds.e64a2e1d.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.3068c2f0.js","assets/project.878b12c8.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/build.80e276e6.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/string.6efd7287.js","assets/icons.d8ed105c.js","assets/CrudView.3b8ef4e3.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.62bc48c6.js","assets/Builds.a841386a.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.831760cd.js"),["assets/Connectors.831760cd.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/columns.4d7cbf00.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/index.f4ac7424.js","assets/connector.766b76b8.js","assets/asyncComputed.3068c2f0.js","assets/icons.d8ed105c.js","assets/CrudView.3b8ef4e3.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.62bc48c6.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.8ca60afc.js"),["assets/Tables.8ca60afc.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/icons.d8ed105c.js","assets/asyncComputed.3068c2f0.js","assets/columns.4d7cbf00.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/index.f4ac7424.js","assets/tables.4d414f1c.js","assets/string.6efd7287.js","assets/CrudView.3b8ef4e3.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.62bc48c6.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.9677bdfb.js"),["assets/ApiKeys.9677bdfb.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.3068c2f0.js","assets/project.878b12c8.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/member.53164ecd.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/icons.d8ed105c.js","assets/CrudView.3b8ef4e3.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.62bc48c6.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.9c6a2c83.js"),["assets/Logs.9c6a2c83.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/build.80e276e6.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/asyncComputed.3068c2f0.js","assets/ant-design.58442a38.js","assets/Title.875549d8.js","assets/index.ac1afe8f.js","assets/index.c9ce22b0.js","assets/dayjs.16da6fb3.js","assets/index.b048d0fb.js","assets/Form.58fb677e.js","assets/Text.499f5d9d.js","assets/CollapsePanel.130e3c33.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/index.62bc48c6.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.33310aaa.js"),["assets/ProjectSettings.33310aaa.js","assets/asyncComputed.3068c2f0.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/project.878b12c8.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/Title.875549d8.js","assets/Text.499f5d9d.js","assets/index.46bd6cba.js","assets/Form.58fb677e.js","assets/index.0d5ed1d0.js","assets/index.62bc48c6.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.8265b8cc.js"),["assets/EnvVars.8265b8cc.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/asyncComputed.3068c2f0.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/icons.d8ed105c.js","assets/CrudView.3b8ef4e3.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.62bc48c6.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.bd1eef5e.js"),["assets/Files.bd1eef5e.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/columns.4d7cbf00.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/index.f4ac7424.js","assets/asyncComputed.3068c2f0.js","assets/CrudView.3b8ef4e3.js","assets/icons.d8ed105c.js","assets/Text.499f5d9d.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/url.8abf1d81.js","assets/index.4d93ecb2.js","assets/index.930d127f.js","assets/index.c9ce22b0.js","assets/index.46bd6cba.js","assets/index.1f4629a2.js","assets/index.0d5ed1d0.js","assets/CrudView.b7607004.css","assets/index.62bc48c6.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.5e321fba.js"),["assets/TableEditor.5e321fba.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/BaseLayout.3d21d871.js","assets/BaseLayout.2d5b030e.css","assets/tables.4d414f1c.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/columns.4d7cbf00.js","assets/index.f4ac7424.js","assets/string.6efd7287.js","assets/asyncComputed.3068c2f0.js","assets/popupNotifcation.892a98a3.js","assets/index.e99dcdb5.js","assets/index.0d5ed1d0.js","assets/Title.875549d8.js","assets/Form.58fb677e.js","assets/index.e8046a9e.js","assets/icons.d8ed105c.js","assets/index.1f4629a2.js","assets/CircularLoading.ad65c002.js","assets/CircularLoading.f81b57b4.css","assets/project.878b12c8.js","assets/organization.e9a35c36.js","assets/TabPane.8b526da4.js","assets/index.bbf19cac.js","assets/index.62bc48c6.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.df483ab7.js"),["assets/ConnectorEditor.df483ab7.js","assets/outputWidgets.3a1a3161.js","assets/outputWidgets.e8fba759.css","assets/columns.4d7cbf00.js","assets/gateway.32cbedf2.js","assets/activeRecord.8f2918d8.js","assets/pubsub.2dc7d89a.js","assets/index.f4ac7424.js","assets/project.878b12c8.js","assets/organization.e9a35c36.js","assets/connector.766b76b8.js","assets/asyncComputed.3068c2f0.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.935cfca1.js","assets/ant-design.58442a38.js","assets/Title.875549d8.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.3d21d871.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.8b526da4.js","assets/index.bbf19cac.js","assets/index.0d5ed1d0.js","assets/Form.58fb677e.js","assets/index.1f4629a2.js","assets/index.62bc48c6.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});d.beforeEach(async(o,t)=>{I(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await d.push({name:"login"});return}});export{P as A,u as E,R as a,d as r};
//# sourceMappingURL=router.a09ce7b4.js.map
