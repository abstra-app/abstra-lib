import{C as c}from"./ContentLayout.ed00c03a.js";import{d,L as w,N as l,e as g,o as a,c as n,w as b,b as i,u as o,R as s}from"./vue-router.daf730b9.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.72690a8f.js";import{E as T}from"./api.174afdcf.js";import{A as p,T as V}from"./TabPane.0de314e4.js";import"./fetch.1d40f5e8.js";import"./linters.34f259c3.js";import"./asyncComputed.dbecd2e7.js";import"./scripts.d7e9f69a.js";import"./record.4629e88e.js";import"./metadata.beef8845.js";import"./PhCheckCircle.vue.101024fa.js";import"./PhKanban.vue.95a16280.js";import"./PhWebhooksLogo.vue.28e6556e.js";import"./ant-design.009abe10.js";import"./index.38f6259e.js";import"./index.a8fe7320.js";import"./index.c9cc9133.js";import"./index.a4f34116.js";import"./CollapsePanel.3771f9f6.js";import"./index.201af748.js";import"./index.ef0a61e9.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.4a7a2216.js";import"./model.58608cbc.js";import"./workspaces.ffca8a7b.js";import"./runnerData.1a8f5499.js";import"./url.983ca4b1.js";import"./validations.1cc4c221.js";import"./string.9547d5e6.js";import"./PhArrowSquareOut.vue.a2aae1aa.js";import"./index.d4d976d5.js";import"./Badge.c9941f03.js";import"./index.49d59b3b.js";import"./Card.42c8e882.js";import"./uuid.f62a6153.js";import"./LoadingOutlined.084abe84.js";import"./DeleteOutlined.19c74345.js";import"./PhDownloadSimple.vue.4f5d67cc.js";import"./utils.026768bd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="87a11ee0-e82c-41f5-a4f2-bc1f0f57c385",e._sentryDebugIdIdentifier="sentry-dbid-87a11ee0-e82c-41f5-a4f2-bc1f0f57c385")}catch{}})();const ko=d({__name:"WorkflowThreads",setup(e){const t=new R,m=new E,u=new w(l.array(l.string()),"kanban-selected-stages"),k=new T,r=g("kanban");return(W,f)=>(a(),n(c,{"full-width":""},{default:b(()=>[i(o(V),{activeKey:r.value,"onUpdate:activeKey":f[0]||(f[0]=y=>r.value=y)},{default:b(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(a(),n(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(a(),n(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(a(),n(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.12781896.js.map
