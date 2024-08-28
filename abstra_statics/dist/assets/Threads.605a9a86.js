import{P as k}from"./api.00cf3ba6.js";import{b as _}from"./workspaceStore.39ceee68.js";import{d as w,L as g,N as l,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.b482f949.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.128dd857.js";import{A as d,T as x}from"./TabPane.9409cc0e.js";import"./Card.30cc0ceb.js";import"./fetch.01542bd5.js";import"./metadata.72531458.js";import"./PhBug.vue.c4bccf61.js";import"./PhCheckCircle.vue.72f3173c.js";import"./PhKanban.vue.8ec51a45.js";import"./PhWebhooksLogo.vue.b7a7d441.js";import"./url.2d86762c.js";import"./colorHelpers.add1f894.js";import"./polling.b4d778c2.js";import"./asyncComputed.7dbcb274.js";import"./PhQuestion.vue.76067321.js";import"./ant-design.7ab1f3bf.js";import"./index.33ee365f.js";import"./index.197a0c09.js";import"./index.f6f73f77.js";import"./CollapsePanel.b7a809f0.js";import"./index.4d905e2b.js";import"./index.83d4c667.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.a8e4408c.js";import"./Workflow.8313b7e3.js";import"./PhArrowClockwise.vue.3790cf84.js";import"./validations.b3da5717.js";import"./string.f67318e0.js";import"./uuid.8b38ab56.js";import"./index.8ebcae80.js";import"./workspaces.0b2b4d4c.js";import"./record.ca91f9f6.js";import"./index.f82e07db.js";import"./Badge.b151e25a.js";import"./LoadingOutlined.2de1d724.js";import"./DeleteOutlined.59dc1dcd.js";import"./PhDownloadSimple.vue.d763b9be.js";import"./utils.1a96a655.js";import"./LoadingContainer.201f65e9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="2c18254d-d36f-4fbc-b40a-ca06f620d43b",t._sentryDebugIdIdentifier="sentry-dbid-2c18254d-d36f-4fbc-b40a-ca06f620d43b")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,c=new k(a),i=new S(a),u=new V(a),f=new g(l.array(l.string()),"kanban-selected-stages"),o=v("kanban");return(B,b)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=y=>o.value=y)},{default:T(()=>[r(e(d),{key:"kanban",tab:"Kanban View"}),r(e(d),{key:"table",tab:"Table View"}),r(e(d),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(f),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(c)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ve=K(A,[["__scopeId","data-v-d2894db4"]]);export{ve as default};
//# sourceMappingURL=Threads.605a9a86.js.map
