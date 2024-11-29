var T=Object.defineProperty;var k=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(k(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as U,u as C,A as x,l as f,e as w,f as g,g as E,h as S,i as $,_ as a,j as W,k as N,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./index.0f630b70.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.61224c34.js";import{a as ae}from"./asyncComputed.2bec113c.js";import"./url.90c69b58.js";import"./colorHelpers.13000dc5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="4f50eb5a-3452-4cfa-9557-f23dd1af7d36",o._sentryDebugIdIdentifier="sentry-dbid-4f50eb5a-3452-4cfa-9557-f23dd1af7d36")}catch{}})();const re={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},ne=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,r)=>{const l=I("RouterView");return V(),j(C(x),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",re,[U(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const r=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!r.ok)throw new Error("Failed to fix");return _.refetch(),r.json()}}const L=new se,_=ae(async()=>(await L.check()).map(e=>new le(e)));class ie{constructor(e,t){n(this,"name");n(this,"label");n(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await L.fix(this.ruleName,this.name)}}class ce{constructor(e,t){n(this,"label");n(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(r=>new ie(r,t))}}class le{constructor(e){n(this,"name");n(this,"label");n(this,"type");n(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var r;const t=(r=_.result.value)==null?void 0:r.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,r=0){window.Intercom?window.Intercom(e,t):r<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;n(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"11b21a1679e5e8fe6906f89f58039f3589fc7cb8",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=w(null),t=w(null),r=g(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=g(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),b=async()=>{!r.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:y,deleteLogin:b,loginInfo:e,cloudProject:t,isLogged:r,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=S({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.6f5d0304.js"),["assets/Home.6f5d0304.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/Home.ad31131b.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.c0c1fab2.js"),["assets/Workspace.c0c1fab2.js","assets/BaseLayout.a58db6a0.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.8e112f6f.js","assets/NavbarControls.8a687123.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/CloseCircleOutlined.176797bf.js","assets/index.6834cc58.js","assets/index.1eaf0cd2.js","assets/workspaces.ffad515d.js","assets/record.f729e500.js","assets/popupNotifcation.dd76a56c.js","assets/PhArrowSquareOut.vue.da88caf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/PhChats.vue.5994232f.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.7d96bf27.js","assets/Logo.e9eed733.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.4f9ec4ed.js","assets/PhCaretRight.vue.5f7cc596.js","assets/PhFlowArrow.vue.318b4067.js","assets/PhKanban.vue.f3963316.js","assets/index.cc0715fd.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js","assets/asyncComputed.2bec113c.js","assets/Workspace.1d39102f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.f5793c0f.js"),["assets/Stages.f5793c0f.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/ContentLayout.1036e4eb.js","assets/ContentLayout.ee57a545.css","assets/CrudView.408a4461.js","assets/router.0f31f3f1.js","assets/gateway.50cd3949.js","assets/popupNotifcation.dd76a56c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/url.90c69b58.js","assets/PhDotsThreeVertical.vue.e2e73559.js","assets/Badge.ada44968.js","assets/index.1eaf0cd2.js","assets/CrudView.c80c8ede.css","assets/ant-design.7d916c63.js","assets/asyncComputed.2bec113c.js","assets/string.532e13bb.js","assets/PhArrowSquareOut.vue.da88caf0.js","assets/forms.3d1e745e.js","assets/record.f729e500.js","assets/scripts.d1bc2b2c.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/colorHelpers.13000dc5.js","assets/index.6834cc58.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/validations.d503dc27.js","assets/Stages.f68d77c7.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.3155be98.js"),["assets/WorkflowEditor.3155be98.js","assets/api.a9b631fd.js","assets/fetch.04be8a9e.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/metadata.cfd15460.js","assets/PhBug.vue.4c6c1483.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhKanban.vue.f3963316.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/Workflow.b4c39f1e.js","assets/PhArrowCounterClockwise.vue.9318428b.js","assets/validations.d503dc27.js","assets/string.532e13bb.js","assets/uuid.035607ce.js","assets/index.9404ab63.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/record.f729e500.js","assets/polling.e2209103.js","assets/index.4a75ec96.js","assets/Badge.ada44968.js","assets/PhArrowDown.vue.36042b0c.js","assets/Workflow.0e84f462.css","assets/asyncComputed.2bec113c.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.9bf9f6e2.js","assets/WorkflowEditor.adc8a023.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.80d7801e.js"),["assets/WorkflowThreads.80d7801e.js","assets/api.a9b631fd.js","assets/fetch.04be8a9e.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/metadata.cfd15460.js","assets/PhBug.vue.4c6c1483.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhKanban.vue.f3963316.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/ContentLayout.1036e4eb.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.04789649.js","assets/polling.e2209103.js","assets/asyncComputed.2bec113c.js","assets/PhQuestion.vue.5cd37a6e.js","assets/ant-design.7d916c63.js","assets/index.1eaf0cd2.js","assets/index.b8ac1bae.js","assets/index.ecdf0bc9.js","assets/CollapsePanel.4f375646.js","assets/index.9bf9f6e2.js","assets/index.e0287723.js","assets/Badge.ada44968.js","assets/PhArrowCounterClockwise.vue.9318428b.js","assets/Workflow.b4c39f1e.js","assets/validations.d503dc27.js","assets/string.532e13bb.js","assets/uuid.035607ce.js","assets/index.9404ab63.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/record.f729e500.js","assets/index.4a75ec96.js","assets/PhArrowDown.vue.36042b0c.js","assets/Workflow.0e84f462.css","assets/Card.2564e781.js","assets/TabPane.e38cb00d.js","assets/LoadingOutlined.5ed0afbe.js","assets/DeleteOutlined.c6f4d5ac.js","assets/PhDownloadSimple.vue.e40cfd6e.js","assets/utils.65c8b3c8.js","assets/LoadingContainer.844428d3.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.aec9e496.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.802b6363.js"),["assets/PreferencesEditor.802b6363.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/record.f729e500.js","assets/PlayerNavbar.936be03d.js","assets/metadata.cfd15460.js","assets/PhBug.vue.4c6c1483.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhKanban.vue.f3963316.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/LoadingOutlined.5ed0afbe.js","assets/PhSignOut.vue.8e112f6f.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js","assets/PlayerNavbar.bac3bd2c.css","assets/PlayerConfigProvider.0f52afbf.js","assets/index.9404ab63.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.85b60c0b.js","assets/ContentLayout.1036e4eb.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.844428d3.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.2bec113c.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.22324ae1.js"),["assets/RequirementsEditor.22324ae1.js","assets/ContentLayout.1036e4eb.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/CrudView.408a4461.js","assets/router.0f31f3f1.js","assets/gateway.50cd3949.js","assets/popupNotifcation.dd76a56c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/url.90c69b58.js","assets/PhDotsThreeVertical.vue.e2e73559.js","assets/Badge.ada44968.js","assets/index.1eaf0cd2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js","assets/record.f729e500.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/colorHelpers.13000dc5.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.a9011df0.js"),["assets/EnvVarsEditor.a9011df0.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/record.f729e500.js","assets/ContentLayout.1036e4eb.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.b42320dd.js","assets/gateway.50cd3949.js","assets/popupNotifcation.dd76a56c.js","assets/fetch.04be8a9e.js","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.408a4461.js","assets/router.0f31f3f1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/PhDotsThreeVertical.vue.e2e73559.js","assets/Badge.ada44968.js","assets/index.1eaf0cd2.js","assets/CrudView.c80c8ede.css","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js","assets/PhPencil.vue.10ddf5aa.js","assets/index.6834cc58.js"]),meta:{title:"Environment Variables"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.82f1cf30.js"),["assets/AccessControlEditor.82f1cf30.js","assets/ContentLayout.1036e4eb.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/ContentLayout.ee57a545.css","assets/fetch.04be8a9e.js","assets/record.f729e500.js","assets/repository.299ac630.js","assets/gateway.50cd3949.js","assets/popupNotifcation.dd76a56c.js","assets/asyncComputed.2bec113c.js","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.6329614b.js","assets/PhArrowSquareOut.vue.da88caf0.js","assets/index.9bf9f6e2.js","assets/metadata.cfd15460.js","assets/PhBug.vue.4c6c1483.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhKanban.vue.f3963316.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/index.6834cc58.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.3248c064.js"),["assets/ProjectLogin.3248c064.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.7d96bf27.js","assets/Logo.e9eed733.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/Logo.03290bf7.css","assets/BaseLayout.a58db6a0.js","assets/BaseLayout.b7a1f19a.css","assets/index.cc0715fd.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js","assets/index.1eaf0cd2.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/asyncComputed.2bec113c.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.526adfab.js"),["assets/FormEditor.526adfab.js","assets/api.a9b631fd.js","assets/fetch.04be8a9e.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/metadata.cfd15460.js","assets/PhBug.vue.4c6c1483.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhKanban.vue.f3963316.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/PlayerNavbar.936be03d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/LoadingOutlined.5ed0afbe.js","assets/PhSignOut.vue.8e112f6f.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js","assets/PlayerNavbar.bac3bd2c.css","assets/BaseLayout.a58db6a0.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.9daa510b.js","assets/uuid.035607ce.js","assets/scripts.d1bc2b2c.js","assets/record.f729e500.js","assets/validations.d503dc27.js","assets/string.532e13bb.js","assets/PhCopy.vue.5635ce6e.js","assets/PhCopySimple.vue.70fce83b.js","assets/PhCaretRight.vue.5f7cc596.js","assets/Badge.ada44968.js","assets/PhQuestion.vue.5cd37a6e.js","assets/workspaces.ffad515d.js","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js","assets/PhPencil.vue.10ddf5aa.js","assets/toggleHighContrast.2b784445.js","assets/toggleHighContrast.30d77c87.css","assets/index.6834cc58.js","assets/Card.2564e781.js","assets/TabPane.e38cb00d.js","assets/SourceCode.62d79c81.css","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.6178a0b4.js","assets/Login.vue_vue_type_script_setup_true_lang.a1b5912b.js","assets/Logo.e9eed733.js","assets/Logo.03290bf7.css","assets/CircularLoading.b256c752.js","assets/CircularLoading.1a558a0d.css","assets/index.9404ab63.js","assets/Login.28df3844.css","assets/Steps.9b32d2c9.js","assets/index.19d08faa.js","assets/Steps.4d03c6c1.css","assets/Watermark.2747e371.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.616c8292.css","assets/PlayerConfigProvider.0f52afbf.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.da88caf0.js","assets/PhFlowArrow.vue.318b4067.js","assets/forms.3d1e745e.js","assets/ThreadSelector.e753ca08.js","assets/index.b8ac1bae.js","assets/index.9bf9f6e2.js","assets/ThreadSelector.c38c4d8f.css","assets/index.1eaf0cd2.js","assets/NavbarControls.8a687123.js","assets/CloseCircleOutlined.176797bf.js","assets/popupNotifcation.dd76a56c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/PhChats.vue.5994232f.js","assets/NavbarControls.8216d9aa.css","assets/index.cc0715fd.js","assets/FormEditor.cc36a3e2.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.d0abc784.js"),["assets/JobEditor.d0abc784.js","assets/BaseLayout.a58db6a0.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.9daa510b.js","assets/uuid.035607ce.js","assets/scripts.d1bc2b2c.js","assets/record.f729e500.js","assets/validations.d503dc27.js","assets/string.532e13bb.js","assets/PhCopy.vue.5635ce6e.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhCopySimple.vue.70fce83b.js","assets/PhCaretRight.vue.5f7cc596.js","assets/Badge.ada44968.js","assets/PhBug.vue.4c6c1483.js","assets/PhQuestion.vue.5cd37a6e.js","assets/LoadingOutlined.5ed0afbe.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js","assets/PhPencil.vue.10ddf5aa.js","assets/toggleHighContrast.2b784445.js","assets/toggleHighContrast.30d77c87.css","assets/index.6834cc58.js","assets/Card.2564e781.js","assets/TabPane.e38cb00d.js","assets/SourceCode.62d79c81.css","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.1dbebed1.js","assets/index.1eaf0cd2.js","assets/RunButton.vue_vue_type_script_setup_true_lang.277cee9c.js","assets/NavbarControls.8a687123.js","assets/CloseCircleOutlined.176797bf.js","assets/popupNotifcation.dd76a56c.js","assets/PhArrowSquareOut.vue.da88caf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/PhChats.vue.5994232f.js","assets/NavbarControls.8216d9aa.css","assets/index.cc0715fd.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.94705cfb.js"),["assets/HookEditor.94705cfb.js","assets/BaseLayout.a58db6a0.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.9daa510b.js","assets/uuid.035607ce.js","assets/scripts.d1bc2b2c.js","assets/record.f729e500.js","assets/validations.d503dc27.js","assets/string.532e13bb.js","assets/PhCopy.vue.5635ce6e.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhCopySimple.vue.70fce83b.js","assets/PhCaretRight.vue.5f7cc596.js","assets/Badge.ada44968.js","assets/PhBug.vue.4c6c1483.js","assets/PhQuestion.vue.5cd37a6e.js","assets/LoadingOutlined.5ed0afbe.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js","assets/PhPencil.vue.10ddf5aa.js","assets/toggleHighContrast.2b784445.js","assets/toggleHighContrast.30d77c87.css","assets/index.6834cc58.js","assets/Card.2564e781.js","assets/TabPane.e38cb00d.js","assets/SourceCode.62d79c81.css","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.277cee9c.js","assets/api.a9b631fd.js","assets/fetch.04be8a9e.js","assets/metadata.cfd15460.js","assets/PhKanban.vue.f3963316.js","assets/PhWebhooksLogo.vue.3edd7efd.js","assets/ThreadSelector.e753ca08.js","assets/index.b8ac1bae.js","assets/index.9bf9f6e2.js","assets/ThreadSelector.c38c4d8f.css","assets/index.21eaa3ed.js","assets/CollapsePanel.4f375646.js","assets/index.1eaf0cd2.js","assets/NavbarControls.8a687123.js","assets/CloseCircleOutlined.176797bf.js","assets/popupNotifcation.dd76a56c.js","assets/PhArrowSquareOut.vue.da88caf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/PhChats.vue.5994232f.js","assets/NavbarControls.8216d9aa.css","assets/index.cc0715fd.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.b9ff71f8.js"),["assets/ScriptEditor.b9ff71f8.js","assets/BaseLayout.a58db6a0.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.9daa510b.js","assets/uuid.035607ce.js","assets/scripts.d1bc2b2c.js","assets/record.f729e500.js","assets/validations.d503dc27.js","assets/string.532e13bb.js","assets/PhCopy.vue.5635ce6e.js","assets/PhCheckCircle.vue.9b1e3e50.js","assets/PhCopySimple.vue.70fce83b.js","assets/PhCaretRight.vue.5f7cc596.js","assets/Badge.ada44968.js","assets/PhBug.vue.4c6c1483.js","assets/PhQuestion.vue.5cd37a6e.js","assets/LoadingOutlined.5ed0afbe.js","assets/workspaces.ffad515d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js","assets/PhPencil.vue.10ddf5aa.js","assets/toggleHighContrast.2b784445.js","assets/toggleHighContrast.30d77c87.css","assets/index.6834cc58.js","assets/Card.2564e781.js","assets/TabPane.e38cb00d.js","assets/SourceCode.62d79c81.css","assets/SaveButton.e457bdbf.js","assets/UnsavedChangesHandler.0cd99ae8.js","assets/ExclamationCircleOutlined.b003bf9c.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.277cee9c.js","assets/ThreadSelector.e753ca08.js","assets/index.b8ac1bae.js","assets/index.9bf9f6e2.js","assets/ThreadSelector.c38c4d8f.css","assets/NavbarControls.8a687123.js","assets/CloseCircleOutlined.176797bf.js","assets/index.1eaf0cd2.js","assets/popupNotifcation.dd76a56c.js","assets/PhArrowSquareOut.vue.da88caf0.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js","assets/BookOutlined.89f2a8c6.js","assets/PhChats.vue.5994232f.js","assets/NavbarControls.8216d9aa.css","assets/index.cc0715fd.js","assets/index.8ce42306.js","assets/Avatar.b0b40f97.js","assets/CollapsePanel.4f375646.js"]),meta:{title:"Script Editor"}},{path:"resources",name:"resourcesTracker",component:()=>a(()=>import("./ResourcesTracker.5cf1e6b0.js"),["assets/ResourcesTracker.5cf1e6b0.js","assets/BaseLayout.a58db6a0.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/BaseLayout.b7a1f19a.css","assets/asyncComputed.2bec113c.js","assets/polling.e2209103.js"]),meta:{title:"Resources Tracker"}},{path:"welcome",name:"welcome",component:()=>a(()=>import("./Welcome.63d29f33.js"),["assets/Welcome.63d29f33.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.7d96bf27.js","assets/Logo.e9eed733.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/Logo.03290bf7.css","assets/ContentLayout.1036e4eb.js","assets/ContentLayout.ee57a545.css","assets/fetch.04be8a9e.js","assets/Card.2564e781.js","assets/TabPane.e38cb00d.js","assets/workspaceStore.61224c34.js","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/asyncComputed.2bec113c.js","assets/Welcome.8d813f91.css"]),meta:{title:"Welcome",allowUnauthenticated:!0}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.2f42b4a2.js"),["assets/App.2f42b4a2.js","assets/App.vue_vue_type_style_index_0_lang.dbbe703d.js","assets/workspaceStore.61224c34.js","assets/index.0f630b70.js","assets/index.b3bf2b78.css","assets/url.90c69b58.js","assets/colorHelpers.13000dc5.js","assets/PlayerConfigProvider.0f52afbf.js","assets/index.9404ab63.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);W(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const r={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(r),"_self")}});(async()=>{await te();const o=oe(),e=N({render:()=>z(ne)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.e625b0ce.js.map
