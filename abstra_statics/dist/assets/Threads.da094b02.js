import{u as f}from"./router.0b3264be.js";import{d as _,L as w,N as u,e as g,o as r,V as v,b as s,w as h,u as e,c as p,R as m,Y as T}from"./vue-router.daf730b9.js";import{K,_ as R,W as V,P as I,b as P}from"./WorkflowView.72690a8f.js";import{P as S}from"./api.174afdcf.js";import{A as c,T as x}from"./TabPane.0de314e4.js";import"./Card.42c8e882.js";import"./fetch.1d40f5e8.js";import"./linters.34f259c3.js";import"./asyncComputed.dbecd2e7.js";import"./scripts.d7e9f69a.js";import"./record.4629e88e.js";import"./metadata.beef8845.js";import"./PhCheckCircle.vue.101024fa.js";import"./PhKanban.vue.95a16280.js";import"./PhWebhooksLogo.vue.28e6556e.js";import"./ant-design.009abe10.js";import"./index.38f6259e.js";import"./index.a8fe7320.js";import"./index.c9cc9133.js";import"./index.a4f34116.js";import"./CollapsePanel.3771f9f6.js";import"./index.201af748.js";import"./index.ef0a61e9.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.4a7a2216.js";import"./model.58608cbc.js";import"./workspaces.ffca8a7b.js";import"./runnerData.1a8f5499.js";import"./url.983ca4b1.js";import"./validations.1cc4c221.js";import"./string.9547d5e6.js";import"./PhArrowSquareOut.vue.a2aae1aa.js";import"./index.d4d976d5.js";import"./Badge.c9941f03.js";import"./index.49d59b3b.js";import"./uuid.f62a6153.js";import"./LoadingOutlined.084abe84.js";import"./DeleteOutlined.19c74345.js";import"./PhDownloadSimple.vue.4f5d67cc.js";import"./utils.026768bd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="e54ce9a4-7a08-47ca-a009-056446c61699",t._sentryDebugIdIdentifier="sentry-dbid-e54ce9a4-7a08-47ca-a009-056446c61699")}catch{}})();const W={class:"threads-view"},A=_({__name:"Threads",setup(t){const o=f().authHeaders,b=new S(o),i=new I(o),y=new P(o),d=new w(u.array(u.string()),"kanban-selected-stages"),a=g("kanban");return(B,l)=>(r(),v("div",W,[s(e(x),{activeKey:a.value,"onUpdate:activeKey":l[0]||(l[0]=k=>a.value=k)},{default:h(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(r(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(d),"stage-run-repository":e(y)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),a.value==="table"?(r(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),a.value==="workflow"?(r(),p(V,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-86c0b860"]]);export{ge as default};
//# sourceMappingURL=Threads.da094b02.js.map
