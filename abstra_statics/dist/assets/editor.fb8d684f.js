import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f,u as E,A as b,g as v,h as A,_ as t,i as P,T as w,j as I,P as D,C as y,M as R,I as V,s as k,k as r,l as T,m as g,n as L,p as O}from"./outputWidgets.26432679.js";import{u as W}from"./index.7525b870.js";import{r as j,u as C}from"./index.237cf0d3.js";import"./pubsub.08286f38.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="41c49b3f-ee6f-40f2-ae6b-0b82dafdefc8",e._sentryDebugIdIdentifier="sentry-dbid-41c49b3f-ee6f-40f2-ae6b-0b82dafdefc8")}catch{}})();const s=_(!1),S=()=>{window.innerWidth<780?s.value=!0:s.value=!1},x={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},M=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",S)}),(i,B)=>{const n=p("router-view");return c(),h(E(b),{theme:o},{default:u(()=>[l("div",x,[f(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.795c3a24.js"),["assets/Home.795c3a24.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.77fe8a91.js"),["assets/Workspace.77fe8a91.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/icons.3e1b53b9.js","assets/Tooltip.3097773a.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.6dc08815.js","assets/workspaces.933b6053.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/url.8c6cc8c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4820697c.js","assets/popupNotifcation.d4f67078.js","assets/asyncComputed.8df159aa.js","assets/Text.75fc17ff.js","assets/Title.c4ac850f.js","assets/index.b8d25148.js","assets/index.a657419a.js","assets/Form.2a6ff15f.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.9834397a.js","assets/BaseLayout.2d5b030e.css","assets/index.38ca7f9f.js","assets/index.d956590f.js","assets/Workspace.9cd137ce.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.b172f9b8.js"),["assets/Forms.b172f9b8.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/icons.3e1b53b9.js","assets/asyncComputed.8df159aa.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/CrudView.e9eea934.js","assets/Text.75fc17ff.js","assets/Title.c4ac850f.js","assets/Form.2a6ff15f.js","assets/router.7a8d79b5.js","assets/index.7525b870.js","assets/url.8c6cc8c7.js","assets/index.b8d25148.js","assets/index.dbd4c5b5.js","assets/index.d321bc9f.js","assets/index.d196cbfa.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/CrudView.b7607004.css","assets/ant-design.5c566733.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.a2405b02.js"),["assets/Dashes.a2405b02.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/icons.3e1b53b9.js","assets/asyncComputed.8df159aa.js","assets/dashes.c533cf7c.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/runnerData.ab25e9a5.js","assets/CrudView.e9eea934.js","assets/Text.75fc17ff.js","assets/Title.c4ac850f.js","assets/Form.2a6ff15f.js","assets/router.7a8d79b5.js","assets/index.7525b870.js","assets/url.8c6cc8c7.js","assets/index.b8d25148.js","assets/index.dbd4c5b5.js","assets/index.d321bc9f.js","assets/index.d196cbfa.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/CrudView.b7607004.css","assets/ant-design.5c566733.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.d210be8e.js"),["assets/Jobs.d210be8e.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/icons.3e1b53b9.js","assets/asyncComputed.8df159aa.js","assets/jobs.2068c8f2.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/CrudView.e9eea934.js","assets/Text.75fc17ff.js","assets/Title.c4ac850f.js","assets/Form.2a6ff15f.js","assets/router.7a8d79b5.js","assets/index.7525b870.js","assets/url.8c6cc8c7.js","assets/index.b8d25148.js","assets/index.dbd4c5b5.js","assets/index.d321bc9f.js","assets/index.d196cbfa.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/CrudView.b7607004.css","assets/ant-design.5c566733.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.c8fd1f69.js"),["assets/Hooks.c8fd1f69.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/icons.3e1b53b9.js","assets/asyncComputed.8df159aa.js","assets/hooks.4913b9a3.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/CrudView.e9eea934.js","assets/Text.75fc17ff.js","assets/Title.c4ac850f.js","assets/Form.2a6ff15f.js","assets/router.7a8d79b5.js","assets/index.7525b870.js","assets/url.8c6cc8c7.js","assets/index.b8d25148.js","assets/index.dbd4c5b5.js","assets/index.d321bc9f.js","assets/index.d196cbfa.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/CrudView.b7607004.css","assets/ant-design.5c566733.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.d1d14e0e.js"),["assets/StyleEditor.d1d14e0e.js","assets/asyncComputed.8df159aa.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/workspaces.933b6053.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/url.8c6cc8c7.js","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/icons.3e1b53b9.js","assets/index.fb5cd151.js","assets/Title.c4ac850f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/ant-design.5c566733.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.39864ad9.js","assets/PlayerNavbar.0b17e427.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.ab25e9a5.js","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.9d9f0030.js","assets/Form.2a6ff15f.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.6f2932f3.js"),["assets/SidebarEditor.6f2932f3.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/index.add140e3.js","assets/Title.c4ac850f.js","assets/index.d956590f.js","assets/index.9d9f0030.js","assets/workspaces.933b6053.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/url.8c6cc8c7.js","assets/asyncComputed.8df159aa.js","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/ant-design.5c566733.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.39864ad9.js","assets/PlayerNavbar.0b17e427.js","assets/icons.3e1b53b9.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.ab25e9a5.js","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.2a6ff15f.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"requirements",component:()=>t(()=>import("./RequirementsEditor.1f9b163e.js"),["assets/RequirementsEditor.1f9b163e.js","assets/asyncComputed.8df159aa.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/icons.3e1b53b9.js","assets/CrudView.e9eea934.js","assets/Text.75fc17ff.js","assets/Title.c4ac850f.js","assets/Form.2a6ff15f.js","assets/router.7a8d79b5.js","assets/index.7525b870.js","assets/url.8c6cc8c7.js","assets/index.b8d25148.js","assets/index.dbd4c5b5.js","assets/index.d321bc9f.js","assets/index.d196cbfa.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/CrudView.b7607004.css","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js"]),meta:{title:"Abstra - Requirements"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.f5d6dc8a.js"),["assets/FormEditor.f5d6dc8a.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/FormTester.vue_vue_type_script_setup_true_lang.83ecad8d.js","assets/SmartConsole.74b34e5e.js","assets/asyncComputed.8df159aa.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/dashes.c533cf7c.js","assets/runnerData.ab25e9a5.js","assets/hooks.4913b9a3.js","assets/jobs.2068c8f2.js","assets/workspaces.933b6053.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/Title.c4ac850f.js","assets/index.d196cbfa.js","assets/uuid.356da5d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4820697c.js","assets/SmartConsole.96457e04.css","assets/Form.2a6ff15f.js","assets/FormRunner.15db374c.js","assets/index.237cf0d3.js","assets/executeJs.b4852adc.js","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.0b17e427.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.7525b870.js","assets/Steps.6180ce34.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.49108fbe.js","assets/FormRunner.49d66771.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.6f0cc96a.js","assets/index.809e214b.js","assets/CollapsePanel.7057a35a.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/index.dbd4c5b5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/ant-design.5c566733.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.4178bbf7.js","assets/BaseLayout.9834397a.js","assets/BaseLayout.2d5b030e.css","assets/Debugger.vue_vue_type_script_setup_true_lang.1e4bb91c.js","assets/Text.75fc17ff.js","assets/TabPane.2fc257cd.js","assets/index.44f082e4.js","assets/index.38ca7f9f.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.1940dc6d.js"),["assets/FormPreview.1940dc6d.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.15db374c.js","assets/index.237cf0d3.js","assets/pubsub.08286f38.js","assets/executeJs.b4852adc.js","assets/runnerData.ab25e9a5.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/PlayerNavbar.0b17e427.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.7525b870.js","assets/Steps.6180ce34.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.49108fbe.js","assets/FormRunner.49d66771.css","assets/BackButton.d33f337f.js","assets/BackButton.dd542746.css","assets/asyncComputed.8df159aa.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/workspaces.933b6053.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.57f54295.js"),["assets/JobEditor.57f54295.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/SmartConsole.74b34e5e.js","assets/asyncComputed.8df159aa.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/dashes.c533cf7c.js","assets/runnerData.ab25e9a5.js","assets/hooks.4913b9a3.js","assets/jobs.2068c8f2.js","assets/workspaces.933b6053.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/Title.c4ac850f.js","assets/index.d196cbfa.js","assets/uuid.356da5d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4820697c.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/ant-design.5c566733.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.9834397a.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.302884ef.js","assets/RunButton.vue_vue_type_script_setup_true_lang.13c26320.js","assets/index.0c5deea6.js","assets/index.d321bc9f.js","assets/dayjs.d913b6d8.js","assets/Form.2a6ff15f.js","assets/Debugger.vue_vue_type_script_setup_true_lang.1e4bb91c.js","assets/Text.75fc17ff.js","assets/index.d956590f.js","assets/index.38ca7f9f.js","assets/TabPane.2fc257cd.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.ef35a5b5.js"),["assets/DashEditor.ef35a5b5.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/index.7525b870.js","assets/executeJs.b4852adc.js","assets/runnerData.ab25e9a5.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/index.237cf0d3.js","assets/pubsub.08286f38.js","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.0b17e427.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.6180ce34.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/BaseLayout.9834397a.js","assets/BaseLayout.2d5b030e.css","assets/index.30044d12.js","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/geometryUtils.09ca81c7.js","assets/index.b0953bcd.css","assets/SmartConsole.74b34e5e.js","assets/asyncComputed.8df159aa.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/dashes.c533cf7c.js","assets/hooks.4913b9a3.js","assets/jobs.2068c8f2.js","assets/workspaces.933b6053.js","assets/Title.c4ac850f.js","assets/index.d196cbfa.js","assets/uuid.356da5d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4820697c.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.4178bbf7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/ant-design.5c566733.js","assets/SaveButton.13ece1cb.css","assets/keyboard.b6386449.js","assets/index.38ca7f9f.js","assets/index.d956590f.js","assets/TabPane.2fc257cd.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.2e0b10f8.js"),["assets/DashPreview.2e0b10f8.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/index.30044d12.js","assets/executeJs.b4852adc.js","assets/runnerData.ab25e9a5.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/index.237cf0d3.js","assets/pubsub.08286f38.js","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.0b17e427.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.7525b870.js","assets/Steps.6180ce34.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/geometryUtils.09ca81c7.js","assets/index.b0953bcd.css","assets/BackButton.d33f337f.js","assets/BackButton.dd542746.css","assets/asyncComputed.8df159aa.js","assets/dashes.c533cf7c.js","assets/activeRecord.9d3b5765.js","assets/workspaces.933b6053.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.ee14db32.js"),["assets/HookEditor.ee14db32.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/SmartConsole.74b34e5e.js","assets/asyncComputed.8df159aa.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/dashes.c533cf7c.js","assets/runnerData.ab25e9a5.js","assets/hooks.4913b9a3.js","assets/jobs.2068c8f2.js","assets/workspaces.933b6053.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/Title.c4ac850f.js","assets/index.d196cbfa.js","assets/uuid.356da5d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4820697c.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/ant-design.5c566733.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.9834397a.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.48454478.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.6f0cc96a.js","assets/RunButton.vue_vue_type_script_setup_true_lang.13c26320.js","assets/index.b595e0e0.js","assets/index.9d9f0030.js","assets/CollapsePanel.7057a35a.js","assets/index.d956590f.js","assets/index.dbd4c5b5.js","assets/index.d321bc9f.js","assets/Form.2a6ff15f.js","assets/Debugger.vue_vue_type_script_setup_true_lang.1e4bb91c.js","assets/Text.75fc17ff.js","assets/index.38ca7f9f.js","assets/TabPane.2fc257cd.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.fd5f22ba.js"),["assets/WorkflowEditor.fd5f22ba.js","assets/forms.670a9120.js","assets/activeRecord.9d3b5765.js","assets/pubsub.08286f38.js","assets/outputWidgets.26432679.js","assets/outputWidgets.e8fba759.css","assets/workspaces.933b6053.js","assets/url.8c6cc8c7.js","assets/icons.3e1b53b9.js","assets/FormTester.vue_vue_type_script_setup_true_lang.83ecad8d.js","assets/SmartConsole.74b34e5e.js","assets/asyncComputed.8df159aa.js","assets/dashes.c533cf7c.js","assets/runnerData.ab25e9a5.js","assets/hooks.4913b9a3.js","assets/jobs.2068c8f2.js","assets/Title.c4ac850f.js","assets/index.d196cbfa.js","assets/uuid.356da5d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.4820697c.js","assets/SmartConsole.96457e04.css","assets/Form.2a6ff15f.js","assets/FormRunner.15db374c.js","assets/index.237cf0d3.js","assets/executeJs.b4852adc.js","assets/CircularLoading.10ef396c.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.0b17e427.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.7525b870.js","assets/Steps.6180ce34.js","assets/Steps.998aa76d.css","assets/executeJs.acda9a57.css","assets/WidgetsFrame.dd2dad1f.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.49108fbe.js","assets/FormRunner.49d66771.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.6f0cc96a.js","assets/index.809e214b.js","assets/CollapsePanel.7057a35a.js","assets/index.9d9f0030.js","assets/index.d956590f.js","assets/index.dbd4c5b5.js","assets/geometryUtils.09ca81c7.js","assets/keyboard.b6386449.js","assets/ant-design.5c566733.js","assets/index.f4ac7424.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.4178bbf7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.db99d2f4.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.48454478.js","assets/RunButton.vue_vue_type_script_setup_true_lang.13c26320.js","assets/index.b595e0e0.js","assets/index.d321bc9f.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.302884ef.js","assets/index.0c5deea6.js","assets/dayjs.d913b6d8.js","assets/Text.75fc17ff.js","assets/index.add140e3.js","assets/LoginBlock.6dc08815.js","assets/popupNotifcation.d4f67078.js","assets/index.b8d25148.js","assets/index.a657419a.js","assets/LoginBlock.d273f904.css","assets/Debugger.vue_vue_type_script_setup_true_lang.1e4bb91c.js","assets/index.38ca7f9f.js","assets/index.178b5641.js","assets/TabPane.2fc257cd.js","assets/WorkflowEditor.794afd0a.css"]),meta:{title:"Abstra - Workflow Editor"}}]},...j],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await C();const e=P({render:()=>T(M)});w.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",R),e.component("Icon",V),e.component("Message",k),r(e,g),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.fb8d684f.js.map
