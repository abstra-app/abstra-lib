import{u as k}from"./router.954fcdcf.js";import{d as _,L as w,N as l,e as g,W as v,b as a,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.3a7b1e56.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.ab56b802.js";import{P as V}from"./api.e533d805.js";import{A as c,T as W}from"./TabPane.d9b4812f.js";import"./Card.28a6e220.js";import"./fetch.2ff2d042.js";import"./linters.e5ce4c1c.js";import"./asyncComputed.cf136b3a.js";import"./scripts.b892bc42.js";import"./record.90cbed17.js";import"./metadata.bb33b26c.js";import"./PhCheckCircle.vue.0e4a1595.js";import"./PhKanban.vue.5e3c84ca.js";import"./PhWebhooksLogo.vue.66d434cb.js";import"./ant-design.19067271.js";import"./index.2cf1697b.js";import"./index.0179b0e8.js";import"./index.36f35e94.js";import"./index.2e48632f.js";import"./CollapsePanel.0c89bc04.js";import"./index.0afae904.js";import"./index.030c933d.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.6859d173.js";import"./model.97b13eb6.js";import"./workspaces.90bbf346.js";import"./runnerData.ce5140b6.js";import"./url.8660d852.js";import"./validations.6983f5ed.js";import"./string.5e35d4e9.js";import"./PhArrowSquareOut.vue.f58e4059.js";import"./index.e7442790.js";import"./Badge.9582fdb2.js";import"./index.f21ad6ff.js";import"./uuid.b0c04508.js";import"./LoadingOutlined.9e159bf0.js";import"./DeleteOutlined.d673f783.js";import"./PhDownloadSimple.vue.8764d232.js";import"./utils.54745477.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="41e02d8e-586c-4b60-84cd-dfc95d9d2ac2",t._sentryDebugIdIdentifier="sentry-dbid-41e02d8e-586c-4b60-84cd-dfc95d9d2ac2")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const r=k().authHeaders,b=new V(r),i=new P(r),u=new S(r),y=new w(l.array(l.string()),"kanban-selected-stages"),o=g("kanban");return(B,d)=>(s(),v("div",x,[a(e(W),{activeKey:o.value,"onUpdate:activeKey":d[0]||(d[0]=f=>o.value=f)},{default:h(()=>[a(e(c),{key:"kanban",tab:"Kanban View"}),a(e(c),{key:"table",tab:"Table View"}),a(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-86c0b860"]]);export{ge as default};
//# sourceMappingURL=Threads.5b60a2c0.js.map
