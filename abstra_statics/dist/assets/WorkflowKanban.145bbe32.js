import{K as n,L as p}from"./repository.78b31601.js";import{E as a}from"./repository.efd38b2f.js";import{d as s,b as m,c,u as e}from"./outputWidgets.6eb42f16.js";import{l as d}from"./index.cbb96000.js";import"./asyncComputed.706ab9bd.js";import"./workspaces.90f921a9.js";import"./runnerData.34119203.js";import"./url.a23c07df.js";import"./record.d64cbdad.js";import"./pubsub.93b23055.js";import"./scripts.3adaf8ee.js";import"./envVars.63533cc6.js";import"./api.e05206a2.js";import"./index.cf4c23b9.js";import"./icons.a3022b2c.js";import"./contracts.generated.842a5def.js";import"./index.6b4f5d7c.js";import"./ant-design.2abdbaaf.js";import"./index.d4420d6b.js";import"./Modal.8ee684fd.js";import"./Text.db500d81.js";import"./Base.75ec815b.js";import"./Typography.12f99910.js";import"./index.cd529151.js";import"./Link.fe0d887b.js";import"./Paragraph.ca364e37.js";import"./Title.09e4c950.js";import"./index.fe4847f6.js";import"./index.56d243a0.js";import"./index.a44ff3b1.js";import"./CollapsePanel.9542de69.js";import"./Timeline.54e1baef.js";import"./index.7405a791.js";import"./index.7ca43790.js";import"./isNumeric.75337b1e.js";import"./SyncOutlined.d15dafcc.js";import"./ExpandOutlined.06f24744.js";import"./Card.18ef7a62.js";import"./TabPane.4d5d6eb4.js";import"./hasIn.076802f3.js";import"./DownOutlined.7f2d521c.js";import"./index.824ea449.js";import"./Form.28044722.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="7a563c90-5a4a-41dc-895e-b439e0dfc234",t._sentryDebugIdIdentifier="sentry-dbid-7a563c90-5a4a-41dc-895e-b439e0dfc234")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const io=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new f,i=new p("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{io as default};
//# sourceMappingURL=WorkflowKanban.145bbe32.js.map
