import{K as n,E as a,L as p}from"./repository.e7594cc8.js";import{d as s,b as m,c,u as e}from"./outputWidgets.37f6afb9.js";import{l as d}from"./index.a11c83ad.js";import"./asyncComputed.1b0ebb2f.js";import"./api.e3099b68.js";import"./index.cf4c23b9.js";import"./icons.49183eff.js";import"./index.8206ccd9.js";import"./ant-design.8d11ff0f.js";import"./index.713cffb3.js";import"./Modal.d5b5554a.js";import"./Text.9798d4a1.js";import"./Base.067483d1.js";import"./Typography.1a6183ac.js";import"./index.7808130f.js";import"./index.e306c28d.js";import"./Paragraph.c5c6929c.js";import"./index.889622fb.js";import"./Link.1fba9881.js";import"./Title.c307da82.js";import"./index.c029227f.js";import"./CollapsePanel.cda9152d.js";import"./Form.e63f4928.js";import"./hasIn.1fb16ad3.js";import"./Timeline.5976d2da.js";import"./index.ffc2c9b0.js";import"./index.4b40be36.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.324bbb41.js";import"./workspaces.adeef84c.js";import"./runnerData.e309a389.js";import"./url.47579a16.js";import"./record.adcae6a4.js";import"./pubsub.6ac68cf0.js";import"./scripts.8b0c1a1c.js";import"./envVars.025e508c.js";import"./ExpandOutlined.169d728e.js";import"./Card.713207b1.js";import"./TabPane.1c30bc61.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="0cbf801d-9ea9-48d5-a29c-467546aac2d4",t._sentryDebugIdIdentifier="sentry-dbid-0cbf801d-9ea9-48d5-a29c-467546aac2d4")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const oo=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new f,i=new p("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{oo as default};
//# sourceMappingURL=WorkflowKanban.9186cbfc.js.map
