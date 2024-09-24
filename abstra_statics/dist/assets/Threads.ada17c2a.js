import{P as k}from"./api.76ad1a2b.js";import{b as _}from"./workspaceStore.6e39450a.js";import{d as w,L as g,N as d,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.d25b7f26.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.8ceb2ded.js";import{A as l,T as x}from"./TabPane.0b030a67.js";import"./Card.7906f242.js";import"./fetch.18c30117.js";import"./metadata.6ef7d2c9.js";import"./PhBug.vue.7c3cdd70.js";import"./PhCheckCircle.vue.cf0d96a5.js";import"./PhKanban.vue.08658ee3.js";import"./PhWebhooksLogo.vue.65eb1dfe.js";import"./url.b5bc6558.js";import"./colorHelpers.e6c06a94.js";import"./polling.36e6816b.js";import"./asyncComputed.738c042c.js";import"./PhQuestion.vue.7e0c0701.js";import"./ant-design.e30a3dba.js";import"./index.0fd2f7a1.js";import"./index.3b5ba4f2.js";import"./index.6f5d8244.js";import"./CollapsePanel.10064966.js";import"./index.78446c70.js";import"./index.4cca7497.js";import"./Badge.cfe4f1cc.js";import"./PhArrowCounterClockwise.vue.7f9c1c99.js";import"./Workflow.60e0e887.js";import"./validations.2cbc3040.js";import"./string.b67da28f.js";import"./uuid.d3f89f33.js";import"./index.19de3cc2.js";import"./workspaces.477695ad.js";import"./record.9e6eeac9.js";import"./index.a5a1cead.js";import"./PhArrowDown.vue.4a063b33.js";import"./LoadingOutlined.f28615ad.js";import"./DeleteOutlined.e2b7fcb0.js";import"./PhDownloadSimple.vue.0e6f588e.js";import"./utils.e43ce742.js";import"./LoadingContainer.86f2f913.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="4f237e0f-9a43-4728-a4e6-719a1103cbe7",t._sentryDebugIdIdentifier="sentry-dbid-4f237e0f-9a43-4728-a4e6-719a1103cbe7")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,u=new k(a),i=new S(a),c=new V(a),y=new g(d.array(d.string()),"kanban-selected-stages"),o=v("kanban");return(B,b)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=f=>o.value=f)},{default:T(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(c)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.ada17c2a.js.map
