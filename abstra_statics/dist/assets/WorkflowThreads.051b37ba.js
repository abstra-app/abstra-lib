import{C as d}from"./ContentLayout.18a5b3a7.js";import{d as y,L as w,N as l,e as g,c as e,w as f,o as i,b as n,u as o,R as s}from"./vue-router.0f596387.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.5d320e1b.js";import{E as T}from"./api.c01d28a1.js";import{A as p,T as V}from"./TabPane.5ca502a7.js";import"./fetch.dc7102aa.js";import"./linters.99819b1c.js";import"./asyncComputed.da5f9ccd.js";import"./scripts.267fefd6.js";import"./record.53bc43a6.js";import"./metadata.d727b703.js";import"./PhBug.vue.668d04b6.js";import"./PhCheckCircle.vue.c920a4b5.js";import"./PhKanban.vue.aa5433bb.js";import"./PhWebhooksLogo.vue.48db926f.js";import"./PhQuestion.vue.800933cf.js";import"./ant-design.37e0b858.js";import"./index.5afb86c9.js";import"./index.d14c3a7a.js";import"./index.a204a653.js";import"./index.f70d0c5c.js";import"./CollapsePanel.3d502266.js";import"./index.af86bd31.js";import"./index.1afbd751.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.765e72de.js";import"./model.29af81d3.js";import"./workspaces.b485ef88.js";import"./runnerData.eda1d1e1.js";import"./url.9dec1622.js";import"./validations.13273a6f.js";import"./string.1eacfd9a.js";import"./PhArrowSquareOut.vue.4702ab14.js";import"./index.5abbd237.js";import"./Badge.72173d76.js";import"./index.3466584e.js";import"./Card.195814e0.js";import"./uuid.ce910bd1.js";import"./LoadingOutlined.660f0697.js";import"./DeleteOutlined.f2accbcf.js";import"./PhDownloadSimple.vue.4c4ce9d9.js";import"./utils.1039f504.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="b3829b37-7508-45a4-9edc-f804cacc1659",r._sentryDebugIdIdentifier="sentry-dbid-b3829b37-7508-45a4-9edc-f804cacc1659")}catch{}})();const yo=y({__name:"WorkflowThreads",setup(r){const t=new R,m=new E,u=new w(l.array(l.string()),"kanban-selected-stages"),k=new T,a=g("kanban");return(W,b)=>(i(),e(d,{"full-width":""},{default:f(()=>[n(o(V),{activeKey:a.value,"onUpdate:activeKey":b[0]||(b[0]=c=>a.value=c)},{default:f(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(i(),e(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(i(),e(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(i(),e(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.051b37ba.js.map
