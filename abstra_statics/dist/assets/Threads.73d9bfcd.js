import{a as k}from"./workspaceStore.6d16e36f.js";import{d as _,L as w,N as d,e as g,W as v,b as r,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.6ac97ff6.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.c33415fc.js";import{P as V}from"./api.ceeddcde.js";import{A as l,T as W}from"./TabPane.3cc12138.js";import"./Card.8730c77d.js";import"./url.30955cfd.js";import"./fetch.9580dfa1.js";import"./linters.f500e5dd.js";import"./asyncComputed.c8444c1e.js";import"./scripts.0583aaac.js";import"./record.45cf3e3b.js";import"./metadata.a90857e7.js";import"./PhBug.vue.4a36496c.js";import"./PhCheckCircle.vue.19b28051.js";import"./PhKanban.vue.9f4e533e.js";import"./PhWebhooksLogo.vue.f6e1b75d.js";import"./PhQuestion.vue.8b9ed3e3.js";import"./ant-design.626ced70.js";import"./index.96a8e960.js";import"./index.1fb6167b.js";import"./index.1122a857.js";import"./CollapsePanel.806893ce.js";import"./index.5017b5f0.js";import"./index.d7d8b9ef.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.766ee694.js";import"./model.e0360f1f.js";import"./workspaces.d4bbe485.js";import"./validations.d3effcd2.js";import"./string.41d68f12.js";import"./PhArrowSquareOut.vue.5032dd53.js";import"./index.8b0bfc3b.js";import"./Badge.c09e32a6.js";import"./index.dc91e7e3.js";import"./uuid.6dafb673.js";import"./LoadingOutlined.75bdf2a0.js";import"./DeleteOutlined.8a75741e.js";import"./PhDownloadSimple.vue.a43a78a2.js";import"./utils.d5349119.js";import"./LoadingContainer.af41a4f2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="4db51505-a6df-402a-9a84-b35000272a91",t._sentryDebugIdIdentifier="sentry-dbid-4db51505-a6df-402a-9a84-b35000272a91")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const o=k().authHeaders,u=new V(o),i=new P(o),c=new S(o),y=new w(d.array(d.string()),"kanban-selected-stages"),a=g("kanban");return(B,b)=>(s(),v("div",x,[r(e(W),{activeKey:a.value,"onUpdate:activeKey":b[0]||(b[0]=f=>a.value=f)},{default:h(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(c)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),a.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),a.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ve=T(A,[["__scopeId","data-v-86c0b860"]]);export{ve as default};
//# sourceMappingURL=Threads.73d9bfcd.js.map
