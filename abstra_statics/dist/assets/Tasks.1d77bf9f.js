import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.eaa89d3a.js";import{R as f}from"./tasksController.7823d02a.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as d,c as I,S as T,aS as v,aG as B,dd as S}from"./index.aae55199.js";import"./gateway.a06bc576.js";import{a as j,B as x}from"./build.f7cfd8d2.js";import{a as C}from"./project.6a1f6932.js";import"./tables.1ff1e550.js";import{a as D}from"./asyncComputed.134e912f.js";import"./metadata.58eef517.js";import"./PhRobot.vue.a40e8391.js";import"./PhWebhooksLogo.vue.35701dd2.js";import"./ant-design.67767174.js";import"./string.b2c7262c.js";import"./dayjs.9b43668c.js";import"./index.796ce9c7.js";import"./linters.c4f85ae8.js";import"./scripts.e772d8a0.js";import"./record.26b8388b.js";import"./polling.0f410167.js";import"./popupNotifcation.bfa75adc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="54b04bfd-073d-428f-a7a1-3b410376db2d",e._sentryDebugIdIdentifier="sentry-dbid-54b04bfd-073d-428f-a7a1-3b410376db2d")}catch{}})();const U=b({__name:"Tasks",setup(e){const a=_().params.projectId,l=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(c=>c.latest);if(!r)return null;const[p,u]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:p,project:u}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(d(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:d(l),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{U as default};
//# sourceMappingURL=Tasks.1d77bf9f.js.map
