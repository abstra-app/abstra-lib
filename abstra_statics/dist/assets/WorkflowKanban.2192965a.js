import{K as n,E as p,L as s}from"./repository.1a39e718.js";import{d as a,b as m,c,u as e}from"./outputWidgets.3b5544a6.js";import{l as d}from"./index.a4a25f88.js";import"./asyncComputed.31721c4c.js";import"./api.611c17df.js";import"./index.cf4c23b9.js";import"./icons.df70cc36.js";import"./index.25ca8db5.js";import"./ant-design.4a664065.js";import"./index.7739e2da.js";import"./Modal.91605301.js";import"./Text.4f034af0.js";import"./Base.ed5c11ff.js";import"./Typography.c58b2a2b.js";import"./index.6e4724f1.js";import"./index.66e997e4.js";import"./Paragraph.52c6b305.js";import"./index.538e88f3.js";import"./Link.48d1c15c.js";import"./Title.0af7b814.js";import"./index.2b39020f.js";import"./CollapsePanel.663129d7.js";import"./Form.3820cb93.js";import"./hasIn.98da9760.js";import"./Timeline.5a643a11.js";import"./index.4a5ecbf7.js";import"./index.1b30af45.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.fce94f1c.js";import"./workspaces.926d11e0.js";import"./runnerData.9bb742cb.js";import"./url.ddec584d.js";import"./record.87959be0.js";import"./pubsub.3378c421.js";import"./scripts.d1e8a06a.js";import"./envVars.79594557.js";import"./ExpandOutlined.8caa7636.js";import"./Card.7f5b9670.js";import"./TabPane.98200879.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="d6c8eb95-0b31-4a1f-950d-f702047db6c6",t._sentryDebugIdIdentifier="sentry-dbid-d6c8eb95-0b31-4a1f-950d-f702047db6c6")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const oo=a({__name:"WorkflowKanban",setup(t){const o=new p,r=new f,i=new s("kanban");return(b,u)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{oo as default};
//# sourceMappingURL=WorkflowKanban.2192965a.js.map
