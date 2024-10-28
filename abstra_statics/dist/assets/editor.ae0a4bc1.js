var k=Object.defineProperty;var T=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(T(o,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as I,o as V,c as j,w as D,a as O,b as C,u as S,A as U,l as f,e as g,f as w,g as E,h as x,i as $,_ as a,j as N,k as W,T as B,m as M,P as q,C as F,M as H,s as J,n as m,p as z,q as G,t as Y,v as K}from"./vue-router.f6e8075d.js";import{d as Q,r as X,u as Z,g as ee,s as te,c as oe}from"./workspaceStore.34e7dee1.js";import{a as ae}from"./asyncComputed.8354b42f.js";import"./url.7b84f450.js";import"./colorHelpers.5711c880.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="22d9a61a-fc7c-4ec5-944f-bbd165126d27",o._sentryDebugIdIdentifier="sentry-dbid-22d9a61a-fc7c-4ec5-944f-bbd165126d27")}catch{}})();const ne={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},re=A({__name:"App",setup(o){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(t,n)=>{const l=I("RouterView");return V(),j(S(U),{theme:e,"page-header":{ghost:!1}},{default:D(()=>[O("div",ne,[C(l)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}class se{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const n=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!n.ok)throw new Error("Failed to fix");return _.refetch(),n.json()}}const b=new se,_=ae(async()=>(await b.check()).map(e=>new le(e)));class ie{constructor(e,t){r(this,"name");r(this,"label");r(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await b.fix(this.ruleName,this.name)}}class ce{constructor(e,t){r(this,"label");r(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(n=>new ie(n,t))}}class le{constructor(e){r(this,"name");r(this,"label");r(this,"type");r(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new ce(t,this.name))}static get asyncComputed(){return _}static fromName(e){var n;const t=(n=_.result.value)==null?void 0:n.find(l=>l.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}const i=class{static dispatch(e,t,n=0){window.Intercom?window.Intercom(e,t):n<10?setTimeout(()=>i.dispatch(e,t),100):console.error("Intercom not loaded")}static boot(e,t){i.booted||(i.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:t,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),i.booted=!0)}static shutdown(){i.dispatch("shutdown"),i.booted=!1}};let p=i;r(p,"booted",!1);const de={"console-url":"https://cloud.abstra.io"},pe=o=>{const e="VITE_"+f.toUpper(f.snakeCase(o)),t={VITE_SENTRY_RELEASE:"5784b43df461c2e6dbd37a86519bcaa0c11e8797",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||de[o]},d={consoleUrl:pe("console-url")},ue=Q("cloud-project",()=>{const o=new v,e=g(null),t=g(null),n=w(()=>{var s,c;return(c=(s=e.value)==null?void 0:s.logged)!=null?c:!1}),l=w(()=>t.value?{project:`${d.consoleUrl}/projects/${t.value.id}`,users:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=users`,roles:`${d.consoleUrl}/projects/${t.value.id}/access-control?selected-panel=roles`,builds:`${d.consoleUrl}/projects/${t.value.id}/builds`,login:`${d.consoleUrl}/api-key`}:null),y=async()=>{!n.value||(await o.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async s=>{const c=await o.createLogin(s);e.value=c,c.logged&&await h()},h=async()=>t.value=await o.getCloudProject(),P=async()=>e.value?e.value:(e.value=await o.getLogin(),e.value.logged);return E(()=>e.value,h),E(()=>e.value,async s=>{if(s&&"info"in s){const{email:c,intercomHash:R}=s.info;p.boot(c,R)}else p.shutdown()}),{loadLogin:P,createLogin:L,deleteLogin:y,loginInfo:e,cloudProject:t,isLogged:n,links:l}}),me=X.map(o=>({...o,meta:{...o.meta,playerRoute:!0}})),u=x({history:$("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.6a51cbfa.js"),["assets/Home.6a51cbfa.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.fa17b3dd.js"),["assets/Workspace.fa17b3dd.js","assets/BaseLayout.880226a4.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/PhSignOut.vue.dacee2e2.js","assets/NavbarControls.6ba9b119.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/CloseCircleOutlined.1936c469.js","assets/index.f51cb1f4.js","assets/index.9d3cfd25.js","assets/workspaces.59165432.js","assets/record.8e60bb52.js","assets/popupNotifcation.5277fb28.js","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/PhChats.vue.3c4c1493.js","assets/NavbarControls.8216d9aa.css","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.a3d9413c.js","assets/Logo.c822a1ef.js","assets/Logo.03290bf7.css","assets/PhIdentificationBadge.vue.48ff33b9.js","assets/PhCaretRight.vue.320a7063.js","assets/PhFlowArrow.vue.ee3fbf04.js","assets/PhKanban.vue.74ee8495.js","assets/index.3db96b3c.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js","assets/asyncComputed.8354b42f.js","assets/Workspace.b962be0f.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.c55d81d5.js"),["assets/Stages.c55d81d5.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.4b8495f3.js","assets/ContentLayout.ee57a545.css","assets/CrudView.e2bfe754.js","assets/router.1beb61f8.js","assets/gateway.b28e7643.js","assets/popupNotifcation.5277fb28.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/url.7b84f450.js","assets/PhDotsThreeVertical.vue.4e376821.js","assets/Badge.f5e8d876.js","assets/index.9d3cfd25.js","assets/CrudView.57fcf015.css","assets/ant-design.f201613b.js","assets/asyncComputed.8354b42f.js","assets/string.67079344.js","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/forms.c30f0407.js","assets/record.8e60bb52.js","assets/scripts.5f80d997.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/colorHelpers.5711c880.js","assets/index.f51cb1f4.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/validations.d5f6da72.js","assets/Stages.f4e34061.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.b8eaf38d.js"),["assets/WorkflowEditor.b8eaf38d.js","assets/api.9c0fd3dc.js","assets/fetch.e6e494f6.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/metadata.e4d195d3.js","assets/PhBug.vue.fc582a66.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhKanban.vue.74ee8495.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/Workflow.231277dc.js","assets/PhArrowCounterClockwise.vue.602eae99.js","assets/validations.d5f6da72.js","assets/string.67079344.js","assets/uuid.ced7f55d.js","assets/index.596410bd.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/record.8e60bb52.js","assets/polling.6347cf38.js","assets/index.7179033f.js","assets/Badge.f5e8d876.js","assets/PhArrowDown.vue.bf1835b0.js","assets/Workflow.3bba4ed7.css","assets/asyncComputed.8354b42f.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/index.fc953e62.js","assets/WorkflowEditor.bb12f104.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.2c42710c.js"),["assets/WorkflowThreads.2c42710c.js","assets/api.9c0fd3dc.js","assets/fetch.e6e494f6.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/metadata.e4d195d3.js","assets/PhBug.vue.fc582a66.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhKanban.vue.74ee8495.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/ContentLayout.4b8495f3.js","assets/ContentLayout.ee57a545.css","assets/WorkflowView.79a5674e.js","assets/polling.6347cf38.js","assets/asyncComputed.8354b42f.js","assets/PhQuestion.vue.fa205d2b.js","assets/ant-design.f201613b.js","assets/index.9d3cfd25.js","assets/index.be715390.js","assets/index.42089e9a.js","assets/CollapsePanel.0a5ffc1d.js","assets/index.fc953e62.js","assets/index.6896994a.js","assets/Badge.f5e8d876.js","assets/PhArrowCounterClockwise.vue.602eae99.js","assets/Workflow.231277dc.js","assets/validations.d5f6da72.js","assets/string.67079344.js","assets/uuid.ced7f55d.js","assets/index.596410bd.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/record.8e60bb52.js","assets/index.7179033f.js","assets/PhArrowDown.vue.bf1835b0.js","assets/Workflow.3bba4ed7.css","assets/Card.be021291.js","assets/TabPane.87906120.js","assets/LoadingOutlined.0f72e143.js","assets/DeleteOutlined.e1639ff4.js","assets/PhDownloadSimple.vue.6b6efeaf.js","assets/utils.339b1d01.js","assets/LoadingContainer.0c532816.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.78019367.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.7da4442a.js"),["assets/PreferencesEditor.7da4442a.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/record.8e60bb52.js","assets/PlayerNavbar.bbeeb0e7.js","assets/metadata.e4d195d3.js","assets/PhBug.vue.fc582a66.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhKanban.vue.74ee8495.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/LoadingOutlined.0f72e143.js","assets/PhSignOut.vue.dacee2e2.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js","assets/PlayerNavbar.c84e7f3d.css","assets/PlayerConfigProvider.b80fd491.js","assets/index.596410bd.js","assets/PlayerConfigProvider.8864c905.css","assets/AbstraButton.vue_vue_type_script_setup_true_lang.e53460b0.js","assets/ContentLayout.4b8495f3.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.0c532816.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/asyncComputed.8354b42f.js","assets/PreferencesEditor.a7201214.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.7e3e83d0.js"),["assets/RequirementsEditor.7e3e83d0.js","assets/ContentLayout.4b8495f3.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/CrudView.e2bfe754.js","assets/router.1beb61f8.js","assets/gateway.b28e7643.js","assets/popupNotifcation.5277fb28.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/url.7b84f450.js","assets/PhDotsThreeVertical.vue.4e376821.js","assets/Badge.f5e8d876.js","assets/index.9d3cfd25.js","assets/CrudView.57fcf015.css","assets/asyncComputed.8354b42f.js","assets/polling.6347cf38.js","assets/record.8e60bb52.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/colorHelpers.5711c880.js","assets/RequirementsEditor.46e215f2.css"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.c039e575.js"),["assets/EnvVarsEditor.c039e575.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/record.8e60bb52.js","assets/ContentLayout.4b8495f3.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.bdaf39ce.js","assets/gateway.b28e7643.js","assets/popupNotifcation.5277fb28.js","assets/fetch.e6e494f6.js","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/CrudView.e2bfe754.js","assets/router.1beb61f8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/PhDotsThreeVertical.vue.4e376821.js","assets/Badge.f5e8d876.js","assets/index.9d3cfd25.js","assets/CrudView.57fcf015.css","assets/asyncComputed.8354b42f.js","assets/polling.6347cf38.js","assets/PhPencil.vue.6c516060.js","assets/index.f51cb1f4.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.2484ccee.js"),["assets/VSCodeConnection.2484ccee.js","assets/ContentLayout.4b8495f3.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/polling.6347cf38.js","assets/index.9d3cfd25.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.18300314.js"),["assets/AccessControlEditor.18300314.js","assets/ContentLayout.4b8495f3.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/ContentLayout.ee57a545.css","assets/fetch.e6e494f6.js","assets/record.8e60bb52.js","assets/repository.4f1057f0.js","assets/gateway.b28e7643.js","assets/popupNotifcation.5277fb28.js","assets/asyncComputed.8354b42f.js","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/PhGlobe.vue.4323330f.js","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/index.fc953e62.js","assets/metadata.e4d195d3.js","assets/PhBug.vue.fc582a66.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhKanban.vue.74ee8495.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/index.f51cb1f4.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/AccessControlEditor.b7d1ceb9.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.6122a08c.js"),["assets/ProjectLogin.6122a08c.js","assets/AbstraLogo.vue_vue_type_script_setup_true_lang.a3d9413c.js","assets/Logo.c822a1ef.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/Logo.03290bf7.css","assets/BaseLayout.880226a4.js","assets/BaseLayout.b7a1f19a.css","assets/index.3db96b3c.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js","assets/index.9d3cfd25.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/asyncComputed.8354b42f.js","assets/ProjectLogin.2f3a2bb2.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.67f8f4b9.js"),["assets/FormEditor.67f8f4b9.js","assets/api.9c0fd3dc.js","assets/fetch.e6e494f6.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/metadata.e4d195d3.js","assets/PhBug.vue.fc582a66.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhKanban.vue.74ee8495.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/PlayerNavbar.bbeeb0e7.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/LoadingOutlined.0f72e143.js","assets/PhSignOut.vue.dacee2e2.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js","assets/PlayerNavbar.c84e7f3d.css","assets/BaseLayout.880226a4.js","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b68139b9.js","assets/uuid.ced7f55d.js","assets/scripts.5f80d997.js","assets/record.8e60bb52.js","assets/validations.d5f6da72.js","assets/string.67079344.js","assets/PhCopy.vue.828429ea.js","assets/PhCopySimple.vue.bbfda6da.js","assets/PhCaretRight.vue.320a7063.js","assets/Badge.f5e8d876.js","assets/PhQuestion.vue.fa205d2b.js","assets/workspaces.59165432.js","assets/asyncComputed.8354b42f.js","assets/polling.6347cf38.js","assets/PhPencil.vue.6c516060.js","assets/toggleHighContrast.fc336053.js","assets/toggleHighContrast.30d77c87.css","assets/index.f51cb1f4.js","assets/Card.be021291.js","assets/TabPane.87906120.js","assets/SourceCode.954a8594.css","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/FormRunner.29b5f019.js","assets/Login.vue_vue_type_script_setup_true_lang.f987394d.js","assets/Logo.c822a1ef.js","assets/Logo.03290bf7.css","assets/CircularLoading.a72db69c.js","assets/CircularLoading.e156a2b0.css","assets/Login.4c023e5d.css","assets/Steps.551e5a76.js","assets/index.e99d579a.js","assets/Steps.4d03c6c1.css","assets/Watermark.0e973fdb.js","assets/Watermark.4e66f4f8.css","assets/FormRunner.82cd9838.css","assets/PlayerConfigProvider.b80fd491.js","assets/index.596410bd.js","assets/PlayerConfigProvider.8864c905.css","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/PhFlowArrow.vue.ee3fbf04.js","assets/forms.c30f0407.js","assets/ThreadSelector.139b0f7f.js","assets/index.be715390.js","assets/index.fc953e62.js","assets/ThreadSelector.8aa77ab2.css","assets/index.9d3cfd25.js","assets/NavbarControls.6ba9b119.js","assets/CloseCircleOutlined.1936c469.js","assets/popupNotifcation.5277fb28.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/PhChats.vue.3c4c1493.js","assets/NavbarControls.8216d9aa.css","assets/index.3db96b3c.js","assets/FormEditor.cf6d375e.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.7cd14c4d.js"),["assets/JobEditor.7cd14c4d.js","assets/BaseLayout.880226a4.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b68139b9.js","assets/uuid.ced7f55d.js","assets/scripts.5f80d997.js","assets/record.8e60bb52.js","assets/validations.d5f6da72.js","assets/string.67079344.js","assets/PhCopy.vue.828429ea.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhCopySimple.vue.bbfda6da.js","assets/PhCaretRight.vue.320a7063.js","assets/Badge.f5e8d876.js","assets/PhBug.vue.fc582a66.js","assets/PhQuestion.vue.fa205d2b.js","assets/LoadingOutlined.0f72e143.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/asyncComputed.8354b42f.js","assets/polling.6347cf38.js","assets/PhPencil.vue.6c516060.js","assets/toggleHighContrast.fc336053.js","assets/toggleHighContrast.30d77c87.css","assets/index.f51cb1f4.js","assets/Card.be021291.js","assets/TabPane.87906120.js","assets/SourceCode.954a8594.css","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/index.73b77ae9.js","assets/index.9d3cfd25.js","assets/RunButton.vue_vue_type_script_setup_true_lang.fa255838.js","assets/NavbarControls.6ba9b119.js","assets/CloseCircleOutlined.1936c469.js","assets/popupNotifcation.5277fb28.js","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/PhChats.vue.3c4c1493.js","assets/NavbarControls.8216d9aa.css","assets/index.3db96b3c.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f0e1a5e3.js"),["assets/HookEditor.f0e1a5e3.js","assets/BaseLayout.880226a4.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b68139b9.js","assets/uuid.ced7f55d.js","assets/scripts.5f80d997.js","assets/record.8e60bb52.js","assets/validations.d5f6da72.js","assets/string.67079344.js","assets/PhCopy.vue.828429ea.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhCopySimple.vue.bbfda6da.js","assets/PhCaretRight.vue.320a7063.js","assets/Badge.f5e8d876.js","assets/PhBug.vue.fc582a66.js","assets/PhQuestion.vue.fa205d2b.js","assets/LoadingOutlined.0f72e143.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/asyncComputed.8354b42f.js","assets/polling.6347cf38.js","assets/PhPencil.vue.6c516060.js","assets/toggleHighContrast.fc336053.js","assets/toggleHighContrast.30d77c87.css","assets/index.f51cb1f4.js","assets/Card.be021291.js","assets/TabPane.87906120.js","assets/SourceCode.954a8594.css","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fa255838.js","assets/api.9c0fd3dc.js","assets/fetch.e6e494f6.js","assets/metadata.e4d195d3.js","assets/PhKanban.vue.74ee8495.js","assets/PhWebhooksLogo.vue.05556ef0.js","assets/ThreadSelector.139b0f7f.js","assets/index.be715390.js","assets/index.fc953e62.js","assets/ThreadSelector.8aa77ab2.css","assets/index.d366d09f.js","assets/CollapsePanel.0a5ffc1d.js","assets/index.9d3cfd25.js","assets/NavbarControls.6ba9b119.js","assets/CloseCircleOutlined.1936c469.js","assets/popupNotifcation.5277fb28.js","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/PhChats.vue.3c4c1493.js","assets/NavbarControls.8216d9aa.css","assets/index.3db96b3c.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.e3d9b519.js"),["assets/ScriptEditor.e3d9b519.js","assets/BaseLayout.880226a4.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/BaseLayout.b7a1f19a.css","assets/SourceCode.b68139b9.js","assets/uuid.ced7f55d.js","assets/scripts.5f80d997.js","assets/record.8e60bb52.js","assets/validations.d5f6da72.js","assets/string.67079344.js","assets/PhCopy.vue.828429ea.js","assets/PhCheckCircle.vue.7d9286f2.js","assets/PhCopySimple.vue.bbfda6da.js","assets/PhCaretRight.vue.320a7063.js","assets/Badge.f5e8d876.js","assets/PhBug.vue.fc582a66.js","assets/PhQuestion.vue.fa205d2b.js","assets/LoadingOutlined.0f72e143.js","assets/workspaces.59165432.js","assets/workspaceStore.34e7dee1.js","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/asyncComputed.8354b42f.js","assets/polling.6347cf38.js","assets/PhPencil.vue.6c516060.js","assets/toggleHighContrast.fc336053.js","assets/toggleHighContrast.30d77c87.css","assets/index.f51cb1f4.js","assets/Card.be021291.js","assets/TabPane.87906120.js","assets/SourceCode.954a8594.css","assets/SaveButton.7221af3d.js","assets/UnsavedChangesHandler.7807de7d.js","assets/ExclamationCircleOutlined.d16faa83.js","assets/UnsavedChangesHandler.7aa0e3b6.css","assets/SaveButton.72874714.css","assets/RunButton.vue_vue_type_script_setup_true_lang.fa255838.js","assets/ThreadSelector.139b0f7f.js","assets/index.be715390.js","assets/index.fc953e62.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.6ba9b119.js","assets/CloseCircleOutlined.1936c469.js","assets/index.9d3cfd25.js","assets/popupNotifcation.5277fb28.js","assets/PhArrowSquareOut.vue.0036b4ff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.c8833668.js","assets/BookOutlined.2e7d7e10.js","assets/PhChats.vue.3c4c1493.js","assets/NavbarControls.8216d9aa.css","assets/index.3db96b3c.js","assets/index.879f7f86.js","assets/Avatar.059ac63f.js","assets/CollapsePanel.0a5ffc1d.js"]),meta:{title:"Script Editor"}}]},{path:"/:path(.*)*",name:"form",component:()=>a(()=>import("./App.acd6bdbd.js"),["assets/App.acd6bdbd.js","assets/App.vue_vue_type_style_index_0_lang.71a002ee.js","assets/workspaceStore.34e7dee1.js","assets/vue-router.f6e8075d.js","assets/vue-router.d7fcf385.css","assets/url.7b84f450.js","assets/colorHelpers.5711c880.js","assets/PlayerConfigProvider.b80fd491.js","assets/index.596410bd.js","assets/PlayerConfigProvider.8864c905.css","assets/App.bf2707f8.css"]),children:me}],scrollBehavior(o){if(o.hash)return{el:o.hash}}}),_e=ee(u);u.beforeEach(async(o,e)=>{if(await Z().actions.fetch(),o.meta.playerRoute)return _e(o,e);N(o,e);const t=ue();if(!o.meta.allowUnauthenticated&&!t.isLogged&&!await t.loadLogin()){const n={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(n),"_self")}});(async()=>{await te();const o=oe(),e=W({render:()=>z(re)});B.init(),M(e,u),e.use(u),e.use(q),e.use(o),e.mount("#app"),e.component("VSelect",F),e.component("Markdown",H),e.component("Message",J),m(e,G),m(e,Y),m(e,K)})();export{d as E,le as L,ue as u};
//# sourceMappingURL=editor.ae0a4bc1.js.map
