import{q as s,a as i,b as _,c as p,e as m,f as c,g as d,_ as t,h as u,T as h,P as l,C as g,M as E,I as v,s as I,i as a,j as A,k as P,l as T,m as V}from"./registerWidgets.88d12ae1.js";import{p as R}from"./passwordlessManager.a5c71e7e.js";import{u as b}from"./index.ae3415a0.js";import{i as f}from"./sentry.2692e5c6.js";const D={},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function O(e,r){const n=i("router-view");return _(),p("div",L,[m(n)])}const y=s(D,[["render",O]]),o=c({history:d("/"),routes:[{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.765c9fee.js"),["assets/Login.765c9fee.js","assets/Passwordless.a5311b67.js","assets/CircularLoading.0c459b72.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.f81b57b4.css","assets/icons.778999cd.js","assets/passwordlessManager.a5c71e7e.js","assets/Passwordless.2b58e538.css","assets/Navbar.9e3b85e1.js","assets/logo.084e5d7c.js","assets/asyncComputed.0bf661db.js","assets/Navbar.a5a179d1.css","assets/member.168a1188.js","assets/gateway.042591ee.js","assets/activeRecord.57c6bf02.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.4a2436c7.js"),["assets/Organizations.4a2436c7.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/organization.c3cdd979.js","assets/activeRecord.57c6bf02.js","assets/CrudView.9d8bebef.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/Navbar.9e3b85e1.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.e71f1a90.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.8c3f5be8.js"),["assets/Organization.8c3f5be8.js","assets/Sidebar.34b7969a.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/Tooltip.ca813c38.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.9e3b85e1.js","assets/logo.084e5d7c.js","assets/passwordlessManager.a5c71e7e.js","assets/asyncComputed.0bf661db.js","assets/Navbar.a5a179d1.css","assets/gateway.042591ee.js","assets/organization.c3cdd979.js","assets/activeRecord.57c6bf02.js","assets/Organization.b227bec1.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.e12ce968.js"),["assets/Projects.e12ce968.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.778999cd.js","assets/asyncComputed.0bf661db.js","assets/project.d5e48339.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/activeRecord.57c6bf02.js","assets/organization.c3cdd979.js","assets/CrudView.9d8bebef.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.0d3f5208.js"),["assets/OrganizationSettings.0d3f5208.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.b786e5bd.js"),["assets/Members.b786e5bd.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0bf661db.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/member.168a1188.js","assets/activeRecord.57c6bf02.js","assets/CrudView.9d8bebef.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.6c1f4f00.js"),["assets/Project.6c1f4f00.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0bf661db.js","assets/project.d5e48339.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/activeRecord.57c6bf02.js","assets/organization.c3cdd979.js","assets/Navbar.9e3b85e1.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.34b7969a.js","assets/icons.778999cd.js","assets/Tooltip.ca813c38.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.fc209320.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.957c9bb6.js"),["assets/Builds.957c9bb6.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0bf661db.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/build.07d07ee7.js","assets/activeRecord.57c6bf02.js","assets/CrudView.9d8bebef.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.9a9b9fef.js"),["assets/ApiKeys.9a9b9fef.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0bf661db.js","assets/project.d5e48339.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/activeRecord.57c6bf02.js","assets/member.168a1188.js","assets/CrudView.9d8bebef.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/icons.778999cd.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.0aa61fc7.js"),["assets/Logs.0aa61fc7.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/build.07d07ee7.js","assets/activeRecord.57c6bf02.js","assets/asyncComputed.0bf661db.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Logs.746ab220.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.1c23976d.js"),["assets/ProjectSettings.1c23976d.js","assets/asyncComputed.0bf661db.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/project.d5e48339.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/activeRecord.57c6bf02.js","assets/index.ae3415a0.js","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/icons.778999cd.js","assets/ProjectSettings.2ba6a55b.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.fff2fd85.js"),["assets/EnvVars.fff2fd85.js","assets/registerWidgets.88d12ae1.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0bf661db.js","assets/gateway.042591ee.js","assets/passwordlessManager.a5c71e7e.js","assets/activeRecord.57c6bf02.js","assets/CrudView.9d8bebef.js","assets/DropdownMenu.d2cd7589.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.0c459b72.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f14dcc44.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/icons.778999cd.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});o.beforeEach(async(e,r)=>{b(e,r);const n=R.getUser();if(!e.meta.allowUnauthenticated&&!n){await o.push({name:"login"});return}});(async()=>{const e=u({render:()=>A(y)});h.init(),f(e,o,"console.abstracloud.com"),e.use(o),e.use(l),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",E),e.component("Icon",v),e.component("Message",I),a(e,P),a(e,T),a(e,V)})();
//# sourceMappingURL=console.b579f84e.js.map
