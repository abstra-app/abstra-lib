var w=Object.defineProperty;var g=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(g(e,typeof t!="symbol"?t+"":t,o),o);import{r as y,d as E,o as v,a as b,b as P,c as I,w as R,e as T,f as k,u as A,A as V,g as D,h as C,_ as a,i as O,j as L,T as S,k as j,P as W,C as q,M as x,s as M,l as _,m as U,n as B,p as z,q as H}from"./outputWidgets.26390fac.js";import{r as N,g as F,s as J}from"./index.4ff0db42.js";import"./workspaces.cb196743.js";import{a as G}from"./asyncComputed.80ddfd82.js";import"./fetch.e5be5abf.js";import"./pubsub.c681650c.js";import"./runnerData.48291f69.js";import"./url.3f82014a.js";import"./record.533e9cb1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8d9ba958-9736-4d82-8d90-9f6a42933787",e._sentryDebugIdIdentifier="sentry-dbid-8d9ba958-9736-4d82-8d90-9f6a42933787")}catch{}})();const f=y(!1),K=()=>{window.innerWidth<780?f.value=!0:f.value=!1},Q={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},X=E({__name:"App",setup(e){const t={token:{colorPrimary:"#d14056"}};return v(()=>{window.addEventListener("resize",K)}),(o,s)=>{const r=b("router-view");return P(),I(A(V),{theme:t,"page-header":{ghost:!1}},{default:R(()=>[T("div",Q,[k(r)])]),_:1})}}});const n=class{static dispatch(t,o,s=0){window.Intercom?window.Intercom(t,o):s<10?setTimeout(()=>n.dispatch(t,o),100):console.error("Intercom not loaded")}static boot(t,o){n.booted||(n.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t,email:t,user_hash:o,hide_default_launcher:!0,custom_launcher_selector:".intercom-launcher"}),n.booted=!0)}static shutdown(){n.dispatch("shutdown"),n.booted=!1}};let i=n;l(i,"booted",!1);const c=class{async get(){const o=await(await fetch("/_editor/api/login")).json();if("info"in o){const{email:s,intercomHash:r}=o.info;i.boot(s,r)}else i.shutdown();return o}async create(t){var r,d;(await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})})).json()).logged!==((d=(r=this.asyncComputed.result.value)==null?void 0:r.logged)!=null?d:!1)&&await this.asyncComputed.refetch()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return c._asyncComputed===null&&(c._asyncComputed=G(()=>u.get())),c._asyncComputed}loginUrl(t){return"https://cloud.abstra.io/api-key"+(t?"?"+new URLSearchParams(t):"")}};let p=c;l(p,"_asyncComputed",null);const u=new p,Y=N.map(e=>({...e,meta:{...e.meta,playerRoute:!0}})),m=D({history:C("/"),routes:[{path:"/_editor/",name:"app",component:()=>a(()=>import("./Home.ed941acd.js"),["assets/Home.ed941acd.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>a(()=>import("./Workspace.fdd85c12.js"),["assets/Workspace.fdd85c12.js","assets/BaseLayout.2fba9604.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/logo.084e5d7c.js","assets/NavbarControls.2d41b218.js","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/index.4ff0db42.js","assets/fetch.e5be5abf.js","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/CloseCircleOutlined.d6a09d01.js","assets/index.7b32057a.js","assets/popupNotifcation.345e3ded.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/PhChats.vue.26c984b8.js","assets/NavbarControls.8ea605da.css","assets/PhIdentificationBadge.vue.c1474731.js","assets/PhCaretRight.vue.9b3f998f.js","assets/PhFlowArrow.vue.5fe12a4d.js","assets/PhKanban.vue.77be99b2.js","assets/index.ca4de814.js","assets/index.05627c09.js","assets/Workspace.c4d25eca.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>a(()=>import("./Stages.14b2353b.js"),["assets/Stages.14b2353b.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.522fcb4f.js","assets/ContentLayout.6dd20759.css","assets/CrudView.cad0f159.js","assets/router.87673578.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/gateway.f94c9199.js","assets/popupNotifcation.345e3ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/url.3f82014a.js","assets/Modal.a2f682b3.js","assets/index.e7d15d04.js","assets/CrudView.a8b105cf.css","assets/ant-design.fdfa6914.js","assets/index.6eac23e7.js","assets/asyncComputed.80ddfd82.js","assets/string.90c76352.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/workspaces.cb196743.js","assets/runnerData.48291f69.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/forms.d4cd6139.js","assets/jobs.06ed9fde.js","assets/scripts.4d638052.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/validations.5431c2c6.js","assets/index.7b32057a.js","assets/Stages.ee73c2d9.css"]),meta:{title:"Stages"}},{path:"workflow",name:"workflowEditor",component:()=>a(()=>import("./WorkflowEditor.c35cda9e.js"),["assets/WorkflowEditor.c35cda9e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ab31aa0c.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/LoadingContainer.49dc753a.js","assets/LoadingContainer.8bd9cc72.css","assets/validations.5431c2c6.js","assets/string.90c76352.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/metadata.6d8f09c0.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhKanban.vue.77be99b2.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/index.a2322048.js","assets/Badge.13c9e53d.js","assets/isNumeric.75337b1e.js","assets/index.7b32057a.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/Modal.a2f682b3.js","assets/api.0b731b30.js","assets/uuid.9ed3d055.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/UnsavedChangesHandler.477fa526.css","assets/index.65ed0d59.js","assets/WorkflowEditor.3b7f6e19.css"]),meta:{title:"Workflow Editor"}},{path:"threads",name:"workflowThreads",component:()=>a(()=>import("./WorkflowThreads.fd1df546.js"),["assets/WorkflowThreads.fd1df546.js","assets/ContentLayout.522fcb4f.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/TableView.vue_vue_type_script_setup_true_lang.11525db6.js","assets/fetch.e5be5abf.js","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/scripts.4d638052.js","assets/api.0b731b30.js","assets/metadata.6d8f09c0.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhKanban.vue.77be99b2.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/ant-design.fdfa6914.js","assets/index.6eac23e7.js","assets/Modal.a2f682b3.js","assets/index.e7d15d04.js","assets/index.bb64c758.js","assets/index.1f2df869.js","assets/CollapsePanel.38ea250d.js","assets/index.65ed0d59.js","assets/index.b33168cb.js","assets/isNumeric.75337b1e.js","assets/PhArrowCounterClockwise.vue.0cbc512b.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/hasIn.95c4fd64.js","assets/LoadingOutlined.b4eccce4.js","assets/DeleteOutlined.a8191f36.js","assets/DeleteOutlined.f8ba9770.js","assets/index.2647017f.js","assets/Form.004c27c8.js","assets/string.90c76352.js","assets/PhDownloadSimple.vue.f1666148.js","assets/utils.3808452c.js","assets/TableView.11697157.css"]),meta:{title:"Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>a(()=>import("./StyleEditor.209e872d.js"),["assets/StyleEditor.209e872d.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/PlayerNavbar.36378c32.js","assets/metadata.6d8f09c0.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhKanban.vue.77be99b2.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/PhSignOut.vue.8c6e927f.js","assets/index.05627c09.js","assets/PlayerNavbar.77c5318b.css","assets/Home.62740f27.js","assets/api.2a3d722f.js","assets/index.4ff0db42.js","assets/fetch.e5be5abf.js","assets/Watermark.8e360a82.js","assets/Watermark.e3a0c137.css","assets/WidgetsFrame.f9ddf191.js","assets/WidgetsFrame.0615c03b.css","assets/PhArrowSquareOut.vue.b368d56b.js","assets/index.5bfa2d45.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/hasIn.95c4fd64.js","assets/Home.c54aca19.css","assets/ContentLayout.522fcb4f.js","assets/ContentLayout.6dd20759.css","assets/LoadingContainer.49dc753a.js","assets/LoadingContainer.8bd9cc72.css","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/Form.004c27c8.js","assets/StyleEditor.4c57e5df.css"]),meta:{title:"Style"}},{path:"requirements",name:"settingsRequirements",component:()=>a(()=>import("./RequirementsEditor.6607b8e8.js"),["assets/RequirementsEditor.6607b8e8.js","assets/ContentLayout.522fcb4f.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/CrudView.cad0f159.js","assets/router.87673578.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/gateway.f94c9199.js","assets/popupNotifcation.345e3ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/url.3f82014a.js","assets/Modal.a2f682b3.js","assets/index.e7d15d04.js","assets/CrudView.a8b105cf.css","assets/asyncComputed.80ddfd82.js","assets/workspaces.cb196743.js","assets/runnerData.48291f69.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js"]),meta:{title:"Requirements"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVarsEditor.09e6be34.js"),["assets/EnvVarsEditor.09e6be34.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/ContentLayout.522fcb4f.js","assets/ContentLayout.6dd20759.css","assets/CrudView.cad0f159.js","assets/router.87673578.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/gateway.f94c9199.js","assets/popupNotifcation.345e3ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/Modal.a2f682b3.js","assets/index.e7d15d04.js","assets/CrudView.a8b105cf.css","assets/index.7b32057a.js"]),meta:{title:"Environment Variables"}},{path:"vs-code",name:"vs-code",component:()=>a(()=>import("./VSCodeConnection.7b1f41aa.js"),["assets/VSCodeConnection.7b1f41aa.js","assets/ContentLayout.522fcb4f.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css"]),meta:{title:"VS Code integration"}},{path:"access-control",name:"accessControl",component:()=>a(()=>import("./AccessControlEditor.1d4cdeb9.js"),["assets/AccessControlEditor.1d4cdeb9.js","assets/ContentLayout.522fcb4f.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/ContentLayout.6dd20759.css","assets/fetch.e5be5abf.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/repository.c407616e.js","assets/gateway.f94c9199.js","assets/popupNotifcation.345e3ded.js","assets/asyncComputed.80ddfd82.js","assets/workspaces.cb196743.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/PhGlobe.vue.9afc4cae.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/index.65ed0d59.js","assets/metadata.6d8f09c0.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhKanban.vue.77be99b2.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/index.e7d15d04.js","assets/index.7b32057a.js","assets/index.4ff0db42.js","assets/AccessControlEditor.d193e7fa.css"]),meta:{title:"Abstra - Access Control",allowUnauthenticated:!1}}]},{path:"form/:id",name:"formEditor",component:()=>a(()=>import("./FormEditor.dbf41b09.js"),["assets/FormEditor.dbf41b09.js","assets/PlayerNavbar.36378c32.js","assets/metadata.6d8f09c0.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhKanban.vue.77be99b2.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/PhSignOut.vue.8c6e927f.js","assets/index.05627c09.js","assets/PlayerNavbar.77c5318b.css","assets/index.4ff0db42.js","assets/fetch.e5be5abf.js","assets/pubsub.c681650c.js","assets/BaseLayout.2fba9604.js","assets/BaseLayout.7e127cbf.css","assets/SourceCode.734d7eac.js","assets/uuid.9ed3d055.js","assets/PhCaretRight.vue.9b3f998f.js","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/PhCopySimple.vue.9ca8bffd.js","assets/LoadingOutlined.b4eccce4.js","assets/jobs.06ed9fde.js","assets/scripts.4d638052.js","assets/validations.5431c2c6.js","assets/string.90c76352.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/PhPencil.vue.b7c3ab60.js","assets/toggleHighContrast.d22ca175.js","assets/toggleHighContrast.30d77c87.css","assets/index.7b32057a.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/SourceCode.7f3825f5.css","assets/FormRunner.1ca5aa3b.js","assets/Login.vue_vue_type_script_setup_true_lang.ddeacde3.js","assets/CircularLoading.b5f0ab65.js","assets/CircularLoading.e156a2b0.css","assets/PhArrowClockwise.vue.41cd555b.js","assets/Login.2de9be5b.css","assets/WidgetsFrame.f9ddf191.js","assets/WidgetsFrame.0615c03b.css","assets/Steps.9789212b.js","assets/Steps.4a8d55e8.css","assets/Watermark.8e360a82.js","assets/Watermark.e3a0c137.css","assets/FormRunner.825d7e27.css","assets/api.0b731b30.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/PhFlowArrow.vue.5fe12a4d.js","assets/forms.d4cd6139.js","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.99e7f9cb.js","assets/index.bb64c758.js","assets/index.65ed0d59.js","assets/ThreadSelector.087a85c2.css","assets/index.753cb1f7.js","assets/NavbarControls.2d41b218.js","assets/CloseCircleOutlined.d6a09d01.js","assets/popupNotifcation.345e3ded.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/PhChats.vue.26c984b8.js","assets/NavbarControls.8ea605da.css","assets/index.ca4de814.js","assets/Badge.13c9e53d.js","assets/isNumeric.75337b1e.js","assets/FormEditor.0e1b5bda.css"]),meta:{title:"Smart Form Editor"}},{path:"job/:id",name:"jobEditor",component:()=>a(()=>import("./JobEditor.df4faa07.js"),["assets/JobEditor.df4faa07.js","assets/BaseLayout.2fba9604.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.734d7eac.js","assets/uuid.9ed3d055.js","assets/PhCaretRight.vue.9b3f998f.js","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhCopySimple.vue.9ca8bffd.js","assets/LoadingOutlined.b4eccce4.js","assets/jobs.06ed9fde.js","assets/scripts.4d638052.js","assets/validations.5431c2c6.js","assets/string.90c76352.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/PhPencil.vue.b7c3ab60.js","assets/toggleHighContrast.d22ca175.js","assets/toggleHighContrast.30d77c87.css","assets/index.7b32057a.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/dayjs.96b241d8.js","assets/index.fb81374b.js","assets/index.e7d15d04.js","assets/index.81b92446.js","assets/RunButton.vue_vue_type_script_setup_true_lang.413bb7d2.js","assets/NavbarControls.2d41b218.js","assets/index.4ff0db42.js","assets/fetch.e5be5abf.js","assets/CloseCircleOutlined.d6a09d01.js","assets/popupNotifcation.345e3ded.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/PhChats.vue.26c984b8.js","assets/NavbarControls.8ea605da.css","assets/index.ca4de814.js","assets/index.05627c09.js","assets/index.753cb1f7.js"]),meta:{title:"Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>a(()=>import("./HookEditor.dc3bb55c.js"),["assets/HookEditor.dc3bb55c.js","assets/BaseLayout.2fba9604.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.734d7eac.js","assets/uuid.9ed3d055.js","assets/PhCaretRight.vue.9b3f998f.js","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhCopySimple.vue.9ca8bffd.js","assets/LoadingOutlined.b4eccce4.js","assets/jobs.06ed9fde.js","assets/scripts.4d638052.js","assets/validations.5431c2c6.js","assets/string.90c76352.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/PhPencil.vue.b7c3ab60.js","assets/toggleHighContrast.d22ca175.js","assets/toggleHighContrast.30d77c87.css","assets/index.7b32057a.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/RunButton.vue_vue_type_script_setup_true_lang.413bb7d2.js","assets/api.0b731b30.js","assets/metadata.6d8f09c0.js","assets/PhKanban.vue.77be99b2.js","assets/PhScroll.vue.be5907e5.js","assets/PhWebhooksLogo.vue.b264a67d.js","assets/ThreadSelector.99e7f9cb.js","assets/index.bb64c758.js","assets/index.65ed0d59.js","assets/ThreadSelector.087a85c2.css","assets/index.8e27cfb1.js","assets/CollapsePanel.38ea250d.js","assets/Badge.13c9e53d.js","assets/isNumeric.75337b1e.js","assets/index.e7d15d04.js","assets/NavbarControls.2d41b218.js","assets/index.4ff0db42.js","assets/fetch.e5be5abf.js","assets/CloseCircleOutlined.d6a09d01.js","assets/popupNotifcation.345e3ded.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/PhChats.vue.26c984b8.js","assets/NavbarControls.8ea605da.css","assets/index.ca4de814.js","assets/index.05627c09.js","assets/index.753cb1f7.js"]),meta:{title:"Hook Editor"}},{path:"script/:id",name:"scriptEditor",component:()=>a(()=>import("./ScriptEditor.099021c0.js"),["assets/ScriptEditor.099021c0.js","assets/BaseLayout.2fba9604.js","assets/outputWidgets.26390fac.js","assets/outputWidgets.6a665c1f.css","assets/BaseLayout.7e127cbf.css","assets/SourceCode.734d7eac.js","assets/uuid.9ed3d055.js","assets/PhCaretRight.vue.9b3f998f.js","assets/workspaces.cb196743.js","assets/asyncComputed.80ddfd82.js","assets/runnerData.48291f69.js","assets/url.3f82014a.js","assets/record.533e9cb1.js","assets/pubsub.c681650c.js","assets/PhCheckCircle.vue.a04ae6d1.js","assets/PhCopySimple.vue.9ca8bffd.js","assets/LoadingOutlined.b4eccce4.js","assets/jobs.06ed9fde.js","assets/scripts.4d638052.js","assets/validations.5431c2c6.js","assets/string.90c76352.js","assets/Form.004c27c8.js","assets/hasIn.95c4fd64.js","assets/PhPencil.vue.b7c3ab60.js","assets/toggleHighContrast.d22ca175.js","assets/toggleHighContrast.30d77c87.css","assets/index.7b32057a.js","assets/Card.7b07e072.js","assets/TabPane.150bde46.js","assets/SourceCode.7f3825f5.css","assets/SaveButton.9a765611.js","assets/UnsavedChangesHandler.31116a2d.js","assets/ExclamationCircleOutlined.2eb984f1.js","assets/Modal.a2f682b3.js","assets/UnsavedChangesHandler.477fa526.css","assets/SaveButton.ccfb7431.css","assets/ThreadSelector.99e7f9cb.js","assets/index.bb64c758.js","assets/index.65ed0d59.js","assets/ThreadSelector.087a85c2.css","assets/RunButton.vue_vue_type_script_setup_true_lang.413bb7d2.js","assets/NavbarControls.2d41b218.js","assets/index.4ff0db42.js","assets/fetch.e5be5abf.js","assets/CloseCircleOutlined.d6a09d01.js","assets/popupNotifcation.345e3ded.js","assets/PhArrowSquareOut.vue.b368d56b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a4e97b29.js","assets/BookOutlined.a332d099.js","assets/PhChats.vue.26c984b8.js","assets/NavbarControls.8ea605da.css","assets/index.ca4de814.js","assets/index.05627c09.js","assets/index.753cb1f7.js","assets/CollapsePanel.38ea250d.js","assets/Badge.13c9e53d.js","assets/isNumeric.75337b1e.js"]),meta:{title:"Script Editor"}}]},...Y],scrollBehavior(e){if(e.hash)return{el:e.hash}}}),Z=F(m);m.beforeEach(async(e,t)=>{var o;if(e.meta.playerRoute)return Z(e,t);if(O(e,t),e.meta.allowUnauthenticated===!1&&((o=u.asyncComputed.result.value)==null?void 0:o.logged)===!1){const{redirect:r,...d}=e.query,h={redirect:location.origin+e.fullPath,...d};r&&(h["prev-redirect"]=r),window.open(u.loginUrl(h),"_self");return}});(async()=>{await J();const e=L({render:()=>U(X)});S.init(),j(e,m),e.use(m),e.use(W),e.mount("#app"),e.component("VSelect",q),e.component("Markdown",x),e.component("Message",M),_(e,B),_(e,z),_(e,H)})();export{u as l};
//# sourceMappingURL=editor.d52086f3.js.map
