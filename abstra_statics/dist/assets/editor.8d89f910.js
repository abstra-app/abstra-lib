var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.94ca2a88.js";import{r as N,g as F,s as J}from"./index.efd0f35e.js";import"./workspaces.36896d70.js";import{a as G}from"./asyncComputed.cfb7c22a.js";import"./fetch.ea7841ea.js";import"./pubsub.26933d99.js";import"./runnerData.5f955b01.js";import"./url.5d104764.js";import"./record.d98ba384.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1e75ec7e-3e3a-4b20-94cd-17691d83fe8b",e._sentryDebugIdIdentifier="sentry-dbid-1e75ec7e-3e3a-4b20-94cd-17691d83fe8b")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.d2702e4a.js"),["assets/Home.d2702e4a.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.86525735.js"),["assets/Workspace.86525735.js","assets/BaseLayout.c23d9e33.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.6f146cdf.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/index.efd0f35e.js","assets/fetch.ea7841ea.js","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.22d2020b.js","assets/index.2f3cb0a5.js","assets/index.c7b97287.js","assets/popupNotifcation.12f2745f.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/PhChats.vue.2d44294f.js","assets/NavbarControls.ccf0ba15.css","assets/PhIdentificationBadge.vue.04484474.js","assets/PhCaretRight.vue.8f0daff2.js","assets/PhFlowArrow.vue.dc3200a6.js","assets/PhKanban.vue.b64c4f2f.js","assets/index.7ada3792.js","assets/index.9bd21784.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.74fcdda2.js"),["assets/Stages.74fcdda2.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/ContentLayout.62c2c462.js","assets/ContentLayout.ee57a545.css","assets/CrudView.7f80fc8b.js","assets/router.cca53104.js","assets/gateway.2b419519.js","assets/popupNotifcation.12f2745f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/url.5d104764.js","assets/index.3f7a8f1c.js","assets/index.c7b97287.js","assets/CrudView.a8b105cf.css","assets/ant-design.390ca1cd.js","assets/asyncComputed.cfb7c22a.js","assets/string.ae3c25fe.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/workspaces.36896d70.js","assets/runnerData.5f955b01.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/forms.07dd9e17.js","assets/jobs.ac865def.js","assets/scripts.09116b71.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/validations.2297a4b5.js","assets/index.2f3cb0a5.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.99a14990.js"),["assets/WorkflowEditor.99a14990.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4fcff792.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/LoadingContainer.79e8952a.js","assets/LoadingContainer.8bd9cc72.css","assets/model.4f9e95d1.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/validations.2297a4b5.js","assets/string.ae3c25fe.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/metadata.92f2a94f.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhKanban.vue.b64c4f2f.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/index.ae0f2171.js","assets/Badge.375c34fb.js","assets/isNumeric.75337b1e.js","assets/index.c7b97287.js","assets/index.2f3cb0a5.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/api.6187ec1d.js","assets/fetch.ea7841ea.js","assets/uuid.6ef3e3e8.js","assets/model.f4a37ee0.css","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/index.94d1687f.js","assets/WorkflowEditor.46cbf7cc.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.6949e87f.js"),["assets/WorkflowThreads.6949e87f.js","assets/ContentLayout.62c2c462.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/WorkflowView.e17fcc3c.js","assets/fetch.ea7841ea.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/scripts.09116b71.js","assets/api.6187ec1d.js","assets/metadata.92f2a94f.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhKanban.vue.b64c4f2f.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/ant-design.390ca1cd.js","assets/index.c7b97287.js","assets/index.3f7a8f1c.js","assets/index.c5c6cbe0.js","assets/index.0fb5bc47.js","assets/CollapsePanel.82789b52.js","assets/index.94d1687f.js","assets/index.b39c6e15.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.b1e3328c.js","assets/model.4f9e95d1.js","assets/validations.2297a4b5.js","assets/string.ae3c25fe.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/index.ae0f2171.js","assets/Badge.375c34fb.js","assets/index.2f3cb0a5.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/uuid.6ef3e3e8.js","assets/model.f4a37ee0.css","assets/LoadingOutlined.cfe1000e.js","assets/DeleteOutlined.673df44d.js","assets/PhDownloadSimple.vue.4d9b879a.js","assets/utils.7b36589b.js","assets/WorkflowView.53959543.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.18316e79.js"),["assets/StyleEditor.18316e79.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/PlayerNavbar.eaacab7e.js","assets/metadata.92f2a94f.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhKanban.vue.b64c4f2f.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/PhSignOut.vue.4c78f850.js","assets/index.9bd21784.js","assets/PlayerNavbar.77c5318b.css","assets/Home.a6af219b.js","assets/api.7fa02f93.js","assets/index.efd0f35e.js","assets/fetch.ea7841ea.js","assets/Watermark.97485df6.js","assets/Watermark.f2e1adbe.css","assets/WidgetsFrame.5fb37c62.js","assets/WidgetsFrame.56c3f15a.css","assets/PhArrowSquareOut.vue.ff746d46.js","assets/index.abe1d89e.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/Home.30eed429.css","assets/ContentLayout.62c2c462.js","assets/ContentLayout.ee57a545.css","assets/LoadingContainer.79e8952a.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/index.6f66e90a.js","assets/StyleEditor.4c57e5df.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.891ca9ee.js"),["assets/RequirementsEditor.891ca9ee.js","assets/ContentLayout.62c2c462.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/CrudView.7f80fc8b.js","assets/router.cca53104.js","assets/gateway.2b419519.js","assets/popupNotifcation.12f2745f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/url.5d104764.js","assets/index.3f7a8f1c.js","assets/index.c7b97287.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.cfb7c22a.js","assets/workspaces.36896d70.js","assets/runnerData.5f955b01.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.d1277345.js"),["assets/EnvVarsEditor.d1277345.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/ContentLayout.62c2c462.js","assets/ContentLayout.ee57a545.css","assets/CrudView.7f80fc8b.js","assets/router.cca53104.js","assets/gateway.2b419519.js","assets/popupNotifcation.12f2745f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/index.3f7a8f1c.js","assets/index.c7b97287.js","assets/CrudView.a8b105cf.css","assets/index.2f3cb0a5.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.9d85cb76.js"),["assets/VSCodeConnection.9d85cb76.js","assets/ContentLayout.62c2c462.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/index.c7b97287.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.5eb67987.js"),["assets/AccessControlEditor.5eb67987.js","assets/ContentLayout.62c2c462.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/ContentLayout.ee57a545.css","assets/fetch.ea7841ea.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/repository.a8d29257.js","assets/gateway.2b419519.js","assets/popupNotifcation.12f2745f.js","assets/asyncComputed.cfb7c22a.js","assets/workspaces.36896d70.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.b7637450.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/index.94d1687f.js","assets/metadata.92f2a94f.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhKanban.vue.b64c4f2f.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/index.3f7a8f1c.js","assets/index.2f3cb0a5.js","assets/index.efd0f35e.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.32785cc8.js"),["assets/FormEditor.32785cc8.js","assets/PlayerNavbar.eaacab7e.js","assets/metadata.92f2a94f.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhKanban.vue.b64c4f2f.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/PhSignOut.vue.4c78f850.js","assets/index.9bd21784.js","assets/PlayerNavbar.77c5318b.css","assets/index.efd0f35e.js","assets/fetch.ea7841ea.js","assets/pubsub.26933d99.js","assets/BaseLayout.c23d9e33.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6f741830.js","assets/uuid.6ef3e3e8.js","assets/PhCaretRight.vue.8f0daff2.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/PhCopySimple.vue.5efb4dcf.js","assets/LoadingOutlined.cfe1000e.js","assets/jobs.ac865def.js","assets/scripts.09116b71.js","assets/validations.2297a4b5.js","assets/string.ae3c25fe.js","assets/PhPencil.vue.3924d32e.js","assets/toggleHighContrast.06c8577e.js","assets/toggleHighContrast.30d77c87.css","assets/index.2f3cb0a5.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/SourceCode.6630db20.css","assets/FormRunner.806b0e39.js","assets/Login.vue_vue_type_script_setup_true_lang.64d02b74.js","assets/CircularLoading.51581880.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.0d9637b5.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.5fb37c62.js","assets/WidgetsFrame.56c3f15a.css","assets/Steps.6482b719.js","assets/Steps.4a8d55e8.css","assets/Watermark.97485df6.js","assets/Watermark.f2e1adbe.css","assets/FormRunner.825d7e27.css","assets/api.6187ec1d.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/PhFlowArrow.vue.dc3200a6.js","assets/forms.07dd9e17.js","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.f0072980.js","assets/index.c5c6cbe0.js","assets/index.94d1687f.js","assets/ThreadSelector.087a85c2.css","assets/index.762956c8.js","assets/index.c7b97287.js","assets/NavbarControls.6f146cdf.js","assets/CloseCircleOutlined.22d2020b.js","assets/popupNotifcation.12f2745f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/PhChats.vue.2d44294f.js","assets/NavbarControls.ccf0ba15.css","assets/index.7ada3792.js","assets/Badge.375c34fb.js","assets/isNumeric.75337b1e.js","assets/FormEditor.c8b3c735.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.710333ea.js"),["assets/JobEditor.710333ea.js","assets/BaseLayout.c23d9e33.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6f741830.js","assets/uuid.6ef3e3e8.js","assets/PhCaretRight.vue.8f0daff2.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhCopySimple.vue.5efb4dcf.js","assets/LoadingOutlined.cfe1000e.js","assets/jobs.ac865def.js","assets/scripts.09116b71.js","assets/validations.2297a4b5.js","assets/string.ae3c25fe.js","assets/PhPencil.vue.3924d32e.js","assets/toggleHighContrast.06c8577e.js","assets/toggleHighContrast.30d77c87.css","assets/index.2f3cb0a5.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/SourceCode.6630db20.css","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/dayjs.985c76ab.js","assets/index.fa6015fc.js","assets/index.3f7a8f1c.js","assets/index.d1c6c62a.js","assets/index.c7b97287.js","assets/RunButton.vue_vue_type_script_setup_true_lang.b6041e69.js","assets/NavbarControls.6f146cdf.js","assets/index.efd0f35e.js","assets/fetch.ea7841ea.js","assets/CloseCircleOutlined.22d2020b.js","assets/popupNotifcation.12f2745f.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/PhChats.vue.2d44294f.js","assets/NavbarControls.ccf0ba15.css","assets/index.7ada3792.js","assets/index.9bd21784.js","assets/index.762956c8.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.91937faf.js"),["assets/HookEditor.91937faf.js","assets/BaseLayout.c23d9e33.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6f741830.js","assets/uuid.6ef3e3e8.js","assets/PhCaretRight.vue.8f0daff2.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhCopySimple.vue.5efb4dcf.js","assets/LoadingOutlined.cfe1000e.js","assets/jobs.ac865def.js","assets/scripts.09116b71.js","assets/validations.2297a4b5.js","assets/string.ae3c25fe.js","assets/PhPencil.vue.3924d32e.js","assets/toggleHighContrast.06c8577e.js","assets/toggleHighContrast.30d77c87.css","assets/index.2f3cb0a5.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/SourceCode.6630db20.css","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.b6041e69.js","assets/api.6187ec1d.js","assets/fetch.ea7841ea.js","assets/metadata.92f2a94f.js","assets/PhKanban.vue.b64c4f2f.js","assets/PhScroll.vue.48f82ff1.js","assets/PhWebhooksLogo.vue.6228304d.js","assets/ThreadSelector.f0072980.js","assets/index.c5c6cbe0.js","assets/index.94d1687f.js","assets/ThreadSelector.087a85c2.css","assets/index.dab87fb7.js","assets/CollapsePanel.82789b52.js","assets/index.c7b97287.js","assets/Badge.375c34fb.js","assets/isNumeric.75337b1e.js","assets/index.3f7a8f1c.js","assets/NavbarControls.6f146cdf.js","assets/index.efd0f35e.js","assets/CloseCircleOutlined.22d2020b.js","assets/popupNotifcation.12f2745f.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/PhChats.vue.2d44294f.js","assets/NavbarControls.ccf0ba15.css","assets/index.7ada3792.js","assets/index.9bd21784.js","assets/index.762956c8.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.0a7955fc.js"),["assets/ScriptEditor.0a7955fc.js","assets/BaseLayout.c23d9e33.js","assets/outputWidgets.94ca2a88.js","assets/outputWidgets.588bd82c.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.6f741830.js","assets/uuid.6ef3e3e8.js","assets/PhCaretRight.vue.8f0daff2.js","assets/workspaces.36896d70.js","assets/asyncComputed.cfb7c22a.js","assets/runnerData.5f955b01.js","assets/url.5d104764.js","assets/record.d98ba384.js","assets/pubsub.26933d99.js","assets/PhCheckCircle.vue.9dc47a8d.js","assets/PhCopySimple.vue.5efb4dcf.js","assets/LoadingOutlined.cfe1000e.js","assets/jobs.ac865def.js","assets/scripts.09116b71.js","assets/validations.2297a4b5.js","assets/string.ae3c25fe.js","assets/PhPencil.vue.3924d32e.js","assets/toggleHighContrast.06c8577e.js","assets/toggleHighContrast.30d77c87.css","assets/index.2f3cb0a5.js","assets/Card.c98740b0.js","assets/TabPane.9ffbbc04.js","assets/SourceCode.6630db20.css","assets/SaveButton.82754a21.js","assets/UnsavedChangesHandler.457da6ee.js","assets/ExclamationCircleOutlined.9e17f271.js","assets/UnsavedChangesHandler.13f48cd6.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.f0072980.js","assets/index.c5c6cbe0.js","assets/index.94d1687f.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.b6041e69.js","assets/NavbarControls.6f146cdf.js","assets/index.efd0f35e.js","assets/fetch.ea7841ea.js","assets/CloseCircleOutlined.22d2020b.js","assets/index.c7b97287.js","assets/popupNotifcation.12f2745f.js","assets/PhArrowSquareOut.vue.ff746d46.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.82af7963.js","assets/BookOutlined.040199a2.js","assets/PhChats.vue.2d44294f.js","assets/NavbarControls.ccf0ba15.css","assets/index.7ada3792.js","assets/index.9bd21784.js","assets/index.762956c8.js","assets/CollapsePanel.82789b52.js","assets/Badge.375c34fb.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.8d89f910.js.map
