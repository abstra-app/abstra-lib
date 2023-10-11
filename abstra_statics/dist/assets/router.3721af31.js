var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.edf11ba9.js";import{F as g,cZ as p,S as s,q as v,g as f,h as I,_ as n}from"./outputWidgets.8fc6742a.js";import{u as b}from"./index.56510f21.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="94e3b145-cb51-4c46-a50c-5ed81060bc0a",o._sentryDebugIdIdentifier="sentry-dbid-94e3b145-cb51-4c46-a50c-5ed81060bc0a")}catch{}})();const P=g(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"3b7822e9df069e1a4fa7493681e0f3283e04858e",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},u={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${u.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${u.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,d=f({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.a6c133ed.js"),["assets/WidgetPreview.a6c133ed.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.6b324fae.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/Steps.23bce1c8.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.23fe91c2.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.22fb80fb.js"),["assets/Login.22fb80fb.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/icons.e3e65291.js","assets/CircularLoading.6c69d846.js","assets/CircularLoading.f81b57b4.css","assets/member.af371aa5.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/WidgetsFrame.23fe91c2.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.edf11ba9.js","assets/index.56510f21.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.d3be6726.js"),["assets/Organizations.d3be6726.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/icons.e3e65291.js","assets/asyncComputed.46a55a77.js","assets/organization.295c695c.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/index.2752a30b.js","assets/Navbar.vue_vue_type_script_setup_true_lang.44a91086.js","assets/logo.084e5d7c.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/index.ff0d0cbd.js","assets/index.a9665108.js","assets/Navbar.f4a98ea3.css","assets/CrudView.59fe4950.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/CrudView.396a8168.css","assets/BaseLayout.f9cbcba1.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.8a568ac7.js","assets/index.56510f21.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.6a6e5712.js"),["assets/Organization.6a6e5712.js","assets/Sidebar.5da0654b.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/icons.e3e65291.js","assets/Tooltip.1adfbfb0.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.44a91086.js","assets/logo.084e5d7c.js","assets/asyncComputed.46a55a77.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/index.ff0d0cbd.js","assets/index.a9665108.js","assets/Navbar.f4a98ea3.css","assets/organization.295c695c.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/index.2752a30b.js","assets/BaseLayout.f9cbcba1.js","assets/BaseLayout.2d5b030e.css","assets/index.56510f21.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.70269585.js"),["assets/Projects.70269585.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/icons.e3e65291.js","assets/asyncComputed.46a55a77.js","assets/project.def37ddd.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/organization.295c695c.js","assets/index.2752a30b.js","assets/CrudView.59fe4950.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/ant-design.8a568ac7.js","assets/index.56510f21.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.9bfe433c.js"),["assets/OrganizationSettings.9bfe433c.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.57cf6d5d.js"),["assets/Members.57cf6d5d.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.46a55a77.js","assets/member.af371aa5.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/index.2752a30b.js","assets/CrudView.59fe4950.js","assets/icons.e3e65291.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.56510f21.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.065911d2.js"),["assets/Project.065911d2.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.f9cbcba1.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.46a55a77.js","assets/project.def37ddd.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/organization.295c695c.js","assets/index.2752a30b.js","assets/Navbar.vue_vue_type_script_setup_true_lang.44a91086.js","assets/logo.084e5d7c.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/index.ff0d0cbd.js","assets/index.a9665108.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.5da0654b.js","assets/icons.e3e65291.js","assets/Tooltip.1adfbfb0.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.56510f21.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.a339b452.js"),["assets/Builds.a339b452.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.46a55a77.js","assets/project.def37ddd.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/build.05bb8346.js","assets/index.2752a30b.js","assets/string.5cddf014.js","assets/icons.e3e65291.js","assets/CrudView.59fe4950.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.56510f21.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.acb3ebaa.js"),["assets/Connectors.acb3ebaa.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/index.2752a30b.js","assets/connector.3b4266f9.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/gateway.2d8a8070.js","assets/asyncComputed.46a55a77.js","assets/icons.e3e65291.js","assets/CrudView.59fe4950.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.56510f21.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.b31653d1.js"),["assets/Tables.b31653d1.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/icons.e3e65291.js","assets/asyncComputed.46a55a77.js","assets/index.2752a30b.js","assets/tables.82ee78c4.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/string.5cddf014.js","assets/CrudView.59fe4950.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.56510f21.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.402aa554.js"),["assets/ApiKeys.402aa554.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.46a55a77.js","assets/project.def37ddd.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/member.af371aa5.js","assets/index.2752a30b.js","assets/icons.e3e65291.js","assets/CrudView.59fe4950.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.56510f21.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.cf412af6.js"),["assets/Logs.cf412af6.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/build.05bb8346.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/index.2752a30b.js","assets/asyncComputed.46a55a77.js","assets/ant-design.8a568ac7.js","assets/Title.edf11ba9.js","assets/index.d7f74e62.js","assets/index.464cd672.js","assets/dayjs.6a529666.js","assets/index.b048d0fb.js","assets/Form.9563d4ee.js","assets/index.5806b4ce.js","assets/CollapsePanel.d7e6c2ab.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/index.56510f21.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.d5aaf50e.js"),["assets/ProjectSettings.d5aaf50e.js","assets/asyncComputed.46a55a77.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/project.def37ddd.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/index.2752a30b.js","assets/index.56510f21.js","assets/Title.edf11ba9.js","assets/index.5806b4ce.js","assets/index.bb5e5e15.js","assets/Form.9563d4ee.js","assets/index.ff0d0cbd.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.12a113ca.js"),["assets/EnvVars.12a113ca.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.46a55a77.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/index.2752a30b.js","assets/icons.e3e65291.js","assets/CrudView.59fe4950.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.56510f21.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.5fcbd10a.js"),["assets/Files.5fcbd10a.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/index.2752a30b.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/asyncComputed.46a55a77.js","assets/CrudView.59fe4950.js","assets/icons.e3e65291.js","assets/index.5806b4ce.js","assets/Title.edf11ba9.js","assets/Form.9563d4ee.js","assets/url.50f613f1.js","assets/index.464cd672.js","assets/index.bb5e5e15.js","assets/index.3e42ea2a.js","assets/index.ff0d0cbd.js","assets/CrudView.396a8168.css","assets/index.56510f21.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.a9ece43d.js"),["assets/TableEditor.a9ece43d.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.f9cbcba1.js","assets/BaseLayout.2d5b030e.css","assets/tables.82ee78c4.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/string.5cddf014.js","assets/asyncComputed.46a55a77.js","assets/popupNotifcation.07aa9428.js","assets/CircularLoading.6c69d846.js","assets/CircularLoading.f81b57b4.css","assets/icons.e3e65291.js","assets/index.ff0d0cbd.js","assets/Title.edf11ba9.js","assets/project.def37ddd.js","assets/organization.295c695c.js","assets/index.2752a30b.js","assets/TabPane.1695291b.js","assets/index.a9665108.js","assets/index.56510f21.js","assets/TableEditor.3d42ae71.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.49b89520.js"),["assets/ConnectorEditor.49b89520.js","assets/outputWidgets.8fc6742a.js","assets/outputWidgets.e6401203.css","assets/index.2752a30b.js","assets/project.def37ddd.js","assets/gateway.2d8a8070.js","assets/activeRecord.4c126cf1.js","assets/pubsub.6aa98c82.js","assets/organization.295c695c.js","assets/connector.3b4266f9.js","assets/asyncComputed.46a55a77.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3de97075.js","assets/ant-design.8a568ac7.js","assets/Title.edf11ba9.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.f9cbcba1.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.1695291b.js","assets/index.a9665108.js","assets/index.ff0d0cbd.js","assets/Form.9563d4ee.js","assets/index.3e42ea2a.js","assets/index.56510f21.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});d.beforeEach(async(o,t)=>{b(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await d.push({name:"login"});return}});export{P as A,u as E,R as a,d as r};
//# sourceMappingURL=router.3721af31.js.map
