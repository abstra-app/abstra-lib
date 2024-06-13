var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.e8df7bd6.js";import{r as N,g as F,s as J}from"./index.583bf90b.js";import"./workspaces.59db2774.js";import{a as G}from"./asyncComputed.78e6dc57.js";import"./fetch.dc4a901f.js";import"./pubsub.7e3ea091.js";import"./runnerData.57b06a57.js";import"./url.a8d8aa9e.js";import"./record.77b60644.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6d444fe3-0068-403a-83a0-dc34272939d1",e._sentryDebugIdIdentifier="sentry-dbid-6d444fe3-0068-403a-83a0-dc34272939d1")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.81d3970a.js"),["assets/Home.81d3970a.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.3b6ac33a.js"),["assets/Workspace.3b6ac33a.js","assets/BaseLayout.708c2e88.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.3d2cc9df.js","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/index.583bf90b.js","assets/fetch.dc4a901f.js","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.fc1bd334.js","assets/index.29445b3e.js","assets/popupNotifcation.c6b65145.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/PhChats.vue.791fa0a0.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.a277e4b1.js","assets/PhCaretRight.vue.b093634d.js","assets/PhFlowArrow.vue.5f12a2b6.js","assets/PhKanban.vue.f079abfc.js","assets/index.8f19a559.js","assets/index.5ac9c8ce.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.21af423f.js"),["assets/Stages.21af423f.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e7ede052.js","assets/router.00e07285.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/asyncComputed.78e6dc57.js","assets/string.f31a4de3.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/workspaces.59db2774.js","assets/runnerData.57b06a57.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/forms.f93d8c8c.js","assets/jobs.4153e579.js","assets/scripts.f432025e.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/validations.8a8b295f.js","assets/index.29445b3e.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.5f506830.js"),["assets/WorkflowEditor.5f506830.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.243c2001.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/LoadingContainer.d63be05b.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.8a8b295f.js","assets/string.f31a4de3.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/metadata.16e851b0.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhKanban.vue.f079abfc.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/index.f93b86bf.js","assets/Badge.f1b43f71.js","assets/isNumeric.75337b1e.js","assets/index.29445b3e.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/Modal.10e3144f.js","assets/api.1935e71b.js","assets/uuid.21437c59.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.612586a5.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.be819af5.js"),["assets/WorkflowThreads.be819af5.js","assets/ContentLayout.59c466d2.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.7d6566bd.js","assets/fetch.dc4a901f.js","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/scripts.f432025e.js","assets/api.1935e71b.js","assets/metadata.16e851b0.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhKanban.vue.f079abfc.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/ant-design.5f8727bf.js","assets/index.0e091586.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/index.571b0a06.js","assets/index.e7daa0bc.js","assets/CollapsePanel.02a492e7.js","assets/index.612586a5.js","assets/index.780def49.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.d5c38a5c.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/hasIn.0c7158d4.js","assets/LoadingOutlined.419cf900.js","assets/DeleteOutlined.d4931297.js","assets/DeleteOutlined.f8ba9770.js","assets/index.c1c43905.js","assets/Form.87fb7934.js","assets/string.f31a4de3.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.c9c77541.js"),["assets/StyleEditor.c9c77541.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/PlayerNavbar.7884e03a.js","assets/metadata.16e851b0.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhKanban.vue.f079abfc.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/PhSignOut.vue.b7f67141.js","assets/index.5ac9c8ce.js","assets/PlayerNavbar.b2b106a9.css","assets/Home.7e04e6a8.js","assets/api.59d0f659.js","assets/index.583bf90b.js","assets/fetch.dc4a901f.js","assets/WidgetsFrame.f1f5c152.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/index.7d076a31.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/hasIn.0c7158d4.js","assets/Home.b18f7c4f.css","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.d63be05b.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.87fb7934.js","assets/StyleEditor.25463ffb.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.3e3cc01b.js"),["assets/RequirementsEditor.3e3cc01b.js","assets/ContentLayout.59c466d2.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/CrudView.e7ede052.js","assets/router.00e07285.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/url.a8d8aa9e.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.78e6dc57.js","assets/workspaces.59db2774.js","assets/runnerData.57b06a57.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.daacdbfd.js"),["assets/EnvVarsEditor.daacdbfd.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/ContentLayout.59c466d2.js","assets/ContentLayout.6dd20759.css","assets/CrudView.e7ede052.js","assets/router.00e07285.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/Modal.10e3144f.js","assets/index.ea715c19.js","assets/CrudView.a8b105cf.css","assets/index.29445b3e.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.660d412f.js"),["assets/VSCodeConnection.660d412f.js","assets/ContentLayout.59c466d2.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.b18dddde.js"),["assets/AccessControlEditor.b18dddde.js","assets/ContentLayout.59c466d2.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/fetch.dc4a901f.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/repository.0f2ab255.js","assets/gateway.11a92db7.js","assets/popupNotifcation.c6b65145.js","assets/asyncComputed.78e6dc57.js","assets/workspaces.59db2774.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.0265170b.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/index.612586a5.js","assets/metadata.16e851b0.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhKanban.vue.f079abfc.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/index.ea715c19.js","assets/index.29445b3e.js","assets/index.583bf90b.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.643b2a3a.js"),["assets/FormEditor.643b2a3a.js","assets/PlayerNavbar.7884e03a.js","assets/metadata.16e851b0.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhKanban.vue.f079abfc.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/PhSignOut.vue.b7f67141.js","assets/index.5ac9c8ce.js","assets/PlayerNavbar.b2b106a9.css","assets/index.583bf90b.js","assets/fetch.dc4a901f.js","assets/pubsub.7e3ea091.js","assets/BaseLayout.708c2e88.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.04d855d9.js","assets/uuid.21437c59.js","assets/PhCaretRight.vue.b093634d.js","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/PhCopySimple.vue.3b305c8b.js","assets/LoadingOutlined.419cf900.js","assets/jobs.4153e579.js","assets/scripts.f432025e.js","assets/validations.8a8b295f.js","assets/string.f31a4de3.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/PhPencil.vue.83e08a39.js","assets/toggleHighContrast.eb2c05c5.js","assets/toggleHighContrast.30d77c87.css","assets/index.29445b3e.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/SourceCode.7f3825f5.css","assets/FormRunner.b1b2e357.js","assets/Login.vue_vue_type_script_setup_true_lang.94af779c.js","assets/CircularLoading.127b19d5.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.81769a5e.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.f1f5c152.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.8670395e.js","assets/Steps.4a8d55e8.css","assets/FormRunner.5c9588c5.css","assets/api.1935e71b.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/PhFlowArrow.vue.5f12a2b6.js","assets/forms.f93d8c8c.js","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.9c969c47.js","assets/index.571b0a06.js","assets/index.612586a5.js","assets/ThreadSelector.402458d4.css","assets/index.7df51953.js","assets/NavbarControls.3d2cc9df.js","assets/CloseCircleOutlined.fc1bd334.js","assets/popupNotifcation.c6b65145.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/PhChats.vue.791fa0a0.js","assets/NavbarControls.8ea605da.css","assets/index.8f19a559.js","assets/Badge.f1b43f71.js","assets/isNumeric.75337b1e.js","assets/FormEditor.7e66ed9d.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.afbe0b9b.js"),["assets/JobEditor.afbe0b9b.js","assets/BaseLayout.708c2e88.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.04d855d9.js","assets/uuid.21437c59.js","assets/PhCaretRight.vue.b093634d.js","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhCopySimple.vue.3b305c8b.js","assets/LoadingOutlined.419cf900.js","assets/jobs.4153e579.js","assets/scripts.f432025e.js","assets/validations.8a8b295f.js","assets/string.f31a4de3.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/PhPencil.vue.83e08a39.js","assets/toggleHighContrast.eb2c05c5.js","assets/toggleHighContrast.30d77c87.css","assets/index.29445b3e.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.8bd06679.js","assets/index.ec24afef.js","assets/index.ea715c19.js","assets/index.c66b9ae1.js","assets/RunButton.vue_vue_type_script_setup_true_lang.25cbd4fd.js","assets/NavbarControls.3d2cc9df.js","assets/index.583bf90b.js","assets/fetch.dc4a901f.js","assets/CloseCircleOutlined.fc1bd334.js","assets/popupNotifcation.c6b65145.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/PhChats.vue.791fa0a0.js","assets/NavbarControls.8ea605da.css","assets/index.8f19a559.js","assets/index.5ac9c8ce.js","assets/index.7df51953.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.71d1584a.js"),["assets/HookEditor.71d1584a.js","assets/BaseLayout.708c2e88.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.04d855d9.js","assets/uuid.21437c59.js","assets/PhCaretRight.vue.b093634d.js","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhCopySimple.vue.3b305c8b.js","assets/LoadingOutlined.419cf900.js","assets/jobs.4153e579.js","assets/scripts.f432025e.js","assets/validations.8a8b295f.js","assets/string.f31a4de3.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/PhPencil.vue.83e08a39.js","assets/toggleHighContrast.eb2c05c5.js","assets/toggleHighContrast.30d77c87.css","assets/index.29445b3e.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.25cbd4fd.js","assets/api.1935e71b.js","assets/metadata.16e851b0.js","assets/PhKanban.vue.f079abfc.js","assets/PhScroll.vue.048a42ce.js","assets/PhWebhooksLogo.vue.b04e17f2.js","assets/ThreadSelector.9c969c47.js","assets/index.571b0a06.js","assets/index.612586a5.js","assets/ThreadSelector.402458d4.css","assets/index.e4054c40.js","assets/CollapsePanel.02a492e7.js","assets/Badge.f1b43f71.js","assets/isNumeric.75337b1e.js","assets/index.ea715c19.js","assets/NavbarControls.3d2cc9df.js","assets/index.583bf90b.js","assets/fetch.dc4a901f.js","assets/CloseCircleOutlined.fc1bd334.js","assets/popupNotifcation.c6b65145.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/PhChats.vue.791fa0a0.js","assets/NavbarControls.8ea605da.css","assets/index.8f19a559.js","assets/index.5ac9c8ce.js","assets/index.7df51953.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.fdb24be0.js"),["assets/ScriptEditor.fdb24be0.js","assets/BaseLayout.708c2e88.js","assets/outputWidgets.e8df7bd6.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.04d855d9.js","assets/uuid.21437c59.js","assets/PhCaretRight.vue.b093634d.js","assets/workspaces.59db2774.js","assets/asyncComputed.78e6dc57.js","assets/runnerData.57b06a57.js","assets/url.a8d8aa9e.js","assets/record.77b60644.js","assets/pubsub.7e3ea091.js","assets/PhCheckCircle.vue.15bb3ef2.js","assets/PhCopySimple.vue.3b305c8b.js","assets/LoadingOutlined.419cf900.js","assets/jobs.4153e579.js","assets/scripts.f432025e.js","assets/validations.8a8b295f.js","assets/string.f31a4de3.js","assets/Form.87fb7934.js","assets/hasIn.0c7158d4.js","assets/PhPencil.vue.83e08a39.js","assets/toggleHighContrast.eb2c05c5.js","assets/toggleHighContrast.30d77c87.css","assets/index.29445b3e.js","assets/Card.0f885435.js","assets/TabPane.ff421f1e.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.825008e1.js","assets/UnsavedChangesHandler.3176de68.js","assets/ExclamationCircleOutlined.4b61b57c.js","assets/Modal.10e3144f.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.9c969c47.js","assets/index.571b0a06.js","assets/index.612586a5.js","assets/ThreadSelector.402458d4.css","assets/RunButton.vue_vue_type_script_setup_true_lang.25cbd4fd.js","assets/NavbarControls.3d2cc9df.js","assets/index.583bf90b.js","assets/fetch.dc4a901f.js","assets/CloseCircleOutlined.fc1bd334.js","assets/popupNotifcation.c6b65145.js","assets/PhArrowSquareOut.vue.b2fc5963.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a9ea946e.js","assets/BookOutlined.6fc00861.js","assets/PhChats.vue.791fa0a0.js","assets/NavbarControls.8ea605da.css","assets/index.8f19a559.js","assets/index.5ac9c8ce.js","assets/index.7df51953.js","assets/CollapsePanel.02a492e7.js","assets/Badge.f1b43f71.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.7df57241.js.map
