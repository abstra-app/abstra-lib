var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.3700fa1b.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.46b7d4c2.js";import{a as ae}from"./asyncComputed.3fd353c4.js";import"./url.56061907.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="28a9c793-7aec-4005-94a4-6d2847a62d73",o._sentryDebugIdIdentifier="sentry-dbid-28a9c793-7aec-4005-94a4-6d2847a62d73")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const y=new se,_=ae(async()=>(await y.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await y.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"1e536060d882a576d58eabf91d92385088f0850a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),L=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},b=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:b,deleteLogin:L,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.2cbf31d5.js"),["assets/Home.2cbf31d5.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.d7fd7bb9.js"),["assets/Workspace.d7fd7bb9.js","assets/BaseLayout.7471b02c.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/PhSignOut.vue.b7bf2b48.js","assets/NavbarControls.3a5a3bd7.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/CloseCircleOutlined.7356f393.js","assets/index.3fb16ecf.js","assets/index.d7a725f3.js","assets/workspaces.88c68d86.js","assets/record.3b861102.js","assets/popupNotifcation.51da3131.js","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/PhChats.vue.a96b3ae7.js","assets/NavbarControls.5a022bc4.css","assets/Logo.2a6b42ae.js","assets/Logo.21e86751.css","assets/PhIdentificationBadge.vue.7d615173.js","assets/PhCaretRight.vue.fd80caca.js","assets/PhFlowArrow.vue.106b0073.js","assets/PhKanban.vue.ee624250.js","assets/index.1708c882.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js","assets/asyncComputed.3fd353c4.js","assets/Workspace.f4e56ef5.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.f35ff4dc.js"),["assets/Stages.f35ff4dc.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.7a92a179.js","assets/ContentLayout.ee57a545.css","assets/CrudView.bebee79c.js","assets/router.f6b851d7.js","assets/gateway.bf4fcd6e.js","assets/popupNotifcation.51da3131.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/url.56061907.js","assets/PhDotsThreeVertical.vue.b48f6f35.js","assets/index.d7a725f3.js","assets/CrudView.6b6b336a.css","assets/ant-design.55ee8f81.js","assets/asyncComputed.3fd353c4.js","assets/string.e2148cfd.js","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/forms.d6b7a9e2.js","assets/record.3b861102.js","assets/scripts.7505fe54.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/index.3fb16ecf.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/validations.13145ff0.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.4b5602fd.js"),["assets/WorkflowEditor.4b5602fd.js","assets/api.c7878271.js","assets/fetch.81d2aee9.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/metadata.24b2ca10.js","assets/PhBug.vue.7f5736fe.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhKanban.vue.ee624250.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/Workflow.cca1cbd0.js","assets/PhArrowClockwise.vue.e46350cf.js","assets/PhArrowCounterClockwise.vue.b1e224b2.js","assets/validations.13145ff0.js","assets/string.e2148cfd.js","assets/uuid.0043a8ed.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/record.3b861102.js","assets/polling.cada3f3d.js","assets/index.f7fd94be.js","assets/Badge.ac3724d7.js","assets/isNumeric.75337b1e.js","assets/Workflow.53d99050.css","assets/asyncComputed.3fd353c4.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.6baba0fa.js","assets/WorkflowEditor.f9f21f8b.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.b1f5c1d8.js"),["assets/WorkflowThreads.b1f5c1d8.js","assets/api.c7878271.js","assets/fetch.81d2aee9.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/metadata.24b2ca10.js","assets/PhBug.vue.7f5736fe.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhKanban.vue.ee624250.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/ContentLayout.7a92a179.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.09378608.js","assets/polling.cada3f3d.js","assets/asyncComputed.3fd353c4.js","assets/PhQuestion.vue.d74cc684.js","assets/ant-design.55ee8f81.js","assets/index.d7a725f3.js","assets/index.6c9fd1a3.js","assets/index.02ad40e3.js","assets/CollapsePanel.5e507f64.js","assets/index.6baba0fa.js","assets/index.d28a9a44.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.b1e224b2.js","assets/Workflow.cca1cbd0.js","assets/PhArrowClockwise.vue.e46350cf.js","assets/validations.13145ff0.js","assets/string.e2148cfd.js","assets/uuid.0043a8ed.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/record.3b861102.js","assets/index.f7fd94be.js","assets/Badge.ac3724d7.js","assets/Workflow.53d99050.css","assets/Card.5d56a635.js","assets/TabPane.7ef36279.js","assets/LoadingOutlined.14810fa8.js","assets/DeleteOutlined.790c72dd.js","assets/PhDownloadSimple.vue.7506d855.js","assets/utils.2f77b22f.js","assets/LoadingContainer.6e5b5589.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.e7dd74b9.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.40300289.js"),["assets/PreferencesEditor.40300289.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/record.3b861102.js","assets/PlayerNavbar.10e9a9c0.js","assets/metadata.24b2ca10.js","assets/PhBug.vue.7f5736fe.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhKanban.vue.ee624250.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/PhSignOut.vue.b7bf2b48.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js","assets/PlayerNavbar.ecec5c6e.css","assets/WidgetsFrame.19e9021e.js","assets/WidgetsFrame.e0c6be76.css","assets/ContentLayout.7a92a179.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.6e5b5589.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/asyncComputed.3fd353c4.js","assets/PreferencesEditor.c3fea61a.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.1e2e180b.js"),["assets/RequirementsEditor.1e2e180b.js","assets/ContentLayout.7a92a179.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/CrudView.bebee79c.js","assets/router.f6b851d7.js","assets/gateway.bf4fcd6e.js","assets/popupNotifcation.51da3131.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/url.56061907.js","assets/PhDotsThreeVertical.vue.b48f6f35.js","assets/index.d7a725f3.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.3fd353c4.js","assets/polling.cada3f3d.js","assets/record.3b861102.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.f1438623.js"),["assets/EnvVarsEditor.f1438623.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/record.3b861102.js","assets/ContentLayout.7a92a179.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.196d4ffc.js","assets/gateway.bf4fcd6e.js","assets/popupNotifcation.51da3131.js","assets/fetch.81d2aee9.js","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/CrudView.bebee79c.js","assets/router.f6b851d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/PhDotsThreeVertical.vue.b48f6f35.js","assets/index.d7a725f3.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.1b6ccdaa.js","assets/asyncComputed.3fd353c4.js","assets/polling.cada3f3d.js","assets/PhPencil.vue.14e78c9a.js","assets/index.3fb16ecf.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.bf0fafa9.js"),["assets/VSCodeConnection.bf0fafa9.js","assets/ContentLayout.7a92a179.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/polling.cada3f3d.js","assets/index.d7a725f3.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.5bad8597.js"),["assets/AccessControlEditor.5bad8597.js","assets/ContentLayout.7a92a179.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/fetch.81d2aee9.js","assets/record.3b861102.js","assets/repository.895bcc50.js","assets/gateway.bf4fcd6e.js","assets/popupNotifcation.51da3131.js","assets/asyncComputed.3fd353c4.js","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/PhGlobe.vue.86279b7d.js","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/index.6baba0fa.js","assets/metadata.24b2ca10.js","assets/PhBug.vue.7f5736fe.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhKanban.vue.ee624250.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/index.3fb16ecf.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.2bca11f5.js"),["assets/ProjectLogin.2bca11f5.js","assets/BaseLayout.7471b02c.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/Logo.2a6b42ae.js","assets/Logo.21e86751.css","assets/index.1708c882.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js","assets/index.d7a725f3.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/asyncComputed.3fd353c4.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.aa2bcbe3.js"),["assets/FormEditor.aa2bcbe3.js","assets/api.c7878271.js","assets/fetch.81d2aee9.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/metadata.24b2ca10.js","assets/PhBug.vue.7f5736fe.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhKanban.vue.ee624250.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/PlayerNavbar.10e9a9c0.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/PhSignOut.vue.b7bf2b48.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js","assets/PlayerNavbar.ecec5c6e.css","assets/BaseLayout.7471b02c.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.34862cd8.js","assets/uuid.0043a8ed.js","assets/scripts.7505fe54.js","assets/record.3b861102.js","assets/validations.13145ff0.js","assets/string.e2148cfd.js","assets/PhCopy.vue.88a1723f.js","assets/PhCopySimple.vue.079e0388.js","assets/PhCaretRight.vue.fd80caca.js","assets/Badge.ac3724d7.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.d74cc684.js","assets/LoadingOutlined.14810fa8.js","assets/workspaces.88c68d86.js","assets/asyncComputed.3fd353c4.js","assets/polling.cada3f3d.js","assets/PhPencil.vue.14e78c9a.js","assets/toggleHighContrast.07556738.js","assets/toggleHighContrast.30d77c87.css","assets/index.3fb16ecf.js","assets/Card.5d56a635.js","assets/TabPane.7ef36279.js","assets/SourceCode.39c14f68.css","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/FormRunner.f1e45ec7.js","assets/Login.vue_vue_type_script_setup_true_lang.4978c8fb.js","assets/CircularLoading.11344271.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.e46350cf.js","assets/Login.4b756628.css","assets/Steps.585723c3.js","assets/Steps.4a8d55e8.css","assets/Watermark.6686354a.js","assets/Watermark.77541699.css","assets/FormRunner.f36b3cdd.css","assets/WidgetsFrame.19e9021e.js","assets/WidgetsFrame.e0c6be76.css","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/PhFlowArrow.vue.106b0073.js","assets/forms.d6b7a9e2.js","assets/ThreadSelector.fea66b0c.js","assets/index.6c9fd1a3.js","assets/index.6baba0fa.js","assets/ThreadSelector.8aa77ab2.css","assets/index.d7a725f3.js","assets/NavbarControls.3a5a3bd7.js","assets/CloseCircleOutlined.7356f393.js","assets/popupNotifcation.51da3131.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/PhChats.vue.a96b3ae7.js","assets/NavbarControls.5a022bc4.css","assets/index.1708c882.js","assets/FormEditor.5d53b4aa.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.756d319e.js"),["assets/JobEditor.756d319e.js","assets/BaseLayout.7471b02c.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.34862cd8.js","assets/uuid.0043a8ed.js","assets/scripts.7505fe54.js","assets/record.3b861102.js","assets/validations.13145ff0.js","assets/string.e2148cfd.js","assets/PhCopy.vue.88a1723f.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhCopySimple.vue.079e0388.js","assets/PhCaretRight.vue.fd80caca.js","assets/Badge.ac3724d7.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.7f5736fe.js","assets/PhQuestion.vue.d74cc684.js","assets/LoadingOutlined.14810fa8.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/asyncComputed.3fd353c4.js","assets/polling.cada3f3d.js","assets/PhPencil.vue.14e78c9a.js","assets/toggleHighContrast.07556738.js","assets/toggleHighContrast.30d77c87.css","assets/index.3fb16ecf.js","assets/Card.5d56a635.js","assets/TabPane.7ef36279.js","assets/SourceCode.39c14f68.css","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/index.fb843ce3.js","assets/index.d7a725f3.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f5addffe.js","assets/NavbarControls.3a5a3bd7.js","assets/CloseCircleOutlined.7356f393.js","assets/popupNotifcation.51da3131.js","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/PhChats.vue.a96b3ae7.js","assets/NavbarControls.5a022bc4.css","assets/index.1708c882.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f46c0895.js"),["assets/HookEditor.f46c0895.js","assets/BaseLayout.7471b02c.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.34862cd8.js","assets/uuid.0043a8ed.js","assets/scripts.7505fe54.js","assets/record.3b861102.js","assets/validations.13145ff0.js","assets/string.e2148cfd.js","assets/PhCopy.vue.88a1723f.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhCopySimple.vue.079e0388.js","assets/PhCaretRight.vue.fd80caca.js","assets/Badge.ac3724d7.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.7f5736fe.js","assets/PhQuestion.vue.d74cc684.js","assets/LoadingOutlined.14810fa8.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/asyncComputed.3fd353c4.js","assets/polling.cada3f3d.js","assets/PhPencil.vue.14e78c9a.js","assets/toggleHighContrast.07556738.js","assets/toggleHighContrast.30d77c87.css","assets/index.3fb16ecf.js","assets/Card.5d56a635.js","assets/TabPane.7ef36279.js","assets/SourceCode.39c14f68.css","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f5addffe.js","assets/api.c7878271.js","assets/fetch.81d2aee9.js","assets/metadata.24b2ca10.js","assets/PhKanban.vue.ee624250.js","assets/PhWebhooksLogo.vue.269e7ac9.js","assets/ThreadSelector.fea66b0c.js","assets/index.6c9fd1a3.js","assets/index.6baba0fa.js","assets/ThreadSelector.8aa77ab2.css","assets/index.28b852c0.js","assets/CollapsePanel.5e507f64.js","assets/index.d7a725f3.js","assets/NavbarControls.3a5a3bd7.js","assets/CloseCircleOutlined.7356f393.js","assets/popupNotifcation.51da3131.js","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/PhChats.vue.a96b3ae7.js","assets/NavbarControls.5a022bc4.css","assets/index.1708c882.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.73e75bbe.js"),["assets/ScriptEditor.73e75bbe.js","assets/BaseLayout.7471b02c.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.34862cd8.js","assets/uuid.0043a8ed.js","assets/scripts.7505fe54.js","assets/record.3b861102.js","assets/validations.13145ff0.js","assets/string.e2148cfd.js","assets/PhCopy.vue.88a1723f.js","assets/PhCheckCircle.vue.31dcb1cc.js","assets/PhCopySimple.vue.079e0388.js","assets/PhCaretRight.vue.fd80caca.js","assets/Badge.ac3724d7.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.7f5736fe.js","assets/PhQuestion.vue.d74cc684.js","assets/LoadingOutlined.14810fa8.js","assets/workspaces.88c68d86.js","assets/workspaceStore.46b7d4c2.js","assets/url.56061907.js","assets/asyncComputed.3fd353c4.js","assets/polling.cada3f3d.js","assets/PhPencil.vue.14e78c9a.js","assets/toggleHighContrast.07556738.js","assets/toggleHighContrast.30d77c87.css","assets/index.3fb16ecf.js","assets/Card.5d56a635.js","assets/TabPane.7ef36279.js","assets/SourceCode.39c14f68.css","assets/SaveButton.e77ff3b1.js","assets/UnsavedChangesHandler.7b97b934.js","assets/ExclamationCircleOutlined.bd40c99d.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.ef2df51c.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f5addffe.js","assets/ThreadSelector.fea66b0c.js","assets/index.6c9fd1a3.js","assets/index.6baba0fa.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.3a5a3bd7.js","assets/CloseCircleOutlined.7356f393.js","assets/index.d7a725f3.js","assets/popupNotifcation.51da3131.js","assets/PhArrowSquareOut.vue.86dc2f13.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2fec55ff.js","assets/BookOutlined.e0b40054.js","assets/PhChats.vue.a96b3ae7.js","assets/NavbarControls.5a022bc4.css","assets/index.1708c882.js","assets/index.2b805c87.js","assets/Avatar.447ce3fa.js","assets/CollapsePanel.5e507f64.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.94a1c5a8.js"),["assets/App.94a1c5a8.js","assets/App.vue_vue_type_style_index_0_lang.b573d2c9.js","assets/workspaceStore.46b7d4c2.js","assets/vue-router.3700fa1b.js","assets/vue-router.940bfc8a.css","assets/url.56061907.js","assets/WidgetsFrame.19e9021e.js","assets/WidgetsFrame.e0c6be76.css","assets/App.1abaf813.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.2d88edf3.js.map
