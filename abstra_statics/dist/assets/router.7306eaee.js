import{C as i,R as _}from"./FormItem.424fcca7.js";import{D as a,g as p,h as m,_ as e}from"./outputWidgets.c7d3adb6.js";import{a as s,T as d}from"./authorManager.e16729e9.js";import{u as c}from"./index.935dd85c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="929311be-c643-4d2f-887f-0df1db175d0c",t._sentryDebugIdIdentifier="sentry-dbid-929311be-c643-4d2f-887f-0df1db175d0c")}catch{}})();const v=a(i),I=a(_),r=p({history:m("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./WidgetPreview.7048bf5d.js"),["assets/WidgetPreview.7048bf5d.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.236a1e42.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.b2e9c2b1.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./Login.ea41c67d.js"),["assets/Login.ea41c67d.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/member.2bf7da74.js","assets/gateway.bdb6eee5.js","assets/authorManager.e16729e9.js","assets/icons.04bb36b4.js","assets/CircularLoading.47ed3c0f.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.b2e9c2b1.js","assets/WidgetsFrame.97ae601d.css","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>e(()=>import("./ReturnApiKey.db94ac0c.js"),["assets/ReturnApiKey.db94ac0c.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/apiKey.2c1b379f.js","assets/project.1bf58974.js","assets/organization.7acfedeb.js","assets/asyncComputed.503b98af.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/index.7fe1152d.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>e(()=>import("./Organizations.e01cbbb8.js"),["assets/Organizations.e01cbbb8.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/icons.04bb36b4.js","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/organization.7acfedeb.js","assets/Navbar.vue_vue_type_script_setup_true_lang.92132fb7.js","assets/logo.084e5d7c.js","assets/Text.b8f940d0.js","assets/index.310cc2e2.js","assets/Navbar.f4a98ea3.css","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/index.935dd85c.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>e(()=>import("./Organization.189616dd.js"),["assets/Organization.189616dd.js","assets/Sidebar.vue_vue_type_script_setup_true_lang.1a84693d.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/icons.04bb36b4.js","assets/index.402d7e13.js","assets/Sidebar.dcc9f92a.css","assets/Navbar.vue_vue_type_script_setup_true_lang.92132fb7.js","assets/logo.084e5d7c.js","assets/authorManager.e16729e9.js","assets/asyncComputed.503b98af.js","assets/Text.b8f940d0.js","assets/index.310cc2e2.js","assets/Navbar.f4a98ea3.css","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/organization.7acfedeb.js","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>e(()=>import("./Projects.73e3354f.js"),["assets/Projects.73e3354f.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/icons.04bb36b4.js","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/project.1bf58974.js","assets/organization.7acfedeb.js","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/index.935dd85c.js"])},{path:"settings",name:"organization-settings",component:()=>e(()=>import("./OrganizationSettings.1b21a337.js"),["assets/OrganizationSettings.1b21a337.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>e(()=>import("./Members.e17fe045.js"),["assets/Members.e17fe045.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/member.2bf7da74.js","assets/CrudView.a5c5f789.js","assets/icons.04bb36b4.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/index.935dd85c.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>e(()=>import("./Project.6a82e558.js"),["assets/Project.6a82e558.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/project.1bf58974.js","assets/organization.7acfedeb.js","assets/Navbar.vue_vue_type_script_setup_true_lang.92132fb7.js","assets/logo.084e5d7c.js","assets/Text.b8f940d0.js","assets/index.310cc2e2.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.vue_vue_type_script_setup_true_lang.1a84693d.js","assets/icons.04bb36b4.js","assets/index.402d7e13.js","assets/Sidebar.dcc9f92a.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>e(()=>import("./Live.734a3585.js"),["assets/Live.734a3585.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/build.89ba9a87.js","assets/gateway.bdb6eee5.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/project.1bf58974.js","assets/component.vue_vue_type_script_setup_true_lang.6967cf4f.js","assets/WarningFilled.d99917ef.js","assets/log.14d72812.js","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/index.f0d86076.js","assets/log.6c2e406b.css","assets/Link.7cd46e88.js","assets/index.935dd85c.js","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css","assets/index.310cc2e2.js","assets/TabPane.09eb877a.js","assets/hasIn.2d7f1a4b.js","assets/index.60fbfe14.js","assets/isNumeric.75337b1e.js","assets/icons.04bb36b4.js","assets/index.76fa8d74.js","assets/FormItem.424fcca7.js","assets/component.28425152.css"])},{path:"builds",name:"builds",component:()=>e(()=>import("./Builds.b039e442.js"),["assets/Builds.b039e442.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/index.935dd85c.js","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/build.89ba9a87.js","assets/gateway.bdb6eee5.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/project.1bf58974.js","assets/CrudView.a5c5f789.js","assets/icons.04bb36b4.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>e(()=>import("./Connectors.20223d26.js"),["assets/Connectors.20223d26.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/authorManager.e16729e9.js","assets/connector.bed1a0f8.js","assets/asyncComputed.503b98af.js","assets/icons.04bb36b4.js","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/index.935dd85c.js"])},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.9899269c.js"),["assets/Tables.9899269c.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/icons.04bb36b4.js","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/tables.2c930f22.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/gateway.bdb6eee5.js","assets/string.6d920661.js","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/index.935dd85c.js"])},{path:"api-keys",name:"api-keys",component:()=>e(()=>import("./ApiKeys.0d1467f5.js"),["assets/ApiKeys.0d1467f5.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/index.935dd85c.js","assets/icons.04bb36b4.js","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/member.2bf7da74.js","assets/apiKey.2c1b379f.js","assets/project.1bf58974.js","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css"])},{path:"logs",name:"logs",component:()=>e(()=>import("./Logs.f3e7b029.js"),["assets/Logs.f3e7b029.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/log.14d72812.js","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/index.f0d86076.js","assets/gateway.bdb6eee5.js","assets/authorManager.e16729e9.js","assets/log.6c2e406b.css","assets/index.935dd85c.js","assets/build.89ba9a87.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/asyncComputed.503b98af.js","assets/dayjs.653f448b.js","assets/index.017e2448.js","assets/index.402d7e13.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js"])},{path:"settings",name:"project-settings",component:()=>e(()=>import("./ProjectSettings.3d4005cf.js"),["assets/ProjectSettings.3d4005cf.js","assets/asyncComputed.503b98af.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/project.1bf58974.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.6cbe4656.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/index.935dd85c.js"])},{path:"env-vars",name:"env-vars",component:()=>e(()=>import("./EnvVars.282bfc5c.js"),["assets/EnvVars.282bfc5c.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/icons.04bb36b4.js","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/index.935dd85c.js"])},{path:"files",name:"files",component:()=>e(()=>import("./Files.c51b9b32.js"),["assets/Files.c51b9b32.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.e16729e9.js","assets/gateway.bdb6eee5.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/asyncComputed.503b98af.js","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/popupNotifcation.7f01a27d.js","assets/DownloadOutlined.c29e0df6.js","assets/Card.4b851c63.js","assets/index.8f70a193.js","assets/TabPane.09eb877a.js","assets/hasIn.2d7f1a4b.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>e(()=>import("./Users.b063911c.js"),["assets/Users.b063911c.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/icons.04bb36b4.js","assets/asyncComputed.503b98af.js","assets/authorManager.e16729e9.js","assets/gateway.bdb6eee5.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/Form.d2f4c6bd.js","assets/index.60fbfe14.js","assets/isNumeric.75337b1e.js","assets/CrudView.a5c5f789.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js","assets/url.125f4924.js","assets/index.7fe1152d.js","assets/index.402d7e13.js","assets/index.4508a88d.js","assets/CrudView.ec0f092c.css","assets/popupNotifcation.7f01a27d.js","assets/index.935dd85c.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>e(()=>import("./TableEditor.4dfd1f01.js"),["assets/TableEditor.4dfd1f01.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/tables.2c930f22.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/gateway.bdb6eee5.js","assets/authorManager.e16729e9.js","assets/string.6d920661.js","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.503b98af.js","assets/popupNotifcation.7f01a27d.js","assets/index.4508a88d.js","assets/Form.d2f4c6bd.js","assets/FormItem.424fcca7.js","assets/hasIn.2d7f1a4b.js","assets/index.60fbfe14.js","assets/isNumeric.75337b1e.js","assets/project.1bf58974.js","assets/organization.7acfedeb.js","assets/icons.04bb36b4.js","assets/index.28e055e8.js","assets/CircularLoading.47ed3c0f.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.09eb877a.js","assets/index.310cc2e2.js","assets/Text.b8f940d0.js","assets/TableEditor.e915f6c1.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>e(()=>import("./ConnectorEditor.2c0eafc1.js"),["assets/ConnectorEditor.2c0eafc1.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.503b98af.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/authorManager.e16729e9.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a66ede2c.js","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/index.d1ce1cd1.js","assets/Link.7cd46e88.js","assets/SaveButton.13ece1cb.css","assets/project.1bf58974.js","assets/connector.bed1a0f8.js","assets/organization.7acfedeb.js","assets/TabPane.09eb877a.js","assets/hasIn.2d7f1a4b.js","assets/index.310cc2e2.js","assets/Form.d2f4c6bd.js","assets/FormItem.424fcca7.js","assets/index.4508a88d.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>e(()=>import("./Build.db0c4d52.js"),["assets/Build.db0c4d52.js","assets/outputWidgets.c7d3adb6.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.4f3efa3f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.503b98af.js","assets/component.vue_vue_type_script_setup_true_lang.6967cf4f.js","assets/authorManager.e16729e9.js","assets/index.25051644.js","assets/index.cf4c23b9.js","assets/record.75c383f2.js","assets/pubsub.83cf89e6.js","assets/gateway.bdb6eee5.js","assets/WarningFilled.d99917ef.js","assets/log.14d72812.js","assets/ant-design.a9239b18.js","assets/index.8b862542.js","assets/Title.07360565.js","assets/Text.b8f940d0.js","assets/index.f0d86076.js","assets/log.6c2e406b.css","assets/Link.7cd46e88.js","assets/index.935dd85c.js","assets/index.310cc2e2.js","assets/TabPane.09eb877a.js","assets/hasIn.2d7f1a4b.js","assets/index.60fbfe14.js","assets/isNumeric.75337b1e.js","assets/icons.04bb36b4.js","assets/index.76fa8d74.js","assets/FormItem.424fcca7.js","assets/component.28425152.css","assets/build.89ba9a87.js","assets/project.1bf58974.js","assets/organization.7acfedeb.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});r.beforeEach(async(t,n)=>{c(t,n);const o=s.getAuthor();if(d.trackPageView(o==null?void 0:o.claims.email),!t.meta.allowUnauthenticated&&!o){await r.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{v as A,I as a,r};
//# sourceMappingURL=router.7306eaee.js.map
