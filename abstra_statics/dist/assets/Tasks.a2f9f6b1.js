import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.dd1275a7.js";import{R as f}from"./tasksController.ffa852fb.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,dd as S}from"./index.c80219e2.js";import"./gateway.d74797a6.js";import{a as j,B as x}from"./build.766e8d83.js";import{a as C}from"./project.01a9d9b4.js";import"./tables.7744c0bb.js";import{a as D}from"./asyncComputed.322c7f8f.js";import"./metadata.13452202.js";import"./PhRobot.vue.1294b24e.js";import"./PhWebhooksLogo.vue.2bc7807a.js";import"./ant-design.a9be0f0e.js";import"./string.1ce9e791.js";import"./dayjs.38e06176.js";import"./index.a2434e5b.js";import"./scripts.32a6a4e4.js";import"./record.6fe21dfd.js";import"./linters.ac1440dd.js";import"./polling.692abe98.js";import"./popupNotifcation.da4ba7a0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="5e6c33ac-891f-4ee5-bb2d-7727b14561b2",e._sentryDebugIdIdentifier="sentry-dbid-5e6c33ac-891f-4ee5-bb2d-7727b14561b2")}catch{}})();const U=b({__name:"Tasks",setup(e){const a=_().params.projectId,p=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(d=>d.latest);if(!r)return null;const[u,c]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:u,project:c}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(p),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{U as default};
//# sourceMappingURL=Tasks.a2f9f6b1.js.map
