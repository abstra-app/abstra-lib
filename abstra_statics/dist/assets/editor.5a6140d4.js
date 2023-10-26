import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as f,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.0ece0846.js";import{u as W}from"./index.8f7b5e8b.js";import{u as j}from"./index.a14736e9.js";import"./pubsub.36f7c3dd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1fa13457-009f-49ca-9d8e-5676bd672267",e._sentryDebugIdIdentifier="sentry-dbid-1fa13457-009f-49ca-9d8e-5676bd672267")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(f(b),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.1b7d2308.js"),["assets/Home.1b7d2308.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.ebe7e1dc.js"),["assets/Workspace.ebe7e1dc.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/icons.0c5e4294.js","assets/Tooltip.a0a8aa23.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.3683a7a4.js","assets/workspaces.5e470fa6.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/url.88345ece.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2e32b942.js","assets/popupNotifcation.f506af0b.js","assets/asyncComputed.b17b5cdf.js","assets/index.9d366905.js","assets/Title.8bc762f9.js","assets/index.e27d4fb9.js","assets/Form.cb4c8a62.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.aa963820.js","assets/BaseLayout.2d5b030e.css","assets/index.97a2927e.js","assets/index.d403f9df.js","assets/Workspace.6ebc5b25.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.5849ce22.js"),["assets/Forms.5849ce22.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/icons.0c5e4294.js","assets/asyncComputed.b17b5cdf.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/CrudView.2f330524.js","assets/index.9d366905.js","assets/Title.8bc762f9.js","assets/Form.cb4c8a62.js","assets/router.2c88bff4.js","assets/index.8f7b5e8b.js","assets/url.88345ece.js","assets/index.89e67404.js","assets/index.d779bf49.js","assets/index.1dc65b05.js","assets/index.2507db24.js","assets/index.d403f9df.js","assets/CrudView.b7607004.css","assets/ant-design.39d1a1e9.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.1d1ce634.js"),["assets/Dashes.1d1ce634.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/icons.0c5e4294.js","assets/asyncComputed.b17b5cdf.js","assets/dashes.42088004.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/runnerData.d0edd432.js","assets/CrudView.2f330524.js","assets/index.9d366905.js","assets/Title.8bc762f9.js","assets/Form.cb4c8a62.js","assets/router.2c88bff4.js","assets/index.8f7b5e8b.js","assets/url.88345ece.js","assets/index.89e67404.js","assets/index.d779bf49.js","assets/index.1dc65b05.js","assets/index.2507db24.js","assets/index.d403f9df.js","assets/CrudView.b7607004.css","assets/ant-design.39d1a1e9.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.a32a54f5.js"),["assets/Jobs.a32a54f5.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/icons.0c5e4294.js","assets/asyncComputed.b17b5cdf.js","assets/jobs.28afca44.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/CrudView.2f330524.js","assets/index.9d366905.js","assets/Title.8bc762f9.js","assets/Form.cb4c8a62.js","assets/router.2c88bff4.js","assets/index.8f7b5e8b.js","assets/url.88345ece.js","assets/index.89e67404.js","assets/index.d779bf49.js","assets/index.1dc65b05.js","assets/index.2507db24.js","assets/index.d403f9df.js","assets/CrudView.b7607004.css","assets/ant-design.39d1a1e9.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.2d5752a5.js"),["assets/Hooks.2d5752a5.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/icons.0c5e4294.js","assets/asyncComputed.b17b5cdf.js","assets/hooks.9184bf80.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/CrudView.2f330524.js","assets/index.9d366905.js","assets/Title.8bc762f9.js","assets/Form.cb4c8a62.js","assets/router.2c88bff4.js","assets/index.8f7b5e8b.js","assets/url.88345ece.js","assets/index.89e67404.js","assets/index.d779bf49.js","assets/index.1dc65b05.js","assets/index.2507db24.js","assets/index.d403f9df.js","assets/CrudView.b7607004.css","assets/ant-design.39d1a1e9.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.28bdb5a1.js"),["assets/StyleEditor.28bdb5a1.js","assets/asyncComputed.b17b5cdf.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/workspaces.5e470fa6.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/url.88345ece.js","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/icons.0c5e4294.js","assets/index.672fbea4.js","assets/Title.8bc762f9.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/ant-design.39d1a1e9.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.ab8a7cfa.js","assets/PlayerNavbar.7ac83764.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.d0edd432.js","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.2507db24.js","assets/Form.cb4c8a62.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.910ab0ad.js"),["assets/SidebarEditor.910ab0ad.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/index.4d77a393.js","assets/Title.8bc762f9.js","assets/index.d403f9df.js","assets/index.2507db24.js","assets/workspaces.5e470fa6.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/url.88345ece.js","assets/asyncComputed.b17b5cdf.js","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/ant-design.39d1a1e9.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.ab8a7cfa.js","assets/PlayerNavbar.7ac83764.js","assets/icons.0c5e4294.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.d0edd432.js","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.cb4c8a62.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.48062f50.js"),["assets/FormEditor.48062f50.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/FormTester.vue_vue_type_script_setup_true_lang.c9c6c71a.js","assets/SmartConsole.e7e7ca5e.js","assets/asyncComputed.b17b5cdf.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/dashes.42088004.js","assets/runnerData.d0edd432.js","assets/hooks.9184bf80.js","assets/jobs.28afca44.js","assets/workspaces.5e470fa6.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/Title.8bc762f9.js","assets/index.1dc65b05.js","assets/uuid.434efb78.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2e32b942.js","assets/SmartConsole.96457e04.css","assets/Form.cb4c8a62.js","assets/broker.6822d68f.js","assets/index.a14736e9.js","assets/executeJs.8b7649d8.js","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.7ac83764.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.8f7b5e8b.js","assets/Steps.83bc6723.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e9406f2f.js","assets/broker.49d66771.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.e7dd4ae3.js","assets/index.22322988.js","assets/CollapsePanel.fe103a12.js","assets/index.2507db24.js","assets/index.d403f9df.js","assets/index.89e67404.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/ant-design.39d1a1e9.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.a00b59e8.js","assets/BaseLayout.aa963820.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.8ad6ce3d.js","assets/index.0280da41.js","assets/index.97a2927e.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.fc3c8c6e.js"),["assets/FormPreview.fc3c8c6e.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/broker.6822d68f.js","assets/index.a14736e9.js","assets/pubsub.36f7c3dd.js","assets/executeJs.8b7649d8.js","assets/runnerData.d0edd432.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/PlayerNavbar.7ac83764.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.8f7b5e8b.js","assets/Steps.83bc6723.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e9406f2f.js","assets/broker.49d66771.css","assets/BackButton.ccb31344.js","assets/BackButton.dd542746.css","assets/asyncComputed.b17b5cdf.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/workspaces.5e470fa6.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.d7234cc7.js"),["assets/JobEditor.d7234cc7.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/SmartConsole.e7e7ca5e.js","assets/asyncComputed.b17b5cdf.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/dashes.42088004.js","assets/runnerData.d0edd432.js","assets/hooks.9184bf80.js","assets/jobs.28afca44.js","assets/workspaces.5e470fa6.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/Title.8bc762f9.js","assets/index.1dc65b05.js","assets/uuid.434efb78.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2e32b942.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/ant-design.39d1a1e9.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.aa963820.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.29fb373f.js","assets/RunButton.vue_vue_type_script_setup_true_lang.9f6c82bf.js","assets/index.0ef9bc08.js","assets/index.d779bf49.js","assets/dayjs.08912073.js","assets/Form.cb4c8a62.js","assets/index.97a2927e.js","assets/index.d403f9df.js","assets/TabPane.8ad6ce3d.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.4984618a.js"),["assets/DashEditor.4984618a.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/index.8f7b5e8b.js","assets/executeJs.8b7649d8.js","assets/runnerData.d0edd432.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/index.a14736e9.js","assets/pubsub.36f7c3dd.js","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.7ac83764.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.83bc6723.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/BaseLayout.aa963820.js","assets/BaseLayout.2d5b030e.css","assets/DashPlayer.dafe90c6.js","assets/geometryUtils.6c3bcdc2.js","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/SmartConsole.e7e7ca5e.js","assets/asyncComputed.b17b5cdf.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/dashes.42088004.js","assets/hooks.9184bf80.js","assets/jobs.28afca44.js","assets/workspaces.5e470fa6.js","assets/Title.8bc762f9.js","assets/index.1dc65b05.js","assets/uuid.434efb78.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2e32b942.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.a00b59e8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/ant-design.39d1a1e9.js","assets/SaveButton.13ece1cb.css","assets/keyboard.ebcceae5.js","assets/index.97a2927e.js","assets/index.d403f9df.js","assets/TabPane.8ad6ce3d.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.9a3782ad.js"),["assets/DashPreview.9a3782ad.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/DashPlayer.dafe90c6.js","assets/executeJs.8b7649d8.js","assets/runnerData.d0edd432.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/index.a14736e9.js","assets/pubsub.36f7c3dd.js","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.7ac83764.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.8f7b5e8b.js","assets/Steps.83bc6723.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/geometryUtils.6c3bcdc2.js","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/BackButton.ccb31344.js","assets/BackButton.dd542746.css","assets/asyncComputed.b17b5cdf.js","assets/dashes.42088004.js","assets/activeRecord.f46f579b.js","assets/workspaces.5e470fa6.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.0fea4d53.js"),["assets/HookEditor.0fea4d53.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/SmartConsole.e7e7ca5e.js","assets/asyncComputed.b17b5cdf.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/dashes.42088004.js","assets/runnerData.d0edd432.js","assets/hooks.9184bf80.js","assets/jobs.28afca44.js","assets/workspaces.5e470fa6.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/Title.8bc762f9.js","assets/index.1dc65b05.js","assets/uuid.434efb78.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2e32b942.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/ant-design.39d1a1e9.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.aa963820.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.e6e785e6.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.e7dd4ae3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.9f6c82bf.js","assets/index.6d28d2ed.js","assets/index.2507db24.js","assets/CollapsePanel.fe103a12.js","assets/index.d403f9df.js","assets/index.89e67404.js","assets/index.d779bf49.js","assets/Form.cb4c8a62.js","assets/index.97a2927e.js","assets/TabPane.8ad6ce3d.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.41def4e7.js"),["assets/WorkflowEditor.41def4e7.js","assets/forms.bea4ba08.js","assets/activeRecord.f46f579b.js","assets/pubsub.36f7c3dd.js","assets/outputWidgets.0ece0846.js","assets/outputWidgets.e8fba759.css","assets/workspaces.5e470fa6.js","assets/url.88345ece.js","assets/icons.0c5e4294.js","assets/FormTester.vue_vue_type_script_setup_true_lang.c9c6c71a.js","assets/SmartConsole.e7e7ca5e.js","assets/asyncComputed.b17b5cdf.js","assets/dashes.42088004.js","assets/runnerData.d0edd432.js","assets/hooks.9184bf80.js","assets/jobs.28afca44.js","assets/Title.8bc762f9.js","assets/index.1dc65b05.js","assets/uuid.434efb78.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2e32b942.js","assets/SmartConsole.96457e04.css","assets/Form.cb4c8a62.js","assets/broker.6822d68f.js","assets/index.a14736e9.js","assets/executeJs.8b7649d8.js","assets/CircularLoading.6b2b9f0f.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.7ac83764.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.8f7b5e8b.js","assets/Steps.83bc6723.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.7f002a09.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.e9406f2f.js","assets/broker.49d66771.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.e7dd4ae3.js","assets/index.22322988.js","assets/CollapsePanel.fe103a12.js","assets/index.2507db24.js","assets/index.d403f9df.js","assets/index.89e67404.js","assets/geometryUtils.6c3bcdc2.js","assets/keyboard.ebcceae5.js","assets/ant-design.39d1a1e9.js","assets/index.f4ac7424.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.a00b59e8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a24e1d0a.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.e6e785e6.js","assets/RunButton.vue_vue_type_script_setup_true_lang.9f6c82bf.js","assets/index.6d28d2ed.js","assets/index.d779bf49.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.29fb373f.js","assets/index.0ef9bc08.js","assets/dayjs.08912073.js","assets/index.9d366905.js","assets/index.4d77a393.js","assets/LoginBlock.3683a7a4.js","assets/popupNotifcation.f506af0b.js","assets/index.e27d4fb9.js","assets/LoginBlock.d273f904.css","assets/index.97a2927e.js","assets/index.182139c5.js","assets/TabPane.8ad6ce3d.js","assets/WorkflowEditor.df415533.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.5a6140d4.js.map
