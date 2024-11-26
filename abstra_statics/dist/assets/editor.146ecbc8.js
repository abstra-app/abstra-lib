var T=Object.defineProperty;var k=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(k(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as U,u as C,A as x,l as f,e as w,f as g,g as E,h as S,i as $,_ as a,j as W,k as N,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.a301704c.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.dc98ce76.js";import{a as ae}from"./asyncComputed.8d09bea7.js";import"./url.3e386c25.js";import"./colorHelpers.cfb226fe.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="ed44da48-9d94-4018-826b-4f044a821f9a",o._sentryDebugIdIdentifier="sentry-dbid-ed44da48-9d94-4018-826b-4f044a821f9a")}catch{}})();const re={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},ne=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,r)=>{const l=I("RouterView");return V(),j(C(x),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",re,[U(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const r=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!r.ok)throw new Error("Failed to fix");return _.refetch(),r.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){n(this,"label");n(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(r=>new ie(r,t))}}class le{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var r;const t=(r=_.result.value)==null?void 0:r.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,r=0){window.Intercom?window.Intercom(e,t):r<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;n(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"065292b574c9995417fa52383d504b1dbde29e4c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=w(null),t=w(null),r=g(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=g(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),L=async()=>{!r.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:y,deleteLogin:L,loginInfo:e,cloudProject:t,isLogged:r,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=S({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.be799cd3.js"),["assets/Home.be799cd3.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.836a561f.js"),["assets/Workspace.836a561f.js","assets/BaseLayout.8a144d4b.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.fb9872ec.js","assets/NavbarControls.efde055b.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/CloseCircleOutlined.7f7cf51e.js","assets/index.108c8a9a.js","assets/index.6d0aa991.js","assets/workspaces.4091395e.js","assets/record.fd803298.js","assets/popupNotifcation.4546a25b.js","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/PhChats.vue.beb9773f.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.2e430108.js","assets/Logo.babcb3a2.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.a13508fb.js","assets/PhCaretRight.vue.6053784e.js","assets/PhFlowArrow.vue.6f08031d.js","assets/PhKanban.vue.79a689a5.js","assets/index.bfc6be46.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js","assets/asyncComputed.8d09bea7.js","assets/Workspace.1d39102f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.958c6ea0.js"),["assets/Stages.958c6ea0.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/ContentLayout.692f1cc6.js","assets/ContentLayout.ee57a545.css","assets/CrudView.3eaa993e.js","assets/router.f445705a.js","assets/gateway.c1fc0f23.js","assets/popupNotifcation.4546a25b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/url.3e386c25.js","assets/PhDotsThreeVertical.vue.fb1b7376.js","assets/Badge.de362ad0.js","assets/index.6d0aa991.js","assets/CrudView.57fcf015.css","assets/ant-design.93417202.js","assets/asyncComputed.8d09bea7.js","assets/string.120d0ab5.js","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/forms.80b322c3.js","assets/record.fd803298.js","assets/scripts.f75f456a.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/colorHelpers.cfb226fe.js","assets/index.108c8a9a.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/validations.76a63dfc.js","assets/Stages.2b141080.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.5967cb8d.js"),["assets/WorkflowEditor.5967cb8d.js","assets/api.92d12e4f.js","assets/fetch.3897f6cd.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/metadata.6bf78b0c.js","assets/PhBug.vue.df4a58c4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhKanban.vue.79a689a5.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/Workflow.24f4a4d9.js","assets/PhArrowCounterClockwise.vue.dcd6d113.js","assets/validations.76a63dfc.js","assets/string.120d0ab5.js","assets/uuid.ae615ecc.js","assets/index.0a7cb9a1.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/record.fd803298.js","assets/polling.c17378b0.js","assets/index.aa68167d.js","assets/Badge.de362ad0.js","assets/PhArrowDown.vue.11a6de36.js","assets/Workflow.0e84f462.css","assets/asyncComputed.8d09bea7.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.72e7e0c4.js","assets/WorkflowEditor.adc8a023.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.b79668c8.js"),["assets/WorkflowThreads.b79668c8.js","assets/api.92d12e4f.js","assets/fetch.3897f6cd.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/metadata.6bf78b0c.js","assets/PhBug.vue.df4a58c4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhKanban.vue.79a689a5.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/ContentLayout.692f1cc6.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.5283261a.js","assets/polling.c17378b0.js","assets/asyncComputed.8d09bea7.js","assets/PhQuestion.vue.0ff52186.js","assets/ant-design.93417202.js","assets/index.6d0aa991.js","assets/index.16db0cbc.js","assets/index.c32243fb.js","assets/CollapsePanel.aee33b03.js","assets/index.72e7e0c4.js","assets/index.3b1ea943.js","assets/Badge.de362ad0.js","assets/PhArrowCounterClockwise.vue.dcd6d113.js","assets/Workflow.24f4a4d9.js","assets/validations.76a63dfc.js","assets/string.120d0ab5.js","assets/uuid.ae615ecc.js","assets/index.0a7cb9a1.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/record.fd803298.js","assets/index.aa68167d.js","assets/PhArrowDown.vue.11a6de36.js","assets/Workflow.0e84f462.css","assets/Card.fead4877.js","assets/TabPane.4b93ad7f.js","assets/LoadingOutlined.e575a9f5.js","assets/DeleteOutlined.67505aa3.js","assets/PhDownloadSimple.vue.ffb4cef9.js","assets/utils.7ecb82cb.js","assets/LoadingContainer.4b478e13.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.aec9e496.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.9d80b353.js"),["assets/PreferencesEditor.9d80b353.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/record.fd803298.js","assets/PlayerNavbar.34abad95.js","assets/metadata.6bf78b0c.js","assets/PhBug.vue.df4a58c4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhKanban.vue.79a689a5.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/LoadingOutlined.e575a9f5.js","assets/PhSignOut.vue.fb9872ec.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js","assets/PlayerNavbar.8a0727fc.css","assets/PlayerConfigProvider.acccc837.js","assets/index.0a7cb9a1.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.e57e7875.js","assets/ContentLayout.692f1cc6.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.4b478e13.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.8d09bea7.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.6b35a694.js"),["assets/RequirementsEditor.6b35a694.js","assets/ContentLayout.692f1cc6.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.3eaa993e.js","assets/router.f445705a.js","assets/gateway.c1fc0f23.js","assets/popupNotifcation.4546a25b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/url.3e386c25.js","assets/PhDotsThreeVertical.vue.fb1b7376.js","assets/Badge.de362ad0.js","assets/index.6d0aa991.js","assets/CrudView.57fcf015.css","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js","assets/record.fd803298.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/colorHelpers.cfb226fe.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.f1da6146.js"),["assets/EnvVarsEditor.f1da6146.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/record.fd803298.js","assets/ContentLayout.692f1cc6.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.026dd16a.js","assets/gateway.c1fc0f23.js","assets/popupNotifcation.4546a25b.js","assets/fetch.3897f6cd.js","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.3eaa993e.js","assets/router.f445705a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/PhDotsThreeVertical.vue.fb1b7376.js","assets/Badge.de362ad0.js","assets/index.6d0aa991.js","assets/CrudView.57fcf015.css","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js","assets/PhPencil.vue.2a0ab41e.js","assets/index.108c8a9a.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.6edb5186.js"),["assets/AccessControlEditor.6edb5186.js","assets/ContentLayout.692f1cc6.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.3897f6cd.js","assets/record.fd803298.js","assets/repository.04d52961.js","assets/gateway.c1fc0f23.js","assets/popupNotifcation.4546a25b.js","assets/asyncComputed.8d09bea7.js","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.4d6445a0.js","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/index.72e7e0c4.js","assets/metadata.6bf78b0c.js","assets/PhBug.vue.df4a58c4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhKanban.vue.79a689a5.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/index.108c8a9a.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.0d199bb9.js"),["assets/ProjectLogin.0d199bb9.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.2e430108.js","assets/Logo.babcb3a2.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/Logo.03290bf7.css","assets/BaseLayout.8a144d4b.js","assets/BaseLayout.b7a1f19a.css","assets/index.bfc6be46.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js","assets/index.6d0aa991.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/asyncComputed.8d09bea7.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.32e20467.js"),["assets/FormEditor.32e20467.js","assets/api.92d12e4f.js","assets/fetch.3897f6cd.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/metadata.6bf78b0c.js","assets/PhBug.vue.df4a58c4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhKanban.vue.79a689a5.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/PlayerNavbar.34abad95.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/LoadingOutlined.e575a9f5.js","assets/PhSignOut.vue.fb9872ec.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js","assets/PlayerNavbar.8a0727fc.css","assets/BaseLayout.8a144d4b.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.1328a11e.js","assets/uuid.ae615ecc.js","assets/scripts.f75f456a.js","assets/record.fd803298.js","assets/validations.76a63dfc.js","assets/string.120d0ab5.js","assets/PhCopy.vue.74a1d4d4.js","assets/PhCopySimple.vue.7263ced8.js","assets/PhCaretRight.vue.6053784e.js","assets/Badge.de362ad0.js","assets/PhQuestion.vue.0ff52186.js","assets/workspaces.4091395e.js","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js","assets/PhPencil.vue.2a0ab41e.js","assets/toggleHighContrast.f87b95db.js","assets/toggleHighContrast.30d77c87.css","assets/index.108c8a9a.js","assets/Card.fead4877.js","assets/TabPane.4b93ad7f.js","assets/SourceCode.62d79c81.css","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.78ed6d42.js","assets/Login.vue_vue_type_script_setup_true_lang.f1257b85.js","assets/Logo.babcb3a2.js","assets/Logo.03290bf7.css","assets/CircularLoading.a47a103b.js","assets/CircularLoading.1a558a0d.css","assets/index.0a7cb9a1.js","assets/Login.c8ca392c.css","assets/Steps.2d8e04ed.js","assets/index.5efc9272.js","assets/Steps.4d03c6c1.css","assets/Watermark.62d8bcc9.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.0d94ec8e.css","assets/PlayerConfigProvider.acccc837.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/PhFlowArrow.vue.6f08031d.js","assets/forms.80b322c3.js","assets/ThreadSelector.685db080.js","assets/index.16db0cbc.js","assets/index.72e7e0c4.js","assets/ThreadSelector.c38c4d8f.css","assets/index.6d0aa991.js","assets/NavbarControls.efde055b.js","assets/CloseCircleOutlined.7f7cf51e.js","assets/popupNotifcation.4546a25b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/PhChats.vue.beb9773f.js","assets/NavbarControls.8216d9aa.css","assets/index.bfc6be46.js","assets/FormEditor.3bacf8bd.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.c56f9caa.js"),["assets/JobEditor.c56f9caa.js","assets/BaseLayout.8a144d4b.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.1328a11e.js","assets/uuid.ae615ecc.js","assets/scripts.f75f456a.js","assets/record.fd803298.js","assets/validations.76a63dfc.js","assets/string.120d0ab5.js","assets/PhCopy.vue.74a1d4d4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhCopySimple.vue.7263ced8.js","assets/PhCaretRight.vue.6053784e.js","assets/Badge.de362ad0.js","assets/PhBug.vue.df4a58c4.js","assets/PhQuestion.vue.0ff52186.js","assets/LoadingOutlined.e575a9f5.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js","assets/PhPencil.vue.2a0ab41e.js","assets/toggleHighContrast.f87b95db.js","assets/toggleHighContrast.30d77c87.css","assets/index.108c8a9a.js","assets/Card.fead4877.js","assets/TabPane.4b93ad7f.js","assets/SourceCode.62d79c81.css","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.6de2f710.js","assets/index.6d0aa991.js","assets/RunButton.vue_vue_type_script_setup_true_lang.4a29cdb4.js","assets/NavbarControls.efde055b.js","assets/CloseCircleOutlined.7f7cf51e.js","assets/popupNotifcation.4546a25b.js","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/PhChats.vue.beb9773f.js","assets/NavbarControls.8216d9aa.css","assets/index.bfc6be46.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.e4f62ac5.js"),["assets/HookEditor.e4f62ac5.js","assets/BaseLayout.8a144d4b.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.1328a11e.js","assets/uuid.ae615ecc.js","assets/scripts.f75f456a.js","assets/record.fd803298.js","assets/validations.76a63dfc.js","assets/string.120d0ab5.js","assets/PhCopy.vue.74a1d4d4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhCopySimple.vue.7263ced8.js","assets/PhCaretRight.vue.6053784e.js","assets/Badge.de362ad0.js","assets/PhBug.vue.df4a58c4.js","assets/PhQuestion.vue.0ff52186.js","assets/LoadingOutlined.e575a9f5.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js","assets/PhPencil.vue.2a0ab41e.js","assets/toggleHighContrast.f87b95db.js","assets/toggleHighContrast.30d77c87.css","assets/index.108c8a9a.js","assets/Card.fead4877.js","assets/TabPane.4b93ad7f.js","assets/SourceCode.62d79c81.css","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4a29cdb4.js","assets/api.92d12e4f.js","assets/fetch.3897f6cd.js","assets/metadata.6bf78b0c.js","assets/PhKanban.vue.79a689a5.js","assets/PhWebhooksLogo.vue.1d4c10da.js","assets/ThreadSelector.685db080.js","assets/index.16db0cbc.js","assets/index.72e7e0c4.js","assets/ThreadSelector.c38c4d8f.css","assets/index.1af3af4f.js","assets/CollapsePanel.aee33b03.js","assets/index.6d0aa991.js","assets/NavbarControls.efde055b.js","assets/CloseCircleOutlined.7f7cf51e.js","assets/popupNotifcation.4546a25b.js","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/PhChats.vue.beb9773f.js","assets/NavbarControls.8216d9aa.css","assets/index.bfc6be46.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.653de066.js"),["assets/ScriptEditor.653de066.js","assets/BaseLayout.8a144d4b.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.1328a11e.js","assets/uuid.ae615ecc.js","assets/scripts.f75f456a.js","assets/record.fd803298.js","assets/validations.76a63dfc.js","assets/string.120d0ab5.js","assets/PhCopy.vue.74a1d4d4.js","assets/PhCheckCircle.vue.9ecd8e66.js","assets/PhCopySimple.vue.7263ced8.js","assets/PhCaretRight.vue.6053784e.js","assets/Badge.de362ad0.js","assets/PhBug.vue.df4a58c4.js","assets/PhQuestion.vue.0ff52186.js","assets/LoadingOutlined.e575a9f5.js","assets/workspaces.4091395e.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js","assets/PhPencil.vue.2a0ab41e.js","assets/toggleHighContrast.f87b95db.js","assets/toggleHighContrast.30d77c87.css","assets/index.108c8a9a.js","assets/Card.fead4877.js","assets/TabPane.4b93ad7f.js","assets/SourceCode.62d79c81.css","assets/SaveButton.73baa0db.js","assets/UnsavedChangesHandler.8718d9b9.js","assets/ExclamationCircleOutlined.836885b1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.4a29cdb4.js","assets/ThreadSelector.685db080.js","assets/index.16db0cbc.js","assets/index.72e7e0c4.js","assets/ThreadSelector.c38c4d8f.css","assets/NavbarControls.efde055b.js","assets/CloseCircleOutlined.7f7cf51e.js","assets/index.6d0aa991.js","assets/popupNotifcation.4546a25b.js","assets/PhArrowSquareOut.vue.b5d046a1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.34d5c716.js","assets/BookOutlined.d135856b.js","assets/PhChats.vue.beb9773f.js","assets/NavbarControls.8216d9aa.css","assets/index.bfc6be46.js","assets/index.49214fa6.js","assets/Avatar.1a39dd9b.js","assets/CollapsePanel.aee33b03.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.d88335df.js"),["assets/ResourcesTracker.d88335df.js","assets/BaseLayout.8a144d4b.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.8d09bea7.js","assets/polling.c17378b0.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.d75e4f39.js"),["assets/Welcome.d75e4f39.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.2e430108.js","assets/Logo.babcb3a2.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/Logo.03290bf7.css","assets/ContentLayout.692f1cc6.js","assets/ContentLayout.ee57a545.css","assets/fetch.3897f6cd.js","assets/Card.fead4877.js","assets/TabPane.4b93ad7f.js","assets/workspaceStore.dc98ce76.js","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/asyncComputed.8d09bea7.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.20d851a4.js"),["assets/App.20d851a4.js","assets/App.vue_vue_type_style_index_0_lang.37c4fc3d.js","assets/workspaceStore.dc98ce76.js","assets/vue-router.a301704c.js","assets/vue-router.b3bf2b78.css","assets/url.3e386c25.js","assets/colorHelpers.cfb226fe.js","assets/PlayerConfigProvider.acccc837.js","assets/index.0a7cb9a1.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);W(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const r={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(r),"_self")}});(async()=>{await te();const o=oe(),e=N({render:()=>z(ne)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.146ecbc8.js.map
