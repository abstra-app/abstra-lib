import{E as y}from"./api.da574971.js";import{C as w}from"./ContentLayout.5e7c73f2.js";import{d as c,L as g,N as f,e as _,c as a,w as l,o as i,b as n,u as o,R as s}from"./vue-router.56e874b7.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.377d3696.js";import{A as p,T as V}from"./TabPane.7a18f0e7.js";import"./fetch.4ea6c13b.js";import"./metadata.ef1295ed.js";import"./PhBug.vue.ec7259ed.js";import"./PhCheckCircle.vue.ecc0d1e5.js";import"./PhKanban.vue.a29d1aac.js";import"./PhWebhooksLogo.vue.8dc9ac79.js";import"./polling.7b63a7f2.js";import"./asyncComputed.d79e50da.js";import"./PhQuestion.vue.4b917105.js";import"./ant-design.88c94af1.js";import"./index.8f8dcc70.js";import"./index.5cd950a1.js";import"./index.9476ee8e.js";import"./CollapsePanel.170a9a36.js";import"./index.95483daa.js";import"./index.18ebfd25.js";import"./Badge.1d1ced22.js";import"./PhArrowCounterClockwise.vue.ce46aa2a.js";import"./Workflow.d9b27296.js";import"./validations.5aa94a3c.js";import"./string.9a6f74f9.js";import"./uuid.677e7939.js";import"./index.371590b8.js";import"./workspaces.015891e7.js";import"./workspaceStore.6a7f3351.js";import"./url.e220ac39.js";import"./colorHelpers.c64d4ebe.js";import"./record.34b88d0a.js";import"./index.0e5c960d.js";import"./PhArrowDown.vue.f035be52.js";import"./Card.5b7c7b3c.js";import"./LoadingOutlined.460c1542.js";import"./DeleteOutlined.4b8858a3.js";import"./PhDownloadSimple.vue.cfa7347d.js";import"./utils.65dfa6ec.js";import"./LoadingContainer.cf444121.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="adf63fc2-30bd-4ef0-b63f-998c9b193ebe",e._sentryDebugIdIdentifier="sentry-dbid-adf63fc2-30bd-4ef0-b63f-998c9b193ebe")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(e){const t=new E,m=new T,d=new g(f.array(f.string()),"kanban-selected-stages"),u=new y,r=_("kanban");return(W,b)=>(i(),a(w,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":b[0]||(b[0]=k=>r.value=k)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.6917a372.js.map
