import{K as n,L as p}from"./repository.d217efbe.js";import{E as s}from"./repository.0c41f07e.js";import{d as a,b as m,c as d,u as e}from"./outputWidgets.e9677800.js";import{l as c}from"./index.3c41cd1a.js";import"./asyncComputed.37b7af98.js";import"./workspaces.490451ae.js";import"./runnerData.11ae4383.js";import"./url.89c6b244.js";import"./record.767f28b7.js";import"./pubsub.9e36d89a.js";import"./scripts.3b9bc494.js";import"./envVars.5ab5fff0.js";import"./api.7154604a.js";import"./index.cf4c23b9.js";import"./PhScroll.vue.ba9ff361.js";import"./PhWebhooksLogo.vue.52f74867.js";import"./index.42279d35.js";import"./ant-design.dbbf4726.js";import"./index.bbda4abd.js";import"./Modal.df560cc7.js";import"./Text.fd9e90fd.js";import"./Base.64d54b8f.js";import"./Typography.511f4fec.js";import"./index.57a332d5.js";import"./Link.29d21673.js";import"./Paragraph.394702f6.js";import"./Title.c954a24a.js";import"./index.1a0bd015.js";import"./index.dc1b9ab1.js";import"./index.bab2e237.js";import"./CollapsePanel.f1789fc3.js";import"./Timeline.32695c69.js";import"./index.64d9fbff.js";import"./index.8ed925b7.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.5f7515a2.js";import"./Card.32e01a00.js";import"./TabPane.d21194be.js";import"./hasIn.bd3f78ff.js";import"./vuedraggable.umd.6e43c95f.js";import"./index.a61fac50.js";import"./Form.9737d51d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="56e1bf1d-39da-4ed5-984d-c448181ebb1c",t._sentryDebugIdIdentifier="sentry-dbid-56e1bf1d-39da-4ed5-984d-c448181ebb1c")}catch{}})();class f{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const eo=a({__name:"WorkflowKanban",setup(t){const o=new s,r=new f,i=new p("kanban");return(b,u)=>(m(),d(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{eo as default};
//# sourceMappingURL=WorkflowKanban.76da2af9.js.map
