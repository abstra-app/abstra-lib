import{u as k}from"./router.f4213501.js";import{d as w,L as _,N as u,e as g,o as r,eu as v,b as s,w as h,u as e,c as p,ew as m,S as T}from"./vue-router.dce14796.js";import{K,_ as S,W as I,P,b as R}from"./WorkflowView.4c1633b7.js";import{P as V}from"./api.c649d4db.js";import{A as l,T as x}from"./TabPane.c56be0ce.js";import"./Card.ddbdd8d1.js";import"./fetch.1d3ad418.js";import"./workspaces.d9d513bd.js";import"./asyncComputed.a39a60b3.js";import"./runnerData.a98fd0ef.js";import"./url.c9a6c534.js";import"./record.79fba6f7.js";import"./scripts.663ff1dc.js";import"./metadata.dd09de84.js";import"./PhCheckCircle.vue.5b1baaba.js";import"./PhKanban.vue.4c1f5f38.js";import"./PhScroll.vue.d1178130.js";import"./PhWebhooksLogo.vue.8cec44d3.js";import"./ant-design.d4851e27.js";import"./index.38d6e4ab.js";import"./index.00dd2b38.js";import"./index.ab946fda.js";import"./index.5735a24d.js";import"./CollapsePanel.2c8001a4.js";import"./index.2b30a68f.js";import"./index.acb586fa.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.adcef7b0.js";import"./model.cd1dbb79.js";import"./validations.519c63be.js";import"./string.660527fc.js";import"./PhArrowSquareOut.vue.5ef7c2f1.js";import"./index.e03a325f.js";import"./Badge.4693bedb.js";import"./index.b5cdf390.js";import"./uuid.4c9d83b3.js";import"./LoadingOutlined.f346c9c2.js";import"./DeleteOutlined.1969cf9d.js";import"./PhDownloadSimple.vue.6e0eb406.js";import"./utils.d4d6e230.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="7d0dd41e-1fff-4235-92a5-a2ec777b8474",t._sentryDebugIdIdentifier="sentry-dbid-7d0dd41e-1fff-4235-92a5-a2ec777b8474")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=k().authHeaders,c=new V(a),i=new P(a),f=new R(a),b=new _(u.array(u.string()),"kanban-selected-stages"),o=g("kanban");return(B,d)=>(r(),v("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":d[0]||(d[0]=y=>o.value=y)},{default:h(()=>[s(e(l),{key:"kanban",tab:"Kanban View"}),s(e(l),{key:"table",tab:"Table View"}),s(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(b),"stage-run-repository":e(f)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(S,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(c)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-60c67f27"]]);export{ge as default};
//# sourceMappingURL=Threads.209f1994.js.map
