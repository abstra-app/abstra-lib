import{K as i,E as s,L as a}from"./repository.66719bed.js";import{d as p,b as m,c,u as e}from"./outputWidgets.6e85bcee.js";import{l as d}from"./index.01731d2b.js";import"./ant-design.1935e552.js";import"./index.26532c1a.js";import"./Modal.23898cb6.js";import"./asyncComputed.3f33381d.js";import"./metadata.b918a564.js";import"./icons.a9b6e7be.js";import"./index.fb7f959e.js";import"./index.e881f095.js";import"./Paragraph.c6943545.js";import"./Base.3f7d4919.js";import"./index.64cbd231.js";import"./Link.aca2039b.js";import"./Text.e6eada3a.js";import"./Title.ad44d345.js";import"./index.c56c1fe2.js";import"./index.e71f3899.js";import"./Card.d7f8a52a.js";import"./TabPane.6607fa75.js";import"./hasIn.dcca7708.js";import"./CollapsePanel.fcf33fe0.js";import"./Form.6e39a739.js";import"./FormItem.292de928.js";import"./Timeline.4b8c9032.js";import"./index.aaeed762.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.9e1c74e0.js";import"./index.cf4c23b9.js";import"./scripts.a973cc04.js";import"./record.2ea7bf27.js";import"./pubsub.629d594a.js";import"./ExpandOutlined.bb4f1721.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="50d0d16f-7e92-4197-952d-b4ec4cb5a1e9",t._sentryDebugIdIdentifier="sentry-dbid-50d0d16f-7e92-4197-952d-b4ec4cb5a1e9")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const U=p({__name:"WorkflowKanban",setup(t){const o=new s,r=new f,n=new a("kanban");return(u,b)=>(m(),c(i,{"kanban-repository":e(o),storage:e(n),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{U as default};
//# sourceMappingURL=WorkflowKanban.25e2db58.js.map
