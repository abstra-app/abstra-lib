import{C as u}from"./ContentLayout.3539df6a.js";import{A as l,K as y,_ as k,E as g}from"./TableView.vue_vue_type_script_setup_true_lang.356ee7e3.js";import{d as _,r as w,b as n,c as i,w as m,L as h,f as s,u as e,ey as b}from"./outputWidgets.178b2a55.js";import{l as v}from"./fetch.021a7b20.js";import{A as c,T}from"./TabPane.60e33f78.js";import"./vuedraggable.umd.aec0d0d2.js";import"./workspaces.88b6c9f0.js";import"./runnerData.248e96e7.js";import"./url.373bf4cb.js";import"./record.a0723330.js";import"./pubsub.0a09938f.js";import"./asyncComputed.c126220d.js";import"./scripts.0eb97eb4.js";import"./envVars.27c0b8a1.js";import"./api.4d64a4c3.js";import"./metadata.6fe29223.js";import"./PhCheckCircle.vue.7d317382.js";import"./PhScroll.vue.ec6073f2.js";import"./PhWebhooksLogo.vue.c1291c57.js";import"./ant-design.d1c7436f.js";import"./index.2340536c.js";import"./Modal.ad519244.js";import"./Text.28403853.js";import"./Base.72874279.js";import"./index.c69ef513.js";import"./index.807d5bee.js";import"./index.a702179a.js";import"./Paragraph.97342deb.js";import"./index.04340a2d.js";import"./Link.b5752ee0.js";import"./Title.15a8ff17.js";import"./index.9c20ef7e.js";import"./CollapsePanel.02f0593d.js";import"./index.1d66913d.js";import"./index.bffebd8f.js";import"./isNumeric.75337b1e.js";import"./Card.e660f3ae.js";import"./LoadingOutlined.f8cdb6d9.js";import"./index.e93d2f07.js";import"./Form.1efb8f80.js";import"./hasIn.257754e2.js";import"./string.62c37f9c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="09f34d89-e1ac-4ebc-af6b-778bca41f84e",o._sentryDebugIdIdentifier="sentry-dbid-09f34d89-e1ac-4ebc-af6b-778bca41f84e")}catch{}})();class K{constructor(t=v){this.fetch=t}async fork(t){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t}),headers:{"Content-Type":"application/json"}})).json()}}const ut=_({__name:"WorkflowThreads",setup(o){const t=new g,r=new K,f=new h(l,"kanban-selected-stages"),a=w("kanban");return(S,p)=>(n(),i(u,{"full-width":""},{default:m(()=>[s(e(T),{activeKey:a.value,"onUpdate:activeKey":p[0]||(p[0]=d=>a.value=d)},{default:m(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"})]),_:1},8,["activeKey"]),a.value==="kanban"?(n(),i(y,{key:0,"kanban-repository":e(t),"kanban-stages-storage":e(f),"stage-run-repository":e(r)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):b("",!0),a.value==="table"?(n(),i(k,{key:1,"kanban-repository":e(t)},null,8,["kanban-repository"])):b("",!0)]),_:1}))}});export{ut as default};
//# sourceMappingURL=WorkflowThreads.d16cc661.js.map
