import{u as s}from"./index.0da17e95.js";import{d as u,L as k,z as c,r as _,b as i,eX as w,f as n,w as g,u as t,c as p,eZ as m,at as v}from"./outputWidgets.9a494812.js";import{K as T,_ as K,W as h,P as I,b as P}from"./WorkflowView.9b685368.js";import{P as R}from"./api.aa94c2fb.js";import{A as l,T as V}from"./TabPane.edb4c9a3.js";import"./Card.0f92f334.js";import"./fetch.23cd0b1e.js";import"./pubsub.97e68a0d.js";import"./workspaces.8998253c.js";import"./asyncComputed.63db5c85.js";import"./runnerData.7c980e32.js";import"./url.5e44ba49.js";import"./record.7e7cc1c2.js";import"./scripts.4f8a2a0d.js";import"./metadata.dfd3ef3b.js";import"./PhCheckCircle.vue.2183a9d8.js";import"./PhKanban.vue.8ec3a977.js";import"./PhScroll.vue.d464d64e.js";import"./PhWebhooksLogo.vue.a5f4d00f.js";import"./ant-design.a5178e51.js";import"./index.12ad4f66.js";import"./Modal.29a6f5e0.js";import"./index.c917509f.js";import"./index.a91db36f.js";import"./index.f2ec21f0.js";import"./index.768d3c94.js";import"./CollapsePanel.c4777b7a.js";import"./index.013be55e.js";import"./index.69dbb646.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.4458adab.js";import"./model.ec2879fd.js";import"./validations.36bdba5f.js";import"./string.775421af.js";import"./PhArrowSquareOut.vue.68e21028.js";import"./index.850ed15e.js";import"./Badge.9e8a2ccd.js";import"./index.677d893c.js";import"./Form.e37a51cf.js";import"./hasIn.1819d28b.js";import"./uuid.82664d45.js";import"./LoadingOutlined.4eea9c3c.js";import"./DeleteOutlined.e7e03991.js";import"./DeleteOutlined.f8ba9770.js";import"./index.ab95fb27.js";import"./PhDownloadSimple.vue.49d308d4.js";import"./utils.49d6adca.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="caf4056d-47d3-4930-aef2-886767695a0b",e._sentryDebugIdIdentifier="sentry-dbid-caf4056d-47d3-4930-aef2-886767695a0b")}catch{}})();const x={class:"threads-view"},W=u({__name:"Threads",setup(e){const a=new R(s),r=new I(s),d=new P(s),y=new k(c.array(c.string()),"kanban-selected-stages"),o=_("kanban");return(A,b)=>(i(),w("div",x,[n(t(V),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=f=>o.value=f)},{default:g(()=>[n(t(l),{key:"kanban",tab:"Kanban View"}),n(t(l),{key:"table",tab:"Table View"}),n(t(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(i(),p(T,{key:0,"kanban-repository":t(r),"kanban-stages-storage":t(y),"stage-run-repository":t(d)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(i(),p(K,{key:1,"kanban-repository":t(r)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(i(),p(h,{key:2,"kanban-repository":t(r),"workflow-api":t(a)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const It=v(W,[["__scopeId","data-v-8a8c88b2"]]);export{It as default};
//# sourceMappingURL=Threads.3ad17ed2.js.map
