import{K as n,L as p}from"./repository.04406e5a.js";import{E as s}from"./repository.0b8a5cce.js";import{d as a,b as m,c as d,u as i}from"./outputWidgets.ed989e0a.js";import{l as c}from"./index.babdaf2d.js";import"./asyncComputed.9f78a6df.js";import"./workspaces.794fe924.js";import"./runnerData.8a85b982.js";import"./url.7656a70f.js";import"./record.f2e811cc.js";import"./pubsub.14278e58.js";import"./scripts.2a788015.js";import"./envVars.8fdda236.js";import"./api.c07ffac3.js";import"./index.cf4c23b9.js";import"./icons.8f8b8d07.js";import"./contracts.generated.ec55d8ec.js";import"./index.881316ff.js";import"./ant-design.91be1275.js";import"./index.b8ad5c16.js";import"./Modal.1ce4fb47.js";import"./Text.8e13d454.js";import"./Base.42a4c5ca.js";import"./Typography.5e43ce25.js";import"./index.bba19135.js";import"./Link.3b52e7a5.js";import"./Paragraph.4678e06b.js";import"./Title.7eb91981.js";import"./index.f09baa6d.js";import"./index.1758cc5b.js";import"./index.134e1f40.js";import"./CollapsePanel.77944909.js";import"./Timeline.8ca23caf.js";import"./index.9a4b372b.js";import"./index.05d8be74.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.9eef8c8c.js";import"./Card.3876795d.js";import"./TabPane.1db82216.js";import"./hasIn.264c6078.js";import"./DownOutlined.75c03941.js";import"./index.677693c4.js";import"./Form.fe660512.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="b9858560-c7db-4f38-a745-e39d3db4196b",t._sentryDebugIdIdentifier="sentry-dbid-b9858560-c7db-4f38-a745-e39d3db4196b")}catch{}})();class f{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const io=a({__name:"WorkflowKanban",setup(t){const o=new s,r=new f,e=new p("kanban");return(b,u)=>(m(),d(n,{"kanban-repository":i(o),storage:i(e),"stage-run-repository":i(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{io as default};
//# sourceMappingURL=WorkflowKanban.4c135e14.js.map
