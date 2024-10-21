import{P as k}from"./api.430c3946.js";import{b as _}from"./workspaceStore.967507d0.js";import{d as w,L as g,N as d,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.4c412b7f.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.e26a7c11.js";import{A as l,T as x}from"./TabPane.54cf68a7.js";import"./Card.db148d5e.js";import"./fetch.439b31fc.js";import"./metadata.672008f0.js";import"./PhBug.vue.68e50b3b.js";import"./PhCheckCircle.vue.89d078e2.js";import"./PhKanban.vue.ff97d597.js";import"./PhWebhooksLogo.vue.b262f18e.js";import"./url.d51ef576.js";import"./colorHelpers.4a965e4e.js";import"./polling.c19c3fae.js";import"./asyncComputed.e4b879ec.js";import"./PhQuestion.vue.f9a633a7.js";import"./ant-design.6f20f997.js";import"./index.c27e778e.js";import"./index.478d6c54.js";import"./index.de60b12d.js";import"./CollapsePanel.9248e63d.js";import"./index.70895a8f.js";import"./index.cb92d8c5.js";import"./Badge.b77c0f1c.js";import"./PhArrowCounterClockwise.vue.26bea43c.js";import"./Workflow.cadfbdb6.js";import"./validations.8dee0cb0.js";import"./string.115b4962.js";import"./uuid.cb48f3b8.js";import"./index.3599db2e.js";import"./workspaces.6d2a8bbf.js";import"./record.16b7b7b9.js";import"./index.5dac9ef5.js";import"./PhArrowDown.vue.530f6363.js";import"./LoadingOutlined.e7401a08.js";import"./DeleteOutlined.21341207.js";import"./PhDownloadSimple.vue.bd8c19b4.js";import"./utils.db612352.js";import"./LoadingContainer.b34c4ea5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="359723a8-615d-4962-a55f-7faab1c32e3b",t._sentryDebugIdIdentifier="sentry-dbid-359723a8-615d-4962-a55f-7faab1c32e3b")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const o=_().authHeaders,u=new k(o),i=new S(o),c=new V(o),y=new g(d.array(d.string()),"kanban-selected-stages"),a=v("kanban");return(B,b)=>(s(),h("div",W,[r(e(x),{activeKey:a.value,"onUpdate:activeKey":b[0]||(b[0]=f=>a.value=f)},{default:T(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(c)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),a.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),a.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.f0f34ddf.js.map
