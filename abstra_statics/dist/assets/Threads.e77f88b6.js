import{P as k}from"./api.0ab8faae.js";import{b as _}from"./workspaceStore.d3227097.js";import{d as w,L as g,N as c,e as v,o as r,X as h,b as s,w as T,u as e,c as p,R as m,$ as K}from"./vue-router.5caac341.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.7bb4cab1.js";import{A as l,T as x}from"./TabPane.43e27c05.js";import"./Card.ead17fb7.js";import"./fetch.58beb979.js";import"./metadata.d5c91e37.js";import"./PhBug.vue.6ae14a65.js";import"./PhCheckCircle.vue.5dd1ffdf.js";import"./PhKanban.vue.f45eaae7.js";import"./PhWebhooksLogo.vue.c0ea4abc.js";import"./url.36400742.js";import"./colorHelpers.057f5d78.js";import"./polling.4839c79c.js";import"./asyncComputed.ca1f7f8f.js";import"./PhQuestion.vue.879f9c97.js";import"./ant-design.3646dc8b.js";import"./index.6ae42474.js";import"./index.893742de.js";import"./index.4d278ee6.js";import"./CollapsePanel.78e3ab7d.js";import"./index.7c6c62e4.js";import"./index.29aa94fd.js";import"./Badge.a32da928.js";import"./PhArrowCounterClockwise.vue.d7cadab1.js";import"./Workflow.a74b1da5.js";import"./validations.0fee7ba8.js";import"./string.acc60ba5.js";import"./uuid.19a47d4d.js";import"./index.f798f57f.js";import"./workspaces.7f5b8c37.js";import"./record.64316bc1.js";import"./index.b05dc1cb.js";import"./PhArrowDown.vue.e3c01361.js";import"./LoadingOutlined.36393413.js";import"./DeleteOutlined.43f641da.js";import"./PhDownloadSimple.vue.f5e2f8d4.js";import"./utils.20f2e7af.js";import"./LoadingContainer.07a72f32.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c493ca8d-64a0-40c6-b2fb-10901af69273",t._sentryDebugIdIdentifier="sentry-dbid-c493ca8d-64a0-40c6-b2fb-10901af69273")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,d=new k(a),i=new S(a),u=new V(a),y=new g(c.array(c.string()),"kanban-selected-stages"),o=v("kanban");return(B,b)=>(r(),h("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=f=>o.value=f)},{default:T(()=>[s(e(l),{key:"kanban",tab:"Kanban View"}),s(e(l),{key:"table",tab:"Table View"}),s(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.e77f88b6.js.map
