import{E as y}from"./api.68436432.js";import{C as w}from"./ContentLayout.e84ffcba.js";import{d as c,L as g,N as l,e as _,o as a,c as i,w as f,b as n,u as o,R as s}from"./vue-router.0142926c.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.7124ea40.js";import{A as p,T as V}from"./TabPane.cfbf7497.js";import"./fetch.821c5fc7.js";import"./metadata.6e8bd7a0.js";import"./PhBug.vue.922083ca.js";import"./PhCheckCircle.vue.09c62183.js";import"./PhKanban.vue.1974e974.js";import"./PhWebhooksLogo.vue.79730c72.js";import"./polling.457651fa.js";import"./asyncComputed.88bea7bc.js";import"./PhQuestion.vue.d376ba0b.js";import"./ant-design.1ebce241.js";import"./index.a4a46ce2.js";import"./index.00799376.js";import"./index.d3e5c283.js";import"./CollapsePanel.e9ad1a04.js";import"./index.0d90aebf.js";import"./index.5aa68e8d.js";import"./Badge.184a06ec.js";import"./PhArrowCounterClockwise.vue.9dff0c44.js";import"./Workflow.1286bccf.js";import"./validations.60399b0e.js";import"./string.8b46420e.js";import"./uuid.9a59b995.js";import"./index.40431953.js";import"./workspaces.d661ac6a.js";import"./workspaceStore.1b523462.js";import"./url.99ccd509.js";import"./colorHelpers.abe650a1.js";import"./record.aa55731a.js";import"./index.4faee2a7.js";import"./PhArrowDown.vue.aec11496.js";import"./Card.d7d382f9.js";import"./LoadingOutlined.ce94cebc.js";import"./DeleteOutlined.edcda1dc.js";import"./PhDownloadSimple.vue.0a5acae5.js";import"./utils.f8a67825.js";import"./LoadingContainer.577469f2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1f9df033-e129-4271-8eb7-bd6013edce87",e._sentryDebugIdIdentifier="sentry-dbid-1f9df033-e129-4271-8eb7-bd6013edce87")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(e){const t=new E,m=new T,d=new g(l.array(l.string()),"kanban-selected-stages"),u=new y,r=_("kanban");return(W,b)=>(a(),i(w,{"full-width":""},{default:f(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":b[0]||(b[0]=k=>r.value=k)},{default:f(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(a(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(a(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(a(),i(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.55b5e02e.js.map
