import{u as k}from"./router.d6fc84e4.js";import{d as _,L as w,N as l,e as g,W as v,b as a,w as h,u as e,c as p,R as m,o as s,$ as T}from"./vue-router.364debaa.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.7ef7a88c.js";import{P as V}from"./api.9d1a0807.js";import{A as b,T as W}from"./TabPane.baac898c.js";import"./Card.f4848eea.js";import"./fetch.9ac1de21.js";import"./linters.4ff40abf.js";import"./asyncComputed.f065b2cf.js";import"./scripts.83672828.js";import"./record.b865c14c.js";import"./metadata.2128915f.js";import"./PhCheckCircle.vue.3182cd15.js";import"./PhKanban.vue.41261936.js";import"./PhWebhooksLogo.vue.ca0a3697.js";import"./ant-design.fbc95d0a.js";import"./index.248d08ba.js";import"./index.157b9ada.js";import"./index.6a364b7a.js";import"./index.8fd0ee9e.js";import"./CollapsePanel.1f99ea29.js";import"./index.c9a8b706.js";import"./index.1888b30c.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.4067711b.js";import"./model.b26ccd10.js";import"./workspaces.4f684298.js";import"./runnerData.fd75af8a.js";import"./url.375724b9.js";import"./validations.fd4a015d.js";import"./string.bdbbe29f.js";import"./PhArrowSquareOut.vue.d2cf7b57.js";import"./index.f46d7512.js";import"./Badge.3e9d67bf.js";import"./index.32e8865e.js";import"./uuid.50ca3d88.js";import"./LoadingOutlined.72c3695a.js";import"./DeleteOutlined.4565a8da.js";import"./PhDownloadSimple.vue.226dfe02.js";import"./utils.67d85305.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="de9f30b8-478f-4cb4-8b72-d32f0cba16ce",t._sentryDebugIdIdentifier="sentry-dbid-de9f30b8-478f-4cb4-8b72-d32f0cba16ce")}catch{}})();const x={class:"threads-view"},A=_({__name:"Threads",setup(t){const r=k().authHeaders,d=new V(r),i=new P(r),u=new S(r),f=new w(l.array(l.string()),"kanban-selected-stages"),o=g("kanban");return(B,c)=>(s(),v("div",x,[a(e(W),{activeKey:o.value,"onUpdate:activeKey":c[0]||(c[0]=y=>o.value=y)},{default:h(()=>[a(e(b),{key:"kanban",tab:"Kanban View"}),a(e(b),{key:"table",tab:"Table View"}),a(e(b),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(s(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(f),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(s(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(s(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-86c0b860"]]);export{ge as default};
//# sourceMappingURL=Threads.d5f495db.js.map
