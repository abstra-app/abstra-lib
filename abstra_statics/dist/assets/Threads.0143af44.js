import{u as k}from"./router.5dcadde4.js";import{d as _,L as w,N as b,e as g,o as a,et as v,b as s,w as h,u as e,c as p,ev as m,R as T}from"./vue-router.d16ec2a7.js";import{K,_ as R,W as I,P,b as S}from"./WorkflowView.ed276d57.js";import{P as V}from"./api.f32bc818.js";import{A as c,T as x}from"./TabPane.c018da78.js";import"./Card.742b70cf.js";import"./fetch.fd8afa8e.js";import"./linters.20d3cb23.js";import"./asyncComputed.a31ae9f0.js";import"./scripts.24cf5bd9.js";import"./record.5fd49d9d.js";import"./metadata.ba97b913.js";import"./PhCheckCircle.vue.ea03f859.js";import"./PhKanban.vue.edc6e1d9.js";import"./PhWebhooksLogo.vue.a057e1e6.js";import"./ant-design.d4aa53f1.js";import"./index.bc8d045b.js";import"./index.9eeb844a.js";import"./index.2dc47dab.js";import"./index.1b77724a.js";import"./CollapsePanel.4ed141ed.js";import"./index.b39edbc2.js";import"./index.9872f3fc.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.eb108f18.js";import"./model.8fa4ceec.js";import"./workspaces.4cb31747.js";import"./runnerData.6dcc5b86.js";import"./url.904654a9.js";import"./validations.43713cbe.js";import"./string.edc1cf21.js";import"./PhArrowSquareOut.vue.e7e10662.js";import"./index.5f4582f7.js";import"./Badge.1ba42b24.js";import"./index.f26bca7a.js";import"./uuid.f92493b6.js";import"./LoadingOutlined.704607b2.js";import"./DeleteOutlined.de473f12.js";import"./PhDownloadSimple.vue.3d0868d7.js";import"./utils.a3bb2807.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="9e3abc85-f770-44c0-8491-f78660c89edb",t._sentryDebugIdIdentifier="sentry-dbid-9e3abc85-f770-44c0-8491-f78660c89edb")}catch{}})();const W={class:"threads-view"},A=_({__name:"Threads",setup(t){const r=k().authHeaders,u=new V(r),i=new P(r),d=new S(r),y=new w(b.array(b.string()),"kanban-selected-stages"),o=g("kanban");return(B,l)=>(a(),v("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:h(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(a(),p(K,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(d)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(a(),p(R,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(a(),p(I,{key:2,"kanban-repository":e(i),"workflow-api":e(u)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=T(A,[["__scopeId","data-v-86c0b860"]]);export{ge as default};
//# sourceMappingURL=Threads.0143af44.js.map
