var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.8e22ccc1.js";import{r as N,g as F,s as J}from"./index.c7ce6f1a.js";import"./envVars.0916ce1a.js";import{a as G}from"./asyncComputed.4e9770a4.js";import"./fetch.638d0759.js";import"./pubsub.74b3d4ce.js";import"./runnerData.1d025816.js";import"./url.eeed4570.js";import"./record.ec7658ae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5ae4d51e-2432-4392-88b3-0ba69f541774",e._sentryDebugIdIdentifier="sentry-dbid-5ae4d51e-2432-4392-88b3-0ba69f541774")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.03e1739a.js"),["assets/Home.03e1739a.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.12e82726.js"),["assets/Workspace.12e82726.js","assets/BaseLayout.aaa67e43.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.2292ae20.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/index.c7ce6f1a.js","assets/fetch.638d0759.js","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.4843c88f.js","assets/Link.17b71136.js","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.6808daf2.js","assets/index.7692f455.js","assets/popupNotifcation.a4eabbc5.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/index.72c2e68b.js","assets/Text.c4e810d3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/PhChats.vue.9a7ab8b6.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.04b70e67.js","assets/PhCaretRight.vue.c582d10c.js","assets/PhFlowArrow.vue.634c023f.js","assets/PhKanban.vue.814574c2.js","assets/index.9e90d37d.js","assets/index.45c270b4.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.30419f18.js"),["assets/Stages.30419f18.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/CrudView.a3b3fee1.js","assets/router.6fc18345.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/asyncComputed.4e9770a4.js","assets/string.b4749b4f.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/forms.25a82a14.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/jobs.74d5894e.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/scripts.fe1761c7.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/validations.ca160d86.js","assets/index.7692f455.js","assets/Link.17b71136.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.e390ca00.js"),["assets/WorkflowEditor.e390ca00.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0f064972.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/LoadingContainer.eef50bf4.js","assets/LoadingContainer.8bd9cc72.css","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/validations.ca160d86.js","assets/string.b4749b4f.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/metadata.5ac454ee.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhKanban.vue.814574c2.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/index.6fb119e0.js","assets/Badge.897fea04.js","assets/isNumeric.75337b1e.js","assets/index.72c2e68b.js","assets/index.7692f455.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/Modal.88fcbc95.js","assets/api.711c28bb.js","assets/uuid.0b0e4009.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.8637e771.js","assets/WorkflowEditor.47e28a49.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.12e3860e.js"),["assets/WorkflowThreads.12e3860e.js","assets/ContentLayout.32d383cb.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.d5d106b4.js","assets/fetch.638d0759.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/scripts.fe1761c7.js","assets/api.711c28bb.js","assets/metadata.5ac454ee.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhKanban.vue.814574c2.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/ant-design.0fc06893.js","assets/index.0ecf4f2f.js","assets/Modal.88fcbc95.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/index.72c2e68b.js","assets/index.547193f7.js","assets/index.d6cd7d3d.js","assets/Paragraph.e3fa7fcc.js","assets/index.db9d9b54.js","assets/Link.17b71136.js","assets/Title.175055e6.js","assets/index.d25329e1.js","assets/CollapsePanel.0abc646d.js","assets/index.8637e771.js","assets/index.025e8615.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.984e59ca.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/hasIn.dcbed61a.js","assets/LoadingOutlined.b3727b3e.js","assets/index.33fbf904.js","assets/Form.b2ba4809.js","assets/string.b4749b4f.js","assets/TableView.89fe359a.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.548de4dc.js"),["assets/StyleEditor.548de4dc.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/PlayerNavbar.16b8e6a5.js","assets/metadata.5ac454ee.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhKanban.vue.814574c2.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/PhSignOut.vue.7b64920c.js","assets/index.45c270b4.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/PlayerNavbar.6ea5acc6.css","assets/Home.2714d66b.js","assets/api.20df6c2b.js","assets/index.c7ce6f1a.js","assets/fetch.638d0759.js","assets/WidgetsFrame.c1304029.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowSquareOut.vue.69e88463.js","assets/index.db9d9b54.js","assets/Link.17b71136.js","assets/Paragraph.e3fa7fcc.js","assets/Title.175055e6.js","assets/index.72c2e68b.js","assets/index.6350e8b6.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/hasIn.dcbed61a.js","assets/Home.c9754666.css","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.eef50bf4.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.b2ba4809.js","assets/StyleEditor.448475ef.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.d6cb0f47.js"),["assets/RequirementsEditor.d6cb0f47.js","assets/ContentLayout.32d383cb.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/CrudView.a3b3fee1.js","assets/router.6fc18345.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/url.eeed4570.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.4e9770a4.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.f646d8de.js"),["assets/EnvVarsEditor.f646d8de.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/ContentLayout.32d383cb.js","assets/ContentLayout.6dd20759.css","assets/CrudView.a3b3fee1.js","assets/router.6fc18345.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/Paragraph.e3fa7fcc.js","assets/Base.4843c88f.js","assets/Modal.88fcbc95.js","assets/index.72c2e68b.js","assets/Title.175055e6.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/CrudView.a8b105cf.css","assets/index.7692f455.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.0c714a9e.js"),["assets/VSCodeConnection.0c714a9e.js","assets/ContentLayout.32d383cb.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/Title.175055e6.js","assets/Base.4843c88f.js","assets/Paragraph.e3fa7fcc.js","assets/Text.c4e810d3.js"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.906d449f.js"),["assets/AccessControlEditor.906d449f.js","assets/ContentLayout.32d383cb.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/ContentLayout.6dd20759.css","assets/fetch.638d0759.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/repository.c772c677.js","assets/router.6fc18345.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/popupNotifcation.a4eabbc5.js","assets/asyncComputed.4e9770a4.js","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.4843c88f.js","assets/Link.17b71136.js","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.a5fd9c9c.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/TabPane.f72ad8d4.js","assets/index.8637e771.js","assets/metadata.5ac454ee.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhKanban.vue.814574c2.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/index.72c2e68b.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/index.7692f455.js","assets/Paragraph.e3fa7fcc.js","assets/CrudView.a3b3fee1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/Title.175055e6.js","assets/CrudView.a8b105cf.css","assets/PhPencil.vue.502a337a.js","assets/index.025e8615.js","assets/isNumeric.75337b1e.js","assets/index.c7ce6f1a.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.e944dabc.js"),["assets/FormEditor.e944dabc.js","assets/PlayerNavbar.16b8e6a5.js","assets/metadata.5ac454ee.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhKanban.vue.814574c2.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/PhSignOut.vue.7b64920c.js","assets/index.45c270b4.js","assets/Text.c4e810d3.js","assets/Base.4843c88f.js","assets/PlayerNavbar.6ea5acc6.css","assets/index.c7ce6f1a.js","assets/fetch.638d0759.js","assets/pubsub.74b3d4ce.js","assets/BaseLayout.aaa67e43.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.479f1eef.js","assets/uuid.0b0e4009.js","assets/PhCaretRight.vue.c582d10c.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/asyncComputed.4e9770a4.js","assets/PhCopySimple.vue.daebdf43.js","assets/LoadingOutlined.b3727b3e.js","assets/jobs.74d5894e.js","assets/scripts.fe1761c7.js","assets/validations.ca160d86.js","assets/string.b4749b4f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/PhPencil.vue.502a337a.js","assets/toggleHighContrast.7b4532c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.72c2e68b.js","assets/index.7692f455.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/SourceCode.8c2e8b74.css","assets/FormRunner.f3382e73.js","assets/Login.vue_vue_type_script_setup_true_lang.b181abf9.js","assets/Link.17b71136.js","assets/index.db9d9b54.js","assets/Paragraph.e3fa7fcc.js","assets/Title.175055e6.js","assets/CircularLoading.c64d383d.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.4ee72f72.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.c1304029.js","assets/WidgetsFrame.c4d00f60.css","assets/Steps.1a6f7969.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.c1ae3518.js","assets/FormRunner.a26d57e3.css","assets/api.711c28bb.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/PhFlowArrow.vue.634c023f.js","assets/forms.25a82a14.js","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.c3741e64.js","assets/index.d6cd7d3d.js","assets/index.8637e771.js","assets/ThreadSelector.8a6709c0.css","assets/index.976e479f.js","assets/NavbarControls.2292ae20.js","assets/CloseCircleOutlined.6808daf2.js","assets/popupNotifcation.a4eabbc5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/PhChats.vue.9a7ab8b6.js","assets/NavbarControls.8ea605da.css","assets/index.9e90d37d.js","assets/Badge.897fea04.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7a6b2bd9.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.5bdceda3.js"),["assets/JobEditor.5bdceda3.js","assets/BaseLayout.aaa67e43.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.479f1eef.js","assets/uuid.0b0e4009.js","assets/PhCaretRight.vue.c582d10c.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhCopySimple.vue.daebdf43.js","assets/LoadingOutlined.b3727b3e.js","assets/jobs.74d5894e.js","assets/scripts.fe1761c7.js","assets/validations.ca160d86.js","assets/string.b4749b4f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/PhPencil.vue.502a337a.js","assets/toggleHighContrast.7b4532c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.72c2e68b.js","assets/index.7692f455.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.4843c88f.js","assets/Link.17b71136.js","assets/SaveButton.ccfb7431.css","assets/index.f5debc55.js","assets/index.547193f7.js","assets/dayjs.0fa97122.js","assets/index.bad4dd09.js","assets/Title.175055e6.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c4049f16.js","assets/NavbarControls.2292ae20.js","assets/index.c7ce6f1a.js","assets/fetch.638d0759.js","assets/CloseCircleOutlined.6808daf2.js","assets/popupNotifcation.a4eabbc5.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/Text.c4e810d3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/PhChats.vue.9a7ab8b6.js","assets/NavbarControls.8ea605da.css","assets/index.9e90d37d.js","assets/index.45c270b4.js","assets/index.976e479f.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.6a1058ea.js"),["assets/HookEditor.6a1058ea.js","assets/BaseLayout.aaa67e43.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.479f1eef.js","assets/uuid.0b0e4009.js","assets/PhCaretRight.vue.c582d10c.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhCopySimple.vue.daebdf43.js","assets/LoadingOutlined.b3727b3e.js","assets/jobs.74d5894e.js","assets/scripts.fe1761c7.js","assets/validations.ca160d86.js","assets/string.b4749b4f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/PhPencil.vue.502a337a.js","assets/toggleHighContrast.7b4532c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.72c2e68b.js","assets/index.7692f455.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.4843c88f.js","assets/Link.17b71136.js","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.c4049f16.js","assets/api.711c28bb.js","assets/metadata.5ac454ee.js","assets/PhKanban.vue.814574c2.js","assets/PhScroll.vue.dc5d5d17.js","assets/PhWebhooksLogo.vue.1ce5d085.js","assets/ThreadSelector.c3741e64.js","assets/index.d6cd7d3d.js","assets/index.8637e771.js","assets/ThreadSelector.8a6709c0.css","assets/index.a6b2de3a.js","assets/CollapsePanel.0abc646d.js","assets/Badge.897fea04.js","assets/isNumeric.75337b1e.js","assets/Text.c4e810d3.js","assets/index.547193f7.js","assets/NavbarControls.2292ae20.js","assets/index.c7ce6f1a.js","assets/fetch.638d0759.js","assets/CloseCircleOutlined.6808daf2.js","assets/popupNotifcation.a4eabbc5.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/PhChats.vue.9a7ab8b6.js","assets/NavbarControls.8ea605da.css","assets/index.9e90d37d.js","assets/index.45c270b4.js","assets/index.976e479f.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.8a553fda.js"),["assets/ScriptEditor.8a553fda.js","assets/BaseLayout.aaa67e43.js","assets/outputWidgets.8e22ccc1.js","assets/outputWidgets.b5bd3a75.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.479f1eef.js","assets/uuid.0b0e4009.js","assets/PhCaretRight.vue.c582d10c.js","assets/envVars.0916ce1a.js","assets/runnerData.1d025816.js","assets/url.eeed4570.js","assets/record.ec7658ae.js","assets/pubsub.74b3d4ce.js","assets/asyncComputed.4e9770a4.js","assets/PhCheckCircle.vue.80bee2e8.js","assets/PhCopySimple.vue.daebdf43.js","assets/LoadingOutlined.b3727b3e.js","assets/jobs.74d5894e.js","assets/scripts.fe1761c7.js","assets/validations.ca160d86.js","assets/string.b4749b4f.js","assets/Form.b2ba4809.js","assets/hasIn.dcbed61a.js","assets/PhPencil.vue.502a337a.js","assets/toggleHighContrast.7b4532c8.js","assets/toggleHighContrast.30d77c87.css","assets/index.72c2e68b.js","assets/index.7692f455.js","assets/Card.4c500cec.js","assets/TabPane.f72ad8d4.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.49f5d702.js","assets/UnsavedChangesHandler.d091c35e.js","assets/ExclamationCircleOutlined.7e549140.js","assets/Modal.88fcbc95.js","assets/UnsavedChangesHandler.477fa526.css","assets/Base.4843c88f.js","assets/Link.17b71136.js","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.c3741e64.js","assets/index.d6cd7d3d.js","assets/index.8637e771.js","assets/ThreadSelector.8a6709c0.css","assets/RunButton.vue_vue_type_script_setup_true_lang.c4049f16.js","assets/NavbarControls.2292ae20.js","assets/index.c7ce6f1a.js","assets/fetch.638d0759.js","assets/CloseCircleOutlined.6808daf2.js","assets/popupNotifcation.a4eabbc5.js","assets/PhArrowSquareOut.vue.69e88463.js","assets/Text.c4e810d3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b799b5b.js","assets/BookOutlined.2f1f7bfd.js","assets/PhChats.vue.9a7ab8b6.js","assets/NavbarControls.8ea605da.css","assets/index.9e90d37d.js","assets/index.45c270b4.js","assets/index.976e479f.js","assets/CollapsePanel.0abc646d.js","assets/Badge.897fea04.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.714cc73c.js.map
