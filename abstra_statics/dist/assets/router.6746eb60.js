var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,C as D,B as I,a as V,T as r}from"./Base.e549b429.js";import{aL as j,co as d,D as k,U as c,ab as x,f as S,O as U,cT as E,S as l,q as z,g as J,h as N,_ as n}from"./outputWidgets.5836624b.js";import{c as b,b as w}from"./Text.f4671d75.js";import{A as O}from"./Title.5e396b16.js";import{u as B}from"./index.ba80cfa7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="03721576-3012-4a3f-bfda-54da7394ecf4",t._sentryDebugIdIdentifier="sentry-dbid-03721576-3012-4a3f-bfda-54da7394ecf4")}catch{}})();s.useInjectFormItemContext=j;s.ItemRest=d;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(d.name,d),t};const Z=k(D);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>U(c(c({},V()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=c(c({},t),a),{ellipsis:P,rel:u}=i,h=W(i,["ellipsis","rel"]);x();const f=c(c({},h),{rel:u===void 0&&h.target==="_blank"?"noopener noreferrer":u,ellipsis:!!P,component:"a"});return delete f.navigate,S(I,f,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const A=_;r.Text=b;r.Title=O;r.Paragraph=w;r.Link=A;r.Base=I;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,b),t.component(r.Title.displayName,O),t.component(r.Paragraph.displayName,w),t.component(r.Link.displayName,A),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+E.toUpper(E.snakeCase(t)),o={VITE_SENTRY_RELEASE:"7c69303ef6ffd309553acfdb8a93ac8473ccfe78",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},T={authn:g("authn"),cloudApi:g("cloud-api")},p=class{async authenticate(e){try{const o=await fetch(`${T.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${T.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(p.key,e)}getJWT(){return l.get(p.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=z(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(p.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=p;y(m,"key","abstracloud:auth:jwt");const H=new m,v=J({history:N("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.bc99cf97.js"),["assets/WidgetPreview.bc99cf97.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.d0c2e445.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.615d8a9a.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.6013614a.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.1fb3f8be.js"),["assets/Login.1fb3f8be.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/member.5623883e.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/icons.715dfb53.js","assets/CircularLoading.a026e34a.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.615d8a9a.js","assets/WidgetsFrame.97ae601d.css","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/Text.f4671d75.js","assets/Title.5e396b16.js","assets/index.ba80cfa7.js","assets/Login.49d50616.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.aea0db65.js"),["assets/ReturnApiKey.aea0db65.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/project.07df296b.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/organization.5280e42d.js","assets/apiKey.f09e53cd.js","assets/columns.4caf6e41.js","assets/asyncComputed.134d378f.js","assets/Title.5e396b16.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/Text.f4671d75.js","assets/index.8d4f5f15.js","assets/index.ba80cfa7.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.a56762e8.js"),["assets/Organizations.a56762e8.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/icons.715dfb53.js","assets/asyncComputed.134d378f.js","assets/organization.5280e42d.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/Navbar.vue_vue_type_script_setup_true_lang.aa334900.js","assets/logo.084e5d7c.js","assets/index.c1743435.js","assets/transButton.c5f8a15c.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/Navbar.f4a98ea3.css","assets/CrudView.31db109e.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.9b7c0fae.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.26339c10.js","assets/index.ba80cfa7.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.cb99bfeb.js"),["assets/Organization.cb99bfeb.js","assets/Sidebar.afa62156.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/icons.715dfb53.js","assets/Tooltip.858b8c8c.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Navbar.vue_vue_type_script_setup_true_lang.aa334900.js","assets/logo.084e5d7c.js","assets/asyncComputed.134d378f.js","assets/index.c1743435.js","assets/transButton.c5f8a15c.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/Navbar.f4a98ea3.css","assets/organization.5280e42d.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/BaseLayout.9b7c0fae.js","assets/BaseLayout.2d5b030e.css","assets/Title.5e396b16.js","assets/index.ba80cfa7.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.07946596.js"),["assets/Projects.07946596.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/icons.715dfb53.js","assets/asyncComputed.134d378f.js","assets/project.07df296b.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/organization.5280e42d.js","assets/columns.4caf6e41.js","assets/CrudView.31db109e.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/ant-design.26339c10.js","assets/index.ba80cfa7.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.30f0df46.js"),["assets/OrganizationSettings.30f0df46.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.b5e94a12.js"),["assets/Members.b5e94a12.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.134d378f.js","assets/member.5623883e.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/CrudView.31db109e.js","assets/icons.715dfb53.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/index.ba80cfa7.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.02072afe.js"),["assets/Project.02072afe.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.9b7c0fae.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.134d378f.js","assets/project.07df296b.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/organization.5280e42d.js","assets/columns.4caf6e41.js","assets/Navbar.vue_vue_type_script_setup_true_lang.aa334900.js","assets/logo.084e5d7c.js","assets/index.c1743435.js","assets/transButton.c5f8a15c.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.afa62156.js","assets/icons.715dfb53.js","assets/Tooltip.858b8c8c.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Title.5e396b16.js","assets/index.ba80cfa7.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.c5c5abe7.js"),["assets/Builds.c5c5abe7.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.134d378f.js","assets/project.07df296b.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/build.66cef197.js","assets/columns.4caf6e41.js","assets/string.5f84c0cf.js","assets/icons.715dfb53.js","assets/CrudView.31db109e.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.ba80cfa7.js","assets/Builds.e814da0c.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.967ce49b.js"),["assets/Connectors.967ce49b.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/columns.4caf6e41.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/gateway.681b899a.js","assets/connector.93368e28.js","assets/asyncComputed.134d378f.js","assets/icons.715dfb53.js","assets/CrudView.31db109e.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/index.ba80cfa7.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.0529382b.js"),["assets/Tables.0529382b.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/icons.715dfb53.js","assets/asyncComputed.134d378f.js","assets/columns.4caf6e41.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/gateway.681b899a.js","assets/tables.df4d016e.js","assets/string.5f84c0cf.js","assets/CrudView.31db109e.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/index.ba80cfa7.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.56ad24d6.js"),["assets/ApiKeys.56ad24d6.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.134d378f.js","assets/project.07df296b.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/member.5623883e.js","assets/apiKey.f09e53cd.js","assets/columns.4caf6e41.js","assets/icons.715dfb53.js","assets/CrudView.31db109e.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.ba80cfa7.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.259fbb20.js"),["assets/Logs.259fbb20.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/build.66cef197.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/asyncComputed.134d378f.js","assets/ant-design.26339c10.js","assets/transButton.c5f8a15c.js","assets/dayjs.f5530f81.js","assets/index.9c4b21cc.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/index.b048d0fb.js","assets/Title.5e396b16.js","assets/CollapsePanel.f46c26bd.js","assets/index.636b5d6d.js","assets/index.ba80cfa7.js","assets/Logs.fe20517e.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.4a8b0552.js"),["assets/ProjectSettings.4a8b0552.js","assets/asyncComputed.134d378f.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/project.07df296b.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/Title.5e396b16.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/Text.f4671d75.js","assets/index.ba80cfa7.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.428c3ec0.js"),["assets/EnvVars.428c3ec0.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.134d378f.js","assets/gateway.681b899a.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/icons.715dfb53.js","assets/CrudView.31db109e.js","assets/Text.f4671d75.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/url.3b0a0ce2.js","assets/Title.5e396b16.js","assets/index.636b5d6d.js","assets/index.8d4f5f15.js","assets/CrudView.1d309d6a.css","assets/index.ba80cfa7.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.f060f482.js"),["assets/Files.f060f482.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/columns.4caf6e41.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/gateway.681b899a.js","assets/asyncComputed.134d378f.js","assets/ant-design.26339c10.js","assets/transButton.c5f8a15c.js","assets/popupNotifcation.beae79eb.js","assets/DownloadOutlined.219f4314.js","assets/index.e5f47d1a.js","assets/TabPane.dba57410.js","assets/Base.e549b429.js","assets/Title.5e396b16.js","assets/Text.f4671d75.js","assets/index.ba80cfa7.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.ab650a8a.js"),["assets/TableEditor.ab650a8a.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.9b7c0fae.js","assets/BaseLayout.2d5b030e.css","assets/tables.df4d016e.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/columns.4caf6e41.js","assets/gateway.681b899a.js","assets/string.5f84c0cf.js","assets/asyncComputed.134d378f.js","assets/popupNotifcation.beae79eb.js","assets/index.3f398fb0.js","assets/isNumeric.75337b1e.js","assets/index.636b5d6d.js","assets/Base.e549b429.js","assets/transButton.c5f8a15c.js","assets/icons.715dfb53.js","assets/CircularLoading.a026e34a.js","assets/CircularLoading.f81b57b4.css","assets/project.07df296b.js","assets/organization.5280e42d.js","assets/TabPane.dba57410.js","assets/index.c1743435.js","assets/Text.f4671d75.js","assets/Title.5e396b16.js","assets/index.ba80cfa7.js","assets/TableEditor.57152cbf.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.c41c1364.js"),["assets/ConnectorEditor.c41c1364.js","assets/outputWidgets.5836624b.js","assets/outputWidgets.cb6d1439.css","assets/columns.4caf6e41.js","assets/record.07dfd257.js","assets/pubsub.a82123ee.js","assets/gateway.681b899a.js","assets/project.07df296b.js","assets/organization.5280e42d.js","assets/connector.93368e28.js","assets/asyncComputed.134d378f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a3fafee7.js","assets/ant-design.26339c10.js","assets/transButton.c5f8a15c.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.9b7c0fae.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.dba57410.js","assets/Base.e549b429.js","assets/index.c1743435.js","assets/index.636b5d6d.js","assets/Text.f4671d75.js","assets/Title.5e396b16.js","assets/index.ba80cfa7.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});v.beforeEach(async(t,e)=>{B(t,e);const o=H.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await v.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{Z as A,T as E,A as L,H as a,v as r};
//# sourceMappingURL=router.6746eb60.js.map
