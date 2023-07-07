import{q as s,a as i,b as _,c as p,e as m,f as c,g as d,_ as t,h as u,T as h,P as l,C as g,M as v,I as E,s as I,i as a,j as A,k as P,l as T,m as V}from"./registerWidgets.7452ec0b.js";import{p as b}from"./passwordlessManager.abb9ad15.js";import{u as f}from"./index.10e7a483.js";import{i as R}from"./sentry.2692e5c6.js";const D={},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function O(e,r){const n=i("router-view");return _(),p("div",L,[m(n)])}const y=s(D,[["render",O]]),o=c({history:d("/"),routes:[{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.84de29d1.js"),["assets/Login.84de29d1.js","assets/Passwordless.15d9e658.js","assets/CircularLoading.6725993e.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.f81b57b4.css","assets/icons.97625e56.js","assets/passwordlessManager.abb9ad15.js","assets/Passwordless.c981501a.css","assets/Navbar.607b72f5.js","assets/logo.084e5d7c.js","assets/asyncComputed.23d75013.js","assets/Navbar.ef36b569.css","assets/member.62e0f586.js","assets/utils.e51f765d.js","assets/pubsub.a0411919.js","assets/Login.8dc5040f.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.742ce734.js"),["assets/Organizations.742ce734.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/organization.99062315.js","assets/CrudView.2c6fede3.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/Navbar.607b72f5.js","assets/logo.084e5d7c.js","assets/Navbar.ef36b569.css","assets/Organizations.9d79a4d8.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.c25903b3.js"),["assets/Organization.c25903b3.js","assets/Sidebar.3587fc0f.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/Tooltip.2879568f.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.607b72f5.js","assets/logo.084e5d7c.js","assets/passwordlessManager.abb9ad15.js","assets/asyncComputed.23d75013.js","assets/Navbar.ef36b569.css","assets/utils.e51f765d.js","assets/pubsub.a0411919.js","assets/organization.99062315.js","assets/Organization.3577d69b.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.d1db652d.js"),["assets/Projects.d1db652d.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/asyncComputed.23d75013.js","assets/project.cc04e631.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/organization.99062315.js","assets/CrudView.2c6fede3.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.1175fe6e.js"),["assets/OrganizationSettings.1175fe6e.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.c8df859b.js"),["assets/Members.c8df859b.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.23d75013.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/member.62e0f586.js","assets/CrudView.2c6fede3.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.26c287ea.js"),["assets/Project.26c287ea.js","assets/Sidebar.3587fc0f.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/icons.97625e56.js","assets/Tooltip.2879568f.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.607b72f5.js","assets/logo.084e5d7c.js","assets/passwordlessManager.abb9ad15.js","assets/asyncComputed.23d75013.js","assets/Navbar.ef36b569.css","assets/project.cc04e631.js","assets/utils.e51f765d.js","assets/pubsub.a0411919.js","assets/organization.99062315.js","assets/Project.73b105d5.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.e7a2f54f.js"),["assets/Builds.e7a2f54f.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.23d75013.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/CrudView.2c6fede3.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.bb79e4c6.js"),["assets/ApiKeys.bb79e4c6.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.23d75013.js","assets/project.cc04e631.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/member.62e0f586.js","assets/CrudView.2c6fede3.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/icons.97625e56.js","assets/ApiKeys.565e4da2.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.313a9e7e.js"),["assets/ProjectSettings.313a9e7e.js","assets/asyncComputed.23d75013.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/project.cc04e631.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/index.10e7a483.js","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/icons.97625e56.js","assets/ProjectSettings.6846d936.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.caae6e8d.js"),["assets/EnvVars.caae6e8d.js","assets/registerWidgets.7452ec0b.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.23d75013.js","assets/utils.e51f765d.js","assets/passwordlessManager.abb9ad15.js","assets/pubsub.a0411919.js","assets/CrudView.2c6fede3.js","assets/DropdownMenu.e6caac19.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.6725993e.js","assets/CircularLoading.f81b57b4.css","assets/Modal.f31beab2.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/icons.97625e56.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});o.beforeEach(async(e,r)=>{f(e,r);const n=b.getUser();if(!e.meta.allowUnauthenticated&&!n){await o.push({name:"login"});return}});(async()=>{const e=u({render:()=>A(y)});h.init(),R(e,o,"console.abstracloud.com"),e.use(o),e.use(l),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",v),e.component("Icon",E),e.component("Message",I),a(e,P),a(e,T),a(e,V)})();
//# sourceMappingURL=console.c15f58a7.js.map
