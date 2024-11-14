import{P as k}from"./api.e2091ab7.js";import{b as _}from"./workspaceStore.d7393ddd.js";import{d as w,L as g,N as c,e as v,o as r,X as h,b as s,w as T,u as e,c as p,R as m,$ as K}from"./vue-router.9fdef1c2.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.a4d9cecb.js";import{A as l,T as x}from"./TabPane.c75b1736.js";import"./Card.2e3b751b.js";import"./fetch.37e528cd.js";import"./metadata.7a99eefc.js";import"./PhBug.vue.6c87d690.js";import"./PhCheckCircle.vue.af0e1704.js";import"./PhKanban.vue.2ddab4c5.js";import"./PhWebhooksLogo.vue.d6d363ca.js";import"./url.07fafc3a.js";import"./colorHelpers.ceab0a75.js";import"./polling.42bbddc1.js";import"./asyncComputed.b83fe47e.js";import"./PhQuestion.vue.b4a6c4a3.js";import"./ant-design.57bf02d4.js";import"./index.dc55511c.js";import"./index.c5b0cb5b.js";import"./index.9b0e6eb7.js";import"./CollapsePanel.441f94ae.js";import"./index.3697d291.js";import"./index.3959e4c5.js";import"./Badge.4a06ddb5.js";import"./PhArrowCounterClockwise.vue.d5c399db.js";import"./Workflow.7ba126d6.js";import"./validations.b5a11976.js";import"./string.aab27b65.js";import"./uuid.9da3532f.js";import"./index.12dad819.js";import"./workspaces.38c92808.js";import"./record.5ebff19c.js";import"./index.ed3a7a98.js";import"./PhArrowDown.vue.5a4a9984.js";import"./LoadingOutlined.1b0aff14.js";import"./DeleteOutlined.1a862633.js";import"./PhDownloadSimple.vue.91626f07.js";import"./utils.09f24d70.js";import"./LoadingContainer.13e81899.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="9e0132bf-38ed-413b-9035-cda7be5ff8a9",t._sentryDebugIdIdentifier="sentry-dbid-9e0132bf-38ed-413b-9035-cda7be5ff8a9")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,d=new k(a),i=new S(a),u=new V(a),f=new g(c.array(c.string()),"kanban-selected-stages"),o=v("kanban");return(B,b)=>(r(),h("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=y=>o.value=y)},{default:T(()=>[s(e(l),{key:"kanban",tab:"Kanban View"}),s(e(l),{key:"table",tab:"Table View"}),s(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(f),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d6c18c3e"]]);export{ge as default};
//# sourceMappingURL=Threads.379c43ce.js.map
