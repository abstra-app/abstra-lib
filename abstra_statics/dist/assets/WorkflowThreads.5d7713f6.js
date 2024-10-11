import{E as y}from"./api.d90763b9.js";import{C as c}from"./ContentLayout.b0d76d28.js";import{d as w,L as g,N as b,e as _,c as r,w as l,o as i,b as n,u as o,R as s}from"./vue-router.663e4641.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.977eca33.js";import{A as p,T as V}from"./TabPane.e989009f.js";import"./fetch.9abdec80.js";import"./metadata.762ebffe.js";import"./PhBug.vue.09624921.js";import"./PhCheckCircle.vue.d3212271.js";import"./PhKanban.vue.662872bc.js";import"./PhWebhooksLogo.vue.bfd9444c.js";import"./polling.05952d58.js";import"./asyncComputed.91dd9b14.js";import"./PhQuestion.vue.5e76a3ec.js";import"./ant-design.2d475047.js";import"./index.108b4fb6.js";import"./index.eb766f89.js";import"./index.7376e249.js";import"./CollapsePanel.c7d6ec8c.js";import"./index.de7acf85.js";import"./index.3857998a.js";import"./Badge.24c8de5e.js";import"./PhArrowCounterClockwise.vue.7ace423e.js";import"./Workflow.2a1d48f9.js";import"./validations.2abf23d4.js";import"./string.3b77754c.js";import"./uuid.22962b2c.js";import"./index.6145fd21.js";import"./workspaces.c1a84185.js";import"./workspaceStore.d3e54509.js";import"./url.23e7d6b6.js";import"./colorHelpers.be492f85.js";import"./record.48f7790f.js";import"./index.99237601.js";import"./PhArrowDown.vue.a73806eb.js";import"./Card.6578fe66.js";import"./LoadingOutlined.ab021b93.js";import"./DeleteOutlined.e8154d39.js";import"./PhDownloadSimple.vue.0c563ba9.js";import"./utils.4c996f3d.js";import"./LoadingContainer.c2475ca5.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="fe76e6b1-afe9-4fad-a097-ca283835c6cb",a._sentryDebugIdIdentifier="sentry-dbid-fe76e6b1-afe9-4fad-a097-ca283835c6cb")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(a){const t=new E,m=new T,u=new g(b.array(b.string()),"kanban-selected-stages"),k=new y,e=_("kanban");return(W,f)=>(i(),r(c,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":f[0]||(f[0]=d=>e.value=d)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),r(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),r(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),r(R,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.5d7713f6.js.map
