import{C as y}from"./ContentLayout.169cf879.js";import{d,L as w,N as l,e as g,o as r,c as n,w as f,b as i,u as o,ev as s}from"./vue-router.14a548cd.js";import{K as _,_ as v,W as K,E,a as R}from"./WorkflowView.e1611764.js";import{E as T}from"./api.b7d1c8e4.js";import{A as p,T as V}from"./TabPane.9c5a6544.js";import"./fetch.760e3843.js";import"./linters.695269ce.js";import"./asyncComputed.e02ddca3.js";import"./scripts.c8044df8.js";import"./record.38982c9b.js";import"./metadata.63e44d65.js";import"./PhCheckCircle.vue.9ef7f7fa.js";import"./PhKanban.vue.6a89bf26.js";import"./PhWebhooksLogo.vue.c9145d72.js";import"./ant-design.1e9d5b60.js";import"./index.d30600b7.js";import"./index.737de368.js";import"./index.5881e998.js";import"./index.2c7c75fe.js";import"./CollapsePanel.63f964e3.js";import"./index.89dec29d.js";import"./index.350fcaff.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.584db50a.js";import"./model.5b919670.js";import"./workspaces.0c1cb985.js";import"./runnerData.29acc03f.js";import"./url.035a83f3.js";import"./validations.c2bdd4f4.js";import"./string.06dbe131.js";import"./PhArrowSquareOut.vue.33b3861a.js";import"./index.b337a396.js";import"./Badge.753a0a69.js";import"./index.9f2fd8db.js";import"./Card.703dc1c7.js";import"./uuid.a7f35b80.js";import"./LoadingOutlined.4b701d7c.js";import"./DeleteOutlined.11f070e5.js";import"./PhDownloadSimple.vue.c432479d.js";import"./utils.4853543a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e4c00f94-b0eb-4a2e-a614-53e666ccc85a",e._sentryDebugIdIdentifier="sentry-dbid-e4c00f94-b0eb-4a2e-a614-53e666ccc85a")}catch{}})();const ko=d({__name:"WorkflowThreads",setup(e){const t=new E,m=new R,u=new w(l.array(l.string()),"kanban-selected-stages"),k=new T,a=g("kanban");return(W,b)=>(r(),n(y,{"full-width":""},{default:f(()=>[i(o(V),{activeKey:a.value,"onUpdate:activeKey":b[0]||(b[0]=c=>a.value=c)},{default:f(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(r(),n(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(r(),n(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(r(),n(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.195f663f.js.map
