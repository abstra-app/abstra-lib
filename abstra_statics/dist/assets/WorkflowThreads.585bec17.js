import{E as y}from"./api.8b987083.js";import{C as w}from"./ContentLayout.ee970dbc.js";import{d as c,L as g,N as b,e as _,c as e,w as l,o as i,b as n,u as o,R as s}from"./vue-router.36bc5188.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.d6acb03d.js";import{A as p,T as V}from"./TabPane.72140f27.js";import"./fetch.34d0ff03.js";import"./metadata.bb9a1264.js";import"./PhBug.vue.a90a2180.js";import"./PhCheckCircle.vue.f3c7f168.js";import"./PhKanban.vue.9ec361a4.js";import"./PhWebhooksLogo.vue.7b5e081c.js";import"./polling.1c2c7174.js";import"./asyncComputed.37a42e7b.js";import"./PhQuestion.vue.cbc824dc.js";import"./ant-design.a27edffa.js";import"./index.87f1e4b3.js";import"./index.3df0f069.js";import"./index.986d5327.js";import"./CollapsePanel.d0b757b8.js";import"./index.8203845a.js";import"./index.bb9ce67d.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.6f4cb0fe.js";import"./Workflow.7e84c3ab.js";import"./validations.f5adff57.js";import"./string.8a83f3d1.js";import"./uuid.d62e9461.js";import"./index.19f3599f.js";import"./workspaces.7e4ae44b.js";import"./workspaceStore.90fe8dcc.js";import"./url.a7891bdc.js";import"./colorHelpers.19c77349.js";import"./record.2cf5df84.js";import"./index.d177cfd2.js";import"./Badge.852dfe71.js";import"./Card.45552787.js";import"./LoadingOutlined.45ad2840.js";import"./DeleteOutlined.ea1ec8fb.js";import"./PhDownloadSimple.vue.531250be.js";import"./utils.4f8a271d.js";import"./LoadingContainer.48eacb0b.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="cf66dd07-474f-4420-8cbb-af4079703f17",r._sentryDebugIdIdentifier="sentry-dbid-cf66dd07-474f-4420-8cbb-af4079703f17")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,d=new g(b.array(b.string()),"kanban-selected-stages"),u=new y,a=_("kanban");return(W,f)=>(i(),e(w,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:a.value,"onUpdate:activeKey":f[0]||(f[0]=k=>a.value=k)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(i(),e(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(i(),e(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(i(),e(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.585bec17.js.map
