import{E as d}from"./api.854a5e4c.js";import{C as w}from"./ContentLayout.72beb65c.js";import{d as c,L as g,N as l,e as _,c as a,w as u,o as i,b as n,u as o,R as s}from"./vue-router.3fd92176.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.3fb1431f.js";import{A as p,T as V}from"./TabPane.d0ca7ad5.js";import"./fetch.8c5b12c2.js";import"./metadata.789df59c.js";import"./PhBug.vue.00bc4255.js";import"./PhCheckCircle.vue.d8163a77.js";import"./PhKanban.vue.b52985f0.js";import"./PhWebhooksLogo.vue.73a10b16.js";import"./polling.4e30c061.js";import"./asyncComputed.295e9e03.js";import"./PhQuestion.vue.129febdc.js";import"./ant-design.38477595.js";import"./index.063f7c9e.js";import"./index.61e7dffa.js";import"./index.82d1f1ac.js";import"./CollapsePanel.87687b29.js";import"./index.c6ce1c1c.js";import"./index.9c5136e0.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.8fbc5885.js";import"./Workflow.c11e942b.js";import"./PhArrowClockwise.vue.2725755a.js";import"./validations.0afef3f1.js";import"./string.e75a34fd.js";import"./uuid.06ef1e24.js";import"./index.bd967757.js";import"./workspaces.b456ec6a.js";import"./workspaceStore.411ef1fe.js";import"./url.5959ae47.js";import"./colorHelpers.f04087b3.js";import"./record.cbb43e89.js";import"./index.f6dcc8cb.js";import"./Badge.bcc65740.js";import"./Card.0ce127d8.js";import"./LoadingOutlined.dad6ee6e.js";import"./DeleteOutlined.a95bba08.js";import"./PhDownloadSimple.vue.33128e79.js";import"./utils.4c5a1d76.js";import"./LoadingContainer.cc61e2fd.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="8a5b5017-7031-467c-951b-30b7540b3e28",r._sentryDebugIdIdentifier="sentry-dbid-8a5b5017-7031-467c-951b-30b7540b3e28")}catch{}})();const wo=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,f=new g(l.array(l.string()),"kanban-selected-stages"),k=new d,e=_("kanban");return(W,b)=>(i(),a(w,{"full-width":""},{default:u(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":b[0]||(b[0]=y=>e.value=y)},{default:u(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(f),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{wo as default};
//# sourceMappingURL=WorkflowThreads.ff4ec453.js.map
