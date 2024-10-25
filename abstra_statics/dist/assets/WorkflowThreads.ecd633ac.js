import{E as y}from"./api.e38eec23.js";import{C as c}from"./ContentLayout.828ec461.js";import{d as w,L as g,N as l,e as _,c as a,w as b,o as i,b as n,u as o,R as s}from"./vue-router.be52a0de.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.11d131d3.js";import{A as p,T as V}from"./TabPane.c6f2ce27.js";import"./fetch.85a9e3a9.js";import"./metadata.c60eec9c.js";import"./PhBug.vue.4bbb6f2c.js";import"./PhCheckCircle.vue.baeee31d.js";import"./PhKanban.vue.02c7c110.js";import"./PhWebhooksLogo.vue.c2cb0574.js";import"./polling.76819e06.js";import"./asyncComputed.1d0783a3.js";import"./PhQuestion.vue.7de1719c.js";import"./ant-design.1a80edf8.js";import"./index.ab362385.js";import"./index.3737d661.js";import"./index.f7ae5a1a.js";import"./CollapsePanel.2d25a2df.js";import"./index.5d2aba6f.js";import"./index.ee3ce449.js";import"./Badge.7e039ac7.js";import"./PhArrowCounterClockwise.vue.3401ced4.js";import"./Workflow.716f7e3d.js";import"./validations.00a95ffc.js";import"./string.63744b34.js";import"./uuid.11fe73b4.js";import"./index.8cf77330.js";import"./workspaces.d33bd9d3.js";import"./workspaceStore.ff883554.js";import"./url.ffd0a643.js";import"./colorHelpers.cf7a776c.js";import"./record.c90d02d8.js";import"./index.2feffe29.js";import"./PhArrowDown.vue.630a3cbb.js";import"./Card.dc59daba.js";import"./LoadingOutlined.b1a834f7.js";import"./DeleteOutlined.74da1b92.js";import"./PhDownloadSimple.vue.dcca93cc.js";import"./utils.816cd9c1.js";import"./LoadingContainer.67af23dc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e95dfce9-751d-4fc2-a01b-e24eacf99e44",e._sentryDebugIdIdentifier="sentry-dbid-e95dfce9-751d-4fc2-a01b-e24eacf99e44")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(e){const t=new E,m=new T,d=new g(l.array(l.string()),"kanban-selected-stages"),u=new y,r=_("kanban");return(W,f)=>(i(),a(c,{"full-width":""},{default:b(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":f[0]||(f[0]=k=>r.value=k)},{default:b(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(i(),a(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(i(),a(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(i(),a(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.ecd633ac.js.map
