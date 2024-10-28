var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.6860ceb3.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.a1267983.js";import{a as ae}from"./asyncComputed.191e76dc.js";import"./url.f6200731.js";import"./colorHelpers.748474a2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="ccce6ae3-7b85-482e-a1b0-b2735d1cc81b",o._sentryDebugIdIdentifier="sentry-dbid-ccce6ae3-7b85-482e-a1b0-b2735d1cc81b")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"059e1ae5f4d37ceadfc171869f8ae551b2ef7023",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.541046d0.js"),["assets/Home.541046d0.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.e3ac1a93.js"),["assets/Workspace.e3ac1a93.js","assets/BaseLayout.e9a890f5.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.c3fbbfea.js","assets/NavbarControls.8596092b.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/CloseCircleOutlined.274bf032.js","assets/index.f8d21003.js","assets/index.df074fbc.js","assets/workspaces.694ae8b0.js","assets/record.4a2ca5f6.js","assets/popupNotifcation.665cf3de.js","assets/PhArrowSquareOut.vue.62645478.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/PhChats.vue.bd337a57.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1348c8ce.js","assets/Logo.8a49d6d1.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.c6bac6f1.js","assets/PhCaretRight.vue.9a9d3d18.js","assets/PhFlowArrow.vue.aa83ef51.js","assets/PhKanban.vue.dc762eb8.js","assets/index.0e1d650f.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js","assets/asyncComputed.191e76dc.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.72288880.js"),["assets/Stages.72288880.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.8958779c.js","assets/ContentLayout.ee57a545.css","assets/CrudView.f924adbe.js","assets/router.c4b1a62a.js","assets/gateway.71cfa7e0.js","assets/popupNotifcation.665cf3de.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/url.f6200731.js","assets/PhDotsThreeVertical.vue.ea49e956.js","assets/Badge.a891dd39.js","assets/index.df074fbc.js","assets/CrudView.57fcf015.css","assets/ant-design.304f1dd5.js","assets/asyncComputed.191e76dc.js","assets/string.893bd786.js","assets/PhArrowSquareOut.vue.62645478.js","assets/forms.470a06c8.js","assets/record.4a2ca5f6.js","assets/scripts.daf99622.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/colorHelpers.748474a2.js","assets/index.f8d21003.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/validations.ad2fdd5d.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.3c3f6f2b.js"),["assets/WorkflowEditor.3c3f6f2b.js","assets/api.41eade96.js","assets/fetch.e53ff1ec.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/metadata.7d258527.js","assets/PhBug.vue.630872bb.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhKanban.vue.dc762eb8.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/Workflow.4df39b62.js","assets/PhArrowCounterClockwise.vue.48cc3b85.js","assets/validations.ad2fdd5d.js","assets/string.893bd786.js","assets/uuid.f697b1d3.js","assets/index.468860c1.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/record.4a2ca5f6.js","assets/polling.991e4c94.js","assets/index.460ea735.js","assets/Badge.a891dd39.js","assets/PhArrowDown.vue.f5193b33.js","assets/Workflow.5e0507cb.css","assets/asyncComputed.191e76dc.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.0539a432.js","assets/WorkflowEditor.bb12f104.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.ce2b2714.js"),["assets/WorkflowThreads.ce2b2714.js","assets/api.41eade96.js","assets/fetch.e53ff1ec.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/metadata.7d258527.js","assets/PhBug.vue.630872bb.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhKanban.vue.dc762eb8.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/ContentLayout.8958779c.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.8ab07356.js","assets/polling.991e4c94.js","assets/asyncComputed.191e76dc.js","assets/PhQuestion.vue.be18d1de.js","assets/ant-design.304f1dd5.js","assets/index.df074fbc.js","assets/index.cf6dec4e.js","assets/index.67a335cc.js","assets/CollapsePanel.fb0ce49a.js","assets/index.0539a432.js","assets/index.5434f381.js","assets/Badge.a891dd39.js","assets/PhArrowCounterClockwise.vue.48cc3b85.js","assets/Workflow.4df39b62.js","assets/validations.ad2fdd5d.js","assets/string.893bd786.js","assets/uuid.f697b1d3.js","assets/index.468860c1.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/record.4a2ca5f6.js","assets/index.460ea735.js","assets/PhArrowDown.vue.f5193b33.js","assets/Workflow.5e0507cb.css","assets/Card.f62bb01b.js","assets/TabPane.bd8909f5.js","assets/LoadingOutlined.9abbe449.js","assets/DeleteOutlined.3dfac94a.js","assets/PhDownloadSimple.vue.11a5ddf2.js","assets/utils.3405b263.js","assets/LoadingContainer.6ce6d75b.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.124b8669.js"),["assets/PreferencesEditor.124b8669.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/record.4a2ca5f6.js","assets/PlayerNavbar.12a9f13f.js","assets/metadata.7d258527.js","assets/PhBug.vue.630872bb.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhKanban.vue.dc762eb8.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/LoadingOutlined.9abbe449.js","assets/PhSignOut.vue.c3fbbfea.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.c62e2645.js","assets/index.468860c1.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.65e22864.js","assets/ContentLayout.8958779c.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.6ce6d75b.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.191e76dc.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.f535372c.js"),["assets/RequirementsEditor.f535372c.js","assets/ContentLayout.8958779c.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/CrudView.f924adbe.js","assets/router.c4b1a62a.js","assets/gateway.71cfa7e0.js","assets/popupNotifcation.665cf3de.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/url.f6200731.js","assets/PhDotsThreeVertical.vue.ea49e956.js","assets/Badge.a891dd39.js","assets/index.df074fbc.js","assets/CrudView.57fcf015.css","assets/asyncComputed.191e76dc.js","assets/polling.991e4c94.js","assets/record.4a2ca5f6.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/colorHelpers.748474a2.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.9e8db976.js"),["assets/EnvVarsEditor.9e8db976.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/record.4a2ca5f6.js","assets/ContentLayout.8958779c.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.6b03ac17.js","assets/gateway.71cfa7e0.js","assets/popupNotifcation.665cf3de.js","assets/fetch.e53ff1ec.js","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.f924adbe.js","assets/router.c4b1a62a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/PhDotsThreeVertical.vue.ea49e956.js","assets/Badge.a891dd39.js","assets/index.df074fbc.js","assets/CrudView.57fcf015.css","assets/asyncComputed.191e76dc.js","assets/polling.991e4c94.js","assets/PhPencil.vue.1f5b6c40.js","assets/index.f8d21003.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.71d3d7be.js"),["assets/VSCodeConnection.71d3d7be.js","assets/ContentLayout.8958779c.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/polling.991e4c94.js","assets/index.df074fbc.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.fb46d0e9.js"),["assets/AccessControlEditor.fb46d0e9.js","assets/ContentLayout.8958779c.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.e53ff1ec.js","assets/record.4a2ca5f6.js","assets/repository.0c1e6358.js","assets/gateway.71cfa7e0.js","assets/popupNotifcation.665cf3de.js","assets/asyncComputed.191e76dc.js","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.4b042340.js","assets/PhArrowSquareOut.vue.62645478.js","assets/index.0539a432.js","assets/metadata.7d258527.js","assets/PhBug.vue.630872bb.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhKanban.vue.dc762eb8.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/index.f8d21003.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.bd00659d.js"),["assets/ProjectLogin.bd00659d.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.1348c8ce.js","assets/Logo.8a49d6d1.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/BaseLayout.e9a890f5.js","assets/BaseLayout.b7a1f19a.css","assets/index.0e1d650f.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js","assets/index.df074fbc.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/asyncComputed.191e76dc.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.cbe146a6.js"),["assets/FormEditor.cbe146a6.js","assets/api.41eade96.js","assets/fetch.e53ff1ec.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/metadata.7d258527.js","assets/PhBug.vue.630872bb.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhKanban.vue.dc762eb8.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/PlayerNavbar.12a9f13f.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/LoadingOutlined.9abbe449.js","assets/PhSignOut.vue.c3fbbfea.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.e9a890f5.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b8c1b059.js","assets/uuid.f697b1d3.js","assets/scripts.daf99622.js","assets/record.4a2ca5f6.js","assets/validations.ad2fdd5d.js","assets/string.893bd786.js","assets/PhCopy.vue.d6b0fbb3.js","assets/PhCopySimple.vue.797e720d.js","assets/PhCaretRight.vue.9a9d3d18.js","assets/Badge.a891dd39.js","assets/PhQuestion.vue.be18d1de.js","assets/workspaces.694ae8b0.js","assets/asyncComputed.191e76dc.js","assets/polling.991e4c94.js","assets/PhPencil.vue.1f5b6c40.js","assets/toggleHighContrast.ebca7e8f.js","assets/toggleHighContrast.30d77c87.css","assets/index.f8d21003.js","assets/Card.f62bb01b.js","assets/TabPane.bd8909f5.js","assets/SourceCode.3c014e90.css","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.a7eccc6f.js","assets/Login.vue_vue_type_script_setup_true_lang.1e0bc89d.js","assets/Logo.8a49d6d1.js","assets/Logo.03290bf7.css","assets/CircularLoading.de05aa1d.js","assets/CircularLoading.e156a2b0.css","assets/Login.4c023e5d.css","assets/Steps.482c713e.js","assets/index.3a772d5d.js","assets/Steps.4d03c6c1.css","assets/Watermark.d97b8985.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.c62e2645.js","assets/index.468860c1.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.62645478.js","assets/PhFlowArrow.vue.aa83ef51.js","assets/forms.470a06c8.js","assets/ThreadSelector.ba39682e.js","assets/index.cf6dec4e.js","assets/index.0539a432.js","assets/ThreadSelector.8aa77ab2.css","assets/index.df074fbc.js","assets/NavbarControls.8596092b.js","assets/CloseCircleOutlined.274bf032.js","assets/popupNotifcation.665cf3de.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/PhChats.vue.bd337a57.js","assets/NavbarControls.8216d9aa.css","assets/index.0e1d650f.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.0e58ff94.js"),["assets/JobEditor.0e58ff94.js","assets/BaseLayout.e9a890f5.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b8c1b059.js","assets/uuid.f697b1d3.js","assets/scripts.daf99622.js","assets/record.4a2ca5f6.js","assets/validations.ad2fdd5d.js","assets/string.893bd786.js","assets/PhCopy.vue.d6b0fbb3.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhCopySimple.vue.797e720d.js","assets/PhCaretRight.vue.9a9d3d18.js","assets/Badge.a891dd39.js","assets/PhBug.vue.630872bb.js","assets/PhQuestion.vue.be18d1de.js","assets/LoadingOutlined.9abbe449.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/asyncComputed.191e76dc.js","assets/polling.991e4c94.js","assets/PhPencil.vue.1f5b6c40.js","assets/toggleHighContrast.ebca7e8f.js","assets/toggleHighContrast.30d77c87.css","assets/index.f8d21003.js","assets/Card.f62bb01b.js","assets/TabPane.bd8909f5.js","assets/SourceCode.3c014e90.css","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.bf61dd2e.js","assets/index.df074fbc.js","assets/RunButton.vue_vue_type_script_setup_true_lang.f3eed74d.js","assets/NavbarControls.8596092b.js","assets/CloseCircleOutlined.274bf032.js","assets/popupNotifcation.665cf3de.js","assets/PhArrowSquareOut.vue.62645478.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/PhChats.vue.bd337a57.js","assets/NavbarControls.8216d9aa.css","assets/index.0e1d650f.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.d15f2d13.js"),["assets/HookEditor.d15f2d13.js","assets/BaseLayout.e9a890f5.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b8c1b059.js","assets/uuid.f697b1d3.js","assets/scripts.daf99622.js","assets/record.4a2ca5f6.js","assets/validations.ad2fdd5d.js","assets/string.893bd786.js","assets/PhCopy.vue.d6b0fbb3.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhCopySimple.vue.797e720d.js","assets/PhCaretRight.vue.9a9d3d18.js","assets/Badge.a891dd39.js","assets/PhBug.vue.630872bb.js","assets/PhQuestion.vue.be18d1de.js","assets/LoadingOutlined.9abbe449.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/asyncComputed.191e76dc.js","assets/polling.991e4c94.js","assets/PhPencil.vue.1f5b6c40.js","assets/toggleHighContrast.ebca7e8f.js","assets/toggleHighContrast.30d77c87.css","assets/index.f8d21003.js","assets/Card.f62bb01b.js","assets/TabPane.bd8909f5.js","assets/SourceCode.3c014e90.css","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f3eed74d.js","assets/api.41eade96.js","assets/fetch.e53ff1ec.js","assets/metadata.7d258527.js","assets/PhKanban.vue.dc762eb8.js","assets/PhWebhooksLogo.vue.428aafc2.js","assets/ThreadSelector.ba39682e.js","assets/index.cf6dec4e.js","assets/index.0539a432.js","assets/ThreadSelector.8aa77ab2.css","assets/index.b1af804b.js","assets/CollapsePanel.fb0ce49a.js","assets/index.df074fbc.js","assets/NavbarControls.8596092b.js","assets/CloseCircleOutlined.274bf032.js","assets/popupNotifcation.665cf3de.js","assets/PhArrowSquareOut.vue.62645478.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/PhChats.vue.bd337a57.js","assets/NavbarControls.8216d9aa.css","assets/index.0e1d650f.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.fe4fa7b3.js"),["assets/ScriptEditor.fe4fa7b3.js","assets/BaseLayout.e9a890f5.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b8c1b059.js","assets/uuid.f697b1d3.js","assets/scripts.daf99622.js","assets/record.4a2ca5f6.js","assets/validations.ad2fdd5d.js","assets/string.893bd786.js","assets/PhCopy.vue.d6b0fbb3.js","assets/PhCheckCircle.vue.9c3d269a.js","assets/PhCopySimple.vue.797e720d.js","assets/PhCaretRight.vue.9a9d3d18.js","assets/Badge.a891dd39.js","assets/PhBug.vue.630872bb.js","assets/PhQuestion.vue.be18d1de.js","assets/LoadingOutlined.9abbe449.js","assets/workspaces.694ae8b0.js","assets/workspaceStore.a1267983.js","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/asyncComputed.191e76dc.js","assets/polling.991e4c94.js","assets/PhPencil.vue.1f5b6c40.js","assets/toggleHighContrast.ebca7e8f.js","assets/toggleHighContrast.30d77c87.css","assets/index.f8d21003.js","assets/Card.f62bb01b.js","assets/TabPane.bd8909f5.js","assets/SourceCode.3c014e90.css","assets/SaveButton.5825e8e8.js","assets/UnsavedChangesHandler.bf9ec85c.js","assets/ExclamationCircleOutlined.6d07621c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.f3eed74d.js","assets/ThreadSelector.ba39682e.js","assets/index.cf6dec4e.js","assets/index.0539a432.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.8596092b.js","assets/CloseCircleOutlined.274bf032.js","assets/index.df074fbc.js","assets/popupNotifcation.665cf3de.js","assets/PhArrowSquareOut.vue.62645478.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js","assets/BookOutlined.35b2fa4e.js","assets/PhChats.vue.bd337a57.js","assets/NavbarControls.8216d9aa.css","assets/index.0e1d650f.js","assets/index.ef68bf38.js","assets/Avatar.c531648d.js","assets/CollapsePanel.fb0ce49a.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.690165c5.js"),["assets/App.690165c5.js","assets/App.vue_vue_type_style_index_0_lang.331cca3d.js","assets/workspaceStore.a1267983.js","assets/vue-router.6860ceb3.js","assets/vue-router.d7fcf385.css","assets/url.f6200731.js","assets/colorHelpers.748474a2.js","assets/PlayerConfigProvider.c62e2645.js","assets/index.468860c1.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.a46590fa.js.map
