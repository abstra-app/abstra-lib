import{C as y}from"./ContentLayout.e17b6e2c.js";import{d as c,L as w,N as b,e as g,c as a,w as d,o as n,b as i,u as o,R as s}from"./vue-router.c2ee0e91.js";import{K as _,_ as v,W as K,E as R,a as E}from"./WorkflowView.07eb6888.js";import{E as T}from"./api.529eb0b6.js";import{A as p,T as V}from"./TabPane.e5860f3b.js";import"./fetch.475b59e7.js";import"./linters.bf38dfdd.js";import"./asyncComputed.b8a2ba99.js";import"./scripts.6c53fba0.js";import"./record.7ac8200f.js";import"./metadata.10ba2a1e.js";import"./PhCheckCircle.vue.bb0178d1.js";import"./PhKanban.vue.656d1536.js";import"./PhWebhooksLogo.vue.9bfcff10.js";import"./ant-design.65becd17.js";import"./index.00707700.js";import"./index.98ac79b1.js";import"./index.a2bb5a47.js";import"./index.3cb0d076.js";import"./CollapsePanel.adb7214f.js";import"./index.259224d5.js";import"./index.ae582ac5.js";import"./isNumeric.75337b1e.js";import"./PhArrowCounterClockwise.vue.c61bcf4e.js";import"./model.0675236f.js";import"./workspaces.feaa0e6a.js";import"./runnerData.d87c52fb.js";import"./url.20e63960.js";import"./validations.4234b9de.js";import"./string.187ed685.js";import"./PhArrowSquareOut.vue.11d177ef.js";import"./index.b0e85e58.js";import"./Badge.81cd1c4c.js";import"./index.bb5d55bc.js";import"./Card.9b99e0b9.js";import"./uuid.590c4219.js";import"./LoadingOutlined.26b6eddb.js";import"./DeleteOutlined.dab4140f.js";import"./PhDownloadSimple.vue.82e7dd2e.js";import"./utils.b9b59365.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="699e214d-ec95-4c35-be07-9d9d71416eec",e._sentryDebugIdIdentifier="sentry-dbid-699e214d-ec95-4c35-be07-9d9d71416eec")}catch{}})();const ko=c({__name:"WorkflowThreads",setup(e){const t=new R,m=new E,u=new w(b.array(b.string()),"kanban-selected-stages"),f=new T,r=g("kanban");return(W,l)=>(n(),a(y,{"full-width":""},{default:d(()=>[i(o(V),{activeKey:r.value,"onUpdate:activeKey":l[0]||(l[0]=k=>r.value=k)},{default:d(()=>[i(o(p),{key:"kanban",tab:"Kanban View"}),i(o(p),{key:"table",tab:"Table View"}),i(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(n(),a(_,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(u),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(n(),a(v,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(n(),a(K,{key:2,"kanban-repository":o(t),"workflow-api":o(f)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{ko as default};
//# sourceMappingURL=WorkflowThreads.7eec5fd8.js.map
