import{E as y}from"./api.2acbc84a.js";import{C as w}from"./ContentLayout.e76b89f2.js";import{d as c,L as g,N as l,e as _,c as a,w as f,o as i,b as n,u as o,R as s}from"./vue-router.af88a013.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.c64ea8cb.js";import{A as p,T as V}from"./TabPane.4d56fc1d.js";import"./fetch.0dabff63.js";import"./metadata.2c74dc91.js";import"./PhBug.vue.db28bbe4.js";import"./PhCheckCircle.vue.e2f72fdc.js";import"./PhKanban.vue.aa98227d.js";import"./PhWebhooksLogo.vue.e723bbc0.js";import"./polling.5c98d4b9.js";import"./asyncComputed.7bdc3110.js";import"./PhQuestion.vue.95c14bfa.js";import"./ant-design.d5a2ab22.js";import"./index.3809082c.js";import"./index.2023ec53.js";import"./index.649bb3f0.js";import"./CollapsePanel.1fa20acc.js";import"./index.db752a38.js";import"./index.871fda84.js";import"./Badge.63c7629b.js";import"./PhArrowCounterClockwise.vue.a8780f74.js";import"./Workflow.a7116eaa.js";import"./validations.29d69de4.js";import"./string.fcd21026.js";import"./uuid.f1c23844.js";import"./index.245383ce.js";import"./workspaces.d36809db.js";import"./workspaceStore.bab93342.js";import"./url.e178addd.js";import"./colorHelpers.5c21edb4.js";import"./record.35534097.js";import"./index.053fd1f7.js";import"./PhArrowDown.vue.ffb81b4e.js";import"./Card.44b22860.js";import"./LoadingOutlined.265fc8cf.js";import"./DeleteOutlined.93b0775a.js";import"./PhDownloadSimple.vue.cb9ed831.js";import"./utils.63e0c8f8.js";import"./LoadingContainer.d0a95c50.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7f7ee9a4-e130-43b8-bb93-cb784e8b2cd7",e._sentryDebugIdIdentifier="sentry-dbid-7f7ee9a4-e130-43b8-bb93-cb784e8b2cd7")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(e){const t=new E,m=new T,u=new g(l.array(l.string()),"kanban-selected-stages"),k=new y,r=_("kanban");return(W,b)=>(i(),a(w,{"full-width":""},{default:f(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":b[0]||(b[0]=d=>r.value=d)},{default:f(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.99d3c83a.js.map
