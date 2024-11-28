import{E as y}from"./api.0170e5dd.js";import{C as w}from"./ContentLayout.c5d9f18f.js";import{d as c,L as g,N as l,e as _,o as e,c as i,w as b,b as n,u as o,R as s}from"./vue-router.b8278ae0.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.0ee62824.js";import{A as p,T as V}from"./TabPane.0abcf6d8.js";import"./fetch.14a59659.js";import"./metadata.1eddf894.js";import"./PhBug.vue.ff30c6a4.js";import"./PhCheckCircle.vue.0494e368.js";import"./PhKanban.vue.0cc2e0dd.js";import"./PhWebhooksLogo.vue.58ce3718.js";import"./polling.2095287e.js";import"./asyncComputed.2712c3a5.js";import"./PhQuestion.vue.fe137704.js";import"./ant-design.883fac2a.js";import"./index.74c6d037.js";import"./index.b18c294b.js";import"./index.7c822570.js";import"./CollapsePanel.35b971dd.js";import"./index.b749d359.js";import"./index.38cb1e58.js";import"./Badge.e69c3f58.js";import"./PhArrowCounterClockwise.vue.6150d60f.js";import"./Workflow.9f26be9d.js";import"./validations.ca9691f6.js";import"./string.4e2df4c8.js";import"./uuid.90bb3935.js";import"./index.c71ed9bd.js";import"./workspaces.08265326.js";import"./workspaceStore.f0675986.js";import"./url.4c829cdd.js";import"./colorHelpers.5c1ebe36.js";import"./record.1ce8e230.js";import"./index.ddd687cb.js";import"./PhArrowDown.vue.1c4feff3.js";import"./Card.ea01c1aa.js";import"./LoadingOutlined.a62871f7.js";import"./DeleteOutlined.435f36ea.js";import"./PhDownloadSimple.vue.50469ac7.js";import"./utils.fe2e6422.js";import"./LoadingContainer.9335ac07.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="92aaef30-2e22-41dd-8922-a3214234ff92",r._sentryDebugIdIdentifier="sentry-dbid-92aaef30-2e22-41dd-8922-a3214234ff92")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,d=new g(l.array(l.string()),"kanban-selected-stages"),u=new y,a=_("kanban");return(W,f)=>(e(),i(w,{"full-width":""},{default:b(()=>[n(o(V),{activeKey:a.value,"onUpdate:activeKey":f[0]||(f[0]=k=>a.value=k)},{default:b(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(e(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(e(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(e(),i(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.e8cf6857.js.map
