import{K as n,L as p}from"./repository.2016d90c.js";import{E as s}from"./repository.5ea61edf.js";import{d as a,b as m,c,u as i}from"./outputWidgets.33535317.js";import{l as d}from"./index.b50f735b.js";import"./asyncComputed.eceaf3f4.js";import"./workspaces.a9416c96.js";import"./runnerData.613205a3.js";import"./url.807a6d7f.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./scripts.371b19a2.js";import"./envVars.187204be.js";import"./api.2b20d181.js";import"./index.cf4c23b9.js";import"./icons.3c082a53.js";import"./contracts.generated.b377c07b.js";import"./index.aaedd1ff.js";import"./ant-design.c6c2096e.js";import"./index.2a50b107.js";import"./Modal.40f2d981.js";import"./Text.0d020666.js";import"./Base.abc79167.js";import"./Typography.6c9836cc.js";import"./index.6da88d31.js";import"./Link.429288d8.js";import"./Paragraph.e5c0c444.js";import"./Title.55e2ce15.js";import"./index.dd98bcf9.js";import"./index.25e3d10b.js";import"./index.5918e5b2.js";import"./CollapsePanel.c4602a20.js";import"./Timeline.7d153589.js";import"./index.6172c911.js";import"./index.ebbfb965.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.487240eb.js";import"./Card.684f0b2a.js";import"./TabPane.47885a07.js";import"./hasIn.0dff4f2d.js";import"./vuedraggable.umd.c36d8218.js";import"./index.b07f664a.js";import"./Form.bb02d3a3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="902fc051-d057-4bdf-9092-35ba36b75415",t._sentryDebugIdIdentifier="sentry-dbid-902fc051-d057-4bdf-9092-35ba36b75415")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const io=a({__name:"WorkflowKanban",setup(t){const o=new s,r=new f,e=new p("kanban");return(b,u)=>(m(),c(n,{"kanban-repository":i(o),storage:i(e),"stage-run-repository":i(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{io as default};
//# sourceMappingURL=WorkflowKanban.3669af87.js.map
