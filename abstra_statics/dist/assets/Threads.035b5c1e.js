import{P as k}from"./api.a06339c5.js";import{b as _}from"./workspaceStore.cff6fe67.js";import{d as w,L as g,N as c,e as v,X as h,b as r,w as T,u as e,c as p,R as m,o as s,$ as K}from"./vue-router.a564df4d.js";import{K as R,_ as I,W as P,P as S,b as V}from"./WorkflowView.6251369c.js";import{A as b,T as x}from"./TabPane.a2a7c519.js";import"./Card.7b2f0b81.js";import"./fetch.0da3c9a8.js";import"./metadata.ce6fd67f.js";import"./PhBug.vue.ea9a1791.js";import"./PhCheckCircle.vue.e12d10a1.js";import"./PhKanban.vue.eaf6ec65.js";import"./PhWebhooksLogo.vue.8a4b48bf.js";import"./url.f97c340d.js";import"./colorHelpers.64821175.js";import"./polling.10c521f3.js";import"./asyncComputed.c5ceef85.js";import"./PhQuestion.vue.752a64e2.js";import"./ant-design.cfff562a.js";import"./index.f39148c4.js";import"./index.77749b1c.js";import"./index.96afcb3f.js";import"./CollapsePanel.79303be2.js";import"./index.4b96dce4.js";import"./index.1a12f153.js";import"./Badge.ccce94a4.js";import"./PhArrowCounterClockwise.vue.e44bc87a.js";import"./Workflow.d0706c0b.js";import"./validations.af13fdcb.js";import"./string.3ccd3e02.js";import"./uuid.4e73cf14.js";import"./index.8c8d967e.js";import"./workspaces.03ab9b27.js";import"./record.d117765f.js";import"./index.1b2ac1c7.js";import"./PhArrowDown.vue.18a09061.js";import"./LoadingOutlined.8a5ced8b.js";import"./DeleteOutlined.57ef20a9.js";import"./PhDownloadSimple.vue.5f8530f5.js";import"./utils.facea325.js";import"./LoadingContainer.cfea5e6b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="bf436044-568c-42f9-b9c0-4a2c0dbabe25",t._sentryDebugIdIdentifier="sentry-dbid-bf436044-568c-42f9-b9c0-4a2c0dbabe25")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,d=new k(a),i=new S(a),u=new V(a),y=new g(c.array(c.string()),"kanban-selected-stages"),o=v("kanban");return(B,l)=>(s(),h("div",W,[r(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:T(()=>[r(e(b),{key:"kanban",tab:"Kanban View"}),r(e(b),{key:"table",tab:"Table View"}),r(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(R,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d2894db4"]]);export{ge as default};
//# sourceMappingURL=Threads.035b5c1e.js.map
