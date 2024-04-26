import{C as f}from"./ContentLayout.f1510296.js";import{A as l,K as y,_ as k,E as g}from"./TableView.vue_vue_type_script_setup_true_lang.e8a620be.js";import{d as _,r as w,b as n,c as i,w as m,L as h,f as s,u as e,ey as c}from"./outputWidgets.d3e274ec.js";import{l as v}from"./fetch.01fa431f.js";import{A as d,T}from"./TabPane.b520dbf2.js";import"./Card.64283126.js";import"./vuedraggable.umd.44f39877.js";import"./workspaces.99c0fac8.js";import"./runnerData.77e3ac6e.js";import"./url.8659f70c.js";import"./record.ac6e85da.js";import"./pubsub.77c626ec.js";import"./asyncComputed.c6dc3ac8.js";import"./scripts.11dd9fa2.js";import"./envVars.51aee717.js";import"./api.4a14e3c1.js";import"./metadata.be63058f.js";import"./PhCheckCircle.vue.50b2dbac.js";import"./PhScroll.vue.57aa2487.js";import"./PhWebhooksLogo.vue.8c477134.js";import"./ant-design.182f9d95.js";import"./index.b85f8480.js";import"./Modal.dc70014c.js";import"./Text.32f5ea18.js";import"./Base.b093b7ab.js";import"./index.537436c0.js";import"./index.a0c6c496.js";import"./index.60e7b49a.js";import"./Paragraph.146dda02.js";import"./index.94721d7f.js";import"./Link.d90e3f65.js";import"./Title.c9e7a87e.js";import"./index.e750fa0d.js";import"./CollapsePanel.9391ca15.js";import"./index.f723e25b.js";import"./index.c034a7d7.js";import"./isNumeric.75337b1e.js";import"./LoadingOutlined.9068f895.js";import"./index.a0187d62.js";import"./Form.dba024a8.js";import"./hasIn.bec87135.js";import"./string.3d5e305c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9407c336-c158-4f60-9190-2c5341d4e185",o._sentryDebugIdIdentifier="sentry-dbid-9407c336-c158-4f60-9190-2c5341d4e185")}catch{}})();class K{constructor(t=v){this.fetch=t}async fork(t){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t}),headers:{"Content-Type":"application/json"}})).json()}}const ft=_({__name:"WorkflowThreads",setup(o){const t=new g,a=new K,u=new h(l,"kanban-selected-stages"),r=w("kanban");return(S,p)=>(n(),i(f,{"full-width":""},{default:m(()=>[s(e(T),{activeKey:r.value,"onUpdate:activeKey":p[0]||(p[0]=b=>r.value=b)},{default:m(()=>[s(e(d),{key:"kanban",tab:"Kanban View"}),s(e(d),{key:"table",tab:"Table View"})]),_:1},8,["activeKey"]),r.value==="kanban"?(n(),i(y,{key:0,"kanban-repository":e(t),"kanban-stages-storage":e(u),"stage-run-repository":e(a)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):c("",!0),r.value==="table"?(n(),i(k,{key:1,"kanban-repository":e(t)},null,8,["kanban-repository"])):c("",!0)]),_:1}))}});export{ft as default};
//# sourceMappingURL=WorkflowThreads.f09b660b.js.map
