import{E as d}from"./api.f4f1bf33.js";import{C as w}from"./ContentLayout.1b8cfb78.js";import{d as c,L as g,N as l,e as _,c as a,w as u,o as i,b as n,u as o,R as s}from"./vue-router.19c25bb8.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.66f59713.js";import{A as p,T as V}from"./TabPane.92fe77fe.js";import"./fetch.7c5917cf.js";import"./metadata.434d6a7c.js";import"./PhBug.vue.c60d6b35.js";import"./PhCheckCircle.vue.c56a35fd.js";import"./PhKanban.vue.b5c9e386.js";import"./PhWebhooksLogo.vue.c0168731.js";import"./polling.28783fc2.js";import"./asyncComputed.6b74b93d.js";import"./PhQuestion.vue.3e57e490.js";import"./ant-design.3decbc22.js";import"./index.79cd3db6.js";import"./index.7271c29a.js";import"./index.1b22f1b1.js";import"./CollapsePanel.93302d9d.js";import"./index.333de156.js";import"./index.beb0b0d2.js";import"./Badge.526abbb1.js";import"./PhArrowCounterClockwise.vue.44456058.js";import"./Workflow.56249222.js";import"./validations.69cebcae.js";import"./string.ec5bd2aa.js";import"./uuid.343c6220.js";import"./index.d46898a9.js";import"./workspaces.82619799.js";import"./workspaceStore.9872d6db.js";import"./url.8306ef98.js";import"./colorHelpers.4af56f8d.js";import"./record.5f64ae27.js";import"./index.2026bb51.js";import"./PhArrowDown.vue.308612c0.js";import"./Card.a9166cf5.js";import"./LoadingOutlined.bd5fc190.js";import"./DeleteOutlined.2d46c7a3.js";import"./PhDownloadSimple.vue.61b2c5b6.js";import"./utils.c7305cbc.js";import"./LoadingContainer.48291b01.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="7262239e-1868-4979-a1cb-8109b0e05526",r._sentryDebugIdIdentifier="sentry-dbid-7262239e-1868-4979-a1cb-8109b0e05526")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,f=new g(l.array(l.string()),"kanban-selected-stages"),k=new d,e=_("kanban");return(W,b)=>(i(),a(w,{"full-width":""},{default:u(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":b[0]||(b[0]=y=>e.value=y)},{default:u(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(f),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.109ac8b4.js.map
