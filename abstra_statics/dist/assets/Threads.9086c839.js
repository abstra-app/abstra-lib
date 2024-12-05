import{P as k}from"./api.32608525.js";import{b as _}from"./workspaceStore.be088758.js";import{d as w,N as g,O as d,e as v,o as r,Y as h,b as s,w as T,u as e,c as p,S as m,a0 as K}from"./index.b7b4bda7.js";import{K as S,_ as I,W as P,P as R,b as V}from"./WorkflowView.5583ee37.js";import{A as b,T as x}from"./TabPane.5704c3a4.js";import"./Card.dc945fe7.js";import"./fetch.0c0bfc81.js";import"./metadata.f73a9e6d.js";import"./PhBug.vue.118d6a4b.js";import"./PhCheckCircle.vue.9e92f7a6.js";import"./PhKanban.vue.7adc1b7a.js";import"./PhWebhooksLogo.vue.9fa90918.js";import"./url.b5db0ec0.js";import"./colorHelpers.4deb51e0.js";import"./polling.6fdb889c.js";import"./asyncComputed.03aca0e0.js";import"./PhQuestion.vue.e7767674.js";import"./ant-design.ac080b8a.js";import"./index.2876f94f.js";import"./index.1175d125.js";import"./index.cc331dad.js";import"./CollapsePanel.3164fa4e.js";import"./index.0abd7f87.js";import"./index.d09c6f04.js";import"./Badge.aaf7165e.js";import"./PhArrowCounterClockwise.vue.1e2410e8.js";import"./Workflow.35b663bd.js";import"./validations.1b9832d9.js";import"./string.197ece6b.js";import"./uuid.03b90e20.js";import"./index.9347e471.js";import"./workspaces.a607659d.js";import"./record.c4002da6.js";import"./index.3b650aac.js";import"./PhArrowDown.vue.227d46aa.js";import"./LoadingOutlined.efc83666.js";import"./DeleteOutlined.5cd95db0.js";import"./PhDownloadSimple.vue.a41e9d72.js";import"./utils.90a8fe9e.js";import"./LoadingContainer.11eb326e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="be24c2bc-d5db-4f02-a1f0-3853b1633d32",t._sentryDebugIdIdentifier="sentry-dbid-be24c2bc-d5db-4f02-a1f0-3853b1633d32")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,l=new k(a),i=new R(a),u=new V(a),y=new g(d.array(d.string()),"kanban-selected-stages"),o=v("kanban");return(B,c)=>(r(),h("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":c[0]||(c[0]=f=>o.value=f)},{default:T(()=>[s(e(b),{key:"kanban",tab:"Kanban View"}),s(e(b),{key:"table",tab:"Table View"}),s(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(S,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(l)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d6c18c3e"]]);export{ge as default};
//# sourceMappingURL=Threads.9086c839.js.map
