import{K as n,L as p}from"./repository.94810279.js";import{E as a}from"./repository.3f2c7766.js";import{d as s,b as m,c as f,u as i}from"./outputWidgets.a0d0265d.js";import{l as c}from"./index.1b98b992.js";import"./asyncComputed.dc0c45ed.js";import"./workspaces.e59ba00a.js";import"./runnerData.23b9711e.js";import"./url.75cee938.js";import"./record.a9ba638b.js";import"./pubsub.6ed4a04b.js";import"./scripts.504c75e7.js";import"./envVars.6ca10b57.js";import"./api.c54ca701.js";import"./index.cf4c23b9.js";import"./icons.3e68657a.js";import"./contracts.generated.24c2e83d.js";import"./index.f0ccca2d.js";import"./ant-design.cc063be8.js";import"./index.f602467e.js";import"./Modal.87fe97d8.js";import"./Text.10dcef50.js";import"./Base.abb5fac0.js";import"./Typography.5f990276.js";import"./index.e6f44111.js";import"./Link.228a3a09.js";import"./Paragraph.f000a8fa.js";import"./Title.d260458f.js";import"./index.fc95be7d.js";import"./index.3c08aa96.js";import"./index.5773ca43.js";import"./CollapsePanel.0942084f.js";import"./Timeline.2f0ad8e3.js";import"./index.63d5ea61.js";import"./index.c0c93578.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.45dd75b9.js";import"./Card.7e2c0e0a.js";import"./TabPane.59e706e7.js";import"./hasIn.c9d59175.js";import"./DownOutlined.abdd97da.js";import"./index.8d7fd3ae.js";import"./Form.72a58d24.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="6af4b027-4bab-4824-a5ff-74b8353093a8",t._sentryDebugIdIdentifier="sentry-dbid-6af4b027-4bab-4824-a5ff-74b8353093a8")}catch{}})();class b{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const io=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new b,e=new p("kanban");return(d,u)=>(m(),f(n,{"kanban-repository":i(o),storage:i(e),"stage-run-repository":i(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{io as default};
//# sourceMappingURL=WorkflowKanban.ba9e9028.js.map
