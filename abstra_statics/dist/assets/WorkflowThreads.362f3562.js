import{C as y}from"./ContentLayout.cf7cc039.js";import{d as c,L as w,N as l,e as g,o as e,c as n,w as f,b as i,u as o,ev as s}from"./vue-router.0f0e811c.js";import{K as _,_ as v,W as K,E,a as R}from"./WorkflowView.942cfcde.js";import{E as T}from"./api.d0a4a351.js";import{A as p,T as V}from"./TabPane.1e3170ed.js";import"./fetch.1313becf.js";import"./linters.b98a0962.js";import"./asyncComputed.27f7173e.js";import"./scripts.eff38c6b.js";import"./record.0e17be34.js";import"./metadata.27a4266a.js";import"./PhCheckCircle.vue.ea4d0a63.js";import"./PhKanban.vue.2e1fd045.js";import"./PhWebhooksLogo.vue.9424601c.js";import"./ant-design.1a73dd69.js";import"./index.699c6794.js";import"./index.4b45e2b9.js";import"./index.c4ec2a8b.js";import"./index.d0bc3adf.js";import"./CollapsePanel.0de8a007.js";import"./index.accc8794.js";import"./index.83576398.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.044efaf6.js";import"./model.f1b3bcf7.js";import"./workspaces.bf72d8f1.js";import"./runnerData.1ca416a2.js";import"./url.a32fbdf2.js";import"./validations.752174bd.js";import"./string.1831bbc7.js";import"./PhArrowSquareOut.vue.6764926f.js";import"./index.ca3874b1.js";import"./Badge.8daf72ad.js";import"./index.03d90f79.js";import"./Card.b792ed6f.js";import"./uuid.f3e4899d.js";import"./LoadingOutlined.4bd553b6.js";import"./DeleteOutlined.d1038923.js";import"./PhDownloadSimple.vue.b4e3d32a.js";import"./utils.4255a250.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="45f2737c-5bc2-456b-a56d-577c0a294990",r._sentryDebugIdIdentifier="sentry-dbid-45f2737c-5bc2-456b-a56d-577c0a294990")}catch{}})();const ko=c({__name:"WorkflowThreads",setup(r){const t=new E,m=new R,u=new w(l.array(l.string()),"kanban-selected-stages"),k=new T,a=g("kanban");return(W,b)=>(e(),n(y,{"full-width":""},{default:f(()=>[i(o(V),{activeKey:a.value,"onUpdate:activeKey":b[0]||(b[0]=d=>a.value=d)},{default:f(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(e(),n(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),a.value==="table"?(e(),n(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),a.value==="workflow"?(e(),n(K,{key:2,"kanban-repository":o(t),"workflow-api":o(k)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.362f3562.js.map
