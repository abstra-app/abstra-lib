import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.83419220.js";import{R as f}from"./tasksController.c85399cf.js";import{d as _,ea as y,f as g,o as n,Y as b,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,df as S}from"./index.d4880c83.js";import"./gateway.a0d137e9.js";import{a as j,B as x}from"./build.bb850ef2.js";import{a as C}from"./project.727ef932.js";import"./tables.d7ee83bc.js";import{a as D}from"./asyncComputed.ab04ecab.js";import"./metadata.67ea2850.js";import"./PhWebhooksLogo.vue.3446eab7.js";import"./string.cc8cb5c6.js";import"./ant-design.bda2eb6f.js";import"./dayjs.b1e9d9db.js";import"./index.b36f6da6.js";import"./polling.2a2dea6b.js";import"./scripts.3a8482b1.js";import"./record.e19ad39a.js";import"./linters.d8b36cb9.js";import"./popupNotifcation.cffcf392.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3975afe8-d08e-4c84-8356-df7569d9744e",e._sentryDebugIdIdentifier="sentry-dbid-3975afe8-d08e-4c84-8356-df7569d9744e")}catch{}})();const Q=_({__name:"Tasks",setup(e){const a=y().params.projectId,d=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(c=>c.latest);if(!r)return null;const[p,u]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:p,project:u}}),i=g(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),b(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(d),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{Q as default};
//# sourceMappingURL=Tasks.d4262179.js.map
