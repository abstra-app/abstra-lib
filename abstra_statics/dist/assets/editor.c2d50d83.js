var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.69927c79.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.91aae28d.js";import{a as ae}from"./asyncComputed.79783f87.js";import"./url.35d2aa0d.js";import"./colorHelpers.d6e31d7c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="90725386-f28b-4d72-adfc-7045b8fc9926",o._sentryDebugIdIdentifier="sentry-dbid-90725386-f28b-4d72-adfc-7045b8fc9926")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"324339db8561256da6b75aa4af68a1b5caa422bf",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.0fc17a3d.js"),["assets/Home.0fc17a3d.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.a3dd9531.js"),["assets/Workspace.a3dd9531.js","assets/BaseLayout.5d5d7d70.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.deaa8b47.js","assets/NavbarControls.52907d54.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/CloseCircleOutlined.163391c5.js","assets/index.191b1ac9.js","assets/index.b5a1d35d.js","assets/workspaces.4d9db1ac.js","assets/record.2ebc220e.js","assets/popupNotifcation.e0f791bf.js","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/PhChats.vue.dcaf82ec.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.eab224eb.js","assets/Logo.aeae0c5f.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.ec68ba68.js","assets/PhCaretRight.vue.b777532b.js","assets/PhFlowArrow.vue.62fe728e.js","assets/PhKanban.vue.822abbd2.js","assets/index.33934d7c.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js","assets/asyncComputed.79783f87.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.b9b31b6a.js"),["assets/Stages.b9b31b6a.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.c29fccbf.js","assets/ContentLayout.ee57a545.css","assets/CrudView.eac7e710.js","assets/router.9b93c9f2.js","assets/gateway.f9464efe.js","assets/popupNotifcation.e0f791bf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/url.35d2aa0d.js","assets/PhDotsThreeVertical.vue.cbff453d.js","assets/Badge.353bc515.js","assets/index.b5a1d35d.js","assets/CrudView.57fcf015.css","assets/ant-design.bf95effb.js","assets/asyncComputed.79783f87.js","assets/string.d437e31e.js","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/forms.5bbf2b10.js","assets/record.2ebc220e.js","assets/scripts.a4b07132.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/colorHelpers.d6e31d7c.js","assets/index.191b1ac9.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/validations.6f8199c0.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.08fd3de6.js"),["assets/WorkflowEditor.08fd3de6.js","assets/api.400384dd.js","assets/fetch.d6c04db5.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/metadata.5dca74eb.js","assets/PhBug.vue.c1f0fc08.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhKanban.vue.822abbd2.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/Workflow.bd329b02.js","assets/PhArrowCounterClockwise.vue.97b3ba0a.js","assets/validations.6f8199c0.js","assets/string.d437e31e.js","assets/uuid.f2ff8f57.js","assets/index.16a85b2e.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/record.2ebc220e.js","assets/polling.aa814f74.js","assets/index.51750a64.js","assets/Badge.353bc515.js","assets/PhArrowDown.vue.320be2ef.js","assets/Workflow.c1addbc6.css","assets/asyncComputed.79783f87.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.7cf27086.js","assets/WorkflowEditor.bb12f104.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.f2ccaf3c.js"),["assets/WorkflowThreads.f2ccaf3c.js","assets/api.400384dd.js","assets/fetch.d6c04db5.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/metadata.5dca74eb.js","assets/PhBug.vue.c1f0fc08.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhKanban.vue.822abbd2.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/ContentLayout.c29fccbf.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.df9de135.js","assets/polling.aa814f74.js","assets/asyncComputed.79783f87.js","assets/PhQuestion.vue.4024aef2.js","assets/ant-design.bf95effb.js","assets/index.b5a1d35d.js","assets/index.21237044.js","assets/index.fd33802a.js","assets/CollapsePanel.9b20aac1.js","assets/index.7cf27086.js","assets/index.2071a893.js","assets/Badge.353bc515.js","assets/PhArrowCounterClockwise.vue.97b3ba0a.js","assets/Workflow.bd329b02.js","assets/validations.6f8199c0.js","assets/string.d437e31e.js","assets/uuid.f2ff8f57.js","assets/index.16a85b2e.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/record.2ebc220e.js","assets/index.51750a64.js","assets/PhArrowDown.vue.320be2ef.js","assets/Workflow.c1addbc6.css","assets/Card.6acb8ef5.js","assets/TabPane.6cfaa3a3.js","assets/LoadingOutlined.d7c2d773.js","assets/DeleteOutlined.670e5899.js","assets/PhDownloadSimple.vue.dd70a17f.js","assets/utils.2da3140e.js","assets/LoadingContainer.b1ca6d73.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.b8d360f9.js"),["assets/PreferencesEditor.b8d360f9.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/record.2ebc220e.js","assets/PlayerNavbar.0f3f5991.js","assets/metadata.5dca74eb.js","assets/PhBug.vue.c1f0fc08.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhKanban.vue.822abbd2.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/LoadingOutlined.d7c2d773.js","assets/PhSignOut.vue.deaa8b47.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.e1e23846.js","assets/index.16a85b2e.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.f43481c2.js","assets/ContentLayout.c29fccbf.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.b1ca6d73.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.79783f87.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.24ca5626.js"),["assets/RequirementsEditor.24ca5626.js","assets/ContentLayout.c29fccbf.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/CrudView.eac7e710.js","assets/router.9b93c9f2.js","assets/gateway.f9464efe.js","assets/popupNotifcation.e0f791bf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/url.35d2aa0d.js","assets/PhDotsThreeVertical.vue.cbff453d.js","assets/Badge.353bc515.js","assets/index.b5a1d35d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.79783f87.js","assets/polling.aa814f74.js","assets/record.2ebc220e.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/colorHelpers.d6e31d7c.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.041bcedd.js"),["assets/EnvVarsEditor.041bcedd.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/record.2ebc220e.js","assets/ContentLayout.c29fccbf.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.82a6b93d.js","assets/gateway.f9464efe.js","assets/popupNotifcation.e0f791bf.js","assets/fetch.d6c04db5.js","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.eac7e710.js","assets/router.9b93c9f2.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/PhDotsThreeVertical.vue.cbff453d.js","assets/Badge.353bc515.js","assets/index.b5a1d35d.js","assets/CrudView.57fcf015.css","assets/asyncComputed.79783f87.js","assets/polling.aa814f74.js","assets/PhPencil.vue.4e2a8ff9.js","assets/index.191b1ac9.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.1db9a5d8.js"),["assets/VSCodeConnection.1db9a5d8.js","assets/ContentLayout.c29fccbf.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/polling.aa814f74.js","assets/index.b5a1d35d.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.28c72cc6.js"),["assets/AccessControlEditor.28c72cc6.js","assets/ContentLayout.c29fccbf.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.d6c04db5.js","assets/record.2ebc220e.js","assets/repository.2c84a28f.js","assets/gateway.f9464efe.js","assets/popupNotifcation.e0f791bf.js","assets/asyncComputed.79783f87.js","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.987e8e6b.js","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/index.7cf27086.js","assets/metadata.5dca74eb.js","assets/PhBug.vue.c1f0fc08.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhKanban.vue.822abbd2.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/index.191b1ac9.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.8f081d11.js"),["assets/ProjectLogin.8f081d11.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.eab224eb.js","assets/Logo.aeae0c5f.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/BaseLayout.5d5d7d70.js","assets/BaseLayout.b7a1f19a.css","assets/index.33934d7c.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js","assets/index.b5a1d35d.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/asyncComputed.79783f87.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.c2c62558.js"),["assets/FormEditor.c2c62558.js","assets/api.400384dd.js","assets/fetch.d6c04db5.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/metadata.5dca74eb.js","assets/PhBug.vue.c1f0fc08.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhKanban.vue.822abbd2.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/PlayerNavbar.0f3f5991.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/LoadingOutlined.d7c2d773.js","assets/PhSignOut.vue.deaa8b47.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.5d5d7d70.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.ec0b2e97.js","assets/uuid.f2ff8f57.js","assets/scripts.a4b07132.js","assets/record.2ebc220e.js","assets/validations.6f8199c0.js","assets/string.d437e31e.js","assets/PhCopy.vue.a27f96ab.js","assets/PhCopySimple.vue.eec5aed1.js","assets/PhCaretRight.vue.b777532b.js","assets/Badge.353bc515.js","assets/PhQuestion.vue.4024aef2.js","assets/workspaces.4d9db1ac.js","assets/asyncComputed.79783f87.js","assets/polling.aa814f74.js","assets/PhPencil.vue.4e2a8ff9.js","assets/toggleHighContrast.92aa449d.js","assets/toggleHighContrast.30d77c87.css","assets/index.191b1ac9.js","assets/Card.6acb8ef5.js","assets/TabPane.6cfaa3a3.js","assets/SourceCode.ec7ff540.css","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.33a2de1c.js","assets/Login.vue_vue_type_script_setup_true_lang.3f69b1ef.js","assets/Logo.aeae0c5f.js","assets/Logo.03290bf7.css","assets/CircularLoading.1ea857c2.js","assets/CircularLoading.e156a2b0.css","assets/Login.4c023e5d.css","assets/Steps.d4c10b52.js","assets/index.a3fd2170.js","assets/Steps.4d03c6c1.css","assets/Watermark.39bb92dc.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.e1e23846.js","assets/index.16a85b2e.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/PhFlowArrow.vue.62fe728e.js","assets/forms.5bbf2b10.js","assets/ThreadSelector.3e2fdf1a.js","assets/index.21237044.js","assets/index.7cf27086.js","assets/ThreadSelector.8aa77ab2.css","assets/index.b5a1d35d.js","assets/NavbarControls.52907d54.js","assets/CloseCircleOutlined.163391c5.js","assets/popupNotifcation.e0f791bf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/PhChats.vue.dcaf82ec.js","assets/NavbarControls.8216d9aa.css","assets/index.33934d7c.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.760a1ab8.js"),["assets/JobEditor.760a1ab8.js","assets/BaseLayout.5d5d7d70.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.ec0b2e97.js","assets/uuid.f2ff8f57.js","assets/scripts.a4b07132.js","assets/record.2ebc220e.js","assets/validations.6f8199c0.js","assets/string.d437e31e.js","assets/PhCopy.vue.a27f96ab.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhCopySimple.vue.eec5aed1.js","assets/PhCaretRight.vue.b777532b.js","assets/Badge.353bc515.js","assets/PhBug.vue.c1f0fc08.js","assets/PhQuestion.vue.4024aef2.js","assets/LoadingOutlined.d7c2d773.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/asyncComputed.79783f87.js","assets/polling.aa814f74.js","assets/PhPencil.vue.4e2a8ff9.js","assets/toggleHighContrast.92aa449d.js","assets/toggleHighContrast.30d77c87.css","assets/index.191b1ac9.js","assets/Card.6acb8ef5.js","assets/TabPane.6cfaa3a3.js","assets/SourceCode.ec7ff540.css","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.329ab2fd.js","assets/index.b5a1d35d.js","assets/RunButton.vue_vue_type_script_setup_true_lang.7fce3615.js","assets/NavbarControls.52907d54.js","assets/CloseCircleOutlined.163391c5.js","assets/popupNotifcation.e0f791bf.js","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/PhChats.vue.dcaf82ec.js","assets/NavbarControls.8216d9aa.css","assets/index.33934d7c.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.5935a37c.js"),["assets/HookEditor.5935a37c.js","assets/BaseLayout.5d5d7d70.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.ec0b2e97.js","assets/uuid.f2ff8f57.js","assets/scripts.a4b07132.js","assets/record.2ebc220e.js","assets/validations.6f8199c0.js","assets/string.d437e31e.js","assets/PhCopy.vue.a27f96ab.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhCopySimple.vue.eec5aed1.js","assets/PhCaretRight.vue.b777532b.js","assets/Badge.353bc515.js","assets/PhBug.vue.c1f0fc08.js","assets/PhQuestion.vue.4024aef2.js","assets/LoadingOutlined.d7c2d773.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/asyncComputed.79783f87.js","assets/polling.aa814f74.js","assets/PhPencil.vue.4e2a8ff9.js","assets/toggleHighContrast.92aa449d.js","assets/toggleHighContrast.30d77c87.css","assets/index.191b1ac9.js","assets/Card.6acb8ef5.js","assets/TabPane.6cfaa3a3.js","assets/SourceCode.ec7ff540.css","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7fce3615.js","assets/api.400384dd.js","assets/fetch.d6c04db5.js","assets/metadata.5dca74eb.js","assets/PhKanban.vue.822abbd2.js","assets/PhWebhooksLogo.vue.634ddca9.js","assets/ThreadSelector.3e2fdf1a.js","assets/index.21237044.js","assets/index.7cf27086.js","assets/ThreadSelector.8aa77ab2.css","assets/index.f89f0675.js","assets/CollapsePanel.9b20aac1.js","assets/index.b5a1d35d.js","assets/NavbarControls.52907d54.js","assets/CloseCircleOutlined.163391c5.js","assets/popupNotifcation.e0f791bf.js","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/PhChats.vue.dcaf82ec.js","assets/NavbarControls.8216d9aa.css","assets/index.33934d7c.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.14422544.js"),["assets/ScriptEditor.14422544.js","assets/BaseLayout.5d5d7d70.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.ec0b2e97.js","assets/uuid.f2ff8f57.js","assets/scripts.a4b07132.js","assets/record.2ebc220e.js","assets/validations.6f8199c0.js","assets/string.d437e31e.js","assets/PhCopy.vue.a27f96ab.js","assets/PhCheckCircle.vue.a78c3ad5.js","assets/PhCopySimple.vue.eec5aed1.js","assets/PhCaretRight.vue.b777532b.js","assets/Badge.353bc515.js","assets/PhBug.vue.c1f0fc08.js","assets/PhQuestion.vue.4024aef2.js","assets/LoadingOutlined.d7c2d773.js","assets/workspaces.4d9db1ac.js","assets/workspaceStore.91aae28d.js","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/asyncComputed.79783f87.js","assets/polling.aa814f74.js","assets/PhPencil.vue.4e2a8ff9.js","assets/toggleHighContrast.92aa449d.js","assets/toggleHighContrast.30d77c87.css","assets/index.191b1ac9.js","assets/Card.6acb8ef5.js","assets/TabPane.6cfaa3a3.js","assets/SourceCode.ec7ff540.css","assets/SaveButton.e3e3dd2f.js","assets/UnsavedChangesHandler.f1cd6a18.js","assets/ExclamationCircleOutlined.ef2aceb1.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7fce3615.js","assets/ThreadSelector.3e2fdf1a.js","assets/index.21237044.js","assets/index.7cf27086.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.52907d54.js","assets/CloseCircleOutlined.163391c5.js","assets/index.b5a1d35d.js","assets/popupNotifcation.e0f791bf.js","assets/PhArrowSquareOut.vue.bc5ec086.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js","assets/BookOutlined.e0e8a4cc.js","assets/PhChats.vue.dcaf82ec.js","assets/NavbarControls.8216d9aa.css","assets/index.33934d7c.js","assets/index.215dcd7b.js","assets/Avatar.28a68ac4.js","assets/CollapsePanel.9b20aac1.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.ca37484f.js"),["assets/App.ca37484f.js","assets/App.vue_vue_type_style_index_0_lang.db4318f4.js","assets/workspaceStore.91aae28d.js","assets/vue-router.69927c79.js","assets/vue-router.d7fcf385.css","assets/url.35d2aa0d.js","assets/colorHelpers.d6e31d7c.js","assets/PlayerConfigProvider.e1e23846.js","assets/index.16a85b2e.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.c2d50d83.js.map
