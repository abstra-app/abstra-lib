import{C as d}from"./ContentLayout.d34b8e7d.js";import{d as w,L as c,N as l,e as g,c as r,w as u,o as n,b as i,u as o,R as s}from"./vue-router.78d58ff0.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.ca3bf66c.js";import{E as T}from"./api.1c2313c5.js";import{A as p,T as V}from"./TabPane.e15de9cc.js";import"./fetch.6b493350.js";import"./linters.6b1b67ed.js";import"./asyncComputed.95993e52.js";import"./scripts.23271152.js";import"./record.6c05e3f5.js";import"./metadata.5a21999c.js";import"./PhCheckCircle.vue.3b4eb234.js";import"./PhKanban.vue.78518561.js";import"./PhWebhooksLogo.vue.307cd289.js";import"./ant-design.f29af77f.js";import"./index.e96c19f7.js";import"./index.8e2351ec.js";import"./index.6bbf453b.js";import"./index.aa9087e7.js";import"./CollapsePanel.3b0981c6.js";import"./index.6af03e92.js";import"./index.3a877807.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.91d84d7e.js";import"./model.0518f535.js";import"./workspaces.c5ca84af.js";import"./runnerData.d455da29.js";import"./url.f92f4d36.js";import"./validations.ee2ef856.js";import"./string.b574f1fa.js";import"./PhArrowSquareOut.vue.f7ba9bd2.js";import"./index.8fd76c0b.js";import"./Badge.84ae1b1f.js";import"./index.aab54164.js";import"./Card.e6564a3e.js";import"./uuid.34b93336.js";import"./LoadingOutlined.734d4a55.js";import"./DeleteOutlined.77ef7301.js";import"./PhDownloadSimple.vue.773928bf.js";import"./utils.d432b283.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="9e9626a7-6cb3-4aa6-ae24-7b1266a3c104",a._sentryDebugIdIdentifier="sentry-dbid-9e9626a7-6cb3-4aa6-ae24-7b1266a3c104")}catch{}})();const ko=w({__name:"WorkflowThreads",setup(a){const t=new R,m=new E,f=new c(l.array(l.string()),"kanban-selected-stages"),k=new T,e=g("kanban");return(W,b)=>(n(),r(d,{"full-width":""},{default:u(()=>[i(o(V),{activeKey:e.value,"onUpdate:activeKey":b[0]||(b[0]=y=>e.value=y)},{default:u(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(n(),r(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(f),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(n(),r(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(n(),r(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.1fe9359f.js.map
