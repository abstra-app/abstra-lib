import{u as k}from"./router.0ba66a1b.js";import{d as w,L as _,N as u,e as g,o as r,eu as v,b as s,w as h,u as e,c as p,ew as m,S as T}from"./vue-router.02a7190d.js";import{K,_ as S,W as I,P,b as R}from"./WorkflowView.c011ca11.js";import{P as V}from"./api.db2cfdb2.js";import{A as c,T as x}from"./TabPane.4937f66c.js";import"./Card.b52d490e.js";import"./fetch.351bbe7a.js";import"./workspaces.f538d795.js";import"./asyncComputed.6d3ed6b6.js";import"./runnerData.9531c567.js";import"./url.aaadf98d.js";import"./record.2071181a.js";import"./scripts.a2ba722a.js";import"./metadata.b840e513.js";import"./PhCheckCircle.vue.2fa9b5fb.js";import"./PhKanban.vue.8b25672a.js";import"./PhWebhooksLogo.vue.41c10730.js";import"./ant-design.c4422db5.js";import"./index.c1a63495.js";import"./index.2065bc85.js";import"./index.b770a112.js";import"./index.0690e712.js";import"./CollapsePanel.afa94314.js";import"./index.3785fc55.js";import"./index.8e6b4f4a.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.3b208991.js";import"./model.3a46da2d.js";import"./validations.dad574fa.js";import"./string.35169f1b.js";import"./PhArrowSquareOut.vue.ee6f4f9f.js";import"./index.67534161.js";import"./Badge.3d487c56.js";import"./index.4a637232.js";import"./uuid.41d1b0cf.js";import"./LoadingOutlined.6d65e7ec.js";import"./DeleteOutlined.525a3e21.js";import"./PhDownloadSimple.vue.0dd00aed.js";import"./utils.d47f4990.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="2280c60e-3481-4e75-b6aa-405c097ffcad",t._sentryDebugIdIdentifier="sentry-dbid-2280c60e-3481-4e75-b6aa-405c097ffcad")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=k().authHeaders,b=new V(a),i=new P(a),d=new R(a),y=new _(u.array(u.string()),"kanban-selected-stages"),o=g("kanban");return(B,l)=>(r(),v("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:h(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(d)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(S,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const _e=T(A,[["__scopeId","data-v-86c0b860"]]);export{_e as default};
//# sourceMappingURL=Threads.fa7f7ce7.js.map
