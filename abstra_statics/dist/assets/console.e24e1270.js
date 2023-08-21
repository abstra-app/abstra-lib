import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as E,M as v,I as b,s as I,j as a,k as f,l as w,m as y,n as D}from"./registerWidgets.93af2cdb.js";import{p as A}from"./passwordlessManager.9fdb8253.js";import{u as P}from"./index.42ff3000.js";import"./pubsub.0f523d74.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fdad1eb7-a2ed-4e1b-861e-5a0b0630b893",e._sentryDebugIdIdentifier="sentry-dbid-fdad1eb7-a2ed-4e1b-861e-5a0b0630b893")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),r=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.ee840b48.js"),["assets/WidgetPreview.ee840b48.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.44d7880a.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/WidgetsFrame.b1ae4ed3.js","assets/colors.77947d73.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.9e268e2c.js"),["assets/Login.9e268e2c.js","assets/Passwordless.e50ac562.js","assets/CircularLoading.82157776.js","assets/lottie.07703d95.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.f81b57b4.css","assets/icons.bfb7edf8.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/Passwordless.86ac0c56.css","assets/Navbar.0b60730d.js","assets/logo.084e5d7c.js","assets/asyncComputed.ad6bf5f4.js","assets/Navbar.a5a179d1.css","assets/member.45be6e30.js","assets/gateway.16050238.js","assets/activeRecord.7b4edf2d.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.46fcba71.js"),["assets/Organizations.46fcba71.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/icons.bfb7edf8.js","assets/asyncComputed.ad6bf5f4.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/organization.5e28c736.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/Navbar.0b60730d.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.51e04d12.js"),["assets/Organization.51e04d12.js","assets/Sidebar.07f2d90c.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/icons.bfb7edf8.js","assets/Tooltip.4a933224.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.0b60730d.js","assets/logo.084e5d7c.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/asyncComputed.ad6bf5f4.js","assets/Navbar.a5a179d1.css","assets/gateway.16050238.js","assets/organization.5e28c736.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.474d97a1.js"),["assets/Projects.474d97a1.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/icons.bfb7edf8.js","assets/asyncComputed.ad6bf5f4.js","assets/project.82e7342d.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/activeRecord.7b4edf2d.js","assets/organization.5e28c736.js","assets/index.5ebd1a87.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.d1c88735.js"),["assets/OrganizationSettings.d1c88735.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.b8adcdff.js"),["assets/Members.b8adcdff.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.ad6bf5f4.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/member.45be6e30.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.42297c53.js"),["assets/Project.42297c53.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.ad6bf5f4.js","assets/project.82e7342d.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/activeRecord.7b4edf2d.js","assets/organization.5e28c736.js","assets/index.5ebd1a87.js","assets/Navbar.0b60730d.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.07f2d90c.js","assets/icons.bfb7edf8.js","assets/Tooltip.4a933224.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.efdfb078.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.9957727f.js"),["assets/Builds.9957727f.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.ad6bf5f4.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/build.462dcf30.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.bfb7edf8.js","assets/index.b048d0fb.js","assets/index.42ff3000.js","assets/Builds.f9eaf052.css"])},{path:"connectors",name:"connectors",component:()=>t(()=>import("./Connectors.1bb4d775.js"),["assets/Connectors.1bb4d775.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/index.5ebd1a87.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/connector.21bccd7c.js","assets/activeRecord.7b4edf2d.js","assets/asyncComputed.ad6bf5f4.js","assets/icons.bfb7edf8.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.be16730c.js"),["assets/ApiKeys.be16730c.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.ad6bf5f4.js","assets/project.82e7342d.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/activeRecord.7b4edf2d.js","assets/member.45be6e30.js","assets/index.5ebd1a87.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.bfb7edf8.js","assets/index.b048d0fb.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.ce4a4bbc.js"),["assets/Logs.ce4a4bbc.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/build.462dcf30.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/asyncComputed.ad6bf5f4.js","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/index.b048d0fb.js","assets/Logs.a17321ed.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.6684b828.js"),["assets/ProjectSettings.6684b828.js","assets/asyncComputed.ad6bf5f4.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/project.82e7342d.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/index.42ff3000.js","assets/CircularLoading.82157776.js","assets/lottie.07703d95.js","assets/CircularLoading.f81b57b4.css","assets/icons.bfb7edf8.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.fb33a6be.js"),["assets/EnvVars.fb33a6be.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.ad6bf5f4.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/activeRecord.7b4edf2d.js","assets/index.5ebd1a87.js","assets/CrudView.0bdb2c3d.js","assets/DropdownMenu.2b29de3f.js","assets/DropdownMenu.4f69c722.css","assets/Modal.0da0ab75.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.3b8ecf0c.js","assets/lottie.07703d95.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.bfb7edf8.js"])}]},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>t(()=>import("./ConnectorEditor.9cb8291a.js"),["assets/ConnectorEditor.9cb8291a.js","assets/registerWidgets.93af2cdb.js","assets/registerWidgets.448db7e9.css","assets/index.5ebd1a87.js","assets/gateway.16050238.js","assets/passwordlessManager.9fdb8253.js","assets/pubsub.0f523d74.js","assets/connector.21bccd7c.js","assets/activeRecord.7b4edf2d.js","assets/asyncComputed.ad6bf5f4.js","assets/BackButton.5565c1f0.js","assets/BackButton.40348456.css","assets/SaveButton.9221e9e7.js","assets/icons.bfb7edf8.js","assets/SaveButton.c5392044.css","assets/CircularLoading.82157776.js","assets/lottie.07703d95.js","assets/CircularLoading.f81b57b4.css","assets/ConnectorEditor.93911b56.css"])}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await r.push({name:"login"});return}});(async()=>{const e=u({render:()=>f(L)});h.init(),l(e,r),e.use(r),e.use(g),e.mount("#app"),e.component("VSelect",E),e.component("Markdown",v),e.component("Icon",b),e.component("Message",I),a(e,w),a(e,y),a(e,D)})();export{r};
//# sourceMappingURL=console.e24e1270.js.map
