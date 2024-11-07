import{E as y}from"./api.2743ae18.js";import{C as w}from"./ContentLayout.32d15af6.js";import{d as c,L as g,N as l,e as _,o as e,c as i,w as f,b as n,u as o,R as s}from"./vue-router.f3b8067f.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.acc2424b.js";import{A as p,T as V}from"./TabPane.74273289.js";import"./fetch.fc8dde2d.js";import"./metadata.35cbc6be.js";import"./PhBug.vue.c9b200f3.js";import"./PhCheckCircle.vue.44ff60e4.js";import"./PhKanban.vue.d3514974.js";import"./PhWebhooksLogo.vue.d1295ccf.js";import"./polling.da40cc9f.js";import"./asyncComputed.8aeb1fce.js";import"./PhQuestion.vue.eec398ae.js";import"./ant-design.994c5696.js";import"./index.1c54fb32.js";import"./index.c87e2599.js";import"./index.58976f17.js";import"./CollapsePanel.b4db7aae.js";import"./index.2fff63c6.js";import"./index.cfa8dbf7.js";import"./Badge.b10e917a.js";import"./PhArrowCounterClockwise.vue.6f9c9530.js";import"./Workflow.0767e706.js";import"./validations.689efca1.js";import"./string.e32a79c7.js";import"./uuid.ea1b615e.js";import"./index.c81b71f8.js";import"./workspaces.3d3a25c7.js";import"./workspaceStore.697a5b95.js";import"./url.bdfe831c.js";import"./colorHelpers.2607692a.js";import"./record.02c0d6ad.js";import"./index.770a1e3c.js";import"./PhArrowDown.vue.e48ee68a.js";import"./Card.ecd329dd.js";import"./LoadingOutlined.5706454c.js";import"./DeleteOutlined.b694a1ae.js";import"./PhDownloadSimple.vue.10999797.js";import"./utils.1848e084.js";import"./LoadingContainer.35826fdb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="4ac29ab7-288e-4df4-94a4-829b3cf3d49b",r._sentryDebugIdIdentifier="sentry-dbid-4ac29ab7-288e-4df4-94a4-829b3cf3d49b")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,d=new g(l.array(l.string()),"kanban-selected-stages"),u=new y,a=_("kanban");return(W,b)=>(e(),i(w,{"full-width":""},{default:f(()=>[n(o(V),{activeKey:a.value,"onUpdate:activeKey":b[0]||(b[0]=k=>a.value=k)},{default:f(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(e(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(e(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(e(),i(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.6754abf8.js.map
