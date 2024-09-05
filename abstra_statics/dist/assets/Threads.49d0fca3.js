import{P as k}from"./api.625abc9e.js";import{b as _}from"./workspaceStore.fc951f46.js";import{d as w,L as g,N as b,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.3ce6ce00.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.a63536bf.js";import{A as d,T as x}from"./TabPane.cf24b696.js";import"./Card.38de5a5e.js";import"./fetch.213f979a.js";import"./metadata.2dc853b9.js";import"./PhBug.vue.9d1e1577.js";import"./PhCheckCircle.vue.2d5e69af.js";import"./PhKanban.vue.fa2f0ac7.js";import"./PhWebhooksLogo.vue.1a40ce6f.js";import"./url.359c2d8e.js";import"./colorHelpers.1697ee87.js";import"./polling.a76c1902.js";import"./asyncComputed.341490ec.js";import"./PhQuestion.vue.c385fca3.js";import"./ant-design.30b9831f.js";import"./index.bce6bf08.js";import"./index.1a121e6c.js";import"./index.22bfc224.js";import"./CollapsePanel.d0ff07fb.js";import"./index.38432fa1.js";import"./index.b324bd74.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.f3db78b7.js";import"./Workflow.0725f646.js";import"./PhArrowClockwise.vue.7cda3983.js";import"./validations.387feb37.js";import"./string.b705bc56.js";import"./uuid.6d5a707a.js";import"./index.ff653376.js";import"./workspaces.f1624975.js";import"./record.e208104d.js";import"./index.3b9715db.js";import"./Badge.65590c8d.js";import"./LoadingOutlined.6340afaf.js";import"./DeleteOutlined.7b57252d.js";import"./PhDownloadSimple.vue.4d31aa69.js";import"./utils.a33709c3.js";import"./LoadingContainer.fadd322b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="174b9d1d-a2f6-42a3-8d58-2fb32ed26fe9",t._sentryDebugIdIdentifier="sentry-dbid-174b9d1d-a2f6-42a3-8d58-2fb32ed26fe9")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,u=new k(a),i=new S(a),f=new V(a),y=new g(b.array(b.string()),"kanban-selected-stages"),o=v("kanban");return(B,l)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=c=>o.value=c)},{default:T(()=>[r(e(d),{key:"kanban",tab:"Kanban View"}),r(e(d),{key:"table",tab:"Table View"}),r(e(d),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(f)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ve=K(A,[["__scopeId","data-v-d2894db4"]]);export{ve as default};
//# sourceMappingURL=Threads.49d0fca3.js.map
