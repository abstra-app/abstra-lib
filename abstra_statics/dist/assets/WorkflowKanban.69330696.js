import{K as n,E as p,L as s}from"./repository.bc0d982e.js";import{d as a,b as m,c,u as e}from"./outputWidgets.b1051bf6.js";import{l as f}from"./fetch.329e38e1.js";import"./asyncComputed.024639a6.js";import"./workspaces.f549e346.js";import"./runnerData.7a40fb9f.js";import"./url.e0198aad.js";import"./record.79259cc4.js";import"./pubsub.ebca5b2d.js";import"./scripts.acf048bd.js";import"./envVars.0e93fd7a.js";import"./api.d1bd6dcc.js";import"./index.cf4c23b9.js";import"./metadata.8de18c52.js";import"./PhCheckCircle.vue.07512402.js";import"./PhScroll.vue.93a775a7.js";import"./PhWebhooksLogo.vue.dcd57928.js";import"./ant-design.555dc1dc.js";import"./index.5e2e5960.js";import"./Modal.0ff10da6.js";import"./Text.e1e330eb.js";import"./index.f9829772.js";import"./index.6e00e7fb.js";import"./index.39528f27.js";import"./Paragraph.c55dfd35.js";import"./index.56934e1a.js";import"./Link.e4483d43.js";import"./Title.52ce837c.js";import"./index.026743b6.js";import"./CollapsePanel.4417f72f.js";import"./index.e4e2f790.js";import"./index.736e1072.js";import"./isNumeric.75337b1e.js";import"./Card.b4dc062a.js";import"./index.09dabf56.js";import"./TabPane.c18c03ef.js";import"./hasIn.7a5dc2c1.js";import"./vuedraggable.umd.3f5e4d81.js";import"./index.0c8f8d35.js";import"./Form.764deea9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="f5f0eec2-785c-401e-8b4e-f35e35864f7e",t._sentryDebugIdIdentifier="sentry-dbid-f5f0eec2-785c-401e-8b4e-f35e35864f7e")}catch{}})();class d{constructor(o=f){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const to=a({__name:"WorkflowKanban",setup(t){const o=new p,r=new d,i=new s("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{to as default};
//# sourceMappingURL=WorkflowKanban.69330696.js.map
