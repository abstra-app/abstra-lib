import{K as a,E as n,L as p}from"./repository.16d398ee.js";import{d as s,b as m,c,u as e}from"./outputWidgets.1b294f5f.js";import{l as d}from"./fetch.d300a950.js";import"./asyncComputed.a34a8d45.js";import"./workspaces.d302eaf6.js";import"./runnerData.df09228d.js";import"./url.090af018.js";import"./record.4fc1748f.js";import"./pubsub.20cc0948.js";import"./scripts.f01c752c.js";import"./envVars.279f6d9f.js";import"./api.e01c2c15.js";import"./index.cf4c23b9.js";import"./metadata.2ce5e701.js";import"./PhCheckCircle.vue.ced926ff.js";import"./PhScroll.vue.052f1497.js";import"./PhWebhooksLogo.vue.3750860e.js";import"./ant-design.4374084a.js";import"./index.68a6fadb.js";import"./Modal.a4e6d8e0.js";import"./Text.c9fbd748.js";import"./index.3227182d.js";import"./index.e0804fb0.js";import"./index.8334854b.js";import"./Paragraph.3e0e130e.js";import"./index.b6203cb7.js";import"./Link.496a8851.js";import"./Title.4066d750.js";import"./index.32d4eb3d.js";import"./CollapsePanel.f5e9243e.js";import"./index.f3022e06.js";import"./index.e1858b54.js";import"./isNumeric.75337b1e.js";import"./Card.9b324419.js";import"./index.34107aad.js";import"./TabPane.ecb49f81.js";import"./hasIn.f4746841.js";import"./vuedraggable.umd.143f339e.js";import"./index.bc9e12bb.js";import"./Form.123996ac.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="aacea71f-bda8-448e-93df-b74fb7c5aabc",t._sentryDebugIdIdentifier="sentry-dbid-aacea71f-bda8-448e-93df-b74fb7c5aabc")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const to=s({__name:"WorkflowKanban",setup(t){const o=new n,r=new f,i=new p("kanban");return(b,u)=>(m(),c(a,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{to as default};
//# sourceMappingURL=WorkflowKanban.b91a641e.js.map
