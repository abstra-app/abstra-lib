import{u as k}from"./router.a6d07a1d.js";import{d as w,L as _,N as u,e as g,o as a,eu as v,b as s,w as h,u as e,c as p,ew as m,S as T}from"./vue-router.dc17f8e9.js";import{K,_ as S,W as I,P,b as R}from"./WorkflowView.e80aeb02.js";import{P as V}from"./api.529f32ad.js";import{A as c,T as x}from"./TabPane.4968db27.js";import"./Card.080e57de.js";import"./fetch.66187f0e.js";import"./workspaces.ee40d96b.js";import"./asyncComputed.5dbb7d1c.js";import"./runnerData.5603e01b.js";import"./url.dc2f16e6.js";import"./record.958ee9cc.js";import"./scripts.02fbfbda.js";import"./metadata.4543979a.js";import"./PhCheckCircle.vue.d438291c.js";import"./PhKanban.vue.cad529ed.js";import"./PhScroll.vue.2dffcfb5.js";import"./PhWebhooksLogo.vue.c7f6d15c.js";import"./ant-design.b8c172b0.js";import"./index.96f8dcbf.js";import"./index.49985d56.js";import"./index.73041f09.js";import"./index.47f40d09.js";import"./CollapsePanel.76b06d51.js";import"./index.78149dc7.js";import"./index.333ae9ef.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.cbe35d97.js";import"./model.5ccac4e0.js";import"./validations.f0985fe7.js";import"./string.3d8d9f19.js";import"./PhArrowSquareOut.vue.1f643d8c.js";import"./index.86eba91d.js";import"./Badge.1192622b.js";import"./index.6fdf15e2.js";import"./uuid.f9ff3dc3.js";import"./LoadingOutlined.091f5c53.js";import"./DeleteOutlined.10104aca.js";import"./PhDownloadSimple.vue.9a78ff4f.js";import"./utils.46b24b63.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="6797f509-67b3-4e3c-989e-9c951f14dc05",t._sentryDebugIdIdentifier="sentry-dbid-6797f509-67b3-4e3c-989e-9c951f14dc05")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const r=k().authHeaders,b=new V(r),i=new P(r),d=new R(r),f=new _(u.array(u.string()),"kanban-selected-stages"),o=g("kanban");return(B,l)=>(a(),v("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=y=>o.value=y)},{default:h(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(a(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(f),"stage-run-repository":e(d)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(a(),p(S,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(a(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-60c67f27"]]);export{ge as default};
//# sourceMappingURL=Threads.f0f7df97.js.map
