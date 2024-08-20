var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as k,o as V,c as A,w as I,a as j,b as D,u as O,A as U,l as h,e as f,f as g,g as E,h as S,i as C,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.bdd95b3b.js";import{d as Y,r as K,u as Q,g as X,s as Z,c as ee}from"./workspaceStore.f8b3c08d.js";import"./linters.5cdde9d7.js";import"./url.fd6fde4b.js";import"./asyncComputed.9c04a778.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5225acaf-1927-4d92-9ee3-986cd1e8b372",t._sentryDebugIdIdentifier="sentry-dbid-5225acaf-1927-4d92-9ee3-986cd1e8b372")}catch{}})();const te={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},oe=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=k("RouterView");return V(),A(O(U),{theme:e,"page-header":{ghost:!1}},{default:I(()=>[j("div",te,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const n=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>n.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let d=n;m(d,"booted",!1);const ae={"console-url":"https://cloud.abstra.io"},re=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"3fe86d4b65f8f7e72cb5d6ac340aca1dd19f8fc9",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||ae[t]},c={consoleUrl:re("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=f(null),o=f(null),s=g(()=>{var r,i;return(i=(r=e.value)==null?void 0:r.logged)!=null?i:!1}),p=g(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},L=async r=>{const i=await t.createLogin(r);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),b=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async r=>{if(r&&"info"in r){const{email:i,intercomHash:y}=r.info;d.boot(i,y)}else d.shutdown()}),{loadLogin:b,createLogin:L,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),se=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),l=S({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.809ca01a.js"),["assets/Home.809ca01a.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.0d248965.js"),["assets/Workspace.0d248965.js","assets/BaseLayout.63a44e4f.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/PhSignOut.vue.ec7a61b2.js","assets/NavbarControls.0cefb20e.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/CloseCircleOutlined.8176487f.js","assets/index.392a7c3d.js","assets/index.0ff0b8a1.js","assets/workspaces.2d4ef9b9.js","assets/record.757921f4.js","assets/popupNotifcation.720870ec.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/PhChats.vue.8aa6d618.js","assets/NavbarControls.5a022bc4.css","assets/Logo.760df7c3.js","assets/Logo.21e86751.css","assets/PhIdentificationBadge.vue.15bdcf56.js","assets/PhCaretRight.vue.a79bd7ed.js","assets/PhFlowArrow.vue.beeb7063.js","assets/PhKanban.vue.4ba1bdf0.js","assets/index.64b08dda.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js","assets/Workspace.f4e56ef5.css"]),redirect:()=>({name:"workflowEditor"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.c68f63f8.js"),["assets/Stages.c68f63f8.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.0cb01f1d.js","assets/ContentLayout.ee57a545.css","assets/CrudView.dbbcd692.js","assets/router.149fa06c.js","assets/gateway.023845f7.js","assets/popupNotifcation.720870ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/url.fd6fde4b.js","assets/PhDotsThreeVertical.vue.4225f74d.js","assets/index.0ff0b8a1.js","assets/CrudView.6b6b336a.css","assets/ant-design.60bb9864.js","assets/asyncComputed.9c04a778.js","assets/string.7b43099d.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/forms.21bb1b9c.js","assets/record.757921f4.js","assets/jobs.47256168.js","assets/linters.5cdde9d7.js","assets/scripts.b5546c04.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/index.392a7c3d.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/validations.27e5cbb3.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.00812809.js"),["assets/WorkflowEditor.00812809.js","assets/LoadingContainer.9f9d1ba1.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/model.97c091fe.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/record.757921f4.js","assets/validations.27e5cbb3.js","assets/string.7b43099d.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/metadata.b3e13b5a.js","assets/PhBug.vue.8b832009.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhKanban.vue.4ba1bdf0.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/index.13430664.js","assets/Badge.1486f0e4.js","assets/isNumeric.75337b1e.js","assets/index.0ff0b8a1.js","assets/index.392a7c3d.js","assets/Card.f1ba6d45.js","assets/TabPane.7d6a5f49.js","assets/api.00b69031.js","assets/fetch.8667383a.js","assets/uuid.a6c6278c.js","assets/model.4debe324.css","assets/asyncComputed.9c04a778.js","assets/index.316cd77c.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.9a4e785e.js"),["assets/WorkflowThreads.9a4e785e.js","assets/ContentLayout.0cb01f1d.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.a100af3f.js","assets/fetch.8667383a.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/scripts.b5546c04.js","assets/record.757921f4.js","assets/api.00b69031.js","assets/metadata.b3e13b5a.js","assets/PhBug.vue.8b832009.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhKanban.vue.4ba1bdf0.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/PhQuestion.vue.3ab0b002.js","assets/ant-design.60bb9864.js","assets/index.0ff0b8a1.js","assets/index.1b2b9605.js","assets/index.ba2cccfa.js","assets/CollapsePanel.2f095255.js","assets/index.316cd77c.js","assets/index.12ca3aae.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.71e3045d.js","assets/model.97c091fe.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/validations.27e5cbb3.js","assets/string.7b43099d.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/index.13430664.js","assets/Badge.1486f0e4.js","assets/index.392a7c3d.js","assets/Card.f1ba6d45.js","assets/TabPane.7d6a5f49.js","assets/uuid.a6c6278c.js","assets/model.4debe324.css","assets/LoadingOutlined.75c764e4.js","assets/DeleteOutlined.c7870705.js","assets/PhDownloadSimple.vue.c60cde4b.js","assets/utils.aeff9d48.js","assets/LoadingContainer.9f9d1ba1.js","assets/LoadingContainer.56fa997a.css","assets/WorkflowView.c75aa74f.css"]),meta:{title:"Workflow Threads"}},{path:"preferences",name:"settingsPreferences",component:()=>a(()=>import("./PreferencesEditor.7d3cdb04.js"),["assets/PreferencesEditor.7d3cdb04.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/record.757921f4.js","assets/PlayerNavbar.dbb90431.js","assets/metadata.b3e13b5a.js","assets/PhBug.vue.8b832009.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhKanban.vue.4ba1bdf0.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/PhSignOut.vue.ec7a61b2.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js","assets/PlayerNavbar.3eae3a31.css","assets/WidgetsFrame.ea80f7bf.js","assets/WidgetsFrame.e0c6be76.css","assets/ContentLayout.0cb01f1d.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.9f9d1ba1.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/PreferencesEditor.c3fea61a.css"]),meta:{title:"Preferences"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.8e5dd799.js"),["assets/RequirementsEditor.8e5dd799.js","assets/ContentLayout.0cb01f1d.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/CrudView.dbbcd692.js","assets/router.149fa06c.js","assets/gateway.023845f7.js","assets/popupNotifcation.720870ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/url.fd6fde4b.js","assets/PhDotsThreeVertical.vue.4225f74d.js","assets/index.0ff0b8a1.js","assets/CrudView.6b6b336a.css","assets/asyncComputed.9c04a778.js","assets/linters.5cdde9d7.js","assets/record.757921f4.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.c616e873.js"),["assets/EnvVarsEditor.c616e873.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/record.757921f4.js","assets/ContentLayout.0cb01f1d.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.d4951656.js","assets/gateway.023845f7.js","assets/popupNotifcation.720870ec.js","assets/fetch.8667383a.js","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/CrudView.dbbcd692.js","assets/router.149fa06c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/PhDotsThreeVertical.vue.4225f74d.js","assets/index.0ff0b8a1.js","assets/CrudView.6b6b336a.css","assets/PhRocketLaunch.vue.d8890e53.js","assets/PhPencil.vue.7a75414f.js","assets/index.392a7c3d.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.60a42f3f.js"),["assets/VSCodeConnection.60a42f3f.js","assets/ContentLayout.0cb01f1d.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/index.0ff0b8a1.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.623e89c5.js"),["assets/AccessControlEditor.623e89c5.js","assets/ContentLayout.0cb01f1d.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/ContentLayout.ee57a545.css","assets/fetch.8667383a.js","assets/record.757921f4.js","assets/repository.08b9e1e5.js","assets/gateway.023845f7.js","assets/popupNotifcation.720870ec.js","assets/asyncComputed.9c04a778.js","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.a60e45db.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/index.316cd77c.js","assets/metadata.b3e13b5a.js","assets/PhBug.vue.8b832009.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhKanban.vue.4ba1bdf0.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/index.392a7c3d.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/linters.5cdde9d7.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.ad8713e9.js"),["assets/ProjectLogin.ad8713e9.js","assets/BaseLayout.63a44e4f.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/Logo.760df7c3.js","assets/Logo.21e86751.css","assets/index.64b08dda.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js","assets/index.0ff0b8a1.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.d0e9312a.js"),["assets/FormEditor.d0e9312a.js","assets/PlayerNavbar.dbb90431.js","assets/workspaceStore.f8b3c08d.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/url.fd6fde4b.js","assets/metadata.b3e13b5a.js","assets/PhBug.vue.8b832009.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhKanban.vue.4ba1bdf0.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/PhSignOut.vue.ec7a61b2.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js","assets/PlayerNavbar.3eae3a31.css","assets/BaseLayout.63a44e4f.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.50a7ea64.js","assets/uuid.a6c6278c.js","assets/jobs.47256168.js","assets/record.757921f4.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/scripts.b5546c04.js","assets/validations.27e5cbb3.js","assets/string.7b43099d.js","assets/PhCopy.vue.b2d2b3fe.js","assets/PhCopySimple.vue.683f3f5d.js","assets/PhCaretRight.vue.a79bd7ed.js","assets/Badge.1486f0e4.js","assets/isNumeric.75337b1e.js","assets/PhQuestion.vue.3ab0b002.js","assets/LoadingOutlined.75c764e4.js","assets/workspaces.2d4ef9b9.js","assets/PhPencil.vue.7a75414f.js","assets/toggleHighContrast.194c8931.js","assets/toggleHighContrast.30d77c87.css","assets/index.392a7c3d.js","assets/Card.f1ba6d45.js","assets/TabPane.7d6a5f49.js","assets/SourceCode.65c11816.css","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/FormRunner.848694e1.js","assets/Login.vue_vue_type_script_setup_true_lang.e1b67246.js","assets/CircularLoading.9dcc0af0.js","assets/CircularLoading.e156a2b0.css","assets/Login.4b756628.css","assets/WidgetsFrame.ea80f7bf.js","assets/WidgetsFrame.e0c6be76.css","assets/Steps.03cbc94c.js","assets/Steps.4a8d55e8.css","assets/Watermark.8f81b57d.js","assets/Watermark.77541699.css","assets/FormRunner.4f9601e1.css","assets/api.00b69031.js","assets/fetch.8667383a.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/PhFlowArrow.vue.beeb7063.js","assets/forms.21bb1b9c.js","assets/ThreadSelector.417422a3.js","assets/index.1b2b9605.js","assets/index.316cd77c.js","assets/ThreadSelector.8aa77ab2.css","assets/index.0ff0b8a1.js","assets/NavbarControls.0cefb20e.js","assets/CloseCircleOutlined.8176487f.js","assets/popupNotifcation.720870ec.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/PhChats.vue.8aa6d618.js","assets/NavbarControls.5a022bc4.css","assets/index.64b08dda.js","assets/FormEditor.83f358af.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.b91264c5.js"),["assets/JobEditor.b91264c5.js","assets/BaseLayout.63a44e4f.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.50a7ea64.js","assets/uuid.a6c6278c.js","assets/jobs.47256168.js","assets/record.757921f4.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/scripts.b5546c04.js","assets/validations.27e5cbb3.js","assets/string.7b43099d.js","assets/PhCopy.vue.b2d2b3fe.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhCopySimple.vue.683f3f5d.js","assets/PhCaretRight.vue.a79bd7ed.js","assets/Badge.1486f0e4.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.8b832009.js","assets/PhQuestion.vue.3ab0b002.js","assets/LoadingOutlined.75c764e4.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/PhPencil.vue.7a75414f.js","assets/toggleHighContrast.194c8931.js","assets/toggleHighContrast.30d77c87.css","assets/index.392a7c3d.js","assets/Card.f1ba6d45.js","assets/TabPane.7d6a5f49.js","assets/SourceCode.65c11816.css","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/index.a6aa2c82.js","assets/index.0ff0b8a1.js","assets/RunButton.vue_vue_type_script_setup_true_lang.19679322.js","assets/NavbarControls.0cefb20e.js","assets/CloseCircleOutlined.8176487f.js","assets/popupNotifcation.720870ec.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/PhChats.vue.8aa6d618.js","assets/NavbarControls.5a022bc4.css","assets/index.64b08dda.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.66164e51.js"),["assets/HookEditor.66164e51.js","assets/BaseLayout.63a44e4f.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.50a7ea64.js","assets/uuid.a6c6278c.js","assets/jobs.47256168.js","assets/record.757921f4.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/scripts.b5546c04.js","assets/validations.27e5cbb3.js","assets/string.7b43099d.js","assets/PhCopy.vue.b2d2b3fe.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhCopySimple.vue.683f3f5d.js","assets/PhCaretRight.vue.a79bd7ed.js","assets/Badge.1486f0e4.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.8b832009.js","assets/PhQuestion.vue.3ab0b002.js","assets/LoadingOutlined.75c764e4.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/PhPencil.vue.7a75414f.js","assets/toggleHighContrast.194c8931.js","assets/toggleHighContrast.30d77c87.css","assets/index.392a7c3d.js","assets/Card.f1ba6d45.js","assets/TabPane.7d6a5f49.js","assets/SourceCode.65c11816.css","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.19679322.js","assets/api.00b69031.js","assets/fetch.8667383a.js","assets/metadata.b3e13b5a.js","assets/PhKanban.vue.4ba1bdf0.js","assets/PhWebhooksLogo.vue.71a639c9.js","assets/ThreadSelector.417422a3.js","assets/index.1b2b9605.js","assets/index.316cd77c.js","assets/ThreadSelector.8aa77ab2.css","assets/index.cd75c1ed.js","assets/CollapsePanel.2f095255.js","assets/index.0ff0b8a1.js","assets/NavbarControls.0cefb20e.js","assets/CloseCircleOutlined.8176487f.js","assets/popupNotifcation.720870ec.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/PhChats.vue.8aa6d618.js","assets/NavbarControls.5a022bc4.css","assets/index.64b08dda.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.135d12d2.js"),["assets/ScriptEditor.135d12d2.js","assets/BaseLayout.63a44e4f.js","assets/vue-router.bdd95b3b.js","assets/vue-router.940bfc8a.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.50a7ea64.js","assets/uuid.a6c6278c.js","assets/jobs.47256168.js","assets/record.757921f4.js","assets/linters.5cdde9d7.js","assets/asyncComputed.9c04a778.js","assets/scripts.b5546c04.js","assets/validations.27e5cbb3.js","assets/string.7b43099d.js","assets/PhCopy.vue.b2d2b3fe.js","assets/PhCheckCircle.vue.3183bd14.js","assets/PhCopySimple.vue.683f3f5d.js","assets/PhCaretRight.vue.a79bd7ed.js","assets/Badge.1486f0e4.js","assets/isNumeric.75337b1e.js","assets/PhBug.vue.8b832009.js","assets/PhQuestion.vue.3ab0b002.js","assets/LoadingOutlined.75c764e4.js","assets/workspaces.2d4ef9b9.js","assets/workspaceStore.f8b3c08d.js","assets/url.fd6fde4b.js","assets/PhPencil.vue.7a75414f.js","assets/toggleHighContrast.194c8931.js","assets/toggleHighContrast.30d77c87.css","assets/index.392a7c3d.js","assets/Card.f1ba6d45.js","assets/TabPane.7d6a5f49.js","assets/SourceCode.65c11816.css","assets/SaveButton.007f3917.js","assets/ExclamationCircleOutlined.7da693bd.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.19679322.js","assets/ThreadSelector.417422a3.js","assets/index.1b2b9605.js","assets/index.316cd77c.js","assets/ThreadSelector.8aa77ab2.css","assets/NavbarControls.0cefb20e.js","assets/CloseCircleOutlined.8176487f.js","assets/index.0ff0b8a1.js","assets/popupNotifcation.720870ec.js","assets/PhArrowSquareOut.vue.2ae85e3f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js","assets/BookOutlined.9012acef.js","assets/PhChats.vue.8aa6d618.js","assets/NavbarControls.5a022bc4.css","assets/index.64b08dda.js","assets/index.927ca563.js","assets/Avatar.28258ea7.js","assets/CollapsePanel.2f095255.js"]),meta:{title:"Script Editor"}}]},...se],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),ie=X(l);l.beforeEach(async(t,e)=>{if(await Q().actions.fetch(),t.meta.playerRoute)return ie(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await Z();const t=ee(),e=W({render:()=>F(oe)});x.init(),B(e,l),e.use(l),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.05f21f22.js.map
