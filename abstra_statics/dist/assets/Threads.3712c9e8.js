import{u as k}from"./router.28540635.js";import{d as w,L as _,N as c,e as g,o as a,eu as v,b as s,w as h,u as e,c as p,ew as m,S as T}from"./vue-router.a95bee0d.js";import{K,_ as S,W as I,P,b as R}from"./WorkflowView.445c6968.js";import{P as V}from"./api.f64b6e26.js";import{A as l,T as x}from"./TabPane.f651256d.js";import"./Card.d0af75e8.js";import"./fetch.7e72d503.js";import"./workspaces.e87c0407.js";import"./asyncComputed.3ee69edf.js";import"./runnerData.297735b8.js";import"./url.0cfc4a80.js";import"./record.61c6edeb.js";import"./scripts.c348dfa8.js";import"./metadata.a55df01f.js";import"./PhCheckCircle.vue.bee32332.js";import"./PhKanban.vue.af266296.js";import"./PhScroll.vue.6787e020.js";import"./PhWebhooksLogo.vue.08baeaf3.js";import"./ant-design.2f60d005.js";import"./index.a3ab1b91.js";import"./index.be7a9f60.js";import"./index.b64038e4.js";import"./index.83907768.js";import"./CollapsePanel.c82671fd.js";import"./index.204de143.js";import"./index.23353db3.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.99badd0d.js";import"./model.f096080e.js";import"./validations.b20ea23e.js";import"./string.2fcb20f3.js";import"./PhArrowSquareOut.vue.e68ee9ef.js";import"./index.2fa67fbd.js";import"./Badge.8538dee3.js";import"./index.7d9c655c.js";import"./uuid.12a0eace.js";import"./LoadingOutlined.977cb87d.js";import"./DeleteOutlined.cace91e8.js";import"./PhDownloadSimple.vue.d77e1f9f.js";import"./utils.04ea0dfb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="6b947bb4-d521-457d-8e78-8c4f20a86dc1",t._sentryDebugIdIdentifier="sentry-dbid-6b947bb4-d521-457d-8e78-8c4f20a86dc1")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const r=k().authHeaders,d=new V(r),i=new P(r),u=new R(r),y=new _(c.array(c.string()),"kanban-selected-stages"),o=g("kanban");return(B,b)=>(a(),v("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=f=>o.value=f)},{default:h(()=>[s(e(l),{key:"kanban",tab:"Kanban View"}),s(e(l),{key:"table",tab:"Table View"}),s(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(a(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(a(),p(S,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(a(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-60c67f27"]]);export{ge as default};
//# sourceMappingURL=Threads.3712c9e8.js.map
