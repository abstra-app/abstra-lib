import{E as y}from"./api.1af6e1cb.js";import{C as c}from"./ContentLayout.76885430.js";import{d as w,L as g,N as b,e as _,o as a,c as i,w as l,b as n,u as o,R as s}from"./vue-router.62e6d9fd.js";import{K as v,_ as K,W as R,E,a as T}from"./WorkflowView.9fa71316.js";import{A as p,T as V}from"./TabPane.bdaedb72.js";import"./fetch.1ae1caca.js";import"./metadata.75c59de4.js";import"./PhBug.vue.ed8b505f.js";import"./PhCheckCircle.vue.ddd2981b.js";import"./PhKanban.vue.42f2f3ae.js";import"./PhWebhooksLogo.vue.d6a14e16.js";import"./polling.5fe2da31.js";import"./asyncComputed.f910ef77.js";import"./PhQuestion.vue.9ba6a2b5.js";import"./ant-design.6252369a.js";import"./index.19fb05f4.js";import"./index.a23b27f5.js";import"./index.ddcc8d70.js";import"./CollapsePanel.203fc7b4.js";import"./index.2ffe9f94.js";import"./index.53c096f2.js";import"./Badge.18096063.js";import"./PhArrowCounterClockwise.vue.6d30733a.js";import"./Workflow.ee51d04f.js";import"./validations.5ec37fc8.js";import"./string.37f523b9.js";import"./uuid.71302f07.js";import"./index.357d38bf.js";import"./workspaces.8db93a35.js";import"./workspaceStore.c371b988.js";import"./url.093ddd5e.js";import"./colorHelpers.fb6e5b1a.js";import"./record.ce5e081c.js";import"./index.1848c42a.js";import"./PhArrowDown.vue.8cf5d73d.js";import"./Card.91be2ea0.js";import"./LoadingOutlined.f52ce880.js";import"./DeleteOutlined.1a361c96.js";import"./PhDownloadSimple.vue.76a7cfb2.js";import"./utils.1bdbc369.js";import"./LoadingContainer.21765837.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="b5dc50cf-38d8-435e-b4f1-fc2f1af8fd03",r._sentryDebugIdIdentifier="sentry-dbid-b5dc50cf-38d8-435e-b4f1-fc2f1af8fd03")}catch{}})();const yo=w({__name:"WorkflowThreads",setup(r){const t=new E,m=new T,d=new g(b.array(b.string()),"kanban-selected-stages"),u=new y,e=_("kanban");return(W,f)=>(a(),i(c,{"full-width":""},{default:l(()=>[n(o(V),{activeKey:e.value,"onUpdate:activeKey":f[0]||(f[0]=k=>e.value=k)},{default:l(()=>[n(o(p),{key:"kanban",tab:"Kanban View"}),n(o(p),{key:"table",tab:"Table View"}),n(o(p),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),e.value==="kanban"?(a(),i(v,{key:0,"kanban-repository":o(t),"kanban-stages-storage":o(d),"stage-run-repository":o(m)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):s("",!0),e.value==="table"?(a(),i(K,{key:1,"kanban-repository":o(t)},null,8,["kanban-repository"])):s("",!0),e.value==="workflow"?(a(),i(R,{key:2,"kanban-repository":o(t),"workflow-api":o(u)},null,8,["kanban-repository","workflow-api"])):s("",!0)]),_:1}))}});export{yo as default};
//# sourceMappingURL=WorkflowThreads.4daed90b.js.map
