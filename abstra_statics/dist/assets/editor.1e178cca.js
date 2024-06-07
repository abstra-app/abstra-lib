var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.cc9f46e3.js";import{r as N,g as F,s as J}from"./index.95fc137d.js";import"./workspaces.8edc00c7.js";import{a as G}from"./asyncComputed.ef74e7ff.js";import"./fetch.5a6cf292.js";import"./pubsub.d3e41e27.js";import"./runnerData.bd68614c.js";import"./url.df80ee18.js";import"./record.aab16969.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="04523a14-3158-4220-af30-1c9ddcc52c4d",e._sentryDebugIdIdentifier="sentry-dbid-04523a14-3158-4220-af30-1c9ddcc52c4d")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.1acb16ec.js"),["assets/Home.1acb16ec.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.b76161ca.js"),["assets/Workspace.b76161ca.js","assets/BaseLayout.4a268357.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.4f3d6943.js","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/index.95fc137d.js","assets/fetch.5a6cf292.js","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.36fc8f6c.js","assets/index.9b2bde6d.js","assets/popupNotifcation.574e2faa.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/PhChats.vue.0fec1300.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.fe811fd6.js","assets/PhCaretRight.vue.ee4fa314.js","assets/PhFlowArrow.vue.d215f44d.js","assets/PhKanban.vue.676c40b5.js","assets/index.4fd0d095.js","assets/index.04ef1e42.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.bd2e8da6.js"),["assets/Stages.bd2e8da6.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.515100e9.js","assets/ContentLayout.6dd20759.css","assets/CrudView.90fb2759.js","assets/router.e9a880a1.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/gateway.6c61dbda.js","assets/popupNotifcation.574e2faa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/url.df80ee18.js","assets/Modal.6cc7bb19.js","assets/index.b44b166b.js","assets/CrudView.a8b105cf.css","assets/ant-design.3595d5c5.js","assets/index.89069b2c.js","assets/asyncComputed.ef74e7ff.js","assets/string.85518bbc.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/workspaces.8edc00c7.js","assets/runnerData.bd68614c.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/forms.4e6940b4.js","assets/jobs.17c937e2.js","assets/scripts.6d65f701.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/validations.5c0d26ac.js","assets/index.9b2bde6d.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.5793e7c9.js"),["assets/WorkflowEditor.5793e7c9.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.b1305e26.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/LoadingContainer.9f1ac337.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.5c0d26ac.js","assets/string.85518bbc.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/metadata.8393ffab.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhKanban.vue.676c40b5.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/index.5e678913.js","assets/Badge.ace9c4b4.js","assets/isNumeric.75337b1e.js","assets/index.9b2bde6d.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/PlusOutlined.cf52d035.js","assets/Modal.6cc7bb19.js","assets/api.96aef2d6.js","assets/uuid.df3ee770.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.24330042.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.7e8c6ff5.js"),["assets/WorkflowThreads.7e8c6ff5.js","assets/ContentLayout.515100e9.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.11878ecc.js","assets/fetch.5a6cf292.js","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/scripts.6d65f701.js","assets/api.96aef2d6.js","assets/metadata.8393ffab.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhKanban.vue.676c40b5.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/ant-design.3595d5c5.js","assets/index.89069b2c.js","assets/Modal.6cc7bb19.js","assets/index.b44b166b.js","assets/index.5bd45628.js","assets/index.cee29f53.js","assets/CollapsePanel.595b2ccf.js","assets/index.24330042.js","assets/index.b88ca4ed.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.863e206e.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/hasIn.6aedfc9c.js","assets/PlusOutlined.cf52d035.js","assets/LoadingOutlined.69284dbd.js","assets/index.56b2404c.js","assets/Form.b0451770.js","assets/string.85518bbc.js","assets/TableView.89fe359a.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.727e5808.js"),["assets/StyleEditor.727e5808.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/PlayerNavbar.7d2c98d2.js","assets/metadata.8393ffab.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhKanban.vue.676c40b5.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/PhSignOut.vue.03dbe140.js","assets/index.04ef1e42.js","assets/PlayerNavbar.6ea5acc6.css","assets/Home.05a5ce0f.js","assets/api.0c155810.js","assets/index.95fc137d.js","assets/fetch.5a6cf292.js","assets/WidgetsFrame.7cc78363.js","assets/WidgetsFrame.c4d00f60.css","assets/PhArrowSquareOut.vue.926c3f24.js","assets/index.3281e0c3.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/hasIn.6aedfc9c.js","assets/PlusOutlined.cf52d035.js","assets/Home.7b93489a.css","assets/ContentLayout.515100e9.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.9f1ac337.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.b0451770.js","assets/StyleEditor.448475ef.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.87a9336b.js"),["assets/RequirementsEditor.87a9336b.js","assets/ContentLayout.515100e9.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css","assets/CrudView.90fb2759.js","assets/router.e9a880a1.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/gateway.6c61dbda.js","assets/popupNotifcation.574e2faa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/url.df80ee18.js","assets/Modal.6cc7bb19.js","assets/index.b44b166b.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.ef74e7ff.js","assets/workspaces.8edc00c7.js","assets/runnerData.bd68614c.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.3ea09985.js"),["assets/EnvVarsEditor.3ea09985.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/ContentLayout.515100e9.js","assets/ContentLayout.6dd20759.css","assets/CrudView.90fb2759.js","assets/router.e9a880a1.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/gateway.6c61dbda.js","assets/popupNotifcation.574e2faa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/Modal.6cc7bb19.js","assets/index.b44b166b.js","assets/CrudView.a8b105cf.css","assets/index.9b2bde6d.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.ea569e23.js"),["assets/VSCodeConnection.ea569e23.js","assets/ContentLayout.515100e9.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.bb62f3c5.js"),["assets/AccessControlEditor.bb62f3c5.js","assets/ContentLayout.515100e9.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/ContentLayout.6dd20759.css","assets/fetch.5a6cf292.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/repository.ef6a7714.js","assets/gateway.6c61dbda.js","assets/popupNotifcation.574e2faa.js","assets/asyncComputed.ef74e7ff.js","assets/workspaces.8edc00c7.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.5c3d26cf.js","assets/PlusOutlined.cf52d035.js","assets/index.24330042.js","assets/metadata.8393ffab.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhKanban.vue.676c40b5.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/index.b44b166b.js","assets/index.9b2bde6d.js","assets/index.95fc137d.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.8b0f71cb.js"),["assets/FormEditor.8b0f71cb.js","assets/PlayerNavbar.7d2c98d2.js","assets/metadata.8393ffab.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhKanban.vue.676c40b5.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/PhSignOut.vue.03dbe140.js","assets/index.04ef1e42.js","assets/PlayerNavbar.6ea5acc6.css","assets/index.95fc137d.js","assets/fetch.5a6cf292.js","assets/pubsub.d3e41e27.js","assets/BaseLayout.4a268357.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.8837bd79.js","assets/uuid.df3ee770.js","assets/PhCaretRight.vue.ee4fa314.js","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/PhCopySimple.vue.8f30291f.js","assets/LoadingOutlined.69284dbd.js","assets/jobs.17c937e2.js","assets/scripts.6d65f701.js","assets/validations.5c0d26ac.js","assets/string.85518bbc.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/PhPencil.vue.1b48618c.js","assets/toggleHighContrast.586de38f.js","assets/toggleHighContrast.30d77c87.css","assets/index.9b2bde6d.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/FormRunner.2775e7d1.js","assets/Login.vue_vue_type_script_setup_true_lang.b07ec76f.js","assets/CircularLoading.eb675c3f.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.c7bf80be.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.7cc78363.js","assets/WidgetsFrame.c4d00f60.css","assets/Steps.5e645d09.js","assets/Steps.4a8d55e8.css","assets/PhInfo.vue.98818f63.js","assets/FormRunner.a26d57e3.css","assets/api.96aef2d6.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/PhFlowArrow.vue.d215f44d.js","assets/forms.4e6940b4.js","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.be65d773.js","assets/index.5bd45628.js","assets/index.24330042.js","assets/ThreadSelector.402458d4.css","assets/index.4f74a6e3.js","assets/NavbarControls.4f3d6943.js","assets/CloseCircleOutlined.36fc8f6c.js","assets/popupNotifcation.574e2faa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/PhChats.vue.0fec1300.js","assets/NavbarControls.8ea605da.css","assets/index.4fd0d095.js","assets/Badge.ace9c4b4.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7a6b2bd9.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.1f1bce67.js"),["assets/JobEditor.1f1bce67.js","assets/BaseLayout.4a268357.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.8837bd79.js","assets/uuid.df3ee770.js","assets/PhCaretRight.vue.ee4fa314.js","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhCopySimple.vue.8f30291f.js","assets/LoadingOutlined.69284dbd.js","assets/jobs.17c937e2.js","assets/scripts.6d65f701.js","assets/validations.5c0d26ac.js","assets/string.85518bbc.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/PhPencil.vue.1b48618c.js","assets/toggleHighContrast.586de38f.js","assets/toggleHighContrast.30d77c87.css","assets/index.9b2bde6d.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.af741b48.js","assets/index.e2d811f1.js","assets/index.b44b166b.js","assets/index.2837d440.js","assets/RunButton.vue_vue_type_script_setup_true_lang.e8d736a6.js","assets/NavbarControls.4f3d6943.js","assets/index.95fc137d.js","assets/fetch.5a6cf292.js","assets/CloseCircleOutlined.36fc8f6c.js","assets/popupNotifcation.574e2faa.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/PhChats.vue.0fec1300.js","assets/NavbarControls.8ea605da.css","assets/index.4fd0d095.js","assets/index.04ef1e42.js","assets/index.4f74a6e3.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.c84cad9d.js"),["assets/HookEditor.c84cad9d.js","assets/BaseLayout.4a268357.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.8837bd79.js","assets/uuid.df3ee770.js","assets/PhCaretRight.vue.ee4fa314.js","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhCopySimple.vue.8f30291f.js","assets/LoadingOutlined.69284dbd.js","assets/jobs.17c937e2.js","assets/scripts.6d65f701.js","assets/validations.5c0d26ac.js","assets/string.85518bbc.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/PhPencil.vue.1b48618c.js","assets/toggleHighContrast.586de38f.js","assets/toggleHighContrast.30d77c87.css","assets/index.9b2bde6d.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.e8d736a6.js","assets/api.96aef2d6.js","assets/metadata.8393ffab.js","assets/PhKanban.vue.676c40b5.js","assets/PhScroll.vue.8494df4f.js","assets/PhWebhooksLogo.vue.7134c1a1.js","assets/ThreadSelector.be65d773.js","assets/index.5bd45628.js","assets/index.24330042.js","assets/ThreadSelector.402458d4.css","assets/index.0e27e36c.js","assets/CollapsePanel.595b2ccf.js","assets/Badge.ace9c4b4.js","assets/isNumeric.75337b1e.js","assets/index.b44b166b.js","assets/NavbarControls.4f3d6943.js","assets/index.95fc137d.js","assets/fetch.5a6cf292.js","assets/CloseCircleOutlined.36fc8f6c.js","assets/popupNotifcation.574e2faa.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/PhChats.vue.0fec1300.js","assets/NavbarControls.8ea605da.css","assets/index.4fd0d095.js","assets/index.04ef1e42.js","assets/index.4f74a6e3.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.af18e0af.js"),["assets/ScriptEditor.af18e0af.js","assets/BaseLayout.4a268357.js","assets/outputWidgets.cc9f46e3.js","assets/outputWidgets.d381d1db.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.8837bd79.js","assets/uuid.df3ee770.js","assets/PhCaretRight.vue.ee4fa314.js","assets/workspaces.8edc00c7.js","assets/asyncComputed.ef74e7ff.js","assets/runnerData.bd68614c.js","assets/url.df80ee18.js","assets/record.aab16969.js","assets/pubsub.d3e41e27.js","assets/PhCheckCircle.vue.2b0716c5.js","assets/PhCopySimple.vue.8f30291f.js","assets/LoadingOutlined.69284dbd.js","assets/jobs.17c937e2.js","assets/scripts.6d65f701.js","assets/validations.5c0d26ac.js","assets/string.85518bbc.js","assets/Form.b0451770.js","assets/hasIn.6aedfc9c.js","assets/PhPencil.vue.1b48618c.js","assets/toggleHighContrast.586de38f.js","assets/toggleHighContrast.30d77c87.css","assets/index.9b2bde6d.js","assets/Card.c21b5264.js","assets/TabPane.cdbb9820.js","assets/PlusOutlined.cf52d035.js","assets/SourceCode.8c2e8b74.css","assets/SaveButton.ddee74d1.js","assets/UnsavedChangesHandler.7506fd1b.js","assets/ExclamationCircleOutlined.fa235d8c.js","assets/Modal.6cc7bb19.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.be65d773.js","assets/index.5bd45628.js","assets/index.24330042.js","assets/ThreadSelector.402458d4.css","assets/RunButton.vue_vue_type_script_setup_true_lang.e8d736a6.js","assets/NavbarControls.4f3d6943.js","assets/index.95fc137d.js","assets/fetch.5a6cf292.js","assets/CloseCircleOutlined.36fc8f6c.js","assets/popupNotifcation.574e2faa.js","assets/PhArrowSquareOut.vue.926c3f24.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js","assets/BookOutlined.ee6e3608.js","assets/PhChats.vue.0fec1300.js","assets/NavbarControls.8ea605da.css","assets/index.4fd0d095.js","assets/index.04ef1e42.js","assets/index.4f74a6e3.js","assets/CollapsePanel.595b2ccf.js","assets/Badge.ace9c4b4.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.1e178cca.js.map
