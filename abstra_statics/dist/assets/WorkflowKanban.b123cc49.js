import{K as n,E as a,L as p}from"./repository.46fef0e8.js";import{d as s,b as m,c as d,u as e}from"./outputWidgets.16ea2802.js";import{l as f}from"./index.4c4f5011.js";import"./asyncComputed.47e4eb5e.js";import"./api.69233102.js";import"./index.cf4c23b9.js";import"./icons.ab8b614a.js";import"./index.124f0a07.js";import"./ant-design.cef67a1f.js";import"./index.1d0a03a3.js";import"./Modal.cc91ab2e.js";import"./Text.f1c3ccc8.js";import"./Base.5893a998.js";import"./Typography.1157fa19.js";import"./index.abf95935.js";import"./index.b25dd7bb.js";import"./Paragraph.069ce9fd.js";import"./index.f6a07886.js";import"./Link.0ffd783c.js";import"./Title.3acc75f2.js";import"./index.95e25fbe.js";import"./CollapsePanel.905f74e9.js";import"./Form.8992253c.js";import"./hasIn.4309230e.js";import"./Timeline.da7a26bd.js";import"./index.660b3e74.js";import"./index.afe70fc1.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.412d628c.js";import"./workspaces.b436380b.js";import"./runnerData.21139cb1.js";import"./url.4e0b2dd1.js";import"./record.a44a4b35.js";import"./pubsub.af6aba89.js";import"./scripts.e744daca.js";import"./envVars.ccb1d9ba.js";import"./ExpandOutlined.7e131d5d.js";import"./Card.bcc2cb4a.js";import"./TabPane.a84ab4ec.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="fdabdef8-fa4a-48fd-80e5-e3ef563ad46b",t._sentryDebugIdIdentifier="sentry-dbid-fdabdef8-fa4a-48fd-80e5-e3ef563ad46b")}catch{}})();class c{constructor(o=f){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const oo=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new c,i=new p("kanban");return(u,b)=>(m(),d(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{oo as default};
//# sourceMappingURL=WorkflowKanban.b123cc49.js.map
