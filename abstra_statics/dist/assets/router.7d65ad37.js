var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.e22e1fa6.js";import{F as f,cZ as p,S as s,q as g,g as v,h as I,_ as n}from"./outputWidgets.e02beef6.js";import{u as w}from"./index.912df764.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="65d56dcc-115d-4880-8176-24b59f6ffc5a",o._sentryDebugIdIdentifier="sentry-dbid-65d56dcc-115d-4880-8176-24b59f6ffc5a")}catch{}})();const P=f(E),b=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"67c4ac083b1adaa7eefb2ecaa9771cea5f7f6eba",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(b()?y[o]:T[o])},d={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${d.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${d.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,u=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.f093a518.js"),["assets/WidgetPreview.f093a518.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.93edf6d7.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/Steps.b8cb400d.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.8d40eca9.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.efa5b71e.js"),["assets/Login.efa5b71e.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/icons.3483124d.js","assets/CircularLoading.2f0b1dea.js","assets/CircularLoading.f81b57b4.css","assets/member.0a983a3a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/WidgetsFrame.8d40eca9.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.e22e1fa6.js","assets/index.912df764.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.1f71ac0a.js"),["assets/Organizations.1f71ac0a.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/icons.3483124d.js","assets/asyncComputed.8a8eb5ed.js","assets/organization.7d88b959.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/index.839163de.js","assets/Navbar.vue_vue_type_script_setup_true_lang.54e4b29e.js","assets/logo.084e5d7c.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/index.d6c33de7.js","assets/index.78a5283a.js","assets/Navbar.f4a98ea3.css","assets/CrudView.19dbd3f9.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/CrudView.396a8168.css","assets/BaseLayout.ffb7a75d.js","assets/BaseLayout.282f66f6.css","assets/ant-design.a4a654ba.js","assets/index.912df764.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.8ea1e6de.js"),["assets/Organization.8ea1e6de.js","assets/Sidebar.87273418.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/icons.3483124d.js","assets/Tooltip.d11afa78.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.54e4b29e.js","assets/logo.084e5d7c.js","assets/asyncComputed.8a8eb5ed.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/index.d6c33de7.js","assets/index.78a5283a.js","assets/Navbar.f4a98ea3.css","assets/organization.7d88b959.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/index.839163de.js","assets/BaseLayout.ffb7a75d.js","assets/BaseLayout.282f66f6.css","assets/index.912df764.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.ad7cbb8c.js"),["assets/Projects.ad7cbb8c.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/icons.3483124d.js","assets/asyncComputed.8a8eb5ed.js","assets/project.9dff013a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/organization.7d88b959.js","assets/index.839163de.js","assets/CrudView.19dbd3f9.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/ant-design.a4a654ba.js","assets/index.912df764.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.a9f1b45b.js"),["assets/OrganizationSettings.a9f1b45b.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.d911e271.js"),["assets/Members.d911e271.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.8a8eb5ed.js","assets/member.0a983a3a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/index.839163de.js","assets/CrudView.19dbd3f9.js","assets/icons.3483124d.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.912df764.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.a2c869b8.js"),["assets/Project.a2c869b8.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.ffb7a75d.js","assets/BaseLayout.282f66f6.css","assets/asyncComputed.8a8eb5ed.js","assets/project.9dff013a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/organization.7d88b959.js","assets/index.839163de.js","assets/Navbar.vue_vue_type_script_setup_true_lang.54e4b29e.js","assets/logo.084e5d7c.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/index.d6c33de7.js","assets/index.78a5283a.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.87273418.js","assets/icons.3483124d.js","assets/Tooltip.d11afa78.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.912df764.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.9a3c111c.js"),["assets/Builds.9a3c111c.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.8a8eb5ed.js","assets/project.9dff013a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/build.888c944d.js","assets/index.839163de.js","assets/icons.3483124d.js","assets/CrudView.19dbd3f9.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.912df764.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.d1a1ec6b.js"),["assets/Connectors.d1a1ec6b.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/index.839163de.js","assets/connector.f24e32f8.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/gateway.0489454f.js","assets/asyncComputed.8a8eb5ed.js","assets/icons.3483124d.js","assets/CrudView.19dbd3f9.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.912df764.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.dbeb700d.js"),["assets/Tables.dbeb700d.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/icons.3483124d.js","assets/asyncComputed.8a8eb5ed.js","assets/index.839163de.js","assets/tables.a5df4d01.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/CrudView.19dbd3f9.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.912df764.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.e5fcbe85.js"),["assets/ApiKeys.e5fcbe85.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.8a8eb5ed.js","assets/project.9dff013a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/member.0a983a3a.js","assets/index.839163de.js","assets/icons.3483124d.js","assets/CrudView.19dbd3f9.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.912df764.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.a5079eb6.js"),["assets/Logs.a5079eb6.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/build.888c944d.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/index.839163de.js","assets/asyncComputed.8a8eb5ed.js","assets/ant-design.a4a654ba.js","assets/Title.e22e1fa6.js","assets/index.34d2daf7.js","assets/index.8f611a19.js","assets/dayjs.bac5ccc1.js","assets/index.b048d0fb.js","assets/Form.245db243.js","assets/index.ead1f18e.js","assets/CollapsePanel.9ea7c366.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/index.912df764.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.bf5b0f06.js"),["assets/ProjectSettings.bf5b0f06.js","assets/asyncComputed.8a8eb5ed.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/project.9dff013a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/index.839163de.js","assets/index.912df764.js","assets/Title.e22e1fa6.js","assets/index.ead1f18e.js","assets/index.abad8141.js","assets/Form.245db243.js","assets/index.d6c33de7.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.410a08ab.js"),["assets/EnvVars.410a08ab.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.8a8eb5ed.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/index.839163de.js","assets/icons.3483124d.js","assets/CrudView.19dbd3f9.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.912df764.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.d8f40cf6.js"),["assets/Files.d8f40cf6.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/index.839163de.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/asyncComputed.8a8eb5ed.js","assets/CrudView.19dbd3f9.js","assets/icons.3483124d.js","assets/index.ead1f18e.js","assets/Title.e22e1fa6.js","assets/Form.245db243.js","assets/url.1be78005.js","assets/index.8f611a19.js","assets/index.abad8141.js","assets/index.d3576ea4.js","assets/index.d6c33de7.js","assets/CrudView.396a8168.css","assets/index.912df764.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.eb558c83.js"),["assets/TableEditor.eb558c83.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.ffb7a75d.js","assets/BaseLayout.282f66f6.css","assets/tables.a5df4d01.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/asyncComputed.8a8eb5ed.js","assets/popupNotifcation.595449d4.js","assets/index.912df764.js","assets/CircularLoading.2f0b1dea.js","assets/CircularLoading.f81b57b4.css","assets/icons.3483124d.js","assets/project.9dff013a.js","assets/organization.7d88b959.js","assets/index.839163de.js","assets/TabPane.1f96cb90.js","assets/Title.e22e1fa6.js","assets/index.78a5283a.js","assets/index.d6c33de7.js","assets/TableEditor.d7e87188.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.954c8fb2.js"),["assets/ConnectorEditor.954c8fb2.js","assets/outputWidgets.e02beef6.js","assets/outputWidgets.e6401203.css","assets/index.839163de.js","assets/project.9dff013a.js","assets/gateway.0489454f.js","assets/activeRecord.11465593.js","assets/pubsub.9c3ab07b.js","assets/organization.7d88b959.js","assets/connector.f24e32f8.js","assets/asyncComputed.8a8eb5ed.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.28010d24.js","assets/ant-design.a4a654ba.js","assets/Title.e22e1fa6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.ffb7a75d.js","assets/BaseLayout.282f66f6.css","assets/TabPane.1f96cb90.js","assets/index.78a5283a.js","assets/index.d6c33de7.js","assets/Form.245db243.js","assets/index.d3576ea4.js","assets/index.912df764.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});u.beforeEach(async(o,t)=>{w(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await u.push({name:"login"});return}});export{P as A,d as E,R as a,u as r};
//# sourceMappingURL=router.7d65ad37.js.map
