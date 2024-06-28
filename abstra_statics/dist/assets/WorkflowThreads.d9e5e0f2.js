import{C as y}from"./ContentLayout.31711adb.js";import{d as w,L as c,z as f,r as g,b as a,c as i,w as b,f as n,u as o,es as s}from"./outputWidgets.fd23be41.js";import{K as _,_ as v,W as K,E,a as R}from"./WorkflowView.7b5df473.js";import{E as T}from"./api.0b4b2b88.js";import{A as p,T as V}from"./TabPane.38da95b0.js";import"./fetch.882c0e5f.js";import"./workspaces.1feacdf3.js";import"./asyncComputed.1151ee43.js";import"./runnerData.62f32f7a.js";import"./url.003e3fc2.js";import"./record.f44b1b8b.js";import"./pubsub.35617498.js";import"./scripts.4676e77d.js";import"./metadata.caed30ad.js";import"./PhCheckCircle.vue.df4319d4.js";import"./PhKanban.vue.4031cbe0.js";import"./PhScroll.vue.0a8d7122.js";import"./PhWebhooksLogo.vue.a290f3e3.js";import"./ant-design.eb827565.js";import"./index.3fc5d928.js";import"./index.fe816fd7.js";import"./index.2128c658.js";import"./index.5f0aac8e.js";import"./CollapsePanel.63f2c9a8.js";import"./index.3ac7603f.js";import"./index.58faad4f.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.53103f4a.js";import"./model.5543a944.js";import"./validations.bd678296.js";import"./string.d499de72.js";import"./PhArrowSquareOut.vue.3a969ee0.js";import"./index.120bd635.js";import"./Badge.7b0c9dc7.js";import"./index.a1f431b5.js";import"./Card.4c6d2170.js";import"./uuid.d7d06b95.js";import"./LoadingOutlined.c884eb16.js";import"./DeleteOutlined.c938fe07.js";import"./PhDownloadSimple.vue.412abbca.js";import"./utils.0d0b5da7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="92266713-7edd-45ec-a408-aa87579ef311",e._sentryDebugIdIdentifier="sentry-dbid-92266713-7edd-45ec-a408-aa87579ef311")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(e){const t=new E,m=new R,d=new c(f.array(f.string()),"kanban-selected-stages"),u=new T,r=g("kanban");return(W,l)=>(a(),i(y,{"full-width":""},{default:b(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":l[0]||(l[0]=k=>r.value=k)},{default:b(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(a(),i(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(a(),i(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(a(),i(K,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.d9e5e0f2.js.map
