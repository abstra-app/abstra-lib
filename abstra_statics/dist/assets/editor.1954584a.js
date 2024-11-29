var T=Object.defineProperty;var k=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(k(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as U,u as C,A as x,l as f,e as w,f as g,g as E,h as S,i as $,_ as a,j as W,k as N,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./index.94b9b69a.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.c4180078.js";import{a as ae}from"./asyncComputed.2ed54788.js";import"./url.bf5665e3.js";import"./colorHelpers.a40f30b4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="5c2a7c24-a24c-457d-8e83-fb473dd1baa3",o._sentryDebugIdIdentifier="sentry-dbid-5c2a7c24-a24c-457d-8e83-fb473dd1baa3")}catch{}})();const re={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},ne=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,r)=>{const l=I("RouterView");return V(),j(C(x),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",re,[U(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const r=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!r.ok)throw new Error("Failed to fix");return _.refetch(),r.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){n(this,"label");n(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(r=>new ie(r,t))}}class le{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var r;const t=(r=_.result.value)==null?void 0:r.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,r=0){window.Intercom?window.Intercom(e,t):r<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;n(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"99e34b25166b6f0d48bafb9d467ff7f5f283d0c3",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=w(null),t=w(null),r=g(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=g(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),L=async()=>{!r.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:y,deleteLogin:L,loginInfo:e,cloudProject:t,isLogged:r,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=S({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.aab20b29.js"),["assets/Home.aab20b29.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.62c2839b.js"),["assets/Workspace.62c2839b.js","assets/BaseLayout.5a6fd8c3.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.766a8a6c.js","assets/NavbarControls.7818e729.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/CloseCircleOutlined.01811d20.js","assets/index.43b5e3de.js","assets/index.0758ff2c.js","assets/workspaces.6bf13407.js","assets/record.40cdf321.js","assets/popupNotifcation.4b22d82c.js","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/PhChats.vue.17b9a41d.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dba90a01.js","assets/Logo.1d93399a.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.9be2d651.js","assets/PhCaretRight.vue.6ead8e9c.js","assets/PhFlowArrow.vue.a2e86127.js","assets/PhKanban.vue.e398f408.js","assets/index.cea52e72.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js","assets/asyncComputed.2ed54788.js","assets/Workspace.1d39102f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.f5c0cf45.js"),["assets/Stages.f5c0cf45.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/ContentLayout.659ab940.js","assets/ContentLayout.ee57a545.css","assets/CrudView.261cb507.js","assets/router.c06b96b9.js","assets/gateway.8be5f142.js","assets/popupNotifcation.4b22d82c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/url.bf5665e3.js","assets/PhDotsThreeVertical.vue.fec35a13.js","assets/Badge.5e8a8559.js","assets/index.0758ff2c.js","assets/CrudView.c80c8ede.css","assets/ant-design.61f199c7.js","assets/asyncComputed.2ed54788.js","assets/string.ef5ad24e.js","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/forms.e2463851.js","assets/record.40cdf321.js","assets/scripts.7b1b6744.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/colorHelpers.a40f30b4.js","assets/index.43b5e3de.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/validations.ef257c40.js","assets/Stages.f68d77c7.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.2acb6972.js"),["assets/WorkflowEditor.2acb6972.js","assets/api.c28bc4f5.js","assets/fetch.622451cd.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/metadata.3555617e.js","assets/PhBug.vue.89b488fb.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhKanban.vue.e398f408.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/Workflow.c6fa868d.js","assets/PhArrowCounterClockwise.vue.65b60d3a.js","assets/validations.ef257c40.js","assets/string.ef5ad24e.js","assets/uuid.36762c91.js","assets/index.f6a37388.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/record.40cdf321.js","assets/polling.f67d338d.js","assets/index.b278294d.js","assets/Badge.5e8a8559.js","assets/PhArrowDown.vue.dc075f64.js","assets/Workflow.0e84f462.css","assets/asyncComputed.2ed54788.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.0a8d6d77.js","assets/WorkflowEditor.adc8a023.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.9026f70e.js"),["assets/WorkflowThreads.9026f70e.js","assets/api.c28bc4f5.js","assets/fetch.622451cd.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/metadata.3555617e.js","assets/PhBug.vue.89b488fb.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhKanban.vue.e398f408.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/ContentLayout.659ab940.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.9cb3b98f.js","assets/polling.f67d338d.js","assets/asyncComputed.2ed54788.js","assets/PhQuestion.vue.b1694be5.js","assets/ant-design.61f199c7.js","assets/index.0758ff2c.js","assets/index.0024bdbe.js","assets/index.837c9c6a.js","assets/CollapsePanel.244dc873.js","assets/index.0a8d6d77.js","assets/index.f689d1b9.js","assets/Badge.5e8a8559.js","assets/PhArrowCounterClockwise.vue.65b60d3a.js","assets/Workflow.c6fa868d.js","assets/validations.ef257c40.js","assets/string.ef5ad24e.js","assets/uuid.36762c91.js","assets/index.f6a37388.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/record.40cdf321.js","assets/index.b278294d.js","assets/PhArrowDown.vue.dc075f64.js","assets/Workflow.0e84f462.css","assets/Card.c1f1fe9d.js","assets/TabPane.238185fe.js","assets/LoadingOutlined.5a5432d6.js","assets/DeleteOutlined.1e2b9cb2.js","assets/PhDownloadSimple.vue.0ae64043.js","assets/utils.d99e7230.js","assets/LoadingContainer.1561ffc8.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.aec9e496.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.198fff14.js"),["assets/PreferencesEditor.198fff14.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/record.40cdf321.js","assets/PlayerNavbar.c9afe73c.js","assets/metadata.3555617e.js","assets/PhBug.vue.89b488fb.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhKanban.vue.e398f408.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/LoadingOutlined.5a5432d6.js","assets/PhSignOut.vue.766a8a6c.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.fb82c4d5.js","assets/index.f6a37388.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.166d0a62.js","assets/ContentLayout.659ab940.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.1561ffc8.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.2ed54788.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.7bd8bf9b.js"),["assets/RequirementsEditor.7bd8bf9b.js","assets/ContentLayout.659ab940.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.261cb507.js","assets/router.c06b96b9.js","assets/gateway.8be5f142.js","assets/popupNotifcation.4b22d82c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/url.bf5665e3.js","assets/PhDotsThreeVertical.vue.fec35a13.js","assets/Badge.5e8a8559.js","assets/index.0758ff2c.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js","assets/record.40cdf321.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/colorHelpers.a40f30b4.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.38d61460.js"),["assets/EnvVarsEditor.38d61460.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/record.40cdf321.js","assets/ContentLayout.659ab940.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.248560fc.js","assets/gateway.8be5f142.js","assets/popupNotifcation.4b22d82c.js","assets/fetch.622451cd.js","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.261cb507.js","assets/router.c06b96b9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/PhDotsThreeVertical.vue.fec35a13.js","assets/Badge.5e8a8559.js","assets/index.0758ff2c.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js","assets/PhPencil.vue.fc592ee6.js","assets/index.43b5e3de.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.4a56203f.js"),["assets/AccessControlEditor.4a56203f.js","assets/ContentLayout.659ab940.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.622451cd.js","assets/record.40cdf321.js","assets/repository.875b1533.js","assets/gateway.8be5f142.js","assets/popupNotifcation.4b22d82c.js","assets/asyncComputed.2ed54788.js","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.e1b2b8bd.js","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/index.0a8d6d77.js","assets/metadata.3555617e.js","assets/PhBug.vue.89b488fb.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhKanban.vue.e398f408.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/index.43b5e3de.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.e8596242.js"),["assets/ProjectLogin.e8596242.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dba90a01.js","assets/Logo.1d93399a.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/Logo.03290bf7.css","assets/BaseLayout.5a6fd8c3.js","assets/BaseLayout.b7a1f19a.css","assets/index.cea52e72.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js","assets/index.0758ff2c.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/asyncComputed.2ed54788.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.a23607c2.js"),["assets/FormEditor.a23607c2.js","assets/api.c28bc4f5.js","assets/fetch.622451cd.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/metadata.3555617e.js","assets/PhBug.vue.89b488fb.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhKanban.vue.e398f408.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/PlayerNavbar.c9afe73c.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/LoadingOutlined.5a5432d6.js","assets/PhSignOut.vue.766a8a6c.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js","assets/PlayerNavbar.bac3bd2c.css","assets/BaseLayout.5a6fd8c3.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.6091e680.js","assets/uuid.36762c91.js","assets/scripts.7b1b6744.js","assets/record.40cdf321.js","assets/validations.ef257c40.js","assets/string.ef5ad24e.js","assets/PhCopy.vue.ec491e28.js","assets/PhCopySimple.vue.ab7872e5.js","assets/PhCaretRight.vue.6ead8e9c.js","assets/Badge.5e8a8559.js","assets/PhQuestion.vue.b1694be5.js","assets/workspaces.6bf13407.js","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js","assets/PhPencil.vue.fc592ee6.js","assets/toggleHighContrast.1bba8c56.js","assets/toggleHighContrast.30d77c87.css","assets/index.43b5e3de.js","assets/Card.c1f1fe9d.js","assets/TabPane.238185fe.js","assets/SourceCode.62d79c81.css","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.508e0ad9.js","assets/Login.vue_vue_type_script_setup_true_lang.b4ada174.js","assets/Logo.1d93399a.js","assets/Logo.03290bf7.css","assets/CircularLoading.17cf19c0.js","assets/CircularLoading.1a558a0d.css","assets/index.f6a37388.js","assets/Login.28df3844.css","assets/Steps.194c69f7.js","assets/index.56523404.js","assets/Steps.4d03c6c1.css","assets/Watermark.85abb9e8.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerConfigProvider.fb82c4d5.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/PhFlowArrow.vue.a2e86127.js","assets/forms.e2463851.js","assets/ThreadSelector.8ecc0ef8.js","assets/index.0024bdbe.js","assets/index.0a8d6d77.js","assets/ThreadSelector.c38c4d8f.css","assets/index.0758ff2c.js","assets/NavbarControls.7818e729.js","assets/CloseCircleOutlined.01811d20.js","assets/popupNotifcation.4b22d82c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/PhChats.vue.17b9a41d.js","assets/NavbarControls.8216d9aa.css","assets/index.cea52e72.js","assets/FormEditor.cc36a3e2.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.8d5b7c1c.js"),["assets/JobEditor.8d5b7c1c.js","assets/BaseLayout.5a6fd8c3.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.6091e680.js","assets/uuid.36762c91.js","assets/scripts.7b1b6744.js","assets/record.40cdf321.js","assets/validations.ef257c40.js","assets/string.ef5ad24e.js","assets/PhCopy.vue.ec491e28.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhCopySimple.vue.ab7872e5.js","assets/PhCaretRight.vue.6ead8e9c.js","assets/Badge.5e8a8559.js","assets/PhBug.vue.89b488fb.js","assets/PhQuestion.vue.b1694be5.js","assets/LoadingOutlined.5a5432d6.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js","assets/PhPencil.vue.fc592ee6.js","assets/toggleHighContrast.1bba8c56.js","assets/toggleHighContrast.30d77c87.css","assets/index.43b5e3de.js","assets/Card.c1f1fe9d.js","assets/TabPane.238185fe.js","assets/SourceCode.62d79c81.css","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.b936f7f9.js","assets/index.0758ff2c.js","assets/RunButton.vue_vue_type_script_setup_true_lang.d36c08f4.js","assets/NavbarControls.7818e729.js","assets/CloseCircleOutlined.01811d20.js","assets/popupNotifcation.4b22d82c.js","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/PhChats.vue.17b9a41d.js","assets/NavbarControls.8216d9aa.css","assets/index.cea52e72.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.be0795e2.js"),["assets/HookEditor.be0795e2.js","assets/BaseLayout.5a6fd8c3.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.6091e680.js","assets/uuid.36762c91.js","assets/scripts.7b1b6744.js","assets/record.40cdf321.js","assets/validations.ef257c40.js","assets/string.ef5ad24e.js","assets/PhCopy.vue.ec491e28.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhCopySimple.vue.ab7872e5.js","assets/PhCaretRight.vue.6ead8e9c.js","assets/Badge.5e8a8559.js","assets/PhBug.vue.89b488fb.js","assets/PhQuestion.vue.b1694be5.js","assets/LoadingOutlined.5a5432d6.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js","assets/PhPencil.vue.fc592ee6.js","assets/toggleHighContrast.1bba8c56.js","assets/toggleHighContrast.30d77c87.css","assets/index.43b5e3de.js","assets/Card.c1f1fe9d.js","assets/TabPane.238185fe.js","assets/SourceCode.62d79c81.css","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.d36c08f4.js","assets/api.c28bc4f5.js","assets/fetch.622451cd.js","assets/metadata.3555617e.js","assets/PhKanban.vue.e398f408.js","assets/PhWebhooksLogo.vue.dae79bcd.js","assets/ThreadSelector.8ecc0ef8.js","assets/index.0024bdbe.js","assets/index.0a8d6d77.js","assets/ThreadSelector.c38c4d8f.css","assets/index.2f67c016.js","assets/CollapsePanel.244dc873.js","assets/index.0758ff2c.js","assets/NavbarControls.7818e729.js","assets/CloseCircleOutlined.01811d20.js","assets/popupNotifcation.4b22d82c.js","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/PhChats.vue.17b9a41d.js","assets/NavbarControls.8216d9aa.css","assets/index.cea52e72.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.aa64ee65.js"),["assets/ScriptEditor.aa64ee65.js","assets/BaseLayout.5a6fd8c3.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.6091e680.js","assets/uuid.36762c91.js","assets/scripts.7b1b6744.js","assets/record.40cdf321.js","assets/validations.ef257c40.js","assets/string.ef5ad24e.js","assets/PhCopy.vue.ec491e28.js","assets/PhCheckCircle.vue.a4112517.js","assets/PhCopySimple.vue.ab7872e5.js","assets/PhCaretRight.vue.6ead8e9c.js","assets/Badge.5e8a8559.js","assets/PhBug.vue.89b488fb.js","assets/PhQuestion.vue.b1694be5.js","assets/LoadingOutlined.5a5432d6.js","assets/workspaces.6bf13407.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js","assets/PhPencil.vue.fc592ee6.js","assets/toggleHighContrast.1bba8c56.js","assets/toggleHighContrast.30d77c87.css","assets/index.43b5e3de.js","assets/Card.c1f1fe9d.js","assets/TabPane.238185fe.js","assets/SourceCode.62d79c81.css","assets/SaveButton.5aa2376e.js","assets/UnsavedChangesHandler.9d4991c6.js","assets/ExclamationCircleOutlined.6f3c80b9.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.d36c08f4.js","assets/ThreadSelector.8ecc0ef8.js","assets/index.0024bdbe.js","assets/index.0a8d6d77.js","assets/ThreadSelector.c38c4d8f.css","assets/NavbarControls.7818e729.js","assets/CloseCircleOutlined.01811d20.js","assets/index.0758ff2c.js","assets/popupNotifcation.4b22d82c.js","assets/PhArrowSquareOut.vue.cb4bac4e.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.64badcab.js","assets/BookOutlined.5ed977a1.js","assets/PhChats.vue.17b9a41d.js","assets/NavbarControls.8216d9aa.css","assets/index.cea52e72.js","assets/index.64c1c918.js","assets/Avatar.9c0d9fa9.js","assets/CollapsePanel.244dc873.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.426e90f0.js"),["assets/ResourcesTracker.426e90f0.js","assets/BaseLayout.5a6fd8c3.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.2ed54788.js","assets/polling.f67d338d.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.3eb8303a.js"),["assets/Welcome.3eb8303a.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.dba90a01.js","assets/Logo.1d93399a.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/Logo.03290bf7.css","assets/ContentLayout.659ab940.js","assets/ContentLayout.ee57a545.css","assets/fetch.622451cd.js","assets/Card.c1f1fe9d.js","assets/TabPane.238185fe.js","assets/workspaceStore.c4180078.js","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/asyncComputed.2ed54788.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.55ff7f7d.js"),["assets/App.55ff7f7d.js","assets/App.vue_vue_type_style_index_0_lang.bd188b66.js","assets/workspaceStore.c4180078.js","assets/index.94b9b69a.js","assets/index.b3bf2b78.css","assets/url.bf5665e3.js","assets/colorHelpers.a40f30b4.js","assets/PlayerConfigProvider.fb82c4d5.js","assets/index.f6a37388.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);W(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const r={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(r),"_self")}});(async()=>{await te();const o=oe(),e=N({render:()=>z(ne)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.1954584a.js.map
