var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.3f5115ec.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.806822c0.js";import{a as ae}from"./asyncComputed.683ad793.js";import"./url.0928bf28.js";import"./colorHelpers.abcbbc6d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="86cb8aa0-61ec-42eb-808d-dfda2ea17058",o._sentryDebugIdIdentifier="sentry-dbid-86cb8aa0-61ec-42eb-808d-dfda2ea17058")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"d481c60e35f14d4cb4bd65f3ce5e87fbb28b2934",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.bb9f959d.js"),["assets/Home.bb9f959d.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.5e4474ae.js"),["assets/Workspace.5e4474ae.js","assets/BaseLayout.9fb92f72.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.a4428c7c.js","assets/NavbarControls.5931198f.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/CloseCircleOutlined.7e9d3697.js","assets/index.c891f878.js","assets/index.bd2d6959.js","assets/workspaces.c7a6fa24.js","assets/record.95dbab99.js","assets/popupNotifcation.9fa0d68a.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/PhChats.vue.2a0bcaf7.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.883d0b75.js","assets/Logo.c917fe19.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.eb58d0f8.js","assets/PhCaretRight.vue.7ceecb67.js","assets/PhFlowArrow.vue.17584dae.js","assets/PhKanban.vue.62759052.js","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/Avatar.ad043852.js","assets/asyncComputed.683ad793.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.ac7c1904.js"),["assets/Stages.ac7c1904.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/CrudView.1480e254.js","assets/router.6a262d58.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/ant-design.014e25fe.js","assets/asyncComputed.683ad793.js","assets/string.2d3c90de.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/forms.32213b77.js","assets/record.95dbab99.js","assets/scripts.db2b9777.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/colorHelpers.abcbbc6d.js","assets/index.c891f878.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/validations.2dcc4839.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.a6de69ae.js"),["assets/WorkflowEditor.a6de69ae.js","assets/api.dd9f0e08.js","assets/fetch.2f53f269.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/metadata.6355bfa8.js","assets/PhBug.vue.32973c8c.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhKanban.vue.62759052.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/Workflow.41882f71.js","assets/PhArrowCounterClockwise.vue.7bed9e0a.js","assets/validations.2dcc4839.js","assets/string.2d3c90de.js","assets/uuid.8fbb8d0c.js","assets/index.704ae890.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/record.95dbab99.js","assets/polling.73906994.js","assets/index.421b9386.js","assets/Badge.4fcefc44.js","assets/PhArrowDown.vue.85a5c3e4.js","assets/Workflow.c1addbc6.css","assets/asyncComputed.683ad793.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.3cd7a2fc.js","assets/WorkflowEditor.da991a18.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.e6446dba.js"),["assets/WorkflowThreads.e6446dba.js","assets/api.dd9f0e08.js","assets/fetch.2f53f269.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/metadata.6355bfa8.js","assets/PhBug.vue.32973c8c.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhKanban.vue.62759052.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.1e62a59a.js","assets/polling.73906994.js","assets/asyncComputed.683ad793.js","assets/PhQuestion.vue.2dcd61b3.js","assets/ant-design.014e25fe.js","assets/index.bd2d6959.js","assets/index.f4c90fb0.js","assets/index.717d9352.js","assets/CollapsePanel.d8973f7d.js","assets/index.3cd7a2fc.js","assets/index.d4a05fe7.js","assets/Badge.4fcefc44.js","assets/PhArrowCounterClockwise.vue.7bed9e0a.js","assets/Workflow.41882f71.js","assets/validations.2dcc4839.js","assets/string.2d3c90de.js","assets/uuid.8fbb8d0c.js","assets/index.704ae890.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/record.95dbab99.js","assets/index.421b9386.js","assets/PhArrowDown.vue.85a5c3e4.js","assets/Workflow.c1addbc6.css","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/LoadingOutlined.37a8548d.js","assets/DeleteOutlined.f639e474.js","assets/PhDownloadSimple.vue.baa3f604.js","assets/utils.4ece8f44.js","assets/LoadingContainer.618def4f.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.8364dd58.js"),["assets/PreferencesEditor.8364dd58.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/record.95dbab99.js","assets/PlayerNavbar.5a129785.js","assets/metadata.6355bfa8.js","assets/PhBug.vue.32973c8c.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhKanban.vue.62759052.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/LoadingOutlined.37a8548d.js","assets/PhSignOut.vue.a4428c7c.js","assets/index.6197263d.js","assets/Avatar.ad043852.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.a07f3ab9.js","assets/index.704ae890.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.cdbd5ae4.js","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.618def4f.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.683ad793.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.1626aa21.js"),["assets/RequirementsEditor.1626aa21.js","assets/ContentLayout.41b47c4f.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/CrudView.1480e254.js","assets/router.6a262d58.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/url.0928bf28.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/record.95dbab99.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/colorHelpers.abcbbc6d.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.8a9a52ed.js"),["assets/EnvVarsEditor.8a9a52ed.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/record.95dbab99.js","assets/ContentLayout.41b47c4f.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.ab8d9247.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/fetch.2f53f269.js","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.1480e254.js","assets/router.6a262d58.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/PhDotsThreeVertical.vue.4fe6c52c.js","assets/Badge.4fcefc44.js","assets/index.bd2d6959.js","assets/CrudView.2fb0614c.css","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/PhPencil.vue.b7c8f283.js","assets/index.c891f878.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.62cd722c.js"),["assets/VSCodeConnection.62cd722c.js","assets/ContentLayout.41b47c4f.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/polling.73906994.js","assets/index.bd2d6959.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.107421a2.js"),["assets/AccessControlEditor.107421a2.js","assets/ContentLayout.41b47c4f.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.2f53f269.js","assets/record.95dbab99.js","assets/repository.b2d70054.js","assets/gateway.933d138e.js","assets/popupNotifcation.9fa0d68a.js","assets/asyncComputed.683ad793.js","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.4275f26a.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/index.3cd7a2fc.js","assets/metadata.6355bfa8.js","assets/PhBug.vue.32973c8c.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhKanban.vue.62759052.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/index.c891f878.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.6e77b3d1.js"),["assets/ProjectLogin.6e77b3d1.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.883d0b75.js","assets/Logo.c917fe19.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/BaseLayout.9fb92f72.js","assets/BaseLayout.b7a1f19a.css","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/Avatar.ad043852.js","assets/index.bd2d6959.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/asyncComputed.683ad793.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.1859ce58.js"),["assets/FormEditor.1859ce58.js","assets/api.dd9f0e08.js","assets/fetch.2f53f269.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/metadata.6355bfa8.js","assets/PhBug.vue.32973c8c.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhKanban.vue.62759052.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/PlayerNavbar.5a129785.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/LoadingOutlined.37a8548d.js","assets/PhSignOut.vue.a4428c7c.js","assets/index.6197263d.js","assets/Avatar.ad043852.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.9fb92f72.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.0e4505fb.js","assets/uuid.8fbb8d0c.js","assets/scripts.db2b9777.js","assets/record.95dbab99.js","assets/validations.2dcc4839.js","assets/string.2d3c90de.js","assets/PhCopy.vue.552da6a9.js","assets/PhCopySimple.vue.1a44d76e.js","assets/PhCaretRight.vue.7ceecb67.js","assets/Badge.4fcefc44.js","assets/PhQuestion.vue.2dcd61b3.js","assets/workspaces.c7a6fa24.js","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/PhPencil.vue.b7c8f283.js","assets/toggleHighContrast.bcb9a504.js","assets/toggleHighContrast.30d77c87.css","assets/index.c891f878.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/SourceCode.f522b538.css","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.6b696cd8.js","assets/Login.vue_vue_type_script_setup_true_lang.9fce75f3.js","assets/Logo.c917fe19.js","assets/Logo.03290bf7.css","assets/CircularLoading.325bd8a2.js","assets/CircularLoading.e156a2b0.css","assets/Login.8f8d038b.css","assets/Steps.e67ee71d.js","assets/index.230a4858.js","assets/Steps.4d03c6c1.css","assets/Watermark.1c85210d.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.a07f3ab9.js","assets/index.704ae890.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.501c1834.js","assets/PhFlowArrow.vue.17584dae.js","assets/forms.32213b77.js","assets/ThreadSelector.973f4a67.js","assets/index.f4c90fb0.js","assets/index.3cd7a2fc.js","assets/ThreadSelector.8aa77ab2.css","assets/index.bd2d6959.js","assets/NavbarControls.5931198f.js","assets/CloseCircleOutlined.7e9d3697.js","assets/popupNotifcation.9fa0d68a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/PhChats.vue.2a0bcaf7.js","assets/NavbarControls.8216d9aa.css","assets/index.85ba4ef4.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.89ac1791.js"),["assets/JobEditor.89ac1791.js","assets/BaseLayout.9fb92f72.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.0e4505fb.js","assets/uuid.8fbb8d0c.js","assets/scripts.db2b9777.js","assets/record.95dbab99.js","assets/validations.2dcc4839.js","assets/string.2d3c90de.js","assets/PhCopy.vue.552da6a9.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhCopySimple.vue.1a44d76e.js","assets/PhCaretRight.vue.7ceecb67.js","assets/Badge.4fcefc44.js","assets/PhBug.vue.32973c8c.js","assets/PhQuestion.vue.2dcd61b3.js","assets/LoadingOutlined.37a8548d.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/PhPencil.vue.b7c8f283.js","assets/toggleHighContrast.bcb9a504.js","assets/toggleHighContrast.30d77c87.css","assets/index.c891f878.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/SourceCode.f522b538.css","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.b7dea6b8.js","assets/index.bd2d6959.js","assets/RunButton.vue_vue_type_script_setup_true_lang.eb3c83b6.js","assets/NavbarControls.5931198f.js","assets/CloseCircleOutlined.7e9d3697.js","assets/popupNotifcation.9fa0d68a.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/PhChats.vue.2a0bcaf7.js","assets/NavbarControls.8216d9aa.css","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/Avatar.ad043852.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.90e66117.js"),["assets/HookEditor.90e66117.js","assets/BaseLayout.9fb92f72.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.0e4505fb.js","assets/uuid.8fbb8d0c.js","assets/scripts.db2b9777.js","assets/record.95dbab99.js","assets/validations.2dcc4839.js","assets/string.2d3c90de.js","assets/PhCopy.vue.552da6a9.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhCopySimple.vue.1a44d76e.js","assets/PhCaretRight.vue.7ceecb67.js","assets/Badge.4fcefc44.js","assets/PhBug.vue.32973c8c.js","assets/PhQuestion.vue.2dcd61b3.js","assets/LoadingOutlined.37a8548d.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/PhPencil.vue.b7c8f283.js","assets/toggleHighContrast.bcb9a504.js","assets/toggleHighContrast.30d77c87.css","assets/index.c891f878.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/SourceCode.f522b538.css","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.eb3c83b6.js","assets/api.dd9f0e08.js","assets/fetch.2f53f269.js","assets/metadata.6355bfa8.js","assets/PhKanban.vue.62759052.js","assets/PhWebhooksLogo.vue.472ed7ac.js","assets/ThreadSelector.973f4a67.js","assets/index.f4c90fb0.js","assets/index.3cd7a2fc.js","assets/ThreadSelector.8aa77ab2.css","assets/index.b19b313c.js","assets/CollapsePanel.d8973f7d.js","assets/index.bd2d6959.js","assets/NavbarControls.5931198f.js","assets/CloseCircleOutlined.7e9d3697.js","assets/popupNotifcation.9fa0d68a.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/PhChats.vue.2a0bcaf7.js","assets/NavbarControls.8216d9aa.css","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/Avatar.ad043852.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.51517556.js"),["assets/ScriptEditor.51517556.js","assets/BaseLayout.9fb92f72.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.0e4505fb.js","assets/uuid.8fbb8d0c.js","assets/scripts.db2b9777.js","assets/record.95dbab99.js","assets/validations.2dcc4839.js","assets/string.2d3c90de.js","assets/PhCopy.vue.552da6a9.js","assets/PhCheckCircle.vue.43552d09.js","assets/PhCopySimple.vue.1a44d76e.js","assets/PhCaretRight.vue.7ceecb67.js","assets/Badge.4fcefc44.js","assets/PhBug.vue.32973c8c.js","assets/PhQuestion.vue.2dcd61b3.js","assets/LoadingOutlined.37a8548d.js","assets/workspaces.c7a6fa24.js","assets/workspaceStore.806822c0.js","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/asyncComputed.683ad793.js","assets/polling.73906994.js","assets/PhPencil.vue.b7c8f283.js","assets/toggleHighContrast.bcb9a504.js","assets/toggleHighContrast.30d77c87.css","assets/index.c891f878.js","assets/Card.50110fb3.js","assets/TabPane.7b48643d.js","assets/SourceCode.f522b538.css","assets/SaveButton.bc31efb5.js","assets/UnsavedChangesHandler.4567dd30.js","assets/ExclamationCircleOutlined.51d4fa11.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.eb3c83b6.js","assets/ThreadSelector.973f4a67.js","assets/index.f4c90fb0.js","assets/index.3cd7a2fc.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.5931198f.js","assets/CloseCircleOutlined.7e9d3697.js","assets/index.bd2d6959.js","assets/popupNotifcation.9fa0d68a.js","assets/PhArrowSquareOut.vue.501c1834.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8e467faf.js","assets/BookOutlined.2b1f33f5.js","assets/PhChats.vue.2a0bcaf7.js","assets/NavbarControls.8216d9aa.css","assets/index.85ba4ef4.js","assets/index.6197263d.js","assets/Avatar.ad043852.js","assets/CollapsePanel.d8973f7d.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.5d76f7fc.js"),["assets/App.5d76f7fc.js","assets/App.vue_vue_type_style_index_0_lang.c06ccd33.js","assets/workspaceStore.806822c0.js","assets/vue-router.3f5115ec.js","assets/vue-router.d7fcf385.css","assets/url.0928bf28.js","assets/colorHelpers.abcbbc6d.js","assets/PlayerConfigProvider.a07f3ab9.js","assets/index.704ae890.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.8a5de8da.js.map
