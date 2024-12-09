import{P as k}from"./api.eaf3dbcb.js";import{b as _}from"./workspaceStore.2d68cc13.js";import{d as w,N as g,O as l,e as v,o as a,Y as h,b as s,w as T,u as e,c as p,S as m,a0 as K}from"./index.8e6956bf.js";import{K as S,_ as I,W as P,P as R,b as V}from"./WorkflowView.92b6348e.js";import{A as c,T as x}from"./TabPane.1889eeb2.js";import"./Card.ca8d0642.js";import"./fetch.395a4555.js";import"./metadata.adb0691e.js";import"./PhBug.vue.8356fee9.js";import"./PhCheckCircle.vue.0e7d44ca.js";import"./PhKanban.vue.35a83a85.js";import"./PhWebhooksLogo.vue.ccb722d7.js";import"./url.d3e72b06.js";import"./colorHelpers.3cdb7990.js";import"./polling.aecebe10.js";import"./asyncComputed.4a020410.js";import"./PhQuestion.vue.340e4aa6.js";import"./ant-design.71c7985c.js";import"./index.00cc798f.js";import"./index.e09bcddb.js";import"./index.8393b352.js";import"./CollapsePanel.41143ecb.js";import"./index.951687f2.js";import"./index.01e4efb6.js";import"./Badge.e2cf8e2c.js";import"./PhArrowCounterClockwise.vue.e1a69c5b.js";import"./Workflow.ffc630ac.js";import"./validations.299cfca0.js";import"./string.204ed19d.js";import"./uuid.93eff31b.js";import"./index.a7141ba1.js";import"./workspaces.75b62e94.js";import"./record.8e84f05f.js";import"./index.bd1aa736.js";import"./PhArrowDown.vue.dd8e3bf9.js";import"./LoadingOutlined.24507afe.js";import"./DeleteOutlined.393ef4bf.js";import"./PhDownloadSimple.vue.44bb74b9.js";import"./utils.18c24a04.js";import"./LoadingContainer.847544e7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="2e551163-4c53-434e-be3d-36f6d2eb3fcd",t._sentryDebugIdIdentifier="sentry-dbid-2e551163-4c53-434e-be3d-36f6d2eb3fcd")}catch{}})();const W={class:"threads-view"},A=w({__name:"Threads",setup(t){const r=_().authHeaders,b=new k(r),i=new R(r),u=new V(r),y=new g(l.array(l.string()),"kanban-selected-stages"),o=v("kanban");return(B,d)=>(a(),h("div",W,[s(e(x),{activeKey:o.value,"onUpdate:activeKey":d[0]||(d[0]=f=>o.value=f)},{default:T(()=>[s(e(c),{key:"kanban",tab:"Kanban View"}),s(e(c),{key:"table",tab:"Table View"}),s(e(c),{key:"workflow",tab:"Workflow View"})]),_:1},8,["activeKey"]),o.value==="kanban"?(a(),p(S,{key:0,"kanban-repository":e(i),"kanban-stages-storage":e(y),"stage-run-repository":e(u)},null,8,["kanban-repository","kanban-stages-storage","stage-run-repository"])):m("",!0),o.value==="table"?(a(),p(I,{key:1,"kanban-repository":e(i)},null,8,["kanban-repository"])):m("",!0),o.value==="workflow"?(a(),p(P,{key:2,"kanban-repository":e(i),"workflow-api":e(b)},null,8,["kanban-repository","workflow-api"])):m("",!0)]))}});const ge=K(A,[["__scopeId","data-v-d6c18c3e"]]);export{ge as default};
//# sourceMappingURL=Threads.92bb17b0.js.map
