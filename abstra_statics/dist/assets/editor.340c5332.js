var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.c3ecc2b1.js";import{r as N,g as F,s as J}from"./index.f6d662ae.js";import"./envVars.8a15efd1.js";import{a as G}from"./asyncComputed.f49c8454.js";import"./fetch.678769dc.js";import"./pubsub.9ec6a6b2.js";import"./runnerData.cce2cc97.js";import"./url.937ab03b.js";import"./record.fd55283b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fddacca7-9318-4043-a7d0-084428d1642e",e._sentryDebugIdIdentifier="sentry-dbid-fddacca7-9318-4043-a7d0-084428d1642e")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.080e12dc.js"),["assets/Home.080e12dc.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.55943b70.js"),["assets/Workspace.55943b70.js","assets/BaseLayout.1a765ee9.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.8b22491e.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/index.f6d662ae.js","assets/fetch.678769dc.js","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.7c706a68.js","assets/Link.44cd2c29.js","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.834a9fbb.js","assets/index.4a1820b9.js","assets/popupNotifcation.950158d4.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/index.8431f764.js","assets/Text.b92a3acf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/PhChats.vue.f2a93eb8.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.890b0bc4.js","assets/PhCaretRight.vue.e436827a.js","assets/PhFlowArrow.vue.e9797aaf.js","assets/PhKanban.vue.eddf471e.js","assets/index.47cbeda6.js","assets/index.ebe955af.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.b183c3fb.js"),["assets/Stages.b183c3fb.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6fad375e.js","assets/ContentLayout.6dd20759.css","assets/CrudView.dc4ba083.js","assets/router.6c733e48.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/popupNotifcation.950158d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/url.937ab03b.js","assets/Paragraph.1ab8946c.js","assets/Base.7c706a68.js","assets/Modal.16040c9a.js","assets/index.8431f764.js","assets/Title.b86344ee.js","assets/Text.b92a3acf.js","assets/index.eac3c6bf.js","assets/CrudView.a8b105cf.css","assets/ant-design.95e8db0e.js","assets/index.c34a360d.js","assets/asyncComputed.f49c8454.js","assets/string.c848e656.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/forms.8ff7cae0.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/jobs.e0e2c473.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/scripts.fa4fab9b.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/validations.3f21f6c0.js","assets/index.4a1820b9.js","assets/Link.44cd2c29.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.a12cd31c.js"),["assets/WorkflowEditor.a12cd31c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.be3e161e.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/LoadingContainer.05a67cd5.js","assets/LoadingContainer.8bd9cc72.css","assets/Text.b92a3acf.js","assets/Base.7c706a68.js","assets/validations.3f21f6c0.js","assets/string.c848e656.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/metadata.1ed17458.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhKanban.vue.eddf471e.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/index.5da0ce2f.js","assets/Badge.be1b05ab.js","assets/isNumeric.75337b1e.js","assets/index.8431f764.js","assets/index.4a1820b9.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/Modal.16040c9a.js","assets/api.8364a2eb.js","assets/uuid.926f869d.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.d729b9b4.js","assets/WorkflowEditor.47e28a49.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.58fefdb9.js"),["assets/WorkflowThreads.58fefdb9.js","assets/ContentLayout.6fad375e.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.96b2aa58.js","assets/fetch.678769dc.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/scripts.fa4fab9b.js","assets/api.8364a2eb.js","assets/metadata.1ed17458.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhKanban.vue.eddf471e.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/ant-design.95e8db0e.js","assets/index.c34a360d.js","assets/Modal.16040c9a.js","assets/Text.b92a3acf.js","assets/Base.7c706a68.js","assets/index.8431f764.js","assets/index.eac3c6bf.js","assets/index.621e1942.js","assets/Paragraph.1ab8946c.js","assets/index.75039e08.js","assets/Link.44cd2c29.js","assets/Title.b86344ee.js","assets/index.d6df5cc4.js","assets/CollapsePanel.90a567fd.js","assets/index.d729b9b4.js","assets/index.29436a36.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.496c9c05.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/hasIn.e5eb91ac.js","assets/LoadingOutlined.26805570.js","assets/index.3a585760.js","assets/Form.9d8f3e0d.js","assets/string.c848e656.js","assets/TableView.89fe359a.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.2d44ee9c.js"),["assets/StyleEditor.2d44ee9c.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/PlayerNavbar.0327d110.js","assets/metadata.1ed17458.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhKanban.vue.eddf471e.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/PhSignOut.vue.58649786.js","assets/index.ebe955af.js","assets/Text.b92a3acf.js","assets/Base.7c706a68.js","assets/PlayerNavbar.6ea5acc6.css","assets/Home.ebe39e2a.js","assets/api.c4ba2031.js","assets/index.f6d662ae.js","assets/fetch.678769dc.js","assets/WidgetsFrame.829901e7.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/index.75039e08.js","assets/Link.44cd2c29.js","assets/Paragraph.1ab8946c.js","assets/Title.b86344ee.js","assets/index.8431f764.js","assets/index.74996c64.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/hasIn.e5eb91ac.js","assets/Home.c9754666.css","assets/ContentLayout.6fad375e.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.05a67cd5.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.9d8f3e0d.js","assets/StyleEditor.448475ef.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.916483c6.js"),["assets/RequirementsEditor.916483c6.js","assets/ContentLayout.6fad375e.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/CrudView.dc4ba083.js","assets/router.6c733e48.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/popupNotifcation.950158d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/url.937ab03b.js","assets/Paragraph.1ab8946c.js","assets/Base.7c706a68.js","assets/Modal.16040c9a.js","assets/index.8431f764.js","assets/Title.b86344ee.js","assets/Text.b92a3acf.js","assets/index.eac3c6bf.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.f49c8454.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.40dab83f.js"),["assets/EnvVarsEditor.40dab83f.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/ContentLayout.6fad375e.js","assets/ContentLayout.6dd20759.css","assets/CrudView.dc4ba083.js","assets/router.6c733e48.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/popupNotifcation.950158d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/Paragraph.1ab8946c.js","assets/Base.7c706a68.js","assets/Modal.16040c9a.js","assets/index.8431f764.js","assets/Title.b86344ee.js","assets/Text.b92a3acf.js","assets/index.eac3c6bf.js","assets/CrudView.a8b105cf.css","assets/index.4a1820b9.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.70f4954b.js"),["assets/VSCodeConnection.70f4954b.js","assets/ContentLayout.6fad375e.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/Title.b86344ee.js","assets/Base.7c706a68.js","assets/Paragraph.1ab8946c.js","assets/Text.b92a3acf.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.45fd6858.js"),["assets/AccessControlEditor.45fd6858.js","assets/ContentLayout.6fad375e.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/fetch.678769dc.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/repository.c5de0500.js","assets/router.6c733e48.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/popupNotifcation.950158d4.js","assets/asyncComputed.f49c8454.js","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.7c706a68.js","assets/Link.44cd2c29.js","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.af14f741.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/TabPane.bb3017f8.js","assets/index.d729b9b4.js","assets/metadata.1ed17458.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhKanban.vue.eddf471e.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/index.8431f764.js","assets/Text.b92a3acf.js","assets/index.eac3c6bf.js","assets/index.4a1820b9.js","assets/Paragraph.1ab8946c.js","assets/CrudView.dc4ba083.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/Title.b86344ee.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.76ace840.js","assets/index.29436a36.js","assets/isNumeric.75337b1e.js","assets/index.f6d662ae.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.c553fc52.js"),["assets/FormEditor.c553fc52.js","assets/PlayerNavbar.0327d110.js","assets/metadata.1ed17458.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhKanban.vue.eddf471e.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/PhSignOut.vue.58649786.js","assets/index.ebe955af.js","assets/Text.b92a3acf.js","assets/Base.7c706a68.js","assets/PlayerNavbar.6ea5acc6.css","assets/index.f6d662ae.js","assets/fetch.678769dc.js","assets/pubsub.9ec6a6b2.js","assets/BaseLayout.1a765ee9.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.cd649628.js","assets/uuid.926f869d.js","assets/PhCaretRight.vue.e436827a.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/asyncComputed.f49c8454.js","assets/PhCopySimple.vue.f1acd59f.js","assets/LoadingOutlined.26805570.js","assets/jobs.e0e2c473.js","assets/scripts.fa4fab9b.js","assets/validations.3f21f6c0.js","assets/string.c848e656.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/PhPencil.vue.76ace840.js","assets/toggleHighContrast.d1177682.js","assets/toggleHighContrast.30d77c87.css","assets/index.8431f764.js","assets/index.4a1820b9.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/SourceCode.8c2e8b74.css","assets/FormRunner.a2d14b95.js","assets/Login.vue_vue_type_script_setup_true_lang.9487d8a9.js","assets/Link.44cd2c29.js","assets/index.75039e08.js","assets/Paragraph.1ab8946c.js","assets/Title.b86344ee.js","assets/CircularLoading.d647bce0.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.e424942a.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.829901e7.js","assets/WidgetsFrame.c4d00f60.css","assets/Steps.44e3a15b.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.0f163988.js","assets/FormRunner.a26d57e3.css","assets/api.8364a2eb.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/PhFlowArrow.vue.e9797aaf.js","assets/forms.8ff7cae0.js","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.073864e8.js","assets/index.621e1942.js","assets/index.d729b9b4.js","assets/ThreadSelector.8a6709c0.css","assets/index.63b98229.js","assets/NavbarControls.8b22491e.js","assets/CloseCircleOutlined.834a9fbb.js","assets/popupNotifcation.950158d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/PhChats.vue.f2a93eb8.js","assets/NavbarControls.8ea605da.css","assets/index.47cbeda6.js","assets/Badge.be1b05ab.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7a6b2bd9.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.787b3472.js"),["assets/JobEditor.787b3472.js","assets/BaseLayout.1a765ee9.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.cd649628.js","assets/uuid.926f869d.js","assets/PhCaretRight.vue.e436827a.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhCopySimple.vue.f1acd59f.js","assets/LoadingOutlined.26805570.js","assets/jobs.e0e2c473.js","assets/scripts.fa4fab9b.js","assets/validations.3f21f6c0.js","assets/string.c848e656.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/PhPencil.vue.76ace840.js","assets/toggleHighContrast.d1177682.js","assets/toggleHighContrast.30d77c87.css","assets/index.8431f764.js","assets/index.4a1820b9.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.7c706a68.js","assets/Link.44cd2c29.js","assets/SaveButton.ccfb7431.css","assets/index.b1de95a5.js","assets/index.eac3c6bf.js","assets/dayjs.e9d8e18f.js","assets/index.e06d414e.js","assets/Title.b86344ee.js","assets/RunButton.vue_vue_type_script_setup_true_lang.7168998c.js","assets/NavbarControls.8b22491e.js","assets/index.f6d662ae.js","assets/fetch.678769dc.js","assets/CloseCircleOutlined.834a9fbb.js","assets/popupNotifcation.950158d4.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/Text.b92a3acf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/PhChats.vue.f2a93eb8.js","assets/NavbarControls.8ea605da.css","assets/index.47cbeda6.js","assets/index.ebe955af.js","assets/index.63b98229.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.f0fd23b1.js"),["assets/HookEditor.f0fd23b1.js","assets/BaseLayout.1a765ee9.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.cd649628.js","assets/uuid.926f869d.js","assets/PhCaretRight.vue.e436827a.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhCopySimple.vue.f1acd59f.js","assets/LoadingOutlined.26805570.js","assets/jobs.e0e2c473.js","assets/scripts.fa4fab9b.js","assets/validations.3f21f6c0.js","assets/string.c848e656.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/PhPencil.vue.76ace840.js","assets/toggleHighContrast.d1177682.js","assets/toggleHighContrast.30d77c87.css","assets/index.8431f764.js","assets/index.4a1820b9.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.7c706a68.js","assets/Link.44cd2c29.js","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7168998c.js","assets/api.8364a2eb.js","assets/metadata.1ed17458.js","assets/PhKanban.vue.eddf471e.js","assets/PhScroll.vue.466c1e5d.js","assets/PhWebhooksLogo.vue.373b2f57.js","assets/ThreadSelector.073864e8.js","assets/index.621e1942.js","assets/index.d729b9b4.js","assets/ThreadSelector.8a6709c0.css","assets/index.d03c0247.js","assets/CollapsePanel.90a567fd.js","assets/Badge.be1b05ab.js","assets/isNumeric.75337b1e.js","assets/Text.b92a3acf.js","assets/index.eac3c6bf.js","assets/NavbarControls.8b22491e.js","assets/index.f6d662ae.js","assets/fetch.678769dc.js","assets/CloseCircleOutlined.834a9fbb.js","assets/popupNotifcation.950158d4.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/PhChats.vue.f2a93eb8.js","assets/NavbarControls.8ea605da.css","assets/index.47cbeda6.js","assets/index.ebe955af.js","assets/index.63b98229.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.b7ae6328.js"),["assets/ScriptEditor.b7ae6328.js","assets/BaseLayout.1a765ee9.js","assets/outputWidgets.c3ecc2b1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.cd649628.js","assets/uuid.926f869d.js","assets/PhCaretRight.vue.e436827a.js","assets/envVars.8a15efd1.js","assets/runnerData.cce2cc97.js","assets/url.937ab03b.js","assets/record.fd55283b.js","assets/pubsub.9ec6a6b2.js","assets/asyncComputed.f49c8454.js","assets/PhCheckCircle.vue.6c0ed5ba.js","assets/PhCopySimple.vue.f1acd59f.js","assets/LoadingOutlined.26805570.js","assets/jobs.e0e2c473.js","assets/scripts.fa4fab9b.js","assets/validations.3f21f6c0.js","assets/string.c848e656.js","assets/Form.9d8f3e0d.js","assets/hasIn.e5eb91ac.js","assets/PhPencil.vue.76ace840.js","assets/toggleHighContrast.d1177682.js","assets/toggleHighContrast.30d77c87.css","assets/index.8431f764.js","assets/index.4a1820b9.js","assets/Card.653f5f4a.js","assets/TabPane.bb3017f8.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.6055caf4.js","assets/UnsavedChangesHandler.e41d9f16.js","assets/ExclamationCircleOutlined.b06ff78b.js","assets/Modal.16040c9a.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.7c706a68.js","assets/Link.44cd2c29.js","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.073864e8.js","assets/index.621e1942.js","assets/index.d729b9b4.js","assets/ThreadSelector.8a6709c0.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7168998c.js","assets/NavbarControls.8b22491e.js","assets/index.f6d662ae.js","assets/fetch.678769dc.js","assets/CloseCircleOutlined.834a9fbb.js","assets/popupNotifcation.950158d4.js","assets/PhArrowSquareOut.vue.ec3c5517.js","assets/Text.b92a3acf.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.d74146da.js","assets/BookOutlined.9b386dd2.js","assets/PhChats.vue.f2a93eb8.js","assets/NavbarControls.8ea605da.css","assets/index.47cbeda6.js","assets/index.ebe955af.js","assets/index.63b98229.js","assets/CollapsePanel.90a567fd.js","assets/Badge.be1b05ab.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.340c5332.js.map
