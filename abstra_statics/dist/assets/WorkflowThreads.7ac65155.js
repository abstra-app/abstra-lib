import{E as y}from"./api.637458b9.js";import{C as w}from"./ContentLayout.2e2e0640.js";import{d as c,L as g,N as l,e as _,o as e,c as i,w as b,b as n,u as o,R as s}from"./vue-router.318741b1.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.0c463eb8.js";import{A as p,T as V}from"./TabPane.ce3f915b.js";import"./fetch.157f8b8f.js";import"./metadata.f546deb1.js";import"./PhBug.vue.18d732c8.js";import"./PhCheckCircle.vue.fe52cf73.js";import"./PhKanban.vue.87bd15b3.js";import"./PhWebhooksLogo.vue.5849e23c.js";import"./polling.583c51cf.js";import"./asyncComputed.60cc3624.js";import"./PhQuestion.vue.96f16392.js";import"./ant-design.439c5d35.js";import"./index.c83f9f61.js";import"./index.71269a8e.js";import"./index.141037ae.js";import"./CollapsePanel.bc931c85.js";import"./index.ffa9fc28.js";import"./index.b7935e7b.js";import"./Badge.42197d4d.js";import"./PhArrowCounterClockwise.vue.42e97d75.js";import"./Workflow.a7026b3d.js";import"./validations.fdcc516b.js";import"./string.f8e88cda.js";import"./uuid.7a7fcd9d.js";import"./index.45478339.js";import"./workspaces.5a24d4e6.js";import"./workspaceStore.3af65523.js";import"./url.8effdb46.js";import"./colorHelpers.8652455c.js";import"./record.c3a43c45.js";import"./index.0707c392.js";import"./PhArrowDown.vue.800ca2c2.js";import"./Card.25fedf11.js";import"./LoadingOutlined.108d13bc.js";import"./DeleteOutlined.1dccf6b8.js";import"./PhDownloadSimple.vue.c0871807.js";import"./utils.f7afb48b.js";import"./LoadingContainer.4a7401d2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="f9e4a9f1-c6c1-4af7-ad6a-9e0838802d13",a._sentryDebugIdIdentifier="sentry-dbid-f9e4a9f1-c6c1-4af7-ad6a-9e0838802d13")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(a){const t=new E,m=new T,d=new g(l.array(l.string()),"kanban-selected-stages"),u=new y,r=_("kanban");return(W,f)=>(e(),i(w,{"full-width":""},{default:b(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":f[0]||(f[0]=k=>r.value=k)},{default:b(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(e(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(e(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(e(),i(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.7ac65155.js.map
