import{E as y}from"./api.92d12e4f.js";import{C as w}from"./ContentLayout.692f1cc6.js";import{d as c,L as g,N as b,e as _,o as e,c as i,w as l,b as n,u as o,R as s}from"./vue-router.a301704c.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.5283261a.js";import{A as p,T as V}from"./TabPane.4b93ad7f.js";import"./fetch.3897f6cd.js";import"./metadata.6bf78b0c.js";import"./PhBug.vue.df4a58c4.js";import"./PhCheckCircle.vue.9ecd8e66.js";import"./PhKanban.vue.79a689a5.js";import"./PhWebhooksLogo.vue.1d4c10da.js";import"./polling.c17378b0.js";import"./asyncComputed.8d09bea7.js";import"./PhQuestion.vue.0ff52186.js";import"./ant-design.93417202.js";import"./index.6d0aa991.js";import"./index.16db0cbc.js";import"./index.c32243fb.js";import"./CollapsePanel.aee33b03.js";import"./index.72e7e0c4.js";import"./index.3b1ea943.js";import"./Badge.de362ad0.js";import"./PhArrowCounterClockwise.vue.dcd6d113.js";import"./Workflow.24f4a4d9.js";import"./validations.76a63dfc.js";import"./string.120d0ab5.js";import"./uuid.ae615ecc.js";import"./index.0a7cb9a1.js";import"./workspaces.4091395e.js";import"./workspaceStore.dc98ce76.js";import"./url.3e386c25.js";import"./colorHelpers.cfb226fe.js";import"./record.fd803298.js";import"./index.aa68167d.js";import"./PhArrowDown.vue.11a6de36.js";import"./Card.fead4877.js";import"./LoadingOutlined.e575a9f5.js";import"./DeleteOutlined.67505aa3.js";import"./PhDownloadSimple.vue.ffb4cef9.js";import"./utils.7ecb82cb.js";import"./LoadingContainer.4b478e13.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="fdaf8a62-0c4b-4b93-9830-a4f300922379",r._sentryDebugIdIdentifier="sentry-dbid-fdaf8a62-0c4b-4b93-9830-a4f300922379")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,u=new g(b.array(b.string()),"kanban-selected-stages"),k=new y,a=_("kanban");return(W,f)=>(e(),i(w,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:a.value,"onUpdate:activeKey":f[0]||(f[0]=d=>a.value=d)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(e(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(e(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(e(),i(R,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.b79668c8.js.map
