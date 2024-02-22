import{r as _,d as m,o as p,a as d,b as c,c as u,w as l,e as E,f as h,u as f,A as b,g as v,h as A,_ as t,i as w,j as g,T as I,k as P,P as y,C as R,M as V,I as k,s as D,l as r,m as T,n as L,p as O,q as S}from"./outputWidgets.83751d1a.js";import{r as W,s as C}from"./index.1569c8cc.js";import"./pubsub.d27c224d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d2f28cfe-675b-43c6-8a2a-6b5cea7f9913",e._sentryDebugIdIdentifier="sentry-dbid-d2f28cfe-675b-43c6-8a2a-6b5cea7f9913")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return p(()=>{window.addEventListener("resize",x)}),(i,B)=>{const s=d("router-view");return c(),u(f(b),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[E("div",M,[h(s)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.587781f1.js"),["assets/Home.587781f1.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.541f4460.js"),["assets/Workspace.541f4460.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/icons.ec415876.js","assets/logo.084e5d7c.js","assets/BaseLayout.fd67ef29.js","assets/BaseLayout.2a9791da.css","assets/NavbarControls.abdd623e.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/envVars.78f9e536.js","assets/index.1569c8cc.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Typography.31d41d79.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/index.7cb52513.js","assets/popupNotifcation.fe96a48e.js","assets/index.9ca60e41.js","assets/Text.50196cd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/Paragraph.436c5ac0.js","assets/NavbarControls.e61f9e1c.css","assets/index.e0b69d29.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Workspace.d7296ad3.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Scripts.8973b881.js"),["assets/Scripts.8973b881.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/forms.c9bd53d9.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/asyncComputed.00b2a54a.js","assets/jobs.2c974cc5.js","assets/scripts.8ecc4b2c.js","assets/envVars.78f9e536.js","assets/icons.ec415876.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/Typography.31d41d79.js","assets/index.9ca60e41.js","assets/Paragraph.436c5ac0.js","assets/Base.809246e3.js","assets/validations.734863c2.js","assets/string.79332d2a.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/Text.50196cd9.js","assets/index.7cb52513.js","assets/Modal.66378839.js","assets/CrudView.9183ae3f.js","assets/router.a97dd462.js","assets/Title.a85001be.js","assets/index.bf9a97d8.js","assets/CrudView.fbf16be6.css","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Link.326a72fe.js","assets/Scripts.24c2f930.css"]),meta:{title:"Scripts - Abstra"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.b6beeaba.js"),["assets/WorkflowEditor.b6beeaba.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/api.ec39cdfb.js","assets/index.cf4c23b9.js","assets/icons.ec415876.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/validations.734863c2.js","assets/string.79332d2a.js","assets/index.e909eb89.js","assets/isNumeric.75337b1e.js","assets/index.9ca60e41.js","assets/Text.50196cd9.js","assets/Base.809246e3.js","assets/Typography.31d41d79.js","assets/index.7cb52513.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/Modal.66378839.js","assets/uuid.c07e6d65.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9b0e2586.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/index.1c747c18.js","assets/WorkflowEditor.17fcf286.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.57a3444c.js"),["assets/WorkflowKanban.57a3444c.js","assets/repository.f523cfe4.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.00b2a54a.js","assets/api.ec39cdfb.js","assets/index.cf4c23b9.js","assets/icons.ec415876.js","assets/index.9ca60e41.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Text.50196cd9.js","assets/Base.809246e3.js","assets/Typography.31d41d79.js","assets/index.bf9a97d8.js","assets/index.24986e37.js","assets/Paragraph.436c5ac0.js","assets/index.7b5f3fb4.js","assets/Link.326a72fe.js","assets/Title.a85001be.js","assets/index.344a4e6c.js","assets/CollapsePanel.dcf59abd.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/Timeline.9821686d.js","assets/index.1c747c18.js","assets/index.927b5134.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.3ab00a37.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/scripts.8ecc4b2c.js","assets/envVars.78f9e536.js","assets/ExpandOutlined.e5b6f02d.js","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/index.1569c8cc.js","assets/repository.8e89c80c.css"]),meta:{title:"Abstra - Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.96a2aac8.js"),["assets/StyleEditor.96a2aac8.js","assets/asyncComputed.00b2a54a.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/envVars.78f9e536.js","assets/CircularLoading.a6b10038.js","assets/CircularLoading.f81b57b4.css","assets/icons.ec415876.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Typography.31d41d79.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.16643931.js","assets/PlayerNavbar.004b257e.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.bc57be0b.js","assets/WidgetsFrame.97ae601d.css","assets/Title.a85001be.js","assets/SidebarPreview.c4d1a6e7.css","assets/index.9ca60e41.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.6a8e6591.js"),["assets/SidebarEditor.6a8e6591.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Typography.31d41d79.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/index.dfa69eec.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/Title.a85001be.js","assets/index.9ca60e41.js","assets/index.1c747c18.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/envVars.78f9e536.js","assets/CircularLoading.a6b10038.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.16643931.js","assets/PlayerNavbar.004b257e.js","assets/icons.ec415876.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.bc57be0b.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c4d1a6e7.css"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.ef0acb5c.js"),["assets/RequirementsEditor.ef0acb5c.js","assets/asyncComputed.00b2a54a.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/icons.ec415876.js","assets/CrudView.9183ae3f.js","assets/Paragraph.436c5ac0.js","assets/Base.809246e3.js","assets/Typography.31d41d79.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/Modal.66378839.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/router.a97dd462.js","assets/url.67368727.js","assets/index.9ca60e41.js","assets/Title.a85001be.js","assets/Text.50196cd9.js","assets/index.bf9a97d8.js","assets/CrudView.fbf16be6.css","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/envVars.78f9e536.js"]),meta:{title:"Abstra - Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.8d8c7e61.js"),["assets/EnvVarsEditor.8d8c7e61.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/envVars.78f9e536.js","assets/icons.ec415876.js","assets/CrudView.9183ae3f.js","assets/Paragraph.436c5ac0.js","assets/Base.809246e3.js","assets/Typography.31d41d79.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/Modal.66378839.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/router.a97dd462.js","assets/index.9ca60e41.js","assets/Title.a85001be.js","assets/Text.50196cd9.js","assets/index.bf9a97d8.js","assets/CrudView.fbf16be6.css","assets/index.33968932.js","assets/index.7cb52513.js"]),meta:{title:"Abstra - Environment Variables"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.a151eee7.js"),["assets/FormEditor.a151eee7.js","assets/index.1569c8cc.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/pubsub.d27c224d.js","assets/BaseLayout.fd67ef29.js","assets/BaseLayout.2a9791da.css","assets/FormRunner.dbba8132.js","assets/url.67368727.js","assets/Passwordless.01158f2a.js","assets/icons.ec415876.js","assets/CircularLoading.a6b10038.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.004b257e.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.bc57be0b.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.3be0bc3b.js","assets/Steps.4a8d55e8.css","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/hasIn.4924df36.js","assets/Typography.31d41d79.js","assets/FormRunner.2fbc5c93.css","assets/SourceCode.a1bffc16.js","assets/uuid.c07e6d65.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/record.5250f5f8.js","assets/asyncComputed.00b2a54a.js","assets/NavbarControls.abdd623e.js","assets/envVars.78f9e536.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/index.7cb52513.js","assets/popupNotifcation.fe96a48e.js","assets/index.9ca60e41.js","assets/Text.50196cd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/Paragraph.436c5ac0.js","assets/NavbarControls.e61f9e1c.css","assets/jobs.2c974cc5.js","assets/scripts.8ecc4b2c.js","assets/validations.734863c2.js","assets/string.79332d2a.js","assets/Form.c4d7a77e.js","assets/toggleHighContrast.3760ef71.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.313a55a6.css","assets/forms.c9bd53d9.js","assets/StageRunSelector.64e4b587.js","assets/index.24986e37.js","assets/index.1c747c18.js","assets/StageRunSelector.98b90ce4.css","assets/Title.a85001be.js","assets/index.33968932.js","assets/api.ec39cdfb.js","assets/index.cf4c23b9.js","assets/index.e0b69d29.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.bf9a97d8.js","assets/ExpandOutlined.e5b6f02d.js","assets/FormEditor.bdb2f6d5.css"]),meta:{title:"Smart Form Editor - Abstra"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.adb68cc2.js"),["assets/FormPreview.adb68cc2.js","assets/index.1569c8cc.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/pubsub.d27c224d.js","assets/FormRunner.dbba8132.js","assets/url.67368727.js","assets/Passwordless.01158f2a.js","assets/icons.ec415876.js","assets/CircularLoading.a6b10038.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.004b257e.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.bc57be0b.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.3be0bc3b.js","assets/Steps.4a8d55e8.css","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/hasIn.4924df36.js","assets/Typography.31d41d79.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.00b2a54a.js","assets/forms.c9bd53d9.js","assets/record.5250f5f8.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/envVars.78f9e536.js","assets/FormPreview.335edebb.css"]),meta:{title:"Smart Form Preview - Abstra"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.d23b5e4e.js"),["assets/JobEditor.d23b5e4e.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/jobs.2c974cc5.js","assets/envVars.78f9e536.js","assets/SourceCode.a1bffc16.js","assets/uuid.c07e6d65.js","assets/icons.ec415876.js","assets/NavbarControls.abdd623e.js","assets/index.1569c8cc.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Typography.31d41d79.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/index.7cb52513.js","assets/popupNotifcation.fe96a48e.js","assets/index.9ca60e41.js","assets/Text.50196cd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/Paragraph.436c5ac0.js","assets/NavbarControls.e61f9e1c.css","assets/scripts.8ecc4b2c.js","assets/validations.734863c2.js","assets/string.79332d2a.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/toggleHighContrast.3760ef71.js","assets/toggleHighContrast.30d77c87.css","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.fd67ef29.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.418f7827.js","assets/index.1e01189d.js","assets/index.bf9a97d8.js","assets/dayjs.01389dd0.js","assets/Title.a85001be.js","assets/index.dfa69eec.js","assets/index.e0b69d29.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Job Editor - Abstra"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.3b4b6ec5.js"),["assets/HookEditor.3b4b6ec5.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/SourceCode.a1bffc16.js","assets/uuid.c07e6d65.js","assets/icons.ec415876.js","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/NavbarControls.abdd623e.js","assets/envVars.78f9e536.js","assets/index.1569c8cc.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Typography.31d41d79.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/index.7cb52513.js","assets/popupNotifcation.fe96a48e.js","assets/index.9ca60e41.js","assets/Text.50196cd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/Paragraph.436c5ac0.js","assets/NavbarControls.e61f9e1c.css","assets/jobs.2c974cc5.js","assets/scripts.8ecc4b2c.js","assets/validations.734863c2.js","assets/string.79332d2a.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/toggleHighContrast.3760ef71.js","assets/toggleHighContrast.30d77c87.css","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.fd67ef29.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.418f7827.js","assets/api.ec39cdfb.js","assets/index.cf4c23b9.js","assets/index.bbbbc6ef.js","assets/CollapsePanel.dcf59abd.js","assets/index.1c747c18.js","assets/index.bf9a97d8.js","assets/StageRunSelector.64e4b587.js","assets/index.24986e37.js","assets/StageRunSelector.98b90ce4.css","assets/index.e0b69d29.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Hook Editor - Abstra"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.61393cb4.js"),["assets/ScriptEditor.61393cb4.js","assets/outputWidgets.83751d1a.js","assets/outputWidgets.b5a98445.css","assets/workspaces.cc519ae5.js","assets/runnerData.cd0a71ad.js","assets/url.67368727.js","assets/record.5250f5f8.js","assets/pubsub.d27c224d.js","assets/asyncComputed.00b2a54a.js","assets/scripts.8ecc4b2c.js","assets/envVars.78f9e536.js","assets/SourceCode.a1bffc16.js","assets/uuid.c07e6d65.js","assets/icons.ec415876.js","assets/NavbarControls.abdd623e.js","assets/index.1569c8cc.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9092831f.js","assets/ant-design.9b9294cd.js","assets/index.634aab38.js","assets/Modal.66378839.js","assets/Typography.31d41d79.js","assets/Link.326a72fe.js","assets/Base.809246e3.js","assets/SaveButton.13ece1cb.css","assets/index.7cb52513.js","assets/popupNotifcation.fe96a48e.js","assets/index.9ca60e41.js","assets/Text.50196cd9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js","assets/Paragraph.436c5ac0.js","assets/NavbarControls.e61f9e1c.css","assets/jobs.2c974cc5.js","assets/validations.734863c2.js","assets/string.79332d2a.js","assets/Form.c4d7a77e.js","assets/hasIn.4924df36.js","assets/toggleHighContrast.3760ef71.js","assets/toggleHighContrast.30d77c87.css","assets/Card.13553b89.js","assets/TabPane.fa2e9d8d.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.fd67ef29.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.418f7827.js","assets/StageRunSelector.64e4b587.js","assets/index.24986e37.js","assets/index.1c747c18.js","assets/StageRunSelector.98b90ce4.css","assets/index.e0b69d29.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Script Editor - Abstra"}}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{w(e,o)});(async()=>{await C();const e=g({render:()=>T(q)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",R),e.component("Markdown",V),e.component("Icon",k),e.component("Message",D),r(e,L),r(e,O),r(e,S)})();
//# sourceMappingURL=editor.f274ad30.js.map
