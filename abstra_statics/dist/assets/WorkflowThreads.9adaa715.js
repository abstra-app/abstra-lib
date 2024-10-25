import{E as y}from"./api.bc54294b.js";import{C as w}from"./ContentLayout.ea6c7a65.js";import{d as c,L as g,N as f,e as _,c as a,w as l,o as i,b as n,u as o,R as s}from"./vue-router.ef289645.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.fd82c0b5.js";import{A as p,T as V}from"./TabPane.0af9c79f.js";import"./fetch.4e2659a5.js";import"./metadata.6c3403b5.js";import"./PhBug.vue.93aad22e.js";import"./PhCheckCircle.vue.373a0773.js";import"./PhKanban.vue.09039fd1.js";import"./PhWebhooksLogo.vue.33de9f09.js";import"./polling.88c9b221.js";import"./asyncComputed.4df2b74a.js";import"./PhQuestion.vue.560c6419.js";import"./ant-design.9b149ea7.js";import"./index.10873433.js";import"./index.f9d37fc1.js";import"./index.cccb5126.js";import"./CollapsePanel.e818b27b.js";import"./index.feb8e8d8.js";import"./index.a8adc703.js";import"./Badge.1dc70832.js";import"./PhArrowCounterClockwise.vue.098f465c.js";import"./Workflow.11315f4c.js";import"./validations.f5fe89bc.js";import"./string.f997184e.js";import"./uuid.b288154d.js";import"./index.2a3f1b02.js";import"./workspaces.68085692.js";import"./workspaceStore.e769f3e4.js";import"./url.7df1a15c.js";import"./colorHelpers.8f934995.js";import"./record.3eee2e37.js";import"./index.fb6cedbd.js";import"./PhArrowDown.vue.27304d7c.js";import"./Card.b6dd456b.js";import"./LoadingOutlined.d2a60b1a.js";import"./DeleteOutlined.1b3c19cc.js";import"./PhDownloadSimple.vue.77e06b67.js";import"./utils.90915ab1.js";import"./LoadingContainer.5cd8b586.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="e92b794d-3b80-409d-bf41-6fe0f7a90d02",r._sentryDebugIdIdentifier="sentry-dbid-e92b794d-3b80-409d-bf41-6fe0f7a90d02")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,d=new g(f.array(f.string()),"kanban-selected-stages"),u=new y,e=_("kanban");return(W,b)=>(i(),a(w,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":b[0]||(b[0]=k=>e.value=k)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.9adaa715.js.map
