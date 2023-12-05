import{r as _,d as m,o as d,a as p,b as c,c as u,w as l,e as h,f as b,u as f,A as E,g as v,h as A,_ as t,i as w,T as I,j as P,P as y,C as g,M as D,I as R,s as V,k as r,l as k,m as T,n as L,p as O}from"./outputWidgets.5ad528ac.js";import{u as C}from"./index.c8e66a6c.js";import{r as S,u as W,s as j}from"./index.556623ee.js";import"./pubsub.acdd8ee4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="703d8171-3819-45a3-8e88-b456fb9095e7",e._sentryDebugIdIdentifier="sentry-dbid-703d8171-3819-45a3-8e88-b456fb9095e7")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(s,q)=>{const i=p("router-view");return c(),u(f(E),{theme:o},{default:l(()=>[h("div",M,[b(i)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.9481c77d.js"),["assets/Home.9481c77d.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.c2de7c06.js"),["assets/Workspace.c2de7c06.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/icons.586bdc7c.js","assets/Tooltip.7db8bd77.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/workspaces.a9535d2d.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/url.43414be1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3d8c615d.js","assets/popupNotifcation.43aedb8e.js","assets/asyncComputed.1a18a3c4.js","assets/index.556623ee.js","assets/index.d720c10a.js","assets/isNumeric.75337b1e.js","assets/transButton.6b6b1eee.js","assets/index.27ae63b9.js","assets/BaseLayout.6a9446fc.js","assets/BaseLayout.2d5b030e.css","assets/index.02875ac1.js","assets/Workspace.31b6254e.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.9be849db.js"),["assets/Forms.9be849db.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/forms.512ef34a.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/icons.586bdc7c.js","assets/asyncComputed.1a18a3c4.js","assets/ant-design.e87f93d6.js","assets/transButton.6b6b1eee.js","assets/CrudView.e904a900.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/router.204c9874.js","assets/Title.9d17c444.js","assets/index.c8e66a6c.js","assets/url.43414be1.js","assets/index.6d8316a6.js","assets/index.27ae63b9.js","assets/CrudView.1d309d6a.css"]),meta:{title:"Abstra - Forms"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.3d025bd4.js"),["assets/Jobs.3d025bd4.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/jobs.c20fb991.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/icons.586bdc7c.js","assets/asyncComputed.1a18a3c4.js","assets/ant-design.e87f93d6.js","assets/transButton.6b6b1eee.js","assets/CrudView.e904a900.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/router.204c9874.js","assets/Title.9d17c444.js","assets/index.c8e66a6c.js","assets/url.43414be1.js","assets/index.6d8316a6.js","assets/index.27ae63b9.js","assets/CrudView.1d309d6a.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.94286a1d.js"),["assets/Hooks.94286a1d.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/icons.586bdc7c.js","assets/asyncComputed.1a18a3c4.js","assets/hooks.3514a7dd.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/CrudView.e904a900.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/router.204c9874.js","assets/Title.9d17c444.js","assets/index.c8e66a6c.js","assets/url.43414be1.js","assets/index.6d8316a6.js","assets/index.27ae63b9.js","assets/CrudView.1d309d6a.css","assets/ant-design.e87f93d6.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.f83b040f.js"),["assets/StyleEditor.f83b040f.js","assets/asyncComputed.1a18a3c4.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/workspaces.a9535d2d.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/url.43414be1.js","assets/CircularLoading.d92099de.js","assets/CircularLoading.f81b57b4.css","assets/icons.586bdc7c.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.67e905cd.js","assets/ant-design.e87f93d6.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.58465300.js","assets/PlayerNavbar.a0c0e740.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.e040c0dc.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/Title.9d17c444.js","assets/index.6d8316a6.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.62aa9c2d.js"),["assets/SidebarEditor.62aa9c2d.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/index.3400173a.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/index.6d8316a6.js","assets/workspaces.a9535d2d.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/url.43414be1.js","assets/asyncComputed.1a18a3c4.js","assets/CircularLoading.d92099de.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.67e905cd.js","assets/ant-design.e87f93d6.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.58465300.js","assets/PlayerNavbar.a0c0e740.js","assets/icons.586bdc7c.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.e040c0dc.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/Title.9d17c444.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"requirements",component:()=>t(()=>import("./RequirementsEditor.2c1c4384.js"),["assets/RequirementsEditor.2c1c4384.js","assets/asyncComputed.1a18a3c4.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/icons.586bdc7c.js","assets/CrudView.e904a900.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/router.204c9874.js","assets/Title.9d17c444.js","assets/index.c8e66a6c.js","assets/url.43414be1.js","assets/index.6d8316a6.js","assets/index.27ae63b9.js","assets/CrudView.1d309d6a.css","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js"]),meta:{title:"Abstra - Requirements"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.6afc6d75.js"),["assets/FormEditor.6afc6d75.js","assets/FormRunner.32534c03.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/url.43414be1.js","assets/index.556623ee.js","assets/pubsub.acdd8ee4.js","assets/icons.586bdc7c.js","assets/CircularLoading.d92099de.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.a0c0e740.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.d2fb9fb7.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.e040c0dc.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.c26bc008.css","assets/RuntimeCommonSettings.958a4fd6.js","assets/uuid.e606e1ac.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3d8c615d.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/asyncComputed.1a18a3c4.js","assets/forms.512ef34a.js","assets/record.ff133c66.js","assets/hooks.3514a7dd.js","assets/jobs.c20fb991.js","assets/workspaces.a9535d2d.js","assets/RuntimeCommonSettings.51d934c9.css","assets/BaseLayout.6a9446fc.js","assets/BaseLayout.2d5b030e.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.67e905cd.js","assets/ant-design.e87f93d6.js","assets/SaveButton.13ece1cb.css","assets/index.69fcfbd0.js","assets/CollapsePanel.1a8713a3.js","assets/index.6d8316a6.js","assets/index.27ae63b9.js","assets/Title.9d17c444.js","assets/TabPane.54998169.js","assets/index.2f079fac.js","assets/index.02875ac1.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.6f6e86f9.js"),["assets/FormPreview.6f6e86f9.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/CircularLoading.d92099de.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.32534c03.js","assets/url.43414be1.js","assets/index.556623ee.js","assets/pubsub.acdd8ee4.js","assets/icons.586bdc7c.js","assets/PlayerNavbar.a0c0e740.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.d2fb9fb7.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.e040c0dc.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.c26bc008.css","assets/asyncComputed.1a18a3c4.js","assets/forms.512ef34a.js","assets/record.ff133c66.js","assets/workspaces.a9535d2d.js","assets/FormPreview.fba4fe96.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.9488832c.js"),["assets/JobEditor.9488832c.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/jobs.c20fb991.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/RuntimeCommonSettings.958a4fd6.js","assets/uuid.e606e1ac.js","assets/icons.586bdc7c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3d8c615d.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/asyncComputed.1a18a3c4.js","assets/forms.512ef34a.js","assets/hooks.3514a7dd.js","assets/workspaces.a9535d2d.js","assets/url.43414be1.js","assets/RuntimeCommonSettings.51d934c9.css","assets/BaseLayout.6a9446fc.js","assets/BaseLayout.2d5b030e.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.67e905cd.js","assets/ant-design.e87f93d6.js","assets/SaveButton.13ece1cb.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fdcdd2e3.js","assets/index.580c2390.js","assets/dayjs.e24ffd47.js","assets/Title.9d17c444.js","assets/index.02875ac1.js","assets/TabPane.54998169.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.4281813f.js"),["assets/HookEditor.4281813f.js","assets/outputWidgets.5ad528ac.js","assets/outputWidgets.cb6d1439.css","assets/RuntimeCommonSettings.958a4fd6.js","assets/uuid.e606e1ac.js","assets/icons.586bdc7c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3d8c615d.js","assets/Text.856daa24.js","assets/Base.1d4cd3d4.js","assets/transButton.6b6b1eee.js","assets/asyncComputed.1a18a3c4.js","assets/forms.512ef34a.js","assets/record.ff133c66.js","assets/pubsub.acdd8ee4.js","assets/hooks.3514a7dd.js","assets/jobs.c20fb991.js","assets/workspaces.a9535d2d.js","assets/url.43414be1.js","assets/RuntimeCommonSettings.51d934c9.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.67e905cd.js","assets/ant-design.e87f93d6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.6a9446fc.js","assets/BaseLayout.2d5b030e.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fdcdd2e3.js","assets/index.a1c76b66.js","assets/CollapsePanel.1a8713a3.js","assets/index.27ae63b9.js","assets/index.6d8316a6.js","assets/index.02875ac1.js","assets/TabPane.54998169.js"]),meta:{title:"Abstra - Hook Editor"}}]},...S],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{C(e,o)});(async()=>{await Promise.all([W(),j()]);const e=w({render:()=>k(B)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",D),e.component("Icon",R),e.component("Message",V),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.2e1c1a62.js.map
