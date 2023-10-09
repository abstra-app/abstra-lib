var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.85fa9137.js";import{F as f,cZ as p,S as s,q as g,g as v,h as b,_ as n}from"./outputWidgets.ec044eb8.js";import{u as I}from"./index.6e43b5b9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="3ec3ab8f-f1dd-488e-9c68-9490e3e7efab",o._sentryDebugIdIdentifier="sentry-dbid-3ec3ab8f-f1dd-488e-9c68-9490e3e7efab")}catch{}})();const P=f(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"029f9b7a35a661c59d993c6cca1bb6b8399376a5",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},u={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${u.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${u.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,d=v({history:b("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.5d3f01bc.js"),["assets/WidgetPreview.5d3f01bc.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a4950b2a.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/Steps.bcfd1c82.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.27568d20.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.7ffcf274.js"),["assets/Login.7ffcf274.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/icons.a554ebda.js","assets/CircularLoading.fd7c6289.js","assets/CircularLoading.f81b57b4.css","assets/member.adc31e7b.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/WidgetsFrame.27568d20.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.85fa9137.js","assets/index.6e43b5b9.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.89f7c95b.js"),["assets/Organizations.89f7c95b.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/icons.a554ebda.js","assets/asyncComputed.70e28ece.js","assets/organization.97fde710.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/index.ca493aff.js","assets/Navbar.vue_vue_type_script_setup_true_lang.77710e38.js","assets/logo.084e5d7c.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/index.185a1704.js","assets/index.10d6c7c5.js","assets/Navbar.f4a98ea3.css","assets/CrudView.a07f1600.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/CrudView.396a8168.css","assets/BaseLayout.8ae9d39e.js","assets/BaseLayout.282f66f6.css","assets/ant-design.50ece8f6.js","assets/index.6e43b5b9.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.a39c2680.js"),["assets/Organization.a39c2680.js","assets/Sidebar.682e1980.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/icons.a554ebda.js","assets/Tooltip.a98106f8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.77710e38.js","assets/logo.084e5d7c.js","assets/asyncComputed.70e28ece.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/index.185a1704.js","assets/index.10d6c7c5.js","assets/Navbar.f4a98ea3.css","assets/organization.97fde710.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/index.ca493aff.js","assets/BaseLayout.8ae9d39e.js","assets/BaseLayout.282f66f6.css","assets/index.6e43b5b9.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.5dfc667b.js"),["assets/Projects.5dfc667b.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/icons.a554ebda.js","assets/asyncComputed.70e28ece.js","assets/project.ac37c9cb.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/organization.97fde710.js","assets/index.ca493aff.js","assets/CrudView.a07f1600.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/ant-design.50ece8f6.js","assets/index.6e43b5b9.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.083c244c.js"),["assets/OrganizationSettings.083c244c.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.1dd73b2b.js"),["assets/Members.1dd73b2b.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.70e28ece.js","assets/member.adc31e7b.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/index.ca493aff.js","assets/CrudView.a07f1600.js","assets/icons.a554ebda.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.6e43b5b9.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.4c7c3b79.js"),["assets/Project.4c7c3b79.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.8ae9d39e.js","assets/BaseLayout.282f66f6.css","assets/asyncComputed.70e28ece.js","assets/project.ac37c9cb.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/organization.97fde710.js","assets/index.ca493aff.js","assets/Navbar.vue_vue_type_script_setup_true_lang.77710e38.js","assets/logo.084e5d7c.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/index.185a1704.js","assets/index.10d6c7c5.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.682e1980.js","assets/icons.a554ebda.js","assets/Tooltip.a98106f8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.6e43b5b9.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.d6b19ce0.js"),["assets/Builds.d6b19ce0.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.70e28ece.js","assets/project.ac37c9cb.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/build.cf7d9ade.js","assets/index.ca493aff.js","assets/icons.a554ebda.js","assets/CrudView.a07f1600.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.6e43b5b9.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.8e956e55.js"),["assets/Connectors.8e956e55.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/index.ca493aff.js","assets/connector.65952de9.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/gateway.8ffe4c25.js","assets/asyncComputed.70e28ece.js","assets/icons.a554ebda.js","assets/CrudView.a07f1600.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.6e43b5b9.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.063c517d.js"),["assets/Tables.063c517d.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/icons.a554ebda.js","assets/asyncComputed.70e28ece.js","assets/index.ca493aff.js","assets/tables.3a786a7c.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/CrudView.a07f1600.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.6e43b5b9.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.3dc4061c.js"),["assets/ApiKeys.3dc4061c.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.70e28ece.js","assets/project.ac37c9cb.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/member.adc31e7b.js","assets/index.ca493aff.js","assets/icons.a554ebda.js","assets/CrudView.a07f1600.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.6e43b5b9.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.28a72fc4.js"),["assets/Logs.28a72fc4.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/build.cf7d9ade.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/index.ca493aff.js","assets/asyncComputed.70e28ece.js","assets/ant-design.50ece8f6.js","assets/Title.85fa9137.js","assets/index.c22d3ad0.js","assets/index.67245513.js","assets/dayjs.f80e2224.js","assets/index.b048d0fb.js","assets/Form.316ac787.js","assets/index.cdce8068.js","assets/CollapsePanel.8e659084.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/index.6e43b5b9.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.81969da7.js"),["assets/ProjectSettings.81969da7.js","assets/asyncComputed.70e28ece.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/project.ac37c9cb.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/index.ca493aff.js","assets/index.6e43b5b9.js","assets/Title.85fa9137.js","assets/index.cdce8068.js","assets/index.d97f12e1.js","assets/Form.316ac787.js","assets/index.185a1704.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.34be7455.js"),["assets/EnvVars.34be7455.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.70e28ece.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/index.ca493aff.js","assets/icons.a554ebda.js","assets/CrudView.a07f1600.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.6e43b5b9.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.787e8d23.js"),["assets/Files.787e8d23.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/index.ca493aff.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/asyncComputed.70e28ece.js","assets/CrudView.a07f1600.js","assets/icons.a554ebda.js","assets/index.cdce8068.js","assets/Title.85fa9137.js","assets/Form.316ac787.js","assets/url.a1da359b.js","assets/index.67245513.js","assets/index.d97f12e1.js","assets/index.cd569242.js","assets/index.185a1704.js","assets/CrudView.396a8168.css","assets/index.6e43b5b9.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.01567364.js"),["assets/TableEditor.01567364.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.8ae9d39e.js","assets/BaseLayout.282f66f6.css","assets/tables.3a786a7c.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/asyncComputed.70e28ece.js","assets/popupNotifcation.b0695304.js","assets/index.6e43b5b9.js","assets/CircularLoading.fd7c6289.js","assets/CircularLoading.f81b57b4.css","assets/icons.a554ebda.js","assets/project.ac37c9cb.js","assets/organization.97fde710.js","assets/index.ca493aff.js","assets/TabPane.e94c4a37.js","assets/Title.85fa9137.js","assets/index.10d6c7c5.js","assets/index.185a1704.js","assets/TableEditor.d7e87188.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.b2fce4c0.js"),["assets/ConnectorEditor.b2fce4c0.js","assets/outputWidgets.ec044eb8.js","assets/outputWidgets.e6401203.css","assets/index.ca493aff.js","assets/project.ac37c9cb.js","assets/gateway.8ffe4c25.js","assets/activeRecord.eb528dd4.js","assets/pubsub.33b79e26.js","assets/organization.97fde710.js","assets/connector.65952de9.js","assets/asyncComputed.70e28ece.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.c4f118cc.js","assets/ant-design.50ece8f6.js","assets/Title.85fa9137.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.8ae9d39e.js","assets/BaseLayout.282f66f6.css","assets/TabPane.e94c4a37.js","assets/index.10d6c7c5.js","assets/index.185a1704.js","assets/Form.316ac787.js","assets/index.cd569242.js","assets/index.6e43b5b9.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});d.beforeEach(async(o,t)=>{I(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await d.push({name:"login"});return}});export{P as A,u as E,R as a,d as r};
//# sourceMappingURL=router.8cea9830.js.map
