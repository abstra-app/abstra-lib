import{C as d}from"./ContentLayout.91b6edb4.js";import{d as y,L as w,N as f,e as g,c as a,w as b,o as n,b as i,u as o,R as s}from"./vue-router.70e693dc.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.deb16dab.js";import{E as T}from"./api.7ca94399.js";import{A as p,T as V}from"./TabPane.08fb23c0.js";import"./fetch.89ca01bd.js";import"./linters.1be5ec0b.js";import"./asyncComputed.59056117.js";import"./scripts.230fe0b3.js";import"./record.4a1b1905.js";import"./metadata.28972c0b.js";import"./PhCheckCircle.vue.9ebed657.js";import"./PhKanban.vue.adb06306.js";import"./PhWebhooksLogo.vue.e76d9817.js";import"./ant-design.7d7da85e.js";import"./index.22d982fc.js";import"./index.5c561278.js";import"./index.98221430.js";import"./index.c8b0a288.js";import"./CollapsePanel.45247f46.js";import"./index.51b0e265.js";import"./index.9d8997d1.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.80bb45e6.js";import"./model.cf171883.js";import"./workspaces.8aa24866.js";import"./runnerData.97d8aa21.js";import"./url.275f2272.js";import"./validations.bb5ba268.js";import"./string.441534de.js";import"./PhArrowSquareOut.vue.01ecbadb.js";import"./index.271247e3.js";import"./Badge.2f6c893e.js";import"./index.b9d676ee.js";import"./Card.6fc340eb.js";import"./uuid.b00595a8.js";import"./LoadingOutlined.17be29bf.js";import"./DeleteOutlined.7fb8eb15.js";import"./PhDownloadSimple.vue.0abcd649.js";import"./utils.0dc7a99f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="43f5d5bc-c4e4-42c9-963e-aa9914e57f7c",e._sentryDebugIdIdentifier="sentry-dbid-43f5d5bc-c4e4-42c9-963e-aa9914e57f7c")}catch{}})();const ko=y({__name:"WorkflowThreads",setup(e){const t=new R,m=new E,u=new w(f.array(f.string()),"kanban-selected-stages"),k=new T,r=g("kanban");return(W,l)=>(n(),a(d,{"full-width":""},{default:b(()=>[i(o(V),{activeKey:r.value,"onUpdate:activeKey":l[0]||(l[0]=c=>r.value=c)},{default:b(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(n(),a(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(n(),a(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(n(),a(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.e6ebc13d.js.map
