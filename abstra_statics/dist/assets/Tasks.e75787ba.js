import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.611ad5ec.js";import{R as f}from"./tasksController.a4a6a3f5.js";import{d as _,ea as y,f as g,o as n,Y as b,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,dd as S}from"./index.27bc5f51.js";import"./gateway.7f411aca.js";import{a as j,B as x}from"./build.e2b2e8e6.js";import{a as C}from"./project.457476aa.js";import"./tables.1c14b3a4.js";import{a as D}from"./asyncComputed.c32bac68.js";import"./metadata.e2325109.js";import"./PhRobot.vue.572d9e4e.js";import"./PhWebhooksLogo.vue.d2958b7d.js";import"./ant-design.c02a54c9.js";import"./string.85f5394e.js";import"./dayjs.c40f157b.js";import"./index.123b022a.js";import"./linters.8e16ada5.js";import"./scripts.94b11f38.js";import"./record.068b2aa8.js";import"./polling.9858e9ed.js";import"./popupNotifcation.b57c7c96.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="71d0ea20-7150-482f-a001-ae5485263cfe",e._sentryDebugIdIdentifier="sentry-dbid-71d0ea20-7150-482f-a001-ae5485263cfe")}catch{}})();const U=_({__name:"Tasks",setup(e){const a=y().params.projectId,p=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(c=>c.latest);if(!r)return null;const[u,d]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:u,project:d}}),i=g(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),b(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(p),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{U as default};
//# sourceMappingURL=Tasks.e75787ba.js.map
