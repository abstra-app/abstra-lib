import{C as i,R as _}from"./FormItem.9cff88c1.js";import{D as a,g as p,h as m,_ as e}from"./outputWidgets.64db3741.js";import{a as s,T as c}from"./authorManager.3507d535.js";import{u as d}from"./index.84dfd82d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="485b438b-54ee-4033-885b-1c8c05e8b65e",t._sentryDebugIdIdentifier="sentry-dbid-485b438b-54ee-4033-885b-1c8c05e8b65e")}catch{}})();const v=a(i),I=a(_),r=p({history:m("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./WidgetPreview.5b082b00.js"),["assets/WidgetPreview.5b082b00.js","assets/ActionButton.c9f948bc.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.dc48d620.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./Login.94e8b72c.js"),["assets/Login.94e8b72c.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/icons.bc83fa66.js","assets/authorManager.3507d535.js","assets/CircularLoading.a0f5d617.js","assets/CircularLoading.f81b57b4.css","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/member.f38b1b8c.js","assets/WidgetsFrame.dc48d620.js","assets/WidgetsFrame.97ae601d.css","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>e(()=>import("./ReturnApiKey.a2c9e3bd.js"),["assets/ReturnApiKey.a2c9e3bd.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/apiKey.66b81c84.js","assets/project.7a66b2b5.js","assets/organization.6bd08362.js","assets/asyncComputed.a2df2978.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/index.fa2ff3b8.js","assets/Modal.2c59a866.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>e(()=>import("./Organizations.fe1a9746.js"),["assets/Organizations.fe1a9746.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/icons.bc83fa66.js","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/organization.6bd08362.js","assets/Navbar.vue_vue_type_script_setup_true_lang.f91748b1.js","assets/logo.084e5d7c.js","assets/Text.a6dc55ad.js","assets/index.124b61df.js","assets/Navbar.f4a98ea3.css","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/index.84dfd82d.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>e(()=>import("./Organization.6352444e.js"),["assets/Organization.6352444e.js","assets/Sidebar.vue_vue_type_script_setup_true_lang.f9e3748c.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/icons.bc83fa66.js","assets/index.5a917f02.js","assets/Sidebar.dcc9f92a.css","assets/Navbar.vue_vue_type_script_setup_true_lang.f91748b1.js","assets/logo.084e5d7c.js","assets/authorManager.3507d535.js","assets/asyncComputed.a2df2978.js","assets/Text.a6dc55ad.js","assets/index.124b61df.js","assets/Navbar.f4a98ea3.css","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/organization.6bd08362.js","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>e(()=>import("./Projects.08983617.js"),["assets/Projects.08983617.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/icons.bc83fa66.js","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/project.7a66b2b5.js","assets/organization.6bd08362.js","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/index.84dfd82d.js"])},{path:"settings",name:"organization-settings",component:()=>e(()=>import("./OrganizationSettings.06b31c0c.js"),["assets/OrganizationSettings.06b31c0c.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>e(()=>import("./Members.caa1899e.js"),["assets/Members.caa1899e.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/member.f38b1b8c.js","assets/CrudView.0be95cab.js","assets/icons.bc83fa66.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/index.84dfd82d.js"])},{path:"billing",name:"billing",component:()=>e(()=>import("./Billing.ddc1424f.js"),["assets/Billing.ddc1424f.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/organization.6bd08362.js","assets/asyncComputed.a2df2978.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/index.441c252a.js","assets/index.96c20cb9.js","assets/Card.e328e13e.js","assets/TabPane.17dbcc20.js","assets/hasIn.390a50a7.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>e(()=>import("./Project.b2675b40.js"),["assets/Project.b2675b40.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/project.7a66b2b5.js","assets/organization.6bd08362.js","assets/Navbar.vue_vue_type_script_setup_true_lang.f91748b1.js","assets/logo.084e5d7c.js","assets/Text.a6dc55ad.js","assets/index.124b61df.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.vue_vue_type_script_setup_true_lang.f9e3748c.js","assets/icons.bc83fa66.js","assets/index.5a917f02.js","assets/Sidebar.dcc9f92a.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>e(()=>import("./Live.c2996dbd.js"),["assets/Live.c2996dbd.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/build.17c38c2e.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/project.7a66b2b5.js","assets/component.vue_vue_type_script_setup_true_lang.9c21166c.js","assets/Log.cd2694d3.js","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/Modal.2c59a866.js","assets/StarFilled.fad29e50.js","assets/Timeline.82e33129.js","assets/Log.6c2e406b.css","assets/WarningFilled.d99917ef.js","assets/Link.24b0585e.js","assets/Text.a6dc55ad.js","assets/index.84dfd82d.js","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css","assets/log.f9dc8fbf.js","assets/index.124b61df.js","assets/TabPane.17dbcc20.js","assets/hasIn.390a50a7.js","assets/index.d4d1243b.js","assets/isNumeric.75337b1e.js","assets/icons.bc83fa66.js","assets/index.77688e96.js","assets/FormItem.9cff88c1.js","assets/component.28425152.css","assets/Title.bbba009c.js"])},{path:"builds",name:"builds",component:()=>e(()=>import("./Builds.bb20b43f.js"),["assets/Builds.bb20b43f.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/index.84dfd82d.js","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/build.17c38c2e.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/project.7a66b2b5.js","assets/CrudView.0be95cab.js","assets/icons.bc83fa66.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>e(()=>import("./Connectors.69d3aafc.js"),["assets/Connectors.69d3aafc.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/authorManager.3507d535.js","assets/connector.43cf7f23.js","assets/asyncComputed.a2df2978.js","assets/icons.bc83fa66.js","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/index.84dfd82d.js"])},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.4f47156c.js"),["assets/Tables.4f47156c.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/icons.bc83fa66.js","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/tables.3019f657.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/string.dd0cc5b2.js","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/index.84dfd82d.js"])},{path:"api-keys",name:"api-keys",component:()=>e(()=>import("./ApiKeys.057fc73e.js"),["assets/ApiKeys.057fc73e.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/index.84dfd82d.js","assets/icons.bc83fa66.js","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/member.f38b1b8c.js","assets/apiKey.66b81c84.js","assets/project.7a66b2b5.js","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css"])},{path:"logs",name:"logs",component:()=>e(()=>import("./Logs.711ccce0.js"),["assets/Logs.711ccce0.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/Log.cd2694d3.js","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/Modal.2c59a866.js","assets/StarFilled.fad29e50.js","assets/Timeline.82e33129.js","assets/Log.6c2e406b.css","assets/index.84dfd82d.js","assets/log.f9dc8fbf.js","assets/authorManager.3507d535.js","assets/build.17c38c2e.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/asyncComputed.a2df2978.js","assets/dayjs.e4dc7316.js","assets/index.c5df9e82.js","assets/index.5a917f02.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js"])},{path:"settings",name:"project-settings",component:()=>e(()=>import("./ProjectSettings.9fac1648.js"),["assets/ProjectSettings.9fac1648.js","assets/asyncComputed.a2df2978.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/project.7a66b2b5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b6032a9b.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/index.84dfd82d.js"])},{path:"env-vars",name:"env-vars",component:()=>e(()=>import("./EnvVars.0f29574a.js"),["assets/EnvVars.0f29574a.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.a2df2978.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/icons.bc83fa66.js","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/index.84dfd82d.js"])},{path:"files",name:"files",component:()=>e(()=>import("./Files.28728813.js"),["assets/Files.28728813.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/asyncComputed.a2df2978.js","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/Modal.2c59a866.js","assets/popupNotifcation.9c74d4e8.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/Card.e328e13e.js","assets/TabPane.17dbcc20.js","assets/hasIn.390a50a7.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>e(()=>import("./Users.d50ce66a.js"),["assets/Users.d50ce66a.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/icons.bc83fa66.js","assets/asyncComputed.a2df2978.js","assets/index.cf4c23b9.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/Form.3e98cb78.js","assets/index.d4d1243b.js","assets/isNumeric.75337b1e.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/CrudView.0be95cab.js","assets/Title.bbba009c.js","assets/Text.a6dc55ad.js","assets/Modal.2c59a866.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.02eba818.js","assets/url.0f2dd857.js","assets/index.fa2ff3b8.js","assets/index.5a917f02.js","assets/index.96c20cb9.js","assets/CrudView.5d420bbf.css","assets/popupNotifcation.9c74d4e8.js","assets/index.84dfd82d.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>e(()=>import("./TableEditor.fe50c40e.js"),["assets/TableEditor.fe50c40e.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/tables.3019f657.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/authorManager.3507d535.js","assets/string.dd0cc5b2.js","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.a2df2978.js","assets/popupNotifcation.9c74d4e8.js","assets/index.96c20cb9.js","assets/Form.3e98cb78.js","assets/FormItem.9cff88c1.js","assets/hasIn.390a50a7.js","assets/index.d4d1243b.js","assets/isNumeric.75337b1e.js","assets/project.7a66b2b5.js","assets/organization.6bd08362.js","assets/icons.bc83fa66.js","assets/index.6217893e.js","assets/CircularLoading.a0f5d617.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.17dbcc20.js","assets/index.124b61df.js","assets/Text.a6dc55ad.js","assets/TableEditor.e915f6c1.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>e(()=>import("./ConnectorEditor.0c45931c.js"),["assets/ConnectorEditor.0c45931c.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.a2df2978.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/authorManager.3507d535.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.e0608ea5.js","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/Modal.2c59a866.js","assets/Link.24b0585e.js","assets/Text.a6dc55ad.js","assets/index.c08e3c60.js","assets/Title.bbba009c.js","assets/SaveButton.13ece1cb.css","assets/project.7a66b2b5.js","assets/connector.43cf7f23.js","assets/organization.6bd08362.js","assets/TabPane.17dbcc20.js","assets/hasIn.390a50a7.js","assets/index.124b61df.js","assets/Form.3e98cb78.js","assets/FormItem.9cff88c1.js","assets/index.96c20cb9.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>e(()=>import("./Build.d8cbe60b.js"),["assets/Build.d8cbe60b.js","assets/outputWidgets.64db3741.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.5d0775de.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.a2df2978.js","assets/component.vue_vue_type_script_setup_true_lang.9c21166c.js","assets/authorManager.3507d535.js","assets/index.079cdc53.js","assets/index.cf4c23b9.js","assets/record.86ff207d.js","assets/pubsub.c20c31fe.js","assets/Log.cd2694d3.js","assets/ant-design.51acf13b.js","assets/index.0ce7d3bc.js","assets/Modal.2c59a866.js","assets/StarFilled.fad29e50.js","assets/Timeline.82e33129.js","assets/Log.6c2e406b.css","assets/WarningFilled.d99917ef.js","assets/Link.24b0585e.js","assets/Text.a6dc55ad.js","assets/index.84dfd82d.js","assets/log.f9dc8fbf.js","assets/index.124b61df.js","assets/TabPane.17dbcc20.js","assets/hasIn.390a50a7.js","assets/index.d4d1243b.js","assets/isNumeric.75337b1e.js","assets/icons.bc83fa66.js","assets/index.77688e96.js","assets/FormItem.9cff88c1.js","assets/component.28425152.css","assets/build.17c38c2e.js","assets/project.7a66b2b5.js","assets/organization.6bd08362.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});r.beforeEach(async(t,n)=>{d(t,n);const o=s.getAuthor();if(c.trackPageView(o==null?void 0:o.claims.email),!t.meta.allowUnauthenticated&&!o){await r.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{v as A,I as a,r};
//# sourceMappingURL=router.f9124735.js.map
