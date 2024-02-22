import{r as _,d as m,o as d,a as p,b as c,c as u,w as l,e as E,f as h,u as b,A as f,g as v,h as A,_ as t,i as w,j as g,T as I,k as P,P as y,C as R,M as V,I as k,s as D,l as r,m as T,n as L,p as O,q as S}from"./outputWidgets.83ad65aa.js";import{r as W,s as C}from"./index.294557b8.js";import"./pubsub.6c6cbc8d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ad99b036-0f2e-496d-886e-5a4baf41b949",e._sentryDebugIdIdentifier="sentry-dbid-ad99b036-0f2e-496d-886e-5a4baf41b949")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(i,B)=>{const s=p("router-view");return c(),u(b(f),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[E("div",M,[h(s)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.c34ddd6d.js"),["assets/Home.c34ddd6d.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.2abf5c98.js"),["assets/Workspace.2abf5c98.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/icons.ec92f7f9.js","assets/logo.084e5d7c.js","assets/BaseLayout.5a1484a1.js","assets/BaseLayout.2a9791da.css","assets/NavbarControls.d361df05.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/envVars.f18fb294.js","assets/index.294557b8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Typography.fea800b8.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/index.a449e568.js","assets/popupNotifcation.420f66fa.js","assets/index.677f843d.js","assets/Text.72dc1978.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/Paragraph.eee68d2f.js","assets/NavbarControls.e61f9e1c.css","assets/index.b1fc61d4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Workspace.d7296ad3.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Scripts.2c2d3e3f.js"),["assets/Scripts.2c2d3e3f.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/forms.80cfb984.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/asyncComputed.eebec89e.js","assets/jobs.23311e70.js","assets/scripts.6970ec03.js","assets/envVars.f18fb294.js","assets/icons.ec92f7f9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/Typography.fea800b8.js","assets/index.677f843d.js","assets/Paragraph.eee68d2f.js","assets/Base.5de97c83.js","assets/validations.3bf83cea.js","assets/string.ce2eea25.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/Text.72dc1978.js","assets/index.a449e568.js","assets/Modal.00c72438.js","assets/CrudView.fb55c5f4.js","assets/router.1b8539af.js","assets/Title.50be6d8b.js","assets/index.06a93781.js","assets/CrudView.fbf16be6.css","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Link.4990aa3d.js","assets/Scripts.24c2f930.css"]),meta:{title:"Scripts - Abstra"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.3c84bb71.js"),["assets/WorkflowEditor.3c84bb71.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/api.62145a2a.js","assets/index.cf4c23b9.js","assets/icons.ec92f7f9.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/validations.3bf83cea.js","assets/string.ce2eea25.js","assets/index.04257587.js","assets/isNumeric.75337b1e.js","assets/index.677f843d.js","assets/Text.72dc1978.js","assets/Base.5de97c83.js","assets/Typography.fea800b8.js","assets/index.a449e568.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/Modal.00c72438.js","assets/uuid.d17bacbe.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.421470dd.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/index.1855b9aa.js","assets/WorkflowEditor.17fcf286.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.06c1c1ed.js"),["assets/WorkflowKanban.06c1c1ed.js","assets/repository.75aa997f.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.eebec89e.js","assets/api.62145a2a.js","assets/index.cf4c23b9.js","assets/icons.ec92f7f9.js","assets/index.677f843d.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Text.72dc1978.js","assets/Base.5de97c83.js","assets/Typography.fea800b8.js","assets/index.06a93781.js","assets/index.df49dc57.js","assets/Paragraph.eee68d2f.js","assets/index.ba9c8b50.js","assets/Link.4990aa3d.js","assets/Title.50be6d8b.js","assets/index.8fc96f75.js","assets/CollapsePanel.a1c19e5e.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/Timeline.5fe53314.js","assets/index.1855b9aa.js","assets/index.7c735672.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.2d369aba.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/scripts.6970ec03.js","assets/envVars.f18fb294.js","assets/ExpandOutlined.c6062942.js","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/index.294557b8.js","assets/repository.0d517847.css"]),meta:{title:"Abstra - Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.d8caf309.js"),["assets/StyleEditor.d8caf309.js","assets/asyncComputed.eebec89e.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/envVars.f18fb294.js","assets/CircularLoading.05e42a56.js","assets/CircularLoading.f81b57b4.css","assets/icons.ec92f7f9.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Typography.fea800b8.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.fc5cb474.js","assets/PlayerNavbar.e416200d.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.8301aa17.js","assets/WidgetsFrame.97ae601d.css","assets/Title.50be6d8b.js","assets/SidebarPreview.c4d1a6e7.css","assets/index.677f843d.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.ecd0dd13.js"),["assets/SidebarEditor.ecd0dd13.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Typography.fea800b8.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/index.51882774.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/Title.50be6d8b.js","assets/index.677f843d.js","assets/index.1855b9aa.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/envVars.f18fb294.js","assets/CircularLoading.05e42a56.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.fc5cb474.js","assets/PlayerNavbar.e416200d.js","assets/icons.ec92f7f9.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.8301aa17.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c4d1a6e7.css"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.17e244db.js"),["assets/RequirementsEditor.17e244db.js","assets/asyncComputed.eebec89e.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/icons.ec92f7f9.js","assets/CrudView.fb55c5f4.js","assets/Paragraph.eee68d2f.js","assets/Base.5de97c83.js","assets/Typography.fea800b8.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/Modal.00c72438.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/router.1b8539af.js","assets/url.27ce9387.js","assets/index.677f843d.js","assets/Title.50be6d8b.js","assets/Text.72dc1978.js","assets/index.06a93781.js","assets/CrudView.fbf16be6.css","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/envVars.f18fb294.js"]),meta:{title:"Abstra - Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.cd8215df.js"),["assets/EnvVarsEditor.cd8215df.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/envVars.f18fb294.js","assets/icons.ec92f7f9.js","assets/CrudView.fb55c5f4.js","assets/Paragraph.eee68d2f.js","assets/Base.5de97c83.js","assets/Typography.fea800b8.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/Modal.00c72438.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/router.1b8539af.js","assets/index.677f843d.js","assets/Title.50be6d8b.js","assets/Text.72dc1978.js","assets/index.06a93781.js","assets/CrudView.fbf16be6.css","assets/index.a2aad296.js","assets/index.a449e568.js"]),meta:{title:"Abstra - Environment Variables"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.6f461b57.js"),["assets/FormEditor.6f461b57.js","assets/index.294557b8.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/pubsub.6c6cbc8d.js","assets/BaseLayout.5a1484a1.js","assets/BaseLayout.2a9791da.css","assets/FormRunner.aa9f16ae.js","assets/url.27ce9387.js","assets/Passwordless.1616ae72.js","assets/icons.ec92f7f9.js","assets/CircularLoading.05e42a56.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.e416200d.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.8301aa17.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.f845ba67.js","assets/Steps.4a8d55e8.css","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/hasIn.597d0078.js","assets/Typography.fea800b8.js","assets/FormRunner.2fbc5c93.css","assets/SourceCode.df9209f2.js","assets/uuid.d17bacbe.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/record.df4e3ae7.js","assets/asyncComputed.eebec89e.js","assets/NavbarControls.d361df05.js","assets/envVars.f18fb294.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/index.a449e568.js","assets/popupNotifcation.420f66fa.js","assets/index.677f843d.js","assets/Text.72dc1978.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/Paragraph.eee68d2f.js","assets/NavbarControls.e61f9e1c.css","assets/jobs.23311e70.js","assets/scripts.6970ec03.js","assets/validations.3bf83cea.js","assets/string.ce2eea25.js","assets/Form.5deb3adb.js","assets/toggleHighContrast.8baccfce.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.313a55a6.css","assets/forms.80cfb984.js","assets/StageRunSelector.ee9b950a.js","assets/index.df49dc57.js","assets/index.1855b9aa.js","assets/StageRunSelector.98b90ce4.css","assets/Title.50be6d8b.js","assets/index.a2aad296.js","assets/api.62145a2a.js","assets/index.cf4c23b9.js","assets/index.b1fc61d4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.06a93781.js","assets/ExpandOutlined.c6062942.js","assets/FormEditor.bdb2f6d5.css"]),meta:{title:"Smart Form Editor - Abstra"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.00b83b68.js"),["assets/FormPreview.00b83b68.js","assets/index.294557b8.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/pubsub.6c6cbc8d.js","assets/FormRunner.aa9f16ae.js","assets/url.27ce9387.js","assets/Passwordless.1616ae72.js","assets/icons.ec92f7f9.js","assets/CircularLoading.05e42a56.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.e416200d.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.8301aa17.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.f845ba67.js","assets/Steps.4a8d55e8.css","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/hasIn.597d0078.js","assets/Typography.fea800b8.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.eebec89e.js","assets/forms.80cfb984.js","assets/record.df4e3ae7.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/envVars.f18fb294.js","assets/FormPreview.335edebb.css"]),meta:{title:"Smart Form Preview - Abstra"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.3aa1d140.js"),["assets/JobEditor.3aa1d140.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/jobs.23311e70.js","assets/envVars.f18fb294.js","assets/SourceCode.df9209f2.js","assets/uuid.d17bacbe.js","assets/icons.ec92f7f9.js","assets/NavbarControls.d361df05.js","assets/index.294557b8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Typography.fea800b8.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/index.a449e568.js","assets/popupNotifcation.420f66fa.js","assets/index.677f843d.js","assets/Text.72dc1978.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/Paragraph.eee68d2f.js","assets/NavbarControls.e61f9e1c.css","assets/scripts.6970ec03.js","assets/validations.3bf83cea.js","assets/string.ce2eea25.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/toggleHighContrast.8baccfce.js","assets/toggleHighContrast.30d77c87.css","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.5a1484a1.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a40a65e0.js","assets/index.26b84ba1.js","assets/index.06a93781.js","assets/dayjs.e460ad26.js","assets/Title.50be6d8b.js","assets/index.51882774.js","assets/index.b1fc61d4.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Job Editor - Abstra"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.ff9a4781.js"),["assets/HookEditor.ff9a4781.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/SourceCode.df9209f2.js","assets/uuid.d17bacbe.js","assets/icons.ec92f7f9.js","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/NavbarControls.d361df05.js","assets/envVars.f18fb294.js","assets/index.294557b8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Typography.fea800b8.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/index.a449e568.js","assets/popupNotifcation.420f66fa.js","assets/index.677f843d.js","assets/Text.72dc1978.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/Paragraph.eee68d2f.js","assets/NavbarControls.e61f9e1c.css","assets/jobs.23311e70.js","assets/scripts.6970ec03.js","assets/validations.3bf83cea.js","assets/string.ce2eea25.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/toggleHighContrast.8baccfce.js","assets/toggleHighContrast.30d77c87.css","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.5a1484a1.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a40a65e0.js","assets/api.62145a2a.js","assets/index.cf4c23b9.js","assets/index.94b1673a.js","assets/CollapsePanel.a1c19e5e.js","assets/index.1855b9aa.js","assets/index.06a93781.js","assets/StageRunSelector.ee9b950a.js","assets/index.df49dc57.js","assets/StageRunSelector.98b90ce4.css","assets/index.b1fc61d4.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Hook Editor - Abstra"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.52c50f8f.js"),["assets/ScriptEditor.52c50f8f.js","assets/outputWidgets.83ad65aa.js","assets/outputWidgets.b5a98445.css","assets/workspaces.a03a836c.js","assets/runnerData.83b2a9f7.js","assets/url.27ce9387.js","assets/record.df4e3ae7.js","assets/pubsub.6c6cbc8d.js","assets/asyncComputed.eebec89e.js","assets/scripts.6970ec03.js","assets/envVars.f18fb294.js","assets/SourceCode.df9209f2.js","assets/uuid.d17bacbe.js","assets/icons.ec92f7f9.js","assets/NavbarControls.d361df05.js","assets/index.294557b8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0a568717.js","assets/ant-design.a75cbb2f.js","assets/index.dbec653f.js","assets/Modal.00c72438.js","assets/Typography.fea800b8.js","assets/Link.4990aa3d.js","assets/Base.5de97c83.js","assets/SaveButton.13ece1cb.css","assets/index.a449e568.js","assets/popupNotifcation.420f66fa.js","assets/index.677f843d.js","assets/Text.72dc1978.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d125b27a.js","assets/Paragraph.eee68d2f.js","assets/NavbarControls.e61f9e1c.css","assets/jobs.23311e70.js","assets/validations.3bf83cea.js","assets/string.ce2eea25.js","assets/Form.5deb3adb.js","assets/hasIn.597d0078.js","assets/toggleHighContrast.8baccfce.js","assets/toggleHighContrast.30d77c87.css","assets/Card.e59afab4.js","assets/TabPane.b3ba7cb7.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.5a1484a1.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.a40a65e0.js","assets/StageRunSelector.ee9b950a.js","assets/index.df49dc57.js","assets/index.1855b9aa.js","assets/StageRunSelector.98b90ce4.css","assets/index.b1fc61d4.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Script Editor - Abstra"}}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{w(e,o)});(async()=>{await C();const e=g({render:()=>T(q)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",R),e.component("Markdown",V),e.component("Icon",k),e.component("Message",D),r(e,L),r(e,O),r(e,S)})();
//# sourceMappingURL=editor.20c90c70.js.map
