import{C as f}from"./ContentLayout.b2d261e0.js";import{A as l,K as y,_ as k,E as g}from"./TableView.vue_vue_type_script_setup_true_lang.38e4b447.js";import{d as _,r as w,b as n,c as i,w as m,L as h,f as s,u as e,ey as d}from"./outputWidgets.2a8d4115.js";import{l as v}from"./fetch.d8873547.js";import{A as c,T}from"./TabPane.995b8310.js";import"./vuedraggable.umd.4b95f0d1.js";import"./workspaces.4f62beff.js";import"./runnerData.dacad7ca.js";import"./url.763caa39.js";import"./record.679e3980.js";import"./pubsub.0fb15bfb.js";import"./asyncComputed.f99f613d.js";import"./scripts.ef835043.js";import"./envVars.917be9ad.js";import"./api.6676fe86.js";import"./metadata.38499612.js";import"./PhCheckCircle.vue.8bd3515e.js";import"./PhScroll.vue.39123de0.js";import"./PhWebhooksLogo.vue.04fa4fbb.js";import"./ant-design.8e8bc567.js";import"./index.bf36ffb0.js";import"./Modal.a8ea88fe.js";import"./Text.7e7d0bab.js";import"./Base.c2a40507.js";import"./index.77eb82a8.js";import"./index.4012165d.js";import"./index.ffa2f3ad.js";import"./Paragraph.b4c72f59.js";import"./index.dc4e5b8c.js";import"./Link.e01a21f6.js";import"./Title.c4791b3d.js";import"./index.b38acc96.js";import"./CollapsePanel.3d1c7d19.js";import"./index.60f4cbc5.js";import"./index.26402ba5.js";import"./isNumeric.75337b1e.js";import"./Card.c8a828b5.js";import"./LoadingOutlined.67d94015.js";import"./index.59361a61.js";import"./Form.9835d0f4.js";import"./hasIn.db7e625a.js";import"./string.5dac1f7d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="ce8a02ce-09e6-43db-a20e-46ed461d0f48",o._sentryDebugIdIdentifier="sentry-dbid-ce8a02ce-09e6-43db-a20e-46ed461d0f48")}catch{}})();class K{constructor(t=v){this.fetch=t}async fork(t){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t}),headers:{"Content-Type":"application/json"}})).json()}}const ft=_({__name:"WorkflowThreads",setup(o){const t=new g,r=new K,b=new h(l,"kanban-selected-stages"),a=w("kanban");return(S,p)=>(n(),i(f,{"full-width":""},{default:m(()=>[s(e(T),{activeKey:a.value,"onUpdate:activeKey":p[0]||(p[0]=u=>a.value=u)},{default:m(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(n(),i(y,{key:0,"kanban-repository":e(t),"kanban-stages-storage":e(b),"stage-run-repository":e(r)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):d("",!0),a.value==="table"?(n(),i(k,{key:1,"kanban-repository":e(t)},null,8,["kanban-repository"])):d("",!0)]),_:1}))}});export{ft as default};
//# sourceMappingURL=WorkflowThreads.9f5fad1c.js.map
