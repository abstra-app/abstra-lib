import{E as y}from"./api.ded2f055.js";import{C as w}from"./ContentLayout.9f7b683a.js";import{d as c,N as g,O as d,e as _,o as e,c as i,w as l,b as n,u as o,S as s}from"./index.5cd951eb.js";import{K as v,_ as K,W as E,E as R,a as T}from"./WorkflowView.7f76a467.js";import{A as p,T as V}from"./TabPane.04fddb51.js";import"./fetch.dc2c7ca9.js";import"./metadata.e1eb433a.js";import"./PhBug.vue.3908bf68.js";import"./PhCheckCircle.vue.8f8d6dfc.js";import"./PhKanban.vue.27e77a9a.js";import"./PhWebhooksLogo.vue.a3919e83.js";import"./polling.acd504cf.js";import"./asyncComputed.b4c4f2d5.js";import"./PhQuestion.vue.daa7e75d.js";import"./ant-design.157f76ca.js";import"./index.9573dd15.js";import"./index.da13df1d.js";import"./index.c283b62d.js";import"./CollapsePanel.8fabf369.js";import"./index.64e68d54.js";import"./index.c9c0df20.js";import"./Badge.38793a0a.js";import"./PhArrowCounterClockwise.vue.f6c514cc.js";import"./Workflow.157e254c.js";import"./validations.390efaa6.js";import"./string.37899e93.js";import"./uuid.07247395.js";import"./index.b36efed0.js";import"./workspaces.79da051f.js";import"./workspaceStore.8ff40b1c.js";import"./url.b99efb5c.js";import"./colorHelpers.002c93d3.js";import"./record.63d5d536.js";import"./index.a3662bad.js";import"./PhArrowDown.vue.33dfe3cc.js";import"./Card.73483878.js";import"./LoadingOutlined.219ac067.js";import"./DeleteOutlined.75cb1456.js";import"./PhDownloadSimple.vue.914efbf7.js";import"./utils.ff09e545.js";import"./LoadingContainer.809fd054.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="aaad96a9-86db-4430-8a5b-be28fb5dd970",a._sentryDebugIdIdentifier="sentry-dbid-aaad96a9-86db-4430-8a5b-be28fb5dd970")}catch{}})();const yo=c({__name:"WorkflowThreads",setup(a){const t=new R,m=new T,f=new g(d.array(d.string()),"kanban-selected-stages"),u=new y,r=_("kanban");return(W,b)=>(e(),i(w,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:r.value,"onUpdate:activeKey":b[0]||(b[0]=k=>r.value=k)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(e(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(f),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),r.value==="table"?(e(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),r.value==="workflow"?(e(),i(E,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.d9746042.js.map
