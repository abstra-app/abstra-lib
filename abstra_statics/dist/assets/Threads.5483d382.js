import{u as k}from"./router.f5763115.js";import{d as w,L as _,N as u,e as g,o as r,eu as v,b as s,w as h,u as e,c as p,ew as m,S as T}from"./vue-router.8760ac40.js";import{K,_ as S,W as I,P,b as R}from"./WorkflowView.c3d7fc20.js";import{P as V}from"./api.c76de498.js";import{A as l,T as x}from"./TabPane.93d78eb2.js";import"./Card.0dc16fc1.js";import"./fetch.17888d6e.js";import"./workspaces.c3abe834.js";import"./asyncComputed.1b7d88a2.js";import"./runnerData.4c5a1274.js";import"./url.3e79afda.js";import"./record.98279886.js";import"./scripts.b59b76a9.js";import"./metadata.5a052c0c.js";import"./PhCheckCircle.vue.ab11551a.js";import"./PhKanban.vue.7be33c28.js";import"./PhWebhooksLogo.vue.39b94421.js";import"./ant-design.8505a133.js";import"./index.bb401560.js";import"./index.eadd76a5.js";import"./index.87ac38b6.js";import"./index.8eeb0ed0.js";import"./CollapsePanel.70115c57.js";import"./index.6e4cac6b.js";import"./index.b1eb9fb2.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.519d0f30.js";import"./model.8870bf26.js";import"./validations.a3b9d044.js";import"./string.42023565.js";import"./PhArrowSquareOut.vue.f71e328d.js";import"./index.5b30ef03.js";import"./Badge.6d2c19fa.js";import"./index.62897914.js";import"./uuid.3c784955.js";import"./LoadingOutlined.05d8837a.js";import"./DeleteOutlined.43baca32.js";import"./PhDownloadSimple.vue.0ffb18dc.js";import"./utils.0b81f4b2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c7a5b1a2-597f-4e9d-9f31-e858c136777e",t._sentryDebugIdIdentifier="sentry-dbid-c7a5b1a2-597f-4e9d-9f31-e858c136777e")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=k().authHeaders,b=new V(a),i=new P(a),d=new R(a),y=new _(u.array(u.string()),"kanban-selected-stages"),o=g("kanban");return(B,c)=>(r(),v("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":c[0]||(c[0]=f=>o.value=f)},{default:h(()=>[s(e(l),{key:"kanban",tab:"Kanban View"}),s(e(l),{key:"table",tab:"Table View"}),s(e(l),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(d)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(S,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const _e=T(A,[["__scopeId","data-v-86c0b860"]]);export{_e as default};
//# sourceMappingURL=Threads.5483d382.js.map
