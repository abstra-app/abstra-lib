import{C as a}from"./FormItem.bbbc01e4.js";import{D as i,g as _,h as p,_ as e}from"./outputWidgets.dd4991ea.js";import{a as m,T as c}from"./authorManager.1195382f.js";import{u as s}from"./index.571bde3d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="ab19e112-2d59-4b07-99c0-c94c8a51c702",t._sentryDebugIdIdentifier="sentry-dbid-ab19e112-2d59-4b07-99c0-c94c8a51c702")}catch{}})();const h=i(a),r=_({history:p("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./WidgetPreview.b3e48dbc.js"),["assets/WidgetPreview.b3e48dbc.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a2809316.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.8b393e58.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./Login.f565e69f.js"),["assets/Login.f565e69f.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/member.8fb32ac1.js","assets/gateway.cdb5ab80.js","assets/authorManager.1195382f.js","assets/icons.2f78ad8b.js","assets/CircularLoading.7530df21.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.8b393e58.js","assets/WidgetsFrame.97ae601d.css","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>e(()=>import("./ReturnApiKey.fb330d67.js"),["assets/ReturnApiKey.fb330d67.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/apiKey.e35f718d.js","assets/project.c51569d4.js","assets/organization.e1fdc167.js","assets/asyncComputed.b0684120.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Text.48871c15.js","assets/index.c851739c.js","assets/Modal.07d0dbca.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>e(()=>import("./Organizations.972f7760.js"),["assets/Organizations.972f7760.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/icons.2f78ad8b.js","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/organization.e1fdc167.js","assets/Navbar.vue_vue_type_script_setup_true_lang.bd47198a.js","assets/logo.084e5d7c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/index.09f6e0ee.js","assets/Navbar.f4a98ea3.css","assets/CrudView.f19f309c.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/index.571bde3d.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>e(()=>import("./Organization.53636dab.js"),["assets/Organization.53636dab.js","assets/Sidebar.vue_vue_type_script_setup_true_lang.c1a3482d.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/icons.2f78ad8b.js","assets/index.f8b5aaf7.js","assets/Sidebar.dcc9f92a.css","assets/Navbar.vue_vue_type_script_setup_true_lang.bd47198a.js","assets/logo.084e5d7c.js","assets/authorManager.1195382f.js","assets/asyncComputed.b0684120.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/index.09f6e0ee.js","assets/Navbar.f4a98ea3.css","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/organization.e1fdc167.js","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>e(()=>import("./Projects.901b159f.js"),["assets/Projects.901b159f.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/icons.2f78ad8b.js","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/project.c51569d4.js","assets/organization.e1fdc167.js","assets/CrudView.f19f309c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/index.571bde3d.js"])},{path:"settings",name:"organization-settings",component:()=>e(()=>import("./OrganizationSettings.1bf2163e.js"),["assets/OrganizationSettings.1bf2163e.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>e(()=>import("./Members.81fdebcb.js"),["assets/Members.81fdebcb.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/member.8fb32ac1.js","assets/CrudView.f19f309c.js","assets/icons.2f78ad8b.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/index.571bde3d.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>e(()=>import("./Project.6672fd82.js"),["assets/Project.6672fd82.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/project.c51569d4.js","assets/organization.e1fdc167.js","assets/Navbar.vue_vue_type_script_setup_true_lang.bd47198a.js","assets/logo.084e5d7c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/index.09f6e0ee.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.vue_vue_type_script_setup_true_lang.c1a3482d.js","assets/icons.2f78ad8b.js","assets/index.f8b5aaf7.js","assets/Sidebar.dcc9f92a.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>e(()=>import("./Live.9fa50a39.js"),["assets/Live.9fa50a39.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/build.dc7937a5.js","assets/gateway.cdb5ab80.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/project.c51569d4.js","assets/component.vue_vue_type_script_setup_true_lang.5dc6a84e.js","assets/WarningFilled.d99917ef.js","assets/log.36a0fc76.js","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/Modal.07d0dbca.js","assets/index.aa15b6c9.js","assets/log.6c2e406b.css","assets/Link.e73c66aa.js","assets/Title.489c9ade.js","assets/index.571bde3d.js","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css","assets/index.09f6e0ee.js","assets/TabPane.bf6a1c66.js","assets/hasIn.1845c5cf.js","assets/index.9eac1e6f.js","assets/isNumeric.75337b1e.js","assets/icons.2f78ad8b.js","assets/Text.48871c15.js","assets/index.18b522d1.js","assets/FormItem.bbbc01e4.js","assets/component.28425152.css"])},{path:"builds",name:"builds",component:()=>e(()=>import("./Builds.41d72a52.js"),["assets/Builds.41d72a52.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/index.571bde3d.js","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/build.dc7937a5.js","assets/gateway.cdb5ab80.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/project.c51569d4.js","assets/CrudView.f19f309c.js","assets/icons.2f78ad8b.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>e(()=>import("./Connectors.29d027e9.js"),["assets/Connectors.29d027e9.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/authorManager.1195382f.js","assets/connector.c6b41e63.js","assets/asyncComputed.b0684120.js","assets/icons.2f78ad8b.js","assets/CrudView.f19f309c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/index.571bde3d.js"])},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.2340ab00.js"),["assets/Tables.2340ab00.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/icons.2f78ad8b.js","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/tables.7653aa71.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/gateway.cdb5ab80.js","assets/string.2b028dde.js","assets/CrudView.f19f309c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/index.571bde3d.js"])},{path:"api-keys",name:"api-keys",component:()=>e(()=>import("./ApiKeys.02f0fa41.js"),["assets/ApiKeys.02f0fa41.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/index.571bde3d.js","assets/icons.2f78ad8b.js","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/member.8fb32ac1.js","assets/apiKey.e35f718d.js","assets/project.c51569d4.js","assets/CrudView.f19f309c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css"])},{path:"logs",name:"logs",component:()=>e(()=>import("./Logs.93a5837a.js"),["assets/Logs.93a5837a.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/log.36a0fc76.js","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/Modal.07d0dbca.js","assets/index.aa15b6c9.js","assets/gateway.cdb5ab80.js","assets/authorManager.1195382f.js","assets/log.6c2e406b.css","assets/index.571bde3d.js","assets/build.dc7937a5.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/asyncComputed.b0684120.js","assets/dayjs.d8c31ce3.js","assets/index.92825f81.js","assets/index.f8b5aaf7.js","assets/Title.489c9ade.js","assets/index.bbcc9a3c.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js"])},{path:"settings",name:"project-settings",component:()=>e(()=>import("./ProjectSettings.2bf6c175.js"),["assets/ProjectSettings.2bf6c175.js","assets/asyncComputed.b0684120.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/project.c51569d4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.fac2c768.js","assets/Title.489c9ade.js","assets/Text.48871c15.js","assets/index.bbcc9a3c.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js"])},{path:"env-vars",name:"env-vars",component:()=>e(()=>import("./EnvVars.81acddd2.js"),["assets/EnvVars.81acddd2.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.b0684120.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/icons.2f78ad8b.js","assets/CrudView.f19f309c.js","assets/Text.48871c15.js","assets/Title.489c9ade.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/Form.e01fef94.js","assets/Modal.07d0dbca.js","assets/url.7f3e79bf.js","assets/index.f8b5aaf7.js","assets/index.bbcc9a3c.js","assets/index.c851739c.js","assets/index.36ec3da2.js","assets/CrudView.1d309d6a.css","assets/index.571bde3d.js"])},{path:"files",name:"files",component:()=>e(()=>import("./Files.6b176316.js"),["assets/Files.6b176316.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.1195382f.js","assets/gateway.cdb5ab80.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/asyncComputed.b0684120.js","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/Modal.07d0dbca.js","assets/popupNotifcation.827dcedf.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.489c9ade.js","assets/Text.48871c15.js","assets/Card.6ae7c9b4.js","assets/index.36cfa2bd.js","assets/TabPane.bf6a1c66.js","assets/hasIn.1845c5cf.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>e(()=>import("./TableEditor.c20e0daa.js"),["assets/TableEditor.c20e0daa.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/tables.7653aa71.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/gateway.cdb5ab80.js","assets/authorManager.1195382f.js","assets/string.2b028dde.js","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b0684120.js","assets/popupNotifcation.827dcedf.js","assets/index.36ec3da2.js","assets/Form.e01fef94.js","assets/FormItem.bbbc01e4.js","assets/hasIn.1845c5cf.js","assets/index.9eac1e6f.js","assets/isNumeric.75337b1e.js","assets/project.c51569d4.js","assets/organization.e1fdc167.js","assets/icons.2f78ad8b.js","assets/index.d99f0b46.js","assets/CircularLoading.7530df21.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.bf6a1c66.js","assets/index.09f6e0ee.js","assets/Title.489c9ade.js","assets/TableEditor.e915f6c1.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>e(()=>import("./ConnectorEditor.a5286f05.js"),["assets/ConnectorEditor.a5286f05.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b0684120.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/authorManager.1195382f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.563babf8.js","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/Modal.07d0dbca.js","assets/SaveButton.13ece1cb.css","assets/project.c51569d4.js","assets/connector.c6b41e63.js","assets/organization.e1fdc167.js","assets/TabPane.bf6a1c66.js","assets/hasIn.1845c5cf.js","assets/index.09f6e0ee.js","assets/Title.489c9ade.js","assets/Form.e01fef94.js","assets/FormItem.bbbc01e4.js","assets/index.36ec3da2.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>e(()=>import("./Build.03a0660a.js"),["assets/Build.03a0660a.js","assets/outputWidgets.dd4991ea.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.832934ee.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b0684120.js","assets/component.vue_vue_type_script_setup_true_lang.5dc6a84e.js","assets/authorManager.1195382f.js","assets/index.4ca28aa9.js","assets/index.cf4c23b9.js","assets/record.2f99dcbc.js","assets/pubsub.5df81d64.js","assets/gateway.cdb5ab80.js","assets/WarningFilled.d99917ef.js","assets/log.36a0fc76.js","assets/ant-design.19fcf47a.js","assets/index.349ecaa4.js","assets/Modal.07d0dbca.js","assets/index.aa15b6c9.js","assets/log.6c2e406b.css","assets/Link.e73c66aa.js","assets/Title.489c9ade.js","assets/index.571bde3d.js","assets/index.09f6e0ee.js","assets/TabPane.bf6a1c66.js","assets/hasIn.1845c5cf.js","assets/index.9eac1e6f.js","assets/isNumeric.75337b1e.js","assets/icons.2f78ad8b.js","assets/Text.48871c15.js","assets/index.18b522d1.js","assets/FormItem.bbbc01e4.js","assets/component.28425152.css","assets/build.dc7937a5.js","assets/project.c51569d4.js","assets/organization.e1fdc167.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});r.beforeEach(async(t,n)=>{s(t,n);const o=m.getAuthor();if(c.trackPageView(o==null?void 0:o.claims.email),!t.meta.allowUnauthenticated&&!o){await r.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{h as A,r};
//# sourceMappingURL=router.d41fb960.js.map
