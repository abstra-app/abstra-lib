import{K as n,E as p,L as a}from"./repository.8395efb8.js";import{d as s,b as m,c,u as e}from"./outputWidgets.4bc91b91.js";import{l as d}from"./index.d9ec7397.js";import"./asyncComputed.24ea4d03.js";import"./api.5c33c937.js";import"./index.cf4c23b9.js";import"./icons.6f38a654.js";import"./index.7ba9d708.js";import"./ant-design.cc7a7d02.js";import"./index.30c77908.js";import"./Modal.cf870f20.js";import"./Text.3ac90c1e.js";import"./Base.12e8134b.js";import"./Typography.32bd519f.js";import"./index.b7cfb6dc.js";import"./index.9eba70d6.js";import"./Paragraph.584c62c6.js";import"./index.9499df6b.js";import"./Link.8f4fff10.js";import"./Title.f18665bb.js";import"./index.478059fc.js";import"./CollapsePanel.05c12df0.js";import"./Form.96a2797c.js";import"./hasIn.fccf3fec.js";import"./Timeline.93e74a1c.js";import"./index.f6501103.js";import"./index.71195544.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.27470033.js";import"./workspaces.b3f370e7.js";import"./runnerData.fa04009d.js";import"./url.21d989c0.js";import"./record.2f7767a7.js";import"./pubsub.bc48eb76.js";import"./scripts.48cee06e.js";import"./envVars.a784e54a.js";import"./ExpandOutlined.d97f58bc.js";import"./Card.1dfec28b.js";import"./TabPane.121bbc33.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="131327c4-1f6a-4548-a992-8996d9f17fdc",t._sentryDebugIdIdentifier="sentry-dbid-131327c4-1f6a-4548-a992-8996d9f17fdc")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const oo=s({__name:"WorkflowKanban",setup(t){const o=new p,r=new f,i=new a("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{oo as default};
//# sourceMappingURL=WorkflowKanban.e04ce91f.js.map
