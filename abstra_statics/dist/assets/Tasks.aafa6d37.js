import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.263aa8f6.js";import{R as f}from"./tasksController.2bff71cf.js";import{d as _,ea as b,f as y,o as n,Y as g,b as w,w as k,u as c,c as I,S as T,aS as v,aG as B,dd as S}from"./index.b7995d96.js";import"./gateway.29be1816.js";import{a as j,B as x}from"./build.58773a8c.js";import{a as C}from"./project.3fe9fa9d.js";import"./tables.9cd7db30.js";import{a as D}from"./asyncComputed.71112ba4.js";import"./metadata.1d44e57f.js";import"./PhWebhooksLogo.vue.2b8082b0.js";import"./string.d79077da.js";import"./ant-design.30471fcc.js";import"./dayjs.8aef1777.js";import"./index.14c14812.js";import"./polling.87a4b6fa.js";import"./scripts.86bf592a.js";import"./record.18b89437.js";import"./linters.4c806675.js";import"./popupNotifcation.8ba09eed.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="c75c5726-036b-4d51-818c-f86dcafa35de",e._sentryDebugIdIdentifier="sentry-dbid-c75c5726-036b-4d51-818c-f86dcafa35de")}catch{}})();const Q=_({__name:"Tasks",setup(e){const a=b().params.projectId,l=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(u=>u.latest);if(!r)return null;const[d,p]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:d,project:p}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(c(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:c(l),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{Q as default};
//# sourceMappingURL=Tasks.aafa6d37.js.map
