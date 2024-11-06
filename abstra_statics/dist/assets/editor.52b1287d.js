var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as U,A as x,l as f,e as g,f as w,g as E,h as S,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.8550d197.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.40fecf39.js";import{a as ae}from"./asyncComputed.2d6d0df7.js";import"./url.9ccf3fea.js";import"./colorHelpers.e2516b81.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="3d2d860a-fc7f-4476-8f2e-12427a5dba6e",o._sentryDebugIdIdentifier="sentry-dbid-3d2d860a-fc7f-4476-8f2e-12427a5dba6e")}catch{}})();const re={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},ne=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,r)=>{const l=I("RouterView");return V(),j(U(x),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",re,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const r=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!r.ok)throw new Error("Failed to fix");return _.refetch(),r.json()}}const y=new se,_=ae(async()=>(await y.check()).map(e=>new le(e)));class ie{constructor(e,t){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await y.fix(this.ruleName,this.name)}}class ce{constructor(e,t){n(this,"label");n(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(r=>new ie(r,t))}}class le{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var r;const t=(r=_.result.value)==null?void 0:r.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,r=0){window.Intercom?window.Intercom(e,t):r<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;n(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"90e1fc77577221fd69298391260c99146f632035",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),r=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),L=async()=>{!r.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:b,deleteLogin:L,loginInfo:e,cloudProject:t,isLogged:r,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=S({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.c333505e.js"),["assets/Home.c333505e.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.630627db.js"),["assets/Workspace.630627db.js","assets/BaseLayout.ac28e91a.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.1c11407d.js","assets/NavbarControls.0db62e6d.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/CloseCircleOutlined.43b563b3.js","assets/index.023f71ef.js","assets/index.7835fdde.js","assets/workspaces.068e6ab2.js","assets/record.014def16.js","assets/popupNotifcation.1f7ebbf0.js","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/PhChats.vue.2529fe38.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.a3d76ffd.js","assets/Logo.03fdc2be.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.36c4df52.js","assets/PhCaretRight.vue.14d5e688.js","assets/PhFlowArrow.vue.de721c31.js","assets/PhKanban.vue.02a3383a.js","assets/index.04c0426e.js","assets/index.14a28969.js","assets/Avatar.4b651796.js","assets/asyncComputed.2d6d0df7.js","assets/Workspace.1d39102f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.bdecf0d5.js"),["assets/Stages.bdecf0d5.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.6887abe9.js","assets/ContentLayout.ee57a545.css","assets/CrudView.dff58be6.js","assets/router.1bb9eba5.js","assets/gateway.391344be.js","assets/popupNotifcation.1f7ebbf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/url.9ccf3fea.js","assets/PhDotsThreeVertical.vue.53651223.js","assets/Badge.91d817de.js","assets/index.7835fdde.js","assets/CrudView.57fcf015.css","assets/ant-design.b580d174.js","assets/asyncComputed.2d6d0df7.js","assets/string.a65ec537.js","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/forms.a95f1d9e.js","assets/record.014def16.js","assets/scripts.3efa73b1.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/colorHelpers.e2516b81.js","assets/index.023f71ef.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/validations.cecb7f78.js","assets/Stages.2b141080.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.8034753c.js"),["assets/WorkflowEditor.8034753c.js","assets/api.4fbbf80b.js","assets/fetch.67fb1877.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/metadata.a87d1773.js","assets/PhBug.vue.ec9d36b0.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhKanban.vue.02a3383a.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/Workflow.456848f6.js","assets/PhArrowCounterClockwise.vue.745ccf35.js","assets/validations.cecb7f78.js","assets/string.a65ec537.js","assets/uuid.1a7dea23.js","assets/index.89cf275e.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/record.014def16.js","assets/polling.7c7bc82f.js","assets/index.bb12307f.js","assets/Badge.91d817de.js","assets/PhArrowDown.vue.84234f65.js","assets/Workflow.6ef00fbb.css","assets/asyncComputed.2d6d0df7.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.96cf00f6.js","assets/WorkflowEditor.bb12f104.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.37bdfa0d.js"),["assets/WorkflowThreads.37bdfa0d.js","assets/api.4fbbf80b.js","assets/fetch.67fb1877.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/metadata.a87d1773.js","assets/PhBug.vue.ec9d36b0.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhKanban.vue.02a3383a.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/ContentLayout.6887abe9.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.1d31c6b3.js","assets/polling.7c7bc82f.js","assets/asyncComputed.2d6d0df7.js","assets/PhQuestion.vue.bfdc099a.js","assets/ant-design.b580d174.js","assets/index.7835fdde.js","assets/index.fa180683.js","assets/index.93314bf5.js","assets/CollapsePanel.ad84256c.js","assets/index.96cf00f6.js","assets/index.ff7cf7d9.js","assets/Badge.91d817de.js","assets/PhArrowCounterClockwise.vue.745ccf35.js","assets/Workflow.456848f6.js","assets/validations.cecb7f78.js","assets/string.a65ec537.js","assets/uuid.1a7dea23.js","assets/index.89cf275e.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/record.014def16.js","assets/index.bb12307f.js","assets/PhArrowDown.vue.84234f65.js","assets/Workflow.6ef00fbb.css","assets/Card.f917d4ad.js","assets/TabPane.e33c0596.js","assets/LoadingOutlined.289c6c61.js","assets/DeleteOutlined.98437f6a.js","assets/PhDownloadSimple.vue.5664f27f.js","assets/utils.3091f3fe.js","assets/LoadingContainer.d5958a5f.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.18d51714.js"),["assets/PreferencesEditor.18d51714.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/record.014def16.js","assets/PlayerNavbar.7006acc5.js","assets/metadata.a87d1773.js","assets/PhBug.vue.ec9d36b0.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhKanban.vue.02a3383a.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/LoadingOutlined.289c6c61.js","assets/PhSignOut.vue.1c11407d.js","assets/index.14a28969.js","assets/Avatar.4b651796.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.910bf3d0.js","assets/index.89cf275e.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.7dd21820.js","assets/ContentLayout.6887abe9.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.d5958a5f.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.2d6d0df7.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.c619fb6d.js"),["assets/RequirementsEditor.c619fb6d.js","assets/ContentLayout.6887abe9.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/CrudView.dff58be6.js","assets/router.1bb9eba5.js","assets/gateway.391344be.js","assets/popupNotifcation.1f7ebbf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/url.9ccf3fea.js","assets/PhDotsThreeVertical.vue.53651223.js","assets/Badge.91d817de.js","assets/index.7835fdde.js","assets/CrudView.57fcf015.css","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js","assets/record.014def16.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/colorHelpers.e2516b81.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.c26e9518.js"),["assets/EnvVarsEditor.c26e9518.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/record.014def16.js","assets/ContentLayout.6887abe9.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.5ae6a147.js","assets/gateway.391344be.js","assets/popupNotifcation.1f7ebbf0.js","assets/fetch.67fb1877.js","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.dff58be6.js","assets/router.1bb9eba5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/PhDotsThreeVertical.vue.53651223.js","assets/Badge.91d817de.js","assets/index.7835fdde.js","assets/CrudView.57fcf015.css","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js","assets/PhPencil.vue.c2ba5cc2.js","assets/index.023f71ef.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.fc76ce23.js"),["assets/AccessControlEditor.fc76ce23.js","assets/ContentLayout.6887abe9.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.67fb1877.js","assets/record.014def16.js","assets/repository.72cb3fb2.js","assets/gateway.391344be.js","assets/popupNotifcation.1f7ebbf0.js","assets/asyncComputed.2d6d0df7.js","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.38392dbe.js","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/index.96cf00f6.js","assets/metadata.a87d1773.js","assets/PhBug.vue.ec9d36b0.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhKanban.vue.02a3383a.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/index.023f71ef.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.6c8b9700.js"),["assets/ProjectLogin.6c8b9700.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.a3d76ffd.js","assets/Logo.03fdc2be.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/BaseLayout.ac28e91a.js","assets/BaseLayout.b7a1f19a.css","assets/index.04c0426e.js","assets/index.14a28969.js","assets/Avatar.4b651796.js","assets/index.7835fdde.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/asyncComputed.2d6d0df7.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.f340345a.js"),["assets/FormEditor.f340345a.js","assets/api.4fbbf80b.js","assets/fetch.67fb1877.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/metadata.a87d1773.js","assets/PhBug.vue.ec9d36b0.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhKanban.vue.02a3383a.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/PlayerNavbar.7006acc5.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/LoadingOutlined.289c6c61.js","assets/PhSignOut.vue.1c11407d.js","assets/index.14a28969.js","assets/Avatar.4b651796.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.ac28e91a.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.48787d6c.js","assets/uuid.1a7dea23.js","assets/scripts.3efa73b1.js","assets/record.014def16.js","assets/validations.cecb7f78.js","assets/string.a65ec537.js","assets/PhCopy.vue.48cb8ef2.js","assets/PhCopySimple.vue.c2609254.js","assets/PhCaretRight.vue.14d5e688.js","assets/Badge.91d817de.js","assets/PhQuestion.vue.bfdc099a.js","assets/workspaces.068e6ab2.js","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js","assets/PhPencil.vue.c2ba5cc2.js","assets/toggleHighContrast.af359de9.js","assets/toggleHighContrast.30d77c87.css","assets/index.023f71ef.js","assets/Card.f917d4ad.js","assets/TabPane.e33c0596.js","assets/SourceCode.954a8594.css","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.702b87a7.js","assets/Login.vue_vue_type_script_setup_true_lang.12b66508.js","assets/Logo.03fdc2be.js","assets/Logo.03290bf7.css","assets/CircularLoading.fc77a78e.js","assets/CircularLoading.e156a2b0.css","assets/Login.4c023e5d.css","assets/Steps.aa24eb55.js","assets/index.8a8385c7.js","assets/Steps.4d03c6c1.css","assets/Watermark.88e7183e.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.910bf3d0.js","assets/index.89cf275e.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/PhFlowArrow.vue.de721c31.js","assets/forms.a95f1d9e.js","assets/ThreadSelector.59438d88.js","assets/index.fa180683.js","assets/index.96cf00f6.js","assets/ThreadSelector.8aa77ab2.css","assets/index.7835fdde.js","assets/NavbarControls.0db62e6d.js","assets/CloseCircleOutlined.43b563b3.js","assets/popupNotifcation.1f7ebbf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/PhChats.vue.2529fe38.js","assets/NavbarControls.8216d9aa.css","assets/index.04c0426e.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.c98d90d4.js"),["assets/JobEditor.c98d90d4.js","assets/BaseLayout.ac28e91a.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.48787d6c.js","assets/uuid.1a7dea23.js","assets/scripts.3efa73b1.js","assets/record.014def16.js","assets/validations.cecb7f78.js","assets/string.a65ec537.js","assets/PhCopy.vue.48cb8ef2.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhCopySimple.vue.c2609254.js","assets/PhCaretRight.vue.14d5e688.js","assets/Badge.91d817de.js","assets/PhBug.vue.ec9d36b0.js","assets/PhQuestion.vue.bfdc099a.js","assets/LoadingOutlined.289c6c61.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js","assets/PhPencil.vue.c2ba5cc2.js","assets/toggleHighContrast.af359de9.js","assets/toggleHighContrast.30d77c87.css","assets/index.023f71ef.js","assets/Card.f917d4ad.js","assets/TabPane.e33c0596.js","assets/SourceCode.954a8594.css","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.11abc8b5.js","assets/index.7835fdde.js","assets/RunButton.vue_vue_type_script_setup_true_lang.d82cc2e2.js","assets/NavbarControls.0db62e6d.js","assets/CloseCircleOutlined.43b563b3.js","assets/popupNotifcation.1f7ebbf0.js","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/PhChats.vue.2529fe38.js","assets/NavbarControls.8216d9aa.css","assets/index.04c0426e.js","assets/index.14a28969.js","assets/Avatar.4b651796.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f7746615.js"),["assets/HookEditor.f7746615.js","assets/BaseLayout.ac28e91a.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.48787d6c.js","assets/uuid.1a7dea23.js","assets/scripts.3efa73b1.js","assets/record.014def16.js","assets/validations.cecb7f78.js","assets/string.a65ec537.js","assets/PhCopy.vue.48cb8ef2.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhCopySimple.vue.c2609254.js","assets/PhCaretRight.vue.14d5e688.js","assets/Badge.91d817de.js","assets/PhBug.vue.ec9d36b0.js","assets/PhQuestion.vue.bfdc099a.js","assets/LoadingOutlined.289c6c61.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js","assets/PhPencil.vue.c2ba5cc2.js","assets/toggleHighContrast.af359de9.js","assets/toggleHighContrast.30d77c87.css","assets/index.023f71ef.js","assets/Card.f917d4ad.js","assets/TabPane.e33c0596.js","assets/SourceCode.954a8594.css","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.d82cc2e2.js","assets/api.4fbbf80b.js","assets/fetch.67fb1877.js","assets/metadata.a87d1773.js","assets/PhKanban.vue.02a3383a.js","assets/PhWebhooksLogo.vue.37b657b4.js","assets/ThreadSelector.59438d88.js","assets/index.fa180683.js","assets/index.96cf00f6.js","assets/ThreadSelector.8aa77ab2.css","assets/index.415a2b74.js","assets/CollapsePanel.ad84256c.js","assets/index.7835fdde.js","assets/NavbarControls.0db62e6d.js","assets/CloseCircleOutlined.43b563b3.js","assets/popupNotifcation.1f7ebbf0.js","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/PhChats.vue.2529fe38.js","assets/NavbarControls.8216d9aa.css","assets/index.04c0426e.js","assets/index.14a28969.js","assets/Avatar.4b651796.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.a70c3d61.js"),["assets/ScriptEditor.a70c3d61.js","assets/BaseLayout.ac28e91a.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.48787d6c.js","assets/uuid.1a7dea23.js","assets/scripts.3efa73b1.js","assets/record.014def16.js","assets/validations.cecb7f78.js","assets/string.a65ec537.js","assets/PhCopy.vue.48cb8ef2.js","assets/PhCheckCircle.vue.289daa1d.js","assets/PhCopySimple.vue.c2609254.js","assets/PhCaretRight.vue.14d5e688.js","assets/Badge.91d817de.js","assets/PhBug.vue.ec9d36b0.js","assets/PhQuestion.vue.bfdc099a.js","assets/LoadingOutlined.289c6c61.js","assets/workspaces.068e6ab2.js","assets/workspaceStore.40fecf39.js","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js","assets/PhPencil.vue.c2ba5cc2.js","assets/toggleHighContrast.af359de9.js","assets/toggleHighContrast.30d77c87.css","assets/index.023f71ef.js","assets/Card.f917d4ad.js","assets/TabPane.e33c0596.js","assets/SourceCode.954a8594.css","assets/SaveButton.0798b654.js","assets/UnsavedChangesHandler.945c3633.js","assets/ExclamationCircleOutlined.1d90df08.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.d82cc2e2.js","assets/ThreadSelector.59438d88.js","assets/index.fa180683.js","assets/index.96cf00f6.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.0db62e6d.js","assets/CloseCircleOutlined.43b563b3.js","assets/index.7835fdde.js","assets/popupNotifcation.1f7ebbf0.js","assets/PhArrowSquareOut.vue.e8d41a99.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js","assets/BookOutlined.a4b25305.js","assets/PhChats.vue.2529fe38.js","assets/NavbarControls.8216d9aa.css","assets/index.04c0426e.js","assets/index.14a28969.js","assets/Avatar.4b651796.js","assets/CollapsePanel.ad84256c.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.5f5d5b09.js"),["assets/ResourcesTracker.5f5d5b09.js","assets/BaseLayout.ac28e91a.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.2d6d0df7.js","assets/polling.7c7bc82f.js"]),meta:{title:"Resources Tracker"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.11285e4d.js"),["assets/App.11285e4d.js","assets/App.vue_vue_type_style_index_0_lang.ab61512d.js","assets/workspaceStore.40fecf39.js","assets/vue-router.8550d197.js","assets/vue-router.d7fcf385.css","assets/url.9ccf3fea.js","assets/colorHelpers.e2516b81.js","assets/PlayerConfigProvider.910bf3d0.js","assets/index.89cf275e.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const r={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(r),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(ne)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.52b1287d.js.map
