var P=Object.defineProperty;var R=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{d as T,r as V,o as A,c as I,w as k,a as j,b as D,u as O,A as S,l as h,e as g,f,g as E,h as U,i as C,_ as a,j as $,k as W,T as x,m as B,P as M,C as q,M as H,s as N,n as u,p as F,q as J,t as z,v as G}from"./vue-router.5a4a176b.js";import{d as Y,r as K,g as Q,s as X,c as Z}from"./router.a2e06b6d.js";import"./linters.f64675bd.js";import"./asyncComputed.8c12b2a1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="de00203a-25f0-4765-91ff-156c71154dd6",t._sentryDebugIdIdentifier="sentry-dbid-de00203a-25f0-4765-91ff-156c71154dd6")}catch{}})();const ee={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},te=T({__name:"App",setup(t){const e={token:{colorPrimary:"#d14056",colorLink:"#d14056",colorLinkHover:"#aa3446"}};return(o,s)=>{const p=V("RouterView");return A(),I(O(S),{theme:e,"page-header":{ghost:!1}},{default:k(()=>[j("div",ee,[D(p)])]),_:1})}}});class v{async getLogin(){return await(await fetch("/_editor/api/login")).json()}async createLogin(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async deleteLogin(){await fetch("/_editor/api/login",{method:"DELETE"})}async getCloudProject(){return(await fetch("/_editor/api/login/info")).json()}static getLoginUrl(e){return"https://cloud.abstra.io/api-key?"+new URLSearchParams(e)}}const r=class{static dispatch(e,o,s=0){window.Intercom?window.Intercom(e,o):s<10?setTimeout(()=>r.dispatch(e,o),100):console.error("Intercom not loaded")}static boot(e,o){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:e,email:e,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),r.booted=!0)}static shutdown(){r.dispatch("shutdown"),r.booted=!1}};let l=r;m(l,"booted",!1);const oe={"console-url":"https://cloud.abstra.io"},ae=t=>{const e="VITE_"+h.toUpper(h.snakeCase(t)),o={VITE_SENTRY_RELEASE:"8b964e74c3445f323375630661ffba260b160678",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||oe[t]},c={consoleUrl:ae("console-url")},ne=Y("cloud-project",()=>{const t=new v,e=g(null),o=g(null),s=f(()=>{var n,i;return(i=(n=e.value)==null?void 0:n.logged)!=null?i:!1}),p=f(()=>o.value?{project:`${c.consoleUrl}/projects/${o.value.id}`,users:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=users`,roles:`${c.consoleUrl}/projects/${o.value.id}/access-control?selected-panel=roles`,builds:`${c.consoleUrl}/projects/${o.value.id}/builds`,login:`${c.consoleUrl}/api-key`}:null),w=async()=>{!s.value||(await t.deleteLogin(),window.open(location.origin+"/_editor","_self"))},y=async n=>{const i=await t.createLogin(n);e.value=i,i.logged&&await _()},_=async()=>o.value=await t.getCloudProject(),L=async()=>e.value?e.value:(e.value=await t.getLogin(),e.value.logged);return E(()=>e.value,_),E(()=>e.value,async n=>{if(n&&"info"in n){const{email:i,intercomHash:b}=n.info;l.boot(i,b)}else l.shutdown()}),{loadLogin:L,createLogin:y,deleteLogin:w,loginInfo:e,cloudProject:o,isLogged:s,links:p}}),re=K.map(t=>({...t,meta:{...t.meta,playerRoute:!0}})),d=U({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.128fb988.js"),["assets/Home.128fb988.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/Home.02a69158.css"]),children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.6da7f2fc.js"),["assets/Workspace.6da7f2fc.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/NavbarControls.687a1691.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/router.a2e06b6d.js","assets/CloseCircleOutlined.47032583.js","assets/index.33fd91d4.js","assets/index.7210f61e.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/record.fdd0857f.js","assets/popupNotifcation.083e8b59.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/PhChats.vue.5baac060.js","assets/NavbarControls.5a022bc4.css","assets/Logo.9c773c6e.js","assets/Logo.7b39b5e7.css","assets/PhIdentificationBadge.vue.cce72930.js","assets/PhCaretRight.vue.073eee8d.js","assets/PhFlowArrow.vue.d82f0790.js","assets/PhKanban.vue.4953cd42.js","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/Workspace.04fea0fa.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.b6affa12.js"),["assets/Stages.b6affa12.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/CrudView.5c88dea5.js","assets/router.b7a0a717.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/ant-design.2f4c2b3e.js","assets/asyncComputed.8c12b2a1.js","assets/string.6d768b54.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/forms.3eea2cf5.js","assets/record.fdd0857f.js","assets/ai.f8f019ca.js","assets/linters.f64675bd.js","assets/scripts.34e0f930.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/DownOutlined.885d0c05.js","assets/index.33fd91d4.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/validations.4058dd30.js","assets/Stages.a1bc3033.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.7b005cd2.js"),["assets/WorkflowEditor.7b005cd2.js","assets/LoadingContainer.9e15729c.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/LoadingContainer.56fa997a.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/model.177d5202.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/record.fdd0857f.js","assets/validations.4058dd30.js","assets/string.6d768b54.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/metadata.65ab08eb.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhKanban.vue.4953cd42.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/index.61b9d9c0.js","assets/Badge.ca8cb556.js","assets/isNumeric.75337b1e.js","assets/index.7210f61e.js","assets/index.33fd91d4.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/api.816e2ed2.js","assets/fetch.5e01ad21.js","assets/uuid.a55fa1f4.js","assets/model.e8120bce.css","assets/asyncComputed.8c12b2a1.js","assets/index.4887eff3.js","assets/WorkflowEditor.a40013ef.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.7e58bd8e.js"),["assets/WorkflowThreads.7e58bd8e.js","assets/ContentLayout.b634ded1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.a537d542.js","assets/fetch.5e01ad21.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/scripts.34e0f930.js","assets/record.fdd0857f.js","assets/api.816e2ed2.js","assets/metadata.65ab08eb.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhKanban.vue.4953cd42.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/ant-design.2f4c2b3e.js","assets/index.7210f61e.js","assets/index.eec6044c.js","assets/index.a3506df1.js","assets/index.93391300.js","assets/CollapsePanel.03c12282.js","assets/index.4887eff3.js","assets/index.f88863c8.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.47f11290.js","assets/model.177d5202.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/validations.4058dd30.js","assets/string.6d768b54.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/index.61b9d9c0.js","assets/Badge.ca8cb556.js","assets/index.33fd91d4.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/uuid.a55fa1f4.js","assets/model.e8120bce.css","assets/LoadingOutlined.ad59a8e2.js","assets/DeleteOutlined.28bae62b.js","assets/PhDownloadSimple.vue.64661cc3.js","assets/utils.ba547c2c.js","assets/WorkflowView.ae12211e.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.ad21cf26.js"),["assets/StyleEditor.ad21cf26.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/record.fdd0857f.js","assets/PlayerNavbar.e5428ca4.js","assets/router.a2e06b6d.js","assets/metadata.65ab08eb.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhKanban.vue.4953cd42.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/PhSignOut.vue.05362cff.js","assets/workspaceStore.3affa75c.js","assets/api.938ea2fe.js","assets/index.0664acb2.js","assets/PlayerNavbar.05528f8e.css","assets/Home.ad9dd56f.js","assets/Watermark.d02bbb44.js","assets/Watermark.77541699.css","assets/PhArrowSquareOut.vue.03c87537.js","assets/index.70cfa822.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/Home.24ab3da3.css","assets/WidgetsFrame.1b0bc13a.js","assets/WidgetsFrame.56c3f15a.css","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.9e15729c.js","assets/LoadingContainer.56fa997a.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/index.ff4698fd.js","assets/StyleEditor.90372372.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.cbc2f89d.js"),["assets/RequirementsEditor.cbc2f89d.js","assets/ContentLayout.b634ded1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/ContentLayout.ee57a545.css","assets/CrudView.5c88dea5.js","assets/router.b7a0a717.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/url.6cce3c3e.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/asyncComputed.8c12b2a1.js","assets/linters.f64675bd.js","assets/record.fdd0857f.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.d6913770.js"),["assets/EnvVarsEditor.d6913770.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/record.fdd0857f.js","assets/ContentLayout.b634ded1.js","assets/ContentLayout.ee57a545.css","assets/View.vue_vue_type_script_setup_true_lang.aa6d4816.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/fetch.5e01ad21.js","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/CrudView.5c88dea5.js","assets/router.b7a0a717.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/index.eec6044c.js","assets/index.7210f61e.js","assets/CrudView.80dd6085.css","assets/PhRocketLaunch.vue.057f096d.js","assets/PhPencil.vue.651d632b.js","assets/index.33fd91d4.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.b111a514.js"),["assets/VSCodeConnection.b111a514.js","assets/ContentLayout.b634ded1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/ContentLayout.ee57a545.css","assets/index.7210f61e.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.9e4dac65.js"),["assets/AccessControlEditor.9e4dac65.js","assets/ContentLayout.b634ded1.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/ContentLayout.ee57a545.css","assets/fetch.5e01ad21.js","assets/record.fdd0857f.js","assets/repository.cc272281.js","assets/gateway.2d3e20d8.js","assets/popupNotifcation.083e8b59.js","assets/asyncComputed.8c12b2a1.js","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/PhGlobe.vue.601f35a5.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/index.4887eff3.js","assets/metadata.65ab08eb.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhKanban.vue.4953cd42.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/index.eec6044c.js","assets/index.33fd91d4.js","assets/router.a2e06b6d.js","assets/linters.f64675bd.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Access Control"}}]},{path:"project-login",name:"projectLogin",component:()=>a(()=>import("./ProjectLogin.4dc0598c.js"),["assets/ProjectLogin.4dc0598c.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/Logo.9c773c6e.js","assets/Logo.7b39b5e7.css","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/index.7210f61e.js","assets/router.a2e06b6d.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/ProjectLogin.34e74986.css"]),meta:{title:"Abstra Editor",allowUnauthenticated:!0}},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.a16f6b9a.js"),["assets/FormEditor.a16f6b9a.js","assets/PlayerNavbar.e5428ca4.js","assets/router.a2e06b6d.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/metadata.65ab08eb.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhKanban.vue.4953cd42.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/PhSignOut.vue.05362cff.js","assets/workspaceStore.3affa75c.js","assets/api.938ea2fe.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/index.0664acb2.js","assets/PlayerNavbar.05528f8e.css","assets/BaseLayout.80a6be90.js","assets/BaseLayout.0156e9e1.css","assets/SourceCode.a30ec35c.js","assets/uuid.a55fa1f4.js","assets/PhCaretRight.vue.073eee8d.js","assets/ai.f8f019ca.js","assets/record.fdd0857f.js","assets/PhCopySimple.vue.28b40fbd.js","assets/LoadingOutlined.ad59a8e2.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/scripts.34e0f930.js","assets/validations.4058dd30.js","assets/string.6d768b54.js","assets/workspaces.433894c9.js","assets/PhPencil.vue.651d632b.js","assets/toggleHighContrast.06f6d3d9.js","assets/toggleHighContrast.30d77c87.css","assets/index.33fd91d4.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/FormRunner.38461560.js","assets/Login.vue_vue_type_script_setup_true_lang.03a39652.js","assets/CircularLoading.0fd3ce53.js","assets/CircularLoading.e156a2b0.css","assets/Login.e0bff752.css","assets/WidgetsFrame.1b0bc13a.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.c21cd737.js","assets/Steps.4a8d55e8.css","assets/Watermark.d02bbb44.js","assets/Watermark.77541699.css","assets/FormRunner.478904b2.css","assets/api.816e2ed2.js","assets/fetch.5e01ad21.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/PhFlowArrow.vue.d82f0790.js","assets/forms.3eea2cf5.js","assets/ThreadSelector.af036ffe.js","assets/index.a3506df1.js","assets/index.4887eff3.js","assets/ThreadSelector.8aa77ab2.css","assets/index.bdcba198.js","assets/index.7210f61e.js","assets/NavbarControls.687a1691.js","assets/CloseCircleOutlined.47032583.js","assets/popupNotifcation.083e8b59.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/PhChats.vue.5baac060.js","assets/NavbarControls.5a022bc4.css","assets/index.ecd544a2.js","assets/Badge.ca8cb556.js","assets/isNumeric.75337b1e.js","assets/FormEditor.ab3513d3.css"]),meta:{title:"Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.dec49448.js"),["assets/JobEditor.dec49448.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.a30ec35c.js","assets/uuid.a55fa1f4.js","assets/PhCaretRight.vue.073eee8d.js","assets/ai.f8f019ca.js","assets/record.fdd0857f.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhCopySimple.vue.28b40fbd.js","assets/LoadingOutlined.ad59a8e2.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/scripts.34e0f930.js","assets/validations.4058dd30.js","assets/string.6d768b54.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/PhPencil.vue.651d632b.js","assets/toggleHighContrast.06f6d3d9.js","assets/toggleHighContrast.30d77c87.css","assets/index.33fd91d4.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/dayjs.04637d8b.js","assets/index.8323aa26.js","assets/index.eec6044c.js","assets/index.79256a1c.js","assets/index.7210f61e.js","assets/RunButton.vue_vue_type_script_setup_true_lang.0b717475.js","assets/NavbarControls.687a1691.js","assets/router.a2e06b6d.js","assets/CloseCircleOutlined.47032583.js","assets/popupNotifcation.083e8b59.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/PhChats.vue.5baac060.js","assets/NavbarControls.5a022bc4.css","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/index.bdcba198.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.df2d6884.js"),["assets/HookEditor.df2d6884.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.a30ec35c.js","assets/uuid.a55fa1f4.js","assets/PhCaretRight.vue.073eee8d.js","assets/ai.f8f019ca.js","assets/record.fdd0857f.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhCopySimple.vue.28b40fbd.js","assets/LoadingOutlined.ad59a8e2.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/scripts.34e0f930.js","assets/validations.4058dd30.js","assets/string.6d768b54.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/PhPencil.vue.651d632b.js","assets/toggleHighContrast.06f6d3d9.js","assets/toggleHighContrast.30d77c87.css","assets/index.33fd91d4.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0b717475.js","assets/api.816e2ed2.js","assets/fetch.5e01ad21.js","assets/metadata.65ab08eb.js","assets/PhKanban.vue.4953cd42.js","assets/PhWebhooksLogo.vue.e2e0c1c4.js","assets/ThreadSelector.af036ffe.js","assets/index.a3506df1.js","assets/index.4887eff3.js","assets/ThreadSelector.8aa77ab2.css","assets/index.a8165808.js","assets/CollapsePanel.03c12282.js","assets/index.7210f61e.js","assets/Badge.ca8cb556.js","assets/isNumeric.75337b1e.js","assets/index.eec6044c.js","assets/NavbarControls.687a1691.js","assets/router.a2e06b6d.js","assets/CloseCircleOutlined.47032583.js","assets/popupNotifcation.083e8b59.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/PhChats.vue.5baac060.js","assets/NavbarControls.5a022bc4.css","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/index.bdcba198.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.e12a1e18.js"),["assets/ScriptEditor.e12a1e18.js","assets/BaseLayout.80a6be90.js","assets/vue-router.5a4a176b.js","assets/vue-router.0f7254c6.css","assets/BaseLayout.0156e9e1.css","assets/SourceCode.a30ec35c.js","assets/uuid.a55fa1f4.js","assets/PhCaretRight.vue.073eee8d.js","assets/ai.f8f019ca.js","assets/record.fdd0857f.js","assets/PhCheckCircle.vue.dff50ba3.js","assets/PhCopySimple.vue.28b40fbd.js","assets/LoadingOutlined.ad59a8e2.js","assets/linters.f64675bd.js","assets/asyncComputed.8c12b2a1.js","assets/scripts.34e0f930.js","assets/validations.4058dd30.js","assets/string.6d768b54.js","assets/workspaces.433894c9.js","assets/runnerData.2ad7ba79.js","assets/url.6cce3c3e.js","assets/PhPencil.vue.651d632b.js","assets/toggleHighContrast.06f6d3d9.js","assets/toggleHighContrast.30d77c87.css","assets/index.33fd91d4.js","assets/Card.07bdefa4.js","assets/TabPane.5b172faf.js","assets/SourceCode.29fa67a3.css","assets/SaveButton.05b5362a.js","assets/ExclamationCircleOutlined.b383d7e9.js","assets/SaveButton.ae5051de.css","assets/ThreadSelector.af036ffe.js","assets/index.a3506df1.js","assets/index.4887eff3.js","assets/ThreadSelector.8aa77ab2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.0b717475.js","assets/NavbarControls.687a1691.js","assets/router.a2e06b6d.js","assets/CloseCircleOutlined.47032583.js","assets/index.7210f61e.js","assets/popupNotifcation.083e8b59.js","assets/PhArrowSquareOut.vue.03c87537.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0657260e.js","assets/BookOutlined.9493568c.js","assets/PhChats.vue.5baac060.js","assets/NavbarControls.5a022bc4.css","assets/index.ecd544a2.js","assets/index.0664acb2.js","assets/index.bdcba198.js","assets/CollapsePanel.03c12282.js","assets/Badge.ca8cb556.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...re],scrollBehavior(t){if(t.hash)return{el:t.hash}}}),se=Q(d);d.beforeEach(async(t,e)=>{if(t.meta.playerRoute)return se(t,e);$(t,e);const o=ne();if(!t.meta.allowUnauthenticated&&!o.isLogged&&!await o.loadLogin()){const s={redirect:location.origin+"/_editor/project-login"};window.open(v.getLoginUrl(s),"_self")}});(async()=>{await X();const t=Z(),e=W({render:()=>F(te)});x.init(),B(e,d),e.use(d),e.use(M),e.use(t),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",H),e.component("Message",N),u(e,J),u(e,z),u(e,G)})();export{c as E,ne as u};
//# sourceMappingURL=editor.97a7ddce.js.map
