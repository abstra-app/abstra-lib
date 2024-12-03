import{P as k}from"./api.5b2a19a3.js";import{b as _}from"./workspaceStore.c9fb70b2.js";import{d as w,N as g,O as b,e as v,o as r,Y as h,b as s,w as T,u as e,c as p,S as m,a0 as K}from"./index.9c0d5b6e.js";import{K as S,_ as I,W as P,P as R,b as V}from"./WorkflowView.e9f9bbde.js";import{A as c,T as x}from"./TabPane.dee15272.js";import"./Card.de200f7b.js";import"./fetch.cd09a28e.js";import"./metadata.2d6361be.js";import"./PhBug.vue.080ed74c.js";import"./PhCheckCircle.vue.5b8ab061.js";import"./PhKanban.vue.cd873a5b.js";import"./PhWebhooksLogo.vue.1b5eac47.js";import"./url.a481d432.js";import"./colorHelpers.1e537308.js";import"./polling.790e72d6.js";import"./asyncComputed.d2fc155b.js";import"./PhQuestion.vue.ad6c227f.js";import"./ant-design.e9c44c3c.js";import"./index.4e5082a3.js";import"./index.d9ca86b1.js";import"./index.370277bc.js";import"./CollapsePanel.5260ad19.js";import"./index.99b2f092.js";import"./index.6cf06d0b.js";import"./Badge.50567eec.js";import"./PhArrowCounterClockwise.vue.66af42b0.js";import"./Workflow.78d72864.js";import"./validations.9e19bc72.js";import"./string.cc219f98.js";import"./uuid.6b66d6cd.js";import"./index.0661d3d0.js";import"./workspaces.4bfbd02d.js";import"./record.8ad9261d.js";import"./index.305375b7.js";import"./PhArrowDown.vue.0e8ebdd4.js";import"./LoadingOutlined.032b434b.js";import"./DeleteOutlined.2195b5af.js";import"./PhDownloadSimple.vue.00053540.js";import"./utils.15171ad6.js";import"./LoadingContainer.178eab9e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="613bc6fe-27ed-4c21-8652-3f59cacaec2b",t._sentryDebugIdIdentifier="sentry-dbid-613bc6fe-27ed-4c21-8652-3f59cacaec2b")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const a=_().authHeaders,d=new k(a),i=new R(a),u=new V(a),y=new g(b.array(b.string()),"kanban-selected-stages"),o=v("kanban");return(B,l)=>(r(),h("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":l[0]||(l[0]=f=>o.value=f)},{default:T(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(r(),p(S,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(r(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(r(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(d)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d6c18c3e"]]);export{ge as default};
//# sourceMappingURL=Threads.18b54406.js.map
