import{u as k}from"./router.05107b8f.js";import{d as _,L as w,N as d,e as g,W as v,b as r,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.616f09b7.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.0f6a0852.js";import{P as V}from"./api.8b7ed70e.js";import{A as b,T as W}from"./TabPane.0d60c42a.js";import"./Card.524ef090.js";import"./fetch.0bde0887.js";import"./linters.5352cb1c.js";import"./asyncComputed.b1092632.js";import"./scripts.253b3b95.js";import"./record.213733dc.js";import"./metadata.ed859d4f.js";import"./PhCheckCircle.vue.3d26a009.js";import"./PhKanban.vue.a8a66a7c.js";import"./PhWebhooksLogo.vue.9dcfe9d0.js";import"./ant-design.b771b17d.js";import"./index.525375fe.js";import"./index.81caeb4a.js";import"./index.e16aaa63.js";import"./index.26f57829.js";import"./CollapsePanel.6af3fe27.js";import"./index.a97b21b7.js";import"./index.18a408b5.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.a0a10a81.js";import"./model.7db20c82.js";import"./workspaces.958b93d9.js";import"./runnerData.ec0fc6c5.js";import"./url.f5f47bef.js";import"./validations.4c21c6c0.js";import"./string.b93902fc.js";import"./PhArrowSquareOut.vue.ec374874.js";import"./index.eca6dc87.js";import"./Badge.45d54202.js";import"./index.77447f33.js";import"./uuid.921af8f7.js";import"./LoadingOutlined.cc94869c.js";import"./DeleteOutlined.3edd9dc6.js";import"./PhDownloadSimple.vue.8f383222.js";import"./utils.7865b03f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="886bf387-c7e4-4a9e-abbd-2d5b37abd851",t._sentryDebugIdIdentifier="sentry-dbid-886bf387-c7e4-4a9e-abbd-2d5b37abd851")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const a=k().authHeaders,c=new V(a),i=new P(a),u=new S(a),y=new w(d.array(d.string()),"kanban-selected-stages"),o=g("kanban");return(B,l)=>(s(),v("div",x,[r(e(W),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:h(()=>[r(e(b),{key:"kanban",tab:"Kanban View"}),r(e(b),{key:"table",tab:"Table View"}),r(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(c)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-86c0b860"]]);export{ge as default};
//# sourceMappingURL=Threads.a592fa5d.js.map
