import{u as k}from"./router.3aacafac.js";import{d as _,L as w,N as c,e as g,W as v,b as r,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.d27f3fb8.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.8ae4c1b5.js";import{P as V}from"./api.498e8498.js";import{A as l,T as W}from"./TabPane.4b8ef734.js";import"./Card.75ec23ff.js";import"./fetch.def368fa.js";import"./linters.19436ff9.js";import"./asyncComputed.ca838255.js";import"./scripts.98acf0b9.js";import"./record.776b7704.js";import"./metadata.f12d99fc.js";import"./PhCheckCircle.vue.6821087a.js";import"./PhKanban.vue.9982e036.js";import"./PhWebhooksLogo.vue.f997f2e2.js";import"./ant-design.e0176170.js";import"./index.fd312307.js";import"./index.6fff1653.js";import"./index.dd13642a.js";import"./index.282f001e.js";import"./CollapsePanel.a1e349b5.js";import"./index.2208862c.js";import"./index.11659f00.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.d20bfc51.js";import"./model.d0c84660.js";import"./workspaces.3c8a3a2b.js";import"./runnerData.6e6e849e.js";import"./url.56b27af1.js";import"./validations.aad03f57.js";import"./string.4f5c3573.js";import"./PhArrowSquareOut.vue.ecb51b55.js";import"./index.ccbc5808.js";import"./Badge.a80fbe65.js";import"./index.f543bb6e.js";import"./uuid.6b56f17b.js";import"./LoadingOutlined.21c328cc.js";import"./DeleteOutlined.7ea5d794.js";import"./PhDownloadSimple.vue.6f48fa8c.js";import"./utils.e8ef65ea.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="669fda4d-f2c9-4958-9b03-180a7382932b",t._sentryDebugIdIdentifier="sentry-dbid-669fda4d-f2c9-4958-9b03-180a7382932b")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const a=k().authHeaders,d=new V(a),i=new P(a),u=new S(a),y=new w(c.array(c.string()),"kanban-selected-stages"),o=g("kanban");return(B,b)=>(s(),v("div",x,[r(e(W),{activeKey:o.value,"onUpdate:activeKey":b[0]||(b[0]=f=>o.value=f)},{default:h(()=>[r(e(l),{key:"kanban",tab:"Kanban View"}),r(e(l),{key:"table",tab:"Table View"}),r(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-86c0b860"]]);export{ge as default};
//# sourceMappingURL=Threads.47e19f3b.js.map
