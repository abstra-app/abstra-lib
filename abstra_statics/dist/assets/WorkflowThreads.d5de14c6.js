import{C as c}from"./ContentLayout.036577d6.js";import{A as l,K as y,_ as k,E as g}from"./TableView.vue_vue_type_script_setup_true_lang.618889bd.js";import{d as _,r as w,b as n,c as i,w as m,L as h,f as s,u as e,ex as f}from"./outputWidgets.1a4ea7e5.js";import{l as v}from"./fetch.7f3b3794.js";import{A as b,T}from"./TabPane.df44a9ef.js";import"./Card.7c52b851.js";import"./vuedraggable.umd.0a0f90a1.js";import"./workspaces.48f1ca56.js";import"./runnerData.011ad49d.js";import"./url.b10936df.js";import"./record.b1513995.js";import"./pubsub.c2d46080.js";import"./asyncComputed.34060e31.js";import"./scripts.a285ff08.js";import"./envVars.0e185991.js";import"./api.7ec2289a.js";import"./metadata.2b40b90f.js";import"./PhCheckCircle.vue.f3cec8f6.js";import"./PhScroll.vue.e7641362.js";import"./PhWebhooksLogo.vue.bc3c090a.js";import"./ant-design.9fdda40e.js";import"./index.078a7f53.js";import"./Modal.19b3792b.js";import"./Text.7f5615cf.js";import"./index.32945746.js";import"./index.3c83c361.js";import"./index.c5ef6038.js";import"./Paragraph.d8a08445.js";import"./index.2579bcd6.js";import"./Link.579fcdc8.js";import"./Title.2c97cb50.js";import"./index.67a7011d.js";import"./CollapsePanel.bb6cf075.js";import"./index.d6ad30fa.js";import"./index.69ba744e.js";import"./isNumeric.75337b1e.js";import"./LoadingOutlined.4300461b.js";import"./index.bcd4876d.js";import"./Form.b842a711.js";import"./hasIn.7c90ac7a.js";import"./string.85e4754a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="58153eff-8a23-495f-89b6-61900741747d",o._sentryDebugIdIdentifier="sentry-dbid-58153eff-8a23-495f-89b6-61900741747d")}catch{}})();class K{constructor(t=v){this.fetch=t}async fork(t){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t}),headers:{"Content-Type":"application/json"}})).json()}}const ut=_({__name:"WorkflowThreads",setup(o){const t=new g,a=new K,d=new h(l,"kanban-selected-stages"),r=w("kanban");return(S,p)=>(n(),i(c,{"full-width":""},{default:m(()=>[s(e(T),{activeKey:r.value,"onUpdate:activeKey":p[0]||(p[0]=u=>r.value=u)},{default:m(()=>[s(e(b),{key:"kanban",tab:"Kanban View"}),s(e(b),{key:"table",tab:"Table View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(n(),i(y,{key:0,"kanban-repository":e(t),"kanban-stages-storage":e(d),"stage-run-repository":e(a)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):f("",!0),r.value==="table"?(n(),i(k,{key:1,"kanban-repository":e(t)},null,8,["kanban-repository"])):f("",!0)]),_:1}))}});export{ut as default};
//# sourceMappingURL=WorkflowThreads.d5de14c6.js.map
