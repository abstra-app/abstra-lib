import{P as k}from"./api.c7878271.js";import{b as _}from"./workspaceStore.46b7d4c2.js";import{d as w,L as g,N as d,e as v,W as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.3700fa1b.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.09378608.js";import{A as b,T as W}from"./TabPane.7ef36279.js";import"./Card.5d56a635.js";import"./fetch.81d2aee9.js";import"./metadata.24b2ca10.js";import"./PhBug.vue.7f5736fe.js";import"./PhCheckCircle.vue.31dcb1cc.js";import"./PhKanban.vue.ee624250.js";import"./PhWebhooksLogo.vue.269e7ac9.js";import"./url.56061907.js";import"./polling.cada3f3d.js";import"./asyncComputed.3fd353c4.js";import"./PhQuestion.vue.d74cc684.js";import"./ant-design.55ee8f81.js";import"./index.d7a725f3.js";import"./index.6c9fd1a3.js";import"./index.02ad40e3.js";import"./CollapsePanel.5e507f64.js";import"./index.6baba0fa.js";import"./index.d28a9a44.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.b1e224b2.js";import"./Workflow.cca1cbd0.js";import"./PhArrowClockwise.vue.e46350cf.js";import"./validations.13145ff0.js";import"./string.e2148cfd.js";import"./uuid.0043a8ed.js";import"./workspaces.88c68d86.js";import"./record.3b861102.js";import"./index.f7fd94be.js";import"./Badge.ac3724d7.js";import"./LoadingOutlined.14810fa8.js";import"./DeleteOutlined.790c72dd.js";import"./PhDownloadSimple.vue.7506d855.js";import"./utils.2f77b22f.js";import"./LoadingContainer.6e5b5589.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="266551a8-2be7-43be-8fb7-8f8b34b74e3e",t._sentryDebugIdIdentifier="sentry-dbid-266551a8-2be7-43be-8fb7-8f8b34b74e3e")}catch{}})();const x={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,u=new k(a),i=new S(a),y=new V(a),c=new g(d.array(d.string()),"kanban-selected-stages"),o=v("kanban");return(B,l)=>(s(),h("div",x,[r(e(W),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:T(()=>[r(e(b),{key:"kanban",tab:"Kanban View"}),r(e(b),{key:"table",tab:"Table View"}),r(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(c),"stage-run-repository":e(y)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const we=K(A,[["__scopeId","data-v-d2894db4"]]);export{we as default};
//# sourceMappingURL=Threads.e09b4e77.js.map
