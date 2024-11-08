var T=Object.defineProperty;var k=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(k(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as U,u as C,A as x,l as f,e as w,f as g,g as E,h as S,i as $,_ as a,j as W,k as N,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.ad24653d.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.7c76e5e8.js";import{a as ae}from"./asyncComputed.d7b28a97.js";import"./url.483cfdfd.js";import"./colorHelpers.d8386895.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="9f17b154-e111-488a-ba37-a0baa1520d31",o._sentryDebugIdIdentifier="sentry-dbid-9f17b154-e111-488a-ba37-a0baa1520d31")}catch{}})();const re={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},ne=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,r)=>{const l=I("RouterView");return V(),j(C(x),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",re,[U(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const r=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!r.ok)throw new Error("Failed to fix");return _.refetch(),r.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){n(this,"label");n(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(r=>new ie(r,t))}}class le{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var r;const t=(r=_.result.value)==null?void 0:r.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,r=0){window.Intercom?window.Intercom(e,t):r<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let u=i;n(u,"booted",!1);const pe={"console-url":"https://cloud.abstra.io"},ue=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"1276029ef8326cb1092abc15f45080b1a0876635",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||pe[o]},p={consoleUrl:ue("console-url")},de=Q("cloud-project",()=>{const o=new v,e=w(null),t=w(null),r=g(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=g(()=>t.value?{project:`${p.consoleUrl}/projects/${t.value.id}`,users:`${p.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${p.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${p.consoleUrl}/projects/${t.value.id}/builds`,login:`${p.consoleUrl}/api-key`}:null),L=async()=>{!r.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;u.boot(c,R)}else u.shutdown()}),{loadLogin:P,createLogin:y,deleteLogin:L,loginInfo:e,cloudProject:t,isLogged:r,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),d=S({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.64697d4c.js"),["assets/Home.64697d4c.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.20f52775.js"),["assets/Workspace.20f52775.js","assets/BaseLayout.6632712a.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.7be59d24.js","assets/NavbarControls.af5d2d55.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/CloseCircleOutlined.6fe46461.js","assets/index.a726e23e.js","assets/index.73fe6f6e.js","assets/workspaces.24acb36a.js","assets/record.2333d37b.js","assets/popupNotifcation.636b78f5.js","assets/PhArrowSquareOut.vue.be4489c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/PhChats.vue.0251cea2.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.15fbf3c6.js","assets/Logo.ce19a866.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.8d6f762d.js","assets/PhCaretRight.vue.9522c3bc.js","assets/PhFlowArrow.vue.b2c8ed6d.js","assets/PhKanban.vue.b4675321.js","assets/index.39d378d9.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js","assets/asyncComputed.d7b28a97.js","assets/Workspace.1d39102f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.18eabba6.js"),["assets/Stages.18eabba6.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.4fb09acc.js","assets/ContentLayout.ee57a545.css","assets/CrudView.e5ffd202.js","assets/router.0577ea16.js","assets/gateway.3f410472.js","assets/popupNotifcation.636b78f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/url.483cfdfd.js","assets/PhDotsThreeVertical.vue.47b046a3.js","assets/Badge.388cfc40.js","assets/index.73fe6f6e.js","assets/CrudView.57fcf015.css","assets/ant-design.a04b7e36.js","assets/asyncComputed.d7b28a97.js","assets/string.f9c84c24.js","assets/PhArrowSquareOut.vue.be4489c7.js","assets/forms.788ed5a1.js","assets/record.2333d37b.js","assets/scripts.b1404a83.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/colorHelpers.d8386895.js","assets/index.a726e23e.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/validations.1f5a4678.js","assets/Stages.2b141080.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.32d36793.js"),["assets/WorkflowEditor.32d36793.js","assets/api.50f56d77.js","assets/fetch.8e11ced9.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/metadata.0d0d033c.js","assets/PhBug.vue.3fefaa33.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhKanban.vue.b4675321.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/Workflow.a549e143.js","assets/PhArrowCounterClockwise.vue.d5ae1250.js","assets/validations.1f5a4678.js","assets/string.f9c84c24.js","assets/uuid.0679e71e.js","assets/index.6082a7ef.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/record.2333d37b.js","assets/polling.927677f5.js","assets/index.2b8d6059.js","assets/Badge.388cfc40.js","assets/PhArrowDown.vue.ffacefff.js","assets/Workflow.6ef00fbb.css","assets/asyncComputed.d7b28a97.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.23d48594.js","assets/WorkflowEditor.bb12f104.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.5acf2d2a.js"),["assets/WorkflowThreads.5acf2d2a.js","assets/api.50f56d77.js","assets/fetch.8e11ced9.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/metadata.0d0d033c.js","assets/PhBug.vue.3fefaa33.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhKanban.vue.b4675321.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/ContentLayout.4fb09acc.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.bb6f56bb.js","assets/polling.927677f5.js","assets/asyncComputed.d7b28a97.js","assets/PhQuestion.vue.b26e8f52.js","assets/ant-design.a04b7e36.js","assets/index.73fe6f6e.js","assets/index.306eb872.js","assets/index.66df33dd.js","assets/CollapsePanel.6aaa3cb7.js","assets/index.23d48594.js","assets/index.883d501c.js","assets/Badge.388cfc40.js","assets/PhArrowCounterClockwise.vue.d5ae1250.js","assets/Workflow.a549e143.js","assets/validations.1f5a4678.js","assets/string.f9c84c24.js","assets/uuid.0679e71e.js","assets/index.6082a7ef.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/record.2333d37b.js","assets/index.2b8d6059.js","assets/PhArrowDown.vue.ffacefff.js","assets/Workflow.6ef00fbb.css","assets/Card.c1a7cdc7.js","assets/TabPane.b0daad8f.js","assets/LoadingOutlined.9674a483.js","assets/DeleteOutlined.782ff83e.js","assets/PhDownloadSimple.vue.8cd1e4be.js","assets/utils.5c060ab3.js","assets/LoadingContainer.0ce45970.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.79f95473.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.2ac7833d.js"),["assets/PreferencesEditor.2ac7833d.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/record.2333d37b.js","assets/PlayerNavbar.1e7d64ac.js","assets/metadata.0d0d033c.js","assets/PhBug.vue.3fefaa33.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhKanban.vue.b4675321.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/LoadingOutlined.9674a483.js","assets/PhSignOut.vue.7be59d24.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js","assets/PlayerNavbar.8a0727fc.css","assets/PlayerConfigProvider.cd158491.js","assets/index.6082a7ef.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.992e09cb.js","assets/ContentLayout.4fb09acc.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.0ce45970.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.d7b28a97.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.6e6f2ce9.js"),["assets/RequirementsEditor.6e6f2ce9.js","assets/ContentLayout.4fb09acc.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/CrudView.e5ffd202.js","assets/router.0577ea16.js","assets/gateway.3f410472.js","assets/popupNotifcation.636b78f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/url.483cfdfd.js","assets/PhDotsThreeVertical.vue.47b046a3.js","assets/Badge.388cfc40.js","assets/index.73fe6f6e.js","assets/CrudView.57fcf015.css","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js","assets/record.2333d37b.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/colorHelpers.d8386895.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.7a040474.js"),["assets/EnvVarsEditor.7a040474.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/record.2333d37b.js","assets/ContentLayout.4fb09acc.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.3e231186.js","assets/gateway.3f410472.js","assets/popupNotifcation.636b78f5.js","assets/fetch.8e11ced9.js","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.e5ffd202.js","assets/router.0577ea16.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/PhDotsThreeVertical.vue.47b046a3.js","assets/Badge.388cfc40.js","assets/index.73fe6f6e.js","assets/CrudView.57fcf015.css","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js","assets/PhPencil.vue.d8acdb98.js","assets/index.a726e23e.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.fdf9d17e.js"),["assets/AccessControlEditor.fdf9d17e.js","assets/ContentLayout.4fb09acc.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.8e11ced9.js","assets/record.2333d37b.js","assets/repository.2ecce71b.js","assets/gateway.3f410472.js","assets/popupNotifcation.636b78f5.js","assets/asyncComputed.d7b28a97.js","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.498264a3.js","assets/PhArrowSquareOut.vue.be4489c7.js","assets/index.23d48594.js","assets/metadata.0d0d033c.js","assets/PhBug.vue.3fefaa33.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhKanban.vue.b4675321.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/index.a726e23e.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.fb740498.js"),["assets/ProjectLogin.fb740498.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.15fbf3c6.js","assets/Logo.ce19a866.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/BaseLayout.6632712a.js","assets/BaseLayout.b7a1f19a.css","assets/index.39d378d9.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js","assets/index.73fe6f6e.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/asyncComputed.d7b28a97.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.c3910892.js"),["assets/FormEditor.c3910892.js","assets/api.50f56d77.js","assets/fetch.8e11ced9.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/metadata.0d0d033c.js","assets/PhBug.vue.3fefaa33.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhKanban.vue.b4675321.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/PlayerNavbar.1e7d64ac.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/LoadingOutlined.9674a483.js","assets/PhSignOut.vue.7be59d24.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js","assets/PlayerNavbar.8a0727fc.css","assets/BaseLayout.6632712a.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.738fd463.js","assets/uuid.0679e71e.js","assets/scripts.b1404a83.js","assets/record.2333d37b.js","assets/validations.1f5a4678.js","assets/string.f9c84c24.js","assets/PhCopy.vue.c42a7351.js","assets/PhCopySimple.vue.f59954f3.js","assets/PhCaretRight.vue.9522c3bc.js","assets/Badge.388cfc40.js","assets/PhQuestion.vue.b26e8f52.js","assets/workspaces.24acb36a.js","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js","assets/PhPencil.vue.d8acdb98.js","assets/toggleHighContrast.bf2b20fd.js","assets/toggleHighContrast.30d77c87.css","assets/index.a726e23e.js","assets/Card.c1a7cdc7.js","assets/TabPane.b0daad8f.js","assets/SourceCode.954a8594.css","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.3c08dad1.js","assets/Login.vue_vue_type_script_setup_true_lang.c82e190f.js","assets/Logo.ce19a866.js","assets/Logo.03290bf7.css","assets/CircularLoading.354d8e0c.js","assets/CircularLoading.1a558a0d.css","assets/index.6082a7ef.js","assets/Login.c8ca392c.css","assets/Steps.356ba8fc.js","assets/index.3b265a4a.js","assets/Steps.4d03c6c1.css","assets/Watermark.27750915.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.0d94ec8e.css","assets/PlayerConfigProvider.cd158491.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.be4489c7.js","assets/PhFlowArrow.vue.b2c8ed6d.js","assets/forms.788ed5a1.js","assets/ThreadSelector.0e73afb9.js","assets/index.306eb872.js","assets/index.23d48594.js","assets/ThreadSelector.c38c4d8f.css","assets/index.73fe6f6e.js","assets/NavbarControls.af5d2d55.js","assets/CloseCircleOutlined.6fe46461.js","assets/popupNotifcation.636b78f5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/PhChats.vue.0251cea2.js","assets/NavbarControls.8216d9aa.css","assets/index.39d378d9.js","assets/FormEditor.3bacf8bd.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.3abf5054.js"),["assets/JobEditor.3abf5054.js","assets/BaseLayout.6632712a.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.738fd463.js","assets/uuid.0679e71e.js","assets/scripts.b1404a83.js","assets/record.2333d37b.js","assets/validations.1f5a4678.js","assets/string.f9c84c24.js","assets/PhCopy.vue.c42a7351.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhCopySimple.vue.f59954f3.js","assets/PhCaretRight.vue.9522c3bc.js","assets/Badge.388cfc40.js","assets/PhBug.vue.3fefaa33.js","assets/PhQuestion.vue.b26e8f52.js","assets/LoadingOutlined.9674a483.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js","assets/PhPencil.vue.d8acdb98.js","assets/toggleHighContrast.bf2b20fd.js","assets/toggleHighContrast.30d77c87.css","assets/index.a726e23e.js","assets/Card.c1a7cdc7.js","assets/TabPane.b0daad8f.js","assets/SourceCode.954a8594.css","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.52f88397.js","assets/index.73fe6f6e.js","assets/RunButton.vue_vue_type_script_setup_true_lang.4058f835.js","assets/NavbarControls.af5d2d55.js","assets/CloseCircleOutlined.6fe46461.js","assets/popupNotifcation.636b78f5.js","assets/PhArrowSquareOut.vue.be4489c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/PhChats.vue.0251cea2.js","assets/NavbarControls.8216d9aa.css","assets/index.39d378d9.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.73dd5441.js"),["assets/HookEditor.73dd5441.js","assets/BaseLayout.6632712a.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.738fd463.js","assets/uuid.0679e71e.js","assets/scripts.b1404a83.js","assets/record.2333d37b.js","assets/validations.1f5a4678.js","assets/string.f9c84c24.js","assets/PhCopy.vue.c42a7351.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhCopySimple.vue.f59954f3.js","assets/PhCaretRight.vue.9522c3bc.js","assets/Badge.388cfc40.js","assets/PhBug.vue.3fefaa33.js","assets/PhQuestion.vue.b26e8f52.js","assets/LoadingOutlined.9674a483.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js","assets/PhPencil.vue.d8acdb98.js","assets/toggleHighContrast.bf2b20fd.js","assets/toggleHighContrast.30d77c87.css","assets/index.a726e23e.js","assets/Card.c1a7cdc7.js","assets/TabPane.b0daad8f.js","assets/SourceCode.954a8594.css","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4058f835.js","assets/api.50f56d77.js","assets/fetch.8e11ced9.js","assets/metadata.0d0d033c.js","assets/PhKanban.vue.b4675321.js","assets/PhWebhooksLogo.vue.3fd0c0dd.js","assets/ThreadSelector.0e73afb9.js","assets/index.306eb872.js","assets/index.23d48594.js","assets/ThreadSelector.c38c4d8f.css","assets/index.86fc340a.js","assets/CollapsePanel.6aaa3cb7.js","assets/index.73fe6f6e.js","assets/NavbarControls.af5d2d55.js","assets/CloseCircleOutlined.6fe46461.js","assets/popupNotifcation.636b78f5.js","assets/PhArrowSquareOut.vue.be4489c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/PhChats.vue.0251cea2.js","assets/NavbarControls.8216d9aa.css","assets/index.39d378d9.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.77cf3ba0.js"),["assets/ScriptEditor.77cf3ba0.js","assets/BaseLayout.6632712a.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.738fd463.js","assets/uuid.0679e71e.js","assets/scripts.b1404a83.js","assets/record.2333d37b.js","assets/validations.1f5a4678.js","assets/string.f9c84c24.js","assets/PhCopy.vue.c42a7351.js","assets/PhCheckCircle.vue.d1b61223.js","assets/PhCopySimple.vue.f59954f3.js","assets/PhCaretRight.vue.9522c3bc.js","assets/Badge.388cfc40.js","assets/PhBug.vue.3fefaa33.js","assets/PhQuestion.vue.b26e8f52.js","assets/LoadingOutlined.9674a483.js","assets/workspaces.24acb36a.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js","assets/PhPencil.vue.d8acdb98.js","assets/toggleHighContrast.bf2b20fd.js","assets/toggleHighContrast.30d77c87.css","assets/index.a726e23e.js","assets/Card.c1a7cdc7.js","assets/TabPane.b0daad8f.js","assets/SourceCode.954a8594.css","assets/SaveButton.cfc280ee.js","assets/UnsavedChangesHandler.ea1d319c.js","assets/ExclamationCircleOutlined.a782e0d9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4058f835.js","assets/ThreadSelector.0e73afb9.js","assets/index.306eb872.js","assets/index.23d48594.js","assets/ThreadSelector.c38c4d8f.css","assets/NavbarControls.af5d2d55.js","assets/CloseCircleOutlined.6fe46461.js","assets/index.73fe6f6e.js","assets/popupNotifcation.636b78f5.js","assets/PhArrowSquareOut.vue.be4489c7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js","assets/BookOutlined.153a87ab.js","assets/PhChats.vue.0251cea2.js","assets/NavbarControls.8216d9aa.css","assets/index.39d378d9.js","assets/index.b7c54ddf.js","assets/Avatar.9801bde1.js","assets/CollapsePanel.6aaa3cb7.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.6677b752.js"),["assets/ResourcesTracker.6677b752.js","assets/BaseLayout.6632712a.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.d7b28a97.js","assets/polling.927677f5.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.392687e7.js"),["assets/Welcome.392687e7.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.15fbf3c6.js","assets/Logo.ce19a866.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/ContentLayout.4fb09acc.js","assets/ContentLayout.ee57a545.css","assets/fetch.8e11ced9.js","assets/Card.c1a7cdc7.js","assets/TabPane.b0daad8f.js","assets/workspaceStore.7c76e5e8.js","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/asyncComputed.d7b28a97.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.c08ea72a.js"),["assets/App.c08ea72a.js","assets/App.vue_vue_type_style_index_0_lang.a68a940b.js","assets/workspaceStore.7c76e5e8.js","assets/vue-router.ad24653d.js","assets/vue-router.d7fcf385.css","assets/url.483cfdfd.js","assets/colorHelpers.d8386895.js","assets/PlayerConfigProvider.cd158491.js","assets/index.6082a7ef.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(d);d.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);W(o,e);const t=de();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const r={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(r),"_self")}});(async()=>{await te();const o=oe(),e=N({render:()=>z(ne)});B.init(),M(e,d),e.use(d),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{p as E,le as L,de as u};
//# sourceMappingURL=editor.ec285bdc.js.map
