import{E as y}from"./api.1ac60509.js";import{C as c}from"./ContentLayout.d5fe30f0.js";import{d as w,L as g,N as f,e as _,c as a,w as b,o as i,b as n,u as o,R as s}from"./vue-router.2201cef6.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.def9c0bb.js";import{A as p,T as V}from"./TabPane.7dd157a1.js";import"./fetch.1f60c70a.js";import"./metadata.aec2d5d2.js";import"./PhBug.vue.cb62574d.js";import"./PhCheckCircle.vue.ff019516.js";import"./PhKanban.vue.87c57970.js";import"./PhWebhooksLogo.vue.f2455ef4.js";import"./polling.4ffd289d.js";import"./asyncComputed.2115b995.js";import"./PhQuestion.vue.ba86a911.js";import"./ant-design.270b4452.js";import"./index.7cac7273.js";import"./index.957aad02.js";import"./index.e4a1b1ca.js";import"./CollapsePanel.b667f890.js";import"./index.7974cb01.js";import"./index.470b21fd.js";import"./Badge.8217c44a.js";import"./PhArrowCounterClockwise.vue.35e59089.js";import"./Workflow.9d3e0dd9.js";import"./validations.17cedddb.js";import"./string.be099367.js";import"./uuid.219f1ee0.js";import"./index.1f842578.js";import"./workspaces.9fa76658.js";import"./workspaceStore.c56bfa8e.js";import"./url.9b355f19.js";import"./colorHelpers.d2a65168.js";import"./record.cf38cca3.js";import"./index.94e507f3.js";import"./PhArrowDown.vue.c4666d9a.js";import"./Card.8ecd4ede.js";import"./LoadingOutlined.28042dfa.js";import"./DeleteOutlined.25147770.js";import"./PhDownloadSimple.vue.623d9eef.js";import"./utils.0e946207.js";import"./LoadingContainer.4a7081b8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="4c7b6604-a265-469e-9d73-c6d599f77fc8",r._sentryDebugIdIdentifier="sentry-dbid-4c7b6604-a265-469e-9d73-c6d599f77fc8")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,d=new g(f.array(f.string()),"kanban-selected-stages"),u=new y,e=_("kanban");return(W,l)=>(i(),a(c,{"full-width":""},{default:b(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":l[0]||(l[0]=k=>e.value=k)},{default:b(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.cf6dfce7.js.map
