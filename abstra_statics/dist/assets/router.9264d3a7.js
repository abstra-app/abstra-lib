import{C as i,R as _}from"./FormItem.413481bf.js";import{D as a,g as p,h as m,_ as e}from"./outputWidgets.333243b5.js";import{a as c,T as s}from"./authorManager.afcc9659.js";import{u as d}from"./index.b6f16b4f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="be9044a0-77f8-47a6-87cc-2793526821ca",t._sentryDebugIdIdentifier="sentry-dbid-be9044a0-77f8-47a6-87cc-2793526821ca")}catch{}})();const v=a(i),I=a(_),r=p({history:m("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./WidgetPreview.d89c60b2.js"),["assets/WidgetPreview.d89c60b2.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.2c38ff88.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.64930db0.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./Login.9da3ad15.js"),["assets/Login.9da3ad15.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/member.271f0619.js","assets/gateway.d354a11c.js","assets/authorManager.afcc9659.js","assets/icons.ec7238f6.js","assets/CircularLoading.ca74c119.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.64930db0.js","assets/WidgetsFrame.97ae601d.css","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>e(()=>import("./ReturnApiKey.58d9d6a9.js"),["assets/ReturnApiKey.58d9d6a9.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/apiKey.b8b1fef4.js","assets/project.a2850ce8.js","assets/organization.a1295e5d.js","assets/asyncComputed.916d2e38.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/index.be8066b9.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>e(()=>import("./Organizations.322c8f86.js"),["assets/Organizations.322c8f86.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/icons.ec7238f6.js","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/organization.a1295e5d.js","assets/Navbar.vue_vue_type_script_setup_true_lang.85e90b19.js","assets/logo.084e5d7c.js","assets/Text.f7432746.js","assets/index.f0ba07f5.js","assets/Navbar.f4a98ea3.css","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/index.b6f16b4f.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>e(()=>import("./Organization.d5b7cd5b.js"),["assets/Organization.d5b7cd5b.js","assets/Sidebar.vue_vue_type_script_setup_true_lang.17b805c2.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/icons.ec7238f6.js","assets/index.7a3dbad5.js","assets/Sidebar.dcc9f92a.css","assets/Navbar.vue_vue_type_script_setup_true_lang.85e90b19.js","assets/logo.084e5d7c.js","assets/authorManager.afcc9659.js","assets/asyncComputed.916d2e38.js","assets/Text.f7432746.js","assets/index.f0ba07f5.js","assets/Navbar.f4a98ea3.css","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/organization.a1295e5d.js","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>e(()=>import("./Projects.99d3b17b.js"),["assets/Projects.99d3b17b.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/icons.ec7238f6.js","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/project.a2850ce8.js","assets/organization.a1295e5d.js","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/index.b6f16b4f.js"])},{path:"settings",name:"organization-settings",component:()=>e(()=>import("./OrganizationSettings.44c0cfc2.js"),["assets/OrganizationSettings.44c0cfc2.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>e(()=>import("./Members.f8cfdb78.js"),["assets/Members.f8cfdb78.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/member.271f0619.js","assets/CrudView.270e4dd7.js","assets/icons.ec7238f6.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/index.b6f16b4f.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>e(()=>import("./Project.1d1af6a6.js"),["assets/Project.1d1af6a6.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/project.a2850ce8.js","assets/organization.a1295e5d.js","assets/Navbar.vue_vue_type_script_setup_true_lang.85e90b19.js","assets/logo.084e5d7c.js","assets/Text.f7432746.js","assets/index.f0ba07f5.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.vue_vue_type_script_setup_true_lang.17b805c2.js","assets/icons.ec7238f6.js","assets/index.7a3dbad5.js","assets/Sidebar.dcc9f92a.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>e(()=>import("./Live.8d8d9593.js"),["assets/Live.8d8d9593.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/build.b711f9d9.js","assets/gateway.d354a11c.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/project.a2850ce8.js","assets/component.vue_vue_type_script_setup_true_lang.064f9c5c.js","assets/WarningFilled.d99917ef.js","assets/log.d431b0e1.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.f1fc9225.js","assets/log.6c2e406b.css","assets/Link.0ef9fe9c.js","assets/index.b6f16b4f.js","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/index.f0ba07f5.js","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/index.e33ba097.js","assets/isNumeric.75337b1e.js","assets/icons.ec7238f6.js","assets/index.6b99bb97.js","assets/FormItem.413481bf.js","assets/component.28425152.css"])},{path:"builds",name:"builds",component:()=>e(()=>import("./Builds.1c20f260.js"),["assets/Builds.1c20f260.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/index.b6f16b4f.js","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/build.b711f9d9.js","assets/gateway.d354a11c.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/project.a2850ce8.js","assets/CrudView.270e4dd7.js","assets/icons.ec7238f6.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>e(()=>import("./Connectors.09284e43.js"),["assets/Connectors.09284e43.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/authorManager.afcc9659.js","assets/connector.d0d3db08.js","assets/asyncComputed.916d2e38.js","assets/icons.ec7238f6.js","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/index.b6f16b4f.js"])},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.b5ec8168.js"),["assets/Tables.b5ec8168.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/icons.ec7238f6.js","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/tables.4c220b2b.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/gateway.d354a11c.js","assets/string.41e06e1f.js","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/index.b6f16b4f.js"])},{path:"api-keys",name:"api-keys",component:()=>e(()=>import("./ApiKeys.c6b84ad8.js"),["assets/ApiKeys.c6b84ad8.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/index.b6f16b4f.js","assets/icons.ec7238f6.js","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/member.271f0619.js","assets/apiKey.b8b1fef4.js","assets/project.a2850ce8.js","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css"])},{path:"logs",name:"logs",component:()=>e(()=>import("./Logs.fa6f9387.js"),["assets/Logs.fa6f9387.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/log.d431b0e1.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.f1fc9225.js","assets/gateway.d354a11c.js","assets/authorManager.afcc9659.js","assets/log.6c2e406b.css","assets/index.b6f16b4f.js","assets/build.b711f9d9.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/asyncComputed.916d2e38.js","assets/dayjs.6aa26052.js","assets/index.0e101a71.js","assets/index.7a3dbad5.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js"])},{path:"settings",name:"project-settings",component:()=>e(()=>import("./ProjectSettings.e91a6300.js"),["assets/ProjectSettings.e91a6300.js","assets/asyncComputed.916d2e38.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/project.a2850ce8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6626792f.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/index.b6f16b4f.js"])},{path:"env-vars",name:"env-vars",component:()=>e(()=>import("./EnvVars.6f7899e8.js"),["assets/EnvVars.6f7899e8.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.916d2e38.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/icons.ec7238f6.js","assets/CrudView.270e4dd7.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/Form.950f385f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js","assets/url.2fbcdffc.js","assets/index.be8066b9.js","assets/index.7a3dbad5.js","assets/index.7e314b45.js","assets/CrudView.ec0f092c.css","assets/index.b6f16b4f.js"])},{path:"files",name:"files",component:()=>e(()=>import("./Files.7a90d467.js"),["assets/Files.7a90d467.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.afcc9659.js","assets/gateway.d354a11c.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/asyncComputed.916d2e38.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/popupNotifcation.ea04b707.js","assets/DownloadOutlined.c29e0df6.js","assets/Card.a3469205.js","assets/index.58647876.js","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>e(()=>import("./TableEditor.11471f7a.js"),["assets/TableEditor.11471f7a.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/tables.4c220b2b.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/gateway.d354a11c.js","assets/authorManager.afcc9659.js","assets/string.41e06e1f.js","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.916d2e38.js","assets/popupNotifcation.ea04b707.js","assets/index.7e314b45.js","assets/Form.950f385f.js","assets/FormItem.413481bf.js","assets/hasIn.cb198a04.js","assets/index.e33ba097.js","assets/isNumeric.75337b1e.js","assets/project.a2850ce8.js","assets/organization.a1295e5d.js","assets/icons.ec7238f6.js","assets/index.d7ecf187.js","assets/CircularLoading.ca74c119.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.11abb547.js","assets/index.f0ba07f5.js","assets/Text.f7432746.js","assets/TableEditor.e915f6c1.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>e(()=>import("./ConnectorEditor.0c423b22.js"),["assets/ConnectorEditor.0c423b22.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.916d2e38.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/authorManager.afcc9659.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.dc85a467.js","assets/Link.0ef9fe9c.js","assets/SaveButton.13ece1cb.css","assets/project.a2850ce8.js","assets/connector.d0d3db08.js","assets/organization.a1295e5d.js","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/index.f0ba07f5.js","assets/Form.950f385f.js","assets/FormItem.413481bf.js","assets/index.7e314b45.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>e(()=>import("./Build.913f6d8d.js"),["assets/Build.913f6d8d.js","assets/outputWidgets.333243b5.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.82019b78.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.916d2e38.js","assets/component.vue_vue_type_script_setup_true_lang.064f9c5c.js","assets/authorManager.afcc9659.js","assets/index.cbd7b276.js","assets/index.cf4c23b9.js","assets/record.3365b440.js","assets/pubsub.6843f3da.js","assets/gateway.d354a11c.js","assets/WarningFilled.d99917ef.js","assets/log.d431b0e1.js","assets/ant-design.d494077f.js","assets/index.e0bce9ea.js","assets/Title.3b7d5185.js","assets/Text.f7432746.js","assets/index.f1fc9225.js","assets/log.6c2e406b.css","assets/Link.0ef9fe9c.js","assets/index.b6f16b4f.js","assets/index.f0ba07f5.js","assets/TabPane.11abb547.js","assets/hasIn.cb198a04.js","assets/index.e33ba097.js","assets/isNumeric.75337b1e.js","assets/icons.ec7238f6.js","assets/index.6b99bb97.js","assets/FormItem.413481bf.js","assets/component.28425152.css","assets/build.b711f9d9.js","assets/project.a2850ce8.js","assets/organization.a1295e5d.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});r.beforeEach(async(t,n)=>{d(t,n);const o=c.getAuthor();if(s.trackPageView(o==null?void 0:o.claims.email),!t.meta.allowUnauthenticated&&!o){await r.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{v as A,I as a,r};
//# sourceMappingURL=router.9264d3a7.js.map
