import{K as n,E as p,L as a}from"./repository.973a6765.js";import{d as s,b as m,c,u as e}from"./outputWidgets.eba7fd6d.js";import{l as d}from"./index.af52eb2a.js";import"./asyncComputed.d84c8a23.js";import"./api.5d2ca8c4.js";import"./index.cf4c23b9.js";import"./icons.0a5ddaa6.js";import"./index.7e1b0d07.js";import"./ant-design.ef039780.js";import"./index.b7c5a0d3.js";import"./Modal.682382a8.js";import"./Text.d7e01cac.js";import"./Base.f3fc76d5.js";import"./Typography.41ff1dd0.js";import"./index.d3764a90.js";import"./index.1087ff6f.js";import"./Paragraph.61cbc45a.js";import"./index.3c32225b.js";import"./Link.7a3b3b6f.js";import"./Title.a13bf1c9.js";import"./index.8c6f81cb.js";import"./CollapsePanel.15d6ccd3.js";import"./Form.db59b1d8.js";import"./hasIn.017aa15f.js";import"./Timeline.e05b2e40.js";import"./index.3be166be.js";import"./index.508d0ee1.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.40208335.js";import"./workspaces.d6b56261.js";import"./runnerData.06100aaf.js";import"./url.09bbafdb.js";import"./record.d2906049.js";import"./pubsub.af0b43dd.js";import"./scripts.748c198e.js";import"./envVars.1171990a.js";import"./ExpandOutlined.cdc3bbca.js";import"./Card.eb6cecaa.js";import"./TabPane.89962a36.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="1837e29b-6c8a-41e6-8cb6-254a13115c0f",t._sentryDebugIdIdentifier="sentry-dbid-1837e29b-6c8a-41e6-8cb6-254a13115c0f")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const oo=s({__name:"WorkflowKanban",setup(t){const o=new p,r=new f,i=new a("kanban");return(u,b)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{oo as default};
//# sourceMappingURL=WorkflowKanban.a2f1951d.js.map
