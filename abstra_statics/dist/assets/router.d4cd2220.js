var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,B as v,b as D,T as a}from"./Base.626eaed0.js";import{aV as V,ct as u,D as j,U as c,ab as k,f as x,O as S,cY as E,S as l,q as U,g as z,h as J,_ as n}from"./outputWidgets.9f98148b.js";import{C as N}from"./FormItem.70c9de0b.js";import{b as I,a as w}from"./Text.9c37419b.js";import{A as O}from"./Title.792df510.js";import{u as B}from"./index.6f4e977b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b6c9d3be-c31e-45f9-8395-4574fcb0f370",t._sentryDebugIdIdentifier="sentry-dbid-b6c9d3be-c31e-45f9-8395-4574fcb0f370")}catch{}})();s.useInjectFormItemContext=V;s.ItemRest=u;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(u.name,u),t};const tt=j(N);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o};const C=()=>S(c(c({},D()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:r}=e;const i=c(c({},t),r),{ellipsis:P,rel:d}=i,h=W(i,["ellipsis","rel"]);k();const f=c(c({},h),{rel:d===void 0&&h.target==="_blank"?"noopener noreferrer":d,ellipsis:!!P,component:"a"});return delete f.navigate,x(v,f,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const A=_;a.Text=I;a.Title=O;a.Paragraph=w;a.Link=A;a.Base=v;a.install=function(t){return t.component(a.name,a),t.component(a.Text.displayName,I),t.component(a.Title.displayName,O),t.component(a.Paragraph.displayName,w),t.component(a.Link.displayName,A),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+E.toUpper(E.snakeCase(t)),o={VITE_SENTRY_RELEASE:"b97f487ffd8810c2901a728b320ccef37877a1ba",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},b={authn:g("authn"),cloudApi:g("cloud-api")},p=class{async authenticate(e){try{const o=await fetch(`${b.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const r=await fetch(`${b.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!r.ok)throw new Error(await r.text());const i=await r.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(p.key,e)}getJWT(){return l.get(p.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=U(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(p.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=p;y(m,"key","abstracloud:auth:jwt");const Y=new m,T=z({history:J("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.1ea44090.js"),["assets/WidgetPreview.1ea44090.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.61f41038.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/Steps.8b9b7afa.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.568df9c4.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.ff6b60fc.js"),["assets/Login.ff6b60fc.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/member.4db72d4b.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/icons.ffe08e2b.js","assets/CircularLoading.f0ff91e0.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.568df9c4.js","assets/WidgetsFrame.0816a5f5.css","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/Text.9c37419b.js","assets/Title.792df510.js","assets/index.6f4e977b.js","assets/Login.92d70f03.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.b1e7e215.js"),["assets/ReturnApiKey.b1e7e215.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/project.f3fcdd3c.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/organization.fa66c711.js","assets/apiKey.eec14bd5.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/asyncComputed.ac92e00e.js","assets/Title.792df510.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/Text.9c37419b.js","assets/index.9be32f7c.js","assets/index.6f4e977b.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.9f202f1a.js"),["assets/Organizations.9f202f1a.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/icons.ffe08e2b.js","assets/asyncComputed.ac92e00e.js","assets/organization.fa66c711.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.0b625875.js","assets/logo.084e5d7c.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/index.bce6b882.js","assets/Navbar.f4a98ea3.css","assets/CrudView.0f87f959.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.be520d68.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.daef35d0.js","assets/index.6f4e977b.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.abe07eb5.js"),["assets/Organization.abe07eb5.js","assets/Sidebar.010603f3.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/icons.ffe08e2b.js","assets/Tooltip.22cacbdf.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.0b625875.js","assets/logo.084e5d7c.js","assets/asyncComputed.ac92e00e.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/index.bce6b882.js","assets/Navbar.f4a98ea3.css","assets/organization.fa66c711.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/BaseLayout.be520d68.js","assets/BaseLayout.2d5b030e.css","assets/Title.792df510.js","assets/index.6f4e977b.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.599b057a.js"),["assets/Projects.599b057a.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/icons.ffe08e2b.js","assets/asyncComputed.ac92e00e.js","assets/project.f3fcdd3c.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/organization.fa66c711.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/CrudView.0f87f959.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/ant-design.daef35d0.js","assets/index.6f4e977b.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.7cbac7bf.js"),["assets/OrganizationSettings.7cbac7bf.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.4f37e056.js"),["assets/Members.4f37e056.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.ac92e00e.js","assets/member.4db72d4b.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/CrudView.0f87f959.js","assets/icons.ffe08e2b.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.6f4e977b.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.c760acfa.js"),["assets/Project.c760acfa.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/BaseLayout.be520d68.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.ac92e00e.js","assets/project.f3fcdd3c.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/organization.fa66c711.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.0b625875.js","assets/logo.084e5d7c.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/index.bce6b882.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.010603f3.js","assets/icons.ffe08e2b.js","assets/Tooltip.22cacbdf.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Title.792df510.js","assets/index.6f4e977b.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.9446a1db.js"),["assets/Builds.9446a1db.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.ac92e00e.js","assets/project.f3fcdd3c.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/build.fab139a5.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/string.3f093ef9.js","assets/icons.ffe08e2b.js","assets/CrudView.0f87f959.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.6f4e977b.js","assets/Builds.e814da0c.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.f410d866.js"),["assets/Connectors.f410d866.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/columns.4ae8f913.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/index.cf4c23b9.js","assets/connector.12178992.js","assets/asyncComputed.ac92e00e.js","assets/icons.ffe08e2b.js","assets/CrudView.0f87f959.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.6f4e977b.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.9df90187.js"),["assets/Tables.9df90187.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/icons.ffe08e2b.js","assets/asyncComputed.ac92e00e.js","assets/columns.4ae8f913.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/index.cf4c23b9.js","assets/tables.2b9f350f.js","assets/string.3f093ef9.js","assets/CrudView.0f87f959.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.6f4e977b.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.90816af0.js"),["assets/ApiKeys.90816af0.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.ac92e00e.js","assets/project.f3fcdd3c.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/member.4db72d4b.js","assets/apiKey.eec14bd5.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/icons.ffe08e2b.js","assets/CrudView.0f87f959.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.6f4e977b.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.87fe9805.js"),["assets/Logs.87fe9805.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/build.fab139a5.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/asyncComputed.ac92e00e.js","assets/ant-design.daef35d0.js","assets/transButton.cb48a29d.js","assets/index.5e438c9e.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/dayjs.c56cb01e.js","assets/index.b048d0fb.js","assets/Title.792df510.js","assets/CollapsePanel.aabbeb29.js","assets/index.db13678f.js","assets/index.6f4e977b.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.909d834d.js"),["assets/ProjectSettings.909d834d.js","assets/asyncComputed.ac92e00e.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/project.f3fcdd3c.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/Title.792df510.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/Text.9c37419b.js","assets/index.ac1a1334.js","assets/index.6f4e977b.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.e1aada7d.js"),["assets/EnvVars.e1aada7d.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.ac92e00e.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/icons.ffe08e2b.js","assets/CrudView.0f87f959.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.6f4e977b.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.f9a82080.js"),["assets/Files.f9a82080.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/columns.4ae8f913.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/index.cf4c23b9.js","assets/asyncComputed.ac92e00e.js","assets/CrudView.0f87f959.js","assets/icons.ffe08e2b.js","assets/Text.9c37419b.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/url.17ba3205.js","assets/Title.792df510.js","assets/index.ac1a1334.js","assets/index.db13678f.js","assets/index.9be32f7c.js","assets/CrudView.1d309d6a.css","assets/index.6f4e977b.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.bd72705c.js"),["assets/TableEditor.bd72705c.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/BaseLayout.be520d68.js","assets/BaseLayout.2d5b030e.css","assets/tables.2b9f350f.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/columns.4ae8f913.js","assets/index.cf4c23b9.js","assets/string.3f093ef9.js","assets/asyncComputed.ac92e00e.js","assets/popupNotifcation.334ef5ae.js","assets/index.db13678f.js","assets/Base.626eaed0.js","assets/FormItem.70c9de0b.js","assets/transButton.cb48a29d.js","assets/index.5f383082.js","assets/isNumeric.75337b1e.js","assets/index.a27465df.js","assets/icons.ffe08e2b.js","assets/CircularLoading.f0ff91e0.js","assets/CircularLoading.f81b57b4.css","assets/project.f3fcdd3c.js","assets/organization.fa66c711.js","assets/TabPane.93997ea4.js","assets/index.bce6b882.js","assets/Text.9c37419b.js","assets/Title.792df510.js","assets/index.6f4e977b.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.eecb91e8.js"),["assets/ConnectorEditor.eecb91e8.js","assets/outputWidgets.9f98148b.js","assets/outputWidgets.0f63bd62.css","assets/columns.4ae8f913.js","assets/gateway.4fecaa36.js","assets/activeRecord.f0e4c061.js","assets/pubsub.b2ed526c.js","assets/index.cf4c23b9.js","assets/project.f3fcdd3c.js","assets/organization.fa66c711.js","assets/connector.12178992.js","assets/asyncComputed.ac92e00e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.e6118893.js","assets/ant-design.daef35d0.js","assets/transButton.cb48a29d.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.be520d68.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.93997ea4.js","assets/FormItem.70c9de0b.js","assets/index.bce6b882.js","assets/Base.626eaed0.js","assets/index.db13678f.js","assets/Text.9c37419b.js","assets/Title.792df510.js","assets/index.6f4e977b.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});T.beforeEach(async(t,e)=>{B(t,e);const o=Y.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await T.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{tt as A,b as E,A as L,Y as a,T as r};
//# sourceMappingURL=router.d4cd2220.js.map
