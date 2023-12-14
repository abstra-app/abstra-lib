import{r as _,d as m,o as d,a as p,b as c,c as u,w as l,e as h,f as b,u as f,A as E,g as v,h as A,_ as t,i as w,T as I,j as P,P as y,C as g,M as D,I as R,s as V,k as r,l as k,m as T,n as L,p as O}from"./outputWidgets.63c887f3.js";import{u as C}from"./index.397e58b6.js";import{r as S,u as W,s as j}from"./index.446f79b0.js";import"./pubsub.53d0c7d8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fd71ce34-2d47-4b58-8412-be4f1e428eee",e._sentryDebugIdIdentifier="sentry-dbid-fd71ce34-2d47-4b58-8412-be4f1e428eee")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(s,q)=>{const i=p("router-view");return c(),u(f(E),{theme:o},{default:l(()=>[h("div",M,[b(i)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.37efb6c4.js"),["assets/Home.37efb6c4.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.4d192c63.js"),["assets/Workspace.4d192c63.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/Tooltip.9e18677b.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/NavbarControls.4ceb6d6c.js","assets/workspaces.ba17d478.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/url.201458c9.js","assets/popupNotifcation.989ea2f9.js","assets/asyncComputed.c163afad.js","assets/index.446f79b0.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/index.8afa5475.js","assets/NavbarControls.bffa51e8.css","assets/index.968a957b.js","assets/Workspace.6d25359d.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.eb96ccb7.js"),["assets/Forms.eb96ccb7.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/forms.1fd94b58.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/router.935b5f2b.js","assets/index.397e58b6.js","assets/index.8afa5475.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css"]),meta:{title:"Abstra - Forms"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.c02750bc.js"),["assets/Jobs.c02750bc.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/jobs.1ba6ecd6.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/router.935b5f2b.js","assets/index.397e58b6.js","assets/index.8afa5475.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.6177125b.js"),["assets/Hooks.6177125b.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/asyncComputed.c163afad.js","assets/hooks.9ecdf69a.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/router.935b5f2b.js","assets/index.397e58b6.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.9d00ec4a.js"),["assets/StyleEditor.9d00ec4a.js","assets/asyncComputed.c163afad.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/workspaces.ba17d478.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/url.201458c9.js","assets/CircularLoading.a86cd198.js","assets/CircularLoading.f81b57b4.css","assets/icons.cc357010.js","assets/Form.3a6f0ba4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.60007941.js","assets/PlayerNavbar.4f6e275f.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.d2a068d4.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/index.f7c5414a.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.25e3353d.js"),["assets/SidebarEditor.25e3353d.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/index.1e7c0edf.js","assets/Form.3a6f0ba4.js","assets/index.f7c5414a.js","assets/workspaces.ba17d478.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/url.201458c9.js","assets/asyncComputed.c163afad.js","assets/CircularLoading.a86cd198.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.60007941.js","assets/PlayerNavbar.4f6e275f.js","assets/icons.cc357010.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.d2a068d4.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"requirements",component:()=>t(()=>import("./RequirementsEditor.9a4f1610.js"),["assets/RequirementsEditor.9a4f1610.js","assets/asyncComputed.c163afad.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/icons.cc357010.js","assets/CrudView.02f2f455.js","assets/Form.3a6f0ba4.js","assets/router.935b5f2b.js","assets/index.397e58b6.js","assets/index.8afa5475.js","assets/Title.2207c510.js","assets/url.201458c9.js","assets/index.3ee8c662.js","assets/index.f7c5414a.js","assets/CrudView.1d309d6a.css","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js"]),meta:{title:"Abstra - Requirements"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.210e0b6c.js"),["assets/FormEditor.210e0b6c.js","assets/FormRunner.fcf55cd5.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/url.201458c9.js","assets/index.446f79b0.js","assets/pubsub.53d0c7d8.js","assets/icons.cc357010.js","assets/CircularLoading.a86cd198.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.4f6e275f.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.dd36d6fa.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.d2a068d4.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.353c1d6f.css","assets/RuntimeCommonSettings.4060ef28.js","assets/uuid.434f3f5f.js","assets/NavbarControls.4ceb6d6c.js","assets/workspaces.ba17d478.js","assets/record.a6092580.js","assets/popupNotifcation.989ea2f9.js","assets/asyncComputed.c163afad.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/index.8afa5475.js","assets/NavbarControls.bffa51e8.css","assets/jobs.1ba6ecd6.js","assets/Form.3a6f0ba4.js","assets/index.3ee8c662.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/forms.1fd94b58.js","assets/index.26544119.js","assets/CollapsePanel.71bc2f11.js","assets/index.f7c5414a.js","assets/TabPane.6741fe4b.js","assets/index.75c24f3f.js","assets/index.968a957b.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.670f3cb3.js"),["assets/FormPreview.670f3cb3.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/CircularLoading.a86cd198.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.fcf55cd5.js","assets/url.201458c9.js","assets/index.446f79b0.js","assets/pubsub.53d0c7d8.js","assets/icons.cc357010.js","assets/PlayerNavbar.4f6e275f.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.dd36d6fa.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.d2a068d4.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.353c1d6f.css","assets/asyncComputed.c163afad.js","assets/forms.1fd94b58.js","assets/record.a6092580.js","assets/workspaces.ba17d478.js","assets/FormPreview.fba4fe96.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.617571e9.js"),["assets/JobEditor.617571e9.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/jobs.1ba6ecd6.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/RuntimeCommonSettings.4060ef28.js","assets/uuid.434f3f5f.js","assets/icons.cc357010.js","assets/NavbarControls.4ceb6d6c.js","assets/workspaces.ba17d478.js","assets/url.201458c9.js","assets/popupNotifcation.989ea2f9.js","assets/asyncComputed.c163afad.js","assets/index.446f79b0.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/index.8afa5475.js","assets/NavbarControls.bffa51e8.css","assets/Form.3a6f0ba4.js","assets/index.3ee8c662.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f50cc2ab.js","assets/index.7d481dd0.js","assets/dayjs.8b639052.js","assets/index.1e7c0edf.js","assets/index.968a957b.js","assets/TabPane.6741fe4b.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.00e59432.js"),["assets/HookEditor.00e59432.js","assets/outputWidgets.63c887f3.js","assets/outputWidgets.f39555c3.css","assets/RuntimeCommonSettings.4060ef28.js","assets/uuid.434f3f5f.js","assets/icons.cc357010.js","assets/NavbarControls.4ceb6d6c.js","assets/workspaces.ba17d478.js","assets/record.a6092580.js","assets/pubsub.53d0c7d8.js","assets/url.201458c9.js","assets/popupNotifcation.989ea2f9.js","assets/asyncComputed.c163afad.js","assets/index.446f79b0.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1253dafb.js","assets/ant-design.06d90fc6.js","assets/index.a15bb060.js","assets/Title.2207c510.js","assets/SaveButton.13ece1cb.css","assets/index.8afa5475.js","assets/NavbarControls.bffa51e8.css","assets/jobs.1ba6ecd6.js","assets/Form.3a6f0ba4.js","assets/index.3ee8c662.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/hooks.9ecdf69a.js","assets/BaseLayout.ccf53554.js","assets/BaseLayout.2d5b030e.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f50cc2ab.js","assets/index.dca082db.js","assets/CollapsePanel.71bc2f11.js","assets/index.f7c5414a.js","assets/index.968a957b.js","assets/TabPane.6741fe4b.js"]),meta:{title:"Abstra - Hook Editor"}}]},...S],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{C(e,o)});(async()=>{await Promise.all([W(),j()]);const e=w({render:()=>k(B)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",D),e.component("Icon",R),e.component("Message",V),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.5ead9ff7.js.map
