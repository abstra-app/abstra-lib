import{P as k}from"./api.e926cf4c.js";import{b as _}from"./workspaceStore.da620fcc.js";import{d as w,L as g,N as d,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.9b93fdf7.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.961a8455.js";import{A as b,T as x}from"./TabPane.b42de323.js";import"./Card.76bcd2dc.js";import"./fetch.7a928fc6.js";import"./metadata.2bb2fbf6.js";import"./PhBug.vue.2a572dcb.js";import"./PhCheckCircle.vue.12e51541.js";import"./PhKanban.vue.1c04ca3b.js";import"./PhWebhooksLogo.vue.66756588.js";import"./url.e163437e.js";import"./colorHelpers.c8a16bb8.js";import"./polling.86f33942.js";import"./asyncComputed.882312f1.js";import"./PhQuestion.vue.7a351a1a.js";import"./ant-design.1e629c87.js";import"./index.acbc2d42.js";import"./index.332645c7.js";import"./index.48a43468.js";import"./CollapsePanel.02bee1b8.js";import"./index.d1fee608.js";import"./index.8629b423.js";import"./Badge.5f6aa918.js";import"./PhArrowCounterClockwise.vue.a2e93619.js";import"./Workflow.2febe193.js";import"./validations.0e5ca8e3.js";import"./string.be8a5ff2.js";import"./uuid.ae9b4d75.js";import"./index.1e44745c.js";import"./workspaces.87c88c08.js";import"./record.60bb65a4.js";import"./index.26d9d31f.js";import"./PhArrowDown.vue.b94e5c16.js";import"./LoadingOutlined.8914f6ad.js";import"./DeleteOutlined.235d9b31.js";import"./PhDownloadSimple.vue.c96bc61d.js";import"./utils.bc9e6fe2.js";import"./LoadingContainer.64a68173.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="04189e8a-fba0-471f-81c3-f4b67e4e70b9",t._sentryDebugIdIdentifier="sentry-dbid-04189e8a-fba0-471f-81c3-f4b67e4e70b9")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,u=new k(a),i=new S(a),c=new V(a),f=new g(d.array(d.string()),"kanban-selected-stages"),o=v("kanban");return(B,l)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=y=>o.value=y)},{default:T(()=>[r(e(b),{key:"kanban",tab:"Kanban View"}),r(e(b),{key:"table",tab:"Table View"}),r(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(f),"stage-run-repository":e(c)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.a076f293.js.map
