import{C as f}from"./ContentLayout.45cb8d7a.js";import{A as l,K as y,_ as k,E as g}from"./TableView.vue_vue_type_script_setup_true_lang.39aa26fd.js";import{d as _,r as w,b as n,c as i,w as m,L as h,f as s,u as e,ey as b}from"./outputWidgets.7660cc17.js";import{l as v}from"./fetch.ad959dee.js";import{A as d,T}from"./TabPane.163aef06.js";import"./Card.d38ea5fa.js";import"./vuedraggable.umd.699fcd9d.js";import"./workspaces.baf60c4c.js";import"./runnerData.eb1d0692.js";import"./url.f3cfb285.js";import"./record.5dbbae90.js";import"./pubsub.fdbc5b64.js";import"./asyncComputed.bc846f8e.js";import"./scripts.962ef2be.js";import"./envVars.b26e0db9.js";import"./api.0a146dbe.js";import"./metadata.e2d6f138.js";import"./PhCheckCircle.vue.9be9e611.js";import"./PhScroll.vue.e1cbe01b.js";import"./PhWebhooksLogo.vue.b286b655.js";import"./ant-design.6f9da6ee.js";import"./index.dd96bfd1.js";import"./Modal.c7acf323.js";import"./Text.dea16e15.js";import"./Base.a9efca67.js";import"./index.2cec3d85.js";import"./index.43963f81.js";import"./index.ba5a50ff.js";import"./Paragraph.82ed3a6b.js";import"./index.16634d75.js";import"./Link.9be6e019.js";import"./Title.790040cf.js";import"./index.7aef9a60.js";import"./CollapsePanel.049808c9.js";import"./index.6e0d0052.js";import"./index.71d9e4ff.js";import"./isNumeric.75337b1e.js";import"./LoadingOutlined.646c28ba.js";import"./index.0fa7b962.js";import"./Form.baa7f19a.js";import"./hasIn.77da09a2.js";import"./string.594c27d2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="e4223041-bd7e-4b20-bed1-d45df13e8cb3",o._sentryDebugIdIdentifier="sentry-dbid-e4223041-bd7e-4b20-bed1-d45df13e8cb3")}catch{}})();class K{constructor(t=v){this.fetch=t}async fork(t){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t}),headers:{"Content-Type":"application/json"}})).json()}}const ft=_({__name:"WorkflowThreads",setup(o){const t=new g,a=new K,c=new h(l,"kanban-selected-stages"),r=w("kanban");return(S,p)=>(n(),i(f,{"full-width":""},{default:m(()=>[s(e(T),{activeKey:r.value,"onUpdate:activeKey":p[0]||(p[0]=u=>r.value=u)},{default:m(()=>[s(e(d),{key:"kanban",tab:"Kanban View"}),s(e(d),{key:"table",tab:"Table View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(n(),i(y,{key:0,"kanban-repository":e(t),"kanban-stages-storage":e(c),"stage-run-repository":e(a)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):b("",!0),r.value==="table"?(n(),i(k,{key:1,"kanban-repository":e(t)},null,8,["kanban-repository"])):b("",!0)]),_:1}))}});export{ft as default};
//# sourceMappingURL=WorkflowThreads.2d8b445b.js.map
