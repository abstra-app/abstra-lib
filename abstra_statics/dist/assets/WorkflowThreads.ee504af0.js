import{C as y}from"./ContentLayout.31c0f5cd.js";import{d as w,L as c,N as d,e as g,o as a,c as n,w as l,b as i,u as o,ev as s}from"./vue-router.9c189215.js";import{K as _,_ as v,W as K,E,a as R}from"./WorkflowView.ea80b333.js";import{E as T}from"./api.39bb761e.js";import{A as p,T as V}from"./TabPane.1c00cd5f.js";import"./fetch.cbad757f.js";import"./linters.28fa212f.js";import"./asyncComputed.9b764511.js";import"./scripts.a3fa69df.js";import"./record.81eab1e4.js";import"./metadata.8d3d9e54.js";import"./PhCheckCircle.vue.77d168c1.js";import"./PhKanban.vue.79a750bc.js";import"./PhWebhooksLogo.vue.4027a276.js";import"./ant-design.ffef9ea6.js";import"./index.cef5be1e.js";import"./index.25372697.js";import"./index.bf0eb142.js";import"./index.11ff09de.js";import"./CollapsePanel.3444ba0b.js";import"./index.cfeca020.js";import"./index.270bafb6.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.e28d4fad.js";import"./model.8e9c7094.js";import"./workspaces.071bd719.js";import"./runnerData.bc555239.js";import"./url.31fc40ca.js";import"./validations.3502c42f.js";import"./string.ab5242d0.js";import"./PhArrowSquareOut.vue.ddd88f8c.js";import"./index.52637728.js";import"./Badge.8f0bc30f.js";import"./index.aa9903a2.js";import"./Card.2a8e9df0.js";import"./uuid.29ec31f9.js";import"./LoadingOutlined.2e22119b.js";import"./DeleteOutlined.45422492.js";import"./PhDownloadSimple.vue.f8d96320.js";import"./utils.cbbe8440.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e01ede86-72e2-49c6-928d-38b98db0f0d9",e._sentryDebugIdIdentifier="sentry-dbid-e01ede86-72e2-49c6-928d-38b98db0f0d9")}catch{}})();const ko=w({__name:"WorkflowThreads",setup(e){const t=new E,m=new R,f=new c(d.array(d.string()),"kanban-selected-stages"),u=new T,r=g("kanban");return(W,b)=>(a(),n(y,{"full-width":""},{default:l(()=>[i(o(V),{activeKey:r.value,"onUpdate:activeKey":b[0]||(b[0]=k=>r.value=k)},{default:l(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(a(),n(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(f),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(a(),n(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(a(),n(K,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.ee504af0.js.map
