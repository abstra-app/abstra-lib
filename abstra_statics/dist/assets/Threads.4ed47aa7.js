import{u as k}from"./router.60bb83d4.js";import{d as w,L as _,N as u,e as g,o as r,eu as v,b as s,w as h,u as e,c as p,ew as m,S as T}from"./vue-router.41854a3c.js";import{K,_ as S,W as I,P,b as R}from"./WorkflowView.e5166889.js";import{P as V}from"./api.a1968f2c.js";import{A as c,T as x}from"./TabPane.839177e7.js";import"./Card.88ad10bb.js";import"./fetch.037d63a3.js";import"./workspaces.cada95af.js";import"./asyncComputed.9af3a3fa.js";import"./runnerData.2df54c6c.js";import"./url.136adcd3.js";import"./record.4cc58db0.js";import"./scripts.8abd097c.js";import"./metadata.6a160a40.js";import"./PhCheckCircle.vue.285c7a20.js";import"./PhKanban.vue.d8e51d79.js";import"./PhScroll.vue.a283fc77.js";import"./PhWebhooksLogo.vue.e1c6aaca.js";import"./ant-design.b88fc035.js";import"./index.73d3ff24.js";import"./index.f676c6ce.js";import"./index.a63fccf0.js";import"./index.099a697b.js";import"./CollapsePanel.b75cd20d.js";import"./index.f550cb06.js";import"./index.4dc75c8d.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.62f1e8ae.js";import"./model.6592b02b.js";import"./validations.51182328.js";import"./string.a3f8150b.js";import"./PhArrowSquareOut.vue.eb6c48d9.js";import"./index.28df7e80.js";import"./Badge.0fbe69dc.js";import"./index.db772e26.js";import"./uuid.a69e9914.js";import"./LoadingOutlined.03532033.js";import"./DeleteOutlined.10fa49d5.js";import"./PhDownloadSimple.vue.303a31ba.js";import"./utils.fdaa8bcf.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="0831cafe-5f08-4a9a-b253-5e1a1c30c661",t._sentryDebugIdIdentifier="sentry-dbid-0831cafe-5f08-4a9a-b253-5e1a1c30c661")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const o=k().authHeaders,b=new V(o),i=new P(o),f=new R(o),y=new _(u.array(u.string()),"kanban-selected-stages"),a=g("kanban");return(B,l)=>(r(),v("div",W,[s(e(x),{activeKey:a.value,"onUpdate:activeKey":l[0]||(l[0]=d=>a.value=d)},{default:h(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(r(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(f)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),a.value==="table"?(r(),p(S,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),a.value==="workflow"?(r(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-60c67f27"]]);export{ge as default};
//# sourceMappingURL=Threads.4ed47aa7.js.map
