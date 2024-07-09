import{C as y}from"./ContentLayout.6903d3de.js";import{d as w,L as c,N as b,e as g,o as a,c as n,w as l,b as i,u as o,ew as s}from"./vue-router.a95bee0d.js";import{K as _,_ as v,W as K,E,a as R}from"./WorkflowView.445c6968.js";import{E as T}from"./api.f64b6e26.js";import{A as p,T as V}from"./TabPane.f651256d.js";import"./fetch.7e72d503.js";import"./workspaces.e87c0407.js";import"./asyncComputed.3ee69edf.js";import"./runnerData.297735b8.js";import"./url.0cfc4a80.js";import"./record.61c6edeb.js";import"./scripts.c348dfa8.js";import"./metadata.a55df01f.js";import"./PhCheckCircle.vue.bee32332.js";import"./PhKanban.vue.af266296.js";import"./PhScroll.vue.6787e020.js";import"./PhWebhooksLogo.vue.08baeaf3.js";import"./ant-design.2f60d005.js";import"./index.a3ab1b91.js";import"./index.be7a9f60.js";import"./index.b64038e4.js";import"./index.83907768.js";import"./CollapsePanel.c82671fd.js";import"./index.204de143.js";import"./index.23353db3.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.99badd0d.js";import"./model.f096080e.js";import"./validations.b20ea23e.js";import"./string.2fcb20f3.js";import"./PhArrowSquareOut.vue.e68ee9ef.js";import"./index.2fa67fbd.js";import"./Badge.8538dee3.js";import"./index.7d9c655c.js";import"./Card.d0af75e8.js";import"./uuid.12a0eace.js";import"./LoadingOutlined.977cb87d.js";import"./DeleteOutlined.cace91e8.js";import"./PhDownloadSimple.vue.d77e1f9f.js";import"./utils.04ea0dfb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="946b588b-fdef-4f04-ad81-90a6872e3f2e",e._sentryDebugIdIdentifier="sentry-dbid-946b588b-fdef-4f04-ad81-90a6872e3f2e")}catch{}})();const ko=w({__name:"WorkflowThreads",setup(e){const t=new E,m=new R,d=new c(b.array(b.string()),"kanban-selected-stages"),u=new T,r=g("kanban");return(W,f)=>(a(),n(y,{"full-width":""},{default:l(()=>[i(o(V),{activeKey:r.value,"onUpdate:activeKey":f[0]||(f[0]=k=>r.value=k)},{default:l(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(a(),n(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(a(),n(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(a(),n(K,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.fdecd482.js.map
